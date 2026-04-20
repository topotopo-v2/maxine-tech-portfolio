import { useEffect, useState } from 'react';

export function useActiveSectionTracking(aboutRef, experienceRef, valuesRef) {
    const [active, setActive] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.1 }
        );

        [aboutRef, experienceRef, valuesRef].forEach((ref) => {
            if (ref?.current) {
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, [aboutRef, experienceRef, valuesRef]);

    return active;
}
