"use client";

import "./globals.css";
import "ui/styles.css";
// import type { Metadata } from "next";
import { Header } from "ui";
import { useEffect, useRef } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className="scroll-smooth" lang="en">
      <body>
        <section>
        <Header useEffect={useEffect} useRef={useRef} />
        <div className=" ">{children}</div>
        </section>
      </body>
    </html>
  );
}
