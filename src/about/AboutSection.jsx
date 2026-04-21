import SocialIcons from "../common/SocialIcons";

const SKILLS = [
    {
        id: 'android',
        title: 'ANDROID',
        proficiency: 'dark',
        items: ['Kotlin', 'Jetpack Compose', 'Coroutines', 'Flow']
    },
    {
        id: 'web',
        title: 'WEB (FRONTEND)',
        proficiency: 'medium',
        items: ['React', 'HTML & CSS']
    },
    {
        id: 'backend',
        title: 'BACKEND',
        proficiency: 'light',
        items: ['Go Lang']
    }
];

export default function AboutSection({ aboutRef }) {
    return (
        <section id="about" ref={aboutRef}>
            <div className="page">
                <div className="social-media-icons">
                    <SocialIcons />
                </div>
                <div className="page-content">
                    <h1>Hello visitor,</h1>
                    <div className="summary">
                        <p>I am Maxine, a Software Engineer with 10+ years of experience, specialising in Android development and supported by backend and web development experience. Based in Singapore, I have worked across corporate environments delivering production-grade software used in real-world applications.
                            My core strength is building and maintaining robust Android applications, with the ability to contribute across backend and web systems when needed. I am currently available for freelance and contract opportunities, where I can help teams ship reliable, scalable products efficiently.</p>
                    </div>
                    <h2>Skills</h2>
                    <div className="skills-container">
                        {SKILLS.map(skill => (
                            <div key={skill.id}>
                                <div className={`circle-proficient-${skill.proficiency}`} aria-label={`${skill.title} proficiency indicator`} />
                                <p><strong>{skill.title}</strong></p>
                                {skill.items.map(item => (
                                    <p key={item}>{item}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="label-container">
                        <p>Proficiency</p>
                        <div className="label-circles">
                            <div className="circle-proficient-dark" />
                            <div className="circle-proficient-medium" />
                            <div className="circle-proficient-light" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}