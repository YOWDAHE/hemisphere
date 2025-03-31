import logo from '/assets/images/Hemisphere Logo Variations-03.png'

function Header() {
    return (
        <div className='flex items-center justify-between px-20'>
            <img src={logo} alt="logo" width={110} />
            <div className='flex gap-8'>
                <a href="#about-us">About</a>
                <a href="#services">Services</a>
                <a href="#contact-us">Contact</a>
            </div>
        </div>
    )
}

export default Header