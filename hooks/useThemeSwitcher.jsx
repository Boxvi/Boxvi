import { useEffect, useState } from 'react';

const useThemeSwitcher = () => {
    const [theme, setTheme] = useState(
        typeof window !== 'undefined' ? localStorage.theme : ''
    );
    const activeTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove(activeTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, activeTheme]);

    return [activeTheme, setTheme];
};

export default useThemeSwitcher;
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
