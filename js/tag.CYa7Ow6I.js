import { ad as isArray, bx as isVNode, Q as Fragment, O as hasOwn, cv as camelize, bC as Comment, t as buildProps, bn as componentSizes, _ as _export_sfc, d as defineComponent, x as useLocale, b as useNamespace, c as computed, g as createElementBlock, e as createBlock, f as openBlock, C as createBaseVNode, h as createCommentVNode, l as renderSlot, n as normalizeClass, i as unref, j as withModifiers, m as createVNode, w as withCtx, a2 as close_default, E as ElIcon, k as normalizeStyle, T as Transition, q as withInstall, bf as isElement, H as isClient, bO as NOOP, ab as h, z as definePropType, v as iconPropType, r as ref, o as onMounted, P as watchEffect, aa as onBeforeUnmount, J as addUnit, A as inject, F as toDisplayString, D as resolveDynamicComponent, cw as CloseComponents, br as isBoolean, B as getCurrentInstance, b4 as useZIndex, bM as useGlobalConfig, cx as defaultNamespace, ae as isObject, bB as isFunction, I as watch, ac as useTimeoutFn, U as nextTick, bo as useSlots, Z as mergeProps, $ as withDirectives, be as createSlots, a1 as vShow, y as provide } from "./index.Dp4m6nBq.js";
import { b as useFormSize, d as useId, e as useDeprecated } from "./button.7O-VbLYM.js";
import { F as FOCUS_TRAP_INJECTION_KEY, q as teleportProps, c as ElFocusTrap, e as ElTeleport } from "./popper.DXIFQgs8.js";
import { c as composeRefs, u as useLockscreen } from "./scrollbar.u3Wr4GmE.js";
import { U as UPDATE_MODEL_EVENT } from "./input.BUoL4AzR.js";
var PatchFlags = /* @__PURE__ */ ((PatchFlags2) => {
  PatchFlags2[PatchFlags2["TEXT"] = 1] = "TEXT";
  PatchFlags2[PatchFlags2["CLASS"] = 2] = "CLASS";
  PatchFlags2[PatchFlags2["STYLE"] = 4] = "STYLE";
  PatchFlags2[PatchFlags2["PROPS"] = 8] = "PROPS";
  PatchFlags2[PatchFlags2["FULL_PROPS"] = 16] = "FULL_PROPS";
  PatchFlags2[PatchFlags2["HYDRATE_EVENTS"] = 32] = "HYDRATE_EVENTS";
  PatchFlags2[PatchFlags2["STABLE_FRAGMENT"] = 64] = "STABLE_FRAGMENT";
  PatchFlags2[PatchFlags2["KEYED_FRAGMENT"] = 128] = "KEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["UNKEYED_FRAGMENT"] = 256] = "UNKEYED_FRAGMENT";
  PatchFlags2[PatchFlags2["NEED_PATCH"] = 512] = "NEED_PATCH";
  PatchFlags2[PatchFlags2["DYNAMIC_SLOTS"] = 1024] = "DYNAMIC_SLOTS";
  PatchFlags2[PatchFlags2["HOISTED"] = -1] = "HOISTED";
  PatchFlags2[PatchFlags2["BAIL"] = -2] = "BAIL";
  return PatchFlags2;
})(PatchFlags || {});
function isFragment(node) {
  return isVNode(node) && node.type === Fragment;
}
function isComment(node) {
  return isVNode(node) && node.type === Comment;
}
function isValidElementNode(node) {
  return isVNode(node) && !isFragment(node) && !isComment(node);
}
const getNormalizedProps = (node) => {
  if (!isVNode(node)) {
    return {};
  }
  const raw = node.props || {};
  const type = (isVNode(node.type) ? node.type.props : void 0) || {};
  const props = {};
  Object.keys(type).forEach((key) => {
    if (hasOwn(type[key], "default")) {
      props[key] = type[key].default;
    }
  });
  Object.keys(raw).forEach((key) => {
    props[camelize(key)] = raw[key];
  });
  return props;
};
const flattedChildren = (children) => {
  const vNodes = isArray(children) ? children : [children];
  const result = [];
  vNodes.forEach((child) => {
    var _a;
    if (isArray(child)) {
      result.push(...flattedChildren(child));
    } else if (isVNode(child) && ((_a = child.component) == null ? void 0 : _a.subTree)) {
      result.push(child, ...flattedChildren(child.component.subTree));
    } else if (isVNode(child) && isArray(child.children)) {
      result.push(...flattedChildren(child.children));
    } else if (isVNode(child) && child.shapeFlag === 2) {
      result.push(...flattedChildren(child.type()));
    } else {
      result.push(child);
    }
  });
  return result;
};
const tagProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger"],
    default: "primary"
  },
  closable: Boolean,
  disableTransitions: Boolean,
  hit: Boolean,
  color: String,
  size: {
    type: String,
    values: componentSizes
  },
  effect: {
    type: String,
    values: ["dark", "light", "plain"],
    default: "light"
  },
  round: Boolean
});
const tagEmits = {
  close: (evt) => evt instanceof MouseEvent,
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1$2 = ["aria-label"];
const _hoisted_2$1 = ["aria-label"];
const _sfc_main$2 = defineComponent({
  ...{
    name: "ElTag"
  },
  __name: "tag",
  props: tagProps,
  emits: tagEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const tagSize = useFormSize();
    const { t } = useLocale();
    const ns = useNamespace("tag");
    const containerKls = computed(() => {
      const { type, hit, effect, closable, round } = props;
      return [
        ns.b(),
        ns.is("closable", closable),
        ns.m(type || "primary"),
        ns.m(tagSize.value),
        ns.m(effect),
        ns.is("hit", hit),
        ns.is("round", round)
      ];
    });
    const handleClose = (event) => {
      emit("close", event);
    };
    const handleClick = (event) => {
      emit("click", event);
    };
    const handleVNodeMounted = (vnode) => {
      var _a, _b, _c;
      if ((_c = (_b = (_a = vnode == null ? void 0 : vnode.component) == null ? void 0 : _a.subTree) == null ? void 0 : _b.component) == null ? void 0 : _c.bum) {
        vnode.component.subTree.component.bum = null;
      }
    };
    return (_ctx, _cache) => {
      return _ctx.disableTransitions ? (openBlock(), createElementBlock(
        "span",
        {
          key: 0,
          class: normalizeClass(containerKls.value),
          style: normalizeStyle({ backgroundColor: _ctx.color }),
          onClick: handleClick
        },
        [
          createBaseVNode(
            "span",
            {
              class: normalizeClass(unref(ns).e("content"))
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            2
          ),
          _ctx.closable ? (openBlock(), createElementBlock("button", {
            key: 0,
            "aria-label": unref(t)("el.tag.close"),
            class: normalizeClass(unref(ns).e("close")),
            type: "button",
            onClick: withModifiers(handleClose, ["stop"])
          }, [
            createVNode(unref(ElIcon), null, {
              default: withCtx(() => [
                createVNode(unref(close_default))
              ]),
              _: 1
            })
          ], 10, _hoisted_1$2)) : createCommentVNode("v-if", true)
        ],
        6
      )) : (openBlock(), createBlock(Transition, {
        key: 1,
        name: `${unref(ns).namespace.value}-zoom-in-center`,
        appear: "",
        onVnodeMounted: handleVNodeMounted
      }, {
        default: withCtx(() => [
          createBaseVNode(
            "span",
            {
              class: normalizeClass(containerKls.value),
              style: normalizeStyle({ backgroundColor: _ctx.color }),
              onClick: handleClick
            },
            [
              createBaseVNode(
                "span",
                {
                  class: normalizeClass(unref(ns).e("content"))
                },
                [
                  renderSlot(_ctx.$slots, "default")
                ],
                2
              ),
              _ctx.closable ? (openBlock(), createElementBlock("button", {
                key: 0,
                "aria-label": unref(t)("el.tag.close"),
                class: normalizeClass(unref(ns).e("close")),
                type: "button",
                onClick: withModifiers(handleClose, ["stop"])
              }, [
                createVNode(unref(ElIcon), null, {
                  default: withCtx(() => [
                    createVNode(unref(close_default))
                  ]),
                  _: 1
                })
              ], 10, _hoisted_2$1)) : createCommentVNode("v-if", true)
            ],
            6
          )
        ]),
        _: 3
      }, 8, ["name"]));
    };
  }
});
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/tag/src/tag.vue"]]);
const ElTag = withInstall(Tag);
const nodeList = /* @__PURE__ */ new Map();
if (isClient) {
  let startClick;
  document.addEventListener("mousedown", (e) => startClick = e);
  document.addEventListener("mouseup", (e) => {
    if (startClick) {
      for (const handlers of nodeList.values()) {
        for (const { documentHandler } of handlers) {
          documentHandler(e, startClick);
        }
      }
      startClick = void 0;
    }
  });
}
function createDocumentHandler(el, binding) {
  let excludes = [];
  if (isArray(binding.arg)) {
    excludes = binding.arg;
  } else if (isElement(binding.arg)) {
    excludes.push(binding.arg);
  }
  return function(mouseup, mousedown) {
    const popperRef = binding.instance.popperRef;
    const mouseUpTarget = mouseup.target;
    const mouseDownTarget = mousedown == null ? void 0 : mousedown.target;
    const isBound = !binding || !binding.instance;
    const isTargetExists = !mouseUpTarget || !mouseDownTarget;
    const isContainedByEl = el.contains(mouseUpTarget) || el.contains(mouseDownTarget);
    const isSelf = el === mouseUpTarget;
    const isTargetExcluded = excludes.length && excludes.some((item) => item == null ? void 0 : item.contains(mouseUpTarget)) || excludes.length && excludes.includes(mouseDownTarget);
    const isContainedByPopper = popperRef && (popperRef.contains(mouseUpTarget) || popperRef.contains(mouseDownTarget));
    if (isBound || isTargetExists || isContainedByEl || isSelf || isTargetExcluded || isContainedByPopper) {
      return;
    }
    binding.value(mouseup, mousedown);
  };
}
const ClickOutside = {
  beforeMount(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    nodeList.get(el).push({
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    });
  },
  updated(el, binding) {
    if (!nodeList.has(el)) {
      nodeList.set(el, []);
    }
    const handlers = nodeList.get(el);
    const oldHandlerIndex = handlers.findIndex(
      (item) => item.bindingFn === binding.oldValue
    );
    const newHandler = {
      documentHandler: createDocumentHandler(el, binding),
      bindingFn: binding.value
    };
    if (oldHandlerIndex >= 0) {
      handlers.splice(oldHandlerIndex, 1, newHandler);
    } else {
      handlers.push(newHandler);
    }
  },
  unmounted(el) {
    nodeList.delete(el);
  }
};
const useSameTarget = (handleClick) => {
  if (!handleClick) {
    return { onClick: NOOP, onMousedown: NOOP, onMouseup: NOOP };
  }
  let mousedownTarget = false;
  let mouseupTarget = false;
  const onClick = (e) => {
    if (mousedownTarget && mouseupTarget) {
      handleClick(e);
    }
    mousedownTarget = mouseupTarget = false;
  };
  const onMousedown = (e) => {
    mousedownTarget = e.target === e.currentTarget;
  };
  const onMouseup = (e) => {
    mouseupTarget = e.target === e.currentTarget;
  };
  return { onClick, onMousedown, onMouseup };
};
const overlayProps = buildProps({
  mask: {
    type: Boolean,
    default: true
  },
  customMaskEvent: Boolean,
  overlayClass: {
    type: definePropType([
      String,
      Array,
      Object
    ])
  },
  zIndex: {
    type: definePropType([String, Number])
  }
});
const overlayEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const BLOCK = "overlay";
var Overlay = defineComponent({
  name: "ElOverlay",
  props: overlayProps,
  emits: overlayEmits,
  setup(props, { slots, emit }) {
    const ns = useNamespace(BLOCK);
    const onMaskClick = (e) => {
      emit("click", e);
    };
    const { onClick, onMousedown, onMouseup } = useSameTarget(
      props.customMaskEvent ? void 0 : onMaskClick
    );
    return () => {
      return props.mask ? createVNode(
        "div",
        {
          class: [ns.b(), props.overlayClass],
          style: {
            zIndex: props.zIndex
          },
          onClick,
          onMousedown,
          onMouseup
        },
        [renderSlot(slots, "default")],
        PatchFlags.STYLE | PatchFlags.CLASS | PatchFlags.PROPS,
        ["onClick", "onMouseup", "onMousedown"]
      ) : h(
        "div",
        {
          class: props.overlayClass,
          style: {
            zIndex: props.zIndex,
            position: "fixed",
            top: "0px",
            right: "0px",
            bottom: "0px",
            left: "0px"
          }
        },
        [renderSlot(slots, "default")]
      );
    };
  }
});
const ElOverlay = Overlay;
const dialogInjectionKey = Symbol("dialogInjectionKey");
const DEFAULT_DIALOG_TRANSITION = "dialog-fade";
const dialogContentProps = buildProps({
  center: Boolean,
  alignCenter: {
    type: Boolean,
    default: void 0
  },
  closeIcon: {
    type: iconPropType
  },
  draggable: {
    type: Boolean,
    default: void 0
  },
  overflow: {
    type: Boolean,
    default: void 0
  },
  fullscreen: Boolean,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  showClose: {
    type: Boolean,
    default: true
  },
  title: {
    type: String,
    default: ""
  },
  ariaLevel: {
    type: String,
    default: "2"
  }
});
const dialogContentEmits = {
  close: () => true
};
const useDraggable = (targetRef, dragRef, draggable, overflow) => {
  const transform = {
    offsetX: 0,
    offsetY: 0
  };
  const isDragging = ref(false);
  const adjustPosition = (moveX, moveY) => {
    if (targetRef.value) {
      const { offsetX, offsetY } = transform;
      const targetRect = targetRef.value.getBoundingClientRect();
      const targetLeft = targetRect.left;
      const targetTop = targetRect.top;
      const targetWidth = targetRect.width;
      const targetHeight = targetRect.height;
      const clientWidth = document.documentElement.clientWidth;
      const clientHeight = document.documentElement.clientHeight;
      const minLeft = -targetLeft + offsetX;
      const minTop = -targetTop + offsetY;
      const maxLeft = clientWidth - targetLeft - targetWidth + offsetX;
      const maxTop = clientHeight - targetTop - (targetHeight < clientHeight ? targetHeight : 0) + offsetY;
      if (!(overflow == null ? void 0 : overflow.value)) {
        moveX = Math.min(Math.max(moveX, minLeft), maxLeft);
        moveY = Math.min(Math.max(moveY, minTop), maxTop);
      }
      transform.offsetX = moveX;
      transform.offsetY = moveY;
      targetRef.value.style.transform = `translate(${addUnit(moveX)}, ${addUnit(
        moveY
      )})`;
    }
  };
  const onMousedown = (e) => {
    const downX = e.clientX;
    const downY = e.clientY;
    const { offsetX, offsetY } = transform;
    const onMousemove = (e2) => {
      if (!isDragging.value) {
        isDragging.value = true;
      }
      const moveX = offsetX + e2.clientX - downX;
      const moveY = offsetY + e2.clientY - downY;
      adjustPosition(moveX, moveY);
    };
    const onMouseup = () => {
      isDragging.value = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("mouseup", onMouseup);
    };
    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  };
  const onDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.addEventListener("mousedown", onMousedown);
      window.addEventListener("resize", updatePosition);
    }
  };
  const offDraggable = () => {
    if (dragRef.value && targetRef.value) {
      dragRef.value.removeEventListener("mousedown", onMousedown);
      window.removeEventListener("resize", updatePosition);
    }
  };
  const resetPosition = () => {
    transform.offsetX = 0;
    transform.offsetY = 0;
    if (targetRef.value) {
      targetRef.value.style.transform = "";
    }
  };
  const updatePosition = () => {
    const { offsetX, offsetY } = transform;
    adjustPosition(offsetX, offsetY);
  };
  onMounted(() => {
    watchEffect(() => {
      if (draggable.value) {
        onDraggable();
      } else {
        offDraggable();
      }
    });
  });
  onBeforeUnmount(() => {
    offDraggable();
  });
  return {
    isDragging,
    resetPosition,
    updatePosition
  };
};
const _hoisted_1$1 = ["aria-level"];
const _hoisted_2 = ["aria-label"];
const _hoisted_3 = ["id"];
const _sfc_main$1 = defineComponent({
  ...{ name: "ElDialogContent" },
  __name: "dialog-content",
  props: dialogContentProps,
  emits: dialogContentEmits,
  setup(__props, { expose: __expose }) {
    const { t } = useLocale();
    const { Close } = CloseComponents;
    const props = __props;
    const { dialogRef, headerRef, bodyId, ns, style } = inject(dialogInjectionKey);
    const { focusTrapRef } = inject(FOCUS_TRAP_INJECTION_KEY);
    const composedDialogRef = composeRefs(focusTrapRef, dialogRef);
    const draggable = computed(() => !!props.draggable);
    const overflow = computed(() => !!props.overflow);
    const { resetPosition, updatePosition, isDragging } = useDraggable(
      dialogRef,
      headerRef,
      draggable,
      overflow
    );
    const dialogKls = computed(() => [
      ns.b(),
      ns.is("fullscreen", props.fullscreen),
      ns.is("draggable", draggable.value),
      ns.is("dragging", isDragging.value),
      ns.is("align-center", !!props.alignCenter),
      { [ns.m("center")]: props.center }
    ]);
    __expose({
      resetPosition,
      updatePosition
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          ref: unref(composedDialogRef),
          class: normalizeClass(dialogKls.value),
          style: normalizeStyle(unref(style)),
          tabindex: "-1"
        },
        [
          createBaseVNode(
            "header",
            {
              ref_key: "headerRef",
              ref: headerRef,
              class: normalizeClass([unref(ns).e("header"), _ctx.headerClass, { "show-close": _ctx.showClose }])
            },
            [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createBaseVNode("span", {
                  role: "heading",
                  "aria-level": _ctx.ariaLevel,
                  class: normalizeClass(unref(ns).e("title"))
                }, toDisplayString(_ctx.title), 11, _hoisted_1$1)
              ]),
              _ctx.showClose ? (openBlock(), createElementBlock("button", {
                key: 0,
                "aria-label": unref(t)("el.dialog.close"),
                class: normalizeClass(unref(ns).e("headerbtn")),
                type: "button",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
              }, [
                createVNode(unref(ElIcon), {
                  class: normalizeClass(unref(ns).e("close"))
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(_ctx.closeIcon || unref(Close))))
                  ]),
                  _: 1
                }, 8, ["class"])
              ], 10, _hoisted_2)) : createCommentVNode("v-if", true)
            ],
            2
          ),
          createBaseVNode("div", {
            id: unref(bodyId),
            class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass])
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 10, _hoisted_3),
          _ctx.$slots.footer ? (openBlock(), createElementBlock(
            "footer",
            {
              key: 0,
              class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
            },
            [
              renderSlot(_ctx.$slots, "footer")
            ],
            2
          )) : createCommentVNode("v-if", true)
        ],
        6
      );
    };
  }
});
var ElDialogContent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);
const dialogProps = buildProps({
  ...dialogContentProps,
  appendToBody: Boolean,
  appendTo: {
    type: teleportProps.to.type,
    default: "body"
  },
  beforeClose: {
    type: definePropType(Function)
  },
  destroyOnClose: Boolean,
  closeOnClickModal: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  lockScroll: {
    type: Boolean,
    default: true
  },
  modal: {
    type: Boolean,
    default: true
  },
  modalPenetrable: Boolean,
  openDelay: {
    type: Number,
    default: 0
  },
  closeDelay: {
    type: Number,
    default: 0
  },
  top: {
    type: String
  },
  modelValue: Boolean,
  modalClass: String,
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  width: {
    type: [String, Number]
  },
  zIndex: {
    type: Number
  },
  trapFocus: Boolean,
  headerAriaLevel: {
    type: String,
    default: "2"
  },
  transition: {
    type: definePropType([String, Object]),
    default: void 0
  }
});
const dialogEmits = {
  open: () => true,
  opened: () => true,
  close: () => true,
  closed: () => true,
  [UPDATE_MODEL_EVENT]: (value) => isBoolean(value),
  openAutoFocus: () => true,
  closeAutoFocus: () => true
};
const useDialog = (props, targetRef) => {
  var _a;
  const instance = getCurrentInstance();
  const emit = instance.emit;
  const { nextZIndex } = useZIndex();
  let lastPosition = "";
  const titleId = useId();
  const bodyId = useId();
  const visible = ref(false);
  const closed = ref(false);
  const rendered = ref(false);
  const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
  const closing = ref(false);
  let openTimer = void 0;
  let closeTimer = void 0;
  const config = useGlobalConfig();
  const namespace = computed(() => {
    var _a2, _b;
    return (_b = (_a2 = config.value) == null ? void 0 : _a2.namespace) != null ? _b : defaultNamespace;
  });
  const globalConfig = computed(() => {
    var _a2;
    return (_a2 = config.value) == null ? void 0 : _a2.dialog;
  });
  const style = computed(() => {
    const style2 = {};
    const varPrefix = `--${namespace.value}-dialog`;
    if (!props.fullscreen) {
      if (props.top) {
        style2[`${varPrefix}-margin-top`] = props.top;
      }
      const width = addUnit(props.width);
      if (width) {
        style2[`${varPrefix}-width`] = width;
      }
    }
    return style2;
  });
  const _draggable = computed(
    () => {
      var _a2, _b, _c;
      return ((_c = (_b = props.draggable) != null ? _b : (_a2 = globalConfig.value) == null ? void 0 : _a2.draggable) != null ? _c : false) && !props.fullscreen;
    }
  );
  const _alignCenter = computed(
    () => {
      var _a2, _b, _c;
      return (_c = (_b = props.alignCenter) != null ? _b : (_a2 = globalConfig.value) == null ? void 0 : _a2.alignCenter) != null ? _c : false;
    }
  );
  const _overflow = computed(
    () => {
      var _a2, _b, _c;
      return (_c = (_b = props.overflow) != null ? _b : (_a2 = globalConfig.value) == null ? void 0 : _a2.overflow) != null ? _c : false;
    }
  );
  const overlayDialogStyle = computed(() => {
    if (_alignCenter.value) {
      return { display: "flex" };
    }
    return {};
  });
  const transitionConfig = computed(() => {
    var _a2, _b, _c;
    const transition = (_c = (_b = props.transition) != null ? _b : (_a2 = globalConfig.value) == null ? void 0 : _a2.transition) != null ? _c : DEFAULT_DIALOG_TRANSITION;
    const baseConfig = {
      name: transition,
      onAfterEnter: afterEnter,
      onBeforeLeave: beforeLeave,
      onAfterLeave: afterLeave
    };
    if (isObject(transition)) {
      const config2 = { ...transition };
      const _mergeHook = (userHook, defaultHook) => {
        return (el) => {
          if (isArray(userHook)) {
            userHook.forEach((fn) => {
              if (isFunction(fn))
                fn(el);
            });
          } else if (isFunction(userHook)) {
            userHook(el);
          }
          defaultHook();
        };
      };
      config2.onAfterEnter = _mergeHook(config2.onAfterEnter, afterEnter);
      config2.onBeforeLeave = _mergeHook(config2.onBeforeLeave, beforeLeave);
      config2.onAfterLeave = _mergeHook(config2.onAfterLeave, afterLeave);
      if (!config2.name) {
        config2.name = DEFAULT_DIALOG_TRANSITION;
      }
      return config2;
    }
    return baseConfig;
  });
  function afterEnter() {
    emit("opened");
  }
  function afterLeave() {
    emit("closed");
    emit(UPDATE_MODEL_EVENT, false);
    if (props.destroyOnClose) {
      rendered.value = false;
    }
    closing.value = false;
  }
  function beforeLeave() {
    closing.value = true;
    emit("close");
  }
  function open() {
    closeTimer == null ? void 0 : closeTimer();
    openTimer == null ? void 0 : openTimer();
    if (props.openDelay && props.openDelay > 0) {
      ({ stop: openTimer } = useTimeoutFn(() => doOpen(), props.openDelay));
    } else {
      doOpen();
    }
  }
  function close() {
    openTimer == null ? void 0 : openTimer();
    closeTimer == null ? void 0 : closeTimer();
    if (props.closeDelay && props.closeDelay > 0) {
      ({ stop: closeTimer } = useTimeoutFn(() => doClose(), props.closeDelay));
    } else {
      doClose();
    }
  }
  function handleClose() {
    function hide(shouldCancel) {
      if (shouldCancel)
        return;
      closed.value = true;
      visible.value = false;
    }
    if (props.beforeClose) {
      props.beforeClose(hide);
    } else {
      close();
    }
  }
  function onModalClick() {
    if (props.closeOnClickModal) {
      handleClose();
    }
  }
  function doOpen() {
    if (!isClient)
      return;
    visible.value = true;
  }
  function doClose() {
    visible.value = false;
  }
  function onOpenAutoFocus() {
    emit("openAutoFocus");
  }
  function onCloseAutoFocus() {
    emit("closeAutoFocus");
  }
  function onFocusoutPrevented(event) {
    var _a2;
    if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
      event.preventDefault();
    }
  }
  if (props.lockScroll) {
    useLockscreen(visible);
  }
  function onCloseRequested() {
    if (props.closeOnPressEscape) {
      handleClose();
    }
  }
  watch(
    () => props.zIndex,
    () => {
      var _a2;
      zIndex.value = (_a2 = props.zIndex) != null ? _a2 : nextZIndex();
    }
  );
  watch(
    () => props.modelValue,
    (val) => {
      var _a2;
      if (val) {
        closed.value = false;
        open();
        rendered.value = true;
        zIndex.value = (_a2 = props.zIndex) != null ? _a2 : nextZIndex();
        nextTick(() => {
          emit("open");
          if (targetRef.value) {
            targetRef.value.parentElement.scrollTop = 0;
            targetRef.value.parentElement.scrollLeft = 0;
            targetRef.value.scrollTop = 0;
          }
        });
      } else {
        if (visible.value) {
          close();
        }
      }
    }
  );
  watch(
    () => props.fullscreen,
    (val) => {
      if (!targetRef.value)
        return;
      if (val) {
        lastPosition = targetRef.value.style.transform;
        targetRef.value.style.transform = "";
      } else {
        targetRef.value.style.transform = lastPosition;
      }
    }
  );
  onMounted(() => {
    if (props.modelValue) {
      visible.value = true;
      rendered.value = true;
      open();
    }
  });
  return {
    afterEnter,
    afterLeave,
    beforeLeave,
    handleClose,
    onModalClick,
    close,
    doClose,
    onOpenAutoFocus,
    onCloseAutoFocus,
    onCloseRequested,
    onFocusoutPrevented,
    titleId,
    bodyId,
    closed,
    style,
    overlayDialogStyle,
    rendered,
    visible,
    zIndex,
    transitionConfig,
    _draggable,
    _alignCenter,
    _overflow,
    closing
  };
};
const _hoisted_1 = ["aria-label", "aria-labelledby", "aria-describedby"];
const _sfc_main = defineComponent({
  ...{
    name: "ElDialog",
    inheritAttrs: false
  },
  __name: "dialog",
  props: dialogProps,
  emits: dialogEmits,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const slots = useSlots();
    useDeprecated(
      {
        scope: "el-dialog",
        from: "the title slot",
        replacement: "the header slot",
        version: "3.0.0",
        ref: "https://element-plus.org/en-US/component/dialog.html#slots"
      },
      computed(() => !!slots.title)
    );
    const ns = useNamespace("dialog");
    const dialogRef = ref();
    const headerRef = ref();
    const dialogContentRef = ref();
    const {
      visible,
      titleId,
      bodyId,
      style,
      overlayDialogStyle,
      rendered,
      transitionConfig,
      zIndex,
      _draggable,
      _alignCenter,
      _overflow,
      handleClose,
      onModalClick,
      onOpenAutoFocus,
      onCloseAutoFocus,
      onCloseRequested,
      onFocusoutPrevented,
      closing
    } = useDialog(props, dialogRef);
    provide(dialogInjectionKey, {
      dialogRef,
      headerRef,
      bodyId,
      ns,
      rendered,
      style
    });
    const overlayEvent = useSameTarget(onModalClick);
    const penetrable = computed(
      () => props.modalPenetrable && !props.modal && !props.fullscreen
    );
    const resetPosition = () => {
      var _a;
      (_a = dialogContentRef.value) == null ? void 0 : _a.resetPosition();
    };
    __expose({
      visible,
      dialogContentRef,
      resetPosition,
      handleClose
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: _ctx.appendTo,
        disabled: _ctx.appendTo !== "body" ? false : !_ctx.appendToBody
      }, {
        default: withCtx(() => [
          createVNode(
            Transition,
            mergeProps(unref(transitionConfig), { persisted: "" }),
            {
              default: withCtx(() => {
                var _a;
                return [
                  withDirectives(createVNode(unref(ElOverlay), {
                    "custom-mask-event": "",
                    mask: _ctx.modal,
                    "overlay-class": [
                      (_a = _ctx.modalClass) != null ? _a : "",
                      `${unref(ns).namespace.value}-modal-dialog`,
                      unref(ns).is("penetrable", penetrable.value)
                    ],
                    "z-index": unref(zIndex)
                  }, {
                    default: withCtx(() => [
                      createBaseVNode("div", {
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": _ctx.title || void 0,
                        "aria-labelledby": !_ctx.title ? unref(titleId) : void 0,
                        "aria-describedby": unref(bodyId),
                        class: normalizeClass([
                          `${unref(ns).namespace.value}-overlay-dialog`,
                          unref(ns).is("closing", unref(closing))
                        ]),
                        style: normalizeStyle(unref(overlayDialogStyle)),
                        onClick: _cache[0] || (_cache[0] = (...args) => unref(overlayEvent).onClick && unref(overlayEvent).onClick(...args)),
                        onMousedown: _cache[1] || (_cache[1] = (...args) => unref(overlayEvent).onMousedown && unref(overlayEvent).onMousedown(...args)),
                        onMouseup: _cache[2] || (_cache[2] = (...args) => unref(overlayEvent).onMouseup && unref(overlayEvent).onMouseup(...args))
                      }, [
                        createVNode(unref(ElFocusTrap), {
                          loop: "",
                          trapped: unref(visible),
                          "focus-start-el": "container",
                          onFocusAfterTrapped: unref(onOpenAutoFocus),
                          onFocusAfterReleased: unref(onCloseAutoFocus),
                          onFocusoutPrevented: unref(onFocusoutPrevented),
                          onReleaseRequested: unref(onCloseRequested)
                        }, {
                          default: withCtx(() => [
                            unref(rendered) ? (openBlock(), createBlock(ElDialogContent, mergeProps({
                              key: 0,
                              ref_key: "dialogContentRef",
                              ref: dialogContentRef
                            }, _ctx.$attrs, {
                              center: _ctx.center,
                              "align-center": unref(_alignCenter),
                              "close-icon": _ctx.closeIcon,
                              draggable: unref(_draggable),
                              overflow: unref(_overflow),
                              fullscreen: _ctx.fullscreen,
                              "header-class": _ctx.headerClass,
                              "body-class": _ctx.bodyClass,
                              "footer-class": _ctx.footerClass,
                              "show-close": _ctx.showClose,
                              title: _ctx.title,
                              "aria-level": _ctx.headerAriaLevel,
                              onClose: unref(handleClose)
                            }), createSlots({
                              header: withCtx(() => [
                                !_ctx.$slots.title ? renderSlot(_ctx.$slots, "header", {
                                  key: 0,
                                  close: unref(handleClose),
                                  titleId: unref(titleId),
                                  titleClass: unref(ns).e("title")
                                }) : renderSlot(_ctx.$slots, "title", { key: 1 })
                              ]),
                              default: withCtx(() => [
                                renderSlot(_ctx.$slots, "default")
                              ]),
                              _: 2
                            }, [
                              _ctx.$slots.footer ? {
                                name: "footer",
                                fn: withCtx(() => [
                                  renderSlot(_ctx.$slots, "footer")
                                ]),
                                key: "0"
                              } : void 0
                            ]), 1040, ["center", "align-center", "close-icon", "draggable", "overflow", "fullscreen", "header-class", "body-class", "footer-class", "show-close", "title", "aria-level", "onClose"])) : createCommentVNode("v-if", true)
                          ]),
                          _: 3
                        }, 8, ["trapped", "onFocusAfterTrapped", "onFocusAfterReleased", "onFocusoutPrevented", "onReleaseRequested"])
                      ], 46, _hoisted_1)
                    ]),
                    _: 3
                  }, 8, ["mask", "overlay-class", "z-index"]), [
                    [vShow, unref(visible)]
                  ])
                ];
              }),
              _: 3
            },
            16
          )
        ]),
        _: 3
      }, 8, ["to", "disabled"]);
    };
  }
});
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);
const ElDialog = withInstall(Dialog);
export {
  ClickOutside as C,
  ElDialog as E,
  PatchFlags as P,
  ElTag as a,
  isValidElementNode as b,
  dialogProps as c,
  dialogEmits as d,
  ElOverlay as e,
  flattedChildren as f,
  getNormalizedProps as g,
  useDraggable as h,
  isFragment as i,
  useSameTarget as j,
  tagProps as t,
  useDialog as u
};
