<template>
    <div id="Place">
        <div  style="height: 600px" :style="backgroundDiv">
            <div style="height: 30px"></div>
            <el-row :gutter="30">
                <el-col :span="20" :offset="2">
                    <el-card :body-style="{ padding: '10px' }" style="opacity: 0.95">
                        <div style="padding-left: 20px">
                            <i class="el-icon-location-outline"> 推荐目的地</i>
                        </div>
                    </el-card>
                    <div style="height: 10px"></div>
                    <el-row :gutter="30">
                        <el-col :span="6" v-for="place in placeData" :key="place" style="padding: 15px">
                            <el-card :body-style="{ padding: '10px' }" style="opacity: 0.95" shadow="hover">
                                <el-image
                                        style="height: 151px; width: 268px"
                                        :src="place.placeUrl"
                                        fit = 'fill'></el-image>
                                <div style="text-align: center; padding:8px">
                                    <span>{{place.placeName}}</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <div style="height: 10px"></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.query.id,
                cluster: 'test',
                placeData: [{
                    placeName: '杭州',
                    placeUrl: require('../../assets/hangzhou.jpg')
                }, {
                    placeName: '张家界',
                    placeUrl: require('../../assets/zhangjiajie.jpg')
                }, {
                    placeName: 'test',
                    placeUrl: require('../../assets/mountain.jpeg')
                }, {
                    placeName: 'test',
                    placeUrl: require('../../assets/mountain.jpeg')
                }, {
                    placeName: 'test',
                    placeUrl: require('../../assets/mountain.jpeg')
                }, {
                    placeName: 'test',
                    placeUrl: require('../../assets/mountain.jpeg')
                }, {
                    placeName: 'test',
                    placeUrl: require('../../assets/mountain.jpeg')
                }, {
                    placeName: 'test',
                    placeUrl: require('../../assets/mountain.jpeg')
                }
                ],
                backgroundDiv: {
                    backgroundImage:'url(' + require('../../assets/mountain.jpeg') + ')',
                    backgroundRepeat:'non-repeat',
                    backgroundSize:'100% 100%'
                }
            }
        },
        activated () {
            this.mounted();
            this.select();
        },
        created() {
            this.mounted();
        },
        mounted: function () {
            this.id = this.$route.query.id;
        }
    }
</script>

<style scoped>

</style>