(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{224:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"vue使用better-scroll"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue使用better-scroll","aria-hidden":"true"}},[t._v("#")]),t._v(" vue使用better-scroll")]),t._v(" "),a("blockquote",[a("p",[t._v("better-scroll是D8黄轶老师基于iscroll重写的一个插件，在vue中使用这个插件能给App带来流畅性，提高了用户体验。")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("这个步骤非常重要，之前是通过npm install better-scroll --save 来安装，这样安装的是最新版本。但是，实战过程中发现了一个非常严重的bug，多次通过路由切换组件页面滚动会无效，困扰了我很久很久。\n于是，百度一下，发现根本没有出现类似情况。\n然后，猜测是版本问题而导致的，最后在package.json里手动安装0.1.15版本，解决了这个问题。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//package.json\n"dependencies": {\n  "better-scroll": "0.1.15"\n}\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//终端\nnpm install\n")])])]),a("h2",{attrs:{id:"html结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html结构","aria-hidden":"true"}},[t._v("#")]),t._v(" html结构")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("div.wrapper > div.content > ul > li\n")])])]),a("p",[t._v("在这里，分成4层结构。最外层一定要设置宽度以及定位，外层高度要100%，只能滚动第一个li，因此我们把元素全放到li标签里即可。子元素可以有多个同级，但是子元素高度一定要大于父元素，这个是产生滚动的必要条件。")]),t._v(" "),a("h2",{attrs:{id:"监听路由状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监听路由状态","aria-hidden":"true"}},[t._v("#")]),t._v(" 监听路由状态")]),t._v(" "),a("p",[t._v("这里涉及到created()和activated()这两个生命周期函数的区别以及this.$nextTick()异步执行Dom刷新的知识点，不懂的童鞋自行google。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(".wrapper{\n  width: 100%;\n  position: absolute;\n  top: 45px;\n  bottom: 50px;  /*关键*/\n  overflow: hidden;\n  z-index: 1;\n}\n")])])]),a("h2",{attrs:{id:"初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),a("p",[t._v("首先要引入组件，需要dom结构加载完成时才执行初始化（$nextTick）。因此，需要用上钩子函数created()或者mounted()。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('<div class="wrapper" ref="wrapper">\n  <div class="content">\n    <ul>\n      <li></li>\n    </ul>\n  </div>\n</div>\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import BScroll from 'better-scroll'\nmounted() {\n    this.$nextTick(() => {\n      //$refs绑定元素\n      if(!this.scroll){\n          this.scroll = new BScroll(this.$refs.wrapper, {\n          //开启点击事件 默认为false\n          click:true\n      })\n      // console.log(this.scroll)\n      }else if(!this.$refs.wrapper){\n          return\n      }\n      else{\n          this.scroll.refresh()\n      }\n    })\n}\n")])])]),a("h2",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点","aria-hidden":"true"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ul",[a("li",[t._v("体验像原生：滚动非常流畅，而且没有滚动条。")]),t._v(" "),a("li",[t._v("记录当前路由滚动位置：在vue中通过路由切换页面时组件会自动滚动到顶部，需要监听滚动行为才能让滚动位置固定，better-scroll解决了这个问题。")])])])}),[],!1,null,null,null);e.default=r.exports}}]);