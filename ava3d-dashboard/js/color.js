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


const stl_viewer=new StlViewer(document.getElementById("cuboContenedor"), { models: [ {id:0, filename:"dino.stl",color:"#70f0ae",rotationx:Math.PI*1.5} ],auto_rotate:true });

