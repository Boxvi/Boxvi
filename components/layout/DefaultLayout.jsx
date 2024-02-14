import PagesMetaHead from "@components/PagesMetaHead";
import AppHeader from "@components/shared/AppHeader";
import AppFooter from "@components/shared/AppFooter";

const DefaultLayout = ({children}) => {
    return (
        <>
            <PagesMetaHead/>
            <AppHeader/>
            <div>{children}</div>
            <AppFooter />
        </>
    )
}

export default DefaultLayout;
