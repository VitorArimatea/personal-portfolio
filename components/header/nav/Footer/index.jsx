import ThemeToggle from "@/components/ThemeToggle";
import styles from "./style.module.scss";
import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

export default function index() {
  return (
    <div className={styles.footer}>
      <div className="flex gap-5 md:gap-3 mt-3 md:mt-0">
        {socialMedia.map((info) => (
          <Link
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visitar ${info.alt}`}
            className="flex justify-center items-center cursor-pointer rounded-md bg-transparent p-2"
          >
            <Image src={info.img} alt={info.alt} width={25} height={25} />
          </Link>
        ))}
        <ThemeToggle></ThemeToggle>
      </div>
    </div>
  );
}
