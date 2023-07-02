import { css } from "@linaria/core";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
};

const body = css``;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={body}>{children}</body>
    </html>
  );
};

export default RootLayout;
