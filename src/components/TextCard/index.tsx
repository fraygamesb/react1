import styles from "./style.module.css";

interface TextCardProps {
  text: string;
}

const TextCard = ({ text }: TextCardProps) => {
  return <p className={styles.text}>{text}</p>;
};

export default TextCard;
