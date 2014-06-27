define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['container-book']=function anonymous(it) {
var out='<table class="two-column"><tr><td class="column-nerrow"><img src="/public/images/logo.png"></td><td class="column-wide"><div class="books-promo"><p class="promo-title">'+(it.name)+'</p><p class="promo-description">'+(it.introduction)+'</p></div></td></tr></table>';return out;
};
  tmpl['container-books']=function anonymous(it) {
var out='<table class="two-column">';var arr1=it.books;if(arr1){var book,index=-1,l1=arr1.length-1;while(index<l1){book=arr1[index+=1];out+='<tr><td class="column-nerrow"><img src="/public/images/reading_pic2.jpg" height="120" width="120"></td><td class="column-wide"><a href="http://localhost:3800/book/'+(book.id)+'"><div class="books-promo"><p class="promo-title">'+(book.name)+'</p><p class="promo-description">'+(book.introduction)+'</p></div></a></td></tr>';} } out+='</table>';return out;
};
  tmpl['container-index']=function anonymous(it) {
var out='<div class="entry-wrapper"><a class="entry" href="http://localhost:3800/books"></a><a class="entry" href="http://localhost:3800/teams"></a><a class="entry" href="http://localhost:3800/setting"></a></div>';return out;
};
  tmpl['containerTeams']=function anonymous(it) {
var out='<table class="two-column">';var arr1=it.teams;if(arr1){var team,index=-1,l1=arr1.length-1;while(index<l1){team=arr1[index+=1];out+='<tr><td class="column-nerrow"><img src="/public/images/reading_pic.jpg" height="120" width="120"></td><td class="column-wide"><div class="books-promo"><p class="promo-title">'+(team.title)+'</p><p class="promo-description">'+(team.description)+'</p></div></td></tr>';} } out+='</table>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<!--!header--><div class="header-container"><h1>BOOKSHELF</h1></div>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><title>bookshelf</title><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><link href="../public/styles/reset.css" rel="stylesheet" type="text/css"><link href="../public/styles/base.css" rel="stylesheet" type="text/css"><link href="../public/styles/layout.css" rel="stylesheet" type="text/css"></head><body><section class="header">'+(it.header)+'</section><section class="container">'+(it.container)+'</section><!--   <section class="footer"><p>Zhangjiayang Rensijia Wangmeiqi, they are killing themselves.</p></section> --></body></html>';return out;
};
return tmpl;});
