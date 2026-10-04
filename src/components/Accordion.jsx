const Accordion = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="overflow-hidden rounded-lg border bg-white shadow-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between p-4 text-left transition hover:bg-orange-50 sm:p-5"
      >
        <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
          {title}
        </h3>

        <span
          className={`text-xl font-bold text-orange-500 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-gray-100 px-4 pb-4 pt-3 text-sm text-gray-600 sm:px-5 sm:pb-5 sm:text-base">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;
