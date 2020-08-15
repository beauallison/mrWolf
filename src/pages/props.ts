import { useState } from 'react';
import * as Storage from '../storage';
import { colorSchemes } from '../components/theme';

export default () => {
  const [loaded, setLoaded] = useState(false);
  const [home, setHome] = useState();
  const [cities, setCities] = useState();
  const [display24HourTime, setDisplay24HourTime] = useState();
  const [displaySeconds, setDisplaySeconds] = useState();
  const [displayFontSize, setDisplayFontSize] = useState('medium');
  const [colorPalette, setColorPalette] = useState({ value: 'Original', label: 'Original' });
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
    await setColorPalette(customPalette);
  };

  const updateColorSecondary = async (color: string) => {
    await setColorSecondary(color);
    await Storage.saveColorSecondary(color);
    const customPalette = { value: 'Custom', label: 'Custom' };
    await setColorPalette(customPalette);
    await setColorPalette(customPalette);
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
    } = result;

    KEY_HOME && (await setHome(KEY_HOME));
    KEY_CITIES && (await setCities(KEY_CITIES));
    KEY_DISPLAY_24HR_TIME && (await setDisplay24HourTime(KEY_DISPLAY_24HR_TIME));
    KEY_DISPLAY_SECONDS && (await setDisplaySeconds(KEY_DISPLAY_SECONDS));
    KEY_DISPLAY_FONT_SIZE && (await setDisplayFontSize(KEY_DISPLAY_FONT_SIZE));
    KEY_COLOR_PALETTE && (await setColorPalette(KEY_COLOR_PALETTE));
    KEY_COLOR_PRIMARY && (await setColorPrimary(KEY_COLOR_PRIMARY));
    KEY_COLOR_SECONDARY && (await setColorSecondary(KEY_COLOR_SECONDARY));
    await setLoaded(true);
  }

  return {
    state: {
      loaded,
      setLoaded,
      home,
      setHome,
      cities,
      setCities,
      display24HourTime,
      setDisplay24HourTime,
      displaySeconds,
      setDisplaySeconds,
      displayFontSize,
      setDisplayFontSize,
      colorPalette,
      setColorPalette,
      colorPrimary,
      setColorPrimary,
      colorSecondary,
      setColorSecondary,
    },
    functions: {
      load,
      toggleDisplay24HourTime,
      toggleDisplaySeconds,
      updateDisplayFontSize,
      updateColorPalette,
      updateColorPrimary,
      updateColorSecondary,
    },
  };
};
