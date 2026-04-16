import { useEffect, useState } from "react";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.svg";
import leetcodeIcon from "./assets/leetcode.svg"

export default function NavigationBar({ aboutRef, experienceRef, valuesRef }) {

    const [active, setActive] = useState("");

    useEffect(() => {
        const sections = [
            { id: "about", ref: aboutRef },
            { id: "experience", ref: experienceRef },
            { id: "values", ref: valuesRef }
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                let visibleSection = null;

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        visibleSection = entry.target.id;
                    }
                });

                if (visibleSection) {
                    setActive(visibleSection);
                }
            },
            {
                threshold: 0.1, // lower = more reliable
            }
        );

        sections.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });

        return () => observer.disconnect();
    }, [aboutRef, experienceRef, valuesRef]);

    return (
        <div class="floating-nav">
            <div className="social-icons">
                <a
                    href="https://linkedin.com/in/maxinemicu/?skipRedirect=true"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a
                    href="https://github.com/topotopo-v2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={githubIcon} alt="GitHub" />
                </a>
                <a
                    href="https://leetcode.com/u/topotopo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={leetcodeIcon} alt="LeetCode" />
                </a>
            </div>

            <div>
                <ul class="navigation">
                    <li class="navigation"><a href="#about" target="_self" class={active === "about" ? "active" : ""}>ABOUT</a></li>
                    <li class="navigation"><a href="#experience" target="_self" class={active === "experience" ? "active" : ""}>EXPERIENCE</a></li>
                    <li class="navigation"><a href="#values" target="_self" class={active === "values" ? "active" : ""}>STUDY W/ ME</a></li>
                </ul>
            </div>
        </div>
    );
}