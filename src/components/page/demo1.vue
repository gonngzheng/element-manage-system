<template>
    <div class="12">
        <el-table
            :data="tableData"
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
            prop="adress"
            label="地址"
            show-overflow-tooltip ="true"
            >
            </el-table-column>
        </el-table>
    </div>
</template>
<script>

export default{
    data() {
        return {
            tableData: [
                {
                    date: "2020-07-01",
                    name: "王小虎",
                    adress: "浙江省杭州市上城区望潮路"
                },
                {
                    date: "2020-07-01",
                    name: "王小虎",
                    adress: "浙江省杭州市上城区望潮路"
                },
                {
                    date: "2020-07-01",
                    name: "王小虎",
                    adress: "浙江省杭州市上城区望潮路"
                },
                {
                    date: "2020-07-01",
                    name: "王小虎",
                    adress: "浙江省杭州市上城区望潮路"
                }

            ]
        }
    },
    created() {

    },
    methods: {

    }
}
</script>