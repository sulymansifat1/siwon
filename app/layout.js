import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Siwon : Best Selling Products in Amazon!!!",
  description: "Discover curated Amazon finds at Siwon. Elevate your style with quality tech gadgets and fashion essentials. Shop smarter with Siwon. #SiwonFinds #AmazonAffiliate",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
