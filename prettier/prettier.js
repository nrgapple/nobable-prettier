
const prettier = require('prettier');
const axios = require('axios');
var s = require('net');
const url = "http://localhost:31337/json";


const start = async () => {
  try {
    const response = await axios.get(url);
    const { data } = response;
    console.log(data[0].webSocketDebuggerUrl);
    // client
    var client = new s.Socket();
    client.connect(31337, data[0].webSocketDebuggerUrl);
    // payload = {
    //   'id': 12,
    //   'method': 'Runtime.evaluate',
    //   'params': {'expression': 'alert("hola"!)'}
    // }
    // client.write(JSON.stringify(payload));
    client.end()
s.connect(8080);
  } catch (e) {
    console.log(e);
  }
}

const prettierify = () => {
  console.log("Running prettier");
  var response = prettier.format("test thing", { singleQuote: true, parser: "markdown" })
  console.log(response)
}

const addPrettierButton = () => {
  var trash = document.querySelector('[title="Move to Trash"]');
  var sideElement = trash.parentElement;
  var prettierElement = sideElement.cloneNode(true);
  var pButton = prettierElement.firstChild;
  pButton.removeChild(pButton.firstChild);
  var pIcon = document.createElement("div");
  pIcon.innerHTML = "✨";
  pButton.appendChild(pIcon);
  pButton.title = "Prettier";
  sideElement.parentElement.insertBefore(prettierElement, sideElement);
  return pButton;
}

setTimeout(() => {
  start();
}, 2000)

//addPrettierButton().addEventListener("click", () => prettierify())


// var observer = new MutationObserver((mutations) => {

  
// })

// observer.observe(document.body, {
//   childList: true,
//   subtree: true,
//   attributes: false,
//   characterData: false
// })