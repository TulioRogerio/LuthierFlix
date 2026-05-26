'use client'

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext({});

export function ThemeProvider({ children }) {
    const [themeLight, setThemeLight] = useState(() => {
        const themeName =
            localStorage.getItem('theme') ||
            document.documentElement.getAttribute('data-theme') ||
            'dark';
        return themeName === 'light';
    });

    useEffect(() => {
        const themename = themeLight ? 'light' : 'dark';
        localStorage.setItem('theme', themename);
        document.documentElement.setAttribute(
            'data-theme',
            themename
        );
    }, [themeLight]);
    return (
        <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
            {children}
        </ThemeContext.Provider>
    )
}