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
      <body className="flex">
        <header className="w-1/6 h-screen bg-[#040b14] fixed top-0 left-0 block">         
            <Profile />
            <Navbar />
        </header>
        <div className="w-5/6 absolute top-0 right-0">{children}</div>
      </body>
    </html>
  );
}
