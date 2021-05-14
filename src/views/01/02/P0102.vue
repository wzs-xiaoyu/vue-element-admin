<template>
  <div class="p0102">
    <div class="p0102-head">
      <el-form :model="seachForm" :inline="true" size="small" ref="seachForm">
        <el-form-item prop="unitId">
          <el-select v-model="seachForm.unitId" placeholder="请选择单位">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="roleId">
          <el-select v-model="seachForm.roleId" placeholder="请选择角色">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="name">
          <el-input v-model="seachForm.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item prop="userName">
          <el-input v-model="seachForm.userName" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item style="float: right">
          <el-button @click="onReset('seachForm')">重置</el-button>
          <el-button type="primary" @click="onSubmit('seachForm')">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="p0102-content">
      <div class="content-head">
        <el-button type="primary" size="small" icon="el-icon-plus" @click.stop="addUserForm">新增</el-button>
        <el-button type="primary" size="small" @click="_exportExcel">导出</el-button>
      </div>
      <div class="content-table">
        <el-table :data="tableData" stripe style="width: 100%" ref="tableRef">
          <el-table-column v-for="(item, index) in tableColumn" :key="index" :prop="item.prop" :label="item.label" :width="item.width"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-tooltip class="item" effect="dark" content="编辑" placement="top">
                <el-button type="primary" icon="el-icon-edit" circle size="mini" @click="updateUser(scope.$index, scope.row)"></el-button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="删除" placement="top">
                <el-button icon="el-icon-delete" circle size="mini" @click="handleDelete(scope.$index, scope.row)"></el-button>
              </el-tooltip>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="content-page">
        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="curPage" :page-size.sync="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="totalPage"> </el-pagination>
      </div>
    </div>
    <!-- <el-dialog
      :title="dialogForm.title"
      :visible.sync="dialogForm.visible"
      width="44%"
      :before-close="()=>this.handleClose('ruleForm')"> -->
    <el-dialog :title="dialogForm.title" :visible.sync="dialogForm.visible" width="44%" :before-close="() => handleClose('ruleForm')">
      <el-form :model="ruleForm" :rules="rules" size="small" ref="ruleForm" label-width="80px">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="用户名" prop="userName">
              <el-input v-model="ruleForm.userName" placeholder="请输入用户名"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="姓名" prop="name">
              <el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="单位" prop="unitId">
              <el-select v-model="ruleForm.unitId" placeholder="请选择单位" style="width: 100%">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="角色" prop="roleId">
              <el-select v-model="ruleForm.roleId" placeholder="请选择角色" style="width: 100%">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm.age" placeholder="请输入年龄"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="联系电话" prop="tel">
              <el-input v-model="ruleForm.tel" placeholder="请输入联系电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email">
              <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24">
          <el-col :span="24">
            <el-form-item label="地址" prop="address">
              <el-input type="textarea" :rows="3" v-model="ruleForm.address" placeholder="请输入地址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose('ruleForm')" size="small">取 消</el-button>
        <el-button type="primary" @click="dialogOk('ruleForm')" size="small">{{ dialogForm.type === "add" ? "新增" : "编辑" }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
// 引入sortablejs
import Sortable from "sortablejs";
import { exportExcel } from "@common/js/utils.js";
export default {
  name: "P0102",
  data() {
    var validateTel = (rule, value, callback) => {
      if (!value) {
        return callback();
      } else if (!/^1(3|4|5|7|8)\d{9}$/.test(value)) {
        return callback(new Error("联系电话格式不正确"));
      } else {
        return callback();
      }
    };
    return {
      seachForm: {
        unitId: "",
        roleId: "",
        name: "",
        userName: "",
      },
      tableData: [],
      tableColumn: [
        { prop: "userName", label: "昵称", width: "" },
        { prop: "name", label: "姓名", width: "" },
        { prop: "roleName", label: "角色", width: "" },
        { prop: "unitName", label: "单位", width: "" },
        { prop: "tel", label: "联系电话", width: "" },
        { prop: "email", label: "邮箱", width: "" },
      ],
      curPage: 1,
      pageSize: 10,
      totalPage: 0,
      dialogForm: {
        visible: false,
        title: "",
        type: "",
      },
      ruleForm: {
        userName: "",
        name: "",
        roleId: "",
        unitId: "",
        age: "",
        tel: "",
        email: "",
        address: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入昵称", trigger: "blur" },
          // { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        unitId: [{ required: true, message: "请选择单位", trigger: "change" }],
        roleId: [{ required: true, message: "请选择角色", trigger: "change" }],
        age: [
          { required: false, message: "请输入年龄", trigger: "blur" },
          // { type: 'number', message: '年龄必须为数字值'}
        ],
        tel: [
          { required: false, message: "请输入联系电话", trigger: "blur" },
          { validator: validateTel, trigger: "blur" },
        ],
        email: [
          { required: false, message: "请输入邮箱地址", trigger: "blur" },
          { type: "email", message: "请输入正确的邮箱地址", trigger: ["blur", "change"] },
        ],
        address: [{ required: false, message: "请输入地址", trigger: "blur" }],
      },
      options: [
        {
          value: "1",
          label: "黄金糕",
        },
        {
          value: "2",
          label: "双皮奶",
        },
        {
          value: "3",
          label: "蚵仔煎",
        },
        {
          value: "4",
          label: "龙须面",
        },
        {
          value: "5",
          label: "北京烤鸭",
        },
      ],
    };
  },
  created() {
    this.getUserList();
  },
  mounted() {
    // 阻止默认行为
    document.body.ondrap = function (event) {
      event.preventDefault(); //阻止默认行为
      event.stopPropagation(); //阻止冒泡
    };
    //  拖拽事件一定要放在 mounted 生命周期内，因为这时真实的DOM才渲染出来
    this._rowDrop();
    // this._columnDrop();
  },
  methods: {
    // 条件查询
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("8888888888888888888");
          console.log(this.seachForm);
        }
      });
    },
    // 重置
    onReset(formName) {
      this.$refs[formName].resetFields();
    },
    // 新增
    addUserForm() {
      this.dialogForm = {
        visible: true,
        title: "新增用户",
        type: "add",
      };
    },
    // 编辑
    updateUser(index, row) {
      (this.dialogForm = {
        visible: true,
        title: "编辑用户",
        type: "edit",
      }),
        this.$nextTick(() => {
          this.ruleForm = Object.assign({}, row); // 给表单赋值
        });
    },
    dialogOk(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("8888888888888888888");
        }
      });
    },
    // 删除
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleClose(formName) {
      this.$refs[formName].resetFields();
      this.dialogForm = {
        visible: false,
        title: "",
        type: "",
      };
    },
    // 查询
    async getUserList() {
      let param = {
        curPage: this.curPage,
        pageSize: this.pageSize,
      };
      let res = await this.$post("user/getUserList", param, true);
      this.tableData = res.rows;
      this.totalPage = res.total;
    },
    // 改变当前页
    handleCurrentChange(val) {
      this.curPage = val;
      this.getUserList();
    },
    // 改变分页大小
    handleSizeChange(val) {
      this.pageSize = val;
      this.getUserList();
    },
    // 数据导出
    _exportExcel() {
      exportExcel(this.$refs.tableRef.$el, "用户信息");
    },
    // 拖拽行
    _rowDrop() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
        },
      });
    },
    // 拖拽列
    // _columnDrop(){
    //    const wrapperTr = document.querySelector(".el-table__header-wrapper tr");
    //   Sortable.create(wrapperTr, {
    //     animation: 180,
    //     delay: 0,
    //     // onEnd: evt => {
    //     //   const oldItem = this.tableColumn[evt.oldIndex];
    //     //   this.tableColumn.splice(evt.oldIndex, 1);
    //     //   this.tableColumn.splice(evt.newIndex, 0, oldItem);
    //     //   // 截止上面为止，数组已经进行了更换，但是会看到表格的头部label没有更新，所以就进行了数组清空重新赋值
    //     //   const newArray = this.tableColumn.slice(0);
    //     //   this.tableColumn = [];
    //     //   this.$nextTick(() => {
    //     //     this.tableColumn = newArray;
    //     //   });
    //     // }
    //     onEnd:({newIndex,oldIndex})=>{
    //       const oldItem = this.tableColumn[oldIndex];
    //       this.tableColumn.splice(oldIndex,1);
    //       this.tableColumn.splice(newIndex,0,oldItem)
    //     }
    //   });
    // }
  },
};
</script>
<style lang="less" scoped>
.p0102 {
  // height: 100%;
  .p0102-head {
    background-color: #fff;
    padding: 22px 6px 0px 16px;
    border-radius: 4px;
    margin-bottom: 16px;
  }
  .p0102-content {
    background-color: #fff;
    padding: 16px;
    border-radius: 4px;
    .content-head {
      margin-bottom: 16px;
      display: flex;
      justify-content: space-between;
    }
    .content-table {
      min-height: 61.5vh;
    }
    .content-page {
      margin-top: 16px;
    }
  }
}
</style>
