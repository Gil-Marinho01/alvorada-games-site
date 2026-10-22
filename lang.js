// Escolhe o idioma: preferência salva > idioma do navegador > inglês. Sem JS, a página fica em inglês.
(function () {
  var html = document.documentElement, saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "en").toLowerCase().indexOf("pt") === 0 ? "pt" : "en");
  function set(l) {
    html.setAttribute("data-lang", l);
    html.setAttribute("lang", l === "pt" ? "pt-BR" : "en");
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-set") === l ? "true" : "false");
    });
  }
  set(lang);
  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      var l = b.getAttribute("data-set");
      set(l);
      try { localStorage.setItem("lang", l); } catch (e) {}
    });
  });
})();
