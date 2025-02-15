import logo from '/assets/images/Hemisphere Logo Variations-03.png'

function Header() {
    return (
        <div className='flex items-center justify-between px-20'>
            <img src={logo} alt="logo" width={100} />
            <div className='flex gap-8 text-sm'>
                <a href="#">Services</a>
                <a href="#">About</a>
                <a href="#">Blogs</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default Header