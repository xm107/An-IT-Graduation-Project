<template>
  <el-card>
    <!-- <span slot="header"></span> -->
    <bread-crumb slot='header'>
            <!-- 具名插槽 template不生成任何实质标签-->
            <template slot='title'>
              粉丝概况
            </template>
        </bread-crumb>
    <el-row style="margin:60px 0">
      <el-col class="block" :span="6" :offset="1">
        <span class="point"></span>
        <div class="info">
          <span>30个</span>
          <span>粉丝数</span>
        </div>
      </el-col>
      <el-col class="block" :span="6" :offset="1">
        <span class="point"></span>
        <div class="info">
          <span>22%</span>
          <span>粉丝累计阅读量</span>
        </div>
      </el-col>
      <el-col class="block" :span="6" :offset="1">
        <span class="point"></span>
        <div class="info">
          <span>1.2元</span>
          <span>粉丝收益</span>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin:60px 0">
      <header>头条粉丝对编程语言的喜爱情况</header>
      <div ref="myLineEChart" style="width:100%;height:400px"></div>
    </el-row>
   <el-table
    :data="tableData"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="自我简介">
    </el-table-column>
  </el-table>
  </el-card>
</template>

<script>
import echarts from 'echarts'

export default {
  data () {
    return {
      selectType: 'today',
      lineOptions: {
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['c#', 'php', 'JavaScript', 'phython', 'vue', 'react', 'c++']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [100, 100, 300, 300, 400, 800, 1000],
            type: 'line',
            areaStyle: {}
          }
        ]
      },
      linChart: null,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '生命太过短暂，今天放弃了明天不一定能得到。'
      }, {
        date: '2016-10-02',
        name: '张小侠',
        address: '所有的胜利，与征服自己的胜利比起来，都是微不足道'
      }, {
        date: '2017-03-04',
        name: '李木子',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2017-03-06',
        name: '张长弓',
        address: '攀登者智慧和汗水，构思着一首信念和意志的长诗。'
      }, {
        date: '2017-09-08',
        name: '今夏',
        address: '生命中最难的阶段不是没有人懂你，而是你不懂你自己。'
      }, {
        date: '2019-01-06',
        name: '易烊千玺',
        address: '有时候，坚持了你最不想干的事情之后，会得到你最想要的东西。'
      }, {
        date: '2020-03-07',
        name: '张杰',
        address: '时间告诉我，无理取闹的年龄过了，该懂事了。'
      }]
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    this.linChart = echarts.init(this.$refs.myLineEChart) // 初始化实例
    this.linChart.setOption(this.lineOptions)
  }
}
</script>

<style lang="less" scoped>
.block {
  background-color: #f8f8f8;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  .point {
    background-color: red;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: inline-block;
  }
  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    span {
      font-size: 14px;
    }
    span:nth-child(1) {
      font-size: 25px;
    }
  }
}
</style>
