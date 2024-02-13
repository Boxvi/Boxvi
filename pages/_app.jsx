import {AnimatePresence} from "framer-motion";
import DefaultLayout from "@components/layout/DefaultLayout";
// import DefaultLayout from "@components/layout/DefaultLayout";

export default function MyApp({Component, pageProps}) {
    return (
        <AnimatePresence>
            <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>

            </div>
        </AnimatePresence>

    )
}
