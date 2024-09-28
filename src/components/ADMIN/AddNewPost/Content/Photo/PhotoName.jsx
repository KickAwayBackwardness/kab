import React from "react";

const PhotoName = () => {
  const error = "";
  return (
    <div className=" mt-[20px]">
      <div>
        <label htmlFor="" className="label-text ">
          Tên hình (*)
        </label>
      </div>
      <div>
        <input
          type="text"
          spellCheck={false}
          name="title"
          className="input-default"
          placeholder="Tên hình"
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

export default PhotoName;
