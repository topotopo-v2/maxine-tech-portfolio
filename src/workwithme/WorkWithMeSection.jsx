const SECTION_CONTENT = {
    title: "Study with me",
    description:
        "I enjoy long periods of focused, independent work, but I’ve also worked in fast-paced environments and understand when communication and meetings are necessary to keep things aligned and moving."
};

export default function WorkWithMeSection({ valuesRef }) {
    return (
        <section id="values" ref={valuesRef}>
            <div className="page">
                <div className="page-content">
                    <h1 className="text-values">{SECTION_CONTENT.title}</h1>
                    <div className="summary">
                        <p>{SECTION_CONTENT.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}