(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},5:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(9),s=a.n(r),o=(a(31),a(4)),i=(a(32),a(5),a(1));var u=function(e){var t=e.onSubmit,a=Object(c.useState)(""),n=Object(o.a)(a,2),r=n[0],s=n[1];return Object(i.jsx)("header",{className:"Searchbar",children:Object(i.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),t(r),s("")},children:[Object(i.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(i.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(i.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:r,placeholder:"Search images and photos",onChange:function(e){s(e.target.value)}})]})})},h=a(14),l=a(12),j=a.n(l),b=a(23),g=a(24),p=a(25),m=a(13),f=a.n(m),d=function(){function e(t,a){Object(g.a)(this,e),this.BASE_URL=a,this.API_KEY=t,this._searchQuery="",this._page=1,this.perPage=12,this.imageType="photo",this.imageOrient="horizontal"}return Object(p.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"page",get:function(){return this._page},set:function(e){return this._page+=e}},{key:"resetPage",value:function(){return this._page=1}},{key:"searchPhotos",value:function(){var e=Object(b.a)(j.a.mark((function e(){var t,a,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f.a.defaults.baseURL=this.BASE_URL,console.log("searchQ:",this.searchQuery,"page:",this.page),t="?q=".concat(this.searchQuery,"&page=").concat(this.page,"&key=").concat(this.API_KEY,"&image_type=").concat(this.imageType,"&orientation=").concat(this.imageOrient,"&per_page=").concat(this.perPage),e.prev=3,e.next=6,f.a.get(t);case 6:return a=e.sent,c=a.data.hits,e.abrupt("return",c);case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",e.t0.message);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),O=function(e){var t=e.pictUrl,a=e.photographer,c=e.onClick,n=e.largImg;return Object(i.jsx)("li",{className:"ImageGalleryItem",children:Object(i.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image",onClick:c,"data-source":n})})};function v(e){var t=e.onClick;return e.results.length>11&&Object(i.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}a(53);var y=a(26),x=a.n(y);function S(){return Object(i.jsx)(x.a,{type:"Bars",color:"#00BFFF",height:80,width:80,timeout:3e3})}var k=function(e){var t=e.largePic,a=e.alt,n=e.onClick;Object(c.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}));var s=function(e){"Escape"===e.code&&n()};return Object(r.createPortal)(Object(i.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&n()},children:Object(i.jsx)("div",{className:"Modal",children:Object(i.jsx)("img",{src:t,alt:a})})}),document.getElementById("modalRoot"))},w=new d("23235889-ad2e782c3a775466fc04cd861","https://pixabay.com/api/");function _(e){var t=e.searchValue,a=Object(c.useState)([]),n=Object(o.a)(a,2),r=n[0],s=n[1],u=Object(c.useState)(!1),l=Object(o.a)(u,2),j=l[0],b=l[1],g=Object(c.useState)("init"),p=Object(o.a)(g,2),m=p[0],f=p[1],d=Object(c.useState)(""),y=Object(o.a)(d,2),x=y[0],_=y[1],E=Object(c.useState)(null),I=Object(o.a)(E,2),N=I[0],P=I[1];Object(c.useEffect)((function(){w.searchQuery=t,""!==t&&(f("pending"),w.resetPage(),w.searchPhotos().then((function(e){s(e),f("success"),C()})).catch((function(){f("error")})))}),[t]);var C=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},F=function(e){b(!0),_(e.target.dataset.source),P(e.target.alt)};return"init"===m?null:"pending"===m?Object(i.jsx)(S,{}):"success"===m?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("ul",{className:"ImageGallery",children:[r.length>0&&r.map((function(e){return Object(i.jsx)(O,{onClick:F,pictUrl:e.webformatURL,photographer:e.user,largImg:e.largeImageURL},e.id)})),j&&Object(i.jsx)(k,{onClick:function(){b(!1)},largePic:x,alt:N})]}),Object(i.jsx)(v,{type:"button",onClick:function(){w.page=1,w.searchPhotos().then((function(e){s((function(t){return[].concat(Object(h.a)(t),Object(h.a)(e))})),f("success"),C()})).catch((function(){f("error")}))},results:r})]}):"error"===m&&0===r.length?alert("Sorry, we have not find such word... Lets try again!"):void 0}var E=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(1),s=Object(o.a)(r,1)[0];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{onSubmit:function(e){n(e)}}),Object(i.jsx)(_,{searchValue:a,page:s})]})};s.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(E,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.00f8305d.chunk.js.map