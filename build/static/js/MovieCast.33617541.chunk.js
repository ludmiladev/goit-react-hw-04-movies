(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{85:function(t,e,a){"use strict";a.r(e);var r=a(35),c=a(36),n=a(38),s=a(37),o=a(1),i=a(0),p=a(11),h=a.n(p),u=a(34),l=a(52),j=function(t){var e=t.profile_path,a=t.name,r=t.character;return Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/".concat(e):"".concat(l.a),alt:a,width:"150"}),Object(o.jsx)("p",{children:a}),Object(o.jsx)("p",{children:r})]})},b=a(16),f=function(t){Object(n.a)(a,t);var e=Object(s.a)(a);function a(){var t;Object(r.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))).PropTypes={prop:h.a},t.state={cast:[],loader:!0},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var t=this;u.a.fetchActorsDetails(this.props.match.params.movieId).then((function(e){return t.setState({cast:e,loader:!1})})).catch((function(e){var a=e.response;if(404===a.status)return t.props.history.push("/404");console.log(a.status," response.status")}))}},{key:"render",value:function(){var t=this.state,e=t.cast,a=t.loader,r=e.length?Object(o.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.profile_path,r=t.name,c=t.character;return Object(o.jsx)(j,{profile_path:a,name:r,character:c},e)}))}):Object(o.jsx)("p",{children:"No information about cast!"});return Object(o.jsx)(o.Fragment,{children:a?Object(o.jsx)(b.a,{}):r})}}]),a}(i.Component);e.default=f}}]);
//# sourceMappingURL=MovieCast.33617541.chunk.js.map