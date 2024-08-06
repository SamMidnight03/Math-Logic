//Color Claro/Oscuro
const Modo = document.getElementById("Modo");
const VistaModoVar = Modo.value;
const body = document.querySelector("body");

Modo.addEventListener('change', () => {

  if (Modo.value == "Claro") {
    document.body.classList.remove("oscuro")
  } else {
    document.body.classList.add("oscuro")
  }

})

//Vistas

const menu = document.getElementById("menu");
const Btn = document.querySelectorAll(".btn");
const Vistas = document.querySelectorAll(".Vista");

function selectVista(FilterValue) {
  Vistas.forEach(item => {
    item.classList.remove('Vista')
    void item.clientHeight
    item.classList.add('Vista')

    if (FilterValue === 'all' || item.classList.contains(FilterValue)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  })
}

document.addEventListener('DOMContentLoaded', function () {

  Btn.forEach(Button => {
    Button.addEventListener('click', () => {
      //si tiene a clase "active" la quita
      Btn.forEach(btn => btn.classList.remove('active'));
      //si no tiene la clase "active" la agrga
      Button.classList.add('active');

      //Toma lo que tiene el atributo "data-filter"
      FilterValue = Button.getAttribute('data-filter');
      
      //Muestra solo los elementos con la categoria escogida
      selectVista(FilterValue)

    })
  });

});


menu.addEventListener('change', () => {
  selectVista(menu.value)
})

//Factorial
const NumFact = document.getElementById("Factorial"); //Input del factorial
const FactResult = document.getElementById("FactResult"); //Boton faxtorial
const Result = document.getElementById("resultFact"); // <p> del resultado

FactResult.addEventListener('click', () => { //se llama al boton
  let fact = 1; // inicia un contador
  for (let i = 1; i <= NumFact.value; i++) {
    //  empieza       el numero que da el usuario       
    fact *= i
  }

  Result.innerHTML = fact //se agraga a p

  return console.log(fact);
});

//Mayor de un array
const MayorArray = document.getElementById("NumMayorArray"); //Llama al input
const MayorArrayResult = document.getElementById("MayorArrayResult"); //botton 
const MaxResultArray = document.getElementById("MaxResultArray"); // p

MayorArrayResult.addEventListener('click', () => { // se llama al boton
  let Nums = MayorArray.value //se toma todos los valores del input y los guarda
  // ["1,2,3,4"] <= un solo string
  let Array = Nums.split(',').map(Number); // se separa el strg ["1","2","3","4"]
  let max = Array[0]; //guarda la posicion 0 del array
  //console.log('Llega');
  for (let i = 1; i <= Array.length; i++) {
    if (Array[i] > max) {
      max = Array[i]
    }
  }
  MaxResultArray.innerHTML = max
  return max
});

//Ornar un Array
const OrdenaArray = document.getElementById("OrdenaArray");
const OrdenarButton = document.getElementById("OrdenarButton");
const OrdenResult = document.getElementById("OrdenResult");

OrdenarButton.addEventListener('click', () => {
  let NumDesorden = OrdenaArray.value
  let ArrayDesorden = NumDesorden.split(',');
  let ordenado = ArrayDesorden.sort((a, b) => a - b);
  OrdenResult.innerHTML = ordenado
  return ordenado
});

//Filtrar
const Filtrar = document.getElementById("Filtrar");
const FiltrarButton = document.getElementById("FiltrarButton");
const FiltrarResult = document.getElementById("FiltrarResult");

FiltrarButton.addEventListener('click', () => {
  let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let parametro = Filtrar.value;
  let mayoresA = nums.filter((num) => num >= parametro);

  FiltrarResult.innerHTML = mayoresA;
  return mayoresA;
});

//Sumar
const Sumar = document.getElementById('Sumar');
const SumarButton = document.getElementById('SumarButton');
const SumaResult = document.getElementById('SumaResult');

SumarButton.addEventListener('click', () => {
  let Num = Sumar.value;
  let Arraystr = Num.split(',');
  let ArrayNums = Arraystr.map((e) => Number(e));
  const initial = 0;

  const Result = ArrayNums.reduce((uno, dos) => uno + dos, initial)

  console.log(Result)
  SumaResult.innerHTML = Result
  return Result;
});

