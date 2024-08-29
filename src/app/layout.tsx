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
          <div className="w-full absolute">
            <Navbar />
            <div className="flex flex-1 ">
              <aside className="w-[12%]">
                <Slider />
              </aside>
              <main className=" m-2 w-[87%]">{children}</main>
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
