// "use client" marca este componente como Client Component — necessário porque ele usa
// hooks (useContext) e eventos do navegador (onClick)
"use client"

import style from "./ThemeToggle.module.css";
// useState e useEffect estão importados mas não estão sendo usados neste componente
import { useState, useEffect } from "react";
// useContext permite ler valores de um Context criado em outro lugar
import { useContext } from "react";
// Importa o Context que carrega o estado do tema (claro/escuro)
import { ThemeContext } from "../contexts/ThemeContext";


export default function ThemeToggle() {
    // Lê o valor atual do tema e a função para alterá-lo, fornecidos pelo ThemeProvider
    const { themeLight, setThemeLight } = useContext(ThemeContext);

    return (
        <button
            className={style.toggle}
            // Inverte o estado do tema a cada clique
            onClick={() => setThemeLight(!themeLight)}
        >
            {/* Mostra a lua quando o tema é claro (para indicar que clicar muda para escuro) e vice-versa */}
            {themeLight ? "🌙" : "☀️"}
        </button>
    )
}