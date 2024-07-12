import { Edit2, Trash2 } from "lucide-react";
import ShopCartBtn from "../../../general/components/shopCartBtn";
import Column from "../../../general/components/column";
import { Checkbox } from "../../../components/ui/checkbox";
import UZSum from "../../../functions/currency";
import { useDispatch, useSelector } from "react-redux";
import modalSlice from "../../../redux/modalSlice";

function DesktopCards() {
  const datas = useSelector((e) => e.dataSlice.allDatas);
  const dispatch = useDispatch();
  const handleEdit = () => {};
  return (
    <div className="tailwind.config.jshidden !tailwind.config.jsmax-w-[1200px] tailwind.config.jsmx-auto lg:!tailwind.config.jsblock tailwind.config.jsw-full tailwind.config.jsbg-zinc-100 tailwind.config.jsrounded-xl tailwind.config.jsbackdrop-blur-md">
      <article className="tailwind.config.jspx-5 tailwind.config.jspy-4 tailwind.config.jsgrid tailwind.config.jsgrid-cols-6">
        <Column text={"Checked"} />
        <Column text={"Name"} />

        <Column text={"Catalog"} />

        <Column text={"Price"} />

        <Column text={"Author"} />

        <Column text={"Actions"} />
      </article>
      <div className="tailwind.config.jsgrid tailwind.config.jsgap-2 tailwind.config.jsbg-zinc-100 tailwind.config.jspx-1 tailwind.config.jspy-3">
        {datas &&
          datas.map((e) => {
            return (
              <div
                key={e.id}
                className="tailwind.config.jspy-4 tailwind.config.jspx-4 tailwind.config.jsitems-center tailwind.config.jsjustify-center tailwind.config.jsbg-white tailwind.config.jsrounded-xl tailwind.config.jsgrid tailwind.config.jsgrid-cols-6"
              >
                <Checkbox />
                <Column text={e.name} />
                <Column text={e.catalog} />
                <Column text={UZSum.format(e.price).slice(0, -8) + " So'm"} />
                <Column text={e.author} />
                <div className="tailwind.config.jsflex tailwind.config.jsgap-3">
                  <ShopCartBtn
                    icon={<Edit2 size={20} />}
                    onClick={() =>{
                     
                      dispatch(
                        modalSlice.actions.preferModal({
                          type: "editProduct",
                          datas:e,
                        })
                      )
                    }
                     
                    }
                  />
                  <ShopCartBtn icon={<Trash2 size={20} />} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DesktopCards;
