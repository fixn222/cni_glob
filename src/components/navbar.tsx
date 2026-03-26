// import React from 'react'

import { Brain, MoreHorizontal, MoreVertical } from "lucide-react"
import styles from "../styles"
import { Button } from "./ui/button"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"
import { DropdownMenu } from "./ui/dropdown-menu"
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { CLIENT_NAV, THEME } from "../lib/constants"

const NavBar = () => {
    const [toogle, setToggle] = useState(false)
    return (
        <nav className={` mt-3   px-3 rounded-2xl w-full shadow-2xs `} >

            <div className="flex flex-row justify-between  p-3">
                <div className="flex flex-row space-x-5 items-center p-5">
                    <Brain className="" />
                    <p className="font-bold text-2xl">Cni Gloabal </p>
                </div>
                <div className="flex-row items-center flex">
                    <div className="space-x-5 md:block hidden">

                        {CLIENT_NAV.map((nav) =>

                        (

                            <a href={`${nav.href}`} className="hover:text-blue-700"><span>{nav.title}</span></a>



                        ))}

                        <ThemeToggle />
                    </div>

                    <div className="block md:hidden ">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <button onClick={() => setToggle((prev) => !prev)} >
                                    <MoreVertical size={25} />
                                </button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <div className="w-full flex flex-col items-center text-center space-y-2 mt-3">
                                    {CLIENT_NAV.map((nav) => {

                                        const Icon = nav.icon;

                                        return (

                                            <DropdownMenuItem>
                                                <div key={nav.title} className="flex flex-col justify-center items-center gap-2">
                                                    <Icon size={18} />
                                                    <span className="hover:bg-blue-400">{nav.title}</span>
                                                </div>

                                            </DropdownMenuItem>
                                        )
                                    })}
                                </div>

                            </DropdownMenuContent>
                        </DropdownMenu>


                    </div>


                </div>
            </div>

        </nav>
    )
}

export default NavBar