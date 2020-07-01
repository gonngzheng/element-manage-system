<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i>基础表格</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button
                    type="primary"
                    icon="el-icon-delete"
                    class="handle-del mr10"
                    @click="delAllSelection"
                >
                    批量删除
                </el-button>
                <el-select v-model="query.address" placeholder="地址" class="handle-select mr10">
                    <el-option key="1" label="广东省" value="选项一"></el-option>
                    <el-option key="2" label="浙江省" value="选项二"></el-option>
                    <el-option key="3" label="河南省" value="选项三"></el-option>
                </el-select>
                <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <el-table
                :data="tableData"
                border class="table"
                ref="multipleTable"
                header-cell-class-name="table-header"
                @selection-change="handleSelectionChange"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
                <el-table-column peop="name" label="用户名"></el-table-column>
                <el-table-column label="账户余额">
                    <template slot-scope="scope">￥{{scope.row}}</template>
                </el-table-column>
                <!-- <el-table-column label="头像(查看大图)" align="center">

                </el-table-column> -->

            </el-table>
        </div>
    </div>
</template>
<script>

export default{
    data() {
        return {
            query: {
                adress: '',
                name: '',
                pagIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: []

        }
    },
    created() {

    },
    methods: {
        delAllSelection(){

        }
    }
}
</script>
<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .mr10 {
        margin-right: 10px;
    }

    .handle-select{
        width: 120px;
    }

    .handle-input {
        width:300px;
        display: inline-block;
    }

</style>