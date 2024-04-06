<template>
  <router-view/>
</template>

<style lang="scss">
.el-image__inner {
  object-fit: cover !important;
}
.mycontainer .myaside, .mycontainer .el-aside{
  background-color: white !important;
  border-right: 1px solid rgb(216, 216, 216);
}
.el-header ,.myheader {
  background-color: rgb(208, 208, 208,0.5) !important;
}
.el-breadcrumb__inner,.el-breadcrumb__item {
  color: black !important;
}
</style>
