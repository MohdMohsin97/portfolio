import "./globals.css";
import "ui/styles.css";
import type { Metadata } from "next";
import { Profile , Navbar} from "ui";

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
        <header className="w-1/5 h-screen bg-[#1D3557]">         
            <Profile />
            <Navbar />
        </header>
        <div className="w-4/5">{children}</div>
      </body>
    </html>
  );
}
