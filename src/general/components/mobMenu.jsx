import { CgMenuMotion } from "react-icons/cg"
import { Button } from "../../components/ui/button"
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../../components/ui/drawer"
import DrawerBtn from "./drawerBtn"
import Actions from "./actions"


const MobMenu = () => {
    return (
        <Drawer>
            <DrawerTrigger className="md:tailwind.config.jshidden"><CgMenuMotion size={30} /></DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <Actions type/>
                    <DrawerTitle>Do you want change page?</DrawerTitle>
                    <DrawerDescription>Please, Select one page!</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <ul className='tailwind.config.jsgrid tailwind.config.jsgap-4'>
                        <DrawerBtn text={"Home"} to={"/"}/>
                        <DrawerBtn text={"Dashboard"} to={"/dashboard"}/>
                        <DrawerBtn text={"My products"} to={"/myproducts"}/>
                    </ul>
                    <DrawerClose>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>

    )
}

export default MobMenu