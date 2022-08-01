<template>
  <div class="container">
    <div class="main">
      <a-spin size="large" :spinning="spinning">
        <!-- 搜索标签 -->
        <div class="search">
          <div class="searchButton">
            <span @click="sendVal">
              <a-button :class="{ active: ischecked == 1 }" @click="getTools"
                >实用工具</a-button
              >
              <a-button
                :class="{ active: ischecked == 2 }"
                @click="getcomponentGallery"
                >组件库</a-button
              >
              <a-button :class="{ active: ischecked == 4 }" @click="getPreviews"
                >界面设计</a-button
              >
            </span>
            <span id="edit" v-if="isadmin == '62d66685107db005b99e6134'">
              <!-- 编辑部分 -->
              <a-button type="primary" @click="() => (modal2Visible = true)">
                新增
              </a-button>
              <a-button type="danger" @click="delItem"> 删除 </a-button>
            </span>
          </div>
          <div class="searchCard">
            <span>当前标签：{{ currentSearchButton }}</span>
            <span>共有28条数据</span>
          </div>
        </div>
        <!-- 主体部分 -->
        <!-- 卡片区域 -->
        <div class="items" v-show="isshow">
          <ul class="cards">
            <li
              v-for="(card, id) in ToolsDetail[0]"
              :key="card.id"
              style="position: relative"
            >
              <!-- 卡片顶部部分 -->
              <div>
                <div class="title">
                  <div class="favicon"><img :src="card.faviconUrl" /></div>
                  <strong @click="gotoDetail(card)">{{
                    card.sourceName
                  }}</strong>
                  <a-button
                    class="hidden-xs hidden-sm hidden-md delbutton"
                    type="danger"
                    v-if="delbtnvusible == true"
                    @click="delbtn(card)"
                    >删除</a-button
                  >
                </div>
                <!-- 卡片介绍部分 -->
                <div class="content" @click="gotoDetail(card)">
                  {{ card.title }}
                </div>
              </div>
              <!-- 点赞 分享按钮部分 -->
              <div class="utils">
                <span @click.once="like(id, card)">
                  <i
                    class="iconfont icon-yidianzan"
                    ref="likefont"
                    @click.once="info"
                  >
                  </i>
                  <i ref="likes">{{ card.liked }}</i>
                </span>
                <span @click="copyLink(card.URL)"
                  ><a-icon type="share-alt"
                /></span>
              </div>
            </li>
          </ul>

          <!-- 分页器部分 -->
          <!-- <div class="pagnition">
            <a-pagination v-model="current" :total="50" show-less-items />
          </div> -->
        </div>
      </a-spin>
    </div>

    <!-- 新增数据对话框 -->
    <a-modal
      v-model="modal2Visible"
      title="新增数据"
      centered
      cancelText="取消"
      okText="添加"
      @ok="additem"
    >
      <!-- 表单 -->
      <a-form-model layout="inline" :model="newitem" class="labelcol">
        <a-row>
          <a-col :span="12">
            <a-form-item label="编 号">
              <a-input
                v-model="newitem.id"
                placeholder="输入编号"
                style="width: 160px"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="名 称">
              <a-input
                v-model="newitem.sourceName"
                placeholder="输入资源名称"
                style="width: 150px"
              >
                <a-icon
                  slot="prefix"
                  type="user"
                  style="color: rgba(0, 0, 0, 0.25)"
                />
              </a-input>
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-model-item label="官网链接">
          <a-input v-model="newitem.URL" type="text" placeholder="输入图标链接">
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item label="图标链接">
          <a-input
            v-model="newitem.faviconUrl"
            type="text"
            placeholder="输入官网链接"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            />
          </a-input>
        </a-form-model-item>
        <a-form-model-item label="简  介">
          <a-textarea
            v-model="newitem.title"
            placeholder="输入资源简介"
            :auto-size="{ minRows: 3, maxRows: 5 }"
            style="width: 390px"
          />
        </a-form-model-item>
      </a-form-model>
    </a-modal>

    <!-- 底部 -->

    <footer>
      <div class="footer">
          <div class="conauthor">
          <a-popover>
            <template slot="content">
              <div>
                <img src="../images/erweima.png" style="width: 50%" />
              </div>
            </template>
            <a-button> 联系作者 </a-button>
          </a-popover>
          <a-popover>
            <template slot="content">
              <span>本网站资源均收集与互联网，仅用于交流学习，侵权必删</span>
            </template>
            <a-button> 免责声明 </a-button>
          </a-popover>
        </div>
        <div id="footerBox">
          ©2022<a title="站长晚风">&amp;晚风</a><span> 丨 </span>
          <span
            ><a
              href="https://beian.miit.gov.cn"
              title="工业和信息化部域名信息备案管理系统"
              target="_blank"
              >晋ICP备2022004095号</a
            >丨
          </span>
          <span><a title="关于「前端导航」">关于</a>丨 </span>
        </div>
        <div id="browsed">
          <a-icon type="eye" theme="filled" />本站累计浏览量：{{ browsed }}
        </div>
      
      </div>
    </footer>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import _ from 'lodash'
