import NatureVid from "../../assets/videos/video2.mp4";

const FooterVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]"
    >
      <source src={NatureVid} />
    </video>
  );
};

export default FooterVideo;
