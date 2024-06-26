
const VideoPlayer = ({videoUrl}) => {
  return (
    <div>
        <video
            width={1000}
            height={3000}
            controls autoPlay
            className="rounded-sm"
          >
            <source src={videoUrl}
                type="video/mp4"
            />
        </video>
    </div>
  )
}

export default VideoPlayer