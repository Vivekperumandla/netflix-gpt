const VideoTtile = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[18%] text-white px-6 md:px-24 bg-gradient-to-r from-black">
      <h1 className="text-lg md:text-5xl font-bold  ">{title}</h1>
      <p className="hidden md:inline-block py-6 text-medium w-1/2">
        {overview}
      </p>
      <div className=" my-3 md:my-0">
        <button className="bg-white text-black font-bold  text-center px-7 md:p-4 md:px-12  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-500 text-white font-bold text-center p-4 px-12 bg-opacity-45 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTtile;
