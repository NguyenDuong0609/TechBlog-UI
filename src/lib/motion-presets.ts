import { Variants } from "framer-motion";

export const EASING = {
    easeOut: [0.25, 0.1, 0.25, 1],
    spring: { type: "spring", stiffness: 300, damping: 30 },
    springSnappy: { type: "spring", stiffness: 400, damping: 25 },
    springGentle: { type: "spring", stiffness: 200, damping: 25, mass: 1 },
};

export const PRESETS = {
    hoverCard: {
        rest: {
            y: 0,
        },
        hover: {
            y: -8,
            transition: { ...EASING.springSnappy }
        },
    } as Variants,

    buttonPress: {
        rest: { scale: 1 },
        tap: {
            scale: 0.95,
            transition: { type: "spring", stiffness: 500, damping: 15 }
        },
    } as Variants,

    pageTransition: {
        initial: { opacity: 0, y: 10 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
        },
    } as Variants,

    staggerContainer: {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    } as Variants,

    staggerItem: {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { ...EASING.springGentle }
        }
    } as Variants,

    reveal: {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { ...EASING.springGentle }
        }
    } as Variants,

    listItemHover: {
        initial: { x: 0 },
        hover: {
            x: 4,
            transition: { ...EASING.springSnappy }
        },
    } as Variants,

    postCardProfessional: {
        initial: { opacity: 1 },
        hover: {
            scale: 1.005,
            transition: { duration: 0.2, ease: "easeOut" }
        },
        tap: { scale: 0.995 }
    } as Variants,

    postTitleHover: {
        initial: { scale: 1 },
        hover: {
            scale: 1,
            transition: { duration: 0.15 }
        }
    } as Variants,

    postTagHover: {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            transition: { duration: 0.15 }
        }
    } as Variants,
};
