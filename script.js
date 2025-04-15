
function convertToLunar() {
  const year = parseInt(document.getElementById("solarYear").value);
  if (isNaN(year)) {
    document.getElementById("lunarResult").textContent = "請輸入有效的西元年份";
    return;
  }

  const solar = Solar.fromYmd(year, 1, 1);
  const lunar = Lunar.fromDate(solar.getDate());

  const result = `農曆年份：${lunar.getYear()}（${lunar.getGanZhiYear()}年，屬${lunar.getZodiac()}）`;
  document.getElementById("lunarResult").textContent = result;
}

function clearSolar() {
  document.getElementById("solarYear").value = "";
  document.getElementById("lunarResult").textContent = "";
}

function convertToSolar() {
    const year = parseInt(document.getElementById("lunarYear").value);
    if (isNaN(year)) {
      document.getElementById("solarResult").textContent = "請輸入有效的民國年（例：114）";
      return;
    }
  
    const solarYear = year + 1911;
    const solar = Solar.fromYmd(solarYear, 1, 1); // ✅ 保持這行
    const lunar = Lunar.fromSolar(solar);        // ✅ 修正這行
  
    const result = `西元年份：${solarYear}（${lunar.getGanZhiYear()}年，屬${lunar.getZodiac()}）`;
    document.getElementById("solarResult").textContent = result;
}

function clearLunar() {
  document.getElementById("lunarYear").value = "";
  document.getElementById("solarResult").textContent = "";
}
