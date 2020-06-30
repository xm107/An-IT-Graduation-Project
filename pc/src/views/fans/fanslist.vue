<template>
  <el-card>
    <!-- <span slot="header"></span> -->
    <!-- 放置面包屑  将 面包屑给到卡片的具名header-->
        <bread-crumb slot='header'>
            <!-- 具名插槽 template不生成任何实质标签-->
            <template slot='title'>
              粉丝列表
            </template>
        </bread-crumb>

    <el-tabs>
        <div class="img-list">
          <!-- 采用v-for对list数据进行循环 -->
          <el-card class="img-card" v-for="item in list" :key="item.value">
            <!-- 放置图片 并且赋值 图片地址-->
            <img :src="item.photo" alt />
            <div class="fansname">{{item.name}}</div>
            <!-- 操作栏 可以flex布局-->
            <!-- <el-row class='operate' type='flex' align="middle" justify="space-around"> -->
            <!-- 两个图标注册点击事件  根据 数据判断 图标的颜色-->
            <el-button type="primary" round>关注</el-button>
            <!-- </el-row> -->
          </el-card>
        </div>
    </el-tabs>

    <!-- <el-row type="flex" justify="center" style="height:80px" align="middle">
       <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[1,5,10,20]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.length">
            </el-pagination>
    </el-row> -->
  </el-card>
</template>

<script>
import { getFansList } from '@/api/fanslist'
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getFansList () {
      const result = await getFansList({

      })
      // 将返回的数据 赋值到data中的数据
      this.list = result.data.results
      console.log(result)
    }
  },
  created () {
    this.getFansList()
  }
}
</script>

<style lang='less' scoped>
.img-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;

  .img-card {
    width: 220px;
    height: 240px;
    margin: 20px 40px;
    position: relative;
    padding: 20px 0;
    img {
      width: 50%;
      height: 50%;
      border-radius: 50%;
    }
    .fansname {
      margin-bottom: 10px;
    }
    .el-button {
      padding: 12px 20px;
    }
  }
}
</style>
