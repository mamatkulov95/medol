import Image from "next/image";

import styles from "./Hero.module.scss";
import data from "../../../public/assets/data.json";

import compLogo from "/public/images/company-logo.svg";
import searchIcon from "/public/images/search-icon.svg";

export default function Hero() {
  const { leftNavMenus, rightNavItems, headerMenus } = data;

  return (
    <div className={styles.hero}>
      <div className={styles.header}>
        {leftNavMenus.map(
          ({ iconImg, imgDesc, addressLine1, addressLine2 }, index) => (
            <div key={index} className={styles.leftNavContent}>
              <div className={styles.leftNavIconWrapper}>
                <Image src={iconImg} width={22} height={22} alt={imgDesc} />
              </div>

              <div>
                <p>{addressLine1}</p>
                <p>{addressLine2}</p>
              </div>
            </div>
          )
        )}

        <Image src={compLogo} width={200} height={50} alt="company-logo" />

        <div className={styles.rightNav}>
          <div className={styles.rightNavSearchIcon}>
            <Image src={searchIcon} width={26} height={26} alt="Search-icon" />
          </div>

          {rightNavItems.map(({ iconSrc, alt, iconName }, index) => (
            <div key={index} className={styles.rightNavItem}>
              <Image src={iconSrc} width={22} height={22} alt={alt} />
              <p>{iconName}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.headerMenu}>
        {headerMenus.map(({ headerMenu }, index) => (
          <ul key={index} className={styles.headerItems}>
            <li className={styles.headerItem}>{headerMenu}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}
