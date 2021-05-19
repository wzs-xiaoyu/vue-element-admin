export function getMock(params) {
  const list = [
    { userName: "小李子", name: "李四", password: "123", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "1910265606@qq.com", address: "" },
    { userName: "小宇", name: "王宇", password: "123456", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "五仔", name: "王五", password: "1111", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "wangzs", name: "王周顺", password: "wzs9413121", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
    { userName: "taoyi", name: "陶毅", password: "123456789", age: 18, roleId: "1", roleName: "黄金糕", unitId: "4", unitName: "龙须面", tel: "18587345771", email: "my_xiaoyufamily@163.com", address: "" },
  ];
  let result = {
    message: "",
    success: false,
    data: {},
  };
  let userName = list.filter((item) => item.userName === params.userName);
  let pass = list.filter((item) => item.password === params.password);
  if (!userName.length) {
    result.message = "找不到用户名";
    result.success = false;
    result.data = {};
    return result;
  }
  if (!pass.length) {
    result.message = "密码错误";
    result.success = false;
    result.data = {};
    return result;
  }
  result.message = "登录成功";
  result.success = true;
  result.data = userName[0];
  return result;
}
