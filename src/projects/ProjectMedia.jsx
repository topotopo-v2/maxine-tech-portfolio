import styles from "./ProjectMedia.module.css";

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
                className={styles.video}
                aria-label={alt || "Project video preview"}
            />
        );
    }

    return (
        <img
            src={src}
            alt={alt || "Project media"}
            className={styles.image}
        />
    );
}