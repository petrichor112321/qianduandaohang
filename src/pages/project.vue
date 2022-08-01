<template>
  <div>
    <a-collapse default-active-key="1" :bordered="false">
      <template #expandIcon="props">
        <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1" header="前端资源分享网站(2022.4-2022.5)" :style="customStyle">
        <p>
          在线网址：<a href="http://front-end.site" target="blank"
            >https://front-end.site</a
          >
          <a-icon type="github" style="margin-left: 20px" />Github：<a
            href="http://front-end.site"
            target="blank"
            >https://front-end.site</a
          >
        </p>
        <a-carousel arrows dots="false">
          <div
            slot="prevArrow"
            slot-scope="props"
            class="custom-slick-arrow"
            style="left: 10px; zindex: 1"
          >
            <a-icon type="left-circle" />
          </div>
          <div
            slot="nextArrow"
            slot-scope="props"
            class="custom-slick-arrow"
            style="right: 10px"
          >
            <a-icon type="right-circle" />
          </div>
          <div><img src="../assets/1.png" alt="" /></div>
          <div><img src="../assets/2.png" alt="" /></div>
          <!-- <div><img src="../assets/" alt=""></div>
    <div><img src="../assets/" alt=""></div> -->
        </a-carousel>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="商城前台项目(2022.3-2022.4)" :style="customStyle">
        <p>
          在线网址：<a href="http://front-end.site:8088" target="blank"
            >https://front-end.site:8088</a
          >
        </p>
         <a-carousel arrows dots="false">
          <div
            slot="prevArrow"
           
            class="custom-slick-arrow"
            style="left: 10px; zindex: 1"
          >
            <a-icon type="left-circle" />
          </div>
          <div
            slot="nextArrow"
            slot-scope="props"
            class="custom-slick-arrow"
            style="right: 10px"
          >
            <a-icon type="right-circle" />
          </div>
          <div><img src="../assets/3.png" alt="" /></div>
          <div><img src="../assets/4.png" alt="" /></div>
          <div><img src="../assets/5.png" alt="" /></div>
        </a-carousel>
      </a-collapse-panel>
      <a-collapse-panel
        key="3"
        header="后台用户信息管理系统(2022.6-2022.7)"
        :style="customStyle"
      >
        <img src="../assets/jieshao.png" alt="">
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
export default {
  name: 'Project'
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
.ant-carousel >>> .slick-slide {
  text-align: center;
  height: 550px;
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: rgb(134, 53, 53);

  opacity: 0.5;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>