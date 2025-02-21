"use client";

import { useContext, createContext, useState } from "react";

export type ThemeType = "dark" | "light"

type ContextType = {
    theme: ThemeType
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>>
};

const defaultValue: ContextType = {
    theme: "dark",
    setTheme: () => { }
};

const Context = createContext(defaultValue);

export const ThemeContext = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState<ThemeType>("dark");

    const value: ContextType = {
        theme,
        setTheme,
    };

    return <Context.Provider value={value}>
        <body className={theme}>
            {children}
        </body>
    </Context.Provider>
};

export const useTheme = () => useContext<ContextType>(Context);