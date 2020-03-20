---
sidebar: auto
---

# <font color="#00a9fb" >微信小程序开发从入门到实战</font>

&#8195;&#8195;本文将为您详细讲解安卓微信小程序从入门开发到应用上线的完整过程&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;<font color="#f3f3f3">制作人——熊翔</font>



# 1、第一个属于自己的项目

## 1.1、账号注册

&#8195;&#8195;目前微信小程序的注册范围已经非常全面，大家可以根据自己的需求选择对应的主体进行注册，不过需要注意的是，目前以个人为主体的小程序依然**不支持**微信支付

![](微信小程序.assets/image-20191122223712878.png)

[<font color="#000000" >直接进入微信公众平台进行注册</font>](https://mp.weixin.qq.com/wxopen/waregister?action=step1&token=&lang=zh_CN)

![image-20191124172723920](微信小程序.assets/image-20191124172723920.png)

&#8195;&#8195;注册完成后在微信公众平台登录后就是小程序后台管理页面，你可以在这里对小程序进行丰富的操作，这里我们主要是获取AppID，以便下一步安装好开发工具后创建项目

![image-20191122235257048](微信小程序.assets/image-20191122235257048.png)

## 1.2、安装开发工具

<a href="https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html" target="_blank">**官网下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html**</a>

下载完成安装后会先进入新建项目页面，在这里新建时可以输入我们自己的AppID，同时可在微信后台**成员管理**页面添加成员，其他人员也可以直接使用自己的微信扫码进入开发工具对项目进行开发

![image-20191123000425975](微信小程序.assets/image-20191123000425975.png)

内容填写完毕后点击**新建**，此时项目新建完成

![image-20191124173602921](微信小程序.assets/image-20191124173602921.png)



# 2、微信开发工具介绍

详细使用可以对照[官方文档](https://developers.weixin.qq.com/miniprogram/dev/devtools/page.html)

![image-20191124175041021](微信小程序.assets/image-20191124175041021.png)



# 3、小程序目录结构

小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。

整个小程序框架系统分为两部分：**[逻辑层](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/)**（App Service）和 **[视图层](https://developers.weixin.qq.com/miniprogram/dev/framework/view/)**（View）。小程序提供了自己的视图层描述语言 `WXML` 和 `WXSS`，以及基于 `JavaScript` 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，让开发者能够专注于数据与逻辑。

## 3.1、小程序文件结构

|  作用  | 文件类型 |
| :----: | :------: |
|  逻辑  |    js    |
|  结构  |   wxml   |
|  配置  |   json   |
| 样式表 |   wxss   |

## 3.2、简单项目文件结构

![image-20191124210629269](微信小程序.assets/image-20191124210629269.png)



# 4、小程序配置文件

小程序主要有两种配置文件，全局配置 ``app.json ``和页面配置 `.json` 

> 注意:配置文件中要严格遵循格式限制,不能出现任何注释,强行要写可以仿照json格式加入,这种方式运行时会有**<font color="#aaaa00">黄色的警告</font>**出现

## 4.1、全局配置

 小程序根目录下的 `app.json` 文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。 

 完整配置项说明请参考[小程序全局配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html) 

```json
{
  "pages": [
    "pages/index/index",
    "pages/logs/index"
  ],
  "window": {
    "navigationBarTitleText": "Demo"
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/logs/logs",
      "text": "日志"
    }]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true,
  "navigateToMiniProgramAppIdList": [
    "wx..........."
  ]
}
```

基本设置项

pages

tabBar

networkTimeout

debug

navigationStyle



## 4.2、页面配置

每一个小程序页面也可以使用同名 `.json` 文件来对本页面的窗口表现进行配置，页面中配置项会覆盖 `app.json` 的 `window` 中相同的配置项。

完整配置项说明请参考[小程序页面配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/page.html)

例如：

```json
{
  "navigationBarBackgroundColor": "#ffffff",
  "navigationBarTextStyle": "black",
  "navigationBarTitleText": "微信接口功能演示",
  "backgroundColor": "#eeeeee",
  "backgroundTextStyle": "light"
}
```

## 4.3、sitemap 配置

小程序根目录下的 `sitemap.json` 文件用来配置小程序及其页面是否允许被微信索引。

完整配置项说明请参考[小程序 sitemap 配置](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html)

```json
{
  "rules":[{
    "action": "allow",
    "page": "path/to/page",
    "params": ["a", "b"],
    "matching": "inclusive"
  }, {
    "action": "disallow",
    "page": "*"
  }, {
    "action": "allow",
    "page": "*"
  }]
}
```

 包含 `a 和 b` 参数的 `path/to/page` 页面会被微信优先索引，其他页面都会被索引，例如： 

- `path/to/page?a=1&b=2` => 优先被索引
- `path/to/page?a=1&b=2&c=3` => 优先被索引
- `path/to/page` => 不被索引
- `path/to/page?a=1` => 不被索引
- 其他页面不会被索引

> **注：没有 sitemap.json 则默认所有页面都能被索引**
>
> **注：`{"action": "allow", "page": "\*"}` 是优先级最低的默认规则，未显式指明 "disallow" 的都默认被索引**



#  5、[<font color="#000000">WXML 语法参考</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/) 

WXML（WeiXin Markup Language）是框架设计的一套标签语言，结合[基础组件](https://developers.weixin.qq.com/miniprogram/dev/component/)、[事件系统](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)，可以构建出页面的结构。

要完整了解 WXML 语法，请参考[WXML 语法参考](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/)。

## 5.1、[<font color="#000000">数据绑定</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/data.html)

 WXML 中的动态数据均来自对应 Page 的 data。 

**响应的数据绑定**

框架的核心是一个响应的数据绑定系统，可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。

通过这个简单的例子来看：

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/l0gLEKmv6gZa)

```html
<!-- This is our View -->
<view> Hello {{name}}! </view>
<button bindtap="changeName"> Click me! </button>
```

```js
// This is our App Service.
// This is our data.
var helloData = {
  name: 'WeChat'
}

// Register a Page.
Page({
  data: helloData,
  changeName: function(e) {
    // sent data change to view
    this.setData({
      name: 'MINA'
    })
  }
})
```



### 5.1.1、简单绑定

数据绑定使用 Mustache 语法（双大括号）将变量包起来，可以作用于：

#### 5.1.1.1、内容

```html
<view> {{ message }} </view>
```

```js
Page({
  data: {
    message: 'Hello MINA!'
  }
})
```

#### 5.1.1.2、组件属性(需要在双引号之内)

```html
<view id="item-{{id}}"> </view>
```

```js
Page({
  data: {
    id: 0
  }
})
```

#### 5.1.1.3、控制属性(需要在双引号之内)

```html
<view wx:if="{{condition}}"> </view>
```

```js
Page({
  data: {
    condition: true
  }
})
```

#### 5.1.1.4、关键字(需要在双引号之内)

`true`：boolean 类型的 true，代表真值。

`false`： boolean 类型的 false，代表假值。

```html
<checkbox checked="{{false}}"> </checkbox>
```

>  ***特别注意：不要直接写 `checked="false"`，其计算结果是一个字符串，转成 boolean 类型后代表真值。*** 

### 5.1.2、运算

 可以在 `{{}}` 内进行简单的运算，支持的有如下几种方式： 

#### 5.1.2.1、三元运算

```html
<view hidden="{{flag ? true : false}}"> Hidden </view>
```

#### 5.1.2.2、算数运算

```html
<view> {{a + b}} + {{c}} + d </view>
```

```js
Page({
  data: {
    a: 1,
    b: 2,
    c: 3
  }
})
```

view中的内容为 `3 + 3 + d`。

#### 5.1.2.3、逻辑判断

```html
<view wx:if="{{length > 5}}"> </view>
```

#### 5.1.2.4、字符串运算

```html
<view>{{"hello" + name}}</view>
Page({
  data:{
    name: 'MINA'
  }
})
```

#### 5.1.2.5、数据路径运算

```html
<view>{{object.key}} {{array[0]}}</view>
Page({
  data: {
    object: {
      key: 'Hello '
    },
    array: ['MINA']
  }
})
```

### 5.1.3、组合

 也可以在 Mustache 内直接进行组合，构成新的对象或者数组。 

#### 5.1.3.1、数组

```html
<view wx:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>
Page({
  data: {
    zero: 0
  }
})
```

最终组合成数组`[0, 1, 2, 3, 4]`。

#### 5.1.3.2、对象

```html
<template is="objectCombine" data="{{for: a, bar: b}}"></template>
Page({
  data: {
    a: 1,
    b: 2
  }
})
```

最终组合成的对象是 `{for: 1, bar: 2}`

也可以用扩展运算符 `...` 来将一个对象展开

```html
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>
Page({
  data: {
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      c: 3,
      d: 4
    }
  }
})
```

最终组合成的对象是 `{a: 1, b: 2, c: 3, d: 4, e: 5}`。

如果对象的 key 和 value 相同，也可以间接地表达。

```html
<template is="objectCombine" data="{{foo, bar}}"></template>
Page({
  data: {
    foo: 'my-foo',
    bar: 'my-bar'
  }
})
```

最终组合成的对象是 `{foo: 'my-foo', bar:'my-bar'}`。

**注意**：上述方式可以随意组合，但是如有存在变量名相同的情况，后边的会覆盖前面，如：

```html
<template is="objectCombine" data="{{...obj1, ...obj2, a, c: 6}}"></template>
Page({
  data: {
    obj1: {
      a: 1,
      b: 2
    },
    obj2: {
      b: 3,
      c: 4
    },
    a: 5
  }
})
```

最终组合成的对象是 `{a: 5, b: 3, c: 6}`。

> **注意：** 花括号和引号之间如果有空格，将最终被解析成为字符串

```html
<view wx:for="{{[1,2,3]}} ">
  {{item}}
</view>
```

等同于

```html
<view wx:for="{{[1,2,3] + ' '}}">
  {{item}}
</view>
```



## 5.2、[<font color="#000000">列表渲染</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/list.html)

### 5.2.1、wx:for

在组件上使用 `wx:for` 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。

默认数组的当前项的下标变量名默认为 `index`，数组当前项的变量名默认为 `item`

```html
<view wx:for="{{array}}">
  {{index}}: {{item.message}}
</view>
Page({
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  }
})
```

使用 `wx:for-item` 可以指定数组当前元素的变量名，

使用 `wx:for-index` 可以指定数组当前下标的变量名：

```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

`wx:for` 也可以嵌套，下边是一个九九乘法表

```html
<view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="i">
  <view wx:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" wx:for-item="j">
    <view wx:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
```

### 5.2.2、block wx:for

类似 `block wx:if`，也可以将 `wx:for` 用在``标签上，以渲染一个包含多节点的结构块。例如：

```html
<block wx:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

### 5.2.3、wx:key

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如 [input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) 中的输入内容，[switch](https://developers.weixin.qq.com/miniprogram/dev/component/switch.html) 的选中状态），需要使用 `wx:key` 来指定列表中项目的唯一的标识符。

`wx:key` 的值以两种形式提供

1. **字符串**，代表在 for 循环的 **array 中 item 的某个 property**，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。
2. **保留关键字 `*this`** 代表在 for 循环中的 **item 本身**，这种表示需要 item 本身是一个唯一的字符串或者数字，如：

当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

**如不提供 `wx:key`，会报一个 `warning`， 如果明确知道该列表是静态，或者不必关注其顺序，可以选择忽略。**

**示例代码：**

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/tpg5tKmv6kZt)

```html
<switch wx:for="{{objectArray}}" wx:key="unique" style="display: block;"> {{item.id}} </switch>
<button bindtap="switch"> Switch </button>
<button bindtap="addToFront"> Add to the front </button>

<switch wx:for="{{numberArray}}" wx:key="*this" style="display: block;"> {{item}} </switch>
<button bindtap="addNumberToFront"> Add to the front </button>
```

```js
Page({
  data: {
    objectArray: [
      {id: 5, unique: 'unique_5'},
      {id: 4, unique: 'unique_4'},
      {id: 3, unique: 'unique_3'},
      {id: 2, unique: 'unique_2'},
      {id: 1, unique: 'unique_1'},
      {id: 0, unique: 'unique_0'},
    ],
    numberArray: [1, 2, 3, 4]
  },
  switch: function(e) {
    const length = this.data.objectArray.length
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length)
      const y = Math.floor(Math.random() * length)
      const temp = this.data.objectArray[x]
      this.data.objectArray[x] = this.data.objectArray[y]
      this.data.objectArray[y] = temp
    }
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addToFront: function(e) {
    const length = this.data.objectArray.length
    this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
    this.setData({
      objectArray: this.data.objectArray
    })
  },
  addNumberToFront: function(e){
    this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
    this.setData({
      numberArray: this.data.numberArray
    })
  }
})
```

> **注意：**
>
> 当 `wx:for` 的值为字符串时，会将字符串解析成字符串数组

```html
<view wx:for="array">
  {{item}}
</view>
```

> 等同于

```html
<view wx:for="{{['a','r','r','a','y']}}">
  {{item}}
</view>
```

> **注意：** 花括号和引号之间如果有空格，将最终被解析成为字符串

```html
<view wx:for="{{[1,2,3]}} ">
  {{item}}
</view>
```

> 等同于

```html
<view wx:for="{{[1,2,3] + ' '}}" >
  {{item}}
</view>
```



## 5.3、[<font color="#000000">条件渲染</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/conditional.html)

### 5.3.1、wx:if

在框架中，使用 `wx:if=""` 来判断是否需要渲染该代码块：

```html
<view wx:if="{{condition}}"> True </view>
```

也可以用 `wx:elif` 和 `wx:else` 来添加一个 else 块：

```html
<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
```

### 5.3.2、block wx:if

因为 `wx:if` 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签， 可以使用一个 &lt;block/>   标签将多个组件包装起来，并在上边使用 `wx:if` 控制属性 

```html
<block wx:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

> **注意：** **``** 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

### 5.3.3、`wx:if` vs `hidden`

因为 `wx:if` 之中的模板也可能包含数据绑定，所以当 `wx:if` 的条件值切换时，框架有一个局部渲染的过程，因为它会确保条件块在切换时销毁或重新渲染。

同时 `wx:if` 也是**惰性的**，如果在初始渲染条件为 `false`，框架什么也不做，在条件第一次变成真的时候才开始局部渲染。

相比之下，`hidden` 就简单的多，组件始终会被渲染，只是简单的控制显示与隐藏。

一般来说，`wx:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗。因此，如果需要频繁切换的情景下，用 `hidden` 更好，如果在运行时条件不大可能改变则 `wx:if` 较好。

## 5.4、[<font color="#000000">模板</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/template.html)

WXML提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。

### 5.4.1、定义模板

使用 name 属性，作为模板的名字。然后在`<template/>`内定义代码片段，如：

```html
<!--
  index: int
  msg: string
  time: string
-->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

### 5.4.2、使用模板

使用 is 属性，声明需要的使用的模板，然后将模板所需要的 data 传入，如：

```html
<template is="msgItem" data="{{...item}}"/>
```

```js
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2016-09-15'
    }
  }
})
```

is 属性可以使用 Mustache 语法，来动态决定具体需要渲染哪个模板：

```html
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block wx:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>
```

### 5.4.3、模板的作用域

模板拥有自己的作用域，只能使用 data 传入的数据以及模板定义文件中定义的 `<wxs />`模块。



## 5.5、[<font color="#000000">引用</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxml/import.html)

WXML 提供两种文件引用方式`import`和`include`。

### 5.5.1、import

`import`可以在该文件中使用目标文件定义的`template`，如：

在 item.wxml 中定义了一个叫`item`的`template`：

```html
<!-- item.wxml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

