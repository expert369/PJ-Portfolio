import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning  className={`${geistMono.className} ${geistSans.className} bg-zinc-950 text-zinc-100 antialiased`}>
        <div className="flex min-h-screen">
          {/* Sidebar — handles its own positioning internally */}
          <Sidebar/>

          {/* Right side */}
          <div className="md:ml-64 flex min-h-screen flex-1 flex-col pb-16 md:pb-0">
            {/* Main */}
            <main className=" bg-black">
              {children}
            </main>

            {/* Footer */}
            <footer className="flex items-center">
              <Footer/>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
