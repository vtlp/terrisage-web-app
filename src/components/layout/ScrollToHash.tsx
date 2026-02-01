"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export function ScrollToHash() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        const handleScroll = () => {
            const hash = window.location.hash;
            if (hash) {
                // Wait for DOM layout
                setTimeout(() => {
                    const id = hash.replace("#", "");
                    const element = document.getElementById(id);
                    if (element) {
                        const headerOffset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerOffset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        });
                    }
                }, 100);
            }
        };

        handleScroll();
    }, [pathname, searchParams]);

    return null;
}
