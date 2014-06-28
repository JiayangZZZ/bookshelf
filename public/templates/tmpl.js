define(function() {
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['container-book']=function anonymous(it) {
var out='<table class="two-column"><tr><td class="column-nerrow"><img src="/public/images/logo.png"></td><td class="column-wide"><div class="books-promo"><p class="promo-title">'+(it.name)+'</p><p class="promo-description">'+(it.introduction)+'</p></div></td></tr></table>';return out;
};
  tmpl['container-books']=function anonymous(it) {
var out='<a href="http://localhost:3800/create"><div class="create">Other good books?</div></a><table class="two-column">';var arr1=it.books;if(arr1){var book,index=-1,l1=arr1.length-1;while(index<l1){book=arr1[index+=1];out+='<tr><td class="column-nerrow"><img src="/public/images/reading_pic2.jpg" height="120" width="120"></td><td class="column-wide"><a href="http://localhost:3800/book/2"><div class="books-promo"><p class="promo-title">'+(book.name)+'</p><p class="promo-description">'+(book.introduction)+'</p></div></a></td></tr>';} } out+='</table>';return out;
};
  tmpl['container-index']=function anonymous(it) {
var out='<div class="entry-wrapper"><a class="entry1" href="http://localhost:3800/books"></a><a class="entry2" href="http://localhost:3800/teams"></a><a class="entry3" href="http://localhost:3800/setting"></a></div>';return out;
};
  tmpl['containerBook2']=function anonymous(it) {
var out='<div class="book-details"><div class="book-cover"></div><div class="book-intro"><p class="book-title">red and black</p><p class="tag">romance</p><p class="book-description">This is a good book telling us a wonderful story. It is really interesting.</p></div><a href=""><div class="button-blue">I\'ve read it</div></a><a href=""><div class="button-red">I wanna read it</div></a></div>';return out;
};
  tmpl['containerCreate']=function anonymous(it) {
var out='<div class="form-wrapper"><div class="upload-pic"></div><div class="button-upload"><div><form>Titile: <input type="title" name="title"><br />Author: <input type="author" name="author"><br /></form></div>';return out;
};
  tmpl['containerSetting']=function anonymous(it) {
var out='<div class="setting-wrapper">';var arr1=it.settings;if(arr1){var setting,index=-1,l1=arr1.length-1;while(index<l1){setting=arr1[index+=1];out+='<div class="first-column"><img src="/public/images/IMG_2590.JPG" height="220" width="220"></div><div class="second-column"><p class="setting-title">'+(setting.name)+'<span class="button-edit">Edit</span></p><p class="setting-description">Age: '+(setting.age)+'</p><p class="setting-description">Constellation: '+(setting.star)+'</p><p class="setting-description">Hobby: '+(setting.hobit)+'</p><p class="setting-description">'+(setting.introduction)+'</p></div>';} } out+='</div>';return out;
};
  tmpl['containerTeam2']=function anonymous(it) {
var out='<div class="book-details"><div class="book-cover"></div><div class="book-intro"><p class="book-title">Science Fiction Discussion</p><p class="tag">funny</p><p class="book-description">A good team discussing funny things.</p></div><div class="button-blue">Follow</div><div class="message-wrapper"><div class="message-content">What is your favourate fiction?</div><div class="message-user">Alice</div></div><div class="message-wrapper"><div class="message-content">Harry Potter! of course!</div><div class="message-user">Brain</div></div><div class="message-wrapper"><div class="message-content">Come on. Harry Potter is not a science fiction...</div><div class="message-user">Catherine</div></div><div class="message-wrapper"><div class="message-content">LOL</div><div class="message-user">David</div></div></div>';return out;
};
  tmpl['containerTeams']=function anonymous(it) {
var out='<table class="two-column">';var arr1=it.teams;if(arr1){var team,index=-1,l1=arr1.length-1;while(index<l1){team=arr1[index+=1];out+='<tr><td class="column-nerrow"><img src="/public/images/reading_pic.jpg" height="120" width="120"></td><td class="column-wide"><a href="http://localhost:3800/team/2"><div class="books-promo"><p class="promo-title">'+(team.title)+'</p><p class="promo-description">'+(team.description)+'</p></div></td></tr>';} } out+='</table>';return out;
};
  tmpl['header']=function anonymous(it) {
var out='<!--!header--><div class="header-container"><a href="http://localhost:3800"><h1>BOOKSHELF</h1></a></div>';return out;
};
  tmpl['html']=function anonymous(it) {
var out='<!DOCTYPE html><html><head><title>bookshelf</title><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><link href="../public/styles/reset.css" rel="stylesheet" type="text/css"><link href="../public/styles/base.css" rel="stylesheet" type="text/css"><link href="../public/styles/layout.css" rel="stylesheet" type="text/css"></head><body><section class="header">'+(it.header)+'</section><section class="container">'+(it.container)+'</section><!--   <section class="footer"><p>Zhangjiayang Rensijia Wangmeiqi, they are killing themselves.</p></section> --></body></html>';return out;
};
return tmpl;});
