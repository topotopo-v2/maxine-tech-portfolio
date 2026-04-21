import { ProjectIconType } from "./projectIconType";
import styles from './ProjectIcons.module.css';

export default function ProjectIcons({ icons = [] }) {

    if (icons.length === 0) return null;

    return (
        <div className={styles.container}>
            {icons.map((icon) => {
                if (!icon?.src || !icon?.href) return null;

                const { src, href, type, label } = icon;
                const iconStyle =
                    type === ProjectIconType.MOBILE
                        ? styles.mobile
                        : styles.web;

                return (
                    <a
                        key={href}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label || "Open project link"}
                    >
                        <img
                            src={src}
                            className={`${iconStyle} ${styles.icon}`}
                            alt={label || "Project icon"}
                        />
                    </a>
                );
            })}
        </div>
    );
}