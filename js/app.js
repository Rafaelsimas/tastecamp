let nameUser
const data = [
  {
    titulo: "Bolo de laranja",
    ingredientes: "Açúcar, ovos, leite, manteiga, farinha, fermento e laranja",
    preparo: "Bata tudo no liquidificador",
  },
  {
    titulo: "Bolo de cenoura",
    ingredientes: "Açúcar, ovos, leite, manteiga, farinha, fermento e cenoura",
    preparo: "Bata tudo no liquidificador e depois leve ao forno",
  },
  {
    titulo: "Bolo de abacaxi",
    ingredientes: "Açúcar, ovos, leite, manteiga, farinha, fermento e abacaxi",
    preparo: "Bata tudo no liquidificador e depois leve ao forno",
  },
]

const enterApp = () => {
  const nameUserLog = document.querySelector("#nameUser").value
  const screenLogin = document.querySelector(".box-login")
  const screenApp = document.querySelector(".box")
  nameUser = nameUserLog

  if (nameUser === "") {
    alert("Informe o seu nome para acessar")
  } else {
    screenLogin.classList.add("displayHidden")
    screenApp.classList.remove("displayHidden")
  }
}

const renderDataOnScreen = () => {
  const screenData = document.querySelector(".list")
  for (let i = 0; i < data.length; i++) {
    screenData.innerHTML += `
    <li>
      <ion-icon name="fast-food-outline"></ion-icon>
      <div class="item">${data[i].titulo}</div>
    </li>
    `
  }
}

renderDataOnScreen()
