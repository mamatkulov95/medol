import Image from "next/image";

import upArrow from "/public/images/up-arrow.svg";
import data from "../../../public/assets/data.json";
import Title from "../Title/Title";
import Button from "../Button/Button";

import styles from "./Products.module.scss";

export default function Products() {
  const { products } = data;

  return (
    <div id="products" className={styles.products}>
      <Title text="ПРОДУКЦИЯ" fontSize="40px" fontWeight="500" />
      <div className={styles.productsList}>
        {products.map(({ productImg, productImgAlt, productName }, index) => (
          <div key={index} className={styles.product}>
            <Image
              src={productImg}
              width={220}
              height={220}
              alt={productImgAlt}
            />

            <p>{productName}</p>

            <Button text="Посмотреть все" width="220px" />
          </div>
        ))}
      </div>

      <div className={styles.productCatalog}>
        <Title
          text="Перейти в каталог нашей продукции"
          fontSize="24px"
          fontWeight="400"
        />

        <Image src={upArrow} width={30} height={30} alt="up-arrow" />
      </div>
    </div>
  );
}
