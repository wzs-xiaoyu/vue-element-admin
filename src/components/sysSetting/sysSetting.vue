<template>
  <div class="sys-setting">
    <el-button @click="drawer = true" icon="el-icon-setting" type="primary"></el-button>
    <el-drawer title="" :modal-append-to-body="true" :visible.sync="drawer" :direction="direction" :append-to-body="true" size="13%" :before-close="handleClose">
      <div class="setting-content">
        <h3>导航模式</h3>
        <div class="nav-mode">
          <el-tooltip class="item" effect="dark" content="侧边菜单" placement="top">
            <div class="nm-item nm-item-side" :class="{ selected: active === 'asideMenu' }" @click.stop="selectNavMode('asideMenu')">
              <img :src="icon" />
            </div>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="顶部菜单" placement="top">
            <div class="nm-item nm-item-top" :class="{ selected: active === 'atopMenu' }" @click.stop="selectNavMode('atopMenu')">
              <img :src="icon" />
            </div>
          </el-tooltip>
          <el-tooltip class="item" effect="dark" content="混合菜单" placement="top">
            <div class="nm-item nm-item-minx" :class="{ selected: active === 'mixMenu' }" @click.stop="selectNavMode('mixMenu')">
              <img :src="icon" />
            </div>
          </el-tooltip>
        </div>
        <div class="sys-fixed">
          <h3>固定 Header</h3>
          <el-switch v-if="active === 'atopMenu'" v-model="isFixed"></el-switch>
          <el-switch v-else disabled v-model="isFixed"></el-switch>
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { mapState, mapMutations } from "../../views/storeSysSetting.js";
export default {
  name: "sysSetting",
  data() {
    return {
      drawer: false,
      direction: "rtl",
      icon:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAD9UlEQVRoQ+1WTYgbZRh+3qSrpaUsMymtiCiymWzFn4MeKoIeFGWtVQ8iRhRtQbtksq7VlSpVMD1Uxa1SpTNjdw+uYHJQD6IVwYL0UC+9VIXSmpnSIl7cmklLe7C7ybwytS35vs0mk/262SzMHGfe53mf5/35viEs84eWuX7EBpa6g3EH4g4oViAeIcUCKsPjDiiXMAKB7rjvgrENRD8FmN11Nnfb6Suwnu+AZru7Cdh5VTDzh5V85s1lYUC3yuMgekNoEtGUn0tv7XkDuuPtBfOrgnjGsSBR29zzI5SyyzaDco3iCThKQSL7z8hAWXofYYu6GKLb7iSAl6SUR+r1evbcKxtOyVJ6aok12/2CgBckkb+ghqw/avzVrI49Y0B3vBKYn20UycChvpl/s9Pb7/x7viFYegOFY9fp6/pKAD0lLiwfrNP1z5wzb6m2muAlNbB+/LfVM6tXlQh4QhRJPyT5YvZM/vYL7dZPMKA5JzeDgzFi3AhKfOCbA5+3I1jo9377dy2JVUWAH5XG5ttqDVmMGhejcAsGLl/ZhQbgmG8aH0ch6iRmveOtm0VQAtNDEu5rf7qYRaEQROUTDVjuHhDGhHOWaGsll56KStguTv/UvQl9KILxgHiec6liZp5rh295jOqWNwTiH+WgAHjyrGl81ym5HN8/efrW5OxsCcC9wjfp96CTPHOWWLPKw0T0mZgA5zkINlXzg4c7IW+MXWufGKwjWSTgHol70s8Z2xbK2/QUStnuTgZ2S6R/EvNQJZ853mkyzfHuIEa4sHcJC0uwqzkj3ymfOHrzoHXb/QjA69LnX2dqeOTCqHEmatL+fe7dSeIiiDYIGOZP/Hxme1Se+eJa3gO67U0B/KIE/tmfTj+MArU9KVL7T21EvVZkYEDkoHHfTO9QFR/i215kul0+ANBj0tx+4+eMp1sJ0Ow/7idKfgnmm4WxAd6rmsbb10J8JANr9h1P9SVWHJhzcoAnfDMz3ExIyvEeZOYigBvEscEuP2803jPKPtp2IMywduJkJqgFoQmjXTV168QQwsoDKWHZmN+p5DPywdAdA2EW3fLuQ4K/B0OXsl69rTXLfZzChQWtEY3SjqqZHldW24QgUgeu4P4XiDkXGiHYAl5xnikIx2allOc13zT2Lob4SDsgJ0453hZmbvKTR3WAk8LYACMV07AWS/yCDFwaJ8cbA/OeVsIYwXDVHJxYTPELNhACNct9nwhvNRNI1/gHsFUROtoBmUh33AkwXhYWlvB8NWeEu9CVR8nApXGyy/vBtIkJHgVw/BHjq64ov5xE2UA3xTYd16UWoJo/7oBqBVXxcQdUK6iKjzugWkFVfNwB1Qqq4v8DVVY+QLdkz1EAAAAASUVORK5CYII=",
    };
  },
  computed: {
    ...mapState({ navmode: "navmode", fixedHead: "fixedHead" }),
    active() {
      return this.navmode;
    },
    isFixed: {
      get() {
        return this.fixedHead;
      },
      set(val) {
        this.setFixedHead(val);
      },
    },
  },
  methods: {
    ...mapMutations({
      changeNavMode: "changeNavMode",
      setFixedHead: "setFixedHead",
    }),
    handleClose(done) {
      done();
    },
    // 选择导航模式
    selectNavMode(mode) {
      this.changeNavMode(mode);
      if (mode !== "atopMenu") {
        this.setFixedHead(false);
      }
    },
  },
};
</script>
<style lang="less" scoped>
.sys-setting {
  position: fixed;
  right: 0;
  top: 48vh;
  z-index: 99;
  .el-button {
    padding: 12px;
    .el-icon-setting {
      font-size: 26px;
    }
  }
}
</style>
<style lang="less">
.el-drawer__wrapper {
  .el-drawer__header {
    padding: 8px;
    margin-bottom: 8px;
  }
  .el-drawer__body {
    .setting-content {
      display: flex;
      flex-direction: column;
      padding: 14px;
      h3 {
        margin-bottom: 12px;
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        line-height: 22px;
        margin-bottom: 12px;
      }
      .nav-mode {
        display: flex;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        padding-bottom: 16px;
        margin-bottom: 24px;
        .nm-item {
          position: relative;
          width: 50px;
          height: 36px;
          margin-right: 16px;
          overflow: hidden;
          background-color: #f0f2f5;
          border-radius: 4px;
          box-shadow: 0 1px 2.5px 0 rgba(0, 0, 0, 0.18);
          cursor: pointer;
          &::before {
            position: absolute;
            top: 0;
            left: 0;
            width: 33%;
            height: 100%;
            background-color: #fff;
            content: "";
          }
          &::after {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 25%;
            background-color: #fff;
            content: "";
          }
          img {
            width: 18px;
            height: 18px;
            position: absolute;
            right: 6px;
            bottom: 4px;
            display: none;
          }
        }
        .nm-item-side {
          &::before {
            z-index: 1;
            background-color: #001529;
            content: "";
          }
          &::after {
            background-color: #fff;
          }
        }
        .nm-item-top {
          &::before {
            background-color: transparent;
            content: "";
          }
          &::after {
            background-color: #001529;
          }
        }
        .nm-item-minx {
          &::before {
            background-color: #fff;
            content: "";
          }
          &::after {
            background-color: #001529;
          }
        }
        .selected {
          img {
            display: block;
          }
        }
      }
      .sys-fixed {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
}
</style>
