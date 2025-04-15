
function convertToLunar() {
  const year = parseInt(document.getElementById("solarYear").value);
  if (!year) return;

  const lunar = Lunar.Lunar.fromDate(new Date(year, 0, 1));
  const result = `農曆年為：${lunar.getYearInChinese()}年，生肖：${lunar.getZodiac()}`;
  document.getElementById("lunarResult").textContent = result;
}

function convertToSolar() {
  const lunarYear = parseInt(document.getElementById("lunarYear").value);
  if (!lunarYear) return;

  const lunar = Lunar.Lunar.fromYmd(lunarYear, 1, 1);
  const solar = lunar.getSolar();
  const result = `西元年為：${solar.getYear()}，生肖：${lunar.getZodiac()}`;
  document.getElementById("solarResult").textContent = result;
}

function clearSolar() {
  document.getElementById("solarYear").value = "";
  document.getElementById("lunarResult").textContent = "";
}

function clearLunar() {
  document.getElementById("lunarYear").value = "";
  document.getElementById("solarResult").textContent = "";
}
