"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{856:function(t,e,r){r.d(e,{e:function(){return f}});var n="MovieList_movieList__uFrOZ",a=r(689),u=r(87),c="MovieListItem_movieListItem__diVgK",s="MovieListItem_link__1-1ln",i=r(184),o=function(t){var e=t.id,r=t.title,n=(0,a.TH)();return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(u.rU,{className:s,to:"/movies/".concat(e),state:{from:n},children:r})})},f=function(t){var e=t.movies;return(0,i.jsx)("ul",{className:n,children:e.map((function(t){var e=t.id,r=t.title;return(0,i.jsx)(o,{id:e,title:r},e)}))})}},680:function(t,e,r){r.r(e);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(791),i=r(856),o=r(714),f=r(784),p=r(184);e.default=function(){var t=(0,s.useState)([]),e=(0,a.Z)(t,2),r=e[0],u=e[1];return(0,s.useEffect)((function(){(0,n.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,o.wr)();case 3:e=t.sent,u(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{style:{textAlign:"center"},children:"Trending Movies"}),0===r.length?(0,p.jsx)(f.a,{}):(0,p.jsx)(i.e,{movies:r})]})}},714:function(t,e,r){r.d(e,{Hx:function(){return p},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return s}});var n=r(861),a=r(757),u=r.n(a),c=r(294);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"9f83c5097d4c9aeee6c8b72b3b142cd0"};var s=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day");case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?"));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?"));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=680.78dc3721.chunk.js.map