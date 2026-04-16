import ProjectMedia from "./ProjectMedia"
import { MediaType } from "./mediaType"
import AppIcons from "./AppIcons"
import { AppIconType } from "./appIconType";
import { projects } from "./projects"

// AI w/ context would be good for the repetitieve task with clear pattern such as import
// better way to import
// what is alt for
// search best practice for passing attributes or the class itself??
function ProjectCard({ project }) {
    const { date, position, techStack, description, icons, media } = project; // what does this do

    const hasMedia = media != null
    const hasIcons = icons != null

    return (
        <div class={hasMedia ? "two-column-container-leftsmall" : "one-whole-column"}>

            {hasIcons && <div><AppIcons icons={icons} /></div>}
            <div />

            <div>
                <p>{date}</p>
                <h3>{position}</h3>
                <p class="tech-stack-text">{techStack}</p>
                <div className="space-thirty-two" />
                <p class="formatted-text">{description}</p>
            </div>
            {
                hasMedia && (
                    <div className="project-media-container"><ProjectMedia media={media} /></div>
                )
            }

        </div>
    )
}

export default function ProjectSection({ experienceRef }) {
    return (
        <section id="experience" ref={experienceRef}>
            <div class="page">
                <div class="page-content">
                    <h1>Experience</h1>
                    <div class="summary"><p>Here’s a list of my recent projects. You can download my resume here for my complete work experience and projects.</p></div>

                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </section >
    )
}