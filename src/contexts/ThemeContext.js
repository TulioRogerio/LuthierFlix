// Client Component: usa hooks e APIs do navegador (localStorage, document)
'use client'

import { createContext, useState, useEffect } from "react";

// Cria o Context que será compartilhado entre os componentes da árvore
export const ThemeContext = createContext({});

// Provider: envolve a aplicação e fornece o estado do tema para todos os filhos
export function ThemeProvider({ children }) {
    // Estado que indica se o tema atual é claro (true) ou escuro (false)
    // Inicia como false para evitar acesso a localStorage/document durante o SSR
    const [themeLight, setThemeLight] = useState(false);

    // useEffect com array vazio: roda apenas uma vez, no cliente, após a primeira renderização
    // Aqui lemos o tema salvo (se houver) e ajustamos o estado
    useEffect(() => {
        const themeName =
            localStorage.getItem('theme') ??
            document.documentElement.getAttribute('data-theme') ??
            'dark';
        // ATENÇÃO: deveria ser "themeName === 'light'" (variável local), não "themeLight"
        setThemeLight(themeLight === 'light')
    }, []);

    // Sempre que themeLight mudar, persiste o novo valor no localStorage
    // e atualiza o atributo data-theme no <html> (usado pelo CSS para trocar cores)
    useEffect(() => {
        const themename = themeLight ? 'light' : 'dark';
        localStorage.setItem('theme', themename);
        document.documentElement.setAttribute(
            'data-theme',
            themename
        );
    }, [themeLight]);
    // Disponibiliza o estado e o setter para qualquer componente filho via useContext
    return (
        <ThemeContext.Provider value={{ themeLight, setThemeLight }}>
            {children}
        </ThemeContext.Provider>
    )
}