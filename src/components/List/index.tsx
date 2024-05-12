import styles from "./style.module.css";
import TextCard from "../TextCard";

interface ListProps {
  items: Array<string>;
  title: string;
}

const List = ({ items, title }: ListProps) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.container}>
        {items.map((item) => (
          <TextCard text={item} />
        ))}
      </div>
    </>
  );
};

export default List;
