import { ThreeDots } from "react-loader-spinner";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <ThreeDots height="100" width="100" color="blue" ariaLabel="loading" />
    </div>
  );
}

export default Loader;
