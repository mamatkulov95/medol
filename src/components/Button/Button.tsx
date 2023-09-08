import styles from "./Button.module.scss";

interface ButtonProps {
  text: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ text, width }) => {
  return (
    <button
      className={styles.button}
      style={{
        width: width || "auto"
      }}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
