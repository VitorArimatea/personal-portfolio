import RecentProjects from "@/components/RecentProjects";

import Spotlight from "@/components/ui/Spotlight";
import SpotlightNew from "@/components/ui/SpotlightNew";
import PageTransition from "@/components/animations/PageTransition";
import Title from "@/components/common/Title";

const AllProjects = () => {
  return (
    <div className="overflow-hidden">
      <div className="hidden dark:flex">
        <Spotlight className="top-0 h-[50vh] blur-2xl" />
        <SpotlightNew />
      </div>
      <PageTransition>
        <Title highlight="Projetos" className="mt-20">
          Todos Meus
        </Title>
        <RecentProjects showAll={true} />
      </PageTransition>
    </div>
  );
};

export default AllProjects;
