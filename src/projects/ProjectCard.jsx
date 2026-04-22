import ProjectIcons from "./ProjectIcons";
import ProjectMedia from "./ProjectMedia";
import styles from "./ProjectCard.module.css";
import ReactMarkdown from "react-markdown";

export function ProjectCard({ project }) {
    // Destructuring extracts properties from the project object
    const { date, position, techStack, description, icons } = project;
    const hasIcons = icons != null;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                {hasIcons && (
                    <div>
                        <ProjectIcons icons={icons} />
                    </div>
                )}

                <p>{date}</p>
            </div>

            <div className={styles.contentContainer}>
                <h3>{position}</h3>

                {techStack && (
                    <p className={styles.subtitle}>{techStack}</p>
                )}

                {/* {tags.length > 0 && (
                    <p className={styles.tags}>
                        {tags.join(", ")}
                    </p>
                )} */}

                <p className={styles.description}>
                    <ReactMarkdown>{description}</ReactMarkdown>
                </p>
            </div>
        </div>

        // <div className={`${layoutClass}`}>
        //     {hasIcons && (
        //         <div>
        //             <ProjectIcons icons={icons} />
        //         </div>
        //     )}
        //     {/* to align media below icons */}
        //     <div aria-hidden="true" />

        //     <div>
        //         <p>{date}</p>
        //         <h3>{position}</h3>
        //         <p className={styles.techStackText}>{techStack}</p>
        //         <div className={styles.formattedText}>
        //             <ReactMarkdown>{description}</ReactMarkdown>
        //         </div>
        //     </div>

        //     {hasMedia && (
        //         <div className={styles.media}>
        //             <ProjectMedia media={media} />
        //         </div>
        //     )}
        // </div>
    );
}
