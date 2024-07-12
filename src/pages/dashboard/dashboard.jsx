import ModalSheet from "../../general/components/modalSheet";
import { useEffect, useState } from "react";
import DesktopCards from "./components/deskCards";
import MobCards from "./components/mobCards";
import Header from "./components/header";
import { getAllProducts } from "../../actions/actions";
import { useDispatch } from "react-redux";
import dataSlice from "../../redux/dataSlice";

const Dashboard = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [type, setType] = useState("addProduct");
  const [value, setValue] = useState([])
  useEffect(()=>{
    getAllProducts(setValue, "products/")
  },[])

  useEffect(()=>{
    dispatch(dataSlice.actions.giveAllDatas(value))
  },[value])

  return (
    <div className="tailwind.config.jsmin-h-full tailwind.config.jspt-3 tailwind.config.jspx-3 ">
      <Header open={open} setOpen={setOpen} />
      <DesktopCards />
      <MobCards />
      <ModalSheet
        disabled={disabled}
        open={open}
        setOpen={setOpen}
        type={type}
      ></ModalSheet>
    </div>
  );
};

export default Dashboard;
