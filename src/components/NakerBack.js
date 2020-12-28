import { useEffect, useRef } from "react";
import useScript, { SCRIPT_STATUS } from "../hooks/useScript";

export default function NakerBack({ options = null, ...rest }) {
  const containerRef = useRef(null);
  const status = useScript(
    "https://d23jutsnau9x47.cloudfront.net/back/v1.0.9/viewer.js"
  );

  useEffect(() => {
    if (
      status === SCRIPT_STATUS.ERROR ||
      (status === SCRIPT_STATUS.READY && !window.nakerback)
    ) {
      console.warn("Failed to load Naker player");
      return;
    }

    if (status !== SCRIPT_STATUS.READY) {
      return;
    }

    window.nakerback.render({
      container: containerRef.current,
      ...options,
    });
  }, [status, containerRef, options]);

  if (!options) {
    new Error("You must provide an options prop to NakerBack");
  }

  return <div ref={containerRef} {...rest}></div>;
}
