"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import Image from "next/image";

import HeroContent from "../HeroContent/HeroContent";

import styles from "./Hero.module.scss";
import data from "../../../public/assets/data.json";

import compLogo from "/public/images/company-logo.svg";
import searchIcon from "/public/images/search-icon.svg";
import fcIcon from "/public/images/fc-logo.svg";
import ruFlag from "/public/images/russian-flag.svg";
import uzFlag from "/public/images/uzflag.png";
import burgerMenu from "/public/images/burger-menu.svg";

export default function Hero() {
  const { leftNavMenus, headerMenus } = data;
  const [selectedLanguage, setSelectedLanguage] = useState("0");

  const handleLanguageChange = (event: any) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        <a href="https://www.orzugrand.uz/">
          <Image
            className={styles.compLogo1}
            src={compLogo}
            width={200}
            height={50}
            alt="company-logo"
          />
        </a>

        {leftNavMenus.map(
          ({ iconImg, imgDesc, addressLine1, addressLine2 }, index) => (
            <div key={index} className={styles.leftwrapper}>
              <div className={styles.leftNavContent}>
                <div className={styles.leftNavIconWrapper}>
                  <Image src={iconImg} width={22} height={22} alt={imgDesc} />
                </div>

                <div className={styles.addresline}>
                  <p>{addressLine1}</p>
                  <p>{addressLine2}</p>
                </div>
              </div>
            </div>
          )
        )}

        <a href="https://www.orzugrand.uz/">
          <Image
            className={styles.compLogo}
            src={compLogo}
            width={200}
            height={50}
            alt="company-logo"
          />
        </a>

        <div className={styles.rightNav}>
          <div className={styles.leftwrapper}>
            <div className={styles.rightNavSearchIcon}>
              <Image
                src={searchIcon}
                width={26}
                height={26}
                alt="Search-icon"
              />
            </div>
          </div>

          <div className={styles.wrapper}>
            <div className={styles.facebookConnect}>
              <Image src={fcIcon} width={22} height={22} alt="Fc-logo" />
              <p>Мы на Facebook</p>
            </div>
          </div>

          <div className={styles.rightNavItem}>
            <Image
              className={styles.flags}
              src={selectedLanguage === "0" ? ruFlag : uzFlag}
              width={22}
              height={22}
              alt="Fc-logo"
            />

            <select
              className="cursor-pointer"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              <option value="0">Русский</option>
              <option value="1">Uzbek</option>
            </select>
          </div>
        </div>

        <div className={styles.burgerMenu}>
          <Image src={burgerMenu} width={22} height={22} alt="burger-menu" />
        </div>
      </div>

      <div className={styles.headerWrapper}>
        <div className={styles.headerMenu}>
          {headerMenus.map(({ headerMenu, section }, index) => (
            <ul key={index} className={styles.headerItems}>
              <Link
                to={section}
                spy={true}
                smooth={true}
                offset={-100}
                duration={1500}
                className={styles.headerItem}
              >
                {headerMenu}
              </Link>
            </ul>
          ))}
        </div>
      </div>
      <div>
        <HeroContent />
      </div>
    </div>
  );
}
