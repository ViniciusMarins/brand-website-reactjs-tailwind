import bgImage from "../assets/cyber-bg.png";
import { IoCloudUploadSharp } from "react-icons/io5";
import { FaDatabase, FaServer } from "react-icons/fa6";
import { GrNetwork } from "react-icons/gr";

function Hero() {
  return (
    <div className="w-full md:h-screen px-5 bg-zinc-200 flex flex-col justify-between pt-[100px] pb-10 md:pt-0">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl lg:text-7xl font-bold">
            Cloud Management
          </h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="py-3 px-6 md:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img src={bgImage} className="w-full" alt="/" />
          <div className="grid grid-cols-2 gap-16 mt-10">
            <div className="flex flex-col justify-center items-center">
              <IoCloudUploadSharp className="text-4xl text-gray-700" />
              <p className="mt-3 font-semibold">App Security</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaDatabase className="text-4xl text-gray-700" />
              <p className="mt-3 font-semibold">Dashboard Design</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaServer className="text-4xl text-gray-700" />
              <p className="mt-3 font-semibold">Cloud Data</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <GrNetwork className="text-4xl text-gray-700" />
              <p className="mt-3 font-semibold">API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
