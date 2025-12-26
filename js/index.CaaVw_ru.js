const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["js/Login.B6Mcao5D.js","js/index.Dp4m6nBq.js","css/index.BRqveRpb.css","js/form-item.Clspqeam.js","js/popper.DXIFQgs8.js","js/button.7O-VbLYM.js","css/button.5maVMVQO.css","css/popper.5W4vbdUo.css","js/input.BUoL4AzR.js","css/input.CLfgKR0e.css","css/form-item.CdHi4mFg.css","js/_plugin-vue_export-helper.1tPrXgE0.js","css/Login.CtGw0XhA.css","css/tooltip.Cw87z_qM.css","js/Register.MTFkqQe7.js","js/ResetPwd.BS5D6uy1.js"])))=>i.map(i=>d[i]);
import { b0 as isObject, b1 as isNumber, t as buildProps, z as definePropType, ai as mutable, _ as _export_sfc, d as defineComponent, aX as markRaw, b2 as scale_to_original_default, b3 as full_screen_default, x as useLocale, b as useNamespace, b4 as useZIndex, r as ref, b5 as effectScope, c as computed, b6 as clamp, s as shallowRef, I as watch, o as onMounted, a as useEventListener, e as createBlock, f as openBlock, w as withCtx, m as createVNode, T as Transition, C as createBaseVNode, k as normalizeStyle, n as normalizeClass, i as unref, h as createCommentVNode, g as createElementBlock, l as renderSlot, j as withModifiers, E as ElIcon, a2 as close_default, Q as Fragment, b7 as arrow_left_default, a8 as arrow_right_default, a4 as createTextVNode, F as toDisplayString, b8 as zoom_out_default, b9 as zoom_in_default, D as resolveDynamicComponent, aZ as refresh_left_default, ba as refresh_right_default, bb as keysOf, K as getEventCode, L as EVENT_CODE, U as nextTick, q as withInstall, bc as useAttrs, bd as fromPairs, H as isClient, ad as isArray, u as useThrottleFn, Z as mergeProps, be as createSlots, aV as normalizeProps, aW as guardReactiveProps, bf as isElement, M as isString, bg as isWindow, bh as useIntersectionObserver, aG as useI18n, ao as useSettingsStore, bi as sunny_default, av as ThemeMode, bj as moon_default, R as renderList, aa as onBeforeUnmount, ap as defaultSettings, aL as ElBadge, bk as defineAsyncComponent, aC as isRef, bl as __vitePreload } from "./index.Dp4m6nBq.js";
import { E as ElText } from "./text.DzyWNEr_.js";
import { l as logo, _ as _sfc_main$5 } from "./index.vue_vue_type_script_setup_true_lang.DPffxpzu.js";
/* empty css                 */
import { c as ElFocusTrap, e as ElTeleport, g as useAttrs$1, E as ElTooltip } from "./popper.DXIFQgs8.js";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper.1tPrXgE0.js";
import "./button.7O-VbLYM.js";
import { a as ElDropdownMenu, b as ElDropdownItem, E as ElDropdown } from "./dropdown-item.C0t1fCbn.js";
import { u as useLockscreen, g as getScrollContainer } from "./scrollbar.u3Wr4GmE.js";
import { d as debounce } from "./debounce.WgF1lM06.js";
var FUNC_ERROR_TEXT = "Expected a function";
function throttle(func, wait, options) {
  var leading = true, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = "leading" in options ? !!options.leading : leading;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    "leading": leading,
    "maxWait": wait,
    "trailing": trailing
  });
}
const imageViewerProps = buildProps({
  urlList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  hideOnClickModal: Boolean,
  teleported: Boolean,
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  scale: {
    type: Number,
    default: 1
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  showProgress: Boolean,
  crossorigin: {
    type: definePropType(String)
  }
});
const imageViewerEmits = {
  close: () => true,
  error: (evt) => evt instanceof Event,
  switch: (index2) => isNumber(index2),
  rotate: (deg) => isNumber(deg)
};
const _hoisted_1$2 = ["src", "crossorigin"];
const _sfc_main$4 = defineComponent({
  ...{
    name: "ElImageViewer"
  },
  __name: "image-viewer",
  props: imageViewerProps,
  emits: imageViewerEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    var _a;
    const modes = {
      CONTAIN: {
        name: "contain",
        icon: markRaw(full_screen_default)
      },
      ORIGINAL: {
        name: "original",
        icon: markRaw(scale_to_original_default)
      }
    };
    const props = __props;
    const emit = __emit;
    let stopWheelListener;
    const { t } = useLocale();
    const ns = useNamespace("image-viewer");
    const { nextZIndex } = useZIndex();
    const wrapper = ref();
    const imgRef = ref();
    const scopeEventListener = effectScope();
    const scaleClamped = computed(() => {
      const { scale, minScale, maxScale } = props;
      return clamp(scale, minScale, maxScale);
    });
    const loading = ref(true);
    const loadError = ref(false);
    const visible = ref(false);
    const activeIndex = ref(props.initialIndex);
    const mode = shallowRef(modes.CONTAIN);
    const transform = ref({
      scale: scaleClamped.value,
      deg: 0,
      offsetX: 0,
      offsetY: 0,
      enableTransition: false
    });
    const zIndex = ref((_a = props.zIndex) != null ? _a : nextZIndex());
    useLockscreen(visible, { ns });
    const isSingle = computed(() => {
      const { urlList } = props;
      return urlList.length <= 1;
    });
    const isFirst = computed(() => activeIndex.value === 0);
    const isLast = computed(() => activeIndex.value === props.urlList.length - 1);
    const currentImg = computed(() => props.urlList[activeIndex.value]);
    const arrowPrevKls = computed(() => [
      ns.e("btn"),
      ns.e("prev"),
      ns.is("disabled", !props.infinite && isFirst.value)
    ]);
    const arrowNextKls = computed(() => [
      ns.e("btn"),
      ns.e("next"),
      ns.is("disabled", !props.infinite && isLast.value)
    ]);
    const imgStyle = computed(() => {
      const { scale, deg, offsetX, offsetY, enableTransition } = transform.value;
      let translateX = offsetX / scale;
      let translateY = offsetY / scale;
      const radian = deg * Math.PI / 180;
      const cosRadian = Math.cos(radian);
      const sinRadian = Math.sin(radian);
      translateX = translateX * cosRadian + translateY * sinRadian;
      translateY = translateY * cosRadian - offsetX / scale * sinRadian;
      const style = {
        transform: `scale(${scale}) rotate(${deg}deg) translate(${translateX}px, ${translateY}px)`,
        transition: enableTransition ? "transform .3s" : ""
      };
      if (mode.value.name === modes.CONTAIN.name) {
        style.maxWidth = style.maxHeight = "100%";
      }
      return style;
    });
    const progress = computed(
      () => `${activeIndex.value + 1} / ${props.urlList.length}`
    );
    function hide() {
      unregisterEventListener();
      stopWheelListener == null ? void 0 : stopWheelListener();
      visible.value = false;
      emit("close");
    }
    function registerEventListener() {
      const keydownHandler = throttle((e) => {
        const code = getEventCode(e);
        switch (code) {
          case EVENT_CODE.esc:
            props.closeOnPressEscape && hide();
            break;
          case EVENT_CODE.space:
            toggleMode();
            break;
          case EVENT_CODE.left:
            prev();
            break;
          case EVENT_CODE.up:
            handleActions("zoomIn");
            break;
          case EVENT_CODE.right:
            next();
            break;
          case EVENT_CODE.down:
            handleActions("zoomOut");
            break;
        }
      });
      const mousewheelHandler = throttle((e) => {
        const delta = e.deltaY || e.deltaX;
        handleActions(delta < 0 ? "zoomIn" : "zoomOut", {
          zoomRate: props.zoomRate,
          enableTransition: false
        });
      });
      scopeEventListener.run(() => {
        useEventListener(document, "keydown", keydownHandler);
        useEventListener(wrapper, "wheel", mousewheelHandler);
      });
    }
    function unregisterEventListener() {
      scopeEventListener.stop();
    }
    function handleImgLoad() {
      loading.value = false;
    }
    function handleImgError(e) {
      loadError.value = true;
      loading.value = false;
      emit("error", e);
      e.target.alt = t("el.image.error");
    }
    function handleMouseDown(e) {
      if (loading.value || e.button !== 0 || !wrapper.value)
        return;
      transform.value.enableTransition = false;
      const { offsetX, offsetY } = transform.value;
      const startX = e.pageX;
      const startY = e.pageY;
      const dragHandler = throttle((ev) => {
        transform.value = {
          ...transform.value,
          offsetX: offsetX + ev.pageX - startX,
          offsetY: offsetY + ev.pageY - startY
        };
      });
      const removeMousemove = useEventListener(document, "mousemove", dragHandler);
      const removeMouseup = useEventListener(document, "mouseup", () => {
        removeMousemove();
        removeMouseup();
      });
      e.preventDefault();
    }
    function handleTouchStart(e) {
      if (loading.value || !wrapper.value || e.touches.length !== 1)
        return;
      transform.value.enableTransition = false;
      const { offsetX, offsetY } = transform.value;
      const { pageX: startX, pageY: startY } = e.touches[0];
      const dragHandler = throttle((ev) => {
        const targetTouch = ev.touches[0];
        transform.value = {
          ...transform.value,
          offsetX: offsetX + targetTouch.pageX - startX,
          offsetY: offsetY + targetTouch.pageY - startY
        };
      });
      const removeTouchmove = useEventListener(document, "touchmove", dragHandler);
      const removeTouchend = useEventListener(document, "touchend", () => {
        removeTouchmove();
        removeTouchend();
      });
      e.preventDefault();
    }
    function reset() {
      transform.value = {
        scale: scaleClamped.value,
        deg: 0,
        offsetX: 0,
        offsetY: 0,
        enableTransition: false
      };
    }
    function toggleMode() {
      if (loading.value || loadError.value)
        return;
      const modeNames = keysOf(modes);
      const modeValues = Object.values(modes);
      const currentMode = mode.value.name;
      const index2 = modeValues.findIndex((i) => i.name === currentMode);
      const nextIndex = (index2 + 1) % modeNames.length;
      mode.value = modes[modeNames[nextIndex]];
      reset();
    }
    function setActiveItem(index2) {
      loadError.value = false;
      const len = props.urlList.length;
      activeIndex.value = (index2 + len) % len;
    }
    function prev() {
      if (isFirst.value && !props.infinite)
        return;
      setActiveItem(activeIndex.value - 1);
    }
    function next() {
      if (isLast.value && !props.infinite)
        return;
      setActiveItem(activeIndex.value + 1);
    }
    function handleActions(action, options = {}) {
      if (loading.value || loadError.value)
        return;
      const { minScale, maxScale } = props;
      const { zoomRate, rotateDeg, enableTransition } = {
        zoomRate: props.zoomRate,
        rotateDeg: 90,
        enableTransition: true,
        ...options
      };
      switch (action) {
        case "zoomOut":
          if (transform.value.scale > minScale) {
            transform.value.scale = Number.parseFloat(
              (transform.value.scale / zoomRate).toFixed(3)
            );
          }
          break;
        case "zoomIn":
          if (transform.value.scale < maxScale) {
            transform.value.scale = Number.parseFloat(
              (transform.value.scale * zoomRate).toFixed(3)
            );
          }
          break;
        case "clockwise":
          transform.value.deg += rotateDeg;
          emit("rotate", transform.value.deg);
          break;
        case "anticlockwise":
          transform.value.deg -= rotateDeg;
          emit("rotate", transform.value.deg);
          break;
      }
      transform.value.enableTransition = enableTransition;
    }
    function onFocusoutPrevented(event) {
      var _a2;
      if (((_a2 = event.detail) == null ? void 0 : _a2.focusReason) === "pointer") {
        event.preventDefault();
      }
    }
    function onCloseRequested() {
      if (props.closeOnPressEscape) {
        hide();
      }
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    watch(
      () => scaleClamped.value,
      (val) => {
        transform.value.scale = val;
      }
    );
    watch(currentImg, () => {
      nextTick(() => {
        const $img = imgRef.value;
        if (!($img == null ? void 0 : $img.complete)) {
          loading.value = true;
        }
      });
    });
    watch(activeIndex, (val) => {
      reset();
      emit("switch", val);
    });
    onMounted(() => {
      visible.value = true;
      registerEventListener();
      stopWheelListener = useEventListener("wheel", wheelHandler, {
        passive: false
      });
    });
    __expose({
      setActiveItem
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(ElTeleport), {
        to: "body",
        disabled: !_ctx.teleported
      }, {
        default: withCtx(() => [
          createVNode(Transition, {
            name: "viewer-fade",
            appear: ""
          }, {
            default: withCtx(() => [
              createBaseVNode(
                "div",
                {
                  ref_key: "wrapper",
                  ref: wrapper,
                  tabindex: -1,
                  class: normalizeClass(unref(ns).e("wrapper")),
                  style: normalizeStyle({ zIndex: zIndex.value })
                },
                [
                  createVNode(unref(ElFocusTrap), {
                    loop: "",
                    trapped: "",
                    "focus-trap-el": wrapper.value,
                    "focus-start-el": "container",
                    onFocusoutPrevented,
                    onReleaseRequested: onCloseRequested
                  }, {
                    default: withCtx(() => [
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(unref(ns).e("mask")),
                          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => _ctx.hideOnClickModal && hide(), ["self"]))
                        },
                        null,
                        2
                      ),
                      createCommentVNode(" CLOSE "),
                      createBaseVNode(
                        "span",
                        {
                          class: normalizeClass([unref(ns).e("btn"), unref(ns).e("close")]),
                          onClick: hide
                        },
                        [
                          createVNode(unref(ElIcon), null, {
                            default: withCtx(() => [
                              createVNode(unref(close_default))
                            ]),
                            _: 1
                          })
                        ],
                        2
                      ),
                      createCommentVNode(" ARROW "),
                      !isSingle.value ? (openBlock(), createElementBlock(
                        Fragment,
                        { key: 0 },
                        [
                          createBaseVNode(
                            "span",
                            {
                              class: normalizeClass(arrowPrevKls.value),
                              onClick: prev
                            },
                            [
                              createVNode(unref(ElIcon), null, {
                                default: withCtx(() => [
                                  createVNode(unref(arrow_left_default))
                                ]),
                                _: 1
                              })
                            ],
                            2
                          ),
                          createBaseVNode(
                            "span",
                            {
                              class: normalizeClass(arrowNextKls.value),
                              onClick: next
                            },
                            [
                              createVNode(unref(ElIcon), null, {
                                default: withCtx(() => [
                                  createVNode(unref(arrow_right_default))
                                ]),
                                _: 1
                              })
                            ],
                            2
                          )
                        ],
                        64
                      )) : createCommentVNode("v-if", true),
                      _ctx.$slots.progress || _ctx.showProgress ? (openBlock(), createElementBlock(
                        "div",
                        {
                          key: 1,
                          class: normalizeClass([unref(ns).e("btn"), unref(ns).e("progress")])
                        },
                        [
                          renderSlot(_ctx.$slots, "progress", {
                            activeIndex: activeIndex.value,
                            total: _ctx.urlList.length
                          }, () => [
                            createTextVNode(
                              toDisplayString(progress.value),
                              1
                            )
                          ])
                        ],
                        2
                      )) : createCommentVNode("v-if", true),
                      createCommentVNode(" ACTIONS "),
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass([unref(ns).e("btn"), unref(ns).e("actions")])
                        },
                        [
                          createBaseVNode(
                            "div",
                            {
                              class: normalizeClass(unref(ns).e("actions__inner"))
                            },
                            [
                              renderSlot(_ctx.$slots, "toolbar", {
                                actions: handleActions,
                                prev,
                                next,
                                reset: toggleMode,
                                activeIndex: activeIndex.value,
                                setActiveItem
                              }, () => [
                                createVNode(unref(ElIcon), {
                                  onClick: _cache[1] || (_cache[1] = ($event) => handleActions("zoomOut"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(zoom_out_default))
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ElIcon), {
                                  onClick: _cache[2] || (_cache[2] = ($event) => handleActions("zoomIn"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(zoom_in_default))
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode(
                                  "i",
                                  {
                                    class: normalizeClass(unref(ns).e("actions__divider"))
                                  },
                                  null,
                                  2
                                ),
                                createVNode(unref(ElIcon), { onClick: toggleMode }, {
                                  default: withCtx(() => [
                                    (openBlock(), createBlock(resolveDynamicComponent(mode.value.icon)))
                                  ]),
                                  _: 1
                                }),
                                createBaseVNode(
                                  "i",
                                  {
                                    class: normalizeClass(unref(ns).e("actions__divider"))
                                  },
                                  null,
                                  2
                                ),
                                createVNode(unref(ElIcon), {
                                  onClick: _cache[3] || (_cache[3] = ($event) => handleActions("anticlockwise"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(refresh_left_default))
                                  ]),
                                  _: 1
                                }),
                                createVNode(unref(ElIcon), {
                                  onClick: _cache[4] || (_cache[4] = ($event) => handleActions("clockwise"))
                                }, {
                                  default: withCtx(() => [
                                    createVNode(unref(refresh_right_default))
                                  ]),
                                  _: 1
                                })
                              ])
                            ],
                            2
                          )
                        ],
                        2
                      ),
                      createCommentVNode(" CANVAS "),
                      createBaseVNode(
                        "div",
                        {
                          class: normalizeClass(unref(ns).e("canvas"))
                        },
                        [
                          loadError.value && _ctx.$slots["viewer-error"] ? renderSlot(_ctx.$slots, "viewer-error", {
                            key: 0,
                            activeIndex: activeIndex.value,
                            src: currentImg.value
                          }) : (openBlock(), createElementBlock("img", {
                            ref_key: "imgRef",
                            ref: imgRef,
                            key: currentImg.value,
                            src: currentImg.value,
                            style: normalizeStyle(imgStyle.value),
                            class: normalizeClass(unref(ns).e("img")),
                            crossorigin: _ctx.crossorigin,
                            onLoad: handleImgLoad,
                            onError: handleImgError,
                            onMousedown: handleMouseDown,
                            onTouchstart: handleTouchStart
                          }, null, 46, _hoisted_1$2))
                        ],
                        2
                      ),
                      renderSlot(_ctx.$slots, "default")
                    ]),
                    _: 3
                  }, 8, ["focus-trap-el"])
                ],
                6
              )
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["disabled"]);
    };
  }
});
var ImageViewer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);
const ElImageViewer = withInstall(ImageViewer);
const imageProps = buildProps({
  hideOnClickModal: Boolean,
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["", "contain", "cover", "fill", "none", "scale-down"],
    default: ""
  },
  loading: {
    type: String,
    values: ["eager", "lazy"]
  },
  lazy: Boolean,
  scrollContainer: {
    type: definePropType([String, Object])
  },
  previewSrcList: {
    type: definePropType(Array),
    default: () => mutable([])
  },
  previewTeleported: Boolean,
  zIndex: {
    type: Number
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  infinite: {
    type: Boolean,
    default: true
  },
  closeOnPressEscape: {
    type: Boolean,
    default: true
  },
  zoomRate: {
    type: Number,
    default: 1.2
  },
  scale: {
    type: Number,
    default: 1
  },
  minScale: {
    type: Number,
    default: 0.2
  },
  maxScale: {
    type: Number,
    default: 7
  },
  showProgress: Boolean,
  crossorigin: {
    type: definePropType(String)
  }
});
const imageEmits = {
  load: (evt) => evt instanceof Event,
  error: (evt) => evt instanceof Event,
  switch: (val) => isNumber(val),
  close: () => true,
  show: () => true
};
const _hoisted_1$1 = ["src", "loading", "crossorigin"];
const _hoisted_2$1 = { key: 0 };
const _sfc_main$3 = defineComponent({
  ...{
    name: "ElImage",
    inheritAttrs: false
  },
  __name: "image",
  props: imageProps,
  emits: imageEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useLocale();
    const ns = useNamespace("image");
    const rawAttrs = useAttrs();
    const containerAttrs = computed(() => {
      return fromPairs(
        Object.entries(rawAttrs).filter(
          ([key]) => /^(data-|on[A-Z])/i.test(key) || ["id", "style"].includes(key)
        )
      );
    });
    const imgAttrs = useAttrs$1({
      excludeListeners: true,
      excludeKeys: computed(() => {
        return Object.keys(containerAttrs.value);
      })
    });
    const imageSrc = ref();
    const hasLoadError = ref(false);
    const isLoading = ref(true);
    const showViewer = ref(false);
    const container = ref();
    const _scrollContainer = ref();
    const supportLoading = isClient && "loading" in HTMLImageElement.prototype;
    let stopScrollListener;
    const imageKls = computed(() => [
      ns.e("inner"),
      preview.value && ns.e("preview"),
      isLoading.value && ns.is("loading")
    ]);
    const imageStyle = computed(() => {
      const { fit } = props;
      if (isClient && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = computed(() => {
      const { previewSrcList } = props;
      return isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = computed(() => {
      const { previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      if (initialIndex > previewSrcList.length - 1) {
        previewIndex = 0;
      }
      return previewIndex;
    });
    const isManual = computed(() => {
      if (props.loading === "eager")
        return false;
      return !supportLoading && props.loading === "lazy" || props.lazy;
    });
    const loadImage = () => {
      if (!isClient)
        return;
      isLoading.value = true;
      hasLoadError.value = false;
      imageSrc.value = props.src;
    };
    function handleLoad(event) {
      isLoading.value = false;
      hasLoadError.value = false;
      emit("load", event);
    }
    function handleError(event) {
      isLoading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad(isIntersecting) {
      if (isIntersecting) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = useThrottleFn(handleLazyLoad, 200, true);
    async function addLazyLoadListener() {
      var _a;
      if (!isClient)
        return;
      await nextTick();
      const { scrollContainer } = props;
      if (isElement(scrollContainer)) {
        _scrollContainer.value = scrollContainer;
      } else if (isString(scrollContainer) && scrollContainer !== "") {
        _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
      } else if (container.value) {
        const scrollContainer2 = getScrollContainer(container.value);
        _scrollContainer.value = isWindow(scrollContainer2) ? void 0 : scrollContainer2;
      }
      const { stop } = useIntersectionObserver(
        container,
        ([entry]) => {
          lazyLoadHandler(entry.isIntersecting);
        },
        { root: _scrollContainer }
      );
      stopScrollListener = stop;
    }
    function removeLazyLoadListener() {
      if (!isClient || !lazyLoadHandler)
        return;
      stopScrollListener == null ? void 0 : stopScrollListener();
      _scrollContainer.value = void 0;
      stopScrollListener = void 0;
    }
    function clickHandler() {
      if (!preview.value)
        return;
      showViewer.value = true;
      emit("show");
    }
    function closeViewer() {
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    watch(
      () => props.src,
      () => {
        if (isManual.value) {
          isLoading.value = true;
          hasLoadError.value = false;
          removeLazyLoadListener();
          addLazyLoadListener();
        } else {
          loadImage();
        }
      }
    );
    onMounted(() => {
      if (isManual.value) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    __expose({
      showPreview: clickHandler
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        mergeProps({
          ref_key: "container",
          ref: container
        }, containerAttrs.value, {
          class: [unref(ns).b(), _ctx.$attrs.class]
        }),
        [
          hasLoadError.value ? renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
            createBaseVNode(
              "div",
              {
                class: normalizeClass(unref(ns).e("error"))
              },
              toDisplayString(unref(t)("el.image.error")),
              3
            )
          ]) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              imageSrc.value !== void 0 ? (openBlock(), createElementBlock("img", mergeProps({ key: 0 }, unref(imgAttrs), {
                src: imageSrc.value,
                loading: _ctx.loading,
                style: imageStyle.value,
                class: imageKls.value,
                crossorigin: _ctx.crossorigin,
                onClick: clickHandler,
                onLoad: handleLoad,
                onError: handleError
              }), null, 16, _hoisted_1$1)) : createCommentVNode("v-if", true),
              isLoading.value ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 1,
                  class: normalizeClass(unref(ns).e("wrapper"))
                },
                [
                  renderSlot(_ctx.$slots, "placeholder", {}, () => [
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass(unref(ns).e("placeholder"))
                      },
                      null,
                      2
                    )
                  ])
                ],
                2
              )) : createCommentVNode("v-if", true)
            ],
            64
          )),
          preview.value ? (openBlock(), createElementBlock(
            Fragment,
            { key: 2 },
            [
              showViewer.value ? (openBlock(), createBlock(unref(ElImageViewer), {
                key: 0,
                "z-index": _ctx.zIndex,
                "initial-index": imageIndex.value,
                infinite: _ctx.infinite,
                "zoom-rate": _ctx.zoomRate,
                "min-scale": _ctx.minScale,
                "max-scale": _ctx.maxScale,
                "show-progress": _ctx.showProgress,
                "url-list": _ctx.previewSrcList,
                scale: _ctx.scale,
                crossorigin: _ctx.crossorigin,
                "hide-on-click-modal": _ctx.hideOnClickModal,
                teleported: _ctx.previewTeleported,
                "close-on-press-escape": _ctx.closeOnPressEscape,
                onClose: closeViewer,
                onSwitch: switchViewer
              }, createSlots({
                toolbar: withCtx((toolbar) => [
                  renderSlot(_ctx.$slots, "toolbar", normalizeProps(guardReactiveProps(toolbar)))
                ]),
                default: withCtx(() => [
                  _ctx.$slots.viewer ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
                    renderSlot(_ctx.$slots, "viewer")
                  ])) : createCommentVNode("v-if", true)
                ]),
                _: 2
              }, [
                _ctx.$slots.progress ? {
                  name: "progress",
                  fn: withCtx((progress) => [
                    renderSlot(_ctx.$slots, "progress", normalizeProps(guardReactiveProps(progress)))
                  ]),
                  key: "0"
                } : void 0,
                _ctx.$slots["viewer-error"] ? {
                  name: "viewer-error",
                  fn: withCtx((viewerError) => [
                    renderSlot(_ctx.$slots, "viewer-error", normalizeProps(guardReactiveProps(viewerError)))
                  ]),
                  key: "1"
                } : void 0
              ]), 1032, ["z-index", "initial-index", "infinite", "zoom-rate", "min-scale", "max-scale", "show-progress", "url-list", "scale", "crossorigin", "hide-on-click-modal", "teleported", "close-on-press-escape"])) : createCommentVNode("v-if", true)
            ],
            64
          )) : createCommentVNode("v-if", true)
        ],
        16
      );
    };
  }
});
var Image = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);
const ElImage = withInstall(Image);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    padding: {
      type: String,
      default: "p-2"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        "cursor-pointer": "",
        "flex-center": "",
        rounded: "",
        class: normalizeClass(["el", __props.padding])
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
const CommonWrapper = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-34295891"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const { t } = useI18n();
    const settingsStore = useSettingsStore();
    const theneList = [
      { label: t("login.light"), value: ThemeMode.LIGHT, component: sunny_default },
      { label: t("login.dark"), value: ThemeMode.DARK, component: moon_default }
    ];
    const handleDarkChange = (theme) => {
      settingsStore.updateTheme(theme);
    };
    return (_ctx, _cache) => {
      const _component_el_icon = ElIcon;
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createBlock(_component_el_dropdown, {
        trigger: "click",
        onCommand: handleDarkChange
      }, {
        dropdown: withCtx(() => [
          createVNode(_component_el_dropdown_menu, null, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(theneList, (item) => {
                return createVNode(_component_el_dropdown_item, {
                  key: item.value,
                  command: item.value,
                  disabled: unref(settingsStore).theme === item.value
                }, {
                  default: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                      ]),
                      _: 2
                    }, 1024),
                    createTextVNode(" " + toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["command", "disabled"]);
              }), 64))
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createVNode(_component_el_icon, { size: 20 }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(unref(settingsStore).theme === unref(ThemeMode).DARK ? unref(moon_default) : unref(sunny_default))))
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1 = { class: "login-container" };
const _hoisted_2 = { class: "action-bar" };
const _hoisted_3 = {
  "flex-1": "",
  "flex-center": ""
};
const _hoisted_4 = { class: "p-4xl w-full h-auto sm:w-450px sm:h-540px shadow-[var(--el-box-shadow-light)] border-rd-2" };
const _hoisted_5 = {
  "w-full": "",
  flex: "",
  "flex-col": "",
  "items-center": ""
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const t = useI18n().t;
    const component = ref("login");
    const formComponents = {
      login: defineAsyncComponent(() => __vitePreload(() => import("./Login.B6Mcao5D.js"), true ? __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]) : void 0)),
      register: defineAsyncComponent(() => __vitePreload(() => import("./Register.MTFkqQe7.js"), true ? __vite__mapDeps([14,11]) : void 0)),
      resetPwd: defineAsyncComponent(() => __vitePreload(() => import("./ResetPwd.BS5D6uy1.js"), true ? __vite__mapDeps([15,11]) : void 0))
    };
    onMounted(() => {
    });
    onBeforeUnmount(() => {
    });
    return (_ctx, _cache) => {
      const _component_el_tooltip = ElTooltip;
      const _component_LangSelect = _sfc_main$5;
      const _component_el_image = ElImage;
      const _component_el_badge = ElBadge;
      const _component_el_text = ElText;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          createVNode(_component_el_tooltip, {
            content: unref(t)("login.themeToggle"),
            placement: "bottom"
          }, {
            default: withCtx(() => [
              createVNode(CommonWrapper, null, {
                default: withCtx(() => [
                  createVNode(_sfc_main$1)
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["content"]),
          createVNode(_component_el_tooltip, {
            content: unref(t)("login.languageToggle"),
            placement: "bottom"
          }, {
            default: withCtx(() => [
              createVNode(CommonWrapper, null, {
                default: withCtx(() => [
                  createVNode(_component_LangSelect, { size: "text-20px" })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["content"])
        ]),
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("div", _hoisted_4, [
            createBaseVNode("div", _hoisted_5, [
              createVNode(_component_el_image, {
                src: unref(logo),
                style: { "width": "84px", "border-radius": "50%" },
                fit: "cover"
              }, null, 8, ["src"]),
              createBaseVNode("h2", null, [
                createVNode(_component_el_badge, {
                  value: `v ${unref(defaultSettings).version}`,
                  type: "success"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(defaultSettings).title), 1)
                  ]),
                  _: 1
                }, 8, ["value"])
              ]),
              createVNode(Transition, {
                name: "fade-slide",
                mode: "out-in"
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(formComponents[unref(component)]), {
                    modelValue: unref(component),
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(component) ? component.value = $event : null),
                    class: "w-90%"
                  }, null, 8, ["modelValue"]))
                ]),
                _: 1
              })
            ])
          ]),
          createVNode(_component_el_text, {
            size: "small",
            class: "py-2.5! fixed bottom-0 text-center"
          }, {
            default: withCtx(() => [..._cache[1] || (_cache[1] = [
              createTextVNode(" Copyright © 2021 - 2025 ", -1)
            ])]),
            _: 1
          })
        ])
      ]);
    };
  }
});
const index = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-1ed7b2af"]]);
export {
  index as default
};
