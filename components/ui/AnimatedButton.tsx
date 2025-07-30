const Button = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; 
    icon: React.ReactNode, 
    position: string; 
    handleClick?: () => void;
    otherClasses?: string 
}) => {
  return (
    <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 mt-10" onClick={handleClick}>
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#8c9092_0%,#4e4e4e_50%,#abafb2_100%)]" />
            <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0b1124] dark:bg-[#0A1128] px-6 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses} gap-2.5`}>
                {position == 'left' && icon}
                {title}
                {position == 'right' && icon}
            </span>
        </button>
  </div>
  )
}
export default Button