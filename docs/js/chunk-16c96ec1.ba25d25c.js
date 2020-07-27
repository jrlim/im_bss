(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16c96ec1"],{"659c":function(t,o,e){},"82be":function(t,o,e){"use strict";e.r(o);var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("b-alert",{staticClass:"alert alert-custom alert-white alert-shadow fade show gutter-b",attrs:{show:"",variant:"light"}},[e("div",{staticClass:"alert-icon"},[e("span",{staticClass:"svg-icon svg-icon-lg"},[e("inline-svg",{attrs:{src:"media/svg/icons/Tools/Compass.svg"}})],1)]),e("div",{staticClass:"alert-text"},[e("b",[t._v("Layout and Grid System")]),t._v(" Use the powerful mobile-first flexbox grid (via the <b-container>, <b-row>, <b-form-row> and <b-col> components) to build layouts of all shapes and sizes thanks to a twelve column system, five default responsive tiers, CSS Sass variables and mixins, and dozens of predefined classes. "),e("a",{staticClass:"font-weight-bold",attrs:{href:"https://bootstrap-vue.js.org/docs/components/layout",target:"_blank"}},[t._v(" See documentation. ")])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("KTCodePreview",{attrs:{title:"How it works"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" Bootstrap's grid system uses a series of containers, rows, and columns to layout and align content. It's built with "),e("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox",target:"_blank"}},[t._v("flexbox")]),t._v(" and is fully responsive. Below is an example and an in-depth look at how the grid comes together. ")]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",[t._v("1 of 3")]),e("b-col",[t._v("2 of 3")]),e("b-col",[t._v("3 of 3")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code1.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Equal-width columns"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" For example, here are two grid layouts that apply to every device and viewport, from "),e("code",[t._v("xs")]),t._v(" to "),e("code",[t._v("xl")]),t._v(". Add any number of unit-less classes for each breakpoint you need and every column will be the same width. ")]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",[t._v("1 of 2")]),e("b-col",[t._v("2 of 2")])],1),e("b-row",[e("b-col",[t._v("1 of 3")]),e("b-col",[t._v("2 of 3")]),e("b-col",[t._v("3 of 3")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code2.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Setting one column width"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column. ")]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",{staticClass:"text-center"},[e("b-col",[t._v("1 of 3")]),e("b-col",{attrs:{cols:"8"}},[t._v("2 of 3 (wider)")]),e("b-col",[t._v("3 of 3")])],1),e("b-row",{staticClass:"text-center"},[e("b-col",[t._v("1 of 3")]),e("b-col",{attrs:{cols:"5"}},[t._v("2 of 3 (wider)")]),e("b-col",[t._v("3 of 3")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code3.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Variable width content"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" Use "),e("code",[t._v('{breakpoint}="auto"')]),t._v(" props to size columns based on the natural width of their content. ")]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",{staticClass:"justify-content-md-center"},[e("b-col",{attrs:{col:"",lg:"2"}},[t._v("1 of 3")]),e("b-col",{attrs:{cols:"12",md:"auto"}},[t._v("Variable width content")]),e("b-col",{attrs:{col:"",lg:"2"}},[t._v("3 of 3")])],1),e("b-row",[e("b-col",[t._v("1 of 3")]),e("b-col",{attrs:{cols:"12",md:"auto"}},[t._v("Variable width content")]),e("b-col",{attrs:{col:"",lg:"2"}},[t._v("3 of 3")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code4.html)+" ")]},proxy:!0}])})],1),e("div",{staticClass:"col-md-6"},[e("KTCodePreview",{attrs:{title:"All breakpoints"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" For grids that are the same from the smallest of devices to the largest, use the "),e("code",[t._v("col")]),t._v(" and "),e("code",[t._v('cols="*"')]),t._v(" props. Specify a number of "),e("code",[t._v("cols")]),t._v(" when you need a particularly sized column; otherwise, feel free to stick to "),e("code",[t._v("col")]),t._v(" (which is applied automatically if no "),e("code",[t._v("cols")]),t._v(" are specified). ")]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",[t._v("col")]),e("b-col",[t._v("col")]),e("b-col",[t._v("col")]),e("b-col",[t._v("col")])],1),e("b-row",[e("b-col",{attrs:{cols:"8"}},[t._v("col-8")]),e("b-col",{attrs:{cols:"4"}},[t._v("col-4")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code5.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Stacked to horizontal"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" Using a single set of "),e("code",[t._v('sm="*"')]),t._v(" or "),e("code",[t._v("sm")]),t._v(" (boolean for equal width @sm) props, you can create a basic grid system that starts out stacked on extra small devices before becoming horizontal on desktop (medium) devices ")]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",{attrs:{sm:"8"}},[t._v("col-sm-8")]),e("b-col",{attrs:{sm:"4"}},[t._v("col-sm-4")])],1),e("b-row",[e("b-col",{attrs:{sm:""}},[t._v("col-sm")]),e("b-col",{attrs:{sm:""}},[t._v("col-sm")]),e("b-col",{attrs:{sm:""}},[t._v("col-sm")])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code6.html)+" ")]},proxy:!0}])}),e("KTCodePreview",{attrs:{title:"Mix and match"},scopedSlots:t._u([{key:"preview",fn:function(){return[e("p",[t._v(" Don't want your columns to simply stack in some grid tiers? Use a combination of different props for each tier as needed. See the example below for a better idea of how it all works. ")]),e("b-container",{staticClass:"bv-example-row"},[e("b-row",[e("b-col",{attrs:{cols:"12",md:"8"}},[t._v('cols="12" md="8"')]),e("b-col",{attrs:{cols:"6",md:"4"}},[t._v('cols="6" md="4"')])],1),e("b-row",[e("b-col",{attrs:{cols:"6",md:"4"}},[t._v('cols="6" md="4"')]),e("b-col",{attrs:{cols:"6",md:"4"}},[t._v('cols="6" md="4"')]),e("b-col",{attrs:{cols:"6",md:"4"}},[t._v('cols="6" md="4"')])],1),e("b-row",[e("b-col",{attrs:{cols:"6"}},[t._v('cols="6"')]),e("b-col",{attrs:{cols:"6"}},[t._v('cols="6"')])],1)],1)]},proxy:!0},{key:"html",fn:function(){return[t._v(" "+t._s(t.code7.html)+" ")]},proxy:!0}])})],1)])],1)},l=[],a=e("d968"),c=e("0bce"),n={data:function(){return{code1:{html:'<b-container class="bv-example-row">\n  <b-row>\n    <b-col>1 of 3</b-col>\n    <b-col>2 of 3</b-col>\n    <b-col>3 of 3</b-col>\n  </b-row>\n</b-container>'},code2:{html:'<b-container class="bv-example-row">\n  <b-row>\n    <b-col>1 of 2</b-col>\n    <b-col>2 of 2</b-col>\n  </b-row>\n\n  <b-row>\n    <b-col>1 of 3</b-col>\n    <b-col>2 of 3</b-col>\n    <b-col>3 of 3</b-col>\n  </b-row>\n</b-container>'},code3:{html:'<b-container class="bv-example-row">\n  <b-row class="text-center">\n    <b-col>1 of 3</b-col>\n    <b-col cols="8">2 of 3 (wider)</b-col>\n    <b-col>3 of 3</b-col>\n  </b-row>\n\n  <b-row class="text-center">\n    <b-col>1 of 3</b-col>\n    <b-col cols="5">2 of 3 (wider)</b-col>\n    <b-col>3 of 3</b-col>\n  </b-row>\n</b-container>'},code4:{html:'<b-container class="bv-example-row">\n  <b-row class="justify-content-md-center">\n    <b-col col lg="2">1 of 3</b-col>\n    <b-col cols="12" md="auto">Variable width content</b-col>\n    <b-col col lg="2">3 of 3</b-col>\n  </b-row>\n\n  <b-row>\n    <b-col>1 of 3</b-col>\n    <b-col cols="12" md="auto">Variable width content</b-col>\n    <b-col col lg="2">3 of 3</b-col>\n  </b-row>\n</b-container>'},code5:{html:'<b-container class="bv-example-row">\n  <b-row>\n    <b-col>col</b-col>\n    <b-col>col</b-col>\n    <b-col>col</b-col>\n    <b-col>col</b-col>\n  </b-row>\n\n  <b-row>\n    <b-col cols="8">col-8</b-col>\n    <b-col cols="4">col-4</b-col>\n  </b-row>\n</b-container>'},code6:{html:'<b-container class="bv-example-row">\n  <b-row>\n    <b-col sm="8">col-sm-8</b-col>\n    <b-col sm="4">col-sm-4</b-col>\n  </b-row>\n\n  <b-row>\n    <b-col sm>col-sm</b-col>\n    <b-col sm>col-sm</b-col>\n    <b-col sm>col-sm</b-col>\n  </b-row>\n</b-container>'},code7:{html:'<b-container class="bv-example-row">\n  \x3c!-- Stack the columns on mobile by making one full-width and the other half-width --\x3e\n  <b-row>\n    <b-col cols="12" md="8">cols="12" md="8"</b-col>\n    <b-col cols="6" md="4">cols="6" md="4"</b-col>\n  </b-row>\n\n  \x3c!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop --\x3e\n  <b-row>\n    <b-col cols="6" md="4">cols="6" md="4"</b-col>\n    <b-col cols="6" md="4">cols="6" md="4"</b-col>\n    <b-col cols="6" md="4">cols="6" md="4"</b-col>\n  </b-row>\n\n  \x3c!-- Columns are always 50% wide, on mobile and desktop --\x3e\n  <b-row>\n    <b-col cols="6">cols="6"</b-col>\n    <b-col cols="6">cols="6"</b-col>\n  </b-row>\n</b-container>'}}},components:{KTCodePreview:a["a"]},mounted:function(){this.$store.dispatch(c["a"],[{title:"Vue Bootstrap",route:"alert"},{title:"Layout and Grid System"}])}},i=n,r=(e("e344"),e("2877")),b=Object(r["a"])(i,s,l,!1,null,"6880b5bb",null);o["default"]=b.exports},d968:function(t,o,e){"use strict";var s=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("KTCard",{ref:"preview",attrs:{title:t.title,example:!0},scopedSlots:t._u([t.hasTitleSlot?{key:"title",fn:function(){return[e("h3",{staticClass:"card-title"},[t._t("title")],2)]},proxy:!0}:null,{key:"toolbar",fn:function(){return[e("div",{staticClass:"example-tools justify-content-center"},[e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View code",expression:"'View code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-toggle",attrs:{"data-toggle":"tooltip"}}),e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Copy code",expression:"'Copy code'",modifiers:{hover:!0,top:!0}}],staticClass:"example-copy",attrs:{"data-toggle":"tooltip"}})])]},proxy:!0},{key:"body",fn:function(){return[e("div",{staticClass:"example-code mb-5"},[t.hasGeneralCode||t.hasSingleCodeType?t._e():e("ul",{staticClass:"example-nav nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-2x",attrs:{role:"tablist"}},[t.hasHtmlCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link active",attrs:{"data-tab":"0","data-toggle":"tab",href:"#",role:"tab","aria-selected":"true"},on:{click:t.setActiveTab}},[t._v(" HTML ")])]):t._e(),t.hasJsCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-tab":"1","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" JS ")])]):t._e(),t.hasScssCode?e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{"data-tab":"2","data-toggle":"tab",href:"#",role:"tab","aria-selected":"false"},on:{click:t.setActiveTab}},[t._v(" SCSS ")])]):t._e()]),t.hasGeneralCode?e("div",[t._t("code")],2):t._e(),t.hasGeneralCode||t.hasSingleCodeType?t._e():e("div",[e("b-tabs",{staticClass:"hide-tabs",attrs:{"content-class":"mt-3"},model:{value:t.tabIndex,callback:function(o){t.tabIndex=o},expression:"tabIndex"}},[e("b-tab",{staticClass:"example-highlight",attrs:{active:""}},[e("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2)],1),e("b-tab",{staticClass:"example-highlight"},[e("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2)],1),e("b-tab",{staticClass:"example-highlight"},[e("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2)],1)],1)],1),t.hasSingleCodeType?e("div",{staticClass:"example-highlight"},[t.hasHtmlCode?e("highlight-code",{staticClass:"language-html",attrs:{lang:"html"}},[t._t("html")],2):t._e(),t.hasJsCode?e("highlight-code",{staticClass:"language-js",attrs:{lang:"js"}},[t._t("js")],2):t._e(),t.hasScssCode?e("highlight-code",{staticClass:"language-scss",attrs:{lang:"scss"}},[t._t("scss")],2):t._e()],1):t._e()]),t._t("preview")]},proxy:!0}],null,!0)})},l=[],a=(e("4160"),e("159b"),function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card card-custom gutter-b",class:t.classes},[t.hasTitleSlot||t.title?e("div",{staticClass:"card-header",class:t.headClass},[e("div",{staticClass:"card-title"},[t.hasTitleSlot?t._t("title"):t._e(),t.hasTitleSlot?t._e():e("h3",{staticClass:"card-label"},[t._v(" "+t._s(t.title)+" ")])],2),e("div",{staticClass:"card-toolbar"},[t._t("toolbar")],2)]):t._e(),e("div",{staticClass:"card-body",class:{bodyClass:t.bodyClass,"body-fit":t.bodyFit,"body-fluid":t.bodyFluid}},[t._t("body")],2),t.hasFootSlot?e("div",{staticClass:"card-footer"},[t._t("foot")],2):t._e()])}),c=[],n={name:"KTCard",props:{title:String,headSize:String,fluidHeight:Boolean,fluidHalfHeight:Boolean,headOverlay:Boolean,cardClass:String,headClass:String,bodyClass:String,bodyFit:Boolean,bodyFluid:Boolean,example:Boolean},components:{},methods:{},computed:{classes:function(){var t={"example example-compact":this.example,"height-fluid":this.fluidHeight,"height-fluid-half":this.fluidHalfHeight,"head-overlay":this.headOverlay};return t[this.headSizeClass]=this.headSizeClass,this.cardClass&&(t[this.cardClass]=!0),t},hasTitleSlot:function(){return!!this.$slots["title"]},hasFootSlot:function(){return!!this.$slots["foot"]},headSizeClass:function(){return!!this.headSize&&"head-".concat(this.headSize)}}},i=n,r=e("2877"),b=Object(r["a"])(i,a,c,!1,null,null,null),d=b.exports,h=e("b2e9"),m={name:"KTCodePreview",props:{title:String},data:function(){return{tabIndex:0,isOpen:!1}},components:{KTCard:d},mounted:function(){var t=this;this.$nextTick((function(){h["a"].init([t.$el]);var o=t.$el.querySelectorAll(".hljs");o.forEach((function(t){t.classList.add("language-".concat(t.classList[1])),t.classList.remove("hljs")}))}))},methods:{setActiveTab:function(t){for(var o=t.target.closest('[role="tablist"]'),e=o.querySelectorAll('[data-toggle="tab"]'),s=0;s<e.length;s++)e[s].classList.remove("active");t.target.classList.add("active"),this.tabIndex=parseInt(t.target.getAttribute("data-tab"))}},computed:{hasTitleSlot:function(){return!!this.$slots["title"]},hasSingleCodeType:function(){var t=this,o=0;return["html","js","scss"].forEach((function(e){t.$slots.hasOwnProperty(e)&&o++})),1===o},hasGeneralCode:function(){return!!this.$slots["code"]},hasJsCode:function(){return!!this.$slots["js"]},hasScssCode:function(){return!!this.$slots["scss"]},hasHtmlCode:function(){return!!this.$slots["html"]}}},v=m,u=Object(r["a"])(v,s,l,!1,null,null,null);o["a"]=u.exports},e344:function(t,o,e){"use strict";var s=e("659c"),l=e.n(s);l.a}}]);
//# sourceMappingURL=chunk-16c96ec1.ba25d25c.js.map