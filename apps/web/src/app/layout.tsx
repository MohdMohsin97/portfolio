import "./globals.css";
import "ui/styles.css";
import type { Metadata } from "next";
import { Header } from "ui";

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
    <html className="scroll-smooth" lang="en">
      <body>
        <Header />
        <div className=" ">{children}</div>
      </body>
    </html>
  );
}
