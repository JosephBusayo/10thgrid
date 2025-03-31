"use client";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="sticky top-0 left-0 w-full bg-black text-white z-50 shadow-md pt-10 mb-10">
            <div className="container mx-auto flex items-center justify-between px-6 py-4 md:px-16 md:py-6">
                {/* Logo */}
                <div>
                    {" "}
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width="50"
                        height="30"
                        className="md:w-[70px] md:h-[46px]"
                    />{" "}
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6">
                    <ScrollLink
                        to="pricing"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300"
                    >
                        Pricing
                    </ScrollLink>
                    <ScrollLink
                        to="faqs"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer hover:text-gray-300"
                    >
                        FAQs
                    </ScrollLink>
                    <a href="https://calendly.com/10thgriddesigns/discovery-call" target="_blank" rel="noopener noreferrer">
                        <button className="px-4 py-2 bg-white text-black hover:bg-gray-300 rounded-xl">
                            Book a Call
                        </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-2/3 bg-black text-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out md:hidden`}
                >
                    <button className="absolute top-5 right-5" onClick={toggleMenu}>
                        <X size={28} />
                    </button>
                    <div className="flex flex-col items-center pt-20 h-full space-y-6 text-lg">
                        <ScrollLink
                            to="pricing"
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                            className="cursor-pointer"
                        >
                            Pricing
                        </ScrollLink>
                        <ScrollLink
                            to="faqs"
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                            className="cursor-pointer"
                        >
                            FAQs
                        </ScrollLink>
                        <ScrollLink
                            to="book-a-call"
                            smooth={true}
                            duration={500}
                            onClick={closeMenu}
                            className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-300"
                        >
                            Book a Call
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
