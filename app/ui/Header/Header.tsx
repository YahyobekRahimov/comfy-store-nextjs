import Image from "next/image";
import Container from "../Container";
import Nav from "./Nav";

export default function Header() {
   return (
      <header className="min-h-screen">
         <Container>
            <Nav />
            <Image
               src="https://your-comfy-store.netlify.app/images/logo-white.svg"
               alt="Logo"
               width={131}
               height={78}
            ></Image>
         </Container>
      </header>
   );
}
