import Image from "next/image";

import Title from "../Title/Title";
import Arrow from "../Arrow/Arrow";
import data from "../../../public/assets/data.json";

import leftArrow from "/public/images/left-arrow.svg";
import rightArrow from "/public/images/right-arrow.svg";

export default function Partners() {
  const { partners } = data;

  return (
    <div className="flex flex-col py-[100px] text-center justify-center items-center">
      <Title text="ПАРТНЕРЫ" fontSize="40px" fontWeight="500" />

      <div className="flex pt-14 items-center gap-4">
        <Arrow
          padding="15"
          width={50}
          height={50}
          background="linear-gradient(180deg, #0D4C93 0%, #00C9C9 100%)"
          imgWidth={20}
          imgHeight={20}
          arrowImg={leftArrow}
        />

        <div className="grid grid-cols-4 grid-rows-2 gap-6">
          {partners.map(({ partnerImg, partnerImgAlt }, index) => (
            <div key={index} className="border rounded-3xl px-[40px]">
              <Image
                src={partnerImg}
                width={166}
                height={118}
                alt={partnerImgAlt}
              />
            </div>
          ))}
        </div>

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
    </div>
  );
}
