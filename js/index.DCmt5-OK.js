import { t as buildProps, bb as keysOf, bu as TypeComponentsMap, _ as _export_sfc, d as defineComponent, bo as useSlots, b as useNamespace, r as ref, c as computed, e as createBlock, f as openBlock, w as withCtx, $ as withDirectives, C as createBaseVNode, n as normalizeClass, i as unref, h as createCommentVNode, E as ElIcon, l as renderSlot, D as resolveDynamicComponent, g as createElementBlock, a4 as createTextVNode, F as toDisplayString, Q as Fragment, m as createVNode, bv as TypeComponents, a1 as vShow, T as Transition, q as withInstall, s as shallowRef, ab as h, bw as triggerRef, o as onMounted, bx as isVNode, z as definePropType, by as warning_filled_default, bz as circle_check_default, bA as circle_close_default, a$ as check_default, a2 as close_default, bB as isFunction, M as isString, k as normalizeStyle, P as watchEffect, ad as isArray, b1 as isNumber, bC as Comment, bn as componentSizes, I as watch, B as getCurrentInstance, y as provide, v as iconPropType, A as inject, aa as onBeforeUnmount, G as withNoopInstall, a as useEventListener, K as getEventCode, L as EVENT_CODE, U as nextTick, aT as toRefs, bD as isEmpty, N as isNil, bE as isEqual, H as isClient, S as reactive, bF as requireCodemirror, aK as httpRequest, bG as useClipboard, au as resolveComponent, a3 as withKeys, aC as isRef, R as renderList, bH as R, aI as ElMessage, bI as DictAPI } from "./index.De-GHSdr.js";
import { L as Loading, v as vLoading, E as ElTable, a as ElTableColumn, _ as __unplugin_components_3 } from "./table-column.BMha5teS.js";
import { f as flattedChildren, P as PatchFlags, i as isFragment, b as isValidElementNode, a as ElTag, E as ElDialog } from "./tag.Cu0zVICl.js";
import { E as ElDrawer } from "./drawer.oezZaCsh.js";
import { E as ElLink } from "./link.BfuMWG9x.js";
import { E as ElScrollbar } from "./scrollbar.BF0eOpSA.js";
import { E as ElTree, t as treeProps } from "./tree.GIOKdX8f.js";
import { b as ElFormItem, c as ElForm, a as ElCheckbox, E as ElCheckboxGroup, d as ElCheckboxButton } from "./form-item.DM_PD3Nw.js";
import "./text.HbSGHUL_.js";
/* empty css                        */
import { E as ElSelect, a as ElOption, e as escapeStringRegexp, s as selectKey, c as selectProps, b as ElCard } from "./card.CfvnB3Mt.js";
import { p as pick, E as ElTooltip } from "./popper.CCtuv0lm.js";
import { E as ElButton } from "./button.Cfu2-kaF.js";
import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from "./dropdown-item.D73FzG8r.js";
/* empty css                 */
import { E as ElRadioGroup, b as ElRadioButton } from "./radio-group.Bk-Htqxv.js";
import { E as ElRow, a as ElCol } from "./col.DvwdoChv.js";
import { C as CHANGE_EVENT, U as UPDATE_MODEL_EVENT, E as ElInput } from "./input.BgOfymY-.js";
import { E as ElMessageBox } from "./index.BSh_TaTU.js";
import "./debounce.1gipiOZE.js";
import "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./index.awnU70ka.js";
const alertEffects = ["light", "dark"];
const alertProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  type: {
    type: String,
    values: keysOf(TypeComponentsMap),
    default: "info"
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeText: {
    type: String,
    default: ""
  },
  showIcon: Boolean,
  center: Boolean,
  effect: {
    type: String,
    values: alertEffects,
    default: "light"
  },
  showAfter: Number,
  hideAfter: Number,
  autoClose: Number
});
const alertEmits = {
  close: (evt) => evt instanceof MouseEvent
};
const _sfc_main$5 = defineComponent({
  ...{
    name: "ElAlert"
  },
  __name: "alert",
  props: alertProps,
  emits: alertEmits,
  setup(__props, { emit: __emit }) {
    const { Close } = TypeComponents;
    const props = __props;
    const emit = __emit;
    const slots = useSlots();
    const ns = useNamespace("alert");
    const visible = ref(true);
    const iconComponent = computed(() => TypeComponentsMap[props.type]);
    const hasDesc = computed(() => !!(props.description || slots.default));
    const close = (evt) => {
      visible.value = false;
      emit("close", evt);
    };
    if (props.showAfter || props.hideAfter || props.autoClose) ;
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: unref(ns).b("fade"),
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode(
            "div",
            {
              class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.type), unref(ns).is("center", _ctx.center), unref(ns).is(_ctx.effect)]),
              role: "alert"
            },
            [
              _ctx.showIcon && (_ctx.$slots.icon || iconComponent.value) ? (openBlock(), createBlock(unref(ElIcon), {
                key: 0,
                class: normalizeClass([unref(ns).e("icon"), unref(ns).is("big", hasDesc.value)])
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    (openBlock(), createBlock(resolveDynamicComponent(iconComponent.value)))
                  ])
                ]),
                _: 3
              }, 8, ["class"])) : createCommentVNode("v-if", true),
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(ns).e("content"))
                },
                [
                  _ctx.title || _ctx.$slots.title ? (openBlock(), createElementBlock(
                    "span",
                    {
                      key: 0,
                      class: normalizeClass([unref(ns).e("title"), { "with-description": hasDesc.value }])
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
                  )) : createCommentVNode("v-if", true),
                  hasDesc.value ? (openBlock(), createElementBlock(
                    "p",
                    {
                      key: 1,
                      class: normalizeClass(unref(ns).e("description"))
                    },
                    [
                      renderSlot(_ctx.$slots, "default", {}, () => [
                        createTextVNode(
                          toDisplayString(_ctx.description),
                          1
                        )
                      ])
                    ],
                    2
                  )) : createCommentVNode("v-if", true),
                  _ctx.closable ? (openBlock(), createElementBlock(
                    Fragment,
                    { key: 2 },
                    [
                      _ctx.closeText ? (openBlock(), createElementBlock(
                        "div",
                        {
                          key: 0,
                          class: normalizeClass([unref(ns).e("close-btn"), unref(ns).is("customed")]),
                          onClick: close
                        },
                        toDisplayString(_ctx.closeText),
                        3
                      )) : (openBlock(), createBlock(unref(ElIcon), {
                        key: 1,
                        class: normalizeClass(unref(ns).e("close-btn")),
                        onClick: close
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(Close))
                        ]),
                        _: 1
                      }, 8, ["class"]))
                    ],
                    64
                  )) : createCommentVNode("v-if", true)
                ],
                2
              )
            ],
            2
          ), [
            [vShow, visible.value]
          ])
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var Alert = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]]);
const ElAlert = withInstall(Alert);
const getOrderedChildren = (vm, childComponentName, children) => {
  const nodes = flattedChildren(vm.subTree).filter(
    (n) => {
      var _a;
      return isVNode(n) && ((_a = n.type) == null ? void 0 : _a.name) === childComponentName && !!n.component;
    }
  );
  const uids = nodes.map((n) => n.component.uid);
  return uids.map((uid) => children[uid]).filter((p) => !!p);
};
const useOrderedChildren = (vm, childComponentName) => {
  const children = shallowRef({});
  const orderedChildren = shallowRef([]);
  const nodesMap = /* @__PURE__ */ new WeakMap();
  const addChild = (child) => {
    children.value[child.uid] = child;
    triggerRef(children);
    onMounted(() => {
      const childNode = child.getVnode().el;
      const parentNode = childNode.parentNode;
      if (!nodesMap.has(parentNode)) {
        nodesMap.set(parentNode, []);
        const originalFn = parentNode.insertBefore.bind(parentNode);
        parentNode.insertBefore = (node, anchor) => {
          const shouldSortChildren = nodesMap.get(parentNode).some((el) => node === el || anchor === el);
          if (shouldSortChildren)
            triggerRef(children);
          return originalFn(node, anchor);
        };
      }
      nodesMap.get(parentNode).push(childNode);
    });
  };
  const removeChild = (child) => {
    delete children.value[child.uid];
    triggerRef(children);
    const childNode = child.getVnode().el;
    const parentNode = childNode.parentNode;
    const childNodes = nodesMap.get(parentNode);
    const index2 = childNodes.indexOf(childNode);
    childNodes.splice(index2, 1);
  };
  const sortChildren = () => {
    orderedChildren.value = getOrderedChildren(
      vm,
      childComponentName,
      children.value
    );
  };
  const IsolatedRenderer = (props) => {
    return props.render();
  };
  const ChildrenSorter = defineComponent({
    setup(_, { slots }) {
      return () => {
        sortChildren();
        return slots.default ? h(IsolatedRenderer, {
          render: slots.default
        }) : null;
      };
    }
  });
  return {
    children: orderedChildren,
    addChild,
    removeChild,
    ChildrenSorter
  };
};
const progressProps = buildProps({
  type: {
    type: String,
    default: "line",
    values: ["line", "circle", "dashboard"]
  },
  percentage: {
    type: Number,
    default: 0,
    validator: (val) => val >= 0 && val <= 100
  },
  status: {
    type: String,
    default: "",
    values: ["", "success", "exception", "warning"]
  },
  indeterminate: Boolean,
  duration: {
    type: Number,
    default: 3
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  strokeLinecap: {
    type: definePropType(String),
    default: "round"
  },
  textInside: Boolean,
  width: {
    type: Number,
    default: 126
  },
  showText: {
    type: Boolean,
    default: true
  },
  color: {
    type: definePropType([
      String,
      Array,
      Function
    ]),
    default: ""
  },
  striped: Boolean,
  stripedFlow: Boolean,
  format: {
    type: definePropType(Function),
    default: (percentage) => `${percentage}%`
  }
});
const _hoisted_1$1 = ["aria-valuenow"];
const _hoisted_2$1 = { viewBox: "0 0 100 100" };
const _hoisted_3$1 = ["d", "stroke", "stroke-linecap", "stroke-width"];
const _hoisted_4$1 = ["d", "stroke", "opacity", "stroke-linecap", "stroke-width"];
const _hoisted_5$1 = { key: 0 };
const _sfc_main$4 = defineComponent({
  ...{
    name: "ElProgress"
  },
  __name: "progress",
  props: progressProps,
  setup(__props) {
    const STATUS_COLOR_MAP = {
      success: "#13ce66",
      exception: "#ff4949",
      warning: "#e6a23c",
      default: "#20a0ff"
    };
    const props = __props;
    const ns = useNamespace("progress");
    const barStyle = computed(() => {
      const barStyle2 = {
        width: `${props.percentage}%`,
        animationDuration: `${props.duration}s`
      };
      const color = getCurrentColor(props.percentage);
      if (color.includes("gradient")) {
        barStyle2.background = color;
      } else {
        barStyle2.backgroundColor = color;
      }
      return barStyle2;
    });
    const relativeStrokeWidth = computed(
      () => (props.strokeWidth / props.width * 100).toFixed(1)
    );
    const radius = computed(() => {
      if (["circle", "dashboard"].includes(props.type)) {
        return Number.parseInt(
          `${50 - Number.parseFloat(relativeStrokeWidth.value) / 2}`,
          10
        );
      }
      return 0;
    });
    const trackPath = computed(() => {
      const r = radius.value;
      const isDashboard = props.type === "dashboard";
      return `
          M 50 50
          m 0 ${isDashboard ? "" : "-"}${r}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "-" : ""}${r * 2}
          a ${r} ${r} 0 1 1 0 ${isDashboard ? "" : "-"}${r * 2}
          `;
    });
    const perimeter = computed(() => 2 * Math.PI * radius.value);
    const rate = computed(() => props.type === "dashboard" ? 0.75 : 1);
    const strokeDashoffset = computed(() => {
      const offset = -1 * perimeter.value * (1 - rate.value) / 2;
      return `${offset}px`;
    });
    const trailPathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value
    }));
    const circlePathStyle = computed(() => ({
      strokeDasharray: `${perimeter.value * rate.value * (props.percentage / 100)}px, ${perimeter.value}px`,
      strokeDashoffset: strokeDashoffset.value,
      transition: "stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"
    }));
    const stroke = computed(() => {
      let ret;
      if (props.color) {
        ret = getCurrentColor(props.percentage);
      } else {
        ret = STATUS_COLOR_MAP[props.status] || STATUS_COLOR_MAP.default;
      }
      return ret;
    });
    const statusIcon = computed(() => {
      if (props.status === "warning") {
        return warning_filled_default;
      }
      if (props.type === "line") {
        return props.status === "success" ? circle_check_default : circle_close_default;
      } else {
        return props.status === "success" ? check_default : close_default;
      }
    });
    const progressTextSize = computed(() => {
      return props.type === "line" ? 12 + props.strokeWidth * 0.4 : props.width * 0.111111 + 2;
    });
    const content = computed(() => props.format(props.percentage));
    function getColors(color) {
      const span = 100 / color.length;
      const seriesColors = color.map((seriesColor, index2) => {
        if (isString(seriesColor)) {
          return {
            color: seriesColor,
            percentage: (index2 + 1) * span
          };
        }
        return seriesColor;
      });
      return seriesColors.sort((a, b) => a.percentage - b.percentage);
    }
    const getCurrentColor = (percentage) => {
      var _a;
      const { color } = props;
      if (isFunction(color)) {
        return color(percentage);
      } else if (isString(color)) {
        return color;
      } else {
        const colors = getColors(color);
        for (const color2 of colors) {
          if (color2.percentage > percentage)
            return color2.color;
        }
        return (_a = colors[colors.length - 1]) == null ? void 0 : _a.color;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).m(_ctx.type),
          unref(ns).is(_ctx.status),
          {
            [unref(ns).m("without-text")]: !_ctx.showText,
            [unref(ns).m("text-inside")]: _ctx.textInside
          }
        ]),
        role: "progressbar",
        "aria-valuenow": _ctx.percentage,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      }, [
        _ctx.type === "line" ? (openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            class: normalizeClass(unref(ns).b("bar"))
          },
          [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(ns).be("bar", "outer")),
                style: normalizeStyle({ height: `${_ctx.strokeWidth}px` })
              },
              [
                createBaseVNode(
                  "div",
                  {
                    class: normalizeClass([
                      unref(ns).be("bar", "inner"),
                      { [unref(ns).bem("bar", "inner", "indeterminate")]: _ctx.indeterminate },
                      { [unref(ns).bem("bar", "inner", "striped")]: _ctx.striped },
                      { [unref(ns).bem("bar", "inner", "striped-flow")]: _ctx.stripedFlow }
                    ]),
                    style: normalizeStyle(barStyle.value)
                  },
                  [
                    (_ctx.showText || _ctx.$slots.default) && _ctx.textInside ? (openBlock(), createElementBlock(
                      "div",
                      {
                        key: 0,
                        class: normalizeClass(unref(ns).be("bar", "innerText"))
                      },
                      [
                        renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
                          createBaseVNode(
                            "span",
                            null,
                            toDisplayString(content.value),
                            1
                          )
                        ])
                      ],
                      2
                    )) : createCommentVNode("v-if", true)
                  ],
                  6
                )
              ],
              6
            )
          ],
          2
        )) : (openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            class: normalizeClass(unref(ns).b("circle")),
            style: normalizeStyle({ height: `${_ctx.width}px`, width: `${_ctx.width}px` })
          },
          [
            (openBlock(), createElementBlock("svg", _hoisted_2$1, [
              createBaseVNode("path", {
                class: normalizeClass(unref(ns).be("circle", "track")),
                d: trackPath.value,
                stroke: `var(${unref(ns).cssVarName("fill-color-light")}, #e5e9f2)`,
                "stroke-linecap": _ctx.strokeLinecap,
                "stroke-width": relativeStrokeWidth.value,
                fill: "none",
                style: normalizeStyle(trailPathStyle.value)
              }, null, 14, _hoisted_3$1),
              createBaseVNode("path", {
                class: normalizeClass(unref(ns).be("circle", "path")),
                d: trackPath.value,
                stroke: stroke.value,
                fill: "none",
                opacity: _ctx.percentage ? 1 : 0,
                "stroke-linecap": _ctx.strokeLinecap,
                "stroke-width": relativeStrokeWidth.value,
                style: normalizeStyle(circlePathStyle.value)
              }, null, 14, _hoisted_4$1)
            ]))
          ],
          6
        )),
        (_ctx.showText || _ctx.$slots.default) && !_ctx.textInside ? (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(unref(ns).e("text")),
            style: normalizeStyle({ fontSize: `${progressTextSize.value}px` })
          },
          [
            renderSlot(_ctx.$slots, "default", { percentage: _ctx.percentage }, () => [
              !_ctx.status ? (openBlock(), createElementBlock(
                "span",
                _hoisted_5$1,
                toDisplayString(content.value),
                1
              )) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(statusIcon.value)))
                ]),
                _: 1
              }))
            ])
          ],
          6
        )) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1$1);
    };
  }
});
var Progress = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);
const ElProgress = withInstall(Progress);
const spaceItemProps = buildProps({
  prefixCls: {
    type: String
  }
});
const SpaceItem = defineComponent({
  name: "ElSpaceItem",
  props: spaceItemProps,
  setup(props, { slots }) {
    const ns = useNamespace("space");
    const classes = computed(() => `${props.prefixCls || ns.b()}__item`);
    return () => h("div", { class: classes.value }, renderSlot(slots, "default"));
  }
});
const SIZE_MAP = {
  small: 8,
  default: 12,
  large: 16
};
function useSpace(props) {
  const ns = useNamespace("space");
  const classes = computed(() => [ns.b(), ns.m(props.direction), props.class]);
  const horizontalSize = ref(0);
  const verticalSize = ref(0);
  const containerStyle = computed(() => {
    const wrapKls = props.wrap || props.fill ? { flexWrap: "wrap" } : {};
    const alignment = {
      alignItems: props.alignment
    };
    const gap = {
      rowGap: `${verticalSize.value}px`,
      columnGap: `${horizontalSize.value}px`
    };
    return [wrapKls, alignment, gap, props.style];
  });
  const itemStyle = computed(() => {
    return props.fill ? { flexGrow: 1, minWidth: `${props.fillRatio}%` } : {};
  });
  watchEffect(() => {
    const { size = "small", wrap, direction: dir, fill } = props;
    if (isArray(size)) {
      const [h2 = 0, v = 0] = size;
      horizontalSize.value = h2;
      verticalSize.value = v;
    } else {
      let val;
      if (isNumber(size)) {
        val = size;
      } else {
        val = SIZE_MAP[size || "small"] || SIZE_MAP.small;
      }
      if ((wrap || fill) && dir === "horizontal") {
        horizontalSize.value = verticalSize.value = val;
      } else {
        if (dir === "horizontal") {
          horizontalSize.value = val;
          verticalSize.value = 0;
        } else {
          verticalSize.value = val;
          horizontalSize.value = 0;
        }
      }
    }
  });
  return {
    classes,
    containerStyle,
    itemStyle
  };
}
const spaceProps = buildProps({
  direction: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "horizontal"
  },
  class: {
    type: definePropType([
      String,
      Object,
      Array
    ]),
    default: ""
  },
  style: {
    type: definePropType([String, Array, Object]),
    default: ""
  },
  alignment: {
    type: definePropType(String),
    default: "center"
  },
  prefixCls: {
    type: String
  },
  spacer: {
    type: definePropType([Object, String, Number, Array]),
    default: null,
    validator: (val) => isVNode(val) || isNumber(val) || isString(val)
  },
  wrap: Boolean,
  fill: Boolean,
  fillRatio: {
    type: Number,
    default: 100
  },
  size: {
    type: [String, Array, Number],
    values: componentSizes,
    validator: (val) => {
      return isNumber(val) || isArray(val) && val.length === 2 && val.every(isNumber);
    }
  }
});
const Space = defineComponent({
  name: "ElSpace",
  props: spaceProps,
  setup(props, { slots }) {
    const { classes, containerStyle, itemStyle } = useSpace(props);
    function extractChildren(children, parentKey = "", extractedChildren = []) {
      const { prefixCls } = props;
      children.forEach((child, loopKey) => {
        if (isFragment(child)) {
          if (isArray(child.children)) {
            child.children.forEach((nested, key) => {
              if (isFragment(nested) && isArray(nested.children)) {
                extractChildren(
                  nested.children,
                  `${parentKey + key}-`,
                  extractedChildren
                );
              } else {
                if (isVNode(nested) && (nested == null ? void 0 : nested.type) === Comment) {
                  extractedChildren.push(nested);
                } else {
                  extractedChildren.push(
                    createVNode(
                      SpaceItem,
                      {
                        style: itemStyle.value,
                        prefixCls,
                        key: `nested-${parentKey + key}`
                      },
                      {
                        default: () => [nested]
                      },
                      PatchFlags.PROPS | PatchFlags.STYLE,
                      ["style", "prefixCls"]
                    )
                  );
                }
              }
            });
          }
        } else if (isValidElementNode(child)) {
          extractedChildren.push(
            createVNode(
              SpaceItem,
              {
                style: itemStyle.value,
                prefixCls,
                key: `LoopKey${parentKey + loopKey}`
              },
              {
                default: () => [child]
              },
              PatchFlags.PROPS | PatchFlags.STYLE,
              ["style", "prefixCls"]
            )
          );
        }
      });
      return extractedChildren;
    }
    return () => {
      var _a;
      const { spacer, direction } = props;
      const children = renderSlot(slots, "default", { key: 0 }, () => []);
      if (((_a = children.children) != null ? _a : []).length === 0)
        return null;
      if (isArray(children.children)) {
        let extractedChildren = extractChildren(children.children);
        if (spacer) {
          const len = extractedChildren.length - 1;
          extractedChildren = extractedChildren.reduce(
            (acc, child, idx) => {
              const children2 = [...acc, child];
              if (idx !== len) {
                children2.push(
                  createVNode(
                    "span",
                    {
                      style: [
                        itemStyle.value,
                        direction === "vertical" ? "width: 100%" : null
                      ],
                      key: idx
                    },
                    [
                      isVNode(spacer) ? spacer : createTextVNode(spacer, PatchFlags.TEXT)
                    ],
                    PatchFlags.STYLE
                  )
                );
              }
              return children2;
            },
            []
          );
        }
        return createVNode(
          "div",
          {
            class: classes.value,
            style: containerStyle.value
          },
          extractedChildren,
          PatchFlags.STYLE | PatchFlags.CLASS
        );
      }
      return children.children;
    };
  }
});
const ElSpace = withInstall(Space);
const stepsProps = buildProps({
  space: {
    type: [Number, String],
    default: ""
  },
  active: {
    type: Number,
    default: 0
  },
  direction: {
    type: String,
    default: "horizontal",
    values: ["horizontal", "vertical"]
  },
  alignCenter: {
    type: Boolean
  },
  simple: {
    type: Boolean
  },
  finishStatus: {
    type: String,
    values: ["wait", "process", "finish", "error", "success"],
    default: "finish"
  },
  processStatus: {
    type: String,
    values: ["wait", "process", "finish", "error", "success"],
    default: "process"
  }
});
const stepsEmits = {
  [CHANGE_EVENT]: (newVal, oldVal) => [newVal, oldVal].every(isNumber)
};
const STEPS_INJECTION_KEY = "ElSteps";
const _sfc_main$3 = defineComponent({
  ...{
    name: "ElSteps"
  },
  __name: "steps",
  props: stepsProps,
  emits: stepsEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const ns = useNamespace("steps");
    const {
      children: steps,
      addChild: addStep,
      removeChild: removeStep,
      ChildrenSorter: StepsSorter
    } = useOrderedChildren(getCurrentInstance(), "ElStep");
    watch(steps, () => {
      steps.value.forEach((instance, index2) => {
        instance.setIndex(index2);
      });
    });
    provide(STEPS_INJECTION_KEY, { props, steps, addStep, removeStep });
    watch(
      () => props.active,
      (newVal, oldVal) => {
        emit(CHANGE_EVENT, newVal, oldVal);
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns).b(), unref(ns).m(_ctx.simple ? "simple" : _ctx.direction)])
        },
        [
          renderSlot(_ctx.$slots, "default"),
          createVNode(unref(StepsSorter))
        ],
        2
      );
    };
  }
});
var Steps = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/steps/src/steps.vue"]]);
const stepProps = buildProps({
  title: {
    type: String,
    default: ""
  },
  icon: {
    type: iconPropType
  },
  description: {
    type: String,
    default: ""
  },
  status: {
    type: String,
    values: ["", "wait", "process", "finish", "error", "success"],
    default: ""
  }
});
const _sfc_main$2 = defineComponent({
  ...{
    name: "ElStep"
  },
  __name: "item",
  props: stepProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("step");
    const index2 = ref(-1);
    const lineStyle = ref({});
    const internalStatus = ref("");
    const parent = inject(STEPS_INJECTION_KEY);
    const currentInstance = getCurrentInstance();
    let stepDiff = 0;
    let beforeActive = 0;
    onMounted(() => {
      watch(
        [
          () => parent.props.active,
          () => parent.props.processStatus,
          () => parent.props.finishStatus
        ],
        ([active], [oldActive]) => {
          beforeActive = oldActive || 0;
          stepDiff = active - beforeActive;
          updateStatus(active);
        },
        { immediate: true }
      );
    });
    const currentStatus = computed(() => {
      return props.status || internalStatus.value;
    });
    const prevInternalStatus = computed(() => {
      const prevStep = parent.steps.value[index2.value - 1];
      return prevStep ? prevStep.internalStatus.value : "wait";
    });
    const isCenter = computed(() => {
      return parent.props.alignCenter;
    });
    const isVertical = computed(() => {
      return parent.props.direction === "vertical";
    });
    const isSimple = computed(() => {
      return parent.props.simple;
    });
    const stepsCount = computed(() => {
      return parent.steps.value.length;
    });
    const isLast = computed(() => {
      var _a;
      return ((_a = parent.steps.value[stepsCount.value - 1]) == null ? void 0 : _a.uid) === currentInstance.uid;
    });
    const space = computed(() => {
      return isSimple.value ? "" : parent.props.space;
    });
    const containerKls = computed(() => {
      return [
        ns.b(),
        ns.is(isSimple.value ? "simple" : parent.props.direction),
        ns.is("flex", isLast.value && !space.value && !isCenter.value),
        ns.is("center", isCenter.value && !isVertical.value && !isSimple.value)
      ];
    });
    const style = computed(() => {
      const style2 = {
        flexBasis: isNumber(space.value) ? `${space.value}px` : space.value ? space.value : `${100 / (stepsCount.value - (isCenter.value ? 0 : 1))}%`
      };
      if (isVertical.value)
        return style2;
      if (isLast.value) {
        style2.maxWidth = `${100 / stepsCount.value}%`;
      }
      return style2;
    });
    const setIndex = (val) => {
      index2.value = val;
    };
    const calcProgress = (status) => {
      const isWait = status === "wait";
      const delayTimer = Math.abs(stepDiff) === 1 ? 0 : stepDiff > 0 ? (index2.value + 1 - beforeActive) * 150 : -(index2.value + 1 - parent.props.active) * 150;
      const style2 = {
        transitionDelay: `${delayTimer}ms`
      };
      const step = status === parent.props.processStatus || isWait ? 0 : 100;
      style2.borderWidth = step && !isSimple.value ? "1px" : 0;
      style2[parent.props.direction === "vertical" ? "height" : "width"] = `${step}%`;
      lineStyle.value = style2;
    };
    const updateStatus = (activeIndex) => {
      if (activeIndex > index2.value) {
        internalStatus.value = parent.props.finishStatus;
      } else if (activeIndex === index2.value && prevInternalStatus.value !== "error") {
        internalStatus.value = parent.props.processStatus;
      } else {
        internalStatus.value = "wait";
      }
      const prevChild = parent.steps.value[index2.value - 1];
      if (prevChild)
        prevChild.calcProgress(internalStatus.value);
    };
    const stepItemState = {
      uid: currentInstance.uid,
      getVnode: () => currentInstance.vnode,
      currentStatus,
      internalStatus,
      setIndex,
      calcProgress
    };
    parent.addStep(stepItemState);
    onBeforeUnmount(() => {
      parent.removeStep(stepItemState);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          style: normalizeStyle(style.value),
          class: normalizeClass(containerKls.value)
        },
        [
          createCommentVNode(" icon & line "),
          createBaseVNode(
            "div",
            {
              class: normalizeClass([unref(ns).e("head"), unref(ns).is(currentStatus.value)])
            },
            [
              !isSimple.value ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(unref(ns).e("line"))
                },
                [
                  createBaseVNode(
                    "i",
                    {
                      class: normalizeClass(unref(ns).e("line-inner")),
                      style: normalizeStyle(lineStyle.value)
                    },
                    null,
                    6
                  )
                ],
                2
              )) : createCommentVNode("v-if", true),
              createBaseVNode(
                "div",
                {
                  class: normalizeClass([unref(ns).e("icon"), unref(ns).is(_ctx.icon || _ctx.$slots.icon ? "icon" : "text")])
                },
                [
                  renderSlot(_ctx.$slots, "icon", {}, () => [
                    _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), {
                      key: 0,
                      class: normalizeClass(unref(ns).e("icon-inner"))
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
                      ]),
                      _: 1
                    }, 8, ["class"])) : currentStatus.value === "success" ? (openBlock(), createBlock(unref(ElIcon), {
                      key: 1,
                      class: normalizeClass([unref(ns).e("icon-inner"), unref(ns).is("status")])
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(check_default))
                      ]),
                      _: 1
                    }, 8, ["class"])) : currentStatus.value === "error" ? (openBlock(), createBlock(unref(ElIcon), {
                      key: 2,
                      class: normalizeClass([unref(ns).e("icon-inner"), unref(ns).is("status")])
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(close_default))
                      ]),
                      _: 1
                    }, 8, ["class"])) : !isSimple.value ? (openBlock(), createElementBlock(
                      "div",
                      {
                        key: 3,
                        class: normalizeClass(unref(ns).e("icon-inner"))
                      },
                      toDisplayString(index2.value + 1),
                      3
                    )) : createCommentVNode("v-if", true)
                  ])
                ],
                2
              )
            ],
            2
          ),
          createCommentVNode(" title & description "),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("main"))
            },
            [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass([unref(ns).e("title"), unref(ns).is(currentStatus.value)])
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
              isSimple.value ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(unref(ns).e("arrow"))
                },
                null,
                2
              )) : (openBlock(), createElementBlock(
                "div",
                {
                  key: 1,
                  class: normalizeClass([unref(ns).e("description"), unref(ns).is(currentStatus.value)])
                },
                [
                  renderSlot(_ctx.$slots, "description", {}, () => [
                    createTextVNode(
                      toDisplayString(_ctx.description),
                      1
                    )
                  ])
                ],
                2
              ))
            ],
            2
          )
        ],
        6
      );
    };
  }
});
var Step = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/steps/src/item.vue"]]);
const ElSteps = withInstall(Steps, {
  Step
});
const ElStep = withNoopInstall(Step);
const useSelect = (props, { attrs, emit }, {
  select,
  tree,
  key
}) => {
  const ns = useNamespace("tree-select");
  watch(
    () => props.data,
    () => {
      if (props.filterable) {
        nextTick(() => {
          var _a, _b;
          (_b = tree.value) == null ? void 0 : _b.filter((_a = select.value) == null ? void 0 : _a.states.inputValue);
        });
      }
    },
    { flush: "post" }
  );
  const focusLastNode = (listNode) => {
    var _a;
    const lastNode = listNode.at(-1);
    if (lastNode.expanded && lastNode.childNodes.at(-1)) {
      focusLastNode([lastNode.childNodes.at(-1)]);
    } else {
      const el = (_a = tree.value.el$) == null ? void 0 : _a.querySelector(
        `[data-key="${listNode.at(-1).key}"]`
      );
      el == null ? void 0 : el.focus({ preventScroll: true });
      return;
    }
  };
  onMounted(() => {
    useEventListener(
      () => {
        var _a;
        return (_a = select.value) == null ? void 0 : _a.$el;
      },
      "keydown",
      async (evt) => {
        const code = getEventCode(evt);
        const { dropdownMenuVisible } = select.value;
        if ([EVENT_CODE.down, EVENT_CODE.up].includes(code) && dropdownMenuVisible) {
          await nextTick();
          setTimeout(() => {
            var _a, _b, _c;
            if (EVENT_CODE.up === code) {
              const listNode = tree.value.store.root.childNodes;
              focusLastNode(listNode);
              return;
            }
            (_c = (_b = (_a = select.value.optionsArray[select.value.states.hoveringIndex].$el) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.parentNode) == null ? void 0 : _c.focus({ preventScroll: true });
          });
        }
      },
      {
        capture: true
      }
    );
  });
  const result = {
    ...pick(toRefs(props), Object.keys(ElSelect.props)),
    ...attrs,
    class: computed(() => attrs.class),
    style: computed(() => attrs.style),
    "onUpdate:modelValue": (value) => emit(UPDATE_MODEL_EVENT, value),
    valueKey: key,
    popperClass: computed(() => {
      const classes = [ns.e("popper")];
      if (props.popperClass)
        classes.push(props.popperClass);
      return classes.join(" ");
    }),
    filterMethod: (keyword = "") => {
      var _a;
      if (props.filterMethod) {
        props.filterMethod(keyword);
      } else if (props.remoteMethod) {
        props.remoteMethod(keyword);
      } else {
        (_a = tree.value) == null ? void 0 : _a.filter(keyword);
      }
    }
  };
  return result;
};
const component = defineComponent({
  extends: ElOption,
  setup(props, ctx) {
    const result = ElOption.setup(props, ctx);
    delete result.selectOptionClick;
    const vm = getCurrentInstance().proxy;
    nextTick(() => {
      if (!result.select.states.cachedOptions.get(vm.value)) {
        result.select.onOptionCreate(vm);
      }
    });
    watch(
      () => ctx.attrs.visible,
      (val) => {
        nextTick(() => {
          result.states.visible = val;
        });
      },
      {
        immediate: true
      }
    );
    return result;
  },
  methods: {
    selectOptionClick() {
      this.$el.parentElement.click();
    }
  }
});
function isValidValue(val) {
  return val || val === 0;
}
function isValidArray(val) {
  return isArray(val) && val.length;
}
function toValidArray(val) {
  return isArray(val) ? val : isValidValue(val) ? [val] : [];
}
function treeFind(treeData, findCallback, getChildren, resultCallback, parent) {
  for (let i = 0; i < treeData.length; i++) {
    const data = treeData[i];
    if (findCallback(data, i, treeData, parent)) {
      return resultCallback ? resultCallback(data, i, treeData, parent) : data;
    } else {
      const children = getChildren(data);
      if (isValidArray(children)) {
        const find2 = treeFind(
          children,
          findCallback,
          getChildren,
          resultCallback,
          data
        );
        if (find2)
          return find2;
      }
    }
  }
}
function treeEach(treeData, callback, getChildren, parent) {
  for (let i = 0; i < treeData.length; i++) {
    const data = treeData[i];
    callback(data, i, treeData, parent);
    const children = getChildren(data);
    if (isValidArray(children)) {
      treeEach(children, callback, getChildren, data);
    }
  }
}
const useTree = (props, { attrs, slots, emit }, {
  select,
  tree,
  key
}) => {
  watch(
    [() => props.modelValue, tree],
    () => {
      if (props.showCheckbox) {
        nextTick(() => {
          const treeInstance = tree.value;
          if (treeInstance && !isEqual(
            treeInstance.getCheckedKeys(),
            toValidArray(props.modelValue)
          )) {
            treeInstance.setCheckedKeys(toValidArray(props.modelValue));
          }
        });
      }
    },
    {
      immediate: true,
      deep: true
    }
  );
  const propsMap = computed(() => ({
    value: key.value,
    label: "label",
    children: "children",
    disabled: "disabled",
    isLeaf: "isLeaf",
    ...props.props
  }));
  const getNodeValByProp = (prop, data) => {
    var _a;
    const propVal = propsMap.value[prop];
    if (isFunction(propVal)) {
      return propVal(
        data,
        (_a = tree.value) == null ? void 0 : _a.getNode(getNodeValByProp("value", data))
      );
    } else {
      return data[propVal];
    }
  };
  const defaultExpandedParentKeys = toValidArray(props.modelValue).map((value) => {
    return treeFind(
      props.data || [],
      (data) => getNodeValByProp("value", data) === value,
      (data) => getNodeValByProp("children", data),
      (data, index2, array, parent) => parent && getNodeValByProp("value", parent)
    );
  }).filter((item) => isValidValue(item));
  const cacheOptions = computed(() => {
    if (!props.renderAfterExpand && !props.lazy)
      return [];
    const options = [];
    treeEach(
      props.data.concat(props.cacheData),
      (node) => {
        const value = getNodeValByProp("value", node);
        options.push({
          value,
          currentLabel: getNodeValByProp("label", node),
          isDisabled: getNodeValByProp("disabled", node)
        });
      },
      (data) => getNodeValByProp("children", data)
    );
    return options;
  });
  const getChildCheckedKeys = () => {
    var _a;
    return (_a = tree.value) == null ? void 0 : _a.getCheckedKeys().filter((checkedKey) => {
      var _a2;
      const node = (_a2 = tree.value) == null ? void 0 : _a2.getNode(checkedKey);
      return !isNil(node) && isEmpty(node.childNodes);
    });
  };
  return {
    ...pick(toRefs(props), Object.keys(ElTree.props)),
    ...attrs,
    nodeKey: key,
    expandOnClickNode: computed(() => {
      return !props.checkStrictly && props.expandOnClickNode;
    }),
    defaultExpandedKeys: computed(() => {
      return props.defaultExpandedKeys ? props.defaultExpandedKeys.concat(defaultExpandedParentKeys) : defaultExpandedParentKeys;
    }),
    renderContent: (h2, { node, data, store }) => {
      return h2(
        component,
        {
          value: getNodeValByProp("value", data),
          label: getNodeValByProp("label", data),
          disabled: getNodeValByProp("disabled", data),
          visible: node.visible
        },
        props.renderContent ? () => props.renderContent(h2, { node, data, store }) : slots.default ? () => slots.default({ node, data, store }) : void 0
      );
    },
    filterNodeMethod: (value, data, node) => {
      if (props.filterNodeMethod)
        return props.filterNodeMethod(value, data, node);
      if (!value)
        return true;
      const regexp = new RegExp(escapeStringRegexp(value), "i");
      return regexp.test(getNodeValByProp("label", data) || "");
    },
    onNodeClick: (data, node, e) => {
      var _a, _b, _c;
      (_a = attrs.onNodeClick) == null ? void 0 : _a.call(attrs, data, node, e);
      if (props.showCheckbox && props.checkOnClickNode)
        return;
      if (!props.showCheckbox && (props.checkStrictly || node.isLeaf)) {
        if (!getNodeValByProp("disabled", data)) {
          const option2 = (_b = select.value) == null ? void 0 : _b.states.options.get(
            getNodeValByProp("value", data)
          );
          (_c = select.value) == null ? void 0 : _c.handleOptionSelect(option2);
        }
      } else if (props.expandOnClickNode) {
        e.proxy.handleExpandIconClick();
      }
    },
    onCheck: (data, params) => {
      var _a;
      if (!props.showCheckbox)
        return;
      const dataValue = getNodeValByProp("value", data);
      const dataMap = {};
      treeEach(
        [tree.value.store.root],
        (node) => dataMap[node.key] = node,
        (node) => node.childNodes
      );
      const uncachedCheckedKeys = params.checkedKeys;
      const cachedKeys = props.multiple ? toValidArray(props.modelValue).filter(
        (item) => !(item in dataMap) && !uncachedCheckedKeys.includes(item)
      ) : [];
      const checkedKeys = cachedKeys.concat(uncachedCheckedKeys);
      if (props.checkStrictly) {
        emit(
          UPDATE_MODEL_EVENT,
          props.multiple ? checkedKeys : checkedKeys.includes(dataValue) ? dataValue : void 0
        );
      } else {
        if (props.multiple) {
          const childKeys = getChildCheckedKeys();
          emit(UPDATE_MODEL_EVENT, cachedKeys.concat(childKeys));
        } else {
          const firstLeaf = treeFind(
            [data],
            (data2) => !isValidArray(getNodeValByProp("children", data2)) && !getNodeValByProp("disabled", data2),
            (data2) => getNodeValByProp("children", data2)
          );
          const firstLeafKey = firstLeaf ? getNodeValByProp("value", firstLeaf) : void 0;
          const hasCheckedChild = isValidValue(props.modelValue) && !!treeFind(
            [data],
            (data2) => getNodeValByProp("value", data2) === props.modelValue,
            (data2) => getNodeValByProp("children", data2)
          );
          emit(
            UPDATE_MODEL_EVENT,
            firstLeafKey === props.modelValue || hasCheckedChild ? void 0 : firstLeafKey
          );
        }
      }
      nextTick(() => {
        var _a2;
        const checkedKeys2 = toValidArray(props.modelValue);
        tree.value.setCheckedKeys(checkedKeys2);
        (_a2 = attrs.onCheck) == null ? void 0 : _a2.call(attrs, data, {
          checkedKeys: tree.value.getCheckedKeys(),
          checkedNodes: tree.value.getCheckedNodes(),
          halfCheckedKeys: tree.value.getHalfCheckedKeys(),
          halfCheckedNodes: tree.value.getHalfCheckedNodes()
        });
      });
      (_a = select.value) == null ? void 0 : _a.focus();
    },
    onNodeExpand: (data, node, e) => {
      var _a;
      (_a = attrs.onNodeExpand) == null ? void 0 : _a.call(attrs, data, node, e);
      nextTick(() => {
        if (!props.checkStrictly && props.lazy && props.multiple && node.checked) {
          const dataMap = {};
          const uncachedCheckedKeys = tree.value.getCheckedKeys();
          treeEach(
            [tree.value.store.root],
            (node2) => dataMap[node2.key] = node2,
            (node2) => node2.childNodes
          );
          const cachedKeys = toValidArray(props.modelValue).filter(
            (item) => !(item in dataMap) && !uncachedCheckedKeys.includes(item)
          );
          const childKeys = getChildCheckedKeys();
          emit(UPDATE_MODEL_EVENT, cachedKeys.concat(childKeys));
        }
      });
    },
    cacheOptions
  };
};
var CacheOptions = defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const select = inject(selectKey);
    watch(
      () => props.data,
      () => {
        var _a;
        props.data.forEach((item) => {
          if (!select.states.cachedOptions.has(item.value)) {
            select.states.cachedOptions.set(item.value, item);
          }
        });
        const inputs = ((_a = select.selectRef) == null ? void 0 : _a.querySelectorAll("input")) || [];
        if (isClient && !Array.from(inputs).includes(
          document.activeElement
        )) {
          select.setSelected();
        }
      },
      { flush: "post", immediate: true }
    );
    return () => void 0;
  }
});
const _sfc_main$1 = defineComponent({
  name: "ElTreeSelect",
  inheritAttrs: false,
  props: {
    ...selectProps,
    ...treeProps,
    cacheData: {
      type: Array,
      default: () => []
    }
  },
  setup(props, context) {
    const { slots, expose } = context;
    const select = ref();
    const tree = ref();
    const key = computed(() => props.nodeKey || props.valueKey || "value");
    const selectProps2 = useSelect(props, context, { select, tree, key });
    const { cacheOptions, ...treeProps2 } = useTree(props, context, {
      select,
      tree,
      key
    });
    const methods = reactive({});
    expose(methods);
    onMounted(() => {
      Object.assign(methods, {
        ...pick(tree.value, [
          "filter",
          "updateKeyChildren",
          "getCheckedNodes",
          "setCheckedNodes",
          "getCheckedKeys",
          "setCheckedKeys",
          "setChecked",
          "getHalfCheckedNodes",
          "getHalfCheckedKeys",
          "getCurrentKey",
          "getCurrentNode",
          "setCurrentKey",
          "setCurrentNode",
          "getNode",
          "remove",
          "append",
          "insertBefore",
          "insertAfter"
        ]),
        ...pick(select.value, ["focus", "blur", "selectedLabel"]),
        treeRef: tree.value,
        selectRef: select.value
      });
    });
    return () => h(
      ElSelect,
      reactive({
        ...selectProps2,
        ref: (ref2) => select.value = ref2
      }),
      {
        ...slots,
        default: () => [
          h(CacheOptions, { data: cacheOptions.value }),
          h(
            ElTree,
            reactive({
              ...treeProps2,
              ref: (ref2) => tree.value = ref2
            })
          )
        ]
      }
    );
  }
});
var TreeSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tree-select/src/tree-select.vue"]]);
const ElTreeSelect = withInstall(TreeSelect);
const ElLoading = {
  install(app) {
    Loading._context = app._context;
    vLoading._context = app._context;
    app.directive("loading", vLoading);
    app.config.globalProperties.$loading = Loading;
  },
  directive: vLoading,
  service: Loading
};
const FormTypeEnum = {
  INPUT: { value: 1, label: "输入框" },
  SELECT: { value: 2, label: "下拉框" },
  RADIO: { value: 3, label: "单选框" },
  CHECK_BOX: { value: 4, label: "复选框" },
  INPUT_NUMBER: { value: 5, label: "数字输入框" },
  SWITCH: { value: 6, label: "开关" },
  TEXT_AREA: { value: 7, label: "文本域" },
  DATE: { value: 8, label: "日期框" },
  DATE_TIME: { value: 9, label: "日期时间框" },
  HIDDEN: { value: 10, label: "隐藏域" }
};
const QueryTypeEnum = {
  /** 等于 */
  EQ: { value: 1, label: "=" },
  /** 模糊匹配 */
  LIKE: { value: 2, label: "LIKE '%s%'" },
  /** 包含 */
  IN: { value: 3, label: "IN" },
  /** 范围 */
  BETWEEN: { value: 4, label: "BETWEEN" },
  /** 大于 */
  GT: { value: 5, label: ">" },
  /** 大于等于 */
  GE: { value: 6, label: ">=" },
  /** 小于 */
  LT: { value: 7, label: "<" },
  /** 小于等于 */
  LE: { value: 8, label: "<=" },
  /** 不等于 */
  NE: { value: 9, label: "!=" },
  /** 左模糊匹配 */
  LIKE_LEFT: { value: 10, label: "LIKE '%s'" },
  /** 右模糊匹配 */
  LIKE_RIGHT: { value: 11, label: "LIKE 's%'" }
};
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
var version = "1.15.6";
function userAgent(pattern) {
  if (typeof window !== "undefined" && window.navigator) {
    return !!/* @__PURE__ */ navigator.userAgent.match(pattern);
  }
}
var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);
var captureMode = {
  capture: false,
  passive: false
};
function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}
function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}
function matches(el, selector) {
  if (!selector) return;
  selector[0] === ">" && (selector = selector.substring(1));
  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }
  return false;
}
function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}
function closest(el, selector, ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;
    do {
      if (selector != null && (selector[0] === ">" ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }
      if (el === ctx) break;
    } while (el = getParentOrHost(el));
  }
  return null;
}
var R_SPACE = /\s+/g;
function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? "add" : "remove"](name);
    } else {
      var className = (" " + el.className + " ").replace(R_SPACE, " ").replace(" " + name + " ", " ");
      el.className = (className + (state ? " " + name : "")).replace(R_SPACE, " ");
    }
  }
}
function css(el, prop, val) {
  var style = el && el.style;
  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, "");
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }
      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf("webkit") === -1) {
        prop = "-webkit-" + prop;
      }
      style[prop] = val + (typeof val === "string" ? "" : "px");
    }
  }
}
function matrix(el, selfOnly) {
  var appliedTransforms = "";
  if (typeof el === "string") {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, "transform");
      if (transform && transform !== "none") {
        appliedTransforms = transform + " " + appliedTransforms;
      }
    } while (!selfOnly && (el = el.parentNode));
  }
  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return matrixFn && new matrixFn(appliedTransforms);
}
function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName), i = 0, n = list.length;
    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }
    return list;
  }
  return [];
}
function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;
  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;
  if (el !== window && el.parentNode && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }
  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    container = container || el.parentNode;
    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, "transform") !== "none" || relativeToNonStaticParent && css(container, "position") !== "static")) {
          var containerRect = container.getBoundingClientRect();
          top -= containerRect.top + parseInt(css(container, "border-top-width"));
          left -= containerRect.left + parseInt(css(container, "border-left-width"));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
      } while (container = container.parentNode);
    }
  }
  if (undoScale && el !== window) {
    var elMatrix = matrix(container || el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d;
    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }
  return {
    top,
    left,
    bottom,
    right,
    width,
    height
  };
}
function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true), elSideVal = getRect(el)[elSide];
  while (parent) {
    var parentSideVal = getRect(parent)[parentSide], visible = void 0;
    {
      visible = elSideVal >= parentSideVal;
    }
    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }
  return false;
}
function getChild(el, childNum, options, includeDragEl) {
  var currentChild = 0, i = 0, children = el.children;
  while (i < children.length) {
    if (children[i].style.display !== "none" && children[i] !== Sortable.ghost && (includeDragEl || children[i] !== Sortable.dragged) && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }
      currentChild++;
    }
    i++;
  }
  return null;
}
function lastChild(el, selector) {
  var last = el.lastElementChild;
  while (last && (last === Sortable.ghost || css(last, "display") === "none" || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }
  return last || null;
}
function index(el, selector) {
  var index2 = 0;
  if (!el || !el.parentNode) {
    return -1;
  }
  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== "TEMPLATE" && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index2++;
    }
  }
  return index2;
}
function getRelativeScrollOffset(el) {
  var offsetLeft = 0, offsetTop = 0, winScroller = getWindowScrollingElement();
  if (el) {
    do {
      var elMatrix = matrix(el), scaleX = elMatrix.a, scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }
  return [offsetLeft, offsetTop];
}
function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;
    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }
  return -1;
}
function getParentAutoScrollElement(el, includeSelf) {
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;
  do {
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);
      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == "auto" || elemCSS.overflowX == "scroll") || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == "auto" || elemCSS.overflowY == "scroll")) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
  } while (elem = elem.parentNode);
  return getWindowScrollingElement();
}
function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }
  return dst;
}
function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}
var _throttleTimeout;
function throttle(callback, ms) {
  return function() {
    if (!_throttleTimeout) {
      var args = arguments, _this = this;
      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }
      _throttleTimeout = setTimeout(function() {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}
function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}
function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}
function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;
  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}
