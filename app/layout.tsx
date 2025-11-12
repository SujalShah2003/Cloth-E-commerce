import type { Metadata } from "next";

import "./globals.css";
import "@mantine/core/styles.css";

import MasterLayout from "./layout/MasterLayout";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { Toaster } from "sonner";

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
          <MasterLayout>
            <Toaster richColors position="bottom-right" />
            {children}
          </MasterLayout>
        </MantineProvider>
      </body>
    </html>
  );
}
