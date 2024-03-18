export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 ">
      <video autoPlay loop muted className="opacity-20 object-cover">
        <source src="/vbg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
