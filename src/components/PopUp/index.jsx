import Header from "./Header";
import { PopUpInputData } from "../../utils/constants";
import Input from "./Input";
import Button from "../Button";

const Popup = ({ orderPopup, setOrderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
            {/* Header */}
            <Header setOrderPopup={setOrderPopup} />

            {/* Body */}
            <div className="mt-4">
              {PopUpInputData.map((item, key) => (
                <Input item={item} key={key} />
              ))}

              <div className="flex justify-center">
                <Button item="Order Now" handleOrderPopup={handleOrderPopup} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
