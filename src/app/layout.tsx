import { Inter } from "next/font/google";
import "./globals.css";
import Slider from "@/components/layout/Slider";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "StreamIO",
  description:
    "StreamIO Admin Dashboard: Manage your streaming platform effortlessly with powerful tools for user management, content control, and performance analytics. Streamline operations and ensure a seamless experience for your audience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="relative min-h-screen">
            <Navbar />
            <div className="flex">
              <aside className="fixed top-0 left-0 h-screen w-[15%] md:w-[15%] bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
                <Slider />
              </aside>
              <main className="md:ml-[15%] p-2 md:w-[85%] ml-[15%]">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>

    // .................this for the page layout seperatly
    // <html lang="en">
    //   <body className={`${inter.className} antialiased`}>
    //     <main className=" w-full">{children}</main>
    //   </body>
    // </html>
  );
}
