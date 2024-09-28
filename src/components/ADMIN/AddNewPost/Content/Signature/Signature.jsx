import React from "react";
import DeleteField from "../DeleteField";

const Signature = ({ index }) => {
  const error = "Trường này là bắt buôc.";
  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="font-bold mb-[20px] flex  items-center gap-[10px]">
          <span>Signature</span>
          <DeleteField index={index} />
        </h4>
        <div className="flex gap-[30px]">
          <div className="flex-1">
            <div>
              <label htmlFor="" className="label-text ">
                Chữ ký bài viết/ nguồn (*)
              </label>
            </div>
            <div>
              <input
                type="text"
                spellCheck={false}
                name="title"
                className="input-default"
                placeholder="Nhập chữ ký hoặc nguồn."
              />
            </div>
            {error && (
              <div className="pt-[10px]">
                <span className=" text-error text-[12px] font-light">
                  {error}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signature;
