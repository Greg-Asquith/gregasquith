import { Doppio_One as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: "400"
});

export default function Home() {
  return (
    <main className='font-sans'>
      Welcome to gregasquith.com
    </main>
  );
}
