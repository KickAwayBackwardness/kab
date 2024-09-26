import React from "react";

const AddNewPost = () => {
  return (
    <div>
      {" "}
      <div>
        <div className="relative flex gap-[30px]">
          {/* left - form */}
          <div className="w-[80%]">
            {/* noi dung bai viet */}
            <div className="flex w-[100%] gap-[30px]">
              {/* left */}
              <div className="w-[20%]">
                <h6 className="text-[20px] font-semibold">Nội dung bài viết</h6>
              </div>

              {/* input */}
              <div className="w-[80%] ">
                {/* EDITOR */}
                <h1 className="text-[40px] font-bold uppercase">EDITOR</h1>
              </div>
            </div>

            {/* line ngan cach */}
            <div className="mt-[100px] mb-[50px] h-[1px] w-full bg-line"></div>

            {/* thong tin chung */}
            <div className="flex  w-[100%] gap-[30px]">
              {/* left */}
              <div className="w-[20%]">
                <h6 className="text-[20px] font-semibold">Thông tin chung</h6>
              </div>

              {/* input */}
              <div className="w-[80%] ">
                <div className="flex gap-[30px]">
                  {/*  */}
                  <div className="flex-1">
                    <div>
                      <label htmlFor="" className="label-text ">
                        tên phim (*)
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        spellCheck={false}
                        name="film_name"
                        className="input-default"
                        placeholder="Tên phim"
                      />
                    </div>
                    {/* <div className="pt-[10px]">
            {error.film_name && (
              <span className=" text-error text-[12px] font-light ml-1">
                {error.film_name}
              </span>
            )}
          </div> */}
                  </div>

                  {/*  */}
                  <div className="flex-1">
                    <div>
                      <label htmlFor="" className="label-text ">
                        tên phim khác (*)
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        spellCheck={false}
                        className="input-default"
                        placeholder="Tên tiếng anh"
                        name="film_other_name"
                      />
                    </div>
                    {/* <div className="pt-[10px]">
            {error.film_other_name && (
              <span className=" text-error text-[12px] font-light ml-1">
                {error.film_other_name}
              </span>
            )}
          </div> */}
                  </div>
                </div>
                <div className="mt-[36px]">
                  <div className="flex-1">
                    <div>
                      <label htmlFor="" className="label-text ">
                        thể loại phim
                      </label>
                    </div>
                    <div>
                      <input
                        type="text"
                        spellCheck={false}
                        className="input-default"
                        placeholder="Thể loại phim "
                        name="types"
                      />
                    </div>
                    <div className="pt-[10px]">
                      <span className=" text-sub_menu_index text-[12px] font-light">
                        Dùng dấu phẩy " , " để nhập nhiều thể loại phim.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default AddNewPost;
