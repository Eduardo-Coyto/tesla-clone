import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tesla-Clone",
  description: "Aplicación de clon de la web de Tesla",
  icon: "https://www.tesla.com/themes/custom/tesla_frontend/assets/favicons/apple-touch-icon-114x114.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
