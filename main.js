define(function (/*require, exports, module*/) {
  'use strict';
  var LanguageManager = brackets.getModule("language/LanguageManager");

  LanguageManager.defineLanguage("qml", {
      name: "QML",
      mode: "haxe",
      fileExtensions: ["qml"],
      blockComment: ["/*", "*/"],
      lineComment: ["//"]
  });

  console.log("QML syntax highlighting extension loaded");
});
