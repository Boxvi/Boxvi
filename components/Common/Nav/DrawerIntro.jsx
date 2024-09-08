export const DrawerIntro = ({ setIsOpen, isOpen }) => {
    return (
        <DrawerLayout setIsOpen={setIsOpen} isOpen={isOpen}>
            <Intro />
        </DrawerLayout>
        
    )
}
