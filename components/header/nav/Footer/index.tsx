import ThemeToggle from "@/components/ThemeToggle";
import styles from "./style.module.scss";
import { socialMedia } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";

interface SocialMediaItem {
  id: string | number;
  link: string;
  img: string;
  alt: string;
}

export default function Footer(): React.ReactNode {
  return (
    <div className={styles.footer}>
      <div className="flex items-center gap-5 md:gap-3 mt-3 md:mt-0">
        {socialMedia.map((info: SocialMediaItem) => (
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
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </div>
  );
}
