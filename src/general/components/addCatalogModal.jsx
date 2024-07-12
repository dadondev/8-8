import React from "react";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../../components/ui/sheet";

import { Button } from "../../components/ui/button";
import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";

const AddCatalogModal = ({ setOpen, open }) => {
  return (
    <SheetContent setOpen={setOpen}>
      <SheetHeader>
        <SheetTitle>Add Catalog</SheetTitle>
        <SheetDescription>Please, You must fill the form!</SheetDescription>
      </SheetHeader>
      <div className="tailwind.config.jsgrid tailwind.config.jsgap-4 tailwind.config.jspy-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            New catalog
          </Label>
          <Input id="name" className="col-span-3" />
        </div>
      </div>
      <SheetFooter
        className={
          "tailwind.config.jsmt-3 tailwind.config.jsgrid tailwind.config.jsgap-3 sm:tailwind.config.jsflex"
        }
      >
        <Button
          onClick={setOpen}
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

export default AddCatalogModal;
