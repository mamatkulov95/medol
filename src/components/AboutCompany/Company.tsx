import Image from "next/image";

import Title from "../Title/Title";

import circle from "/public/images/circle.png";
import Button from "../Button/Button";

export default function Company() {
  return (
    <div className="lg:flex flex-col gap-2 py-10 px-10 md:justify-center justify-center h-full">
      <div className="flex justify-center p-4">
        <Title text="О КОМПАНИИ" fontSize="40px" fontWeight="400" />
      </div>

      <div className="flex justify-center items-center">
        <Image
          className="sm:hidden md:hidden lg:block"
          src={circle}
          width={550}
          height={550}
          alt="circle-logo"
        />

        <div className="flex flex-col gap-4 justify-center items-start p-4 bg-gradient rounded-custom  h-full lg:h-[460px] ">
          <p className="max-w-[700px] leading-10 py-4">
            Группа компаний MEDOL создавалась высококвалифицированными
            специалистами в сфере медицины, инженерии и экономики, за плечами
            которых значительный опыт на рынке высоких медицинских технологий,
            которая имеет свои представительства в разных уголках Земли. В 2011
            году MEDOL зарегистрировал в Узбекистане ИП ООО “Medical Online
            Services. Цель компании построить прозрачный долгосрочный бизнес,
            принести пользу обществу путем развития и внедрения передовых
            технологий в систему здравоохранения Республики Узбекистан.
          </p>

          <div className="sm:self-center md:self-center lg:self-start">
            <Button text="Узнать больше" width="270px" />
          </div>
        </div>
      </div>
    </div>
  );
}
