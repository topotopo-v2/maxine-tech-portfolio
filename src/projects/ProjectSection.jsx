import { MediaType } from "./mediaType"
import { ProjectIconType } from "./projectIconType";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";

const SECTION_CONTENT = {
    title: "Experience",
    description: "Here’s a list of my recent projects. You can download my resume here for my complete work experience and projects.",
    resumeUrl: "/path/to/resume.pdf", // Update with actual resume path
};

export default function ProjectSection({ experienceRef }) {
    return (
        <section id="experience" ref={experienceRef}>
            <div className="page">
                <div className="page-content">
                    <h1>{SECTION_CONTENT.title}</h1>
                    <div className="summary">
                        <p>{SECTION_CONTENT.description}</p>
                        {/* {SECTION_CONTENT.resumeUrl && (
                            <a href={SECTION_CONTENT.resumeUrl} download aria-label="Download resume">
                                Download resume
                            </a>
                        )} */}
                    </div>

                    {projects && projects.length > 0 ? (
                        projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))
                    ) : (
                        <p>No projects available at the moment.</p>
                    )}
                </div>
            </div>
        </section>
    );
}