import React, { useEffect } from "react";
import Logo from "./logo";
import Actions from "./actions";
import Navbar from "./navbar";
import MobMenu from "./mobMenu";
import { useDispatch } from "react-redux";
import dataSlice from "../../redux/dataSlice";

const Header = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const jsonData = JSON.parse(localStorage.getItem("likedDatas")) || [];
    const data = new Set(jsonData);
    dispatch(dataSlice.actions.giveLikedDatas(beUnique(data.entries().next().value)));
  }, []);
  return (
    <header className="tailwind.config.jsmin-w-full tailwind.config.jscontainer tailwind.config.jsmx-auto tailwind.config.jspx-4 tailwind.config.jspy-5 tailwind.config.jsbackdrop-blur-md tailwind.config.jsflex tailwind.config.jsplace-items-center tailwind.config.jsjustify-between tailwind.config.jsborder-b">
      <Logo />
      <Navbar />
      <Actions />
      <MobMenu />
    </header>
  );
};

export default Header;

export function beUnique(data = []) {
  let unique = [];

  data.forEach((first) => {
    data.forEach((second) => {
      if (first.id === second.id && !unique.find((e) => e.id === second.id)) {
        unique.push(second);
      }
    });
  });
  return unique;
}
