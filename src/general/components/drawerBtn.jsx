import React from 'react'
import Link from './link'

const DrawerBtn = ({text, to}) => {
  return (
    <Link text={text} to={to} className={"tailwind.config.jsborder tailwind.config.jspy-2 tailwind.config.jstext-primary tailwind.config.jstext-center tailwind.config.jsrounded-md"}/>
  )
}

export default DrawerBtn