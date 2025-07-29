import { FaCheck, FaExclamationTriangle, FaLightbulb } from "react-icons/fa";

interface FeatureListProps {
  items: string[];
  type?: "features" | "challenges" | "learnings";
  title: string;
}

const FeatureList = ({ items, type = "features", title }: FeatureListProps) => {
  const getIcon = () => {
    switch (type) {
      case "features":
        return <FaCheck className="w-4 h-4 text-green-500" />;
      case "challenges":
        return <FaExclamationTriangle className="w-4 h-4 text-orange-500" />;
      case "learnings":
        return <FaLightbulb className="w-4 h-4 text-blue-500" />;
      default:
        return <div className="w-2 h-2 bg-blue-600 rounded-full" />;
    }
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className={`p-6 rounded-lg`}>
      <h2 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200 flex items-center gap-2">
        {getIcon()}
        {title}
      </h2>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 mt-1">
              {getIcon()}
            </div>
            <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureList;
