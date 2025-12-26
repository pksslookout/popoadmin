import { aK as httpRequest } from "./index.Dp4m6nBq.js";
var DialogTypeEnum = /* @__PURE__ */ ((DialogTypeEnum2) => {
  DialogTypeEnum2[DialogTypeEnum2["ADD"] = 1] = "ADD";
  DialogTypeEnum2[DialogTypeEnum2["UPDATE"] = 2] = "UPDATE";
  DialogTypeEnum2[DialogTypeEnum2["DELETE"] = 3] = "DELETE";
  DialogTypeEnum2[DialogTypeEnum2["RESETPWD"] = 4] = "RESETPWD";
  DialogTypeEnum2[DialogTypeEnum2["ENABLE"] = 5] = "ENABLE";
  return DialogTypeEnum2;
})(DialogTypeEnum || {});
const RoleAPI = {
  /** 角色列表 */
  getList(params) {
    return httpRequest({
      url: `admin-api/admin-roles`,
      method: "get",
      params: {
        page: params.pageNum,
        per_page: params.pageSize
      }
    });
  },
  /** 权限列表*/
  getPermissionList() {
    return httpRequest({
      url: `admin-api/admin-permissions`,
      method: "get"
    });
  },
  /** 添加角色*/
  addRole(data) {
    return httpRequest({
      url: `admin-api/admin-roles`,
      method: "post",
      data
    });
  },
  /** 编辑信息*/
  updateRole(data) {
    return httpRequest({
      url: `admin-api/admin-roles/` + data.id,
      method: "PUT",
      data: {
        attributes: data,
        type: "update"
      }
    });
  },
  /** 编辑信息*/
  delRole(data) {
    return httpRequest({
      url: `admin-api/admin-roles/` + data.id,
      method: "DELETE"
    });
  }
};
export {
  DialogTypeEnum as D,
  RoleAPI as R
};
