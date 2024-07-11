import { MdAddShoppingCart } from "react-icons/md"
import {Skeleton} from "../../../components/ui/skeleton"
import ShopCartBtn from "../../../general/components/shopCartBtn"
const SkeletonCard = () => {
  return (
    <div className="tailwind.config.jsmax-w-[350px] tailwind.config.jsw-full tailwind.config.jsrelative tailwind.config.jsborder  tailwind.config.jsbackdrop-blur-xl tailwind.config.jsp-4 tailwind.config.jsrounded-xl">
        <Skeleton className={"tailwind.config.min-w-full tailwind.config.jsmin-h-[180px] tailwind.config.jsrounded-md tailwind.config.jsmb-3"}></Skeleton>
        <article className="tailwind.config.jsflex tailwind.config.jsjustify-between tailwind.config.jsmb-3">
            <Skeleton className={"tailwind.config.jsh-7 tailwind.config.jsw-12 tailwind.config.jsrounded-md"}/>
            <Skeleton className={"tailwind.config.jsh-7 tailwind.config.jsw-14 tailwind.config.jsrounded-md"}/>
        </article>
        <Skeleton className={"tailwind.config.jsh-[100px] tailwind.config.jsw-full tailwind.config.jsrounded-md tailwind.config.jsmb-3"}/>
        <ShopCartBtn className={" !tailwind.config.jsw-full"} icon={<MdAddShoppingCart size={26} />} />
    </div>
  )
}

export default SkeletonCard