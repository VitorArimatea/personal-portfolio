import Image from "next/image";

interface Technology {
  name: string;
  description: string;
  icon: string;
}

interface TechnologyCardProps {
  technology: Technology;
  variant?: "default" | "compact";
}

const TechnologyCard = ({ technology, variant = "default" }: TechnologyCardProps) => {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-md transition-shadow">
        <Image
          src={technology.icon}
          alt={technology.name}
          width={20}
          height={20}
          className="flex-shrink-0"
        />
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
          {technology.name}
        </span>
      </div>
    );
  }

  return (
    <div className="group p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors">
          <Image
            src={technology.icon}
            alt={technology.name}
            width={24}
            height={24}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-neutral-800 dark:text-neutral-200 mb-1">
            {technology.name}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {technology.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
