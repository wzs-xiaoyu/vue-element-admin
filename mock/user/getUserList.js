export function getMock(params) {
  console.log(params);
  const list = [
    { userName: "小李子", name: "李四", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "1910265606@qq.com", address: "" },
    { userName: "小宇", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "五仔", name: "王五", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "wangzs", name: "王周顺", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "taoyi", name: "陶毅", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "zhaoliy", name: "赵丽颖", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "iwen", name: "文冬英", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "龙龙", name: "张邦龙", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "luyou", name: "陆游", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇1", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇2", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "果子李", name: "李四", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "1910265606@qq.com", address: "" },
    { userName: "小宇3", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "果子李2", name: "李四", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "1910265606@qq.com", address: "" },
    { userName: "小宇4", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇5", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇6", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "果子李3", name: "李四", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "1910265606@qq.com", address: "" },
    { userName: "小宇7", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇8", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇9", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇10", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇11", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "果子李5", name: "李四", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "1910265606@qq.com", address: "" },
    { userName: "小宇12", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇13", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇14", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇15", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇16", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇17", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇18", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇19", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇20", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇21", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇22", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇23", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇24", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇25", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇26", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇27", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇28", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "小宇29", name: "王宇", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
  ];
  let data = [];
  let curPage = params.curPage;
  let pageSize = params.pageSize;
  data = list.slice((curPage - 1) * pageSize, curPage * pageSize);
  let result = {
    total: list.length,
    rows: data,
  };
  return result;
}
