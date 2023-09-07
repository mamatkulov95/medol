import Image from "next/image";

import styles from "./HeroContent.module.scss";
import product1 from "/public/images/product1.svg";

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <div className={styles.leftContent}>
        <p className={styles.contentTitle}>Анализатор ABL800 FLEX</p>
        <p className={styles.contentDesc}>
          Ориентированный на среднюю или высокую производительность тестов,
          анализатор ABL800 FLEX измеряет полный набор параметров, включая pH,
          газы крови, электролиты, метаболиты и показатели оксиметрии
        </p>

        <button className={styles.contentBtn}>
          <span>Подробнее</span>
        </button>
      </div>

      <div>
        <Image src={product1} width={700} height={545} alt="product1" />
      </div>
    </div>
  );
}
