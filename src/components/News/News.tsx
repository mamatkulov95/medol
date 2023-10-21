import React from "react";
import Title from "../Title/Title";
import Arrow from "../Arrow/Arrow";
import data from "../../../public/assets/data.json";

import leftArrow from "/public/images/left-arrow.svg";
import rightArrow from "/public/images/right-arrow.svg";
import newsImg from "/public/images/new1.svg";
import Image from "next/image";
import Button from "../Button/Button";

export default function News() {
  const contentArray = [1, 2, 3];

  const { colorArrows } = data;

  return (
    <div className="flex flex-col gap-10 justify-center items-center p-8">
      <Title text="НОВОСТИ" fontSize="40px" fontWeight="500" />

      <div className="flex text-center justify-center items-center">
        <Arrow
          padding="15"
          width={50}
          height={50}
          background="linear-gradient(180deg, #0D4C93 0%, #00C9C9 100%)"
          imgWidth={20}
          imgHeight={20}
          arrowImg={leftArrow}
        />

        {contentArray.map((item, index) => (
          <div className="main-content px-4" key={index}>
            <div>
              <Image
                className="rounded-3xl"
                src={newsImg}
                width={330}
                height={250}
                alt="news-img"
              />

              <p className="w-[312px] text-[#0D4C93] text-[20px] py-4">
                Mастер-класс в исполнении Галлямова Эдуарда Абдулхаевича
              </p>

              <p className="w-[312px] text-[#0D4C93] text-[18px]">26.07.2021</p>

              <p className="w-[312px] py-4">
                С 19 по 21 апреля в АО «РСНПМЦУ» (Республиканский
                Специализированный Научно-Практический Медицинский Центр
                Урологии) при поддержке компаний Ethicon Endo Surgery
                (Johnson&Johnson) и ИП ООО «Medical Online Services» был
                проведен мастер-класс в исполнении...
              </p>

              <Button text="Подробнее" width="270px" />
            </div>
          </div>
        ))}

        <Arrow
          padding="15"
          width={50}
          height={50}
          background="linear-gradient(180deg, #0D4C93 0%, #00C9C9 100%)"
          imgWidth={20}
          imgHeight={20}
          arrowImg={rightArrow}
        />
      </div>

      <div className="flex gap-10">
        {colorArrows.map(({ arrContent, arrowImg, arrowAlt }, index) => (
          <div
            className="flex px-2 items-center gap-4 justify-center"
            key={index}
          >
            <Title text={arrContent} fontSize="24px" fontWeight="400" />
            <Image width={30} height={30} src={arrowImg} alt={arrowAlt} />
          </div>
        ))}
      </div>
    </div>
  );
}
