import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Color Code Generator",
  description:
    "A Color Code Generator App that helps to genrate hex color codes on a click. Developed By Shivam Abraham by using the react.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="keywords"
          content="shivam abraham, react developer, color code generator, hex color codes"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
