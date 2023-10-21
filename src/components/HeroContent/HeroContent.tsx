"use client";

import { useState } from "react";
import Image from "next/image";

import data from "../../../public/assets/data.json";
import styles from "./HeroContent.module.scss";
import Button from "../Button/Button";

export default function HeroContent() {
  const { heroSlider } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div id="magazine" className={styles.heroContent}>
      {heroSlider.map(({ productName, productDesc, productImg }, index) => (
        <div
          className="flex flex-row"
          key={index}
          style={{ display: index === currentIndex ? "block" : "none" }}
        >
          <div className="flex">
            <div className={styles.leftContent}>
              <p className={styles.contentTitle}>{productName}</p>
              <p className={styles.contentDesc}>{productDesc}</p>

              <Button text="Подробнее" width="270px" />
            </div>

            <div className={styles.heroContentImg}>
              <Image src={productImg} width={700} height={545} alt="product1" />
            </div>
          </div>
        </div>
      ))}

      <div className="flex top-4 justify-center py-2 gap-4">
        {heroSlider.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer p-2 border rounded-full border-[#00C9C9] ${
              currentIndex === slideIndex ? "bg-[#00C9C9]" : "bg-white"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
