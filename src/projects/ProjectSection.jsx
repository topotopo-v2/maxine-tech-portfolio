import { MediaType } from "./mediaType"
import { ProjectIconType } from "./projectIconType";
import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";

const SECTION_CONTENT = {
    title: "Experience",
    description: "Here are some highlights from my career journey, showcasing my experience across various projects and roles.",
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
                    </div>

                    <div className="projects">
                        {projects && projects.length > 0 ? (
                            projects.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        ) : (
                            <p>No projects available at the moment.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}