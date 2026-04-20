export default function ProjectMedia({ media }) {
    const { src, type, alt } = media || {};

    if (!src) return null;

    if (type === "video") {
        return (
            <video
                src={src}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="project-media-video"
                aria-label={alt || "Project video preview"}
            />
        );
    }

    return (
        <img
            src={src}
            alt={alt || "Project media"}
            className="project-media-image"
        />
    );
}