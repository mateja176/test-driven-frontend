import { CSSProperties } from "react";

const width = "400px";

const alignItems = "center";

export default {
  width,
  height: width,
  boxShadow: "1px 2px 10px #ccc",
  borderRadius: "5px",
  display: "grid",
  alignItems,
  justifyItems: alignItems
} as CSSProperties;
