"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[789,206,231],{3369:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(5861),a=t(885),c=t(7757),o=t.n(c),i=t(2791),u=t(6871),s=t(501),p=t(2231),l=t(4206),f=t(184);function v(n){var e=n.list,t=(0,i.useState)([]),c=(0,a.Z)(t,2),v=c[0],d=c[1],g=(0,i.useState)(!0),x=(0,a.Z)(g,2),h=x[0],m=x[1],Z="/"===(0,u.TH)().pathname?"movies/":"";function b(){return(b=(0,r.Z)(o().mark((function n(){var e,t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,p.serverHitsList)();case 2:return e=n.sent,n.next=5,e.results.map((function(n){return Object.fromEntries(Object.entries(n).filter((function(n){var e=(0,a.Z)(n,1)[0];return["id","poster_path","title","genre_ids","release_date","vote_average"].includes(e)})))}));case 5:t=n.sent,d(t);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,i.useEffect)((function(){if(e)return m(!1),void d(e);!function(){b.apply(this,arguments)}()}),[e]),(0,f.jsxs)("section",{children:[h&&(0,f.jsx)(l.TitleH1,{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u043d\u043e\u0432\u0438\u0445 \u0444\u0456\u043b\u044c\u043c\u0456\u0432"}),(0,f.jsx)(l.List,{children:v.map((function(n){var e=n.id,t=n.poster_path,r=n.title,a=n.release_date,c=n.vote_average;return(0,f.jsx)(l.Elements,{children:(0,f.jsxs)(s.rU,{to:"".concat(Z).concat(e),children:[(0,f.jsx)("img",{src:p.IMG_URL+t,alt:r}),(0,f.jsxs)(l.ElementsBox,{children:[(0,f.jsx)(l.Title,{children:r}),(0,f.jsxs)(l.TextBox,{children:[(0,f.jsx)("p",{children:a}),(0,f.jsx)(l.Rating,{rating:c,children:c.toFixed(1)})]})]})]})},e)}))})]})}},4206:function(n,e,t){t.r(e),t.d(e,{Elements:function(){return h},ElementsBox:function(){return m},List:function(){return x},Main:function(){return d},Rating:function(){return w},TextBox:function(){return b},TextError:function(){return _},Title:function(){return Z},TitleH1:function(){return g}});var r,a,c,o,i,u,s,p,l,f=t(168),v=t(7402),d=v.Z.main(r||(r=(0,f.Z)(["\n  padding: 20px 0;\n"]))),g=v.Z.h1(a||(a=(0,f.Z)(["\n  font-family: 'Orbitron', sans-serif;\n  text-align: center;\n"]))),x=v.Z.ul(c||(c=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  max-width: 100vw - 45px;\n  gap: 15px;\n  margin-top: 20px;\n"]))),h=v.Z.li(o||(o=(0,f.Z)(["\n  position: relative;\n  height: 100%;\n"]))),m=v.Z.div(i||(i=(0,f.Z)(["\n  padding: 5px;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: #000;\n  color: #fff;\n"]))),Z=v.Z.h2(u||(u=(0,f.Z)(["\n  text-align: center;\n  font-size: 1.2em;\n"]))),b=v.Z.div(s||(s=(0,f.Z)(["\n  margin-top: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),w=v.Z.p(p||(p=(0,f.Z)(["\n  padding: 3px;\n  border: 2px solid;\n  border-radius: 50%;\n  border-color: ",";\n  border-color: ",";\n  border-color: ",";\n  border-color: ",";\n"])),(function(n){return n.rating>=7.5&&"green"}),(function(n){return n.rating<7.5&&n.rating>=5.6&&"orange"}),(function(n){return n.rating<=5.5&&"red"}),(function(n){return 0===n.rating&&"#fff"})),_=v.Z.p(l||(l=(0,f.Z)(["\n  margin-top: 20px;\n  font-size: 20px;\n  text-align: center;\n"])))},2231:function(n,e,t){t.r(e),t.d(e,{IMG_URL:function(){return p},serverActors:function(){return d},serverHitsList:function(){return l},serverMovie:function(){return v},serverResponse:function(){return g},serverResponseUS:function(){return x},serverSearch:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),o=t(4569),i=t.n(o),u="8478375b0b2eb45c66ac10717e1ab9a2",s="https://api.themoviedb.org/",p="https://image.tmdb.org/t/p/w500",l=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a,o=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.length>0&&void 0!==o[0]?o[0]:1,t="".concat(s,"3/trending/movie/day?api_key=").concat(u,"&page=").concat(e,"&language=uk-UA"),n.prev=2,n.next=5,i().get(t);case 5:return r=n.sent,n.next=8,r.data;case 8:return a=n.sent,n.abrupt("return",a);case 12:n.prev=12,n.t0=n.catch(2),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,o,p=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r="".concat(s,"3/search/movie?api_key=").concat(u,"&language=uk-UA&query=").concat(e,"&page=").concat(t,"&include_adult=false"),n.prev=2,n.next=5,i().get(r);case 5:return a=n.sent,n.next=8,a.data;case 8:return o=n.sent,n.abrupt("return",o);case 12:n.prev=12,n.t0=n.catch(2),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"3/movie/").concat(e,"?api_key=").concat(u,"&language=uk-UA"),n.prev=1,n.next=4,i().get(t);case 4:return r=n.sent,n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"3/movie/").concat(e,"/credits?api_key=").concat(u,"&language=uk-UA"),n.prev=1,n.next=4,i().get(t);case 4:return r=n.sent,n.next=7,r.data;case 7:return a=n.sent,n.abrupt("return",a);case 11:n.prev=11,n.t0=n.catch(1),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,o,p=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r="".concat(s,"3/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=uk-UA&page=").concat(t),n.prev=2,n.next=5,i().get(r);case 5:return a=n.sent,n.next=8,a.data;case 8:return o=n.sent,n.abrupt("return",o);case 12:n.prev=12,n.t0=n.catch(2),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a,o,p=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r="".concat(s,"3/movie/").concat(e,"/reviews?api_key=").concat(u,"&language=en-US&page=").concat(t),n.prev=2,n.next=5,i().get(r);case 5:return a=n.sent,n.next=8,a.data;case 8:return o=n.sent,n.abrupt("return",o);case 12:n.prev=12,n.t0=n.catch(2),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[2,12]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=789.ba602487.chunk.js.map