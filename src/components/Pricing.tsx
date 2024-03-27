import { FaCheck } from "react-icons/fa";

function Pricing() {
  return (
    <div>
      <div className="w-full h-[780px] bg-slate-900 absolute z-[-1]"></div>

      <div className="w-full max-w-[1240px] m-auto mb-[100px]">
        <div className="flex flex-col gap-5 text-center pb-20 m-auto px-5">
          <h3 className="text-3xl text-slate-300 mt-[65px]">PRICING</h3>
          <h1 className="text-5xl text-white font-bold py-3">
            The right price for your research.
          </h1>
          <p className="text-3xl text-slate-300 text-center mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry, lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2">
          <div className=" bg-white rounded-xl p-10 mx-5 shadow-2xl mb-16">
            <span className=" bg-indigo-100 px-3 py-1 rounded-full font-normal text-sm">
              STANDARD
            </span>
            <h1 className="flex font-bold text-6xl text-black gap-1 mt-5">
              $49
              <span className="text-slate-400 font-bold text-2xl self-end">
                /mo
              </span>
            </h1>
            <p className="text-slate-600 text-2xl mt-10 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <button className="w-full mt-8 p-4 text-2xl">Get Started</button>
          </div>

          <div className=" bg-white rounded-xl p-10 mx-5 shadow-2xl mb-16">
            <span className=" bg-indigo-200 px-3 py-1 rounded-full font-normal text-sm">
              PREMIUM
            </span>
            <h1 className="flex font-bold text-6xl text-black gap-1 mt-5">
              $99
              <span className="text-slate-400 font-bold text-2xl self-end">
                /mo
              </span>
            </h1>
            <p className="text-slate-600 text-2xl mt-10 mb-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <div className="flex items-center gap-8 py-4 ">
              <FaCheck className="w-5 h-5 text-green-500" />
              <p className="text-2xl">Lorem, ipsum dolor.</p>
            </div>
            <button className="w-full mt-8 p-4 text-2xl">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
