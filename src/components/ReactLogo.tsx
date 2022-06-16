import reactLogo from "../logo.svg";

export const ReactLogo = () => {
  return (
    <img
      src={reactLogo}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 999,
        width: "130px",
      }}
      alt="React Logo"
    />
  );
};
