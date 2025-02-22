import { Logo } from "@/public/images";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="text-black mt-9  ">
      <div className="">
        {" "}
        <Link href="/" className="mb-7">
          <Image src={Logo} width={90} height={90} alt="Logo" priority />
        </Link>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className=" text-lg font-medium mb-4"
        >
          &copy; {new Date().getFullYear()} Naija-Tales. All rights reserved.
          Created by Fortune (Iya in Tech)
          <a href="tel:+2348067585444" className="mx-auto">
            📞 Call me
          </a>
        </motion.p>
      </div>
    </footer>
  );
}
