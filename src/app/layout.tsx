//globals css
import "./globals.css";
// font google
import { Inter } from "next/font/google";
// Layout
import Slider from "@/components/layout/Slider";
import Navbar from "@/components/layout/Navbar";
// All Providers
import { ThemeProvider } from "@/components/theme-provider";
import Providers from "./Providers"; // store and Auth sesstion
import { Toaster } from "@/components/ui/toaster"; // notification
const inter = Inter({ subsets: ["latin"] }); // font style
// metadata  for SEO
export const metadata = {
  title: "StreamIO",
  description:
    "StreamIO Admin Dashboard: Manage your streaming platform effortlessly with powerful tools for user management, content control, and performance analytics.",
};
// children type for typeScript
const ClientId = process.env.PAYPAL_CLIENT_ID;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <script src="https://www.paypal.com/sdk/js?client-id=test&currency=USD"></script>
      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning
      >
        <link rel="icon" href="/fav.ico" sizes="any" />
        <Providers>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="relative md:min-h-screen">
              <Navbar />
              <div className="flex">
                <aside className="fixed invisible  md:visible top-0 left-0 h-screen md:w-[15%] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
                  <Slider />
                </aside>
                <main className=" md:p-2 w-full md:w-[85%] md:ml-[15%]">
                  {children}
                </main>
              </div>
            </div>
            <Toaster />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
