import { useNavigate } from "react-router-dom";
// import { HiUser } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineTag } from "react-icons/hi";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="flex items-center justify-center relative w-full overflow-hidden  py-8 px-4 md:px-8 md:py-14 ">
      <div className=" flex flex-col-reverse items-center gap-x-16 gap-y-16  md:flex-row md:justify-between md:p-8">
        {/* Text Content */}
        <div className="text-center  md:max-w-xl flex flex-col items-center md:items-end gap-y-8">
          <div className="flex items-center self-start gap-x-2 text-xs md:text-sm  font-semibold !px-4">
            <span className="badge badge--danger flex items-center gap-x-1">
              <HiOutlineTag className="w-3 md:w-4 h-3 md:h-4" />
              تخفیف بهاری
            </span>
            <span className=" text-primary-800">۲۰% تخفیف</span>
          </div>

          <div className="w-full max-w-md text-center md:text-right">
            <h1 className="text-3xl md:text-5xl font-black text-secondary-700 !leading-loose">
              پروژه‌هات رو سریع و مقرون به صرفه تحویل بگیر !
            </h1>

            <h3 className="text-secondary-400 text-sm md:text-lg leading-loose mt-4  p-2">
              ما کنارتیم تا بهترین فریلنسرها رو برای پروژه‌هات پیدا کنی و با
              خیال راحت همکاری رو شروع کنی.
            </h3>
          </div>

          {/* Users + Button */}
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:items-center gap-x-8 gap-y-6 md:gap-y-0 w-full">
            <button
              onClick={() => navigate("/start-path")}
              className="btn btn--primary "
            >
              بزن بریم!
            </button>
            {/* Avatars */}
            <div className="flex flex-col gap-x-4 gap-y-2">
              <div className="flex -space-x-2 overflow-hidden flex-row-reverse justify-start ">
                <img
                  className="inline-block w-10 h-10 rounded-full ring-2 ring-secondary-0"
                  src="/images/avatar-1.avif"
                  alt="avatar-1"
                />
                <img
                  className="inline-block w-10 h-10 rounded-full ring-2 ring-secondary-0"
                  src="/images/avatar-2.avif"
                  alt="avatar-2"
                />
                <img
                  className="inline-block w-10 h-10 rounded-full ring-2 ring-secondary-0"
                  src="/images/avatar-4.avif"
                  alt="avatar-4"
                />
                <img
                  className="inline-block w-10 h-10 rounded-full ring-2 ring-secondary-0"
                  src="/images/avatar-5.avif"
                  alt="avatar-5"
                />
              </div>

              <span className="text-xs text-secondary-500 text-right flex items-center gap-x-1 font-bold">
                <span className="text-primary-900 flex items-center gap-x-1">
                  <FaRegUser className="w-4 h-4" />+ ۵۰
                </span>
                کارفرمای موفق
              </span>
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <img
            src="/images/freelancer5-img.png"
            alt="freelancer pointing"
            className="w-[80%] md:w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
