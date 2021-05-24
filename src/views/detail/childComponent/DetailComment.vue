<template>
  <div class="detail_comment">
    <div class="comment_rate">
      <a href="">
        评价<span>({{getGoodsCmtN}})</span>
        <span class="rate">好评率 {{getGoodsRate}}</span>
      </a>
    </div>
    <div class="comment_tag">
      <span class="goods_tag" v-for="(tag, index) in getGoodsTag" :key="index">{{tag}}</span>
    </div>
    <div class="comment_bar">
      <ul class="comment_list">
        <li v-for="(comment, index) in getCommentList" :key="index">
          <div class="cmt_user">
            <img class="avatar" src="~assets/image/detail/avatar.png">
            <span class="user_name">{{comment.username}}</span>
            <img class="star" v-for="(index) in comment.starNum" src="~assets/image/detail/star.png" :key="index">
            <span class="cmt_time">{{comment.time}}</span>
          </div>
          <p class="cmt_cnt">{{comment.content}}</p>
        </li>
      </ul>
      <div class="comment_more"><a href=""><span>查看更多评论</span></a></div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "DetailComment",
  props: {
    goodsCmt: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    isDataGetted() {
      //由于是异步请求数据，需要先判断以下数据是已经返回，vue不会等数据请求完毕再传入
      //（之前一直忽略了这一点），主要是之前都是传数组使用in 或者隔代传（隔代传时间长点，可能数据就请求到了）
      return Object.keys(this.goodsCmt).length ? true : false;
    },
    getGoodsCmtN() {
      return this.isDataGetted ? 
              this.goodsCmt.num > 99 ? '99+' : this.goodsCmt.num+''
              :'0';
    },
    getGoodsRate() {
      return this.isDataGetted ? this.goodsCmt.rate : '100%';
    },
    getGoodsTag() {
      return this.isDataGetted ? this.goodsCmt.tags.map((tag) => {
        return tag.name + '(' + tag.num + ')'
      }) : [];
    },
    getCommentList() {
      return this.isDataGetted ? this.goodsCmt.cmt_list : [];
    }
  },
}
</script>
  
<style scoped>
  .detail_comment {
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 5% 5% 0 0;
    
    background-color: #fff;
  }
  .comment_rate a::before {
    content: " ";
    margin-right: 2px;
    width: 5px;
    border: 1px red solid;

    background-color: red;
  }
  .comment_rate a{
    color: black;
    font-size: 16 px;
    font-weight: bold;
    line-height: 30px;
  }
  .comment_rate a span {
    font-weight: normal;
    font-size: 10px;
    color: grey;
  }
  span.rate {
    float: right;
  }
  .rate::after {
    padding-left: 5px;

    content: ">";
    color: black;
    font-size: 16px;
  }
  .comment_tag {
    padding: 3px 3px 0 0;
  }
  .comment_tag span {
    margin: 0 10px 10px 0;
    width: 30%;
    padding: 0 5px;
    border-radius: 15px;

    text-align: center;
    line-height: 30px;
    font-size: 12px;
    color: black;
    background-color: #fae3e3;

    display: inline-block;
  }
  .comment_list {
    list-style: none;
  }
  .comment_list li {
    padding: 10px 0;
  }
  .user_name {
    margin-right: 5px;
  }
  img.avatar {
    height: 16px;
    width: 16px;
  }
  img.star {
    height: 10px;
    width: 10px;
  }
  .cmt_time {
    font-size: 10px;
    color: grey;
    
    float: right;
  }
  .cmt_user {
    color: black;
  }
  .cmt_cnt {
    margin: 20px 0;

    color: black;
    font-size: 14px;
  }
  .comment_more {
    text-align: center;
    line-height: 30px;
  }
  .comment_more span {
    padding: 5px;
    border-radius: 15px;
    border: 1px solid rgb(189, 186, 186);

    font-size: 10px;
  }
</style>