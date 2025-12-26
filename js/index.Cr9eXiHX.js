import { d as defineComponent, aG as useI18n, r as ref, S as reactive, o as onMounted, $ as withDirectives, i as unref, g as createElementBlock, f as openBlock, m as createVNode, w as withCtx, C as createBaseVNode, e as createBlock, h as createCommentVNode, a4 as createTextVNode, F as toDisplayString, aC as isRef, U as nextTick } from "./index.Dp4m6nBq.js";
import { v as vLoading, E as ElTable, a as ElTableColumn, _ as __unplugin_components_3 } from "./table-column.Di2ZqTaD.js";
import { E as ElDialog } from "./tag.CYa7Ow6I.js";
import { c as ElForm, b as ElFormItem } from "./form-item.Clspqeam.js";
import { E as ElScrollbar } from "./scrollbar.u3Wr4GmE.js";
import { E as ElTree } from "./tree.CqWJNruA.js";
import "./text.DzyWNEr_.js";
import { E as ElInput } from "./input.BUoL4AzR.js";
import { b as ElCard } from "./card.Bl4e-SGl.js";
/* empty css                 */
import "./popper.DXIFQgs8.js";
import { E as ElButton } from "./button.7O-VbLYM.js";
import { D as DialogTypeEnum, R as RoleAPI } from "./role-api.Bao7RE3d.js";
import { E as ElMessageBox } from "./index.Bpj8aKv_.js";
import "./debounce.WgF1lM06.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.D_ONB5yw.js";
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "data-table__toolbar" };
const _hoisted_3 = { class: "data-table__toolbar--actions" };
const _hoisted_4 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const formRef = ref();
    const treeRef = ref();
    const total = ref(0);
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    });
    const loading = ref(false);
    const treeLoad = ref(false);
    const dataList = ref();
    const permissionList = ref();
    const dialog = reactive({
      title: "",
      type: DialogTypeEnum.ADD,
      visible: false
    });
    let formData = reactive({
      id: "",
      name: "",
      description: "",
      perms: []
    });
    const rules = reactive({
      name: [
        {
          required: true,
          message: t("global.pleaseEnter") + t("global.role") + t("roleList.name"),
          trigger: "blur"
        }
      ],
      description: [
        {
          required: true,
          message: t("global.pleaseEnter") + t("global.role") + t("roleList.desc"),
          trigger: "blur"
        }
      ],
      perms: [
        {
          required: true,
          validator: (rule, value, callback) => {
            if (!value || value.length === 0) {
              callback(new Error(t("global.pleaseSelect") + t("global.permission")));
            } else {
              callback();
            }
          },
          trigger: "blur"
        }
      ]
    });
    const fetchData = () => {
      loading.value = true;
      RoleAPI.getList(queryParams).then((data) => {
        dataList.value = (data == null ? void 0 : data.list) || [];
        total.value = data.item_total;
      }).finally(() => {
        loading.value = false;
      });
    };
    const getPermsList = () => {
      treeLoad.value = true;
      RoleAPI.getPermissionList().then((data) => {
        permissionList.value = (data == null ? void 0 : data.info) || [];
      }).finally(() => {
        treeLoad.value = false;
      });
    };
    const handleRefresh = () => {
      if (dialog.type === DialogTypeEnum.ADD) {
        queryParams.pageNum = 1;
      }
      if (dialog.type === DialogTypeEnum.UPDATE || dialog.type === DialogTypeEnum.DELETE) {
        if (((dataList == null ? void 0 : dataList.value) || []).length <= 1) {
          if (queryParams.pageNum === 1) {
            queryParams.pageNum = 1;
          } else {
            queryParams.pageNum = queryParams.pageNum - 1;
          }
        }
      }
      fetchData();
    };
    const handleOpenDialog = () => {
      dialog.visible = true;
      if (permissionList.value && permissionList.value.length <= 0) {
        getPermsList();
      }
    };
    const handleCloseDialog = () => {
      nextTick(() => {
        var _a;
        (_a = formRef.value) == null ? void 0 : _a.resetFields();
        setNodeData([]);
      });
      dialog.visible = false;
    };
    const handleAdd = () => {
      dialog.title = t("global.add");
      dialog.type = DialogTypeEnum.ADD;
      handleOpenDialog();
    };
    const handleEdit = (row) => {
      let { perm_codes, id, description, name } = row;
      dialog.title = t("global.modify");
      dialog.type = DialogTypeEnum.UPDATE;
      formData.id = id;
      formData.name = name;
      formData.description = description;
      formData.perms = perm_codes;
      setNodeData(perm_codes);
      handleOpenDialog();
    };
    const handleDel = async (row) => {
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
        RoleAPI.delRole(row).then(() => {
          handleRefresh();
          handleCloseDialog();
        }).finally(() => {
          loading.value = false;
        });
      } catch {
        return;
      }
    };
    const handleSubmit = () => {
      var _a;
      (_a = formRef.value) == null ? void 0 : _a.validate((valid) => {
        if (valid) {
          loading.value = true;
          let http = null;
          if (dialog.type === DialogTypeEnum.UPDATE) {
            http = RoleAPI.updateRole;
          } else {
            http = RoleAPI.addRole;
          }
          http(formData).then(() => {
            handleRefresh();
            handleCloseDialog();
          }).finally(() => {
            loading.value = false;
          });
        }
      });
    };
    function handleNodeClick(data, Nodes) {
      const { checkedKeys } = Nodes;
      formData.perms = checkedKeys;
    }
    function setNodeData(data) {
      nextTick(() => {
        var _a;
        (_a = treeRef.value) == null ? void 0 : _a.setCheckedKeys(data);
      });
    }
    onMounted(() => {
      fetchData();
      getPermsList();
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_table_column = ElTableColumn;
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_3;
      const _component_el_card = ElCard;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_tree = ElTree;
      const _component_el_scrollbar = ElScrollbar;
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
                  onClick: handleAdd,
                  type: "success",
                  icon: "plus"
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
              data: unref(dataList),
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
                  label: unref(t)("global.role") + unref(t)("roleList.name"),
                  prop: "name"
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  label: unref(t)("global.role") + unref(t)("roleList.desc"),
                  prop: "description"
                }, null, 8, ["label"]),
                createVNode(_component_el_table_column, {
                  "show-overflow-tooltip": "",
                  fixed: "right",
                  label: unref(t)("global.operation"),
                  width: "140"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_button, {
                      onClick: ($event) => handleEdit(scope.row),
                      type: "primary",
                      size: "small",
                      link: "",
                      icon: "edit"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("global.modify")), 1)
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_el_button, {
                      onClick: ($event) => handleDel(scope.row),
                      type: "danger",
                      size: "small",
                      link: "",
                      icon: "delete"
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
              "onUpdate:total": _cache[0] || (_cache[0] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[1] || (_cache[1] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[2] || (_cache[2] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: fetchData
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          width: "500px",
          "close-on-click-modal": false,
          onClose: handleCloseDialog
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
              ref_key: "formRef",
              ref: formRef,
              model: unref(formData),
              rules: unref(rules),
              "label-width": "80px",
              "label-position": "left"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: unref(t)("global.role") + unref(t)("roleList.name"),
                  prop: "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).name,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(formData).name = $event),
                      placeholder: unref(t)("global.pleaseEnter") + unref(t)("global.role") + unref(t)("roleList.name")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_form_item, {
                  label: unref(t)("global.role") + unref(t)("roleList.desc"),
                  prop: "description"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(formData).description,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(formData).description = $event),
                      type: "textarea",
                      placeholder: unref(t)("global.pleaseEnter") + unref(t)("global.role") + unref(t)("roleList.desc")
                    }, null, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_component_el_form_item, {
                  label: unref(t)("global.role") + unref(t)("global.permission"),
                  prop: "perms"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_scrollbar, {
                      height: "20vh",
                      style: { "width": "100%" }
                    }, {
                      default: withCtx(() => [
                        withDirectives(createVNode(_component_el_tree, {
                          ref_key: "treeRef",
                          ref: treeRef,
                          data: unref(permissionList),
                          "node-key": "code",
                          props: { children: "children", label: "name" },
                          "show-checkbox": "",
                          onCheck: handleNodeClick
                        }, null, 8, ["data"]), [
                          [_directive_loading, unref(treeLoad)]
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["label"])
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
