import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.svg";
import leetcodeIcon from "../assets/leetcode.svg";
import { useActiveSectionTracking } from "./useActiveSectionTracking";

const SOCIAL_LINKS = [
    { url: "https://linkedin.com/in/maxinemicu/?skipRedirect=true", icon: linkedinIcon, label: "LinkedIn" },
    { url: "https://github.com/topotopo-v2", icon: githubIcon, label: "GitHub" },
    { url: "https://leetcode.com/u/topotopo/", icon: leetcodeIcon, label: "LeetCode" }
];

const NAVIGATION_LINKS = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "values", label: "STUDY W/ ME" }
];

export default function NavigationBar({ aboutRef, experienceRef, valuesRef }) {
    const active = useActiveSectionTracking(aboutRef, experienceRef, valuesRef);

    return (
        <div className="floating-nav">
            <div className="social-icons">
                {SOCIAL_LINKS.map((link) => (
                    <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                    >
                        <img src={link.icon} alt={link.label} />
                    </a>
                ))}
            </div>

            <nav>
                <ul className="navigation">
                    {NAVIGATION_LINKS.map((link) => (
                        <li key={link.id} className="navigation">
                            <a
                                href={`#${link.id}`}
                                className={active === link.id ? "active" : ""}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}