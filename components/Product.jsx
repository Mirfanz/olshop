import styles from "@/styles/components/product.module.css";

const Product = ({ url, title, price }) => {
  return (
    <div className={styles.product}>
      <div className={styles.productImg}>
        <img src={url} className={styles.productImage} />
      </div>
      <div className={styles.productInfo}>
        <h5>{title}</h5>
        <div className={styles.productPrice}>Rp.{price}</div>
        <div className={styles.btns}>
          <button className={styles.btn}>
            <i className="bx bx-fw  bx-cart-add"></i> Keranjang
          </button>
          <button className={styles.btn}>
            <i className="bx bxl-whatsapp bx-fw"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
