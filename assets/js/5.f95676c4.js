(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{410:function(a,t,s){"use strict";s.r(t);var n=s(25),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux-安装java环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux-安装java环境"}},[a._v("#")]),a._v(" Linux 安装Java环境")]),a._v(" "),s("p",[s("a",{attrs:{name:"UXNzE"}})]),a._v(" "),s("h1",{attrs:{id:"一、安装java（手动）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、安装java（手动）"}},[a._v("#")]),a._v(" 一、安装Java（手动）")]),a._v(" "),s("p",[s("a",{attrs:{name:"hTV5Q"}})]),a._v(" "),s("h2",{attrs:{id:"_1、前往oracle官网下载源码包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、前往oracle官网下载源码包"}},[a._v("#")]),a._v(" 1、前往"),s("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/index.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Oracle官网"),s("OutboundLink")],1),a._v("下载源码包")]),a._v(" "),s("p",[a._v("Java SE 8u231官网目录："),s("a",{attrs:{href:"https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"),s("OutboundLink")],1),s("br")]),a._v(" "),s("p",[s("a",{attrs:{name:"YhDvJ"}})]),a._v(" "),s("h2",{attrs:{id:"_2、创建java目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建java目录"}},[a._v("#")]),a._v(" 2、创建Java目录")]),a._v(" "),s("p",[a._v("在linux环境中创建Java目录，"),s("code",[a._v("/usr/local/java")]),a._v("，将java安装包上传至此目录中")]),a._v(" "),s("p",[s("a",{attrs:{name:"0L2LK"}})]),a._v(" "),s("h2",{attrs:{id:"_3、配置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置环境变量"}},[a._v("#")]),a._v(" 3、配置环境变量")]),a._v(" "),s("p",[a._v("1）编辑"),s("code",[a._v("/etc/profile")]),a._v("文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/profile\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 在末尾添加")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JAVA_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/java/jdk1.8.0_231\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("JRE_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/jre\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CLASSPATH")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(".:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/lib:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JRE_HOME}")]),a._v("/lib\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${JAVA_HOME}")]),a._v("/bin:"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$PATH")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160170/1574535719818-0d1e42b2-ecda-465a-8e3d-86fd64ed5010.png#align=left&display=inline&height=272&name=image.png&originHeight=272&originWidth=497&size=22050&status=done&width=497",alt:"image.png"}})]),a._v(" "),s("p",[a._v("2）重载环境变量")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160170/1574533651630-a381581c-1cb7-4724-b0d2-da659e2c366c.png#align=left&display=inline&height=59&name=image.png&originHeight=59&originWidth=534&size=8632&status=done&width=534",alt:"image.png"}})]),a._v(" "),s("p",[a._v("3）添加软链接")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ln")]),a._v(" -s /usr/local/java/jdk1.8.0_171/bin/java /usr/bin/java\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("a",{attrs:{name:"BM0uE"}})]),a._v(" "),s("h2",{attrs:{id:"_4、检查java版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、检查java版本"}},[a._v("#")]),a._v(" 4、检查Java版本")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("java -version\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160170/1574533734654-836e01a7-dcc0-4748-a3a3-887ea96bf481.png#align=left&display=inline&height=94&name=image.png&originHeight=94&originWidth=701&size=13440&status=done&width=701",alt:"image.png"}})]),a._v(" "),s("p",[s("a",{attrs:{name:"Tw5OF"}})]),a._v(" "),s("h1",{attrs:{id:"二、安装maven（手动）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、安装maven（手动）"}},[a._v("#")]),a._v(" 二、安装Maven（手动）")]),a._v(" "),s("p",[s("a",{attrs:{name:"vcbe9"}})]),a._v(" "),s("h2",{attrs:{id:"_1、前往maven官网下载源码包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1、前往maven官网下载源码包"}},[a._v("#")]),a._v(" 1、前往"),s("a",{attrs:{href:"http://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Maven官网"),s("OutboundLink")],1),a._v("下载源码包")]),a._v(" "),s("p",[a._v("Maven 3.2.6下载地址："),s("a",{attrs:{href:"http://mirror.cc.columbia.edu/pub/software/apache/maven/maven-3/3.6.2/binaries/apache-maven-3.6.2-bin.tar.gz",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://mirror.cc.columbia.edu/pub/software/apache/maven/maven-3/3.6.2/binaries/apache-maven-3.6.2-bin.tar.gz"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{name:"hE540"}})]),a._v(" "),s("h2",{attrs:{id:"_2、创建maven目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2、创建maven目录"}},[a._v("#")]),a._v(" 2、创建maven目录")]),a._v(" "),s("p",[a._v("在linux环境中创建maven目录，"),s("code",[a._v("/usr/local/maven")]),a._v("，将maven安装包上传至此目录中")]),a._v(" "),s("p",[s("a",{attrs:{name:"b6BhO"}})]),a._v(" "),s("h2",{attrs:{id:"_3、配置环境变量-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置环境变量-2"}},[a._v("#")]),a._v(" 3、配置环境变量")]),a._v(" "),s("p",[a._v("1）编辑"),s("code",[a._v("/etc/profile")]),a._v("文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/profile\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 将下面这两行代码拷贝到文件末尾并保存")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MAVEN_HOME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/maven/apache-maven-3.6.2\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("export")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${MAVEN_HOME}")]),a._v("/bin:"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${"),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("PATH")]),a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160170/1574535723809-550979fd-b6e7-49ce-85cc-c89888379b57.png#align=left&display=inline&height=272&name=image.png&originHeight=272&originWidth=497&size=22050&status=done&width=497",alt:"image.png"}})]),a._v(" "),s("p",[a._v("2）重载环境变量")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /etc/profile\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160170/1574533654937-ebd02ebc-1995-40a2-b212-41a86892c13a.png#align=left&display=inline&height=59&name=image.png&originHeight=59&originWidth=534&size=8632&status=done&width=534",alt:"image.png"}})]),a._v(" "),s("p",[s("a",{attrs:{name:"Me9s7"}})]),a._v(" "),s("h2",{attrs:{id:"_4、查看结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4、查看结果"}},[a._v("#")]),a._v(" 4、查看结果")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("mvn –v\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2019/png/160170/1574533696765-2de3a5be-e376-4fcd-9b7e-6d7bbee840ea.png#align=left&display=inline&height=134&name=image.png&originHeight=134&originWidth=891&size=22642&status=done&width=891",alt:"image.png"}})]),a._v(" "),s("p",[s("a",{attrs:{name:"8xpFt"}})]),a._v(" "),s("h2",{attrs:{id:"_5、替换maven源（阿里云）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5、替换maven源（阿里云）"}},[a._v("#")]),a._v(" 5、替换Maven源（阿里云）")]),a._v(" "),s("p",[a._v("①编辑")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /usr/local/maven/apache-maven-3.6.2/conf/settings.xml\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("②更改mirror配置")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("alimaven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("aliyun maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("http://maven.aliyun.com/nexus/content/groups/public/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[s("a",{attrs:{name:"MTkFF"}})]),a._v(" "),s("h2",{attrs:{id:"_6、指定下载资源位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6、指定下载资源位置"}},[a._v("#")]),a._v(" 6、指定下载资源位置")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("/usr/local/maven/repository"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("a",{attrs:{name:"2bXL8"}})]),a._v(" "),s("h2",{attrs:{id:"_7、指定jdk版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7、指定jdk版本"}},[a._v("#")]),a._v(" 7、指定JDK版本")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("jdk1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("activation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("activeByDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("activeByDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("jdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("jdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("activation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("maven.compiler.source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("maven.compiler.source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("maven.compiler.target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("maven.compiler.target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("maven.compiler.compilerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("maven.compiler.compilerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("profile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[s("a",{attrs:{name:"DV9Zb"}})]),a._v(" "),s("h2",{attrs:{id:"附：本环境下maven最简配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附：本环境下maven最简配置"}},[a._v("#")]),a._v(" 附：本环境下Maven最简配置")]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token prolog"}},[a._v('<?xml version="1.0" encoding="UTF-8"?>')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("settings")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("xmlns")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://maven.apache.org/SETTINGS/1.0.0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xmlns:")]),a._v("xsi")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://www.w3.org/2001/XMLSchema-instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("xsi:")]),a._v("schemaLocation")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("/usr/local/maven/repository"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("localRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("pluginGroups")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("pluginGroups")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("proxies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("proxies")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("servers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("servers")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("alimaven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("aliyun maven"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("http://maven.aliyun.com/nexus/content/groups/public/"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("central"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirrorOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirror")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("mirrors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("jdk1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("activation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("activeByDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("true"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("activeByDefault")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("jdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("jdk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("activation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("maven.compiler.source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("maven.compiler.source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("maven.compiler.target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("maven.compiler.target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n       "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("maven.compiler.compilerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.8"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("maven.compiler.compilerVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("    \n     "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("properties")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("   \n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br"),s("span",{staticClass:"line-number"},[a._v("25")]),s("br"),s("span",{staticClass:"line-number"},[a._v("26")]),s("br"),s("span",{staticClass:"line-number"},[a._v("27")]),s("br"),s("span",{staticClass:"line-number"},[a._v("28")]),s("br"),s("span",{staticClass:"line-number"},[a._v("29")]),s("br"),s("span",{staticClass:"line-number"},[a._v("30")]),s("br"),s("span",{staticClass:"line-number"},[a._v("31")]),s("br"),s("span",{staticClass:"line-number"},[a._v("32")]),s("br"),s("span",{staticClass:"line-number"},[a._v("33")]),s("br"),s("span",{staticClass:"line-number"},[a._v("34")]),s("br"),s("span",{staticClass:"line-number"},[a._v("35")]),s("br"),s("span",{staticClass:"line-number"},[a._v("36")]),s("br"),s("span",{staticClass:"line-number"},[a._v("37")]),s("br")])]),s("p",[s("em",[a._v("参考资料")])]),a._v(" "),s("blockquote",[s("ol",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/116970u/p/11211963.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Centos7安装maven"),s("OutboundLink")],1),a._v("，博客园")]),a._v(" "),s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/stulzq/p/9286878.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("CentOS 7 安装 JAVA环境（JDK 1.8）"),s("OutboundLink")],1),a._v("，博客园")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);