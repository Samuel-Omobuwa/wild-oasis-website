import Logo from "./_components/Logo";
import "@/app/_styles/globals.css";

import {Josefin_Sans} from "next/font/google";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap"
})

export const metadata = {
 title: {
  templete: "%s / The Wild Oasis",
  default: "Welcome / The Wild Oasis",
 },
 description: "Luxurious cabin hotel, local in the heart of the Italian Doomites, surround by beautiful mountains and dark forests"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className={`${josefin.className} antialiased bg-primary-900 text-primary-100 min-h-screen flex flex-col`}>
      <Header />
      <div className="flex-1 px-8 py-12 grid">
      <main className="max-w-7xl mx-auto w-full">{children}</main>
      </div>
      
     </body>
    </html>
  );
}
