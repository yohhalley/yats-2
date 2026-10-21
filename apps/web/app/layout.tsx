import type { ReactNode } from "react";

export const metadata = {
  title: "YATS 2.0",
  description: "A browser-based Roman Republic writing RPG",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "Georgia, serif", margin: "2rem" }}>{children}</body>
    </html>
  );
}
