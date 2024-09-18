import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { xml } from "@codemirror/lang-xml";

function Editor() {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback((val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <div>
      <CodeMirror
        value={value}
        height="200px"
        extensions={[xml()]}
        onChange={onChange}
      />
      <h2 className=" text-yellow-500 ">Preview</h2>
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </div>
  );
}
export default Editor;
