import { useEffect } from "react";
import { useRef } from "react";

export default function useTimeout(callback, delay) {
  const stablecallback = useRef(callback);
  useEffect(() => {
    stablecallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => stablecallback.current();
    if (typeof delay !== "number") return;
    const t = setTimeout(tick, delay);
    return () => clearTimeout(t);
  }, [delay]);
}
