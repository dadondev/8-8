import Link from "./link"


const Navbar = () => {
    return (
        <ul className='tailwind.config.jshidden md:tailwind.config.jsflex tailwind.config.jsgap-7'>
            <Link text={"Home"} to={"/"} />
            <Link text={"Dashboard"} to={"/dashboard"} />
            <Link text={"Checkout"} to={"/checkout"} />
        </ul>
    )
}

export default Navbar