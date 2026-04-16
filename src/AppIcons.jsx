import { AppIconType } from "./appIconType";

export default function AppIcons({ icons = [] }) {

    if (!icons || icons.length === 0) return null;

    return (
        <div className="app-icons">
            {icons.map((icon, index) => {
                const { src, href, type } = icon

                const size =
                    type === AppIconType.MOBILE
                        ? { width: 80, height: 80 }
                        : { width: 140, height: 80 };

                if (!icon?.src || !icon?.href) return null;

                return (
                    <a key={index} href={href} target="_blank">
                        <img
                            src={src}
                            width={size}
                            height={size}
                            style={{ objectFit: "contain" }}
                            alt=""
                        />
                    </a>
                )
            })}
        </div>
    );
}