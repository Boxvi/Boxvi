function AppFooterCopyright() {
    return (
        <div className="font-general-regular flex justify-center items-center text-center">
            <div className="text-lg text-ternary-dark dark:text-ternary-light">
                &copy; {new Date().getFullYear()}
                <a
                    href="https://github.com/Boxvi"
                    target="__blank"
                    className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
                >
                    Boris Quizhpe
                </a>
                .{' '}
                <a
                    href="https://boxvi.vercel.app/"
                    target="__blank"
                    className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
                >
                    boxvi
                </a>
            </div>
        </div>
    );
}

export default AppFooterCopyright;
