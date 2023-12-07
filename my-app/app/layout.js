import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./components/context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "H2F Documents- National Guard",
  description: "Created by WashU Students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="root" className="bodyWithMargins">
          <ChakraProvider>
            <AuthContextProvider>
              <Navbar />
              {children}
              <Footer />
            </AuthContextProvider>
          </ChakraProvider>
        </div>
      </body>
    </html>
  );
}
