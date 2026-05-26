"use client"

import style from "./ThemeToggle.module.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


export default function ThemeToggle() {
    const { themeLight, setThemeLight } = useContext(ThemeContext);

    return (
        <button
            className={style.toggle}
            onClick={() => setThemeLight(!themeLight)}
        >
            {themeLight ? "🌙" : "☀️"}
        </button>
    )
}