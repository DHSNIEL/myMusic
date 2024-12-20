import { FaPlay } from "react-icons/fa";

const PlayButton = () => {
    return (
        <button className="transition opacity-0 rounded-full items-center p-4 translate translate-y-1/4 drop-shadow-md group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 bg-green-500 ">
            <FaPlay className="text-black" />
        </button>
    );
};

export default PlayButton;