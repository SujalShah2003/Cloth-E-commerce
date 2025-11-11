import {
  createTheme,
  DEFAULT_THEME,
  type MantineThemeOverride,
  mergeMantineTheme,
} from "@mantine/core";
import { themeColors } from "./colors";

export const themeOverride: MantineThemeOverride = createTheme({
  colors: themeColors,
  primaryColor: "primary",
  primaryShade: 1,
  cursorType: "pointer",
  fontFamily: "Source Sans 3, sans-serif",
  black: "#0f2d5c",
  
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride);