在 index.wxml 中引用了 item.wxml，就可以使用`item`模板：

```html
<import src="item.wxml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

### 5.5.2、import 的作用域

import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件 import 的 template。

**如：C import B，B import A，在C中可以使用B定义的`template`，在B中可以使用A定义的`template`，但是C不能使用A定义的`template`**。

```html
<!-- A.wxml -->
<template name="A">
  <text> A template </text>
</template>
```

```html
<!-- B.wxml -->
<import src="a.wxml"/>
<template name="B">
  <text> B template </text>
</template>
```

```html
<!-- C.wxml -->
<import src="b.wxml"/>
<template is="A"/>  <!-- Error! Can not use tempalte when not import A. -->
<template is="B"/>
```

### 5.5.3、include

 `include` 可以将目标文件**除了**`<template/>` `<wxs/>` 外的整个代码引入，相当于是拷贝到 `include` 位置，如： 

```html
<!-- index.wxml -->
<include src="header.wxml"/>
<view> body </view>
<include src="footer.wxml"/>
```

```html
<!-- header.wxml -->
<view> header </view>
```

```html
<!-- footer.wxml -->
<view> footer </view>
```

# 6、[<font color="#000000">WXS 语法参考</font>](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/)

WXS（WeiXin Script）是小程序的一套脚本语言，结合 `WXML`，可以构建出页面的结构。

WXS 与 JavaScript 是不同的语言，有自己的语法，并不和 JavaScript 一致。

## 6.1、[<font color="#000000"> WXS 模块</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/01wxs-module.html)

 WXS 代码可以编写在 wxml 文件中的 `<wxs>`标签内，或以 `.wxs` 为后缀名的文件内。 

每一个 `.wxs` 文件和  `<wxs>`标签都是一个单独的模块。

每个模块都有自己独立的作用域。即在一个模块里面定义的变量与函数，默认为私有的，对其他模块不可见。

一个模块要想对外暴露其内部的私有变量与函数，只能通过 `module.exports` 实现。

**.wxs 文件**

 创建 `.wxs` 文件，在其中直接编写 WXS 脚本。 该 `.wxs` 文件可以被其他的` .wxs` 文件 或 WXML 中的 `<wxs>` 标签引用。

**module 对象**

每个 `wxs` 模块均有一个内置的 `module` 对象。

**属性**

- `exports`: 通过该属性，可以对外共享本模块的私有变量与函数。

**module 属性**

module 属性是当前 `<wxs>`标签的模块名。在单个 wxml 文件内，建议其值唯一。有重复模块名则按照先后顺序覆盖（后者覆盖前者）。不同文件之间的 wxs 模块名不会相互覆盖。

module 属性值的命名必须符合下面两个规则：

- 首字符必须是：字母（a-zA-Z），下划线（_）
- 剩余字符可以是：字母（a-zA-Z），下划线（_）， 数字（0-9）

**require函数**

在`.wxs`模块中引用其他 `wxs` 文件模块，可以使用 `require` 函数。

引用的时候，要注意如下几点：

- 只能引用 `.wxs` 文件模块，且必须使用相对路径。
- `wxs` 模块均为单例，`wxs` 模块在第一次被引用时，会自动初始化为单例对象。多个页面，多个地方，多次引用，使用的都是同一个 `wxs` 模块对象。
- 如果一个 `wxs` 模块在定义之后，一直没有被引用，则该模块不会被解析与运行。

**src 属性**

src 属性可以用来引用其他的 `wxs` 文件模块。

引用的时候，要注意如下几点：

- 只能引用 `.wxs` 文件模块，且必须使用相对路径。
- `wxs` 模块均为单例，`wxs` 模块在第一次被引用时，会自动初始化为单例对象。多个页面，多个地方，多次引用，使用的都是同一个 `wxs` 模块对象。
- 如果一个 `wxs` 模块在定义之后，一直没有被引用，则该模块不会被解析与运行。

## 6.2、[<font color="#000000">变量</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/02variate.html)

- WXS 中的变量均为值的引用。
- 没有声明的变量直接赋值使用，会被定义为全局变量。
- 如果只声明变量而不赋值，则默认值为 `undefined`。
- var表现与javascript一致，会有变量提升。

## 6.3、[<font color="#000000">注释</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/03annotation.html)

## 6.4、[<font color="#000000">运算符</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/04operator.html)

## 6.5、[<font color="#000000">语句</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/05statement.html)

## 6.6、[<font color="#000000">数据类型</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/06datatype.html)

## 6.7、[<font color="#000000">基础类库</font>](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/07basiclibrary.html)

# 7、[<font color="#000000">事件系统</font>](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxml/event.html)

- 事件是视图层到逻辑层的通讯方式。
- 事件可以将用户的行为反馈到逻辑层进行处理。
- 事件可以绑定在组件上，当达到触发事件，就会执行逻辑层中对应的事件处理函数。
- 事件对象可以携带额外信息，如 id, dataset, touches。



## 7.1、事件的使用方式

- 在组件中绑定一个事件处理函数。

如`bindtap`，当用户点击该组件的时候会在该页面对应的Page中找到相应的事件处理函数。

```html
<view id="tapTest" data-hi-data="WeChat" data-hiData="develop" bindtap="tapName"> Click me! </view>
```

- 在相应的Page定义中写上相应的事件处理函数，参数是event。

>  注意，这里的数据以data-开头， 这种写法中，连字符写法会转换成驼峰写法，而大写字符会自动转成小写字符。

```js
Page({
  tapName: function(event) {
    console.log(event)
  }
})
```

> 注意，这里可能有些事件不如预期触发，如2.9.3基础库中，input组件的bindinput事件不能触发，可以去开发者社区提交问题或搜索相关问题

## 7.2、使用WXS函数响应事件

## 7.3、事件分类

事件分为冒泡事件和非冒泡事件：

1. 冒泡事件：当一个组件上的事件被触发后，该事件会向父节点传递。
2. 非冒泡事件：当一个组件上的事件被触发后，该事件不会向父节点传递。

WXML的冒泡事件列表：

| 类型               | 触发条件                                                     | 最低版本                                                     |
| :----------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| touchstart         | 手指触摸动作开始                                             |                                                              |
| touchmove          | 手指触摸后移动                                               |                                                              |
| touchcancel        | 手指触摸动作被打断，如来电提醒，弹窗                         |                                                              |
| touchend           | 手指触摸动作结束                                             |                                                              |
| tap                | 手指触摸后马上离开                                           |                                                              |
| longpress          | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 | [1.5.0](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |
| longtap            | 手指触摸后，超过350ms再离开（推荐使用longpress事件代替）     |                                                              |
| transitionend      | 会在 WXSS transition 或 wx.createAnimation 动画结束后触发    |                                                              |
| animationstart     | 会在一个 WXSS animation 动画开始时触发                       |                                                              |
| animationiteration | 会在一个 WXSS animation 一次迭代结束时触发                   |                                                              |
| animationend       | 会在一个 WXSS animation 动画完成时触发                       |                                                              |
| touchforcechange   | 在支持 3D Touch 的 iPhone 设备，重按时会触发                 | [1.9.90](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) |

**注：除上表之外的其他组件自定义事件如无特殊声明都是非冒泡事件，如 [form](https://developers.weixin.qq.com/miniprogram/dev/component/form.html) 的`submit`事件，[input](https://developers.weixin.qq.com/miniprogram/dev/component/input.html) 的`input`事件，[scroll-view](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html) 的`scroll`事件，(详见各个[组件](https://developers.weixin.qq.com/miniprogram/dev/component/))**

# 8、生命周期和运行机制

## 8.1、小程序生命周期

App(Object object)

注册小程序。接受一个 `Object` 参数，其指定小程序的生命周期回调等。

**App() 必须在 `app.js` 中调用，必须调用且只能调用一次。不然会出现无法预期的后果。**

| 属性                                                         | 类型     | 默认值 | 必填 | 说明                                   |
| :----------------------------------------------------------- | :------- | :----- | :--- | :------------------------------------- |
| [onLaunch](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onLaunch-Object-object) | function |        | 否   | 生命周期回调——监听小程序初始化。       |
| [onShow](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onShow-Object-object) | function |        | 否   | 生命周期回调——监听小程序启动或切前台。 |
| [onHide](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onHide) | function |        | 否   | 生命周期回调——监听小程序切后台。       |
| [onError](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onError-String-error) | function |        | 否   | 错误监听函数。                         |
| [onPageNotFound](https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onPageNotFound-Object-object) | function |        | 否   | 页面不存在监听函数。                   |

>  关于小程序前后台的定义和小程序的运行机制，请参考[运行机制](https://developers.weixin.qq.com/miniprogram/dev/framework/runtime/operating-mechanism.html)章节。 

AppObject getApp(Object object)

获取到小程序全局唯一的 `App` 实例。

> 注意
>
> - 不要在定义于 `App()` 内的函数中，或调用 `App` 前调用 `getApp()` ，使用 `this` 就可以拿到 app 实例。
> - 通过 `getApp()` 获取实例之后，不要私自调用生命周期函数。

## 8.2、页面生命周期

Page(Object object)

注册小程序中的一个页面。接受一个 `Object` 类型参数，其指定页面的初始数据、生命周期回调、事件处理函数等。

| 属性                                                         | 类型     | 默认值 | 必填 | 说明                                                         |
| :----------------------------------------------------------- | :------- | :----- | :--- | :----------------------------------------------------------- |
| [data](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#data) | Object   |        |      | 页面的初始数据                                               |
| [onLoad](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onLoad-Object-query) | function |        |      | 生命周期回调—监听页面加载                                    |
| [onShow](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShow) | function |        |      | 生命周期回调—监听页面显示                                    |
| [onReady](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onReady) | function |        |      | 生命周期回调—监听页面初次渲染完成                            |
| [onHide](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onHide) | function |        |      | 生命周期回调—监听页面隐藏                                    |
| [onUnload](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onUnload) | function |        |      | 生命周期回调—监听页面卸载                                    |
| [onPullDownRefresh](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPullDownRefresh) | function |        |      | 监听用户下拉动作                                             |
| [onReachBottom](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onReachBottom) | function |        |      | 页面上拉触底事件的处理函数                                   |
| [onShareAppMessage](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onShareAppMessage-Object-object) | function |        |      | 用户点击右上角转发                                           |
| [onPageScroll](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPageScroll-Object-object) | function |        |      | 页面滚动触发事件的处理函数                                   |
| [onResize](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onResize-Object-object) | function |        |      | 页面尺寸改变时触发，详见 [响应显示区域变化](https://developers.weixin.qq.com/miniprogram/dev/framework/view/resizable.html#在手机上启用屏幕旋转支持) |
| [onTabItemTap](https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onTabItemTap-Object-object) | function |        |      | 当前是 tab 页时，点击 tab 时触发                             |

## 8.3、在页面中使用 behaviors

>  基础库 2.9.2 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。 
>
> 页面可以引用 behaviors 。 behaviors 可以用来让多个页面有相同的数据字段和方法。
>
> ```js
> // my-behavior.js
> module.exports = Behavior({
>   data: {
>     sharedText: 'This is a piece of data shared between pages.'
>   },
>   methods: {
>     sharedMethod: function() {
>       this.data.sharedText === 'This is a piece of data shared between pages.'
>     }
>   }
> })
> ```

```js
// page-a.js
var myBehavior = require('./my-behavior.js')
Page({
  behaviors: [myBehavior],
  onLoad: function() {
    this.data.sharedText === 'This is a piece of data shared between pages.'
  }
})
```

具体用法参见 [behaviors](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/behaviors.html) 。

下图说明了页面 `Page` 实例的生命周期。

![img](微信小程序.assets/page-lifecycle.2e646c86.png)

## 8.4、小程序运行机制

### 8.4.1、前台/后台状态

小程序启动后，界面被展示给用户，此时小程序处于**前台**状态。

当用户点击右上角胶囊按钮关闭小程序，或者按了设备 Home 键离开微信时，小程序并没有完全终止运行，而是进入了**后台**状态，小程序还可以运行一小段时间。

当用户再次进入微信或再次打开小程序，小程序又会从后台进入**前台**。但如果用户很久没有再进入小程序，或者系统资源紧张，小程序可能被**销毁**，即完全终止运行。

### 8.4.2、小程序启动

这样，小程序启动可以分为两种情况，一种是**冷启动**，一种是**热启动**。

- 冷启动：如果用户首次打开，或小程序销毁后被用户再次打开，此时小程序需要重新加载启动，即冷启动。
- 热启动：如果用户已经打开过某小程序，然后在一定时间内再次打开该小程序，此时小程序并未被销毁，只是从后台状态进入前台状态，这个过程就是热启动。

### 8.4.3、小程序销毁时机

通常，只有当小程序进入后台一定时间，或者系统资源占用过高，才会被销毁。具体而言包括以下几种情形。

- 当小程序进入后台，可以会维持一小段时间的运行状态，如果这段时间内都未进入前台，小程序会被销毁。
- 当小程序占用系统资源过高，可能会被系统销毁或被微信客户端主动回收。
  - 在 iOS 上，当微信客户端在一定时间间隔内（目前是 5 秒）连续收到两次及以上系统内存告警时，会主动进行小程序的销毁，并提示用户 「该小程序可能导致微信响应变慢被终止」
  - 建议小程序在必要时使用 [wx.onMemoryWarning](https://developers.weixin.qq.com/miniprogram/dev/api/device/performance/wx.onMemoryWarning.html) 监听内存告警事件，进行必要的内存清理。 

**启动场景分类**

用户打开小程序时，场景可分为以下 A 、 B 两类：

A. 打开首页： [场景值](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/scene.html)有以下几项：

| 场景值ID | 说明               |
| :------- | :----------------- |
| 1001     | 发现栏小程序主入口 |
| 1019     | 微信支付入口       |
| 1023     | 安卓系统桌面图标   |
| 1038     | 从另一个小程序返回 |
| 1056     | 音乐播放器菜单     |
| 1089     | 首页下拉小程序栏   |

B. 打开小程序指定的某个页面： 场景值为除 A 以外的其他

不同场景类别的启动将具有不同的行为。

**热启动逻辑**

> 基础库 1.4.0 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

小程序在热启动时，可能需要立刻跳转到别的页面，如点击分享卡片进入小程序时。此时可能会自动产生一些页面跳转。

按照场景值的类别，这种跳转行为可以归纳为：

| 上一次的场景 | 当前打开的场景 | 效果                                                         |
| :----------- | :------------- | :----------------------------------------------------------- |
| A            | A              | 保留原来的状态                                               |
| B            | A              | 清空原来的页面栈，打开首页（相当于执行 [wx.reLaunch](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html) 到首页） |
| A 或 B       | B              | 清空原来的页面栈，打开指定页面（相当于执行 [wx.reLaunch](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html) 到指定页） |

A **类场景的重新启动策略**

> 基础库 2.8.0 开始支持，低版本需做[兼容处理](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html)。

小程序被销毁后，下次冷启动如果属于 B 类场景，将会进入特定的页面。

下次冷启动如果属于 A 类场景，默认情况下将会进入小程序的首页。在页面对应的 json 文件中（也可以全局配置在 app.json 的 window 段中），指定 `restartStrategy` 配置项可以改变这个默认的行为，使得从某个页面退出后，下次 A 类场景的冷启动可以回到这个页面。

**代码示例：**

```json
{
  "restartStrategy": "homePage"
}
```

`restartStrategy` 可选值：

| 可选值                | 含义                                                         |
| :-------------------- | :----------------------------------------------------------- |
| homePage              | （默认值）如果从这个页面退出小程序，下次将从首页冷启动       |
| homePageAndLatestPage | 如果从这个页面退出小程序，下次冷启动后立刻加载这个页面，页面的参数保持不变（不可用于 tab 页） |

注意：即使不配置为 `homePage` ，小程序如果退出过久（当前默认一天时间，可以使用**退出状态**来调整），下次冷启动时也将不再遵循 `restartStrategy` 的配置，而是直接从首页冷启动。

无论如何，页面中的状态并不会被保留，如输入框中的文本内容、 checkbox 的勾选状态等都不会还原。如果需要还原或部分还原，需要利用**退出状态**。

**退出状态**

每当小程序可能被销毁之前，页面回调函数 `onSaveExitState` 会被调用。如果想保留页面中的状态，可以在这个回调函数中“保存”一些数据，下次启动时可以通过 `exitState` 获得这些已保存数据。

**代码示例：**

```json
{
  "restartStrategy": "homePageAndLatestPage"
}
```

```js
Page({
  onLoad: function() {
    var prevExitState = this.exitState // 尝试获得上一次退出前 onSaveExitState 保存的数据
    if (prevExitState !== undefined) { // 如果是根据 restartStrategy 配置进行的冷启动，就可以获取到
      prevExitState.myDataField === 'myData' 
    }
  },
  onSaveExitState: function() {
    var exitState = { myDataField: 'myData' } // 需要保存的数据
    return {
      data: exitState,
      expireTimeStamp: Date.now() + 24 * 60 * 60 * 1000 // 超时时刻
    }
  }
})
```

`onSaveExitState` 返回值可以包含两项：

| 字段名          | 类型   | 含义                                                         |
| :-------------- | :----- | :----------------------------------------------------------- |
| data            | Any    | 需要保存的数据（只能是 JSON 兼容的数据）                     |
| expireTimeStamp | Number | 超时时刻，在这个时刻后，保存的数据保证一定被丢弃，默认为 (当前时刻 + 1 天) |

一个更完整的示例：[在开发者工具中预览效果](https://developers.weixin.qq.com/s/ELP5uTmN7E8l)

注意事项：

- 如果超过 `expireTimeStamp` ，保存的数据将被丢弃，且冷启动时不遵循 `restartStrategy` 的配置，而是直接从首页冷启动。
- `expireTimeStamp` 有可能被自动提前，如微信客户端需要清理数据的时候。
- 在小程序存活期间， `onSaveExitState` 可能会被多次调用，此时以最后一次的调用结果作为最终结果。
- 在某些特殊情况下（如微信客户端直接被系统杀死），这个方法将不会被调用，下次冷启动也不遵循 `restartStrategy` 的配置，而是直接从首页冷启动。

# 9、页面路由及页面数据传递

 在小程序中所有页面的路由全部由框架进行管理。 

## 9.1、页面栈

框架以栈的形式维护了当前的所有页面。 当发生路由切换的时候，页面栈的表现如下：

| 路由方式   | 页面栈表现                        |
| :--------- | :-------------------------------- |
| 初始化     | 新页面入栈                        |
| 打开新页面 | 新页面入栈                        |
| 页面重定向 | 当前页面出栈，新页面入栈          |
| 页面返回   | 页面不断出栈，直到目标返回页      |
| Tab 切换   | 页面全部出栈，只留下新的 Tab 页面 |
| 重加载     | 页面全部出栈，只留下新的页面      |

开发者可以使用 `getCurrentPages()` 函数获取当前页面栈。

## 9.2、路由方式

对于路由的触发方式以及页面生命周期函数如下：

| 路由方式   | 触发时机                                                     | 路由前页面 | 路由后页面         |
| :--------- | :----------------------------------------------------------- | :--------- | :----------------- |
| 初始化     | 小程序打开的第一个页面                                       |            | onLoad, onShow     |
| 打开新页面 | 调用 API [wx.navigateTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html) <br />使用组件[`<navigator open-type="navigateTo"/>`](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html) | onHide     | onLoad, onShow     |
| 页面重定向 | 调用 API [wx.redirectTo](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.redirectTo.html) <br />使用组件 [`<navigator open-type="redirectTo"/>`](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html) | onUnload   | onLoad, onShow     |
| 页面返回   | 调用 API [wx.navigateBack](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateBack.html) <br />使用组件[`<navigator open-type="navigateBack">`](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html) <br />用户按左上角返回按钮 | onUnload   | onShow             |
| Tab 切换   | 调用 API [wx.switchTab](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)<br /> 使用组件[`<navigator open-type="switchTab"/>`](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)<br />用户切换 Tab |            | 各种情况请参考下表 |
| 重启动     | 调用 API [wx.reLaunch](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.reLaunch.html) <br />使用组件 [`<navigator open-type="reLaunch"/>`](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html) | onUnload   | onLoad, onShow     |

Tab 切换对应的生命周期（以 A、B 页面为 Tabbar 页面，C 是从 A 页面打开的页面，D 页面是从 C 页面打开的页面为例）：

| 当前页面        | 路由后页面    | 触发的生命周期（按顺序）                           |
| :-------------- | :------------ | :------------------------------------------------- |
| A               | A             | Nothing happend                                    |
| A               | B             | A.onHide(), B.onLoad(), B.onShow()                 |
| A               | B（再次打开） | A.onHide(), B.onShow()                             |
| C               | A             | C.onUnload(), A.onShow()                           |
| C               | B             | C.onUnload(), B.onLoad(), B.onShow()               |
| D               | B             | D.onUnload(), C.onUnload(), B.onLoad(), B.onShow() |
| D（从转发进入） | A             | D.onUnload(), A.onLoad(), A.onShow()               |
| D（从转发进入） | B             | D.onUnload(), B.onLoad(), B.onShow()               |

**Tips**:

- `navigateTo`, `redirectTo` 只能打开非 tabBar 页面。
- `switchTab` 只能打开 tabBar 页面。
- `reLaunch` 可以打开任意页面。
- 页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
- 调用页面路由带的参数可以在目标页面的`onLoad`中获取。

## 9.3、页面数据传递

- 可以在跳转链接中拼接相应参数
- 可以在跳转后的页面通过获取页面栈得到数据
- 可以将数据设置给app.js中的全局变量

# 10、[<font color="#000000">基础组件</font>](https://developers.weixin.qq.com/miniprogram/dev/component/ )

## 10.1、体验小程序

开发者可使用微信客户端(6.7.2 及以上版本)扫码下方小程序码，体验小程序。

[查看小程序示例源码](https://github.com/wechat-miniprogram/miniprogram-demo)

![img](微信小程序.assets/demo.ef5c5bef.jpg)

## 10.2、原生组件

小程序中的部分组件是由客户端创建的原生组件，这些组件有：

- [`camera`](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html)
- [`canvas`](https://developers.weixin.qq.com/miniprogram/dev/component/canvas.html)
- [`input`](https://developers.weixin.qq.com/miniprogram/dev/component/input.html)（仅在focus时表现为原生组件）
- [`live-player`](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)
- [`live-pusher`](https://developers.weixin.qq.com/miniprogram/dev/component/live-pusher.html)
- [`map`](https://developers.weixin.qq.com/miniprogram/dev/component/map.html)
- [`textarea`](https://developers.weixin.qq.com/miniprogram/dev/component/textarea.html)
- [`video`](https://developers.weixin.qq.com/miniprogram/dev/component/video.html)

## 10.3、原生组件的使用限制

由于原生组件脱离在 WebView 渲染流程外，因此在使用时有以下限制：

- 原生组件的层级是最高的，所以页面中的其他组件无论设置`z-index`为多少，都无法盖在原生组件上。

  - 后插入的原生组件可以覆盖之前的原生组件。

- 原生组件还无法在picker-view中使用。

  - 基础库 2.4.4 以下版本，原生组件不支持在 [scroll-view](https://developers.weixin.qq.com/miniprogram/dev/component/scroll-view.html)、[swiper](https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html)、[movable-view](https://developers.weixin.qq.com/miniprogram/dev/component/movable-view.html) 中使用。
- 部分CSS样式无法应用于原生组件，例如：

  - 无法对原生组件设置 CSS 动画
  - 无法定义原生组件为 `position: fixed`
  - 不能在父级节点使用 `overflow: hidden` 来裁剪原生组件的显示区域
- 原生组件的事件监听不能使用 `bind:eventname` 的写法，只支持 `bindeventname`。原生组件也不支持 catch 和 capture 的事件绑定方式。
- 原生组件会遮挡 vConsole 弹出的调试面板。 **在工具上，原生组件是用web组件模拟的，因此很多情况并不能很好的还原真机的表现，建议开发者在使用到原生组件时尽量在真机上进行调试。**

**cover-view 与 cover-image**

为了解决原生组件层级最高的限制。小程序专门提供了 [`cover-view`](https://developers.weixin.qq.com/miniprogram/dev/component/cover-view.html) 和 [`cover-image`](https://developers.weixin.qq.com/miniprogram/dev/component/cover-image.html) 组件，可以覆盖在**部分**原生组件上面。这两个组件也是原生组件，但是使用限制与其他原生组件有所不同。

## 10.4、原生组件同层渲染

同层渲染是为了解决原生组件的层级问题，在支持同层渲染后，原生组件与其它组件可以随意叠加，有关层级的限制将不再存在。但需要注意的是，组件内部仍由原生渲染，样式一般还是对原生组件内部无效。**当前 video, map 组件已支持同层渲染。**

## 10.5、原生组件相对层级

为了可以调整原生组件之间的相对层级位置，小程序在 v2.7.0 及以上版本支持在样式中声明 z-index 来指定原生组件的层级。该 z-index 仅调整原生组件之间的层级顺序，其层级仍**高于**其他非原生组件。



# 11、自定义组件

 开发者可以将页面内的功能模块抽象成自定义组件，以便在不同的页面中重复使用；也可以将复杂的页面拆分成多个低耦合的模块，有助于代码维护。自定义组件在使用时与基础组件非常相似。 

通俗来讲就是将一些小程序中使用的较多的模块提取成一个自定义组件

## 11.1、创建自定义组件

![image-20191212115217417](微信小程序.assets/image-20191212115217417.png)

类似于页面，一个自定义组件由 `json` `wxml` `wxss` `js` 4个文件组成。要编写一个自定义组件，首先需要在 `json` 文件中进行自定义组件声明（将 `component` 字段设为 `true` 可将这一组文件设为自定义组件）：

```json
{
  "component": true
}
```

同时，还要在 `wxml` 文件中编写组件模板，在 `wxss` 文件中加入组件样式，它们的写法与页面的写法类似。具体细节和注意事项参见 [组件模板和样式](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/wxml-wxss.html) 。

**代码示例：**

```html
<!-- 这是自定义组件的内部WXML结构 -->
<view class="inner">
  {{innerText}}