export default {
  beforeMount() {
    document.querySelector('body').setAttribute('style', 'background:#f0f2f5');
  },
  name: 'Sources',
  data() {
    return {
      currentSearchButton: '实用工具',
      ischecked: 1,
      spinning: true,
      //控制主体部分是否显示
      isshow: false,
      val: '',
      hasliked: false,
      modal2Visible: false,
      delbtnvusible: false,
      newitem: {
        id: '',
        URL: '',
        faviconUrl: '',
        sourceName: '',
        title: '',
        liked: 0
      },
      current: 1
    };
  },
  mounted() {
    //调用加载函数
    this.refresh()
    this.$store.dispatch('getbrowsed')
    // console.log(typeof (this.$store.state.sources.ToolsDetail));
  },
  computed: {
    ...mapGetters(['ToolsDetail']),
    // sourceInfo() {
    //   return this.sourceUrl.ToolsourceInfo || [];
    // }
    // ...mapState(['sourceUrl']) 记录此处错误，sourceUrl中的state需要通过state.sources.sourceUrl取到 当前所取得是大仓库的state
    // total() {
    //   return this.$store.state.sources.total
    // }
    isadmin() {
      return sessionStorage.getItem('ID')
    },
    browsed() {
      return this.$store.state.sources.browsed
    }
  },
  methods: {
    //请求仓库+服务器 默认页面只获取工具网站的数据
    getData() {
      this.$store.dispatch('getToolsDetail');
    },
    //获取当前点击标签
    sendVal(event) {
      this.currentSearchButton = '';
      // console.log(event.target.innerText);
      this.currentSearchButton = event.target.innerText;
    },
    //跳转页面
    gotoDetail(card) {
      window.open(`${card.URL}`)
    },
    //请求到数据再调用加载动画
    async refresh() {
      try {
        await this.$store.dispatch('getToolsDetail');
        //1秒之后加载完成
        this.spin()
      } catch (error) {
        alert(error.message)
      }
      // 记录此处问题 未请求到数据不加载
    },
    spin() {
      setTimeout(() => {
        this.spinning = false;
        //显示主体内容
        this.isshow = true;
      }, 1000);
    },
    //点赞功能
    like(index, card) {
      this.$refs.likefont[index].style.color = '#d81e06'
      //发请求修改数据库点赞数
      // this.$store.dispatch('ChangeLiked', { id: card._id, liked: card.liked })
      this.$store.dispatch('ChangeLiked', { _id: card._id, id: card.id })
      //前端实现假点赞 实际数据库已经修改
      const likes = this.$refs.likes[index].innerText
      this.$refs.likes[index].innerText = parseInt(likes) + 1
    },
    info() {
      this.$message.info('点赞成功，觉得有用就分享一下吧~');
    },
    copyLink(URL) { // 复制链接  val 就是你需要复制的链接
      this.$copyText(URL).then(e => {
        this.$message.info('复制成功！快去分享吧~')
      }, e => {
        this.$message.info('复制失败！')
      })
    },
    async additem() {
      if (this.newitem.id && this.newitem.URL && this.newitem.faviconUrl && this.newitem.sourceName && this.newitem.title) {
        await this.$store.dispatch('additem', this.newitem)
        setTimeout(() => {
          this.$message.success('新增数据成功!')
          this.modal2Visible = false
          if (this.ischecked == 1) {
            this.getData()
          } else if (this.ischecked == 2) {
            this.$store.dispatch('getComponentGallery')
          } else {
            this.$store.dispatch('getViewDesign')

          }

        }, 500);
      } else {
        this.$message.error('请正确输入！')
      }
    },
    delItem() {
      this.delbtnvusible = !this.delbtnvusible
    },
    async delbtn(card) {
      await this.$store.dispatch('removeitem', { delid: card._id, id: card.id })
      this.$message.success('删除成功!')
      if (this.ischecked == 1) {
        this.getData()
      } else if (this.ischecked == 2) {
        this.$store.dispatch('getComponentGallery')
      } else {
        this.$store.dispatch('getViewDesign')

      }
    },
    //实现防抖
    getTools: _.debounce(function () {
      this.spinning = true
      this.isshow = false;
      this.refresh()
      this.ischecked = 1;
    }, 0),
    getcomponentGallery: _.debounce(function () {
      const gallery = this.$store.dispatch('getComponentGallery')
      this.spinning = true
      this.isshow = false;
      if (gallery) {
        this.spin()
      }
      this.ischecked = 2;
    }, 0),
    getPreviews: _.debounce(function () {
      const viewdesign = this.$store.dispatch('getViewDesign')
      this.spinning = true
      this.isshow = false;
      if (viewdesign) {
        this.spin()
      }
      this.ischecked = 4;
    }, 0),

  }
}
</script>

