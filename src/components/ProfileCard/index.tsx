import styles from "./style.module.css";

interface ProfileCardProps {
  url: string;
  name: string;
}

const ProfileCard = ({ url, name }: ProfileCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.photoContainer}>
        <img className={styles.photo} src={url} alt="" />
      </div>
      <div className={styles.nameContainer}>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