</view>
<slot></slot>
```

```css
/* 这里的样式只应用于这个自定义组件 */
.inner {
  color: red;
}
```

**注意：在组件wxss中不应使用ID选择器、属性选择器和标签名选择器。**

在自定义组件的 `js` 文件中，需要使用 `Component()` 来注册组件，并提供组件的属性定义、内部数据和自定义方法。

组件的属性值和内部数据将被用于组件 `wxml` 的渲染，其中，属性值是可由组件外部传入的。更多细节参见 [Component构造器](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html) 。

**代码示例：**

```js
Component({
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    innerText: {
      type: String,
      value: 'default value',
    }
  },
  data: {
    // 这里是一些组件内部数据
    someData: {}
  },
  methods: {
    // 这里是一个自定义方法
    customMethod: function(){}
  }
})
```

## 11.2、使用自定义组件

使用已注册的自定义组件前，首先要在页面的 `json` 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径：

```json
{
  "usingComponents": {
    "component-tag-name": "path/to/the/custom/component"
  }
}
```

这样，在页面的 `wxml` 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。

> 开发者工具 1.02.1810190 及以上版本支持在 app.json 中声明 usingComponents 字段，在此处声明的自定义组件视为全局自定义组件，在小程序内的页面或自定义组件中可以直接使用而无需再声明。

**代码示例：**

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/OMfVAKmZ6KZT)

```html
<view>
  <!-- 以下是对一个自定义组件的引用 -->
  <component-tag-name inner-text="Some text"></component-tag-name>
