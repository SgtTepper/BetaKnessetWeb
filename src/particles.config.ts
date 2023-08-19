const particlesConfig = {
    particles: {
        number: {
            value: 20,
            density: {
                enable: true,
                value_area: 1000,
            },
        },
        color: {
            value: "#5294c8",
        },
        shape: {
            type: ["circle"],
            stroke: {
                width: 0,
                color: "#000000",
            },
            polygon: {
                nb_sides: 5,
            },
        },
        opacity: {
            value: 0.4,
            anim: {
                enable: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 200,
            color: "#72a4e8",
            opacity: 0.2,
            width: 1,
        },
        move: {
            enable: true,
            speed: 1,
            random: true,
            straight: false,
            out_mode: "bounce" as const,
            bounce: false,
            attract: {
                enable: false,
            },
        },
    },
    interactivity: {
        detect_on: "canvas" as const,
        onresize: {
            enable: false,
            density_auto: true,
            density_area: 40000000,
        },
    },
    modes: {
        bubble: {
            distance: 200,
            size: 4,
            duration: 2,
            opacity: 0.8,
            speed: 1,
        },
    },
    retina_detect: true,
};
export default particlesConfig;
