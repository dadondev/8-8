import { Edit2, Trash2 } from "lucide-react";
import UZSum from "../../../functions/currency";
import ShopCartBtn from "../../../general/components/shopCartBtn";
import CardRow from "./cardRow";

function MobCards() {
  return (
    <div className="tailwind.config.jsflex tailwind.config.jsjustify-center tailwind.config.jsgap-5 tailwind.config.jsflex-wrap lg:tailwind.config.jshidden">
      <div className="tailwind.config.jsmax-w-[320px] tailwind.config.jsw-full tailwind.config.jsborder tailwind.config.jsbg-zinc-100 tailwind.config.jsrounded-md tailwind.config.jsp-3 tailwind.config.jsgrid tailwind.config.jsgap-2">
        <CardRow name={"Name"} value={"Osh"} />
        <CardRow name={"Catalog"} value={"Pizzas"} />
        <CardRow
          name={"Price"}
          value={UZSum.format("200000").slice(0, -8) + " So'm"}
        />
        <CardRow value={"dadondev03@gmail.com"} name={"Author"} />
        <CardRow
          name={"Actions"}
          value={
            <div className="tailwind.config.jsflex tailwind.config.jsgap-3">
              <ShopCartBtn icon={<Edit2 size={20} />} />
              <ShopCartBtn icon={<Trash2 size={20} />} />
            </div>
          }
        />
      </div>
    </div>
  );
}

export default MobCards;
