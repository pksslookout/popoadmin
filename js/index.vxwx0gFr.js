import { s as shallowRef, r as ref, u as useThrottleFn, a as useEventListener, o as onMounted, _ as _export_sfc, d as defineComponent, b as useNamespace, c as computed, e as createBlock, f as openBlock, w as withCtx, g as createElementBlock, h as createCommentVNode, i as unref, j as withModifiers, n as normalizeClass, k as normalizeStyle, l as renderSlot, m as createVNode, E as ElIcon, p as caret_top_default, T as Transition, q as withInstall, t as buildProps, v as iconPropType, x as useLocale, y as provide, z as definePropType, A as inject, B as getCurrentInstance, C as createBaseVNode, D as resolveDynamicComponent, F as toDisplayString, G as withNoopInstall, H as isClient, I as watch, J as addUnit, K as getEventCode, L as EVENT_CODE, M as isString, N as isNil, O as hasOwn, P as watchEffect, Q as Fragment, R as renderList, S as reactive, U as nextTick, V as useEmptyValuesProps, W as useSizeProp, X as useEmptyValues, Y as reactiveComputed, Z as mergeProps, $ as withDirectives, a0 as arrow_down_default, a1 as vShow, a2 as close_default, a3 as withKeys, a4 as createTextVNode, a5 as addClass, a6 as hasClass, a7 as removeClass, a8 as arrow_right_default, a9 as isUndefined, aa as onBeforeUnmount, ab as h, ac as useTimeoutFn, ad as isArray, ae as isObject, af as useResizeObserver, ag as unrefElement, ah as more_default, ai as mutable, aj as isPropAbsent, ak as toRef, al as readonly, am as AuthStorage, an as useAppStore, ao as useSettingsStore, ap as defaultSettings, aq as usePermissionStore, ar as useRoute, as as useWindowSize, at as DeviceEnum, au as resolveComponent, av as ThemeMode, aw as LayoutMode, ax as SidebarColor, ay as i18n, az as onBeforeMount, aA as router, aB as toRaw, aC as isRef, aD as delete_default, aE as clock_default, aF as useFullscreen, aG as useI18n, aH as ComponentSize, aI as ElMessage, aJ as useDictStore, aK as httpRequest, aL as ElBadge, aM as ElNotification, aN as useUserStore, aO as useRouter, aP as getDefaultExportFromCjs, aQ as useTagsViewStore, aR as storeToRefs, aS as Teleport, aT as toRefs, aU as KeepAlive, aV as normalizeProps, aW as guardReactiveProps, aX as markRaw, aY as document_copy_default, aZ as refresh_left_default, a_ as themeColorPresets, a$ as check_default } from "./index.Dp4m6nBq.js";
import { E as ElScrollbar } from "./scrollbar.u3Wr4GmE.js";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import { l as logo, _ as _sfc_main$B } from "./index.vue_vue_type_script_setup_true_lang.DPffxpzu.js";
import { T as TinyColor, u as useFormItem, a as useFormDisabled, b as useFormSize, c as useFormItemInputId, E as ElButton, d as useId } from "./button.7O-VbLYM.js";
import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from "./dropdown-item.C0t1fCbn.js";
import { t as throwError, d as debugWarn, u as useAriaProps, a as useTooltipContentProps, p as pick, E as ElTooltip, b as triggerEvent, f as focusElement } from "./popper.DXIFQgs8.js";
import { C as ClickOutside, f as flattedChildren, E as ElDialog, a as ElTag } from "./tag.CYa7Ow6I.js";
import { U as UPDATE_MODEL_EVENT, E as ElInput, C as CHANGE_EVENT, u as useFocusController } from "./input.BUoL4AzR.js";
/* empty css                 */
import { E as ElLink } from "./link.LaOC_JED.js";
import { E as ElDivider } from "./divider.Dw8pyPe-.js";
import { E as ElText } from "./text.DzyWNEr_.js";
import { E as ElDrawer } from "./drawer.CeSBmddc.js";
import { E as ElMessageBox } from "./index.Bpj8aKv_.js";
import Error404 from "./404.CQ-nC4xJ.js";
import { E as ElCollapseTransition } from "./index.D_ONB5yw.js";
import { E as ElRadioGroup, a as ElRadio } from "./radio-group.D8uLsjJG.js";
import { E as ElSwitch } from "./switch.BYWuQ4fI.js";
import { d as debounce } from "./debounce.WgF1lM06.js";
const backtopProps = {
  visibilityHeight: {
    type: Number,
    default: 200
  },
  target: {
    type: String,
    default: ""
  },
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  }
};
const backtopEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const useBackTop = (props, emit, componentName) => {
  const el = shallowRef();
  const container = shallowRef();
  const visible = ref(false);
  const handleScroll = () => {
    if (el.value)
      visible.value = el.value.scrollTop >= props.visibilityHeight;
  };
  const handleClick = (event) => {
    var _a;
    (_a = el.value) == null ? void 0 : _a.scrollTo({ top: 0, behavior: "smooth" });
    emit("click", event);
  };
  const handleScrollThrottled = useThrottleFn(handleScroll, 300, true);
  useEventListener(container, "scroll", handleScrollThrottled);
  onMounted(() => {
    var _a;
    container.value = document;
    el.value = document.documentElement;
    if (props.target) {
      el.value = (_a = document.querySelector(props.target)) != null ? _a : void 0;
      if (!el.value) {
        throwError(componentName, `target does not exist: ${props.target}`);
      }
      container.value = el.value;
    }
    handleScroll();
  });
  return {
    visible,
    handleClick
  };
};
const COMPONENT_NAME$2 = "ElBacktop";
const _sfc_main$A = defineComponent({
  ...{
    name: COMPONENT_NAME$2
  },
  __name: "backtop",
  props: backtopProps,
  emits: backtopEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const ns = useNamespace("backtop");
    const { handleClick, visible } = useBackTop(props, emit, COMPONENT_NAME$2);
    const backTopStyle = computed(() => ({
      right: `${props.right}px`,
      bottom: `${props.bottom}px`
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: `${unref(ns).namespace.value}-fade-in`
      }, {
        default: withCtx(() => [
          unref(visible) ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              style: normalizeStyle(backTopStyle.value),
              class: normalizeClass(unref(ns).b()),
              onClick: _cache[0] || (_cache[0] = withModifiers(
                (...args) => unref(handleClick) && unref(handleClick)(...args),
                ["stop"]
              ))
            },
            [
              renderSlot(_ctx.$slots, "default", {}, () => [
                createVNode(unref(ElIcon), {
                  class: normalizeClass(unref(ns).e("icon"))
                }, {
                  default: withCtx(() => [
                    createVNode(unref(caret_top_default))
                  ]),
                  _: 1
                }, 8, ["class"])
              ])
            ],
            6
          )) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var Backtop = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/backtop/src/backtop.vue"]]);
const ElBacktop = withInstall(Backtop);
const breadcrumbKey = Symbol("breadcrumbKey");
const breadcrumbProps = buildProps({
  separator: {
    type: String,
    default: "/"
  },
  separatorIcon: {
    type: iconPropType
  }
});
const _hoisted_1$l = ["aria-label"];
const _sfc_main$z = defineComponent({
  ...{
    name: "ElBreadcrumb"
  },
  __name: "breadcrumb",
  props: breadcrumbProps,
  setup(__props) {
    const { t } = useLocale();
    const props = __props;
    const ns = useNamespace("breadcrumb");
    const breadcrumb = ref();
    provide(breadcrumbKey, props);
    onMounted(() => {
      const items = breadcrumb.value.querySelectorAll(`.${ns.e("item")}`);
      if (items.length) {
        items[items.length - 1].setAttribute("aria-current", "page");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "breadcrumb",
        ref: breadcrumb,
        class: normalizeClass(unref(ns).b()),
        "aria-label": unref(t)("el.breadcrumb.label"),
        role: "navigation"
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, _hoisted_1$l);
    };
  }
});
var Breadcrumb$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb.vue"]]);
const breadcrumbItemProps = buildProps({
  to: {
    type: definePropType([String, Object]),
    default: ""
  },
  replace: Boolean
});
const _sfc_main$y = defineComponent({
  ...{
    name: "ElBreadcrumbItem"
  },
  __name: "breadcrumb-item",
  props: breadcrumbItemProps,
  setup(__props) {
    const props = __props;
    const instance = getCurrentInstance();
    const breadcrumbContext = inject(breadcrumbKey, void 0);
    const ns = useNamespace("breadcrumb");
    const router2 = instance.appContext.config.globalProperties.$router;
    const onClick = () => {
      if (!props.to || !router2)
        return;
      props.replace ? router2.replace(props.to) : router2.push(props.to);
    };
    return (_ctx, _cache) => {
      var _a, _b;
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass(unref(ns).e("item"))
        },
        [
          createBaseVNode(
            "span",
            {
              class: normalizeClass([unref(ns).e("inner"), unref(ns).is("link", !!_ctx.to)]),
              role: "link",
              onClick
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            2
          ),
          ((_a = unref(breadcrumbContext)) == null ? void 0 : _a.separatorIcon) ? (openBlock(), createBlock(unref(ElIcon), {
            key: 0,
            class: normalizeClass(unref(ns).e("separator"))
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(unref(breadcrumbContext).separatorIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : (openBlock(), createElementBlock(
            "span",
            {
              key: 1,
              class: normalizeClass(unref(ns).e("separator")),
              role: "presentation"
            },
            toDisplayString((_b = unref(breadcrumbContext)) == null ? void 0 : _b.separator),
            3
          ))
        ],
        2
      );
    };
  }
});
var BreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/breadcrumb/src/breadcrumb-item.vue"]]);
const ElBreadcrumb = withInstall(Breadcrumb$1, {
  BreadcrumbItem
});
const ElBreadcrumbItem = withNoopInstall(BreadcrumbItem);
const alphaSliderProps = buildProps({
  color: {
    type: definePropType(Object),
    required: true
  },
  vertical: Boolean,
  disabled: Boolean
});
const hueSliderProps = alphaSliderProps;
let isDragging = false;
function draggable(element, options) {
  if (!isClient)
    return;
  const moveFn = function(event) {
    var _a;
    (_a = options.drag) == null ? void 0 : _a.call(options, event);
  };
  const upFn = function(event) {
    var _a;
    document.removeEventListener("mousemove", moveFn);
    document.removeEventListener("mouseup", upFn);
    document.removeEventListener("touchmove", moveFn);
    document.removeEventListener("touchend", upFn);
    document.onselectstart = null;
    document.ondragstart = null;
    isDragging = false;
    (_a = options.end) == null ? void 0 : _a.call(options, event);
  };
  const downFn = function(event) {
    var _a;
    if (isDragging)
      return;
    document.onselectstart = () => false;
    document.ondragstart = () => false;
    document.addEventListener("mousemove", moveFn);
    document.addEventListener("mouseup", upFn);
    document.addEventListener("touchmove", moveFn);
    document.addEventListener("touchend", upFn);
    isDragging = true;
    (_a = options.start) == null ? void 0 : _a.call(options, event);
  };
  element.addEventListener("mousedown", downFn);
  element.addEventListener("touchstart", downFn, { passive: false });
}
const getClientXY = (event) => {
  let clientX;
  let clientY;
  if (event.type === "touchend") {
    clientY = event.changedTouches[0].clientY;
    clientX = event.changedTouches[0].clientX;
  } else if (event.type.startsWith("touch")) {
    clientY = event.touches[0].clientY;
    clientX = event.touches[0].clientX;
  } else {
    clientY = event.clientY;
    clientX = event.clientX;
  }
  return {
    clientX,
    clientY
  };
};
const useSlider = (props, { key, minValue: minValue2, maxValue: maxValue2 }) => {
  const instance = getCurrentInstance();
  const thumb = shallowRef();
  const bar = shallowRef();
  const currentValue = computed(() => props.color.get(key));
  function handleClick(event) {
    var _a;
    if (props.disabled)
      return;
    const target = event.target;
    if (target !== thumb.value) {
      handleDrag(event);
    }
    (_a = thumb.value) == null ? void 0 : _a.focus();
  }
  function handleDrag(event) {
    if (!bar.value || !thumb.value || props.disabled)
      return;
    const el = instance.vnode.el;
    const rect = el.getBoundingClientRect();
    const { clientX, clientY } = getClientXY(event);
    let value;
    if (!props.vertical) {
      let left = clientX - rect.left;
      left = Math.max(thumb.value.offsetWidth / 2, left);
      left = Math.min(left, rect.width - thumb.value.offsetWidth / 2);
      value = Math.round(
        (left - thumb.value.offsetWidth / 2) / (rect.width - thumb.value.offsetWidth) * maxValue2
      );
    } else {
      let top = clientY - rect.top;
      top = Math.max(thumb.value.offsetHeight / 2, top);
      top = Math.min(top, rect.height - thumb.value.offsetHeight / 2);
      value = Math.round(
        (top - thumb.value.offsetHeight / 2) / (rect.height - thumb.value.offsetHeight) * maxValue2
      );
    }
    props.color.set(key, value);
  }
  function handleKeydown(event) {
    if (props.disabled)
      return;
    const { shiftKey } = event;
    const code = getEventCode(event);
    const step = shiftKey ? 10 : 1;
    const reverse = key === "hue" ? -1 : 1;
    let isPreventDefault = true;
    switch (code) {
      case EVENT_CODE.left:
      case EVENT_CODE.down:
        incrementPosition(-step * reverse);
        break;
      case EVENT_CODE.right:
      case EVENT_CODE.up:
        incrementPosition(step * reverse);
        break;
      case EVENT_CODE.home:
        props.color.set(key, key === "hue" ? maxValue2 : minValue2);
        break;
      case EVENT_CODE.end:
        props.color.set(key, key === "hue" ? minValue2 : maxValue2);
        break;
      case EVENT_CODE.pageDown:
        incrementPosition(-4 * reverse);
        break;
      case EVENT_CODE.pageUp:
        incrementPosition(4 * reverse);
        break;
      default:
        isPreventDefault = false;
        break;
    }
    isPreventDefault && event.preventDefault();
  }
  function incrementPosition(step) {
    let next = currentValue.value + step;
    next = next < minValue2 ? minValue2 : next > maxValue2 ? maxValue2 : next;
    props.color.set(key, next);
  }
  return {
    thumb,
    bar,
    currentValue,
    handleDrag,
    handleClick,
    handleKeydown
  };
};
const useSliderDOM = (props, {
  namespace,
  maxValue: maxValue2,
  bar,
  thumb,
  currentValue,
  handleDrag,
  getBackground
}) => {
  const instance = getCurrentInstance();
  const ns = useNamespace(namespace);
  const thumbLeft = ref(0);
  const thumbTop = ref(0);
  const background = ref();
  function getThumbLeft() {
    if (!thumb.value)
      return 0;
    if (props.vertical)
      return 0;
    const el = instance.vnode.el;
    const value = currentValue.value;
    if (!el)
      return 0;
    return Math.round(
      value * (el.offsetWidth - thumb.value.offsetWidth / 2) / maxValue2
    );
  }
  function getThumbTop() {
    if (!thumb.value)
      return 0;
    const el = instance.vnode.el;
    if (!props.vertical)
      return 0;
    const value = currentValue.value;
    if (!el)
      return 0;
    return Math.round(
      value * (el.offsetHeight - thumb.value.offsetHeight / 2) / maxValue2
    );
  }
  function update() {
    thumbLeft.value = getThumbLeft();
    thumbTop.value = getThumbTop();
    background.value = getBackground == null ? void 0 : getBackground();
  }
  onMounted(() => {
    if (!bar.value || !thumb.value)
      return;
    const dragConfig = {
      drag: (event) => {
        handleDrag(event);
      },
      end: (event) => {
        handleDrag(event);
      }
    };
    draggable(bar.value, dragConfig);
    draggable(thumb.value, dragConfig);
    update();
  });
  watch(currentValue, () => update());
  watch(
    () => props.color.value,
    () => update()
  );
  const rootKls = computed(() => [
    ns.b(),
    ns.is("vertical", props.vertical),
    ns.is("disabled", props.disabled)
  ]);
  const barKls = computed(() => ns.e("bar"));
  const thumbKls = computed(() => ns.e("thumb"));
  const barStyle = computed(() => ({ background: background.value }));
  const thumbStyle = computed(() => ({
    left: addUnit(thumbLeft.value),
    top: addUnit(thumbTop.value)
  }));
  return {
    rootKls,
    barKls,
    barStyle,
    thumbKls,
    thumbStyle,
    thumbLeft,
    thumbTop,
    update
  };
};
const _hoisted_1$k = ["aria-label", "aria-valuenow", "aria-valuetext", "aria-orientation", "tabindex", "aria-disabled"];
const minValue$1 = 0;
const maxValue$1 = 100;
const _sfc_main$x = defineComponent({
  ...{
    name: "ElColorAlphaSlider"
  },
  __name: "alpha-slider",
  props: alphaSliderProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { currentValue, bar, thumb, handleDrag, handleClick, handleKeydown } = useSlider(props, { key: "alpha", minValue: minValue$1, maxValue: maxValue$1 });
    const { rootKls, barKls, barStyle, thumbKls, thumbStyle, update } = useSliderDOM(props, {
      namespace: "color-alpha-slider",
      maxValue: maxValue$1,
      currentValue,
      bar,
      thumb,
      handleDrag,
      getBackground
    });
    const { t } = useLocale();
    const ariaLabel = computed(() => t("el.colorpicker.alphaLabel"));
    const ariaValuetext = computed(() => {
      return t("el.colorpicker.alphaDescription", {
        alpha: currentValue.value,
        color: props.color.value
      });
    });
    function getBackground() {
      if (props.color && props.color.value) {
        const { r, g, b } = props.color.toRgb();
        return `linear-gradient(to right, rgba(${r}, ${g}, ${b}, 0) 0%, rgba(${r}, ${g}, ${b}, 1) 100%)`;
      }
      return "";
    }
    __expose({
      update,
      bar,
      thumb
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(rootKls))
        },
        [
          createBaseVNode(
            "div",
            {
              ref_key: "bar",
              ref: bar,
              class: normalizeClass(unref(barKls)),
              style: normalizeStyle(unref(barStyle)),
              onClick: _cache[0] || (_cache[0] = (...args) => unref(handleClick) && unref(handleClick)(...args))
            },
            null,
            6
          ),
          createBaseVNode("div", {
            ref_key: "thumb",
            ref: thumb,
            class: normalizeClass(unref(thumbKls)),
            style: normalizeStyle(unref(thumbStyle)),
            "aria-label": ariaLabel.value,
            "aria-valuenow": unref(currentValue),
            "aria-valuetext": ariaValuetext.value,
            "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
            "aria-valuemin": minValue$1,
            "aria-valuemax": maxValue$1,
            role: "slider",
            tabindex: _ctx.disabled ? void 0 : 0,
            "aria-disabled": _ctx.disabled,
            onKeydown: _cache[1] || (_cache[1] = (...args) => unref(handleKeydown) && unref(handleKeydown)(...args))
          }, null, 46, _hoisted_1$k)
        ],
        2
      );
    };
  }
});
var AlphaSlider = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker-panel/src/components/alpha-slider.vue"]]);
const _hoisted_1$j = ["aria-label", "aria-valuenow", "aria-valuetext", "aria-orientation", "tabindex", "aria-disabled"];
const minValue = 0;
const maxValue = 360;
const _sfc_main$w = defineComponent({
  ...{
    name: "ElColorHueSlider"
  },
  __name: "hue-slider",
  props: hueSliderProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { currentValue, bar, thumb, handleDrag, handleClick, handleKeydown } = useSlider(props, { key: "hue", minValue, maxValue });
    const { rootKls, barKls, thumbKls, thumbStyle, thumbTop, update } = useSliderDOM(props, {
      namespace: "color-hue-slider",
      maxValue,
      currentValue,
      bar,
      thumb,
      handleDrag
    });
    const { t } = useLocale();
    const ariaLabel = computed(() => t("el.colorpicker.hueLabel"));
    const ariaValuetext = computed(() => {
      return t("el.colorpicker.hueDescription", {
        hue: currentValue.value,
        color: props.color.value
      });
    });
    __expose({
      bar,
      thumb,
      thumbTop,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(rootKls))
        },
        [
          createBaseVNode(
            "div",
            {
              ref_key: "bar",
              ref: bar,
              class: normalizeClass(unref(barKls)),
              onClick: _cache[0] || (_cache[0] = (...args) => unref(handleClick) && unref(handleClick)(...args))
            },
            null,
            2
          ),
          createBaseVNode("div", {
            ref_key: "thumb",
            ref: thumb,
            class: normalizeClass(unref(thumbKls)),
            style: normalizeStyle(unref(thumbStyle)),
            "aria-label": ariaLabel.value,
            "aria-valuenow": unref(currentValue),
            "aria-valuetext": ariaValuetext.value,
            "aria-orientation": _ctx.vertical ? "vertical" : "horizontal",
            "aria-valuemin": minValue,
            "aria-valuemax": maxValue,
            role: "slider",
            tabindex: _ctx.disabled ? void 0 : 0,
            "aria-disabled": _ctx.disabled,
            onKeydown: _cache[1] || (_cache[1] = (...args) => unref(handleKeydown) && unref(handleKeydown)(...args))
          }, null, 46, _hoisted_1$j)
        ],
        2
      );
    };
  }
});
var HueSlider = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker-panel/src/components/hue-slider.vue"]]);
const predefineProps = buildProps({
  colors: {
    type: definePropType(Array),
    required: true
  },
  color: {
    type: definePropType(Object),
    required: true
  },
  enableAlpha: {
    type: Boolean,
    required: true
  },
  disabled: Boolean
});
const colorPickerPanelProps = buildProps({
  modelValue: {
    type: definePropType(String),
    default: void 0
  },
  border: {
    type: Boolean,
    default: true
  },
  showAlpha: Boolean,
  colorFormat: String,
  disabled: Boolean,
  predefine: {
    type: definePropType(Array)
  },
  validateEvent: {
    type: Boolean,
    default: true
  }
});
const colorPickerPanelEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNil(val)
};
const ROOT_COMMON_COLOR_INJECTION_KEY = Symbol("colorCommonPickerKey");
const colorPickerPanelContextKey = Symbol("colorPickerPanelContextKey");
class Color {
  constructor(options = {}) {
    this._hue = 0;
    this._saturation = 100;
    this._value = 100;
    this._alpha = 100;
    this._tiny = new TinyColor();
    this._isValid = false;
    this.enableAlpha = false;
    this.format = "";
    this.value = "";
    for (const option in options) {
      if (hasOwn(options, option)) {
        this[option] = options[option];
      }
    }
    if (options.value) {
      this.fromString(options.value);
    } else {
      this.doOnChange();
    }
  }
  set(prop, value) {
    if (arguments.length === 1 && typeof prop === "object") {
      for (const p in prop) {
        if (hasOwn(prop, p)) {
          this.set(p, prop[p]);
        }
      }
      return;
    }
    this[`_${prop}`] = value;
    this._isValid = true;
    this.doOnChange();
  }
  get(prop) {
    if (["hue", "saturation", "value", "alpha"].includes(prop)) {
      return Math.round(this[`_${prop}`]);
    }
    return this[`_${prop}`];
  }
  toRgb() {
    return this._isValid ? this._tiny.toRgb() : { r: 255, g: 255, b: 255, a: 0 };
  }
  fromString(value) {
    const color = new TinyColor(value);
    this._isValid = color.isValid;
    if (color.isValid) {
      const { h: h2, s, v, a } = color.toHsv();
      this._hue = h2;
      this._saturation = s * 100;
      this._value = v * 100;
      this._alpha = a * 100;
    } else {
      this._hue = 0;
      this._saturation = 100;
      this._value = 100;
      this._alpha = 100;
    }
    this.doOnChange();
  }
  clear() {
    this._isValid = false;
    this.value = "";
    this._hue = 0;
    this._saturation = 100;
    this._value = 100;
    this._alpha = 100;
  }
  compare(color) {
    const compareColor = new TinyColor({
      h: color._hue,
      s: color._saturation / 100,
      v: color._value / 100,
      a: color._alpha / 100
    });
    return this._tiny.equals(compareColor);
  }
  doOnChange() {
    const { _hue, _saturation, _value, _alpha, format, enableAlpha } = this;
    let _format = format || (enableAlpha ? "rgb" : "hex");
    if (format === "hex" && enableAlpha) {
      _format = "hex8";
    }
    this._tiny = new TinyColor({
      h: _hue,
      s: _saturation / 100,
      v: _value / 100,
      a: _alpha / 100
    });
    this.value = this._isValid ? this._tiny.toString(_format) : "";
  }
}
const usePredefine = (props) => {
  const { currentColor } = inject(colorPickerPanelContextKey);
  const rgbaColors = ref(parseColors(props.colors, props.color));
  watch(
    () => currentColor.value,
    (val) => {
      const color = new Color({
        value: val,
        enableAlpha: props.enableAlpha
      });
      rgbaColors.value.forEach((item) => {
        item.selected = color.compare(item);
      });
    }
  );
  watchEffect(() => {
    rgbaColors.value = parseColors(props.colors, props.color);
  });
  function handleSelect(index2) {
    props.color.fromString(props.colors[index2]);
  }
  function parseColors(colors, color) {
    return colors.map((value) => {
      const c = new Color({
        value,
        enableAlpha: props.enableAlpha
      });
      c.selected = c.compare(color);
      return c;
    });
  }
  return {
    rgbaColors,
    handleSelect
  };
};
const usePredefineDOM = (props) => {
  const ns = useNamespace("color-predefine");
  const rootKls = computed(() => [ns.b(), ns.is("disabled", props.disabled)]);
  const colorsKls = computed(() => ns.e("colors"));
  function colorSelectorKls(item) {
    return [
      ns.e("color-selector"),
      ns.is("alpha", item.get("alpha") < 100),
      { selected: item.selected }
    ];
  }
  return {
    rootKls,
    colorsKls,
    colorSelectorKls
  };
};
const _hoisted_1$i = ["disabled", "aria-label", "onClick"];
const _sfc_main$v = defineComponent({
  ...{
    name: "ElColorPredefine"
  },
  __name: "predefine",
  props: predefineProps,
  setup(__props) {
    const props = __props;
    const { rgbaColors, handleSelect } = usePredefine(props);
    const { rootKls, colorsKls, colorSelectorKls } = usePredefineDOM(props);
    const { t } = useLocale();
    const ariaLabel = (value) => {
      return t("el.colorpicker.predefineDescription", { value });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(rootKls))
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(colorsKls))
            },
            [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(unref(rgbaColors), (item, index2) => {
                  return openBlock(), createElementBlock("button", {
                    key: _ctx.colors[index2],
                    type: "button",
                    disabled: _ctx.disabled,
                    "aria-label": ariaLabel(item.value),
                    class: normalizeClass(unref(colorSelectorKls)(item)),
                    onClick: ($event) => unref(handleSelect)(index2)
                  }, [
                    createBaseVNode(
                      "div",
                      {
                        style: normalizeStyle({ backgroundColor: item.value })
                      },
                      null,
                      4
                    )
                  ], 10, _hoisted_1$i);
                }),
                128
              ))
            ],
            2
          )
        ],
        2
      );
    };
  }
});
var Predefine = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker-panel/src/components/predefine.vue"]]);
const svPanelProps = buildProps({
  color: {
    type: definePropType(Object),
    required: true
  },
  disabled: Boolean
});
const useSvPanel = (props) => {
  const instance = getCurrentInstance();
  const cursorRef = ref();
  const cursorTop = ref(0);
  const cursorLeft = ref(0);
  const background = ref("hsl(0, 100%, 50%)");
  const saturation = computed(() => props.color.get("saturation"));
  const brightness = computed(() => props.color.get("value"));
  const hue = computed(() => props.color.get("hue"));
  function handleClick(event) {
    var _a;
    if (props.disabled)
      return;
    const target = event.target;
    if (target !== cursorRef.value) {
      handleDrag(event);
    }
    (_a = cursorRef.value) == null ? void 0 : _a.focus({ preventScroll: true });
  }
  function handleDrag(event) {
    if (props.disabled)
      return;
    const el = instance.vnode.el;
    const rect = el.getBoundingClientRect();
    const { clientX, clientY } = getClientXY(event);
    let left = clientX - rect.left;
    let top = clientY - rect.top;
    left = Math.max(0, left);
    left = Math.min(left, rect.width);
    top = Math.max(0, top);
    top = Math.min(top, rect.height);
    cursorLeft.value = left;
    cursorTop.value = top;
    props.color.set({
      saturation: left / rect.width * 100,
      value: 100 - top / rect.height * 100
    });
  }
  function handleKeydown(event) {
    if (props.disabled)
      return;
    const { shiftKey } = event;
    const code = getEventCode(event);
    const step = shiftKey ? 10 : 1;
    let isPreventDefault = true;
    switch (code) {
      case EVENT_CODE.left:
        incrementSaturation(-step);
        break;
      case EVENT_CODE.right:
        incrementSaturation(step);
        break;
      case EVENT_CODE.up:
        incrementBrightness(step);
        break;
      case EVENT_CODE.down:
        incrementBrightness(-step);
        break;
      default:
        isPreventDefault = false;
        break;
    }
    isPreventDefault && event.preventDefault();
  }
  function incrementSaturation(step) {
    let next = saturation.value + step;
    next = next < 0 ? 0 : next > 100 ? 100 : next;
    props.color.set("saturation", next);
  }
  function incrementBrightness(step) {
    let next = brightness.value + step;
    next = next < 0 ? 0 : next > 100 ? 100 : next;
    props.color.set("value", next);
  }
  return {
    cursorRef,
    cursorTop,
    cursorLeft,
    background,
    saturation,
    brightness,
    hue,
    handleClick,
    handleDrag,
    handleKeydown
  };
};
const useSvPanelDOM = (props, {
  cursorTop,
  cursorLeft,
  background,
  handleDrag
}) => {
  const instance = getCurrentInstance();
  const ns = useNamespace("color-svpanel");
  function update() {
    const saturation = props.color.get("saturation");
    const brightness = props.color.get("value");
    const el = instance.vnode.el;
    const { clientWidth: width, clientHeight: height } = el;
    cursorLeft.value = saturation * width / 100;
    cursorTop.value = (100 - brightness) * height / 100;
    background.value = `hsl(${props.color.get("hue")}, 100%, 50%)`;
  }
  onMounted(() => {
    draggable(instance.vnode.el, {
      drag: (event) => {
        handleDrag(event);
      },
      end: (event) => {
        handleDrag(event);
      }
    });
    update();
  });
  watch(
    [
      () => props.color.get("hue"),
      () => props.color.get("value"),
      () => props.color.value
    ],
    () => update()
  );
  const rootKls = computed(() => ns.b());
  const cursorKls = computed(() => ns.e("cursor"));
  const rootStyle = computed(() => ({
    backgroundColor: background.value
  }));
  const cursorStyle = computed(() => ({
    top: addUnit(cursorTop.value),
    left: addUnit(cursorLeft.value)
  }));
  return {
    rootKls,
    cursorKls,
    rootStyle,
    cursorStyle,
    update
  };
};
const _hoisted_1$h = ["tabindex", "aria-disabled", "aria-label", "aria-valuenow", "aria-valuetext"];
const _sfc_main$u = defineComponent({
  ...{
    name: "ElSvPanel"
  },
  __name: "sv-panel",
  props: svPanelProps,
  setup(__props, { expose: __expose }) {
    const props = __props;
    const {
      cursorRef,
      cursorTop,
      cursorLeft,
      background,
      saturation,
      brightness,
      handleClick,
      handleDrag,
      handleKeydown
    } = useSvPanel(props);
    const { rootKls, cursorKls, rootStyle, cursorStyle, update } = useSvPanelDOM(
      props,
      {
        cursorTop,
        cursorLeft,
        background,
        handleDrag
      }
    );
    const { t } = useLocale();
    const ariaLabel = computed(() => t("el.colorpicker.svLabel"));
    const ariaValuetext = computed(() => {
      return t("el.colorpicker.svDescription", {
        saturation: saturation.value,
        brightness: brightness.value,
        color: props.color.value
      });
    });
    __expose({
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(rootKls)),
          style: normalizeStyle(unref(rootStyle)),
          onClick: _cache[1] || (_cache[1] = (...args) => unref(handleClick) && unref(handleClick)(...args))
        },
        [
          createBaseVNode("div", {
            ref_key: "cursorRef",
            ref: cursorRef,
            class: normalizeClass(unref(cursorKls)),
            style: normalizeStyle(unref(cursorStyle)),
            tabindex: _ctx.disabled ? void 0 : 0,
            "aria-disabled": _ctx.disabled,
            role: "slider",
            "aria-valuemin": "0,0",
            "aria-valuemax": "100,100",
            "aria-label": ariaLabel.value,
            "aria-valuenow": `${unref(saturation)},${unref(brightness)}`,
            "aria-valuetext": ariaValuetext.value,
            onKeydown: _cache[0] || (_cache[0] = (...args) => unref(handleKeydown) && unref(handleKeydown)(...args))
          }, null, 46, _hoisted_1$h)
        ],
        6
      );
    };
  }
});
var SvPanel = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker-panel/src/components/sv-panel.vue"]]);
const useCommonColor = (props, emit) => {
  const color = reactive(
    new Color({
      enableAlpha: props.showAlpha,
      format: props.colorFormat || "",
      value: props.modelValue
    })
  );
  watch(
    () => [props.colorFormat, props.showAlpha],
    () => {
      color.enableAlpha = props.showAlpha;
      color.format = props.colorFormat || color.format;
      color.doOnChange();
      emit(UPDATE_MODEL_EVENT, color.value);
    }
  );
  return {
    color
  };
};
const _sfc_main$t = defineComponent({
  ...{
    name: "ElColorPickerPanel"
  },
  __name: "color-picker-panel",
  props: colorPickerPanelProps,
  emits: colorPickerPanelEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const ns = useNamespace("color-picker-panel");
    const { formItem } = useFormItem();
    const disabled = useFormDisabled();
    const hueRef = ref();
    const svRef = ref();
    const alphaRef = ref();
    const inputRef = ref();
    const customInput = ref("");
    const { color } = inject(
      ROOT_COMMON_COLOR_INJECTION_KEY,
      () => useCommonColor(props, emit),
      true
    );
    function handleConfirm() {
      color.fromString(customInput.value);
      if (color.value !== customInput.value) {
        customInput.value = color.value;
      }
    }
    function handleFocusout() {
      var _a;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => debugWarn());
      }
    }
    function update() {
      var _a, _b, _c;
      (_a = hueRef.value) == null ? void 0 : _a.update();
      (_b = svRef.value) == null ? void 0 : _b.update();
      (_c = alphaRef.value) == null ? void 0 : _c.update();
    }
    onMounted(() => {
      if (props.modelValue) {
        customInput.value = color.value;
      }
      nextTick(update);
    });
    watch(
      () => props.modelValue,
      (newVal) => {
        if (newVal !== color.value) {
          newVal ? color.fromString(newVal) : color.clear();
        }
      }
    );
    watch(
      () => color.value,
      (val) => {
        emit(UPDATE_MODEL_EVENT, val);
        customInput.value = val;
        if (props.validateEvent) {
          formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
        }
      }
    );
    provide(colorPickerPanelContextKey, {
      currentColor: computed(() => color.value)
    });
    __expose({
      color,
      inputRef,
      update
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([unref(ns).b(), unref(ns).is("disabled", unref(disabled)), unref(ns).is("border", _ctx.border)]),
          onFocusout: handleFocusout
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("wrapper"))
            },
            [
              createVNode(HueSlider, {
                ref_key: "hueRef",
                ref: hueRef,
                class: "hue-slider",
                color: unref(color),
                vertical: "",
                disabled: unref(disabled)
              }, null, 8, ["color", "disabled"]),
              createVNode(SvPanel, {
                ref_key: "svRef",
                ref: svRef,
                color: unref(color),
                disabled: unref(disabled)
              }, null, 8, ["color", "disabled"])
            ],
            2
          ),
          _ctx.showAlpha ? (openBlock(), createBlock(AlphaSlider, {
            key: 0,
            ref_key: "alphaRef",
            ref: alphaRef,
            color: unref(color),
            disabled: unref(disabled)
          }, null, 8, ["color", "disabled"])) : createCommentVNode("v-if", true),
          _ctx.predefine ? (openBlock(), createBlock(Predefine, {
            key: 1,
            ref: "predefine",
            "enable-alpha": _ctx.showAlpha,
            color: unref(color),
            colors: _ctx.predefine,
            disabled: unref(disabled)
          }, null, 8, ["enable-alpha", "color", "colors", "disabled"])) : createCommentVNode("v-if", true),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("footer"))
            },
            [
              createVNode(unref(ElInput), {
                ref_key: "inputRef",
                ref: inputRef,
                modelValue: customInput.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => customInput.value = $event),
                "validate-event": false,
                size: "small",
                disabled: unref(disabled),
                onChange: handleConfirm
              }, null, 8, ["modelValue", "disabled"]),
              renderSlot(_ctx.$slots, "footer")
            ],
            2
          )
        ],
        34
      );
    };
  }
});
var ColorPickerPanel = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker-panel/src/color-picker-panel.vue"]]);
const ElColorPickerPanel = withInstall(ColorPickerPanel);
const colorPickerProps = buildProps({
  persistent: {
    type: Boolean,
    default: true
  },
  modelValue: {
    type: definePropType(String),
    default: void 0
  },
  id: String,
  showAlpha: Boolean,
  colorFormat: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  size: useSizeProp,
  popperClass: useTooltipContentProps.popperClass,
  popperStyle: useTooltipContentProps.popperStyle,
  tabindex: {
    type: [String, Number],
    default: 0
  },
  teleported: useTooltipContentProps.teleported,
  appendTo: useTooltipContentProps.appendTo,
  predefine: {
    type: definePropType(Array)
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
const colorPickerEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNil(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNil(val),
  activeChange: (val) => isString(val) || isNil(val),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent
};
const _hoisted_1$g = ["id", "aria-label", "aria-labelledby", "aria-description", "aria-disabled", "tabindex"];
const _sfc_main$s = defineComponent({
  ...{
    name: "ElColorPicker"
  },
  __name: "color-picker",
  props: colorPickerProps,
  emits: colorPickerEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useLocale();
    const ns = useNamespace("color");
    const { formItem } = useFormItem();
    const colorSize = useFormSize();
    const colorDisabled = useFormDisabled();
    const { valueOnClear, isEmptyValue } = useEmptyValues(props, null);
    const commonColor = useCommonColor(props, emit);
    const { inputId: buttonId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const popper = ref();
    const triggerRef = ref();
    const pickerPanelRef = ref();
    const showPicker = ref(false);
    const showPanelColor = ref(false);
    let shouldActiveChange = true;
    const { isFocused, handleFocus, handleBlur } = useFocusController(triggerRef, {
      disabled: colorDisabled,
      beforeBlur(event) {
        var _a;
        return (_a = popper.value) == null ? void 0 : _a.isFocusInsideContent(event);
      },
      afterBlur() {
        var _a;
        setShowPicker(false);
        resetColor();
        if (props.validateEvent) {
          (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => debugWarn());
        }
      }
    });
    const color = reactiveComputed(
      () => {
        var _a, _b;
        return (_b = (_a = pickerPanelRef.value) == null ? void 0 : _a.color) != null ? _b : commonColor.color;
      }
    );
    const panelProps = computed(
      () => pick(props, Object.keys(colorPickerPanelProps))
    );
    const displayedColor = computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return "transparent";
      }
      return displayedRgb(color, props.showAlpha);
    });
    const currentColor = computed(() => {
      return !props.modelValue && !showPanelColor.value ? "" : color.value;
    });
    const buttonAriaLabel = computed(() => {
      return !isLabeledByFormItem.value ? props.ariaLabel || t("el.colorpicker.defaultLabel") : void 0;
    });
    const buttonAriaLabelledby = computed(() => {
      return isLabeledByFormItem.value ? formItem == null ? void 0 : formItem.labelId : void 0;
    });
    const btnKls = computed(() => {
      return [
        ns.b("picker"),
        ns.is("disabled", colorDisabled.value),
        ns.bm("picker", colorSize.value),
        ns.is("focused", isFocused.value)
      ];
    });
    function displayedRgb(color2, showAlpha) {
      const { r, g, b, a } = color2.toRgb();
      return showAlpha ? `rgba(${r}, ${g}, ${b}, ${a})` : `rgb(${r}, ${g}, ${b})`;
    }
    function setShowPicker(value) {
      showPicker.value = value;
    }
    const debounceSetShowPicker = debounce(setShowPicker, 100, { leading: true });
    function show() {
      if (colorDisabled.value)
        return;
      setShowPicker(true);
    }
    function hide() {
      debounceSetShowPicker(false);
      resetColor();
    }
    function resetColor() {
      nextTick(() => {
        if (props.modelValue) {
          color.fromString(props.modelValue);
        } else {
          color.value = "";
          nextTick(() => {
            showPanelColor.value = false;
          });
        }
      });
    }
    function handleTrigger() {
      if (colorDisabled.value)
        return;
      if (showPicker.value) {
        resetColor();
      }
      debounceSetShowPicker(!showPicker.value);
    }
    function confirmValue() {
      const value = isEmptyValue(color.value) ? valueOnClear.value : color.value;
      emit(UPDATE_MODEL_EVENT, value);
      emit(CHANGE_EVENT, value);
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
      debounceSetShowPicker(false);
      nextTick(() => {
        const newColor = new Color({
          enableAlpha: props.showAlpha,
          format: props.colorFormat || "",
          value: props.modelValue
        });
        if (!color.compare(newColor)) {
          resetColor();
        }
      });
    }
    function clear() {
      debounceSetShowPicker(false);
      emit(UPDATE_MODEL_EVENT, valueOnClear.value);
      emit(CHANGE_EVENT, valueOnClear.value);
      if (props.modelValue !== valueOnClear.value && props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
      resetColor();
    }
    function handleShowTooltip() {
      var _a, _b;
      (_b = (_a = pickerPanelRef == null ? void 0 : pickerPanelRef.value) == null ? void 0 : _a.inputRef) == null ? void 0 : _b.focus();
    }
    function handleClickOutside() {
      if (!showPicker.value)
        return;
      hide();
      isFocused.value && focus();
    }
    function handleEsc(event) {
      event.preventDefault();
      event.stopPropagation();
      setShowPicker(false);
      resetColor();
    }
    function handleKeyDown(event) {
      const code = getEventCode(event);
      switch (code) {
        case EVENT_CODE.enter:
        case EVENT_CODE.numpadEnter:
        case EVENT_CODE.space:
          event.preventDefault();
          event.stopPropagation();
          show();
          break;
        case EVENT_CODE.esc:
          handleEsc(event);
          break;
      }
    }
    function focus() {
      triggerRef.value.focus();
    }
    function blur() {
      triggerRef.value.blur();
    }
    watch(
      () => currentColor.value,
      (val) => {
        shouldActiveChange && emit("activeChange", val);
        shouldActiveChange = true;
      }
    );
    watch(
      () => color.value,
      () => {
        if (!props.modelValue && !showPanelColor.value) {
          showPanelColor.value = true;
        }
      }
    );
    watch(
      () => props.modelValue,
      (newVal) => {
        if (!newVal) {
          showPanelColor.value = false;
        } else if (newVal && newVal !== color.value) {
          shouldActiveChange = false;
          color.fromString(newVal);
        }
      }
    );
    watch(
      () => showPicker.value,
      () => {
        pickerPanelRef.value && nextTick(pickerPanelRef.value.update);
      }
    );
    provide(ROOT_COMMON_COLOR_INJECTION_KEY, commonColor);
    __expose({
      color,
      show,
      hide,
      focus,
      blur
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTooltip), {
        ref_key: "popper",
        ref: popper,
        visible: showPicker.value,
        "show-arrow": false,
        "fallback-placements": ["bottom", "top", "right", "left"],
        offset: 0,
        "gpu-acceleration": false,
        "popper-class": [unref(ns).be("picker", "panel"), _ctx.popperClass],
        "popper-style": _ctx.popperStyle,
        "stop-popper-mouse-event": false,
        pure: "",
        loop: "",
        role: "dialog",
        effect: "light",
        trigger: "click",
        teleported: _ctx.teleported,
        transition: `${unref(ns).namespace.value}-zoom-in-top`,
        persistent: _ctx.persistent,
        "append-to": _ctx.appendTo,
        onShow: handleShowTooltip,
        onHide: _cache[2] || (_cache[2] = ($event) => setShowPicker(false))
      }, {
        content: withCtx(() => [
          withDirectives((openBlock(), createBlock(
            unref(ElColorPickerPanel),
            mergeProps({
              ref_key: "pickerPanelRef",
              ref: pickerPanelRef
            }, panelProps.value, {
              border: false,
              "validate-event": false,
              onKeydown: withKeys(handleEsc, ["esc"])
            }),
            {
              footer: withCtx(() => [
                createBaseVNode("div", null, [
                  createVNode(unref(ElButton), {
                    class: normalizeClass(unref(ns).be("footer", "link-btn")),
                    text: "",
                    size: "small",
                    onClick: clear
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(unref(t)("el.colorpicker.clear")),
                        1
                      )
                    ]),
                    _: 1
                  }, 8, ["class"]),
                  createVNode(unref(ElButton), {
                    plain: "",
                    size: "small",
                    class: normalizeClass(unref(ns).be("footer", "btn")),
                    onClick: confirmValue
                  }, {
                    default: withCtx(() => [
                      createTextVNode(
                        toDisplayString(unref(t)("el.colorpicker.confirm")),
                        1
                      )
                    ]),
                    _: 1
                  }, 8, ["class"])
                ])
              ]),
              _: 1
            },
            16
          )), [
            [unref(ClickOutside), handleClickOutside, triggerRef.value]
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", mergeProps({
            id: unref(buttonId),
            ref_key: "triggerRef",
            ref: triggerRef
          }, _ctx.$attrs, {
            class: btnKls.value,
            role: "button",
            "aria-label": buttonAriaLabel.value,
            "aria-labelledby": buttonAriaLabelledby.value,
            "aria-description": unref(t)("el.colorpicker.description", { color: _ctx.modelValue || "" }),
            "aria-disabled": unref(colorDisabled),
            tabindex: unref(colorDisabled) ? void 0 : _ctx.tabindex,
            onKeydown: handleKeyDown,
            onFocus: _cache[0] || (_cache[0] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
            onBlur: _cache[1] || (_cache[1] = (...args) => unref(handleBlur) && unref(handleBlur)(...args))
          }), [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(ns).be("picker", "trigger")),
                onClick: handleTrigger
              },
              [
                createBaseVNode(
                  "span",
                  {
                    class: normalizeClass([unref(ns).be("picker", "color"), unref(ns).is("alpha", _ctx.showAlpha)])
                  },
                  [
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass(unref(ns).be("picker", "color-inner")),
                        style: normalizeStyle({
                          backgroundColor: displayedColor.value
                        })
                      },
                      [
                        withDirectives(createVNode(unref(ElIcon), {
                          class: normalizeClass([unref(ns).be("picker", "icon"), unref(ns).is("icon-arrow-down")])
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(arrow_down_default))
                          ]),
                          _: 1
                        }, 8, ["class"]), [
                          [vShow, _ctx.modelValue || showPanelColor.value]
                        ]),
                        withDirectives(createVNode(unref(ElIcon), {
                          class: normalizeClass([unref(ns).be("picker", "empty"), unref(ns).is("icon-close")])
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(close_default))
                          ]),
                          _: 1
                        }, 8, ["class"]), [
                          [vShow, !_ctx.modelValue && !showPanelColor.value]
                        ])
                      ],
                      6
                    )
                  ],
                  2
                )
              ],
              2
            )
          ], 16, _hoisted_1$g)
        ]),
        _: 1
      }, 8, ["visible", "popper-class", "popper-style", "teleported", "transition", "persistent", "append-to"]);
    };
  }
});
var ColorPicker = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/color-picker/src/color-picker.vue"]]);
const ElColorPicker = withInstall(ColorPicker);
const _hoisted_1$f = {
  viewBox: "0 0 79 86",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
};
const _hoisted_2$c = ["id"];
const _hoisted_3$8 = ["stop-color"];
const _hoisted_4$5 = ["stop-color"];
const _hoisted_5$5 = ["id"];
const _hoisted_6$5 = ["stop-color"];
const _hoisted_7$5 = ["stop-color"];
const _hoisted_8$4 = ["id"];
const _hoisted_9$4 = {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
};
const _hoisted_10$3 = { transform: "translate(-1268.000000, -535.000000)" };
const _hoisted_11$3 = { transform: "translate(1268.000000, 535.000000)" };
const _hoisted_12$3 = ["fill"];
const _hoisted_13$2 = ["fill"];
const _hoisted_14$1 = { transform: "translate(34.500000, 31.500000) scale(-1, 1) rotate(-25.000000) translate(-34.500000, -31.500000) translate(7.000000, 10.000000)" };
const _hoisted_15$1 = ["fill"];
const _hoisted_16$1 = ["fill"];
const _hoisted_17$1 = ["fill"];
const _hoisted_18$1 = ["fill"];
const _hoisted_19$1 = ["fill"];
const _hoisted_20$1 = { transform: "translate(53.000000, 45.000000)" };
const _hoisted_21$1 = ["fill", "xlink:href"];
const _hoisted_22$1 = ["fill", "mask"];
const _hoisted_23$1 = ["fill"];
const _sfc_main$r = defineComponent({
  ...{
    name: "ImgEmpty"
  },
  __name: "img-empty",
  setup(__props) {
    const ns = useNamespace("empty");
    const id = useId();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", _hoisted_1$f, [
        createBaseVNode("defs", null, [
          createBaseVNode("linearGradient", {
            id: `linearGradient-1-${unref(id)}`,
            x1: "38.8503086%",
            y1: "0%",
            x2: "61.1496914%",
            y2: "100%"
          }, [
            createBaseVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-1")})`,
              offset: "0%"
            }, null, 8, _hoisted_3$8),
            createBaseVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-4")})`,
              offset: "100%"
            }, null, 8, _hoisted_4$5)
          ], 8, _hoisted_2$c),
          createBaseVNode("linearGradient", {
            id: `linearGradient-2-${unref(id)}`,
            x1: "0%",
            y1: "9.5%",
            x2: "100%",
            y2: "90.5%"
          }, [
            createBaseVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-1")})`,
              offset: "0%"
            }, null, 8, _hoisted_6$5),
            createBaseVNode("stop", {
              "stop-color": `var(${unref(ns).cssVarBlockName("fill-color-6")})`,
              offset: "100%"
            }, null, 8, _hoisted_7$5)
          ], 8, _hoisted_5$5),
          createBaseVNode("rect", {
            id: `path-3-${unref(id)}`,
            x: "0",
            y: "0",
            width: "17",
            height: "36"
          }, null, 8, _hoisted_8$4)
        ]),
        createBaseVNode("g", _hoisted_9$4, [
          createBaseVNode("g", _hoisted_10$3, [
            createBaseVNode("g", _hoisted_11$3, [
              createBaseVNode("path", {
                d: "M39.5,86 C61.3152476,86 79,83.9106622 79,81.3333333 C79,78.7560045 57.3152476,78 35.5,78 C13.6847524,78 0,78.7560045 0,81.3333333 C0,83.9106622 17.6847524,86 39.5,86 Z",
                fill: `var(${unref(ns).cssVarBlockName("fill-color-3")})`
              }, null, 8, _hoisted_12$3),
              createBaseVNode("polygon", {
                fill: `var(${unref(ns).cssVarBlockName("fill-color-7")})`,
                transform: "translate(27.500000, 51.500000) scale(1, -1) translate(-27.500000, -51.500000) ",
                points: "13 58 53 58 42 45 2 45"
              }, null, 8, _hoisted_13$2),
              createBaseVNode("g", _hoisted_14$1, [
                createBaseVNode("polygon", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-7")})`,
                  transform: "translate(11.500000, 5.000000) scale(1, -1) translate(-11.500000, -5.000000) ",
                  points: "2.84078316e-14 3 18 3 23 7 5 7"
                }, null, 8, _hoisted_15$1),
                createBaseVNode("polygon", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-5")})`,
                  points: "-3.69149156e-15 7 38 7 38 43 -3.69149156e-15 43"
                }, null, 8, _hoisted_16$1),
                createBaseVNode("rect", {
                  fill: `url(#linearGradient-1-${unref(id)})`,
                  transform: "translate(46.500000, 25.000000) scale(-1, 1) translate(-46.500000, -25.000000) ",
                  x: "38",
                  y: "7",
                  width: "17",
                  height: "36"
                }, null, 8, _hoisted_17$1),
                createBaseVNode("polygon", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-2")})`,
                  transform: "translate(39.500000, 3.500000) scale(-1, 1) translate(-39.500000, -3.500000) ",
                  points: "24 7 41 7 55 -3.63806207e-12 38 -3.63806207e-12"
                }, null, 8, _hoisted_18$1)
              ]),
              createBaseVNode("rect", {
                fill: `url(#linearGradient-2-${unref(id)})`,
                x: "13",
                y: "45",
                width: "40",
                height: "36"
              }, null, 8, _hoisted_19$1),
              createBaseVNode("g", _hoisted_20$1, [
                createBaseVNode("use", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-8")})`,
                  transform: "translate(8.500000, 18.000000) scale(-1, 1) translate(-8.500000, -18.000000) ",
                  "xlink:href": `#path-3-${unref(id)}`
                }, null, 8, _hoisted_21$1),
                createBaseVNode("polygon", {
                  fill: `var(${unref(ns).cssVarBlockName("fill-color-9")})`,
                  mask: `url(#mask-4-${unref(id)})`,
                  transform: "translate(12.000000, 9.000000) scale(-1, 1) translate(-12.000000, -9.000000) ",
                  points: "7 0 24 0 20 18 7 16.5"
                }, null, 8, _hoisted_22$1)
              ]),
              createBaseVNode("polygon", {
                fill: `var(${unref(ns).cssVarBlockName("fill-color-2")})`,
                transform: "translate(66.000000, 51.500000) scale(-1, 1) translate(-66.000000, -51.500000) ",
                points: "62 45 79 45 70 58 53 58"
              }, null, 8, _hoisted_23$1)
            ])
          ])
        ])
      ]);
    };
  }
});
var ImgEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/img-empty.vue"]]);
const emptyProps = buildProps({
  image: {
    type: String,
    default: ""
  },
  imageSize: Number,
  description: {
    type: String,
    default: ""
  }
});
const _hoisted_1$e = ["src"];
const _hoisted_2$b = { key: 1 };
const _sfc_main$q = defineComponent({
  ...{
    name: "ElEmpty"
  },
  __name: "empty",
  props: emptyProps,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const ns = useNamespace("empty");
    const emptyDescription = computed(
      () => props.description || t("el.table.emptyText")
    );
    const imageStyle = computed(() => ({
      width: addUnit(props.imageSize)
    }));
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass(unref(ns).b())
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("image")),
              style: normalizeStyle(imageStyle.value)
            },
            [
              _ctx.image ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: _ctx.image,
                ondragstart: "return false"
              }, null, 8, _hoisted_1$e)) : renderSlot(_ctx.$slots, "image", { key: 1 }, () => [
                createVNode(ImgEmpty)
              ])
            ],
            6
          ),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("description"))
            },
            [
              _ctx.$slots.description ? renderSlot(_ctx.$slots, "description", { key: 0 }) : (openBlock(), createElementBlock(
                "p",
                _hoisted_2$b,
                toDisplayString(emptyDescription.value),
                1
              ))
            ],
            2
          ),
          _ctx.$slots.default ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass(unref(ns).e("bottom"))
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            2
          )) : createCommentVNode("v-if", true)
        ],
        2
      );
    };
  }
});
var Empty = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/empty/src/empty.vue"]]);
const ElEmpty = withInstall(Empty);
let SubMenu$1 = class SubMenu {
  constructor(parent, domNode) {
    this.parent = parent;
    this.domNode = domNode;
    this.subIndex = 0;
    this.subIndex = 0;
    this.init();
  }
  init() {
    this.subMenuItems = this.domNode.querySelectorAll("li");
    this.addListeners();
  }
  gotoSubIndex(idx) {
    if (idx === this.subMenuItems.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = this.subMenuItems.length - 1;
    }
    this.subMenuItems[idx].focus();
    this.subIndex = idx;
  }
  addListeners() {
    const parentNode = this.parent.domNode;
    Array.prototype.forEach.call(this.subMenuItems, (el) => {
      el.addEventListener("keydown", (event) => {
        const code = getEventCode(event);
        let prevDef = false;
        switch (code) {
          case EVENT_CODE.down: {
            this.gotoSubIndex(this.subIndex + 1);
            prevDef = true;
            break;
          }
          case EVENT_CODE.up: {
            this.gotoSubIndex(this.subIndex - 1);
            prevDef = true;
            break;
          }
          case EVENT_CODE.tab: {
            triggerEvent(parentNode, "mouseleave");
            break;
          }
          case EVENT_CODE.enter:
          case EVENT_CODE.numpadEnter:
          case EVENT_CODE.space: {
            prevDef = true;
            event.currentTarget.click();
            break;
          }
        }
        if (prevDef) {
          event.preventDefault();
          event.stopPropagation();
        }
        return false;
      });
    });
  }
};
let MenuItem$1 = class MenuItem {
  constructor(domNode, namespace) {
    this.domNode = domNode;
    this.submenu = null;
    this.submenu = null;
    this.init(namespace);
  }
  init(namespace) {
    this.domNode.setAttribute("tabindex", "0");
    const menuChild = this.domNode.querySelector(`.${namespace}-menu`);
    if (menuChild) {
      this.submenu = new SubMenu$1(this, menuChild);
    }
    this.addListeners();
  }
  addListeners() {
    this.domNode.addEventListener("keydown", (event) => {
      const code = getEventCode(event);
      let prevDef = false;
      switch (code) {
        case EVENT_CODE.down: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(0);
          prevDef = true;
          break;
        }
        case EVENT_CODE.up: {
          triggerEvent(event.currentTarget, "mouseenter");
          this.submenu && this.submenu.gotoSubIndex(this.submenu.subMenuItems.length - 1);
          prevDef = true;
          break;
        }
        case EVENT_CODE.tab: {
          triggerEvent(event.currentTarget, "mouseleave");
          break;
        }
        case EVENT_CODE.enter:
        case EVENT_CODE.numpadEnter:
        case EVENT_CODE.space: {
          prevDef = true;
          event.currentTarget.click();
          break;
        }
      }
      if (prevDef) {
        event.preventDefault();
      }
    });
  }
};
let Menu$1 = class Menu {
  constructor(domNode, namespace) {
    this.domNode = domNode;
    this.init(namespace);
  }
  init(namespace) {
    const menuChildren = this.domNode.childNodes;
    Array.from(menuChildren).forEach((child) => {
      if (child.nodeType === 1) {
        new MenuItem$1(child, namespace);
      }
    });
  }
};
const _sfc_main$p = defineComponent({
  ...{
    name: "ElMenuCollapseTransition"
  },
  __name: "menu-collapse-transition",
  setup(__props) {
    const ns = useNamespace("menu");
    const listeners = {
      onBeforeEnter: (el) => el.style.opacity = "0.2",
      onEnter(el, done) {
        addClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "1";
        done();
      },
      onAfterEnter(el) {
        removeClass(el, `${ns.namespace.value}-opacity-transition`);
        el.style.opacity = "";
      },
      onBeforeLeave(el) {
        if (!el.dataset)
          el.dataset = {};
        if (hasClass(el, ns.m("collapse"))) {
          removeClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          addClass(el, ns.m("collapse"));
        } else {
          addClass(el, ns.m("collapse"));
          el.dataset.oldOverflow = el.style.overflow;
          el.dataset.scrollWidth = el.clientWidth.toString();
          removeClass(el, ns.m("collapse"));
        }
        el.style.width = `${el.scrollWidth}px`;
        el.style.overflow = "hidden";
      },
      onLeave(el) {
        addClass(el, "horizontal-collapse-transition");
        el.style.width = `${el.dataset.scrollWidth}px`;
      }
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(
        Transition,
        mergeProps({ mode: "out-in" }, listeners),
        {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        },
        16
      );
    };
  }
});
var ElMenuCollapseTransition = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);
function useMenu(instance, currentIndex) {
  const indexPath = computed(() => {
    let parent = instance.parent;
    const path2 = [currentIndex.value];
    while (parent.type.name !== "ElMenu") {
      if (parent.props.index) {
        path2.unshift(parent.props.index);
      }
      parent = parent.parent;
    }
    return path2;
  });
  const parentMenu = computed(() => {
    let parent = instance.parent;
    while (parent && !["ElMenu", "ElSubMenu"].includes(parent.type.name)) {
      parent = parent.parent;
    }
    return parent;
  });
  return {
    parentMenu,
    indexPath
  };
}
function useMenuColor(props) {
  const menuBarColor = computed(() => {
    const color = props.backgroundColor;
    return color ? new TinyColor(color).shade(20).toString() : "";
  });
  return menuBarColor;
}
const useMenuCssVar = (props, level) => {
  const ns = useNamespace("menu");
  return computed(
    () => ns.cssVarBlock({
      "text-color": props.textColor || "",
      "hover-text-color": props.textColor || "",
      "bg-color": props.backgroundColor || "",
      "hover-bg-color": useMenuColor(props).value || "",
      "active-color": props.activeTextColor || "",
      level: `${level}`
    })
  );
};
const MENU_INJECTION_KEY = "rootMenu";
const SUB_MENU_INJECTION_KEY = "subMenu:";
const subMenuProps = buildProps({
  index: {
    type: String,
    required: true
  },
  showTimeout: Number,
  hideTimeout: Number,
  popperClass: String,
  popperStyle: {
    type: definePropType([String, Object])
  },
  disabled: Boolean,
  teleported: {
    type: Boolean,
    default: void 0
  },
  popperOffset: Number,
  expandCloseIcon: {
    type: iconPropType
  },
  expandOpenIcon: {
    type: iconPropType
  },
  collapseCloseIcon: {
    type: iconPropType
  },
  collapseOpenIcon: {
    type: iconPropType
  }
});
const COMPONENT_NAME$1 = "ElSubMenu";
var SubMenu2 = defineComponent({
  name: COMPONENT_NAME$1,
  props: subMenuProps,
  setup(props, { slots, expose }) {
    const instance = getCurrentInstance();
    const { indexPath, parentMenu } = useMenu(
      instance,
      computed(() => props.index)
    );
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    const rootMenu = inject(MENU_INJECTION_KEY);
    if (!rootMenu)
      throwError(COMPONENT_NAME$1, "can not inject root menu");
    const subMenu = inject(
      `${SUB_MENU_INJECTION_KEY}${parentMenu.value.uid}`
    );
    if (!subMenu)
      throwError(COMPONENT_NAME$1, "can not inject sub menu");
    const items = ref({});
    const subMenus = ref({});
    let timeout;
    const mouseInChild = ref(false);
    const verticalTitleRef = ref();
    const vPopper = ref();
    const isFirstLevel = computed(() => subMenu.level === 0);
    const currentPlacement = computed(
      () => mode.value === "horizontal" && isFirstLevel.value ? "bottom-start" : "right-start"
    );
    const subMenuTitleIcon = computed(() => {
      const isExpandedMode = mode.value === "horizontal" && isFirstLevel.value || mode.value === "vertical" && !rootMenu.props.collapse;
      if (isExpandedMode) {
        if (props.expandCloseIcon && props.expandOpenIcon) {
          return opened.value ? props.expandOpenIcon : props.expandCloseIcon;
        }
        return arrow_down_default;
      } else {
        if (props.collapseCloseIcon && props.collapseOpenIcon) {
          return opened.value ? props.collapseOpenIcon : props.collapseCloseIcon;
        }
        return arrow_right_default;
      }
    });
    const appendToBody = computed(() => {
      const value = props.teleported;
      return isUndefined(value) ? isFirstLevel.value : value;
    });
    const menuTransitionName = computed(
      () => rootMenu.props.collapse ? `${nsMenu.namespace.value}-zoom-in-left` : `${nsMenu.namespace.value}-zoom-in-top`
    );
    const fallbackPlacements = computed(
      () => mode.value === "horizontal" && isFirstLevel.value ? [
        "bottom-start",
        "bottom-end",
        "top-start",
        "top-end",
        "right-start",
        "left-start"
      ] : [
        "right-start",
        "right",
        "right-end",
        "left-start",
        "bottom-start",
        "bottom-end",
        "top-start",
        "top-end"
      ]
    );
    const opened = computed(() => rootMenu.openedMenus.includes(props.index));
    const active = computed(
      () => [...Object.values(items.value), ...Object.values(subMenus.value)].some(
        ({ active: active2 }) => active2
      )
    );
    const mode = computed(() => rootMenu.props.mode);
    const persistent = computed(() => rootMenu.props.persistent);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const ulStyle = useMenuCssVar(rootMenu.props, subMenu.level + 1);
    const subMenuPopperOffset = computed(
      () => {
        var _a;
        return (_a = props.popperOffset) != null ? _a : rootMenu.props.popperOffset;
      }
    );
    const subMenuPopperClass = computed(
      () => {
        var _a;
        return (_a = props.popperClass) != null ? _a : rootMenu.props.popperClass;
      }
    );
    const subMenuPopperStyle = computed(
      () => {
        var _a;
        return (_a = props.popperStyle) != null ? _a : rootMenu.props.popperStyle;
      }
    );
    const subMenuShowTimeout = computed(
      () => {
        var _a;
        return (_a = props.showTimeout) != null ? _a : rootMenu.props.showTimeout;
      }
    );
    const subMenuHideTimeout = computed(
      () => {
        var _a;
        return (_a = props.hideTimeout) != null ? _a : rootMenu.props.hideTimeout;
      }
    );
    const doDestroy = () => {
      var _a, _b, _c;
      return (_c = (_b = (_a = vPopper.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.popperInstanceRef) == null ? void 0 : _c.destroy();
    };
    const handleCollapseToggle = (value) => {
      if (!value) {
        doDestroy();
      }
    };
    const handleClick = () => {
      if (rootMenu.props.menuTrigger === "hover" && rootMenu.props.mode === "horizontal" || rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled)
        return;
      rootMenu.handleSubMenuClick({
        index: props.index,
        indexPath: indexPath.value,
        active: active.value
      });
    };
    const handleMouseenter = (event, showTimeout = subMenuShowTimeout.value) => {
      var _a;
      if (event.type === "focus")
        return;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical" || props.disabled) {
        subMenu.mouseInChild.value = true;
        return;
      }
      subMenu.mouseInChild.value = true;
      timeout == null ? void 0 : timeout();
      ({ stop: timeout } = useTimeoutFn(() => {
        rootMenu.openMenu(props.index, indexPath.value);
      }, showTimeout));
      if (appendToBody.value) {
        (_a = parentMenu.value.vnode.el) == null ? void 0 : _a.dispatchEvent(new MouseEvent("mouseenter"));
      }
      if (event.type === "mouseenter" && event.target) {
        nextTick(() => {
          focusElement(event.target, { preventScroll: true });
        });
      }
    };
    const handleMouseleave = (deepDispatch = false) => {
      var _a;
      if (rootMenu.props.menuTrigger === "click" && rootMenu.props.mode === "horizontal" || !rootMenu.props.collapse && rootMenu.props.mode === "vertical") {
        subMenu.mouseInChild.value = false;
        return;
      }
      timeout == null ? void 0 : timeout();
      subMenu.mouseInChild.value = false;
      ({ stop: timeout } = useTimeoutFn(
        () => !mouseInChild.value && rootMenu.closeMenu(props.index, indexPath.value),
        subMenuHideTimeout.value
      ));
      if (appendToBody.value && deepDispatch) {
        (_a = subMenu.handleMouseleave) == null ? void 0 : _a.call(subMenu, true);
      }
    };
    watch(
      () => rootMenu.props.collapse,
      (value) => handleCollapseToggle(Boolean(value))
    );
    {
      const addSubMenu = (item2) => {
        subMenus.value[item2.index] = item2;
      };
      const removeSubMenu = (item2) => {
        delete subMenus.value[item2.index];
      };
      provide(`${SUB_MENU_INJECTION_KEY}${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        handleMouseleave,
        mouseInChild,
        level: subMenu.level + 1
      });
    }
    expose({
      opened
    });
    onMounted(() => {
      rootMenu.addSubMenu(item);
      subMenu.addSubMenu(item);
    });
    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeSubMenu(item);
    });
    return () => {
      var _a;
      const titleTag = [
        (_a = slots.title) == null ? void 0 : _a.call(slots),
        h(
          ElIcon,
          {
            class: nsSubMenu.e("icon-arrow"),
            style: {
              transform: opened.value ? props.expandCloseIcon && props.expandOpenIcon || props.collapseCloseIcon && props.collapseOpenIcon && rootMenu.props.collapse ? "none" : "rotateZ(180deg)" : "none"
            }
          },
          {
            default: () => isString(subMenuTitleIcon.value) ? h(instance.appContext.components[subMenuTitleIcon.value]) : h(subMenuTitleIcon.value)
          }
        )
      ];
      const child = rootMenu.isMenuPopup ? h(
        ElTooltip,
        {
          ref: vPopper,
          visible: opened.value,
          effect: "light",
          pure: true,
          offset: subMenuPopperOffset.value,
          showArrow: false,
          persistent: persistent.value,
          popperClass: subMenuPopperClass.value,
          popperStyle: subMenuPopperStyle.value,
          placement: currentPlacement.value,
          teleported: appendToBody.value,
          fallbackPlacements: fallbackPlacements.value,
          transition: menuTransitionName.value,
          gpuAcceleration: false
        },
        {
          content: () => {
            var _a2;
            return h(
              "div",
              {
                class: [
                  nsMenu.m(mode.value),
                  nsMenu.m("popup-container"),
                  subMenuPopperClass.value
                ],
                onMouseenter: (evt) => handleMouseenter(evt, 100),
                onMouseleave: () => handleMouseleave(true),
                onFocus: (evt) => handleMouseenter(evt, 100)
              },
              [
                h(
                  "ul",
                  {
                    class: [
                      nsMenu.b(),
                      nsMenu.m("popup"),
                      nsMenu.m(`popup-${currentPlacement.value}`)
                    ],
                    style: ulStyle.value
                  },
                  [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]
                )
              ]
            );
          },
          default: () => h(
            "div",
            {
              class: nsSubMenu.e("title"),
              onClick: handleClick
            },
            titleTag
          )
        }
      ) : h(Fragment, {}, [
        h(
          "div",
          {
            class: nsSubMenu.e("title"),
            ref: verticalTitleRef,
            onClick: handleClick
          },
          titleTag
        ),
        h(
          ElCollapseTransition,
          {},
          {
            default: () => {
              var _a2;
              return withDirectives(
                h(
                  "ul",
                  {
                    role: "menu",
                    class: [nsMenu.b(), nsMenu.m("inline")],
                    style: ulStyle.value
                  },
                  [(_a2 = slots.default) == null ? void 0 : _a2.call(slots)]
                ),
                [[vShow, opened.value]]
              );
            }
          }
        )
      ]);
      return h(
        "li",
        {
          class: [
            nsSubMenu.b(),
            nsSubMenu.is("active", active.value),
            nsSubMenu.is("opened", opened.value),
            nsSubMenu.is("disabled", props.disabled)
          ],
          role: "menuitem",
          ariaHaspopup: true,
          ariaExpanded: opened.value,
          onMouseenter: handleMouseenter,
          onMouseleave: () => handleMouseleave(),
          onFocus: handleMouseenter
        },
        [child]
      );
    };
  }
});
const menuProps = buildProps({
  mode: {
    type: String,
    values: ["horizontal", "vertical"],
    default: "vertical"
  },
  defaultActive: {
    type: String,
    default: ""
  },
  defaultOpeneds: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  uniqueOpened: Boolean,
  router: Boolean,
  menuTrigger: {
    type: String,
    values: ["hover", "click"],
    default: "hover"
  },
  collapse: Boolean,
  backgroundColor: String,
  textColor: String,
  activeTextColor: String,
  closeOnClickOutside: Boolean,
  collapseTransition: {
    type: Boolean,
    default: true
  },
  ellipsis: {
    type: Boolean,
    default: true
  },
  popperOffset: {
    type: Number,
    default: 6
  },
  ellipsisIcon: {
    type: iconPropType,
    default: () => more_default
  },
  popperEffect: {
    type: definePropType(String),
    default: "dark"
  },
  popperClass: String,
  popperStyle: {
    type: definePropType([String, Object])
  },
  showTimeout: {
    type: Number,
    default: 300
  },
  hideTimeout: {
    type: Number,
    default: 300
  },
  persistent: {
    type: Boolean,
    default: true
  }
});
const checkIndexPath = (indexPath) => isArray(indexPath) && indexPath.every((path2) => isString(path2));
const menuEmits = {
  close: (index2, indexPath) => isString(index2) && checkIndexPath(indexPath),
  open: (index2, indexPath) => isString(index2) && checkIndexPath(indexPath),
  select: (index2, indexPath, item, routerResult) => isString(index2) && checkIndexPath(indexPath) && isObject(item) && (isUndefined(routerResult) || routerResult instanceof Promise)
};
const DEFAULT_MORE_ITEM_WIDTH = 64;
var Menu2 = defineComponent({
  name: "ElMenu",
  props: menuProps,
  emits: menuEmits,
  setup(props, { emit, slots, expose }) {
    const instance = getCurrentInstance();
    const router2 = instance.appContext.config.globalProperties.$router;
    const menu = ref();
    const subMenu = ref();
    const nsMenu = useNamespace("menu");
    const nsSubMenu = useNamespace("sub-menu");
    let moreItemWidth = DEFAULT_MORE_ITEM_WIDTH;
    const sliceIndex = ref(-1);
    const openedMenus = ref(
      props.defaultOpeneds && !props.collapse ? props.defaultOpeneds.slice(0) : []
    );
    const activeIndex = ref(props.defaultActive);
    const items = ref({});
    const subMenus = ref({});
    const isMenuPopup = computed(
      () => props.mode === "horizontal" || props.mode === "vertical" && props.collapse
    );
    const initMenu = () => {
      const activeItem = activeIndex.value && items.value[activeIndex.value];
      if (!activeItem || props.mode === "horizontal" || props.collapse)
        return;
      const indexPath = activeItem.indexPath;
      indexPath.forEach((index2) => {
        const subMenu2 = subMenus.value[index2];
        subMenu2 && openMenu(index2, subMenu2.indexPath);
      });
    };
    const openMenu = (index2, indexPath) => {
      if (openedMenus.value.includes(index2))
        return;
      if (props.uniqueOpened) {
        openedMenus.value = openedMenus.value.filter(
          (index22) => indexPath.includes(index22)
        );
      }
      openedMenus.value.push(index2);
      emit("open", index2, indexPath);
    };
    const close = (index2) => {
      const i = openedMenus.value.indexOf(index2);
      if (i !== -1) {
        openedMenus.value.splice(i, 1);
      }
    };
    const closeMenu = (index2, indexPath) => {
      close(index2);
      emit("close", index2, indexPath);
    };
    const handleSubMenuClick = ({
      index: index2,
      indexPath
    }) => {
      const isOpened = openedMenus.value.includes(index2);
      isOpened ? closeMenu(index2, indexPath) : openMenu(index2, indexPath);
    };
    const handleMenuItemClick = (menuItem) => {
      if (props.mode === "horizontal" || props.collapse) {
        openedMenus.value = [];
      }
      const { index: index2, indexPath } = menuItem;
      if (isNil(index2) || isNil(indexPath))
        return;
      if (props.router && router2) {
        const route = menuItem.route || index2;
        const routerResult = router2.push(route).then((res) => {
          if (!res)
            activeIndex.value = index2;
          return res;
        });
        emit(
          "select",
          index2,
          indexPath,
          { index: index2, indexPath, route },
          routerResult
        );
      } else {
        activeIndex.value = index2;
        emit("select", index2, indexPath, { index: index2, indexPath });
      }
    };
    const updateActiveIndex = (val) => {
      var _a;
      const itemsInData = items.value;
      const item = itemsInData[val] || activeIndex.value && itemsInData[activeIndex.value] || itemsInData[props.defaultActive];
      activeIndex.value = (_a = item == null ? void 0 : item.index) != null ? _a : val;
    };
    const calcMenuItemWidth = (menuItem) => {
      const computedStyle = getComputedStyle(menuItem);
      const marginLeft = Number.parseInt(computedStyle.marginLeft, 10);
      const marginRight = Number.parseInt(computedStyle.marginRight, 10);
      return menuItem.offsetWidth + marginLeft + marginRight || 0;
    };
    const calcSliceIndex = () => {
      if (!menu.value)
        return -1;
      const items2 = Array.from(menu.value.childNodes).filter(
        (item) => item.nodeName !== "#comment" && (item.nodeName !== "#text" || item.nodeValue)
      );
      const computedMenuStyle = getComputedStyle(menu.value);
      const paddingLeft = Number.parseInt(computedMenuStyle.paddingLeft, 10);
      const paddingRight = Number.parseInt(computedMenuStyle.paddingRight, 10);
      const menuWidth = menu.value.clientWidth - paddingLeft - paddingRight;
      let calcWidth = 0;
      let sliceIndex2 = 0;
      items2.forEach((item, index2) => {
        calcWidth += calcMenuItemWidth(item);
        if (calcWidth <= menuWidth - moreItemWidth) {
          sliceIndex2 = index2 + 1;
        }
      });
      return sliceIndex2 === items2.length ? -1 : sliceIndex2;
    };
    const getIndexPath = (index2) => subMenus.value[index2].indexPath;
    const debounce2 = (fn, wait = 33.34) => {
      let timer;
      return () => {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          fn();
        }, wait);
      };
    };
    let isFirstTimeRender = true;
    const handleResize = () => {
      const el = unrefElement(subMenu);
      if (el)
        moreItemWidth = calcMenuItemWidth(el) || DEFAULT_MORE_ITEM_WIDTH;
      if (sliceIndex.value === calcSliceIndex())
        return;
      const callback = () => {
        sliceIndex.value = -1;
        nextTick(() => {
          sliceIndex.value = calcSliceIndex();
        });
      };
      isFirstTimeRender ? callback() : debounce2(callback)();
      isFirstTimeRender = false;
    };
    watch(
      () => props.defaultActive,
      (currentActive) => {
        if (!items.value[currentActive]) {
          activeIndex.value = "";
        }
        updateActiveIndex(currentActive);
      }
    );
    watch(
      () => props.collapse,
      (value) => {
        if (value)
          openedMenus.value = [];
      }
    );
    watch(items.value, initMenu);
    let resizeStopper;
    watchEffect(() => {
      if (props.mode === "horizontal" && props.ellipsis)
        resizeStopper = useResizeObserver(menu, handleResize).stop;
      else
        resizeStopper == null ? void 0 : resizeStopper();
    });
    const mouseInChild = ref(false);
    {
      const addSubMenu = (item) => {
        subMenus.value[item.index] = item;
      };
      const removeSubMenu = (item) => {
        delete subMenus.value[item.index];
      };
      const addMenuItem = (item) => {
        items.value[item.index] = item;
      };
      const removeMenuItem = (item) => {
        delete items.value[item.index];
      };
      provide(
        MENU_INJECTION_KEY,
        reactive({
          props,
          openedMenus,
          items,
          subMenus,
          activeIndex,
          isMenuPopup,
          addMenuItem,
          removeMenuItem,
          addSubMenu,
          removeSubMenu,
          openMenu,
          closeMenu,
          handleMenuItemClick,
          handleSubMenuClick
        })
      );
      provide(`${SUB_MENU_INJECTION_KEY}${instance.uid}`, {
        addSubMenu,
        removeSubMenu,
        mouseInChild,
        level: 0
      });
    }
    onMounted(() => {
      if (props.mode === "horizontal") {
        new Menu$1(instance.vnode.el, nsMenu.namespace.value);
      }
    });
    {
      const open = (index2) => {
        const { indexPath } = subMenus.value[index2];
        indexPath.forEach((i) => openMenu(i, indexPath));
      };
      expose({
        open,
        close,
        updateActiveIndex,
        handleResize
      });
    }
    const ulStyle = useMenuCssVar(props, 0);
    return () => {
      var _a, _b;
      let slot = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [];
      const vShowMore = [];
      if (props.mode === "horizontal" && menu.value) {
        const originalSlot = flattedChildren(slot).filter((vnode) => {
          return (vnode == null ? void 0 : vnode.shapeFlag) !== 8;
        });
        const slotDefault = sliceIndex.value === -1 ? originalSlot : originalSlot.slice(0, sliceIndex.value);
        const slotMore = sliceIndex.value === -1 ? [] : originalSlot.slice(sliceIndex.value);
        if ((slotMore == null ? void 0 : slotMore.length) && props.ellipsis) {
          slot = slotDefault;
          vShowMore.push(
            h(
              SubMenu2,
              {
                ref: subMenu,
                index: "sub-menu-more",
                class: nsSubMenu.e("hide-arrow"),
                popperOffset: props.popperOffset
              },
              {
                title: () => h(
                  ElIcon,
                  {
                    class: nsSubMenu.e("icon-more")
                  },
                  {
                    default: () => h(props.ellipsisIcon)
                  }
                ),
                default: () => slotMore
              }
            )
          );
        }
      }
      const directives = props.closeOnClickOutside ? [
        [
          ClickOutside,
          () => {
            if (!openedMenus.value.length)
              return;
            if (!mouseInChild.value) {
              openedMenus.value.forEach(
                (openedMenu) => emit("close", openedMenu, getIndexPath(openedMenu))
              );
              openedMenus.value = [];
            }
          }
        ]
      ] : [];
      const vMenu = withDirectives(
        h(
          "ul",
          {
            key: String(props.collapse),
            role: "menubar",
            ref: menu,
            style: ulStyle.value,
            class: {
              [nsMenu.b()]: true,
              [nsMenu.m(props.mode)]: true,
              [nsMenu.m("collapse")]: props.collapse
            }
          },
          [...slot, ...vShowMore]
        ),
        directives
      );
      if (props.collapseTransition && props.mode === "vertical") {
        return h(ElMenuCollapseTransition, () => vMenu);
      }
      return vMenu;
    };
  }
});
const menuItemProps = buildProps({
  index: {
    type: definePropType([String, null]),
    default: null
  },
  route: {
    type: definePropType([String, Object])
  },
  disabled: Boolean
});
const menuItemEmits = {
  click: (item) => isString(item.index) && isArray(item.indexPath)
};
const COMPONENT_NAME = "ElMenuItem";
const _sfc_main$o = defineComponent({
  ...{
    name: COMPONENT_NAME
  },
  __name: "menu-item",
  props: menuItemProps,
  emits: menuItemEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    isPropAbsent(props.index) && debugWarn();
    const instance = getCurrentInstance();
    const rootMenu = inject(MENU_INJECTION_KEY);
    const nsMenu = useNamespace("menu");
    const nsMenuItem = useNamespace("menu-item");
    if (!rootMenu)
      throwError(COMPONENT_NAME, "can not inject root menu");
    const { parentMenu, indexPath } = useMenu(instance, toRef(props, "index"));
    const subMenu = inject(
      `${SUB_MENU_INJECTION_KEY}${parentMenu.value.uid}`
    );
    if (!subMenu)
      throwError(COMPONENT_NAME, "can not inject sub menu");
    const active = computed(() => props.index === rootMenu.activeIndex);
    const item = reactive({
      index: props.index,
      indexPath,
      active
    });
    const handleClick = () => {
      if (!props.disabled) {
        rootMenu.handleMenuItemClick({
          index: props.index,
          indexPath: indexPath.value,
          route: props.route
        });
        emit("click", item);
      }
    };
    onMounted(() => {
      subMenu.addSubMenu(item);
      rootMenu.addMenuItem(item);
    });
    onBeforeUnmount(() => {
      subMenu.removeSubMenu(item);
      rootMenu.removeMenuItem(item);
    });
    __expose({
      parentMenu,
      rootMenu,
      active,
      nsMenu,
      nsMenuItem,
      handleClick
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "li",
        {
          class: normalizeClass([
            unref(nsMenuItem).b(),
            unref(nsMenuItem).is("active", active.value),
            unref(nsMenuItem).is("disabled", _ctx.disabled)
          ]),
          role: "menuitem",
          tabindex: "-1",
          onClick: handleClick
        },
        [
          unref(parentMenu).type.name === "ElMenu" && unref(rootMenu).props.collapse && _ctx.$slots.title ? (openBlock(), createBlock(unref(ElTooltip), {
            key: 0,
            effect: unref(rootMenu).props.popperEffect,
            placement: "right",
            "fallback-placements": ["left"],
            "popper-class": unref(rootMenu).props.popperClass,
            "popper-style": unref(rootMenu).props.popperStyle,
            persistent: unref(rootMenu).props.persistent,
            "focus-on-target": ""
          }, {
            content: withCtx(() => [
              renderSlot(_ctx.$slots, "title")
            ]),
            default: withCtx(() => [
              createBaseVNode(
                "div",
                {
                  class: normalizeClass(unref(nsMenu).be("tooltip", "trigger"))
                },
                [
                  renderSlot(_ctx.$slots, "default")
                ],
                2
              )
            ]),
            _: 3
          }, 8, ["effect", "popper-class", "popper-style", "persistent"])) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              renderSlot(_ctx.$slots, "default"),
              renderSlot(_ctx.$slots, "title")
            ],
            64
          ))
        ],
        2
      );
    };
  }
});
var MenuItem2 = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);
const menuItemGroupProps = {
  title: String
};
const _sfc_main$n = defineComponent({
  ...{
    name: "ElMenuItemGroup"
  },
  __name: "menu-item-group",
  props: menuItemGroupProps,
  setup(__props) {
    const ns = useNamespace("menu-item-group");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "li",
        {
          class: normalizeClass(unref(ns).b())
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(unref(ns).e("title"))
            },
            [
              !_ctx.$slots.title ? (openBlock(), createElementBlock(
                Fragment,
                { key: 0 },
                [
                  createTextVNode(
                    toDisplayString(_ctx.title),
                    1
                  )
                ],
                64
              )) : renderSlot(_ctx.$slots, "title", { key: 1 })
            ],
            2
          ),
          createBaseVNode("ul", null, [
            renderSlot(_ctx.$slots, "default")
          ])
        ],
        2
      );
    };
  }
});
var MenuItemGroup = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);
const ElMenu = withInstall(Menu2, {
  MenuItem: MenuItem2,
  MenuItemGroup,
  SubMenu: SubMenu2
});
const ElMenuItem = withNoopInstall(MenuItem2);
withNoopInstall(MenuItemGroup);
const ElSubMenu = withNoopInstall(SubMenu2);
function augmentWebsocket(webSocket, debug) {
  webSocket.terminate = function() {
    const noOp = () => {
    };
    this.onerror = noOp;
    this.onmessage = noOp;
    this.onopen = noOp;
    const ts = /* @__PURE__ */ new Date();
    const id = Math.random().toString().substring(2, 8);
    const origOnClose = this.onclose;
    this.onclose = (closeEvent) => {
      const delay = (/* @__PURE__ */ new Date()).getTime() - ts.getTime();
      debug(`Discarded socket (#${id})  closed after ${delay}ms, with code/reason: ${closeEvent.code}/${closeEvent.reason}`);
    };
    this.close();
    origOnClose == null ? void 0 : origOnClose.call(webSocket, {
      code: 4001,
      reason: `Quick discarding socket (#${id}) without waiting for the shutdown sequence.`,
      wasClean: false
    });
  };
}
const BYTE = {
  // LINEFEED byte (octet 10)
  LF: "\n",
  // NULL byte (octet 0)
  NULL: "\0"
};
class FrameImpl {
  /**
   * body of the frame
   */
  get body() {
    if (!this._body && this.isBinaryBody) {
      this._body = new TextDecoder().decode(this._binaryBody);
    }
    return this._body || "";
  }
  /**
   * body as Uint8Array
   */
  get binaryBody() {
    if (!this._binaryBody && !this.isBinaryBody) {
      this._binaryBody = new TextEncoder().encode(this._body);
    }
    return this._binaryBody;
  }
  /**
   * Frame constructor. `command`, `headers` and `body` are available as properties.
   *
   * @internal
   */
  constructor(params) {
    const { command, headers, body, binaryBody, escapeHeaderValues, skipContentLengthHeader } = params;
    this.command = command;
    this.headers = Object.assign({}, headers || {});
    if (binaryBody) {
      this._binaryBody = binaryBody;
      this.isBinaryBody = true;
    } else {
      this._body = body || "";
      this.isBinaryBody = false;
    }
    this.escapeHeaderValues = escapeHeaderValues || false;
    this.skipContentLengthHeader = skipContentLengthHeader || false;
  }
  /**
   * deserialize a STOMP Frame from raw data.
   *
   * @internal
   */
  static fromRawFrame(rawFrame, escapeHeaderValues) {
    const headers = {};
    const trim = (str) => str.replace(/^\s+|\s+$/g, "");
    for (const header of rawFrame.headers.reverse()) {
      header.indexOf(":");
      const key = trim(header[0]);
      let value = trim(header[1]);
      if (escapeHeaderValues && rawFrame.command !== "CONNECT" && rawFrame.command !== "CONNECTED") {
        value = FrameImpl.hdrValueUnEscape(value);
      }
      headers[key] = value;
    }
    return new FrameImpl({
      command: rawFrame.command,
      headers,
      binaryBody: rawFrame.binaryBody,
      escapeHeaderValues
    });
  }
  /**
   * @internal
   */
  toString() {
    return this.serializeCmdAndHeaders();
  }
  /**
   * serialize this Frame in a format suitable to be passed to WebSocket.
   * If the body is string the output will be string.
   * If the body is binary (i.e. of type Unit8Array) it will be serialized to ArrayBuffer.
   *
   * @internal
   */
  serialize() {
    const cmdAndHeaders = this.serializeCmdAndHeaders();
    if (this.isBinaryBody) {
      return FrameImpl.toUnit8Array(cmdAndHeaders, this._binaryBody).buffer;
    } else {
      return cmdAndHeaders + this._body + BYTE.NULL;
    }
  }
  serializeCmdAndHeaders() {
    const lines = [this.command];
    if (this.skipContentLengthHeader) {
      delete this.headers["content-length"];
    }
    for (const name of Object.keys(this.headers || {})) {
      const value = this.headers[name];
      if (this.escapeHeaderValues && this.command !== "CONNECT" && this.command !== "CONNECTED") {
        lines.push(`${name}:${FrameImpl.hdrValueEscape(`${value}`)}`);
      } else {
        lines.push(`${name}:${value}`);
      }
    }
    if (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) {
      lines.push(`content-length:${this.bodyLength()}`);
    }
    return lines.join(BYTE.LF) + BYTE.LF + BYTE.LF;
  }
  isBodyEmpty() {
    return this.bodyLength() === 0;
  }
  bodyLength() {
    const binaryBody = this.binaryBody;
    return binaryBody ? binaryBody.length : 0;
  }
  /**
   * Compute the size of a UTF-8 string by counting its number of bytes
   * (and not the number of characters composing the string)
   */
  static sizeOfUTF8(s) {
    return s ? new TextEncoder().encode(s).length : 0;
  }
  static toUnit8Array(cmdAndHeaders, binaryBody) {
    const uint8CmdAndHeaders = new TextEncoder().encode(cmdAndHeaders);
    const nullTerminator = new Uint8Array([0]);
    const uint8Frame = new Uint8Array(uint8CmdAndHeaders.length + binaryBody.length + nullTerminator.length);
    uint8Frame.set(uint8CmdAndHeaders);
    uint8Frame.set(binaryBody, uint8CmdAndHeaders.length);
    uint8Frame.set(nullTerminator, uint8CmdAndHeaders.length + binaryBody.length);
    return uint8Frame;
  }
  /**
   * Serialize a STOMP frame as per STOMP standards, suitable to be sent to the STOMP broker.
   *
   * @internal
   */
  static marshall(params) {
    const frame = new FrameImpl(params);
    return frame.serialize();
  }
  /**
   *  Escape header values
   */
  static hdrValueEscape(str) {
    return str.replace(/\\/g, "\\\\").replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/:/g, "\\c");
  }
  /**
   * UnEscape header values
   */
  static hdrValueUnEscape(str) {
    return str.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\c/g, ":").replace(/\\\\/g, "\\");
  }
}
const NULL = 0;
const LF = 10;
const CR = 13;
const COLON = 58;
class Parser {
  constructor(onFrame, onIncomingPing) {
    this.onFrame = onFrame;
    this.onIncomingPing = onIncomingPing;
    this._encoder = new TextEncoder();
    this._decoder = new TextDecoder();
    this._token = [];
    this._initState();
  }
  parseChunk(segment, appendMissingNULLonIncoming = false) {
    let chunk;
    if (typeof segment === "string") {
      chunk = this._encoder.encode(segment);
    } else {
      chunk = new Uint8Array(segment);
    }
    if (appendMissingNULLonIncoming && chunk[chunk.length - 1] !== 0) {
      const chunkWithNull = new Uint8Array(chunk.length + 1);
      chunkWithNull.set(chunk, 0);
      chunkWithNull[chunk.length] = 0;
      chunk = chunkWithNull;
    }
    for (let i = 0; i < chunk.length; i++) {
      const byte = chunk[i];
      this._onByte(byte);
    }
  }
  // The following implements a simple Rec Descent Parser.
  // The grammar is simple and just one byte tells what should be the next state
  _collectFrame(byte) {
    if (byte === NULL) {
      return;
    }
    if (byte === CR) {
      return;
    }
    if (byte === LF) {
      this.onIncomingPing();
      return;
    }
    this._onByte = this._collectCommand;
    this._reinjectByte(byte);
  }
  _collectCommand(byte) {
    if (byte === CR) {
      return;
    }
    if (byte === LF) {
      this._results.command = this._consumeTokenAsUTF8();
      this._onByte = this._collectHeaders;
      return;
    }
    this._consumeByte(byte);
  }
  _collectHeaders(byte) {
    if (byte === CR) {
      return;
    }
    if (byte === LF) {
      this._setupCollectBody();
      return;
    }
    this._onByte = this._collectHeaderKey;
    this._reinjectByte(byte);
  }
  _reinjectByte(byte) {
    this._onByte(byte);
  }
  _collectHeaderKey(byte) {
    if (byte === COLON) {
      this._headerKey = this._consumeTokenAsUTF8();
      this._onByte = this._collectHeaderValue;
      return;
    }
    this._consumeByte(byte);
  }
  _collectHeaderValue(byte) {
    if (byte === CR) {
      return;
    }
    if (byte === LF) {
      this._results.headers.push([
        this._headerKey,
        this._consumeTokenAsUTF8()
      ]);
      this._headerKey = void 0;
      this._onByte = this._collectHeaders;
      return;
    }
    this._consumeByte(byte);
  }
  _setupCollectBody() {
    const contentLengthHeader = this._results.headers.filter((header) => {
      return header[0] === "content-length";
    })[0];
    if (contentLengthHeader) {
      this._bodyBytesRemaining = parseInt(contentLengthHeader[1], 10);
      this._onByte = this._collectBodyFixedSize;
    } else {
      this._onByte = this._collectBodyNullTerminated;
    }
  }
  _collectBodyNullTerminated(byte) {
    if (byte === NULL) {
      this._retrievedBody();
      return;
    }
    this._consumeByte(byte);
  }
  _collectBodyFixedSize(byte) {
    if (this._bodyBytesRemaining-- === 0) {
      this._retrievedBody();
      return;
    }
    this._consumeByte(byte);
  }
  _retrievedBody() {
    this._results.binaryBody = this._consumeTokenAsRaw();
    try {
      this.onFrame(this._results);
    } catch (e) {
      console.log(`Ignoring an exception thrown by a frame handler. Original exception: `, e);
    }
    this._initState();
  }
  // Rec Descent Parser helpers
  _consumeByte(byte) {
    this._token.push(byte);
  }
  _consumeTokenAsUTF8() {
    return this._decoder.decode(this._consumeTokenAsRaw());
  }
  _consumeTokenAsRaw() {
    const rawResult = new Uint8Array(this._token);
    this._token = [];
    return rawResult;
  }
  _initState() {
    this._results = {
      command: void 0,
      headers: [],
      binaryBody: void 0
    };
    this._token = [];
    this._headerKey = void 0;
    this._onByte = this._collectFrame;
  }
}
var StompSocketState;
(function(StompSocketState2) {
  StompSocketState2[StompSocketState2["CONNECTING"] = 0] = "CONNECTING";
  StompSocketState2[StompSocketState2["OPEN"] = 1] = "OPEN";
  StompSocketState2[StompSocketState2["CLOSING"] = 2] = "CLOSING";
  StompSocketState2[StompSocketState2["CLOSED"] = 3] = "CLOSED";
})(StompSocketState || (StompSocketState = {}));
var ActivationState;
(function(ActivationState2) {
  ActivationState2[ActivationState2["ACTIVE"] = 0] = "ACTIVE";
  ActivationState2[ActivationState2["DEACTIVATING"] = 1] = "DEACTIVATING";
  ActivationState2[ActivationState2["INACTIVE"] = 2] = "INACTIVE";
})(ActivationState || (ActivationState = {}));
var ReconnectionTimeMode;
(function(ReconnectionTimeMode2) {
  ReconnectionTimeMode2[ReconnectionTimeMode2["LINEAR"] = 0] = "LINEAR";
  ReconnectionTimeMode2[ReconnectionTimeMode2["EXPONENTIAL"] = 1] = "EXPONENTIAL";
})(ReconnectionTimeMode || (ReconnectionTimeMode = {}));
var TickerStrategy;
(function(TickerStrategy2) {
  TickerStrategy2["Interval"] = "interval";
  TickerStrategy2["Worker"] = "worker";
})(TickerStrategy || (TickerStrategy = {}));
class Ticker {
  constructor(_interval, _strategy = TickerStrategy.Interval, _debug) {
    this._interval = _interval;
    this._strategy = _strategy;
    this._debug = _debug;
    this._workerScript = `
    var startTime = Date.now();
    setInterval(function() {
        self.postMessage(Date.now() - startTime);
    }, ${this._interval});
  `;
  }
  start(tick) {
    this.stop();
    if (this.shouldUseWorker()) {
      this.runWorker(tick);
    } else {
      this.runInterval(tick);
    }
  }
  stop() {
    this.disposeWorker();
    this.disposeInterval();
  }
  shouldUseWorker() {
    return typeof Worker !== "undefined" && this._strategy === TickerStrategy.Worker;
  }
  runWorker(tick) {
    this._debug("Using runWorker for outgoing pings");
    if (!this._worker) {
      this._worker = new Worker(URL.createObjectURL(new Blob([this._workerScript], { type: "text/javascript" })));
      this._worker.onmessage = (message) => tick(message.data);
    }
  }
  runInterval(tick) {
    this._debug("Using runInterval for outgoing pings");
    if (!this._timer) {
      const startTime = Date.now();
      this._timer = setInterval(() => {
        tick(Date.now() - startTime);
      }, this._interval);
    }
  }
  disposeWorker() {
    if (this._worker) {
      this._worker.terminate();
      delete this._worker;
      this._debug("Outgoing ping disposeWorker");
    }
  }
  disposeInterval() {
    if (this._timer) {
      clearInterval(this._timer);
      delete this._timer;
      this._debug("Outgoing ping disposeInterval");
    }
  }
}
class Versions {
  /**
   * Takes an array of versions, typical elements '1.2', '1.1', or '1.0'
   *
   * You will be creating an instance of this class if you want to override
   * supported versions to be declared during STOMP handshake.
   */
  constructor(versions) {
    this.versions = versions;
  }
  /**
   * Used as part of CONNECT STOMP Frame
   */
  supportedVersions() {
    return this.versions.join(",");
  }
  /**
   * Used while creating a WebSocket
   */
  protocolVersions() {
    return this.versions.map((x) => `v${x.replace(".", "")}.stomp`);
  }
}
Versions.V1_0 = "1.0";
Versions.V1_1 = "1.1";
Versions.V1_2 = "1.2";
Versions.default = new Versions([
  Versions.V1_2,
  Versions.V1_1,
  Versions.V1_0
]);
class StompHandler {
  get connectedVersion() {
    return this._connectedVersion;
  }
  get connected() {
    return this._connected;
  }
  constructor(_client, _webSocket, config) {
    this._client = _client;
    this._webSocket = _webSocket;
    this._connected = false;
    this._serverFrameHandlers = {
      // [CONNECTED Frame](https://stomp.github.com/stomp-specification-1.2.html#CONNECTED_Frame)
      CONNECTED: (frame) => {
        this.debug(`connected to server ${frame.headers.server}`);
        this._connected = true;
        this._connectedVersion = frame.headers.version;
        if (this._connectedVersion === Versions.V1_2) {
          this._escapeHeaderValues = true;
        }
        this._setupHeartbeat(frame.headers);
        this.onConnect(frame);
      },
      // [MESSAGE Frame](https://stomp.github.com/stomp-specification-1.2.html#MESSAGE)
      MESSAGE: (frame) => {
        const subscription = frame.headers.subscription;
        const onReceive = this._subscriptions[subscription] || this.onUnhandledMessage;
        const message = frame;
        const client = this;
        const messageId = this._connectedVersion === Versions.V1_2 ? message.headers.ack : message.headers["message-id"];
        message.ack = (headers = {}) => {
          return client.ack(messageId, subscription, headers);
        };
        message.nack = (headers = {}) => {
          return client.nack(messageId, subscription, headers);
        };
        onReceive(message);
      },
      // [RECEIPT Frame](https://stomp.github.com/stomp-specification-1.2.html#RECEIPT)
      RECEIPT: (frame) => {
        const callback = this._receiptWatchers[frame.headers["receipt-id"]];
        if (callback) {
          callback(frame);
          delete this._receiptWatchers[frame.headers["receipt-id"]];
        } else {
          this.onUnhandledReceipt(frame);
        }
      },
      // [ERROR Frame](https://stomp.github.com/stomp-specification-1.2.html#ERROR)
      ERROR: (frame) => {
        this.onStompError(frame);
      }
    };
    this._counter = 0;
    this._subscriptions = {};
    this._receiptWatchers = {};
    this._partialData = "";
    this._escapeHeaderValues = false;
    this._lastServerActivityTS = Date.now();
    this.debug = config.debug;
    this.stompVersions = config.stompVersions;
    this.connectHeaders = config.connectHeaders;
    this.disconnectHeaders = config.disconnectHeaders;
    this.heartbeatIncoming = config.heartbeatIncoming;
    this.heartbeatToleranceMultiplier = config.heartbeatGracePeriods;
    this.heartbeatOutgoing = config.heartbeatOutgoing;
    this.splitLargeFrames = config.splitLargeFrames;
    this.maxWebSocketChunkSize = config.maxWebSocketChunkSize;
    this.forceBinaryWSFrames = config.forceBinaryWSFrames;
    this.logRawCommunication = config.logRawCommunication;
    this.appendMissingNULLonIncoming = config.appendMissingNULLonIncoming;
    this.discardWebsocketOnCommFailure = config.discardWebsocketOnCommFailure;
    this.onConnect = config.onConnect;
    this.onDisconnect = config.onDisconnect;
    this.onStompError = config.onStompError;
    this.onWebSocketClose = config.onWebSocketClose;
    this.onWebSocketError = config.onWebSocketError;
    this.onUnhandledMessage = config.onUnhandledMessage;
    this.onUnhandledReceipt = config.onUnhandledReceipt;
    this.onUnhandledFrame = config.onUnhandledFrame;
    this.onHeartbeatReceived = config.onHeartbeatReceived;
    this.onHeartbeatLost = config.onHeartbeatLost;
  }
  start() {
    const parser = new Parser(
      // On Frame
      (rawFrame) => {
        const frame = FrameImpl.fromRawFrame(rawFrame, this._escapeHeaderValues);
        if (!this.logRawCommunication) {
          this.debug(`<<< ${frame}`);
        }
        const serverFrameHandler = this._serverFrameHandlers[frame.command] || this.onUnhandledFrame;
        serverFrameHandler(frame);
      },
      // On Incoming Ping
      () => {
        this.debug("<<< PONG");
        this.onHeartbeatReceived();
      }
    );
    this._webSocket.onmessage = (evt) => {
      this.debug("Received data");
      this._lastServerActivityTS = Date.now();
      if (this.logRawCommunication) {
        const rawChunkAsString = evt.data instanceof ArrayBuffer ? new TextDecoder().decode(evt.data) : evt.data;
        this.debug(`<<< ${rawChunkAsString}`);
      }
      parser.parseChunk(evt.data, this.appendMissingNULLonIncoming);
    };
    this._webSocket.onclose = (closeEvent) => {
      this.debug(`Connection closed to ${this._webSocket.url}`);
      this._cleanUp();
      this.onWebSocketClose(closeEvent);
    };
    this._webSocket.onerror = (errorEvent) => {
      this.onWebSocketError(errorEvent);
    };
    this._webSocket.onopen = () => {
      const connectHeaders = Object.assign({}, this.connectHeaders);
      this.debug("Web Socket Opened...");
      connectHeaders["accept-version"] = this.stompVersions.supportedVersions();
      connectHeaders["heart-beat"] = [
        this.heartbeatOutgoing,
        this.heartbeatIncoming
      ].join(",");
      this._transmit({ command: "CONNECT", headers: connectHeaders });
    };
  }
  _setupHeartbeat(headers) {
    if (headers.version !== Versions.V1_1 && headers.version !== Versions.V1_2) {
      return;
    }
    if (!headers["heart-beat"]) {
      return;
    }
    const [serverOutgoing, serverIncoming] = headers["heart-beat"].split(",").map((v) => parseInt(v, 10));
    if (this.heartbeatOutgoing !== 0 && serverIncoming !== 0) {
      const ttl = Math.max(this.heartbeatOutgoing, serverIncoming);
      this.debug(`send PING every ${ttl}ms`);
      this._pinger = new Ticker(ttl, this._client.heartbeatStrategy, this.debug);
      this._pinger.start(() => {
        if (this._webSocket.readyState === StompSocketState.OPEN) {
          this._webSocket.send(BYTE.LF);
          this.debug(">>> PING");
        }
      });
    }
    if (this.heartbeatIncoming !== 0 && serverOutgoing !== 0) {
      const ttl = Math.max(this.heartbeatIncoming, serverOutgoing);
      this.debug(`check PONG every ${ttl}ms`);
      this._ponger = setInterval(() => {
        const delta = Date.now() - this._lastServerActivityTS;
        if (delta > ttl * this.heartbeatToleranceMultiplier) {
          this.debug(`did not receive server activity for the last ${delta}ms`);
          this.onHeartbeatLost();
          this._closeOrDiscardWebsocket();
        }
      }, ttl);
    }
  }
  _closeOrDiscardWebsocket() {
    if (this.discardWebsocketOnCommFailure) {
      this.debug("Discarding websocket, the underlying socket may linger for a while");
      this.discardWebsocket();
    } else {
      this.debug("Issuing close on the websocket");
      this._closeWebsocket();
    }
  }
  forceDisconnect() {
    if (this._webSocket) {
      if (this._webSocket.readyState === StompSocketState.CONNECTING || this._webSocket.readyState === StompSocketState.OPEN) {
        this._closeOrDiscardWebsocket();
      }
    }
  }
  _closeWebsocket() {
    this._webSocket.onmessage = () => {
    };
    this._webSocket.close();
  }
  discardWebsocket() {
    if (typeof this._webSocket.terminate !== "function") {
      augmentWebsocket(this._webSocket, (msg) => this.debug(msg));
    }
    this._webSocket.terminate();
  }
  _transmit(params) {
    const { command, headers, body, binaryBody, skipContentLengthHeader } = params;
    const frame = new FrameImpl({
      command,
      headers,
      body,
      binaryBody,
      escapeHeaderValues: this._escapeHeaderValues,
      skipContentLengthHeader
    });
    let rawChunk = frame.serialize();
    if (this.logRawCommunication) {
      this.debug(`>>> ${rawChunk}`);
    } else {
      this.debug(`>>> ${frame}`);
    }
    if (this.forceBinaryWSFrames && typeof rawChunk === "string") {
      rawChunk = new TextEncoder().encode(rawChunk);
    }
    if (typeof rawChunk !== "string" || !this.splitLargeFrames) {
      this._webSocket.send(rawChunk);
    } else {
      let out = rawChunk;
      while (out.length > 0) {
        const chunk = out.substring(0, this.maxWebSocketChunkSize);
        out = out.substring(this.maxWebSocketChunkSize);
        this._webSocket.send(chunk);
        this.debug(`chunk sent = ${chunk.length}, remaining = ${out.length}`);
      }
    }
  }
  dispose() {
    if (this.connected) {
      try {
        const disconnectHeaders = Object.assign({}, this.disconnectHeaders);
        if (!disconnectHeaders.receipt) {
          disconnectHeaders.receipt = `close-${this._counter++}`;
        }
        this.watchForReceipt(disconnectHeaders.receipt, (frame) => {
          this._closeWebsocket();
          this._cleanUp();
          this.onDisconnect(frame);
        });
        this._transmit({ command: "DISCONNECT", headers: disconnectHeaders });
      } catch (error) {
        this.debug(`Ignoring error during disconnect ${error}`);
      }
    } else {
      if (this._webSocket.readyState === StompSocketState.CONNECTING || this._webSocket.readyState === StompSocketState.OPEN) {
        this._closeWebsocket();
      }
    }
  }
  _cleanUp() {
    this._connected = false;
    if (this._pinger) {
      this._pinger.stop();
      this._pinger = void 0;
    }
    if (this._ponger) {
      clearInterval(this._ponger);
      this._ponger = void 0;
    }
  }
  publish(params) {
    const { destination, headers, body, binaryBody, skipContentLengthHeader } = params;
    const hdrs = Object.assign({ destination }, headers);
    this._transmit({
      command: "SEND",
      headers: hdrs,
      body,
      binaryBody,
      skipContentLengthHeader
    });
  }
  watchForReceipt(receiptId, callback) {
    this._receiptWatchers[receiptId] = callback;
  }
  subscribe(destination, callback, headers = {}) {
    headers = Object.assign({}, headers);
    if (!headers.id) {
      headers.id = `sub-${this._counter++}`;
    }
    headers.destination = destination;
    this._subscriptions[headers.id] = callback;
    this._transmit({ command: "SUBSCRIBE", headers });
    const client = this;
    return {
      id: headers.id,
      unsubscribe(hdrs) {
        return client.unsubscribe(headers.id, hdrs);
      }
    };
  }
  unsubscribe(id, headers = {}) {
    headers = Object.assign({}, headers);
    delete this._subscriptions[id];
    headers.id = id;
    this._transmit({ command: "UNSUBSCRIBE", headers });
  }
  begin(transactionId) {
    const txId = transactionId || `tx-${this._counter++}`;
    this._transmit({
      command: "BEGIN",
      headers: {
        transaction: txId
      }
    });
    const client = this;
    return {
      id: txId,
      commit() {
        client.commit(txId);
      },
      abort() {
        client.abort(txId);
      }
    };
  }
  commit(transactionId) {
    this._transmit({
      command: "COMMIT",
      headers: {
        transaction: transactionId
      }
    });
  }
  abort(transactionId) {
    this._transmit({
      command: "ABORT",
      headers: {
        transaction: transactionId
      }
    });
  }
  ack(messageId, subscriptionId, headers = {}) {
    headers = Object.assign({}, headers);
    if (this._connectedVersion === Versions.V1_2) {
      headers.id = messageId;
    } else {
      headers["message-id"] = messageId;
    }
    headers.subscription = subscriptionId;
    this._transmit({ command: "ACK", headers });
  }
  nack(messageId, subscriptionId, headers = {}) {
    headers = Object.assign({}, headers);
    if (this._connectedVersion === Versions.V1_2) {
      headers.id = messageId;
    } else {
      headers["message-id"] = messageId;
    }
    headers.subscription = subscriptionId;
    return this._transmit({ command: "NACK", headers });
  }
}
class Client {
  /**
   * Provides access to the underlying WebSocket instance.
   * This property is **read-only**.
   *
   * Example:
   * ```javascript
   * const webSocket = client.webSocket;
   * if (webSocket) {
   *   console.log('WebSocket is connected:', webSocket.readyState === WebSocket.OPEN);
   * }
   * ```
   *
   * **Caution:**
   * Directly interacting with the WebSocket instance (e.g., sending or receiving frames)
   * can interfere with the proper functioning of this library. Such actions may cause
   * unexpected behavior, disconnections, or invalid state in the library's internal mechanisms.
   *
   * Instead, use the library's provided methods to manage STOMP communication.
   *
   * @returns The WebSocket instance used by the STOMP handler, or `undefined` if not connected.
   */
  get webSocket() {
    var _a;
    return (_a = this._stompHandler) == null ? void 0 : _a._webSocket;
  }
  /**
   * Allows customization of the disconnection headers.
   *
   * Any changes made during an active session will also be applied immediately.
   *
   * Example:
   * ```javascript
   * client.disconnectHeaders = {
   *   receipt: 'custom-receipt-id'
   * };
   * ```
   */
  get disconnectHeaders() {
    return this._disconnectHeaders;
  }
  set disconnectHeaders(value) {
    this._disconnectHeaders = value;
    if (this._stompHandler) {
      this._stompHandler.disconnectHeaders = this._disconnectHeaders;
    }
  }
  /**
   * Indicates whether there is an active connection to the STOMP broker.
   *
   * Usage:
   * ```javascript
   * if (client.connected) {
   *   console.log('Client is connected to the broker.');
   * } else {
   *   console.log('No connection to the broker.');
   * }
   * ```
   *
   * @returns `true` if the client is currently connected, `false` otherwise.
   */
  get connected() {
    return !!this._stompHandler && this._stompHandler.connected;
  }
  /**
   * The version of the STOMP protocol negotiated with the server during connection.
   *
   * This is a **read-only** property and reflects the negotiated protocol version after
   * a successful connection.
   *
   * Example:
   * ```javascript
   * console.log('Connected STOMP version:', client.connectedVersion);
   * ```
   *
   * @returns The negotiated STOMP protocol version or `undefined` if not connected.
   */
  get connectedVersion() {
    return this._stompHandler ? this._stompHandler.connectedVersion : void 0;
  }
  /**
   * Indicates whether the client is currently active.
   *
   * A client is considered active if it is connected or actively attempting to reconnect.
   *
   * Example:
   * ```javascript
   * if (client.active) {
   *   console.log('The client is active.');
   * } else {
   *   console.log('The client is inactive.');
   * }
   * ```
   *
   * @returns `true` if the client is active, otherwise `false`.
   */
  get active() {
    return this.state === ActivationState.ACTIVE;
  }
  _changeState(state) {
    this.state = state;
    this.onChangeState(state);
  }
  /**
   * Constructs a new STOMP client instance.
   *
   * The constructor initializes default values and sets up no-op callbacks for all events.
   * Configuration can be passed during construction, or updated later using `configure`.
   *
   * Example:
   * ```javascript
   * const client = new Client({
   *   brokerURL: 'wss://broker.example.com',
   *   reconnectDelay: 5000
   * });
   * ```
   *
   * @param conf Optional configuration object to initialize the client with.
   */
  constructor(conf = {}) {
    this.stompVersions = Versions.default;
    this.connectionTimeout = 0;
    this.reconnectDelay = 5e3;
    this._nextReconnectDelay = 0;
    this.maxReconnectDelay = 15 * 60 * 1e3;
    this.reconnectTimeMode = ReconnectionTimeMode.LINEAR;
    this.heartbeatIncoming = 1e4;
    this.heartbeatToleranceMultiplier = 2;
    this.heartbeatOutgoing = 1e4;
    this.heartbeatStrategy = TickerStrategy.Interval;
    this.splitLargeFrames = false;
    this.maxWebSocketChunkSize = 8 * 1024;
    this.forceBinaryWSFrames = false;
    this.appendMissingNULLonIncoming = false;
    this.discardWebsocketOnCommFailure = false;
    this.state = ActivationState.INACTIVE;
    const noOp = () => {
    };
    this.debug = noOp;
    this.beforeConnect = noOp;
    this.onConnect = noOp;
    this.onDisconnect = noOp;
    this.onUnhandledMessage = noOp;
    this.onUnhandledReceipt = noOp;
    this.onUnhandledFrame = noOp;
    this.onHeartbeatReceived = noOp;
    this.onHeartbeatLost = noOp;
    this.onStompError = noOp;
    this.onWebSocketClose = noOp;
    this.onWebSocketError = noOp;
    this.logRawCommunication = false;
    this.onChangeState = noOp;
    this.connectHeaders = {};
    this._disconnectHeaders = {};
    this.configure(conf);
  }
  /**
   * Updates the client's configuration.
   *
   * All properties in the provided configuration object will override the current settings.
   *
   * Additionally, a warning is logged if `maxReconnectDelay` is configured to a
   * value lower than `reconnectDelay`, and `maxReconnectDelay` is adjusted to match `reconnectDelay`.
   *
   * Example:
   * ```javascript
   * client.configure({
   *   reconnectDelay: 3000,
   *   maxReconnectDelay: 10000
   * });
   * ```
   *
   * @param conf Configuration object containing the new settings.
   */
  configure(conf) {
    Object.assign(this, conf);
    if (this.maxReconnectDelay > 0 && this.maxReconnectDelay < this.reconnectDelay) {
      this.debug(`Warning: maxReconnectDelay (${this.maxReconnectDelay}ms) is less than reconnectDelay (${this.reconnectDelay}ms). Using reconnectDelay as the maxReconnectDelay delay.`);
      this.maxReconnectDelay = this.reconnectDelay;
    }
  }
  /**
   * Activates the client, initiating a connection to the STOMP broker.
   *
   * On activation, the client attempts to connect and sets its state to `ACTIVE`. If the connection
   * is lost, it will automatically retry based on `reconnectDelay` or `maxReconnectDelay`. If
   * `reconnectTimeMode` is set to `EXPONENTIAL`, the reconnect delay increases exponentially.
   *
   * To stop reconnection attempts and disconnect, call [Client#deactivate]{@link Client#deactivate}.
   *
   * Example:
   * ```javascript
   * client.activate(); // Connect to the broker
   * ```
   *
   * If the client is currently `DEACTIVATING`, connection is delayed until the deactivation process completes.
   */
  activate() {
    const _activate = () => {
      if (this.active) {
        this.debug("Already ACTIVE, ignoring request to activate");
        return;
      }
      this._changeState(ActivationState.ACTIVE);
      this._nextReconnectDelay = this.reconnectDelay;
      this._connect();
    };
    if (this.state === ActivationState.DEACTIVATING) {
      this.debug("Waiting for deactivation to finish before activating");
      this.deactivate().then(() => {
        _activate();
      });
    } else {
      _activate();
    }
  }
  async _connect() {
    await this.beforeConnect(this);
    if (this._stompHandler) {
      this.debug("There is already a stompHandler, skipping the call to connect");
      return;
    }
    if (!this.active) {
      this.debug("Client has been marked inactive, will not attempt to connect");
      return;
    }
    if (this.connectionTimeout > 0) {
      if (this._connectionWatcher) {
        clearTimeout(this._connectionWatcher);
      }
      this._connectionWatcher = setTimeout(() => {
        if (this.connected) {
          return;
        }
        this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`);
        this.forceDisconnect();
      }, this.connectionTimeout);
    }
    this.debug("Opening Web Socket...");
    const webSocket = this._createWebSocket();
    this._stompHandler = new StompHandler(this, webSocket, {
      debug: this.debug,
      stompVersions: this.stompVersions,
      connectHeaders: this.connectHeaders,
      disconnectHeaders: this._disconnectHeaders,
      heartbeatIncoming: this.heartbeatIncoming,
      heartbeatGracePeriods: this.heartbeatToleranceMultiplier,
      heartbeatOutgoing: this.heartbeatOutgoing,
      heartbeatStrategy: this.heartbeatStrategy,
      splitLargeFrames: this.splitLargeFrames,
      maxWebSocketChunkSize: this.maxWebSocketChunkSize,
      forceBinaryWSFrames: this.forceBinaryWSFrames,
      logRawCommunication: this.logRawCommunication,
      appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
      discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
      onConnect: (frame) => {
        if (this._connectionWatcher) {
          clearTimeout(this._connectionWatcher);
          this._connectionWatcher = void 0;
        }
        this._nextReconnectDelay = this.reconnectDelay;
        if (!this.active) {
          this.debug("STOMP got connected while deactivate was issued, will disconnect now");
          this._disposeStompHandler();
          return;
        }
        this.onConnect(frame);
      },
      onDisconnect: (frame) => {
        this.onDisconnect(frame);
      },
      onStompError: (frame) => {
        this.onStompError(frame);
      },
      onWebSocketClose: (evt) => {
        this._stompHandler = void 0;
        if (this.state === ActivationState.DEACTIVATING) {
          this._changeState(ActivationState.INACTIVE);
        }
        this.onWebSocketClose(evt);
        if (this.active) {
          this._schedule_reconnect();
        }
      },
      onWebSocketError: (evt) => {
        this.onWebSocketError(evt);
      },
      onUnhandledMessage: (message) => {
        this.onUnhandledMessage(message);
      },
      onUnhandledReceipt: (frame) => {
        this.onUnhandledReceipt(frame);
      },
      onUnhandledFrame: (frame) => {
        this.onUnhandledFrame(frame);
      },
      onHeartbeatReceived: () => {
        this.onHeartbeatReceived();
      },
      onHeartbeatLost: () => {
        this.onHeartbeatLost();
      }
    });
    this._stompHandler.start();
  }
  _createWebSocket() {
    let webSocket;
    if (this.webSocketFactory) {
      webSocket = this.webSocketFactory();
    } else if (this.brokerURL) {
      webSocket = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
    } else {
      throw new Error("Either brokerURL or webSocketFactory must be provided");
    }
    webSocket.binaryType = "arraybuffer";
    return webSocket;
  }
  _schedule_reconnect() {
    if (this._nextReconnectDelay > 0) {
      this.debug(`STOMP: scheduling reconnection in ${this._nextReconnectDelay}ms`);
      this._reconnector = setTimeout(() => {
        if (this.reconnectTimeMode === ReconnectionTimeMode.EXPONENTIAL) {
          this._nextReconnectDelay = this._nextReconnectDelay * 2;
          if (this.maxReconnectDelay !== 0) {
            this._nextReconnectDelay = Math.min(this._nextReconnectDelay, this.maxReconnectDelay);
          }
        }
        this._connect();
      }, this._nextReconnectDelay);
    }
  }
  /**
   * Disconnects the client and stops the automatic reconnection loop.
   *
   * If there is an active STOMP connection at the time of invocation, the appropriate callbacks
   * will be triggered during the shutdown sequence. Once deactivated, the client will enter the
   * `INACTIVE` state, and no further reconnection attempts will be made.
   *
   * **Behavior**:
   * - If there is no active WebSocket connection, this method resolves immediately.
   * - If there is an active connection, the method waits for the underlying WebSocket
   *   to properly close before resolving.
   * - Multiple calls to this method are safe. Each invocation resolves upon completion.
   * - To reactivate, call [Client#activate]{@link Client#activate}.
   *
   * **Experimental Option:**
   * - By specifying the `force: true` option, the WebSocket connection is discarded immediately,
   *   bypassing both the STOMP and WebSocket shutdown sequences.
   * - **Caution:** Using `force: true` may leave the WebSocket in an inconsistent state,
   *   and brokers may not immediately detect the termination.
   *
   * Example:
   * ```javascript
   * // Graceful disconnect
   * await client.deactivate();
   *
   * // Forced disconnect to speed up shutdown when the connection is stale
   * await client.deactivate({ force: true });
   * ```
   *
   * @param options Configuration options for deactivation. Use `force: true` for immediate shutdown.
   * @returns A Promise that resolves when the deactivation process completes.
   */
  async deactivate(options = {}) {
    var _a;
    const force = options.force || false;
    const needToDispose = this.active;
    let retPromise;
    if (this.state === ActivationState.INACTIVE) {
      this.debug(`Already INACTIVE, nothing more to do`);
      return Promise.resolve();
    }
    this._changeState(ActivationState.DEACTIVATING);
    this._nextReconnectDelay = 0;
    if (this._reconnector) {
      clearTimeout(this._reconnector);
      this._reconnector = void 0;
    }
    if (this._stompHandler && // @ts-ignore - if there is a _stompHandler, there is the webSocket
    this.webSocket.readyState !== StompSocketState.CLOSED) {
      const origOnWebSocketClose = this._stompHandler.onWebSocketClose;
      retPromise = new Promise((resolve, reject) => {
        this._stompHandler.onWebSocketClose = (evt) => {
          origOnWebSocketClose(evt);
          resolve();
        };
      });
    } else {
      this._changeState(ActivationState.INACTIVE);
      return Promise.resolve();
    }
    if (force) {
      (_a = this._stompHandler) == null ? void 0 : _a.discardWebsocket();
    } else if (needToDispose) {
      this._disposeStompHandler();
    }
    return retPromise;
  }
  /**
   * Forces a disconnect by directly closing the WebSocket.
   *
   * Unlike a normal disconnect, this does not send a DISCONNECT sequence to the broker but
   * instead closes the WebSocket connection directly. After forcing a disconnect, the client
   * will automatically attempt to reconnect based on its `reconnectDelay` configuration.
   *
   * **Note:** To prevent further reconnect attempts, call [Client#deactivate]{@link Client#deactivate}.
   *
   * Example:
   * ```javascript
   * client.forceDisconnect();
   * ```
   */
  forceDisconnect() {
    if (this._stompHandler) {
      this._stompHandler.forceDisconnect();
    }
  }
  _disposeStompHandler() {
    if (this._stompHandler) {
      this._stompHandler.dispose();
    }
  }
  /**
   * Sends a message to the specified destination on the STOMP broker.
   *
   * The `body` must be a `string`. For non-string payloads (e.g., JSON), encode it as a string before sending.
   * If sending binary data, use the `binaryBody` parameter as a [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
   *
   * **Content-Length Behavior**:
   * - For non-binary messages, the `content-length` header is added by default.
   * - The `content-length` header can be skipped for text frames by setting `skipContentLengthHeader: true` in the parameters.
   * - For binary messages, the `content-length` header is always included.
   *
   * **Notes**:
   * - Ensure that brokers support binary frames before using `binaryBody`.
   * - Sending messages with NULL octets and missing `content-length` headers can cause brokers to disconnect and throw errors.
   *
   * Example:
   * ```javascript
   * // Basic text message
   * client.publish({ destination: "/queue/test", body: "Hello, STOMP" });
   *
   * // Text message with additional headers
   * client.publish({ destination: "/queue/test", headers: { priority: 9 }, body: "Hello, STOMP" });
   *
   * // Skip content-length header
   * client.publish({ destination: "/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true });
   *
   * // Binary message
   * const binaryData = new Uint8Array([1, 2, 3, 4]);
   * client.publish({
   *   destination: '/topic/special',
   *   binaryBody: binaryData,
   *   headers: { 'content-type': 'application/octet-stream' }
   * });
   * ```
   */
  publish(params) {
    this._checkConnection();
    this._stompHandler.publish(params);
  }
  _checkConnection() {
    if (!this.connected) {
      throw new TypeError("There is no underlying STOMP connection");
    }
  }
  /**
   * Monitors for a receipt acknowledgment from the broker for specific operations.
   *
   * Add a `receipt` header to the operation (like subscribe or publish), and use this method with
   * the same receipt ID to detect when the broker has acknowledged the operation's completion.
   *
   * The callback is invoked with the corresponding {@link IFrame} when the receipt is received.
   *
   * Example:
   * ```javascript
   * const receiptId = "unique-receipt-id";
   *
   * client.watchForReceipt(receiptId, (frame) => {
   *   console.log("Operation acknowledged by the broker:", frame);
   * });
   *
   * // Attach the receipt header to an operation
   * client.publish({ destination: "/queue/test", headers: { receipt: receiptId }, body: "Hello" });
   * ```
   *
   * @param receiptId Unique identifier for the receipt.
   * @param callback Callback function invoked on receiving the RECEIPT frame.
   */
  watchForReceipt(receiptId, callback) {
    this._checkConnection();
    this._stompHandler.watchForReceipt(receiptId, callback);
  }
  /**
   * Subscribes to a destination on the STOMP broker.
   *
   * The callback is triggered for each message received from the subscribed destination. The message
   * is passed as an {@link IMessage} instance.
   *
   * **Subscription ID**:
   * - If no `id` is provided in `headers`, the library generates a unique subscription ID automatically.
   * - Provide an explicit `id` in `headers` if you wish to manage the subscription ID manually.
   *
   * Example:
   * ```javascript
   * const callback = (message) => {
   *   console.log("Received message:", message.body);
   * };
   *
   * // Auto-generated subscription ID
   * const subscription = client.subscribe("/queue/test", callback);
   *
   * // Explicit subscription ID
   * const mySubId = "my-subscription-id";
   * const subscription = client.subscribe("/queue/test", callback, { id: mySubId });
   * ```
   *
   * @param destination Destination to subscribe to.
   * @param callback Function invoked for each received message.
   * @param headers Optional headers for subscription, such as `id`.
   * @returns A {@link StompSubscription} which can be used to manage the subscription.
   */
  subscribe(destination, callback, headers = {}) {
    this._checkConnection();
    return this._stompHandler.subscribe(destination, callback, headers);
  }
  /**
   * Unsubscribes from a subscription on the STOMP broker.
   *
   * Prefer using the `unsubscribe` method directly on the {@link StompSubscription} returned from `subscribe` for cleaner management:
   * ```javascript
   * const subscription = client.subscribe("/queue/test", callback);
   * // Unsubscribe using the subscription object
   * subscription.unsubscribe();
   * ```
   *
   * This method can also be used directly with the subscription ID.
   *
   * Example:
   * ```javascript
   * client.unsubscribe("my-subscription-id");
   * ```
   *
   * @param id Subscription ID to unsubscribe.
   * @param headers Optional headers to pass for the UNSUBSCRIBE frame.
   */
  unsubscribe(id, headers = {}) {
    this._checkConnection();
    this._stompHandler.unsubscribe(id, headers);
  }
  /**
   * Starts a new transaction. The returned {@link ITransaction} object provides
   * methods for [commit]{@link ITransaction#commit} and [abort]{@link ITransaction#abort}.
   *
   * If `transactionId` is not provided, the library generates a unique ID internally.
   *
   * Example:
   * ```javascript
   * const tx = client.begin(); // Auto-generated ID
   *
   * // Or explicitly specify a transaction ID
   * const tx = client.begin("my-transaction-id");
   * ```
   *
   * @param transactionId Optional transaction ID.
   * @returns An instance of {@link ITransaction}.
   */
  begin(transactionId) {
    this._checkConnection();
    return this._stompHandler.begin(transactionId);
  }
  /**
   * Commits a transaction.
   *
   * It is strongly recommended to call [commit]{@link ITransaction#commit} on
   * the transaction object returned by [client#begin]{@link Client#begin}.
   *
   * Example:
   * ```javascript
   * const tx = client.begin();
   * // Perform operations under this transaction
   * tx.commit();
   * ```
   *
   * @param transactionId The ID of the transaction to commit.
   */
  commit(transactionId) {
    this._checkConnection();
    this._stompHandler.commit(transactionId);
  }
  /**
   * Aborts a transaction.
   *
   * It is strongly recommended to call [abort]{@link ITransaction#abort} directly
   * on the transaction object returned by [client#begin]{@link Client#begin}.
   *
   * Example:
   * ```javascript
   * const tx = client.begin();
   * // Perform operations under this transaction
   * tx.abort(); // Abort the transaction
   * ```
   *
   * @param transactionId The ID of the transaction to abort.
   */
  abort(transactionId) {
    this._checkConnection();
    this._stompHandler.abort(transactionId);
  }
  /**
   * Acknowledges receipt of a message. Typically, this should be done by calling
   * [ack]{@link IMessage#ack} directly on the {@link IMessage} instance passed
   * to the subscription callback.
   *
   * Example:
   * ```javascript
   * const callback = (message) => {
   *   // Process the message
   *   message.ack(); // Acknowledge the message
   * };
   *
   * client.subscribe("/queue/example", callback, { ack: "client" });
   * ```
   *
   * @param messageId The ID of the message to acknowledge.
   * @param subscriptionId The ID of the subscription.
   * @param headers Optional headers for the acknowledgment frame.
   */
  ack(messageId, subscriptionId, headers = {}) {
    this._checkConnection();
    this._stompHandler.ack(messageId, subscriptionId, headers);
  }
  /**
   * Rejects a message (negative acknowledgment). Like acknowledgments, this should
   * typically be done by calling [nack]{@link IMessage#nack} directly on the {@link IMessage}
   * instance passed to the subscription callback.
   *
   * Example:
   * ```javascript
   * const callback = (message) => {
   *   // Process the message
   *   if (isError(message)) {
   *     message.nack(); // Reject the message
   *   }
   * };
   *
   * client.subscribe("/queue/example", callback, { ack: "client" });
   * ```
   *
   * @param messageId The ID of the message to negatively acknowledge.
   * @param subscriptionId The ID of the subscription.
   * @param headers Optional headers for the NACK frame.
   */
  nack(messageId, subscriptionId, headers = {}) {
    this._checkConnection();
    this._stompHandler.nack(messageId, subscriptionId, headers);
  }
}
function useStomp(options = {}) {
  const defaultBrokerURL = "";
  const config = {
    brokerURL: ref(options.brokerURL ?? defaultBrokerURL),
    reconnectDelay: options.reconnectDelay ?? 15e3,
    connectionTimeout: options.connectionTimeout ?? 1e4,
    useExponentialBackoff: options.useExponentialBackoff ?? false,
    maxReconnectAttempts: options.maxReconnectAttempts ?? 3,
    maxReconnectDelay: options.maxReconnectDelay ?? 6e4,
    autoRestoreSubscriptions: options.autoRestoreSubscriptions ?? true,
    debug: options.debug ?? false
  };
  const connectionState = ref(
    "DISCONNECTED"
    /* DISCONNECTED */
  );
  const isConnected = computed(
    () => connectionState.value === "CONNECTED"
    /* CONNECTED */
  );
  const reconnectAttempts = ref(0);
  let reconnectTimer = null;
  let connectionTimeoutTimer = null;
  const activeSubscriptions = /* @__PURE__ */ new Map();
  const subscriptionRegistry = /* @__PURE__ */ new Map();
  const stompClient = ref(null);
  let isManualDisconnect = false;
  const clearAllTimers = () => {
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
      reconnectTimer = null;
    }
    if (connectionTimeoutTimer) {
      clearTimeout(connectionTimeoutTimer);
      connectionTimeoutTimer = null;
    }
  };
  const log = (...args) => {
    if (config.debug) {
      console.log("[useStomp]", ...args);
    }
  };
  const logWarn = (...args) => {
    console.warn("[useStomp]", ...args);
  };
  const logError = (...args) => {
    console.error("[useStomp]", ...args);
  };
  const restoreSubscriptions = () => {
    if (!config.autoRestoreSubscriptions || subscriptionRegistry.size === 0) {
      return;
    }
    log(`开始恢复 ${subscriptionRegistry.size} 个订阅...`);
    for (const [destination, subscriptionConfig] of subscriptionRegistry.entries()) {
      try {
        performSubscribe(destination, subscriptionConfig.callback);
      } catch (error) {
        logError(`恢复订阅 ${destination} 失败:`, error);
      }
    }
  };
  const initializeClient = () => {
    if (stompClient.value && (stompClient.value.active || stompClient.value.connected)) {
      log("STOMP 客户端已存在且处于活动状态，跳过初始化");
      return;
    }
    if (!config.brokerURL.value) {
      logWarn("WebSocket 连接失败: 未配置 WebSocket 端点 URL");
      return;
    }
    const accessToken = AuthStorage.getAccessToken();
    if (!accessToken) {
      logWarn("WebSocket 连接失败：授权令牌为空，请先登录");
      return;
    }
    if (stompClient.value) {
      try {
        stompClient.value.deactivate();
      } catch (error) {
        logWarn("清理旧客户端时出错:", error);
      }
      stompClient.value = null;
    }
    stompClient.value = new Client({
      brokerURL: config.brokerURL.value,
      connectHeaders: {
        Authorization: `Bearer ${accessToken}`
      },
      debug: config.debug ? (msg) => console.log("[STOMP]", msg) : () => {
      },
      reconnectDelay: 0,
      // 禁用内置重连，使用自定义重连逻辑
      heartbeatIncoming: 4e3,
      heartbeatOutgoing: 4e3
    });
    stompClient.value.onConnect = () => {
      connectionState.value = "CONNECTED";
      reconnectAttempts.value = 0;
      clearAllTimers();
      log("✅ WebSocket 连接已建立");
      restoreSubscriptions();
    };
    stompClient.value.onDisconnect = () => {
      connectionState.value = "DISCONNECTED";
      log("❌ WebSocket 连接已断开");
      activeSubscriptions.clear();
      if (!isManualDisconnect && reconnectAttempts.value < config.maxReconnectAttempts) {
        scheduleReconnect();
      }
    };
    stompClient.value.onWebSocketClose = (event) => {
      connectionState.value = "DISCONNECTED";
      log(`WebSocket 已关闭: code=${event == null ? void 0 : event.code}, reason=${event == null ? void 0 : event.reason}`);
      if (isManualDisconnect) {
        log("手动断开连接，不进行重连");
        return;
      }
      if ((event == null ? void 0 : event.code) && [1e3, 1006, 1008, 1011].includes(event.code) && reconnectAttempts.value < config.maxReconnectAttempts) {
        log("检测到连接异常关闭，将尝试重连");
        scheduleReconnect();
      }
    };
    stompClient.value.onStompError = (frame) => {
      var _a, _b, _c, _d, _e;
      logError("STOMP 错误:", frame.headers, frame.body);
      connectionState.value = "DISCONNECTED";
      const isAuthError = ((_b = (_a = frame.headers) == null ? void 0 : _a.message) == null ? void 0 : _b.includes("Unauthorized")) || ((_c = frame.body) == null ? void 0 : _c.includes("Unauthorized")) || ((_d = frame.body) == null ? void 0 : _d.includes("Token")) || ((_e = frame.body) == null ? void 0 : _e.includes("401"));
      if (isAuthError) {
        logWarn("WebSocket 授权错误，停止重连");
        isManualDisconnect = true;
      }
    };
  };
  const scheduleReconnect = () => {
    if (connectionState.value === "CONNECTING" || isManualDisconnect) {
      return;
    }
    if (reconnectAttempts.value >= config.maxReconnectAttempts) {
      logError(`已达到最大重连次数 (${config.maxReconnectAttempts})，停止重连`);
      return;
    }
    reconnectAttempts.value++;
    connectionState.value = "RECONNECTING";
    const delay = config.useExponentialBackoff ? Math.min(
      config.reconnectDelay * Math.pow(2, reconnectAttempts.value - 1),
      config.maxReconnectDelay
    ) : config.reconnectDelay;
    log(`准备重连 (${reconnectAttempts.value}/${config.maxReconnectAttempts})，延迟 ${delay}ms`);
    if (reconnectTimer) {
      clearTimeout(reconnectTimer);
    }
    reconnectTimer = setTimeout(() => {
      if (connectionState.value !== "CONNECTED" && !isManualDisconnect) {
        log(`开始第 ${reconnectAttempts.value} 次重连...`);
        connect();
      }
    }, delay);
  };
  watch(config.brokerURL, (newURL, oldURL) => {
    if (newURL !== oldURL) {
      log(`WebSocket 端点已更改: ${oldURL} -> ${newURL}`);
      if (stompClient.value && stompClient.value.connected) {
        stompClient.value.deactivate();
      }
      initializeClient();
    }
  });
  initializeClient();
  const connect = () => {
    isManualDisconnect = false;
    if (!config.brokerURL.value) {
      logError("WebSocket 连接失败: 未配置 WebSocket 端点 URL");
      return;
    }
    if (connectionState.value === "CONNECTING") {
      log("WebSocket 正在连接中，跳过重复连接请求");
      return;
    }
    if (!stompClient.value) {
      initializeClient();
    }
    if (!stompClient.value) {
      logError("STOMP 客户端初始化失败");
      return;
    }
    if (stompClient.value.connected) {
      log("WebSocket 已连接，跳过重复连接");
      connectionState.value = "CONNECTED";
      return;
    }
    connectionState.value = "CONNECTING";
    if (connectionTimeoutTimer) {
      clearTimeout(connectionTimeoutTimer);
    }
    connectionTimeoutTimer = setTimeout(() => {
      if (connectionState.value === "CONNECTING") {
        logWarn("WebSocket 连接超时");
        connectionState.value = "DISCONNECTED";
        if (!isManualDisconnect && reconnectAttempts.value < config.maxReconnectAttempts) {
          scheduleReconnect();
        }
      }
    }, config.connectionTimeout);
    try {
      stompClient.value.activate();
      log("正在建立 WebSocket 连接...");
    } catch (error) {
      logError("激活 WebSocket 连接失败:", error);
      connectionState.value = "DISCONNECTED";
    }
  };
  const performSubscribe = (destination, callback) => {
    if (!stompClient.value || !stompClient.value.connected) {
      logWarn(`尝试订阅 ${destination} 失败: 客户端未连接`);
      return "";
    }
    try {
      const subscription = stompClient.value.subscribe(destination, callback);
      const subscriptionId = subscription.id;
      activeSubscriptions.set(subscriptionId, subscription);
      log(`✓ 订阅成功: ${destination} (ID: ${subscriptionId})`);
      return subscriptionId;
    } catch (error) {
      logError(`订阅 ${destination} 失败:`, error);
      return "";
    }
  };
  const subscribe = (destination, callback) => {
    var _a;
    subscriptionRegistry.set(destination, { destination, callback });
    if ((_a = stompClient.value) == null ? void 0 : _a.connected) {
      return performSubscribe(destination, callback);
    }
    log(`暂存订阅配置: ${destination}，将在连接建立后自动订阅`);
    return "";
  };
  const unsubscribe = (subscriptionId) => {
    const subscription = activeSubscriptions.get(subscriptionId);
    if (subscription) {
      try {
        subscription.unsubscribe();
        activeSubscriptions.delete(subscriptionId);
        log(`✓ 已取消订阅: ${subscriptionId}`);
      } catch (error) {
        logWarn(`取消订阅 ${subscriptionId} 时出错:`, error);
      }
    }
  };
  const unsubscribeDestination = (destination) => {
    subscriptionRegistry.delete(destination);
    for (const [id, subscription] of activeSubscriptions.entries()) {
      try {
        subscription.unsubscribe();
        activeSubscriptions.delete(id);
      } catch (error) {
        logWarn(`取消订阅 ${id} 时出错:`, error);
      }
    }
    log(`✓ 已移除主题订阅配置: ${destination}`);
  };
  const disconnect = (clearSubscriptions = true) => {
    isManualDisconnect = true;
    clearAllTimers();
    for (const [id, subscription] of activeSubscriptions.entries()) {
      try {
        subscription.unsubscribe();
      } catch (error) {
        logWarn(`取消订阅 ${id} 时出错:`, error);
      }
    }
    activeSubscriptions.clear();
    if (clearSubscriptions) {
      subscriptionRegistry.clear();
      log("已清除所有订阅配置");
    }
    if (stompClient.value) {
      try {
        if (stompClient.value.connected || stompClient.value.active) {
          stompClient.value.deactivate();
          log("✓ WebSocket 连接已主动断开");
        }
      } catch (error) {
        logError("断开 WebSocket 连接时出错:", error);
      }
      stompClient.value = null;
    }
    connectionState.value = "DISCONNECTED";
    reconnectAttempts.value = 0;
  };
  return {
    // 状态
    connectionState: readonly(connectionState),
    isConnected,
    reconnectAttempts: readonly(reconnectAttempts),
    // 连接管理
    connect,
    disconnect,
    // 订阅管理
    subscribe,
    unsubscribe,
    unsubscribeDestination,
    // 统计信息
    getActiveSubscriptionCount: () => activeSubscriptions.size,
    getRegisteredSubscriptionCount: () => subscriptionRegistry.size
  };
}
function useLayout() {
  const appStore = useAppStore();
  const settingsStore = useSettingsStore();
  const currentLayout = computed(() => settingsStore.layout);
  const isSidebarOpen = computed(() => appStore.sidebar.opened);
  const isShowTagsView = computed(() => settingsStore.showTagsView);
  const isShowSettings = computed(() => defaultSettings.showSettings);
  const isShowLogo = computed(() => settingsStore.showAppLogo);
  const isMobile = computed(() => appStore.device === "mobile");
  const layoutClass = computed(() => ({
    hideSidebar: !appStore.sidebar.opened,
    openSidebar: appStore.sidebar.opened,
    mobile: appStore.device === "mobile",
    [`layout-${settingsStore.layout}`]: true
  }));
  function toggleSidebar() {
    appStore.toggleSidebar();
  }
  function closeSidebar() {
    appStore.closeSideBar();
  }
  return {
    currentLayout,
    isSidebarOpen,
    isShowTagsView,
    isShowSettings,
    isShowLogo,
    isMobile,
    layoutClass,
    toggleSidebar,
    closeSidebar
  };
}
function useLayoutMenu() {
  const route = useRoute();
  const appStore = useAppStore();
  const permissionStore = usePermissionStore();
  const activeTopMenuPath = computed(() => appStore.activeTopMenuPath);
  const routes = computed(() => permissionStore.routes);
  const sideMenuRoutes = computed(() => permissionStore.mixLayoutSideMenus);
  const activeMenu = computed(() => {
    const { meta, path: path2 } = route;
    if (meta == null ? void 0 : meta.activeMenu) {
      return meta.activeMenu;
    }
    return path2;
  });
  return {
    routes,
    sideMenuRoutes,
    activeMenu,
    activeTopMenuPath
  };
}
function useDeviceDetection() {
  const appStore = useAppStore();
  const { width } = useWindowSize();
  const DESKTOP_BREAKPOINT = 992;
  const isDesktop = computed(() => width.value >= DESKTOP_BREAKPOINT);
  const isMobile = computed(() => appStore.device === DeviceEnum.MOBILE);
  watchEffect(() => {
    const deviceType = isDesktop.value ? DeviceEnum.DESKTOP : DeviceEnum.MOBILE;
    appStore.toggleDevice(deviceType);
    if (isDesktop.value) {
      appStore.openSideBar();
    } else {
      appStore.closeSideBar();
    }
  });
  return {
    isDesktop,
    isMobile
  };
}
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { layoutClass, isSidebarOpen, closeSidebar } = useLayout();
    const { isMobile } = useDeviceDetection();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["layout", unref(layoutClass)])
      }, [
        unref(isMobile) && unref(isSidebarOpen) ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "layout__overlay",
          onClick: _cache[0] || (_cache[0] = //@ts-ignore
          (...args) => unref(closeSidebar) && unref(closeSidebar)(...args))
        })) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
const BaseLayout = /* @__PURE__ */ _export_sfc$1(_sfc_main$m, [["__scopeId", "data-v-270ab7e4"]]);
const _hoisted_1$d = { class: "logo" };
const _hoisted_2$a = ["src"];
const _hoisted_3$7 = {
  key: 0,
  class: "title"
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_router_link = resolveComponent("router-link");
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createVNode(Transition, { "enter-active-class": "animate__animated animate__fadeInLeft" }, {
          default: withCtx(() => [
            (openBlock(), createBlock(_component_router_link, {
              key: +__props.collapse,
              class: "wh-full flex-center",
              to: "/"
            }, {
              default: withCtx(() => [
                createBaseVNode("img", {
                  src: unref(logo),
                  class: "w20px h20px"
                }, null, 8, _hoisted_2$a),
                !__props.collapse ? (openBlock(), createElementBlock("span", _hoisted_3$7, toDisplayString(unref(defaultSettings).title), 1)) : createCommentVNode("", true)
              ]),
              _: 1
            }))
          ]),
          _: 1
        })
      ]);
    };
  }
});
const AppLogo = /* @__PURE__ */ _export_sfc$1(_sfc_main$l, [["__scopeId", "data-v-8ca2532a"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    isActive: { type: Boolean, required: true }
  },
  emits: ["toggleClick"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const settingsStore = useSettingsStore();
    const layout = computed(() => settingsStore.layout);
    const hamburgerClass = computed(() => {
      if (settingsStore.theme === ThemeMode.DARK) {
        return "hamburger--white";
      }
      if (layout.value === LayoutMode.MIX && settingsStore.sidebarColorScheme === SidebarColor.CLASSIC_BLUE) {
        return "hamburger--white";
      }
      return "";
    });
    function toggleClick() {
      emit("toggleClick");
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "hamburger-wrapper",
        onClick: toggleClick
      }, [
        createBaseVNode("div", {
          class: normalizeClass(["i-svg:collapse", { hamburger: true, "is-active": __props.isActive }, unref(hamburgerClass)])
        }, null, 2)
      ]);
    };
  }
});
const Hamburger = /* @__PURE__ */ _export_sfc$1(_sfc_main$k, [["__scopeId", "data-v-559d6579"]]);
var dist = {};
var hasRequiredDist;
function requireDist() {
  if (hasRequiredDist) return dist;
  hasRequiredDist = 1;
  Object.defineProperty(dist, "__esModule", { value: true });
  dist.PathError = dist.TokenData = void 0;
  dist.parse = parse;
  dist.compile = compile;
  dist.match = match;
  dist.pathToRegexp = pathToRegexp;
  dist.stringify = stringify;
  const DEFAULT_DELIMITER = "/";
  const NOOP_VALUE = (value) => value;
  const ID_START = /^[$_\p{ID_Start}]$/u;
  const ID_CONTINUE = /^[$\u200c\u200d\p{ID_Continue}]$/u;
  const SIMPLE_TOKENS = {
    // Groups.
    "{": "{",
    "}": "}",
    // Reserved.
    "(": "(",
    ")": ")",
    "[": "[",
    "]": "]",
    "+": "+",
    "?": "?",
    "!": "!"
  };
  function escapeText(str) {
    return str.replace(/[{}()\[\]+?!:*\\]/g, "\\$&");
  }
  function escape(str) {
    return str.replace(/[.+*?^${}()[\]|/\\]/g, "\\$&");
  }
  class TokenData {
    constructor(tokens, originalPath) {
      this.tokens = tokens;
      this.originalPath = originalPath;
    }
  }
  dist.TokenData = TokenData;
  class PathError extends TypeError {
    constructor(message, originalPath) {
      let text = message;
      if (originalPath)
        text += `: ${originalPath}`;
      text += `; visit https://git.new/pathToRegexpError for info`;
      super(text);
      this.originalPath = originalPath;
    }
  }
  dist.PathError = PathError;
  function parse(str, options = {}) {
    const { encodePath = NOOP_VALUE } = options;
    const chars = [...str];
    const tokens = [];
    let index2 = 0;
    let pos = 0;
    function name() {
      let value = "";
      if (ID_START.test(chars[index2])) {
        do {
          value += chars[index2++];
        } while (ID_CONTINUE.test(chars[index2]));
      } else if (chars[index2] === '"') {
        let quoteStart = index2;
        while (index2++ < chars.length) {
          if (chars[index2] === '"') {
            index2++;
            quoteStart = 0;
            break;
          }
          if (chars[index2] === "\\")
            index2++;
          value += chars[index2];
        }
        if (quoteStart) {
          throw new PathError(`Unterminated quote at index ${quoteStart}`, str);
        }
      }
      if (!value) {
        throw new PathError(`Missing parameter name at index ${index2}`, str);
      }
      return value;
    }
    while (index2 < chars.length) {
      const value = chars[index2];
      const type = SIMPLE_TOKENS[value];
      if (type) {
        tokens.push({ type, index: index2++, value });
      } else if (value === "\\") {
        tokens.push({ type: "escape", index: index2++, value: chars[index2++] });
      } else if (value === ":") {
        tokens.push({ type: "param", index: index2++, value: name() });
      } else if (value === "*") {
        tokens.push({ type: "wildcard", index: index2++, value: name() });
      } else {
        tokens.push({ type: "char", index: index2++, value });
      }
    }
    tokens.push({ type: "end", index: index2, value: "" });
    function consumeUntil(endType) {
      const output = [];
      while (true) {
        const token = tokens[pos++];
        if (token.type === endType)
          break;
        if (token.type === "char" || token.type === "escape") {
          let path2 = token.value;
          let cur = tokens[pos];
          while (cur.type === "char" || cur.type === "escape") {
            path2 += cur.value;
            cur = tokens[++pos];
          }
          output.push({
            type: "text",
            value: encodePath(path2)
          });
          continue;
        }
        if (token.type === "param" || token.type === "wildcard") {
          output.push({
            type: token.type,
            name: token.value
          });
          continue;
        }
        if (token.type === "{") {
          output.push({
            type: "group",
            tokens: consumeUntil("}")
          });
          continue;
        }
        throw new PathError(`Unexpected ${token.type} at index ${token.index}, expected ${endType}`, str);
      }
      return output;
    }
    return new TokenData(consumeUntil("end"), str);
  }
  function compile(path2, options = {}) {
    const { encode = encodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
    const data = typeof path2 === "object" ? path2 : parse(path2, options);
    const fn = tokensToFunction(data.tokens, delimiter, encode);
    return function path3(params = {}) {
      const [path4, ...missing] = fn(params);
      if (missing.length) {
        throw new TypeError(`Missing parameters: ${missing.join(", ")}`);
      }
      return path4;
    };
  }
  function tokensToFunction(tokens, delimiter, encode) {
    const encoders = tokens.map((token) => tokenToFunction(token, delimiter, encode));
    return (data) => {
      const result = [""];
      for (const encoder of encoders) {
        const [value, ...extras] = encoder(data);
        result[0] += value;
        result.push(...extras);
      }
      return result;
    };
  }
  function tokenToFunction(token, delimiter, encode) {
    if (token.type === "text")
      return () => [token.value];
    if (token.type === "group") {
      const fn = tokensToFunction(token.tokens, delimiter, encode);
      return (data) => {
        const [value, ...missing] = fn(data);
        if (!missing.length)
          return [value];
        return [""];
      };
    }
    const encodeValue = encode || NOOP_VALUE;
    if (token.type === "wildcard" && encode !== false) {
      return (data) => {
        const value = data[token.name];
        if (value == null)
          return ["", token.name];
        if (!Array.isArray(value) || value.length === 0) {
          throw new TypeError(`Expected "${token.name}" to be a non-empty array`);
        }
        return [
          value.map((value2, index2) => {
            if (typeof value2 !== "string") {
              throw new TypeError(`Expected "${token.name}/${index2}" to be a string`);
            }
            return encodeValue(value2);
          }).join(delimiter)
        ];
      };
    }
    return (data) => {
      const value = data[token.name];
      if (value == null)
        return ["", token.name];
      if (typeof value !== "string") {
        throw new TypeError(`Expected "${token.name}" to be a string`);
      }
      return [encodeValue(value)];
    };
  }
  function match(path2, options = {}) {
    const { decode = decodeURIComponent, delimiter = DEFAULT_DELIMITER } = options;
    const { regexp, keys } = pathToRegexp(path2, options);
    const decoders = keys.map((key) => {
      if (decode === false)
        return NOOP_VALUE;
      if (key.type === "param")
        return decode;
      return (value) => value.split(delimiter).map(decode);
    });
    return function match2(input) {
      const m = regexp.exec(input);
      if (!m)
        return false;
      const path3 = m[0];
      const params = /* @__PURE__ */ Object.create(null);
      for (let i = 1; i < m.length; i++) {
        if (m[i] === void 0)
          continue;
        const key = keys[i - 1];
        const decoder = decoders[i - 1];
        params[key.name] = decoder(m[i]);
      }
      return { path: path3, params };
    };
  }
  function pathToRegexp(path2, options = {}) {
    const { delimiter = DEFAULT_DELIMITER, end = true, sensitive = false, trailing = true } = options;
    const keys = [];
    const flags = sensitive ? "" : "i";
    const sources = [];
    for (const input of pathsToArray(path2, [])) {
      const data = typeof input === "object" ? input : parse(input, options);
      for (const tokens of flatten(data.tokens, 0, [])) {
        sources.push(toRegExpSource(tokens, delimiter, keys, data.originalPath));
      }
    }
    let pattern = `^(?:${sources.join("|")})`;
    if (trailing)
      pattern += `(?:${escape(delimiter)}$)?`;
    pattern += end ? "$" : `(?=${escape(delimiter)}|$)`;
    const regexp = new RegExp(pattern, flags);
    return { regexp, keys };
  }
  function pathsToArray(paths, init) {
    if (Array.isArray(paths)) {
      for (const p of paths)
        pathsToArray(p, init);
    } else {
      init.push(paths);
    }
    return init;
  }
  function* flatten(tokens, index2, init) {
    if (index2 === tokens.length) {
      return yield init;
    }
    const token = tokens[index2];
    if (token.type === "group") {
      for (const seq of flatten(token.tokens, 0, init.slice())) {
        yield* flatten(tokens, index2 + 1, seq);
      }
    } else {
      init.push(token);
    }
    yield* flatten(tokens, index2 + 1, init);
  }
  function toRegExpSource(tokens, delimiter, keys, originalPath) {
    let result = "";
    let backtrack = "";
    let isSafeSegmentParam = true;
    for (const token of tokens) {
      if (token.type === "text") {
        result += escape(token.value);
        backtrack += token.value;
        isSafeSegmentParam || (isSafeSegmentParam = token.value.includes(delimiter));
        continue;
      }
      if (token.type === "param" || token.type === "wildcard") {
        if (!isSafeSegmentParam && !backtrack) {
          throw new PathError(`Missing text before "${token.name}" ${token.type}`, originalPath);
        }
        if (token.type === "param") {
          result += `(${negate(delimiter, isSafeSegmentParam ? "" : backtrack)}+)`;
        } else {
          result += `([\\s\\S]+)`;
        }
        keys.push(token);
        backtrack = "";
        isSafeSegmentParam = false;
        continue;
      }
    }
    return result;
  }
  function negate(delimiter, backtrack) {
    if (backtrack.length < 2) {
      if (delimiter.length < 2)
        return `[^${escape(delimiter + backtrack)}]`;
      return `(?:(?!${escape(delimiter)})[^${escape(backtrack)}])`;
    }
    if (delimiter.length < 2) {
      return `(?:(?!${escape(backtrack)})[^${escape(delimiter)}])`;
    }
    return `(?:(?!${escape(backtrack)}|${escape(delimiter)})[\\s\\S])`;
  }
  function stringifyTokens(tokens) {
    let value = "";
    let i = 0;
    function name(value2) {
      const isSafe = isNameSafe(value2) && isNextNameSafe(tokens[i]);
      return isSafe ? value2 : JSON.stringify(value2);
    }
    while (i < tokens.length) {
      const token = tokens[i++];
      if (token.type === "text") {
        value += escapeText(token.value);
        continue;
      }
      if (token.type === "group") {
        value += `{${stringifyTokens(token.tokens)}}`;
        continue;
      }
      if (token.type === "param") {
        value += `:${name(token.name)}`;
        continue;
      }
      if (token.type === "wildcard") {
        value += `*${name(token.name)}`;
        continue;
      }
      throw new TypeError(`Unknown token type: ${token.type}`);
    }
    return value;
  }
  function stringify(data) {
    return stringifyTokens(data.tokens);
  }
  function isNameSafe(name) {
    const [first, ...rest] = name;
    return ID_START.test(first) && rest.every((char) => ID_CONTINUE.test(char));
  }
  function isNextNameSafe(token) {
    if (token && token.type === "text")
      return !ID_CONTINUE.test(token.value[0]);
    return true;
  }
  return dist;
}
var distExports = requireDist();
function translateRouteTitle(title) {
  const hasKey = i18n.global.te("route." + title);
  if (hasKey) {
    const translatedTitle = i18n.global.t("route." + title);
    return translatedTitle;
  }
  return title;
}
const _hoisted_1$c = {
  key: 0,
  class: "color-gray-400"
};
const _hoisted_2$9 = ["onClick"];
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const currentRoute = useRoute();
    const pathCompile = (path2) => {
      const { params } = currentRoute;
      const toPath = distExports.compile(path2);
      return toPath(params);
    };
    const breadcrumbs = ref([]);
    function getBreadcrumb() {
      let matched = currentRoute.matched.filter((item) => item.meta && item.meta.title);
      const first = matched[0];
      if (!isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "dashboard" } }].concat(matched);
      }
      breadcrumbs.value = matched.filter((item) => {
        return item.meta && item.meta.title && item.meta.breadcrumb !== false;
      });
    }
    function isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return name.toString().trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase();
    }
    function handleLink(item) {
      const { redirect, path: path2 } = item;
      if (redirect) {
        router.push(redirect).catch((err) => {
          console.warn(err);
        });
        return;
      }
      router.push(pathCompile(path2)).catch((err) => {
        console.warn(err);
      });
    }
    watch(
      () => currentRoute.path,
      (path2) => {
        if (path2.startsWith("/redirect/")) {
          return;
        }
        getBreadcrumb();
      }
    );
    onBeforeMount(() => {
      getBreadcrumb();
    });
    return (_ctx, _cache) => {
      const _component_el_breadcrumb_item = ElBreadcrumbItem;
      const _component_el_breadcrumb = ElBreadcrumb;
      return openBlock(), createBlock(_component_el_breadcrumb, { class: "flex-y-center" }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(breadcrumbs), (item, index2) => {
            return openBlock(), createBlock(_component_el_breadcrumb_item, {
              key: item.path
            }, {
              default: withCtx(() => [
                item.redirect === "noredirect" || index2 === unref(breadcrumbs).length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1$c, toDisplayString(unref(translateRouteTitle)(item.meta.title)), 1)) : (openBlock(), createElementBlock("a", {
                  key: 1,
                  onClick: withModifiers(($event) => handleLink(item), ["prevent"])
                }, toDisplayString(unref(translateRouteTitle)(item.meta.title)), 9, _hoisted_2$9))
              ]),
              _: 2
            }, 1024);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
const Breadcrumb = /* @__PURE__ */ _export_sfc$1(_sfc_main$j, [["__scopeId", "data-v-0cb4d0ec"]]);
function isExternal(path2) {
  const isExternal2 = /^(https?:|http?:|mailto:|tel:)/.test(path2);
  return isExternal2;
}
const _hoisted_1$b = { class: "search-result" };
const _hoisted_2$8 = {
  key: 0,
  class: "search-history"
};
const _hoisted_3$6 = { class: "search-history__title" };
const _hoisted_4$4 = { class: "search-history__list" };
const _hoisted_5$4 = ["onClick"];
const _hoisted_6$4 = { class: "search-history__icon" };
const _hoisted_7$4 = { class: "search-history__name" };
const _hoisted_8$3 = { class: "search-history__action" };
const _hoisted_9$3 = { key: 0 };
const _hoisted_10$2 = ["onClick"];
const _hoisted_11$2 = {
  key: 2,
  class: "i-svg:menu"
};
const _hoisted_12$2 = { class: "ml-2" };
const _hoisted_13$1 = {
  key: 2,
  class: "no-history"
};
const HISTORY_KEY = "menu_search_history";
const MAX_HISTORY = 5;
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const permissionStore = usePermissionStore();
    const isModalVisible = ref(false);
    const searchKeyword = ref("");
    const searchInputRef = ref();
    const excludedRoutes = ref(["/redirect", "/login", "/401", "/404"]);
    const menuItems = ref([]);
    const searchResults = ref([]);
    const activeIndex = ref(-1);
    const searchHistory = ref([]);
    function loadSearchHistory() {
      const historyStr = localStorage.getItem(HISTORY_KEY);
      if (historyStr) {
        try {
          searchHistory.value = JSON.parse(historyStr);
        } catch {
          searchHistory.value = [];
        }
      }
    }
    function saveSearchHistory() {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(searchHistory.value));
    }
    function addToHistory(item) {
      const index2 = searchHistory.value.findIndex((i) => i.path === item.path);
      if (index2 !== -1) {
        searchHistory.value.splice(index2, 1);
      }
      searchHistory.value.unshift(item);
      if (searchHistory.value.length > MAX_HISTORY) {
        searchHistory.value = searchHistory.value.slice(0, MAX_HISTORY);
      }
      saveSearchHistory();
    }
    function removeHistoryItem(index2) {
      searchHistory.value.splice(index2, 1);
      saveSearchHistory();
    }
    function clearHistory() {
      searchHistory.value = [];
      localStorage.removeItem(HISTORY_KEY);
    }
    function handleKeyDown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearchModal();
      }
    }
    onMounted(() => {
      loadRoutes(permissionStore.routes);
      loadSearchHistory();
      document.addEventListener("keydown", handleKeyDown);
    });
    onBeforeUnmount(() => {
      document.removeEventListener("keydown", handleKeyDown);
    });
    function openSearchModal() {
      searchKeyword.value = "";
      activeIndex.value = -1;
      isModalVisible.value = true;
      setTimeout(() => {
        searchInputRef.value.focus();
      }, 100);
    }
    function closeSearchModal() {
      isModalVisible.value = false;
    }
    function updateSearchResults() {
      activeIndex.value = -1;
      if (searchKeyword.value) {
        const keyword = searchKeyword.value.toLowerCase();
        searchResults.value = menuItems.value.filter(
          (item) => item.title.toLowerCase().includes(keyword)
        );
      } else {
        searchResults.value = [];
      }
    }
    const displayResults = computed(() => searchResults.value);
    function selectActiveResult() {
      if (displayResults.value.length > 0 && activeIndex.value >= 0) {
        navigateToRoute(displayResults.value[activeIndex.value]);
      }
    }
    function navigateResults(direction) {
      if (displayResults.value.length === 0) return;
      if (direction === "up") {
        activeIndex.value = activeIndex.value <= 0 ? displayResults.value.length - 1 : activeIndex.value - 1;
      } else if (direction === "down") {
        activeIndex.value = activeIndex.value >= displayResults.value.length - 1 ? 0 : activeIndex.value + 1;
      }
    }
    function navigateToRoute(item) {
      closeSearchModal();
      addToHistory(item);
      if (isExternal(item.path)) {
        window.open(item.path, "_blank");
      } else {
        router.push({ path: item.path, query: item.params });
      }
    }
    function loadRoutes(routes, parentPath = "") {
      routes.forEach((route) => {
        var _a;
        const path2 = route.path.startsWith("/") ? route.path : `${parentPath}${parentPath.endsWith("/") ? "" : "/"}${route.path}`;
        if (excludedRoutes.value.includes(route.path) || isExternal(route.path)) return;
        if (route.children) {
          loadRoutes(route.children, path2);
        } else if ((_a = route.meta) == null ? void 0 : _a.title) {
          const title = route.meta.title === "dashboard" ? "首页" : route.meta.title;
          menuItems.value.push({
            title,
            path: path2,
            name: typeof route.name === "string" ? route.name : void 0,
            icon: route.meta.icon,
            redirect: typeof route.redirect === "string" ? route.redirect : void 0,
            params: route.meta.params ? JSON.parse(JSON.stringify(toRaw(route.meta.params))) : void 0
          });
        }
      });
    }
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_input = ElInput;
      const _component_el_icon = ElIcon;
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock("div", { onClick: openSearchModal }, [
        _cache[7] || (_cache[7] = createBaseVNode("div", { class: "i-svg:search" }, null, -1)),
        createVNode(_component_el_dialog, {
          modelValue: unref(isModalVisible),
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(isModalVisible) ? isModalVisible.value = $event : null),
          width: "30%",
          "append-to-body": true,
          "show-close": false,
          onClose: closeSearchModal
        }, {
          header: withCtx(() => [
            createVNode(_component_el_input, {
              ref_key: "searchInputRef",
              ref: searchInputRef,
              modelValue: unref(searchKeyword),
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(searchKeyword) ? searchKeyword.value = $event : null),
              size: "large",
              placeholder: "输入菜单名称关键字搜索",
              clearable: "",
              onKeyup: withKeys(selectActiveResult, ["enter"]),
              onInput: updateSearchResults,
              onKeydown: [
                _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => navigateResults("up"), ["prevent"]), ["up"])),
                _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => navigateResults("down"), ["prevent"]), ["down"])),
                withKeys(closeSearchModal, ["esc"])
              ]
            }, {
              prepend: withCtx(() => [
                createVNode(_component_el_button, { icon: "Search" })
              ]),
              _: 1
            }, 8, ["modelValue"])
          ]),
          footer: withCtx(() => [..._cache[6] || (_cache[6] = [
            createBaseVNode("div", { class: "dialog-footer" }, [
              createBaseVNode("div", { class: "ctrl-k-hint" }, [
                createBaseVNode("span", { class: "ctrl-k-text" }, "Ctrl+K 快速打开")
              ]),
              createBaseVNode("div", { class: "shortcuts-group" }, [
                createBaseVNode("div", { class: "key-box" }, [
                  createBaseVNode("div", { class: "key-btn" }, "选择")
                ]),
                createBaseVNode("div", { class: "arrow-box" }, [
                  createBaseVNode("div", { class: "arrow-up-down" }, [
                    createBaseVNode("div", { class: "key-btn" }, [
                      createBaseVNode("div", { class: "i-svg:up" })
                    ]),
                    createBaseVNode("div", { class: "key-btn ml-1" }, [
                      createBaseVNode("div", { class: "i-svg:down" })
                    ])
                  ]),
                  createBaseVNode("span", { class: "key-text" }, "切换")
                ]),
                createBaseVNode("div", { class: "key-box" }, [
                  createBaseVNode("div", { class: "key-btn esc-btn" }, "ESC"),
                  createBaseVNode("span", { class: "key-text" }, "关闭")
                ])
              ])
            ], -1)
          ])]),
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_1$b, [
              unref(searchKeyword) === "" && unref(searchHistory).length > 0 ? (openBlock(), createElementBlock("div", _hoisted_2$8, [
                createBaseVNode("div", _hoisted_3$6, [
                  _cache[4] || (_cache[4] = createTextVNode(" 搜索历史 ", -1)),
                  createVNode(_component_el_button, {
                    type: "primary",
                    text: "",
                    size: "small",
                    class: "search-history__clear",
                    onClick: clearHistory
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_el_icon, null, {
                        default: withCtx(() => [
                          createVNode(unref(delete_default))
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  })
                ]),
                createBaseVNode("ul", _hoisted_4$4, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(searchHistory), (item, index2) => {
                    return openBlock(), createElementBlock("li", {
                      key: index2,
                      class: "search-history__item",
                      onClick: ($event) => navigateToRoute(item)
                    }, [
                      createBaseVNode("div", _hoisted_6$4, [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(unref(clock_default))
                          ]),
                          _: 1
                        })
                      ]),
                      createBaseVNode("span", _hoisted_7$4, toDisplayString(item.title), 1),
                      createBaseVNode("div", _hoisted_8$3, [
                        createVNode(_component_el_icon, {
                          onClick: withModifiers(($event) => removeHistoryItem(index2), ["stop"])
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(close_default))
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ], 8, _hoisted_5$4);
                  }), 128))
                ])
              ])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                unref(displayResults).length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_9$3, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(displayResults), (item, index2) => {
                    return openBlock(), createElementBlock("li", {
                      key: item.path,
                      class: normalizeClass([
                        "search-result__item",
                        {
                          "search-result__item--active": index2 === unref(activeIndex)
                        }
                      ]),
                      onClick: ($event) => navigateToRoute(item)
                    }, [
                      item.icon && item.icon.startsWith("el-icon") ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(resolveDynamicComponent(item.icon.replace("el-icon-", ""))))
                        ]),
                        _: 2
                      }, 1024)) : item.icon ? (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: normalizeClass(`i-svg:${item.icon}`)
                      }, null, 2)) : (openBlock(), createElementBlock("div", _hoisted_11$2)),
                      createBaseVNode("span", _hoisted_12$2, toDisplayString(item.title), 1)
                    ], 10, _hoisted_10$2);
                  }), 128))
                ])) : createCommentVNode("", true)
              ], 64)),
              unref(searchKeyword) === "" && unref(searchHistory).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_13$1, [..._cache[5] || (_cache[5] = [
                createBaseVNode("p", { class: "no-history__text" }, "没有搜索历史", -1)
              ])])) : createCommentVNode("", true)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ]);
    };
  }
});
const MenuSearch = /* @__PURE__ */ _export_sfc$1(_sfc_main$i, [["__scopeId", "data-v-77ccba64"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { isFullscreen, toggle } = useFullscreen();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        onClick: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => unref(toggle) && unref(toggle)(...args))
      }, [
        createBaseVNode("div", {
          class: normalizeClass(`i-svg:` + (unref(isFullscreen) ? "fullscreen-exit" : "fullscreen"))
        }, null, 2)
      ]);
    };
  }
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const sizeOptions = computed(() => {
      return [
        { label: t("sizeSelect.default"), value: ComponentSize.DEFAULT },
        { label: t("sizeSelect.large"), value: ComponentSize.LARGE },
        { label: t("sizeSelect.small"), value: ComponentSize.SMALL }
      ];
    });
    const appStore = useAppStore();
    function handleSizeChange(size) {
      appStore.changeSize(size);
      ElMessage.success(t("sizeSelect.message.success"));
    }
    return (_ctx, _cache) => {
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      const _component_el_tooltip = ElTooltip;
      return openBlock(), createBlock(_component_el_tooltip, {
        content: unref(t)("sizeSelect.tooltip"),
        effect: "dark",
        placement: "bottom"
      }, {
        default: withCtx(() => [
          createVNode(_component_el_dropdown, {
            trigger: "click",
            onCommand: handleSizeChange
          }, {
            dropdown: withCtx(() => [
              createVNode(_component_el_dropdown_menu, null, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sizeOptions), (item) => {
                    return openBlock(), createBlock(_component_el_dropdown_item, {
                      key: item.value,
                      disabled: unref(appStore).size == item.value,
                      command: item.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(item.label), 1)
                      ]),
                      _: 2
                    }, 1032, ["disabled", "command"]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              _cache[0] || (_cache[0] = createBaseVNode("div", { class: "i-svg:size" }, null, -1))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["content"]);
    };
  }
});
const _hoisted_1$a = { key: 1 };
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "DictLabel",
  props: {
    code: String,
    // 字典编码
    modelValue: [String, Number],
    // 字典项的值
    size: {
      type: String,
      default: "default"
      // 标签大小
    }
  },
  setup(__props) {
    const props = __props;
    const label = ref("");
    const tagType = ref();
    const tagSize = ref(props.size);
    const dictStore = useDictStore();
    const getLabelAndTagByValue = async (dictCode, value) => {
      await dictStore.loadDictItems(dictCode);
      const dictItems = dictStore.getDictItems(dictCode);
      const dictItem = dictItems.find((item) => item.value == value);
      return {
        label: (dictItem == null ? void 0 : dictItem.label) || "",
        tagType: dictItem == null ? void 0 : dictItem.tagType
      };
    };
    const updateLabelAndTag = async () => {
      if (!props.code || props.modelValue === void 0) return;
      const { label: newLabel, tagType: newTagType } = await getLabelAndTagByValue(
        props.code,
        props.modelValue
      );
      label.value = newLabel;
      tagType.value = newTagType;
    };
    watch(
      [() => props.code, () => props.modelValue],
      async () => {
        if (props.code) {
          await updateLabelAndTag();
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_el_tag = ElTag;
      return unref(tagType) ? (openBlock(), createBlock(_component_el_tag, {
        key: 0,
        type: unref(tagType),
        size: unref(tagSize)
      }, {
        default: withCtx(() => [
          createTextVNode(toDisplayString(unref(label)), 1)
        ]),
        _: 1
      }, 8, ["type", "size"])) : (openBlock(), createElementBlock("span", _hoisted_1$a, toDisplayString(unref(label)), 1));
    };
  }
});
const NOTICE_BASE_URL = "/api/v1/notices";
const NoticeAPI = {
  /** 获取通知公告分页数据 */
  getPage(queryParams) {
    return httpRequest({
      url: `${NOTICE_BASE_URL}/page`,
      method: "get",
      params: queryParams
    });
  },
  /** 获取通知公告表单数据 */
  getFormData(id) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}/form`, method: "get" });
  },
  /** 添加通知公告 */
  create(data) {
    return httpRequest({ url: `${NOTICE_BASE_URL}`, method: "post", data });
  },
  /** 更新通知公告 */
  update(id, data) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}`, method: "put", data });
  },
  /** 批量删除通知公告，多个以英文逗号(,)分割 */
  deleteByIds(ids) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${ids}`, method: "delete" });
  },
  /** 发布通知 */
  publish(id) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}/publish`, method: "put" });
  },
  /** 撤回通知 */
  revoke(id) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}/revoke`, method: "put" });
  },
  /** 查看通知 */
  getDetail(id) {
    return httpRequest({ url: `${NOTICE_BASE_URL}/${id}/detail`, method: "get" });
  },
  /** 全部已读 */
  readAll() {
    return httpRequest({ url: `${NOTICE_BASE_URL}/read-all`, method: "put" });
  },
  /** 获取我的通知分页列表 */
  getMyNoticePage(queryParams) {
    return httpRequest({
      url: `${NOTICE_BASE_URL}/my`,
      method: "get",
      params: queryParams
    });
  }
};
const _hoisted_1$9 = {
  key: 1,
  class: "i-svg:bell"
};
const _hoisted_2$7 = { class: "p-5" };
const _hoisted_3$5 = { class: "flex-y-center" };
const _hoisted_4$3 = { class: "text-xs text-gray" };
const _hoisted_5$3 = { class: "flex-x-between" };
const _hoisted_6$3 = {
  key: 1,
  class: "flex-center h-150px w-350px"
};
const _hoisted_7$3 = {
  key: 0,
  class: "p-x-20px"
};
const _hoisted_8$2 = { class: "flex-y-center mb-16px text-13px text-color-secondary" };
const _hoisted_9$2 = { class: "flex-y-center" };
const _hoisted_10$1 = { class: "ml-2 flex-y-center" };
const _hoisted_11$1 = { class: "max-h-60vh pt-16px mb-24px overflow-y-auto border-t border-solid border-color" };
const _hoisted_12$1 = ["innerHTML"];
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const noticeList = ref([]);
    const noticeDialogVisible = ref(false);
    const noticeDetail = ref(null);
    const { subscribe, unsubscribe, isConnected } = useStomp();
    watch(
      () => isConnected.value,
      (connected) => {
        if (connected) {
          subscribe("/user/queue/message", (message) => {
            console.log("收到通知消息：", message);
            const data = JSON.parse(message.body);
            const id = data.id;
            if (!noticeList.value.some((notice) => notice.id == id)) {
              noticeList.value.unshift({
                id,
                title: data.title,
                type: data.type,
                publishTime: data.publishTime
              });
              ElNotification({
                title: "您收到一条新的通知消息！",
                message: data.title,
                type: "success",
                position: "bottom-right"
              });
            }
          });
        }
      }
    );
    function handleReadNotice(id) {
      NoticeAPI.getDetail(id).then((data) => {
        noticeDialogVisible.value = true;
        noticeDetail.value = data;
        const index2 = noticeList.value.findIndex((notice) => notice.id === id);
        if (index2 >= 0) {
          noticeList.value.splice(index2, 1);
        }
      });
    }
    function handleViewMoreNotice() {
      router.push({ name: "MyNotice" });
    }
    function handleMarkAllAsRead() {
      NoticeAPI.readAll().then(() => {
        noticeList.value = [];
      });
    }
    onMounted(() => {
    });
    onBeforeUnmount(() => {
      unsubscribe("/user/queue/message");
    });
    return (_ctx, _cache) => {
      var _a;
      const _component_el_badge = ElBadge;
      const _component_DictLabel = _sfc_main$f;
      const _component_el_text = ElText;
      const _component_el_divider = ElDivider;
      const _component_ArrowRight = resolveComponent("ArrowRight");
      const _component_el_icon = ElIcon;
      const _component_el_link = ElLink;
      const _component_el_empty = ElEmpty;
      const _component_el_dropdown = ElDropdown;
      const _component_User = resolveComponent("User");
      const _component_Timer = resolveComponent("Timer");
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_el_dropdown, { trigger: "click" }, {
          dropdown: withCtx(() => [
            createBaseVNode("div", _hoisted_2$7, [
              unref(noticeList).length > 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(unref(noticeList), (item, index2) => {
                  return openBlock(), createElementBlock("div", {
                    key: index2,
                    class: "w-500px py-3"
                  }, [
                    createBaseVNode("div", _hoisted_3$5, [
                      createVNode(_component_DictLabel, {
                        modelValue: item.type,
                        "onUpdate:modelValue": ($event) => item.type = $event,
                        code: "notice_type",
                        size: "small"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(_component_el_text, {
                        size: "small",
                        class: "w-200px cursor-pointer !ml-2 !flex-1",
                        truncated: "",
                        onClick: ($event) => handleReadNotice(item.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createBaseVNode("div", _hoisted_4$3, toDisplayString(item.publishTime), 1)
                    ])
                  ]);
                }), 128)),
                createVNode(_component_el_divider),
                createBaseVNode("div", _hoisted_5$3, [
                  createVNode(_component_el_link, {
                    type: "primary",
                    underline: "never",
                    onClick: handleViewMoreNotice
                  }, {
                    default: withCtx(() => [
                      _cache[2] || (_cache[2] = createBaseVNode("span", { class: "text-xs" }, "查看更多", -1)),
                      createVNode(_component_el_icon, { class: "text-xs" }, {
                        default: withCtx(() => [
                          createVNode(_component_ArrowRight)
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  unref(noticeList).length > 0 ? (openBlock(), createBlock(_component_el_link, {
                    key: 0,
                    type: "primary",
                    underline: "never",
                    onClick: handleMarkAllAsRead
                  }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createBaseVNode("span", { class: "text-xs" }, "全部已读", -1)
                    ])]),
                    _: 1
                  })) : createCommentVNode("", true)
                ])
              ], 64)) : (openBlock(), createElementBlock("div", _hoisted_6$3, [
                createVNode(_component_el_empty, {
                  "image-size": 50,
                  description: "暂无消息"
                })
              ]))
            ])
          ]),
          default: withCtx(() => [
            unref(noticeList).length > 0 ? (openBlock(), createBlock(_component_el_badge, {
              key: 0,
              value: unref(noticeList).length,
              max: 99
            }, {
              default: withCtx(() => [..._cache[1] || (_cache[1] = [
                createBaseVNode("div", { class: "i-svg:bell" }, null, -1)
              ])]),
              _: 1
            }, 8, ["value"])) : (openBlock(), createElementBlock("div", _hoisted_1$9))
          ]),
          _: 1
        }),
        createVNode(_component_el_dialog, {
          modelValue: unref(noticeDialogVisible),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(noticeDialogVisible) ? noticeDialogVisible.value = $event : null),
          title: ((_a = unref(noticeDetail)) == null ? void 0 : _a.title) ?? "通知详情",
          width: "800px",
          "custom-class": "notification-detail"
        }, {
          default: withCtx(() => [
            unref(noticeDetail) ? (openBlock(), createElementBlock("div", _hoisted_7$3, [
              createBaseVNode("div", _hoisted_8$2, [
                createBaseVNode("span", _hoisted_9$2, [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_User)
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(noticeDetail).publisherName), 1)
                ]),
                createBaseVNode("span", _hoisted_10$1, [
                  createVNode(_component_el_icon, null, {
                    default: withCtx(() => [
                      createVNode(_component_Timer)
                    ]),
                    _: 1
                  }),
                  createTextVNode(" " + toDisplayString(unref(noticeDetail).publishTime), 1)
                ])
              ]),
              createBaseVNode("div", _hoisted_11$1, [
                createBaseVNode("div", {
                  innerHTML: unref(noticeDetail).content
                }, null, 8, _hoisted_12$1)
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["modelValue", "title"])
      ], 64);
    };
  }
});
const _hoisted_1$8 = { class: "navbar-actions__item" };
const _hoisted_2$6 = { class: "navbar-actions__item" };
const _hoisted_3$4 = { class: "navbar-actions__item" };
const _hoisted_4$2 = { class: "navbar-actions__item" };
const _hoisted_5$2 = { class: "navbar-actions__item" };
const _hoisted_6$2 = { class: "navbar-actions__item" };
const _hoisted_7$2 = { class: "user-profile" };
const _hoisted_8$1 = ["src"];
const _hoisted_9$1 = { class: "user-profile__name" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "NavbarActions",
  setup(__props) {
    const { t } = useI18n();
    const appStore = useAppStore();
    const settingStore = useSettingsStore();
    const userStore = useUserStore();
    const route = useRoute();
    const router2 = useRouter();
    const isDesktop = computed(() => appStore.device === DeviceEnum.DESKTOP);
    function handleProfileClick() {
      router2.push({ name: "Profile" });
    }
    const navbarActionsClass = computed(() => {
      const { theme, sidebarColorScheme, layout } = settingStore;
      if (theme === ThemeMode.DARK) {
        return "navbar-actions--white-text";
      }
      if (theme === ThemeMode.LIGHT) {
        if (layout === LayoutMode.TOP || layout === LayoutMode.MIX) {
          if (sidebarColorScheme === SidebarColor.CLASSIC_BLUE) {
            return "navbar-actions--white-text";
          } else {
            return "navbar-actions--dark-text";
          }
        }
      }
      return "navbar-actions--dark-text";
    });
    function logout() {
      ElMessageBox.confirm("确定注销并退出系统吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        lockScroll: false
      }).then(() => {
        userStore.logout().then(() => {
          router2.push(`/login?redirect=${route.fullPath}`);
        });
      });
    }
    function handleSettingsClick() {
      settingStore.settingsVisible = true;
    }
    return (_ctx, _cache) => {
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["navbar-actions", unref(navbarActionsClass)])
      }, [
        unref(isDesktop) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createBaseVNode("div", _hoisted_1$8, [
            createVNode(MenuSearch)
          ]),
          createBaseVNode("div", _hoisted_2$6, [
            createVNode(_sfc_main$h)
          ]),
          createBaseVNode("div", _hoisted_3$4, [
            createVNode(_sfc_main$g)
          ]),
          createBaseVNode("div", _hoisted_4$2, [
            createVNode(_sfc_main$B)
          ]),
          createBaseVNode("div", _hoisted_5$2, [
            createVNode(_sfc_main$e)
          ])
        ], 64)) : createCommentVNode("", true),
        createBaseVNode("div", _hoisted_6$2, [
          createVNode(_component_el_dropdown, { trigger: "click" }, {
            dropdown: withCtx(() => [
              createVNode(_component_el_dropdown_menu, null, {
                default: withCtx(() => [
                  createVNode(_component_el_dropdown_item, { onClick: handleProfileClick }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("navbar.profile")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(_component_el_dropdown_item, {
                    divided: "",
                    onClick: logout
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(unref(t)("navbar.logout")), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            default: withCtx(() => [
              createBaseVNode("div", _hoisted_7$2, [
                createBaseVNode("img", {
                  class: "user-profile__avatar",
                  src: unref(userStore).userInfo.avatar
                }, null, 8, _hoisted_8$1),
                createBaseVNode("span", _hoisted_9$1, toDisplayString(unref(userStore).userInfo.username), 1)
              ])
            ]),
            _: 1
          })
        ]),
        unref(defaultSettings).showSettings ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "navbar-actions__item",
          onClick: handleSettingsClick
        }, [..._cache[0] || (_cache[0] = [
          createBaseVNode("div", { class: "i-svg:setting" }, null, -1)
        ])])) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const NavbarActions = /* @__PURE__ */ _export_sfc$1(_sfc_main$d, [["__scopeId", "data-v-3e4b4069"]]);
const _hoisted_1$7 = { class: "navbar" };
const _hoisted_2$5 = { class: "flex-y-center" };
const _hoisted_3$3 = { class: "navbar__actions" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const appStore = useAppStore();
    const isSidebarOpened = computed(() => appStore.sidebar.opened);
    function toggleSideBar() {
      console.log("🔄 Hamburger clicked! Current state:", isSidebarOpened.value);
      console.log("🔄 Device type:", appStore.device);
      appStore.toggleSidebar();
      console.log("🔄 New state:", appStore.sidebar.opened);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$5, [
          createVNode(Hamburger, {
            "is-active": unref(isSidebarOpened),
            onToggleClick: toggleSideBar
          }, null, 8, ["is-active"]),
          createVNode(Breadcrumb)
        ]),
        createBaseVNode("div", _hoisted_3$3, [
          createVNode(NavbarActions)
        ])
      ]);
    };
  }
});
const NavBar = /* @__PURE__ */ _export_sfc$1(_sfc_main$c, [["__scopeId", "data-v-b319c6f4"]]);
var pathBrowserify;
var hasRequiredPathBrowserify;
function requirePathBrowserify() {
  if (hasRequiredPathBrowserify) return pathBrowserify;
  hasRequiredPathBrowserify = 1;
  function assertPath(path2) {
    if (typeof path2 !== "string") {
      throw new TypeError("Path must be a string. Received " + JSON.stringify(path2));
    }
  }
  function normalizeStringPosix(path2, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for (var i = 0; i <= path2.length; ++i) {
      if (i < path2.length)
        code = path2.charCodeAt(i);
      else if (code === 47)
        break;
      else
        code = 47;
      if (code === 47) {
        if (lastSlash === i - 1 || dots === 1) ;
        else if (lastSlash !== i - 1 && dots === 2) {
          if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 || res.charCodeAt(res.length - 2) !== 46) {
            if (res.length > 2) {
              var lastSlashIndex = res.lastIndexOf("/");
              if (lastSlashIndex !== res.length - 1) {
                if (lastSlashIndex === -1) {
                  res = "";
                  lastSegmentLength = 0;
                } else {
                  res = res.slice(0, lastSlashIndex);
                  lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                }
                lastSlash = i;
                dots = 0;
                continue;
              }
            } else if (res.length === 2 || res.length === 1) {
              res = "";
              lastSegmentLength = 0;
              lastSlash = i;
              dots = 0;
              continue;
            }
          }
          if (allowAboveRoot) {
            if (res.length > 0)
              res += "/..";
            else
              res = "..";
            lastSegmentLength = 2;
          }
        } else {
          if (res.length > 0)
            res += "/" + path2.slice(lastSlash + 1, i);
          else
            res = path2.slice(lastSlash + 1, i);
          lastSegmentLength = i - lastSlash - 1;
        }
        lastSlash = i;
        dots = 0;
      } else if (code === 46 && dots !== -1) {
        ++dots;
      } else {
        dots = -1;
      }
    }
    return res;
  }
  function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) {
      return base;
    }
    if (dir === pathObject.root) {
      return dir + base;
    }
    return dir + sep + base;
  }
  var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
      var resolvedPath = "";
      var resolvedAbsolute = false;
      var cwd;
      for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
        var path2;
        if (i >= 0)
          path2 = arguments[i];
        else {
          if (cwd === void 0)
            cwd = process.cwd();
          path2 = cwd;
        }
        assertPath(path2);
        if (path2.length === 0) {
          continue;
        }
        resolvedPath = path2 + "/" + resolvedPath;
        resolvedAbsolute = path2.charCodeAt(0) === 47;
      }
      resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
      if (resolvedAbsolute) {
        if (resolvedPath.length > 0)
          return "/" + resolvedPath;
        else
          return "/";
      } else if (resolvedPath.length > 0) {
        return resolvedPath;
      } else {
        return ".";
      }
    },
    normalize: function normalize(path2) {
      assertPath(path2);
      if (path2.length === 0) return ".";
      var isAbsolute = path2.charCodeAt(0) === 47;
      var trailingSeparator = path2.charCodeAt(path2.length - 1) === 47;
      path2 = normalizeStringPosix(path2, !isAbsolute);
      if (path2.length === 0 && !isAbsolute) path2 = ".";
      if (path2.length > 0 && trailingSeparator) path2 += "/";
      if (isAbsolute) return "/" + path2;
      return path2;
    },
    isAbsolute: function isAbsolute(path2) {
      assertPath(path2);
      return path2.length > 0 && path2.charCodeAt(0) === 47;
    },
    join: function join() {
      if (arguments.length === 0)
        return ".";
      var joined;
      for (var i = 0; i < arguments.length; ++i) {
        var arg = arguments[i];
        assertPath(arg);
        if (arg.length > 0) {
          if (joined === void 0)
            joined = arg;
          else
            joined += "/" + arg;
        }
      }
      if (joined === void 0)
        return ".";
      return posix.normalize(joined);
    },
    relative: function relative(from, to) {
      assertPath(from);
      assertPath(to);
      if (from === to) return "";
      from = posix.resolve(from);
      to = posix.resolve(to);
      if (from === to) return "";
      var fromStart = 1;
      for (; fromStart < from.length; ++fromStart) {
        if (from.charCodeAt(fromStart) !== 47)
          break;
      }
      var fromEnd = from.length;
      var fromLen = fromEnd - fromStart;
      var toStart = 1;
      for (; toStart < to.length; ++toStart) {
        if (to.charCodeAt(toStart) !== 47)
          break;
      }
      var toEnd = to.length;
      var toLen = toEnd - toStart;
      var length = fromLen < toLen ? fromLen : toLen;
      var lastCommonSep = -1;
      var i = 0;
      for (; i <= length; ++i) {
        if (i === length) {
          if (toLen > length) {
            if (to.charCodeAt(toStart + i) === 47) {
              return to.slice(toStart + i + 1);
            } else if (i === 0) {
              return to.slice(toStart + i);
            }
          } else if (fromLen > length) {
            if (from.charCodeAt(fromStart + i) === 47) {
              lastCommonSep = i;
            } else if (i === 0) {
              lastCommonSep = 0;
            }
          }
          break;
        }
        var fromCode = from.charCodeAt(fromStart + i);
        var toCode = to.charCodeAt(toStart + i);
        if (fromCode !== toCode)
          break;
        else if (fromCode === 47)
          lastCommonSep = i;
      }
      var out = "";
      for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
        if (i === fromEnd || from.charCodeAt(i) === 47) {
          if (out.length === 0)
            out += "..";
          else
            out += "/..";
        }
      }
      if (out.length > 0)
        return out + to.slice(toStart + lastCommonSep);
      else {
        toStart += lastCommonSep;
        if (to.charCodeAt(toStart) === 47)
          ++toStart;
        return to.slice(toStart);
      }
    },
    _makeLong: function _makeLong(path2) {
      return path2;
    },
    dirname: function dirname(path2) {
      assertPath(path2);
      if (path2.length === 0) return ".";
      var code = path2.charCodeAt(0);
      var hasRoot = code === 47;
      var end = -1;
      var matchedSlash = true;
      for (var i = path2.length - 1; i >= 1; --i) {
        code = path2.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
          matchedSlash = false;
        }
      }
      if (end === -1) return hasRoot ? "/" : ".";
      if (hasRoot && end === 1) return "//";
      return path2.slice(0, end);
    },
    basename: function basename(path2, ext) {
      if (ext !== void 0 && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
      assertPath(path2);
      var start = 0;
      var end = -1;
      var matchedSlash = true;
      var i;
      if (ext !== void 0 && ext.length > 0 && ext.length <= path2.length) {
        if (ext.length === path2.length && ext === path2) return "";
        var extIdx = ext.length - 1;
        var firstNonSlashEnd = -1;
        for (i = path2.length - 1; i >= 0; --i) {
          var code = path2.charCodeAt(i);
          if (code === 47) {
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
            if (firstNonSlashEnd === -1) {
              matchedSlash = false;
              firstNonSlashEnd = i + 1;
            }
            if (extIdx >= 0) {
              if (code === ext.charCodeAt(extIdx)) {
                if (--extIdx === -1) {
                  end = i;
                }
              } else {
                extIdx = -1;
                end = firstNonSlashEnd;
              }
            }
          }
        }
        if (start === end) end = firstNonSlashEnd;
        else if (end === -1) end = path2.length;
        return path2.slice(start, end);
      } else {
        for (i = path2.length - 1; i >= 0; --i) {
          if (path2.charCodeAt(i) === 47) {
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
            matchedSlash = false;
            end = i + 1;
          }
        }
        if (end === -1) return "";
        return path2.slice(start, end);
      }
    },
    extname: function extname(path2) {
      assertPath(path2);
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var preDotState = 0;
      for (var i = path2.length - 1; i >= 0; --i) {
        var code = path2.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === 46) {
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        return "";
      }
      return path2.slice(startDot, end);
    },
    format: function format(pathObject) {
      if (pathObject === null || typeof pathObject !== "object") {
        throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
      }
      return _format("/", pathObject);
    },
    parse: function parse(path2) {
      assertPath(path2);
      var ret = { root: "", dir: "", base: "", ext: "", name: "" };
      if (path2.length === 0) return ret;
      var code = path2.charCodeAt(0);
      var isAbsolute = code === 47;
      var start;
      if (isAbsolute) {
        ret.root = "/";
        start = 1;
      } else {
        start = 0;
      }
      var startDot = -1;
      var startPart = 0;
      var end = -1;
      var matchedSlash = true;
      var i = path2.length - 1;
      var preDotState = 0;
      for (; i >= start; --i) {
        code = path2.charCodeAt(i);
        if (code === 47) {
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
        if (end === -1) {
          matchedSlash = false;
          end = i + 1;
        }
        if (code === 46) {
          if (startDot === -1) startDot = i;
          else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
          preDotState = -1;
        }
      }
      if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
      preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
        if (end !== -1) {
          if (startPart === 0 && isAbsolute) ret.base = ret.name = path2.slice(1, end);
          else ret.base = ret.name = path2.slice(startPart, end);
        }
      } else {
        if (startPart === 0 && isAbsolute) {
          ret.name = path2.slice(1, startDot);
          ret.base = path2.slice(1, end);
        } else {
          ret.name = path2.slice(startPart, startDot);
          ret.base = path2.slice(startPart, end);
        }
        ret.ext = path2.slice(startDot, end);
      }
      if (startPart > 0) ret.dir = path2.slice(0, startPart - 1);
      else if (isAbsolute) ret.dir = "/";
      return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
  };
  posix.posix = posix;
  pathBrowserify = posix;
  return pathBrowserify;
}
var pathBrowserifyExports = requirePathBrowserify();
const path = /* @__PURE__ */ getDefaultExportFromCjs(pathBrowserifyExports);
const _hoisted_1$6 = { class: "tags-container" };
const _hoisted_2$4 = {
  "h-full": "",
  "flex-y-center": "",
  "gap-8px": ""
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const router2 = useRouter();
    const route = useRoute();
    const permissionStore = usePermissionStore();
    const tagsViewStore = useTagsViewStore();
    const { visitedViews } = storeToRefs(tagsViewStore);
    const selectedTag = ref(null);
    const contextMenu = reactive({
      visible: false,
      x: 0,
      y: 0
    });
    const scrollbarRef = ref();
    const routePathMap = computed(() => {
      const map = /* @__PURE__ */ new Map();
      visitedViews.value.forEach((tag) => {
        map.set(tag.path, tag);
      });
      return map;
    });
    const isFirstView = computed(() => {
      var _a;
      if (!selectedTag.value) return false;
      return selectedTag.value.path === "/dashboard" || selectedTag.value.fullPath === ((_a = visitedViews.value[1]) == null ? void 0 : _a.fullPath);
    });
    const isLastView = computed(() => {
      var _a;
      if (!selectedTag.value) return false;
      return selectedTag.value.fullPath === ((_a = visitedViews.value[visitedViews.value.length - 1]) == null ? void 0 : _a.fullPath);
    });
    const extractAffixTags = (routes, basePath = "/") => {
      const affixTags = [];
      const traverse = (routeList, currentBasePath) => {
        routeList.forEach((route2) => {
          var _a, _b;
          const fullPath = pathBrowserifyExports.resolve(currentBasePath, route2.path);
          if ((_a = route2.meta) == null ? void 0 : _a.affix) {
            affixTags.push({
              path: fullPath,
              fullPath,
              name: String(route2.name || ""),
              title: route2.meta.title || "no-name",
              affix: true,
              keepAlive: route2.meta.keepAlive || false
            });
          }
          if ((_b = route2.children) == null ? void 0 : _b.length) {
            traverse(route2.children, fullPath);
          }
        });
      };
      traverse(routes, basePath);
      return affixTags;
    };
    const initAffixTags = () => {
      const affixTags = extractAffixTags(permissionStore.routes);
      affixTags.forEach((tag) => {
        if (tag.name) {
          tagsViewStore.addVisitedView(tag);
        }
      });
    };
    const addCurrentTag = () => {
      var _a;
      if (!((_a = route.meta) == null ? void 0 : _a.title)) return;
      tagsViewStore.addView({
        name: route.name,
        title: route.meta.title,
        path: route.path,
        fullPath: route.fullPath,
        affix: route.meta.affix || false,
        keepAlive: route.meta.keepAlive || false,
        query: route.query
      });
    };
    const updateCurrentTag = () => {
      nextTick(() => {
        var _a, _b, _c;
        const currentTag = routePathMap.value.get(route.path);
        if (currentTag && currentTag.fullPath !== route.fullPath) {
          tagsViewStore.updateVisitedView({
            name: route.name,
            title: ((_a = route.meta) == null ? void 0 : _a.title) || "",
            path: route.path,
            fullPath: route.fullPath,
            affix: ((_b = route.meta) == null ? void 0 : _b.affix) || false,
            keepAlive: ((_c = route.meta) == null ? void 0 : _c.keepAlive) || false,
            query: route.query
          });
        }
      });
    };
    const handleMiddleClick = (tag) => {
      if (!tag.affix) {
        closeSelectedTag(tag);
      }
    };
    const openContextMenu = (tag, event) => {
      contextMenu.x = event.clientX;
      contextMenu.y = event.clientY;
      contextMenu.visible = true;
      selectedTag.value = tag;
    };
    const closeContextMenu = () => {
      contextMenu.visible = false;
    };
    const handleScroll = (event) => {
      var _a;
      closeContextMenu();
      const scrollWrapper = (_a = scrollbarRef.value) == null ? void 0 : _a.wrapRef;
      if (!scrollWrapper) return;
      const hasHorizontalScroll = scrollWrapper.scrollWidth > scrollWrapper.clientWidth;
      if (!hasHorizontalScroll) return;
      const deltaY = event.deltaY || -event.wheelDelta || 0;
      const newScrollLeft = scrollWrapper.scrollLeft + deltaY;
      scrollbarRef.value.setScrollLeft(newScrollLeft);
    };
    const refreshSelectedTag = (tag) => {
      if (!tag) return;
      tagsViewStore.delCachedView(tag);
      nextTick(() => {
        router2.replace("/redirect" + tag.fullPath);
      });
    };
    const closeSelectedTag = (tag) => {
      if (!tag) return;
      tagsViewStore.delView(tag).then((result) => {
        if (tagsViewStore.isActive(tag)) {
          tagsViewStore.toLastView(result.visitedViews, tag);
        }
      });
    };
    const closeLeftTags = () => {
      if (!selectedTag.value) return;
      tagsViewStore.delLeftViews(selectedTag.value).then((result) => {
        const hasCurrentRoute = result.visitedViews.some((item) => item.path === route.path);
        if (!hasCurrentRoute) {
          tagsViewStore.toLastView(result.visitedViews);
        }
      });
    };
    const closeRightTags = () => {
      if (!selectedTag.value) return;
      tagsViewStore.delRightViews(selectedTag.value).then((result) => {
        const hasCurrentRoute = result.visitedViews.some((item) => item.path === route.path);
        if (!hasCurrentRoute) {
          tagsViewStore.toLastView(result.visitedViews);
        }
      });
    };
    const closeOtherTags = () => {
      if (!selectedTag.value) return;
      router2.push(selectedTag.value);
      tagsViewStore.delOtherViews(selectedTag.value).then(() => {
        updateCurrentTag();
      });
    };
    const closeAllTags = (tag) => {
      tagsViewStore.delAllViews().then((result) => {
        tagsViewStore.toLastView(result.visitedViews, tag || void 0);
      });
    };
    const useContextMenuManager = () => {
      const handleOutsideClick = () => {
        closeContextMenu();
      };
      watchEffect(() => {
        if (contextMenu.visible) {
          document.addEventListener("click", handleOutsideClick);
        } else {
          document.removeEventListener("click", handleOutsideClick);
        }
      });
      onBeforeUnmount(() => {
        document.removeEventListener("click", handleOutsideClick);
      });
    };
    watch(
      route,
      () => {
        addCurrentTag();
        updateCurrentTag();
      },
      { immediate: true }
    );
    onMounted(() => {
      initAffixTags();
    });
    useContextMenuManager();
    return (_ctx, _cache) => {
      var _a;
      const _component_el_tag = ElTag;
      const _component_el_scrollbar = ElScrollbar;
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createVNode(_component_el_scrollbar, {
          ref_key: "scrollbarRef",
          ref: scrollbarRef,
          class: "scroll-container",
          "view-style": { height: "100%" },
          onWheel: handleScroll
        }, {
          default: withCtx(() => [
            createBaseVNode("div", _hoisted_2$4, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(unref(visitedViews), (tag) => {
                return openBlock(), createBlock(_component_el_tag, {
                  key: tag.fullPath,
                  "h-26px": "",
                  "cursor-pointer": "",
                  closable: !tag.affix,
                  effect: unref(tagsViewStore).isActive(tag) ? "dark" : "light",
                  type: unref(tagsViewStore).isActive(tag) ? "primary" : "info",
                  onMouseup: withModifiers(($event) => handleMiddleClick(tag), ["middle"]),
                  onContextmenu: withModifiers((event) => openContextMenu(tag, event), ["prevent"]),
                  onClose: ($event) => closeSelectedTag(tag),
                  onClick: ($event) => unref(router2).push({
                    path: tag.fullPath,
                    query: tag.query
                  })
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(translateRouteTitle)(tag.title)), 1)
                  ]),
                  _: 2
                }, 1032, ["closable", "effect", "type", "onMouseup", "onContextmenu", "onClose", "onClick"]);
              }), 128))
            ])
          ]),
          _: 1
        }, 512),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          withDirectives(createBaseVNode("ul", {
            class: "contextmenu",
            style: normalizeStyle({ left: unref(contextMenu).x + "px", top: unref(contextMenu).y + "px" })
          }, [
            createBaseVNode("li", {
              onClick: _cache[0] || (_cache[0] = ($event) => refreshSelectedTag(unref(selectedTag)))
            }, [..._cache[3] || (_cache[3] = [
              createBaseVNode("div", { class: "i-svg:refresh" }, null, -1),
              createTextVNode(" 刷新 ", -1)
            ])]),
            !((_a = unref(selectedTag)) == null ? void 0 : _a.affix) ? (openBlock(), createElementBlock("li", {
              key: 0,
              onClick: _cache[1] || (_cache[1] = ($event) => closeSelectedTag(unref(selectedTag)))
            }, [..._cache[4] || (_cache[4] = [
              createBaseVNode("div", { class: "i-svg:close" }, null, -1),
              createTextVNode(" 关闭 ", -1)
            ])])) : createCommentVNode("", true),
            createBaseVNode("li", { onClick: closeOtherTags }, [..._cache[5] || (_cache[5] = [
              createBaseVNode("div", { class: "i-svg:close_other" }, null, -1),
              createTextVNode(" 关闭其它 ", -1)
            ])]),
            !unref(isFirstView) ? (openBlock(), createElementBlock("li", {
              key: 1,
              onClick: closeLeftTags
            }, [..._cache[6] || (_cache[6] = [
              createBaseVNode("div", { class: "i-svg:close_left" }, null, -1),
              createTextVNode(" 关闭左侧 ", -1)
            ])])) : createCommentVNode("", true),
            !unref(isLastView) ? (openBlock(), createElementBlock("li", {
              key: 2,
              onClick: closeRightTags
            }, [..._cache[7] || (_cache[7] = [
              createBaseVNode("div", { class: "i-svg:close_right" }, null, -1),
              createTextVNode(" 关闭右侧 ", -1)
            ])])) : createCommentVNode("", true),
            createBaseVNode("li", {
              onClick: _cache[2] || (_cache[2] = ($event) => closeAllTags(unref(selectedTag)))
            }, [..._cache[8] || (_cache[8] = [
              createBaseVNode("div", { class: "i-svg:close_all" }, null, -1),
              createTextVNode(" 关闭所有 ", -1)
            ])])
          ], 4), [
            [vShow, unref(contextMenu).visible]
          ])
        ]))
      ]);
    };
  }
});
const TagsView = /* @__PURE__ */ _export_sfc$1(_sfc_main$b, [["__scopeId", "data-v-b940b169"]]);
const dark = "_dark_1h0dk_26";
const variables = {
  "sidebar-width": "210px",
  "navbar-height": "50px",
  "tags-view-height": "34px",
  "menu-background": "var(--menu-background)",
  "menu-text": "var(--menu-text)",
  "menu-active-text": "var(--menu-active-text)",
  "menu-hover": "var(--menu-hover)",
  "sidebar-color-blue": "_sidebar-color-blue_1h0dk_16",
  dark
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { cachedViews } = toRefs(useTagsViewStore());
    const wrapperMap = /* @__PURE__ */ new Map();
    const currentComponent = (component, route) => {
      if (!component) return;
      const { fullPath: componentName } = route;
      let wrapper = wrapperMap.get(componentName);
      if (!wrapper) {
        wrapper = {
          name: componentName,
          render: () => {
            try {
              return h(component);
            } catch (error) {
              console.error(`Error rendering component for route: ${componentName}`, error);
              return h(Error404);
            }
          }
        };
        wrapperMap.set(componentName, wrapper);
      }
      if (wrapperMap.size > 100) {
        const firstKey = wrapperMap.keys().next().value;
        if (firstKey) {
          wrapperMap.delete(firstKey);
        }
      }
      return h(wrapper);
    };
    const appMainHeight = computed(() => {
      if (useSettingsStore().showTagsView) {
        return `calc(100vh - ${variables["navbar-height"]} - ${variables["tags-view-height"]})`;
      } else {
        return `calc(100vh - ${variables["navbar-height"]})`;
      }
    });
    return (_ctx, _cache) => {
      const _component_router_view = resolveComponent("router-view");
      const _component_el_backtop = ElBacktop;
      return openBlock(), createElementBlock("section", {
        class: "app-main",
        style: normalizeStyle({ height: unref(appMainHeight) })
      }, [
        createVNode(_component_router_view, null, {
          default: withCtx(({ Component, route }) => [
            createVNode(Transition, {
              "enter-active-class": "animate__animated animate__fadeIn",
              mode: "out-in"
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(KeepAlive, { include: unref(cachedViews) }, [
                  (openBlock(), createBlock(resolveDynamicComponent(currentComponent(Component, route)), {
                    key: route.fullPath
                  }))
                ], 1032, ["include"]))
              ]),
              _: 2
            }, 1024)
          ]),
          _: 1
        }),
        createVNode(_component_el_backtop, { target: ".app-main" }, {
          default: withCtx(() => [..._cache[0] || (_cache[0] = [
            createBaseVNode("div", { class: "i-svg:backtop w-6 h-6" }, null, -1)
          ])]),
          _: 1
        })
      ], 4);
    };
  }
});
const AppMain = /* @__PURE__ */ _export_sfc$1(_sfc_main$a, [["__scopeId", "data-v-32ded618"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...{
    name: "AppLink",
    inheritAttrs: false
  },
  __name: "index",
  props: {
    to: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const isExternalLink = computed(() => {
      return isExternal(props.to.path || "");
    });
    const linkType = computed(() => isExternalLink.value ? "a" : "router-link");
    const linkProps = (to) => {
      if (isExternalLink.value) {
        return {
          href: to.path,
          target: "_blank",
          rel: "noopener noreferrer"
        };
      }
      return { to };
    };
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(linkType)), normalizeProps(guardReactiveProps(linkProps(__props.to))), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16);
    };
  }
});
const _hoisted_1$5 = {
  key: 1,
  class: "i-svg:menu menu-icon"
};
const _hoisted_2$3 = {
  key: 2,
  class: "menu-title ml-1"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "MenuItemContent",
  props: {
    icon: {},
    title: {}
  },
  setup(__props) {
    const props = __props;
    const isElIcon = computed(() => {
      var _a;
      return (_a = props.icon) == null ? void 0 : _a.startsWith("el-icon");
    });
    const iconComponent = computed(() => {
      var _a;
      return (_a = props.icon) == null ? void 0 : _a.replace("el-icon-", "");
    });
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      return openBlock(), createElementBlock(Fragment, null, [
        __props.icon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          unref(isElIcon) ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: "menu-icon"
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(unref(iconComponent))))
            ]),
            _: 1
          })) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass([`i-svg:${__props.icon}`, "menu-icon"])
          }, null, 2))
        ], 64)) : (openBlock(), createElementBlock("div", _hoisted_1$5)),
        __props.title ? (openBlock(), createElementBlock("span", _hoisted_2$3, toDisplayString(unref(translateRouteTitle)(__props.title)), 1)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const MenuItemContent = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["__scopeId", "data-v-d391d0fe"]]);
const _hoisted_1$4 = { key: 0 };
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...{
    name: "MenuItem",
    inheritAttrs: false
  },
  __name: "MenuItem",
  props: {
    /**
     * 当前路由对象
     */
    item: {
      type: Object,
      required: true
    },
    /**
     * 父级完整路径
     */
    basePath: {
      type: String,
      required: true
    },
    /**
     * 是否为嵌套路由
     */
    isNest: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const onlyOneChild = ref();
    function hasOneShowingChild(children = [], parent) {
      const showingChildren = children.filter((route) => {
        var _a;
        if (!((_a = route.meta) == null ? void 0 : _a.hidden)) {
          onlyOneChild.value = route;
          return true;
        }
        return false;
      });
      if (showingChildren.length === 1) {
        return true;
      }
      if (showingChildren.length === 0) {
        onlyOneChild.value = { ...parent, path: "", noShowingChildren: true };
        return true;
      }
      return false;
    }
    function resolvePath(routePath) {
      if (isExternal(routePath)) return routePath;
      if (isExternal(props.basePath)) return props.basePath;
      return path.resolve(props.basePath, routePath);
    }
    return (_ctx, _cache) => {
      var _a, _b;
      const _component_el_menu_item = ElMenuItem;
      const _component_AppLink = _sfc_main$9;
      const _component_MenuItem = resolveComponent("MenuItem", true);
      const _component_el_sub_menu = ElSubMenu;
      return !__props.item.meta || !__props.item.meta.hidden ? (openBlock(), createElementBlock("div", _hoisted_1$4, [
        // 未配置始终显示，使用唯一子节点替换父节点显示为叶子节点
        hasOneShowingChild(__props.item.children, __props.item) && !((_a = __props.item.meta) == null ? void 0 : _a.alwaysShow) && (!unref(onlyOneChild).children || unref(onlyOneChild).noShowingChildren) || // 即使配置了始终显示，但无子节点，也显示为叶子节点
        ((_b = __props.item.meta) == null ? void 0 : _b.alwaysShow) && !__props.item.children ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          unref(onlyOneChild).meta ? (openBlock(), createBlock(_component_AppLink, {
            key: 0,
            to: {
              path: resolvePath(unref(onlyOneChild).path),
              query: unref(onlyOneChild).meta.params
            }
          }, {
            default: withCtx(() => [
              createVNode(_component_el_menu_item, {
                index: resolvePath(unref(onlyOneChild).path),
                class: normalizeClass({ "submenu-title-noDropdown": !__props.isNest })
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    unref(onlyOneChild).meta ? (openBlock(), createBlock(MenuItemContent, {
                      key: 0,
                      icon: unref(onlyOneChild).meta.icon || ((_a2 = __props.item.meta) == null ? void 0 : _a2.icon),
                      title: unref(onlyOneChild).meta.title
                    }, null, 8, ["icon", "title"])) : createCommentVNode("", true)
                  ];
                }),
                _: 1
              }, 8, ["index", "class"])
            ]),
            _: 1
          }, 8, ["to"])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createBlock(_component_el_sub_menu, {
          key: 1,
          index: resolvePath(__props.item.path),
          "data-path": __props.item.path,
          teleported: ""
        }, {
          title: withCtx(() => [
            __props.item.meta ? (openBlock(), createBlock(MenuItemContent, {
              key: 0,
              icon: __props.item.meta.icon,
              title: __props.item.meta.title
            }, null, 8, ["icon", "title"])) : createCommentVNode("", true)
          ]),
          default: withCtx(() => [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.item.children, (child) => {
              return openBlock(), createBlock(_component_MenuItem, {
                key: child.path,
                "is-nest": true,
                item: child,
                "base-path": resolvePath(child.path)
              }, null, 8, ["item", "base-path"]);
            }), 128))
          ]),
          _: 1
        }, 8, ["index", "data-path"]))
      ])) : createCommentVNode("", true);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "BasicMenu",
  props: {
    data: {
      type: Array,
      default: () => []
    },
    basePath: {
      type: String,
      required: true,
      example: "/system"
    },
    menuMode: {
      type: String,
      default: "vertical",
      validator: (value) => ["vertical", "horizontal"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const menuRef = ref();
    const settingsStore = useSettingsStore();
    const appStore = useAppStore();
    const currentRoute = useRoute();
    const expandedMenuIndexes = ref([]);
    const theme = computed(() => settingsStore.theme);
    const sidebarColorScheme = computed(() => settingsStore.sidebarColorScheme);
    const menuThemeProps = computed(() => {
      const isDarkOrClassicBlue = theme.value === "dark" || sidebarColorScheme.value === SidebarColor.CLASSIC_BLUE;
      return {
        backgroundColor: isDarkOrClassicBlue ? variables["menu-background"] : void 0,
        textColor: isDarkOrClassicBlue ? variables["menu-text"] : void 0,
        activeTextColor: isDarkOrClassicBlue ? variables["menu-active-text"] : void 0
      };
    });
    const activeMenuPath = computed(() => {
      const { meta, path: path2 } = currentRoute;
      if ((meta == null ? void 0 : meta.activeMenu) && typeof meta.activeMenu === "string") {
        return meta.activeMenu;
      }
      return path2;
    });
    function resolveFullPath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(props.basePath)) {
        return props.basePath;
      }
      if (!props.basePath || props.basePath === "") {
        return routePath;
      }
      return path.resolve(props.basePath, routePath);
    }
    const onMenuOpen = (index2) => {
      expandedMenuIndexes.value.push(index2);
    };
    const onMenuClose = (index2) => {
      expandedMenuIndexes.value = expandedMenuIndexes.value.filter((item) => item !== index2);
    };
    watch(
      () => expandedMenuIndexes.value,
      () => {
        updateParentMenuStyles();
      }
    );
    watch(
      () => props.menuMode,
      (newMode) => {
        if (newMode === "horizontal" && menuRef.value) {
          expandedMenuIndexes.value.forEach((item) => menuRef.value.close(item));
        }
      }
    );
    watch(
      () => activeMenuPath.value,
      () => {
        nextTick(() => {
          updateParentMenuStyles();
        });
      },
      { immediate: true }
    );
    watch(
      () => currentRoute.path,
      () => {
        nextTick(() => {
          updateParentMenuStyles();
        });
      }
    );
    function updateParentMenuStyles() {
      var _a;
      if (!((_a = menuRef.value) == null ? void 0 : _a.$el)) return;
      nextTick(() => {
        var _a2;
        try {
          const menuEl = (_a2 = menuRef.value) == null ? void 0 : _a2.$el;
          if (!menuEl) return;
          const allSubMenus = menuEl.querySelectorAll(".el-sub-menu");
          allSubMenus.forEach((subMenu) => {
            subMenu.classList.remove("has-active-child");
          });
          const activeMenuItem = menuEl.querySelector(".el-menu-item.is-active");
          if (activeMenuItem) {
            let parent = activeMenuItem.parentElement;
            while (parent && parent !== menuEl) {
              if (parent.classList.contains("el-sub-menu")) {
                parent.classList.add("has-active-child");
              }
              parent = parent.parentElement;
            }
          } else {
            if (props.menuMode === "horizontal") {
              const currentPath = activeMenuPath.value;
              allSubMenus.forEach((subMenu) => {
                var _a3;
                const subMenuEl = subMenu;
                const subMenuPath = subMenuEl.getAttribute("data-path") || ((_a3 = subMenuEl.querySelector(".el-sub-menu__title")) == null ? void 0 : _a3.getAttribute("data-path"));
                if (subMenuPath && currentPath.startsWith(subMenuPath)) {
                  subMenuEl.classList.add("has-active-child");
                }
              });
            }
          }
        } catch (error) {
          console.error("Error updating parent menu styles:", error);
        }
      });
    }
    onMounted(() => {
      updateParentMenuStyles();
    });
    return (_ctx, _cache) => {
      const _component_el_menu = ElMenu;
      return openBlock(), createBlock(_component_el_menu, {
        ref_key: "menuRef",
        ref: menuRef,
        "default-active": unref(activeMenuPath),
        collapse: !unref(appStore).sidebar.opened,
        "background-color": unref(menuThemeProps).backgroundColor,
        "text-color": unref(menuThemeProps).textColor,
        "active-text-color": unref(menuThemeProps).activeTextColor,
        "popper-effect": unref(theme),
        "unique-opened": false,
        "collapse-transition": false,
        mode: __props.menuMode,
        onOpen: onMenuOpen,
        onClose: onMenuClose
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.data, (route) => {
            return openBlock(), createBlock(_sfc_main$7, {
              key: route.path,
              item: route,
              "base-path": resolveFullPath(route.path)
            }, null, 8, ["item", "base-path"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["default-active", "collapse", "background-color", "text-color", "active-text-color", "popper-effect", "mode"]);
    };
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { isShowTagsView, isShowLogo, isSidebarOpen } = useLayout();
    const { routes } = useLayoutMenu();
    return (_ctx, _cache) => {
      const _component_el_scrollbar = ElScrollbar;
      return openBlock(), createBlock(BaseLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["layout__sidebar", { "layout__sidebar--collapsed": !unref(isSidebarOpen) }])
          }, [
            createBaseVNode("div", {
              class: normalizeClass([{ "has-logo": unref(isShowLogo) }, "layout-sidebar"])
            }, [
              unref(isShowLogo) ? (openBlock(), createBlock(AppLogo, {
                key: 0,
                collapse: !unref(isSidebarOpen)
              }, null, 8, ["collapse"])) : createCommentVNode("", true),
              createVNode(_component_el_scrollbar, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$6, {
                    data: unref(routes),
                    "base-path": ""
                  }, null, 8, ["data"])
                ]),
                _: 1
              })
            ], 2)
          ], 2),
          createBaseVNode("div", {
            class: normalizeClass([{
              hasTagsView: unref(isShowTagsView),
              "layout__main--collapsed": !unref(isSidebarOpen)
            }, "layout__main"])
          }, [
            createVNode(NavBar),
            unref(isShowTagsView) ? (openBlock(), createBlock(TagsView, { key: 0 })) : createCommentVNode("", true),
            createVNode(AppMain)
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const LeftLayout = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-68b67cea"]]);
const _hoisted_1$3 = { class: "layout__header" };
const _hoisted_2$2 = { class: "layout__header-left" };
const _hoisted_3$2 = { class: "layout__header-right" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { isShowTagsView, isShowLogo } = useLayout();
    const { routes } = useLayoutMenu();
    const { width } = useWindowSize();
    const isLogoCollapsed = computed(() => width.value < 768);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(BaseLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$3, [
            createBaseVNode("div", _hoisted_2$2, [
              unref(isShowLogo) ? (openBlock(), createBlock(AppLogo, {
                key: 0,
                collapse: unref(isLogoCollapsed)
              }, null, 8, ["collapse"])) : createCommentVNode("", true),
              createVNode(_sfc_main$6, {
                data: unref(routes),
                "menu-mode": "horizontal",
                "base-path": ""
              }, null, 8, ["data"])
            ]),
            createBaseVNode("div", _hoisted_3$2, [
              createVNode(NavbarActions)
            ])
          ]),
          createBaseVNode("div", {
            class: normalizeClass([{ hasTagsView: unref(isShowTagsView) }, "layout__main"])
          }, [
            unref(isShowTagsView) ? (openBlock(), createBlock(TagsView, { key: 0 })) : createCommentVNode("", true),
            createVNode(AppMain)
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const TopLayout = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-3f853765"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "MixTopMenu"
  },
  __name: "MixTopMenu",
  setup(__props) {
    const router2 = useRouter();
    const appStore = useAppStore();
    const permissionStore = usePermissionStore();
    const settingsStore = useSettingsStore();
    const theme = computed(() => settingsStore.theme);
    const sidebarColorScheme = computed(() => settingsStore.sidebarColorScheme);
    const topMenus = ref([]);
    const processedTopMenus = computed(() => {
      return topMenus.value.map((route) => {
        var _a, _b, _c, _d, _e;
        if (((_a = route.meta) == null ? void 0 : _a.alwaysShow) || !route.children || route.children.length === 0) {
          return route;
        }
        const visibleChildren = route.children.filter((child) => {
          var _a2;
          return !((_a2 = child.meta) == null ? void 0 : _a2.hidden);
        });
        if (visibleChildren.length === 1) {
          const onlyChild = visibleChildren[0];
          return {
            ...route,
            meta: {
              ...route.meta,
              title: ((_b = onlyChild.meta) == null ? void 0 : _b.title) || ((_c = route.meta) == null ? void 0 : _c.title),
              icon: ((_d = onlyChild.meta) == null ? void 0 : _d.icon) || ((_e = route.meta) == null ? void 0 : _e.icon)
            }
          };
        }
        return route;
      });
    });
    const handleMenuSelect = (routePath) => {
      updateMenuState(routePath);
    };
    const updateMenuState = (topMenuPath, skipNavigation = false) => {
      if (topMenuPath !== appStore.activeTopMenuPath) {
        appStore.activeTopMenu(topMenuPath);
        permissionStore.setMixLayoutSideMenus(topMenuPath);
      }
      if (!skipNavigation) {
        navigateToFirstLeftMenu(permissionStore.mixLayoutSideMenus);
      }
    };
    const navigateToFirstLeftMenu = (menus) => {
      var _a;
      if (menus.length === 0) return;
      const [firstMenu] = menus;
      if (firstMenu.children && firstMenu.children.length > 0) {
        navigateToFirstLeftMenu(firstMenu.children);
      } else if (firstMenu.name) {
        router2.push({
          name: firstMenu.name,
          query: typeof ((_a = firstMenu.meta) == null ? void 0 : _a.params) === "object" ? firstMenu.meta.params : void 0
        });
      }
    };
    const activeTopMenuPath = computed(() => appStore.activeTopMenuPath);
    onMounted(() => {
      var _a;
      topMenus.value = permissionStore.routes.filter((item) => !item.meta || !item.meta.hidden);
      const currentTopMenuPath = useRoute().path.split("/").filter(Boolean).length > 1 ? ((_a = useRoute().path.match(/^\/[^/]+/)) == null ? void 0 : _a[0]) || "/" : "/";
      appStore.activeTopMenu(currentTopMenuPath);
      permissionStore.setMixLayoutSideMenus(currentTopMenuPath);
    });
    watch(
      () => router2.currentRoute.value.path,
      (newPath) => {
        var _a;
        if (newPath) {
          const topMenuPath = newPath.split("/").filter(Boolean).length > 1 ? ((_a = newPath.match(/^\/[^/]+/)) == null ? void 0 : _a[0]) || "/" : "/";
          updateMenuState(topMenuPath, true);
        }
      }
    );
    return (_ctx, _cache) => {
      const _component_el_menu_item = ElMenuItem;
      const _component_el_menu = ElMenu;
      return openBlock(), createBlock(_component_el_menu, {
        mode: "horizontal",
        "default-active": unref(activeTopMenuPath),
        "background-color": unref(theme) === "dark" || unref(sidebarColorScheme) === unref(SidebarColor).CLASSIC_BLUE ? unref(variables)["menu-background"] : void 0,
        "text-color": unref(theme) === "dark" || unref(sidebarColorScheme) === unref(SidebarColor).CLASSIC_BLUE ? unref(variables)["menu-text"] : void 0,
        "active-text-color": unref(theme) === "dark" || unref(sidebarColorScheme) === unref(SidebarColor).CLASSIC_BLUE ? unref(variables)["menu-active-text"] : void 0,
        onSelect: handleMenuSelect
      }, {
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(processedTopMenus), (menuItem) => {
            return openBlock(), createBlock(_component_el_menu_item, {
              key: menuItem.path,
              index: menuItem.path
            }, {
              default: withCtx(() => [
                menuItem.meta ? (openBlock(), createBlock(MenuItemContent, {
                  key: 0,
                  icon: menuItem.meta.icon,
                  title: menuItem.meta.title
                }, null, 8, ["icon", "title"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1032, ["index"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["default-active", "background-color", "text-color", "active-text-color"]);
    };
  }
});
const MixTopMenu = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-0e1778ed"]]);
const _hoisted_1$2 = { class: "layout__header" };
const _hoisted_2$1 = { class: "layout__header-content" };
const _hoisted_3$1 = {
  key: 0,
  class: "layout__header-logo"
};
const _hoisted_4$1 = { class: "layout__header-menu" };
const _hoisted_5$1 = { class: "layout__header-actions" };
const _hoisted_6$1 = { class: "layout__container" };
const _hoisted_7$1 = { class: "layout__sidebar-toggle" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const route = useRoute();
    const { isShowTagsView, isShowLogo, isSidebarOpen, toggleSidebar } = useLayout();
    const { sideMenuRoutes, activeTopMenuPath } = useLayoutMenu();
    const { width } = useWindowSize();
    const isLogoCollapsed = computed(() => width.value < 768);
    const activeLeftMenuPath = computed(() => {
      const { meta, path: path2 } = route;
      if ((meta == null ? void 0 : meta.activeMenu) && typeof meta.activeMenu === "string") {
        return meta.activeMenu;
      }
      return path2;
    });
    function resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (routePath.startsWith("/")) {
        return activeTopMenuPath.value + routePath;
      }
      return `${activeTopMenuPath.value}/${routePath}`;
    }
    watch(
      () => route.path,
      (newPath) => {
        var _a;
        const topMenuPath = newPath.split("/").filter(Boolean).length > 1 ? ((_a = newPath.match(/^\/[^/]+/)) == null ? void 0 : _a[0]) || "/" : "/";
        if (newPath.startsWith(activeTopMenuPath.value)) ;
        else if (topMenuPath !== activeTopMenuPath.value) {
          const appStore = useAppStore();
          const permissionStore = usePermissionStore();
          appStore.activeTopMenu(topMenuPath);
          permissionStore.setMixLayoutSideMenus(topMenuPath);
        }
      },
      { immediate: true }
    );
    return (_ctx, _cache) => {
      const _component_el_menu = ElMenu;
      const _component_el_scrollbar = ElScrollbar;
      return openBlock(), createBlock(BaseLayout, null, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$2, [
            createBaseVNode("div", _hoisted_2$1, [
              unref(isShowLogo) ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
                createVNode(AppLogo, { collapse: unref(isLogoCollapsed) }, null, 8, ["collapse"])
              ])) : createCommentVNode("", true),
              createBaseVNode("div", _hoisted_4$1, [
                createVNode(MixTopMenu)
              ]),
              createBaseVNode("div", _hoisted_5$1, [
                createVNode(NavbarActions)
              ])
            ])
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createBaseVNode("div", {
              class: normalizeClass(["layout__sidebar--left", { "layout__sidebar--collapsed": !unref(isSidebarOpen) }])
            }, [
              createVNode(_component_el_scrollbar, null, {
                default: withCtx(() => [
                  createVNode(_component_el_menu, {
                    "default-active": unref(activeLeftMenuPath),
                    collapse: !unref(isSidebarOpen),
                    "collapse-transition": false,
                    "unique-opened": false,
                    "background-color": unref(variables)["menu-background"],
                    "text-color": unref(variables)["menu-text"],
                    "active-text-color": unref(variables)["menu-active-text"]
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(Fragment, null, renderList(unref(sideMenuRoutes), (item) => {
                        return openBlock(), createBlock(_sfc_main$7, {
                          key: item.path,
                          item,
                          "base-path": resolvePath(item.path)
                        }, null, 8, ["item", "base-path"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["default-active", "collapse", "background-color", "text-color", "active-text-color"])
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_7$1, [
                createVNode(Hamburger, {
                  "is-active": unref(isSidebarOpen),
                  onToggleClick: unref(toggleSidebar)
                }, null, 8, ["is-active", "onToggleClick"])
              ])
            ], 2),
            createBaseVNode("div", {
              class: normalizeClass([{ hasTagsView: unref(isShowTagsView) }, "layout__main"])
            }, [
              unref(isShowTagsView) ? (openBlock(), createBlock(TagsView, { key: 0 })) : createCommentVNode("", true),
              createVNode(AppMain)
            ], 2)
          ])
        ]),
        _: 1
      });
    };
  }
});
const MixLayout = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-2619370e"]]);
const _hoisted_1$1 = { class: "settings-content" };
const _hoisted_2 = { class: "config-section" };
const _hoisted_3 = { class: "flex-center" };
const _hoisted_4 = { class: "config-section" };
const _hoisted_5 = { class: "config-item flex-x-between" };
const _hoisted_6 = { class: "text-xs" };
const _hoisted_7 = { class: "config-item flex-x-between" };
const _hoisted_8 = { class: "text-xs" };
const _hoisted_9 = { class: "config-item flex-x-between" };
const _hoisted_10 = { class: "text-xs" };
const _hoisted_11 = { class: "config-item flex-x-between" };
const _hoisted_12 = { class: "text-xs" };
const _hoisted_13 = {
  key: 0,
  class: "config-item flex-x-between"
};
const _hoisted_14 = { class: "text-xs" };
const _hoisted_15 = { class: "config-section" };
const _hoisted_16 = { class: "layout-select" };
const _hoisted_17 = { class: "layout-grid" };
const _hoisted_18 = ["onClick", "onKeydown"];
const _hoisted_19 = { class: "layout-preview" };
const _hoisted_20 = {
  key: 0,
  class: "layout-header"
};
const _hoisted_21 = {
  key: 1,
  class: "layout-sidebar"
};
const _hoisted_22 = { class: "layout-name" };
const _hoisted_23 = {
  key: 0,
  class: "layout-check"
};
const _hoisted_24 = { class: "action-buttons" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const copyIcon = markRaw(document_copy_default);
    const resetIcon = markRaw(refresh_left_default);
    const copyLoading = ref(false);
    const resetLoading = ref(false);
    const layoutOptions = [
      { value: LayoutMode.LEFT, label: t("settings.leftLayout"), className: "left" },
      { value: LayoutMode.TOP, label: t("settings.topLayout"), className: "top" },
      { value: LayoutMode.MIX, label: t("settings.mixLayout"), className: "mix" }
    ];
    const colorPresets = themeColorPresets;
    const settingsStore = useSettingsStore();
    const isDark = ref(settingsStore.theme === ThemeMode.DARK);
    const sidebarColor = ref(settingsStore.sidebarColorScheme);
    const selectedThemeColor = computed({
      get: () => settingsStore.themeColor,
      set: (value) => settingsStore.updateThemeColor(value)
    });
    const drawerVisible = computed({
      get: () => settingsStore.settingsVisible,
      set: (value) => settingsStore.settingsVisible = value
    });
    const handleThemeChange = (isDark2) => {
      settingsStore.updateTheme(isDark2 ? ThemeMode.DARK : ThemeMode.LIGHT);
    };
    const changeSidebarColor = (val) => {
      settingsStore.updateSidebarColorScheme(val);
    };
    const handleLayoutChange = (layout) => {
      if (settingsStore.layout === layout) return;
      settingsStore.updateLayout(layout);
    };
    const handleCopySettings = async () => {
      try {
        copyLoading.value = true;
        const configCode = generateSettingsCode();
        await navigator.clipboard.writeText(configCode);
        ElMessage.success({
          message: t("settings.copySuccess"),
          duration: 3e3
        });
      } catch {
        ElMessage.error("复制配置失败");
      } finally {
        copyLoading.value = false;
      }
    };
    const handleResetSettings = async () => {
      resetLoading.value = true;
      try {
        settingsStore.resetSettings();
        isDark.value = settingsStore.theme === ThemeMode.DARK;
        sidebarColor.value = settingsStore.sidebarColorScheme;
        ElMessage.success(t("settings.resetSuccess"));
      } catch {
        ElMessage.error("重置配置失败");
      } finally {
        resetLoading.value = false;
      }
    };
    const generateSettingsCode = () => {
      const settings = {
        title: "pkg.name",
        version: "pkg.version",
        showSettings: true,
        showTagsView: settingsStore.showTagsView,
        showAppLogo: settingsStore.showAppLogo,
        layout: `LayoutMode.${settingsStore.layout.toUpperCase()}`,
        theme: `ThemeMode.${settingsStore.theme.toUpperCase()}`,
        size: "ComponentSize.DEFAULT",
        language: "LanguageEnum.ZH_CN",
        themeColor: `"${settingsStore.themeColor}"`,
        showWatermark: settingsStore.showWatermark,
        watermarkContent: "pkg.name",
        sidebarColorScheme: `SidebarColor.${settingsStore.sidebarColorScheme.toUpperCase().replace("-", "_")}`
      };
      return `const defaultSettings: AppSettings = {
  title: ${settings.title},
  version: ${settings.version},
  showSettings: ${settings.showSettings},
  showTagsView: ${settings.showTagsView},
  showAppLogo: ${settings.showAppLogo},
  layout: ${settings.layout},
  theme: ${settings.theme},
  size: ${settings.size},
  language: ${settings.language},
  themeColor: ${settings.themeColor},
  showWatermark: ${settings.showWatermark},
  watermarkContent: ${settings.watermarkContent},
  sidebarColorScheme: ${settings.sidebarColorScheme},
};`;
    };
    const handleCloseDrawer = () => {
      settingsStore.settingsVisible = false;
    };
    return (_ctx, _cache) => {
      const _component_el_divider = ElDivider;
      const _component_el_switch = ElSwitch;
      const _component_el_color_picker = ElColorPicker;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_icon = ElIcon;
      const _component_el_tooltip = ElTooltip;
      const _component_el_button = ElButton;
      const _component_el_drawer = ElDrawer;
      return openBlock(), createBlock(_component_el_drawer, {
        modelValue: unref(drawerVisible),
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(drawerVisible) ? drawerVisible.value = $event : null),
        size: "380",
        title: unref(t)("settings.project"),
        "before-close": handleCloseDrawer,
        class: "settings-drawer"
      }, {
        footer: withCtx(() => [
          createBaseVNode("div", _hoisted_24, [
            createVNode(_component_el_tooltip, {
              content: "复制配置将生成当前设置的代码，覆盖 src/settings.ts 下的 defaultSettings 变量",
              placement: "top"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "primary",
                  size: "default",
                  icon: unref(copyIcon),
                  loading: unref(copyLoading),
                  onClick: handleCopySettings
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(copyLoading) ? "复制中..." : unref(t)("settings.copyConfig")), 1)
                  ]),
                  _: 1
                }, 8, ["icon", "loading"])
              ]),
              _: 1
            }),
            createVNode(_component_el_tooltip, {
              content: "重置将恢复所有设置为默认值",
              placement: "top"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  type: "warning",
                  size: "default",
                  icon: unref(resetIcon),
                  loading: unref(resetLoading),
                  onClick: handleResetSettings
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(resetLoading) ? "重置中..." : unref(t)("settings.resetConfig")), 1)
                  ]),
                  _: 1
                }, 8, ["icon", "loading"])
              ]),
              _: 1
            })
          ])
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1$1, [
            createBaseVNode("section", _hoisted_2, [
              createVNode(_component_el_divider, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("settings.theme")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_3, [
                createVNode(_component_el_switch, {
                  modelValue: unref(isDark),
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(isDark) ? isDark.value = $event : null),
                  "active-icon": "Moon",
                  "inactive-icon": "Sunny",
                  class: "theme-switch",
                  onChange: handleThemeChange
                }, null, 8, ["modelValue"])
              ])
            ]),
            createBaseVNode("section", _hoisted_4, [
              createVNode(_component_el_divider, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("settings.interface")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_5, [
                createBaseVNode("span", _hoisted_6, toDisplayString(unref(t)("settings.themeColor")), 1),
                createVNode(_component_el_color_picker, {
                  modelValue: unref(selectedThemeColor),
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(selectedThemeColor) ? selectedThemeColor.value = $event : null),
                  predefine: unref(colorPresets),
                  "popper-class": "theme-picker-dropdown"
                }, null, 8, ["modelValue", "predefine"])
              ]),
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("span", _hoisted_8, toDisplayString(unref(t)("settings.showTagsView")), 1),
                createVNode(_component_el_switch, {
                  modelValue: unref(settingsStore).showTagsView,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(settingsStore).showTagsView = $event)
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("span", _hoisted_10, toDisplayString(unref(t)("settings.showAppLogo")), 1),
                createVNode(_component_el_switch, {
                  modelValue: unref(settingsStore).showAppLogo,
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(settingsStore).showAppLogo = $event)
                }, null, 8, ["modelValue"])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("span", _hoisted_12, toDisplayString(unref(t)("settings.showWatermark")), 1),
                createVNode(_component_el_switch, {
                  modelValue: unref(settingsStore).showWatermark,
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(settingsStore).showWatermark = $event)
                }, null, 8, ["modelValue"])
              ]),
              !unref(isDark) ? (openBlock(), createElementBlock("div", _hoisted_13, [
                createBaseVNode("span", _hoisted_14, toDisplayString(unref(t)("settings.sidebarColorScheme")), 1),
                createVNode(_component_el_radio_group, {
                  modelValue: unref(sidebarColor),
                  "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(sidebarColor) ? sidebarColor.value = $event : null),
                  onChange: changeSidebarColor
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_radio, {
                      value: unref(SidebarColor).CLASSIC_BLUE
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("settings.classicBlue")), 1)
                      ]),
                      _: 1
                    }, 8, ["value"]),
                    createVNode(_component_el_radio, {
                      value: unref(SidebarColor).MINIMAL_WHITE
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(unref(t)("settings.minimalWhite")), 1)
                      ]),
                      _: 1
                    }, 8, ["value"])
                  ]),
                  _: 1
                }, 8, ["modelValue"])
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("section", _hoisted_15, [
              createVNode(_component_el_divider, null, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("settings.navigation")), 1)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_16, [
                createBaseVNode("div", _hoisted_17, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(layoutOptions, (item) => {
                    return createVNode(_component_el_tooltip, {
                      key: item.value,
                      content: item.label,
                      placement: "bottom"
                    }, {
                      default: withCtx(() => [
                        createBaseVNode("div", {
                          role: "button",
                          tabindex: "0",
                          class: normalizeClass([
                            "layout-item",
                            item.className,
                            {
                              "is-active": unref(settingsStore).layout === item.value
                            }
                          ]),
                          onClick: ($event) => handleLayoutChange(item.value),
                          onKeydown: withKeys(($event) => handleLayoutChange(item.value), ["enter", "space"])
                        }, [
                          createBaseVNode("div", _hoisted_19, [
                            item.value !== unref(LayoutMode).LEFT ? (openBlock(), createElementBlock("div", _hoisted_20)) : createCommentVNode("", true),
                            item.value !== unref(LayoutMode).TOP ? (openBlock(), createElementBlock("div", _hoisted_21)) : createCommentVNode("", true),
                            _cache[7] || (_cache[7] = createBaseVNode("div", { class: "layout-main" }, null, -1))
                          ]),
                          createBaseVNode("div", _hoisted_22, toDisplayString(item.label), 1),
                          unref(settingsStore).layout === item.value ? (openBlock(), createElementBlock("div", _hoisted_23, [
                            createVNode(_component_el_icon, null, {
                              default: withCtx(() => [
                                createVNode(unref(check_default))
                              ]),
                              _: 1
                            })
                          ])) : createCommentVNode("", true)
                        ], 42, _hoisted_18)
                      ]),
                      _: 2
                    }, 1032, ["content"]);
                  }), 64))
                ])
              ])
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]);
    };
  }
});
const Settings = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-dfe74201"]]);
const _hoisted_1 = { class: "layout-wrapper" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { currentLayout } = useLayout();
    const route = useRoute();
    const currentLayoutComponent = computed(() => {
      var _a;
      const override = (_a = route.meta) == null ? void 0 : _a.layout;
      const layoutToUse = override ?? currentLayout.value;
      switch (layoutToUse) {
        case LayoutMode.TOP:
          return TopLayout;
        case LayoutMode.MIX:
          return MixLayout;
        case LayoutMode.LEFT:
        default:
          return LeftLayout;
      }
    });
    const isShowSettings = computed(() => defaultSettings.showSettings);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(), createBlock(resolveDynamicComponent(unref(currentLayoutComponent)))),
        unref(isShowSettings) ? (openBlock(), createBlock(Settings, { key: 0 })) : createCommentVNode("", true)
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-828f92c3"]]);
export {
  index as default
};
