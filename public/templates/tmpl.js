define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['container-index']=function anonymous(it) {
var out='<div class="entry-wrapper"><div class="entry"></div><div class="entry"></div><div class="entry"></div></div>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><title>bookshelf</title><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><link href="../public/styles/reset.css" rel="stylesheet" type="text/css"><link href="../public/styles/base.css" rel="stylesheet" type="text/css"><link href="../public/styles/layout.css" rel="stylesheet" type="text/css"></head><body><section class="header">'+(it.header)+'</section><section class="container">'+(it.container)+'</section><!--   <section class="footer"><p>Zhangjiayang Rensijia Wangmeiqi, they are killing themselves.</p></section> --></body></html>';return out;
};
return tmpl;});
