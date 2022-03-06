import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const GuidePage = (props) => {
  const path = "/guides_md/" + props.guide + ".md";
  const [pageState, loadFile] = useState("");
  useEffect(() => {
    fetch(path).then((file) =>
      file.text().then((text) => loadFile(text.slice(props.guide.length + 2)))
    );
  }, [path, props.guide]);
  return (
    <div>
      <h1>{props.guide}</h1>
      <div style={{ "overflow-y": "scroll" }}>
        <ReactMarkdown children={pageState}></ReactMarkdown>
      </div>
    </div>
  );
};
