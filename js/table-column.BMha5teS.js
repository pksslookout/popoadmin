import { b0 as isObject, bS as isArrayLike, bT as isIndex, bU as eq, bV as keys, bW as baseAssignValue, bX as isObjectLike, bY as isBuffer, bZ as isTypedArray, b_ as isArray, b$ as isArguments, c0 as isFunction, c1 as Stack, c2 as arrayMap, H as isClient, t as buildProps, v as iconPropType, _ as _export_sfc, d as defineComponent, x as useLocale, c as computed, g as createElementBlock, f as openBlock, e as createBlock, F as toDisplayString, w as withCtx, D as resolveDynamicComponent, i as unref, E as ElIcon, A as inject, bn as componentSizes, z as definePropType, ai as mutable, b as useNamespace, r as ref, I as watch, m as createVNode, Q as Fragment, R as renderList, n as normalizeClass, bE as isEqual, ad as isArray$1, C as createBaseVNode, h as createCommentVNode, c3 as d_arrow_left_default, c4 as more_filled_default, c5 as d_arrow_right_default, a3 as withKeys, b1 as isNumber, B as getCurrentInstance, c6 as useGlobalSize, y as provide, ab as h$1, W as useSizeProp, a8 as arrow_right_default, b7 as arrow_left_default, q as withInstall, O as hasOwn, a9 as isUndefined, bx as isVNode, bC as Comment, M as isString, bB as isFunction$1, c7 as render, br as isBoolean, c8 as getProp, ae as isObject$1, c9 as get, aT as toRefs, U as nextTick, aC as isRef, au as resolveComponent, l as renderSlot, a4 as createTextVNode, ca as arrow_up_default, a0 as arrow_down_default, aj as isPropAbsent, K as getEventCode, L as EVENT_CODE, az as onBeforeMount, o as onMounted, bQ as onUpdated, cb as onUnmounted, a6 as hasClass, a7 as removeClass, bf as isElement, a5 as addClass, S as reactive, aa as onBeforeUnmount, P as watchEffect, a as useEventListener, af as useResizeObserver, cc as resolveDirective, $ as withDirectives, k as normalizeStyle, a1 as vShow, bs as loading_default, G as withNoopInstall, cd as createApp, ce as useGlobalComponentSettings, T as Transition, cf as getStyle, cg as hyphenate, ch as mergeModels, ci as useModel } from "./index.De-GHSdr.js";
import { E as ElScrollbar } from "./scrollbar.BF0eOpSA.js";
import { s as setToString, o as overRest, j as identity, k as baseFlatten, d as debugWarn, E as ElTooltip, t as throwError, i as castArray, a as useTooltipContentProps } from "./popper.CCtuv0lm.js";
import { c as copyObject, k as keysIn, a as copyArray, b as cloneBuffer, d as cloneTypedArray, i as isPlainObject, e as initCloneObject, E as ElInput, C as CHANGE_EVENT } from "./input.BgOfymY-.js";
import { d as baseIteratee, a as ElOption, E as ElSelect } from "./card.CfvnB3Mt.js";
import { d as debounce } from "./debounce.1gipiOZE.js";
import { E as ElCheckboxGroup, a as ElCheckbox } from "./form-item.DM_PD3Nw.js";
import { e as useDeprecated, b as useFormSize } from "./button.Cfu2-kaF.js";
import "./tag.Cu0zVICl.js";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper.1tPrXgE0.js";
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + "");
}
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
    return eq(object[index], value);
  }
  return false;
}
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
    customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? void 0 : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
    while (length--) {
      var key = props[++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}
var baseFor = createBaseFor();
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length, index = -1, iterable = Object(collection);
    while (++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}
var baseEach = createBaseEach(baseForOwn);
function assignMergeValue(object, key, value) {
  if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}
function safeGet(object, key) {
  if (key === "constructor" && typeof object[key] === "function") {
    return;
  }
  if (key == "__proto__") {
    return;
  }
  return object[key];
}
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
  var isCommon = newValue === void 0;
  if (isCommon) {
    var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      } else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      } else {
        newValue = [];
      }
    } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      } else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack["delete"](srcValue);
  }
  assignMergeValue(object, key, newValue);
}
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack());
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
      if (newValue === void 0) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}
