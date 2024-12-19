import localFont from "next/font/local";
import "./globals.scss";

const avenirBold = localFont({
  src: "./fonts/avenir-bold.woff",
  variable: "--font-avenir-bold",
});

const avenirRegular = localFont({
  src: "./fonts/avenir-regular.woff",
  variable: "--font-avenir-regular",
});

export const metadata = {
  title: "Resume",
  description: "Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${avenirBold.variable} ${avenirRegular.variable}`}>
        {children}
      </body>
    </html>
  );
}
