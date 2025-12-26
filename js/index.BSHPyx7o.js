import { t as buildProps, z as definePropType, v as iconPropType, b1 as isNumber, bn as componentSizes, _ as _export_sfc, d as defineComponent, b as useNamespace, r as ref, c as computed, M as isString, J as addUnit, I as watch, g as createElementBlock, f as openBlock, e as createBlock, l as renderSlot, k as normalizeStyle, w as withCtx, D as resolveDynamicComponent, i as unref, E as ElIcon, n as normalizeClass, q as withInstall, $ as withDirectives, ab as h, N as isNil, A as inject, C as createBaseVNode, Q as Fragment, R as renderList, m as createVNode, W as useSizeProp, bo as useSlots, h as createCommentVNode, a4 as createTextVNode, F as toDisplayString, y as provide, G as withNoopInstall, aJ as useDictStore, o as onMounted, aC as isRef, aK as httpRequest, bp as useUserStoreHook, S as reactive, bq as camera_default, au as resolveComponent, aI as ElMessage } from "./index.Dp4m6nBq.js";
import { g as getNormalizedProps, f as flattedChildren, E as ElDialog } from "./tag.CYa7Ow6I.js";
import { E as ElCheckboxGroup, a as ElCheckbox, b as ElFormItem, c as ElForm } from "./form-item.Clspqeam.js";
/* empty css                        */
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.D8uLsjJG.js";
import { E as ElSelect, a as ElOption, b as ElCard } from "./card.Bl4e-SGl.js";
import "./scrollbar.u3Wr4GmE.js";
import "./popper.DXIFQgs8.js";
import { E as ElInput } from "./input.BUoL4AzR.js";
import { E as ElRow, a as ElCol } from "./col.DUb0u56E.js";
import { E as ElDivider } from "./divider.Dw8pyPe-.js";
import { b as useFormSize, E as ElButton } from "./button.7O-VbLYM.js";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const avatarProps = buildProps({
  size: {
    type: [Number, String],
    values: componentSizes,
    default: "",
    validator: (val) => isNumber(val)
  },
  shape: {
    type: String,
    values: ["circle", "square"],
    default: "circle"
  },
  icon: {
    type: iconPropType
  },
  src: {
    type: String,
    default: ""
  },
  alt: String,
  srcSet: String,
  fit: {
    type: definePropType(String),
    default: "cover"
  }
});
const avatarEmits = {
  error: (evt) => evt instanceof Event
};
const _hoisted_1$2 = ["src", "alt", "srcset"];
const _sfc_main$4 = defineComponent({
  ...{
    name: "ElAvatar"
  },
  __name: "avatar",
  props: avatarProps,
  emits: avatarEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const ns = useNamespace("avatar");
    const hasLoadError = ref(false);
    const avatarClass = computed(() => {
      const { size, icon, shape } = props;
      const classList = [ns.b()];
      if (isString(size))
        classList.push(ns.m(size));
      if (icon)
        classList.push(ns.m("icon"));
      if (shape)
        classList.push(ns.m(shape));
      return classList;
    });
    const sizeStyle = computed(() => {
      const { size } = props;
      return isNumber(size) ? ns.cssVarBlock({
        size: addUnit(size)
      }) : void 0;
    });
    const fitStyle = computed(() => ({
      objectFit: props.fit
    }));
    watch(
      () => props.src,
      () => hasLoadError.value = false
    );
    function handleError(e) {
      hasLoadError.value = true;
      emit("error", e);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass(avatarClass.value),
          style: normalizeStyle(sizeStyle.value)
        },
        [
          (_ctx.src || _ctx.srcSet) && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
            key: 0,
            src: _ctx.src,
            alt: _ctx.alt,
            srcset: _ctx.srcSet,
            style: normalizeStyle(fitStyle.value),
            onError: handleError
          }, null, 44, _hoisted_1$2)) : _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
            ]),
            _: 1
          })) : renderSlot(_ctx.$slots, "default", { key: 2 })
        ],
        6
      );
    };
  }
});
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);
const ElAvatar = withInstall(Avatar);
const descriptionsKey = Symbol("elDescriptions");
var ElDescriptionsCell = defineComponent({
  name: "ElDescriptionsCell",
  props: {
    cell: {
      type: Object
    },
    tag: {
      type: String,
      default: "td"
    },
    type: {
      type: String
    }
  },
  setup() {
    const descriptions = inject(descriptionsKey, {});
    return {
      descriptions
    };
  },
  render() {
    var _a, _b, _c, _d;
    const item = getNormalizedProps(
      this.cell
    );
    const directives = (((_a = this.cell) == null ? void 0 : _a.dirs) || []).map((dire) => {
      const { dir, arg, modifiers, value } = dire;
      return [dir, value, arg, modifiers];
    });
    const { border, direction } = this.descriptions;
    const isVertical = direction === "vertical";
    const renderLabel = () => {
      var _a2, _b2, _c2;
      return ((_c2 = (_b2 = (_a2 = this.cell) == null ? void 0 : _a2.children) == null ? void 0 : _b2.label) == null ? void 0 : _c2.call(_b2)) || item.label;
    };
    const renderContent = () => {
      var _a2, _b2, _c2;
      return (_c2 = (_b2 = (_a2 = this.cell) == null ? void 0 : _a2.children) == null ? void 0 : _b2.default) == null ? void 0 : _c2.call(_b2);
    };
    const span = item.span;
    const rowspan = item.rowspan;
    const align = item.align ? `is-${item.align}` : "";
    const labelAlign = item.labelAlign ? `is-${item.labelAlign}` : align;
    const className = item.className;
    const labelClassName = item.labelClassName;
    const width = this.type === "label" ? (_c = (_b = item.labelWidth) != null ? _b : this.descriptions.labelWidth) != null ? _c : item.width : item.width;
    const style = {
      width: addUnit(width),
      minWidth: addUnit(item.minWidth)
    };
    const ns = useNamespace("descriptions");
    switch (this.type) {
      case "label":
        return withDirectives(
          h(
            this.tag,
            {
              style,
              class: [
                ns.e("cell"),
                ns.e("label"),
                ns.is("bordered-label", border),
                ns.is("vertical-label", isVertical),
                labelAlign,
                labelClassName
              ],
              colSpan: isVertical ? span : 1,
              rowspan: isVertical ? 1 : rowspan
            },
            renderLabel()
          ),
          directives
        );
      case "content":
        return withDirectives(
          h(
            this.tag,
            {
              style,
              class: [
                ns.e("cell"),
                ns.e("content"),
                ns.is("bordered-content", border),
                ns.is("vertical-content", isVertical),
                align,
                className
              ],
              colSpan: isVertical ? span : span * 2 - 1,
              rowspan: isVertical ? rowspan * 2 - 1 : rowspan
            },
            renderContent()
          ),
          directives
        );
      default: {
        const label = renderLabel();
        const labelStyle = {};
        const width2 = addUnit((_d = item.labelWidth) != null ? _d : this.descriptions.labelWidth);
        if (width2) {
          labelStyle.width = width2;
          labelStyle.display = "inline-block";
        }
        return withDirectives(
          h(
            "td",
            {
              style,
              class: [ns.e("cell"), align],
              colSpan: span,
              rowspan
            },
            [
              !isNil(label) ? h(
                "span",
                {
                  style: labelStyle,
                  class: [ns.e("label"), labelClassName]
                },
                label
              ) : void 0,
              h(
                "span",
                {
                  class: [ns.e("content"), className]
                },
                renderContent()
              )
            ]
          ),
          directives
        );
      }
    }
  }
});
const descriptionsRowProps = buildProps({
  row: {
    type: definePropType(Array),
    default: () => []
  }
});
const _hoisted_1$1 = { key: 1 };
const _sfc_main$3 = defineComponent({
  ...{
    name: "ElDescriptionsRow"
  },
  __name: "descriptions-row",
  props: descriptionsRowProps,
  setup(__props) {
    const descriptions = inject(descriptionsKey, {});
    return (_ctx, _cache) => {
      return unref(descriptions).direction === "vertical" ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [
          createBaseVNode("tr", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.row, (cell, _index) => {
                return openBlock(), createBlock(unref(ElDescriptionsCell), {
                  key: `tr1-${_index}`,
                  cell,
                  tag: "th",
                  type: "label"
                }, null, 8, ["cell"]);
              }),
              128
            ))
          ]),
          createBaseVNode("tr", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(_ctx.row, (cell, _index) => {
                return openBlock(), createBlock(unref(ElDescriptionsCell), {
                  key: `tr2-${_index}`,
                  cell,
                  tag: "td",
                  type: "content"
                }, null, 8, ["cell"]);
              }),
              128
            ))
          ])
        ],
        64
      )) : (openBlock(), createElementBlock("tr", _hoisted_1$1, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList(_ctx.row, (cell, _index) => {
            return openBlock(), createElementBlock(
              Fragment,
              {
                key: `tr3-${_index}`
              },
              [
                unref(descriptions).border ? (openBlock(), createElementBlock(
                  Fragment,
                  { key: 0 },
                  [
                    createVNode(unref(ElDescriptionsCell), {
                      cell,
                      tag: "td",
                      type: "label"
                    }, null, 8, ["cell"]),
                    createVNode(unref(ElDescriptionsCell), {
                      cell,
                      tag: "td",
                      type: "content"
                    }, null, 8, ["cell"])
                  ],
                  64
                )) : (openBlock(), createBlock(unref(ElDescriptionsCell), {
                  key: 1,
                  cell,
                  tag: "td",
                  type: "both"
                }, null, 8, ["cell"]))
              ],
              64
            );
          }),
          128
        ))
      ]));
    };
  }
});
var ElDescriptionsRow = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/descriptions-row.vue"]]);
const descriptionProps = buildProps({
  border: Boolean,
  column: {
    type: Number,
    default: 3
  },
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  size: useSizeProp,
  title: {
    type: String,
    default: ""
  },
  extra: {
    type: String,
    default: ""
  },
  labelWidth: {
    type: [String, Number]
  }
});
const COMPONENT_NAME = "ElDescriptionsItem";
const _sfc_main$2 = defineComponent({
  ...{
    name: "ElDescriptions"
  },
  __name: "description",
  props: descriptionProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("descriptions");
    const descriptionsSize = useFormSize();
    const slots = useSlots();
    provide(descriptionsKey, props);
    const descriptionKls = computed(() => [ns.b(), ns.m(descriptionsSize.value)]);
    const filledNode = (node, span, count, isLast = false) => {
      if (!node.props) {
        node.props = {};
      }
      if (span > count) {
        node.props.span = count;
      }
      if (isLast) {
        node.props.span = span;
      }
      return node;
    };
    const getRows = () => {
      if (!slots.default)
        return [];
      const children = flattedChildren(slots.default()).filter(
        (node) => {
          var _a;
          return ((_a = node == null ? void 0 : node.type) == null ? void 0 : _a.name) === COMPONENT_NAME;
        }
      );
      const rows = [];
      let temp = [];
      let count = props.column;
      let totalSpan = 0;
      const rowspanTemp = [];
      children.forEach((node, index2) => {
        var _a, _b, _c;
        const span = ((_a = node.props) == null ? void 0 : _a.span) || 1;
        const rowspan = ((_b = node.props) == null ? void 0 : _b.rowspan) || 1;
        const rowNo = rows.length;
        rowspanTemp[rowNo] || (rowspanTemp[rowNo] = 0);
        if (rowspan > 1) {
          for (let i = 1; i < rowspan; i++) {
            rowspanTemp[_c = rowNo + i] || (rowspanTemp[_c] = 0);
            rowspanTemp[rowNo + i]++;
            totalSpan++;
          }
        }
        if (rowspanTemp[rowNo] > 0) {
          count -= rowspanTemp[rowNo];
          rowspanTemp[rowNo] = 0;
        }
        if (index2 < children.length - 1) {
          totalSpan += span > count ? count : span;
        }
        if (index2 === children.length - 1) {
          const lastSpan = props.column - totalSpan % props.column;
          temp.push(filledNode(node, lastSpan, count, true));
          rows.push(temp);
          return;
        }
        if (span < count) {
          count -= span;
          temp.push(node);
        } else {
          temp.push(filledNode(node, span, count));
          rows.push(temp);
          count = props.column;
          temp = [];
        }
      });
      return rows;
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(descriptionKls.value)
        },
        [
          _ctx.title || _ctx.extra || _ctx.$slots.title || _ctx.$slots.extra ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(unref(ns).e("header"))
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(ns).e("title"))
                },
                [
                  renderSlot(_ctx.$slots, "title", {}, () => [
                    createTextVNode(
                      toDisplayString(_ctx.title),
                      1
                    )
                  ])
                ],
                2
              ),
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(ns).e("extra"))
                },
                [
                  renderSlot(_ctx.$slots, "extra", {}, () => [
                    createTextVNode(
                      toDisplayString(_ctx.extra),
                      1
                    )
                  ])
                ],
                2
              )
            ],
            2
          )) : createCommentVNode("v-if", true),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("body"))
            },
            [
              createBaseVNode(
                "table",
                {
                  class: normalizeClass([unref(ns).e("table"), unref(ns).is("bordered", _ctx.border)])
                },
                [
                  createBaseVNode("tbody", null, [
                    (openBlock(true), createElementBlock(
                      Fragment,
                      null,
                      renderList(getRows(), (row, _index) => {
                        return openBlock(), createBlock(ElDescriptionsRow, {
                          key: _index,
                          row
                        }, null, 8, ["row"]);
                      }),
                      128
                    ))
                  ])
                ],
                2
              )
            ],
            2
          )
        ],
        2
      );
    };
  }
});
var Descriptions = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/descriptions/src/description.vue"]]);
const columnAlignment = ["left", "center", "right"];
const descriptionItemProps = buildProps({
  label: {
    type: String,
    default: ""
  },
  span: {
    type: Number,
    default: 1
  },
  rowspan: {
    type: Number,
    default: 1
  },
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  labelWidth: {
    type: [String, Number]
  },
  align: {
    type: String,
    values: columnAlignment,
    default: "left"
  },
  labelAlign: {
    type: String,
    values: columnAlignment
  },
  className: {
    type: String,
    default: ""
  },
  labelClassName: {
    type: String,
    default: ""
  }
});
const DescriptionItem = defineComponent({
  name: COMPONENT_NAME,
  props: descriptionItemProps
});
const ElDescriptions = withInstall(Descriptions, {
  DescriptionsItem: DescriptionItem
});
const ElDescriptionsItem = withNoopInstall(DescriptionItem);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    code: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number, Array],
      required: false
    },
    type: {
      type: String,
      default: "select",
      validator: (value) => ["select", "radio", "checkbox"].includes(value)
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object,
      default: () => {
        return {
          width: "300px"
        };
      }
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const dictStore = useDictStore();
    const props = __props;
    const emit = __emit;
    const options = ref([]);
    const selectedValue = ref(
      typeof props.modelValue === "string" || typeof props.modelValue === "number" ? props.modelValue : Array.isArray(props.modelValue) ? props.modelValue : void 0
    );
    watch(
      [() => props.modelValue, () => options.value],
      ([newValue, newOptions]) => {
        if (newOptions.length > 0 && newValue !== void 0) {
          if (props.type === "checkbox") {
            selectedValue.value = Array.isArray(newValue) ? newValue : [];
          } else {
            const matchedOption = newOptions.find(
              (option) => String(option.value) === String(newValue)
            );
            selectedValue.value = matchedOption == null ? void 0 : matchedOption.value;
          }
        } else {
          selectedValue.value = void 0;
        }
      },
      { immediate: true }
    );
    function handleChange(val) {
      emit("update:modelValue", val);
    }
    onMounted(async () => {
      await dictStore.loadDictItems(props.code);
      options.value = dictStore.getDictItems(props.code);
    });
    return (_ctx, _cache) => {
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup;
      return __props.type === "select" ? (openBlock(), createBlock(_component_el_select, {
        key: 0,
        modelValue: unref(selectedValue),
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(selectedValue) ? selectedValue.value = $event : null),
        placeholder: __props.placeholder,
        disabled: __props.disabled,
        clearable: "",
        style: normalizeStyle(__props.style),
        onChange: handleChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (option) => {
            return openBlock(), createBlock(_component_el_option, {
              key: option.value,
              label: option.label,
              value: option.value
            }, null, 8, ["label", "value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "placeholder", "disabled", "style"])) : __props.type === "radio" ? (openBlock(), createBlock(_component_el_radio_group, {
        key: 1,
        modelValue: unref(selectedValue),
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selectedValue) ? selectedValue.value = $event : null),
        disabled: __props.disabled,
        style: normalizeStyle(__props.style),
        onChange: handleChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (option) => {
            return openBlock(), createBlock(_component_el_radio, {
              key: option.value,
              value: option.value
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(option.label), 1)
              ]),
              _: 2
            }, 1032, ["value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "style"])) : __props.type === "checkbox" ? (openBlock(), createBlock(_component_el_checkbox_group, {
        key: 2,
        modelValue: unref(selectedValue),
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(selectedValue) ? selectedValue.value = $event : null),
        disabled: __props.disabled,
        style: normalizeStyle(__props.style),
        onChange: handleChange
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(options), (option) => {
            return openBlock(), createBlock(_component_el_checkbox, {
              key: option.value,
              value: option.value
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(option.label), 1)
              ]),
              _: 2
            }, 1032, ["value"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "disabled", "style"])) : createCommentVNode("", true);
    };
  }
});
const USER_BASE_URL = "/api/v1/users";
const UserAPI = {
  /**
   * 获取当前登录用户信息
   *
   * @returns 登录用户昵称、头像信息，包括角色和权限
   */
  getInfo() {
    return httpRequest({
      url: `${USER_BASE_URL}/me`,
      method: "get"
    });
  },
  /**
   * 获取用户分页列表
   *
   * @param queryParams 查询参数
   */
  getPage(queryParams) {
    return httpRequest({
      url: `${USER_BASE_URL}/page`,
      method: "get",
      params: queryParams
    });
  },
  /**
   * 获取用户表单详情
   *
   * @param userId 用户ID
   * @returns 用户表单详情
   */
  getFormData(userId) {
    return httpRequest({
      url: `${USER_BASE_URL}/${userId}/form`,
      method: "get"
    });
  },
  /**
   * 添加用户
   *
   * @param data 用户表单数据
   */
  create(data) {
    return httpRequest({
      url: `${USER_BASE_URL}`,
      method: "post",
      data
    });
  },
  /**
   * 修改用户
   *
   * @param id 用户ID
   * @param data 用户表单数据
   */
  update(id, data) {
    return httpRequest({
      url: `${USER_BASE_URL}/${id}`,
      method: "put",
      data
    });
  },
  /**
   * 修改用户密码
   *
   * @param id 用户ID
   * @param password 新密码
   */
  resetPassword(id, password) {
    return httpRequest({
      url: `${USER_BASE_URL}/${id}/password/reset`,
      method: "put",
      params: { password }
    });
  },
  /**
   * 批量删除用户，多个以英文逗号(,)分割
   *
   * @param ids 用户ID字符串，多个以英文逗号(,)分割
   */
  deleteByIds(ids) {
    return httpRequest({
      url: `${USER_BASE_URL}/${ids}`,
      method: "delete"
    });
  },
  /** 下载用户导入模板 */
  downloadTemplate() {
    return httpRequest({
      url: `${USER_BASE_URL}/template`,
      method: "get",
      responseType: "blob"
    });
  },
  /**
   * 导出用户
   *
   * @param queryParams 查询参数
   */
  export(queryParams) {
    return httpRequest({
      url: `${USER_BASE_URL}/export`,
      method: "get",
      params: queryParams,
      responseType: "blob"
    });
  },
  /**
   * 导入用户
   *
   * @param deptId 部门ID
   * @param file 导入文件
   */
  import(deptId, file) {
    const formData = new FormData();
    formData.append("file", file);
    return httpRequest({
      url: `${USER_BASE_URL}/import`,
      method: "post",
      params: { deptId },
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },
  /** 获取个人中心用户信息 */
  getProfile() {
    return httpRequest({
      url: `${USER_BASE_URL}/profile`,
      method: "get"
    });
  },
  /** 修改个人中心用户信息 */
  updateProfile(data) {
    return httpRequest({
      url: `${USER_BASE_URL}/profile`,
      method: "put",
      data
    });
  },
  /** 修改个人中心用户密码 */
  changePassword(data) {
    return httpRequest({
      url: `${USER_BASE_URL}/password`,
      method: "put",
      data
    });
  },
  /** 发送短信验证码（绑定或更换手机号）*/
  sendMobileCode(mobile) {
    return httpRequest({
      url: `${USER_BASE_URL}/mobile/code`,
      method: "post",
      params: { mobile }
    });
  },
  /** 绑定或更换手机号 */
  bindOrChangeMobile(data) {
    return httpRequest({
      url: `${USER_BASE_URL}/mobile`,
      method: "put",
      data
    });
  },
  /** 发送邮箱验证码（绑定或更换邮箱）*/
  sendEmailCode(email) {
    return httpRequest({
      url: `${USER_BASE_URL}/email/code`,
      method: "post",
      params: { email }
    });
  },
  /** 绑定或更换邮箱 */
  bindOrChangeEmail(data) {
    return httpRequest({
      url: `${USER_BASE_URL}/email`,
      method: "put",
      data
    });
  },
  /**
   *  获取用户下拉列表
   */
  getOptions() {
    return httpRequest({
      url: `${USER_BASE_URL}/options`,
      method: "get"
    });
  }
};
const FileAPI = {
  /** 上传文件 （传入 FormData，上传进度回调） */
  upload(formData, onProgress) {
    return httpRequest({
      url: "/api/v1/files",
      method: "post",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress: (progressEvent) => {
        if (progressEvent.total) {
          const percent = Math.round(progressEvent.loaded * 100 / progressEvent.total);
          onProgress == null ? void 0 : onProgress(percent);
        }
      }
    });
  },
  /** 上传文件（传入 File） */
  uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    return httpRequest({
      url: "/api/v1/files",
      method: "post",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" }
    });
  },
  /** 删除文件 */
  delete(filePath) {
    return httpRequest({
      url: "/api/v1/files",
      method: "delete",
      params: { filePath }
    });
  },
  /** 下载文件 */
  download(url, fileName) {
    return httpRequest({
      url,
      method: "get",
      responseType: "blob"
    }).then((res) => {
      const blob = new Blob([res.data]);
      const a = document.createElement("a");
      const urlObject = window.URL.createObjectURL(blob);
      a.href = urlObject;
      a.download = fileName || "下载文件";
      a.click();
      window.URL.revokeObjectURL(urlObject);
    });
  }
};
const _hoisted_1 = { class: "profile-container" };
const _hoisted_2 = { class: "user-info" };
const _hoisted_3 = { class: "avatar-wrapper" };
const _hoisted_4 = { class: "user-name" };
const _hoisted_5 = { class: "nickname" };
const _hoisted_6 = { class: "user-role" };
const _hoisted_7 = { class: "security-item" };
const _hoisted_8 = { class: "dialog-footer" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const userStore = useUserStoreHook();
    const userProfile = ref({});
    const dialog = reactive({
      visible: false,
      title: "",
      type: ""
      // 修改账号资料,修改密码、绑定手机、绑定邮箱
    });
    const userProfileFormRef = ref();
    const passwordChangeFormRef = ref();
    const mobileBindingFormRef = ref();
    const emailBindingFormRef = ref();
    const userProfileForm = reactive({});
    const passwordChangeForm = reactive({});
    const mobileUpdateForm = reactive({});
    const emailUpdateForm = reactive({});
    const mobileCountdown = ref(0);
    const mobileTimer = ref();
    const emailCountdown = ref(0);
    const emailTimer = ref();
    const passwordChangeRules = {
      oldPassword: [{ required: true, message: "请输入原密码", trigger: "blur" }],
      newPassword: [{ required: true, message: "请输入新密码", trigger: "blur" }],
      confirmPassword: [{ required: true, message: "请再次输入新密码", trigger: "blur" }]
    };
    const mobileBindingRules = {
      mobile: [
        { required: true, message: "请输入手机号", trigger: "blur" },
        {
          pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
          message: "请输入正确的手机号码",
          trigger: "blur"
        }
      ],
      code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
    };
    const emailBindingRules = {
      email: [
        { required: true, message: "请输入邮箱", trigger: "blur" },
        {
          pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
          message: "请输入正确的邮箱地址",
          trigger: "blur"
        }
      ],
      code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
    };
    const handleOpenDialog = (type) => {
      dialog.type = type;
      dialog.visible = true;
      switch (type) {
        case "account":
          dialog.title = "账号资料";
          userProfileForm.id = userProfile.value.id;
          userProfileForm.nickname = userProfile.value.nickname;
          userProfileForm.gender = userProfile.value.gender;
          break;
        case "password":
          dialog.title = "修改密码";
          break;
        case "mobile":
          dialog.title = "绑定手机";
          break;
        case "email":
          dialog.title = "绑定邮箱";
          break;
      }
    };
    function handleSendMobileCode() {
      if (!mobileUpdateForm.mobile) {
        ElMessage.error("请输入手机号");
        return;
      }
      const reg = /^1[3-9]\d{9}$/;
      if (!reg.test(mobileUpdateForm.mobile)) {
        ElMessage.error("手机号格式不正确");
        return;
      }
      UserAPI.sendMobileCode(mobileUpdateForm.mobile).then(() => {
        ElMessage.success("验证码发送成功");
        mobileCountdown.value = 60;
        mobileTimer.value = setInterval(() => {
          if (mobileCountdown.value > 0) {
            mobileCountdown.value -= 1;
          } else {
            clearInterval(mobileTimer.value);
          }
        }, 1e3);
      });
    }
    function handleSendEmailCode() {
      if (!emailUpdateForm.email) {
        ElMessage.error("请输入邮箱");
        return;
      }
      const reg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
      if (!reg.test(emailUpdateForm.email)) {
        ElMessage.error("邮箱格式不正确");
        return;
      }
      UserAPI.sendEmailCode(emailUpdateForm.email).then(() => {
        ElMessage.success("验证码发送成功");
        emailCountdown.value = 60;
        emailTimer.value = setInterval(() => {
          if (emailCountdown.value > 0) {
            emailCountdown.value -= 1;
          } else {
            clearInterval(emailTimer.value);
          }
        }, 1e3);
      });
    }
    const handleSubmit = async () => {
      if (dialog.type === "account") {
        UserAPI.updateProfile(userProfileForm).then(() => {
          ElMessage.success("账号资料修改成功");
          dialog.visible = false;
          loadUserProfile();
        });
      } else if (dialog.type === "password") {
        if (passwordChangeForm.newPassword !== passwordChangeForm.confirmPassword) {
          ElMessage.error("两次输入的密码不一致");
          return;
        }
        UserAPI.changePassword(passwordChangeForm).then(() => {
          ElMessage.success("密码修改成功");
          dialog.visible = false;
        });
      } else if (dialog.type === "mobile") {
        UserAPI.bindOrChangeMobile(mobileUpdateForm).then(() => {
          ElMessage.success("手机号绑定成功");
          dialog.visible = false;
          loadUserProfile();
        });
      } else if (dialog.type === "email") {
        UserAPI.bindOrChangeEmail(emailUpdateForm).then(() => {
          ElMessage.success("邮箱绑定成功");
          dialog.visible = false;
          loadUserProfile();
        });
      }
    };
    const handleCancel = () => {
      var _a, _b, _c, _d;
      dialog.visible = false;
      if (dialog.type === "account") {
        (_a = userProfileFormRef.value) == null ? void 0 : _a.resetFields();
      } else if (dialog.type === "password") {
        (_b = passwordChangeFormRef.value) == null ? void 0 : _b.resetFields();
      } else if (dialog.type === "mobile") {
        (_c = mobileBindingFormRef.value) == null ? void 0 : _c.resetFields();
      } else if (dialog.type === "email") {
        (_d = emailBindingFormRef.value) == null ? void 0 : _d.resetFields();
      }
    };
    const fileInput = ref(null);
    const triggerFileUpload = () => {
      var _a;
      (_a = fileInput.value) == null ? void 0 : _a.click();
    };
    const handleFileChange = async (event) => {
      const target = event.target;
      const file = target.files ? target.files[0] : null;
      if (file) {
        try {
          const data = await FileAPI.uploadFile(file);
          await UserAPI.updateProfile({
            avatar: data.url
          });
          userStore.userInfo.avatar = data.url;
        } catch (error) {
          console.error("头像上传失败：" + error);
          ElMessage.error("头像上传失败");
        }
      }
    };
    const loadUserProfile = async () => {
      const data = await UserAPI.getProfile();
      userProfile.value = data;
    };
    onMounted(async () => {
    });
    return (_ctx, _cache) => {
      const _component_el_avatar = ElAvatar;
      const _component_el_button = ElButton;
      const _component_Edit = resolveComponent("Edit");
      const _component_el_icon = ElIcon;
      const _component_el_divider = ElDivider;
      const _component_el_card = ElCard;
      const _component_el_col = ElCol;
      const _component_Male = resolveComponent("Male");
      const _component_Female = resolveComponent("Female");
      const _component_el_descriptions_item = ElDescriptionsItem;
      const _component_el_descriptions = ElDescriptions;
      const _component_el_row = ElRow;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_Dict = _sfc_main$1;
      const _component_el_form = ElForm;
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_row, { gutter: 20 }, {
          default: withCtx(() => [
            createVNode(_component_el_col, { span: 8 }, {
              default: withCtx(() => [
                createVNode(_component_el_card, { class: "user-card" }, {
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_2, [
                      createBaseVNode("div", _hoisted_3, [
                        createVNode(_component_el_avatar, {
                          src: unref(userStore).userInfo.avatar,
                          size: 100
                        }, null, 8, ["src"]),
                        createVNode(_component_el_button, {
                          type: "info",
                          class: "avatar-edit-btn",
                          circle: "",
                          icon: unref(camera_default),
                          size: "small",
                          onClick: triggerFileUpload
                        }, null, 8, ["icon"]),
                        createBaseVNode("input", {
                          ref_key: "fileInput",
                          ref: fileInput,
                          type: "file",
                          style: { "display": "none" },
                          accept: "image/*",
                          onChange: handleFileChange
                        }, null, 544)
                      ]),
                      createBaseVNode("div", _hoisted_4, [
                        createBaseVNode("span", _hoisted_5, toDisplayString(unref(userProfile).nickname), 1),
                        createVNode(_component_el_icon, {
                          class: "edit-icon",
                          onClick: _cache[0] || (_cache[0] = ($event) => handleOpenDialog(
                            "account"
                            /* ACCOUNT */
                          ))
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_Edit)
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("div", _hoisted_6, toDisplayString(unref(userProfile).roleNames), 1)
                    ]),
                    createVNode(_component_el_divider),
                    _cache[16] || (_cache[16] = createBaseVNode("div", { class: "user-stats" }, [
                      createBaseVNode("div", { class: "stat-item" }, [
                        createBaseVNode("div", { class: "stat-value" }, "0"),
                        createBaseVNode("div", { class: "stat-label" }, "待办")
                      ]),
                      createBaseVNode("div", { class: "stat-item" }, [
                        createBaseVNode("div", { class: "stat-value" }, "0"),
                        createBaseVNode("div", { class: "stat-label" }, "消息")
                      ]),
                      createBaseVNode("div", { class: "stat-item" }, [
                        createBaseVNode("div", { class: "stat-value" }, "0"),
                        createBaseVNode("div", { class: "stat-label" }, "通知")
                      ])
                    ], -1))
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }),
            createVNode(_component_el_col, { span: 16 }, {
              default: withCtx(() => [
                createVNode(_component_el_card, { class: "info-card" }, {
                  header: withCtx(() => [..._cache[17] || (_cache[17] = [
                    createBaseVNode("div", { class: "card-header" }, [
                      createBaseVNode("span", null, "账号信息")
                    ], -1)
                  ])]),
                  default: withCtx(() => [
                    createVNode(_component_el_descriptions, {
                      column: 1,
                      border: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_descriptions_item, { label: "用户名" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).username) + " ", 1),
                            unref(userProfile).gender === 1 ? (openBlock(), createBlock(_component_el_icon, {
                              key: 0,
                              class: "gender-icon male"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Male)
                              ]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_icon, {
                              key: 1,
                              class: "gender-icon female"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_Female)
                              ]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_descriptions_item, { label: "手机号码" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).mobile || "未绑定") + " ", 1),
                            unref(userProfile).mobile ? (openBlock(), createBlock(_component_el_button, {
                              key: 0,
                              type: "primary",
                              link: "",
                              onClick: _cache[1] || (_cache[1] = () => handleOpenDialog(
                                "mobile"
                                /* MOBILE */
                              ))
                            }, {
                              default: withCtx(() => [..._cache[18] || (_cache[18] = [
                                createTextVNode(" 更换 ", -1)
                              ])]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_button, {
                              key: 1,
                              type: "primary",
                              link: "",
                              onClick: _cache[2] || (_cache[2] = () => handleOpenDialog(
                                "mobile"
                                /* MOBILE */
                              ))
                            }, {
                              default: withCtx(() => [..._cache[19] || (_cache[19] = [
                                createTextVNode(" 绑定 ", -1)
                              ])]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_descriptions_item, { label: "邮箱" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).email || "未绑定") + " ", 1),
                            unref(userProfile).email ? (openBlock(), createBlock(_component_el_button, {
                              key: 0,
                              type: "primary",
                              link: "",
                              onClick: _cache[3] || (_cache[3] = () => handleOpenDialog(
                                "email"
                                /* EMAIL */
                              ))
                            }, {
                              default: withCtx(() => [..._cache[20] || (_cache[20] = [
                                createTextVNode(" 更换 ", -1)
                              ])]),
                              _: 1
                            })) : (openBlock(), createBlock(_component_el_button, {
                              key: 1,
                              type: "primary",
                              link: "",
                              onClick: _cache[4] || (_cache[4] = () => handleOpenDialog(
                                "email"
                                /* EMAIL */
                              ))
                            }, {
                              default: withCtx(() => [..._cache[21] || (_cache[21] = [
                                createTextVNode(" 绑定 ", -1)
                              ])]),
                              _: 1
                            }))
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_descriptions_item, { label: "部门" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).deptName), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(_component_el_descriptions_item, { label: "创建时间" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(userProfile).createTime), 1)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_el_card, { class: "security-card" }, {
                  header: withCtx(() => [..._cache[22] || (_cache[22] = [
                    createBaseVNode("div", { class: "card-header" }, [
                      createBaseVNode("span", null, "安全设置")
                    ], -1)
                  ])]),
                  default: withCtx(() => [
                    createBaseVNode("div", _hoisted_7, [
                      _cache[24] || (_cache[24] = createBaseVNode("div", { class: "security-info" }, [
                        createBaseVNode("div", { class: "security-title" }, "账户密码"),
                        createBaseVNode("div", { class: "security-desc" }, "定期修改密码有助于保护账户安全")
                      ], -1)),
                      createVNode(_component_el_button, {
                        type: "primary",
                        link: "",
                        onClick: _cache[5] || (_cache[5] = () => handleOpenDialog(
                          "password"
                          /* PASSWORD */
                        ))
                      }, {
                        default: withCtx(() => [..._cache[23] || (_cache[23] = [
                          createTextVNode(" 修改 ", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          width: 500
        }, {
          footer: withCtx(() => [
            createBaseVNode("span", _hoisted_8, [
              createVNode(_component_el_button, { onClick: handleCancel }, {
                default: withCtx(() => [..._cache[25] || (_cache[25] = [
                  createTextVNode("取消", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_el_button, {
                type: "primary",
                onClick: handleSubmit
              }, {
                default: withCtx(() => [..._cache[26] || (_cache[26] = [
                  createTextVNode("确定", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            unref(dialog).type === "account" ? (openBlock(), createBlock(_component_el_form, {
              key: 0,
              ref_key: "userProfileFormRef",
              ref: userProfileFormRef,
              model: unref(userProfileForm),
              "label-width": 100
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, { label: "昵称" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(userProfileForm).nickname,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(userProfileForm).nickname = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, { label: "性别" }, {
                  default: withCtx(() => [
                    createVNode(_component_Dict, {
                      modelValue: unref(userProfileForm).gender,
                      "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(userProfileForm).gender = $event),
                      code: "gender"
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])) : createCommentVNode("", true),
            unref(dialog).type === "password" ? (openBlock(), createBlock(_component_el_form, {
              key: 1,
              ref_key: "passwordChangeFormRef",
              ref: passwordChangeFormRef,
              model: unref(passwordChangeForm),
              rules: passwordChangeRules,
              "label-width": 100
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "原密码",
                  prop: "oldPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(passwordChangeForm).oldPassword,
                      "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(passwordChangeForm).oldPassword = $event),
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "新密码",
                  prop: "newPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(passwordChangeForm).newPassword,
                      "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(passwordChangeForm).newPassword = $event),
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "确认密码",
                  prop: "confirmPassword"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(passwordChangeForm).confirmPassword,
                      "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(passwordChangeForm).confirmPassword = $event),
                      type: "password",
                      "show-password": ""
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])) : unref(dialog).type === "mobile" ? (openBlock(), createBlock(_component_el_form, {
              key: 2,
              ref_key: "mobileBindingFormRef",
              ref: mobileBindingFormRef,
              model: unref(mobileUpdateForm),
              rules: mobileBindingRules,
              "label-width": 100
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "手机号码",
                  prop: "mobile"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(mobileUpdateForm).mobile,
                      "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(mobileUpdateForm).mobile = $event),
                      style: { "width": "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "验证码",
                  prop: "code"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(mobileUpdateForm).code,
                      "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(mobileUpdateForm).code = $event),
                      style: { "width": "250px" }
                    }, {
                      append: withCtx(() => [
                        createVNode(_component_el_button, {
                          disabled: unref(mobileCountdown) > 0,
                          onClick: handleSendMobileCode
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(mobileCountdown) > 0 ? `${unref(mobileCountdown)}s后重新发送` : "发送验证码"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])) : unref(dialog).type === "email" ? (openBlock(), createBlock(_component_el_form, {
              key: 3,
              ref_key: "emailBindingFormRef",
              ref: emailBindingFormRef,
              model: unref(emailUpdateForm),
              rules: emailBindingRules,
              "label-width": 100
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, {
                  label: "邮箱",
                  prop: "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(emailUpdateForm).email,
                      "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(emailUpdateForm).email = $event),
                      style: { "width": "250px" }
                    }, null, 8, ["modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_el_form_item, {
                  label: "验证码",
                  prop: "code"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(emailUpdateForm).code,
                      "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(emailUpdateForm).code = $event),
                      style: { "width": "250px" }
                    }, {
                      append: withCtx(() => [
                        createVNode(_component_el_button, {
                          disabled: unref(emailCountdown) > 0,
                          onClick: handleSendEmailCode
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(emailCountdown) > 0 ? `${unref(emailCountdown)}s后重新发送` : "发送验证码"), 1)
                          ]),
                          _: 1
                        }, 8, ["disabled"])
                      ]),
                      _: 1
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["model"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-d2fac5f1"]]);
export {
  index as default
};
