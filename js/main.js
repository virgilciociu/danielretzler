/*
 * Renders the horoscope, the bracelets and the click-to-load map.
 * Needs js/data.js to be loaded first.
 */
(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function swatch(stoneName) {
    var s = el("span", "swatch");
    var info = window.STONES[stoneName];
    s.style.background = info ? info.color : "#999";
    s.setAttribute("aria-hidden", "true");
    return s;
  }

  // ---------- Horoscope ----------
  function renderZodiac(root) {
    var grid = el("div", "zodiac-grid");

    window.SIGNS.forEach(function (sign) {
      var details = el("details", "sign");
      details.id = "sign-" + sign.id;

      var summary = el("summary");
      var head = el("span", "sign-head");
      // U+FE0E forces the plain text glyph instead of a coloured emoji on phones.
      head.appendChild(el("span", "sign-symbol", sign.symbol + "︎"));
      var title = el("span", "sign-title");
      title.appendChild(el("span", "sign-name", sign.name));
      title.appendChild(el("span", "sign-dates", sign.dates));
      head.appendChild(title);
      summary.appendChild(head);

      var preview = el("span", "sign-preview");
      sign.stones.forEach(function (name) {
        var line = el("span", "preview-stone");
        line.appendChild(swatch(name));
        line.appendChild(document.createTextNode(name));
        preview.appendChild(line);
      });
      summary.appendChild(preview);
      details.appendChild(summary);

      var body = el("div", "sign-body");
      var list = el("ul", "stone-list");
      sign.stones.forEach(function (name) {
        var li = el("li");
        var h = el("strong", "stone-name");
        h.appendChild(swatch(name));
        h.appendChild(document.createTextNode(name));
        li.appendChild(h);
        li.appendChild(el("p", null, window.STONES[name].text));
        list.appendChild(li);
      });
      body.appendChild(list);
      details.appendChild(body);

      // Only one sign open at a time.
      details.addEventListener("toggle", function () {
        if (!details.open) return;
        grid.querySelectorAll("details.sign[open]").forEach(function (other) {
          if (other !== details) other.open = false;
        });
      });

      grid.appendChild(details);
    });

    root.appendChild(grid);
  }

  // ---------- Bracelets ----------
  function familyOf(stoneName) {
    var info = window.STONES[stoneName];
    return (info && info.family) || stoneName;
  }

  function signsForStones(stones) {
    var families = stones.map(familyOf);
    return window.SIGNS.filter(function (sign) {
      return sign.stones.some(function (s) { return families.indexOf(s) !== -1; });
    });
  }

  function renderBracelets(root) {
    var grid = el("div", "bracelet-grid");

    window.BRACELETS.forEach(function (b, i) {
      var card = el("article", "bracelet");

      var frame = el("div", "bracelet-photo");
      var img = document.createElement("img");
      img.src = b.img;
      img.alt = "Handgefertigtes Armband: " + b.name;
      img.loading = i < 2 ? "eager" : "lazy";
      img.decoding = "async";
      frame.appendChild(img);
      card.appendChild(frame);

      var body = el("div", "bracelet-body");
      body.appendChild(el("h3", null, b.name));

      var stones = el("p", "bracelet-stones");
      stones.appendChild(el("span", "label", b.stones.length > 1 ? "Steine: " : "Stein: "));
      b.stones.forEach(function (name, idx) {
        if (idx) stones.appendChild(document.createTextNode(", "));
        var chip = el("span", "chip");
        chip.appendChild(swatch(name));
        chip.appendChild(document.createTextNode(name));
        stones.appendChild(chip);
      });
      body.appendChild(stones);

      body.appendChild(el("p", "bracelet-text", b.text));

      var signs = signsForStones(b.stones);
      if (signs.length) {
        var fit = el("p", "bracelet-signs");
        fit.appendChild(el("span", "label", "Passt zu: "));
        fit.appendChild(document.createTextNode(signs.map(function (s) { return s.name; }).join(", ")));
        body.appendChild(fit);
      }

      card.appendChild(body);
      grid.appendChild(card);
    });

    root.appendChild(grid);
  }

  // ---------- Click-to-load map (privacy: nothing from Google is loaded before the click) ----------
  function setupMap() {
    var button = document.getElementById("load-map");
    var holder = document.getElementById("map-holder");
    if (!button || !holder) return;
    button.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.title = "Karte: Bergstr. 193, 45770 Marl";
      frame.src = "https://www.google.com/maps?q=Bergstr.+193,+45770+Marl,+Germany&hl=de&output=embed";
      frame.referrerPolicy = "no-referrer-when-downgrade";
      frame.setAttribute("allowfullscreen", "");
      holder.innerHTML = "";
      holder.classList.add("loaded");
      holder.appendChild(frame);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var z = document.getElementById("zodiac");
    if (z) renderZodiac(z);
    var b = document.getElementById("bracelets");
    if (b) renderBracelets(b);
    setupMap();
  });
})();
