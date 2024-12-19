const Modalgoogle = ({ isVisible ,children,onclose}) => {
  if (!isVisible) return null;

  return (
    <div className="flex justify-center items-center bg-black bg-opacity-50 z-50 inset-0 fixed">
      <div className="bg-white max-w-[40%] p-5 rounded-lg shadow-lg relative">
        <button
          className="absolute top-1 right-3 text-5xl font-bold"
          onClick={onclose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modalgoogle;
