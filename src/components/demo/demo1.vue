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
            :show-overflow-tooltip ="true"
            >
            </el-table-column>
        </el-table>

        <el-table
            :data="tableData1"
            style="width: 100%;margin-bottom: 20px;"
            row-key="id"
            border
            
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
            lazy
            :load="load"
            >
            <el-table-column
            prop="date"
            label="日期"
            
            width="180">
            </el-table-column>
            <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="180">
            </el-table-column>
            <el-table-column
            prop="address"
            label="地址">
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

            ],
             tableData1: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true
        //   children: [{
        //       id: 31,
        //       date: '2016-05-01',
        //       name: '王小虎',
        //       address: '上海市普陀区金沙江路 1519 弄'
        //     }, {
        //       id: 32,
        //       date: '2016-05-01',
        //       name: '王小虎',
        //       address: '上海市普陀区金沙江路 1519 弄'
        //   }]
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        }
    },
    created() {

    },
    methods: {
        load(a,b,resolve){
            console.log(a,b)
            setTimeout(()=>{
                resolve([
                    {
                        id: 31,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                        id: 32,
                        date: '2016-05-01',
                        name: '王小虎',
                        address: '上海市普陀区金沙江路 1519 弄'
                    }
                ])
            },1000)
        }
    }
}
</script>