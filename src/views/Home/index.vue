<template>
  <div class="app-home">
    <!-- <div>
      欢迎使用
      <Upload :before-upload="handleUpload" action="//jsonplaceholder.typicode.com/posts/">
        <Button icon="ios-cloud-upload-outline">Select the file to upload</Button>
      </Upload>
      <Divider />

      <Select v-model="current" style="width: 200px">
        <Option v-for="item in directoryList" :key="item.value" :value="item.label">{{
          item.label
        }}</Option>
      </Select>

    </div>
    <div class="content">
      <Button>上一章</Button>
      <div class="list">
        <p v-for="it in currentTxt" :key="it">{{ it }}</p>
      </div>
      <Button>下一章</Button>
    </div> -->
    <input type="button" value="提交">
    <button>提交</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      directoryList: [],
      current: 0,
      allTxt: []
    }
  },
  computed: {
    currentTxt() {
      if (this.current) {
        const begin = this.allTxt.indexOf(this.current)
        const next = this.directoryList.findIndex(it => it.label === this.current) + 1
        const end = this.allTxt.indexOf(this.directoryList[next].label)
        const target = this.allTxt.filter((it, ind) => {
          return ind > begin && ind < end
        })
        return target
      } else {
        return []
      }
    }
  },
  mounted() {},
  methods: {
    handleUpload(file) {
      this.handleGetTxtGB2312(file)
      return false
    },
    handleGetTxtGB2312(file) {
      const reader = new FileReader() // 读取TXT起重要作用的
      reader.readAsText(file, 'GB2312')
      reader.onload = (oFREvent) => {
        const pointsTxt = oFREvent.target.result
        const isRightTxt = pointsTxt.includes('作者')
        if (!isRightTxt) {
          this.handleGetTxtUTF8(file)
        } else {
          this.handleFormat(pointsTxt)
        }
      }
      reader.onerror = (error) => {
        console.log('error', error) // 获取到的TXT文件
      }
    },
    handleGetTxtUTF8(file) {
      const reader = new FileReader() // 读取TXT起重要作用的
      reader.readAsText(file, 'unf8')
      reader.onload = (oFREvent) => {
        const pointsTxt = oFREvent.target.result
        this.handleFormat(pointsTxt)
      }
      reader.onerror = (error) => {
        console.log('error', error) // 获取到的TXT文件
      }
    },
    handleFormat(txt) {
      this.allTxt = txt.split('\r\n')
      const directoryList = txt.match(/第(\S*)章/g)
      const theLast = directoryList.at(-1).length - 2
      this.directoryList = [...new Set(directoryList)]
        .filter((it) => it.length <= theLast && !it.includes('，'))
        .map((item) => {
          return {
            value: item,
            label: this.allTxt.find((it) => it.includes(item))
          }
        })
    },
    handleCurrentTxt(txt) {}
  }
}
</script>
<style lang="less" scoped>
.app-home{
  // height: 100%;
  // width: 100%;
  // display: flex;
  .content{
    flex: 1;
    overflow: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .list{
      width: 400px;
      height: 600px;
      overflow: auto;
      border: 1px solid var(--primary-color);
    }
  }
}
</style>
