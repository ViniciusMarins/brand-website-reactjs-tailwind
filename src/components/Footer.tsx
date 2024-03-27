import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-slate-900 w-full text-gray-50">
      <div className="w-full max-w-[1240px] px-5 py-10 m-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 sm:pl-[20%] md:pl-0">
          <ul>
            <h3 className="font-bold mb-2 mt-3">SOLUTIONS</h3>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Marketing
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Analytics
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Commerce
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">Data</span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Cloud
              </span>
            </li>
          </ul>

          <ul className="">
            <h3 className="font-bold mb-2 mt-3">SUPPORT</h3>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Pricing
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Documentation
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Guides
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                API Status
              </span>
            </li>
          </ul>

          <ul className="">
            <h3 className="font-bold mb-2 mt-3">COMPANY</h3>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">Blog</span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">Jobs</span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Press
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Partners
              </span>
            </li>
          </ul>

          <ul className="">
            <h3 className="font-bold mb-2 mt-3">LEGAL</h3>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Claims
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Privacy
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Terms
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Policies
              </span>
            </li>
            <li>
              <span className="cursor-pointer hover:text-indigo-500">
                Conditions
              </span>
            </li>
          </ul>

          <div className="w-full flex flex-col col-span-2 max-w-[400px]">
            <h3 className="font-bold my-5">SUBSCRIBE TO OUR NEWSLETTER</h3>
            <p className="mb-2">
              The lastest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <input
              className="w-full p-2 rounded-md mb-3"
              type="text"
              placeholder="Enter email..."
            />
            <button className="p-2 rounded-md font-semibold">Subscribe</button>
          </div>
        </div>

        <div className="md:flex md:justify-between md:items-center mt-12 border-t-2 border-gray-600">
          <p className="text-[16px] text-gray-500 text-center my-8">
            2024 Vinícius Assunção, LLC. All right reserved
          </p>
          <div className="flex justify-between text-3xl md:gap-10">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-purple-300 cursor-pointer" />
            <FaTwitter className="hover:text-blue-300 cursor-pointer" />
            <FaTwitch className="hover:text-purple-500 cursor-pointer" />
            <FaGithub className="hover:text-gray-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