function baseMap(collection, iteratee) {
  var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
  baseEach(collection, function(value, key, collection2) {
    result[++index] = iteratee(value, key, collection2);
  });
  return result;
}
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}
function flatMap(collection, iteratee) {
  return baseFlatten(map(collection, iteratee));
}
function isNull(value) {
  return value === null;
}
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});
const rAF = (fn) => isClient ? window.requestAnimationFrame(fn) : setTimeout(fn, 16);
const elPaginationKey = Symbol("elPaginationKey");
const paginationPrevProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  prevText: {
    type: String
  },
  prevIcon: {
    type: iconPropType
  }
});
const paginationPrevEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1$7 = ["disabled", "aria-label", "aria-disabled"];
const _hoisted_2$4 = { key: 0 };
const _sfc_main$9 = defineComponent({
  ...{
    name: "ElPaginationPrev"
  },
  __name: "prev",
  props: paginationPrevProps,
  emits: paginationPrevEmits,
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(
      () => props.disabled || props.currentPage <= 1
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-prev",
        disabled: internalDisabled.value,
        "aria-label": _ctx.prevText || unref(t)("el.pagination.prev"),
        "aria-disabled": internalDisabled.value,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.prevText ? (openBlock(), createElementBlock(
          "span",
          _hoisted_2$4,
          toDisplayString(_ctx.prevText),
          1
        )) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.prevIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$7);
    };
  }
});
var Prev = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/prev.vue"]]);
const paginationNextProps = buildProps({
  disabled: Boolean,
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    default: 50
  },
  nextText: {
    type: String
  },
  nextIcon: {
    type: iconPropType
  }
});
const _hoisted_1$6 = ["disabled", "aria-label", "aria-disabled"];
const _hoisted_2$3 = { key: 0 };
const _sfc_main$8 = defineComponent({
  ...{
    name: "ElPaginationNext"
  },
  __name: "next",
  props: paginationNextProps,
  emits: ["click"],
  setup(__props) {
    const props = __props;
    const { t } = useLocale();
    const internalDisabled = computed(
      () => props.disabled || props.currentPage === props.pageCount || props.pageCount === 0
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        type: "button",
        class: "btn-next",
        disabled: internalDisabled.value,
        "aria-label": _ctx.nextText || unref(t)("el.pagination.next"),
        "aria-disabled": internalDisabled.value,
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        _ctx.nextText ? (openBlock(), createElementBlock(
          "span",
          _hoisted_2$3,
          toDisplayString(_ctx.nextText),
          1
        )) : (openBlock(), createBlock(unref(ElIcon), { key: 1 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.nextIcon)))
          ]),
          _: 1
        }))
      ], 8, _hoisted_1$6);
    };
  }
});
var Next = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/next.vue"]]);
const usePagination = () => inject(elPaginationKey, {});
const paginationSizesProps = buildProps({
  pageSize: {
    type: Number,
    required: true
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String
  },
  popperStyle: {
    type: definePropType([String, Object])
  },
  disabled: Boolean,
  teleported: Boolean,
  size: {
    type: String,
    values: componentSizes
  },
  appendSizeTo: String
});
const _sfc_main$7 = defineComponent({
  ...{
    name: "ElPaginationSizes"
  },
  __name: "sizes",
  props: paginationSizesProps,
  emits: ["page-size-change"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const pagination = usePagination();
    const innerPageSize = ref(props.pageSize);
    watch(
      () => props.pageSizes,
      (newVal, oldVal) => {
        if (isEqual(newVal, oldVal))
          return;
        if (isArray$1(newVal)) {
          const pageSize = newVal.includes(props.pageSize) ? props.pageSize : props.pageSizes[0];
          emit("page-size-change", pageSize);
        }
      }
    );
    watch(
      () => props.pageSize,
      (newVal) => {
        innerPageSize.value = newVal;
      }
    );
    const innerPageSizes = computed(() => props.pageSizes);
    function handleChange(val) {
      var _a;
      if (val !== innerPageSize.value) {
        innerPageSize.value = val;
        (_a = pagination.handleSizeChange) == null ? void 0 : _a.call(pagination, Number(val));
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "span",
        {
          class: normalizeClass(unref(ns).e("sizes"))
        },
        [
          createVNode(unref(ElSelect), {
            "model-value": innerPageSize.value,
            disabled: _ctx.disabled,
            "popper-class": _ctx.popperClass,
            "popper-style": _ctx.popperStyle,
            size: _ctx.size,
            teleported: _ctx.teleported,
            "validate-event": false,
            "append-to": _ctx.appendSizeTo,
            onChange: handleChange
          }, {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList(innerPageSizes.value, (item) => {
                  return openBlock(), createBlock(unref(ElOption), {
                    key: item,
                    value: item,
                    label: item + unref(t)("el.pagination.pagesize")
                  }, null, 8, ["value", "label"]);
                }),
                128
              ))
            ]),
            _: 1
          }, 8, ["model-value", "disabled", "popper-class", "popper-style", "size", "teleported", "append-to"])
        ],
        2
      );
    };
  }
});
var Sizes = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/sizes.vue"]]);
const paginationJumperProps = buildProps({
  size: {
    type: String,
    values: componentSizes
  }
});
const _hoisted_1$5 = ["disabled"];
const _sfc_main$6 = defineComponent({
  ...{
    name: "ElPaginationJumper"
  },
  __name: "jumper",
  props: paginationJumperProps,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { pageCount, disabled, currentPage, changeEvent } = usePagination();
    const userInput = ref();
    const innerValue = computed(() => {
      var _a;
      return (_a = userInput.value) != null ? _a : currentPage == null ? void 0 : currentPage.value;
    });
    function handleInput(val) {
      userInput.value = val ? +val : "";
    }
    function handleChange(val) {
      val = Math.trunc(+val);
      changeEvent == null ? void 0 : changeEvent(val);
      userInput.value = void 0;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("jump")),
        disabled: unref(disabled)
      }, [
        createBaseVNode(
          "span",
          {
            class: normalizeClass([unref(ns).e("goto")])
          },
          toDisplayString(unref(t)("el.pagination.goto")),
          3
        ),
        createVNode(unref(ElInput), {
          size: _ctx.size,
          class: normalizeClass([unref(ns).e("editor"), unref(ns).is("in-pagination")]),
          min: 1,
          max: unref(pageCount),
          disabled: unref(disabled),
          "model-value": innerValue.value,
          "validate-event": false,
          "aria-label": unref(t)("el.pagination.page"),
          type: "number",
          "onUpdate:modelValue": handleInput,
          onChange: handleChange
        }, null, 8, ["size", "class", "max", "disabled", "model-value", "aria-label"]),
        createBaseVNode(
          "span",
          {
            class: normalizeClass([unref(ns).e("classifier")])
          },
          toDisplayString(unref(t)("el.pagination.pageClassifier")),
          3
        )
      ], 10, _hoisted_1$5);
    };
  }
});
var Jumper = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/jumper.vue"]]);
const paginationTotalProps = buildProps({
  total: {
    type: Number,
    default: 1e3
  }
});
const _hoisted_1$4 = ["disabled"];
const _sfc_main$5 = defineComponent({
  ...{
    name: "ElPaginationTotal"
  },
  __name: "total",
  props: paginationTotalProps,
  setup(__props) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const { disabled } = usePagination();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", {
        class: normalizeClass(unref(ns).e("total")),
        disabled: unref(disabled)
      }, toDisplayString(unref(t)("el.pagination.total", {
        total: _ctx.total
      })), 11, _hoisted_1$4);
    };
  }
});
var Total = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/total.vue"]]);
const paginationPagerProps = buildProps({
  currentPage: {
    type: Number,
    default: 1
  },
  pageCount: {
    type: Number,
    required: true
  },
  pagerCount: {
    type: Number,
    default: 7
  },
  disabled: Boolean
});
const _hoisted_1$3 = ["aria-current", "aria-label", "tabindex"];
const _hoisted_2$2 = ["tabindex", "aria-label"];
const _hoisted_3$1 = ["aria-current", "aria-label", "tabindex"];
const _hoisted_4$1 = ["tabindex", "aria-label"];
const _hoisted_5 = ["aria-current", "aria-label", "tabindex"];
const _sfc_main$4 = defineComponent({
  ...{
    name: "ElPaginationPager"
  },
  __name: "pager",
  props: paginationPagerProps,
  emits: [CHANGE_EVENT],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const nsPager = useNamespace("pager");
    const nsIcon = useNamespace("icon");
    const { t } = useLocale();
    const showPrevMore = ref(false);
    const showNextMore = ref(false);
    const quickPrevHover = ref(false);
    const quickNextHover = ref(false);
    const quickPrevFocus = ref(false);
    const quickNextFocus = ref(false);
    const pagers = computed(() => {
      const pagerCount = props.pagerCount;
      const halfPagerCount = (pagerCount - 1) / 2;
      const currentPage = Number(props.currentPage);
      const pageCount = Number(props.pageCount);
      let showPrevMore2 = false;
      let showNextMore2 = false;
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - halfPagerCount) {
          showPrevMore2 = true;
        }
        if (currentPage < pageCount - halfPagerCount) {
          showNextMore2 = true;
        }
      }
      const array = [];
      if (showPrevMore2 && !showNextMore2) {
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore2 && showNextMore2) {
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore2 && showNextMore2) {
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      return array;
    });
    const prevMoreKls = computed(() => [
      "more",
      "btn-quickprev",
      nsIcon.b(),
      nsPager.is("disabled", props.disabled)
    ]);
    const nextMoreKls = computed(() => [
      "more",
      "btn-quicknext",
      nsIcon.b(),
      nsPager.is("disabled", props.disabled)
    ]);
    const tabindex = computed(() => props.disabled ? -1 : 0);
    watch(
      () => [props.pageCount, props.pagerCount, props.currentPage],
      ([pageCount, pagerCount, currentPage]) => {
        const halfPagerCount = (pagerCount - 1) / 2;
        let showPrev = false;
        let showNext = false;
        if (pageCount > pagerCount) {
          showPrev = currentPage > pagerCount - halfPagerCount;
          showNext = currentPage < pageCount - halfPagerCount;
        }
        quickPrevHover.value && (quickPrevHover.value = showPrev);
        quickNextHover.value && (quickNextHover.value = showNext);
        showPrevMore.value = showPrev;
        showNextMore.value = showNext;
      },
      { immediate: true }
    );
    function onMouseEnter(forward = false) {
      if (props.disabled)
        return;
      if (forward) {
        quickPrevHover.value = true;
      } else {
        quickNextHover.value = true;
      }
    }
    function onFocus(forward = false) {
      if (forward) {
        quickPrevFocus.value = true;
      } else {
        quickNextFocus.value = true;
      }
    }
    function onEnter(e) {
      const target = e.target;
      if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("number")) {
        const newPage = Number(target.textContent);
        if (newPage !== props.currentPage) {
          emit(CHANGE_EVENT, newPage);
        }
      } else if (target.tagName.toLowerCase() === "li" && Array.from(target.classList).includes("more")) {
        onPagerClick(e);
      }
    }
    function onPagerClick(event) {
      const target = event.target;
      if (target.tagName.toLowerCase() === "ul" || props.disabled) {
        return;
      }
      let newPage = Number(target.textContent);
      const pageCount = props.pageCount;
      const currentPage = props.currentPage;
      const pagerCountOffset = props.pagerCount - 2;
      if (target.className.includes("more")) {
        if (target.className.includes("quickprev")) {
          newPage = currentPage - pagerCountOffset;
        } else if (target.className.includes("quicknext")) {
          newPage = currentPage + pagerCountOffset;
        }
      }
      if (!Number.isNaN(+newPage)) {
        if (newPage < 1) {
          newPage = 1;
        }
        if (newPage > pageCount) {
          newPage = pageCount;
        }
      }
      if (newPage !== currentPage) {
        emit(CHANGE_EVENT, newPage);
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "ul",
        {
          class: normalizeClass(unref(nsPager).b()),
          onClick: onPagerClick,
          onKeyup: withKeys(onEnter, ["enter"])
        },
        [
          _ctx.pageCount > 0 ? (openBlock(), createElementBlock("li", {
            key: 0,
            class: normalizeClass([[
              unref(nsPager).is("active", _ctx.currentPage === 1),
              unref(nsPager).is("disabled", _ctx.disabled)
            ], "number"]),
            "aria-current": _ctx.currentPage === 1,
            "aria-label": unref(t)("el.pagination.currentPage", { pager: 1 }),
            tabindex: tabindex.value
          }, " 1 ", 10, _hoisted_1$3)) : createCommentVNode("v-if", true),
          showPrevMore.value ? (openBlock(), createElementBlock("li", {
            key: 1,
            class: normalizeClass(prevMoreKls.value),
            tabindex: tabindex.value,
            "aria-label": unref(t)("el.pagination.prevPages", { pager: _ctx.pagerCount - 2 }),
            onMouseenter: _cache[0] || (_cache[0] = ($event) => onMouseEnter(true)),
            onMouseleave: _cache[1] || (_cache[1] = ($event) => quickPrevHover.value = false),
            onFocus: _cache[2] || (_cache[2] = ($event) => onFocus(true)),
            onBlur: _cache[3] || (_cache[3] = ($event) => quickPrevFocus.value = false)
          }, [
            (quickPrevHover.value || quickPrevFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_left_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
          ], 42, _hoisted_2$2)) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(pagers.value, (pager) => {
              return openBlock(), createElementBlock("li", {
                key: pager,
                class: normalizeClass([[
                  unref(nsPager).is("active", _ctx.currentPage === pager),
                  unref(nsPager).is("disabled", _ctx.disabled)
                ], "number"]),
                "aria-current": _ctx.currentPage === pager,
                "aria-label": unref(t)("el.pagination.currentPage", { pager }),
                tabindex: tabindex.value
              }, toDisplayString(pager), 11, _hoisted_3$1);
            }),
            128
          )),
          showNextMore.value ? (openBlock(), createElementBlock("li", {
            key: 2,
            class: normalizeClass(nextMoreKls.value),
            tabindex: tabindex.value,
            "aria-label": unref(t)("el.pagination.nextPages", { pager: _ctx.pagerCount - 2 }),
            onMouseenter: _cache[4] || (_cache[4] = ($event) => onMouseEnter()),
            onMouseleave: _cache[5] || (_cache[5] = ($event) => quickNextHover.value = false),
            onFocus: _cache[6] || (_cache[6] = ($event) => onFocus()),
            onBlur: _cache[7] || (_cache[7] = ($event) => quickNextFocus.value = false)
          }, [
            (quickNextHover.value || quickNextFocus.value) && !_ctx.disabled ? (openBlock(), createBlock(unref(d_arrow_right_default), { key: 0 })) : (openBlock(), createBlock(unref(more_filled_default), { key: 1 }))
          ], 42, _hoisted_4$1)) : createCommentVNode("v-if", true),
          _ctx.pageCount > 1 ? (openBlock(), createElementBlock("li", {
            key: 3,
            class: normalizeClass([[
              unref(nsPager).is("active", _ctx.currentPage === _ctx.pageCount),
              unref(nsPager).is("disabled", _ctx.disabled)
            ], "number"]),
            "aria-current": _ctx.currentPage === _ctx.pageCount,
            "aria-label": unref(t)("el.pagination.currentPage", { pager: _ctx.pageCount }),
            tabindex: tabindex.value
          }, toDisplayString(_ctx.pageCount), 11, _hoisted_5)) : createCommentVNode("v-if", true)
        ],
        34
      );
    };
  }
});
var Pager = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/pagination/src/components/pager.vue"]]);
const isAbsent = (v2) => typeof v2 !== "number";
const paginationProps = buildProps({
  pageSize: Number,
  defaultPageSize: Number,
  total: Number,
  pageCount: Number,
  pagerCount: {
    type: Number,
    validator: (value) => {
      return isNumber(value) && Math.trunc(value) === value && value > 4 && value < 22 && value % 2 === 1;
    },
    default: 7
  },
  currentPage: Number,
  defaultCurrentPage: Number,
  layout: {
    type: String,
    default: ["prev", "pager", "next", "jumper", "->", "total"].join(", ")
  },
  pageSizes: {
    type: definePropType(Array),
    default: () => mutable([10, 20, 30, 40, 50, 100])
  },
  popperClass: {
    type: String,
    default: ""
  },
  popperStyle: {
    type: definePropType([String, Object])
  },
  prevText: {
    type: String,
    default: ""
  },
  prevIcon: {
    type: iconPropType,
    default: () => arrow_left_default
  },
  nextText: {
    type: String,
    default: ""
  },
  nextIcon: {
    type: iconPropType,
    default: () => arrow_right_default
  },
  teleported: {
    type: Boolean,
    default: true
  },
  small: Boolean,
  size: useSizeProp,
  background: Boolean,
  disabled: Boolean,
  hideOnSinglePage: Boolean,
  appendSizeTo: String
});
const paginationEmits = {
  "update:current-page": (val) => isNumber(val),
  "update:page-size": (val) => isNumber(val),
  "size-change": (val) => isNumber(val),
  change: (currentPage, pageSize) => isNumber(currentPage) && isNumber(pageSize),
  "current-change": (val) => isNumber(val),
  "prev-click": (val) => isNumber(val),
  "next-click": (val) => isNumber(val)
};
const componentName = "ElPagination";
var Pagination = defineComponent({
  name: componentName,
  props: paginationProps,
  emits: paginationEmits,
  setup(props, { emit, slots }) {
    const { t } = useLocale();
    const ns = useNamespace("pagination");
    const vnodeProps = getCurrentInstance().vnode.props || {};
    const _globalSize = useGlobalSize();
    const _size = computed(
      () => {
        var _a;
        return props.small ? "small" : (_a = props.size) != null ? _a : _globalSize.value;
      }
    );
    useDeprecated(
      {
        from: "small",
        replacement: "size",
        version: "3.0.0",
        scope: "el-pagination",
        ref: "https://element-plus.org/zh-CN/component/pagination.html"
      },
      computed(() => !!props.small)
    );
    const hasCurrentPageListener = "onUpdate:currentPage" in vnodeProps || "onUpdate:current-page" in vnodeProps || "onCurrentChange" in vnodeProps;
    const hasPageSizeListener = "onUpdate:pageSize" in vnodeProps || "onUpdate:page-size" in vnodeProps || "onSizeChange" in vnodeProps;
    const assertValidUsage = computed(() => {
      if (isAbsent(props.total) && isAbsent(props.pageCount))
        return false;
      if (!isAbsent(props.currentPage) && !hasCurrentPageListener)
        return false;
      if (props.layout.includes("sizes")) {
        if (!isAbsent(props.pageCount)) {
          if (!hasPageSizeListener)
            return false;
        } else if (!isAbsent(props.total)) {
          if (!isAbsent(props.pageSize)) {
            if (!hasPageSizeListener) {
              return false;
            }
          }
        }
      }
      return true;
    });
    const innerPageSize = ref(
      isAbsent(props.defaultPageSize) ? 10 : props.defaultPageSize
    );
    const innerCurrentPage = ref(
      isAbsent(props.defaultCurrentPage) ? 1 : props.defaultCurrentPage
    );
    const pageSizeBridge = computed({
      get() {
        return isAbsent(props.pageSize) ? innerPageSize.value : props.pageSize;
      },
      set(v2) {
        if (isAbsent(props.pageSize)) {
          innerPageSize.value = v2;
        }
        if (hasPageSizeListener) {
          emit("update:page-size", v2);
          emit("size-change", v2);
        }
      }
    });
    const pageCountBridge = computed(() => {
      let pageCount = 0;
      if (!isAbsent(props.pageCount)) {
        pageCount = props.pageCount;
      } else if (!isAbsent(props.total)) {
        pageCount = Math.max(1, Math.ceil(props.total / pageSizeBridge.value));
      }
      return pageCount;
    });
    const currentPageBridge = computed({
      get() {
        return isAbsent(props.currentPage) ? innerCurrentPage.value : props.currentPage;
      },
      set(v2) {
        let newCurrentPage = v2;
        if (v2 < 1) {
          newCurrentPage = 1;
        } else if (v2 > pageCountBridge.value) {
          newCurrentPage = pageCountBridge.value;
        }
        if (isAbsent(props.currentPage)) {
          innerCurrentPage.value = newCurrentPage;
        }
        if (hasCurrentPageListener) {
          emit("update:current-page", newCurrentPage);
          emit("current-change", newCurrentPage);
        }
      }
    });
    watch(pageCountBridge, (val) => {
      if (currentPageBridge.value > val)
        currentPageBridge.value = val;
    });
    watch(
      [currentPageBridge, pageSizeBridge],
      (value) => {
        emit(CHANGE_EVENT, ...value);
      },
      { flush: "post" }
    );
    function handleCurrentChange(val) {
      currentPageBridge.value = val;
    }
    function handleSizeChange(val) {
      pageSizeBridge.value = val;
      const newPageCount = pageCountBridge.value;
      if (currentPageBridge.value > newPageCount) {
        currentPageBridge.value = newPageCount;
      }
    }
    function prev() {
      if (props.disabled)
        return;
      currentPageBridge.value -= 1;
      emit("prev-click", currentPageBridge.value);
    }
    function next() {
      if (props.disabled)
        return;
      currentPageBridge.value += 1;
      emit("next-click", currentPageBridge.value);
    }
    function addClass2(element, cls) {
      if (element) {
        if (!element.props) {
          element.props = {};
        }
        element.props.class = [element.props.class, cls].join(" ");
      }
    }
    provide(elPaginationKey, {
      pageCount: pageCountBridge,
      disabled: computed(() => props.disabled),
      currentPage: currentPageBridge,
      changeEvent: handleCurrentChange,
      handleSizeChange
    });
    return () => {
      var _a, _b;
      if (!assertValidUsage.value) {
        debugWarn(componentName, t("el.pagination.deprecationWarning"));
        return null;
      }
      if (!props.layout)
        return null;
      if (props.hideOnSinglePage && pageCountBridge.value <= 1)
        return null;
      const rootChildren = [];
      const rightWrapperChildren = [];
      const rightWrapperRoot = h$1(
        "div",
        { class: ns.e("rightwrapper") },
        rightWrapperChildren
      );
      const TEMPLATE_MAP = {
        prev: h$1(Prev, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          prevText: props.prevText,
          prevIcon: props.prevIcon,
          onClick: prev
        }),
        jumper: h$1(Jumper, {
          size: _size.value
        }),
        pager: h$1(Pager, {
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          pagerCount: props.pagerCount,
          onChange: handleCurrentChange,
          disabled: props.disabled
        }),
        next: h$1(Next, {
          disabled: props.disabled,
          currentPage: currentPageBridge.value,
          pageCount: pageCountBridge.value,
          nextText: props.nextText,
          nextIcon: props.nextIcon,
          onClick: next
        }),
        sizes: h$1(Sizes, {
          pageSize: pageSizeBridge.value,
          pageSizes: props.pageSizes,
          popperClass: props.popperClass,
          popperStyle: props.popperStyle,
          disabled: props.disabled,
          teleported: props.teleported,
          size: _size.value,
          appendSizeTo: props.appendSizeTo
        }),
        slot: (_b = (_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : null,
        total: h$1(Total, { total: isAbsent(props.total) ? 0 : props.total })
      };
      const components = props.layout.split(",").map((item) => item.trim());
      let haveRightWrapper = false;
      components.forEach((c2) => {
        if (c2 === "->") {
          haveRightWrapper = true;
          return;
        }
        if (!haveRightWrapper) {
          rootChildren.push(TEMPLATE_MAP[c2]);
        } else {
          rightWrapperChildren.push(TEMPLATE_MAP[c2]);
        }
      });
      addClass2(rootChildren[0], ns.is("first"));
      addClass2(rootChildren[rootChildren.length - 1], ns.is("last"));
      if (haveRightWrapper && rightWrapperChildren.length > 0) {
        addClass2(rightWrapperChildren[0], ns.is("first"));
        addClass2(
          rightWrapperChildren[rightWrapperChildren.length - 1],
          ns.is("last")
        );
        rootChildren.push(rightWrapperRoot);
      }
      return h$1(
        "div",
        {
          class: [
            ns.b(),
            ns.is("background", props.background),
            ns.m(_size.value)
          ]
        },
        rootChildren
      );
    };
  }
});
const ElPagination = withInstall(Pagination);
const getCell = function(event) {
  var _a;
  return (_a = event.target) == null ? void 0 : _a.closest("td");
};
const orderBy = function(array, sortKey, reverse, sortMethod, sortBy) {
  if (!sortKey && !sortMethod && (!sortBy || isArray$1(sortBy) && !sortBy.length)) {
    return array;
  }
  if (isString(reverse)) {
    reverse = reverse === "descending" ? -1 : 1;
  } else {
    reverse = reverse && reverse < 0 ? -1 : 1;
  }
  const getKey = sortMethod ? null : function(value, index) {
    if (sortBy) {
      return flatMap(castArray(sortBy), (by) => {
        if (isString(by)) {
          return get(value, by);
        } else {
          return by(value, index, array);
        }
      });
    }
    if (sortKey !== "$key") {
      if (isObject$1(value) && "$value" in value)
        value = value.$value;
    }
    return [
      isObject$1(value) ? sortKey ? get(value, sortKey) : null : value
    ];
  };
  const compare = function(a2, b2) {
    var _a, _b, _c, _d, _e, _f;
    if (sortMethod) {
      return sortMethod(a2.value, b2.value);
    }
    for (let i = 0, len = (_b = (_a = a2.key) == null ? void 0 : _a.length) != null ? _b : 0; i < len; i++) {
      if (((_c = a2.key) == null ? void 0 : _c[i]) < ((_d = b2.key) == null ? void 0 : _d[i])) {
        return -1;
      }
      if (((_e = a2.key) == null ? void 0 : _e[i]) > ((_f = b2.key) == null ? void 0 : _f[i])) {
        return 1;
      }
    }
    return 0;
  };
  return array.map((value, index) => {
    return {
      value,
      index,
      key: getKey ? getKey(value, index) : null
    };
  }).sort((a2, b2) => {
    let order = compare(a2, b2);
    if (!order) {
      order = a2.index - b2.index;
    }
    return order * +reverse;
  }).map((item) => item.value);
};
const getColumnById = function(table, columnId) {
  let column = null;
  table.columns.forEach((item) => {
    if (item.id === columnId) {
      column = item;
    }
  });
  return column;
};
const getColumnByKey = function(table, columnKey) {
  let column = null;
  for (let i = 0; i < table.columns.length; i++) {
    const item = table.columns[i];
    if (item.columnKey === columnKey) {
      column = item;
      break;
    }
  }
  if (!column)
    throwError("ElTable", `No column matching with column-key: ${columnKey}`);
  return column;
};
const getColumnByCell = function(table, cell, namespace) {
  const matches = (cell.className || "").match(
    new RegExp(`${namespace}-table_[^\\s]+`, "gm")
  );
  if (matches) {
    return getColumnById(table, matches[0]);
  }
  return null;
};
const getRowIdentity = (row, rowKey) => {
  if (!row)
    throw new Error("Row is required when get row identity");
  if (isString(rowKey)) {
    if (!rowKey.includes(".")) {
      return `${row[rowKey]}`;
    }
    const key = rowKey.split(".");
    let current = row;
    for (const element of key) {
      current = current[element];
    }
    return `${current}`;
  } else if (isFunction$1(rowKey)) {
    return rowKey.call(null, row);
  }
  return "";
};
const getKeysMap = function(array, rowKey, flatten = false, childrenKey = "children") {
  const data = array || [];
  const arrayMap2 = {};
  data.forEach((row, index) => {
    arrayMap2[getRowIdentity(row, rowKey)] = { row, index };
    if (flatten) {
      const children = row[childrenKey];
      if (isArray$1(children)) {
        Object.assign(arrayMap2, getKeysMap(children, rowKey, true, childrenKey));
      }
    }
  });
  return arrayMap2;
};
function mergeOptions(defaults, config) {
  const options = {};
  let key;
  for (key in defaults) {
    options[key] = defaults[key];
  }
  for (key in config) {
    if (hasOwn(config, key)) {
      const value = config[key];
      if (!isUndefined(value)) {
        options[key] = value;
      }
    }
  }
  return options;
}
function parseWidth(width) {
  if (width === "")
    return width;
  if (!isUndefined(width)) {
    width = Number.parseInt(width, 10);
    if (Number.isNaN(width)) {
      width = "";
    }
  }
  return width;
}
function parseMinWidth(minWidth) {
  if (minWidth === "")
    return minWidth;
  if (!isUndefined(minWidth)) {
    minWidth = parseWidth(minWidth);
    if (Number.isNaN(minWidth)) {
      minWidth = 80;
    }
  }
  return minWidth;
}
function parseHeight(height) {
  if (isNumber(height)) {
    return height;
  }
  if (isString(height)) {
    if (/^\d+(?:px)?$/.test(height)) {
      return Number.parseInt(height, 10);
    } else {
      return height;
    }
  }
  return null;
}
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a2, b2) => (...args) => a2(b2(...args))
  );
}
function toggleRowStatus(statusArr, row, newVal, tableTreeProps, selectable, rowIndex, rowKey) {
  let _rowIndex = rowIndex != null ? rowIndex : 0;
  let changed = false;
  const getIndex = () => {
    if (!rowKey) {
      return statusArr.indexOf(row);
    }
    const id = getRowIdentity(row, rowKey);
    return statusArr.findIndex((item) => getRowIdentity(item, rowKey) === id);
  };
  const index = getIndex();
  const included = index !== -1;
  const isRowSelectable = selectable == null ? void 0 : selectable.call(null, row, _rowIndex);
  const toggleStatus = (type) => {
    if (type === "add") {
      statusArr.push(row);
    } else {
      statusArr.splice(index, 1);
    }
    changed = true;
  };
  const getChildrenCount = (row2) => {
    let count = 0;
    const children = (tableTreeProps == null ? void 0 : tableTreeProps.children) && row2[tableTreeProps.children];
    if (children && isArray$1(children)) {
      count += children.length;
      children.forEach((item) => {
        count += getChildrenCount(item);
      });
    }
    return count;
  };
  if (!selectable || isRowSelectable) {
    if (isBoolean(newVal)) {
      if (newVal && !included) {
        toggleStatus("add");
      } else if (!newVal && included) {
        toggleStatus("remove");
      }
    } else {
      included ? toggleStatus("remove") : toggleStatus("add");
    }
  }
  if (!(tableTreeProps == null ? void 0 : tableTreeProps.checkStrictly) && (tableTreeProps == null ? void 0 : tableTreeProps.children) && isArray$1(row[tableTreeProps.children])) {
    row[tableTreeProps.children].forEach((item) => {
      const childChanged = toggleRowStatus(
        statusArr,
        item,
        newVal != null ? newVal : !included,
        tableTreeProps,
        selectable,
        _rowIndex + 1,
        rowKey
      );
      _rowIndex += getChildrenCount(item) + 1;
      if (childChanged) {
        changed = childChanged;
      }
    });
  }
  return changed;
}
function walkTreeNode(root, cb, childrenKey = "children", lazyKey = "hasChildren", lazy = false) {
  const isNil = (array) => !(isArray$1(array) && array.length);
  function _walker(parent, children, level) {
    cb(parent, children, level);
    children.forEach((item) => {
      if (item[lazyKey] && lazy) {
        cb(item, null, level + 1);
        return;
      }
      const children2 = item[childrenKey];
      if (!isNil(children2)) {
        _walker(item, children2, level + 1);
      }
    });
  }
  root.forEach((item) => {
    if (item[lazyKey] && lazy) {
      cb(item, null, 0);
      return;
    }
    const children = item[childrenKey];
    if (!isNil(children)) {
      _walker(item, children, 0);
    }
  });
}
const getTableOverflowTooltipProps = (props, innerText, row, column) => {
  const popperOptions = {
    strategy: "fixed",
    ...props.popperOptions
  };
  const tooltipFormatterContent = isFunction$1(column == null ? void 0 : column.tooltipFormatter) ? column.tooltipFormatter({
    row,
    column,
    cellValue: getProp(row, column.property).value
  }) : void 0;
  if (isVNode(tooltipFormatterContent)) {
    return {
      slotContent: tooltipFormatterContent,
      content: null,
      ...props,
      popperOptions
    };
  }
  return {
    slotContent: null,
    content: tooltipFormatterContent != null ? tooltipFormatterContent : innerText,
    ...props,
    popperOptions
  };
};
let removePopper = null;
function createTablePopper(props, popperContent, row, column, trigger, table) {
  var _a;
  const tableOverflowTooltipProps = getTableOverflowTooltipProps(
    props,
    popperContent,
    row,
    column
  );
  const mergedProps = {
    ...tableOverflowTooltipProps,
    slotContent: void 0
  };
  if ((removePopper == null ? void 0 : removePopper.trigger) === trigger) {
    const comp = (_a = removePopper.vm) == null ? void 0 : _a.component;
    merge(comp == null ? void 0 : comp.props, mergedProps);
    if (comp && tableOverflowTooltipProps.slotContent) {
      comp.slots.content = () => [tableOverflowTooltipProps.slotContent];
    }
    return;
  }
  removePopper == null ? void 0 : removePopper();
  const parentNode = table == null ? void 0 : table.refs.tableWrapper;
  const ns = parentNode == null ? void 0 : parentNode.dataset.prefix;
  const vm = createVNode(
    ElTooltip,
    {
      virtualTriggering: true,
      virtualRef: trigger,
      appendTo: parentNode,
      placement: "top",
      transition: "none",
      offset: 0,
      hideAfter: 0,
      ...mergedProps
    },
    tableOverflowTooltipProps.slotContent ? {
      content: () => tableOverflowTooltipProps.slotContent
    } : void 0
  );
  vm.appContext = { ...table.appContext, ...table };
  const container = document.createElement("div");
  render(vm, container);
  vm.component.exposed.onOpen();
  const scrollContainer = parentNode == null ? void 0 : parentNode.querySelector(`.${ns}-scrollbar__wrap`);
  removePopper = () => {
    var _a2, _b;
    if ((_b = (_a2 = vm.component) == null ? void 0 : _a2.exposed) == null ? void 0 : _b.onClose) {
      vm.component.exposed.onClose();
    }
    render(null, container);
    const currentRemovePopper = removePopper;
    scrollContainer == null ? void 0 : scrollContainer.removeEventListener("scroll", currentRemovePopper);
    currentRemovePopper.trigger = void 0;
    currentRemovePopper.vm = void 0;
    removePopper = null;
  };
  removePopper.trigger = trigger != null ? trigger : void 0;
  removePopper.vm = vm;
  scrollContainer == null ? void 0 : scrollContainer.addEventListener("scroll", removePopper);
}
function getCurrentColumns(column) {
  if (column.children) {
    return flatMap(column.children, getCurrentColumns);
  } else {
    return [column];
  }
}
function getColSpan(colSpan, column) {
  return colSpan + column.colSpan;
}
const isFixedColumn = (index, fixed, store, realColumns) => {
  let start = 0;
  let after = index;
  const columns = store.states.columns.value;
  if (realColumns) {
    const curColumns = getCurrentColumns(realColumns[index]);
    const preColumns = columns.slice(0, columns.indexOf(curColumns[0]));
    start = preColumns.reduce(getColSpan, 0);
    after = start + curColumns.reduce(getColSpan, 0) - 1;
  } else {
    start = index;
  }
  let fixedLayout;
  switch (fixed) {
    case "left":
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      }
      break;
    case "right":
      if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
      break;
    default:
      if (after < store.states.fixedLeafColumnsLength.value) {
        fixedLayout = "left";
      } else if (start >= columns.length - store.states.rightFixedLeafColumnsLength.value) {
        fixedLayout = "right";
      }
  }
  return fixedLayout ? {
    direction: fixedLayout,
    start,
    after
  } : {};
};
const getFixedColumnsClass = (namespace, index, fixed, store, realColumns, offset = 0) => {
  const classes = [];
  const { direction, start, after } = isFixedColumn(
    index,
    fixed,
    store,
    realColumns
  );
  if (direction) {
    const isLeft = direction === "left";
    classes.push(`${namespace}-fixed-column--${direction}`);
    if (isLeft && after + offset === store.states.fixedLeafColumnsLength.value - 1) {
      classes.push("is-last-column");
    } else if (!isLeft && start - offset === store.states.columns.value.length - store.states.rightFixedLeafColumnsLength.value) {
      classes.push("is-first-column");
    }
  }
  return classes;
};
function getOffset(offset, column) {
  return offset + (isNull(column.realWidth) || Number.isNaN(column.realWidth) ? Number(column.width) : column.realWidth);
}
const getFixedColumnOffset = (index, fixed, store, realColumns) => {
  const {
    direction,
    start = 0,
    after = 0
  } = isFixedColumn(index, fixed, store, realColumns);
  if (!direction) {
    return;
  }
  const styles = {};
  const isLeft = direction === "left";
  const columns = store.states.columns.value;
  if (isLeft) {
    styles.left = columns.slice(0, start).reduce(getOffset, 0);
  } else {
    styles.right = columns.slice(after + 1).reverse().reduce(getOffset, 0);
  }
  return styles;
};
const ensurePosition = (style, key) => {
  if (!style)
    return;
  if (!Number.isNaN(style[key])) {
    style[key] = `${style[key]}px`;
  }
};
function ensureValidVNode(vnodes) {
  return vnodes.some((child) => {
    if (!isVNode(child))
      return true;
    if (child.type === Comment)
      return false;
    if (child.type === Fragment && !ensureValidVNode(child.children)) {
      return false;
    }
    return true;
  }) ? vnodes : null;
}
function useExpand(watcherData) {
  const instance = getCurrentInstance();
  const defaultExpandAll = ref(false);
  const expandRows = ref([]);
  const updateExpandRows = () => {
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    if (defaultExpandAll.value) {
      expandRows.value = data.slice();
    } else if (rowKey) {
      const expandRowsMap = getKeysMap(expandRows.value, rowKey);
      expandRows.value = data.reduce((prev, row) => {
        const rowId = getRowIdentity(row, rowKey);
        const rowInfo = expandRowsMap[rowId];
        if (rowInfo) {
          prev.push(row);
        }
        return prev;
      }, []);
    } else {
      expandRows.value = [];
    }
  };
  const toggleRowExpansion = (row, expanded) => {
    const changed = toggleRowStatus(
      expandRows.value,
      row,
      expanded,
      void 0,
      void 0,
      void 0,
      watcherData.rowKey.value
    );
    if (changed) {
      instance.emit("expand-change", row, expandRows.value.slice());
    }
  };
  const setExpandRowKeys = (rowKeys) => {
    instance.store.assertRowKey();
    const data = watcherData.data.value || [];
    const rowKey = watcherData.rowKey.value;
    const keysMap = getKeysMap(data, rowKey);
    expandRows.value = rowKeys.reduce((prev, cur) => {
      const info = keysMap[cur];
      if (info) {
        prev.push(info.row);
      }
      return prev;
    }, []);
  };
  const isRowExpanded = (row) => {
    const rowKey = watcherData.rowKey.value;
    if (rowKey) {
      const expandMap = getKeysMap(expandRows.value, rowKey);
      return !!expandMap[getRowIdentity(row, rowKey)];
    }
    return expandRows.value.includes(row);
  };
  return {
    updateExpandRows,
    toggleRowExpansion,
    setExpandRowKeys,
    isRowExpanded,
    states: {
      expandRows,
      defaultExpandAll
    }
  };
}
function useCurrent(watcherData) {
  const instance = getCurrentInstance();
  const _currentRowKey = ref(null);
  const currentRow = ref(null);
  const setCurrentRowKey = (key) => {
    instance.store.assertRowKey();
    _currentRowKey.value = key;
    setCurrentRowByKey(key);
  };
  const restoreCurrentRowKey = () => {
    _currentRowKey.value = null;
  };
  const setCurrentRowByKey = (key) => {
    var _a;
    const { data, rowKey } = watcherData;
    let _currentRow = null;
    if (rowKey.value) {
      _currentRow = (_a = (unref(data) || []).find(
        (item) => getRowIdentity(item, rowKey.value) === key
      )) != null ? _a : null;
    }
    currentRow.value = _currentRow != null ? _currentRow : null;
    instance.emit("current-change", currentRow.value, null);
  };
  const updateCurrentRow = (_currentRow) => {
    const oldCurrentRow = currentRow.value;
    if (_currentRow && _currentRow !== oldCurrentRow) {
      currentRow.value = _currentRow;
      instance.emit("current-change", currentRow.value, oldCurrentRow);
      return;
    }
    if (!_currentRow && oldCurrentRow) {
      currentRow.value = null;
      instance.emit("current-change", null, oldCurrentRow);
    }
  };
  const updateCurrentRowData = () => {
    const rowKey = watcherData.rowKey.value;
    const data = watcherData.data.value || [];
    const oldCurrentRow = currentRow.value;
    if (oldCurrentRow && !data.includes(oldCurrentRow)) {
      if (rowKey) {
        const currentRowKey = getRowIdentity(oldCurrentRow, rowKey);
        setCurrentRowByKey(currentRowKey);
      } else {
        currentRow.value = null;
      }
      if (isNull(currentRow.value)) {
        instance.emit("current-change", null, oldCurrentRow);
      }
    } else if (_currentRowKey.value) {
      setCurrentRowByKey(_currentRowKey.value);
      restoreCurrentRowKey();
    }
  };
  return {
    setCurrentRowKey,
    restoreCurrentRowKey,
    setCurrentRowByKey,
    updateCurrentRow,
    updateCurrentRowData,
    states: {
      _currentRowKey,
      currentRow
    }
  };
}
function useTree(watcherData) {
  const expandRowKeys = ref([]);
  const treeData = ref({});
  const indent = ref(16);
  const lazy = ref(false);
  const lazyTreeNodeMap = ref({});
  const lazyColumnIdentifier = ref("hasChildren");
  const childrenColumnName = ref("children");
  const checkStrictly = ref(false);
  const instance = getCurrentInstance();
  const normalizedData = computed(() => {
    if (!watcherData.rowKey.value)
      return {};
    const data = watcherData.data.value || [];
    return normalize(data);
  });
  const normalizedLazyNode = computed(() => {
    const rowKey = watcherData.rowKey.value;
    const keys2 = Object.keys(lazyTreeNodeMap.value);
    const res = {};
    if (!keys2.length)
      return res;
    keys2.forEach((key) => {
      if (lazyTreeNodeMap.value[key].length) {
        const item = { children: [] };
        lazyTreeNodeMap.value[key].forEach((row) => {
          const currentRowKey = getRowIdentity(row, rowKey);
          item.children.push(currentRowKey);
          if (row[lazyColumnIdentifier.value] && !res[currentRowKey]) {
            res[currentRowKey] = { children: [] };
          }
        });
        res[key] = item;
      }
    });
    return res;
  });
  const normalize = (data) => {
    const rowKey = watcherData.rowKey.value;
    const res = {};
    walkTreeNode(
      data,
      (parent, children, level) => {
        const parentId = getRowIdentity(parent, rowKey);
        if (isArray$1(children)) {
          res[parentId] = {
            children: children.map((row) => getRowIdentity(row, rowKey)),
            level
          };
        } else if (lazy.value) {
          res[parentId] = {
            children: [],
            lazy: true,
            level
          };
        }
      },
      childrenColumnName.value,
      lazyColumnIdentifier.value,
      lazy.value
    );
    return res;
  };
  const updateTreeData = (ifChangeExpandRowKeys = false, ifExpandAll) => {
    var _a, _b;
    ifExpandAll || (ifExpandAll = (_a = instance.store) == null ? void 0 : _a.states.defaultExpandAll.value);
    const nested = normalizedData.value;
    const normalizedLazyNode_ = normalizedLazyNode.value;
    const keys2 = Object.keys(nested);
    const newTreeData = {};
    if (keys2.length) {
      const oldTreeData = unref(treeData);
      const rootLazyRowKeys = [];
      const getExpanded = (oldValue, key) => {
        if (ifChangeExpandRowKeys) {
          if (expandRowKeys.value) {
            return ifExpandAll || expandRowKeys.value.includes(key);
          } else {
            return !!(ifExpandAll || (oldValue == null ? void 0 : oldValue.expanded));
          }
        } else {
          const included = ifExpandAll || expandRowKeys.value && expandRowKeys.value.includes(key);
          return !!((oldValue == null ? void 0 : oldValue.expanded) || included);
        }
      };
      keys2.forEach((key) => {
        const oldValue = oldTreeData[key];
        const newValue = { ...nested[key] };
        newValue.expanded = getExpanded(oldValue, key);
        if (newValue.lazy) {
          const { loaded = false, loading = false } = oldValue || {};
          newValue.loaded = !!loaded;
          newValue.loading = !!loading;
          rootLazyRowKeys.push(key);
        }
        newTreeData[key] = newValue;
      });
      const lazyKeys = Object.keys(normalizedLazyNode_);
      if (lazy.value && lazyKeys.length && rootLazyRowKeys.length) {
        lazyKeys.forEach((key) => {
          var _a2;
          const oldValue = oldTreeData[key];
          const lazyNodeChildren = normalizedLazyNode_[key].children;
          if (rootLazyRowKeys.includes(key)) {
            if (((_a2 = newTreeData[key].children) == null ? void 0 : _a2.length) !== 0) {
              throw new Error("[ElTable]children must be an empty array.");
            }
            newTreeData[key].children = lazyNodeChildren;
          } else {
            const { loaded = false, loading = false } = oldValue || {};
            newTreeData[key] = {
              lazy: true,
              loaded: !!loaded,
              loading: !!loading,
              expanded: getExpanded(oldValue, key),
              children: lazyNodeChildren,
              level: void 0
            };
          }
        });
      }
    }
    treeData.value = newTreeData;
    (_b = instance.store) == null ? void 0 : _b.updateTableScrollY();
  };
  watch(
    () => expandRowKeys.value,
    () => {
      updateTreeData(true);
    }
  );
  watch(
    () => normalizedData.value,
    () => {
      updateTreeData();
    }
  );
  watch(
    () => normalizedLazyNode.value,
    () => {
      updateTreeData();
    }
  );
  const updateTreeExpandKeys = (value) => {
    expandRowKeys.value = value;
    updateTreeData();
  };
  const isUseLazy = (data) => {
    return lazy.value && data && "loaded" in data && !data.loaded;
  };
  const toggleTreeExpansion = (row, expanded) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = id && treeData.value[id];
    if (id && data && "expanded" in data) {
      const oldExpanded = data.expanded;
      expanded = isUndefined(expanded) ? !data.expanded : expanded;
      treeData.value[id].expanded = expanded;
      if (oldExpanded !== expanded) {
        instance.emit("expand-change", row, expanded);
      }
      expanded && isUseLazy(data) && loadData(row, id, data);
      instance.store.updateTableScrollY();
    }
  };
  const loadOrToggle = (row) => {
    instance.store.assertRowKey();
    const rowKey = watcherData.rowKey.value;
    const id = getRowIdentity(row, rowKey);
    const data = treeData.value[id];
    if (isUseLazy(data)) {
      loadData(row, id, data);
    } else {
      toggleTreeExpansion(row, void 0);
    }
  };
  const loadData = (row, key, treeNode) => {
    const { load } = instance.props;
    if (load && !treeData.value[key].loaded) {
      treeData.value[key].loading = true;
      load(row, treeNode, (data) => {
        if (!isArray$1(data)) {
          throw new TypeError("[ElTable] data must be an array");
        }
        treeData.value[key].loading = false;
        treeData.value[key].loaded = true;
        treeData.value[key].expanded = true;
        if (data.length) {
          lazyTreeNodeMap.value[key] = data;
        }
        instance.emit("expand-change", row, true);
      });
    }
  };
  const updateKeyChildren = (key, data) => {
    const { lazy: lazy2, rowKey } = instance.props;
    if (!lazy2)
      return;
    if (!rowKey)
      throw new Error("[Table] rowKey is required in updateKeyChild");
    if (lazyTreeNodeMap.value[key]) {
      lazyTreeNodeMap.value[key] = data;
    }
  };
  return {
    loadData,
    loadOrToggle,
    toggleTreeExpansion,
    updateTreeExpandKeys,
    updateTreeData,
    updateKeyChildren,
    normalize,
    states: {
      expandRowKeys,
      treeData,
      indent,
      lazy,
      lazyTreeNodeMap,
      lazyColumnIdentifier,
      childrenColumnName,
      checkStrictly
    }
  };
}
const sortData = (data, states) => {
  const sortingColumn = states.sortingColumn;
  if (!sortingColumn || isString(sortingColumn.sortable)) {
    return data;
  }
  return orderBy(
    data,
    states.sortProp,
    states.sortOrder,
    sortingColumn.sortMethod,
    sortingColumn.sortBy
  );
};
const doFlattenColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children && column.children.length > 0) {
      result.push.apply(result, doFlattenColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
function useWatcher$1() {
  var _a;
  const instance = getCurrentInstance();
  const { size: tableSize } = toRefs((_a = instance.proxy) == null ? void 0 : _a.$props);
  const rowKey = ref(null);
  const data = ref([]);
  const _data = ref([]);
  const isComplex = ref(false);
  const _columns = ref([]);
  const originColumns = ref([]);
  const columns = ref([]);
  const fixedColumns = ref([]);
  const rightFixedColumns = ref([]);
  const leafColumns = ref([]);
  const fixedLeafColumns = ref([]);
  const rightFixedLeafColumns = ref([]);
  const updateOrderFns = [];
  const leafColumnsLength = ref(0);
  const fixedLeafColumnsLength = ref(0);
  const rightFixedLeafColumnsLength = ref(0);
  const isAllSelected = ref(false);
  const selection = ref([]);
  const reserveSelection = ref(false);
  const selectOnIndeterminate = ref(false);
  const selectable = ref(null);
  const filters = ref({});
  const filteredData = ref(null);
  const sortingColumn = ref(null);
  const sortProp = ref(null);
  const sortOrder = ref(null);
  const hoverRow = ref(null);
  const selectedMap = computed(() => {
    return rowKey.value ? getKeysMap(selection.value, rowKey.value) : void 0;
  });
  watch(
    data,
    () => {
      var _a2;
      if (instance.state) {
        scheduleLayout(false);
        const needUpdateFixed = instance.props.tableLayout === "auto";
        if (needUpdateFixed) {
          (_a2 = instance.refs.tableHeaderRef) == null ? void 0 : _a2.updateFixedColumnStyle();
        }
      }
    },
    {
      deep: true
    }
  );
  const assertRowKey = () => {
    if (!rowKey.value)
      throw new Error("[ElTable] prop row-key is required");
  };
  const updateChildFixed = (column) => {
    var _a2;
    (_a2 = column.children) == null ? void 0 : _a2.forEach((childColumn) => {
      childColumn.fixed = column.fixed;
      updateChildFixed(childColumn);
    });
  };
  const updateColumns = () => {
    _columns.value.forEach((column) => {
      updateChildFixed(column);
    });
    fixedColumns.value = _columns.value.filter(
      (column) => [true, "left"].includes(column.fixed)
    );
    const selectColumn = _columns.value.find(
      (column) => column.type === "selection"
    );
    let selectColFixLeft;
    if (selectColumn && selectColumn.fixed !== "right" && !fixedColumns.value.includes(selectColumn)) {
      const selectColumnIndex = _columns.value.indexOf(selectColumn);
      if (selectColumnIndex === 0 && fixedColumns.value.length) {
        fixedColumns.value.unshift(selectColumn);
        selectColFixLeft = true;
      }
    }
    rightFixedColumns.value = _columns.value.filter(
      (column) => column.fixed === "right"
    );
    const notFixedColumns = _columns.value.filter(
      (column) => (selectColFixLeft ? column.type !== "selection" : true) && !column.fixed
    );
    originColumns.value = Array.from(fixedColumns.value).concat(notFixedColumns).concat(rightFixedColumns.value);
    const leafColumns2 = doFlattenColumns(notFixedColumns);
    const fixedLeafColumns2 = doFlattenColumns(fixedColumns.value);
    const rightFixedLeafColumns2 = doFlattenColumns(rightFixedColumns.value);
    leafColumnsLength.value = leafColumns2.length;
    fixedLeafColumnsLength.value = fixedLeafColumns2.length;
    rightFixedLeafColumnsLength.value = rightFixedLeafColumns2.length;
    columns.value = Array.from(fixedLeafColumns2).concat(leafColumns2).concat(rightFixedLeafColumns2);
    isComplex.value = fixedColumns.value.length > 0 || rightFixedColumns.value.length > 0;
  };
  const scheduleLayout = (needUpdateColumns, immediate = false) => {
    if (needUpdateColumns) {
      updateColumns();
    }
    if (immediate) {
      instance.state.doLayout();
    } else {
      instance.state.debouncedUpdateLayout();
    }
  };
  const isSelected = (row) => {
    if (selectedMap.value) {
      return !!selectedMap.value[getRowIdentity(row, rowKey.value)];
    } else {
      return selection.value.includes(row);
    }
  };
  const clearSelection = () => {
    isAllSelected.value = false;
    const oldSelection = selection.value;
    selection.value = [];
    if (oldSelection.length) {
      instance.emit("selection-change", []);
    }
  };
  const cleanSelection = () => {
    var _a2, _b;
    let deleted;
    if (rowKey.value) {
      deleted = [];
      const childrenKey = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.childrenColumnName.value;
      const dataMap = getKeysMap(data.value, rowKey.value, true, childrenKey);
      for (const key in selectedMap.value) {
        if (hasOwn(selectedMap.value, key) && !dataMap[key]) {
          deleted.push(selectedMap.value[key].row);
        }
      }
    } else {
      deleted = selection.value.filter((item) => !data.value.includes(item));
    }
    if (deleted.length) {
      const newSelection = selection.value.filter(
        (item) => !deleted.includes(item)
      );
      selection.value = newSelection;
      instance.emit("selection-change", newSelection.slice());
    }
  };
  const getSelectionRows = () => {
    return (selection.value || []).slice();
  };
  const toggleRowSelection = (row, selected, emitChange = true, ignoreSelectable = false) => {
    var _a2, _b, _c, _d;
    const treeProps = {
      children: (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.childrenColumnName.value,
      checkStrictly: (_d = (_c = instance == null ? void 0 : instance.store) == null ? void 0 : _c.states) == null ? void 0 : _d.checkStrictly.value
    };
    const changed = toggleRowStatus(
      selection.value,
      row,
      selected,
      treeProps,
      ignoreSelectable ? void 0 : selectable.value,
      data.value.indexOf(row),
      rowKey.value
    );
    if (changed) {
      const newSelection = (selection.value || []).slice();
      if (emitChange) {
        instance.emit("select", newSelection, row);
      }
      instance.emit("selection-change", newSelection);
    }
  };
  const _toggleAllSelection = () => {
    var _a2, _b;
    const value = selectOnIndeterminate.value ? !isAllSelected.value : !(isAllSelected.value || selection.value.length);
    isAllSelected.value = value;
    let selectionChanged = false;
    let childrenCount = 0;
    const rowKey2 = (_b = (_a2 = instance == null ? void 0 : instance.store) == null ? void 0 : _a2.states) == null ? void 0 : _b.rowKey.value;
    const { childrenColumnName } = instance.store.states;
    const treeProps = {
      children: childrenColumnName.value,
      checkStrictly: false
    };
    data.value.forEach((row, index) => {
      const rowIndex = index + childrenCount;
      if (toggleRowStatus(
        selection.value,
        row,
        value,
        treeProps,
        selectable.value,
        rowIndex,
        rowKey2
      )) {
        selectionChanged = true;
      }
      childrenCount += getChildrenCount(getRowIdentity(row, rowKey2));
    });
    if (selectionChanged) {
      instance.emit(
        "selection-change",
        selection.value ? selection.value.slice() : []
      );
    }
    instance.emit("select-all", (selection.value || []).slice());
  };
  const updateAllSelected = () => {
    var _a2;
    if (((_a2 = data.value) == null ? void 0 : _a2.length) === 0) {
      isAllSelected.value = false;
      return;
    }
    const { childrenColumnName } = instance.store.states;
    let rowIndex = 0;
    let selectedCount = 0;
    const checkSelectedStatus = (data2) => {
      var _a3;
      for (const row of data2) {
        const isRowSelectable = selectable.value && selectable.value.call(null, row, rowIndex);
        if (!isSelected(row)) {
          if (!selectable.value || isRowSelectable) {
            return false;
          }
        } else {
          selectedCount++;
        }
        rowIndex++;
        if (((_a3 = row[childrenColumnName.value]) == null ? void 0 : _a3.length) && !checkSelectedStatus(row[childrenColumnName.value])) {
          return false;
        }
      }
      return true;
    };
    const isAllSelected_ = checkSelectedStatus(data.value || []);
    isAllSelected.value = selectedCount === 0 ? false : isAllSelected_;
  };
  const getChildrenCount = (rowKey2) => {
    var _a2;
    if (!instance || !instance.store)
      return 0;
    const { treeData } = instance.store.states;
    let count = 0;
    const children = (_a2 = treeData.value[rowKey2]) == null ? void 0 : _a2.children;
    if (children) {
      count += children.length;
      children.forEach((childKey) => {
        count += getChildrenCount(childKey);
      });
    }
    return count;
  };
  const updateFilters = (column, values) => {
    const filters_ = {};
    castArray(column).forEach((col) => {
      filters.value[col.id] = values;
      filters_[col.columnKey || col.id] = values;
    });
    return filters_;
  };
  const updateSort = (column, prop, order) => {
    if (sortingColumn.value && sortingColumn.value !== column) {
      sortingColumn.value.order = null;
    }
    sortingColumn.value = column;
    sortProp.value = prop;
    sortOrder.value = order;
  };
  const execFilter = () => {
    let sourceData = unref(_data);
    Object.keys(filters.value).forEach((columnId) => {
      const values = filters.value[columnId];
      if (!values || values.length === 0)
        return;
      const column = getColumnById(
        {
          columns: columns.value
        },
        columnId
      );
      if (column && column.filterMethod) {
        sourceData = sourceData.filter((row) => {
          return values.some(
            (value) => column.filterMethod.call(null, value, row, column)
          );
        });
      }
    });
    filteredData.value = sourceData;
  };
  const execSort = () => {
    var _a2;
    data.value = sortData((_a2 = filteredData.value) != null ? _a2 : [], {
      sortingColumn: sortingColumn.value,
      sortProp: sortProp.value,
      sortOrder: sortOrder.value
    });
  };
  const execQuery = (ignore = void 0) => {
    if (!(ignore == null ? void 0 : ignore.filter)) {
      execFilter();
    }
    execSort();
  };
  const clearFilter = (columnKeys) => {
    const { tableHeaderRef } = instance.refs;
    if (!tableHeaderRef)
      return;
    const panels = Object.assign({}, tableHeaderRef.filterPanels);
    const keys2 = Object.keys(panels);
    if (!keys2.length)
      return;
    if (isString(columnKeys)) {
      columnKeys = [columnKeys];
    }
    if (isArray$1(columnKeys)) {
      const columns_ = columnKeys.map(
        (key) => getColumnByKey(
          {
            columns: columns.value
          },
          key
        )
      );
      keys2.forEach((key) => {
        const column = columns_.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      instance.store.commit("filterChange", {
        column: columns_,
        values: [],
        silent: true,
        multi: true
      });
    } else {
      keys2.forEach((key) => {
        const column = columns.value.find((col) => col.id === key);
        if (column) {
          column.filteredValue = [];
        }
      });
      filters.value = {};
      instance.store.commit("filterChange", {
        column: {},
        values: [],
        silent: true
      });
    }
  };
  const clearSort = () => {
    if (!sortingColumn.value)
      return;
    updateSort(null, null, null);
    instance.store.commit("changeSortCondition", {
      silent: true
    });
  };
  const {
    setExpandRowKeys,
    toggleRowExpansion,
    updateExpandRows,
    states: expandStates,
    isRowExpanded
  } = useExpand({
    data,
    rowKey
  });
  const {
    updateTreeExpandKeys,
    toggleTreeExpansion,
    updateTreeData,
    updateKeyChildren,
    loadOrToggle,
    states: treeStates
  } = useTree({
    data,
    rowKey
  });
  const {
    updateCurrentRowData,
    updateCurrentRow,
    setCurrentRowKey,
    states: currentData
  } = useCurrent({
    data,
    rowKey
  });
  const setExpandRowKeysAdapter = (val) => {
    setExpandRowKeys(val);
    updateTreeExpandKeys(val);
  };
  const toggleRowExpansionAdapter = (row, expanded) => {
    const hasExpandColumn = columns.value.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      toggleRowExpansion(row, expanded);
    } else {
      toggleTreeExpansion(row, expanded);
    }
  };
  return {
    assertRowKey,
    updateColumns,
    scheduleLayout,
    isSelected,
    clearSelection,
    cleanSelection,
    getSelectionRows,
    toggleRowSelection,
    _toggleAllSelection,
    toggleAllSelection: null,
    updateAllSelected,
    updateFilters,
    updateCurrentRow,
    updateSort,
    execFilter,
    execSort,
    execQuery,
    clearFilter,
    clearSort,
    toggleRowExpansion,
    setExpandRowKeysAdapter,
    setCurrentRowKey,
    toggleRowExpansionAdapter,
    isRowExpanded,
    updateExpandRows,
    updateCurrentRowData,
    loadOrToggle,
    updateTreeData,
    updateKeyChildren,
    states: {
      tableSize,
      rowKey,
      data,
      _data,
      isComplex,
      _columns,
      originColumns,
      columns,
      fixedColumns,
      rightFixedColumns,
      leafColumns,
      fixedLeafColumns,
      rightFixedLeafColumns,
      updateOrderFns,
      leafColumnsLength,
      fixedLeafColumnsLength,
      rightFixedLeafColumnsLength,
      isAllSelected,
      selection,
      reserveSelection,
      selectOnIndeterminate,
      selectable,
      filters,
      filteredData,
      sortingColumn,
      sortProp,
      sortOrder,
      hoverRow,
      ...expandStates,
      ...treeStates,
      ...currentData
    }
  };
}
function replaceColumn(array, column) {
  return array.map((item) => {
    var _a;
    if (item.id === column.id) {
      return column;
    } else if ((_a = item.children) == null ? void 0 : _a.length) {
      item.children = replaceColumn(item.children, column);
    }
    return item;
  });
}
function sortColumn(array) {
  array.forEach((item) => {
    var _a, _b;
    item.no = (_a = item.getColumnIndex) == null ? void 0 : _a.call(item);
    if ((_b = item.children) == null ? void 0 : _b.length) {
      sortColumn(item.children);
    }
  });
  array.sort((cur, pre) => cur.no - pre.no);
}
function useStore() {
  const instance = getCurrentInstance();
  const watcher = useWatcher$1();
  const ns = useNamespace("table");
  const { t } = useLocale();
  const mutations = {
    setData(states, data) {
      const dataInstanceChanged = unref(states._data) !== data;
      states.data.value = data;
      states._data.value = data;
      instance.store.execQuery();
      instance.store.updateCurrentRowData();
      instance.store.updateExpandRows();
      instance.store.updateTreeData(
        instance.store.states.defaultExpandAll.value
      );
      if (unref(states.reserveSelection)) {
        instance.store.assertRowKey();
      } else {
        if (dataInstanceChanged) {
          instance.store.clearSelection();
        } else {
          instance.store.cleanSelection();
        }
      }
      instance.store.updateAllSelected();
      if (instance.$ready) {
        instance.store.scheduleLayout();
      }
    },
    insertColumn(states, column, parent, updateColumnOrder) {
      var _a;
      const array = unref(states._columns);
      let newColumns = [];
      if (!parent) {
        array.push(column);
        newColumns = array;
      } else {
        if (parent && !parent.children) {
          parent.children = [];
        }
        (_a = parent.children) == null ? void 0 : _a.push(column);
        newColumns = replaceColumn(array, parent);
      }
      sortColumn(newColumns);
      states._columns.value = newColumns;
      states.updateOrderFns.push(updateColumnOrder);
      if (column.type === "selection") {
        states.selectable.value = column.selectable;
        states.reserveSelection.value = column.reserveSelection;
      }
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    updateColumnOrder(states, column) {
      var _a;
      const newColumnIndex = (_a = column.getColumnIndex) == null ? void 0 : _a.call(column);
      if (newColumnIndex === column.no)
        return;
      sortColumn(states._columns.value);
      if (instance.$ready) {
        instance.store.updateColumns();
      }
    },
    removeColumn(states, column, parent, updateColumnOrder) {
      var _a;
      const array = unref(states._columns) || [];
      if (parent) {
        (_a = parent.children) == null ? void 0 : _a.splice(
          parent.children.findIndex((item) => item.id === column.id),
          1
        );
        nextTick(() => {
          var _a2;
          if (((_a2 = parent.children) == null ? void 0 : _a2.length) === 0) {
            delete parent.children;
          }
        });
        states._columns.value = replaceColumn(array, parent);
      } else {
        const index = array.indexOf(column);
        if (index > -1) {
          array.splice(index, 1);
          states._columns.value = array;
        }
      }
      const updateFnIndex = states.updateOrderFns.indexOf(updateColumnOrder);
      updateFnIndex > -1 && states.updateOrderFns.splice(updateFnIndex, 1);
      if (instance.$ready) {
        instance.store.updateColumns();
        instance.store.scheduleLayout();
      }
    },
    sort(states, options) {
      const { prop, order, init } = options;
      if (prop) {
        const column = unref(states.columns).find(
          (column2) => column2.property === prop
        );
        if (column) {
          column.order = order;
          instance.store.updateSort(column, prop, order);
          instance.store.commit("changeSortCondition", { init });
        }
      }
    },
    changeSortCondition(states, options) {
      const { sortingColumn, sortProp, sortOrder } = states;
      const columnValue = unref(sortingColumn), propValue = unref(sortProp), orderValue = unref(sortOrder);
      if (isNull(orderValue)) {
        states.sortingColumn.value = null;
        states.sortProp.value = null;
      }
      const ignore = { filter: true };
      instance.store.execQuery(ignore);
      if (!options || !(options.silent || options.init)) {
        instance.emit("sort-change", {
          column: columnValue,
          prop: propValue,
          order: orderValue
        });
      }
      instance.store.updateTableScrollY();
    },
    filterChange(_states, options) {
      const { column, values, silent } = options;
      const newFilters = instance.store.updateFilters(column, values);
      instance.store.execQuery();
      if (!silent) {
        instance.emit("filter-change", newFilters);
      }
      instance.store.updateTableScrollY();
    },
    toggleAllSelection() {
      var _a, _b;
      (_b = (_a = instance.store).toggleAllSelection) == null ? void 0 : _b.call(_a);
    },
    rowSelectedChanged(_states, row) {
      instance.store.toggleRowSelection(row);
      instance.store.updateAllSelected();
    },
    setHoverRow(states, row) {
      states.hoverRow.value = row;
    },
    setCurrentRow(_states, row) {
      instance.store.updateCurrentRow(row);
    }
  };
  const commit = function(name, ...args) {
    const mutations2 = instance.store.mutations;
    if (mutations2[name]) {
      mutations2[name].apply(instance, [
        instance.store.states,
        ...args
      ]);
    } else {
      throw new Error(`Action not found: ${name}`);
    }
  };
  const updateTableScrollY = function() {
    nextTick(() => instance.layout.updateScrollY.apply(instance.layout));
  };
  return {
    ns,
    t,
    ...watcher,
    mutations,
    commit,
    updateTableScrollY
  };
}
const InitialStateMap = {
  rowKey: "rowKey",
  defaultExpandAll: "defaultExpandAll",
  selectOnIndeterminate: "selectOnIndeterminate",
  indent: "indent",
  lazy: "lazy",
  ["treeProps.hasChildren"]: {
    key: "lazyColumnIdentifier",
    default: "hasChildren"
  },
  ["treeProps.children"]: {
    key: "childrenColumnName",
    default: "children"
  },
  ["treeProps.checkStrictly"]: {
    key: "checkStrictly",
    default: false
  }
};
function createStore(table, props) {
  if (!table) {
    throw new Error("Table is required.");
  }
  const store = useStore();
  store.toggleAllSelection = debounce(store._toggleAllSelection, 10);
  Object.keys(InitialStateMap).forEach((key) => {
    handleValue(getArrKeysValue(props, key), key, store);
  });
  proxyTableProps(store, props);
  return store;
}
function proxyTableProps(store, props) {
  Object.keys(InitialStateMap).forEach((key) => {
    watch(
      () => getArrKeysValue(props, key),
      (value) => {
        handleValue(value, key, store);
      }
    );
  });
}
function handleValue(value, propsKey, store) {
  let newVal = value;
  let storeKey = InitialStateMap[propsKey];
  if (isObject$1(storeKey)) {
    newVal = newVal || storeKey.default;
    storeKey = storeKey.key;
  }
  store.states[storeKey].value = newVal;
}
function getArrKeysValue(props, key) {
  if (key.includes(".")) {
    const keyList = key.split(".");
    let value = props;
    keyList.forEach((k) => {
      value = value[k];
    });
    return value;
  } else {
    return props[key];
  }
}
class TableLayout {
  constructor(options) {
    this.observers = [];
    this.table = null;
    this.store = null;
    this.columns = [];
    this.fit = true;
    this.showHeader = true;
    this.height = ref(null);
    this.scrollX = ref(false);
    this.scrollY = ref(false);
    this.bodyWidth = ref(null);
    this.fixedWidth = ref(null);
    this.rightFixedWidth = ref(null);
    this.gutterWidth = 0;
    for (const name in options) {
      if (hasOwn(options, name)) {
        if (isRef(this[name])) {
          this[name].value = options[name];
        } else {
          this[name] = options[name];
        }
      }
    }
    if (!this.table) {
      throw new Error("Table is required for Table Layout");
    }
    if (!this.store) {
      throw new Error("Store is required for Table Layout");
    }
  }
  updateScrollY() {
    const height = this.height.value;
    if (isNull(height))
      return false;
    const scrollBarRef = this.table.refs.scrollBarRef;
    if (this.table.vnode.el && (scrollBarRef == null ? void 0 : scrollBarRef.wrapRef)) {
      let scrollY = true;
      const prevScrollY = this.scrollY.value;
      scrollY = scrollBarRef.wrapRef.scrollHeight > scrollBarRef.wrapRef.clientHeight;
      this.scrollY.value = scrollY;
      return prevScrollY !== scrollY;
    }
    return false;
  }
  setHeight(value, prop = "height") {
    if (!isClient)
      return;
    const el = this.table.vnode.el;
    value = parseHeight(value);
    this.height.value = Number(value);
    if (!el && (value || value === 0)) {
      nextTick(() => this.setHeight(value, prop));
      return;
    }
    if (el && isNumber(value)) {
      el.style[prop] = `${value}px`;
      this.updateElsHeight();
    } else if (el && isString(value)) {
      el.style[prop] = value;
      this.updateElsHeight();
    }
  }
  setMaxHeight(value) {
    this.setHeight(value, "max-height");
  }
  getFlattenColumns() {
    const flattenColumns = [];
    const columns = this.table.store.states.columns.value;
    columns.forEach((column) => {
      if (column.isColumnGroup) {
        flattenColumns.push.apply(flattenColumns, column.columns);
      } else {
        flattenColumns.push(column);
      }
    });
    return flattenColumns;
  }
  updateElsHeight() {
    this.updateScrollY();
    this.notifyObservers("scrollable");
  }
  headerDisplayNone(elm) {
    if (!elm)
      return true;
    let headerChild = elm;
    while (headerChild.tagName !== "DIV") {
      if (getComputedStyle(headerChild).display === "none") {
        return true;
      }
      headerChild = headerChild.parentElement;
    }
    return false;
  }
  updateColumnsWidth() {
    var _a;
    if (!isClient)
      return;
    const fit = this.fit;
    const bodyWidth = (_a = this.table.vnode.el) == null ? void 0 : _a.clientWidth;
    let bodyMinWidth = 0;
    const flattenColumns = this.getFlattenColumns();
    const flexColumns = flattenColumns.filter(
      (column) => !isNumber(column.width)
    );
    flattenColumns.forEach((column) => {
      if (isNumber(column.width) && column.realWidth)
        column.realWidth = null;
    });
    if (flexColumns.length > 0 && fit) {
      flattenColumns.forEach((column) => {
        bodyMinWidth += Number(column.width || column.minWidth || 80);
      });
      if (bodyMinWidth <= bodyWidth) {
        this.scrollX.value = false;
        const totalFlexWidth = bodyWidth - bodyMinWidth;
        if (flexColumns.length === 1) {
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth;
        } else {
          const allColumnsWidth = flexColumns.reduce(
            (prev, column) => prev + Number(column.minWidth || 80),
            0
          );
          const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
          let noneFirstWidth = 0;
          flexColumns.forEach((column, index) => {
            if (index === 0)
              return;
            const flexWidth = Math.floor(
              Number(column.minWidth || 80) * flexWidthPerPixel
            );
            noneFirstWidth += flexWidth;
            column.realWidth = Number(column.minWidth || 80) + flexWidth;
          });
          flexColumns[0].realWidth = Number(flexColumns[0].minWidth || 80) + totalFlexWidth - noneFirstWidth;
        }
      } else {
        this.scrollX.value = true;
        flexColumns.forEach((column) => {
          column.realWidth = Number(column.minWidth);
        });
      }
      this.bodyWidth.value = Math.max(bodyMinWidth, bodyWidth);
      this.table.state.resizeState.value.width = this.bodyWidth.value;
    } else {
      flattenColumns.forEach((column) => {
        if (!column.width && !column.minWidth) {
          column.realWidth = 80;
        } else {
          column.realWidth = Number(column.width || column.minWidth);
        }
        bodyMinWidth += column.realWidth;
      });
      this.scrollX.value = bodyMinWidth > bodyWidth;
      this.bodyWidth.value = bodyMinWidth;
    }
    const fixedColumns = this.store.states.fixedColumns.value;
    if (fixedColumns.length > 0) {
      let fixedWidth = 0;
      fixedColumns.forEach((column) => {
        fixedWidth += Number(column.realWidth || column.width);
      });
      this.fixedWidth.value = fixedWidth;
    }
    const rightFixedColumns = this.store.states.rightFixedColumns.value;
    if (rightFixedColumns.length > 0) {
      let rightFixedWidth = 0;
      rightFixedColumns.forEach((column) => {
        rightFixedWidth += Number(column.realWidth || column.width);
      });
      this.rightFixedWidth.value = rightFixedWidth;
    }
    this.notifyObservers("columns");
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }
  notifyObservers(event) {
    const observers = this.observers;
    observers.forEach((observer) => {
      var _a, _b;
      switch (event) {
        case "columns":
          (_a = observer.state) == null ? void 0 : _a.onColumnsChange(this);
          break;
        case "scrollable":
          (_b = observer.state) == null ? void 0 : _b.onScrollableChange(this);
          break;
        default:
          throw new Error(`Table Layout don't have event ${event}.`);
      }
    });
  }
}
const _sfc_main$3 = defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar,
    ElTooltip,
    ElIcon,
    ArrowDown: arrow_down_default,
    ArrowUp: arrow_up_default
  },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    },
    appendTo: useTooltipContentProps.appendTo
  },
  setup(props) {
    const instance = getCurrentInstance();
    const { t } = useLocale();
    const ns = useNamespace("table-filter");
    const parent = instance == null ? void 0 : instance.parent;
    if (props.column && !parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipRef = ref(null);
    const rootRef = ref(null);
    const checkedIndex = ref(0);
    const filters = computed(() => {
      return props.column && props.column.filters;
    });
    const filterClassName = computed(() => {
      if (props.column && props.column.filterClassName) {
        return `${ns.b()} ${props.column.filterClassName}`;
      }
      return ns.b();
    });
    const filterValue = computed({
      get: () => {
        var _a;
        return (((_a = props.column) == null ? void 0 : _a.filteredValue) || [])[0];
      },
      set: (value) => {
        if (filteredValue.value) {
          if (!isPropAbsent(value)) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        var _a;
        if (props.column) {
          (_a = props.upDataColumn) == null ? void 0 : _a.call(props, "filteredValue", value);
        }
      }
    });
    const multiple = computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      var _a;
      (_a = tooltipRef.value) == null ? void 0 : _a.onClose();
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue, index) => {
      filterValue.value = _filterValue;
      checkedIndex.value = index;
      if (!isPropAbsent(_filterValue)) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      var _a, _b;
      (_a = props.store) == null ? void 0 : _a.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      (_b = props.store) == null ? void 0 : _b.updateAllSelected();
    };
    const handleShowTooltip = () => {
      var _a, _b;
      (_a = rootRef.value) == null ? void 0 : _a.focus();
      !multiple.value && initCheckedIndex();
      if (props.column) {
        (_b = props.upDataColumn) == null ? void 0 : _b.call(props, "filterOpened", true);
      }
    };
    const handleHideTooltip = () => {
      var _a;
      if (props.column) {
        (_a = props.upDataColumn) == null ? void 0 : _a.call(props, "filterOpened", false);
      }
    };
    const initCheckedIndex = () => {
      if (isPropAbsent(filterValue)) {
        checkedIndex.value = 0;
        return;
      }
      const idx = (filters.value || []).findIndex((item) => {
        return item.value === filterValue.value;
      });
      checkedIndex.value = idx >= 0 ? idx + 1 : 0;
    };
    const handleKeydown = (event) => {
      var _a, _b;
      const code = getEventCode(event);
      const len = (filters.value ? filters.value.length : 0) + 1;
      let index = checkedIndex.value;
      let isPreventDefault = true;
      switch (code) {
        case EVENT_CODE.down:
        case EVENT_CODE.right:
          index = (index + 1) % len;
          break;
        case EVENT_CODE.up:
        case EVENT_CODE.left:
          index = (index - 1 + len) % len;
          break;
        case EVENT_CODE.tab:
          hidden();
          isPreventDefault = false;
          break;
        case EVENT_CODE.enter:
        case EVENT_CODE.space:
          if (index === 0) {
            handleSelect(null, 0);
          } else {
            const item = (filters.value || [])[index - 1];
            item.value && handleSelect(item.value, index);
          }
          break;
        default:
          isPreventDefault = false;
          break;
      }
      isPreventDefault && event.preventDefault();
      checkedIndex.value = index;
      (_b = (_a = rootRef.value) == null ? void 0 : _a.querySelector(
        `.${ns.e("list-item")}:nth-child(${index + 1})`
      )) == null ? void 0 : _b.focus();
    };
    return {
      multiple,
      filterClassName,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isPropAbsent,
      isActive,
      t,
      ns,
      tooltipRef,
      rootRef,
      checkedIndex,
      handleShowTooltip,
      handleHideTooltip,
      handleKeydown
    };
  }
});
const _hoisted_1$2 = ["disabled"];
const _hoisted_2$1 = ["tabindex", "aria-checked"];
const _hoisted_3 = ["tabindex", "aria-checked", "onClick"];
const _hoisted_4 = ["aria-label"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  return openBlock(), createBlock(_component_el_tooltip, {
    ref: "tooltipRef",
    offset: 0,
    placement: _ctx.placement,
    "show-arrow": false,
    trigger: "click",
    role: "dialog",
    teleported: "",
    effect: "light",
    pure: "",
    loop: "",
    "popper-class": _ctx.filterClassName,
    persistent: "",
    "append-to": _ctx.appendTo,
    onShow: _ctx.handleShowTooltip,
    onHide: _ctx.handleHideTooltip
  }, {
    content: withCtx(() => [
      _ctx.multiple ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          ref: "rootRef",
          tabindex: "-1",
          class: normalizeClass(_ctx.ns.e("multiple"))
        },
        [
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.ns.e("content"))
            },
            [
              createVNode(_component_el_scrollbar, {
                "wrap-class": _ctx.ns.e("wrap")
              }, {
                default: withCtx(() => [
                  createVNode(_component_el_checkbox_group, {
                    modelValue: _ctx.filteredValue,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.filteredValue = $event),
                    class: normalizeClass(_ctx.ns.e("checkbox-group"))
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.filters, (filter) => {
                          return openBlock(), createBlock(_component_el_checkbox, {
                            key: filter.value,
                            value: filter.value
                          }, {
                            default: withCtx(() => [
                              createTextVNode(
                                toDisplayString(filter.text),
                                1
                              )
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }),
                        128
                      ))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "class"])
                ]),
                _: 1
              }, 8, ["wrap-class"])
            ],
            2
          ),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.ns.e("bottom"))
            },
            [
              createBaseVNode("button", {
                class: normalizeClass(_ctx.ns.is("disabled", _ctx.filteredValue.length === 0)),
                disabled: _ctx.filteredValue.length === 0,
                type: "button",
                onClick: _cache[1] || (_cache[1] = (...args) => _ctx.handleConfirm && _ctx.handleConfirm(...args))
              }, toDisplayString(_ctx.t("el.table.confirmFilter")), 11, _hoisted_1$2),
              createBaseVNode(
                "button",
                {
                  type: "button",
                  onClick: _cache[2] || (_cache[2] = (...args) => _ctx.handleReset && _ctx.handleReset(...args))
                },
                toDisplayString(_ctx.t("el.table.resetFilter")),
                1
              )
            ],
            2
          )
        ],
        2
      )) : (openBlock(), createElementBlock(
        "ul",
        {
          key: 1,
          ref: "rootRef",
          tabindex: "-1",
          role: "radiogroup",
          class: normalizeClass(_ctx.ns.e("list")),
          onKeydown: _cache[4] || (_cache[4] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
        },
        [
          createBaseVNode("li", {
            role: "radio",
            class: normalizeClass([
              _ctx.ns.e("list-item"),
              _ctx.ns.is("active", _ctx.isPropAbsent(_ctx.filterValue))
            ]),
            tabindex: _ctx.checkedIndex === 0 ? 0 : -1,
            "aria-checked": _ctx.isPropAbsent(_ctx.filterValue),
            onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleSelect(null, 0))
          }, toDisplayString(_ctx.t("el.table.clearFilter")), 11, _hoisted_2$1),
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.filters, (filter, idx) => {
              return openBlock(), createElementBlock("li", {
                key: filter.value,
                role: "radio",
                class: normalizeClass([_ctx.ns.e("list-item"), _ctx.ns.is("active", _ctx.isActive(filter))]),
                tabindex: _ctx.checkedIndex === idx + 1 ? 0 : -1,
                "aria-checked": _ctx.isActive(filter),
                onClick: ($event) => _ctx.handleSelect(filter.value, idx + 1)
              }, toDisplayString(filter.text), 11, _hoisted_3);
            }),
            128
          ))
        ],
        34
      ))
    ]),
    default: withCtx(() => {
      var _a;
      return [
        createBaseVNode("button", {
          type: "button",
          class: normalizeClass(`${_ctx.ns.namespace.value}-table__column-filter-trigger`),
          "aria-label": _ctx.t("el.table.filterLabel", { column: ((_a = _ctx.column) == null ? void 0 : _a.label) || "" })
        }, [
          createVNode(_component_el_icon, null, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "filter-icon", {}, () => {
                var _a2;
                return [
                  ((_a2 = _ctx.column) == null ? void 0 : _a2.filterOpened) ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_arrow_down, { key: 1 }))
                ];
              })
            ]),
            _: 3
          })
        ], 10, _hoisted_4)
      ];
    }),
    _: 3
  }, 8, ["placement", "popper-class", "append-to", "onShow", "onHide"]);
}
var FilterPanel = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/filter-panel.vue"]]);
function useLayoutObserver(root) {
  const instance = getCurrentInstance();
  onBeforeMount(() => {
    tableLayout.value.addObserver(instance);
  });
  onMounted(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUpdated(() => {
    onColumnsChange(tableLayout.value);
    onScrollableChange(tableLayout.value);
  });
  onUnmounted(() => {
    tableLayout.value.removeObserver(instance);
  });
  const tableLayout = computed(() => {
    const layout = root.layout;
    if (!layout) {
      throw new Error("Can not find table layout.");
    }
    return layout;
  });
  const onColumnsChange = (layout) => {
    var _a;
    const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col")) || [];
    if (!cols.length)
      return;
    const flattenColumns = layout.getFlattenColumns();
    const columnsMap = {};
    flattenColumns.forEach((column) => {
      columnsMap[column.id] = column;
    });
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      const name = col.getAttribute("name");
      const column = columnsMap[name];
      if (column) {
        col.setAttribute("width", column.realWidth || column.width);
      }
    }
  };
  const onScrollableChange = (layout) => {
    var _a, _b;
    const cols = ((_a = root.vnode.el) == null ? void 0 : _a.querySelectorAll("colgroup > col[name=gutter]")) || [];
    for (let i = 0, j = cols.length; i < j; i++) {
      const col = cols[i];
      col.setAttribute("width", layout.scrollY.value ? layout.gutterWidth : "0");
    }
    const ths = ((_b = root.vnode.el) == null ? void 0 : _b.querySelectorAll("th.gutter")) || [];
    for (let i = 0, j = ths.length; i < j; i++) {
      const th = ths[i];
      th.style.width = layout.scrollY.value ? `${layout.gutterWidth}px` : "0";
      th.style.display = layout.scrollY.value ? "" : "none";
    }
  };
  return {
    tableLayout: tableLayout.value,
    onColumnsChange,
    onScrollableChange
  };
}
const TABLE_INJECTION_KEY = Symbol("ElTable");
function useEvent(props, emit) {
  const instance = getCurrentInstance();
  const parent = inject(TABLE_INJECTION_KEY);
  const handleFilterClick = (event) => {
    event.stopPropagation();
    return;
  };
  const handleHeaderClick = (event, column) => {
    if (!column.filters && column.sortable) {
      handleSortClick(event, column, false);
    } else if (column.filterable && !column.sortable) {
      handleFilterClick(event);
    }
    parent == null ? void 0 : parent.emit("header-click", column, event);
  };
  const handleHeaderContextMenu = (event, column) => {
    parent == null ? void 0 : parent.emit("header-contextmenu", column, event);
  };
  const draggingColumn = ref(null);
  const dragging = ref(false);
  const dragState = ref();
  const handleMouseDown = (event, column) => {
    var _a, _b;
    if (!isClient)
      return;
    if (column.children && column.children.length > 0)
      return;
    if (draggingColumn.value && props.border && draggingColumn.value.id === column.id) {
      dragging.value = true;
      const table = parent;
      emit("set-drag-visible", true);
      const tableEl = table == null ? void 0 : table.vnode.el;
      const tableLeft = tableEl == null ? void 0 : tableEl.getBoundingClientRect().left;
      const columnEl = (_b = (_a = instance == null ? void 0 : instance.vnode) == null ? void 0 : _a.el) == null ? void 0 : _b.querySelector(`th.${column.id}`);
      const columnRect = columnEl.getBoundingClientRect();
      const minLeft = columnRect.left - tableLeft + 30;
      addClass(columnEl, "noclick");
      dragState.value = {
        startMouseLeft: event.clientX,
        startLeft: columnRect.right - tableLeft,
        startColumnLeft: columnRect.left - tableLeft,
        tableLeft
      };
      const resizeProxy = table == null ? void 0 : table.refs.resizeProxy;
      resizeProxy.style.left = `${dragState.value.startLeft}px`;
      document.onselectstart = function() {
        return false;
      };
      document.ondragstart = function() {
        return false;
      };
      const handleMouseMove2 = (event2) => {
        const deltaLeft = event2.clientX - dragState.value.startMouseLeft;
        const proxyLeft = dragState.value.startLeft + deltaLeft;
        resizeProxy.style.left = `${Math.max(minLeft, proxyLeft)}px`;
      };
      const handleMouseUp = () => {
        if (dragging.value) {
          const { startColumnLeft, startLeft } = dragState.value;
          const finalLeft = Number.parseInt(resizeProxy.style.left, 10);
          const columnWidth = finalLeft - startColumnLeft;
          column.width = column.realWidth = columnWidth;
          table == null ? void 0 : table.emit(
            "header-dragend",
            column.width,
            startLeft - startColumnLeft,
            column,
            event
          );
          requestAnimationFrame(() => {
            props.store.scheduleLayout(false, true);
          });
          document.body.style.cursor = "";
          dragging.value = false;
          draggingColumn.value = null;
          dragState.value = void 0;
          emit("set-drag-visible", false);
        }
        document.removeEventListener("mousemove", handleMouseMove2);
        document.removeEventListener("mouseup", handleMouseUp);
        document.onselectstart = null;
        document.ondragstart = null;
        setTimeout(() => {
          removeClass(columnEl, "noclick");
        }, 0);
      };
      document.addEventListener("mousemove", handleMouseMove2);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };
  const handleMouseMove = (event, column) => {
    var _a;
    if (!props.border || column.children && column.children.length > 0)
      return;
    const el = event.target;
    const target = isElement(el) ? el.closest("th") : null;
    if (!target) {
      return;
    }
    const isSortable = hasClass(target, "is-sortable");
    if (isSortable) {
      const cursor2 = dragging.value ? "col-resize" : "";
      target.style.cursor = cursor2;
      const caret = target.querySelector(".caret-wrapper");
      if (caret) {
        caret.style.cursor = cursor2;
      }
    }
    if (!column.resizable || dragging.value) {
      draggingColumn.value = null;
      return;
    }
    const rect = target.getBoundingClientRect();
    const isLastTh = ((_a = target.parentNode) == null ? void 0 : _a.lastElementChild) === target;
    const allowDrag = props.allowDragLastColumn || !isLastTh;
    const isResizeHandleActive = rect.width > 12 && rect.right - event.clientX < 8 && allowDrag;
    const cursor = isResizeHandleActive ? "col-resize" : "";
    document.body.style.cursor = cursor;
    draggingColumn.value = isResizeHandleActive ? column : null;
    if (isSortable) {
      target.style.cursor = cursor;
    }
  };
  const handleMouseOut = () => {
    if (!isClient || dragging.value)
      return;
    document.body.style.cursor = "";
  };
  const toggleOrder = ({ order, sortOrders }) => {
    if (order === "")
      return sortOrders[0];
    const index = sortOrders.indexOf(order || null);
    return sortOrders[index > sortOrders.length - 2 ? 0 : index + 1];
  };
  const handleSortClick = (event, column, givenOrder) => {
    var _a;
    event.stopPropagation();
    const order = column.order === givenOrder ? null : givenOrder || toggleOrder(column);
    const target = (_a = event.target) == null ? void 0 : _a.closest("th");
    if (target) {
      if (hasClass(target, "noclick")) {
        removeClass(target, "noclick");
        return;
      }
    }
    if (!column.sortable)
      return;
    const clickTarget = event.currentTarget;
    if (["ascending", "descending"].some(
      (str) => hasClass(clickTarget, str) && !column.sortOrders.includes(str)
    )) {
      return;
    }
    const states = props.store.states;
    let sortProp = states.sortProp.value;
    let sortOrder;
    const sortingColumn = states.sortingColumn.value;
    if (sortingColumn !== column || sortingColumn === column && isNull(sortingColumn.order)) {
      if (sortingColumn) {
        sortingColumn.order = null;
      }
      states.sortingColumn.value = column;
      sortProp = column.property;
    }
    if (!order) {
      sortOrder = column.order = null;
    } else {
      sortOrder = column.order = order;
    }
    states.sortProp.value = sortProp;
    states.sortOrder.value = sortOrder;
    parent == null ? void 0 : parent.store.commit("changeSortCondition");
  };
  return {
    handleHeaderClick,
    handleHeaderContextMenu,
    handleMouseDown,
    handleMouseMove,
    handleMouseOut,
    handleSortClick,
    handleFilterClick
  };
}
function useStyle$2(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getHeaderRowStyle = (rowIndex) => {
    const headerRowStyle = parent == null ? void 0 : parent.props.headerRowStyle;
    if (isFunction$1(headerRowStyle)) {
      return headerRowStyle.call(null, { rowIndex });
    }
    return headerRowStyle;
  };
  const getHeaderRowClass = (rowIndex) => {
    const classes = [];
    const headerRowClassName = parent == null ? void 0 : parent.props.headerRowClassName;
    if (isString(headerRowClassName)) {
      classes.push(headerRowClassName);
    } else if (isFunction$1(headerRowClassName)) {
      classes.push(headerRowClassName.call(null, { rowIndex }));
    }
    return classes.join(" ");
  };
  const getHeaderCellStyle = (rowIndex, columnIndex, row, column) => {
    var _a;
    let headerCellStyles = (_a = parent == null ? void 0 : parent.props.headerCellStyle) != null ? _a : {};
    if (isFunction$1(headerCellStyles)) {
      headerCellStyles = headerCellStyles.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(
      columnIndex,
      column.fixed,
      props.store,
      row
    );
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, headerCellStyles, fixedStyle);
  };
  const getHeaderCellClass = (rowIndex, columnIndex, row, column) => {
    const fixedClasses = getFixedColumnsClass(
      ns.b(),
      columnIndex,
      column.fixed,
      props.store,
      row
    );
    const classes = [
      column.id,
      column.order,
      column.headerAlign,
      column.className,
      column.labelClassName,
      ...fixedClasses
    ];
    if (!column.children) {
      classes.push("is-leaf");
    }
    if (column.sortable) {
      classes.push("is-sortable");
    }
    const headerCellClassName = parent == null ? void 0 : parent.props.headerCellClassName;
    if (isString(headerCellClassName)) {
      classes.push(headerCellClassName);
    } else if (isFunction$1(headerCellClassName)) {
      classes.push(
        headerCellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        })
      );
    }
    classes.push(ns.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  return {
    getHeaderRowStyle,
    getHeaderRowClass,
    getHeaderCellStyle,
    getHeaderCellClass
  };
}
const getAllColumns = (columns) => {
  const result = [];
  columns.forEach((column) => {
    if (column.children) {
      result.push(column);
      result.push.apply(result, getAllColumns(column.children));
    } else {
      result.push(column);
    }
  });
  return result;
};
const convertToRows = (originColumns) => {
  let maxLevel = 1;
  const traverse = (column, parent) => {
    if (parent) {
      column.level = parent.level + 1;
      if (maxLevel < column.level) {
        maxLevel = column.level;
      }
    }
    if (column.children) {
      let colSpan = 0;
      column.children.forEach((subColumn) => {
        traverse(subColumn, column);
        colSpan += subColumn.colSpan;
      });
      column.colSpan = colSpan;
    } else {
      column.colSpan = 1;
    }
  };
  originColumns.forEach((column) => {
    column.level = 1;
    traverse(column, void 0);
  });
  const rows = [];
  for (let i = 0; i < maxLevel; i++) {
    rows.push([]);
  }
  const allColumns = getAllColumns(originColumns);
  allColumns.forEach((column) => {
    if (!column.children) {
      column.rowSpan = maxLevel - column.level + 1;
    } else {
      column.rowSpan = 1;
      column.children.forEach((col) => col.isSubColumn = true);
    }
    rows[column.level - 1].push(column);
  });
  return rows;
};
function useUtils$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const columnRows = computed(() => {
    return convertToRows(props.store.states.originColumns.value);
  });
  const isGroup = computed(() => {
    const result = columnRows.value.length > 1;
    if (result && parent) {
      parent.state.isGroup.value = true;
    }
    return result;
  });
  const toggleAllSelection = (event) => {
    event.stopPropagation();
    parent == null ? void 0 : parent.store.commit("toggleAllSelection");
  };
  return {
    isGroup,
    toggleAllSelection,
    columnRows
  };
}
var TableHeader = defineComponent({
  name: "ElTableHeader",
  components: {
    ElCheckbox
  },
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    },
    appendFilterPanelTo: {
      type: String
    },
    allowDragLastColumn: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const filterPanels = ref({});
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    const isTableLayoutAuto = (parent == null ? void 0 : parent.props.tableLayout) === "auto";
    const saveIndexSelection = reactive(/* @__PURE__ */ new Map());
    const theadRef = ref();
    let delayId;
    const updateFixedColumnStyle = () => {
      delayId = setTimeout(() => {
        if (saveIndexSelection.size > 0) {
          saveIndexSelection.forEach((column, key) => {
            const el = theadRef.value.querySelector(
              `.${key.replace(/\s/g, ".")}`
            );
            if (el) {
              const width = el.getBoundingClientRect().width;
              column.width = width || column.width;
            }
          });
          saveIndexSelection.clear();
        }
      });
    };
    watch(saveIndexSelection, updateFixedColumnStyle);
    onBeforeUnmount(() => {
      if (delayId) {
        clearTimeout(delayId);
        delayId = void 0;
      }
    });
    onMounted(async () => {
      await nextTick();
      await nextTick();
      const { prop, order } = props.defaultSort;
      parent == null ? void 0 : parent.store.commit("sort", { prop, order, init: true });
      updateFixedColumnStyle();
    });
    const {
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick
    } = useEvent(props, emit);
    const {
      getHeaderRowStyle,
      getHeaderRowClass,
      getHeaderCellStyle,
      getHeaderCellClass
    } = useStyle$2(props);
    const { isGroup, toggleAllSelection, columnRows } = useUtils$1(
      props
    );
    const { t } = useLocale();
    instance.state = {
      onColumnsChange,
      onScrollableChange
    };
    instance.filterPanels = filterPanels;
    return {
      ns,
      t,
      filterPanels,
      onColumnsChange,
      onScrollableChange,
      columnRows,
      getHeaderRowClass,
      getHeaderRowStyle,
      getHeaderCellClass,
      getHeaderCellStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleMouseOut,
      handleSortClick,
      handleFilterClick,
      isGroup,
      toggleAllSelection,
      saveIndexSelection,
      isTableLayoutAuto,
      theadRef,
      updateFixedColumnStyle
    };
  },
  render() {
    const {
      ns,
      t,
      isGroup,
      columnRows,
      getHeaderCellStyle,
      getHeaderCellClass,
      getHeaderRowClass,
      getHeaderRowStyle,
      handleHeaderClick,
      handleHeaderContextMenu,
      handleMouseDown,
      handleMouseMove,
      handleSortClick,
      handleMouseOut,
      store,
      $parent,
      saveIndexSelection,
      isTableLayoutAuto
    } = this;
    let rowSpan = 1;
    return h$1(
      "thead",
      {
        ref: "theadRef",
        class: ns.is("group", isGroup)
      },
      columnRows.map(
        (subColumns, rowIndex) => h$1(
          "tr",
          {
            class: getHeaderRowClass(rowIndex),
            key: rowIndex,
            style: getHeaderRowStyle(rowIndex)
          },
          subColumns.map((column, cellIndex) => {
            if (column.rowSpan > rowSpan) {
              rowSpan = column.rowSpan;
            }
            const _class = getHeaderCellClass(
              rowIndex,
              cellIndex,
              subColumns,
              column
            );
            if (isTableLayoutAuto && column.fixed) {
              saveIndexSelection.set(_class, column);
            }
            return h$1(
              "th",
              {
                class: _class,
                colspan: column.colSpan,
                key: `${column.id}-thead`,
                rowspan: column.rowSpan,
                scope: column.colSpan > 1 ? "colgroup" : "col",
                ariaSort: column.sortable ? column.order : void 0,
                style: getHeaderCellStyle(
                  rowIndex,
                  cellIndex,
                  subColumns,
                  column
                ),
                onClick: ($event) => {
                  var _a;
                  if ((_a = $event.currentTarget) == null ? void 0 : _a.classList.contains(
                    "noclick"
                  )) {
                    return;
                  }
                  handleHeaderClick($event, column);
                },
                onContextmenu: ($event) => handleHeaderContextMenu($event, column),
                onMousedown: ($event) => handleMouseDown($event, column),
                onMousemove: ($event) => handleMouseMove($event, column),
                onMouseout: handleMouseOut
              },
              [
                h$1(
                  "div",
                  {
                    class: [
                      "cell",
                      column.filteredValue && column.filteredValue.length > 0 ? "highlight" : ""
                    ]
                  },
                  [
                    column.renderHeader ? column.renderHeader({
                      column,
                      $index: cellIndex,
                      store,
                      _self: $parent
                    }) : column.label,
                    column.sortable && h$1(
                      "button",
                      {
                        type: "button",
                        class: "caret-wrapper",
                        "aria-label": t("el.table.sortLabel", {
                          column: column.label || ""
                        }),
                        onClick: ($event) => handleSortClick($event, column)
                      },
                      [
                        h$1("i", {
                          onClick: ($event) => handleSortClick($event, column, "ascending"),
                          class: "sort-caret ascending"
                        }),
                        h$1("i", {
                          onClick: ($event) => handleSortClick($event, column, "descending"),
                          class: "sort-caret descending"
                        })
                      ]
                    ),
                    column.filterable && h$1(
                      FilterPanel,
                      {
                        store,
                        placement: column.filterPlacement || "bottom-start",
                        appendTo: $parent == null ? void 0 : $parent.appendFilterPanelTo,
                        column,
                        upDataColumn: (key, value) => {
                          column[key] = value;
                        }
                      },
                      {
                        "filter-icon": () => column.renderFilterIcon ? column.renderFilterIcon({
                          filterOpened: column.filterOpened
                        }) : null
                      }
                    )
                  ]
                )
              ]
            );
          })
        )
      )
    );
  }
});
function isGreaterThan(a2, b2, epsilon = 0.03) {
  return a2 - b2 > epsilon;
}
function useEvents(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const tooltipContent = ref("");
  const tooltipTrigger = ref(h$1("div"));
  const handleEvent = (event, row, name) => {
    var _a, _b, _c;
    const table = parent;
    const cell = getCell(event);
    let column = null;
    const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
    if (cell) {
      column = getColumnByCell(
        {
          columns: (_c = (_b = props.store) == null ? void 0 : _b.states.columns.value) != null ? _c : []
        },
        cell,
        namespace
      );
      if (column) {
        table == null ? void 0 : table.emit(`cell-${name}`, row, column, cell, event);
      }
    }
    table == null ? void 0 : table.emit(`row-${name}`, row, column, event);
  };
  const handleDoubleClick = (event, row) => {
    handleEvent(event, row, "dblclick");
  };
  const handleClick = (event, row) => {
    var _a;
    (_a = props.store) == null ? void 0 : _a.commit("setCurrentRow", row);
    handleEvent(event, row, "click");
  };
  const handleContextMenu = (event, row) => {
    handleEvent(event, row, "contextmenu");
  };
  const handleMouseEnter = debounce((index) => {
    var _a;
    (_a = props.store) == null ? void 0 : _a.commit("setHoverRow", index);
  }, 30);
  const handleMouseLeave = debounce(() => {
    var _a;
    (_a = props.store) == null ? void 0 : _a.commit("setHoverRow", null);
  }, 30);
  const getPadding = (el) => {
    const style = window.getComputedStyle(el, null);
    const paddingLeft = Number.parseInt(style.paddingLeft, 10) || 0;
    const paddingRight = Number.parseInt(style.paddingRight, 10) || 0;
    const paddingTop = Number.parseInt(style.paddingTop, 10) || 0;
    const paddingBottom = Number.parseInt(style.paddingBottom, 10) || 0;
    return {
      left: paddingLeft,
      right: paddingRight,
      top: paddingTop,
      bottom: paddingBottom
    };
  };
  const toggleRowClassByCell = (rowSpan, event, toggle) => {
    var _a;
    let node = (_a = event == null ? void 0 : event.target) == null ? void 0 : _a.parentNode;
    while (rowSpan > 1) {
      node = node == null ? void 0 : node.nextSibling;
      if (!node || node.nodeName !== "TR")
        break;
      toggle(node, "hover-row hover-fixed-row");
      rowSpan--;
    }
  };
  const handleCellMouseEnter = (event, row, tooltipOptions) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i;
    if (!parent)
      return;
    const table = parent;
    const cell = getCell(event);
    const namespace = (_a = table == null ? void 0 : table.vnode.el) == null ? void 0 : _a.dataset.prefix;
    let column = null;
    if (cell) {
      column = getColumnByCell(
        {
          columns: (_c = (_b = props.store) == null ? void 0 : _b.states.columns.value) != null ? _c : []
        },
        cell,
        namespace
      );
      if (!column) {
        return;
      }
      if (cell.rowSpan > 1) {
        toggleRowClassByCell(cell.rowSpan, event, addClass);
      }
      const hoverState = table.hoverState = {
        cell,
        column,
        row
      };
      table == null ? void 0 : table.emit(
        "cell-mouse-enter",
        hoverState.row,
        hoverState.column,
        hoverState.cell,
        event
      );
    }
    if (!tooltipOptions) {
      if (((_d = removePopper) == null ? void 0 : _d.trigger) === cell) {
        (_e = removePopper) == null ? void 0 : _e();
      }
      return;
    }
    const cellChild = event.target.querySelector(
      ".cell"
    );
    if (!(hasClass(cellChild, `${namespace}-tooltip`) && cellChild.childNodes.length && ((_f = cellChild.textContent) == null ? void 0 : _f.trim()))) {
      return;
    }
    const range = document.createRange();
    range.setStart(cellChild, 0);
    range.setEnd(cellChild, cellChild.childNodes.length);
    const { width: rangeWidth, height: rangeHeight } = range.getBoundingClientRect();
    const { width: cellChildWidth, height: cellChildHeight } = cellChild.getBoundingClientRect();
    const { top, left, right, bottom } = getPadding(cellChild);
    const horizontalPadding = left + right;
    const verticalPadding = top + bottom;
    if (isGreaterThan(rangeWidth + horizontalPadding, cellChildWidth) || isGreaterThan(rangeHeight + verticalPadding, cellChildHeight) || isGreaterThan(cellChild.scrollWidth, cellChildWidth)) {
      createTablePopper(
        tooltipOptions,
        (_g = (cell == null ? void 0 : cell.innerText) || (cell == null ? void 0 : cell.textContent)) != null ? _g : "",
        row,
        column,
        cell,
        table
      );
    } else if (((_h = removePopper) == null ? void 0 : _h.trigger) === cell) {
      (_i = removePopper) == null ? void 0 : _i();
    }
  };
  const handleCellMouseLeave = (event) => {
    const cell = getCell(event);
    if (!cell)
      return;
    if (cell.rowSpan > 1) {
      toggleRowClassByCell(cell.rowSpan, event, removeClass);
    }
    const oldHoverState = parent == null ? void 0 : parent.hoverState;
    parent == null ? void 0 : parent.emit(
      "cell-mouse-leave",
      oldHoverState == null ? void 0 : oldHoverState.row,
      oldHoverState == null ? void 0 : oldHoverState.column,
      oldHoverState == null ? void 0 : oldHoverState.cell,
      event
    );
  };
  return {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  };
}
function useStyles(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const getRowStyle = (row, rowIndex) => {
    const rowStyle = parent == null ? void 0 : parent.props.rowStyle;
    if (isFunction$1(rowStyle)) {
      return rowStyle.call(null, {
        row,
        rowIndex
      });
    }
    return rowStyle || null;
  };
  const getRowClass = (row, rowIndex, displayIndex) => {
    var _a;
    const classes = [ns.e("row")];
    if ((parent == null ? void 0 : parent.props.highlightCurrentRow) && row === ((_a = props.store) == null ? void 0 : _a.states.currentRow.value)) {
      classes.push("current-row");
    }
    if (props.stripe && displayIndex % 2 === 1) {
      classes.push(ns.em("row", "striped"));
    }
    const rowClassName = parent == null ? void 0 : parent.props.rowClassName;
    if (isString(rowClassName)) {
      classes.push(rowClassName);
    } else if (isFunction$1(rowClassName)) {
      classes.push(
        rowClassName.call(null, {
          row,
          rowIndex
        })
      );
    }
    return classes;
  };
  const getCellStyle = (rowIndex, columnIndex, row, column) => {
    const cellStyle = parent == null ? void 0 : parent.props.cellStyle;
    let cellStyles = cellStyle != null ? cellStyle : {};
    if (isFunction$1(cellStyle)) {
      cellStyles = cellStyle.call(null, {
        rowIndex,
        columnIndex,
        row,
        column
      });
    }
    const fixedStyle = getFixedColumnOffset(
      columnIndex,
      props == null ? void 0 : props.fixed,
      props.store
    );
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return Object.assign({}, cellStyles, fixedStyle);
  };
  const getCellClass = (rowIndex, columnIndex, row, column, offset) => {
    const fixedClasses = getFixedColumnsClass(
      ns.b(),
      columnIndex,
      props == null ? void 0 : props.fixed,
      props.store,
      void 0,
      offset
    );
    const classes = [column.id, column.align, column.className, ...fixedClasses];
    const cellClassName = parent == null ? void 0 : parent.props.cellClassName;
    if (isString(cellClassName)) {
      classes.push(cellClassName);
    } else if (isFunction$1(cellClassName)) {
      classes.push(
        cellClassName.call(null, {
          rowIndex,
          columnIndex,
          row,
          column
        })
      );
    }
    classes.push(ns.e("cell"));
    return classes.filter((className) => Boolean(className)).join(" ");
  };
  const getSpan = (row, column, rowIndex, columnIndex) => {
    let rowspan = 1;
    let colspan = 1;
    const fn = parent == null ? void 0 : parent.props.spanMethod;
    if (isFunction$1(fn)) {
      const result = fn({
        row,
        column,
        rowIndex,
        columnIndex
      });
      if (isArray$1(result)) {
        rowspan = result[0];
        colspan = result[1];
      } else if (isObject$1(result)) {
        rowspan = result.rowspan;
        colspan = result.colspan;
      }
    }
    return { rowspan, colspan };
  };
  const getColspanRealWidth = (columns, colspan, index) => {
    if (colspan < 1) {
      return columns[index].realWidth;
    }
    const widthArr = columns.map(({ realWidth, width }) => realWidth || width).slice(index, index + colspan);
    return Number(
      widthArr.reduce((acc, width) => Number(acc) + Number(width), -1)
    );
  };
  return {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  };
}
const _hoisted_1$1 = ["colspan", "rowspan"];
const _sfc_main$2 = defineComponent({
  ...{
    name: "TableTdWrapper"
  },
  __name: "td-wrapper",
  props: {
    colspan: {
      type: Number,
      default: 1
    },
    rowspan: {
      type: Number,
      default: 1
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("td", {
        colspan: __props.colspan,
        rowspan: __props.rowspan
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 8, _hoisted_1$1);
    };
  }
});
var TdWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table-body/td-wrapper.vue"]]);
function useRender$1(props) {
  const parent = inject(TABLE_INJECTION_KEY);
  const ns = useNamespace("table");
  const {
    handleDoubleClick,
    handleClick,
    handleContextMenu,
    handleMouseEnter,
    handleMouseLeave,
    handleCellMouseEnter,
    handleCellMouseLeave,
    tooltipContent,
    tooltipTrigger
  } = useEvents(props);
  const {
    getRowStyle,
    getRowClass,
    getCellStyle,
    getCellClass,
    getSpan,
    getColspanRealWidth
  } = useStyles(props);
  let displayIndex = -1;
  const firstDefaultColumnIndex = computed(() => {
    var _a;
    return (_a = props.store) == null ? void 0 : _a.states.columns.value.findIndex(
      ({ type }) => type === "default"
    );
  });
  const getKeyOfRow = (row, index) => {
    var _a;
    const rowKey = (_a = parent == null ? void 0 : parent.props) == null ? void 0 : _a.rowKey;
    if (rowKey) {
      return getRowIdentity(row, rowKey);
    }
    return index;
  };
  const rowRender = (row, $index, treeRowData, expanded = false) => {
    const { tooltipEffect, tooltipOptions, store } = props;
    const { indent, columns } = store.states;
    const rowClasses = [];
    let display = true;
    if (treeRowData) {
      rowClasses.push(ns.em("row", `level-${treeRowData.level}`));
      display = !!treeRowData.display;
    }
    if ($index === 0) {
      displayIndex = -1;
    }
    if (props.stripe && display) {
      displayIndex++;
    }
    rowClasses.push(...getRowClass(row, $index, displayIndex));
    const displayStyle = display ? null : { display: "none" };
    return h$1(
      "tr",
      {
        style: [displayStyle, getRowStyle(row, $index)],
        class: rowClasses,
        key: getKeyOfRow(row, $index),
        onDblclick: ($event) => handleDoubleClick($event, row),
        onClick: ($event) => handleClick($event, row),
        onContextmenu: ($event) => handleContextMenu($event, row),
        onMouseenter: () => handleMouseEnter($index),
        onMouseleave: handleMouseLeave
      },
      columns.value.map((column, cellIndex) => {
        const { rowspan, colspan } = getSpan(row, column, $index, cellIndex);
        if (!rowspan || !colspan) {
          return null;
        }
        const columnData = Object.assign({}, column);
        columnData.realWidth = getColspanRealWidth(
          columns.value,
          colspan,
          cellIndex
        );
        const data = {
          store,
          _self: props.context || parent,
          column: columnData,
          row,
          $index,
          cellIndex,
          expanded
        };
        if (cellIndex === firstDefaultColumnIndex.value && treeRowData) {
          data.treeNode = {
            indent: treeRowData.level && treeRowData.level * indent.value,
            level: treeRowData.level
          };
          if (isBoolean(treeRowData.expanded)) {
            data.treeNode.expanded = treeRowData.expanded;
            if ("loading" in treeRowData) {
              data.treeNode.loading = treeRowData.loading;
            }
            if ("noLazyChildren" in treeRowData) {
              data.treeNode.noLazyChildren = treeRowData.noLazyChildren;
            }
          }
        }
        const baseKey = `${getKeyOfRow(row, $index)},${cellIndex}`;
        const patchKey = columnData.columnKey || columnData.rawColumnKey || "";
        const mergedTooltipOptions = column.showOverflowTooltip && merge(
          {
            effect: tooltipEffect
          },
          tooltipOptions,
          column.showOverflowTooltip
        );
        return h$1(
          TdWrapper,
          {
            style: getCellStyle($index, cellIndex, row, column),
            class: getCellClass($index, cellIndex, row, column, colspan - 1),
            key: `${patchKey}${baseKey}`,
            rowspan,
            colspan,
            onMouseenter: ($event) => handleCellMouseEnter(
              $event,
              row,
              mergedTooltipOptions
            ),
            onMouseleave: handleCellMouseLeave
          },
          {
            default: () => cellChildren(cellIndex, column, data)
          }
        );
      })
    );
  };
  const cellChildren = (_cellIndex, column, data) => {
    return column.renderCell(data);
  };
  const wrappedRowRender = (row, $index) => {
    const store = props.store;
    const { isRowExpanded, assertRowKey } = store;
    const { treeData, lazyTreeNodeMap, childrenColumnName, rowKey } = store.states;
    const columns = store.states.columns.value;
    const hasExpandColumn = columns.some(({ type }) => type === "expand");
    if (hasExpandColumn) {
      const expanded = isRowExpanded(row);
      const tr = rowRender(row, $index, void 0, expanded);
      const renderExpanded = parent == null ? void 0 : parent.renderExpanded;
      if (!renderExpanded) {
        console.error("[Element Error]renderExpanded is required.");
        return tr;
      }
      const rows = [[tr]];
      if (parent.props.preserveExpandedContent || expanded) {
        rows[0].push(
          h$1(
            "tr",
            {
              key: `expanded-row__${tr.key}`,
              style: { display: expanded ? "" : "none" }
            },
            [
              h$1(
                "td",
                {
                  colspan: columns.length,
                  class: `${ns.e("cell")} ${ns.e("expanded-cell")}`
                },
                [renderExpanded({ row, $index, store, expanded })]
              )
            ]
          )
        );
      }
      return rows;
    } else if (Object.keys(treeData.value).length) {
      assertRowKey();
      const key = getRowIdentity(row, rowKey.value);
      let cur = treeData.value[key];
      let treeRowData = null;
      if (cur) {
        treeRowData = {
          expanded: cur.expanded,
          level: cur.level,
          display: true,
          noLazyChildren: void 0,
          loading: void 0
        };
        if (isBoolean(cur.lazy)) {
          if (treeRowData && isBoolean(cur.loaded) && cur.loaded) {
            treeRowData.noLazyChildren = !(cur.children && cur.children.length);
          }
          treeRowData.loading = cur.loading;
        }
      }
      const tmp = [rowRender(row, $index, treeRowData != null ? treeRowData : void 0)];
      if (cur) {
        let i = 0;
        const traverse = (children, parent2) => {
          if (!(children && children.length && parent2))
            return;
          children.forEach((node) => {
            const innerTreeRowData = {
              display: parent2.display && parent2.expanded,
              level: parent2.level + 1,
              expanded: false,
              noLazyChildren: false,
              loading: false
            };
            const childKey = getRowIdentity(node, rowKey.value);
            if (isPropAbsent(childKey)) {
              throw new Error("For nested data item, row-key is required.");
            }
            cur = { ...treeData.value[childKey] };
            if (cur) {
              innerTreeRowData.expanded = cur.expanded;
              cur.level = cur.level || innerTreeRowData.level;
              cur.display = !!(cur.expanded && innerTreeRowData.display);
              if (isBoolean(cur.lazy)) {
                if (isBoolean(cur.loaded) && cur.loaded) {
                  innerTreeRowData.noLazyChildren = !(cur.children && cur.children.length);
                }
                innerTreeRowData.loading = cur.loading;
              }
            }
            i++;
            tmp.push(rowRender(node, $index + i, innerTreeRowData));
            if (cur) {
              const nodes2 = lazyTreeNodeMap.value[childKey] || node[childrenColumnName.value];
              traverse(nodes2, cur);
            }
          });
        };
        cur.display = true;
        const nodes = lazyTreeNodeMap.value[key] || row[childrenColumnName.value];
        traverse(nodes, cur);
      }
      return tmp;
    } else {
      return rowRender(row, $index, void 0);
    }
  };
  return {
    wrappedRowRender,
    tooltipContent,
    tooltipTrigger
  };
}
const defaultProps$2 = {
  store: {
    required: true,
    type: Object
  },
  stripe: Boolean,
  tooltipEffect: String,
  tooltipOptions: {
    type: Object
  },
  context: {
    default: () => ({}),
    type: Object
  },
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  fixed: {
    type: String,
    default: ""
  },
  highlight: Boolean
};
var TableBody = defineComponent({
  name: "ElTableBody",
  props: defaultProps$2,
  setup(props) {
    var _a;
    const instance = getCurrentInstance();
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const { wrappedRowRender, tooltipContent, tooltipTrigger } = useRender$1(props);
    const { onColumnsChange, onScrollableChange } = useLayoutObserver(parent);
    const hoveredCellList = [];
    watch((_a = props.store) == null ? void 0 : _a.states.hoverRow, (newVal, oldVal) => {
      var _a2, _b;
      const el = instance == null ? void 0 : instance.vnode.el;
      const rows = Array.from((el == null ? void 0 : el.children) || []).filter(
        (e) => e == null ? void 0 : e.classList.contains(`${ns.e("row")}`)
      );
      let rowNum = newVal;
      const childNodes = (_a2 = rows[rowNum]) == null ? void 0 : _a2.childNodes;
      if (childNodes == null ? void 0 : childNodes.length) {
        let control = 0;
        const indexes = Array.from(childNodes).reduce((acc, item, index) => {
          var _a3, _b2;
          if (((_a3 = childNodes[index]) == null ? void 0 : _a3.colSpan) > 1) {
            control = (_b2 = childNodes[index]) == null ? void 0 : _b2.colSpan;
          }
          if (item.nodeName !== "TD" && control === 0) {
            acc.push(index);
          }
          control > 0 && control--;
          return acc;
        }, []);
        indexes.forEach((rowIndex) => {
          var _a3;
          rowNum = newVal;
          while (rowNum > 0) {
            const preChildNodes = (_a3 = rows[rowNum - 1]) == null ? void 0 : _a3.childNodes;
            if (preChildNodes[rowIndex] && preChildNodes[rowIndex].nodeName === "TD" && preChildNodes[rowIndex].rowSpan > 1) {
              addClass(preChildNodes[rowIndex], "hover-cell");
              hoveredCellList.push(preChildNodes[rowIndex]);
              break;
            }
            rowNum--;
          }
        });
      } else {
        hoveredCellList.forEach((item) => removeClass(item, "hover-cell"));
        hoveredCellList.length = 0;
      }
      if (!((_b = props.store) == null ? void 0 : _b.states.isComplex.value) || !isClient)
        return;
      rAF(() => {
        const oldRow = rows[oldVal];
        const newRow = rows[newVal];
        if (oldRow && !oldRow.classList.contains("hover-fixed-row")) {
          removeClass(oldRow, "hover-row");
        }
        if (newRow) {
          addClass(newRow, "hover-row");
        }
      });
    });
    onUnmounted(() => {
      var _a2;
      (_a2 = removePopper) == null ? void 0 : _a2();
    });
    return {
      ns,
      onColumnsChange,
      onScrollableChange,
      wrappedRowRender,
      tooltipContent,
      tooltipTrigger
    };
  },
  render() {
    const { wrappedRowRender, store } = this;
    const data = (store == null ? void 0 : store.states.data.value) || [];
    return h$1("tbody", { tabIndex: -1 }, [
      data.reduce((acc, row) => {
        return acc.concat(wrappedRowRender(row, acc.length));
      }, [])
    ]);
  }
});
function useMapState() {
  const table = inject(TABLE_INJECTION_KEY);
  const store = table == null ? void 0 : table.store;
  const leftFixedLeafCount = computed(() => {
    var _a;
    return (_a = store == null ? void 0 : store.states.fixedLeafColumnsLength.value) != null ? _a : 0;
  });
  const rightFixedLeafCount = computed(() => {
    var _a;
    return (_a = store == null ? void 0 : store.states.rightFixedColumns.value.length) != null ? _a : 0;
  });
  const columnsCount = computed(() => {
    var _a;
    return (_a = store == null ? void 0 : store.states.columns.value.length) != null ? _a : 0;
  });
  const leftFixedCount = computed(() => {
    var _a;
    return (_a = store == null ? void 0 : store.states.fixedColumns.value.length) != null ? _a : 0;
  });
  const rightFixedCount = computed(() => {
    var _a;
    return (_a = store == null ? void 0 : store.states.rightFixedColumns.value.length) != null ? _a : 0;
  });
  return {
    leftFixedLeafCount,
    rightFixedLeafCount,
    columnsCount,
    leftFixedCount,
    rightFixedCount,
    columns: computed(() => {
      var _a;
      return (_a = store == null ? void 0 : store.states.columns.value) != null ? _a : [];
    })
  };
}
function useStyle$1(props) {
  const { columns } = useMapState();
  const ns = useNamespace("table");
  const getCellClasses = (columns2, cellIndex) => {
    const column = columns2[cellIndex];
    const classes = [
      ns.e("cell"),
      column.id,
      column.align,
      column.labelClassName,
      ...getFixedColumnsClass(ns.b(), cellIndex, column.fixed, props.store)
    ];
    if (column.className) {
      classes.push(column.className);
    }
    if (!column.children) {
      classes.push(ns.is("leaf"));
    }
    return classes;
  };
  const getCellStyles = (column, cellIndex) => {
    const fixedStyle = getFixedColumnOffset(
      cellIndex,
      column.fixed,
      props.store
    );
    ensurePosition(fixedStyle, "left");
    ensurePosition(fixedStyle, "right");
    return fixedStyle;
  };
  return {
    getCellClasses,
    getCellStyles,
    columns
  };
}
var TableFooter = defineComponent({
  name: "ElTableFooter",
  props: {
    fixed: {
      type: String,
      default: ""
    },
    store: {
      required: true,
      type: Object
    },
    summaryMethod: Function,
    sumText: String,
    border: Boolean,
    defaultSort: {
      type: Object,
      default: () => {
        return {
          prop: "",
          order: ""
        };
      }
    }
  },
  setup(props) {
    const parent = inject(TABLE_INJECTION_KEY);
    const ns = useNamespace("table");
    const { getCellClasses, getCellStyles, columns } = useStyle$1(
      props
    );
    const { onScrollableChange, onColumnsChange } = useLayoutObserver(parent);
    return {
      ns,
      onScrollableChange,
      onColumnsChange,
      getCellClasses,
      getCellStyles,
      columns
    };
  },
  render() {
    const { columns, getCellStyles, getCellClasses, summaryMethod, sumText } = this;
    const data = this.store.states.data.value;
    let sums = [];
    if (summaryMethod) {
      sums = summaryMethod({
        columns,
        data
      });
    } else {
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = sumText;
          return;
        }
        const values = data.map((item) => Number(item[column.property]));
        const precisions = [];
        let notNumber = true;
        values.forEach((value) => {
          if (!Number.isNaN(+value)) {
            notNumber = false;
            const decimal = `${value}`.split(".")[1];
            precisions.push(decimal ? decimal.length : 0);
          }
        });
        const precision = Math.max.apply(null, precisions);
        if (!notNumber) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!Number.isNaN(+value)) {
              return Number.parseFloat(
                (prev + curr).toFixed(Math.min(precision, 20))
              );
            } else {
              return prev;
            }
          }, 0);
        } else {
          sums[index] = "";
        }
      });
    }
    return h$1(
      h$1("tfoot", [
        h$1("tr", {}, [
          ...columns.map(
            (column, cellIndex) => h$1(
              "td",
              {
                key: cellIndex,
                colspan: column.colSpan,
                rowspan: column.rowSpan,
                class: getCellClasses(columns, cellIndex),
                style: getCellStyles(column, cellIndex)
              },
              [
                h$1(
                  "div",
                  {
                    class: ["cell", column.labelClassName]
                  },
                  [sums[cellIndex]]
                )
              ]
            )
          )
        ])
      ])
    );
  }
});
function useUtils(store) {
  const setCurrentRow = (row) => {
    store.commit("setCurrentRow", row);
  };
  const getSelectionRows = () => {
    return store.getSelectionRows();
  };
  const toggleRowSelection = (row, selected, ignoreSelectable = true) => {
    store.toggleRowSelection(row, selected, false, ignoreSelectable);
    store.updateAllSelected();
  };
  const clearSelection = () => {
    store.clearSelection();
  };
  const clearFilter = (columnKeys) => {
    store.clearFilter(columnKeys);
  };
  const toggleAllSelection = () => {
    store.commit("toggleAllSelection");
  };
  const toggleRowExpansion = (row, expanded) => {
    store.toggleRowExpansionAdapter(row, expanded);
  };
  const clearSort = () => {
    store.clearSort();
  };
  const sort = (prop, order) => {
    store.commit("sort", { prop, order });
  };
  const updateKeyChildren = (key, data) => {
    store.updateKeyChildren(key, data);
  };
  return {
    setCurrentRow,
    getSelectionRows,
    toggleRowSelection,
    clearSelection,
    clearFilter,
    toggleAllSelection,
    toggleRowExpansion,
    clearSort,
    sort,
    updateKeyChildren
  };
}
function useStyle(props, layout, store, table) {
  const isHidden = ref(false);
  const renderExpanded = ref(null);
  const resizeProxyVisible = ref(false);
  const setDragVisible = (visible) => {
    resizeProxyVisible.value = visible;
  };
  const resizeState = ref({
    width: null,
    height: null,
    headerHeight: null
  });
  const isGroup = ref(false);
  const scrollbarViewStyle = {
    display: "inline-block",
    verticalAlign: "middle"
  };
  const tableWidth = ref();
  const tableScrollHeight = ref(0);
  const bodyScrollHeight = ref(0);
  const headerScrollHeight = ref(0);
  const footerScrollHeight = ref(0);
  const appendScrollHeight = ref(0);
  watch(
    () => props.height,
    (value) => {
      layout.setHeight(value != null ? value : null);
    },
    { immediate: true }
  );
  watch(
    () => props.maxHeight,
    (value) => {
      layout.setMaxHeight(value != null ? value : null);
    },
    { immediate: true }
  );
  watch(
    () => [props.currentRowKey, store.states.rowKey],
    ([currentRowKey, rowKey]) => {
      if (!unref(rowKey) || !unref(currentRowKey))
        return;
      store.setCurrentRowKey(`${currentRowKey}`);
    },
    {
      immediate: true
    }
  );
  watch(
    () => props.data,
    (data) => {
      table.store.commit("setData", data);
    },
    {
      immediate: true,
      deep: true
    }
  );
  watchEffect(() => {
    if (props.expandRowKeys) {
      store.setExpandRowKeysAdapter(props.expandRowKeys);
    }
  });
  const handleMouseLeave = () => {
    table.store.commit("setHoverRow", null);
    if (table.hoverState)
      table.hoverState = null;
  };
  const handleHeaderFooterMousewheel = (_event, data) => {
    const { pixelX, pixelY } = data;
    if (Math.abs(pixelX) >= Math.abs(pixelY)) {
      table.refs.bodyWrapper.scrollLeft += data.pixelX / 5;
    }
  };
  const shouldUpdateHeight = computed(() => {
    return props.height || props.maxHeight || store.states.fixedColumns.value.length > 0 || store.states.rightFixedColumns.value.length > 0;
  });
  const tableBodyStyles = computed(() => {
    return {
      width: layout.bodyWidth.value ? `${layout.bodyWidth.value}px` : ""
    };
  });
  const doLayout = () => {
    if (shouldUpdateHeight.value) {
      layout.updateElsHeight();
    }
    layout.updateColumnsWidth();
    if (typeof window === "undefined")
      return;
    requestAnimationFrame(syncPosition);
  };
  onMounted(async () => {
    await nextTick();
    store.updateColumns();
    bindEvents();
    requestAnimationFrame(doLayout);
    const el = table.vnode.el;
    const tableHeader = table.refs.headerWrapper;
    if (props.flexible && el && el.parentElement) {
      el.parentElement.style.minWidth = "0";
    }
    resizeState.value = {
      width: tableWidth.value = el.offsetWidth,
      height: el.offsetHeight,
      headerHeight: props.showHeader && tableHeader ? tableHeader.offsetHeight : null
    };
    store.states.columns.value.forEach((column) => {
      if (column.filteredValue && column.filteredValue.length) {
        table.store.commit("filterChange", {
          column,
          values: column.filteredValue,
          silent: true
        });
      }
    });
    table.$ready = true;
  });
  const setScrollClassByEl = (el, className) => {
    if (!el)
      return;
    const classList = Array.from(el.classList).filter(
      (item) => !item.startsWith("is-scrolling-")
    );
    classList.push(layout.scrollX.value ? className : "is-scrolling-none");
    el.className = classList.join(" ");
  };
  const setScrollClass = (className) => {
    const { tableWrapper } = table.refs;
    setScrollClassByEl(tableWrapper, className);
  };
  const hasScrollClass = (className) => {
    const { tableWrapper } = table.refs;
    return !!(tableWrapper && tableWrapper.classList.contains(className));
  };
  const syncPosition = function() {
    if (!table.refs.scrollBarRef)
      return;
    if (!layout.scrollX.value) {
      const scrollingNoneClass = "is-scrolling-none";
      if (!hasScrollClass(scrollingNoneClass)) {
        setScrollClass(scrollingNoneClass);
      }
      return;
    }
    const scrollContainer = table.refs.scrollBarRef.wrapRef;
    if (!scrollContainer)
      return;
    const { scrollLeft, offsetWidth, scrollWidth } = scrollContainer;
    const { headerWrapper, footerWrapper } = table.refs;
    if (headerWrapper)
      headerWrapper.scrollLeft = scrollLeft;
    if (footerWrapper)
      footerWrapper.scrollLeft = scrollLeft;
    const maxScrollLeftPosition = scrollWidth - offsetWidth - 1;
    if (scrollLeft >= maxScrollLeftPosition) {
      setScrollClass("is-scrolling-right");
    } else if (scrollLeft === 0) {
      setScrollClass("is-scrolling-left");
    } else {
      setScrollClass("is-scrolling-middle");
    }
  };
  const bindEvents = () => {
    if (!table.refs.scrollBarRef)
      return;
    if (table.refs.scrollBarRef.wrapRef) {
      useEventListener(
        table.refs.scrollBarRef.wrapRef,
        "scroll",
        syncPosition,
        {
          passive: true
        }
      );
    }
    if (props.fit) {
      useResizeObserver(table.vnode.el, resizeListener);
    } else {
      useEventListener(window, "resize", resizeListener);
    }
    useResizeObserver(table.refs.tableInnerWrapper, () => {
      var _a, _b;
      resizeListener();
      (_b = (_a = table.refs) == null ? void 0 : _a.scrollBarRef) == null ? void 0 : _b.update();
    });
  };
  const resizeListener = () => {
    var _a, _b, _c, _d;
    const el = table.vnode.el;
    if (!table.$ready || !el)
      return;
    let shouldUpdateLayout = false;
    const {
      width: oldWidth,
      height: oldHeight,
      headerHeight: oldHeaderHeight
    } = resizeState.value;
    const width = tableWidth.value = el.offsetWidth;
    if (oldWidth !== width) {
      shouldUpdateLayout = true;
    }
    const height = el.offsetHeight;
    if ((props.height || shouldUpdateHeight.value) && oldHeight !== height) {
      shouldUpdateLayout = true;
    }
    const tableHeader = props.tableLayout === "fixed" ? table.refs.headerWrapper : (_a = table.refs.tableHeaderRef) == null ? void 0 : _a.$el;
    if (props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) !== oldHeaderHeight) {
      shouldUpdateLayout = true;
    }
    tableScrollHeight.value = ((_b = table.refs.tableWrapper) == null ? void 0 : _b.scrollHeight) || 0;
    headerScrollHeight.value = (tableHeader == null ? void 0 : tableHeader.scrollHeight) || 0;
    footerScrollHeight.value = ((_c = table.refs.footerWrapper) == null ? void 0 : _c.offsetHeight) || 0;
    appendScrollHeight.value = ((_d = table.refs.appendWrapper) == null ? void 0 : _d.offsetHeight) || 0;
    bodyScrollHeight.value = tableScrollHeight.value - headerScrollHeight.value - footerScrollHeight.value - appendScrollHeight.value;
    if (shouldUpdateLayout) {
      resizeState.value = {
        width,
        height,
        headerHeight: props.showHeader && (tableHeader == null ? void 0 : tableHeader.offsetHeight) || 0
      };
      doLayout();
    }
  };
  const tableSize = useFormSize();
  const bodyWidth = computed(() => {
    const { bodyWidth: bodyWidth_, scrollY, gutterWidth } = layout;
    return bodyWidth_.value ? `${bodyWidth_.value - (scrollY.value ? gutterWidth : 0)}px` : "";
  });
  const tableLayout = computed(() => {
    if (props.maxHeight)
      return "fixed";
    return props.tableLayout;
  });
  const emptyBlockStyle = computed(() => {
    if (props.data && props.data.length)
      return;
    let height = "100%";
    if (props.height && bodyScrollHeight.value) {
      height = `${bodyScrollHeight.value}px`;
    }
    const width = tableWidth.value;
    return {
      width: width ? `${width}px` : "",
      height
    };
  });
  const scrollbarStyle = computed(() => {
    if (props.height) {
      return {
        height: "100%"
      };
    }
    if (props.maxHeight) {
      if (!Number.isNaN(Number(props.maxHeight))) {
        return {
          maxHeight: `${+props.maxHeight - headerScrollHeight.value - footerScrollHeight.value}px`
        };
      } else {
        return {
          maxHeight: `calc(${props.maxHeight} - ${headerScrollHeight.value + footerScrollHeight.value}px)`
        };
      }
    }
    return {};
  });
  return {
    isHidden,
    renderExpanded,
    setDragVisible,
    isGroup,
    handleMouseLeave,
    handleHeaderFooterMousewheel,
    tableSize,
    emptyBlockStyle,
    resizeProxyVisible,
    bodyWidth,
    resizeState,
    doLayout,
    tableBodyStyles,
    tableLayout,
    scrollbarViewStyle,
    scrollbarStyle
  };
}
function useKeyRender(table) {
  const observer = ref();
  const initWatchDom = () => {
    const el = table.vnode.el;
    const columnsWrapper = el.querySelector(".hidden-columns");
    const config = { childList: true, subtree: true };
    const updateOrderFns = table.store.states.updateOrderFns;
    observer.value = new MutationObserver(() => {
      updateOrderFns.forEach((fn) => fn());
    });
    observer.value.observe(columnsWrapper, config);
  };
  onMounted(() => {
    initWatchDom();
  });
  onUnmounted(() => {
    var _a;
    (_a = observer.value) == null ? void 0 : _a.disconnect();
  });
}
var defaultProps$1 = {
  data: {
    type: Array,
    default: () => []
  },
  size: useSizeProp,
  width: [String, Number],
  height: [String, Number],
  maxHeight: [String, Number],
  fit: {
    type: Boolean,
    default: true
  },
  stripe: Boolean,
  border: Boolean,
  rowKey: [String, Function],
  showHeader: {
    type: Boolean,
    default: true
  },
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  emptyText: String,
  expandRowKeys: Array,
  defaultExpandAll: Boolean,
  defaultSort: Object,
  tooltipEffect: String,
  tooltipOptions: Object,
  spanMethod: Function,
  selectOnIndeterminate: {
    type: Boolean,
    default: true
  },
  indent: {
    type: Number,
    default: 16
  },
  treeProps: {
    type: Object,
    default: () => {
      return {
        hasChildren: "hasChildren",
        children: "children",
        checkStrictly: false
      };
    }
  },
  lazy: Boolean,
  load: Function,
  style: {
    type: [String, Object, Array],
    default: () => ({})
  },
  className: {
    type: String,
    default: ""
  },
  tableLayout: {
    type: String,
    default: "fixed"
  },
  scrollbarAlwaysOn: Boolean,
  flexible: Boolean,
  showOverflowTooltip: [Boolean, Object],
  tooltipFormatter: Function,
  appendFilterPanelTo: String,
  scrollbarTabindex: {
    type: [Number, String],
    default: void 0
  },
  allowDragLastColumn: {
    type: Boolean,
    default: true
  },
  preserveExpandedContent: Boolean,
  nativeScrollbar: Boolean
};
function hColgroup(props) {
  const isAuto = props.tableLayout === "auto";
  let columns = props.columns || [];
  if (isAuto) {
    if (columns.every(({ width }) => isUndefined(width))) {
      columns = [];
    }
  }
  const getPropsData = (column) => {
    const propsData = {
      key: `${props.tableLayout}_${column.id}`,
      style: {},
      name: void 0
    };
    if (isAuto) {
      propsData.style = {
        width: `${column.width}px`
      };
    } else {
      propsData.name = column.id;
    }
    return propsData;
  };
  return h$1(
    "colgroup",
    {},
    columns.map((column) => h$1("col", getPropsData(column)))
  );
}
hColgroup.props = ["columns", "tableLayout"];
const useScrollbar = () => {
  const scrollBarRef = ref();
  const scrollTo = (options, yCoord) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar) {
      scrollbar.scrollTo(options, yCoord);
    }
  };
  const setScrollPosition = (position, offset) => {
    const scrollbar = scrollBarRef.value;
    if (scrollbar && isNumber(offset) && ["Top", "Left"].includes(position)) {
      scrollbar[`setScroll${position}`](offset);
    }
  };
  const setScrollTop = (top) => setScrollPosition("Top", top);
  const setScrollLeft = (left) => setScrollPosition("Left", left);
  return {
    scrollBarRef,
    scrollTo,
    setScrollTop,
    setScrollLeft
  };
};
var v = false, o, f, s, u, d, N, l, p, m, w, D, x, E, M, F;
function a() {
  if (!v) {
    v = true;
    var e = navigator.userAgent, n = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(e), i = /(Mac OS X)|(Windows)|(Linux)/.exec(e);
    if (x = /\b(iPhone|iP[ao]d)/.exec(e), E = /\b(iP[ao]d)/.exec(e), w = /Android/i.exec(e), M = /FBAN\/\w+;/i.exec(e), F = /Mobile/i.exec(e), D = !!/Win64/.exec(e), n) {
      o = n[1] ? parseFloat(n[1]) : n[5] ? parseFloat(n[5]) : NaN, o && document && document.documentMode && (o = document.documentMode);
      var r = /(?:Trident\/(\d+.\d+))/.exec(e);
      N = r ? parseFloat(r[1]) + 4 : o, f = n[2] ? parseFloat(n[2]) : NaN, s = n[3] ? parseFloat(n[3]) : NaN, u = n[4] ? parseFloat(n[4]) : NaN, u ? (n = /(?:Chrome\/(\d+\.\d+))/.exec(e), d = n && n[1] ? parseFloat(n[1]) : NaN) : d = NaN;
    } else o = f = s = d = u = NaN;
    if (i) {
      if (i[1]) {
        var t = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(e);
        l = t ? parseFloat(t[1].replace("_", ".")) : true;
      } else l = false;
      p = !!i[2], m = !!i[3];
    } else l = p = m = false;
  }
}
var _ = { ie: function() {
  return a() || o;
}, ieCompatibilityMode: function() {
  return a() || N > o;
}, ie64: function() {
  return _.ie() && D;
}, firefox: function() {
  return a() || f;
}, opera: function() {
  return a() || s;
}, webkit: function() {
  return a() || u;
}, safari: function() {
  return _.webkit();
}, chrome: function() {
  return a() || d;
}, windows: function() {
  return a() || p;
}, osx: function() {
  return a() || l;
}, linux: function() {
  return a() || m;
}, iphone: function() {
  return a() || x;
}, mobile: function() {
  return a() || x || E || w || F;
}, nativeApp: function() {
  return a() || M;
}, android: function() {
  return a() || w;
}, ipad: function() {
  return a() || E;
} }, A = _;
var c = !!(typeof window < "u" && window.document && window.document.createElement), U = { canUseDOM: c }, h = U;
var X;
h.canUseDOM && (X = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== true);
function S(e, n) {
  if (!h.canUseDOM || n && !("addEventListener" in document)) return false;
  var i = "on" + e, r = i in document;
  if (!r) {
    var t = document.createElement("div");
    t.setAttribute(i, "return;"), r = typeof t[i] == "function";
  }
  return !r && X && e === "wheel" && (r = document.implementation.hasFeature("Events.wheel", "3.0")), r;
}
var b = S;
var O = 10, I = 40, P = 800;
function T(e) {
  var n = 0, i = 0, r = 0, t = 0;
  return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (n = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (n = i, i = 0), r = n * O, t = i * O, "deltaY" in e && (t = e.deltaY), "deltaX" in e && (r = e.deltaX), (r || t) && e.deltaMode && (e.deltaMode == 1 ? (r *= I, t *= I) : (r *= P, t *= P)), r && !n && (n = r < 1 ? -1 : 1), t && !i && (i = t < 1 ? -1 : 1), { spinX: n, spinY: i, pixelX: r, pixelY: t };
}
T.getEventType = function() {
  return A.firefox() ? "DOMMouseScroll" : b("wheel") ? "wheel" : "mousewheel";
};
var Y = T;
/**
* Checks if an event is supported in the current execution environment.
*
* NOTE: This will not work correctly for non-generic events such as `change`,
* `reset`, `load`, `error`, and `select`.
*
* Borrows from Modernizr.
*
* @param {string} eventNameSuffix Event name, e.g. "click".
* @param {?boolean} capture Check if the capture phase is supported.
* @return {boolean} True if the event is supported.
* @internal
* @license Modernizr 3.0.0pre (Custom Build) | MIT
*/
const SCOPE = "_Mousewheel";
const mousewheel = function(element, callback) {
  if (element && element.addEventListener) {
    removeWheelHandler(element);
    const fn = function(event) {
      const normalized = Y(event);
      callback && Reflect.apply(callback, this, [event, normalized]);
    };
    element[SCOPE] = { wheelHandler: fn };
    element.addEventListener("wheel", fn, { passive: true });
  }
};
const removeWheelHandler = (element) => {
  var _a;
  if ((_a = element[SCOPE]) == null ? void 0 : _a.wheelHandler) {
    element.removeEventListener("wheel", element[SCOPE].wheelHandler);
    element[SCOPE] = null;
  }
};
const Mousewheel = {
  beforeMount(el, binding) {
    mousewheel(el, binding.value);
  },
  unmounted(el) {
    removeWheelHandler(el);
  },
  updated(el, binding) {
    if (binding.value !== binding.oldValue) {
      mousewheel(el, binding.value);
    }
  }
};
let tableIdSeed = 1;
const _sfc_main$1 = defineComponent({
  name: "ElTable",
  directives: {
    Mousewheel
  },
  components: {
    TableHeader,
    TableBody,
    TableFooter,
    ElScrollbar,
    hColgroup
  },
  props: defaultProps$1,
  emits: [
    "select",
    "select-all",
    "selection-change",
    "cell-mouse-enter",
    "cell-mouse-leave",
    "cell-contextmenu",
    "cell-click",
    "cell-dblclick",
    "row-click",
    "row-contextmenu",
    "row-dblclick",
    "header-click",
    "header-contextmenu",
    "sort-change",
    "filter-change",
    "current-change",
    "header-dragend",
    "expand-change",
    "scroll"
  ],
  setup(props) {
    const { t } = useLocale();
    const ns = useNamespace("table");
    const table = getCurrentInstance();
    provide(TABLE_INJECTION_KEY, table);
    const store = createStore(table, props);
    table.store = store;
    const layout = new TableLayout({
      store: table.store,
      table,
      fit: props.fit,
      showHeader: props.showHeader
    });
    table.layout = layout;
    const isEmpty = computed(() => (store.states.data.value || []).length === 0);
    const {
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      sort,
      updateKeyChildren
    } = useUtils(store);
    const {
      isHidden,
      renderExpanded,
      setDragVisible,
      isGroup,
      handleMouseLeave,
      handleHeaderFooterMousewheel,
      tableSize,
      emptyBlockStyle,
      resizeProxyVisible,
      bodyWidth,
      resizeState,
      doLayout,
      tableBodyStyles,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle
    } = useStyle(props, layout, store, table);
    const { scrollBarRef, scrollTo, setScrollLeft, setScrollTop } = useScrollbar();
    const debouncedUpdateLayout = debounce(doLayout, 50);
    const tableId = `${ns.namespace.value}-table_${tableIdSeed++}`;
    table.tableId = tableId;
    table.state = {
      isGroup,
      resizeState,
      doLayout,
      debouncedUpdateLayout
    };
    const computedSumText = computed(
      () => {
        var _a;
        return (_a = props.sumText) != null ? _a : t("el.table.sumText");
      }
    );
    const computedEmptyText = computed(() => {
      var _a;
      return (_a = props.emptyText) != null ? _a : t("el.table.emptyText");
    });
    const columns = computed(() => {
      return convertToRows(store.states.originColumns.value)[0];
    });
    useKeyRender(table);
    onBeforeUnmount(() => {
      debouncedUpdateLayout.cancel();
    });
    return {
      ns,
      layout,
      store,
      columns,
      handleHeaderFooterMousewheel,
      handleMouseLeave,
      tableId,
      tableSize,
      isHidden,
      isEmpty,
      renderExpanded,
      resizeProxyVisible,
      resizeState,
      isGroup,
      bodyWidth,
      tableBodyStyles,
      emptyBlockStyle,
      debouncedUpdateLayout,
      setCurrentRow,
      getSelectionRows,
      toggleRowSelection,
      clearSelection,
      clearFilter,
      toggleAllSelection,
      toggleRowExpansion,
      clearSort,
      doLayout,
      sort,
      updateKeyChildren,
      t,
      setDragVisible,
      context: table,
      computedSumText,
      computedEmptyText,
      tableLayout,
      scrollbarViewStyle,
      scrollbarStyle,
      scrollBarRef,
      scrollTo,
      setScrollLeft,
      setScrollTop,
      allowDragLastColumn: props.allowDragLastColumn
    };
  }
});
const _hoisted_1 = ["data-prefix"];
const _hoisted_2 = {
  ref: "hiddenColumns",
  class: "hidden-columns"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hColgroup = resolveComponent("hColgroup");
  const _component_table_header = resolveComponent("table-header");
  const _component_table_body = resolveComponent("table-body");
  const _component_table_footer = resolveComponent("table-footer");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _directive_mousewheel = resolveDirective("mousewheel");
  return openBlock(), createElementBlock("div", {
    ref: "tableWrapper",
    class: normalizeClass([
      {
        [_ctx.ns.m("fit")]: _ctx.fit,
        [_ctx.ns.m("striped")]: _ctx.stripe,
        [_ctx.ns.m("border")]: _ctx.border || _ctx.isGroup,
        [_ctx.ns.m("hidden")]: _ctx.isHidden,
        [_ctx.ns.m("group")]: _ctx.isGroup,
        [_ctx.ns.m("fluid-height")]: _ctx.maxHeight,
        [_ctx.ns.m("scrollable-x")]: _ctx.layout.scrollX.value,
        [_ctx.ns.m("scrollable-y")]: _ctx.layout.scrollY.value,
        [_ctx.ns.m("enable-row-hover")]: !_ctx.store.states.isComplex.value,
        [_ctx.ns.m("enable-row-transition")]: (_ctx.store.states.data.value || []).length !== 0 && (_ctx.store.states.data.value || []).length < 100,
        "has-footer": _ctx.showSummary
      },
      _ctx.ns.m(_ctx.tableSize),
      _ctx.className,
      _ctx.ns.b(),
      _ctx.ns.m(`layout-${_ctx.tableLayout}`)
    ]),
    style: normalizeStyle(_ctx.style),
    "data-prefix": _ctx.ns.namespace.value,
    onMouseleave: _cache[1] || (_cache[1] = (...args) => _ctx.handleMouseLeave && _ctx.handleMouseLeave(...args))
  }, [
    createBaseVNode(
      "div",
      {
        ref: "tableInnerWrapper",
        class: normalizeClass(_ctx.ns.e("inner-wrapper"))
      },
      [
        createBaseVNode(
          "div",
          _hoisted_2,
          [
            renderSlot(_ctx.$slots, "default")
          ],
          512
        ),
        _ctx.showHeader && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock(
          "div",
          {
            key: 0,
            ref: "headerWrapper",
            class: normalizeClass(_ctx.ns.e("header-wrapper"))
          },
          [
            createBaseVNode(
              "table",
              {
                ref: "tableHeader",
                class: normalizeClass(_ctx.ns.e("header")),
                style: normalizeStyle(_ctx.tableBodyStyles),
                border: "0",
                cellpadding: "0",
                cellspacing: "0"
              },
              [
                createVNode(_component_hColgroup, {
                  columns: _ctx.store.states.columns.value,
                  "table-layout": _ctx.tableLayout
                }, null, 8, ["columns", "table-layout"]),
                createVNode(_component_table_header, {
                  ref: "tableHeaderRef",
                  border: _ctx.border,
                  "default-sort": _ctx.defaultSort,
                  store: _ctx.store,
                  "append-filter-panel-to": _ctx.appendFilterPanelTo,
                  "allow-drag-last-column": _ctx.allowDragLastColumn,
                  onSetDragVisible: _ctx.setDragVisible
                }, null, 8, ["border", "default-sort", "store", "append-filter-panel-to", "allow-drag-last-column", "onSetDragVisible"])
              ],
              6
            )
          ],
          2
        )), [
          [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
        ]) : createCommentVNode("v-if", true),
        createBaseVNode(
          "div",
          {
            ref: "bodyWrapper",
            class: normalizeClass(_ctx.ns.e("body-wrapper"))
          },
          [
            createVNode(_component_el_scrollbar, {
              ref: "scrollBarRef",
              "view-style": _ctx.scrollbarViewStyle,
              "wrap-style": _ctx.scrollbarStyle,
              always: _ctx.scrollbarAlwaysOn,
              tabindex: _ctx.scrollbarTabindex,
              native: _ctx.nativeScrollbar,
              onScroll: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("scroll", $event))
            }, {
              default: withCtx(() => [
                createBaseVNode(
                  "table",
                  {
                    ref: "tableBody",
                    class: normalizeClass(_ctx.ns.e("body")),
                    cellspacing: "0",
                    cellpadding: "0",
                    border: "0",
                    style: normalizeStyle({
                      width: _ctx.bodyWidth,
                      tableLayout: _ctx.tableLayout
                    })
                  },
                  [
                    createVNode(_component_hColgroup, {
                      columns: _ctx.store.states.columns.value,
                      "table-layout": _ctx.tableLayout
                    }, null, 8, ["columns", "table-layout"]),
                    _ctx.showHeader && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_header, {
                      key: 0,
                      ref: "tableHeaderRef",
                      class: normalizeClass(_ctx.ns.e("body-header")),
                      border: _ctx.border,
                      "default-sort": _ctx.defaultSort,
                      store: _ctx.store,
                      "append-filter-panel-to": _ctx.appendFilterPanelTo,
                      onSetDragVisible: _ctx.setDragVisible
                    }, null, 8, ["class", "border", "default-sort", "store", "append-filter-panel-to", "onSetDragVisible"])) : createCommentVNode("v-if", true),
                    createVNode(_component_table_body, {
                      context: _ctx.context,
                      highlight: _ctx.highlightCurrentRow,
                      "row-class-name": _ctx.rowClassName,
                      "tooltip-effect": _ctx.tooltipEffect,
                      "tooltip-options": _ctx.tooltipOptions,
                      "row-style": _ctx.rowStyle,
                      store: _ctx.store,
                      stripe: _ctx.stripe
                    }, null, 8, ["context", "highlight", "row-class-name", "tooltip-effect", "tooltip-options", "row-style", "store", "stripe"]),
                    _ctx.showSummary && _ctx.tableLayout === "auto" ? (openBlock(), createBlock(_component_table_footer, {
                      key: 1,
                      class: normalizeClass(_ctx.ns.e("body-footer")),
                      border: _ctx.border,
                      "default-sort": _ctx.defaultSort,
                      store: _ctx.store,
                      "sum-text": _ctx.computedSumText,
                      "summary-method": _ctx.summaryMethod
                    }, null, 8, ["class", "border", "default-sort", "store", "sum-text", "summary-method"])) : createCommentVNode("v-if", true)
                  ],
                  6
                ),
                _ctx.isEmpty ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    ref: "emptyBlock",
                    style: normalizeStyle(_ctx.emptyBlockStyle),
                    class: normalizeClass(_ctx.ns.e("empty-block"))
                  },
                  [
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass(_ctx.ns.e("empty-text"))
                      },
                      [
                        renderSlot(_ctx.$slots, "empty", {}, () => [
                          createTextVNode(
                            toDisplayString(_ctx.computedEmptyText),
                            1
                          )
                        ])
                      ],
                      2
                    )
                  ],
                  6
                )) : createCommentVNode("v-if", true),
                _ctx.$slots.append ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 1,
                    ref: "appendWrapper",
                    class: normalizeClass(_ctx.ns.e("append-wrapper"))
                  },
                  [
                    renderSlot(_ctx.$slots, "append")
                  ],
                  2
                )) : createCommentVNode("v-if", true)
              ]),
              _: 3
            }, 8, ["view-style", "wrap-style", "always", "tabindex", "native"])
          ],
          2
        ),
        _ctx.showSummary && _ctx.tableLayout === "fixed" ? withDirectives((openBlock(), createElementBlock(
          "div",
          {
            key: 1,
            ref: "footerWrapper",
            class: normalizeClass(_ctx.ns.e("footer-wrapper"))
          },
          [
            createBaseVNode(
              "table",
              {
                class: normalizeClass(_ctx.ns.e("footer")),
                cellspacing: "0",
                cellpadding: "0",
                border: "0",
                style: normalizeStyle(_ctx.tableBodyStyles)
              },
              [
                createVNode(_component_hColgroup, {
                  columns: _ctx.store.states.columns.value,
                  "table-layout": _ctx.tableLayout
                }, null, 8, ["columns", "table-layout"]),
                createVNode(_component_table_footer, {
                  border: _ctx.border,
                  "default-sort": _ctx.defaultSort,
                  store: _ctx.store,
                  "sum-text": _ctx.computedSumText,
                  "summary-method": _ctx.summaryMethod
                }, null, 8, ["border", "default-sort", "store", "sum-text", "summary-method"])
              ],
              6
            )
          ],
          2
        )), [
          [vShow, !_ctx.isEmpty],
          [_directive_mousewheel, _ctx.handleHeaderFooterMousewheel]
        ]) : createCommentVNode("v-if", true),
        _ctx.border || _ctx.isGroup ? (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(_ctx.ns.e("border-left-patch"))
          },
          null,
          2
        )) : createCommentVNode("v-if", true)
      ],
      2
    ),
    withDirectives(createBaseVNode(
      "div",
      {
        ref: "resizeProxy",
        class: normalizeClass(_ctx.ns.e("column-resize-proxy"))
      },
      null,
      2
    ), [
      [vShow, _ctx.resizeProxyVisible]
    ])
  ], 46, _hoisted_1);
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/table/src/table.vue"]]);
const defaultClassNames = {
  selection: "table-column--selection",
  expand: "table__expand-column"
};
const cellStarts = {
  default: {
    order: ""
  },
  selection: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  expand: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  },
  index: {
    width: 48,
    minWidth: 48,
    realWidth: 48,
    order: ""
  }
};
const getDefaultClassName = (type) => {
  return defaultClassNames[type] || "";
};
const cellForced = {
  selection: {
    renderHeader({ store }) {
      var _a;
      function isDisabled() {
        return store.states.data.value && store.states.data.value.length === 0;
      }
      return h$1(ElCheckbox, {
        disabled: isDisabled(),
        size: store.states.tableSize.value,
        indeterminate: store.states.selection.value.length > 0 && !store.states.isAllSelected.value,
        "onUpdate:modelValue": (_a = store.toggleAllSelection) != null ? _a : void 0,
        modelValue: store.states.isAllSelected.value,
        ariaLabel: store.t("el.table.selectAllLabel")
      });
    },
    renderCell({
      row,
      column,
      store,
      $index
    }) {
      return h$1(ElCheckbox, {
        disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
        size: store.states.tableSize.value,
        onChange: () => {
          store.commit("rowSelectedChanged", row);
        },
        onClick: (event) => event.stopPropagation(),
        modelValue: store.isSelected(row),
        ariaLabel: store.t("el.table.selectRowLabel")
      });
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader({
      column
    }) {
      return column.label || "#";
    },
    renderCell({
      column,
      $index
    }) {
      let i = $index + 1;
      const index = column.index;
      if (isNumber(index)) {
        i = $index + index;
      } else if (isFunction$1(index)) {
        i = index($index);
      }
      return h$1("div", {}, [i]);
    },
    sortable: false
  },
  expand: {
    renderHeader({
      column
    }) {
      return column.label || "";
    },
    renderCell({
      column,
      row,
      store,
      expanded
    }) {
      const { ns } = store;
      const classes = [ns.e("expand-icon")];
      if (!column.renderExpand && expanded) {
        classes.push(ns.em("expand-icon", "expanded"));
      }
      const callback = function(e) {
        e.stopPropagation();
        store.toggleRowExpansion(row);
      };
      return h$1(
        "button",
        {
          type: "button",
          "aria-label": store.t(
            expanded ? "el.table.collapseRowLabel" : "el.table.expandRowLabel"
          ),
          "aria-expanded": expanded,
          class: classes,
          onClick: callback
        },
        {
          default: () => {
            if (column.renderExpand) {
              return [
                column.renderExpand({
                  expanded
                })
              ];
            }
            return [
              h$1(ElIcon, null, {
                default: () => {
                  return [h$1(arrow_right_default)];
                }
              })
            ];
          }
        }
      );
    },
    sortable: false,
    resizable: false
  }
};
function defaultRenderCell({
  row,
  column,
  $index
}) {
  var _a;
  const property = column.property;
  const value = property && getProp(row, property).value;
  if (column && column.formatter) {
    return column.formatter(row, column, value, $index);
  }
  return ((_a = value == null ? void 0 : value.toString) == null ? void 0 : _a.call(value)) || "";
}
function treeCellPrefix({
  row,
  treeNode,
  store
}, createPlaceholder = false) {
  const { ns } = store;
  if (!treeNode) {
    if (createPlaceholder) {
      return [
        h$1("span", {
          class: ns.e("placeholder")
        })
      ];
    }
    return null;
  }
  const ele = [];
  const callback = function(e) {
    e.stopPropagation();
    if (treeNode.loading) {
      return;
    }
    store.loadOrToggle(row);
  };
  if (treeNode.indent) {
    ele.push(
      h$1("span", {
        class: ns.e("indent"),
        style: { "padding-left": `${treeNode.indent}px` }
      })
    );
  }
  if (isBoolean(treeNode.expanded) && !treeNode.noLazyChildren) {
    const expandClasses = [
      ns.e("expand-icon"),
      treeNode.expanded ? ns.em("expand-icon", "expanded") : ""
    ];
    let icon = arrow_right_default;
    if (treeNode.loading) {
      icon = loading_default;
    }
    ele.push(
      h$1(
        "button",
        {
          type: "button",
          "aria-label": store.t(
            treeNode.expanded ? "el.table.collapseRowLabel" : "el.table.expandRowLabel"
          ),
          "aria-expanded": treeNode.expanded,
          class: expandClasses,
          onClick: callback
        },
        {
          default: () => {
            return [
              h$1(
                ElIcon,
                { class: ns.is("loading", treeNode.loading) },
                {
                  default: () => [h$1(icon)]
                }
              )
            ];
          }
        }
      )
    );
  } else {
    ele.push(
      h$1("span", {
        class: ns.e("placeholder")
      })
    );
  }
  return ele;
}
function getAllAliases(props, aliases) {
  return props.reduce((prev, cur) => {
    prev[cur] = cur;
    return prev;
  }, aliases);
}
function useWatcher(owner, props_) {
  const instance = getCurrentInstance();
  const registerComplexWatchers = () => {
    const props = ["fixed"];
    const aliases = {
      realWidth: "width",
      realMinWidth: "minWidth"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(
          () => props_[columnKey],
          (newVal) => {
            let value = newVal;
            if (columnKey === "width" && key === "realWidth") {
              value = parseWidth(newVal);
            }
            if (columnKey === "minWidth" && key === "realMinWidth") {
              value = parseMinWidth(newVal);
            }
            instance.columnConfig.value[columnKey] = value;
            instance.columnConfig.value[key] = value;
            const updateColumns = columnKey === "fixed";
            owner.value.store.scheduleLayout(updateColumns);
          }
        );
      }
    });
  };
  const registerNormalWatchers = () => {
    const props = [
      "label",
      "filters",
      "filterMultiple",
      "filteredValue",
      "sortable",
      "index",
      "formatter",
      "className",
      "labelClassName",
      "filterClassName",
      "showOverflowTooltip",
      "tooltipFormatter",
      "resizable"
    ];
    const parentProps = ["showOverflowTooltip"];
    const aliases = {
      property: "prop",
      align: "realAlign",
      headerAlign: "realHeaderAlign"
    };
    const allAliases = getAllAliases(props, aliases);
    Object.keys(allAliases).forEach((key) => {
      const columnKey = aliases[key];
      if (hasOwn(props_, columnKey)) {
        watch(
          () => props_[columnKey],
          (newVal) => {
            instance.columnConfig.value[key] = newVal;
            if (key === "filters" || key === "filterMethod") {
              instance.columnConfig.value["filterable"] = !!(instance.columnConfig.value["filters"] || instance.columnConfig.value["filterMethod"]);
            }
          }
        );
      }
    });
    parentProps.forEach((key) => {
      if (hasOwn(owner.value.props, key)) {
        watch(
          () => owner.value.props[key],
          (newVal) => {
            instance.columnConfig.value[key] = newVal;
          }
        );
      }
    });
  };
  return {
    registerComplexWatchers,
    registerNormalWatchers
  };
}
function useRender(props, slots, owner) {
  const instance = getCurrentInstance();
  const columnId = ref("");
  const isSubColumn = ref(false);
  const realAlign = ref();
  const realHeaderAlign = ref();
  const ns = useNamespace("table");
  watchEffect(() => {
    realAlign.value = props.align ? `is-${props.align}` : null;
    realAlign.value;
  });
  watchEffect(() => {
    realHeaderAlign.value = props.headerAlign ? `is-${props.headerAlign}` : realAlign.value;
    realHeaderAlign.value;
  });
  const columnOrTableParent = computed(() => {
    let parent = instance.vnode.vParent || instance.parent;
    while (parent && !parent.tableId && !parent.columnId) {
      parent = parent.vnode.vParent || parent.parent;
    }
    return parent;
  });
  const hasTreeColumn = computed(() => {
    const { store } = instance.parent;
    if (!store)
      return false;
    const { treeData } = store.states;
    const treeDataValue = treeData.value;
    return treeDataValue && Object.keys(treeDataValue).length > 0;
  });
  const realWidth = ref(parseWidth(props.width));
  const realMinWidth = ref(parseMinWidth(props.minWidth));
  const setColumnWidth = (column) => {
    if (realWidth.value)
      column.width = realWidth.value;
    if (realMinWidth.value) {
      column.minWidth = realMinWidth.value;
    }
    if (!realWidth.value && realMinWidth.value) {
      column.width = void 0;
    }
    if (!column.minWidth) {
      column.minWidth = 80;
    }
    column.realWidth = Number(
      isUndefined(column.width) ? column.minWidth : column.width
    );
    return column;
  };
  const setColumnForcedProps = (column) => {
    const type = column.type;
    const source = cellForced[type] || {};
    Object.keys(source).forEach((prop) => {
      const value = source[prop];
      if (prop !== "className" && !isUndefined(value)) {
        column[prop] = value;
      }
    });
    const className = getDefaultClassName(type);
    if (className) {
      const forceClass = `${unref(ns.namespace)}-${className}`;
      column.className = column.className ? `${column.className} ${forceClass}` : forceClass;
    }
    return column;
  };
  const checkSubColumn = (children) => {
    if (isArray$1(children)) {
      children.forEach((child) => check(child));
    } else {
      check(children);
    }
    function check(item) {
      var _a;
      if (((_a = item == null ? void 0 : item.type) == null ? void 0 : _a.name) === "ElTableColumn") {
        item.vParent = instance;
      }
    }
  };
  const setColumnRenders = (column) => {
    if (props.renderHeader) ;
    else if (column.type !== "selection") {
      column.renderHeader = (scope) => {
        instance.columnConfig.value["label"];
        if (slots.header) {
          const slotResult = slots.header(scope);
          if (ensureValidVNode(slotResult)) {
            return h$1(Fragment, slotResult);
          }
        }
        return createTextVNode(column.label);
      };
    }
    if (slots["filter-icon"]) {
      column.renderFilterIcon = (scope) => {
        return renderSlot(slots, "filter-icon", scope);
      };
    }
    if (slots.expand) {
      column.renderExpand = (scope) => {
        return renderSlot(slots, "expand", scope);
      };
    }
    let originRenderCell = column.renderCell;
    if (column.type === "expand") {
      column.renderCell = (data) => h$1(
        "div",
        {
          class: "cell"
        },
        [originRenderCell(data)]
      );
      owner.value.renderExpanded = (row) => {
        return slots.default ? slots.default(row) : slots.default;
      };
    } else {
      originRenderCell = originRenderCell || defaultRenderCell;
      column.renderCell = (data) => {
        let children = null;
        if (slots.default) {
          const vnodes = slots.default(data);
          children = vnodes.some((v2) => v2.type !== Comment) ? vnodes : originRenderCell(data);
        } else {
          children = originRenderCell(data);
        }
        const { columns } = owner.value.store.states;
        const firstUserColumnIndex = columns.value.findIndex(
          (item) => item.type === "default"
        );
        const shouldCreatePlaceholder = hasTreeColumn.value && data.cellIndex === firstUserColumnIndex;
        const prefix = treeCellPrefix(data, shouldCreatePlaceholder);
        const props2 = {
          class: "cell",
          style: {}
        };
        if (column.showOverflowTooltip) {
          props2.class = `${props2.class} ${unref(ns.namespace)}-tooltip`;
          props2.style = {
            width: `${(data.column.realWidth || Number(data.column.width)) - 1}px`
          };
        }
        checkSubColumn(children);
        return h$1("div", props2, [prefix, children]);
      };
    }
    return column;
  };
  const getPropsData = (...propsKey) => {
    return propsKey.reduce(
      (prev, cur) => {
        if (isArray$1(cur)) {
          cur.forEach((key) => {
            prev[key] = props[key];
          });
        }
        return prev;
      },
      {}
    );
  };
  const getColumnElIndex = (children, child) => {
    return Array.prototype.indexOf.call(children, child);
  };
  const updateColumnOrder = () => {
    owner.value.store.commit("updateColumnOrder", instance.columnConfig.value);
  };
  return {
    columnId,
    realAlign,
    isSubColumn,
    realHeaderAlign,
    columnOrTableParent,
    setColumnWidth,
    setColumnForcedProps,
    setColumnRenders,
    getPropsData,
    getColumnElIndex,
    updateColumnOrder
  };
}
var defaultProps = {
  type: {
    type: String,
    default: "default"
  },
  label: String,
  className: String,
  labelClassName: String,
  property: String,
  prop: String,
  width: {
    type: [String, Number],
    default: ""
  },
  minWidth: {
    type: [String, Number],
    default: ""
  },
  renderHeader: Function,
  sortable: {
    type: [Boolean, String],
    default: false
  },
  sortMethod: Function,
  sortBy: [String, Function, Array],
  resizable: {
    type: Boolean,
    default: true
  },
  columnKey: String,
  align: String,
  headerAlign: String,
  showOverflowTooltip: {
    type: [Boolean, Object],
    default: void 0
  },
  tooltipFormatter: Function,
  fixed: [Boolean, String],
  formatter: Function,
  selectable: Function,
  reserveSelection: Boolean,
  filterMethod: Function,
  filteredValue: Array,
  filters: Array,
  filterPlacement: String,
  filterMultiple: {
    type: Boolean,
    default: true
  },
  filterClassName: String,
  index: [Number, Function],
  sortOrders: {
    type: Array,
    default: () => {
      return ["ascending", "descending", null];
    },
    validator: (val) => {
      return val.every(
        (order) => ["ascending", "descending", null].includes(order)
      );
    }
  }
};
let columnIdSeed = 1;
var ElTableColumn$1 = defineComponent({
  name: "ElTableColumn",
  components: {
    ElCheckbox
  },
  props: defaultProps,
  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const columnConfig = ref({});
    const owner = computed(() => {
      let parent2 = instance.parent;
      while (parent2 && !parent2.tableId) {
        parent2 = parent2.parent;
      }
      return parent2;
    });
    const { registerNormalWatchers, registerComplexWatchers } = useWatcher(
      owner,
      props
    );
    const {
      columnId,
      isSubColumn,
      realHeaderAlign,
      columnOrTableParent,
      setColumnWidth,
      setColumnForcedProps,
      setColumnRenders,
      getPropsData,
      getColumnElIndex,
      realAlign,
      updateColumnOrder
    } = useRender(props, slots, owner);
    const parent = columnOrTableParent.value;
    columnId.value = `${"tableId" in parent && parent.tableId || "columnId" in parent && parent.columnId}_column_${columnIdSeed++}`;
    onBeforeMount(() => {
      isSubColumn.value = owner.value !== parent;
      const type = props.type || "default";
      const sortable = props.sortable === "" ? true : props.sortable;
      const showOverflowTooltip = type === "selection" ? false : isUndefined(props.showOverflowTooltip) ? parent.props.showOverflowTooltip : props.showOverflowTooltip;
      const tooltipFormatter = isUndefined(props.tooltipFormatter) ? parent.props.tooltipFormatter : props.tooltipFormatter;
      const defaults = {
        ...cellStarts[type],
        id: columnId.value,
        type,
        property: props.prop || props.property,
        align: realAlign,
        headerAlign: realHeaderAlign,
        showOverflowTooltip,
        tooltipFormatter,
        filterable: props.filters || props.filterMethod,
        filteredValue: [],
        filterPlacement: "",
        filterClassName: "",
        isColumnGroup: false,
        isSubColumn: false,
        filterOpened: false,
        sortable,
        index: props.index,
        rawColumnKey: instance.vnode.key
      };
      const basicProps = [
        "columnKey",
        "label",
        "className",
        "labelClassName",
        "type",
        "renderHeader",
        "formatter",
        "fixed",
        "resizable"
      ];
      const sortProps = ["sortMethod", "sortBy", "sortOrders"];
      const selectProps = ["selectable", "reserveSelection"];
      const filterProps = [
        "filterMethod",
        "filters",
        "filterMultiple",
        "filterOpened",
        "filteredValue",
        "filterPlacement",
        "filterClassName"
      ];
      let column = getPropsData(basicProps, sortProps, selectProps, filterProps);
      column = mergeOptions(defaults, column);
      const chains = compose(
        setColumnRenders,
        setColumnWidth,
        setColumnForcedProps
      );
      column = chains(column);
      columnConfig.value = column;
      registerNormalWatchers();
      registerComplexWatchers();
    });
    onMounted(() => {
      var _a, _b;
      const parent2 = columnOrTableParent.value;
      const children = isSubColumn.value ? (_a = parent2.vnode.el) == null ? void 0 : _a.children : (_b = parent2.refs.hiddenColumns) == null ? void 0 : _b.children;
      const getColumnIndex = () => getColumnElIndex(children || [], instance.vnode.el);
      columnConfig.value.getColumnIndex = getColumnIndex;
      const columnIndex = getColumnIndex();
      columnIndex > -1 && owner.value.store.commit(
        "insertColumn",
        columnConfig.value,
        isSubColumn.value ? "columnConfig" in parent2 && parent2.columnConfig.value : null,
        updateColumnOrder
      );
    });
    onBeforeUnmount(() => {
      const getColumnIndex = columnConfig.value.getColumnIndex;
      const columnIndex = getColumnIndex ? getColumnIndex() : -1;
      columnIndex > -1 && owner.value.store.commit(
        "removeColumn",
        columnConfig.value,
        isSubColumn.value ? "columnConfig" in parent && parent.columnConfig.value : null,
        updateColumnOrder
      );
    });
    instance.columnId = columnId.value;
    instance.columnConfig = columnConfig;
    return;
  },
  render() {
    var _a, _b, _c;
    try {
      const renderDefault = (_b = (_a = this.$slots).default) == null ? void 0 : _b.call(_a, {
        row: {},
        column: {},
        $index: -1
      });
      const children = [];
      if (isArray$1(renderDefault)) {
        for (const childNode of renderDefault) {
          if (((_c = childNode.type) == null ? void 0 : _c.name) === "ElTableColumn" || childNode.shapeFlag & 2) {
            children.push(childNode);
          } else if (childNode.type === Fragment && isArray$1(childNode.children)) {
            childNode.children.forEach((vnode2) => {
              if ((vnode2 == null ? void 0 : vnode2.patchFlag) !== 1024 && !isString(vnode2 == null ? void 0 : vnode2.children)) {
                children.push(vnode2);
              }
            });
          }
        }
      }
      const vnode = h$1("div", children);
      return vnode;
    } catch (e) {
      return h$1("div", []);
    }
  }
});
const ElTable = withInstall(Table, {
  TableColumn: ElTableColumn$1
});
const ElTableColumn = withNoopInstall(ElTableColumn$1);
function createLoadingComponent(options, appContext) {
  let afterLeaveTimer;
  const afterLeaveFlag = ref(false);
  const data = reactive({
    ...options,
    originalPosition: "",
    originalOverflow: "",
    visible: false
  });
  function setText(text) {
    data.text = text;
  }
  function destroySelf() {
    const target = data.parent;
    const ns = vm.ns;
    if (!target.vLoadingAddClassList) {
      let loadingNumber = target.getAttribute("loading-number");
      loadingNumber = Number.parseInt(loadingNumber) - 1;
      if (!loadingNumber) {
        removeClass(target, ns.bm("parent", "relative"));
        target.removeAttribute("loading-number");
      } else {
        target.setAttribute("loading-number", loadingNumber.toString());
      }
      removeClass(target, ns.bm("parent", "hidden"));
    }
    removeElLoadingChild();
    loadingInstance.unmount();
  }
  function removeElLoadingChild() {
    var _a, _b;
    (_b = (_a = vm.$el) == null ? void 0 : _a.parentNode) == null ? void 0 : _b.removeChild(vm.$el);
  }
  function close() {
    var _a;
    if (options.beforeClose && !options.beforeClose())
      return;
    afterLeaveFlag.value = true;
    clearTimeout(afterLeaveTimer);
    afterLeaveTimer = setTimeout(handleAfterLeave, 400);
    data.visible = false;
    (_a = options.closed) == null ? void 0 : _a.call(options);
  }
  function handleAfterLeave() {
    if (!afterLeaveFlag.value)
      return;
    const target = data.parent;
    afterLeaveFlag.value = false;
    target.vLoadingAddClassList = void 0;
    destroySelf();
  }
  const elLoadingComponent = defineComponent({
    name: "ElLoading",
    setup(_2, { expose }) {
      const { ns, zIndex } = useGlobalComponentSettings("loading");
      expose({
        ns,
        zIndex
      });
      return () => {
        const svg = data.spinner || data.svg;
        const spinner = h$1(
          "svg",
          {
            class: "circular",
            viewBox: data.svgViewBox ? data.svgViewBox : "0 0 50 50",
            ...svg ? { innerHTML: svg } : {}
          },
          [
            h$1("circle", {
              class: "path",
              cx: "25",
              cy: "25",
              r: "20",
              fill: "none"
            })
          ]
        );
        const spinnerText = data.text ? h$1("p", { class: ns.b("text") }, [data.text]) : void 0;
        return h$1(
          Transition,
          {
            name: ns.b("fade"),
            onAfterLeave: handleAfterLeave
          },
          {
            default: withCtx(() => [
              withDirectives(
                createVNode(
                  "div",
                  {
                    style: {
                      backgroundColor: data.background || ""
                    },
                    class: [
                      ns.b("mask"),
                      data.customClass,
                      ns.is("fullscreen", data.fullscreen)
                    ]
                  },
                  [
                    h$1(
                      "div",
                      {
                        class: ns.b("spinner")
                      },
                      [spinner, spinnerText]
                    )
                  ]
                ),
                [[vShow, data.visible]]
              )
            ])
          }
        );
      };
    }
  });
  const loadingInstance = createApp(elLoadingComponent);
  Object.assign(loadingInstance._context, appContext != null ? appContext : {});
  const vm = loadingInstance.mount(document.createElement("div"));
  return {
    ...toRefs(data),
    setText,
    removeElLoadingChild,
    close,
    handleAfterLeave,
    vm,
    get $el() {
      return vm.$el;
    }
  };
}
let fullscreenInstance = void 0;
const Loading = function(options = {}, context) {
  if (!isClient)
    return void 0;
  const resolved = resolveOptions(options);
  if (resolved.fullscreen && fullscreenInstance) {
    return fullscreenInstance;
  }
  const instance = createLoadingComponent(
    {
      ...resolved,
      closed: () => {
        var _a;
        (_a = resolved.closed) == null ? void 0 : _a.call(resolved);
        if (resolved.fullscreen)
          fullscreenInstance = void 0;
      }
    },
    context != null ? context : Loading._context
  );
  addStyle(resolved, resolved.parent, instance);
  addClassList(resolved, resolved.parent, instance);
  resolved.parent.vLoadingAddClassList = () => addClassList(resolved, resolved.parent, instance);
  let loadingNumber = resolved.parent.getAttribute("loading-number");
  if (!loadingNumber) {
    loadingNumber = "1";
  } else {
    loadingNumber = `${Number.parseInt(loadingNumber) + 1}`;
  }
  resolved.parent.setAttribute("loading-number", loadingNumber);
  resolved.parent.appendChild(instance.$el);
  nextTick(() => instance.visible.value = resolved.visible);
  if (resolved.fullscreen) {
    fullscreenInstance = instance;
  }
  return instance;
};
const resolveOptions = (options) => {
  var _a, _b, _c, _d;
  let target;
  if (isString(options.target)) {
    target = (_a = document.querySelector(options.target)) != null ? _a : document.body;
  } else {
    target = options.target || document.body;
  }
  return {
    parent: target === document.body || options.body ? document.body : target,
    background: options.background || "",
    svg: options.svg || "",
    svgViewBox: options.svgViewBox || "",
    spinner: options.spinner || false,
    text: options.text || "",
    fullscreen: target === document.body && ((_b = options.fullscreen) != null ? _b : true),
    lock: (_c = options.lock) != null ? _c : false,
    customClass: options.customClass || "",
    visible: (_d = options.visible) != null ? _d : true,
    beforeClose: options.beforeClose,
    closed: options.closed,
    target
  };
};
const addStyle = async (options, parent, instance) => {
  const { nextZIndex } = instance.vm.zIndex || instance.vm._.exposed.zIndex;
  const maskStyle = {};
  if (options.fullscreen) {
    instance.originalPosition.value = getStyle(document.body, "position");
    instance.originalOverflow.value = getStyle(document.body, "overflow");
    maskStyle.zIndex = nextZIndex();
  } else if (options.parent === document.body) {
    instance.originalPosition.value = getStyle(document.body, "position");
    await nextTick();
    for (const property of ["top", "left"]) {
      const scroll = property === "top" ? "scrollTop" : "scrollLeft";
      maskStyle[property] = `${options.target.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] - Number.parseInt(getStyle(document.body, `margin-${property}`), 10)}px`;
    }
    for (const property of ["height", "width"]) {
      maskStyle[property] = `${options.target.getBoundingClientRect()[property]}px`;
    }
  } else {
    instance.originalPosition.value = getStyle(parent, "position");
  }
  for (const [key, value] of Object.entries(maskStyle)) {
    instance.$el.style[key] = value;
  }
};
const addClassList = (options, parent, instance) => {
  const ns = instance.vm.ns || instance.vm._.exposed.ns;
  if (!["absolute", "fixed", "sticky"].includes(instance.originalPosition.value)) {
    addClass(parent, ns.bm("parent", "relative"));
  } else {
    removeClass(parent, ns.bm("parent", "relative"));
  }
  if (options.fullscreen && options.lock) {
    addClass(parent, ns.bm("parent", "hidden"));
  } else {
    removeClass(parent, ns.bm("parent", "hidden"));
  }
};
Loading._context = null;
const INSTANCE_KEY = Symbol("ElLoading");
const getAttributeName = (name) => {
  return `element-loading-${hyphenate(name)}`;
};
const createInstance = (el, binding) => {
  var _a, _b, _c, _d;
  const vm = binding.instance;
  const getBindingProp = (key) => isObject$1(binding.value) ? binding.value[key] : void 0;
  const resolveExpression = (key) => {
    const data = isString(key) && (vm == null ? void 0 : vm[key]) || key;
    return ref(data);
  };
  const getProp2 = (name) => resolveExpression(
    getBindingProp(name) || el.getAttribute(getAttributeName(name))
  );
  const fullscreen = (_a = getBindingProp("fullscreen")) != null ? _a : binding.modifiers.fullscreen;
  const options = {
    text: getProp2("text"),
    svg: getProp2("svg"),
    svgViewBox: getProp2("svgViewBox"),
    spinner: getProp2("spinner"),
    background: getProp2("background"),
    customClass: getProp2("customClass"),
    fullscreen,
    target: (_b = getBindingProp("target")) != null ? _b : fullscreen ? void 0 : el,
    body: (_c = getBindingProp("body")) != null ? _c : binding.modifiers.body,
    lock: (_d = getBindingProp("lock")) != null ? _d : binding.modifiers.lock
  };
  const instance = Loading(options);
  instance._context = vLoading._context;
  el[INSTANCE_KEY] = {
    options,
    instance
  };
};
const updateOptions = (originalOptions, newOptions) => {
  for (const key of Object.keys(originalOptions)) {
    if (isRef(originalOptions[key]))
      originalOptions[key].value = newOptions[key];
  }
};
const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_KEY];
    if (!binding.value) {
      instance == null ? void 0 : instance.instance.close();
      el[INSTANCE_KEY] = null;
      return;
    }
    if (!instance)
      createInstance(el, binding);
    else {
      updateOptions(
        instance.options,
        isObject$1(binding.value) ? binding.value : {
          text: el.getAttribute(getAttributeName("text")),
          svg: el.getAttribute(getAttributeName("svg")),
          svgViewBox: el.getAttribute(getAttributeName("svgViewBox")),
          spinner: el.getAttribute(getAttributeName("spinner")),
          background: el.getAttribute(getAttributeName("background")),
          customClass: el.getAttribute(getAttributeName("customClass"))
        }
      );
    }
  },
  unmounted(el) {
    var _a;
    (_a = el[INSTANCE_KEY]) == null ? void 0 : _a.instance.close();
    el[INSTANCE_KEY] = null;
  }
};
vLoading._context = null;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: /* @__PURE__ */ mergeModels({
    total: {
      type: Number,
      default: 0
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 50];
      }
    },
    layout: {
      type: String,
      default: "total, sizes, prev, pager, next, jumper"
    },
    background: {
      type: Boolean,
      default: true
    },
    autoScroll: {
      type: Boolean,
      default: true
    },
    hidden: {
      type: Boolean,
      default: false
    }
  }, {
    "page": {
      type: Number,
      required: true,
      default: 1
    },
    "pageModifiers": {},
    "limit": {
      type: Number,
      required: true,
      default: 10
    },
    "limitModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["pagination"], ["update:page", "update:limit"]),
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const currentPage = useModel(__props, "page");
    const pageSize = useModel(__props, "limit");
    watch(
      () => props.total,
      (newVal) => {
        const lastPage = Math.ceil(newVal / pageSize.value);
        if (newVal > 0 && currentPage.value > lastPage) {
          currentPage.value = lastPage;
          emit("pagination", { page: currentPage.value, limit: pageSize.value });
        }
      }
    );
    function handleSizeChange(val) {
      currentPage.value = 1;
      emit("pagination", { page: currentPage.value, limit: val });
    }
    function handleCurrentChange(val) {
      emit("pagination", { page: val, limit: pageSize.value });
    }
    return (_ctx, _cache) => {
      const _component_el_pagination = ElPagination;
      const _component_el_scrollbar = ElScrollbar;
      return openBlock(), createBlock(_component_el_scrollbar, null, {
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass([{ hidden: __props.hidden }, "pagination"])
          }, [
            createVNode(_component_el_pagination, {
              "current-page": currentPage.value,
              "onUpdate:currentPage": _cache[0] || (_cache[0] = ($event) => currentPage.value = $event),
              "page-size": pageSize.value,
              "onUpdate:pageSize": _cache[1] || (_cache[1] = ($event) => pageSize.value = $event),
              background: __props.background,
              layout: __props.layout,
              "page-sizes": __props.pageSizes,
              total: __props.total,
              onSizeChange: handleSizeChange,
              onCurrentChange: handleCurrentChange
            }, null, 8, ["current-page", "page-size", "background", "layout", "page-sizes", "total"])
          ], 2)
        ]),
        _: 1
      });
    };
  }
});
const __unplugin_components_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-ded982e5"]]);
export {
  ElTable as E,
  Loading as L,
  __unplugin_components_3 as _,
  ElTableColumn as a,
  vLoading as v
};
