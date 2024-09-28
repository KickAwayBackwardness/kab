import React from "react";
import Delete from "./Delete";
import Add from "./Add";

const Text = ({ deleteField, addField, ind }) => {
  return (
    <div className=" flex items-center gap-[10px] mb-[10px]">
      <textarea
        type="text"
        spellCheck={false}
        className="input-default pt-3"
        name="description"
        placeholder="Văn bản "
      />
      <Delete deleteField={deleteField} ind={ind} />
      <Add addField={addField} ind={ind} />
    </div>
  );
};

export default Text;
