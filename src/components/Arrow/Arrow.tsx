import Image from "next/image";

interface ArrowProps {
  padding: string;
  width: number;
  height: number;
  imgWidth: number;
  imgHeight: number;
  background: string;
  arrowImg: string;
}

const Arrow: React.FC<ArrowProps> = ({
  padding,
  width,
  height,
  background,
  imgWidth,
  imgHeight,
  arrowImg
}) => {
  return (
    <div
      className="flex justify-center items-center rounded-full"
      style={{
        padding: padding || "auto",
        width: width,
        height: height,
        background: background
      }}
    >
      <Image src={arrowImg} width={imgWidth} height={imgHeight} alt="arrow" />
    </div>
  );
};

export default Arrow;
