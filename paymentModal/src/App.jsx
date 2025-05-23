import "./App.css";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

const recipients = [
  {
    name: "Alice Johnson",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Sasha",
  },
  {
    name: "Bob Smith",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Bobby",
  },
  {
    name: "Charlie Brown",
    avatar: "https://api.dicebear.com/7.x/adventurer/svg?seed=Pete",
  },
];

function App() {
  const [selectedRecipient, setSelectedRecipient] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [btnVal, setBtnVal] = useState("Make Payment");
  const [showCheckIcon, setShowCheckIcon] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (showModal) {
      setBtnVal("Sent");
      setShowCheckIcon(true);
      setShowModal(false);
    } else {
      setShowModal(true);
      setBtnVal("Send");
    }
  };
  const btnRef = useRef(null);

  return (
    <div className="w-full h-full bg-[#eee] min-h-screen flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center gap-4">
        <AnimatePresence initial={true}>
          {showModal && (
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, type: "tween", stiffness: 300 }}
              exit={{ opacity: 0, scale: 0 }}
              key="box"
              className="bg-[#fff] w-[350px] h-[300px] rounded-3xl p-5"
            >
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <h1 className="text-[#000] font-bold text-[20px]">Payment</h1>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
                    alt="logo"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <p className="text-[#000] font-medium text-[14px]">
                  Please enter the details
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="relative">
                  <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="w-full text-left border-[1.5px] border-[#ededed] rounded-3xl px-3 py-2 flex items-center gap-3 cursor-pointer"
                  >
                    {selectedRecipient ? (
                      <>
                        <img
                          src={selectedRecipient.avatar}
                          alt={selectedRecipient.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-base">
                          {selectedRecipient.name}
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-400">To</span>
                    )}
                  </button>

                  {showDropdown && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md">
                      {recipients.map((recipient, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedRecipient(recipient);
                            setShowDropdown(false);
                          }}
                          className="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-100"
                        >
                          <img
                            src={recipient.avatar}
                            alt={recipient.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm">{recipient.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <input
                  type="number"
                  placeholder="$25"
                  className="border-[1.5px] border-[#ededed] rounded-3xl px-3 py-2 no-spinner"
                />

                <input
                  type="text"
                  placeholder="Message"
                  className="border-[1.5px] border-[#ededed] rounded-3xl px-3 py-2"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          ref={btnRef}
          onClick={handleClick}
          className={`bg-[#fff] hover:bg-[#fbfbfb] shadow-sm ${
            btnVal === "Sent" ? "text-[#4cd964]" : "text-[#007AFF]"
          } font-medium flex items-center justify-center border-[1.5px] border-[#fff] px-8 py-1.5 w-fit min-w-[100px] rounded-3xl gap-2`}
        >
          <AnimatePresence>
            {showCheckIcon && (
              <motion.svg
                key="check-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#4cd964"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                exit={{ pathLength: 0 }}
                transition={{ duration: 0.5 }}
                className="w-5 h-5"
              >
                <motion.path d="M20 6L9 17l-5-5" />
              </motion.svg>
            )}
          </AnimatePresence>
          {btnVal}
        </button>
      </div>
    </div>
  );
}

export default App;
