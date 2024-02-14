import ProjectsGrid from "@components/projects/ProjectsGrid";
import PagesMetaHead from "@components/PagesMetaHead";

function index() {
    return (
        <div className="container mx-auto">
            <PagesMetaHead title="Projects"/>

            <ProjectsGrid/>
        </div>
    );
}

export default index;
