import SupportImage from "../assets/support.jpg";
import { FiPhone } from "react-icons/fi";
import { GoArrowRight } from "react-icons/go";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaMicrochip } from "react-icons/fa6";

function Support() {
  return (
    <div className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={SupportImage}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative p-6">
        <div className="px-4">
          <h3 className="pt-8 text-slate-300 uppercase text-center text-3xl">
            Support
          </h3>
          <h1 className="text-5xl font-bold py-6 text-center">
            Finding the right team
          </h1>
          <p className="py-4 text-3xl text-slate-300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <FiPhone className="w-16 h-16 bg-indigo-600 text-white mt-[-4rem] rounded-2xl p-4" />
              <h3 className="my-6 font-bold text-2xl">Sales</h3>
              <p className="text-gray-600 text-xl ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="w-full bg-slate-100 pl-6">
              <p className="inline-flex items-center text-indigo-600 gap-2 cursor-pointer p-3 my-3 hover:rounded-2xl hover:bg-gray-200">
                Contact Us <GoArrowRight className="w-5 h-5 " />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <MdOutlineSupportAgent className="w-16 h-16 bg-indigo-600 text-white mt-[-4rem] rounded-2xl p-4" />
              <h3 className="my-6 font-bold text-2xl">Technical Support</h3>
              <p className="text-gray-600 text-xl ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="w-full bg-slate-100 pl-6">
              <p className="inline-flex items-center text-indigo-600 gap-2 cursor-pointer p-3 my-3 hover:rounded-2xl hover:bg-gray-200">
                Contact Us <GoArrowRight className="w-5 h-5 " />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <FaMicrochip className="w-16 h-16 bg-indigo-600 text-white mt-[-4rem] rounded-2xl p-4" />
              <h3 className="my-6 font-bold text-2xl">Media Inquiries</h3>
              <p className="text-gray-600 text-xl ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
            <div className="w-full bg-slate-100 pl-6">
              <p className="inline-flex items-center text-indigo-600 gap-2 cursor-pointer p-3 my-3 hover:rounded-2xl hover:bg-gray-200">
                Contact Us <GoArrowRight className="w-5 h-5 " />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
