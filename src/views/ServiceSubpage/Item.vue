<template>
    <div id="Service">
        <div  style="height: 600px" :style="backgroundDiv">
            <div style="height: 30px"></div>
            <el-row :gutter="30">
                <el-col :span="20" :offset="2">
                    <el-card :body-style="{ padding: '10px' }" style="opacity: 0.95">
                        <div style="padding-left: 20px">
                            <i class="el-icon-goods"> 推荐商品</i>
                        </div>
                    </el-card>
                    <div style="height: 10px"></div>
                    <el-row :gutter="30">
                        <el-col :span="6" v-for="item in itemData" :key="item" style="padding: 15px">
                            <el-card :body-style="{ padding: '10px' }" style="opacity: 0.95" shadow="hover">
                                <el-image
                                        style="height: 151px; width: 268px"
                                        :src="item.picUrl"
                                        fit = 'fill'></el-image>
                                <div style="text-align: center; padding:8px">
                                    <span style="padding: 10px">{{'商品名称:' + item.itemName}}</span>
                                    <span style="padding: 10px">{{'商品价格:' + item.itemPrice}}</span>
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


<style>

</style>

<script>
    export default {
        data() {
            return {
                id: this.$route.query.id,
                cluster: 'test',
                itemData: [{
                    itemID: 'test',
                    itemName: 'test',
                    itemPrice: 'test',
                    picUrl: require('../../assets/mountain.jpeg')
                }, {
                    itemID: 'test',
                    itemName: 'test',
                    itemPrice: 'test',
                    picUrl: require('../../assets/mountain.jpeg')
                }, {
                    itemID: 'test',
                    itemName: 'test',
                    itemPrice: 'test',
                    picUrl: require('../../assets/mountain.jpeg')
                }, {
                    itemID: 'test',
                    itemName: 'test',
                    itemPrice: 'test',
                    picUrl: require('../../assets/mountain.jpeg')
                }, {
                    itemID: 'test',
                    itemName: 'test',
                    itemPrice: 'test',
                    picUrl: require('../../assets/mountain.jpeg')
                }, {
                    itemID: 'test',
                    itemName: 'test',
                    itemPrice: 'test',
                    picUrl: require('../../assets/mountain.jpeg')
                }, {
                    itemID: 'test',
                    itemName: 'test',
                    itemPrice: 'test',
                    picUrl: require('../../assets/mountain.jpeg')
                }, {
                    itemID: 'test',
                    itemName: 'test',
                    itemPrice: 'test',
                    picUrl: require('../../assets/mountain.jpeg')
                }],
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