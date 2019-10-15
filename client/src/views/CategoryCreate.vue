<template>
  <div class="about">
    <h1>新建分类</h1>
    <el-form label-width="120px" @submit.native.prevent="submitForm">
      <el-form-item label="上级分类">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in parentOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称">
        <el-input v-model="formModel.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">创建</el-button>
        <el-button @click="resetForm('formModel')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formModel: {
        parentName: "",
        name: "",
        parentOptions:[
        ]
      },
    };
  },

  methods: {
    async submitForm() {
      await this.$http.post("category/add", this.formModel);
      this.$message({
        type: "success",
        message: "新增成功"
      });
    },

    resetForm() {
      this.formModel.parentName = "";
      this.formModel.name = "";
    },

    async fetchParent(){
      let res = await this.$http.get('category/list');
      this.parentOptions = res.data;
    },
  },

  created(){
    this.fetchParent();
  },
};
</script>