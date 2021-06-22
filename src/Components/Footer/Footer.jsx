import React from "react"
import style from './Footer.module.css'
import { IconContext } from "react-icons";
import {
    AiFillFacebook,
    AiFillInstagram, AiFillYoutube, AiOutlineMail, BiMap,
    GrTwitter,
    HiOutlinePhone
} from "react-icons/all";


const Footer = () => {

    return (
        <div className={style.Footer}>
            <IconContext.Provider value={{ size: "25px" }}>
                <div className={style.Container}>
                    <div className={style.AboutUs}>
                        <h3>About Us</h3>
                        <p className={style.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br></br> sed do
                            eiusmod
                            tempor
                            incididunt ut labore et dolore<br></br> magna aliqua.
                            Ut enim ad minim veniam, quis nostrud<br></br> exercitation ullamco laboris nisi ut aliquip
                            ex ea<br></br> commodo
                            consequat.</p>

                        <div className={style.Links}>
                            <a href="https://ru-ru.facebook.com/react/"><AiFillFacebook /></a>
                            <a href="https://twitter.com/reactjs"><GrTwitter /></a>
                            <a href="https://www.instagram.com/reactjsofficial/"><AiFillInstagram /></a>
                            <a href="https://www.youtube.com"><AiFillYoutube /></a>
                        </div>
                    </div>

                    <div className={style.QuickLinks}>
                        <h3>QuickLinks</h3>
                        <div className={style.QuickLinksLink}>
                            <a href="#">About</a>
                            <a href="#">FAQ</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Help</a>
                            <a href="#">Terms & Consitions</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>

                    <div className={style.Contact}>
                        <h3>Contact Info</h3>
                        <a href="https://www.google.com/maps/place/Нью-Йорк,+США/data=!4m2!3m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62?sa=X&ved=2ahUKEwj3zPmTx6vvAhXnURUIHSg_DRQQ8gEwIHoECC0QAQ"><BiMap />
                            &nbsp;  340 Main Street
                            Los Angeles,<br /> &nbsp; CA 90291
                            United States
                        </a>
                        <a href="https://uk-ua.facebook.com/facebook"><HiOutlinePhone /> &nbsp;  +1 234 567 8900</a>
                        <a href="https://www.google.com/intl/en/gmail/about/"><AiOutlineMail /> &nbsp;  google@gmail.com</a>
                    </div>

                </div>
            </IconContext.Provider>
            <div className={style.CopyrightText}>
                <p>Copyright @ 2021</p>
            </div>
        </div>

    )
}
export default Footer;
