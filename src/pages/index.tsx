import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import TimeViewer from '../components/TimeViewer';
import Welcome from '../components/Welcome';
import Responsive from '../components/Responsive';
import Settings from '../components/Settings';
import * as Storage from '../storage';

const schema = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Mr Wolf',
  url: 'https://mrwolf.app',
  description: 'Sync with friends in multiple timezones',
};

const Index = () => {
  const [home, setHome] = useState();
  const [cities, setCities] = useState();
  const [display24HourTime, setDisplay24HourTime] = useState();
  const [displaySeconds, setDisplaySeconds] = useState();

  const toggleDisplay24HourTime = async () => {
    const value = !display24HourTime;
    await setDisplay24HourTime(value);
    await Storage.saveDisplay24HrTime(value);
  };

  const toggleDisplaySeconds = async () => {
    const value = !displaySeconds;
    await setDisplaySeconds(value);
    await Storage.saveDisplaySeconds(value);
  };

  useEffect(async () => {
    const result = await Storage.getAll();
    if (!Array.isArray(result)) return;
    const [savedHome, savedCities, savedDisplay24HrTime, savedDisplaySeconds] = result;
    await setHome(savedHome);
    await setCities(savedCities);
    await setDisplay24HourTime(savedDisplay24HrTime);
    await setDisplaySeconds(savedDisplaySeconds);
  });

  return (
    <Layout>
      <Head title={'Mr Wolf'} schema={schema} description={schema.description} />
      <Responsive.Mobile />
      <Responsive.Desktop>
        {home ? (
          <TimeViewer
            home={home}
            cities={cities}
            display24HourTime={display24HourTime}
            displaySeconds={displaySeconds}
          />
        ) : (
          <Welcome />
        )}
        <Settings
          home={home}
          setHome={setHome}
          cities={cities}
          setCities={setCities}
          display24HourTime={display24HourTime}
          toggleDisplay24HourTime={toggleDisplay24HourTime}
          displaySeconds={displaySeconds}
          toggleDisplaySeconds={toggleDisplaySeconds}
        />
      </Responsive.Desktop>
    </Layout>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Index />, root);
