import PagesMetaHead from "@components/PagesMetaHead";
import AppHeader from "@components/shared/AppHeader";

const DefaultLayout = ({children}) => {
    return (
        <>
            <PagesMetaHead/>
            <AppHeader/>
            <div>{children}</div>
        </>
    )
}

export default DefaultLayout;
