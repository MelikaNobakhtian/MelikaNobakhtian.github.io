/* ============ Melika Nobakhtian — site interactions ============ */
(function () {
  "use strict";

  /* ---------- theme toggle (light by default) ---------- */
  var root = document.documentElement;
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  if (stored === "dark") {
    root.classList.add("dark");
  }
  document.getElementById("theme-toggle").addEventListener("click", function () {
    root.classList.toggle("dark");
    try { localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light"); } catch (e) {}
  });

  /* ---------- mobile nav ---------- */
  var burger = document.getElementById("nav-burger");
  var links = document.getElementById("nav-links");
  burger.addEventListener("click", function () { links.classList.toggle("open"); });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") links.classList.remove("open");
  });

  /* ---------- reveal on scroll ---------- */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---------- scrollspy ---------- */
  var sections = ["about", "news", "publications", "experience", "projects", "teaching", "service"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navAs = {};
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    navAs[a.getAttribute("href").slice(1)] = a;
  });
  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        Object.values(navAs).forEach(function (a) { a.classList.remove("active"); });
        var a = navAs[en.target.id];
        if (a) a.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(function (s) { spy.observe(s); });

  /* ---------- publication filter ---------- */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var pubs = document.querySelectorAll(".pub");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var f = btn.getAttribute("data-filter");
      pubs.forEach(function (p) {
        var show = f === "all" || p.getAttribute("data-type") === f;
        p.classList.toggle("hidden-by-filter", !show);
      });
    });
  });

  /* ---------- teaching show more ---------- */
  var tToggle = document.getElementById("teach-toggle");
  var tMore = document.getElementById("teach-more");
  if (tToggle && tMore) {
    tToggle.addEventListener("click", function () {
      var open = !tMore.hidden;
      tMore.hidden = open;
      tToggle.setAttribute("aria-expanded", String(!open));
      tToggle.textContent = open ? "Show all 18 courses ↓" : "Show fewer ↑";
    });
  }
})();