</view>
```

自定义组件的 `wxml` 节点结构在与数据结合之后，将被插入到引用位置内。

## <font color='#fb4748'>11.3、细节注意事项</font>

一些需要注意的细节：

- 因为 WXML 节点标签名只能是小写字母、中划线和下划线的组合，所以自定义组件的标签名也只能包含这些字符。
- 自定义组件也是可以引用自定义组件的，引用方法类似于页面引用自定义组件的方式（使用 `usingComponents` 字段）。
- 自定义组件和页面所在项目根目录名不能以“wx-”为前缀，否则会报错。

注意，是否在页面文件中使用 `usingComponents` 会使得页面的 `this` 对象的原型稍有差异，包括：

- 使用 `usingComponents` 页面的原型与不使用时不一致，即 `Object.getPrototypeOf(this)` 结果不同。
- 使用 `usingComponents` 时会多一些方法，如 `selectComponent` 。
- 出于性能考虑，使用 `usingComponents` 时， `setData` 内容不会被直接深复制，即 `this.setData({ field: obj })` 后 `this.data.field === obj` 。（深复制会在这个值被组件间传递时发生。）

如果页面比较复杂，新增或删除 `usingComponents` 定义段时建议重新测试一下。

## 11.4、`<slot>`节点

在组件的wxml中可以包含 `slot` 节点，用于承载组件使用者提供的wxml结构。  也可以简单地认为是个插槽，将节点内地结构插入到组件相应位置

**代码示例：**

[在开发者工具中预览效果](https://developers.weixin.qq.com/s/1udXLnmi6KY2)

```html
<!-- 组件模板 -->
<view class="wrapper">
  <view>这里是组件的内部节点</view>
  <slot></slot>
