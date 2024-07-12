import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Badge from "../../components/ui/badge";
import { GiShoppingBag } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import ShopCartBtn from "./shopCartBtn";
import { Minus, Plus } from "lucide-react";
import dataSlice from "../../redux/dataSlice";
import { useState } from "react";
import UZSum from "../../functions/currency";

const ShopCartContext = () => {
    const [count, setCount] = useState(0)
    const dispatch = useDispatch()

  const datas = useSelector((state) => state.dataSlice.selectedDatas);
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="tailwind.config.jspx-2 tailwind.config.jscursor-pointer tailwind.config.jsrelative">
          {" "}
          <GiShoppingBag size={20} />
          {datas.length > 0&&<Badge
            className={
              "tailwind.config.jsabsolute tailwind.config.jstop-0  tailwind.config.jsright-0 tailwind.config.jstranslate-x-5 tailwind.config.jstranslate-y-[-10px]"
            }
          >
            {datas.reduce((e, cur)=>e+cur.count, 0)}
          </Badge>}
        </MenubarTrigger>
        <MenubarContent className="tailwind.config.jsgrid tailwind.config.jsgap-1 tailwind.config.jsmin-w-[290px] tailwind.config.jsw-full">
          {datas &&
            datas.map((e, i) => (
              <MenubarItem
                key={i}
                className="hover:tailwind.config.jsbg-opacity-85 tailwind.config.jstext-sm tailwind.config.jsfont-semibold tailwind.config.jsgrid"
              >
                <p className="tailwind.config.jsflex tailwind.config.jsjustify-between tailwind.config.jsitems-center">
                  <h1 className="tailwind.config.jsfont-bold tailwind.config.jstext-lg">
                    {e.name}
                  </h1>
                  <span className="tailwind.config.jstext-base">
                    {UZSum.format(e.price).toString().slice(0, -8)} so'm
                  </span>
                </p>

                <p className="tailwind.config.jstext-[16px]">
                  {e.count} x {UZSum.format(e.price).slice(0, -8)} ={" "}
                  {UZSum.format(e.price * e.count).slice(0, -8)} so'm
                </p>
                <div className="tailwind.config.jsgrid tailwind.config.jsgrid-cols-[auto_1fr_auto] tailwind.config.jsgap-3 tailwind.config.jsmt-2">
                    <ShopCartBtn className={""} icon={<Minus />} onClick={() => {
                        dispatch(dataSlice.actions.decreaseCount(e.id))
                        setCount((count - 1 === 0) ? 1 : count - 1)
                    }} />
                    <div className="tailwind.config.jsinline-flex tailwind.config.jsmin-w-full tailwind.config.jstext-center tailwind.config.jsjustify-center tailwind.config.jsitems-center tailwind.config.jsfont-bold tailwind.config.jsh-10 tailwind.config.jsbackdrop-blur-none tailwind.config.jsbg-stone-200/40 tailwind.config.jsrounded-md">{e.count}</div>
                    <ShopCartBtn icon={<Plus />} onClick={() => {
                        dispatch(dataSlice.actions.increaseCount(e.id))
                        setCount((e) => e + 1)
                    }} />
                </div>
              </MenubarItem>
            ))}

          {datas.length > 0 && (
            <h1 className="tailwind.config.jstext-base tailwind.config.jstext-center tailwind.config.jspy-1 tailwind.config.jsborder tailwind.config.jsrounded-lg tailwind.config.jsbg-zinc-100 tailwind.config.jsbackdrop-blur-xl">
              Jami:{" "}
              <span className="tailwind.config.jsfont-bold">
                {UZSum.format(
                  datas.reduce((e, prev) => e + prev.count * prev.price, 0)
                )
                  .toString()
                  .slice(0, -8)}{" "}
                so'm
              </span>
            </h1>
          )}

          {datas.length === 0 && (
            <div className="tailwind.config.jsp-3 tailwind.config.jsflex tailwind.config.jsgap-3 tailwind.config.jsflex-col tailwind.config.jsjustify-center tailwind.config.jsitems-center">
              <img src="/empty.svg" width={100} />
              <p className="tailwind.config.jstext-lg tailwind.config.jsfont-medium">Your cart is empty!</p>
            </div>
          )}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};

export default ShopCartContext;
