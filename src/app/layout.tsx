import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import { Navigation } from "@modules/shared/components/navigation";
import { Footer } from "@modules/shared/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samuel Cristo da Fonseca - Full Stack Developer Portfolio",
  description: "Explore my professional portfolio showcasing innovative projects, technical expertise, and accomplishments in software development, cloud optimization, and system migration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <AntdRegistry>
        <Navigation/>
        {children}
        <Footer></Footer>
      </AntdRegistry>
      </body>
    </html>
  );
}
