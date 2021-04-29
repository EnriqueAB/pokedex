
tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

const pokemones = [];

const cargarTabla = () =>{
  //1. Obtener una referencia a la tabla
  let tbody = document.querySelector("#tabla-tbody");
  //Eliminar todos los elementos que tenga el tbody
  tbody.innerHTML = "";
  //2. Recorrer la lista de pokemones
  for(let i=0; i < pokemones.length; ++i){
    let p = pokemones[i];
    //3. Por cada pokemon generar una fila (tr)
    let tr = document.createElement("tr");
    //4. Por cada atributo (nombre,tipo,descripcion,and so on), voy a generar celtas (td)
    let tdNro = document.createElement("td");
    tdNro.innerText = (i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdTipo = document.createElement("td");

    let icono= document.createElement("i");
    if(p.tipo == "fuego"){
      icono.classList.add("fas","fa-fire","text-danger","fa-3x");
    }else if(p.tipo== "planta"){
      icono.classList.add("fas","fa-leaf","text-success","fa-3x");
    }else if(p.tipo== "electrico"){
      icono.classList.add("fas","fa-bolt","text-warning","fa-3x");
    }else if(p.tipo== "agua"){
      icono.classList.add("fas","fa-tint","text-primary","fa-3x");
    }else{
      icono.classList.add("fas","fa-star","text-info","fa-3x")
    }
    tdTipo.classList.add("text-center")
    tdTipo.appendChild(icono);
    let tdDesc = document.createElement("td");
    tdDesc.innerHTML = p.descripcion;
    let tdAcciones = document.createElement("td");

    //5. Agregar las celdas al tr
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDesc);
    tr.appendChild(tdAcciones);
    //6. Agregar el tr a la tabla
    tbody.appendChild(tr);
  }

};

document.querySelector("#registrar-btn").addEventListener("click",()=>{
    //Value es para obtener el valor de los input de texto
    let nombre = document.querySelector("#nombre-txt").value;
    //Sacado de la pagina tinymce, para obtener lo escrito
    let descripcion = tinymce.get("descripcion-txt").getContent();
    //Cheked indica si el radiobutton esta seleccionado
    let legendario = document.querySelector("#legendario-si").checked;
    //El tipo se obtiene igual que los input
    let tipo = document.querySelector("#tipo-select").value;

    //Como crear un objeto
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    //Como guardar en una lista de elementos
    pokemones.push(pokemon); // append
    cargarTabla();
    //Titulo, texto, tipo: succes, info, danger, warning
    swal.fire("Éxito!","Pokémon registrado","success");


} );