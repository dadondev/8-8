import { NavLink } from "react-router-dom"


const Link = ({text, to, className}) => {
  return (
    <NavLink className={'tailwind.config.jstext-primary tailwind.config.jsunderline-offset-4 hover:tailwind.config.jsunderline '+className} to={to}>{text}</NavLink>
  )
}

export default Link