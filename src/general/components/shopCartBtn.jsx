import React from 'react'
import {Button} from "../../components/ui/button"
import Badge from '../../components/ui/badge'

const ShopCartBtn = ({variant, count, icon, onClick, className}) => {

    return (
        <Button type="button" onClick={onClick} variant={variant} className={"tailwind.config.jsrelative !tailwind.config.jspx-3 " + className}>
           {icon}
          {count>0 &&  <Badge className={"tailwind.config.jsabsolute tailwind.config.jstranslate-y-[-15px] tailwind.config.jsright-0 tailwind.config.jstranslate-x-3"}>{count}</Badge>}
        </Button>
    )
}

export default ShopCartBtn