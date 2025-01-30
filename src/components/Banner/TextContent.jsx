import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp } from "react-icons/io5";

const TextContent = () => {
  return (
    <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
      <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
        Discover every corner of the world with us!
      </h1>
      <p
        data-aos="fade-up"
        className="text-sm text-gray-500 tracking-wide leading-8"
      >
        Experience breathtaking landscapes, vibrant cultures, and unforgettable
        adventures. Let us take you on a journey filled with wonder and
        exploration.
        <br />
      </p>

      <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
            <p>Flight</p>
          </div>
          <div className="flex items-center gap-4">
            <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
            <p>Hotel</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
            <p>Wi-fi</p>
          </div>
          <div className="flex items-center gap-4">
            <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
            <p>Foods</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextContent;
