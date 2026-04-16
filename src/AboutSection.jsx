export default function AboutSection({ aboutRef }) {
    return (
        <section id="about" ref={aboutRef}>
            <div class="page">
                <div class="page-content">
                    <h1>Hello visitor,</h1>
                    <div class="summary"><p>I am Maxine, a Software Engineer with 10+ years of experience, specialising in Android development and supported by backend and web development experience. Based in Singapore, I have worked across corporate environments delivering production-grade software used in real-world applications.

                        My core strength is building and maintaining robust Android applications, with the ability to contribute across backend and web systems when needed. I am currently available for freelance and contract opportunities, where I can help teams ship reliable, scalable products efficiently.</p></div>
                    <h2>Skills</h2>
                    <div class="three-column-container">
                        {/* Android */}
                        <div>
                            <div className="circle-proficient-dark" />
                            <p><strong>ANDROID</strong></p>
                            <p>Kotlin</p>
                            <p>Jetpack Compose</p>
                            <p>Coroutines</p>
                            <p>Flow</p>
                        </div>
                        {/* web */}
                        <div>
                            <div className="circle-proficient-medium" />
                            <p><strong>WEB (FRONTEND)</strong></p>
                            <p>React</p>
                            <p>HTML & CSS</p>
                        </div>
                        {/* backend */}
                        <div>
                            <div className="circle-proficient-light" />
                            <p><strong>BACKEND</strong></p>
                            <p>Go Lang</p>
                        </div>
                    </div>
                    <div class="label-container">
                        <p>Proficiency</p>
                        <div class="label-circles">
                            <div className="circle-proficient-dark" />
                            <div className="circle-proficient-medium" />
                            <div className="circle-proficient-light" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}