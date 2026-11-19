// เอฟเฟกต์เดียวของหน้านี้: ตอนโหลด ตัวอักษร BEAM ถอดรหัสจากสัญลักษณ์เป็นชื่อจริง
(function () {
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var el = document.getElementById("wordmark");
  if (!el || reduce) return;

  var finalText = el.textContent;
  var glyphs = "01<>/#%&$";
  var frame = 0;
  var settle = 6;   // เฟรมที่เริ่มเผยตัวอักษรแรก
  var gap = 5;      // ระยะห่างเฟรมระหว่างตัวอักษร

  el.setAttribute("aria-label", finalText);
  el.style.minWidth = el.offsetWidth + "px";

  var timer = setInterval(function () {
    frame++;
    el.textContent = finalText
      .split("")
      .map(function (ch, i) {
        return frame > i * gap + settle ? ch : glyphs.charAt(Math.floor(Math.random() * glyphs.length));
      })
      .join("");
    if (frame > finalText.length * gap + settle) {
      clearInterval(timer);
      el.textContent = finalText;
    }
  }, 45);
})();
