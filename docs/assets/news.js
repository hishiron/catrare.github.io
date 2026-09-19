// トップページのお知らせ欄（ウィジェット）。
// docs/announcements/design/20-rendering.md §2.5 の契約に従う:
// ライブラリなし・textContentのみでDOMを組み立てる・失敗時はセクションをhiddenのままにする。
(function () {
  "use strict";

  var MAX_ITEMS = 3;

  var section = document.getElementById("news");
  var list = document.getElementById("news-list");
  if (!section || !list) return;

  function isValidItem(item) {
    return (
      item &&
      Number.isInteger(item.number) &&
      item.number > 0 &&
      typeof item.title === "string" &&
      typeof item.publishedAtLabel === "string" &&
      typeof item.appLabel === "string"
    );
  }

  function buildEmptyItem() {
    var li = document.createElement("li");
    li.className = "news-empty";
    li.textContent = "現在お知らせはありません。";
    return li;
  }

  function buildItem(item) {
    var li = document.createElement("li");
    li.className = "news-list-item";

    var a = document.createElement("a");
    a.href = "news/#n" + item.number;

    var meta = document.createElement("span");
    meta.className = "news-list-meta";
    meta.textContent = item.publishedAtLabel + " ・ " + item.appLabel;

    var title = document.createElement("span");
    title.className = "news-list-title";
    title.textContent = item.title;

    a.appendChild(meta);
    a.appendChild(title);
    li.appendChild(a);
    return li;
  }

  function render(items) {
    var valid = items.filter(isValidItem).slice(0, MAX_ITEMS);
    if (valid.length === 0) {
      list.appendChild(buildEmptyItem());
    } else {
      valid.forEach(function (item) {
        list.appendChild(buildItem(item));
      });
    }
    section.hidden = false;
  }

  fetch("news/announcements.json", { cache: "no-cache" })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("お知らせの取得に失敗しました: " + response.status);
      }
      return response.json();
    })
    .then(function (data) {
      if (!data || !Array.isArray(data.items)) {
        throw new Error("announcements.jsonの形式が不正です");
      }
      render(data.items);
    })
    .catch(function (error) {
      console.error(error);
    });
})();
