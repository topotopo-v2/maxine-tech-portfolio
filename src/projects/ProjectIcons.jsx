import { ProjectIconType } from "./projectIconType";

export default function ProjectIcons({ icons = [] }) {

    if (icons.length === 0) return null;

    return (
        <div className="app-icons">
            {icons.map((icon) => {
                if (!icon?.src || !icon?.href) return null;

                const { src, href, type, label } = icon;
                const size =
                    type === ProjectIconType.MOBILE
                        ? { width: 80, height: 80 }
                        : { width: 140, height: 80 };

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
                            width={size.width}
                            height={size.height}
                            style={{ objectFit: "contain" }}
                            alt={label || "Project icon"}
                        />
                    </a>
                );
            })}
        </div>
    );
}