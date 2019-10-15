<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items" stripe>
      <el-table-column prop="_id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button type="text" size="small">编辑</el-button>
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
        let res = await this.$http.get('category/list');
        this.items = res.data;
    },
  },

  created(){
      this.fetch();
  },
};
</script>