function getChildContainingRectFromElement(container, options, ghostEl2) {
  var rect = {};
  Array.from(container.children).forEach(function(child) {
    var _rect$left, _rect$top, _rect$right, _rect$bottom;
    if (!closest(child, options.draggable, container, false) || child.animated || child === ghostEl2) return;
    var childRect = getRect(child);
    rect.left = Math.min((_rect$left = rect.left) !== null && _rect$left !== void 0 ? _rect$left : Infinity, childRect.left);
    rect.top = Math.min((_rect$top = rect.top) !== null && _rect$top !== void 0 ? _rect$top : Infinity, childRect.top);
    rect.right = Math.max((_rect$right = rect.right) !== null && _rect$right !== void 0 ? _rect$right : -Infinity, childRect.right);
    rect.bottom = Math.max((_rect$bottom = rect.bottom) !== null && _rect$bottom !== void 0 ? _rect$bottom : -Infinity, childRect.bottom);
  });
  rect.width = rect.right - rect.left;
  rect.height = rect.bottom - rect.top;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
var expando = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function AnimationStateManager() {
  var animationStates = [], animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function(child) {
        if (css(child, "display") === "none" || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });
        var fromRect = _objectSpread2({}, animationStates[animationStates.length - 1].rect);
        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);
          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }
        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;
      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === "function") callback();
        return;
      }
      var animating = false, animationTime = 0;
      animationStates.forEach(function(state) {
        var time = 0, target = state.target, fromRect = target.fromRect, toRect = getRect(target), prevFromRect = target.prevFromRect, prevToRect = target.prevToRect, animatingRect = state.rect, targetMatrix = matrix(target, true);
        if (targetMatrix) {
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }
        target.toRect = toRect;
        if (target.thisAnimationDuration) {
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        }
        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;
          if (!time) {
            time = _this.options.animation;
          }
          _this.animate(target, animatingRect, toRect, time);
        }
        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function() {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);
      if (!animating) {
        if (typeof callback === "function") callback();
      } else {
        animationCallbackId = setTimeout(function() {
          if (typeof callback === "function") callback();
        }, animationTime);
      }
      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, "transition", "");
        css(target, "transform", "");
        var elMatrix = matrix(this.el), scaleX = elMatrix && elMatrix.a, scaleY = elMatrix && elMatrix.d, translateX = (currentRect.left - toRect.left) / (scaleX || 1), translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, "transform", "translate3d(" + translateX + "px," + translateY + "px,0)");
        this.forRepaintDummy = repaint(target);
        css(target, "transition", "transform " + duration + "ms" + (this.options.easing ? " " + this.options.easing : ""));
        css(target, "transform", "translate3d(0,0,0)");
        typeof target.animated === "number" && clearTimeout(target.animated);
        target.animated = setTimeout(function() {
          css(target, "transition", "");
          css(target, "transform", "");
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}
function repaint(target) {
  return target.offsetWidth;
}
function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}
var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    for (var option2 in defaults) {
      if (defaults.hasOwnProperty(option2) && !(option2 in plugin)) {
        plugin[option2] = defaults[option2];
      }
    }
    plugins.forEach(function(p) {
      if (p.pluginName === plugin.pluginName) {
        throw "Sortable: Cannot mount plugin ".concat(plugin.pluginName, " more than once");
      }
    });
    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;
    this.eventCanceled = false;
    evt.cancel = function() {
      _this.eventCanceled = true;
    };
    var eventNameGlobal = eventName + "Global";
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName]) return;
      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread2({
          sortable
        }, evt));
      }
      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread2({
          sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults2, options) {
    plugins.forEach(function(plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized;
      _extends(defaults2, initialized.defaults);
    });
    for (var option2 in sortable.options) {
      if (!sortable.options.hasOwnProperty(option2)) continue;
      var modified = this.modifyOption(sortable, option2, sortable.options[option2]);
      if (typeof modified !== "undefined") {
        sortable.options[option2] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function(plugin) {
      if (typeof plugin.eventProperties !== "function") return;
      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function(plugin) {
      if (!sortable[plugin.pluginName]) return;
      if (plugin.optionListeners && typeof plugin.optionListeners[name] === "function") {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};
function dispatchEvent(_ref) {
  var sortable = _ref.sortable, rootEl2 = _ref.rootEl, name = _ref.name, targetEl = _ref.targetEl, cloneEl2 = _ref.cloneEl, toEl = _ref.toEl, fromEl = _ref.fromEl, oldIndex2 = _ref.oldIndex, newIndex2 = _ref.newIndex, oldDraggableIndex2 = _ref.oldDraggableIndex, newDraggableIndex2 = _ref.newDraggableIndex, originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl2 && rootEl2[expando];
  if (!sortable) return;
  var evt, options = sortable.options, onName = "on" + name.charAt(0).toUpperCase() + name.substr(1);
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent(name, true, true);
  }
  evt.to = toEl || rootEl2;
  evt.from = fromEl || rootEl2;
  evt.item = targetEl || rootEl2;
  evt.clone = cloneEl2;
  evt.oldIndex = oldIndex2;
  evt.newIndex = newIndex2;
  evt.oldDraggableIndex = oldDraggableIndex2;
  evt.newDraggableIndex = newDraggableIndex2;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable2 ? putSortable2.lastPutMode : void 0;
  var allEventProperties = _objectSpread2(_objectSpread2({}, extraEventProperties), PluginManager.getEventProperties(name, sortable));
  for (var option2 in allEventProperties) {
    evt[option2] = allEventProperties[option2];
  }
  if (rootEl2) {
    rootEl2.dispatchEvent(evt);
  }
  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}
var _excluded = ["evt"];
var pluginEvent2 = function pluginEvent3(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, originalEvent = _ref.evt, data = _objectWithoutProperties(_ref, _excluded);
  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread2({
    dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    dragStarted: moved,
    putSortable,
    activeSortable: Sortable.active,
    originalEvent,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable,
        name,
        originalEvent
      });
    }
  }, data));
};
function _dispatchEvent(info) {
  dispatchEvent(_objectSpread2({
    putSortable,
    cloneEl,
    targetEl: dragEl,
    rootEl,
    oldIndex,
    oldDraggableIndex,
    newIndex,
    newDraggableIndex
  }, info));
}
var dragEl, parentEl, ghostEl, rootEl, nextEl, lastDownEl, cloneEl, cloneHidden, oldIndex, newIndex, oldDraggableIndex, newDraggableIndex, activeGroup, putSortable, awaitingDragStarted = false, ignoreNextClick = false, sortables = [], tapEvt, touchEvt, lastDx, lastDy, tapDistanceLeft, tapDistanceTop, moved, lastTarget, lastDirection, pastFirstInvertThresh = false, isCircumstantialInvert = false, targetMoveDistance, ghostRelativeParent, ghostRelativeParentInitialScroll = [], _silent = false, savedInputChecked = [];
var documentExists = typeof document !== "undefined", PositionGhostAbsolutely = IOS, CSSFloatProperty = Edge || IE11OrLess ? "cssFloat" : "float", supportDraggable = documentExists && !ChromeForAndroid && !IOS && "draggable" in document.createElement("div"), supportCssPointerEvents = (function() {
  if (!documentExists) return;
  if (IE11OrLess) {
    return false;
  }
  var el = document.createElement("x");
  el.style.cssText = "pointer-events:auto";
  return el.style.pointerEvents === "auto";
})(), _detectDirection = function _detectDirection2(el, options) {
  var elCSS = css(el), elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth), child1 = getChild(el, 0, options), child2 = getChild(el, 1, options), firstChildCSS = child1 && css(child1), secondChildCSS = child2 && css(child2), firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width, secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;
  if (elCSS.display === "flex") {
    return elCSS.flexDirection === "column" || elCSS.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  }
  if (elCSS.display === "grid") {
    return elCSS.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  }
  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== "none") {
    var touchingSideChild2 = firstChildCSS["float"] === "left" ? "left" : "right";
    return child2 && (secondChildCSS.clear === "both" || secondChildCSS.clear === touchingSideChild2) ? "vertical" : "horizontal";
  }
  return child1 && (firstChildCSS.display === "block" || firstChildCSS.display === "flex" || firstChildCSS.display === "table" || firstChildCSS.display === "grid" || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === "none" || child2 && elCSS[CSSFloatProperty] === "none" && firstChildWidth + secondChildWidth > elWidth) ? "vertical" : "horizontal";
}, _dragElInRowColumn = function _dragElInRowColumn2(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top, dragElS2Opp = vertical ? dragRect.right : dragRect.bottom, dragElOppLength = vertical ? dragRect.width : dragRect.height, targetS1Opp = vertical ? targetRect.left : targetRect.top, targetS2Opp = vertical ? targetRect.right : targetRect.bottom, targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
}, _detectNearestEmptySortable = function _detectNearestEmptySortable2(x, y) {
  var ret;
  sortables.some(function(sortable) {
    var threshold = sortable[expando].options.emptyInsertThreshold;
    if (!threshold || lastChild(sortable)) return;
    var rect = getRect(sortable), insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold, insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;
    if (insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
}, _prepareGroup = function _prepareGroup2(options) {
  function toFn(value, pull) {
    return function(to, from, dragEl2, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;
      if (value == null && (pull || sameGroup)) {
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === "clone") {
        return value;
      } else if (typeof value === "function") {
        return toFn(value(to, from, dragEl2, evt), pull)(to, from, dragEl2, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === "string" && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }
  var group = {};
  var originalGroup = options.group;
  if (!originalGroup || _typeof(originalGroup) != "object") {
    originalGroup = {
      name: originalGroup
    };
  }
  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
}, _hideGhostForTarget = function _hideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "none");
  }
}, _unhideGhostForTarget = function _unhideGhostForTarget2() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, "display", "");
  }
};
if (documentExists && !ChromeForAndroid) {
  document.addEventListener("click", function(evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}
var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent2(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;
    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);
    if (nearest) {
      var event = {};
      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }
      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;
      nearest[expando]._onDragOver(event);
    }
  }
};
var _checkOutsideTargetEl = function _checkOutsideTargetEl2(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }
  this.el = el;
  this.options = options = _extends({}, options);
  el[expando] = this;
  var defaults2 = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl2) {
      dataTransfer.setData("Text", dragEl2.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Sortable.supportPointer !== false && "PointerEvent" in window && (!Safari || IOS),
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults2);
  for (var name in defaults2) {
    !(name in options) && (options[name] = defaults2[name]);
  }
  _prepareGroup(options);
  for (var fn in this) {
    if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
      this[fn] = this[fn].bind(this);
    }
  }
  this.nativeDraggable = options.forceFallback ? false : supportDraggable;
  if (this.nativeDraggable) {
    this.options.touchStartThreshold = 1;
  }
  if (options.supportPointer) {
    on(el, "pointerdown", this._onTapStart);
  } else {
    on(el, "mousedown", this._onTapStart);
    on(el, "touchstart", this._onTapStart);
  }
  if (this.nativeDraggable) {
    on(el, "dragover", this);
    on(el, "dragenter", this);
  }
  sortables.push(this.el);
  options.store && options.store.get && this.sort(options.store.get(this) || []);
  _extends(this, AnimationStateManager());
}
Sortable.prototype = /** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === "function" ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(evt) {
    if (!evt.cancelable) return;
    var _this = this, el = this.el, options = this.options, preventOnFilter = options.preventOnFilter, type = evt.type, touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === "touch" && evt, target = (touch || evt).target, originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target, filter = options.filter;
    _saveInputCheckedState(el);
    if (dragEl) {
      return;
    }
    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return;
    }
    if (originalTarget.isContentEditable) {
      return;
    }
    if (!this.nativeDraggable && Safari && target && target.tagName.toUpperCase() === "SELECT") {
      return;
    }
    target = closest(target, options.draggable, el, false);
    if (target && target.animated) {
      return;
    }
    if (lastDownEl === target) {
      return;
    }
    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable);
    if (typeof filter === "function") {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: "filter",
          targetEl: target,
          toEl: el,
          fromEl: el
        });
        pluginEvent2("filter", _this, {
          evt
        });
        preventOnFilter && evt.preventDefault();
        return;
      }
    } else if (filter) {
      filter = filter.split(",").some(function(criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);
        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: "filter",
            targetEl: target,
            fromEl: el,
            toEl: el
          });
          pluginEvent2("filter", _this, {
            evt
          });
          return true;
        }
      });
      if (filter) {
        preventOnFilter && evt.preventDefault();
        return;
      }
    }
    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    }
    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(evt, touch, target) {
    var _this = this, el = _this.el, options = _this.options, ownerDocument = el.ownerDocument, dragStartFn;
    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style["will-change"] = "all";
      dragStartFn = function dragStartFn2() {
        pluginEvent2("delayEnded", _this, {
          evt
        });
        if (Sortable.eventCanceled) {
          _this._onDrop();
          return;
        }
        _this._disableDelayedDragEvents();
        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        }
        _this._triggerDragStart(evt, touch);
        _dispatchEvent({
          sortable: _this,
          name: "choose",
          originalEvent: evt
        });
        toggleClass(dragEl, options.chosenClass, true);
      };
      options.ignore.split(",").forEach(function(criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, "dragover", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "mousemove", nearestEmptyInsertDetectEvent);
      on(ownerDocument, "touchmove", nearestEmptyInsertDetectEvent);
      if (options.supportPointer) {
        on(ownerDocument, "pointerup", _this._onDrop);
        !this.nativeDraggable && on(ownerDocument, "pointercancel", _this._onDrop);
      } else {
        on(ownerDocument, "mouseup", _this._onDrop);
        on(ownerDocument, "touchend", _this._onDrop);
        on(ownerDocument, "touchcancel", _this._onDrop);
      }
      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }
      pluginEvent2("delayStart", this, {
        evt
      });
      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();
          return;
        }
        if (options.supportPointer) {
          on(ownerDocument, "pointerup", _this._disableDelayedDrag);
          on(ownerDocument, "pointercancel", _this._disableDelayedDrag);
        } else {
          on(ownerDocument, "mouseup", _this._disableDelayedDrag);
          on(ownerDocument, "touchend", _this._disableDelayedDrag);
          on(ownerDocument, "touchcancel", _this._disableDelayedDrag);
        }
        on(ownerDocument, "mousemove", _this._delayedDragTouchMoveHandler);
        on(ownerDocument, "touchmove", _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, "pointermove", _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(e) {
    var touch = e.touches ? e.touches[0] : e;
    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);
    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._disableDelayedDrag);
    off(ownerDocument, "touchend", this._disableDelayedDrag);
    off(ownerDocument, "touchcancel", this._disableDelayedDrag);
    off(ownerDocument, "pointerup", this._disableDelayedDrag);
    off(ownerDocument, "pointercancel", this._disableDelayedDrag);
    off(ownerDocument, "mousemove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "touchmove", this._delayedDragTouchMoveHandler);
    off(ownerDocument, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(evt, touch) {
    touch = touch || evt.pointerType == "touch" && evt;
    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, "pointermove", this._onTouchMove);
      } else if (touch) {
        on(document, "touchmove", this._onTouchMove);
      } else {
        on(document, "mousemove", this._onTouchMove);
      }
    } else {
      on(dragEl, "dragend", this);
      on(rootEl, "dragstart", this._onDragStart);
    }
    try {
      if (document.selection) {
        _nextTick(function() {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {
    }
  },
  _dragStarted: function _dragStarted(fallback, evt) {
    awaitingDragStarted = false;
    if (rootEl && dragEl) {
      pluginEvent2("dragStarted", this, {
        evt
      });
      if (this.nativeDraggable) {
        on(document, "dragover", _checkOutsideTargetEl);
      }
      var options = this.options;
      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost();
      _dispatchEvent({
        sortable: this,
        name: "start",
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;
      _hideGhostForTarget();
      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;
      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }
      dragEl.parentNode[expando]._isOutsideThisEl(target);
      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target,
              rootEl: parent
            });
            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }
          target = parent;
        } while (parent = getParentOrHost(parent));
      }
      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(evt) {
    if (tapEvt) {
      var options = this.options, fallbackTolerance = options.fallbackTolerance, fallbackOffset = options.fallbackOffset, touch = evt.touches ? evt.touches[0] : evt, ghostMatrix = ghostEl && matrix(ghostEl, true), scaleX = ghostEl && ghostMatrix && ghostMatrix.a, scaleY = ghostEl && ghostMatrix && ghostMatrix.d, relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent), dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1), dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1);
      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }
        this._onDragStart(evt, true);
      }
      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }
        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, "webkitTransform", cssMatrix);
        css(ghostEl, "mozTransform", cssMatrix);
        css(ghostEl, "msTransform", cssMatrix);
        css(ghostEl, "transform", cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }
      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl, rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container), options = this.options;
      if (PositionGhostAbsolutely) {
        ghostRelativeParent = container;
        while (css(ghostRelativeParent, "position") === "static" && css(ghostRelativeParent, "transform") === "none" && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }
        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }
        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }
      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, "transition", "");
      css(ghostEl, "transform", "");
      css(ghostEl, "box-sizing", "border-box");
      css(ghostEl, "margin", 0);
      css(ghostEl, "top", rect.top);
      css(ghostEl, "left", rect.left);
      css(ghostEl, "width", rect.width);
      css(ghostEl, "height", rect.height);
      css(ghostEl, "opacity", "0.8");
      css(ghostEl, "position", PositionGhostAbsolutely ? "absolute" : "fixed");
      css(ghostEl, "zIndex", "100000");
      css(ghostEl, "pointerEvents", "none");
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl);
      css(ghostEl, "transform-origin", tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + "% " + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + "%");
    }
  },
  _onDragStart: function _onDragStart(evt, fallback) {
    var _this = this;
    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent2("dragStart", this, {
      evt
    });
    if (Sortable.eventCanceled) {
      this._onDrop();
      return;
    }
    pluginEvent2("setupClone", this);
    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.removeAttribute("id");
      cloneEl.draggable = false;
      cloneEl.style["will-change"] = "";
      this._hideClone();
      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    }
    _this.cloneId = _nextTick(function() {
      pluginEvent2("clone", _this);
      if (Sortable.eventCanceled) return;
      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }
      _this._hideClone();
      _dispatchEvent({
        sortable: _this,
        name: "clone"
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true);
    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      off(document, "mouseup", _this._onDrop);
      off(document, "touchend", _this._onDrop);
      off(document, "touchcancel", _this._onDrop);
      if (dataTransfer) {
        dataTransfer.effectAllowed = "move";
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }
      on(document, "drop", _this);
      css(dragEl, "transform", "translateZ(0)");
    }
    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, "selectstart", _this);
    moved = true;
    window.getSelection().removeAllRanges();
    if (Safari) {
      css(document.body, "user-select", "none");
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(evt) {
    var el = this.el, target = evt.target, dragRect, targetRect, revert, options = this.options, group = options.group, activeSortable = Sortable.active, isOwner = activeGroup === group, canSort = options.sort, fromSortable = putSortable || activeSortable, vertical, _this = this, completedFired = false;
    if (_silent) return;
    function dragOverEvent(name, extra) {
      pluginEvent2(name, _this, _objectSpread2({
        evt,
        isOwner,
        axis: vertical ? "vertical" : "horizontal",
        revert,
        dragRect,
        targetRect,
        canSort,
        fromSortable,
        target,
        completed,
        onMove: function onMove(target2, after2) {
          return _onMove(rootEl, el, dragEl, dragRect, target2, getRect(target2), evt, after2);
        },
        changed
      }, extra));
    }
    function capture() {
      dragOverEvent("dragOverAnimationCapture");
      _this.captureAnimationState();
      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    }
    function completed(insertion) {
      dragOverEvent("dragOverCompleted", {
        insertion
      });
      if (insertion) {
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }
        if (_this !== fromSortable) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }
        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        }
        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }
        _this.animateAll(function() {
          dragOverEvent("dragOverAnimationComplete");
          _this._ignoreWhileAnimating = null;
        });
        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      }
      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      }
      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
        !insertion && nearestEmptyInsertDetectEvent(evt);
      }
      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    }
    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);
      _dispatchEvent({
        sortable: _this,
        name: "change",
        toEl: el,
        newIndex,
        newDraggableIndex,
        originalEvent: evt
      });
    }
    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }
    target = closest(target, options.draggable, el, true);
    dragOverEvent("dragOver");
    if (Sortable.eventCanceled) return completedFired;
    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }
    ignoreNextClick = false;
    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = parentEl !== rootEl) : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === "vertical";
      dragRect = getRect(dragEl);
      dragOverEvent("dragOverValid");
      if (Sortable.eventCanceled) return completedFired;
      if (revert) {
        parentEl = rootEl;
        capture();
        this._hideClone();
        dragOverEvent("revert");
        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }
        return completed(true);
      }
      var elLastChild = lastChild(el, options.draggable);
      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        if (elLastChild === dragEl) {
          return completed(false);
        }
        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }
        if (target) {
          targetRect = getRect(target);
        }
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          if (elLastChild && elLastChild.nextSibling) {
            el.insertBefore(dragEl, elLastChild.nextSibling);
          } else {
            el.appendChild(dragEl);
          }
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (elLastChild && _ghostIsFirst(evt, vertical, this)) {
        var firstChild = getChild(el, 0, options, true);
        if (firstChild === dragEl) {
          return completed(false);
        }
        target = firstChild;
        targetRect = getRect(target);
        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, false) !== false) {
          capture();
          el.insertBefore(dragEl, firstChild);
          parentEl = el;
          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0, targetBeforeFirstSwap, differentLevel = dragEl.parentNode !== el, differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical), side1 = vertical ? "top" : "left", scrolledPastTop = isScrolledPast(target, "top", "top") || isScrolledPast(dragEl, "top", "top"), scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;
        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }
        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;
        if (direction !== 0) {
          var dragIndex = index(dragEl);
          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, "display") === "none" || sibling === ghostEl));
        }
        if (direction === 0 || sibling === target) {
          return completed(false);
        }
        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling, after = false;
        after = direction === 1;
        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);
        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }
          _silent = true;
          setTimeout(_unsilent, 30);
          capture();
          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          }
          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }
          parentEl = dragEl.parentNode;
          if (targetBeforeFirstSwap !== void 0 && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }
          changed();
          return completed(true);
        }
      }
      if (el.contains(dragEl)) {
        return completed(false);
      }
    }
    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, "mousemove", this._onTouchMove);
    off(document, "touchmove", this._onTouchMove);
    off(document, "pointermove", this._onTouchMove);
    off(document, "dragover", nearestEmptyInsertDetectEvent);
    off(document, "mousemove", nearestEmptyInsertDetectEvent);
    off(document, "touchmove", nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, "mouseup", this._onDrop);
    off(ownerDocument, "touchend", this._onDrop);
    off(ownerDocument, "pointerup", this._onDrop);
    off(ownerDocument, "pointercancel", this._onDrop);
    off(ownerDocument, "touchcancel", this._onDrop);
    off(document, "selectstart", this);
  },
  _onDrop: function _onDrop(evt) {
    var el = this.el, options = this.options;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent2("drop", this, {
      evt
    });
    parentEl = dragEl && dragEl.parentNode;
    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    if (Sortable.eventCanceled) {
      this._nulling();
      return;
    }
    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);
    _cancelNextTick(this.cloneId);
    _cancelNextTick(this._dragStartId);
    if (this.nativeDraggable) {
      off(document, "drop", this);
      off(el, "dragstart", this._onDragStart);
    }
    this._offMoveEvents();
    this._offUpEvents();
    if (Safari) {
      css(document.body, "user-select", "");
    }
    css(dragEl, "transform", "");
    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }
      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);
      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== "clone") {
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }
      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, "dragend", this);
        }
        _disableDraggable(dragEl);
        dragEl.style["will-change"] = "";
        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }
        toggleClass(dragEl, this.options.chosenClass, false);
        _dispatchEvent({
          sortable: this,
          name: "unchoose",
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });
        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            _dispatchEvent({
              rootEl: parentEl,
              name: "add",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "remove",
              toEl: parentEl,
              originalEvent: evt
            });
            _dispatchEvent({
              rootEl: parentEl,
              name: "sort",
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });
            _dispatchEvent({
              sortable: this,
              name: "sort",
              toEl: parentEl,
              originalEvent: evt
            });
          }
          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              _dispatchEvent({
                sortable: this,
                name: "update",
                toEl: parentEl,
                originalEvent: evt
              });
              _dispatchEvent({
                sortable: this,
                name: "sort",
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }
        if (Sortable.active) {
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }
          _dispatchEvent({
            sortable: this,
            name: "end",
            toEl: parentEl,
            originalEvent: evt
          });
          this.save();
        }
      }
    }
    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent2("nulling", this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function(el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(evt) {
    switch (evt.type) {
      case "drop":
      case "dragend":
        this._onDrop(evt);
        break;
      case "dragenter":
      case "dragover":
        if (dragEl) {
          this._onDragOver(evt);
          _globalDragOver(evt);
        }
        break;
      case "selectstart":
        evt.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [], el, children = this.el.children, i = 0, n = children.length, options = this.options;
    for (; i < n; i++) {
      el = children[i];
      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }
    return order;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order, useAnimation) {
    var items = {}, rootEl2 = this.el;
    this.toArray().forEach(function(id, i) {
      var el = rootEl2.children[i];
      if (closest(el, this.options.draggable, rootEl2, false)) {
        items[id] = el;
      }
    }, this);
    useAnimation && this.captureAnimationState();
    order.forEach(function(id) {
      if (items[id]) {
        rootEl2.removeChild(items[id]);
        rootEl2.appendChild(items[id]);
      }
    });
    useAnimation && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;
    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);
      if (typeof modifiedValue !== "undefined") {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }
      if (name === "group") {
        _prepareGroup(options);
      }
    }
  },
  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent2("destroy", this);
    var el = this.el;
    el[expando] = null;
    off(el, "mousedown", this._onTapStart);
    off(el, "touchstart", this._onTapStart);
    off(el, "pointerdown", this._onTapStart);
    if (this.nativeDraggable) {
      off(el, "dragover", this);
      off(el, "dragenter", this);
    }
    Array.prototype.forEach.call(el.querySelectorAll("[draggable]"), function(el2) {
      el2.removeAttribute("draggable");
    });
    this._onDrop();
    this._disableDelayedDragEvents();
    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent2("hideClone", this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, "display", "none");
      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }
      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable2) {
    if (putSortable2.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (cloneHidden) {
      pluginEvent2("showClone", this);
      if (Sortable.eventCanceled) return;
      if (dragEl.parentNode == rootEl && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }
      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }
      css(cloneEl, "display", "");
      cloneHidden = false;
    }
  }
};
function _globalDragOver(evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = "move";
  }
  evt.cancelable && evt.preventDefault();
}
function _onMove(fromEl, toEl, dragEl2, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt, sortable = fromEl[expando], onMoveFn = sortable.options.onMove, retVal;
  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent("move", {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent("Event");
    evt.initEvent("move", true, true);
  }
  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl2;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);
  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }
  return retVal;
}
function _disableDraggable(el) {
  el.draggable = false;
}
function _unsilent() {
  _silent = false;
}
function _ghostIsFirst(evt, vertical, sortable) {
  var firstElRect = getRect(getChild(sortable.el, 0, sortable.options, true));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX < childContainingRect.left - spacer || evt.clientY < firstElRect.top && evt.clientX < firstElRect.right : evt.clientY < childContainingRect.top - spacer || evt.clientY < firstElRect.bottom && evt.clientX < firstElRect.left;
}
function _ghostIsLast(evt, vertical, sortable) {
  var lastElRect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var childContainingRect = getChildContainingRectFromElement(sortable.el, sortable.options, ghostEl);
  var spacer = 10;
  return vertical ? evt.clientX > childContainingRect.right + spacer || evt.clientY > lastElRect.bottom && evt.clientX > lastElRect.left : evt.clientY > childContainingRect.bottom + spacer || evt.clientX > lastElRect.right && evt.clientY > lastElRect.top;
}
function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX, targetLength = vertical ? targetRect.height : targetRect.width, targetS1 = vertical ? targetRect.top : targetRect.left, targetS2 = vertical ? targetRect.bottom : targetRect.right, invert = false;
  if (!invertSwap) {
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        pastFirstInvertThresh = true;
      }
      if (!pastFirstInvertThresh) {
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }
  invert = invert || invertSwap;
  if (invert) {
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }
  return 0;
}
function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent, i = str.length, sum = 0;
  while (i--) {
    sum += str.charCodeAt(i);
  }
  return sum.toString(36);
}
function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName("input");
  var idx = inputs.length;
  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}
function _nextTick(fn) {
  return setTimeout(fn, 0);
}
function _cancelNextTick(id) {
  return clearTimeout(id);
}
if (documentExists) {
  on(document, "touchmove", function(evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
}
Sortable.utils = {
  on,
  off,
  css,
  find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend,
  throttle,
  closest,
  toggleClass,
  clone,
  index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild,
  expando
};
Sortable.get = function(element) {
  return element[expando];
};
Sortable.mount = function() {
  for (var _len = arguments.length, plugins2 = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins2[_key] = arguments[_key];
  }
  if (plugins2[0].constructor === Array) plugins2 = plugins2[0];
  plugins2.forEach(function(plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }
    if (plugin.utils) Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), plugin.utils);
    PluginManager.mount(plugin);
  });
};
Sortable.create = function(el, options) {
  return new Sortable(el, options);
};
Sortable.version = version;
var autoScrolls = [], scrollEl, scrollRootEl, scrolling = false, lastAutoScrollX, lastAutoScrollY, touchEvt$1, pointerElemChangedInterval;
function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      forceAutoScrollFallback: false,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    };
    for (var fn in this) {
      if (fn.charAt(0) === "_" && typeof this[fn] === "function") {
        this[fn] = this[fn].bind(this);
      }
    }
  }
  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;
      if (this.sortable.nativeDraggable) {
        on(document, "dragover", this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, "pointermove", this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, "touchmove", this._handleFallbackAutoScroll);
        } else {
          on(document, "mousemove", this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop3() {
      if (this.sortable.nativeDraggable) {
        off(document, "dragover", this._handleAutoScroll);
      } else {
        off(document, "pointermove", this._handleFallbackAutoScroll);
        off(document, "touchmove", this._handleFallbackAutoScroll);
        off(document, "mousemove", this._handleFallbackAutoScroll);
      }
      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;
      var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt;
      if (fallback || this.options.forceAutoScrollFallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback);
        var ogElemScroller = getParentAutoScrollElement(elem, true);
        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval();
          pointerElemChangedInterval = setInterval(function() {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);
            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }
            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }
        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: "scroll",
    initializeByDefault: true
  });
}
function clearAutoScrolls() {
  autoScrolls.forEach(function(autoScroll2) {
    clearInterval(autoScroll2.pid);
  });
  autoScrolls = [];
}
function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}
var autoScroll = throttle(function(evt, options, rootEl2, isFallback) {
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX, y = (evt.touches ? evt.touches[0] : evt).clientY, sens = options.scrollSensitivity, speed = options.scrollSpeed, winScroller = getWindowScrollingElement();
  var scrollThisInstance = false, scrollCustomFn;
  if (scrollRootEl !== rootEl2) {
    scrollRootEl = rootEl2;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;
    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl2, true);
    }
  }
  var layersOut = 0;
  var currentParent = scrollEl;
  do {
    var el = currentParent, rect = getRect(el), top = rect.top, bottom = rect.bottom, left = rect.left, right = rect.right, width = rect.width, height = rect.height, canScrollX = void 0, canScrollY = void 0, scrollWidth = el.scrollWidth, scrollHeight = el.scrollHeight, elCSS = css(el), scrollPosX = el.scrollLeft, scrollPosY = el.scrollTop;
    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll" || elCSS.overflowX === "visible");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll" || elCSS.overflowY === "visible");
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === "auto" || elCSS.overflowX === "scroll");
      canScrollY = height < scrollHeight && (elCSS.overflowY === "auto" || elCSS.overflowY === "scroll");
    }
    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);
    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }
    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);
      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        autoScrolls[layersOut].pid = setInterval((function() {
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1);
          }
          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;
          if (typeof scrollCustomFn === "function") {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== "continue") {
              return;
            }
          }
          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }).bind({
          layer: layersOut
        }), 24);
      }
    }
    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));
  scrolling = scrollThisInstance;
}, 30);
var drop = function drop2(_ref) {
  var originalEvent = _ref.originalEvent, putSortable2 = _ref.putSortable, dragEl2 = _ref.dragEl, activeSortable = _ref.activeSortable, dispatchSortableEvent = _ref.dispatchSortableEvent, hideGhostForTarget = _ref.hideGhostForTarget, unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable2 || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();
  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent("spill");
    this.onSpill({
      dragEl: dragEl2,
      putSortable: putSortable2
    });
  }
};
function Revert() {
}
Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex2 = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex2;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl2 = _ref3.dragEl, putSortable2 = _ref3.putSortable;
    this.sortable.captureAnimationState();
    if (putSortable2) {
      putSortable2.captureAnimationState();
    }
    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);
    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl2, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl2);
    }
    this.sortable.animateAll();
    if (putSortable2) {
      putSortable2.animateAll();
    }
  },
  drop
};
_extends(Revert, {
  pluginName: "revertOnSpill"
});
function Remove() {
}
Remove.prototype = {
  onSpill: function onSpill2(_ref4) {
    var dragEl2 = _ref4.dragEl, putSortable2 = _ref4.putSortable;
    var parentSortable = putSortable2 || this.sortable;
    parentSortable.captureAnimationState();
    dragEl2.parentNode && dragEl2.parentNode.removeChild(dragEl2);
    parentSortable.animateAll();
  },
  drop
};
_extends(Remove, {
  pluginName: "removeOnSpill"
});
Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);
var javascript = { exports: {} };
var hasRequiredJavascript;
function requireJavascript() {
  if (hasRequiredJavascript) return javascript.exports;
  hasRequiredJavascript = 1;
  (function(module, exports$1) {
    (function(mod) {
      mod(requireCodemirror());
    })(function(CodeMirror) {
      CodeMirror.defineMode("javascript", function(config, parserConfig) {
        var indentUnit = config.indentUnit;
        var statementIndent = parserConfig.statementIndent;
        var jsonldMode = parserConfig.jsonld;
        var jsonMode = parserConfig.json || jsonldMode;
        var trackScope = parserConfig.trackScope !== false;
        var isTS = parserConfig.typescript;
        var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;
        var keywords = (function() {
          function kw(type2) {
            return { type: type2, style: "keyword" };
          }
          var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
          var operator = kw("operator"), atom = { type: "atom", style: "atom" };
          return {
            "if": kw("if"),
            "while": A,
            "with": A,
            "else": B,
            "do": B,
            "try": B,
            "finally": B,
            "return": D,
            "break": D,
            "continue": D,
            "new": kw("new"),
            "delete": C,
            "void": C,
            "throw": C,
            "debugger": kw("debugger"),
            "var": kw("var"),
            "const": kw("var"),
            "let": kw("var"),
            "function": kw("function"),
            "catch": kw("catch"),
            "for": kw("for"),
            "switch": kw("switch"),
            "case": kw("case"),
            "default": kw("default"),
            "in": operator,
            "typeof": operator,
            "instanceof": operator,
            "true": atom,
            "false": atom,
            "null": atom,
            "undefined": atom,
            "NaN": atom,
            "Infinity": atom,
            "this": kw("this"),
            "class": kw("class"),
            "super": kw("atom"),
            "yield": C,
            "export": kw("export"),
            "import": kw("import"),
            "extends": C,
            "await": C
          };
        })();
        var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
        var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
        function readRegexp(stream) {
          var escaped = false, next, inSet = false;
          while ((next = stream.next()) != null) {
            if (!escaped) {
              if (next == "/" && !inSet) return;
              if (next == "[") inSet = true;
              else if (inSet && next == "]") inSet = false;
            }
            escaped = !escaped && next == "\\";
          }
        }
        var type, content;
        function ret(tp, style, cont2) {
          type = tp;
          content = cont2;
          return style;
        }
        function tokenBase(stream, state) {
          var ch = stream.next();
          if (ch == '"' || ch == "'") {
            state.tokenize = tokenString(ch);
            return state.tokenize(stream, state);
          } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
            return ret("number", "number");
          } else if (ch == "." && stream.match("..")) {
            return ret("spread", "meta");
          } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
            return ret(ch);
          } else if (ch == "=" && stream.eat(">")) {
            return ret("=>", "operator");
          } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
            return ret("number", "number");
          } else if (/\d/.test(ch)) {
            stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
            return ret("number", "number");
          } else if (ch == "/") {
            if (stream.eat("*")) {
              state.tokenize = tokenComment;
              return tokenComment(stream, state);
            } else if (stream.eat("/")) {
              stream.skipToEnd();
              return ret("comment", "comment");
            } else if (expressionAllowed(stream, state, 1)) {
              readRegexp(stream);
              stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
              return ret("regexp", "string-2");
            } else {
              stream.eat("=");
              return ret("operator", "operator", stream.current());
            }
          } else if (ch == "`") {
            state.tokenize = tokenQuasi;
            return tokenQuasi(stream, state);
          } else if (ch == "#" && stream.peek() == "!") {
            stream.skipToEnd();
            return ret("meta", "meta");
          } else if (ch == "#" && stream.eatWhile(wordRE)) {
            return ret("variable", "property");
          } else if (ch == "<" && stream.match("!--") || ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start))) {
            stream.skipToEnd();
            return ret("comment", "comment");
          } else if (isOperatorChar.test(ch)) {
            if (ch != ">" || !state.lexical || state.lexical.type != ">") {
              if (stream.eat("=")) {
                if (ch == "!" || ch == "=") stream.eat("=");
              } else if (/[<>*+\-|&?]/.test(ch)) {
                stream.eat(ch);
                if (ch == ">") stream.eat(ch);
              }
            }
            if (ch == "?" && stream.eat(".")) return ret(".");
            return ret("operator", "operator", stream.current());
          } else if (wordRE.test(ch)) {
            stream.eatWhile(wordRE);
            var word = stream.current();
            if (state.lastType != ".") {
              if (keywords.propertyIsEnumerable(word)) {
                var kw = keywords[word];
                return ret(kw.type, kw.style, word);
              }
              if (word == "async" && stream.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false))
                return ret("async", "keyword", word);
            }
            return ret("variable", "variable", word);
          }
        }
        function tokenString(quote) {
          return function(stream, state) {
            var escaped = false, next;
            if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)) {
              state.tokenize = tokenBase;
              return ret("jsonld-keyword", "meta");
            }
            while ((next = stream.next()) != null) {
              if (next == quote && !escaped) break;
              escaped = !escaped && next == "\\";
            }
            if (!escaped) state.tokenize = tokenBase;
            return ret("string", "string");
          };
        }
        function tokenComment(stream, state) {
          var maybeEnd = false, ch;
          while (ch = stream.next()) {
            if (ch == "/" && maybeEnd) {
              state.tokenize = tokenBase;
              break;
            }
            maybeEnd = ch == "*";
          }
          return ret("comment", "comment");
        }
        function tokenQuasi(stream, state) {
          var escaped = false, next;
          while ((next = stream.next()) != null) {
            if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
              state.tokenize = tokenBase;
              break;
            }
            escaped = !escaped && next == "\\";
          }
          return ret("quasi", "string-2", stream.current());
        }
        var brackets = "([{}])";
        function findFatArrow(stream, state) {
          if (state.fatArrowAt) state.fatArrowAt = null;
          var arrow = stream.string.indexOf("=>", stream.start);
          if (arrow < 0) return;
          if (isTS) {
            var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow));
            if (m) arrow = m.index;
          }
          var depth = 0, sawSomething = false;
          for (var pos = arrow - 1; pos >= 0; --pos) {
            var ch = stream.string.charAt(pos);
            var bracket = brackets.indexOf(ch);
            if (bracket >= 0 && bracket < 3) {
              if (!depth) {
                ++pos;
                break;
              }
              if (--depth == 0) {
                if (ch == "(") sawSomething = true;
                break;
              }
            } else if (bracket >= 3 && bracket < 6) {
              ++depth;
            } else if (wordRE.test(ch)) {
              sawSomething = true;
            } else if (/["'\/`]/.test(ch)) {
              for (; ; --pos) {
                if (pos == 0) return;
                var next = stream.string.charAt(pos - 1);
                if (next == ch && stream.string.charAt(pos - 2) != "\\") {
                  pos--;
                  break;
                }
              }
            } else if (sawSomething && !depth) {
              ++pos;
              break;
            }
          }
          if (sawSomething && !depth) state.fatArrowAt = pos;
        }
        var atomicTypes = {
          "atom": true,
          "number": true,
          "variable": true,
          "string": true,
          "regexp": true,
          "this": true,
          "import": true,
          "jsonld-keyword": true
        };
        function JSLexical(indented, column, type2, align, prev, info) {
          this.indented = indented;
          this.column = column;
          this.type = type2;
          this.prev = prev;
          this.info = info;
          if (align != null) this.align = align;
        }
        function inScope(state, varname) {
          if (!trackScope) return false;
          for (var v = state.localVars; v; v = v.next)
            if (v.name == varname) return true;
          for (var cx2 = state.context; cx2; cx2 = cx2.prev) {
            for (var v = cx2.vars; v; v = v.next)
              if (v.name == varname) return true;
          }
        }
        function parseJS(state, style, type2, content2, stream) {
          var cc = state.cc;
          cx.state = state;
          cx.stream = stream;
          cx.marked = null, cx.cc = cc;
          cx.style = style;
          if (!state.lexical.hasOwnProperty("align"))
            state.lexical.align = true;
          while (true) {
            var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
            if (combinator(type2, content2)) {
              while (cc.length && cc[cc.length - 1].lex)
                cc.pop()();
              if (cx.marked) return cx.marked;
              if (type2 == "variable" && inScope(state, content2)) return "variable-2";
              return style;
            }
          }
        }
        var cx = { state: null, marked: null, cc: null };
        function pass() {
          for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
        }
        function cont() {
          pass.apply(null, arguments);
          return true;
        }
        function inList(name, list) {
          for (var v = list; v; v = v.next) if (v.name == name) return true;
          return false;
        }
        function register(varname) {
          var state = cx.state;
          cx.marked = "def";
          if (!trackScope) return;
          if (state.context) {
            if (state.lexical.info == "var" && state.context && state.context.block) {
              var newContext = registerVarScoped(varname, state.context);
              if (newContext != null) {
                state.context = newContext;
                return;
              }
            } else if (!inList(varname, state.localVars)) {
              state.localVars = new Var(varname, state.localVars);
              return;
            }
          }
          if (parserConfig.globalVars && !inList(varname, state.globalVars))
            state.globalVars = new Var(varname, state.globalVars);
        }
        function registerVarScoped(varname, context) {
          if (!context) {
            return null;
          } else if (context.block) {
            var inner = registerVarScoped(varname, context.prev);
            if (!inner) return null;
            if (inner == context.prev) return context;
            return new Context(inner, context.vars, true);
          } else if (inList(varname, context.vars)) {
            return context;
          } else {
            return new Context(context.prev, new Var(varname, context.vars), false);
          }
        }
        function isModifier(name) {
          return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly";
        }
        function Context(prev, vars, block2) {
          this.prev = prev;
          this.vars = vars;
          this.block = block2;
        }
        function Var(name, next) {
          this.name = name;
          this.next = next;
        }
        var defaultVars = new Var("this", new Var("arguments", null));
        function pushcontext() {
          cx.state.context = new Context(cx.state.context, cx.state.localVars, false);
          cx.state.localVars = defaultVars;
        }
        function pushblockcontext() {
          cx.state.context = new Context(cx.state.context, cx.state.localVars, true);
          cx.state.localVars = null;
        }
        pushcontext.lex = pushblockcontext.lex = true;
        function popcontext() {
          cx.state.localVars = cx.state.context.vars;
          cx.state.context = cx.state.context.prev;
        }
        popcontext.lex = true;
        function pushlex(type2, info) {
          var result = function() {
            var state = cx.state, indent = state.indented;
            if (state.lexical.type == "stat") indent = state.lexical.indented;
            else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
              indent = outer.indented;
            state.lexical = new JSLexical(indent, cx.stream.column(), type2, null, state.lexical, info);
          };
          result.lex = true;
          return result;
        }
        function poplex() {
          var state = cx.state;
          if (state.lexical.prev) {
            if (state.lexical.type == ")")
              state.indented = state.lexical.indented;
            state.lexical = state.lexical.prev;
          }
        }
        poplex.lex = true;
        function expect(wanted) {
          function exp(type2) {
            if (type2 == wanted) return cont();
            else if (wanted == ";" || type2 == "}" || type2 == ")" || type2 == "]") return pass();
            else return cont(exp);
          }
          return exp;
        }
        function statement(type2, value) {
          if (type2 == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
          if (type2 == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
          if (type2 == "keyword b") return cont(pushlex("form"), statement, poplex);
          if (type2 == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
          if (type2 == "debugger") return cont(expect(";"));
          if (type2 == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
          if (type2 == ";") return cont();
          if (type2 == "if") {
            if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
              cx.state.cc.pop()();
            return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
          }
          if (type2 == "function") return cont(functiondef);
          if (type2 == "for") return cont(pushlex("form"), pushblockcontext, forspec, statement, popcontext, poplex);
          if (type2 == "class" || isTS && value == "interface") {
            cx.marked = "keyword";
            return cont(pushlex("form", type2 == "class" ? type2 : value), className, poplex);
          }
          if (type2 == "variable") {
            if (isTS && value == "declare") {
              cx.marked = "keyword";
              return cont(statement);
            } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
              cx.marked = "keyword";
              if (value == "enum") return cont(enumdef);
              else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
              else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex);
            } else if (isTS && value == "namespace") {
              cx.marked = "keyword";
              return cont(pushlex("form"), expression, statement, poplex);
            } else if (isTS && value == "abstract") {
              cx.marked = "keyword";
              return cont(statement);
            } else {
              return cont(pushlex("stat"), maybelabel);
            }
          }
          if (type2 == "switch") return cont(
            pushlex("form"),
            parenExpr,
            expect("{"),
            pushlex("}", "switch"),
            pushblockcontext,
            block,
            poplex,
            poplex,
            popcontext
          );
          if (type2 == "case") return cont(expression, expect(":"));
          if (type2 == "default") return cont(expect(":"));
          if (type2 == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
          if (type2 == "export") return cont(pushlex("stat"), afterExport, poplex);
          if (type2 == "import") return cont(pushlex("stat"), afterImport, poplex);
          if (type2 == "async") return cont(statement);
          if (value == "@") return cont(expression, statement);
          return pass(pushlex("stat"), expression, expect(";"), poplex);
        }
        function maybeCatchBinding(type2) {
          if (type2 == "(") return cont(funarg, expect(")"));
        }
        function expression(type2, value) {
          return expressionInner(type2, value, false);
        }
        function expressionNoComma(type2, value) {
          return expressionInner(type2, value, true);
        }
        function parenExpr(type2) {
          if (type2 != "(") return pass();
          return cont(pushlex(")"), maybeexpression, expect(")"), poplex);
        }
        function expressionInner(type2, value, noComma) {
          if (cx.state.fatArrowAt == cx.stream.start) {
            var body = noComma ? arrowBodyNoComma : arrowBody;
            if (type2 == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
            else if (type2 == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
          }
          var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
          if (atomicTypes.hasOwnProperty(type2)) return cont(maybeop);
          if (type2 == "function") return cont(functiondef, maybeop);
          if (type2 == "class" || isTS && value == "interface") {
            cx.marked = "keyword";
            return cont(pushlex("form"), classExpression, poplex);
          }
          if (type2 == "keyword c" || type2 == "async") return cont(noComma ? expressionNoComma : expression);
          if (type2 == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
          if (type2 == "operator" || type2 == "spread") return cont(noComma ? expressionNoComma : expression);
          if (type2 == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
          if (type2 == "{") return contCommasep(objprop, "}", null, maybeop);
          if (type2 == "quasi") return pass(quasi, maybeop);
          if (type2 == "new") return cont(maybeTarget(noComma));
          return cont();
        }
        function maybeexpression(type2) {
          if (type2.match(/[;\}\)\],]/)) return pass();
          return pass(expression);
        }
        function maybeoperatorComma(type2, value) {
          if (type2 == ",") return cont(maybeexpression);
          return maybeoperatorNoComma(type2, value, false);
        }
        function maybeoperatorNoComma(type2, value, noComma) {
          var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
          var expr = noComma == false ? expression : expressionNoComma;
          if (type2 == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
          if (type2 == "operator") {
            if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
            if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
              return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
            if (value == "?") return cont(expression, expect(":"), expr);
            return cont(expr);
          }
          if (type2 == "quasi") {
            return pass(quasi, me);
          }
          if (type2 == ";") return;
          if (type2 == "(") return contCommasep(expressionNoComma, ")", "call", me);
          if (type2 == ".") return cont(property, me);
          if (type2 == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
          if (isTS && value == "as") {
            cx.marked = "keyword";
            return cont(typeexpr, me);
          }
          if (type2 == "regexp") {
            cx.state.lastType = cx.marked = "operator";
            cx.stream.backUp(cx.stream.pos - cx.stream.start - 1);
            return cont(expr);
          }
        }
        function quasi(type2, value) {
          if (type2 != "quasi") return pass();
          if (value.slice(value.length - 2) != "${") return cont(quasi);
          return cont(maybeexpression, continueQuasi);
        }
        function continueQuasi(type2) {
          if (type2 == "}") {
            cx.marked = "string-2";
            cx.state.tokenize = tokenQuasi;
            return cont(quasi);
          }
        }
        function arrowBody(type2) {
          findFatArrow(cx.stream, cx.state);
          return pass(type2 == "{" ? statement : expression);
        }
        function arrowBodyNoComma(type2) {
          findFatArrow(cx.stream, cx.state);
          return pass(type2 == "{" ? statement : expressionNoComma);
        }
        function maybeTarget(noComma) {
          return function(type2) {
            if (type2 == ".") return cont(noComma ? targetNoComma : target);
            else if (type2 == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma);
            else return pass(noComma ? expressionNoComma : expression);
          };
        }
        function target(_, value) {
          if (value == "target") {
            cx.marked = "keyword";
            return cont(maybeoperatorComma);
          }
        }
        function targetNoComma(_, value) {
          if (value == "target") {
            cx.marked = "keyword";
            return cont(maybeoperatorNoComma);
          }
        }
        function maybelabel(type2) {
          if (type2 == ":") return cont(poplex, statement);
          return pass(maybeoperatorComma, expect(";"), poplex);
        }
        function property(type2) {
          if (type2 == "variable") {
            cx.marked = "property";
            return cont();
          }
        }
        function objprop(type2, value) {
          if (type2 == "async") {
            cx.marked = "property";
            return cont(objprop);
          } else if (type2 == "variable" || cx.style == "keyword") {
            cx.marked = "property";
            if (value == "get" || value == "set") return cont(getterSetter);
            var m;
            if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
              cx.state.fatArrowAt = cx.stream.pos + m[0].length;
            return cont(afterprop);
          } else if (type2 == "number" || type2 == "string") {
            cx.marked = jsonldMode ? "property" : cx.style + " property";
            return cont(afterprop);
          } else if (type2 == "jsonld-keyword") {
            return cont(afterprop);
          } else if (isTS && isModifier(value)) {
            cx.marked = "keyword";
            return cont(objprop);
          } else if (type2 == "[") {
            return cont(expression, maybetype, expect("]"), afterprop);
          } else if (type2 == "spread") {
            return cont(expressionNoComma, afterprop);
          } else if (value == "*") {
            cx.marked = "keyword";
            return cont(objprop);
          } else if (type2 == ":") {
            return pass(afterprop);
          }
        }
        function getterSetter(type2) {
          if (type2 != "variable") return pass(afterprop);
          cx.marked = "property";
          return cont(functiondef);
        }
        function afterprop(type2) {
          if (type2 == ":") return cont(expressionNoComma);
          if (type2 == "(") return pass(functiondef);
        }
        function commasep(what, end, sep) {
          function proceed(type2, value) {
            if (sep ? sep.indexOf(type2) > -1 : type2 == ",") {
              var lex = cx.state.lexical;
              if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
              return cont(function(type3, value2) {
                if (type3 == end || value2 == end) return pass();
                return pass(what);
              }, proceed);
            }
            if (type2 == end || value == end) return cont();
            if (sep && sep.indexOf(";") > -1) return pass(what);
            return cont(expect(end));
          }
          return function(type2, value) {
            if (type2 == end || value == end) return cont();
            return pass(what, proceed);
          };
        }
        function contCommasep(what, end, info) {
          for (var i = 3; i < arguments.length; i++)
            cx.cc.push(arguments[i]);
          return cont(pushlex(end, info), commasep(what, end), poplex);
        }
        function block(type2) {
          if (type2 == "}") return cont();
          return pass(statement, block);
        }
        function maybetype(type2, value) {
          if (isTS) {
            if (type2 == ":") return cont(typeexpr);
            if (value == "?") return cont(maybetype);
          }
        }
        function maybetypeOrIn(type2, value) {
          if (isTS && (type2 == ":" || value == "in")) return cont(typeexpr);
        }
        function mayberettype(type2) {
          if (isTS && type2 == ":") {
            if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr);
            else return cont(typeexpr);
          }
        }
        function isKW(_, value) {
          if (value == "is") {
            cx.marked = "keyword";
            return cont();
          }
        }
        function typeexpr(type2, value) {
          if (value == "keyof" || value == "typeof" || value == "infer" || value == "readonly") {
            cx.marked = "keyword";
            return cont(value == "typeof" ? expressionNoComma : typeexpr);
          }
          if (type2 == "variable" || value == "void") {
            cx.marked = "type";
            return cont(afterType);
          }
          if (value == "|" || value == "&") return cont(typeexpr);
          if (type2 == "string" || type2 == "number" || type2 == "atom") return cont(afterType);
          if (type2 == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType);
          if (type2 == "{") return cont(pushlex("}"), typeprops, poplex, afterType);
          if (type2 == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType);
          if (type2 == "<") return cont(commasep(typeexpr, ">"), typeexpr);
          if (type2 == "quasi") {
            return pass(quasiType, afterType);
          }
        }
        function maybeReturnType(type2) {
          if (type2 == "=>") return cont(typeexpr);
        }
        function typeprops(type2) {
          if (type2.match(/[\}\)\]]/)) return cont();
          if (type2 == "," || type2 == ";") return cont(typeprops);
          return pass(typeprop, typeprops);
        }
        function typeprop(type2, value) {
          if (type2 == "variable" || cx.style == "keyword") {
            cx.marked = "property";
            return cont(typeprop);
          } else if (value == "?" || type2 == "number" || type2 == "string") {
            return cont(typeprop);
          } else if (type2 == ":") {
            return cont(typeexpr);
          } else if (type2 == "[") {
            return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop);
          } else if (type2 == "(") {
            return pass(functiondecl, typeprop);
          } else if (!type2.match(/[;\}\)\],]/)) {
            return cont();
          }
        }
        function quasiType(type2, value) {
          if (type2 != "quasi") return pass();
          if (value.slice(value.length - 2) != "${") return cont(quasiType);
          return cont(typeexpr, continueQuasiType);
        }
        function continueQuasiType(type2) {
          if (type2 == "}") {
            cx.marked = "string-2";
            cx.state.tokenize = tokenQuasi;
            return cont(quasiType);
          }
        }
        function typearg(type2, value) {
          if (type2 == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg);
          if (type2 == ":") return cont(typeexpr);
          if (type2 == "spread") return cont(typearg);
          return pass(typeexpr);
        }
        function afterType(type2, value) {
          if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
          if (value == "|" || type2 == "." || value == "&") return cont(typeexpr);
          if (type2 == "[") return cont(typeexpr, expect("]"), afterType);
          if (value == "extends" || value == "implements") {
            cx.marked = "keyword";
            return cont(typeexpr);
          }
          if (value == "?") return cont(typeexpr, expect(":"), typeexpr);
        }
        function maybeTypeArgs(_, value) {
          if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType);
        }
        function typeparam() {
          return pass(typeexpr, maybeTypeDefault);
        }
        function maybeTypeDefault(_, value) {
          if (value == "=") return cont(typeexpr);
        }
        function vardef(_, value) {
          if (value == "enum") {
            cx.marked = "keyword";
            return cont(enumdef);
          }
          return pass(pattern, maybetype, maybeAssign, vardefCont);
        }
        function pattern(type2, value) {
          if (isTS && isModifier(value)) {
            cx.marked = "keyword";
            return cont(pattern);
          }
          if (type2 == "variable") {
            register(value);
            return cont();
          }
          if (type2 == "spread") return cont(pattern);
          if (type2 == "[") return contCommasep(eltpattern, "]");
          if (type2 == "{") return contCommasep(proppattern, "}");
        }
        function proppattern(type2, value) {
          if (type2 == "variable" && !cx.stream.match(/^\s*:/, false)) {
            register(value);
            return cont(maybeAssign);
          }
          if (type2 == "variable") cx.marked = "property";
          if (type2 == "spread") return cont(pattern);
          if (type2 == "}") return pass();
          if (type2 == "[") return cont(expression, expect("]"), expect(":"), proppattern);
          return cont(expect(":"), pattern, maybeAssign);
        }
        function eltpattern() {
          return pass(pattern, maybeAssign);
        }
        function maybeAssign(_type, value) {
          if (value == "=") return cont(expressionNoComma);
        }
        function vardefCont(type2) {
          if (type2 == ",") return cont(vardef);
        }
        function maybeelse(type2, value) {
          if (type2 == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
        }
        function forspec(type2, value) {
          if (value == "await") return cont(forspec);
          if (type2 == "(") return cont(pushlex(")"), forspec1, poplex);
        }
        function forspec1(type2) {
          if (type2 == "var") return cont(vardef, forspec2);
          if (type2 == "variable") return cont(forspec2);
          return pass(forspec2);
        }
        function forspec2(type2, value) {
          if (type2 == ")") return cont();
          if (type2 == ";") return cont(forspec2);
          if (value == "in" || value == "of") {
            cx.marked = "keyword";
            return cont(expression, forspec2);
          }
          return pass(expression, forspec2);
        }
        function functiondef(type2, value) {
          if (value == "*") {
            cx.marked = "keyword";
            return cont(functiondef);
          }
          if (type2 == "variable") {
            register(value);
            return cont(functiondef);
          }
          if (type2 == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
          if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef);
        }
        function functiondecl(type2, value) {
          if (value == "*") {
            cx.marked = "keyword";
            return cont(functiondecl);
          }
          if (type2 == "variable") {
            register(value);
            return cont(functiondecl);
          }
          if (type2 == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
          if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl);
        }
        function typename(type2, value) {
          if (type2 == "keyword" || type2 == "variable") {
            cx.marked = "type";
            return cont(typename);
          } else if (value == "<") {
            return cont(pushlex(">"), commasep(typeparam, ">"), poplex);
          }
        }
        function funarg(type2, value) {
          if (value == "@") cont(expression, funarg);
          if (type2 == "spread") return cont(funarg);
          if (isTS && isModifier(value)) {
            cx.marked = "keyword";
            return cont(funarg);
          }
          if (isTS && type2 == "this") return cont(maybetype, maybeAssign);
          return pass(pattern, maybetype, maybeAssign);
        }
        function classExpression(type2, value) {
          if (type2 == "variable") return className(type2, value);
          return classNameAfter(type2, value);
        }
        function className(type2, value) {
          if (type2 == "variable") {
            register(value);
            return cont(classNameAfter);
          }
        }
        function classNameAfter(type2, value) {
          if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter);
          if (value == "extends" || value == "implements" || isTS && type2 == ",") {
            if (value == "implements") cx.marked = "keyword";
            return cont(isTS ? typeexpr : expression, classNameAfter);
          }
          if (type2 == "{") return cont(pushlex("}"), classBody, poplex);
        }
        function classBody(type2, value) {
          if (type2 == "async" || type2 == "variable" && (value == "static" || value == "get" || value == "set" || isTS && isModifier(value)) && cx.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false)) {
            cx.marked = "keyword";
            return cont(classBody);
          }
          if (type2 == "variable" || cx.style == "keyword") {
            cx.marked = "property";
            return cont(classfield, classBody);
          }
          if (type2 == "number" || type2 == "string") return cont(classfield, classBody);
          if (type2 == "[")
            return cont(expression, maybetype, expect("]"), classfield, classBody);
          if (value == "*") {
            cx.marked = "keyword";
            return cont(classBody);
          }
          if (isTS && type2 == "(") return pass(functiondecl, classBody);
          if (type2 == ";" || type2 == ",") return cont(classBody);
          if (type2 == "}") return cont();
          if (value == "@") return cont(expression, classBody);
        }
        function classfield(type2, value) {
          if (value == "!") return cont(classfield);
          if (value == "?") return cont(classfield);
          if (type2 == ":") return cont(typeexpr, maybeAssign);
          if (value == "=") return cont(expressionNoComma);
          var context = cx.state.lexical.prev, isInterface = context && context.info == "interface";
          return pass(isInterface ? functiondecl : functiondef);
        }
        function afterExport(type2, value) {
          if (value == "*") {
            cx.marked = "keyword";
            return cont(maybeFrom, expect(";"));
          }
          if (value == "default") {
            cx.marked = "keyword";
            return cont(expression, expect(";"));
          }
          if (type2 == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
          return pass(statement);
        }
        function exportField(type2, value) {
          if (value == "as") {
            cx.marked = "keyword";
            return cont(expect("variable"));
          }
          if (type2 == "variable") return pass(expressionNoComma, exportField);
        }
        function afterImport(type2) {
          if (type2 == "string") return cont();
          if (type2 == "(") return pass(expression);
          if (type2 == ".") return pass(maybeoperatorComma);
          return pass(importSpec, maybeMoreImports, maybeFrom);
        }
        function importSpec(type2, value) {
          if (type2 == "{") return contCommasep(importSpec, "}");
          if (type2 == "variable") register(value);
          if (value == "*") cx.marked = "keyword";
          return cont(maybeAs);
        }
        function maybeMoreImports(type2) {
          if (type2 == ",") return cont(importSpec, maybeMoreImports);
        }
        function maybeAs(_type, value) {
          if (value == "as") {
            cx.marked = "keyword";
            return cont(importSpec);
          }
        }
        function maybeFrom(_type, value) {
          if (value == "from") {
            cx.marked = "keyword";
            return cont(expression);
          }
        }
        function arrayLiteral(type2) {
          if (type2 == "]") return cont();
          return pass(commasep(expressionNoComma, "]"));
        }
        function enumdef() {
          return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex);
        }
        function enummember() {
          return pass(pattern, maybeAssign);
        }
        function isContinuedStatement(state, textAfter) {
          return state.lastType == "operator" || state.lastType == "," || isOperatorChar.test(textAfter.charAt(0)) || /[,.]/.test(textAfter.charAt(0));
        }
        function expressionAllowed(stream, state, backUp) {
          return state.tokenize == tokenBase && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) || state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0)));
        }
        return {
          startState: function(basecolumn) {
            var state = {
              tokenize: tokenBase,
              lastType: "sof",
              cc: [],
              lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
              localVars: parserConfig.localVars,
              context: parserConfig.localVars && new Context(null, null, false),
              indented: basecolumn || 0
            };
            if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
              state.globalVars = parserConfig.globalVars;
            return state;
          },
          token: function(stream, state) {
            if (stream.sol()) {
              if (!state.lexical.hasOwnProperty("align"))
                state.lexical.align = false;
              state.indented = stream.indentation();
              findFatArrow(stream, state);
            }
            if (state.tokenize != tokenComment && stream.eatSpace()) return null;
            var style = state.tokenize(stream, state);
            if (type == "comment") return style;
            state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
            return parseJS(state, style, type, content, stream);
          },
          indent: function(state, textAfter) {
            if (state.tokenize == tokenComment || state.tokenize == tokenQuasi) return CodeMirror.Pass;
            if (state.tokenize != tokenBase) return 0;
            var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top;
            if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
              var c = state.cc[i];
              if (c == poplex) lexical = lexical.prev;
              else if (c != maybeelse && c != popcontext) break;
            }
            while ((lexical.type == "stat" || lexical.type == "form") && (firstChar == "}" || (top = state.cc[state.cc.length - 1]) && (top == maybeoperatorComma || top == maybeoperatorNoComma) && !/^[,\.=+\-*:?[\(]/.test(textAfter)))
              lexical = lexical.prev;
            if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
              lexical = lexical.prev;
            var type2 = lexical.type, closing = firstChar == type2;
            if (type2 == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
            else if (type2 == "form" && firstChar == "{") return lexical.indented;
            else if (type2 == "form") return lexical.indented + indentUnit;
            else if (type2 == "stat")
              return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
            else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
              return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
            else if (lexical.align) return lexical.column + (closing ? 0 : 1);
            else return lexical.indented + (closing ? 0 : indentUnit);
          },
          electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
          blockCommentStart: jsonMode ? null : "/*",
          blockCommentEnd: jsonMode ? null : "*/",
          blockCommentContinue: jsonMode ? null : " * ",
          lineComment: jsonMode ? null : "//",
          fold: "brace",
          closeBrackets: "()[]{}''\"\"``",
          helperType: jsonMode ? "json" : "javascript",
          jsonldMode,
          jsonMode,
          expressionAllowed,
          skipExpression: function(state) {
            parseJS(state, "atom", "atom", "true", new CodeMirror.StringStream("", 2, null));
          }
        };
      });
      CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);
      CodeMirror.defineMIME("text/javascript", "javascript");
      CodeMirror.defineMIME("text/ecmascript", "javascript");
      CodeMirror.defineMIME("application/javascript", "javascript");
      CodeMirror.defineMIME("application/x-javascript", "javascript");
      CodeMirror.defineMIME("application/ecmascript", "javascript");
      CodeMirror.defineMIME("application/json", { name: "javascript", json: true });
      CodeMirror.defineMIME("application/x-json", { name: "javascript", json: true });
      CodeMirror.defineMIME("application/manifest+json", { name: "javascript", json: true });
      CodeMirror.defineMIME("application/ld+json", { name: "javascript", jsonld: true });
      CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
      CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });
    });
  })();
  return javascript.exports;
}
requireJavascript();
const GENERATOR_BASE_URL = "/api/v1/codegen";
const GeneratorAPI = {
  /** 获取数据表分页列表 */
  getTablePage(params) {
    return httpRequest({
      url: `${GENERATOR_BASE_URL}/table/page`,
      method: "get",
      params
    });
  },
  /** 获取代码生成配置 */
  getGenConfig(tableName) {
    return httpRequest({
      url: `${GENERATOR_BASE_URL}/${tableName}/config`,
      method: "get"
    });
  },
  /** 获取代码生成配置 */
  saveGenConfig(tableName, data) {
    return httpRequest({
      url: `${GENERATOR_BASE_URL}/${tableName}/config`,
      method: "post",
      data
    });
  },
  /** 获取代码生成预览数据 */
  getPreviewData(tableName, pageType) {
    return httpRequest({
      url: `${GENERATOR_BASE_URL}/${tableName}/preview`,
      method: "get",
      params: pageType ? { pageType } : void 0
    });
  },
  /** 重置代码生成配置 */
  resetGenConfig(tableName) {
    return httpRequest({
      url: `${GENERATOR_BASE_URL}/${tableName}/config`,
      method: "delete"
    });
  },
  /**
   * 下载 ZIP 文件
   * @param url
   * @param fileName
   */
  download(tableName, pageType) {
    return httpRequest({
      url: `${GENERATOR_BASE_URL}/${tableName}/download`,
      method: "get",
      params: pageType ? { pageType } : void 0,
      responseType: "blob"
    }).then((response) => {
      const fileName = decodeURI(
        response.headers["content-disposition"].split(";")[1].split("=")[1]
      );
      const blob = new Blob([response.data], { type: "application/zip" });
      const a = document.createElement("a");
      const url = window.URL.createObjectURL(blob);
      a.href = url;
      a.download = fileName;
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
};
const MENU_BASE_URL = "/api/v1/menus";
const MenuAPI = {
  /** 获取当前用户的路由列表 */
  getRoutes() {
    return httpRequest({ url: `${MENU_BASE_URL}/routes`, method: "get" });
  },
  /** 获取菜单树形列表 */
  getList(queryParams) {
    return httpRequest({ url: `${MENU_BASE_URL}`, method: "get", params: queryParams });
  },
  /** 获取菜单下拉数据源 */
  getOptions(onlyParent) {
    return httpRequest({
      url: `${MENU_BASE_URL}/options`,
      method: "get",
      params: { onlyParent }
    });
  },
  /** 获取菜单表单数据 */
  getFormData(id) {
    return httpRequest({ url: `${MENU_BASE_URL}/${id}/form`, method: "get" });
  },
  /** 新增菜单 */
  create(data) {
    return httpRequest({ url: `${MENU_BASE_URL}`, method: "post", data });
  },
  /** 修改菜单 */
  update(id, data) {
    return httpRequest({ url: `${MENU_BASE_URL}/${id}`, method: "put", data });
  },
  /** 删除菜单 */
  deleteById(id) {
    return httpRequest({ url: `${MENU_BASE_URL}/${id}`, method: "delete" });
  }
};
const _hoisted_1 = { class: "app-container" };
const _hoisted_2 = { class: "search-container" };
const _hoisted_3 = { class: "mt-5" };
const _hoisted_4 = { class: "flex-y-between" };
const _hoisted_5 = { class: "elTableCustom" };
const _hoisted_6 = { class: "mb-2 flex-y-center gap-2" };
const _hoisted_7 = { key: 1 };
const _hoisted_8 = { key: 1 };
const _hoisted_9 = { key: 1 };
const _hoisted_10 = { key: 1 };
const _hoisted_11 = { class: "flex-y-center gap-3" };
const _hoisted_12 = { class: "ml-1" };
const _hoisted_13 = { class: "absolute z-36 right-5 top-2" };
const _hoisted_14 = { class: "space-y-3" };
const _hoisted_15 = { class: "flex-y-center gap-2" };
const _hoisted_16 = { class: "flex-y-center gap-2" };
const _hoisted_17 = {
  key: 1,
  class: "mt-2"
};
const _hoisted_18 = { class: "mt-1 text-sm color-#909399" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Codegen"
  },
  __name: "index",
  setup(__props) {
    const treeData = ref([]);
    const previewScope = ref("all");
    const previewTypeOptions = ["ts", "vue", "java", "xml"];
    const previewTypes = ref([...previewTypeOptions]);
    const filteredTreeData = computed(() => {
      if (!treeData.value.length) return [];
      const match = (label, parentPath) => {
        const pathStr = parentPath.join("/");
        if (previewScope.value !== "all") {
          const isBackend = /(^|\/)src\/main\//.test(pathStr) || /(^|\/)java\//.test(pathStr);
          const scopeOfNode = isBackend ? "backend" : "frontend";
          if (scopeOfNode !== previewScope.value) return false;
        }
        const ext = label.split(".").pop() || "";
        return previewTypes.value.includes(ext);
      };
      const cloneFilter = (node, parents = []) => {
        if (!node.children || node.children.length === 0) {
          return match(node.label, parents) ? { ...node } : null;
        }
        const nextParents = [...parents, node.label];
        const children = (node.children || []).map((c) => cloneFilter(c, nextParents)).filter(Boolean);
        if (!children.length) return null;
        return { label: node.label, children };
      };
      const filtered = treeData.value.map((n) => cloneFilter(n)).filter(Boolean);
      return filtered;
    });
    const queryFormRef = ref();
    const queryParams = reactive({
      pageNum: 1,
      pageSize: 10
    });
    const loading = ref(false);
    const loadingText = ref("loading...");
    const pageData = ref([]);
    const total = ref(0);
    const formTypeOptions = FormTypeEnum;
    const queryTypeOptions = QueryTypeEnum;
    const dictOptions = ref();
    const menuOptions = ref([]);
    const genConfigFormData = ref({
      fieldConfigs: [],
      pageType: "classic"
    });
    const genConfigFormRules = {
      tableName: [{ required: true, message: "请输入表名", trigger: "blur" }],
      businessName: [{ required: true, message: "请输入业务名", trigger: "blur" }],
      packageName: [{ required: true, message: "请输入主包名", trigger: "blur" }],
      moduleName: [{ required: true, message: "请输入模块名", trigger: "blur" }],
      entityName: [{ required: true, message: "请输入实体名", trigger: "blur" }]
    };
    const dialog = reactive({
      visible: false,
      title: ""
    });
    watch(
      () => genConfigFormData.value.removeTablePrefix,
      (prefix) => {
        const table = genConfigFormData.value.tableName;
        if (!table) return;
        const p = prefix || "";
        const base = table.startsWith(p) ? table.slice(p.length) : table;
        const camel = base.split("_").filter(Boolean).map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join("");
        genConfigFormData.value.entityName = camel;
      }
    );
    const { copy, copied } = useClipboard();
    const code = ref();
    const cmRef = ref();
    const cmOptions = {
      mode: "text/javascript"
    };
    const prevBtnText = ref("");
    const nextBtnText = ref("下一步，字段配置");
    const active = ref(0);
    const currentTableName = ref("");
    const sortFlag = ref();
    const supportsFSAccess = typeof window.showDirectoryPicker === "function";
    const outputMode = ref("zip");
    const frontendDirHandle = ref(null);
    const backendDirHandle = ref(null);
    const frontendDirName = ref("");
    const backendDirName = ref("");
    const lastPreviewFiles = ref([]);
    const needFrontend = computed(
      () => lastPreviewFiles.value.some((f) => resolveRootForPath(f.path) === "frontend")
    );
    const needBackend = computed(
      () => lastPreviewFiles.value.some((f) => resolveRootForPath(f.path) === "backend")
    );
    const canWriteToLocal = computed(() => {
      if (!lastPreviewFiles.value.length) return false;
      const frontOk = needFrontend.value ? !!frontendDirHandle.value : true;
      const backOk = needBackend.value ? !!backendDirHandle.value : true;
      return frontOk && backOk;
    });
    const isCheckAllQuery = ref(false);
    const isCheckAllList = ref(false);
    const isCheckAllForm = ref(false);
    watch(active, (val) => {
      if (val === 0) {
        nextBtnText.value = "下一步，字段配置";
      } else if (val === 1) {
        prevBtnText.value = "上一步，基础配置";
        nextBtnText.value = "下一步，确认生成";
      } else if (val === 2) {
        prevBtnText.value = "上一步，字段配置";
        nextBtnText.value = "下载代码";
      }
    });
    watch(copied, () => {
      if (copied.value) {
        ElMessage.success("复制成功");
      }
    });
    watch(
      () => genConfigFormData.value.fieldConfigs,
      (newVal) => {
        newVal.forEach((fieldConfig) => {
          if (fieldConfig.fieldType && fieldConfig.fieldType.includes("Date") && fieldConfig.isShowInQuery === 1) {
            fieldConfig.queryType = QueryTypeEnum.BETWEEN.value;
          }
        });
      },
      { deep: true, immediate: true }
    );
    const initSort = () => {
      if (sortFlag.value) {
        return;
      }
      const table = document.querySelector(".elTableCustom .el-table__body-wrapper tbody");
      sortFlag.value = Sortable.create(table, {
        group: "shared",
        animation: 150,
        ghostClass: "sortable-ghost",
        //拖拽样式
        handle: ".sortable-handle",
        //拖拽区域
        easing: "cubic-bezier(1, 0, 0, 1)",
        // 结束拖动事件
        onEnd: (item) => {
          setNodeSort(item.oldIndex, item.newIndex);
        }
      });
    };
    const setNodeSort = (oldIndex2, newIndex2) => {
      const arr = Object.assign([], genConfigFormData.value.fieldConfigs);
      const currentRow = arr.splice(oldIndex2, 1)[0];
      arr.splice(newIndex2, 0, currentRow);
      arr.forEach((item, index2) => {
        item.fieldSort = index2 + 1;
      });
      genConfigFormData.value.fieldConfigs = [];
      nextTick(async () => {
        genConfigFormData.value.fieldConfigs = arr;
      });
    };
    function handlePrevClick() {
      if (active.value === 2) {
        genConfigFormData.value = {
          fieldConfigs: []
        };
        nextTick(() => {
          loading.value = true;
          GeneratorAPI.getGenConfig(currentTableName.value).then((data) => {
            genConfigFormData.value = data;
          }).finally(() => {
            loading.value = false;
          });
        });
        initSort();
      }
      if (active.value-- <= 0) active.value = 0;
    }
    function handleNextClick() {
      if (active.value === 0) {
        const { tableName, packageName, businessName, moduleName, entityName } = genConfigFormData.value;
        if (!tableName || !packageName || !businessName || !moduleName || !entityName) {
          ElMessage.error("表名、业务名、包名、模块名、实体名不能为空");
          return;
        }
        initSort();
      }
      if (active.value === 1) {
        const tableName = genConfigFormData.value.tableName;
        if (!tableName) {
          ElMessage.error("表名不能为空");
          return;
        }
        loading.value = true;
        loadingText.value = "代码生成中，请稍后...";
        GeneratorAPI.saveGenConfig(tableName, genConfigFormData.value).then(() => {
          handlePreview(tableName);
        }).then(() => {
          if (active.value++ >= 2) active.value = 2;
        }).finally(() => {
          loading.value = false;
          loadingText.value = "loading...";
        });
      } else {
        if (active.value++ >= 2) {
          active.value = 2;
        }
        if (active.value === 2) {
          const tableName = genConfigFormData.value.tableName;
          if (!tableName) {
            ElMessage.error("表名不能为空");
            return;
          }
          if (outputMode.value === "zip" || !supportsFSAccess) {
            GeneratorAPI.download(tableName, genConfigFormData.value.pageType || "classic");
          }
        }
      }
    }
    function handleQuery() {
      loading.value = true;
      GeneratorAPI.getTablePage(queryParams).then((data) => {
        pageData.value = data.list;
      }).finally(() => {
        loading.value = false;
      });
    }
    function handleResetQuery() {
      queryFormRef.value.resetFields();
      queryParams.pageNum = 1;
      handleQuery();
    }
    async function handleOpenDialog(tableName) {
      dialog.visible = true;
      active.value = 0;
      menuOptions.value = await MenuAPI.getOptions(true);
      currentTableName.value = tableName;
      DictAPI.getList().then((data) => {
        dictOptions.value = data;
        loading.value = true;
        GeneratorAPI.getGenConfig(tableName).then((data2) => {
          dialog.title = `${tableName} 代码生成`;
          genConfigFormData.value = data2;
          checkAllSelected("isShowInQuery", isCheckAllQuery);
          checkAllSelected("isShowInList", isCheckAllList);
          checkAllSelected("isShowInForm", isCheckAllForm);
          if (genConfigFormData.value.id) {
            active.value = 2;
            handlePreview(tableName);
          } else {
            active.value = 0;
          }
        }).finally(() => {
          loading.value = false;
        });
      });
    }
    function handleResetConfig(tableName) {
      ElMessageBox.confirm("确定要重置配置吗？", "提示", {
        type: "warning"
      }).then(() => {
        GeneratorAPI.resetGenConfig(tableName).then(() => {
          ElMessage.success("重置成功");
          handleQuery();
        });
      });
    }
    function bulkSet(key, value) {
      var _a;
      const list = ((_a = genConfigFormData.value) == null ? void 0 : _a.fieldConfigs) || [];
      list.forEach((row) => {
        row[key] = value;
      });
    }
    const checkAllSelected = (key, isCheckAllRef) => {
      var _a;
      const fieldConfigs = ((_a = genConfigFormData.value) == null ? void 0 : _a.fieldConfigs) || [];
      isCheckAllRef.value = fieldConfigs.every((row) => row[key] === 1);
    };
    function handlePreview(tableName) {
      treeData.value = [];
      GeneratorAPI.getPreviewData(tableName, genConfigFormData.value.pageType || "classic").then((data) => {
        dialog.title = `代码生成 ${tableName}`;
        const tree = buildTree(data);
        lastPreviewFiles.value = data || [];
        treeData.value = (tree == null ? void 0 : tree.children) ? [...tree.children] : [];
        const firstLeafNode = findFirstLeafNode(tree);
        if (firstLeafNode) {
          code.value = firstLeafNode.content || "";
        }
      }).catch(() => {
        active.value = 0;
      });
    }
    function buildTree(data) {
      const root = { label: "前后端代码", children: [] };
      data.forEach((item) => {
        var _a;
        const separator = item.path.includes("/") ? "/" : "\\";
        const parts = item.path.split(separator);
        const specialPaths = [
          "src" + separator + "main",
          "java",
          genConfigFormData.value.backendAppName,
          genConfigFormData.value.frontendAppName,
          (genConfigFormData.value.packageName + "." + genConfigFormData.value.moduleName).replace(
            /\./g,
            separator
          )
        ];
        const mergedParts = [];
        let buffer = [];
        parts.forEach((part) => {
          buffer.push(part);
          const currentPath = buffer.join(separator);
          if (specialPaths.includes(currentPath)) {
            mergedParts.push(currentPath);
            buffer = [];
          }
        });
        mergedParts.forEach((part, index2) => {
          mergedParts[index2] = part.replace(/\\/g, "/");
        });
        if (buffer.length > 0) {
          mergedParts.push(...buffer);
        }
        let currentNode = root;
        mergedParts.forEach((part) => {
          var _a2, _b;
          let node = (_a2 = currentNode.children) == null ? void 0 : _a2.find((child) => child.label === part);
          if (!node) {
            node = { label: part, children: [] };
            (_b = currentNode.children) == null ? void 0 : _b.push(node);
          }
          currentNode = node;
        });
        (_a = currentNode.children) == null ? void 0 : _a.push({
          label: item.fileName,
          content: item == null ? void 0 : item.content
        });
      });
      return root;
    }
    function findFirstLeafNode(node) {
      if (!node.children || node.children.length === 0) {
        return node;
      }
      for (const child of node.children) {
        const leafNode = findFirstLeafNode(child);
        if (leafNode) {
          return leafNode;
        }
      }
      return null;
    }
    function handleFileTreeNodeClick(data) {
      if (!data.children || data.children.length === 0) {
        code.value = data.content || "";
      }
    }
    function getFileTreeNodeIcon(label) {
      if (label.endsWith(".java")) {
        return "java";
      }
      if (label.endsWith(".html")) {
        return "html";
      }
      if (label.endsWith(".vue")) {
        return "vue";
      }
      if (label.endsWith(".ts")) {
        return "typescript";
      }
      if (label.endsWith(".xml")) {
        return "xml";
      }
      return "file";
    }
    const handleCopyCode = () => {
      if (code.value) {
        copy(code.value);
      }
    };
    const pickFrontendDir = async () => {
      var _a;
      try {
        frontendDirHandle.value = await window.showDirectoryPicker();
        frontendDirName.value = ((_a = frontendDirHandle.value) == null ? void 0 : _a.name) || "";
        ElMessage.success("前端目录选择成功");
      } catch {
      }
    };
    const pickBackendDir = async () => {
      var _a;
      try {
        backendDirHandle.value = await window.showDirectoryPicker();
        backendDirName.value = ((_a = backendDirHandle.value) == null ? void 0 : _a.name) || "";
        ElMessage.success("后端目录选择成功");
      } catch {
      }
    };
    async function ensureDir(root, path, force = true) {
      let current = root;
      for (const segment of path) {
        try {
          current = await current.getDirectoryHandle(segment, { create: true });
        } catch (err) {
          if (force && (err == null ? void 0 : err.name) === "TypeMismatchError") {
            try {
              await current.removeEntry(segment, { recursive: true });
              current = await current.getDirectoryHandle(segment, { create: true });
            } catch {
              throw err;
            }
          } else {
            throw err;
          }
        }
      }
      return current;
    }
    async function writeFile(dirHandle, filePath, content) {
      const normalized = filePath.replace(/\\/g, "/");
      const parts = normalized.split("/").filter(Boolean);
      const fileName = parts.pop();
      const folderSegments = parts;
      const targetDir = await ensureDir(dirHandle, folderSegments, true);
      let fileHandle;
      try {
        fileHandle = await targetDir.getFileHandle(fileName, { create: true });
      } catch (err) {
        if ((err == null ? void 0 : err.name) === "TypeMismatchError") {
          try {
            await targetDir.removeEntry(fileName, { recursive: true });
            fileHandle = await targetDir.getFileHandle(fileName, { create: true });
          } catch {
            throw err;
          }
        } else {
          throw err;
        }
      }
      const writable = await fileHandle.createWritable();
      await writable.write(content ?? "");
      await writable.close();
    }
    async function pathExists(dirHandle, filePath) {
      try {
        const normalized = filePath.replace(/\\/g, "/");
        const parts = normalized.split("/").filter(Boolean);
        const fileName = parts.pop();
        const targetDir = await ensureDir(dirHandle, parts, false);
        await targetDir.getFileHandle(fileName, { create: false });
        return true;
      } catch {
        return false;
      }
    }
    async function isSameFile(dirHandle, filePath, content) {
      try {
        const normalized = filePath.replace(/\\/g, "/");
        const parts = normalized.split("/").filter(Boolean);
        const fileName = parts.pop();
        const targetDir = await ensureDir(dirHandle, parts, false);
        const fileHandle = await targetDir.getFileHandle(fileName, { create: false });
        const file = await fileHandle.getFile();
        const text = await file.text();
        return text === (content ?? "");
      } catch {
        return false;
      }
    }
    function resolveRootForPath(p) {
      const normalized = p.replace(/\\/g, "/");
      const frontApp = genConfigFormData.value.frontendAppName;
      const backApp = genConfigFormData.value.backendAppName;
      if (backApp && normalized.startsWith(`${backApp}/`) || normalized.includes("/src/main/") || normalized.startsWith("src/main/") || normalized.startsWith("java/")) {
        return "backend";
      }
      if (frontApp && normalized.startsWith(`${frontApp}/`) || normalized.startsWith("src/")) {
        return "frontend";
      }
      return "frontend";
    }
    function stripProjectRoot(p) {
      const normalized = p.replace(/\\/g, "/");
      const frontApp = genConfigFormData.value.frontendAppName;
      const backApp = genConfigFormData.value.backendAppName;
      let rel = normalized;
      if (frontApp && normalized.startsWith(`${frontApp}/`)) {
        rel = normalized.slice(frontApp.length + 1);
      } else if (backApp && normalized.startsWith(`${backApp}/`)) {
        rel = normalized.slice(backApp.length + 1);
      } else {
        const idx = normalized.indexOf("/src/");
        if (idx > -1) {
          rel = normalized.slice(idx + 1);
        } else if (normalized.startsWith("src/")) {
          rel = normalized;
        }
      }
      return rel;
    }
    const writeGeneratedCode = async () => {
      if (!supportsFSAccess) {
        ElMessage.warning("当前浏览器不支持本地写入，请选择下载ZIP");
        return;
      }
      if (needFrontend.value && !frontendDirHandle.value || needBackend.value && !backendDirHandle.value) {
        ElMessage.warning("请先选择所需的前端/后端目录");
        return;
      }
      if (!lastPreviewFiles.value.length) {
        ElMessage.warning("请先生成预览");
        return;
      }
      loading.value = true;
      const loadingSvc = ElLoading.service({
        lock: true,
        text: "正在写入代码..."
      });
      writeRunning.value = true;
      let frontCount = 0;
      let backCount = 0;
      const failed = [];
      const files = lastPreviewFiles.value.filter((f) => {
        const root = resolveRootForPath(f.path);
        return writeScope.value === "all" || root === writeScope.value;
      });
      writeProgress.total = files.length;
      writeProgress.done = 0;
      writeProgress.percent = 0;
      writeProgress.current = "";
      const concurrency = 4;
      const queue = files.slice();
      const workers = [];
      async function worker() {
        while (queue.length) {
          const item = queue.shift();
          try {
            const root = resolveRootForPath(item.path);
            const relativePath = stripProjectRoot(`${item.path}/${item.fileName}`);
            writeProgress.current = relativePath;
            if (overwriteMode.value === "ifChanged") {
              const targetRoot = root === "frontend" ? frontendDirHandle.value : backendDirHandle.value;
              const existsSame = await isSameFile(targetRoot, relativePath, item.content || "");
              if (existsSame) {
                writeProgress.done++;
                writeProgress.percent = Math.round(writeProgress.done / writeProgress.total * 100);
                continue;
              }
            }
            if (overwriteMode.value === "skip") {
              const targetRoot = root === "frontend" ? frontendDirHandle.value : backendDirHandle.value;
              const exists = await pathExists(targetRoot, relativePath);
              if (exists) {
                writeProgress.done++;
                writeProgress.percent = Math.round(writeProgress.done / writeProgress.total * 100);
                continue;
              }
            }
            if (root === "frontend") {
              await writeFile(frontendDirHandle.value, relativePath, item.content || "");
              frontCount++;
            } else {
              await writeFile(backendDirHandle.value, relativePath, item.content || "");
              backCount++;
            }
          } catch (err) {
            console.error("写入失败:", item.path, err);
            failed.push(item.path);
          } finally {
            writeProgress.done++;
            writeProgress.percent = Math.round(writeProgress.done / writeProgress.total * 100);
          }
        }
      }
      for (let i = 0; i < concurrency; i++) {
        workers.push(worker());
      }
      await Promise.all(workers);
      loading.value = false;
      loadingSvc.close();
      writeRunning.value = false;
      if (failed.length) {
        ElMessage.warning(
          `部分文件写入失败：${failed.length} 个，成功 前端 ${frontCount} 个/后端 ${backCount} 个。打开控制台查看详情`
        );
      } else {
        ElMessage.success(`写入完成：前端 ${frontCount} 个文件，后端 ${backCount} 个文件`);
      }
    };
    const writeDialog = reactive({ visible: false });
    const frontendDirPath = ref("");
    const backendDirPath = ref("");
    const writeScope = ref("all");
    const overwriteMode = ref("overwrite");
    const writeProgress = reactive({ total: 0, done: 0, percent: 0, current: "" });
    const writeRunning = ref(false);
    function openWriteDialog() {
      writeDialog.visible = true;
    }
    watch(frontendDirName, (v) => frontendDirPath.value = v);
    watch(backendDirName, (v) => backendDirPath.value = v);
    async function confirmWrite() {
      await writeGeneratedCode();
      writeDialog.visible = false;
    }
    onMounted(() => {
      var _a;
      handleQuery();
      (_a = cmRef.value) == null ? void 0 : _a.destroy();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_Search = resolveComponent("Search");
      const _component_el_button = ElButton;
      const _component_Refresh = resolveComponent("Refresh");
      const _component_el_form = ElForm;
      const _component_el_table_column = ElTableColumn;
      const _component_MagicStick = resolveComponent("MagicStick");
      const _component_RefreshLeft = resolveComponent("RefreshLeft");
      const _component_el_table = ElTable;
      const _component_pagination = __unplugin_components_3;
      const _component_el_card = ElCard;
      const _component_el_step = ElStep;
      const _component_el_steps = ElSteps;
      const _component_el_col = ElCol;
      const _component_el_row = ElRow;
      const _component_el_radio_button = ElRadioButton;
      const _component_el_radio_group = ElRadioGroup;
      const _component_QuestionFilled = resolveComponent("QuestionFilled");
      const _component_el_icon = ElIcon;
      const _component_el_tooltip = ElTooltip;
      const _component_el_tree_select = ElTreeSelect;
      const _component_el_tag = ElTag;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      const _component_el_space = ElSpace;
      const _component_Rank = resolveComponent("Rank");
      const _component_el_checkbox = ElCheckbox;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_checkbox_button = ElCheckboxButton;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_el_tree = ElTree;
      const _component_el_scrollbar = ElScrollbar;
      const _component_CopyDocument = resolveComponent("CopyDocument");
      const _component_el_link = ElLink;
      const _component_Back = resolveComponent("Back");
      const _component_Right = resolveComponent("Right");
      const _component_Download = resolveComponent("Download");
      const _component_FolderOpened = resolveComponent("FolderOpened");
      const _component_el_drawer = ElDrawer;
      const _component_el_alert = ElAlert;
      const _component_el_progress = ElProgress;
      const _component_el_dialog = ElDialog;
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_form, {
            ref_key: "queryFormRef",
            ref: queryFormRef,
            model: unref(queryParams),
            inline: true
          }, {
            default: withCtx(() => [
              createVNode(_component_el_form_item, {
                prop: "keywords",
                label: "关键字"
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_input, {
                    modelValue: unref(queryParams).keywords,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(queryParams).keywords = $event),
                    placeholder: "表名",
                    clearable: "",
                    onKeyup: withKeys(handleQuery, ["enter"])
                  }, null, 8, ["modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_el_form_item, { class: "search-buttons" }, {
                default: withCtx(() => [
                  createVNode(_component_el_button, {
                    type: "primary",
                    onClick: handleQuery
                  }, {
                    icon: withCtx(() => [
                      createVNode(_component_Search)
                    ]),
                    default: withCtx(() => [
                      _cache[30] || (_cache[30] = createTextVNode(" 搜索 ", -1))
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_button, { onClick: handleResetQuery }, {
                    icon: withCtx(() => [
                      createVNode(_component_Refresh)
                    ]),
                    default: withCtx(() => [
                      _cache[31] || (_cache[31] = createTextVNode(" 重置 ", -1))
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["model"])
        ]),
        createVNode(_component_el_card, {
          shadow: "hover",
          class: "table-card"
        }, {
          default: withCtx(() => [
            withDirectives((openBlock(), createBlock(_component_el_table, {
              ref: "dataTableRef",
              data: unref(pageData),
              "highlight-current-row": "",
              border: "",
              class: "data-table__content"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_table_column, {
                  type: "selection",
                  width: "55",
                  align: "center"
                }),
                createVNode(_component_el_table_column, {
                  label: "表名",
                  prop: "tableName",
                  "min-width": "100"
                }),
                createVNode(_component_el_table_column, {
                  label: "描述",
                  prop: "tableComment",
                  width: "150"
                }),
                createVNode(_component_el_table_column, {
                  label: "存储引擎",
                  align: "center",
                  prop: "engine"
                }),
                createVNode(_component_el_table_column, {
                  label: "排序规则",
                  align: "center",
                  prop: "tableCollation"
                }),
                createVNode(_component_el_table_column, {
                  label: "创建时间",
                  align: "center",
                  prop: "createTime"
                }),
                createVNode(_component_el_table_column, {
                  fixed: "right",
                  label: "操作",
                  width: "200"
                }, {
                  default: withCtx((scope) => [
                    createVNode(_component_el_button, {
                      type: "primary",
                      size: "small",
                      link: "",
                      onClick: ($event) => handleOpenDialog(scope.row.tableName)
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_MagicStick)
                      ]),
                      default: withCtx(() => [
                        _cache[32] || (_cache[32] = createTextVNode(" 生成代码 ", -1))
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    scope.row.isConfigured === 1 ? (openBlock(), createBlock(_component_el_button, {
                      key: 0,
                      type: "danger",
                      size: "small",
                      link: "",
                      onClick: ($event) => handleResetConfig(scope.row.tableName)
                    }, {
                      icon: withCtx(() => [
                        createVNode(_component_RefreshLeft)
                      ]),
                      default: withCtx(() => [
                        _cache[33] || (_cache[33] = createTextVNode(" 重置配置 ", -1))
                      ]),
                      _: 1
                    }, 8, ["onClick"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["data"])), [
              [_directive_loading, unref(loading)]
            ]),
            unref(total) > 0 ? (openBlock(), createBlock(_component_pagination, {
              key: 0,
              total: unref(total),
              "onUpdate:total": _cache[1] || (_cache[1] = ($event) => isRef(total) ? total.value = $event : null),
              page: unref(queryParams).pageNum,
              "onUpdate:page": _cache[2] || (_cache[2] = ($event) => unref(queryParams).pageNum = $event),
              limit: unref(queryParams).pageSize,
              "onUpdate:limit": _cache[3] || (_cache[3] = ($event) => unref(queryParams).pageSize = $event),
              onPagination: handleQuery
            }, null, 8, ["total", "page", "limit"])) : createCommentVNode("", true)
          ]),
          _: 1
        }),
        createVNode(_component_el_drawer, {
          modelValue: unref(dialog).visible,
          "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => unref(dialog).visible = $event),
          title: unref(dialog).title,
          size: "80%",
          onClose: _cache[23] || (_cache[23] = ($event) => unref(dialog).visible = false)
        }, {
          footer: withCtx(() => [
            unref(active) !== 0 ? (openBlock(), createBlock(_component_el_button, {
              key: 0,
              type: "success",
              onClick: handlePrevClick
            }, {
              default: withCtx(() => [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_Back)
                  ]),
                  _: 1
                }),
                createTextVNode(" " + toDisplayString(unref(prevBtnText)), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_el_button, {
              type: "primary",
              onClick: handleNextClick
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(nextBtnText)) + " ", 1),
                unref(active) !== 2 ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(_component_Right)
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_component_el_icon, { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(_component_Download)
                  ]),
                  _: 1
                }))
              ]),
              _: 1
            }),
            unref(active) === 2 ? (openBlock(), createBlock(_component_el_button, {
              key: 1,
              disabled: !supportsFSAccess,
              type: "primary",
              plain: "",
              onClick: openWriteDialog
            }, {
              icon: withCtx(() => [
                createVNode(_component_el_icon, null, {
                  default: withCtx(() => [
                    createVNode(_component_FolderOpened)
                  ]),
                  _: 1
                })
              ]),
              default: withCtx(() => [
                _cache[54] || (_cache[54] = createTextVNode(" 写入本地 ", -1))
              ]),
              _: 1
            }, 8, ["disabled"])) : createCommentVNode("", true)
          ]),
          default: withCtx(() => [
            createVNode(_component_el_steps, {
              active: unref(active),
              "align-center": "",
              "finish-status": "success",
              simple: ""
            }, {
              default: withCtx(() => [
                createVNode(_component_el_step, { title: "基础配置" }),
                createVNode(_component_el_step, { title: "字段配置" }),
                createVNode(_component_el_step, { title: "预览生成" })
              ]),
              _: 1
            }, 8, ["active"]),
            createBaseVNode("div", _hoisted_3, [
              withDirectives(createVNode(_component_el_form, {
                model: unref(genConfigFormData),
                "label-width": 100,
                rules: genConfigFormRules
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "表名",
                            prop: "tableName"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(genConfigFormData).tableName,
                                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(genConfigFormData).tableName = $event),
                                readonly: ""
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "业务名",
                            prop: "businessName"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(genConfigFormData).businessName,
                                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(genConfigFormData).businessName = $event),
                                placeholder: "用户"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "主包名",
                            prop: "packageName"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(genConfigFormData).packageName,
                                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(genConfigFormData).packageName = $event),
                                placeholder: "com.youlai.boot"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "模块名",
                            prop: "moduleName"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(genConfigFormData).moduleName,
                                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(genConfigFormData).moduleName = $event),
                                placeholder: "system"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, {
                            label: "实体名",
                            prop: "entityName"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(genConfigFormData).entityName,
                                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(genConfigFormData).entityName = $event),
                                placeholder: "User"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, { label: "作者" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(genConfigFormData).author,
                                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(genConfigFormData).author = $event),
                                placeholder: "youlai"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, { label: "移除表前缀" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_input, {
                                modelValue: unref(genConfigFormData).removeTablePrefix,
                                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(genConfigFormData).removeTablePrefix = $event),
                                placeholder: "如: sys_"
                              }, null, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, { label: "页面类型" }, {
                            default: withCtx(() => [
                              createVNode(_component_el_radio_group, {
                                modelValue: unref(genConfigFormData).pageType,
                                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(genConfigFormData).pageType = $event)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_el_radio_button, { label: "classic" }, {
                                    default: withCtx(() => [..._cache[34] || (_cache[34] = [
                                      createTextVNode("普通", -1)
                                    ])]),
                                    _: 1
                                  }),
                                  createVNode(_component_el_radio_button, { label: "curd" }, {
                                    default: withCtx(() => [..._cache[35] || (_cache[35] = [
                                      createTextVNode("封装(CURD)", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }, 8, ["modelValue"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_row, null, {
                    default: withCtx(() => [
                      createVNode(_component_el_col, { span: 12 }, {
                        default: withCtx(() => [
                          createVNode(_component_el_form_item, null, {
                            label: withCtx(() => [
                              createBaseVNode("div", _hoisted_4, [
                                _cache[37] || (_cache[37] = createBaseVNode("span", null, "上级菜单", -1)),
                                createVNode(_component_el_tooltip, { effect: "dark" }, {
                                  content: withCtx(() => [..._cache[36] || (_cache[36] = [
                                    createTextVNode(" 选择上级菜单，生成代码后会自动创建对应菜单。 ", -1),
                                    createBaseVNode("br", null, null, -1),
                                    createTextVNode(" 注意1：生成菜单后需分配权限给角色，否则菜单将无法显示。 ", -1),
                                    createBaseVNode("br", null, null, -1),
                                    createTextVNode(" 注意2：演示环境默认不生成菜单，如需生成，请在本地部署数据库。 ", -1)
                                  ])]),
                                  default: withCtx(() => [
                                    createVNode(_component_el_icon, { class: "cursor-pointer" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_QuestionFilled)
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_el_tree_select, {
                                modelValue: unref(genConfigFormData).parentMenuId,
                                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(genConfigFormData).parentMenuId = $event),
                                placeholder: "选择上级菜单",
                                data: unref(menuOptions),
                                "check-strictly": "",
                                "render-after-expand": false,
                                filterable: "",
                                clearable: ""
                              }, null, 8, ["modelValue", "data"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 8, ["model"]), [
                [vShow, unref(active) == 0]
              ]),
              withDirectives(createBaseVNode("div", _hoisted_5, [
                createBaseVNode("div", _hoisted_6, [
                  createVNode(_component_el_tag, {
                    size: "small",
                    type: "info"
                  }, {
                    default: withCtx(() => [..._cache[38] || (_cache[38] = [
                      createTextVNode("批量设置", -1)
                    ])]),
                    _: 1
                  }),
                  createVNode(_component_el_space, { size: "small" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_dropdown, null, {
                        dropdown: withCtx(() => [
                          createVNode(_component_el_dropdown_menu, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_dropdown_item, {
                                onClick: _cache[13] || (_cache[13] = ($event) => bulkSet("isShowInQuery", 1))
                              }, {
                                default: withCtx(() => [..._cache[40] || (_cache[40] = [
                                  createTextVNode("全选", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(_component_el_dropdown_item, {
                                onClick: _cache[14] || (_cache[14] = ($event) => bulkSet("isShowInQuery", 0))
                              }, {
                                default: withCtx(() => [..._cache[41] || (_cache[41] = [
                                  createTextVNode("全不选", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            size: "small",
                            type: "primary",
                            plain: ""
                          }, {
                            default: withCtx(() => [..._cache[39] || (_cache[39] = [
                              createTextVNode("查询", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_dropdown, null, {
                        dropdown: withCtx(() => [
                          createVNode(_component_el_dropdown_menu, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_dropdown_item, {
                                onClick: _cache[15] || (_cache[15] = ($event) => bulkSet("isShowInList", 1))
                              }, {
                                default: withCtx(() => [..._cache[43] || (_cache[43] = [
                                  createTextVNode("全选", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(_component_el_dropdown_item, {
                                onClick: _cache[16] || (_cache[16] = ($event) => bulkSet("isShowInList", 0))
                              }, {
                                default: withCtx(() => [..._cache[44] || (_cache[44] = [
                                  createTextVNode("全不选", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            size: "small",
                            type: "success",
                            plain: ""
                          }, {
                            default: withCtx(() => [..._cache[42] || (_cache[42] = [
                              createTextVNode("列表", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_el_dropdown, null, {
                        dropdown: withCtx(() => [
                          createVNode(_component_el_dropdown_menu, null, {
                            default: withCtx(() => [
                              createVNode(_component_el_dropdown_item, {
                                onClick: _cache[17] || (_cache[17] = ($event) => bulkSet("isShowInForm", 1))
                              }, {
                                default: withCtx(() => [..._cache[46] || (_cache[46] = [
                                  createTextVNode("全选", -1)
                                ])]),
                                _: 1
                              }),
                              createVNode(_component_el_dropdown_item, {
                                onClick: _cache[18] || (_cache[18] = ($event) => bulkSet("isShowInForm", 0))
                              }, {
                                default: withCtx(() => [..._cache[47] || (_cache[47] = [
                                  createTextVNode("全不选", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_el_button, {
                            size: "small",
                            type: "warning",
                            plain: ""
                          }, {
                            default: withCtx(() => [..._cache[45] || (_cache[45] = [
                              createTextVNode("表单", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                withDirectives((openBlock(), createBlock(_component_el_table, {
                  "row-key": "id",
                  "element-loading-text": unref(loadingText),
                  "highlight--currentrow": "",
                  data: unref(genConfigFormData).fieldConfigs
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_table_column, {
                      width: "55",
                      align: "center"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_el_icon, { class: "cursor-move sortable-handle" }, {
                          default: withCtx(() => [
                            createVNode(_component_Rank)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "列名",
                      width: "110"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(scope.row.columnName), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "列类型",
                      width: "80"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(scope.row.columnType), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "字段名",
                      width: "120"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_input, {
                          modelValue: scope.row.fieldName,
                          "onUpdate:modelValue": ($event) => scope.row.fieldName = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "字段类型",
                      width: "80"
                    }, {
                      default: withCtx((scope) => [
                        createTextVNode(toDisplayString(scope.row.fieldType), 1)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "字段注释",
                      "min-width": "100"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_input, {
                          modelValue: scope.row.fieldComment,
                          "onUpdate:modelValue": ($event) => scope.row.fieldComment = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "最大长度",
                      width: "80"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_input, {
                          modelValue: scope.row.maxLength,
                          "onUpdate:modelValue": ($event) => scope.row.maxLength = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      width: "70",
                      label: "查询"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_checkbox, {
                          modelValue: scope.row.isShowInQuery,
                          "onUpdate:modelValue": ($event) => scope.row.isShowInQuery = $event,
                          "true-value": 1,
                          "false-value": 0
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      width: "70",
                      label: "列表"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_checkbox, {
                          modelValue: scope.row.isShowInList,
                          "onUpdate:modelValue": ($event) => scope.row.isShowInList = $event,
                          "true-value": 1,
                          "false-value": 0
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      width: "70",
                      label: "表单"
                    }, {
                      default: withCtx((scope) => [
                        createVNode(_component_el_checkbox, {
                          modelValue: scope.row.isShowInForm,
                          "onUpdate:modelValue": ($event) => scope.row.isShowInForm = $event,
                          "true-value": 1,
                          "false-value": 0
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "必填",
                      width: "70"
                    }, {
                      default: withCtx((scope) => [
                        scope.row.isShowInForm == 1 ? (openBlock(), createBlock(_component_el_checkbox, {
                          key: 0,
                          modelValue: scope.row.isRequired,
                          "onUpdate:modelValue": ($event) => scope.row.isRequired = $event,
                          "true-value": 1,
                          "false-value": 0
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createElementBlock("span", _hoisted_7, "-"))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "查询方式",
                      "min-width": "120"
                    }, {
                      default: withCtx((scope) => [
                        scope.row.isShowInQuery === 1 ? (openBlock(), createBlock(_component_el_select, {
                          key: 0,
                          modelValue: scope.row.queryType,
                          "onUpdate:modelValue": ($event) => scope.row.queryType = $event,
                          placeholder: "请选择"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(queryTypeOptions), (item, key) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key,
                                label: item.label,
                                value: item.value
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createElementBlock("span", _hoisted_8, "-"))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "表单类型",
                      "min-width": "120"
                    }, {
                      default: withCtx((scope) => [
                        scope.row.isShowInQuery === 1 || scope.row.isShowInForm === 1 ? (openBlock(), createBlock(_component_el_select, {
                          key: 0,
                          modelValue: scope.row.formType,
                          "onUpdate:modelValue": ($event) => scope.row.formType = $event,
                          placeholder: "请选择"
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formTypeOptions), (item, key) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key,
                                label: item.label,
                                value: item.value
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createElementBlock("span", _hoisted_9, "-"))
                      ]),
                      _: 1
                    }),
                    createVNode(_component_el_table_column, {
                      label: "字典类型",
                      "min-width": "100"
                    }, {
                      default: withCtx((scope) => [
                        scope.row.formType === unref(FormTypeEnum).SELECT.value ? (openBlock(), createBlock(_component_el_select, {
                          key: 0,
                          modelValue: scope.row.dictType,
                          "onUpdate:modelValue": ($event) => scope.row.dictType = $event,
                          placeholder: "请选择",
                          clearable: ""
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(dictOptions), (item) => {
                              return openBlock(), createBlock(_component_el_option, {
                                key: item.value,
                                label: item.label,
                                value: item.value
                              }, null, 8, ["label", "value"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])) : (openBlock(), createElementBlock("span", _hoisted_10, "-"))
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["element-loading-text", "data"])), [
                  [_directive_loading, unref(loading)]
                ])
              ], 512), [
                [vShow, unref(active) == 1]
              ]),
              withDirectives(createVNode(_component_el_row, null, {
                default: withCtx(() => [
                  createVNode(_component_el_col, {
                    span: 24,
                    class: "mb-2"
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_11, [
                        _cache[51] || (_cache[51] = createBaseVNode("span", { class: "text-sm color-#909399" }, "预览范围", -1)),
                        createVNode(_component_el_radio_group, {
                          modelValue: unref(previewScope),
                          "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => isRef(previewScope) ? previewScope.value = $event : null),
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_el_radio_button, { label: "all" }, {
                              default: withCtx(() => [..._cache[48] || (_cache[48] = [
                                createTextVNode("全部", -1)
                              ])]),
                              _: 1
                            }),
                            createVNode(_component_el_radio_button, { label: "frontend" }, {
                              default: withCtx(() => [..._cache[49] || (_cache[49] = [
                                createTextVNode("前端", -1)
                              ])]),
                              _: 1
                            }),
                            createVNode(_component_el_radio_button, { label: "backend" }, {
                              default: withCtx(() => [..._cache[50] || (_cache[50] = [
                                createTextVNode("后端", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue"]),
                        _cache[52] || (_cache[52] = createBaseVNode("span", { class: "ml-3 text-sm color-#909399" }, "类型", -1)),
                        createVNode(_component_el_checkbox_group, {
                          modelValue: unref(previewTypes),
                          "onUpdate:modelValue": _cache[20] || (_cache[20] = ($event) => isRef(previewTypes) ? previewTypes.value = $event : null),
                          size: "small"
                        }, {
                          default: withCtx(() => [
                            (openBlock(), createElementBlock(Fragment, null, renderList(previewTypeOptions, (t) => {
                              return createVNode(_component_el_checkbox_button, {
                                key: t,
                                label: t
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(t), 1)
                                ]),
                                _: 2
                              }, 1032, ["label"]);
                            }), 64))
                          ]),
                          _: 1
                        }, 8, ["modelValue"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, { span: 6 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_scrollbar, { "max-height": "72vh" }, {
                        default: withCtx(() => [
                          createVNode(_component_el_tree, {
                            data: unref(filteredTreeData),
                            "default-expand-all": "",
                            "highlight-current": "",
                            onNodeClick: handleFileTreeNodeClick
                          }, {
                            default: withCtx(({ data }) => [
                              createBaseVNode("div", {
                                class: normalizeClass(`i-svg:${getFileTreeNodeIcon(data.label)}`)
                              }, null, 2),
                              createBaseVNode("span", _hoisted_12, toDisplayString(data.label), 1)
                            ]),
                            _: 1
                          }, 8, ["data"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_col, { span: 18 }, {
                    default: withCtx(() => [
                      createVNode(_component_el_scrollbar, { "max-height": "72vh" }, {
                        default: withCtx(() => [
                          createBaseVNode("div", _hoisted_13, [
                            createVNode(_component_el_link, {
                              type: "primary",
                              onClick: handleCopyCode
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_el_icon, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_CopyDocument)
                                  ]),
                                  _: 1
                                }),
                                _cache[53] || (_cache[53] = createTextVNode(" 一键复制 ", -1))
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode(unref(R), {
                            ref_key: "cmRef",
                            ref: cmRef,
                            value: unref(code),
                            "onUpdate:value": _cache[21] || (_cache[21] = ($event) => isRef(code) ? code.value = $event : null),
                            options: cmOptions,
                            border: "",
                            readonly: true,
                            height: "100%",
                            width: "100%"
                          }, null, 8, ["value"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }, 512), [
                [vShow, unref(active) == 2]
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "title"]),
        createVNode(_component_el_dialog, {
          modelValue: unref(writeDialog).visible,
          "onUpdate:modelValue": _cache[29] || (_cache[29] = ($event) => unref(writeDialog).visible = $event),
          title: "写入本地",
          width: "820px"
        }, {
          footer: withCtx(() => [
            createVNode(_component_el_button, {
              onClick: _cache[28] || (_cache[28] = ($event) => unref(writeDialog).visible = false)
            }, {
              default: withCtx(() => [..._cache[63] || (_cache[63] = [
                createTextVNode("取 消", -1)
              ])]),
              _: 1
            }),
            createVNode(_component_el_button, {
              type: "primary",
              disabled: !unref(canWriteToLocal) || unref(writeRunning),
              onClick: confirmWrite
            }, {
              default: withCtx(() => [..._cache[64] || (_cache[64] = [
                createTextVNode(" 写 入 ", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_14, [
              !supportsFSAccess ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: "当前浏览器不支持 File System Access API，建议使用 Chrome/Edge 最新版",
                type: "warning",
                "show-icon": "",
                closable: false
              })) : createCommentVNode("", true),
              createVNode(_component_el_form, { "label-width": 110 }, {
                default: withCtx(() => [
                  createVNode(_component_el_form_item, { label: "前端根目录" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_15, [
                        createVNode(_component_el_input, {
                          modelValue: unref(frontendDirPath),
                          "onUpdate:modelValue": _cache[24] || (_cache[24] = ($event) => isRef(frontendDirPath) ? frontendDirPath.value = $event : null),
                          placeholder: "请选择前端根目录",
                          readonly: ""
                        }, null, 8, ["modelValue"]),
                        createVNode(_component_el_button, {
                          disabled: !supportsFSAccess,
                          onClick: pickFrontendDir
                        }, {
                          default: withCtx(() => [..._cache[55] || (_cache[55] = [
                            createTextVNode("选择", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "后端根目录" }, {
                    default: withCtx(() => [
                      createBaseVNode("div", _hoisted_16, [
                        createVNode(_component_el_input, {
                          modelValue: unref(backendDirPath),
                          "onUpdate:modelValue": _cache[25] || (_cache[25] = ($event) => isRef(backendDirPath) ? backendDirPath.value = $event : null),
                          placeholder: "请选择后端根目录",
                          readonly: ""
                        }, null, 8, ["modelValue"]),
                        createVNode(_component_el_button, {
                          disabled: !supportsFSAccess,
                          onClick: pickBackendDir
                        }, {
                          default: withCtx(() => [..._cache[56] || (_cache[56] = [
                            createTextVNode("选择", -1)
                          ])]),
                          _: 1
                        }, 8, ["disabled"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "写入范围" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(writeScope),
                        "onUpdate:modelValue": _cache[26] || (_cache[26] = ($event) => isRef(writeScope) ? writeScope.value = $event : null)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_button, { label: "all" }, {
                            default: withCtx(() => [..._cache[57] || (_cache[57] = [
                              createTextVNode("全部", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(_component_el_radio_button, { label: "frontend" }, {
                            default: withCtx(() => [..._cache[58] || (_cache[58] = [
                              createTextVNode("仅前端", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(_component_el_radio_button, { label: "backend" }, {
                            default: withCtx(() => [..._cache[59] || (_cache[59] = [
                              createTextVNode("仅后端", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_form_item, { label: "覆盖策略" }, {
                    default: withCtx(() => [
                      createVNode(_component_el_radio_group, {
                        modelValue: unref(overwriteMode),
                        "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => isRef(overwriteMode) ? overwriteMode.value = $event : null)
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_el_radio_button, { label: "overwrite" }, {
                            default: withCtx(() => [..._cache[60] || (_cache[60] = [
                              createTextVNode("覆盖", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(_component_el_radio_button, { label: "skip" }, {
                            default: withCtx(() => [..._cache[61] || (_cache[61] = [
                              createTextVNode("跳过已存在", -1)
                            ])]),
                            _: 1
                          }),
                          createVNode(_component_el_radio_button, { label: "ifChanged" }, {
                            default: withCtx(() => [..._cache[62] || (_cache[62] = [
                              createTextVNode("仅变更覆盖", -1)
                            ])]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              unref(writeProgress).total > 0 ? (openBlock(), createElementBlock("div", _hoisted_17, [
                createVNode(_component_el_progress, {
                  "text-inside": true,
                  "stroke-width": 16,
                  percentage: unref(writeProgress).percent
                }, null, 8, ["percentage"]),
                createBaseVNode("div", _hoisted_18, toDisplayString(unref(writeProgress).done) + "/" + toDisplayString(unref(writeProgress).total) + " " + toDisplayString(unref(writeProgress).current), 1)
              ])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
export {
  _sfc_main as default
};
