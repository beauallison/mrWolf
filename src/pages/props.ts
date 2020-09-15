import { useState } from 'react';
import * as Storage from '../storage';
import { colorSchemes } from '../components/theme';
import IChecklist from '../IChecklist';
import Package from '../../package.json';
import Changelog from '../../changelog.json';

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [home, setHome] = useState();
  const [cities, setCities] = useState();
  const [display24HourTime, setDisplay24HourTime] = useState();
  const [displaySeconds, setDisplaySeconds] = useState();
  const [displayFontSize, setDisplayFontSize] = useState(1);
  const [colorPalette, setColorPalette] = useState({ value: 'Original', label: 'Original' });
  const [colorPrimary, setColorPrimary] = useState('#BB86FC');
  const [colorSecondary, setColorSecondary] = useState('#03DAC6');
  const [displayChecklist, setDisplayChecklist] = useState(false);
  const [checklist, setChecklist] = useState([]);
  const [changelogToDisplay, setChangelogToDisplay] = useState();

  const currentVersion = Package.version;

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

  const updateDisplayFontSize = async (size: number) => {
    await setDisplayFontSize(size);
    await Storage.saveDisplayFontSize(size);
  };

  const updateColorPalette = async (palette: {}) => {
    const scheme = colorSchemes.find(({ name }) => name === palette.value);
    if (!scheme) return;
    await setColorPalette(palette);
    await Storage.saveColorPalette(palette);

    await setColorPrimary(scheme.primary);
    await Storage.saveColorPrimary(scheme.primary);

    await setColorSecondary(scheme.secondary);
    await Storage.saveColorSecondary(scheme.secondary);
  };

  const updateColorPrimary = async (color: string) => {
    await setColorPrimary(color);
    await Storage.saveColorPrimary(color);

    const customPalette = { value: 'Custom', label: 'Custom' };
    await setColorPalette(customPalette);
    await Storage.saveColorPalette(customPalette);
  };

  const updateColorSecondary = async (color: string) => {
    await setColorSecondary(color);
    await Storage.saveColorSecondary(color);

    const customPalette = { value: 'Custom', label: 'Custom' };
    await setColorPalette(customPalette);
    await Storage.saveColorPalette(customPalette);
  };

  const toggleDisplayChecklist = async () => {
    const value = !displayChecklist;
    await setDisplayChecklist(value);
    await Storage.saveDisplayChecklist(value);
  };

  const updateChecklist = async (checklist: IChecklist[]) => {
    await setChecklist(checklist);
    await Storage.saveChecklist(checklist);
  };

  const checkVersion = async (version: string, loadedHome: any) => {
    if (version !== currentVersion) {
      await Storage.saveVersion(currentVersion);
      loadedHome && (await setChangelogToDisplay(Changelog));
    }
  };

  async function load() {
    if (loaded) return;
    const result = await Storage.getAll();
    const {
      KEY_HOME,
      KEY_CITIES,
      KEY_DISPLAY_24HR_TIME,
      KEY_DISPLAY_SECONDS,
      KEY_DISPLAY_FONT_SIZE,
      KEY_COLOR_PALETTE,
      KEY_COLOR_PRIMARY,
      KEY_COLOR_SECONDARY,
      KEY_DISPLAY_CHECKLIST,
      KEY_CHECKLIST,
      KEY_VERSION,
    } = result;

    KEY_HOME && (await setHome(KEY_HOME));
    KEY_CITIES && (await setCities(KEY_CITIES));
    KEY_DISPLAY_24HR_TIME && (await setDisplay24HourTime(KEY_DISPLAY_24HR_TIME));
    KEY_DISPLAY_SECONDS && (await setDisplaySeconds(KEY_DISPLAY_SECONDS));
    KEY_DISPLAY_FONT_SIZE && (await setDisplayFontSize(KEY_DISPLAY_FONT_SIZE));
    KEY_COLOR_PALETTE && (await setColorPalette(KEY_COLOR_PALETTE));
    KEY_COLOR_PRIMARY && (await setColorPrimary(KEY_COLOR_PRIMARY));
    KEY_COLOR_SECONDARY && (await setColorSecondary(KEY_COLOR_SECONDARY));
    KEY_DISPLAY_CHECKLIST && (await setDisplayChecklist(KEY_DISPLAY_CHECKLIST));
    KEY_CHECKLIST && (await setChecklist(KEY_CHECKLIST));
    await checkVersion(KEY_VERSION, KEY_HOME);
    await setLoaded(true);
  }

  return {
    state: {
      loaded,
      home,
      setHome,
      cities,
      setCities,
      display24HourTime,
      displaySeconds,
      displayFontSize,
      colorPalette,
      setColorPalette,
      colorPrimary,
      colorSecondary,
      displayChecklist,
      checklist,
      changelogToDisplay,
      currentVersion,
    },
    functions: {
      load,
      toggleDisplay24HourTime,
      toggleDisplaySeconds,
      updateDisplayFontSize,
      updateColorPalette,
      updateColorPrimary,
      updateColorSecondary,
      toggleDisplayChecklist,
      updateChecklist,
      setChangelogToDisplay,
    },
  };
};
