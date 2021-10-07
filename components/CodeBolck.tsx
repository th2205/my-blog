import Highlight from "react-highlight";
import "../../node_modules/highlight.js/styles/nord.css";

export default function CodeBlock({ value }) {
  return <Highlight value={value}>{value}</Highlight>;
}
