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
      <body suppressHydrationWarning  className={`${geistMono.className} ${geistSans.className} antialiased`}>
        <div className="flex min-h-screen">
          <Sidebar/>
          <div className="flex flex-col flex-1">
            <main className="flex-1">{children}</main>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
