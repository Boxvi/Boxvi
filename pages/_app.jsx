import {AnimatePresence} from "framer-motion";
import DefaultLayout from "@components/layout/DefaultLayout";
import {ThemeProvider} from "next-themes";
import '../styles/globals.css';

export default function MyApp({Component, pageProps}) {
    return (
        <ThemeProvider enableSystem={true}  attribute="class">
            <AnimatePresence>
                <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
                    <DefaultLayout>
                        <Component {...pageProps} />
                    </DefaultLayout>
                </div>
            </AnimatePresence>
        </ThemeProvider>
    )
}
