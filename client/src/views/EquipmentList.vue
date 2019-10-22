<template>
  <div>
    <h1>装备列表</h1>
    <el-table :data="items" stripe>
      <el-table-column prop="_id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="装备名称"></el-table-column>
      <el-table-column prop="icon" label="装备图标">
        <template slot-scope="scope">
          <img :src="scope.row.icon" style="height:3rem;"/>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small" @click="$router.push(`/equipments/create/${scope.row._id}`)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },

  methods: {
    async fetch() {
        let res = await this.$http.get('equipment/list');
        this.items = res.data;
    },

    remove(row){
      this.$confirm(`是否要删除分类"${row.name}"`,"提示",{
        confirmButtonText:"确定",
        cancelButtonText:"取消",
        type:"warning"
      }).then(async () => {
        this.$http.delete(`equipment/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功",
        });
        this.fetch();
      });
    },
  },

  created(){
      this.fetch();
  },
};
</script>