export default function ProjectMedia({ media }) {
    const { src, type } = media;

    if (!src) return null;

    if (type === "video") {
        return <video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            style={{ width: "200px", display: "block", borderRadius: "20px" }} // set max width instead. check best practice for style independent style?
        />;
    }

    return <img src={media.src} alt={""} style={{
        maxWidth: "300px", height: "auto",
    }} />;
}