// solarized-clearly
// Copyright (c) 2014 Moza USANE
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php

var preferenceModifier = require("sdk/preferences/service");

exports.main = function (options, callbacks) {
  var base = preferenceModifier.get("extensions.readable-by-evernote.base");
  preferenceModifier.set("extensions.solarized-clearly.base", base);
  preferenceModifier.set("extensions.readable-by-evernote.base", "theme-3");

  var colorBackground = preferenceModifier.get("extensions.readable-by-evernote.color_background");
  preferenceModifier.set("extensions.solarized-clearly.color_background", colorBackground);
  preferenceModifier.set("extensions.readable-by-evernote.color_background", "#fdf6e3");

  var colorLinks = preferenceModifier.get("extensions.readable-by-evernote.color_links");
  preferenceModifier.set("extensions.solarized-clearly.color_links", colorLinks);
  preferenceModifier.set("extensions.readable-by-evernote.color_links", "#cb4d16");

  var colorText = preferenceModifier.get("extensions.readable-by-evernote.color_text");
  preferenceModifier.set("extensions.solarized-clearly.color_text", colorText);
  preferenceModifier.set("extensions.readable-by-evernote.color_text", "#586e75");

  var customCss = preferenceModifier.get("extensions.readable-by-evernote.custom_css");
  preferenceModifier.set("extensions.solarized-clearly.custom_css", customCss);
  preferenceModifier.set("extensions.readable-by-evernote.custom_css", "#text blockquote { border-color: #2aa198; color: #2aa198; }#text thead { background-color: #002b36; color: #b58900; }#text tr:nth-child%28even%29 { background: #fdf6e3; }#text hr { border-color: #c5c5c5; }#text #articleHeader { border-color: #586E75; }");

  var textAlign = preferenceModifier.get("extensions.readable-by-evernote.text_align");
  preferenceModifier.set("extensions.solarized-clearly.text_align", textAlign);
  preferenceModifier.set("extensions.readable-by-evernote.text_align", "justified");

  var customThemeOptions = preferenceModifier.get("extensions.readable-by-evernote.custom_theme_options");
  preferenceModifier.set("extensions.solarized-clearly.custom_theme_options", customThemeOptions);
  preferenceModifier.set("extensions.readable-by-evernote.custom_theme_options", "[[=color_background][=#fdf6e3]][[=color_text][=#586e75]][[=color_links][=#cb4d16]][[=text_size][=15px]][[=box_width][=36em]][[=text_line_height][=1.5em]][[=base][=theme-3]][[=text_align][=justified]][[=footnote_links][=on_print]][[=large_graphics][=do_nothing]][[=text_font][=\"PT Serif\"]][[=text_font_header][=\"PT Serif\"]][[=text_font_monospace][=Inconsolata]][[=custom_css][=#text blockquote { border-color: #2aa198; color: #2aa198; }#text thead { background-color: #002b36; color: #b58900; }#text tr:nth-child%28even%29 { background: #fdf6e3; }#text hr { border-color: #c5c5c5; }#text #articleHeader { border-color: #586E75; }]]");

  var theme = preferenceModifier.get("extensions.readable-by-evernote.theme");
  preferenceModifier.set("extensions.solarized-clearly.theme", theme);
  preferenceModifier.set("extensions.readable-by-evernote.theme", "custom");
};

exports.onUnload = function (options, callbacks) {
  var base = preferenceModifier.get("extensions.solarized-clearly.base");
  preferenceModifier.set("extensions.readable-by-evernote.base", base);

  var colorBackground = preferenceModifier.get("extensions.solarized-clearly.color_background");
  preferenceModifier.set("extensions.readable-by-evernote.color_background", colorBackground);

  var colorLinks = preferenceModifier.get("extensions.solarized-clearly.color_links");
  preferenceModifier.set("extensions.readable-by-evernote.color_links", colorLinks);

  var colorText = preferenceModifier.get("extensions.solarized-clearly.color_text");
  preferenceModifier.set("extensions.readable-by-evernote.color_text", colorText);

  var customCss = preferenceModifier.get("extensions.solarized-clearly.custom_css");
  preferenceModifier.set("extensions.readable-by-evernote.custom_css", customCss);

  var textAlign = preferenceModifier.get("extensions.solarized-clearly.text_align");
  preferenceModifier.set("extensions.readable-by-evernote.text_align", textAlign);

  var customThemeOptions = preferenceModifier.get("extensions.solarized-clearly.custom_theme_options");
  preferenceModifier.set("extensions.readable-by-evernote.custom_theme_options", customThemeOptions);

  var theme = preferenceModifier.get("extensions.solarized-clearly.theme");
  preferenceModifier.set("extensions.readable-by-evernote.theme", theme);
};
