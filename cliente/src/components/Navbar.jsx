import React from 'react'
import { Link } from 'react-router-dom'

 const Navbar = () => {
  return (
    <div class="h-20  bg-transparent relative flex-1 flex items-center justify-between">
                <i id="menuOpen" class="fa-solid fa-bars fa-2xl  lg:hidden cursor-pointer mx-2"></i>
                <div class="flex items-center absolute right-0 mx-10 lg:mx-10">
                    <div class="h-12 w-12 rounded-full overflow-hidden mx-2">
                        <img class="h-full w-full object-cover" src="img/perfil.jpg"/>
                </div>
                    <h2 class="text-lg font-medium text-gray-900">Yuri Rios</h2>
                </div>
            </div>
  )
}
export default Navbar
