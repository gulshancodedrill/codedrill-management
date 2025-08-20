import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
export default function Footer(){
    return (
        <>
        <footer className="bg-slate-100 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link to={'/about-us'}> <img src={logo} className="h-8 me-3" alt="Codedrill Infotech Private Limited" /></Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li>
                                <Link to={'/about-us'}>About us</Link>
                            </li>
                            <li>
                                <Link to={'/our-services'}>Our Services</Link>
                            </li>
                            <li>
                                <Link to={'/portfolio'}>Portfolio</Link>
                            </li>
                            <li>
                                <Link to={'/blog'}>Blog</Link>
                            </li>
                            <li>
                                <Link to={'/contact-us'}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                            Contact
                        </h2>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium space-y-3">
                            <li className="flex items-center space-x-2">
                            <Mail className="w-5 h-5 text-gray-400" />
                            <a href="mailto:info@codedrill.com" className="hover:underline">
                                info@codedrill.com
                            </a>
                            </li>
                            <li className="flex items-center space-x-2">
                            <Phone className="w-5 h-5 text-gray-400" />
                            <a href="tel:+1234567890" className="hover:underline">
                                +1 234 567 890
                            </a>
                            </li>
                            <li className="flex items-start space-x-2">
                            <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                            <span>
                            4th Floor, E-202, Phase 8B,<br></br> Industrial Area, Sector 74, <br></br>Sahibzada Ajit Singh Nagar, <br></br>Punjab 160055
                            </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://www.codedrillinfotech.com/" className="hover:underline">CODEDRILL INFOTECH PVT. LTD.</a> | ALL RIGHTS RESERVED.
                </span>
                    <div>
                    <ul className="flex space-x-6 text-gray-500 dark:text-gray-400">
                        <li>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-sky-500 transition"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        </li>
                        <li>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-700 transition"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        </li>
                    </ul>
                    </div>
            </div>
            </div>
        </footer>
        </>
    )
}