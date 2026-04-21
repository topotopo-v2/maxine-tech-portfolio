import { useActiveSectionTracking } from "./useActiveSectionTracking";
import styles from "./NavigationBar.module.css";
import SocialIcons from "../common/SocialIcons";

const NAVIGATION_LINKS = [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "values", label: "STUDYTGT" }
];

export default function NavigationBar({ aboutRef, experienceRef, valuesRef }) {
    const active = useActiveSectionTracking(aboutRef, experienceRef, valuesRef);

    return (
        <div className={styles.container}>
            <div className={styles.socialIconsHidden}>
                <SocialIcons />
            </div>

            <nav>
                <ul>
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