// fetch("https://go-apod.herokuapp.com/apod")
//   .then((respons) => respons.json())
//   .then((data) => {
//     document.querySelector("h1").innerText = data.title;
//     document.querySelector("img").src = data.url;

//     document.querySelector("#D").innerText = data.date;
//     document.querySelector("#C").innerText = data.copyright;
//     document.querySelector("#E").innerText = data.explanation;

//     if (currentData == null) {
//       let object = {};
//     }
//     if (object[data.date] === undefined) {
//       object[data.date] = data;
//       localStorage.setItem("picturData", JSON.stringify(object));
//     }
//   });

///////////////////////////////////////////////////////////////////////////////////////////////////

// let previousPrice = 0;

// setTimeout(updateTicker, 5000);
// function updateTicker() {
//   let APIRequest = fetch("https://data.binance.com/api/v3/ticker/24hr");

//   APIRequest.then((response) => response.json())
//     .then((data) => findBTCUSDTObject(data))
//     .then((BTCUSDTObject) => compareToLastPrice(BTCUSDTObject))
//     .then((lastPrice) => printToHTML(lastPrice));

//   setTimeout(updateTicker, 5000);
// }

// function findBTCUSDTObject(data) {
//   let BTCUSDT;
//   BTCUSDT = data.find((element) => element.symbol == "BTCUSDT");
//   BTCUSDT = BTCUSDT.lastPrice;
//   return BTCUSDT;
// }

// function compareToLastPrice(BTCUSDT) {
//   if (BTCUSDT >= previousPrice) {
//     document.getElementById("screen").style.color = "green";
//   } else {
//     document.getElementById("screen").style.color = "red";
//   }
//   previousPrice = BTCUSDT;
//   return BTCUSDT;
// }

// function printToHTML(price) {
//   document.getElementById("screen").innerText = price;
// }

///////////////////////////////////////////////////////////////////////////

// let sendBtn = document
//   .getElementById("sendBtn")
//   .addEventListener("click", () => {
//     let firstName = document.getElementById("firstName").value;
//     let requestAPI = fetch("https://api.agify.io/?name=" + firstName);
//     requestAPI
//       .then((response) => response.json())
//       .then((data) => jsonToPrint(data));
//   });

// function jsonToPrint(jsonObject) {
//   let screen = document.getElementById("screen");
//   screen.innerText = jsonObject.age;
// }

///////////////////////////////////////////////////////////////////////////
