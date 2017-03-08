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

  var output = network.run({fontCode: 0.9});
  console.log(output,"jj");

  function getFont(fontCode) {
    return fonts[Math.ceil(network.run(fontCode).font * 10)];
  }

  function sample() {
      var results = [];
      for (var i = 0; i < 50; i++) {
          var getFontCode= Math.random();
          var fontCode = {fontCode: getFontCode}
          var txt = getFont(fontCode);

          results.push(fonts[Math.ceil(getFontCode * 10)] + " : "  + txt);
      }
      return results.join("<br>");
  }
