(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-377ed9f8"],{b4c7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[a("div",{staticClass:"alert-icon"},[a("span",{staticClass:"svg-icon svg-icon-lg"},[a("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),a("div",{staticClass:"alert-text"},[a("b",[t._v("Jumbotron")]),t._v(" A lightweight, flexible component that can optionally extend the entire viewport to showcase key marketing messages on your site. "),a("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/jumbotron",target:"_blank"}},[t._v(" See documentation. ")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("KTCodePreview",{attrs:{title:"Usage with props"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" You can set the heading and lead text via the "),a("code",[t._v("header")]),t._v(" and "),a("code",[t._v("lead")]),t._v(" props, or use the named slots "),a("code",[t._v("header")]),t._v(" and "),a("code",[t._v("lead")]),t._v(" if you need HTML support. ")]),a("div",[a("b-jumbotron",{attrs:{header:"BootstrapVue",lead:"Bootstrap v4 Components for Vue.js 2"}},[a("p",[t._v("For more information visit website")]),a("b-button",{attrs:{variant:"primary",href:"#"}},[t._v("More Info")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Usage with slots"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("div",[a("b-jumbotron",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("BootstrapVue")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. ")]},proxy:!0}])},[a("hr",{staticClass:"my-4"}),a("p",[t._v(" It uses utility classes for typography and spacing to space content out within the larger container. ")]),a("b-button",{staticClass:"mr-3",attrs:{variant:"primary",href:"#"}},[t._v("Do Something")]),a("b-button",{attrs:{variant:"success",href:"#"}},[t._v("Do Something Else")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])}),a("KTCodePreview",{attrs:{title:"Variants"},scopedSlots:t._u([{key:"preview",fn:function(){return[a("p",[t._v(" Control the overall background variant with the "),a("code",[t._v("bg-variant")]),t._v(" prop ( set to "),a("code",[t._v("info")]),t._v(", "),a("code",[t._v("danger")]),t._v(", "),a("code",[t._v("warning")]),t._v(", "),a("code",[t._v("light")]),t._v(", "),a("code",[t._v("dark")]),t._v(", etc), the border variant with the "),a("code",[t._v("border-variant")]),t._v(" prop, and the text variant with "),a("code",[t._v("text-variant")]),t._v(" prop. All three props default to "),a("code",[t._v("null")]),t._v(", which will instruct the jumbotron to use the default styling"),a("span",{staticClass:"code"})]),a("div",[a("b-jumbotron",{attrs:{"bg-variant":"info","text-variant":"white","border-variant":"dark"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("BootstrapVue")]},proxy:!0},{key:"lead",fn:function(){return[t._v(" This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. ")]},proxy:!0}])},[a("hr",{staticClass:"my-4"}),a("p",[t._v(" It uses utility classes for typography and spacing to space content out within the larger container. ")])])],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])})],1)])],1)},o=[],n=a("d968"),i=a("0bce"),l={data:function(){return{code1:{html:'<div>\n  <b-jumbotron header="BootstrapVue" lead="Bootstrap v4 Components for Vue.js 2">\n    <p>For more information visit website</p>\n    <b-button variant="primary" href="#">More Info</b-button>\n  </b-jumbotron>\n</div>'},code2:{html:'<div>\n  <b-jumbotron>\n    <template v-slot:header>BootstrapVue</template>\n\n    <template v-slot:lead>\n      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\n      featured content or information.\n    </template>\n\n    <hr class="my-4">\n\n    <p>\n      It uses utility classes for typography and spacing to space content out within the larger\n      container.\n    </p>\n\n    <b-button variant="primary" href="#">Do Something</b-button>\n    <b-button variant="success" href="#">Do Something Else</b-button>\n  </b-jumbotron>\n</div>'},code3:{html:'<div>\n  <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark">\n    <template v-slot:header>BootstrapVue</template>\n\n    <template v-slot:lead>\n      This is a simple hero unit, a simple jumbotron-style component for calling extra attention to\n      featured content or information.\n    </template>\n\n    <hr class="my-4">\n\n    <p>\n      It uses utility classes for typography and spacing to space content out within the larger\n      container.\n    </p>\n  </b-jumbotron>\n</div>'}}},components:{KTCodePreview:n["a"]},mounted:function(){this.$store.dispatch(i["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Jumbotron"}])}},r=l,c=a("2877"),d=Object(c["a"])(r,s,o,!1,null,null,null);e["default"]=d.exports},d968:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[a("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[a("div",{staticClass:"example-tools justify-content-center"},[a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),a("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():a("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?a("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():a("div",[a("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(e){t.tabIndex=e},expression:"tabIndex"}},[a("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),a("b-tab",{staticClass:"example-highlight"},[a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?a("div",{staticClass:"example-highlight"},[t.hasHtmlCode?a("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?a("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?a("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},o=[],n=(a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?a("div",{staticClass:"card-header",class:t.headClass},[a("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():a("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),a("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),a("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?a("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),i=[],l={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},r=l,c=a("2877"),d=Object(c["a"])(r,n,i,!1,null,null,null),h=d.exports,u=a("b2e9"),p={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:h},mounted:function(){var t=this;this.$nextTick((function(){u["a"].init([t.$el]);var e=t.$el.querySelectorAll(".hljs");e.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var e=t.target.closest('[role="tablist"]'),a=e.querySelectorAll('[data-toggle="tab"]'),s=0;s<a.length;s++)a[s].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,e=0;return["html","js","scss"].forEach((function(a){t.$slots.hasOwnProperty(a)&&e++})),1===e},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},v=p,m=Object(c["a"])(v,s,o,!1,null,null,null);e["a"]=m.exports}}]);
//# sourceMappingURL=chunk-377ed9f8.bae0b20c.js.map