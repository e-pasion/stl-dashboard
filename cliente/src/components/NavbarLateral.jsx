import React from 'react'
import { Link } from 'react-router-dom'

 const NavbarLateral = () => {
  return (
    <aside className=" inset-y-0 left-0 bg-white shadow-md max-h-screen w-0 h-screen lg:w-60 overflow-hidden" style={{ transition: '0.5s' }}>
    <div className="flex flex-col justify-between h-full">
      <div className="flex-grow">
        <div className="px-4 py-6 h-20 text-center border-b">
          <h1 className="text-xl font-bold leading-none"><span className="text-yellow-700">AVA 3D</span> Dashboard</h1>
        </div>
        <div className="p-4">
          <ul className="space-y-1">
            <li>
              <a href="javascript:void(0)" target="_top" className="flex items-center bg-yellow-200 rounded-xl font-bold text-sm text-yellow-900 py-3 px-4"><i className="fa-solid fa-chart-simple fa-lg mx-2"></i> Estadisticas</a>
            </li>
            <li>
              <a href="javascript:void(0)" target="_top" className="flex items-center bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"><i className="fa-solid fa-user fa-lg mx-2"></i>Empleados</a>
            </li>
            <li>
                <a href="javascript:void(0)" target="_top" className="flex items-center bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"><i className="fa-solid fa-clipboard fa-lg mx-2"></i>Codigos</a>
              </li>
              <li>
                <Link to="/dashboard/colores" className="flex items-center bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"><i className="fa-solid fa-palette fa-lg mx-2"></i>Colores</Link>
              </li>
              <li>
                <a href="materialLista.html" target="_top" className="flex items-center bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"><i className="fa-solid fa-cube fa-lg mx-2"></i>Materiales</a>
              </li>
              <li>
                <a href="javascript:void(0)" target="_top" className="flex items-center bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"><i className="fa-solid fa-motorcycle fa-lg mx-2"></i>Pedidos</a>
              </li>
          </ul>
          
        </div>
      </div>
      <div className="p-4">
        <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"><i className="fa-solid fa-power-off fa-xl text-white"></i></button> 
        <span className="font-bold text-sm ml-2">Salir</span>
      </div>
    </div>
  </aside>
    )
}

export default NavbarLateral
