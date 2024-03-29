import { createRoot } from 'react-dom/client';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';
import Main from '../components/Main';
import Welcome from '../components/Welcome';
import Responsive from '../components/Responsive';
import Settings from '../components/Settings';
import NewVersion from '../components/NewVersion';
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
    displayPeriod,
    displayFontSize,
    colorPalette,
    colorPrimary,
    colorSecondary,
    displayChecklist,
    checklist,
    changelogToDisplay,
    currentVersion,
  } = state;
  const {
    load,
    toggleDisplay24HourTime,
    toggleDisplaySeconds,
    toggleDisplayPeriod,
    updateDisplayFontSize,
    updateColorPalette,
    updateColorPrimary,
    updateColorSecondary,
    toggleDisplayChecklist,
    updateChecklist,
    setChangelogToDisplay,
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
              <>
                <Main
                  home={home}
                  cities={cities}
                  display24HourTime={display24HourTime}
                  displaySeconds={displaySeconds}
                  displayPeriod={displayPeriod}
                  displayChecklist={displayChecklist}
                  checklist={checklist}
                  updateChecklist={updateChecklist}
                />
                {changelogToDisplay && (
                  <NewVersion
                    changelogToDisplay={changelogToDisplay}
                    currentVersion={currentVersion}
                    setChangelogToDisplay={setChangelogToDisplay}
                  />
                )}
              </>
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
              displayPeriod={displayPeriod}
              toggleDisplayPeriod={toggleDisplayPeriod}
              displayFontSize={displayFontSize}
              updateDisplayFontSize={updateDisplayFontSize}
              colorPalette={colorPalette}
              updateColorPalette={updateColorPalette}
              colorPrimary={colorPrimary}
              updateColorPrimary={updateColorPrimary}
              colorSecondary={colorSecondary}
              updateColorSecondary={updateColorSecondary}
              displayChecklist={displayChecklist}
              toggleDisplayChecklist={toggleDisplayChecklist}
              currentVersion={currentVersion}
            />
          </Responsive.Desktop>
        </>
      )}
    </Layout>
  );
};

const container = document.createElement('div');
document.body.appendChild(container);

const root = createRoot(container);
root.render(<Index />);
