import useThemeSwitcher from "@hooks/useThemeSwitcher";
import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logoDark from "@public/images/logo-dark.svg";
import logoLight from "@public/images/logo-light.svg";
import {FiMoon, FiSun} from "react-icons/fi";

export default function AppHeader() {
    const [activeTheme, setTheme] = useThemeSwitcher();

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
                            {activeTheme === 'dark' ? (
                                <Image
                                    src={logoDark}
                                    className="w-36 cursor-pointer"
                                    alt="Dark Logo"
                                    width={150}
                                    height={120}
                                />
                            ) : (
                                <Image
                                    src={logoLight}
                                    className="w-36 cursor-pointer"
                                    alt="Dark Logo"
                                    width={150}
                                    height={120}
                                />
                            )}
                        </Link>
                    </div>

                    <div
                        onClick={() => setTheme(activeTheme)}
                        aria-label="Theme Switcher"
                        className="block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                        {activeTheme === 'dark' ? (
                            <FiSun className="text-2xl text-primary-dark dark:text-primary-light"/>
                        ) : (
                            <FiMoon className="text-2xl text-primary-dark dark:text-primary-light"/>
                        )}
                    </div>

                </div>
            </div>
        </motion.nav>

    )
}

