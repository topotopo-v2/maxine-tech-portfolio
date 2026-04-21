import ProjectIcons from "./ProjectIcons";
import ProjectMedia from "./ProjectMedia";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }) {
    // Destructuring extracts properties from the project object
    const { date, position, techStack, description, icons, media } = project;

    const hasMedia = media != null;
    const hasIcons = icons != null;
    const layoutClass = hasMedia ? styles.containerWithMedia : styles.container;

    return (
        <div className={`${layoutClass}`}>
            {hasIcons && (
                <div>
                    <ProjectIcons icons={icons} />
                </div>
            )}
            {/* to align media below icons */}
            <div aria-hidden="true" />

            <div>
                <p>{date}</p>
                <h3>{position}</h3>
                <p className={styles.techStackText}>{techStack}</p>
                <p className={styles.formattedText}>{description}</p>
            </div>

            {hasMedia && (
                <div className={styles.media}>
                    <ProjectMedia media={media} />
                </div>
            )}
        </div>
    );
}
