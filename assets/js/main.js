const tareas = [
  { id: 1, name: "Leer", completed: false },
  { id: 2, name: "Hacer Aseo", completed: false },
  { id: 3, name: "Ver Futbol", completed: false },
];

const input = document.querySelector("input");
const boton = document.querySelector("i");
const idTarea = document.querySelector("#identificacion");
const nombreTarea = document.querySelector("#nombreTarea");
const totalTareas = document.querySelector("#totalTareas");
const tareasRealizadas = document.querySelector("#tareasRealizadas");

const añadirTareas = () => {
  const nombreTarea = input.value.trim();
  if (!nombreTarea) return;

  const ultimaTarea = tareas[tareas.length - 1];

  const nuevaTarea = {
    id: ultimaTarea ? ultimaTarea.id + 1 : 1,
    name: nombreTarea,
    completed: false,
  };
  input.value = "";
  tareas.push(nuevaTarea);
  pintar();
};

boton.addEventListener("click", añadirTareas,);

const pintar = () => {
  let idTareas = "";
  let tareasCompletas = 0;
  tareas.forEach((tarea) => {
    idTareas += `<li>${tarea.id} <i onclick="eliminar(${tarea.id})"class="fa-solid fa-x"></i></li>`;
  });
  
  let name = "";
  tareas.forEach((tarea) => {
    name += `<li>${tarea.name} <input type="checkbox" id=chk ${
      tarea.completed ? "checked" : ""
    } onclick="cambiarEstado(${tarea.id})"></li>`;
    
    if (tarea.completed) {
      tareasCompletas++;
    }
  });
  idTarea.innerHTML = idTareas;
  nombreTarea.innerHTML = name;
  totalTareas.innerHTML = tareas.length;
  tareasRealizadas.innerHTML = tareasCompletas;
};

const cambiarEstado = (id) => {
  const indiceTarea = tareas.findIndex((tarea) => tarea.id === id);
  if (tareas[indiceTarea].completed === false) {
    const nuevoEstado = {
      id: tareas[indiceTarea].id,
      name: tareas[indiceTarea].name,
      completed: true,
    };
    tareas.splice(indiceTarea, 1, nuevoEstado);
  } else {
    const nuevoEstado = {
      id: tareas[indiceTarea].id,
      name: tareas[indiceTarea].name,
      completed: false,
    };
    tareas.splice(indiceTarea, 1, nuevoEstado);
  }
  pintar();
  console.log(tareas);
};

const eliminar = (id) => {
  const indice = tareas.findIndex((tarea) => tarea.id === id);
  tareas.splice(indice, 1);
  pintar();
};

pintar();
