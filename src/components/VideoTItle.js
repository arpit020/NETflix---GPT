const VideoTitle = ({title,overview}) => {
    
    return(
        <div className="pt-72 px-12 absolute text-white">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="py-6 text-lg w-1/4">{overview}</p>
            <div className="flex gap-2">

                <button className="px-7 py-2 bg-white text-black font-bold rounded-md flex gap-2 hover:bg-opacity-65"> 
                    <span className="text-2xl">▷</span> 
                    <span className="my-auto">Play</span>
                </button>

                <button className="px-7 py-2 bg-gray-500 text-white font-bold rounded-md flex gap-2 opacity-70 hover:opacity-100"> 
                    <span className="text-2xl">ⓘ</span> 
                    <span className="my-auto">More Info </span>
                </button>
            </div>
        </div>
    )
};

export default VideoTitle;