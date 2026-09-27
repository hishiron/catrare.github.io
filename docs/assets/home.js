// トップページ・担当実績ページのモバイルメニュー（catrare/docs/website/design/40-implementation.md §4.4）。
// JSが動かない場合はナビを折り返して常に表示する。初期化に成功したときだけ開閉式に切り替える。
(function () {
  "use strict";

  var header = document.querySelector(".ct-header");
  var toggle = document.querySelector(".ct-nav-toggle");
  var nav = document.getElementById("ct-nav");
  if (!header || !toggle || !nav || !window.matchMedia) return;

  var desktop = window.matchMedia("(min-width: 1024px)");

  function setOpen(open) {
    header.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function isOpen() {
    return header.classList.contains("is-open");
  }

  toggle.addEventListener("click", function () {
    setOpen(!isOpen());
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen() && !desktop.matches) {
      setOpen(false);
      toggle.focus();
    }
  });

  nav.addEventListener("click", function (event) {
    var link = event.target.closest("a");
    if (!link || desktop.matches) return;
    setOpen(false);

    var href = link.getAttribute("href") || "";
    if (href.charAt(0) !== "#" || href.length < 2) return;
    var target = document.getElementById(href.slice(1));
    if (!target) return;
    // 閉じたメニュー内にフォーカスを残さず、移動先のセクションへ移す
    window.setTimeout(function () {
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    }, 0);
  });

  function onViewportChange() {
    if (desktop.matches) setOpen(false);
  }
  if (desktop.addEventListener) {
    desktop.addEventListener("change", onViewportChange);
  } else if (desktop.addListener) {
    desktop.addListener(onViewportChange);
  }

  setOpen(false);
  header.classList.add("is-enhanced");
})();
