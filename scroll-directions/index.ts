import throttle from "@/lib/vendor/throttle";

const CLASS_MAP_SCROLL = {
    DOWN: "is-scrolldown",
    UP: "is-scrollup",
};

const scrollDirection = () => {
    let lastScrollTop = 0;
    const safeArea = 100;

    window.addEventListener("scroll", () => {
        const currentScroll = (window.scrollY || document.documentElement.scrollTop);

        if (currentScroll < safeArea) {
            document.body.classList.remove(CLASS_MAP_SCROLL.DOWN, CLASS_MAP_SCROLL.UP);
            return;
        }

        if (currentScroll > lastScrollTop) {
            document.body.classList.add(CLASS_MAP_SCROLL.DOWN);
            document.body.classList.remove(CLASS_MAP_SCROLL.UP);
        } else {
            document.body.classList.add(CLASS_MAP_SCROLL.UP);
            document.body.classList.remove(CLASS_MAP_SCROLL.DOWN);
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
};

const throttledScrollDirection = throttle(scrollDirection, 100);

export default throttledScrollDirection;
