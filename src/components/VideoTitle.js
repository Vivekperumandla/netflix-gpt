const VideoTtile = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute pt-[18%] text-white px-24 bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold  ">{title}</h1>
      <p className="py-6 text-medium w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black font-bold  text-center p-4 px-12  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className=" mx-2 bg-gray-500 text-white font-bold text-center p-4 px-12 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTtile;
