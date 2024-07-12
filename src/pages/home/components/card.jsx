import React, { useEffect, useState } from "react";
import ShopCartBtn from "../../../general/components/shopCartBtn";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import dataSlice from "../../../redux/dataSlice";

const Card = (props) => {
  const [like, setLike] = useState(false);
  const { name, id, images, desc, price } = props;
  const selectedDatas = useSelector((state) => {
    return state.dataSlice.selectedDatas;
  });
  const likedDatas = useSelector((e) => {
    return e.dataSlice.likedDatas || [];
  });
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    setLike(likedDatas.find((e) => e.id === id) ? true : false);
  }, [likedDatas]);
  const handleClick = () => {
    if (!like) dispatch(dataSlice.actions.giveLikedDatas(props));
    else dispatch(dataSlice.actions.removeLikedDatas(id));
  };
  return (
    <div className="tailwind.config.jsmax-w-[350px] tailwind.config.jsw-full tailwind.config.jsrelative tailwind.config.jsborder tailwind.config.jsbg-zinc-200/20 tailwind.config.jsbackdrop-blur-xl tailwind.config.jsp-4 tailwind.config.jsrounded-xl">
      <ShopCartBtn
        onClick={handleClick}
        className={
          "!tailwind.config.jsabsolute tailwind.config.jstext-white !tailwind.config.jsrounded-full tailwind.config.jsw-14 tailwind.config.jsh-14 tailwind.config.jsp-0 tailwind.config.jsbg-transparent tailwind.config.jsbackdrop-blur-xl tailwind.config.jstop-3 tailwind.config.jsz-10"
        }
        icon={
          like ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={34}
              fill="currentColor"
            >
              <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path>
            </svg>
          ) : (
            <Heart size={30} />
          )
        }
        variant={"background"}
      />
      <article className="tailwind.config.jsw-full tailwind.config.jsh-[180px] tailwind.config.jsbg-gradient-to-r tailwind.config.jsfrom-white tailwind.config.jsto-zinc-100 tailwind.config.jsrounded-xl tailwind.config.jsbackdrop-blur-lg tailwind.config.jsobject-cover">
        <img
          src={images[0]}
          alt={desc}
          className="tailwind.config.jsmax-h-[180px] tailwind.config.jsw-full tailwind.config.jsrounded-xl"
        />
      </article>
      <article className="tailwind.config.jspt-2 tailwind.config.jsmt-3">
        <p className="tailwind.config.jsflex tailwind.config.jsjustify-between">
          <h1 className="tailwind.config.jsfont-bold tailwind.config.jstext-xl">
            {name}
          </h1>
          <h1 className="tailwind.config.jsfont-bold tailwind.config.jstext-xl">
            {price} uzs
          </h1>
        </p>
        <p className="tailwind.config.jstext-black/70 tailwind.config.jstext-lg tailwind.config.jsmb-2">
          {desc}
        </p>
      </article>
      {selectedDatas.find((e) => e.id === id) === undefined ? (
        <ShopCartBtn
          className={"!tailwind.config.jsmin-w-full"}
          icon={<ShoppingBag />}
          onClick={() => {
            if (count === 0) setCount(1);
            dispatch(
              dataSlice.actions.giveSelectedDatas({ id, price, count: 1, name })
            );
          }}
        />
      ) : (
        <div className="tailwind.config.jsgrid tailwind.config.jsgrid-cols-[auto_1fr_auto] tailwind.config.jsgap-3">
          <ShopCartBtn
            className={""}
            icon={<Minus />}
            onClick={() => {
              dispatch(dataSlice.actions.decreaseCount(id));
              setCount(count - 1 === 0 ? 1 : count - 1);
            }}
          />
          <div className="tailwind.config.jsinline-flex tailwind.config.jsmin-w-full tailwind.config.jstext-center tailwind.config.jsjustify-center tailwind.config.jsitems-center tailwind.config.jsfont-bold tailwind.config.jsh-10 tailwind.config.jsbackdrop-blur-none tailwind.config.jsbg-stone-200/40 tailwind.config.jsrounded-md">
            {selectedDatas.find((e) => e.id === id).count}
          </div>
          <ShopCartBtn
            icon={<Plus />}
            onClick={() => {
              dispatch(dataSlice.actions.increaseCount(id));
              setCount((e) => e + 1);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Card;

// <ShopCartBtn onClick={() => {
//                 dispatch(dataSlice.actions.giveSelectedDatas({ id, price, count: 1 })
//             }} className={" !tailwind.config.jsw-full "} icon={<MdAddShoppingCart size={26} />} />
