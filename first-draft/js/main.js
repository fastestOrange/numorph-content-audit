(function () {
  "use strict";

  function initScrollReveal() {
    var targets = document.querySelectorAll(
      "header, section, main > h2, main > p, main > div, main > ul, main > ol, main > dl, main > table"
    );
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("nm-in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("nm-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -7% 0px" }
    );
    targets.forEach(function (el) {
      el.classList.add("nm-reveal");
      io.observe(el);
    });
  }

  function initScrollChrome() {
    var bar = document.getElementById("nm-progress");
    var nav = document.getElementById("nm-nav");
    if (!bar && !nav) return;
    var onScroll = function () {
      var st = window.scrollY || document.documentElement.scrollTop || 0;
      var dh = document.documentElement.scrollHeight - window.innerHeight;
      if (bar) bar.style.width = (dh > 0 ? (st / dh * 100) : 0) + "%";
      if (nav) nav.classList.toggle("nm-scrolled", st > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function initMobileNav() {
    var nav = document.getElementById("nm-nav");
    if (!nav) return;
    var toggle = nav.querySelector(".nm-nav-toggle");
    var links = nav.querySelector(".nm-nav-links");
    if (!toggle || !links) return;

    var scrim = document.createElement("div");
    scrim.id = "nm-nav-scrim";
    document.body.appendChild(scrim);

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      links.setAttribute("data-open", open ? "true" : "false");
      scrim.setAttribute("data-open", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });
    scrim.addEventListener("click", function () { setOpen(false); });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setOpen(false); });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initScrollReveal();
    initScrollChrome();
    initMobileNav();
  });
})();
