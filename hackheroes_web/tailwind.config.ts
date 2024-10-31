import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                green: {
                    100: '#e3f9e5',
                    300: '#a3e4a3',
                    500: '#6cc66c',
                    600: '#3b9b3b',
                },
            },
        },
    },
    plugins: [],
};

export default config;