import React from "react";
import Preview from "../../components/ADMIN/AddNewPost/Preview";
import General from "../../components/ADMIN/AddNewPost/General/General";
import NewsHeading from "../../components/ADMIN/AddNewPost/NewsHeading/NewsHeading";
import Content from "../../components/ADMIN/AddNewPost/Content/Content";
import Cover from "../../components/ADMIN/AddNewPost/Cover/Cover";

const AddNewPost = () => {
  return (
    <div>
      <div>
        <div className="relative flex gap-[30px]">
          {/* left - form */}
          <div className="w-[80%]">
            <General />
            <div className="mt-[100px] mb-[50px] h-[1px] w-full bg-line"></div>
            <NewsHeading />
            <div className="mt-[100px] mb-[50px] h-[1px] w-full bg-line"></div>
            <Cover />
            <div className="mt-[100px] mb-[50px] h-[1px] w-full bg-line"></div>
            <Content />
          </div>

          {/* right - button */}
          <div className="w-[20%] sticky top-[50px] h-[150px]">
            <button className=" button relative text-[18px] font-semibold bg-black text-white w-full h-[72px] mb-[16px]">
              Đăng bài viết
            </button>

            <p className="mt-[8px] mb-[16px] font-light text-[15px]">
              Xem{" "}
              <strong className="font-semibold">
                Preview <i className="fa fa-external-link-alt"></i>
              </strong>{" "}
              trước khi đăng bài viết.
            </p>
          </div>
        </div>
      </div>
      <Preview />
    </div>
  );
};

export default AddNewPost;
