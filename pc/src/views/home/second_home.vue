<template>
  <!-- 二级路由的默认组件 -->
  <div class="second-home">
    <!-- 幻灯片 -->
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in list" :key="item">
         <img :src="item" alt="">
      </el-carousel-item>
    </el-carousel>

    <el-calendar class="cal">
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>

  </div>
</template>

<script>
// 引入图表模板
// 图表本身是用canvas实现的

export default {
  data () {
    return {
      list: [
        'http://attach.bbs.miui.com/forum/201311/17/174124tp3sa6vvckc25oc8.jpg',
        'http://attach.bbs.miui.com/forum/201311/07/092441ln1zfzdqf92ded65.jpg',
        'http://bbsfiles.vivo.com.cn/vivobbs/attachment/forum/201601/24/175433rossj7cn74vksn4p.jpg',
        'http://pic1.win4000.com/wallpaper/b/55597435bb036.jpg']
    }
  }
}
</script>

<style lang='less'>
.second-home {
  /* calc 计算的意思 在css中计算数值 用法  calc ( 四则运算  ) 变量之间 和运算符之间一定要有空格 */
  height: calc(100vh - 60px);
  background-size: cover;
  // background-image: url("../../assets/img/222.jpg");
  background-color: rgb(230, 225, 225);
img{
  width: 100%;
  height: 100%;
}
  .is-selected {
    color: rgb(28, 48, 56);
  }
  .cal{
    // width: 500px;
    height: 600px;
  }
}

</style>
