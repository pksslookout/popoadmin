import { aK as httpRequest, d as defineComponent, aG as useI18n, r as ref, S as reactive, o as onMounted, $ as withDirectives, i as unref, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, C as createBaseVNode, e as createBlock, h as createCommentVNode, a4 as createTextVNode, F as toDisplayString, aC as isRef, Q as Fragment, R as renderList, U as nextTick } from "./index.Dp4m6nBq.js";
import { v as vLoading, E as ElTable, a as ElTableColumn, _ as __unplugin_components_3 } from "./table-column.Di2ZqTaD.js";
import { E as ElDialog } from "./tag.CYa7Ow6I.js";
import { c as ElForm, b as ElFormItem } from "./form-item.Clspqeam.js";
import { b as ElCard, E as ElSelect, a as ElOption } from "./card.Bl4e-SGl.js";
import "./scrollbar.u3Wr4GmE.js";
import "./popper.DXIFQgs8.js";
import { E as ElInput } from "./input.BUoL4AzR.js";
/* empty css                 */
import { E as ElSwitch } from "./switch.BYWuQ4fI.js";
import { E as ElButton } from "./button.7O-VbLYM.js";
import { D as DialogTypeEnum, R as RoleAPI } from "./role-api.Bao7RE3d.js";
import { E as ElMessageBox } from "./index.Bpj8aKv_.js";
import "./debounce.WgF1lM06.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
const AdminAPI = {
  /** 管理员列表*/
  getList(params) {
    return httpRequest({
      url: `admin-api/admins`,
      method: "get",
      params: {
        page: params.pageNum,
        per_page: params.pageSize
      }
    });
  },
  /** 创建管理员列表*/
  createAdmin(data) {
    return httpRequest({
      url: `admin-api/admins`,
      method: "post",
      data
    });
  },
  /** 修改管理员列表*/
  updateAdmin(data) {
    return httpRequest({
      url: `admin-api/admins/` + data.id,
      method: "PUT",
      data: {
        attributes: data,
        type: "update"
      }
    });
  },
  /** 修改管理员列表*/
  delAdmin(id) {
    return httpRequest({
      url: `admin-api/admins/` + id,
      method: "DELETE"
    });
  },
  /** 修改管理员列表*/
  resetAdminPassWord(data) {
    return httpRequest({
      url: `admin-api/admins/` + data.id,
      method: "PUT",
      data: {
        password: data.password,
        type: "reset_password"
      }
    });
  },
  /** 是否允许密码登录 */
  loginEnabled(id, enabled) {
    return httpRequest({
      url: `admin-api/admins/` + id,
      method: "PATCH",
      data: {
        is_password_login_enabled: enabled,
        type: "update_is_password_login_enabled"
      }
    });
  }
};
const mobileExp = /^1[3-9]\d{9}$/;
const pwdExp = /^.{6,}$/;
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "data-table__toolbar" };
const _hoisted_3 = { class: "data-table__toolbar--actions" };
const _hoisted_4 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const loading = ref(false);
    const total = ref(0);
    ref();
    const adminFormRef = ref();
    const adminList = ref();
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    });
    const queryRoleParams = reactive({
      pageNum: 1,
      pageSize: 100
    });
    const roleOptions = ref([]);
    const dialog = reactive({
      title: "",
      type: DialogTypeEnum.ADD,
      visible: false
    });
    const formData = reactive({
      name: "",
      phone: "",
      roles: [],
      password: void 0,
      id: ""
    });
    const rules = reactive({
      name: [
        { required: true, message: t("global.pleaseEnter") + t("global.username"), trigger: "blur" }
      ],
      phone: [
        {
          required: true,
          message: t("global.pleaseEnter") + t("global.phone"),
          trigger: "blur"
        },
        {
          pattern: mobileExp,
          message: t("global.pleaseEnter") + t("global.correct") + t("global.phone"),
          trigger: "blur"
        }
      ],
      roles: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (!value || value.length === 0) {
              callback(new Error(t("global.pleaseEnter") + t("global.role")));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }
      ],
      password: [
        { required: true, message: t("global.pleaseEnter") + t("global.password"), trigger: "blur" },
        {
          pattern: pwdExp,
          message: t("adminList.adminList"),
          trigger: "blur"
        }
      ]
    });
    const fetchData = () => {
      loading.value = true;
      AdminAPI.getList(queryParams).then((data) => {
        adminList.value = ((data == null ? void 0 : data.list) || []).map((item) => {
          let roleStrArray = ((item == null ? void 0 : item.roles) || []).map((rolesItem) => {
            return rolesItem.name;
          });
          return {
            ...item,
            roleStr: roleStrArray.join(",")
          };
        });
        total.value = data.item_total;
      }).finally(() => {
        loading.value = false;
      });
    };
    const handleRefresh = () => {
      if (dialog.type === DialogTypeEnum.ADD) {
        queryParams.pageNum = 1;
      }
      if (dialog.type === DialogTypeEnum.UPDATE || dialog.type === DialogTypeEnum.DELETE) {
        if (((adminList == null ? void 0 : adminList.value) || []).length <= 1) {
          if (queryParams.pageNum === 1) {
            queryParams.pageNum = 1;
          } else {
            queryParams.pageNum = queryParams.pageNum - 1;
          }
        }
      }
      fetchData();
    };
    const handleOpenDialog = (row) => {
      if (row && row.id) {
        dialog.type = DialogTypeEnum.UPDATE;
        formData.id = row.id;
        formData.name = row.name;
        formData.phone = row.phone;
        formData.roles = ((row == null ? void 0 : row.roles) || []).map((item) => {
          return ((item == null ? void 0 : item.id) || "").toString();
        });
        dialog.title = t("global.modify");
      } else {
        formData.id = "";
        dialog.type = DialogTypeEnum.ADD;
        dialog.title = t("global.add");
      }
      if (roleOptions.value && roleOptions.value.length <= 0) {
        getRoleList();
      }
      dialog.visible = true;
    };
    const handleDelete = async (row) => {
      try {
        await ElMessageBox.confirm(
          t("global.whether") + t("global.confirm") + t("global.delete") + "?",
          t("global.prompt"),
          {
            confirmButtonText: t("global.confirm"),
            cancelButtonText: t("global.cancel"),
            type: "warning",
            dangerouslyUseHTMLString: true
          }
        );
        dialog.type = DialogTypeEnum.DELETE;
        loading.value = true;
        AdminAPI.delAdmin(row.id).then(() => {
          handleRefresh();
          handleCloseDialog();
        }).finally(() => {
          loading.value = false;
        });
      } catch {
        return;
      }
    };
    const handleResetPwdDialog = async (row) => {
      try {
        await ElMessageBox.confirm(
          t("global.whether") + t("global.confirm") + t("global.reset") + t("global.password") + "?",
          t("global.prompt"),
          {
            confirmButtonText: t("global.confirm"),
            cancelButtonText: t("global.cancel"),
            type: "warning",
            dangerouslyUseHTMLString: true
          }
        );
        dialog.type = DialogTypeEnum.RESETPWD;
        formData.id = row.id;
        formData.name = row.name;
        formData.phone = row.phone;
        formData.roles = ((row == null ? void 0 : row.roles) || []).map((item) => {
          return ((item == null ? void 0 : item.id) || "").toString();
        });
        dialog.title = t("global.modify");
        dialog.visible = true;
      } catch {
        return;
      }
    };
    const handleCloseDialog = () => {
      nextTick(() => {
        var _a;
        (_a = adminFormRef.value) == null ? void 0 : _a.resetFields();
      });
      dialog.visible = false;
    };
    const handleSubmit = () => {
      var _a;
      (_a = adminFormRef.value) == null ? void 0 : _a.validate((valid) => {
        if (valid) {
          loading.value = true;
          let http = null;
          if (dialog.type === DialogTypeEnum.UPDATE) {
            http = AdminAPI.updateAdmin;
          } else if (dialog.type === DialogTypeEnum.ADD) {
            http = AdminAPI.createAdmin;
          } else {
            http = AdminAPI.resetAdminPassWord;
          }
          http(formData).then((data) => {
            handleRefresh();
            handleCloseDialog();
          }).finally(() => {
            loading.value = false;
          });
        }
      });
    };
    const handleChangeEnable = async (row) => {
      try {
        await ElMessageBox.confirm(
          t("global.whether") + t("global.confirm") + t("global.enable") + "?",
          t("global.prompt"),
          {
            confirmButtonText: t("global.confirm"),
            cancelButtonText: t("global.cancel"),
            type: "warning",
            dangerouslyUseHTMLString: true
          }
        );
        dialog.type = DialogTypeEnum.ENABLE;
        loading.value = true;
        AdminAPI.loginEnabled(row.id, row.is_password_login_enabled).then(() => {
          handleRefresh();
          handleCloseDialog();
        }).catch(() => {
          row.is_password_login_enabled = row.is_password_login_enabled === 1 ? 0 : 1;
        }).finally(() => {
          loading.value = false;
        });
      } catch {
        row.is_password_login_enabled = row.is_password_login_enabled === 1 ? 0 : 1;
        return;
      }
    };
    const getRoleList = () => {
      RoleAPI.getList(queryRoleParams).then((data) => {
        roleOptions.value = data.list || [];
      });
    };
    onMounted(() => {
      fetchData();
      getRoleList();
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_table_column = ElTableColumn;
      const _component_el_switch = ElSwitch;
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_3;
      const _component_el_card = ElCard;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_form = ElForm;
      const _component_el_dialog = ElDialog;
      const _directive_loading = vLoading;
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_card, {
          shadow: "hover",
          class: "data-table"
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_el_button, {
                  type: "success",
                  icon: "plus",
                  onClick: _cache[0] || (_cache[0] = ($event) => handleOpenDialog(void 0))
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("global.add")), 1)
                  ]),
                  _: 1
                })
              ])
            ]),
            createVNode(_component_el_table, {
              ref: "dataTableRef",
              data: unref(adminList),
              "highlight-current-row": "",
              border: "",
              class: "data-table__content"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  label: "ID",
                  prop: "id",
                  width: "100"
                }),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  label: unref(t)("global.username"),
                  prop: "name"
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  label: unref(t)("global.phone"),
                  prop: "phone"
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  label: "UUID",
                  prop: "uuid"
                }),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  label: unref(t)("global.lastLoginTime"),
                  prop: "last_active_at"
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  label: unref(t)("global.role"),
                  prop: "roleStr"
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  label: unref(t)("global.state"),
                  width: "100",
                  align: "center"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_switch, {
                      modelValue: scope.row.is_password_login_enabled,
                      "onUpdate:modelValue": ($event) => scope.row.is_password_login_enabled = $event,
                      "inline-prompt": "",
                      "active-text": unref(t)("global.enable"),
                      "inactive-text": unref(t)("global.disable"),
                      "active-value": 1,
                      "inactive-value": 0,
                      onChange: ($event) => handleChangeEnable(scope.row)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "active-text", "inactive-text", "onChange"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  fixed: "right",
                  label: unref(t)("global.operation"),
                  width: "220"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "small",
                      link: "",
                      icon: "edit",
                      onClick: ($event) => handleOpenDialog(scope.row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("global.modify")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "warning",
                      size: "small",
                      link: "",
                      icon: "key",
                      onClick: ($event) => handleResetPwdDialog(scope.row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("global.reset")) + toDisplayString(unref(t)("global.password")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      type: "danger",
                      size: "small",
                      link: "",
                      icon: "delete",
                      onClick: ($event) => handleDelete(scope.row)
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("global.delete")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ]),
              _: 1
            }, 8, ["data"]),
            unref(total) > 0 ? (openBlock(), createBlock(_component_pagination, {
              key: 0,
              total: unref(total),
              "onUpdate:total": _cache[1] || (_cache[1] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[2] || (_cache[2] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[3] || (_cache[3] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: fetchData
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          width: "500px",
          onClose: handleCloseDialog,
          "close-on-click-modal": false
        }, {
          footer: withCtx(() => [
            createBaseVNode("div", _hoisted_4, [
              createVNode(_component_el_button, {
                loading: unref(loading),
                type: "primary",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("global.confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading"]),
              createVNode(_component_el_button, {
                loading: unref(loading),
                onClick: handleCloseDialog
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("global.cancel")), 1)
                ]),
                _: 1
              }, 8, ["loading"])
            ])
          ]),
          default: withCtx(() => [
            createVNode(_component_el_form, {
              ref_key: "adminFormRef",
              ref: adminFormRef,
              model: unref(formData),
              rules: unref(rules),
              "label-width": "80px",
              "label-position": "left"
            }, {
              default: withCtx(() => [
                unref(dialog).type === unref(DialogTypeEnum).ADD || unref(dialog).type === unref(DialogTypeEnum).UPDATE ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 0,
                  label: unref(t)("global.username"),
                  prop: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(formData).name = $event),
                      placeholder: unref(t)("global.pleaseEnter") + unref(t)("global.username")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true),
                unref(dialog).type === unref(DialogTypeEnum).ADD || unref(dialog).type === unref(DialogTypeEnum).UPDATE ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 1,
                  label: unref(t)("global.phone"),
                  prop: "phone"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).phone,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(formData).phone = $event),
                      placeholder: unref(t)("global.pleaseEnter") + unref(t)("global.phone")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true),
                unref(dialog).type === unref(DialogTypeEnum).ADD || unref(dialog).type === unref(DialogTypeEnum).RESETPWD ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 2,
                  label: unref(t)("global.password"),
                  prop: "password"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).password,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(formData).password = $event),
                      placeholder: unref(t)("global.pleaseEnter") + unref(t)("global.password"),
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true),
                unref(dialog).type === unref(DialogTypeEnum).ADD || unref(dialog).type === unref(DialogTypeEnum).UPDATE ? (openBlock(), createBlock(_component_el_form_item, {
                  key: 3,
                  label: unref(t)("global.role"),
                  prop: "roles"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_select, {
                      modelValue: unref(formData).roles,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(formData).roles = $event),
                      multiple: "",
                      filterable: "",
                      placeholder: unref(t)("global.pleaseEnter") + unref(t)("global.role")
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createElementBlock(Fragment, null, renderList(unref(roleOptions), (option) => {
                          return openBlock(), createBlock(_component_el_option, {
                            key: option.id.toString(),
                            label: option.name,
                            value: option.id.toString()
                          }, null, 8, ["label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"])) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["model", "rules"])
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ])), [
        [_directive_loading, unref(loading)]
      ]);
    };
  }
});
export {
  _sfc_main as default
};
