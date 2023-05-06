import React from 'react'
import Navbar from '../components/Navbar'
import NavbarLateral from '../components/NavbarLateral'
 const Colors = () => {
  const selectColor=document.getElementById("selectColor")
const inputColor=document.getElementById("colorCode")
const submitColor=document.getElementById("submitColor")
const formColor=document.getElementById("formColor")

selectColor.addEventListener(("input"),()=>{
    inputColor.value=selectColor.value;
    stl_viewer.set_color(0, selectColor.value);
})
inputColor.addEventListener(("input"),()=>{
    selectColor.value=inputColor.value
    stl_viewer.set_color(0,selectColor.value)
})
selectColor.value="#70f0ae";
// formColor.addEventListener('submit', (event) => {
//     event.preventDefault();
//   });


const stl_viewer=new window.StlViewer(document.getElementById("cuboContenedor"), { models: [ {id:0, filename:"dino.stl",color:"#70f0ae",rotationx:Math.PI*1.5} ],auto_rotate:true });




  return (
    <div>


      <div className="flex">
      <NavbarLateral/>
        <div className="flex-grow">
        <Navbar/>
            <div className="px-4 py-6 h-20 text-center lg:mt-8">
                <h1 className="text-4xl font-bold text-gray-900">Colores</h1>
            </div>
              <div className="flex items-center flex-col lg:flex-row lg:mx-10 lg:mt-14">
                <div className="mx-2 bg-white flex items-center flex-col h-72 w-80 md:w-4/5 rounded-lg lg:mx-0 lg:h-96">
                    <form id="formColor" className="px-5 py-5 flex justify-center flex-col h-full w-4/5">
                        <div className="mb-6">
                          <label for="colorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre color</label>
                          <input type="text" id="colorName" className="h-10 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Verde Pastel" required/>
                        </div>
                        <div className="mb-6">
                            <label for="colorCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo Color</label>
                            <div className="flex border border-gray-300 rounded-lg h-10 relative overflow-hidden">
                                <input id="selectColor" type="color"  className="h-12 -top-1 -left-2 absolute "/>
                                <input type="text" id="colorCode" placeholder="#70f0ae" className="bg-gray-50 ml-10  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" minlength="7" maxlength="7" required/>
                            </div>
                        </div>
                          <div className="flex justify-evenly">
                        <button id="submitColor" type="submit" className="text-black bg-green-100 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-4/12 py-2.5 text-center">Ingresar Color</button>
                        <a href="colorLista.html" className="text-black bg-yellow-100 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-4/12  py-2.5 text-center">Ver Colores</a>
                        </div>
                    </form>               
                </div> 
                <div  className="bg-purple-100 flex flex-col justify-center items-center h-72 w-80 md:w-4/5 lg:h-96">
                    <div id="cuboContenedor" className="h-4/5 w-4/5"></div>
                </div>
              </div>
        </div>

    </div>
    <script src="/stl_viewer"></script>
    </div>
  )
}
export default Colors
