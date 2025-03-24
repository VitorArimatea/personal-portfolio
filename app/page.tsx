import Hero from "../components/Hero";
import RecentProjects from "../components/RecentProjects";

export default function Home() {
  return (
    <div className="relative bg-white dark:bg-[#111] flex justify-center items-center flex-col overflow-x-hidden px-5 sm:px-10">
      <div className="max-7xl w-full">
        <Hero />
        <RecentProjects />
      </div>
    </div>
  );
}
