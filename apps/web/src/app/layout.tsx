import "./globals.css";
import "ui/styles.css";
import type { Metadata } from "next";
import { Profile } from 'ui'

export const metadata: Metadata = {
  title: "Mohd Mohsin",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="flex ">
        <header className="w-1/4">
          <Profile className=" w-100 h-100 overflow-hidden rounded-full object-cover"/>
        </header>
        <div className="w-3/4">{children}</div>
      </body>
    </html>
  );
}
