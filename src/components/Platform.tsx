import { FaCheck } from "react-icons/fa";

function Platform() {
  return (
    <div className="w-full my-10 px-5 pb-[100px]">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">All-In-One Platform</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="flex">
              <div>
                <FaCheck className="w-6 h-6 mr-5 mt-1 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Notifications</h3>
                <p className="text-lg pt-2 pb-4 text-justify">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Platform;
