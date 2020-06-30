<template>
  <el-card class="fans">
    <!-- <span slot="header"></span> -->
    <!-- 放置面包屑  将 面包屑给到卡片的具名header-->
        <bread-crumb slot='header'>
            <!-- 具名插槽 template不生成任何实质标签-->
            <template slot='title'>
              粉丝画像
            </template>
        </bread-crumb>
    <el-row>
      <el-col>
        <header class="tit">
          粉丝性别分布
          <span class="c">
            <span class="m">男 (50%)</span>
            <span class="n">女 (50%)</span>
          </span>
        </header>
        <!-- <el-progress :text-inside="true" :stroke-width="30" :percentage="50">
        </el-progress>-->
        <div class="outer">
          <div class="inner">50%</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="all">
      <header class="tit">头条粉丝</header>
      <el-col class="myLineEChart1">
        <div ref="myLineEChart1" style=" margin-left:10px; width:100%;height:350px"></div>
      </el-col>
      <el-col class="table">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="age" label="年龄" width="180"></el-table-column>
          <el-table-column prop="scale" label="粉丝占比"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <header class="tit">
          粉丝终端分布
          <span class="c">
            <span class="m">Android (35%)</span>
            <span class="n">iOS (65%)</span>
          </span>
        </header>
        <div class="outers">
          <div class="inners">35%</div>
        </div>
      </el-col>
    </el-row>
    <el-row class="all">
      <header class="tit">你的受众喜欢那些分类的内容</header>
      <el-col class="myLineEChart2">
        <div ref="myLineEChart2" style=" margin-left:10px; width:100%;height:350px"></div>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import echarts from 'echarts'
export default {
  data () {
    return {
      lineOptions: {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['<18', '18~25', '26~35', '36~45', '>45'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [40, 100, 140, 80, 40]
          }
        ]
      },
      lineOptions2: {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['c++', 'Java', 'JavaScript', 'C#', 'php'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '60%',
            data: [80, 200, 280, 160, 40]
          }
        ]
      },
      tableData: [{
        age: '<18',
        scale: '10%'
      }, {
        age: '18~25',
        scale: '25%'
      }, {
        age: '26~35',
        scale: '35%'
      }, {
        age: '36~45',
        scale: '20%'
      }, {
        age: '>45',
        scale: '10%'
      }]
    }
  },
  mounted () {
    // 基于准备好的dom，初始化echarts实例
    this.linChart = echarts.init(this.$refs.myLineEChart1) // 初始化实例
    this.linChart.setOption(this.lineOptions)
    this.linChart = echarts.init(this.$refs.myLineEChart2) // 初始化实例
    this.linChart.setOption(this.lineOptions2)
  }
}
</script>

<style lang='less' scoped>
.all {
  .myLineEChart1 {
    height: 350px;
    width: 75%;
    border: 1px solid blanchedalmond;
  }
  .myLineEChart2 {
    height: 350px;
    width: 80%;
    margin-left: 50px;
  }
  .table{
    height: 350px;
    width: 25%;
    border: 1px solid blanchedalmond;
    border-left:0;
  }
}

.tit {
  margin: 10px 0px 20px 0px;
  display: flex;
  justify-content: space-between;
}
.c {
  display: block;
  .m,
  .n {
    position: relative;
    margin-left: 20px;
    font-size: 14px;
  }
  .m::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: -15px;
    top: 6px;
    border-radius: 3px;
    background-color: blue;
  }
  .n::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: -15px;
    top: 6px;
    border-radius: 3px;
    background-color: rgb(250, 134, 101);
  }
}
.outer {
  height: 30px;
  background-color: rgb(250, 134, 101);
  border-radius: 10px;
  .inner {
    height: 30px;
    width: 50%;
    color: #fff;
    text-align: right;
    line-height: 30px;
    font-size: 14px;
    background-color: rgb(105, 180, 255);
    border-radius: 10px 0 0 10px;
  }
}
.outers {
  height: 30px;
  background-color: rgb(250, 134, 101);
  border-radius: 10px;
  .inners {
    height: 30px;
    width: 35%;
    color: #fff;
    text-align: right;
    line-height: 30px;
    font-size: 14px;
    background-color: rgb(105, 180, 255);
    border-radius: 10px 0 0 10px;
  }
}
</style>
