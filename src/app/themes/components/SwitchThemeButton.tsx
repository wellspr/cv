"use client";

import "../sass/switch_theme_button.scss";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "../context/ThemeContext";

export const SwitchThemeButton = () => {

    const { setTheme, theme } = useTheme();

    return (
        <>
            {
                theme === "light" &&
                <button className="switch-theme-button switch-theme-button--light"
                    onClick={() => setTheme("dark")}
                    disabled={theme !== "light"}>
                    <IconMoon />
                </button>
            }
            {
                theme === "dark" &&
                <button className="switch-theme-button switch-theme-button--dark"
                    onClick={() => setTheme("light")}
                    disabled={theme !== "dark"}>
                    <IconSun />
                </button>
            }
        </>
    );
};