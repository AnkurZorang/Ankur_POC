import styles from './LatestCard.module.css';
import { assets, products } from '../assets/assets';

const LatestCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <span className={styles.subtitle}>OUR BESTSELLERS</span>
        <h1 className={styles.title}>Latest Arrivals</h1>
        <a href="../collections" className={styles.shopLink}>
          SHOP NOW
          <div className={styles.underline}></div>
        </a>
      </div>
      <div className={styles.imageSection}>
        <img
          src={assets.hero_img.src}
          alt="Model"
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default LatestCard;
