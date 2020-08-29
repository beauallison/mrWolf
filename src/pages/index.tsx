import ReactDOM from 'react-dom';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Main from '../components/Main';
import Welcome from '../components/Welcome';
import Responsive from '../components/Responsive';
import Settings from '../components/Settings';
import Props from './props';

const schema = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  name: 'Mr Wolf',
  url: 'https://mrwolf.app',
  description: 'Sync with friends in multiple timezones',
};

const Index = () => {
  const { state, functions } = Props();
  const {
    loaded,
    home,
    setHome,
    cities,
    setCities,
    display24HourTime,
    displaySeconds,
    displayFontSize,
    colorPalette,
    colorPrimary,
    colorSecondary,
  } = state;
  const {
    load,
    toggleDisplay24HourTime,
    toggleDisplaySeconds,
    updateDisplayFontSize,
    updateColorPalette,
    updateColorPrimary,
    updateColorSecondary,
  } = functions;

  useEffect(() => {
    load();
  }, []);

  return (
    <Layout displayFontSize={displayFontSize} colorPrimary={colorPrimary} colorSecondary={colorSecondary}>
      <Head title={'Mr Wolf'} schema={schema} description={schema.description} />
      {loaded && (
        <>
          <Responsive.Mobile />
          <Responsive.Desktop>
            {home ? (
              <Main home={home} cities={cities} display24HourTime={display24HourTime} displaySeconds={displaySeconds} />
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
              updateDisplayFontSize={updateDisplayFontSize}
              colorPalette={colorPalette}
              updateColorPalette={updateColorPalette}
              colorPrimary={colorPrimary}
              updateColorPrimary={updateColorPrimary}
              colorSecondary={colorSecondary}
              updateColorSecondary={updateColorSecondary}
            />
          </Responsive.Desktop>
        </>
      )}
    </Layout>
  );
};

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Index />, root);
