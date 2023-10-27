
import Navbar from "./components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "./components/context/AuthContext";
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "H2F Documents- National Guard",
  description: "Created by WashU Students",
};

export default function RootLayout({ children }) {
  return (
    <ChakraProvider>
      <html lang="en">
        <body className={inter.className}>
          <div id="root" class="bodyWithMargins">
            <AuthContextProvider>
              <Navbar />
              {children}
            </AuthContextProvider>
          </div>
        </body>
      </html>
    </ChakraProvider>
  );
}
