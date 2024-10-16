// import Link from "next/link";
import Link from "next/link";
import { RiMessage3Line } from "react-icons/ri"; // Example icon
import styles from "./CustomButton.module.css"; // Your existing CSS file

const CustomButton = ({ href, text }) => {
  return (
    <div className={styles.gradientBox}>
      <Link href={href || "/"} className={styles.btnDiscuss}>
        <RiMessage3Line className={styles.icon} />
        <span className="text-lg capitalize font-medium">{text}</span>
      </Link>
    </div>
  );
};

export default CustomButton;
