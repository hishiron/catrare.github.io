// モバイルメニューを最初の描画から閉じた状態で描き、初期化時のレイアウトのずれを防ぐ。
// home.js が読み込めなかった場合は DOMContentLoaded 時点で外し、ナビを表示に戻す
// （defer の成否はこの時点で確定し、画像の読み込み完了は待たない）。
// Content Security Policy でインラインのスクリプトを許さないため、<head> から同期で読み込む外部ファイルにしている（issue #840）。
document.documentElement.classList.add("ct-js");
document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector(".ct-header.is-enhanced")) document.documentElement.classList.remove("ct-js");
});
