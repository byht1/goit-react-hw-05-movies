"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[871,455,231],{8871:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(5861),a=t(885),c=t(7757),u=t.n(c),s=t(2791),o=t(6871),i=t(2231),p=t(4455),f=t(184);function l(){var e=(0,o.UO)().id,n=(0,s.useState)(!1),t=(0,a.Z)(n,2),c=t[0],l=t[1],v=(0,s.useState)([]),h=(0,a.Z)(v,2),x=h[0],d=h[1];function g(){return(g=(0,r.Z)(u().mark((function n(){var t,r,a,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.serverResponse)(e);case 2:return t=n.sent,n.next=5,t.results;case 5:if(0!==(r=n.sent).length){n.next=18;break}return n.next=9,(0,i.serverResponseUS)(e);case 9:return a=n.sent,n.next=12,a.results;case 12:if(0!==(c=n.sent).length){n.next=15;break}return n.abrupt("return");case 15:return l(!0),d(c),n.abrupt("return");case 18:d(r);case 19:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return(0,s.useEffect)((function(){!function(){g.apply(this,arguments)}()}),[]),(0,f.jsxs)(p.ReviewsBox,{children:[!c&&(0,f.jsx)("p",{children:"\u0412\u0438\u0431\u0430\u0447\u043d\u0435 \u0430\u043b\u0435 \u043c\u0438 \u043d\u0435 \u0437\u043d\u0430\u0439\u0448\u043b\u0438 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432"}),c&&(0,f.jsx)(p.Text,{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435 \u0430\u043b\u0435 \u043c\u0438 \u043d\u0435 \u0437\u043d\u0430\u0439\u0448\u043b\u0438 \u0432\u0456\u0434\u0433\u0443\u043a\u0456\u0432 \u043d\u0430 \u0432\u0430\u0448\u043e\u0448\u0456\u0439 \u0440\u0456\u0434\u043d\u0456\u0439 \u043c\u043e\u0432\u0456. \u0410\u043b\u0435 \u043c\u0438 \u0437\u043d\u0430\u0439\u0448\u043b\u0438 \u043d\u0430 \u0456\u043d\u0448\u0456\u0439 \u043c\u043e\u0432\u0456."}),(0,f.jsx)(p.List,{children:x.map((function(e){var n=e.id,t=e.author,r=e.content,a=e.created_at,c=e.url;return(0,f.jsxs)(p.Elements,{children:[(0,f.jsx)(p.Autor,{children:t}),(0,f.jsxs)(p.Text,{children:[(0,f.jsx)(p.Span,{children:"\u0412\u0456\u0434\u0433\u0443\u043a:"})," ",r]}),(0,f.jsxs)(p.Text,{children:[(0,f.jsx)(p.Span,{children:"\u0414\u0430\u0442\u0430:"})," ",a.split("T")[0]]}),(0,f.jsxs)(p.Text,{href:c,children:[(0,f.jsx)(p.Span,{children:"\u041f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u043d\u0430 \u043e\u0440\u0438\u0433\u0456\u043d\u0430\u043b \u0432\u0456\u0434\u043d\u0443\u043a\u0443:"})," ",c]})]},n)}))})]})}},4455:function(e,n,t){t.r(n),t.d(n,{Autor:function(){return h},Elements:function(){return v},List:function(){return l},ReviewsBox:function(){return f},Span:function(){return d},Text:function(){return x}});var r,a,c,u,s,o,i=t(168),p=t(7402),f=p.Z.div(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n"]))),l=p.Z.ul(a||(a=(0,i.Z)(["\n  margin-top: 20px;\n"]))),v=p.Z.li(c||(c=(0,i.Z)(["\n  &:not(:first-child) {\n    margin-top: 20px;\n  }\n"]))),h=p.Z.p(u||(u=(0,i.Z)(["\n  text-align: center;\n  font-weight: 700;\n  font-size: 30px;\n  font-family: 'Orbitron', sans-serif;\n"]))),x=p.Z.p(s||(s=(0,i.Z)(["\n  font-size: 20px;\n  margin-top: 20px;\n"]))),d=p.Z.span(o||(o=(0,i.Z)(["\n  font-weight: 700;\n"])))},2231:function(e,n,t){t.r(n),t.d(n,{IMG_URL:function(){return p},serverActors:function(){return h},serverHitsList:function(){return f},serverMovie:function(){return v},serverResponse:function(){return x},serverResponseUS:function(){return d},serverSearch:function(){return l}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),s=t.n(u),o="8478375b0b2eb45c66ac10717e1ab9a2",i="https://api.themoviedb.org/",p="https://image.tmdb.org/t/p/w500",f=function(){var e=(0,r.Z)(c().mark((function e(){var n,t,r,a,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>0&&void 0!==u[0]?u[0]:1,t="".concat(i,"3/trending/movie/day?api_key=").concat(o,"&page=").concat(n,"&language=uk-UA"),e.prev=2,e.next=5,s().get(t);case 5:return r=e.sent,e.next=8,r.data;case 8:return a=e.sent,e.abrupt("return",a);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,u,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r="".concat(i,"3/search/movie?api_key=").concat(o,"&language=uk-UA&query=").concat(n,"&page=").concat(t,"&include_adult=false"),e.prev=2,e.next=5,s().get(r);case 5:return a=e.sent,e.next=8,a.data;case 8:return u=e.sent,e.abrupt("return",u);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"3/movie/").concat(n,"?api_key=").concat(o,"&language=uk-UA"),e.prev=1,e.next=4,s().get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(i,"3/movie/").concat(n,"/credits?api_key=").concat(o,"&language=uk-UA"),e.prev=1,e.next=4,s().get(t);case 4:return r=e.sent,e.next=7,r.data;case 7:return a=e.sent,e.abrupt("return",a);case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}(),x=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,u,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r="".concat(i,"3/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=uk-UA&page=").concat(t),e.prev=2,e.next=5,s().get(r);case 5:return a=e.sent,e.next=8,a.data;case 8:return u=e.sent,e.abrupt("return",u);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r,a,u,p=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>1&&void 0!==p[1]?p[1]:1,r="".concat(i,"3/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=").concat(t),e.prev=2,e.next=5,s().get(r);case 5:return a=e.sent,e.next=8,a.data;case 8:return u=e.sent,e.abrupt("return",u);case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=871.03524219.chunk.js.map