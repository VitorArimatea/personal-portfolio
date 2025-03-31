import RingLoader from "react-spinners/RingLoader";

const loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <RingLoader
        color={`#8BC0FF`}
        size={150}
        aria-label="Tela de carregamento"
        data-testid="loader"
      />
    </div>
  );
};
export default loading;
