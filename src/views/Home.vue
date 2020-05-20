<template>
  <div class="block">
    <el-carousel height="600px" interval="5000">
      <el-carousel-item>
        <h3>
          <el-image
                  style="object-fit: contain; height: 600px"
                  :src="pic1"></el-image>
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>
          <el-image
                  style="object-fit: contain; height: 600px"
                  :src="pic2"></el-image>
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>
          <el-image
                  style="object-fit: contain; height: 600px"
                  :src="pic3"></el-image>
        </h3>
      </el-carousel-item>
      <el-carousel-item>
        <h3>
          <el-image
                  style="object-fit: contain; height: 600px"
                  :src="pic4"></el-image>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
  .el-header {
    background-color: #FFFFFF;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    background-color: #001848;
    color: #FFFFFF;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #409EFF;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-carousel__item h3 {
    color: #FFFFFF;
    font-size: 14px;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #ffffff;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #ffffff;
  }

</style>

<script>
  export default {
    data() {
      return {
        id: this.$route.query.id,
        activeIndex: '1',
        url1: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3673340256,2622550361&fm=26&gp=0.jpg',
        pic1: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        pic2: 'http://attach.bbs.miui.com/forum/201306/23/110328s72xxse7lfis9fnd.jpg',
        pic3: 'http://pic1.win4000.com/wallpaper/2020-05-12/5eb9fc4606d25.jpg',
        pic4: 'http://www.mianxian.gov.cn/wcm.files/upload/CMSmxzf/image/20180303/20180303093339.jpg'
      };
    },
    activated () {
      this.mounted();
      this.select();
    },
    created() {
      this.mounted();
      //window.location.reload();
    },
    mounted: function () {
      this.id = this.$route.query.id;
    }
  }
</script>

