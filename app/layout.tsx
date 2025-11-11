import type { Metadata } from "next";

import "./globals.css";
import '@mantine/core/styles.css';

import MasterLayout from "./layout/MasterLayout";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";


export const metadata: Metadata = {
  title: "ThreadUp",
  description: "Clothing Brand",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <MantineProvider theme={theme}>
          <MasterLayout>{children}</MasterLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