</view>
```

```html
<!-- 引用组件的页面模板 -->
<view>
  <component-tag-name>
    <!-- 这部分内容将被放置在组件 <slot> 的位置上 -->
    <view>这里是插入到组件slot中的内容</view>
  </component-tag-name>
</view>
```

注意，在模板中引用到的自定义组件及其对应的节点名需要在 `json` 文件中显式定义，否则会被当作一个无意义的节点。除此以外，节点名也可以被声明为[抽象节点](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/generics.html)。

### 11.4.1、多个`<slot>`节点

 默认情况下，一个组件的wxml中只能有一个slot。需要使用多slot时，可以在组件js中声明启用。 

```js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: { /* ... */ },
  methods: { /* ... */ }
})
```

此时，可以在这个组件的wxml中使用多个slot，以不同的 `name` 来区分。

```html
<!-- 组件模板 -->
<view class="wrapper">
  <slot name="before"></slot>
  <view>这里是组件的内部细节</view>
  <slot name="after"></slot>
</view>
```

使用时，用 `slot` 属性来将节点插入到不同的slot上。

```html
<!-- 引用组件的页面模板 -->
<view>
  <component-tag-name>
    <!-- 这部分内容将被放置在组件 <slot name="before"> 的位置上 -->
    <view slot="before">这里是插入到组件slot name="before"中的内容</view>
    <!-- 这部分内容将被放置在组件 <slot name="after"> 的位置上 -->
    <view slot="after">这里是插入到组件slot name="after"中的内容</view>
  </component-tag-name>
</view>
```

## 11.5、组件样式

组件对应 `wxss` 文件的样式，只对组件wxml内的节点生效。编写组件样式时，需要注意以下几点：

- 组件和引用组件的页面不能使用id选择器（`#a`）、属性选择器（`[a]`）和标签名选择器，请改用class选择器。
- 组件和引用组件的页面中使用后代选择器（`.a .b`）在一些极端情况下会有非预期的表现，如遇，请避免使用。
- 子元素选择器（`.a>.b`）只能用于 `view` 组件与其子节点之间，用于其他组件可能导致非预期的情况。
- 继承样式，如 `font` 、 `color` ，会从组件外继承到组件内。
- 除继承样式外， `app.wxss` 中的样式、组件所在页面的的样式对自定义组件无效（除非更改组件样式隔离选项）。

```css
#a { } /* 在组件中不能使用 */
[a] { } /* 在组件中不能使用 */
button { } /* 在组件中不能使用 */
.a > .b { } /* 除非 .a 是 view 组件节点，否则不一定会生效 */
```

