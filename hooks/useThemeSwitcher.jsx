//
//     const [mounted, setMounted] = useState(false);
//
//     useEffect(() => {
//         setMounted(true);
//     }, []);
//
//     if (!mounted) return null;
//     const currentTheme = theme === 'system' ? systemTheme : theme;

"use client"
// import { useEffect, useState } from 'react';
//
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

const useThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();
    const [customTheme, setCustomTheme] = useState(theme);

    useEffect(() => {
        setCustomTheme(theme);
    }, [theme]);

    const toggleTheme = () => {
        setCustomTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return { customTheme, toggleTheme };
};


export default useThemeSwitcher;
//     const [theme, setTheme] = useState(() => {
//         if (typeof window !== 'undefined') {
//             const savedTheme = localStorage.getItem('theme');
//             if (savedTheme) {
//                 return savedTheme;
//             }
//         }
//         return 'light';
//     });
//
//     useEffect(() => {
//         // Solo ejecuta en el cliente después de la renderización inicial
//         if (typeof window !== 'undefined') {
//             const savedTheme = localStorage.getItem('theme');
//             if (savedTheme && savedTheme !== theme) {
//                 setTheme(savedTheme);
//             }
//         }
//     }, []);
//
//     const toggleTheme = () => {
//         setTheme((prevTheme) => {
//             const newTheme = prevTheme === 'light' ? 'dark' : 'light';
//             localStorage.setItem('theme', newTheme); // Guardar el tema
//             return newTheme;
//         });
//     };
//
//     return [theme, toggleTheme];

//
// export default useThemeSwitcher;


// import { useEffect, useState } from 'react';
//
// const useThemeSwitcher = () => {
//     const [theme, setTheme] = useState(
//         typeof window !== 'undefined' ? localStorage.getItem('theme') || 'light' : 'dark'
//     );
//
//     useEffect(() => {
//         const activeTheme = theme === 'dark' ? 'light' : 'dark'; // Calcula activeTheme dentro del efecto
//         const root = window.document.documentElement;
//
//         root.classList.remove(activeTheme);
//         root.classList.add(theme);
//         localStorage.setItem('theme', theme);
//     }, [theme]);
//
//     return [theme, setTheme];
// };
//
// export default useThemeSwitcher;

// const [darkMode, setDarkMode] = useState(false);
//
// useEffect(() => {
//
//
//     if (savedTheme) {
//         return savedTheme
//     }
//
//     return "light"
//
// }, [darkMode]);
//
// const setTheme = () => {
//     const newDarkMode = !darkMode;
//     setDarkMode(newDarkMode);
//     localStorage.setItem('theme', JSON.stringify(newDarkMode));
// };
//
// return [darkMode, setTheme];


//     const [theme, setTheme] = useState(
//         typeof window !== 'undefined' ? localStorage.theme : ''
//     );
//     const activeTheme = theme === 'dark' ? 'light' : 'dark';
//
//     useEffect(() => {
//         const root = window.document.documentElement;
//
//         root.classList.remove(activeTheme);
//         root.classList.add(theme);
//         localStorage.setItem('theme', theme);
//     }, [theme, activeTheme]);
//
//     return [activeTheme, setTheme];
