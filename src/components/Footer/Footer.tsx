import Image from "next/image";

import styles from "./Footer.module.scss";
import data from "../../../public/assets/data.json";

import Button from "../Button/Button";
import FooterRight from "./FooterRight";

import compLogo from "/public/images/company-logo.svg";

export default function Footer() {
  const { footerContact } = data;

  return (
    <div id="contactMe" className={styles.hero}>
      <div className="flex gap-10">
        <div className="flex gap-10 flex-col">
          <div className="sm:flex flex-col gap-10 ">
            <div className="sm:block md:hidden lg:hidden">
              <a href="https://www.orzugrand.uz/">
                <Image
                  src={compLogo}
                  width={200}
                  height={60}
                  alt="company-logo"
                />
              </a>
            </div>

            <p className="text-[#595959] text-2xl font-medium">Контакты</p>

            <div className="sm:grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-2 grid-rows-2 ">
              {footerContact.map(
                ({ iconImg, imgDesc, addressLine1, addressLine2 }, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex cursor-pointer transform transition-all justify-center items-center bg-white rounded-full p-4">
                      <Image
                        src={iconImg}
                        width={25}
                        height={25}
                        alt={imgDesc}
                      />
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <p>{addressLine1}</p>
                      <p>{addressLine2}</p>
                    </div>
                  </div>
                )
              )}

              <div>
                <Button text="Оставить заявку" width="230px" />
              </div>
            </div>
          </div>

          <div className="flex gap-8 items-center">
            <a href="https://www.orzugrand.uz/">
              <Image
                className="sm:hidden md:block lg:block"
                src={compLogo}
                width={200}
                height={60}
                alt="company-logo"
              />
            </a>

            <p className="sm:w-auto md:w-[410px] lg:w-[410px]">
              Наша цель – построить прозрачный, долгосрочный бизнес, приносить
              огромную пользу населению, путем решения глобальных вопросов.
              Внедряя инновационные технологии на рынок Узбекистана.
            </p>
          </div>

          <p className="pt-10">© 2021 ООО «Medical Online Services»</p>
        </div>

        <FooterRight />
      </div>
    </div>
  );
}
