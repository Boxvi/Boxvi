import {FiMoon, FiSun} from "react-icons/fi";
import {motion} from 'framer-motion';
import Link from "next/link";
import logoLight from '@public/images/logo-light.svg';
import logoDark from '@public/images/logo-dark.svg';
import Image from 'next/image';
import {useTheme} from "next-themes";
import {useEffect, useState} from "react"
import PagesMetaHead from "@components/PagesMetaHead";
import AppBanner from "@components/shared/AppBanner";
import ProjectsGrid from "@components/projects/ProjectsGrid";
import Button from "@components/reusable/Button";


export default function Home() {
    return (
        <div className="container mx-auto">
            <PagesMetaHead title="Boris Quizhpe Home"/>

            <AppBanner/>

            <ProjectsGrid/>

            <div className="mt-10 sm:mt-15 flex justify-center">
                <div
                    className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300">
                    <Link href="/projects" aria-label="More Projects" passHref>
                        <Button title="Mas Proyectos"/>
                    </Link>
                </div>
            </div>
        </div>
    );
}
