 var network= new brain.NeuralNetwork();
var fonts = [
  "Cabin",
  "Fjall One",
  "Istok Web",
  "Josefin Sans",
  "Lato",
  "Montserrat",
  "Ubuntu",
  "Lora",
  "Raleway",
  "Quicksand",
  "PT Sans"
];
network.train([
  {input: {fontCode: 0}, output: {font : 0} },
  {input : {fontCode: 0.6}, output: {font : 1} },
  {input : {fontCode: 1}, output: {font : 1} }],
{
  errorThresh : 0.005,
  iterations : 20000,
  log : true,
  logPeriod: 10,
  learningRate : 0.3
});

  function getFont(fontCode) {
    return fonts[Math.ceil(network.run(fontCode).font * 10)];
  }

  function getFontIndex(fontName){
    console.log(fontName,"name");
    var fontIndex= fonts.indexOf(fontName);
    return fontIndex == -1 ? "undefined" : fontIndex;
  }

  function fontPairing() {
      var results = [];
    var fontName= document.getElementById("fontName").value;
    var fontIndex= getFontIndex(fontName);
    var result= document.getElementById("result");
    if(!(fontIndex == "undefined")){
      console.log(fontIndex,"mmmm");
          var getFontCode= fontIndex/10;
          var fontCode = {fontCode: getFontCode}
          var txt = getFont(fontCode);
          console.log("chalda");
          results.push(fonts[fontIndex] + " : "  + txt);
      result.setAttribute("class"," ");
      result.innerHTML = results.join("<br>");
    }
    else {

      result.setAttribute("class","alert");
      result.innerHTML = "You Have entered wrong Font, please Recheck!";
    }
  }
