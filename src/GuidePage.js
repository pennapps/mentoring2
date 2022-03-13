import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const GuidePage = (props) => {
  const textBoxStyle = {
    overflowY: "scroll",
    width: "100%",
    height: "700px",
    backgroundColor: "white",
    padding: "40px",
    borderRadius: "20px",
  };
  const path =
    "https://raw.githubusercontent.com/pennapps/guides/main/" +
    props.guide +
    ".md";
  const [pageState, loadFile] = useState("");
  useEffect(() => {
    fetch(path).then((file) =>
      file.text().then((text) => loadFile(text.slice(props.guide.length + 2)))
    );
  }, [path, props.guide]);
  return (
    <div style={{ margin: "auto", width: "40%" }}>
      <h1>{props.guide}</h1>
      <div style={textBoxStyle}>
        <ReactMarkdown children={pageState}></ReactMarkdown>
      </div>
    </div>
  );
};

export default GuidePage;
