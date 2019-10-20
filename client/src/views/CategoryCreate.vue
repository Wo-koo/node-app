<template>
  <div class="about">
    <h1>{{ this.id ? "编辑": "新增"}}</h1>
    <el-form label-width="120px" @submit.native.prevent="submitForm">
      <el-form-item label="上级分类" style="width:300px">
        <el-select v-model="formModel.parentName" placeholder="请选择">
          <el-option
            v-for="item in parentOptions"
            :key="item.name"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分类名称" style="width:300px">
        <el-input v-model="formModel.name" placeholder="请输入"></el-input>
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
  props:{
    id:{}
  },
  data() {
    return {
      formModel: {
        parentName: "",
        name: "",
      },
      value:{

      },
      parentOptions:[]
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

    async fetch(){
      let res = await this.$http.get(`category/${this.id}`);
      this.formModel = res.data;
    },

    async fetchParent(){
      let res = await this.$http.get('category/list');
      this.parentOptions = res.data;
      this.$message({
        type:"infor",
        message: this.parentOptions,
      })
    },
  },

  created(){
    this.fetchParent();
    this.id && this.fetch();
  },
};
</script>