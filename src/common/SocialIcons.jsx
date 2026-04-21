import linkedinIcon from "../assets/linkedin.png";
import githubIcon from "../assets/github.svg";
import leetcodeIcon from "../assets/leetcode.svg";
import styles from "./SocialIcons.module.css";

const SOCIAL_LINKS = [
  { url: "https://linkedin.com/in/maxinemicu/?skipRedirect=true", icon: linkedinIcon, label: "LinkedIn" },
  { url: "https://github.com/topotopo-v2", icon: githubIcon, label: "GitHub" },
  { url: "https://leetcode.com/u/topotopo/", icon: leetcodeIcon, label: "LeetCode" }
];

export default function SocialIcons() {
  return (
    <div className={styles.container}>
      {SOCIAL_LINKS.map((link) => {
        if (!link?.url || !link?.icon) return null;

        const { label, url, icon } = link;

        return (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <img
              src={icon}
              alt={label}
              className={styles.icon}
            />
          </a>
        );
      })}
    </div>
  );
}