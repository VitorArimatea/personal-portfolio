import { MyServices } from "@/components/MyServices";
import FadeInUp from "@/components/animations/PageTransition";
import Spotlight from "@/components/ui/Spotlight";
import SpotlightNew from "@/components/ui/SpotlightNew";

const MyServicesPage = () => {
  return (
    <div
      className="relative bg-background dark:bg-background flex justify-center items-center flex-col"
      aria-label="Página dos meus serviços"
    >
      <div className="hidden dark:flex">
        <Spotlight className="top-0 left-0 h-[50vh] blur-2xl" />
        <SpotlightNew />
      </div>
      <FadeInUp>
        <div className="p-4">
          <MyServices />
        </div>
      </FadeInUp>
    </div>
  );
};

export default MyServicesPage;
