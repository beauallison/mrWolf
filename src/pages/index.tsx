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
  const [loaded, setLoaded] = useState(false);
  const [home, setHome] = useState();
  const [cities, setCities] = useState();
  const [display24HourTime, setDisplay24HourTime] = useState();
  const [displaySeconds, setDisplaySeconds] = useState();
  const [displayFontSize, setDisplayFontSize] = useState('medium');
  const [colorPrimary, setColorPrimary] = useState('#BB86FC');
  const [colorSecondary, setColorSecondary] = useState('#03DAC6');

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

  const updateDisplayFontSize = async (size: string) => {
    await setDisplayFontSize(size);
    await Storage.saveDisplayFontSize(size);
  };

  const updateColorPrimary = async (color: string) => {
    await setColorPrimary(color);
    await Storage.saveColorPrimary(color);
  };

  const updateColorSecondary = async (color: string) => {
    await setColorSecondary(color);
    await Storage.saveColorSecondary(color);
  };

  useEffect(() => {
    async function load() {
      if (loaded) return;
      const result = await Storage.getAll();
      const {
        KEY_HOME,
        KEY_CITIES,
        KEY_DISPLAY_24HR_TIME,
        KEY_DISPLAY_SECONDS,
        KEY_DISPLAY_FONT_SIZE,
        KEY_COLOR_PRIMARY,
        KEY_COLOR_SECONDARY,
      } = result;

      KEY_HOME && (await setHome(KEY_HOME));
      KEY_CITIES && (await setCities(KEY_CITIES));
      KEY_DISPLAY_24HR_TIME && (await setDisplay24HourTime(KEY_DISPLAY_24HR_TIME));
      KEY_DISPLAY_SECONDS && (await setDisplaySeconds(KEY_DISPLAY_SECONDS));
      KEY_DISPLAY_FONT_SIZE && (await setDisplayFontSize(KEY_DISPLAY_FONT_SIZE));
      KEY_COLOR_PRIMARY && (await setColorPrimary(KEY_COLOR_PRIMARY));
      KEY_COLOR_SECONDARY && (await setColorSecondary(KEY_COLOR_SECONDARY));
      await setLoaded(true);
    }

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
              colorPrimary={colorPrimary}
              colorSecondary={colorSecondary}
              updateDisplayFontSize={updateDisplayFontSize}
              updateColorPrimary={updateColorPrimary}
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
