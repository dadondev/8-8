import ShopCartBtn from "./shopCartBtn";
import { Heart } from "lucide-react";
import ContextMenu from "./context";
import { useSelector } from "react-redux";
import ShopCartContext from "./shopCartContext";

const Actions = ({ type }) => {
  const allDatas = useSelector((e) => e.dataSlice.allDatas);
  const likedDatas = useSelector((s) => s.dataSlice.likedDatas);
  return (
    <ul
      className={
        type
          ? "tailwind.config.jsflex tailwind.config.jsgap-5 sm:tailwind.config.jshidden tailwind.config.jsmx-auto tailwind.config.jsmb-4"
          : "tailwind.config.jshidden sm:tailwind.config.jsflex tailwind.config.jsgap-5"
      }
    >
      <ShopCartBtn
        count={allDatas.length !== 0&& likedDatas.filter((e) => e.id).length}
        icon={<Heart size={20}></Heart>}
        variant={"outline"}
      />
      <ShopCartContext />
      <ContextMenu />
    </ul>
  );
};

export default Actions;

{
  /* <ShopCartBtn count={datas.reduce((e, cur) => e + cur.count, 0)} icon={<GiShoppingBag size={20}></GiShoppingBag>} variant={"outline"} /> */
}
