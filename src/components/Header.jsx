import {SettingOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons'
import logo from '/assets/images/Hemisphere Logo Variations-03.png'
import logo2 from '/assets/images/Hemisphere Logo Variations-05.png'

function Header() {
    return (
        <div className='flex items-center justify-between md:px-20 px-5 pt-6 md:pt-0 absolute md:static top-0 z-10 w-full'>
            <img src={logo} alt="logo" width={110} className='hidden md:inline-block' />
            <img src={logo2} alt="logo" width={70} className='md:hidden visible' />
            <div className='flex md:gap-8 gap-4 mr-4 md:mr-0'>
                <a href="#about-us" className="md:hidden"><UserOutlined style={{ fontSize: 20, color: '#fff' }}/></a>
                <a href="#about-us" className="hidden md:inline-block">About</a>
                <a href="#services" className="hidden md:inline-block">Services</a>
                <a href="#services" className="md:hidden"><SettingOutlined style={{ fontSize: 20, color: '#fff' }}/></a>
                <a href="#contact-us" className="hidden md:inline-block">Contact</a>
                <a href="#contact-us" className="md:hidden"><PhoneOutlined style={{ fontSize: 20, color: '#fff' }}/></a>
            </div>
        </div>
    )
}

export default Header