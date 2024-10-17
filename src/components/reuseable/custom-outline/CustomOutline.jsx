// import Link from "next/link";
import Link from "next/link";
import styles from "./CustomOutline.module.css";

const CustomOutline = ({ href, text }) => {
  return (
    <div className={styles.gradientBox}>
      <Link href={href || "/"}>
        <p className="text-gradient lg:text-lg uppercase font-semibold w-max">
          {" "}
          {text}
        </p>
        {/* {text} */}
      </Link>
    </div>
  );
};

export default CustomOutline;