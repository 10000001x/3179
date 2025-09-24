// Path to your Vega-Lite spec
var spec = "week9_hw.json";

// Embed the map
vegaEmbed("#msia_map", spec)
  .then(function(result) {
    console.log("Map loaded successfully!");
  })
  .catch(console.error);