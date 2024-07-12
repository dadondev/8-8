import React, { useEffect } from "react";
import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "../../components/ui/sheet";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../../redux/modalSlice";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Button } from "../../components/ui/button";

const EditSheet = () => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(modalSlice.actions.closeModal());
  };
  const datas = useSelector((e)=>e.modalSlice.defaultData)
  useEffect(()=>{
    console.log(datas);
  },[])
  return (
    <SheetContent setOpen={handleClose}>
      <SheetHeader>
        <SheetTitle>Edit food</SheetTitle>
        <SheetDescription>
          Please,You must edit datas!
        </SheetDescription>
      </SheetHeader>
      <div className="tailwind.config.jsgrid tailwind.config.jsgap-4 tailwind.config.jspy-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" value={datas.name} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Description
          </Label>
          <Input id="username" value={datas.desc} className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="selectCatalog" className="text-right">
            Catalog
          </Label>
          <Select id="selectCatalog">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={datas.catalog} />
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
            value={datas.price}
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
  );
};

export default EditSheet;
