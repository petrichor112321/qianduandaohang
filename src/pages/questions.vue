<template>
<div>
    <!-- 评论部分 -->
      <a-comment>
    <template slot="actions">
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <a-icon
            type="dislike"
            :theme="action === 'disliked' ? 'filled' : 'outlined'"
            @click="dislike"
          />
        </a-tooltip>
        <span style="padding-left: '8px';cursor: 'auto'">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">回复</span>
      <span>{{datetime}}</span>
    </template>
    <a slot="author">晚风</a>
    <a-avatar
      slot="avatar"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      alt="Han Solo"
    />
    <p slot="content">
      欢迎大家在这里提出宝贵意见，一起交流，一起学习。
    </p>
        

  </a-comment>
<!-- 添加评论 -->
  <div>
    <a-list
      v-if="comments.length"
      :data-source="comments"
      :header="`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`"
      item-layout="horizontal"
    >
      <a-list-item slot="renderItem" slot-scope="item, index">
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </a-list>
    <a-comment>
        <!-- 头像 -->
      <a-avatar
        slot="avatar"
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="4" :value="value" @change="handleChange" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
            发送评论
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</div>


</template>

<script>
export default {
    name:'Question',
     data() {
    return {
      comments: [],
      submitting: false,
      value: '',
       likes: 0,
      dislikes: 0,
      action: null,
      datetime:''
    };
  },
  methods: {
    //获取当前时间
    getDate(){
      var aData = new Date();
    this.datetime =aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate()+"-"+ aData.getHours()+":"+ aData.getMinutes();
    // console.log(this.value) //2019-8-20 
    
    },
       //获取输入框输入
    handleChange(e) {
      this.value = e.target.value;
    },
    //回复按钮
    handleSubmit() {
      //判断有无输入
      if (!this.value) {
        return;
      }
      //每次点击获取当前时间
      this.getDate()
      this.submitting = true;
      setTimeout(() => {
        this.submitting = false;
        this.comments = [
          {
            author: '晚风',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: this.value,
            //获取当前时间
            datetime: this.datetime,
          },
          ...this.comments,
        ];
        //点击发送后清空输入框数据
        this.value = '';
      }, 1000);
    },
    //点赞功能
     like() {
      this.likes = 1;
      this.dislikes = 0;
      this.action = 'liked';
    },
    dislike() {
      this.likes = 0;
      this.dislikes = 1;
      this.action = 'disliked';
    },
  },
}
</script>

<style>

</style>