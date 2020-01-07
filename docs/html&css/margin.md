---
sidebar: true
---

# margin:auto 为什么可以实现垂直居中？

### margin概念
margin属性为给定元素设置所有四个（上下左右）方向的外边距属性。这是四个外边距属性设置的简写。四个外边距属性设置分别是：margin-top，margin-right，margin-bottom和margin-left。指定的外边距允许为负数。
margin的top和bottom属性对非替换内联元素无效，例如span和 code。

### 实现垂直居中
想要实现垂直方向的居中可以用绝对定位：
```javascript
div  {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
```

### 为什么能实现垂直居中
块状水平元素，如div元素（下同），在默认情况下（非浮动、绝对定位等），水平方向会自动填满外部的容器；如果有margin-left/margin-right,padding-left/padding-right,border-left-width/border-right-width等，实际内容区域会响应变窄。
但是，当一个绝对定位元素，其对立定位方向属性同时有具体定位数值的时候，流体特性就发生了。具有流体特性绝对定位元素的margin:auto的填充规则和普通流体元素一模一样，含有以下特性：
- 如果一侧定值，一侧auto，auto为剩余空间大小；
- 如果两侧均是auto, 则平分剩余空间