"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import Image from "next/image";

const locales = ["en", "pt-br"];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleChange = (value: string) => {
    const newLocale = value;

    const segments = pathname.split("/");

    if (locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/");
    router.push(newPath);
  };

  return (
    <Select onValueChange={handleChange} defaultValue={currentLocale}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">
          <Image src="/icons/us.svg" alt="USA flag" width={20} height={20} />
          Inglês
        </SelectItem>
        <SelectItem value="pt-br">
          <Image
            src="/icons/brazil.svg"
            alt="Brazil flag"
            width={20}
            height={20}
          />
          Português
        </SelectItem>
      </SelectContent>
    </Select>
  );
}