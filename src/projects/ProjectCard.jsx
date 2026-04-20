import ProjectIcons from "./ProjectIcons";
import ProjectMedia from "./ProjectMedia";

const LAYOUT_CLASSES = {
    withMedia: "project-card-two-column-container",
    withoutMedia: "project-card-default-container"
};

const TEXT_CLASSES = {
    techStack: "tech-stack-text",
    description: "formatted-text"
};

export function ProjectCard({ project }) {
    // Destructuring extracts properties from the project object
    const { date, position, techStack, description, icons, media } = project;

    const hasMedia = media != null;
    const hasIcons = icons != null;
    const layoutClass = hasMedia ? LAYOUT_CLASSES.withMedia : LAYOUT_CLASSES.withoutMedia;

    return (
        <div className={layoutClass}>
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
                <p className={TEXT_CLASSES.techStack}>{techStack}</p>
                <p className={TEXT_CLASSES.description}>{description}</p>
            </div>

            {hasMedia && (
                <div className="project-media-container">
                    <ProjectMedia media={media} />
                </div>
            )}
        </div>
    );
}
