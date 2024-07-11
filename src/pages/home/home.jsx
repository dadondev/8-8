import { MdAddShoppingCart } from "react-icons/md";
import ShopCartBtn from "../../general/components/shopCartBtn";
import { Heart, Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { getAllProducts, newData } from "../../actions/actions";
import { v4 } from "uuid";
import Card from "./components/card";
import SkeletonCard from "./components/skeletonCard";
import { useDispatch } from "react-redux";
import dataSlice from "../../redux/dataSlice";

const Home = () => {
  const [values, setValues] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("likedDatas")) || "";
    if (data.length > 0) dispatch(dataSlice.actions.giveLikedDatas(data));
    getAllProducts(setValues);
  }, []);
  useEffect(() => {
    dispatch(dataSlice.actions.giveAllDatas(values));
  }, [values]);
  return (
    <main className="tailwind.config.jsmin-h-full tailwind.config.jspt-5 tailwind.config.jspx-5 tailwind.config.jsflex tailwind.config.jsflex-wrap tailwind.config.jsgap-5 tailwind.config.jsjustify-center">
      {values.length === 0
        ? Array(10)
            .fill(0)
            .map((_, i) => <SkeletonCard key={i} />)
        : values.map((e) => <Card {...e} key={e.id} />)}
    </main>
  );
};

export default Home;
