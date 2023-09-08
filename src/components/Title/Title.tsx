import styles from "./Title.module.scss";

interface TitleProps {
  text: string;
  fontSize?: string;
  fontWeight?: string;
}

const Title: React.FC<TitleProps> = ({ text, fontSize, fontWeight }) => {
  return (
    <p
      className={styles.title}
      style={{
        fontSize: fontSize || "inherit",
        fontWeight: fontWeight || "400"
      }}
    >
      {text}
    </p>
  );
};

export default Title;
