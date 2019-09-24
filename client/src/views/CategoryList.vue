<template>
  <div>
    <el-table :data="items" stripe>
      <el-table-column prop="id" label="ID" width="180"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
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
        let res = await this.$http.get('rest/categories');
        this.items = res.data;
    },
  },
  created(){
      this.fetch();
  },
};
</script>