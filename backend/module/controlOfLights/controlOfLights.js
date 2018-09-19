console.log("Import module: controlOfLights.js");

// declarations RGB Color array
var arrRGBColor = new Array();
arrRGBColor[1] = 0; // [1] =  LED RGB - switch Living room
arrRGBColor[2] = 0; // [2] =  LED RGB - switch corridor
arrRGBColor[3] = 0; // [3] =  reserve

module.exports.dimInvert = value => {
  // 0..100 -> 100 .. 0
  return Math.abs((value - 100) * -1);
};

module.exports.lightsDimmer = (index, value) => {
  // Tato funkce přidá aktuální hodnotu pro stmívání do pole arrDimmerState pro konkrétní dim_x slider
  // arrDimmerState[index] = value;
};

module.exports.RGBLedColor = (index, value) => {
  // Tato funkce přidá aktuální hodnotu pro GRB do pole arrDimmerState pro konkrétní rgb_x slider
  // arrRGBColor[index] = value;
};

module.exports.RGBLedColorDimmer = (index, value) => {
  // Tato funkce přidá aktuální hodnotu pro GRB do pole arrDimmerState pro konkrétní rgb_x slider
  // arrRGBColor[index] = value;
};

module.exports.WhiteLedDimmer = (index, value) => {
  // Tato funkce přidá aktuální hodnotu pro GRB do pole arrDimmerState pro konkrétní rgb_x slider
  // arrRGBColor[index] = value;
};
