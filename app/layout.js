import { Inter } from "next/font/google";

import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/Navbar";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-SPANN",
  description: "E-commerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <MyNavbar />
      {children}</body>
    </html>
  );
}
