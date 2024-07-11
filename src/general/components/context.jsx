import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { LogOut, UserCircle } from "lucide-react";
import { BiKey } from "react-icons/bi";

const ContextMenu = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger className="tailwind.config.jspx-2 tailwind.config.jscursor-pointer"> <UserCircle size={20} /></MenubarTrigger>
                <MenubarContent className="tailwind.config.jsgrid tailwind.config.jsgap-1">
                    <MenubarItem className="hover:tailwind.config.jsbg-opacity-85 tailwind.config.jstext-sm tailwind.config.jsfont-semibold">Change Password <BiKey className="tailwind.config.jsml-auto" size={25} /></MenubarItem>
                    <MenubarItem className="tailwind.config.jsbg-red-500 hover:tailwind.config.jsbg-opacity-85 tailwind.config.jstext-white tailwind.config.jsfont-semibold">Log out <LogOut className="tailwind.config.jsml-auto" /></MenubarItem>

                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    );
};

export default ContextMenu;
