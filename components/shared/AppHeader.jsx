import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {FiMenu, FiMoon, FiSun, FiX} from "react-icons/fi";
import Image from "next/image";
import {motion} from 'framer-motion';
import Link from "next/link";
import logoLight from "@public/images/logo-light.svg";
import logoDark from "@public/images/logo-dark.svg";
import HireMeModal from "@components/HireMeModal";
import {headerData} from "@data/headerData";

export default function AppHeader() {
    const {systemTheme, theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    const currentTheme = theme === 'system' ? systemTheme : theme;

    const toggleTheme = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    function toggleMenu() {
        if (!showMenu) {
            setShowMenu(true);
        } else {
            setShowMenu(false);
        }
    }

    function showHireMeModal() {
        if (!showModal) {
            document
                .getElementsByTagName('html')[0]
                .classList.add('overflow-y-hidden');
            setShowModal(true);
        } else {
            document
                .getElementsByTagName('html')[0]
                .classList.remove('overflow-y-hidden');
            setShowModal(false);
        }
    }

    return (
        <motion.nav
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            id="nav"
            className="sm:container sm:mx-auto"
        >
            <div
                className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
                <div className="flex justify-between items-center px-4 sm:px-0">
                    <div>
                        <Link href="/">
                            {currentTheme === 'dark' ? (
                                <Image
                                    src={logoLight}
                                    className="w-36 cursor-pointer"
                                    alt="Dark Logo"
                                    width={150}
                                    height={120}
                                />

                            ) : (
                                <Image
                                    src={logoDark}
                                    className="w-36 cursor-pointer"
                                    alt="Dark Logo"
                                    width={150}
                                    height={120}
                                />
                            )}
                        </Link>
                    </div>


                    <div
                        onClick={toggleTheme}
                        aria-label="Theme Switcher"
                        className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {currentTheme === 'dark' ? (
                            <FiMoon
                                className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"/>
                        ) : (
                            <FiSun className="text-gray-200 hover:text-gray-50 text-xl"/>
                        )}
                    </div>

                    <div className="sm:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="focus:outline-none"
                            aria-label="Hamburger Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
                            >
                                {showMenu ? (
                                    <FiX className="text-3xl"/>
                                ) : (
                                    <FiMenu className="text-3xl"/>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className={
                        showMenu
                            ? 'block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none'
                            : 'hidden'
                    }
                >
                    {headerData.map((item) => (
                        <div key={item.label}
                             className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                            <Link href={item.path} aria-label={item.title}>
                                {item.title}
                            </Link>
                        </div>
                    ))}

                    <div
                        className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
                        <button
                            onClick={showHireMeModal}
                            className="font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24"
                            aria-label="Hire Me Button"
                        >
                            Contratame
                        </button>
                    </div>
                </div>

                <div
                    className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
                    {headerData.map((item) => (
                        <div key={item.label}
                             className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
                             aria-label={item.label}>
                            <Link href={item.path} aria-label={item.title}>
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Header right section buttons */}
                <div className="hidden sm:flex justify-between items-center flex-col md:flex-row">
                    <div className="hidden md:flex">
                        <button
                            onClick={showHireMeModal}
                            className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300"
                            aria-label="Hire Me Button"
                        >
                            Contratame
                        </button>
                    </div>

                    {/* Theme switcher large screen */}
                    <div
                        onClick={toggleTheme}
                        aria-label="Theme Switcher"
                        className="ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {currentTheme === 'dark' ? (
                            <FiSun className="text-gray-200 hover:text-gray-50 text-xl"/>
                        ) : (
                            <FiMoon
                                className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"/>
                        )}
                    </div>
                </div>
            </div>

            <div>
                {showModal ? (
                    <HireMeModal
                        onClose={showHireMeModal}
                        onRequest={showHireMeModal}
                    />
                ) : null}
                {showModal ? showHireMeModal : null}
            </div>
        </motion.nav>
    );
}