<style scoped>
/* 媒体查询 */
@media screen and (max-width: 767px) {
  .items {
    font-size: 13px;
  }
  .cards {
    grid-template-columns: 1fr 1fr !important;
  }
}
body {
  background-color: #f0f2f5;
}
.main {
  height: 100%;
}
.cards {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 1%;
}
.items li {
  list-style: none;
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  transition: box-shadow 0.3s, border-color 0.3s;
  padding: 0 10px;
}
ul {
  padding-inline-start: 0px !important;
}
.items li:hover {
  border-color: transparent;
  box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%),
    0 5px 12px 4px rgb(0 0 0 / 9%);
  cursor: pointer;
}
.favicon {
  width: 32px;
  height: 32px;
  margin-right: 5px;
}
.favicon img {
  width: 100%;
  height: 100%;
}
.title {
  display: flex;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid #e8e8e8;
}
.content {
  height: 90px;
  padding: 10px 0;
}
.title:hover {
  color: #1890ff;
}
.utils {
  display: flex;
  justify-content: space-around;
  height: 50px;
  padding: 10px 0;
  border-top: 1px solid #e8e8e8;
}
.utils span {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.utils span:nth-child(1) {
  border-right: 1px solid #e8e8e8;
}
.ant-card-hoverable {
  transition: box-shadow 0.3s, border-color 0.3s;
}
.searchCard {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  padding: 0 20px;
  background: white;
  margin-bottom: 10px;
  border-radius: 10px;
}
.searchButton {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 10px;
}
.active {
  background-color: #1890ff;
  color: #ffffff;
}
.ant-btn {
  margin-right: 3px;
}
.items span:hover {
  color: #1890ff;
}
.a-spin {
  margin: 0 auto;
}
.conauthor {
  margin: 0 auto;
  margin-top: 5%;
}
.pagnition {
  margin-top: 10%;
  display: flex;
  justify-content: center;
}
.delbutton {
  position: absolute;
  right: 5%;
  width: 20%;
  height: 15%;
  text-align: center;
  font-size: 12px;
}
.footer {
  width: 300px;
  margin: 0 auto;
}
#footerBox {
  display: flex;
  justify-content: center;
}
#browsed {
  display: flex;
  justify-content: center;
  align-items: center;
}
#footerBox a {
  color: #606672;
}
#footerBox a:hover {
  color: #0099ff;
}
.conauthor{
  display: flex;
  justify-content: center;
}
footer{
  margin-top: 5%;

}
</style>
