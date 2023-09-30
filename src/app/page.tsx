import Hero from "@/components/Hero/Hero";
import Products from "@/components/Products/Products";
import Service from "@/components/Service/Service";
import Company from "@/components/AboutCompany/Company";

import "./globals.css";

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <Products />
      {/* <Service /> */}
      <Company />
    </div>
  );
}
