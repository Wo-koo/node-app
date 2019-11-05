<template>
  <div class="about">
    <h1>{{ this.id ? "编辑": "新增"}}</h1>
    <el-tabs type="border-card" value="heroEdit">
      <el-tab-pane name="heroEdit" label="编辑英雄"> 
      <el-form label-width="120px" @submit.native.prevent="submitForm">
        <el-form-item label="英雄名称" style="width:300px">
        <el-input v-model="formModel.name" palceholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="英雄头像" style="width:300px">
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
        <el-form-item label="英雄昵称" style="width:300px">
          <el-input v-model="formModel.nickName" palceholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="英雄类别" style="width:300px">
          <el-select v-model="formModel.heroTypes" multiple>
                <el-option
                  v-for="item of categories"
                  :key="item._id"
                  :label="item.name"
                  :value="item._id"
                ></el-option>
              </el-select>
        </el-form-item>
        <el-form-item label="难度">
          <el-rate style="margin-top:0.5em;margin-left:0em"
            v-model="formModel.diffcultyLevel" :max="9" show-score>
          </el-rate>
        </el-form-item>
        <el-form-item label="技能">
          <el-rate style="margin-top:0.5em;margin-left:0em"
            v-model="formModel.skillLevel" :max="9" show-score>
          </el-rate>
        </el-form-item>
        <el-form-item label="攻击">
          <el-rate style="margin-top:0.5em;margin-left:0em"
            v-model="formModel.atackLevel" :max="9" show-score>
          </el-rate>
        </el-form-item>
        <el-form-item label="生存">
          <el-rate style="margin-top:0.5em;margin-left:0em"
            v-model="formModel.survivalLevel" :max="9" show-score>
          </el-rate>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">创建</el-button>
          <el-button @click="resetForm('formModel')">重置</el-button>
        </el-form-item>
    </el-form>
      </el-tab-pane>
      <el-tab-pane name="skillEdit" label="编辑技能">
        <el-button type="text"><i class="el-icon-plus">添加</i></el-button>
      </el-tab-pane>
    </el-tabs>
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
        name: "",//名称
        icon: "",//头像图标
        orginalImgName:"",//头像图标名称
        nickName:"",//昵称
        heroTypes:[],//英雄类别
        difficultyLevel:0,//难度水平 
        skillLevel:0,
        atackLevel:0,
        survivalLevel:0,
        skills:[],
        advantageEquipments:{},
        disadvantageEquipments:{},
      },
      value: {},
      parentOptions: [],
      categories:[],
    }
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
      await this.$http.post("hero/add", this.formModel);
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
      let res = await this.$http.get(`hero/${this.id}`);
      this.formModel = res.data;
    },

    async fetchCategories(){
      let res = await this.$http.get('category/list');
      this.categories = res.data.filter(item=>item.parentName == '英雄类别');
    },
  },

  created() {
    this.id && this.fetch();
    this.fetchCategories();
  }
};
</script>