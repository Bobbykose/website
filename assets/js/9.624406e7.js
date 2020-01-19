(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{220:function(e,t,n){"use strict";n.r(t);var o=n(0),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"vue记录当前路由滚动位置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue记录当前路由滚动位置","aria-hidden":"true"}},[e._v("#")]),e._v(" vue记录当前路由滚动位置")]),e._v(" "),n("blockquote",[n("p",[e._v("在App结构中，当切换到底部不同的菜单栏时，需要保持原先页面的滚动位置。这样视觉上才不会造成页面刷新，才能提高用户体验。")])]),e._v(" "),n("h2",{attrs:{id:"原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#原理","aria-hidden":"true"}},[e._v("#")]),e._v(" 原理")]),e._v(" "),n("p",[e._v("定义一个全局变量，用来记录当前路由的scrollTop滚动值。监听当前路由离开时，把当前scrollTop值赋值给全局变量，在重新进入路由时，设置当前的scrollTo值为scrollTop。")]),e._v(" "),n("h2",{attrs:{id:"嵌套路由"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#嵌套路由","aria-hidden":"true"}},[e._v("#")]),e._v(" 嵌套路由")]),e._v(" "),n("p",[e._v("这里使用的是VueCli3，在router.js中创建一个嵌套路由，在index路由中分配home、order、my三个子路由。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n      path: '/',\n      name: 'index',\n      component: () => import('./views/index.vue'),\n      redirect:'/home',\n      children:[\n          {\n              path: '/home',\n              name: '/home',\n              component: () => import('./views/home.vue')\n          },\n          {\n              path: '/order',\n              name: '/order',\n              component: () => import('./views/order.vue')\n          },\n          {\n              path: '/my',\n              name: '/my',\n              component: () => import('./views/my.vue')\n          }\n      ]\n}\n")])])]),n("h2",{attrs:{id:"全局变量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#全局变量","aria-hidden":"true"}},[e._v("#")]),e._v(" 全局变量")]),e._v(" "),n("p",[e._v("在main.js中创建一个homeScrollTop全局变量，用来记录home子路由当前的scrollTop滚动值。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//main.js\nlet homeScrollTop = 0;\nVue.prototype.$homeScroll = homeScrollTop;\n")])])]),n("h2",{attrs:{id:"监听路由状态"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#监听路由状态","aria-hidden":"true"}},[e._v("#")]),e._v(" 监听路由状态")]),e._v(" "),n("p",[e._v("这里涉及到created()和activated()这两个生命周期函数的区别以及this.$nextTick()异步执行Dom刷新的知识点，不懂的童鞋自行google。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//home.vue\nexport default {\n  name: 'home',\n  //进入路由即触发 created()只触发一次\n  activated (){\n    //this.$nextTick()异步执行dom刷新\n    this.$nextTick(() => {\n        console.log(this.$homeScroll);\n        window.scrollTo(0, this.$homeScroll);\n    })\n  },\n  //离开路由时\n  beforeRouteLeave(to, from, next){\n    console.log(to);\n    //全局变量homeScroll默认为0 离开页面时 记录当前的页面滚动值\n    this.$homeScroll = document.documentElement.scrollTop || document.body.scrollTop;\n    //需要执行next函数 否则不起作用\n    next();\n  }\n}\n")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);