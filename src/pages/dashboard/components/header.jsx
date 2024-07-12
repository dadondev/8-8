import React from 'react'
import ShopCartBtn from '../../../general/components/shopCartBtn';
import { PlusCircle, Trash2 } from 'lucide-react';
import { CgFolderAdd } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import modalSlice from '../../../redux/modalSlice';

const Header = ({open, setOpen, disabled}) => {
    const dispatch = useDispatch()
  return (
    <header className="tailwind.config.jsw-full tailwind.config.jsmb-3">
    <div className="tailwind.config.jsflex sm:tailwind.config.jsw-[200px] tailwind.config.jsgap-3 tailwind.config.jspx-3 tailwind.config.jspy-2 tailwind.config.jsrounded-xl tailwind.config.jsbg-zinc-100/80 tailwind.config.jsbackdrop-blur-3xl tailwind.config.jsw-full tailwind.config.jsjustify-between tailwind.config.jsml-auto">
      <ShopCartBtn
        onClick={() => {
          dispatch(modalSlice.actions.preferModal({type:"addProduct", datas:{}}))
        }}
        icon={<PlusCircle size={20} />}
      />
      <ShopCartBtn
        icon={<CgFolderAdd size={20} />}
        onClick={() => {
            dispatch(modalSlice.actions.preferModal({type:"addCatalog", datas:{}}))
        }}
      />
      <ShopCartBtn
        disabled={disabled}
        className={
          "tailwind.config.jsbg-red-500 hover:!tailwind.config.jsbg-red-400 disabled:!tailwind.config.jsbg-red-400"
        }
        icon={<Trash2 size={20} />}
      />
    </div>
  </header>
  )
}

export default Header