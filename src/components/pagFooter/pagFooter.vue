<template>
  <div class="pag-footer">
    <p><span style="margin-right: 40px">Vue Element Admin</span><span>Element</span></p>
    <p>@2021 Produced by Ant Group Experience Technology Department</p>
  </div>
</template>
<script>
export default {
  name: "pagFooter",
};
</script>
<style lang="less" scoped>
.pag-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  padding: 24px 0px;
  p {
    line-height: 1.8;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.85);
  }
}
</style>
