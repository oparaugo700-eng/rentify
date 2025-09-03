"use client"
import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <main className="bg-white shadow shadow-gray-300 w-full">
            <div className="flex justify-between h-[50px] pt-3 px-5">
                <p className="text-blue-500 font-bold text-2xl">Rentify</p>
                <ul className="hidden md:flex gap-10 font-semibold cursor-pointer">
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/dashboard/tenant-form"><li>Tenant-Form</li></Link>
                    <Link href=""><li>Rent-List</li></Link>
                </ul>

                <div className="hidden md:flex gap-3">
                    <p className="w-[60px] h-[30px] bg-blue-500 text-white flex justify-center items-center rounded cursor-pointer">Login</p>
                    <CgProfile className="text-3xl" />
                </div>

                <div className="block md:hidden">
                    <RxHamburgerMenu onClick={toggleMenu} className="text-blue-500 text-3xl" />
                </div>
            </div>
            {
                menuOpen && (

                    <div className="px-5 pbl-1 md:hidden">
                        <ul>
                            <Link href="/"><li>Home</li></Link>
                            <Link href="/dashboard/tenant-form"><li>Tenant-Form</li></Link>
                            <li>Rent-list</li>
                        </ul>
                        <p className="w-[60px] h-[30px] bg-blue-500 text-white flex justify-center items-center rounded">Login</p>
                        <CgProfile className="text-3xl" />
                    </div>
                )
            }

        </main >
    )
}