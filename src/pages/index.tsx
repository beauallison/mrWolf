import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import TimeViewer from '../components/TimeViewer';
import Settings from '../components/Settings';
import * as LocalStorage from '../localStorage';

const schema = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Mr Wolf',
  url: 'https://mrwolf.app',
  description: 'Sync with friends in multiple timezones',
};

const Index = () => {
  const savedHome = LocalStorage.retrieveHome();
  const savedCities = LocalStorage.retrieveCities();
  const savedDisplay24HrTime = LocalStorage.retrieveDisplay24HrTime();
  const savedDisplaySeconds = LocalStorage.retrieveDisplaySeconds();

  const [home, setHome] = useState(savedHome);
  const [cities, setCities] = useState(savedCities || []);
  const [display24HrTime, setDisplay24HrTime] = useState(savedDisplay24HrTime || true);
  const [displaySeconds, setDisplaySeconds] = useState(savedDisplaySeconds || true);

  return (
    <Layout>
      <Head title={'Mr Wolf'} schema={schema} description={schema.description} />
      {home && <TimeViewer home={home} cities={cities} />}
      <Settings
        home={home}
        setHome={setHome}
        cities={cities}
        setCities={setCities}
        display24HrTime={display24HrTime}
        setDisplay24HourTime={setDisplay24HrTime}
        displaySeconds={displaySeconds}
        setDisplaySeconds={setDisplaySeconds}
      />
    </Layout>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Index />, root);
