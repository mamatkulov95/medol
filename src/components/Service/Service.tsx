import Image from "next/image";

import Title from "../Title/Title";
import styles from "./Service.module.scss";
import data from "../../../public/assets/data.json";
import Button from "../Button/Button";

export default function Service() {
  const { services } = data;

  return (
    <div className={styles.services}>
      <Title text="УСЛУГИ" fontSize="40px" fontWeight="500" />

      <div className={styles.serviceList}>
        <div className={styles.serviceContainer}>
          {services.map(
            (
              { serviceImg, serviceImgAlt, serviceName, serviceContent },
              index
            ) => (
              <div key={index} className={styles.service}>
                <Image
                  className={styles.serviceImage}
                  src={serviceImg}
                  width={350}
                  height={250}
                  alt={serviceImgAlt}
                />

                <Title text={serviceName} fontSize="20px" fontWeight="500" />

                <p className={styles.serviceContent}>{serviceContent}</p>

                <Button text="Подробнее" width="270px" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
