display属性的值和介绍
1.none 关闭一个元素的显示，对布局没有影响，后代也不显示
2.inline 该元素生成一个或者多个行内元素盒
3.block 该元素生成一个元素盒
4.list-item 该元素生成一个容纳内容和单独的列表行内元素盒的块元素盒
5.inline-block 该元素生成一个块元素盒，该块状盒随着周围内容流动，如同他是一个单独的行内盒子
6.tabel 该元素的作用就像tabel元素，定义了一个块盒子
7.inline-tabel 本身是块盒子，但是可以随内容流动
8.flex  （css3） 伸缩盒模型， 块级元素，但是拥有独立的渲染上下文
9.inline-flex （css3) 伸缩盒模型， 行内元素，拥有独立的渲染上下文
10.grid 网格，栅格模型， 表现的像块级元素，但是根据栅格模型的规则渲染
11.inline-grid, 栅格模型， 表现的像行级元素，但是根据栅格模型的规则渲染


<!--响应式布局的我方法-->
核心是利用css3的媒体查询规则，利用一套样式表，来定义设备的表现方式。
成为响应式布局的条件
1.网站必须建立灵活的网格基础
2.引用到网站的图片必须是可伸缩的
3.不同的显示风格，需要通过在Media Query上设计不同的样式

响应式设计的术语
1.流体网格
    它参考了流体设计中的网格系统，将每个网格格子使用百分比单位来控制网格大小，
它的好处是让网格大小随时根据屏幕尺寸大小做出相应的比例缩放
2.弹性图片
    是指不给图片设置固定的尺寸，而是根据流体网格进行缩放，用于适应各种各种网格的尺寸
    img{ max-width ： 100%}
3.媒体查询
@media screen and (max-width : 900px){

}
@media screen and (min-width : 600px) and (max-width : 900px){

}
@meida not print and (max-width : 1200px){

}
@media only print and (max-width : 1200px){

}

<!--boxx-sizing-->
事先定义盒模型的尺寸解析方式
box-sizing : content-box | border-box | inherit
content-box : 让元素维持w3c的标准盒模型。element height/width = border + padding + height/width;
box-sizing  : 让元素维持IE中传统的盒模型。元素的宽度和高度等于 元素内容的宽度和高度。
inherit     ： 继承父元素的盒模型方式。

<!--css3动画-->
animation : 
1.animation-name : 动画名称
2.animation-duration ： 动画播放时间
3.animation-timing-function : 动画的播放方式
4.animation-delay ： 动画的播放开始时间
5.animation-iteration-count ： 动画循环播放的次数
6.animation-direction : 动画播放的方向
7.animation-play-state : 动画播放的状态
8.animation-fill-mode : 动画的时间外属性

@keyframe  
@keyframe name{

}

动画名称指向关键帧名称，关键帧的单位只接受百分比值。


<!--移动端调试方法-->
安卓机器 
1.pc，mobile端同时拥有最新版的chrome浏览器
2.数据线连接手机和电脑
3.电脑端chrome地址栏输入chrome://inspect/#devices 或者 设置选项 => 更多工具 => 检查设备 => 点击inspect

苹果机器
1.手机端和苹果电脑端的Safari浏览器
2.数据线连接电脑
3.手机 设置=> Safari => 高级 => web检查器打开
4.Mac  偏好设置 => 高级 => 开发勾选


<!--移动端微信兼容性问题-->
1.当我们需要监听scroll事件时候，安卓和苹果中的微信处理该事件是不同的，
安卓是实时的计算scrollTop的位置，苹果是在手指离开屏幕，滚动条不在滚动时候
计算scrollTop位置，这在项目需要实时计算scroll值得时候就会有问题。需要我们
改变思路。
2.有一些css只有添加了浏览器前缀时候才会生效，这可以通过gulp或者webpack或者
其他工具实现
3.

