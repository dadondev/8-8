import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '../../components/ui/badge'


const Logo = () => {
    return (
        <div className='tailwind.config.jsinline-flex tailwind.config.jsplace-items-start tailwind.config.jsgap-1'>
            <Link to={"/"} className='tailwind.config.jstext-2xl tailwind.config.jsfont-medium'>Kitchen app</Link>
            <Badge className={"relative -tailwind.config.jstop-3"}>Beta</Badge>
        </div>
    )
}

export default Logo