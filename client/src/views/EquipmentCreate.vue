<template>
  <div class="about">
    <h1>{{ this.id ? "编辑": "新增"}}</h1>
    <el-form label-width="120px" @submit.native.prevent="submitForm">
      <el-form-item label="装备名称" style="width:300px">
        <el-input v-model="formModel.name" palceholder="请输入"></el-input>
      </el-form-item>
      <el-form-item label="装备图标" style="width:300px">
        <el-upload
          class="avatar-uploader"
          :action="$http.defaults.baseURL + '/imgupload'"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="formModel.icon" :src="formModel.icon" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
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
  props: {
    id: {}
  },
  data() {
    return {
      formModel: {
        name: "",
        icon: "",
        orginalImgName:"",
      },
      value: {},
      parentOptions: []
    };
  },

  methods: {
    handleAvatarSuccess(res,file){  
      this.formModel.icon = URL.createObjectURL(file.raw);
            this.$message({
        type: "success",
        message: file,
      });
      this.formModel.orginalImgName = file.response.originalname;
    },

    async submitForm() {
      await this.$http.post("equipment/add", this.formModel);
      this.$message({
        type: "success",
        message: "新增成功"
      });
    },

    resetForm() {
      this.formModel.parentName = "";
      this.formModel.name = "";
    },

    async fetch() {
      let res = await this.$http.get(`equipment/${this.id}`);
      this.formModel = res.data;
    }
  },

  created() {
    this.id && this.fetch();
  }
};
</script>