
function convertToLunar() {
  const year = parseInt(document.getElementById("solarYear").value);
  if (isNaN(year)) return;
  const lunar = Lunar.fromYmd(year, 1, 1);
  const result = `農曆年份：${lunar.getYearInChinese()}（${lunar.getGanZhiYear()}年，${lunar.getYearShengXiao()}）`;
  document.getElementById("lunarResult").textContent = result;
}

function clearSolar() {
  document.getElementById("solarYear").value = "";
  document.getElementById("lunarResult").textContent = "";
}

function convertRocToGregorian() {
  const rocYear = parseInt(document.getElementById("rocYear").value);
  if (isNaN(rocYear)) return;
  const gregorian = rocYear + 1911;
  const lunar = Lunar.fromYmd(gregorian, 1, 1);
  const result = `西元：${gregorian} 年（${lunar.getGanZhiYear()}年，${lunar.getYearShengXiao()}）`;
  document.getElementById("solarResult").textContent = result;
}

function clearRoc() {
  document.getElementById("rocYear").value = "";
  document.getElementById("solarResult").textContent = "";
}
