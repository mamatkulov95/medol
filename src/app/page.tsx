import Hero from "@/components/Hero/Hero";
import "./globals.css";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <Products />
    </div>
  );
}
