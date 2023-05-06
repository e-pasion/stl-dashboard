const submitMaterial=document.getElementById("submitMaterial")
const addColors=document.getElementById("addColors")


addColors.addEventListener(("click"),()=>{
    Swal.fire({
        title: 'Añadir colores al material',
        html: `             <div class="block relative w-full h-10">
        <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <i class="fa-solid fa-magnifying-glass fa-lg text-gray-600"></i>
        </span>
        <input placeholder="Buscar Color" class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
    </div>
    <div class="overflow-auto h-56 mt-6 ">
        <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">
                        <span class="w-4 h-4 flex items-center justify-center mr-2 border border-gray-400 rounded-full bg-green-400">
                            <i class="fas fa-circle fa-lg" style="color: #70f0ae;"></i>
                        </span>
                        <span>Verde Pastel</span>
                    </label>
                </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">
                        <span class="w-4 h-4 flex items-center justify-center mr-2 border border-gray-400 rounded-full bg-green-400">
                            <i class="fas fa-circle fa-lg" style="color: #70f0ae;"></i>
                        </span>
                        <span>Verde Pastel</span>
                    </label>
                </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">
                        <span class="w-4 h-4 flex items-center justify-center mr-2 border border-gray-400 rounded-full bg-green-400">
                            <i class="fas fa-circle fa-lg" style="color: #70f0ae;"></i>
                        </span>
                        <span>Verde Pastel</span>
                    </label>
                </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">
                        <span class="w-4 h-4 flex items-center justify-center mr-2 border border-gray-400 rounded-full bg-green-400">
                            <i class="fas fa-circle fa-lg" style="color: #70f0ae;"></i>
                        </span>
                        <span>Verde Pastel</span>
                    </label>
                </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">
                        <span class="w-4 h-4 flex items-center justify-center mr-2 border border-gray-400 rounded-full bg-green-400">
                            <i class="fas fa-circle fa-lg" style="color: #70f0ae;"></i>
                        </span>
                        <span>Verde Pastel</span>
                    </label>
                </div>
            </li>
            <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div class="flex items-center pl-3">
                    <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                    <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 flex items-center">
                        <span class="w-4 h-4 flex items-center justify-center mr-2 border border-gray-400 rounded-full bg-green-400">
                            <i class="fas fa-circle fa-lg" style="color: #70f0ae;"></i>
                        </span>
                        <span>Verde Pastel</span>
                    </label>
                </div>
            </li>                        
            
           
        </ul>
        </div>`,
        showDenyButton: true,
        confirmButtonText: 'Actualizar',
        denyButtonText: `Cancelar`

      });
})

submitMaterial.addEventListener(("click"),()=>{
    Swal.fire({
        title: 'Crear material',
        html: `<input type="text" id="nombreMaterial" class="swal2-input" placeholder="Nombre Material">
        <input type="number" id="densidadMaterial" class="swal2-input" placeholder="Densidad en g/cm3">
        <input type="number" id="precioMaterial" class="swal2-input" placeholder="Precio por kilo">`,
        showDenyButton: true,
        confirmButtonText: 'Crear',
        denyButtonText: `Cancelar`,
        focusConfirm:false,
        preConfirm:()=>{
            const nm=document.getElementById("nombreMaterial").value
            const dm=document.getElementById("densidadMaterial").value
            const pm=document.getElementById("precioMaterial").value
            if (!nm) {
                Swal.showValidationMessage(`Porfavor ingrese el nombre del material`)
              }
              else if(!dm){
                Swal.showValidationMessage(`Porfavor ingrese la densidad del material`)
              }
              else if(!pm){
                Swal.showValidationMessage(`Porfavor ingrese el precio del material`)
              }
              return { nombreMaterial: nm, densidadMaterial: dm,precioMaterial:pm }

        }
    
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'success',
                title: 'Material creado exitosamente',
                showConfirmButton: false,
                timer: 1000
            })
        } else if (result.isDenied) {
            Swal.fire({
                icon: 'info',
                title: 'Creación de material cancelada',
                showConfirmButton: false,
                timer: 1000
            })
        } 
    })
})