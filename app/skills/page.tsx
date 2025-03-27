import Navbar from "@/components/Navbar";
import { Skills } from "@/components/Skills";

const SkillsSection = () => {
  return (
    <div className="relative bg-[#FEFCFB] dark:bg-[#0A1128] flex justify-center items-center flex-col p-4">
      <Navbar />
      
      <Skills />
    </div>
  );
};
export default SkillsSection;
