"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/navbar";
import Section from "@/components/section";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/section4";
import Section5 from "@/components/section5";
import Section7 from "@/components/Section7";
import Section8 from "@/components/Section8";
import Section9 from "@/components/Section9";
import Footer from "@/components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // const menuItems = [
  //   { name: "Home", href: "/" },
  //   { name: "Features", href: "/features" },
  //   { name: "Pricing", href: "/pricing" },
  //   { name: "Contact", href: "/contact" },
  // ];

  return (
    <>
      <Navbar/>
      {/* HERO SECTION */}
      <Section/>

      {/* PROBLEM/SOLUTION SECTION */}
      <Section2/>

      {/* WIDGET TYPES SHOWCASE */}
      <Section3/>

      {/* FEATURES & BENEFITS */}
      <Section4/>

      {/* CUSTOMIZATION SHOWCASE */}
      <Section5/>

      {/* ANALYTICS & INSIGHTS */}
      <Section7/>

      {/* INTEGRATIONS */}
      <Section8/>

      {/* PRICING */}
      <Section9/>

      {/* FOOTER */}
     <Footer/>
    </>
  );
}
