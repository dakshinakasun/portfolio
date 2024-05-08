import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dakshina Kasun Portfolio",
  description: "The best animated portfolio page for kasun",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
