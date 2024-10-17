import Link from "next/link";
import styles from "./CustomButton.module.css"; // Your existing CSS file

const CustomButton = ({ href, text, Icon }) => {
  return (
    <div className={styles.gradientBox}>
      <Link href={href || "/"} className={styles.btnDiscuss}>
        {/* Render the icon if passed */}
        {Icon && <Icon className={styles.icon} />}
        <span className="text-lg capitalize font-medium">{text}</span>
      </Link>
    </div>
  );
};

export default CustomButton;
