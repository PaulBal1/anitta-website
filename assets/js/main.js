(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });
  }

  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  var tabs = document.querySelectorAll(".tab[data-album]");
  function showAlbum(id) {
    tabs.forEach(function (t) { t.classList.toggle("active", t.dataset.album === id); });
    document.querySelectorAll(".album").forEach(function (a) { a.classList.toggle("active", a.id === id); });
  }
  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      showAlbum(t.dataset.album);
      history.replaceState(null, "", "#" + t.dataset.album);
    });
  });
  if (tabs.length && location.hash && document.getElementById(location.hash.slice(1))) {
    showAlbum(location.hash.slice(1));
  }

  var lb = document.querySelector(".lightbox");
  if (!lb) return;
  var lbImg = lb.querySelector("img");
  var lbCount = lb.querySelector(".lb-count");
  var items = [];
  var index = 0;

  function render() {
    var a = items[index];
    lbImg.src = a.getAttribute("href");
    lbImg.alt = a.querySelector("img").alt;
    lbCount.textContent = (index + 1) + " / " + items.length;
  }
  function open(a) {
    var scope = a.closest("[data-lightbox-scope]") || document;
    items = Array.prototype.slice.call(scope.querySelectorAll("a[data-lightbox]"));
    index = items.indexOf(a);
    render();
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function close() {
    lb.classList.remove("open");
    document.body.style.overflow = "";
  }
  function step(d) { index = (index + d + items.length) % items.length; render(); }

  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-lightbox]");
    if (a) { e.preventDefault(); open(a); }
  });
  lb.querySelector(".lb-close").addEventListener("click", close);
  lb.querySelector(".lb-prev").addEventListener("click", function () { step(-1); });
  lb.querySelector(".lb-next").addEventListener("click", function () { step(1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function (e) {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
})();
