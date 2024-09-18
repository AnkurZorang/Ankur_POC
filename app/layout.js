import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "E-SPANN",
  description: "E-commerce site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
      <Navbar />
      {children}
      <Footer/></body>
    </html>
  );
}
