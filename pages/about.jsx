import { motion } from 'framer-motion';
import PagesMetaHead from "@components/PagesMetaHead";
import AboutMeBio from "@components/about/AboutMeBio";
import AboutCounter from "@components/about/AboutCounter";
import AboutClients from "@components/about/AboutClients";

export default function about() {
    return (
        <div>
            <PagesMetaHead title="About Me" />

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutMeBio />
            </motion.div>

            {/** Counter without paddings */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
            >
                <AboutCounter />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, delay: 1 }}
                exit={{ opacity: 0 }}
                className="container mx-auto"
            >
                <AboutClients />
            </motion.div>
        </div>
    );
}
