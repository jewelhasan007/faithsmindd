
import "./globals.css";
import { Titillium_Web  } from "next/font/google";
import NavT from "../components/NavT";
import NavMenu from "../components/NavMenu";
import Foot from "../components/Foot";

export const metadata = {
  title: {
    template: "%s -FAITHSMINDD - Psycological Solutions",
    default: "FAITHSMINDD"
  },
  description: "FAITHSMINDD, Psycological Solutions",
};

const titillium = Titillium_Web({
  weight: ["200", "300", "400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap", // optional but recommended
});

const RootLayout = ({ children }) => {
  return <html lang="en" className={titillium.className} >
    <body className="flex flex-col min-h-screen  max-w-6xl mx-auto  bg-white text-black dark:bg-black dark:text-white" >
<NavT></NavT>
 <NavMenu></NavMenu>
      <main className="flex-1">  {children}</main>
<Foot></Foot>
    </body>
  </html>;
}

export default RootLayout;