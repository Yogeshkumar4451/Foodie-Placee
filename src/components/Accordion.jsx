const Accordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <>
      <div className="border rounded-lg bg-white shadow-sm overflow-hidden">
        <button
          onClick={onToggle}
          className="w-full flex justify-between items-center p-4 sm:p-5 text-left cursor-pointer"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">
            {title}
          </h3>

          <span className="text-lg sm:text-xl text-gray-600 font-bold">
            {isOpen ? "-" : "+"}
          </span>
        </button>

        {isOpen && (
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600">
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default Accordion;
