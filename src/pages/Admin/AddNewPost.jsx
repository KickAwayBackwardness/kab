import React from "react";
import General from "../../components/ADMIN/AddNewPost/General/General";
import NewsHeading from "../../components/ADMIN/AddNewPost/NewsHeading/NewsHeading";
import Content from "../../components/ADMIN/AddNewPost/Content/Content";
import Cover from "../../components/ADMIN/AddNewPost/Cover/Cover";
import PostButton from "../../components/ADMIN/AddNewPost/PostButton/PostButton";

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
          <PostButton />
        </div>
      </div>
    </div>
  );
};

export default AddNewPost;