除此以外，组件可以指定它所在节点的默认样式，使用 `:host` 选择器（需要包含基础库 [1.7.2](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 或更高版本的开发者工具支持）。

### 11.5.1、组件样式隔离

默认情况下，自定义组件的样式只受到自定义组件 wxss 的影响。除非以下两种情况：

- <font color="#fb4748">`app.wxss` 或页面的 `wxss` 中使用了**标签名选择器**（或一些其他特殊选择器）来直接指定样式，这些选择器会影响到页面和全部组件。通常情况下这是不推荐的做法。</font>
- 指定特殊的样式隔离选项 `styleIsolation` 。

```js
Component({
  options: {
    styleIsolation: 'isolated'
  }
})
```

`styleIsolation` 选项从基础库版本 [2.6.5](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 开始支持。它支持以下取值：

- `isolated` 表示启用样式隔离，在自定义组件内外，使用 class 指定的样式将不会相互影响（一般情况下的默认值）；
- `apply-shared` 表示页面 wxss 样式将影响到自定义组件，但自定义组件 wxss 中指定的样式不会影响页面；
- `shared` 表示页面 wxss 样式将影响到自定义组件，自定义组件 wxss 中指定的样式也会影响页面和其他设置了 `apply-shared` 或 `shared` 的自定义组件。（这个选项在插件中不可用。）

- `page-isolated` 表示在这个页面禁用 app.wxss ，同时，页面的 wxss 不会影响到其他自定义组件；
- `page-apply-shared` 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式不会影响到其他自定义组件，但设为 `shared` 的自定义组件会影响到页面；
- `page-shared` 表示在这个页面禁用 app.wxss ，同时，页面 wxss 样式会影响到其他设为 `apply-shared` 或 `shared` 的自定义组件，也会受到设为 `shared` 的自定义组件的影响。

此外，小程序基础库版本 [2.2.3](https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html) 以上支持 `addGlobalClass` 选项，即在 `Component` 的 `options` 中设置 `addGlobalClass: true` 。 这个选项等价于设置 `styleIsolation: apply-shared` ，但设置了 `styleIsolation` 选项后这个选项会失效。

```js
/* 组件 custom-component.js */
Component({
  options: {
    addGlobalClass: true,
  }
})
```

```html
<!-- 组件 custom-component.wxml -->
<text class="red-text">这段文本的颜色由 app.wxss 和页面 wxss 中的样式定义来决定</text>
```

```css
/* app.wxss */
.red-text {
  color: red;
}
```

# 12、云开发配置

![image-20191212201052055](微信小程序.assets/image-20191212201052055.png)

在小程序开发工具中点击云开发按钮可以快速进行云开发设置

![image-20191212201340348](微信小程序.assets/image-20191212201340348.png)

点击确定等待处理完成

![image-20191212201613373](微信小程序.assets/image-20191212201613373.png)

## 12.1、云函数

### 12.1.1、创建一个云函数

在项目根目录找到 `project.config.json` 文件，新增 `cloudfunctionRoot` 字段，指定本地已存在的目录作为云函数的本地根目录

示例：

```json
{
   "cloudfunctionRoot": "./cloudfunctions/"
}
```

这里的functions既是你在项目根目录创建的存放云函数的目录，设置好后会有对应的图标

![image-20191212203633916](微信小程序.assets/image-20191212203633916.png)

然后在云函数目录点击鼠标右键，选择新建Node.js云函数

![image-20191212203758033](微信小程序.assets/image-20191212203758033.png)

然后输入对应的函数名后就会自动创建好，并且会有如下模板代码块

![image-20191212204106076](微信小程序.assets/image-20191212204106076.png)

 云函数的传入参数有两个，一个是 `event` 对象，一个是 `context` 对象。`event` 指的是触发云函数的事件，当小程序端调用云函数时，`event` 就是小程序端调用云函数时传入的参数，外加后端自动注入的小程序用户的 openid 和小程序的 appid。`context` 对象包含了此处调用的调用信息和运行状态，可以用它来了解服务运行的情况。在模板中也默认 `require` 了 `wx-server-sdk`，这是一个帮助我们在云函数中操作数据库、存储以及调用其他云函数的微信提供的库，关于 `wx-server-sdk` 的使用我们在另一个[章节](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/functions/wx-server-sdk.html)讲述。 

### 12.1.2、调用云函数

在小程序中调用这个云函数前，我们还需要先将该云函数部署到云端。在云函数目录上右键，在右键菜单中，我们可以将云函数整体打包上传并部署到线上环境中。

部署完成后，我们可以在小程序中调用该云函数：

```js
wx.cloud.callFunction({
  // 云函数名称
  name: 'add',
  // 传给云函数的参数
  data: {
    a: 1,
    b: 2,
  },
  success: function(res) {
    console.log(res.result.sum) // 3
  },
  fail: console.error
})
```

当然，Promise 风格的调用也是支持的：

```js
wx.cloud.callFunction({
  // 云函数名称
  name: 'add',
  // 传给云函数的参数
  data: {
    a: 1,
    b: 2,
  },
})
.then(res => {
  console.log(res.result) // 3
})
.catch(console.error)
```

> 调用前需要先初始化云函数： wx.cloud.init()
>
> unionId仅在满足 unionId 获取条件时返回

## 12.2、 [<font color="#000">数据库</font>](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database.html) 

### 12.2.1、创建第一个集合

 打开控制台，选择 "数据库" 标签页，通过 "添加集合" 入口创建一个集合。假设我们要创建一个待办事项小程序，我们创建一个名为 `todos` 的集合。创建成功后，可以看到 `todos` 集合管理界面，界面中我们可以添加记录、查找记录、管理索引和管理权限。 

![image-20191215153646367](微信小程序.assets/image-20191215153646367.png)

### 12.2.2、创建第一条记录

控制台提供了可视化添加数据的交互界面，点击 "添加记录" 添加我们的第一条待办事项：

![image-20191215153959454](微信小程序.assets/image-20191215153959454.png)

```json
{
  // 描述，String 类型
  "description": "learn mini-program cloud service",
  // 截止时间，Date 类型
  "due": Date("2018-09-01"),
  // 标签，Array 类型
  "tags": [
    "tech",
    "mini-program",
    "cloud"
  ],
  // 个性化样式，Object 类型
  "style": {
    "color": "red"
  },
  // 是否已完成，Boolean 类型
  "done": false
}
```

添加完成后可在控制台中查看到刚添加的数据。

### 12.2.3、导入数据

云控制台支持上传文件导入已有的数据，可[查看指引](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/import.html)了解如何操作。

### 12.2.4、增删查改

```js
//使用前先初始化
const db = wx.cloud.database()
//或
const testDB = wx.cloud.database({
  env: 'test'
})
```

 要操作一个集合，需先获取它的引用。在获取了数据库的引用后，就可以通过数据库引用上的 `collection` 方法获取一个集合的引用了，比如获取待办事项清单集合： 

```js
const todos = db.collection('todos')
```

获取集合的引用并不会发起网络请求去拉取它的数据，我们可以通过此引用在该集合上进行增删查改的操作，除此之外，还可以通过集合上的 `doc` 方法来获取集合中一个指定 ID 的记录的引用。同理，记录的引用可以用于对特定记录进行更新和删除操作。

假设我们有一个待办事项的 ID 为 `todo-identifiant-aleatoire`，那么我们可以通过 `doc` 方法获取它的引用：

```js
const todo = db.collection('todos').doc('todo-identifiant-aleatoire')
```

#### 12.2.4.1、插入数据

可以通过在集合对象上调用 `add` 方法往集合中插入一条记录。还是用待办事项清单的例子，比如我们想新增一个待办事项：

```js
db.collection('todos').add({
  // data 字段表示需新增的 JSON 数据
  data: {
    // _id: 'todo-identifiant-aleatoire', // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
    description: "learn cloud database",
    due: new Date("2018-09-01"),
    tags: [
      "cloud",
      "database"
    ],
    // 为待办事项添加一个地理位置（113°E，23°N）
    location: new db.Geo.Point(113, 23),
    done: false
  },
  success: function(res) {
    // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
    console.log(res)
  }
})
```

当然，Promise 风格也是支持的，只要传入对象中没有 `success`, `fail` 或 `complete`，那么 `add` 方法就会返回一个 Promise：

```js
db.collection('todos').add({
  // data 字段表示需新增的 JSON 数据
  data: {
    description: "learn cloud database",
    due: new Date("2018-09-01"),
    tags: [
      "cloud",
      "database"
    ],
    location: new db.Geo.Point(113, 23),
    done: false
  }
})
.then(res => {
  console.log(res)
})
```

数据库的增删查改 API 都同时支持回调风格和 Promise 风格调用。

在创建成功之后，我们可以在控制台中查看到刚新增的数据。

可以在 [add API 文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/collection/Collection.add.html)中查阅完整的 API 定义。

#### 12.2.4.2、查询数据

在记录和集合上都有提供 `get` 方法用于获取单个记录或集合中多个记录的数据。

##### 12.2.4.2.1、获取一个记录的数据

我们先来看看如何获取一个记录的数据，假设我们已有一个 ID 为 `todo-identifiant-aleatoire` 的在集合 todos 上的记录，那么我们可以通过在该记录的引用调用 `get` 方法获取这个待办事项的数据：

```js
db.collection('todos').doc('todo-identifiant-aleatoire').get({
  success: function(res) {
    // res.data 包含该记录的数据
    console.log(res.data)
  }
})
```

也可以用 Promise 风格调用：

```js
db.collection('todos').doc('todo-identifiant-aleatoire').get().then(res => {
  // res.data 包含该记录的数据
  console.log(res.data)
})
```

##### 12.2.4.2.2、获取多个记录的数据

我们也可以一次性获取多条记录。通过调用集合上的 `where` 方法可以指定查询条件，再调用 `get` 方法即可只返回满足指定查询条件的记录，比如获取用户的所有未完成的待办事项：

```js
db.collection('todos').where({
  _openid: 'user-open-id',
  done: false
})
.get({
  success: function(res) {
    // res.data 是包含以上定义的两条记录的数组
    console.log(res.data)
  }
})
```

`where` 方法接收一个对象参数，该对象中每个字段和它的值构成一个需满足的匹配条件，各个字段间的关系是 "与" 的关系，即需同时满足这些匹配条件，在这个例子中，就是查询出 todos 集合中 `_openid` 等于 `user-open-id` 且 `done` 等于 `false` 的记录。在查询条件中我们也可以指定匹配一个嵌套字段的值，比如找出自己的标为黄色的待办事项：

```js
db.collection('todos').where({
  _openid: 'user-open-id',
  style: {
    color: 'yellow'
  }
})
.get({
  success: function(res) {
    console.log(res.data)
  }
})
```

也可以用 "点表示法" 表示嵌套字段：

```js
db.collection('todos').where({
  _openid: 'user-open-id',
  'style.color': 'yellow'
})
.get({
  success: function(res) {
    console.log(res.data)
  }
})
```

##### 12.2.4.2.3、获取一个集合的数据

如果要获取一个集合的数据，比如获取 todos 集合上的所有记录，可以在集合上调用 `get` 方法获取，但通常不建议这么使用，在小程序中我们需要尽量避免一次性获取过量的数据，只应获取必要的数据。为了防止误操作以及保护小程序体验，小程序端在获取集合数据时服务器一次默认并且最多返回 20 条记录，云函数端这个数字则是 100。开发者可以通过 `limit` 方法指定需要获取的记录数量，但小程序端不能超过 20 条，云函数端不能超过 100 条。

```js
db.collection('todos').get({
  success: function(res) {
    // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
    console.log(res.data)
  }
})
```

也可以用 Promise 风格调用：

```js
db.collection('todos').get().then(res => {
  // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
  console.log(res.data)
})
```

下面是在云函数端获取一个集合所有记录的例子，因为有最多一次取 100 条的限制，因此很可能一个请求无法取出所有数据，需要分批次取：

```javascript
const cloud = require('wx-server-sdk')
cloud.init()
const db = cloud.database()
const MAX_LIMIT = 100
exports.main = async (event, context) => {
  // 先取出集合记录总数
  const countResult = await db.collection('todos').count()
  const total = countResult.total
  // 计算需分几次取
  const batchTimes = Math.ceil(total / 100)
  // 承载所有读操作的 promise 的数组
  const tasks = []
  for (let i = 0; i < batchTimes; i++) {
    const promise = db.collection('todos').skip(i * MAX_LIMIT).limit(MAX_LIMIT).get()
    tasks.push(promise)
  }
  // 等待所有
  return (await Promise.all(tasks)).reduce((acc, cur) => {
    return {
      data: acc.data.concat(cur.data),
      errMsg: acc.errMsg,
    }
  })
}
```

#### 12.2.4.3、查询指令

 使用数据库 API 提供的 `where` 方法我们可以构造复杂的查询条件完成复杂的查询任务。在本节中我们还是使用[上一章节](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/read.html)中使用的示例数据。 

API 提供了以下查询指令：

| 查询指令 | 说明                 |
| :------- | :------------------- |
| eq       | 等于                 |
| neq      | 不等于               |
| lt       | 小于                 |
| lte      | 小于或等于           |
| gt       | 大于                 |
| gte      | 大于或等于           |
| in       | 字段值在给定数组中   |
| nin      | 字段值不在给定数组中 |

还可以使用逻辑操作符 

| 逻辑操作符 | 说明 |
| ---------- | ---- |
| and        | 与   |
| or         | 或   |
| not        | 非   |
| nor        | 都不 |

更多具体的查询指令 API 文档可参考[数据库 API 文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/database/Command.html)。

### 12.2.5、更新数据

更新数据主要有两个方法：

| API    | 说明                   |
| :----- | :--------------------- |
| update | 局部更新一个或多个记录 |
| set    | 替换更新一个记录       |

```js
db.collection('todos').doc('todo-identifiant-aleatoire').update({
  // data 传入需要局部更新的数据
  data: {
    // 表示将 done 字段置为 true
    done: true
  },
  success: function(res) {
    console.log(res.data)
  }
})
```

如果需要替换更新一条记录，可以在记录上使用 `set` 方法，替换更新意味着用传入的对象替换指定的记录：

```js
const _ = db.command
db.collection('todos').doc('todo-identifiant-aleatoire').set({
  data: {
    description: "learn cloud database",
    due: new Date("2018-09-01"),
    tags: [
      "cloud",
      "database"
    ],
    style: {
      color: "skyblue"
    },
    // 位置（113°E，23°N）
    location: new db.Geo.Point(113, 23),
    done: false
  },
  success: function(res) {
    console.log(res.data)
  }
})
```

如果指定 ID 的记录不存在，则会自动创建该记录，该记录将拥有指定的 ID。

### 12.2.6、删除数据

在这章节我们一起看看如何使用数据库 API 完成数据删除，在本节中我们还是沿用[读取数据](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/guide/database/read.html)章节中使用的数据。

### 12.2.6.1、删除一条记录

对记录使用 `remove` 方法可以删除该条记录，比如：

```js
db.collection('todos').doc('todo-identifiant-aleatoire').remove({
  success: function(res) {
    console.log(res.data)
  }
})
```

### 12.2.6.2、删除多条记录

如果需要更新多个数据，需在 Server 端进行操作（云函数）。可通过 `where` 语句选取多条记录执行删除，只有有权限删除的记录会被删除。比如删除所有已完成的待办事项：

```js
// 使用了 async await 语法
const cloud = require('wx-server-sdk')
const db = cloud.database()
const _ = db.command

exports.main = async (event, context) => {
  try {
    return await db.collection('todos').where({
      done: true
    }).remove()
  } catch(e) {
    console.error(e)
  }
}
```

在大多数情况下，我们希望用户只能操作自己的数据（自己的代表事项），不能操作其他人的数据（其他人的待办事项），这就需要引入权限控制了。

## 12.3、存储

### 12.3.1、上传文件

在小程序端可调用 `wx.cloud.uploadFile` 方法进行上传：

```js
wx.cloud.uploadFile({
  cloudPath: 'example.png', // 上传至云端的路径
  filePath: '', // 小程序临时文件路径
  success: res => {
    // 返回文件 ID
    console.log(res.fileID)
  },
  fail: console.error
})
```

上传成功后会获得文件唯一标识符，即文件 ID，后续操作都基于文件 ID 而不是 URL。

### 12.3.2、下载文件

可以根据文件 ID 下载文件，用户仅可下载其有访问权限的文件：

```js
wx.cloud.downloadFile({
  fileID: '', // 文件 ID
  success: res => {
    // 返回临时文件路径
    console.log(res.tempFilePath)
  },
  fail: console.error
})
```

### 12.3.3、删除文件

可以通过 `wx.cloud.deleteFile` 删除文件：

```js
wx.cloud.deleteFile({
  fileList: ['a7xzcb'],
  success: res => {
    // handle success
    console.log(res.fileList)
  },
  fail: console.error
})
```

更详细的 API 可参考小程序端及后端存储 API 文件。

### 12.3.4组件支持

支持在 `image`、`audio` 等组件中传入云文件 ID

**换取临时链接**

可以根据文件 ID 换取临时文件网络链接，文件链接有有效期为两个小时：

```js
wx.cloud.getTempFileURL({
  fileList: ['cloud://xxx.png'],
  success: res => {
    // fileList 是一个有如下结构的对象数组
    // [{
    //    fileID: 'cloud://xxx.png', // 文件 ID
    //    tempFileURL: '', // 临时文件网络链接
    //    maxAge: 120 * 60 * 1000, // 有效期
    // }]
    console.log(res.fileList)
  },
  fail: console.error
})
```

**API** 文档

可以在此参考详细的API 文档：

- [uploadFile](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.uploadFile.html)
- [downloadFile](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.downloadFile.html)
- [deleteFile](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.deleteFile.html)
- [getTempFileURL](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/reference-sdk-api/storage/Cloud.getTempFileURL.html)

# 13、微信小程序权限

部分接口需要经过用户授权同意才能调用。我们把这些接口按使用范围分成多个 `scope` ，用户选择对 `scope` 来进行授权，当授权给一个 `scope` 之后，其对应的所有接口都可以直接使用。

此类接口调用时：

- 如果用户未接受或拒绝过此权限，会弹窗询问用户，用户点击同意后方可调用接口；
- 如果用户已授权，可以直接调用接口；
- 如果用户已拒绝授权，则不会出现弹窗，而是直接进入接口 fail 回调。

## 13.1、获取用户授权设置

开发者可以使用 [wx.getSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html) 获取用户当前的授权状态。

## 13.2、打开设置界面

用户可以在小程序设置界面（「右上角」 - 「关于」 - 「右上角」 - 「设置」）中控制对该小程序的授权状态。

开发者可以调用 [wx.openSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html) 打开设置界面，引导用户开启授权。

## 13.3、提前发起授权请求

开发者可以使用 [wx.authorize](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/authorize/wx.authorize.html) 在调用需授权 API 之前，提前向用户发起授权请求。

scope 列表

| scope                        | 对应接口                                                     | 描述         |
| :--------------------------- | :----------------------------------------------------------- | :----------- |
| scope.userInfo               | [wx.getUserInfo](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/user-info/wx.getUserInfo.html) | 用户信息     |
| scope.userLocation           | [wx.getLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.getLocation.html), [wx.chooseLocation](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.chooseLocation.html) | 地理位置     |
| scope.userLocationBackground | [wx.startLocationUpdateBackground](https://developers.weixin.qq.com/miniprogram/dev/api/location/wx.startLocationUpdateBackground.html) | 后台定位     |
| scope.address                | [wx.chooseAddress](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/address/wx.chooseAddress.html) | 通讯地址     |
| scope.invoiceTitle           | [wx.chooseInvoiceTitle](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html) | 发票抬头     |
| scope.invoice                | [wx.chooseInvoice](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/invoice/wx.chooseInvoice.html) | 获取发票     |
| scope.werun                  | [wx.getWeRunData](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/werun/wx.getWeRunData.html) | 微信运动步数 |
| scope.record                 | [wx.startRecord](https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/wx.startRecord.html) | 录音功能     |
| scope.writePhotosAlbum       | [wx.saveImageToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.saveImageToPhotosAlbum.html), [wx.saveVideoToPhotosAlbum](https://developers.weixin.qq.com/miniprogram/dev/api/media/video/wx.saveVideoToPhotosAlbum.html) | 保存到相册   |
| scope.camera                 | [camera](https://developers.weixin.qq.com/miniprogram/dev/component/camera.html) 组件 | 摄像头       |

## 13.4、授权有效期

一旦用户明确同意或拒绝过授权，其授权关系会记录在后台，直到用户主动删除小程序。

**最佳实践**

在真正需要使用授权接口时，才向用户发起授权申请，并在授权申请中说明清楚要使用该功能的理由。

**注意事项**

1. `wx.authorize({scope: "scope.userInfo"})`，不会弹出授权窗口，请使用 [`<button>`](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
2. 需要授权 `scope.userLocation`、`scope.userLocationBackground` 时必须[配置地理位置用途说明](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission)。

## 13.5、后台定位

与其它类型授权不同的是，scope.userLocationBackground 不会弹窗提醒用户。需要用户在设置页中，主动将“位置信息”选项设置为“使用小程序期间和离开小程序后”。开发者可以通过调用[wx.openSetting](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html)，打开设置页。

![background-location](微信小程序.assets/background-location.8290c764.png)

## 13.6、小程序订阅消息

消息能力是小程序能力中的重要组成，我们为开发者提供了订阅消息能力，以便实现服务的闭环和更优的体验。

- 订阅消息推送位置：服务通知
- 订阅消息下发条件：用户自主订阅
- 订阅消息卡片跳转能力：点击查看详情可跳转至该小程序的页面

![intro](微信小程序.assets/request-subscribe-message.3851318e.jpg)

### 13.6.1、步骤一：获取模板 ID

在微信公众平台手动配置获取模板 ID：
登录 [https://mp.weixin.qq.com](https://mp.weixin.qq.com/) 获取模板，如果没有合适的模板，可以申请添加新模板，审核通过后可使用。

![intro](微信小程序.assets/subscribe-message.b562750a.jpg)

### 13.6.2、步骤二：获取下发权限

详见小程序端消息订阅接口 [wx.requestSubscribeMessage](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/subscribe-message/wx.requestSubscribeMessage.html)

### 13.6.3、步骤三：调用接口下发订阅消息

详见服务端消息发送接口 [subscribeMessage.send](https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html)

# 14、微信支付

 最常规的普通模式，适用于有自己开发团队或外包开发商的直连商户收款。 

## 14.1、开通支付流程

1.获取到小程序开发者账号后，进行微信认证。微信认证指引：[https://mp.weixin.qq.com/debug/wxadoc/introduction/#](https://mp.weixin.qq.com/debug/wxadoc/introduction/)小程序申请微信认证

2.小程序开通微信支付，即申请或复用微信支付商户号 申请完小程序后，登录小程序后台（mp.weixin.qq.com）。点击左侧导航栏的微信支付，在页面中进行开通。（开通申请要求小程序已发布上线）

![img](微信小程序.assets/chapter7_11_2.png)

点击开通按钮后，有2种方式可以获取微信支付能力，新申请微信支付商户号或绑定一个已有的微信支付商户号，请根据你的业务需要和具体情况选择，只能二选一。开通指引：http://kf.qq.com/faq/140225MveaUz161230yqiIby.html

![img](微信小程序.assets/chapter7_11_3.png)

3.商户在微信公众平台或开放平台提交微信支付申请，微信支付工作人员审核资料无误后开通相应的微信支付权限。微信支付申请审核通过后，商户在申请资料填写的邮箱中收取到由微信支付小助手发送的邮件，此邮件包含开发时需要使用的支付账户信息。

![微信审核通过邮件模板](微信小程序.assets/chapter3_1.png)

| 邮件中参数     | API参数名 | 详细说明                                                     |
| :------------- | :-------- | :----------------------------------------------------------- |
| APPID          | appid     | appid是微信小程序后台APP的唯一标识，在小程序后台申请小程序账号后，微信会自动分配对应的appid，用于标识该应用。可在小程序-->设置-->开发设置中查看。 |
| 微信支付商户号 | mch_id    | 商户申请微信支付后，由微信支付分配的商户收款账号。           |
| API密钥        | key       | 交易过程生成签名的密钥，仅保留在商户系统和微信支付后台，不会在网络中传播。商户妥善保管该Key，切勿在网络中传输，不能在其他客户端中存储，保证key不会被泄漏。商户可根据邮件提示登录微信商户平台进行设置。也可按以下路径设置：微信商户平台(pay.weixin.qq.com)-->账户设置-->API安全-->密钥设置 |
| Appsecret      | secret    | AppSecret是APPID对应的接口密码，用于获取接口调用凭证时使用。 |

开发指引**

 除被扫支付场景以外，商户系统先调用统一下单接口在微信支付服务后台生成预支付交易单，返回正确的预支付交易回话标识后再按扫码、JSAPI、APP、小程序等不同场景生成交易串调起支付,具体API接口请查看"API列表"

**注意：**
appid必须为最后拉起收银台的小程序appid；
mch_id为和appid成对绑定的支付商户号，收款资金会进入该商户号；
trade_type请填写JSAPI；
openid为appid对应的用户标识，即使用wx.login接口获得的openid

## 14.2、调起支付流程

[调用统一下单接口进行订单生成](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=9_1)

将关键信息返回给微信小程序端后使用支付接口

**wx.requestPayment(Object object)**

发起微信支付。了解更多信息，请查看[微信支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_3&index=1)

**参数**

**Object** object

| 属性      | 类型     | 默认值 | 必填 | 说明                                                         |
| :-------- | :------- | :----- | :--- | :----------------------------------------------------------- |
| timeStamp | string   |        | 是   | 时间戳，从 1970 年 1 月 1 日 00:00:00 至今的秒数，即当前的时间 |
| nonceStr  | string   |        | 是   | 随机字符串，长度为32个字符以下                               |
| package   | string   |        | 是   | 统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*** |
| signType  | string   | MD5    | 否   | 签名算法                                                     |
| paySign   | string   |        | 是   | 签名，具体签名方案参见 [小程序支付接口文档](https://pay.weixin.qq.com/wiki/doc/api/wxa/wxa_api.php?chapter=7_7&index=3) |
| success   | function |        | 否   | 接口调用成功的回调函数                                       |
| fail      | function |        | 否   | 接口调用失败的回调函数                                       |
| complete  | function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）             |

**object.signType 的合法值**

| 值          | 说明        | 最低版本 |
| :---------- | :---------- | :------- |
| MD5         | MD5         |          |
| HMAC-SHA256 | HMAC-SHA256 |          |

**示例代码**

```js
wx.requestPayment({
  timeStamp: '',
  nonceStr: '',
  package: '',
  signType: 'MD5',
  paySign: '',
  success (res) { },
  fail (res) { }
})
```

#  [<font color="#000">15、第三方平台代开发</font>]( https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Third_party_platform_appid.html ) 

小程序运营者，可以一键授权给第三方平台，通过第三方平台来完成业务。第三方平台在小程序的前后端开发上同直接开发小程序有所区别，其所拥有的各项 API 以及详细说明请查看 [代小程序实现业务](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489144594_DhNoV&token=&lang=zh_CN) ，其余部分请阅读下文。

开发第三方平台小程序具有一定的复杂性，首先需要确认三个概念：

- open3rd：第三方平台，是小程序官方认可的第三方开发商 [详情](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1419318292&token=&lang=zh_CN)
- 3rdMiniProgramAppid：第三方平台申请的并绑定在该平台上的小程序，用于开发小程序模板
- extAppid：授权给第三方平台的小程序

第三方平台相关的小程序开发需要做一些特殊的处理：

- 小程序模板的开发
- 小程序模板结合 extAppid 的开发调试
- 使用 `directCommit` 直接提交至待审核列表 [详情](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html#directCommit)

最新版本的开发工具支持第三方平台小程序的开发和预览。

## 创建项目

与开发普通小程序一致，第三方平台开发者填入相关的 3rdMiniProgramAppid ，设定项目名称和选择项目目录即可创建项目。

对于第三方平台小程序，可以在项目页卡查看到相关的 open3rd 信息以及当前的第三方的 3rdMiniProgramAppid ，如若项目配置了相关的 extAppid ，那么项目页卡中也会有相关信息。

![ext](微信小程序.assets/ext.a7c2d1f3.png)

## 小程序模板开发

与开发普通小程序一致，开发者在开发工具上开发好相关的业务逻辑之后，在项目页卡中提交预览即可以在微信中查看小程序的真实表现。

有所不同的是，第三方平台小程序的提交上传是上传至该第三方平台的 open 帐号下的模板草稿箱中，该平台的管理员需要自行对该模板进行相应的设置，更多请参考 [开放平台的文档](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489144594_DhNoV&token=&lang=zh_CN) 。

## extAppid 的开发调试

为了方便第三方平台的开发者引入 extAppid 的开发调试工作，需要引入 `ext.json` 的概念。

`ext.json` 是一个配置文件，放置在小程序项目的根目录下。

以下是一个包含了所有配置选项的 `ext.json` ：

```json
{
  "extEnable": true,
  "extAppid": "wxf9c4501a76931b33",
  "directCommit": false,
  "ext": {
    "name": "wechat",
    "attr": {
      "host": "open.weixin.qq.com",
      "users": [
        "user_1",
        "user_2"
      ]
    }
  },
  "extPages": {
    "pages/logs/logs": {
      "navigationBarTitleText": "logs"
    }
  },
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "Demo",
    "navigationBarTextStyle":"black"
  },
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "首页"
    }, {
      "pagePath": "pages/logs/logs",
      "text": "日志"
    }]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  }
}
```

`ext.json`中的配置字段分为两种

- 特有的字段
- 同 `app.json` 相同的字段

## 特有的字段

| 属性                                                         | 类型         | 必填 | 描述                     |
| :----------------------------------------------------------- | :----------- | :--- | :----------------------- |
| [extEnable](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html#extenable) | Boolean      | 是   | 配置 ext.json 是否生效   |
| [extAppid](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html#extappid) | String       | 是   | 配置 extAppid            |
| [ext](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html#ext) | Object       | 否   | 开发自定义的数据字段     |
| [extPages](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html#extpages) | String Array | 否   | 单独设置每个页面的 json  |
| [directCommit](https://developers.weixin.qq.com/miniprogram/dev/devtools/ext.html#directCommit) | Boolean      | 否   | 是否直接提交到待审核列表 |

### extEnable

`extEnable` 是一个 `Boolean` 类型的字段，用于规定当前的 `ext.json` 文件是否生效，开发者可以通过修改这个字段来开启和关闭 extAppid 的结合开发。

### extAppid

`extAppid` 是授权调试的 `AppID` ，例如开发者在此处填写的是 `wxf9c4501a76931b33` 那么在 `extEnable` 为真的情况下，后续的开发逻辑都会基于 `wxf9c4501a76931b33` 来运行。

### ext

`ext` 字段是开发自定义的数据字段，在小程序中可以通过 [wx.getExtConfigSync](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html) 或者 [wx.getExtConfig](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfig.html) 获取到这些配置信息。

例如上面的例子中，通过 [wx.getExtConfigSync](https://developers.weixin.qq.com/miniprogram/dev/api/ext/wx.getExtConfigSync.html) 就可以获得 `ext` 字段的所有配置

```json
{
  "name": "wechat",
  "attr": {
    "host": "open.weixin.qq.com",
    "users": [
      "user_1",
      "user_2"
    ]
  }
}
```

### extPages

`extPages` 是一个对象，对象中的每个 `key` 应该是该小程序模板 `app.json` 中定义的页面，每个 `key` 对应的 `value` 是 [page.json](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html#页面配置) 中所规定的各项配置。

当开发者设置这个配置以后，小程序框架会对应的修改相对应的 `page` 的配置信息。

### directCommit

`directCommit` 是一个 `Boolean` 类型的字段，用于规定当前的上传操作是否是直接上传到 extAppid 的审核列表中。

当 `directCommit` 为 `true` 真时，开发者在工具中的上传操作，会直接上传到对应的 extAppid 的审核列表，第三方平台只需要调用 `https://api.weixin.qq.com/wxa/submit_audit?access_token=TOKEN` 即可以提交审核。更多请参考 [第三方平台文档](https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN)

当 `directCommit` 为 `false` 或者没有定义时，开发者在工具中的上传操作，会直接上传到对应的草稿箱中。

*tips: 可以使用工具的命令行接口 或者 http 接口来实现自动化的代码提交审核*

### 同 `app.json` 相同的字段

当 `ext.json` 中的字段同 `app.json` 中一致时，`ext.json` 的字段会覆盖 `app.json` 中的对应字段，例如以下的 `ext.json`

```json
{
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "ext navigationBarTitleText",
    "navigationBarTextStyle":"black"
  }
}
```

那么该小程序最终的 `navigationBarTitleText` 应该是 `ext navigationBarTitleText` 。