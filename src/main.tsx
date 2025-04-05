import {
  MantineProvider,
  createTheme,
  MantineColorsTuple,
} from "@mantine/core";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Notifications } from '@mantine/notifications';

import "@mantine/core/styles.css";
import '@mantine/notifications/styles.css';
import '@mantine/carousel/styles.css';
import './main.css'

const secondary: MantineColorsTuple = [
  "#f7f3f2",
  "#e8e6e5",
  "#d2c9c6",
  "#bdaaa4",
  "#ab9087",
  "#a17f74",
  "#9d766a",
  "#896459",
  "#7b594e",
  "#6d4b40",
];

const primary: MantineColorsTuple = [
  "#e1f8ff",
  "#cbedff",
  "#9ad7ff",
  "#64c1ff",
  "#3aaefe",
  "#20a2fe",
  "#099cff",
  "#0088e4",
  "#0079cd",
  "#0068b6",
];



createRoot(document.getElementById("root")!).render(
  <MantineProvider
    theme={createTheme({
      colors: {
        primary,
        secondary,
      },
      primaryColor: "primary",
      primaryShade: { light: 9, dark: 9 },
      autoContrast: true,
    })}
  >
    <Notifications />
    <App />
  </MantineProvider>
);
