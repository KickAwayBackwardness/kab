import React from "react";

const SubTitle = () => {
  const error = "";
  return (
    <div className="flex-1">
      <div>
        <label htmlFor="" className="label-text ">
          tiêu đề phụ
        </label>
      </div>
      <div>
        <input
          type="text"
          spellCheck={false}
          name="title"
          className="input-default"
          placeholder="Tiêu đề phụ"
        />
      </div>
      {error && (
        <div className="pt-[10px]">
          <span className=" text-error text-[12px] font-light ml-1">
            {error}
          </span>
        </div>
      )}
    </div>
  );
};

export default SubTitle;
