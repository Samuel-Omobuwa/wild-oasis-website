import Logo from "./_components/Logo";
import "@/app/_styles/globals.css";

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
     <body className="bg-primary-900 text-primary-100 min-h-screen">
     <header>
        <Logo />
      </header>
      <main>{children}</main>
     </body>
    </html>
  );
}
