import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import React from "react";
import { Inter } from "next/font/google";
import "../globals.css";
import { metadata } from "../layout";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const inter = Inter({ subsets: ["latin"] });

const Layout: React.FC<AuthLayoutProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Head>
          <link rel="favicon" href="/fav.ico" />
          <meta name={metadata?.title} content={metadata?.description} />
        </Head>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
