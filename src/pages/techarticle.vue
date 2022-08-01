<template>
  <a-list item-layout="horizontal" :data-source="data">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <a-list-item-meta description="问题交流">
        <a slot="title" :href="item.src" target="blank">{{ item.title }}</a>
      </a-list-item-meta>
      <span class="icons">
        <a-icon type="eye" theme="filled" class="watched" />{{ looked }}
        <a-icon type="like" theme="filled" />{{ liked }}
        <a-icon type="message" />{{ commented }}
      </span>
    </a-list-item>
  </a-list>
</template>

<script>
const data = [
  {
    title: '关于vue项目的favicon图片获取失败问题(待解决)',

  },
  {
    title: '上线的网站怎么请求到自己服务器接口（Nginx+Express+Node）',
    src: "https://blog.csdn.net/qq_30907143/article/details/123921993"
  },
  {
    title: '关于vue2项目搭建的步骤',
    src: "https://blog.csdn.net/qq_30907143/article/details/123924193"
  },
    {
    title: '什么是BFC块级格式化上下文？（易懂）',
    src: "https://blog.csdn.net/qq_30907143/article/details/124083136?spm=1001.2014.3001.5502"
  },
    {
    title: '浅析JS原型 原型链',
    src: "https://blog.csdn.net/qq_30907143/article/details/124011298?spm=1001.2014.3001.5502"
  },
    {
    title: '一个简单例子快速理解闭包',
    src: "https://blog.csdn.net/qq_30907143/article/details/124125013?spm=1001.2014.3001.5502"
  },
  // {
  //   title: 'Ant Design Title 4',
  // },
];

export default {
  name: 'Article',
  data() {
    return {
      data,
      looked: 0,
      liked: 0,
      commented: 0
    };
  },
}
</script>

<style>
.icons {
  margin-right: 30px;
  margin-top: 40px;
}
</style>