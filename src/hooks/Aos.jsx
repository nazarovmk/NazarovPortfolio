import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const useAos = (
  options = { duration: 600, once: false, offset: 50, easing: "ease-in-out" }
) => {
  useEffect(() => {
    Aos.init(options);
  }, [options]);
};

export default useAos;
