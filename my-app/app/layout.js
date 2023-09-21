
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./components/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "H2F Documents- National Guard",
  description: "Created by WashU Students: Sam Nordhus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
