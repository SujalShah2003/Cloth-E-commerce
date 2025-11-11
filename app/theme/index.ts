import {
  createTheme,
  DEFAULT_THEME,
  type MantineThemeOverride,
  mergeMantineTheme,
} from "@mantine/core";
import { themeColors } from "./colors";

export const themeOverride: MantineThemeOverride = createTheme({
  colors: {
    ...DEFAULT_THEME.colors,
    ...themeColors,
  },
  primaryColor: "primary",
  primaryShade: 0,
  cursorType: "pointer",
  black: "#0f2d5c",
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
