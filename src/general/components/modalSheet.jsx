import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../../components/ui/sheet";
import AddCatalogModal from "./addCatalogModal";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../../redux/modalSlice";
import EditSheet from "./editSheet";

export default function ModalSheet() {
  const dispatch = useDispatch();
  const datas = useSelector((e) => e.modalSlice);
  const handleClose = () => {
    dispatch(modalSlice.actions.closeModal());
  };
  return (
    <Sheet open={datas.open}>
      {datas.type === "addProduct" ? (
        <SheetContent setOpen={handleClose}>
          <SheetHeader>
            <SheetTitle>Add food</SheetTitle>
            <SheetDescription>
              Please,You must fill all forms! Beacuse we get information all
              forms!
            </SheetDescription>
          </SheetHeader>
          <div className="tailwind.config.jsgrid tailwind.config.jsgap-4 tailwind.config.jspy-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Description
              </Label>
              <Input id="username" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="selectCatalog" className="text-right">
                Catalog
              </Label>
              <Select id="selectCatalog">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Pizzas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pizzas">Pizzas</SelectItem>
                  <SelectItem value="burgers">Burgers</SelectItem>
                  <SelectItem value="fastfood">Fast food</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                className="tailwind.config.jscol-span-3 tailwind.config.jsappearance-none"
                min={0}
              />
            </div>
          </div>
          <SheetFooter
            className={
              "tailwind.config.jsmt-3 tailwind.config.jsgrid tailwind.config.jsgap-3 sm:tailwind.config.jsflex"
            }
          >
              <Button
          onClick={handleClose}
          type="button"
          className={
            "hover:!tailwind.config.jsbg-white !tailwind.config.jstext-black tailwind.config.jsborder !tailwind.config.jsbg-gray-50"
          }
        >
          Bekor qilish
        </Button>
            <SheetClose asChild>
              <Button type="button">Saqlash</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      ) : datas.type === "editProduct" ? (
        <EditSheet />
      ) : (
        <AddCatalogModal open={datas.open} setOpen={handleClose} />
      )}
    </Sheet>
  );
}
