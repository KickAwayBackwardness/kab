import React, { useEffect, useState } from "react";
import DeleteField from "../DeleteField";
import Text from "./Text";

const BulletList = ({ index }) => {
  const [error, setEroor] = useState("");
  const [textFieldList, setTextFieldList] = useState(["li", "li"]);

  const renderTextField = () => {
    return textFieldList.map((li, ind) => {
      return (
        <div key={ind}>
          <Text deleteField={deleteField} addField={addField} ind={ind} />
        </div>
      );
    });
  };

  const deleteField = (ind) => {
    if (textFieldList.length <= 2) {
      setEroor("Danh sách phải có ít nhất 2 danh mục.");
      return;
    }
    setEroor("");
    textFieldList.splice(ind, 1);
    setTextFieldList([...textFieldList]);
  };

  const addField = (ind) => {
    setEroor("");
    textFieldList.splice(ind + 1, 0, "li");
    setTextFieldList([...textFieldList]);
  };
  useEffect(() => {
    renderTextField();
  }, [textFieldList]);

  return (
    <div className="mb-[50px]">
      <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
        <span>Bullet List</span>
        <DeleteField index={index} />
      </h4>
      <div className="mt-[20px]">
        <div>
          <label htmlFor="" className="label-text ">
            văn bản (*)
          </label>
        </div>
        {renderTextField()}
        <div className="pt-[10px]">
          {error && (
            <span className=" text-error text-[12px] font-light ml-1">
              {error}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BulletList;
