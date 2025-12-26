import { c1 as Stack, ck as baseIsEqual, b0 as isObject, bV as keys, cl as isKey, cm as toKey, c9 as get, cn as baseGet, b_ as isArray, t as buildProps, z as definePropType, _ as _export_sfc, d as defineComponent, bM as useGlobalConfig, b as useNamespace, g as createElementBlock, f as openBlock, h as createCommentVNode, C as createBaseVNode, n as normalizeClass, i as unref, l as renderSlot, a4 as createTextVNode, F as toDisplayString, k as normalizeStyle, q as withInstall, s as shallowRef, r as ref, c as computed, af as useResizeObserver, I as watch, bE as isEqual, A as inject, ae as isObject$1, aB as toRaw, B as getCurrentInstance, $ as withDirectives, a1 as vShow, j as withModifiers, aT as toRefs, S as reactive, aa as onBeforeUnmount, U as nextTick, o as onMounted, x as useLocale, X as useEmptyValues, ad as isArray$1, co as ValidateComponentsMap, bD as isEmpty, a9 as isUndefined, cp as isIOS, P as watchEffect, cq as useDebounceFn, bB as isFunction, cr as isPlainObject, K as getEventCode, L as EVENT_CODE, N as isNil, H as isClient, b1 as isNumber, M as isString, V as useEmptyValuesProps, a0 as arrow_down_default, v as iconPropType, bA as circle_close_default, W as useSizeProp, y as provide, cs as useMutationObserver, bx as isVNode, au as resolveComponent, cc as resolveDirective, m as createVNode, w as withCtx, e as createBlock, Q as Fragment, R as renderList, Z as mergeProps, ct as vModelText, D as resolveDynamicComponent, cu as toHandlerKey, E as ElIcon, G as withNoopInstall } from "./index.Dp4m6nBq.js";
import { m as hasIn, j as identity, t as throwError, i as castArray, d as debugWarn, u as useAriaProps, a as useTooltipContentProps, n as Ee, E as ElTooltip } from "./popper.DXIFQgs8.js";
import { t as toNumber, s as scrollIntoView, a as scrollbarEmits, E as ElScrollbar } from "./scrollbar.u3Wr4GmE.js";
import { t as tagProps, C as ClickOutside, a as ElTag, f as flattedChildren } from "./tag.CYa7Ow6I.js";
import { d as useId, u as useFormItem, c as useFormItemInputId, a as useFormDisabled, b as useFormSize } from "./button.7O-VbLYM.js";
import { f as useComposition, u as useFocusController, U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT } from "./input.BUoL4AzR.js";
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  array.length;
  var index = fromIndex + 1;
  while (index--) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}
function baseClamp(number, lower, upper) {
  if (number === number) {
    if (upper !== void 0) {
      number = number <= upper ? number : upper;
    }
    if (lower !== void 0) {
      number = number >= lower ? number : lower;
    }
  }
  return number;
}
function clamp(number, lower, upper) {
  if (upper === void 0) {
    upper = lower;
    lower = void 0;
  }
  if (upper !== void 0) {
    upper = toNumber(upper);
    upper = upper === upper ? upper : 0;
  }
  if (lower !== void 0) {
    lower = toNumber(lower);
    lower = lower === lower ? lower : 0;
  }
  return baseClamp(toNumber(number), lower, upper);
}
var COMPARE_PARTIAL_FLAG$1 = 1, COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length, length = index;
  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0], objValue = object[key], srcValue = data[1];
    if (data[2]) {
      if (objValue === void 0 && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      var result;
      if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}
function isStrictComparable(value) {
  return value === value && !isObject(value);
}
function getMatchData(object) {
  var result = keys(object), length = result.length;
  while (length--) {
    var key = result[length], value = object[key];
    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
  };
}
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}
var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}
function baseProperty(key) {
  return function(object) {
    return object == null ? void 0 : object[key];
  };
}
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == "object") {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}
function findLastIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = length - 1;
  return baseFindIndex(array, baseIteratee(predicate), index);
}
const cardProps = buildProps({
  header: {
    type: String,
    default: ""
  },
  footer: {
    type: String,
    default: ""
  },
  bodyStyle: {
    type: definePropType([String, Object, Array]),
    default: ""
  },
  headerClass: String,
  bodyClass: String,
  footerClass: String,
  shadow: {
    type: String,
    values: ["always", "hover", "never"],
    default: void 0
  }
});
const _sfc_main$4 = defineComponent({
  ...{
    name: "ElCard"
  },
  __name: "card",
  props: cardProps,
  setup(__props) {
    const globalConfig = useGlobalConfig("card");
    const ns = useNamespace("card");
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([
            unref(ns).b(),
            unref(ns).is(`${_ctx.shadow || ((_a = unref(globalConfig)) == null ? void 0 : _a.shadow) || "always"}-shadow`)
          ])
        },
        [
          _ctx.$slots.header || _ctx.header ? (openBlock(), createElementBlock(
            "div",
            {
              key: 0,
              class: normalizeClass([unref(ns).e("header"), _ctx.headerClass])
            },
            [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode(
                  toDisplayString(_ctx.header),
                  1
                )
              ])
            ],
            2
          )) : createCommentVNode("v-if", true),
          createBaseVNode(
            "div",
            {
              class: normalizeClass([unref(ns).e("body"), _ctx.bodyClass]),
              style: normalizeStyle(_ctx.bodyStyle)
            },
            [
              renderSlot(_ctx.$slots, "default")
            ],
            6
          ),
          _ctx.$slots.footer || _ctx.footer ? (openBlock(), createElementBlock(
            "div",
            {
              key: 1,
              class: normalizeClass([unref(ns).e("footer"), _ctx.footerClass])
            },
            [
              renderSlot(_ctx.$slots, "footer", {}, () => [
                createTextVNode(
                  toDisplayString(_ctx.footer),
                  1
                )
              ])
            ],
            2
          )) : createCommentVNode("v-if", true)
        ],
        2
      );
    };
  }
});
var Card = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);
const ElCard = withInstall(Card);
const MINIMUM_INPUT_WIDTH = 11;
const BORDER_HORIZONTAL_WIDTH = 2;
function useCalcInputWidth() {
  const calculatorRef = shallowRef();
  const calculatorWidth = ref(0);
  const inputStyle = computed(() => ({
    minWidth: `${Math.max(calculatorWidth.value, MINIMUM_INPUT_WIDTH)}px`
  }));
  const resetCalculatorWidth = () => {
    var _a, _b;
    calculatorWidth.value = (_b = (_a = calculatorRef.value) == null ? void 0 : _a.getBoundingClientRect().width) != null ? _b : 0;
  };
  useResizeObserver(calculatorRef, resetCalculatorWidth);
  return {
    calculatorRef,
    calculatorWidth,
    inputStyle
  };
}
const defaultProps = {
  label: "label",
  value: "value",
  disabled: "disabled",
  options: "options"
};
function useProps(props) {
  const aliasProps = ref({ ...defaultProps, ...props.props });
  let cache = { ...props.props };
  watch(
    () => props.props,
    (val) => {
      if (!isEqual(val, cache)) {
        aliasProps.value = { ...defaultProps, ...val };
        cache = { ...val };
      }
    },
    { deep: true }
  );
  const getLabel = (option) => get(option, aliasProps.value.label);
  const getValue = (option) => get(option, aliasProps.value.value);
  const getDisabled = (option) => get(option, aliasProps.value.disabled);
  const getOptions = (option) => get(option, aliasProps.value.options);
  return {
    aliasProps,
    getLabel,
    getValue,
    getDisabled,
    getOptions
  };
}
const selectGroupKey = Symbol("ElSelectGroup");
const selectKey = Symbol("ElSelect");
const COMPONENT_NAME$1 = "ElOption";
const optionProps = buildProps({
  value: {
    type: [String, Number, Boolean, Object],
    required: true
  },
  label: {
    type: [String, Number]
  },
  created: Boolean,
  disabled: Boolean
});
const escapeStringRegexp = (string = "") => string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
function useOption(props, states) {
  const select = inject(selectKey);
  if (!select) {
    throwError(COMPONENT_NAME$1, "usage: <el-select><el-option /></el-select/>");
  }
  const selectGroup = inject(selectGroupKey, { disabled: false });
  const itemSelected = computed(() => {
    return contains(castArray(select.props.modelValue), props.value);
  });
  const limitReached = computed(() => {
    var _a;
    if (select.props.multiple) {
      const modelValue = castArray((_a = select.props.modelValue) != null ? _a : []);
      return !itemSelected.value && modelValue.length >= select.props.multipleLimit && select.props.multipleLimit > 0;
    } else {
      return false;
    }
  });
  const currentLabel = computed(() => {
    var _a;
    return (_a = props.label) != null ? _a : isObject$1(props.value) ? "" : props.value;
  });
  const currentValue = computed(() => {
    return props.value || props.label || "";
  });
  const isDisabled = computed(() => {
    return props.disabled || states.groupDisabled || limitReached.value;
  });
  const instance = getCurrentInstance();
  const contains = (arr = [], target) => {
    if (!isObject$1(props.value)) {
      return arr && arr.includes(target);
    } else {
      const valueKey = select.props.valueKey;
      return arr && arr.some((item) => {
        return toRaw(get(item, valueKey)) === get(target, valueKey);
      });
    }
  };
  const hoverItem = () => {
    if (!isDisabled.value) {
      select.states.hoveringIndex = select.optionsArray.indexOf(instance.proxy);
    }
  };
  const updateOption = (query) => {
    const regexp = new RegExp(escapeStringRegexp(query), "i");
    states.visible = regexp.test(String(currentLabel.value)) || props.created;
  };
  watch(
    () => currentLabel.value,
    () => {
      if (!props.created && !select.props.remote)
        select.setSelected();
    }
  );
  watch(
    () => props.value,
    (val, oldVal) => {
      const { remote, valueKey } = select.props;
      const shouldUpdate = remote ? val !== oldVal : !isEqual(val, oldVal);
      if (shouldUpdate) {
        select.onOptionDestroy(oldVal, instance.proxy);
        select.onOptionCreate(instance.proxy);
      }
      if (!props.created && !remote) {
        if (valueKey && isObject$1(val) && isObject$1(oldVal) && val[valueKey] === oldVal[valueKey]) {
          return;
        }
        select.setSelected();
      }
    }
  );
  watch(
    () => selectGroup.disabled,
    () => {
      states.groupDisabled = selectGroup.disabled;
    },
    { immediate: true }
  );
  return {
    select,
    currentLabel,
    currentValue,
    itemSelected,
    isDisabled,
    hoverItem,
    updateOption
  };
}
const _sfc_main$3 = defineComponent({
  name: COMPONENT_NAME$1,
  componentName: COMPONENT_NAME$1,
  props: optionProps,
  setup(props) {
    const ns = useNamespace("select");
    const id = useId();
    const containerKls = computed(() => [
      ns.be("dropdown", "item"),
      ns.is("disabled", unref(isDisabled)),
      ns.is("selected", unref(itemSelected)),
      ns.is("hovering", unref(hover))
    ]);
    const states = reactive({
      index: -1,
      groupDisabled: false,
      visible: true,
      hover: false
    });
    const {
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      hoverItem,
      updateOption
    } = useOption(props, states);
    const { visible, hover } = toRefs(states);
    const vm = getCurrentInstance().proxy;
    select.onOptionCreate(vm);
    onBeforeUnmount(() => {
      const key = vm.value;
      nextTick(() => {
        const { selected: selectedOptions } = select.states;
        const doesSelected = selectedOptions.some((item) => {
          return item.value === vm.value;
        });
        if (select.states.cachedOptions.get(key) === vm && !doesSelected) {
          select.states.cachedOptions.delete(key);
        }
      });
      select.onOptionDestroy(key, vm);
    });
    function selectOptionClick() {
      if (!isDisabled.value) {
        select.handleOptionSelect(vm);
      }
    }
    return {
      ns,
      id,
      containerKls,
      currentLabel,
      itemSelected,
      isDisabled,
      select,
      visible,
      hover,
      states,
      hoverItem,
      updateOption,
      selectOptionClick
    };
  }
});
const _hoisted_1$1 = ["id", "aria-disabled", "aria-selected"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock("li", {
    id: _ctx.id,
    class: normalizeClass(_ctx.containerKls),
    role: "option",
    "aria-disabled": _ctx.isDisabled || void 0,
    "aria-selected": _ctx.itemSelected,
    onMousemove: _cache[0] || (_cache[0] = (...args) => _ctx.hoverItem && _ctx.hoverItem(...args)),
    onClick: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.selectOptionClick && _ctx.selectOptionClick(...args), ["stop"])),
    onMousedown: _cache[2] || (_cache[2] = withModifiers(() => {
    }, ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createBaseVNode(
        "span",
        null,
        toDisplayString(_ctx.currentLabel),
        1
      )
    ])
  ], 42, _hoisted_1$1)), [
    [vShow, _ctx.visible]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option.vue"]]);
const _sfc_main$2 = defineComponent({
  name: "ElSelectDropdown",
  componentName: "ElSelectDropdown",
  setup() {
    const select = inject(selectKey);
    const ns = useNamespace("select");
    const popperClass = computed(() => select.props.popperClass);
    const isMultiple = computed(() => select.props.multiple);
    const isFitInputWidth = computed(() => select.props.fitInputWidth);
    const minWidth = ref("");
    function updateMinWidth() {
      var _a;
      const offsetWidth = (_a = select.selectRef) == null ? void 0 : _a.offsetWidth;
      if (offsetWidth) {
        minWidth.value = `${offsetWidth - BORDER_HORIZONTAL_WIDTH}px`;
      } else {
        minWidth.value = "";
      }
    }
    onMounted(() => {
      updateMinWidth();
      useResizeObserver(select.selectRef, updateMinWidth);
    });
    return {
      ns,
      minWidth,
      popperClass,
      isMultiple,
      isFitInputWidth
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([_ctx.ns.b("dropdown"), _ctx.ns.is("multiple", _ctx.isMultiple), _ctx.popperClass]),
      style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
    },
    [
      _ctx.$slots.header ? (openBlock(), createElementBlock(
        "div",
        {
          key: 0,
          class: normalizeClass(_ctx.ns.be("dropdown", "header"))
        },
        [
          renderSlot(_ctx.$slots, "header")
        ],
        2
      )) : createCommentVNode("v-if", true),
      renderSlot(_ctx.$slots, "default"),
      _ctx.$slots.footer ? (openBlock(), createElementBlock(
        "div",
        {
          key: 1,
          class: normalizeClass(_ctx.ns.be("dropdown", "footer"))
        },
        [
          renderSlot(_ctx.$slots, "footer")
        ],
        2
      )) : createCommentVNode("v-if", true)
    ],
    6
  );
}
var ElSelectMenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select-dropdown.vue"]]);
const useSelect = (props, emit) => {
  const { t } = useLocale();
  const contentId = useId();
  const nsSelect = useNamespace("select");
  const nsInput = useNamespace("input");
  const states = reactive({
    inputValue: "",
    options: /* @__PURE__ */ new Map(),
    cachedOptions: /* @__PURE__ */ new Map(),
    optionValues: [],
    selected: [],
    selectionWidth: 0,
    collapseItemWidth: 0,
    selectedLabel: "",
    hoveringIndex: -1,
    previousQuery: null,
    inputHovering: false,
    menuVisibleOnFocus: false,
    isBeforeHide: false
  });
  const selectRef = ref();
  const selectionRef = ref();
  const tooltipRef = ref();
  const tagTooltipRef = ref();
  const inputRef = ref();
  const prefixRef = ref();
  const suffixRef = ref();
  const menuRef = ref();
  const tagMenuRef = ref();
  const collapseItemRef = ref();
  const scrollbarRef = ref();
  const expanded = ref(false);
  const hoverOption = ref();
  const debouncing = ref(false);
  const { form, formItem } = useFormItem();
  const { inputId } = useFormItemInputId(props, {
    formItemContext: formItem
  });
  const { valueOnClear, isEmptyValue } = useEmptyValues(props);
  const {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useComposition({
    afterComposition: (e) => onInput(e)
  });
  const selectDisabled = useFormDisabled();
  const { wrapperRef, isFocused, handleBlur } = useFocusController(inputRef, {
    disabled: selectDisabled,
    afterFocus() {
      if (props.automaticDropdown && !expanded.value) {
        expanded.value = true;
        states.menuVisibleOnFocus = true;
      }
    },
    beforeBlur(event) {
      var _a, _b;
      return ((_a = tooltipRef.value) == null ? void 0 : _a.isFocusInsideContent(event)) || ((_b = tagTooltipRef.value) == null ? void 0 : _b.isFocusInsideContent(event));
    },
    afterBlur() {
      var _a;
      expanded.value = false;
      states.menuVisibleOnFocus = false;
      if (props.validateEvent) {
        (_a = formItem == null ? void 0 : formItem.validate) == null ? void 0 : _a.call(formItem, "blur").catch((err) => debugWarn());
      }
    }
  });
  const hasModelValue = computed(() => {
    return isArray$1(props.modelValue) ? props.modelValue.length > 0 : !isEmptyValue(props.modelValue);
  });
  const needStatusIcon = computed(() => {
    var _a;
    return (_a = form == null ? void 0 : form.statusIcon) != null ? _a : false;
  });
  const showClearBtn = computed(() => {
    return props.clearable && !selectDisabled.value && hasModelValue.value && (isFocused.value || states.inputHovering);
  });
  const iconComponent = computed(
    () => props.remote && props.filterable && !props.remoteShowSuffix ? "" : props.suffixIcon
  );
  const iconReverse = computed(
    () => nsSelect.is("reverse", !!(iconComponent.value && expanded.value))
  );
  const validateState = computed(() => (formItem == null ? void 0 : formItem.validateState) || "");
  const validateIcon = computed(
    () => validateState.value && ValidateComponentsMap[validateState.value]
  );
  const debounce = computed(() => props.remote ? props.debounce : 0);
  const isRemoteSearchEmpty = computed(
    () => props.remote && !states.inputValue && states.options.size === 0
  );
  const emptyText = computed(() => {
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.filterable && states.inputValue && states.options.size > 0 && filteredOptionsCount.value === 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (states.options.size === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptionsCount = computed(
    () => optionsArray.value.filter((option) => option.visible).length
  );
  const optionsArray = computed(() => {
    const list = Array.from(states.options.values());
    const newList = [];
    states.optionValues.forEach((item) => {
      const index = list.findIndex((i) => i.value === item);
      if (index > -1) {
        newList.push(list[index]);
      }
    });
    return newList.length >= list.length ? newList : list;
  });
  const cachedOptionsArray = computed(
    () => Array.from(states.cachedOptions.values())
  );
  const showNewOption = computed(() => {
    const hasExistingOption = optionsArray.value.filter((option) => {
      return !option.created;
    }).some((option) => {
      return option.currentLabel === states.inputValue;
    });
    return props.filterable && props.allowCreate && states.inputValue !== "" && !hasExistingOption;
  });
  const updateOptions = () => {
    if (props.filterable && isFunction(props.filterMethod))
      return;
    if (props.filterable && props.remote && isFunction(props.remoteMethod))
      return;
    optionsArray.value.forEach((option) => {
      var _a;
      (_a = option.updateOption) == null ? void 0 : _a.call(option, states.inputValue);
    });
  };
  const selectSize = useFormSize();
  const collapseTagSize = computed(
    () => ["small"].includes(selectSize.value) ? "small" : "default"
  );
  const dropdownMenuVisible = computed({
    get() {
      return expanded.value && (props.loading || !isRemoteSearchEmpty.value) && (!debouncing.value || !isEmpty(states.previousQuery));
    },
    set(val) {
      expanded.value = val;
    }
  });
  const shouldShowPlaceholder = computed(() => {
    if (props.multiple && !isUndefined(props.modelValue)) {
      return castArray(props.modelValue).length === 0 && !states.inputValue;
    }
    const value = isArray$1(props.modelValue) ? props.modelValue[0] : props.modelValue;
    return props.filterable || isUndefined(value) ? !states.inputValue : true;
  });
  const currentPlaceholder = computed(() => {
    var _a;
    const _placeholder = (_a = props.placeholder) != null ? _a : t("el.select.placeholder");
    return props.multiple || !hasModelValue.value ? _placeholder : states.selectedLabel;
  });
  const mouseEnterEventName = computed(() => isIOS ? null : "mouseenter");
  watch(
    () => props.modelValue,
    (val, oldVal) => {
      if (props.multiple) {
        if (props.filterable && !props.reserveKeyword) {
          states.inputValue = "";
          handleQueryChange("");
        }
      }
      setSelected();
      if (!isEqual(val, oldVal) && props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn());
      }
    },
    {
      flush: "post",
      deep: true
    }
  );
  watch(
    () => expanded.value,
    (val) => {
      if (val) {
        handleQueryChange(states.inputValue);
      } else {
        states.inputValue = "";
        states.previousQuery = null;
        states.isBeforeHide = true;
      }
    }
  );
  watch(
    () => states.options.entries(),
    () => {
      if (!isClient)
        return;
      setSelected();
      if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
        checkDefaultFirstOption();
      }
    },
    {
      flush: "post"
    }
  );
  watch([() => states.hoveringIndex, optionsArray], ([val]) => {
    if (isNumber(val) && val > -1) {
      hoverOption.value = optionsArray.value[val] || {};
    } else {
      hoverOption.value = {};
    }
    optionsArray.value.forEach((option) => {
      option.hover = hoverOption.value === option;
    });
  });
  watchEffect(() => {
    if (states.isBeforeHide)
      return;
    updateOptions();
  });
  const handleQueryChange = (val) => {
    if (states.previousQuery === val || isComposing.value) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && isFunction(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && isFunction(props.remoteMethod)) {
      props.remoteMethod(val);
    }
    if (props.defaultFirstOption && (props.filterable || props.remote) && filteredOptionsCount.value) {
      nextTick(checkDefaultFirstOption);
    } else {
      nextTick(updateHoveringIndex);
    }
  };
  const checkDefaultFirstOption = () => {
    const optionsInDropdown = optionsArray.value.filter(
      (n) => n.visible && !n.disabled && !n.states.groupDisabled
    );
    const userCreatedOption = optionsInDropdown.find((n) => n.created);
    const firstOriginOption = optionsInDropdown[0];
    const valueList = optionsArray.value.map((item) => item.value);
    states.hoveringIndex = getValueIndex(
      valueList,
      userCreatedOption || firstOriginOption
    );
  };
  const setSelected = () => {
    if (!props.multiple) {
      const value = isArray$1(props.modelValue) ? props.modelValue[0] : props.modelValue;
      const option = getOption(value);
      states.selectedLabel = option.currentLabel;
      states.selected = [option];
      return;
    } else {
      states.selectedLabel = "";
    }
    const result = [];
    if (!isUndefined(props.modelValue)) {
      castArray(props.modelValue).forEach((value) => {
        result.push(getOption(value));
      });
    }
    states.selected = result;
  };
  const getOption = (value) => {
    let option;
    const isObjectValue = isPlainObject(value);
    for (let i = states.cachedOptions.size - 1; i >= 0; i--) {
      const cachedOption = cachedOptionsArray.value[i];
      const isEqualValue = isObjectValue ? get(cachedOption.value, props.valueKey) === get(value, props.valueKey) : cachedOption.value === value;
      if (isEqualValue) {
        option = {
          index: optionsArray.value.filter((opt) => !opt.created).indexOf(cachedOption),
          value,
          currentLabel: cachedOption.currentLabel,
          get isDisabled() {
            return cachedOption.isDisabled;
          }
        };
        break;
      }
    }
    if (option)
      return option;
    const label = isObjectValue ? value.label : value != null ? value : "";
    const newOption = {
      index: -1,
      value,
      currentLabel: label
    };
    return newOption;
  };
  const updateHoveringIndex = () => {
    const length = states.selected.length;
    if (length > 0) {
      const lastOption = states.selected[length - 1];
      states.hoveringIndex = optionsArray.value.findIndex(
        (item) => getValueKey(lastOption) === getValueKey(item)
      );
    } else {
      states.hoveringIndex = -1;
    }
  };
  const resetSelectionWidth = () => {
    states.selectionWidth = Number.parseFloat(
      window.getComputedStyle(selectionRef.value).width
    );
  };
  const resetCollapseItemWidth = () => {
    states.collapseItemWidth = collapseItemRef.value.getBoundingClientRect().width;
  };
  const updateTooltip = () => {
    var _a, _b;
    (_b = (_a = tooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const updateTagTooltip = () => {
    var _a, _b;
    (_b = (_a = tagTooltipRef.value) == null ? void 0 : _a.updatePopper) == null ? void 0 : _b.call(_a);
  };
  const onInputChange = () => {
    if (states.inputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    handleQueryChange(states.inputValue);
  };
  const onInput = (event) => {
    states.inputValue = event.target.value;
    if (props.remote) {
      debouncing.value = true;
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const debouncedOnInputChange = useDebounceFn(() => {
    onInputChange();
    debouncing.value = false;
  }, debounce);
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val);
    }
  };
  const getLastNotDisabledIndex = (value) => findLastIndex(value, (it) => {
    const option = states.cachedOptions.get(it);
    return !(option == null ? void 0 : option.disabled) && !(option == null ? void 0 : option.states.groupDisabled);
  });
  const deletePrevTag = (e) => {
    const code = getEventCode(e);
    if (!props.multiple)
      return;
    if (code === EVENT_CODE.delete)
      return;
    if (e.target.value.length <= 0) {
      const value = castArray(props.modelValue).slice();
      const lastNotDisabledIndex = getLastNotDisabledIndex(value);
      if (lastNotDisabledIndex < 0)
        return;
      const removeTagValue = value[lastNotDisabledIndex];
      value.splice(lastNotDisabledIndex, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", removeTagValue);
    }
  };
  const deleteTag = (event, tag) => {
    const index = states.selected.indexOf(tag);
    if (index > -1 && !selectDisabled.value) {
      const value = castArray(props.modelValue).slice();
      value.splice(index, 1);
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      emit("remove-tag", tag.value);
    }
    event.stopPropagation();
    focus();
  };
  const deleteSelected = (event) => {
    event.stopPropagation();
    const value = props.multiple ? [] : valueOnClear.value;
    if (props.multiple) {
      for (const item of states.selected) {
        if (item.isDisabled)
          value.push(item.value);
      }
    }
    emit(UPDATE_MODEL_EVENT, value);
    emitChange(value);
    states.hoveringIndex = -1;
    expanded.value = false;
    emit("clear");
    focus();
  };
  const handleOptionSelect = (option) => {
    var _a;
    if (props.multiple) {
      const value = castArray((_a = props.modelValue) != null ? _a : []).slice();
      const optionIndex = getValueIndex(value, option);
      if (optionIndex > -1) {
        value.splice(optionIndex, 1);
      } else if (props.multipleLimit <= 0 || value.length < props.multipleLimit) {
        value.push(option.value);
      }
      emit(UPDATE_MODEL_EVENT, value);
      emitChange(value);
      if (option.created) {
        handleQueryChange("");
      }
      if (props.filterable && !props.reserveKeyword) {
        states.inputValue = "";
      }
    } else {
      !isEqual(props.modelValue, option.value) && emit(UPDATE_MODEL_EVENT, option.value);
      emitChange(option.value);
      expanded.value = false;
    }
    focus();
    if (expanded.value)
      return;
    nextTick(() => {
      scrollToOption(option);
    });
  };
  const getValueIndex = (arr, option) => {
    if (isUndefined(option))
      return -1;
    if (!isObject$1(option.value))
      return arr.indexOf(option.value);
    return arr.findIndex((item) => {
      return isEqual(get(item, props.valueKey), getValueKey(option));
    });
  };
  const scrollToOption = (option) => {
    var _a, _b, _c, _d, _e;
    const targetOption = isArray$1(option) ? option[option.length - 1] : option;
    let target = null;
    if (!isNil(targetOption == null ? void 0 : targetOption.value)) {
      const options = optionsArray.value.filter(
        (item) => item.value === targetOption.value
      );
      if (options.length > 0) {
        target = options[0].$el;
      }
    }
    if (tooltipRef.value && target) {
      const menu = (_d = (_c = (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef) == null ? void 0 : _c.querySelector) == null ? void 0 : _d.call(
        _c,
        `.${nsSelect.be("dropdown", "wrap")}`
      );
      if (menu) {
        scrollIntoView(menu, target);
      }
    }
    (_e = scrollbarRef.value) == null ? void 0 : _e.handleScroll();
  };
  const onOptionCreate = (vm) => {
    states.options.set(vm.value, vm);
    states.cachedOptions.set(vm.value, vm);
  };
  const onOptionDestroy = (key, vm) => {
    if (states.options.get(key) === vm) {
      states.options.delete(key);
    }
  };
  const popperRef = computed(() => {
    var _a, _b;
    return (_b = (_a = tooltipRef.value) == null ? void 0 : _a.popperRef) == null ? void 0 : _b.contentRef;
  });
  const handleMenuEnter = () => {
    states.isBeforeHide = false;
    nextTick(() => {
      var _a;
      (_a = scrollbarRef.value) == null ? void 0 : _a.update();
      scrollToOption(states.selected);
    });
  };
  const focus = () => {
    var _a;
    (_a = inputRef.value) == null ? void 0 : _a.focus();
  };
  const blur = () => {
    var _a;
    if (expanded.value) {
      expanded.value = false;
      nextTick(() => {
        var _a2;
        return (_a2 = inputRef.value) == null ? void 0 : _a2.blur();
      });
      return;
    }
    (_a = inputRef.value) == null ? void 0 : _a.blur();
  };
  const handleClearClick = (event) => {
    deleteSelected(event);
  };
  const handleClickOutside = (event) => {
    expanded.value = false;
    if (isFocused.value) {
      const _event = new FocusEvent("blur", event);
      nextTick(() => handleBlur(_event));
    }
  };
  const handleEsc = () => {
    if (states.inputValue.length > 0) {
      states.inputValue = "";
    } else {
      expanded.value = false;
    }
  };
  const toggleMenu = (event) => {
    var _a;
    if (selectDisabled.value || props.filterable && expanded.value && event && !((_a = suffixRef.value) == null ? void 0 : _a.contains(event.target)))
      return;
    if (isIOS)
      states.inputHovering = true;
    if (states.menuVisibleOnFocus) {
      states.menuVisibleOnFocus = false;
    } else {
      expanded.value = !expanded.value;
    }
  };
  const selectOption = () => {
    if (!expanded.value) {
      toggleMenu();
    } else {
      const option = optionsArray.value[states.hoveringIndex];
      if (option && !option.isDisabled) {
        handleOptionSelect(option);
      }
    }
  };
  const getValueKey = (item) => {
    return isObject$1(item.value) ? get(item.value, props.valueKey) : item.value;
  };
  const optionsAllDisabled = computed(
    () => optionsArray.value.filter((option) => option.visible).every((option) => option.isDisabled)
  );
  const showTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(0, props.maxCollapseTags) : states.selected;
  });
  const collapseTagList = computed(() => {
    if (!props.multiple) {
      return [];
    }
    return props.collapseTags ? states.selected.slice(props.maxCollapseTags) : [];
  });
  const navigateOptions = (direction) => {
    if (!expanded.value) {
      expanded.value = true;
      return;
    }
    if (states.options.size === 0 || filteredOptionsCount.value === 0 || isComposing.value)
      return;
    if (!optionsAllDisabled.value) {
      if (direction === "next") {
        states.hoveringIndex++;
        if (states.hoveringIndex === states.options.size) {
          states.hoveringIndex = 0;
        }
      } else if (direction === "prev") {
        states.hoveringIndex--;
        if (states.hoveringIndex < 0) {
          states.hoveringIndex = states.options.size - 1;
        }
      }
      const option = optionsArray.value[states.hoveringIndex];
      if (option.isDisabled || !option.visible) {
        navigateOptions(direction);
      }
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const findFocusableIndex = (arr, start, step, len) => {
    for (let i = start; i >= 0 && i < len; i += step) {
      const obj = arr[i];
      if (!(obj == null ? void 0 : obj.isDisabled) && (obj == null ? void 0 : obj.visible)) {
        return i;
      }
    }
    return null;
  };
  const focusOption = (targetIndex, mode) => {
    var _a;
    const len = states.options.size;
    if (len === 0)
      return;
    const start = clamp(targetIndex, 0, len - 1);
    const options = optionsArray.value;
    const direction = mode === "up" ? -1 : 1;
    const newIndex = (_a = findFocusableIndex(options, start, direction, len)) != null ? _a : findFocusableIndex(options, start - direction, -direction, len);
    if (newIndex != null) {
      states.hoveringIndex = newIndex;
      nextTick(() => scrollToOption(hoverOption.value));
    }
  };
  const handleKeydown = (e) => {
    const code = getEventCode(e);
    let isPreventDefault = true;
    switch (code) {
      case EVENT_CODE.up:
        navigateOptions("prev");
        break;
      case EVENT_CODE.down:
        navigateOptions("next");
        break;
      case EVENT_CODE.enter:
      case EVENT_CODE.numpadEnter:
        if (!isComposing.value) {
          selectOption();
        }
        break;
      case EVENT_CODE.esc:
        handleEsc();
        break;
      case EVENT_CODE.backspace:
        isPreventDefault = false;
        deletePrevTag(e);
        return;
      case EVENT_CODE.home:
        if (!expanded.value)
          return;
        focusOption(0, "down");
        break;
      case EVENT_CODE.end:
        if (!expanded.value)
          return;
        focusOption(states.options.size - 1, "up");
        break;
      case EVENT_CODE.pageUp:
        if (!expanded.value)
          return;
        focusOption(states.hoveringIndex - 10, "up");
        break;
      case EVENT_CODE.pageDown:
        if (!expanded.value)
          return;
        focusOption(states.hoveringIndex + 10, "down");
        break;
      default:
        isPreventDefault = false;
        break;
    }
    if (isPreventDefault) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  const getGapWidth = () => {
    if (!selectionRef.value)
      return 0;
    const style = window.getComputedStyle(selectionRef.value);
    return Number.parseFloat(style.gap || "6px");
  };
  const tagStyle = computed(() => {
    const gapWidth = getGapWidth();
    const inputSlotWidth = props.filterable ? gapWidth + MINIMUM_INPUT_WIDTH : 0;
    const maxWidth = collapseItemRef.value && props.maxCollapseTags === 1 ? states.selectionWidth - states.collapseItemWidth - gapWidth - inputSlotWidth : states.selectionWidth - inputSlotWidth;
    return { maxWidth: `${maxWidth}px` };
  });
  const collapseTagStyle = computed(() => {
    return { maxWidth: `${states.selectionWidth}px` };
  });
  const popupScroll = (data) => {
    emit("popup-scroll", data);
  };
  useResizeObserver(selectionRef, resetSelectionWidth);
  useResizeObserver(wrapperRef, updateTooltip);
  useResizeObserver(tagMenuRef, updateTagTooltip);
  useResizeObserver(collapseItemRef, resetCollapseItemWidth);
  let stop;
  watch(
    () => dropdownMenuVisible.value,
    (newVal) => {
      if (newVal) {
        stop = useResizeObserver(menuRef, updateTooltip).stop;
      } else {
        stop == null ? void 0 : stop();
        stop = void 0;
      }
      emit("visible-change", newVal);
    }
  );
  onMounted(() => {
    setSelected();
  });
  return {
    inputId,
    contentId,
    nsSelect,
    nsInput,
    states,
    isFocused,
    expanded,
    optionsArray,
    hoverOption,
    selectSize,
    filteredOptionsCount,
    updateTooltip,
    updateTagTooltip,
    debouncedOnInputChange,
    onInput,
    deletePrevTag,
    deleteTag,
    deleteSelected,
    handleOptionSelect,
    scrollToOption,
    hasModelValue,
    shouldShowPlaceholder,
    currentPlaceholder,
    mouseEnterEventName,
    needStatusIcon,
    showClearBtn,
    iconComponent,
    iconReverse,
    validateState,
    validateIcon,
    showNewOption,
    updateOptions,
    collapseTagSize,
    setSelected,
    selectDisabled,
    emptyText,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    handleKeydown,
    onOptionCreate,
    onOptionDestroy,
    handleMenuEnter,
    focus,
    blur,
    handleClearClick,
    handleClickOutside,
    handleEsc,
    toggleMenu,
    selectOption,
    getValueKey,
    navigateOptions,
    dropdownMenuVisible,
    showTagList,
    collapseTagList,
    popupScroll,
    getOption,
    tagStyle,
    collapseTagStyle,
    popperRef,
    inputRef,
    tooltipRef,
    tagTooltipRef,
    prefixRef,
    suffixRef,
    selectRef,
    wrapperRef,
    selectionRef,
    scrollbarRef,
    menuRef,
    tagMenuRef,
    collapseItemRef
  };
};
var ElOptions = defineComponent({
  name: "ElOptions",
  setup(_, { slots }) {
    const select = inject(selectKey);
    let cachedValueList = [];
    return () => {
      var _a, _b;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      const valueList = [];
      function filterOptions(children2) {
        if (!isArray$1(children2))
          return;
        children2.forEach((item) => {
          var _a2, _b2, _c, _d;
          const name = (_a2 = (item == null ? void 0 : item.type) || {}) == null ? void 0 : _a2.name;
          if (name === "ElOptionGroup") {
            filterOptions(
              !isString(item.children) && !isArray$1(item.children) && isFunction((_b2 = item.children) == null ? void 0 : _b2.default) ? (_c = item.children) == null ? void 0 : _c.default() : item.children
            );
          } else if (name === "ElOption") {
            valueList.push((_d = item.props) == null ? void 0 : _d.value);
          } else if (isArray$1(item.children)) {
            filterOptions(item.children);
          }
        });
      }
      if (children.length) {
        filterOptions((_b = children[0]) == null ? void 0 : _b.children);
      }
      if (!isEqual(valueList, cachedValueList)) {
        cachedValueList = valueList;
        if (select) {
          select.states.optionValues = valueList;
        }
      }
      return children;
    };
  }
});
const selectProps = buildProps({
  name: String,
  id: String,
  modelValue: {
    type: definePropType([
      Array,
      String,
      Number,
      Boolean,
      Object
    ]),
    default: void 0
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  automaticDropdown: Boolean,
  size: useSizeProp,
  effect: {
    type: definePropType(String),
    default: "light"
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  filterable: Boolean,
  allowCreate: Boolean,
  loading: Boolean,
  popperClass: {
    type: String,
    default: ""
  },
  popperStyle: {
    type: definePropType([String, Object])
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  remote: Boolean,
  debounce: {
    type: Number,
    default: 300
  },
  loadingText: String,
  noMatchText: String,
  noDataText: String,
  remoteMethod: {
    type: definePropType(Function)
  },
  filterMethod: {
    type: definePropType(Function)
  },
  multiple: Boolean,
  multipleLimit: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String
  },
  defaultFirstOption: Boolean,
  reserveKeyword: {
    type: Boolean,
    default: true
  },
  valueKey: {
    type: String,
    default: "value"
  },
  collapseTags: Boolean,
  collapseTagsTooltip: Boolean,
  maxCollapseTags: {
    type: Number,
    default: 1
  },
  teleported: useTooltipContentProps.teleported,
  persistent: {
    type: Boolean,
    default: true
  },
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  fitInputWidth: Boolean,
  suffixIcon: {
    type: iconPropType,
    default: arrow_down_default
  },
  tagType: { ...tagProps.type, default: "info" },
  tagEffect: { ...tagProps.effect, default: "light" },
  validateEvent: {
    type: Boolean,
    default: true
  },
  remoteShowSuffix: Boolean,
  showArrow: {
    type: Boolean,
    default: true
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: definePropType(String),
    values: Ee,
    default: "bottom-start"
  },
  fallbackPlacements: {
    type: definePropType(Array),
    default: ["bottom-start", "top-start", "right", "left"]
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  appendTo: useTooltipContentProps.appendTo,
  options: {
    type: definePropType(Array)
  },
  props: {
    type: definePropType(Object),
    default: () => defaultProps
  },
  ...useEmptyValuesProps,
  ...useAriaProps(["ariaLabel"])
});
({
  "popup-scroll": scrollbarEmits.scroll
});
const _sfc_main$1 = defineComponent({
  name: "ElOptionGroup",
  componentName: "ElOptionGroup",
  props: {
    label: String,
    disabled: Boolean
  },
  setup(props) {
    const ns = useNamespace("select");
    const groupRef = ref();
    const instance = getCurrentInstance();
    const children = ref([]);
    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props)
      })
    );
    const visible = computed(
      () => children.value.some((option) => option.visible === true)
    );
    const isOption = (node) => {
      var _a;
      return node.type.name === "ElOption" && !!((_a = node.component) == null ? void 0 : _a.proxy);
    };
    const flattedChildren2 = (node) => {
      const nodes = castArray(node);
      const children2 = [];
      nodes.forEach((child) => {
        var _a;
        if (!isVNode(child))
          return;
        if (isOption(child)) {
          children2.push(child.component.proxy);
        } else if (isArray$1(child.children) && child.children.length) {
          children2.push(...flattedChildren2(child.children));
        } else if ((_a = child.component) == null ? void 0 : _a.subTree) {
          children2.push(...flattedChildren2(child.component.subTree));
        }
      });
      return children2;
    };
    const updateChildren = () => {
      children.value = flattedChildren2(instance.subTree);
    };
    onMounted(() => {
      updateChildren();
    });
    useMutationObserver(groupRef, updateChildren, {
      attributes: true,
      subtree: true,
      childList: true
    });
    return {
      groupRef,
      visible,
      ns
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createElementBlock(
    "ul",
    {
      ref: "groupRef",
      class: normalizeClass(_ctx.ns.be("group", "wrap"))
    },
    [
      createBaseVNode(
        "li",
        {
          class: normalizeClass(_ctx.ns.be("group", "title"))
        },
        toDisplayString(_ctx.label),
        3
      ),
      createBaseVNode("li", null, [
        createBaseVNode(
          "ul",
          {
            class: normalizeClass(_ctx.ns.b("group"))
          },
          [
            renderSlot(_ctx.$slots, "default")
          ],
          2
        )
      ])
    ],
    2
  )), [
    [vShow, _ctx.visible]
  ]);
}
var OptionGroup = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/option-group.vue"]]);
const COMPONENT_NAME = "ElSelect";
const warnHandlerMap = /* @__PURE__ */ new WeakMap();
const createSelectWarnHandler = (appContext) => {
  return (...args) => {
    var _a, _b;
    const message = args[0];
    if (!message || message.includes(
      'Slot "default" invoked outside of the render function'
    ) && ((_a = args[2]) == null ? void 0 : _a.includes("ElTreeSelect")))
      return;
    const original = (_b = warnHandlerMap.get(appContext)) == null ? void 0 : _b.originalWarnHandler;
    if (original) {
      original(...args);
      return;
    }
    console.warn(...args);
  };
};
const getWarnHandlerRecord = (appContext) => {
  let record = warnHandlerMap.get(appContext);
  if (!record) {
    record = {
      originalWarnHandler: appContext.config.warnHandler,
      handler: createSelectWarnHandler(appContext),
      count: 0
    };
    warnHandlerMap.set(appContext, record);
  }
  return record;
};
const _sfc_main = defineComponent({
  name: COMPONENT_NAME,
  componentName: COMPONENT_NAME,
  components: {
    ElSelectMenu,
    ElOption: Option,
    ElOptions,
    ElOptionGroup: OptionGroup,
    ElTag,
    ElScrollbar,
    ElTooltip,
    ElIcon
  },
  directives: { ClickOutside },
  props: selectProps,
  emits: [
    UPDATE_MODEL_EVENT,
    CHANGE_EVENT,
    "remove-tag",
    "clear",
    "visible-change",
    "focus",
    "blur",
    "popup-scroll"
  ],
  setup(props, { emit, slots }) {
    const instance = getCurrentInstance();
    const warnRecord = getWarnHandlerRecord(instance.appContext);
    warnRecord.count += 1;
    instance.appContext.config.warnHandler = warnRecord.handler;
    const modelValue = computed(() => {
      const { modelValue: rawModelValue, multiple } = props;
      const fallback = multiple ? [] : void 0;
      if (isArray$1(rawModelValue)) {
        return multiple ? rawModelValue : fallback;
      }
      return multiple ? fallback : rawModelValue;
    });
    const _props = reactive({
      ...toRefs(props),
      modelValue
    });
    const API = useSelect(_props, emit);
    const { calculatorRef, inputStyle } = useCalcInputWidth();
    const { getLabel, getValue, getOptions, getDisabled } = useProps(props);
    const getOptionProps = (option) => ({
      label: getLabel(option),
      value: getValue(option),
      disabled: getDisabled(option)
    });
    const flatTreeSelectData = (data) => {
      return data.reduce((acc, item) => {
        acc.push(item);
        if (item.children && item.children.length > 0) {
          acc.push(...flatTreeSelectData(item.children));
        }
        return acc;
      }, []);
    };
    const manuallyRenderSlots = (vnodes) => {
      const children = flattedChildren(vnodes || []);
      children.forEach((item) => {
        var _a;
        if (isObject$1(item) && (item.type.name === "ElOption" || item.type.name === "ElTree")) {
          const _name = item.type.name;
          if (_name === "ElTree") {
            const treeData = ((_a = item.props) == null ? void 0 : _a.data) || [];
            const flatData = flatTreeSelectData(treeData);
            flatData.forEach((treeItem) => {
              treeItem.currentLabel = treeItem.label || (isObject$1(treeItem.value) ? "" : treeItem.value);
              API.onOptionCreate(treeItem);
            });
          } else if (_name === "ElOption") {
            const obj = { ...item.props };
            obj.currentLabel = obj.label || (isObject$1(obj.value) ? "" : obj.value);
            API.onOptionCreate(obj);
          }
        }
      });
    };
    watch(
      () => {
        var _a;
        return [(_a = slots.default) == null ? void 0 : _a.call(slots), modelValue.value];
      },
      () => {
        var _a;
        if (props.persistent || API.expanded.value) {
          return;
        }
        API.states.options.clear();
        manuallyRenderSlots((_a = slots.default) == null ? void 0 : _a.call(slots));
      },
      {
        immediate: true
      }
    );
    provide(
      selectKey,
      reactive({
        props: _props,
        states: API.states,
        selectRef: API.selectRef,
        optionsArray: API.optionsArray,
        setSelected: API.setSelected,
        handleOptionSelect: API.handleOptionSelect,
        onOptionCreate: API.onOptionCreate,
        onOptionDestroy: API.onOptionDestroy
      })
    );
    const selectedLabel = computed(() => {
      if (!props.multiple) {
        return API.states.selectedLabel;
      }
      return API.states.selected.map((i) => i.currentLabel);
    });
    onBeforeUnmount(() => {
      const record = warnHandlerMap.get(instance.appContext);
      if (!record)
        return;
      record.count -= 1;
      if (record.count <= 0) {
        instance.appContext.config.warnHandler = record.originalWarnHandler;
        warnHandlerMap.delete(instance.appContext);
      }
    });
    return {
      ...API,
      modelValue,
      selectedLabel,
      calculatorRef,
      inputStyle,
      getLabel,
      getValue,
      getOptions,
      getDisabled,
      getOptionProps
    };
  }
});
const _hoisted_1 = ["id", "name", "disabled", "autocomplete", "tabindex", "readonly", "aria-activedescendant", "aria-controls", "aria-expanded", "aria-label"];
const _hoisted_2 = ["textContent"];
const _hoisted_3 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_option = resolveComponent("el-option");
  const _component_el_option_group = resolveComponent("el-option-group");
  const _component_el_options = resolveComponent("el-options");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock(
    "div",
    mergeProps({
      ref: "selectRef",
      class: [_ctx.nsSelect.b(), _ctx.nsSelect.m(_ctx.selectSize)]
    }, {
      [toHandlerKey(_ctx.mouseEnterEventName)]: _cache[11] || (_cache[11] = ($event) => _ctx.states.inputHovering = true)
    }, {
      onMouseleave: _cache[12] || (_cache[12] = ($event) => _ctx.states.inputHovering = false)
    }),
    [
      createVNode(_component_el_tooltip, {
        ref: "tooltipRef",
        visible: _ctx.dropdownMenuVisible,
        placement: _ctx.placement,
        teleported: _ctx.teleported,
        "popper-class": [_ctx.nsSelect.e("popper"), _ctx.popperClass],
        "popper-style": _ctx.popperStyle,
        "popper-options": _ctx.popperOptions,
        "fallback-placements": _ctx.fallbackPlacements,
        effect: _ctx.effect,
        pure: "",
        trigger: "click",
        transition: `${_ctx.nsSelect.namespace.value}-zoom-in-top`,
        "stop-popper-mouse-event": false,
        "gpu-acceleration": false,
        persistent: _ctx.persistent,
        "append-to": _ctx.appendTo,
        "show-arrow": _ctx.showArrow,
        offset: _ctx.offset,
        onBeforeShow: _ctx.handleMenuEnter,
        onHide: _cache[10] || (_cache[10] = ($event) => _ctx.states.isBeforeHide = false)
      }, {
        default: withCtx(() => {
          var _a;
          return [
            createBaseVNode(
              "div",
              {
                ref: "wrapperRef",
                class: normalizeClass([
                  _ctx.nsSelect.e("wrapper"),
                  _ctx.nsSelect.is("focused", _ctx.isFocused),
                  _ctx.nsSelect.is("hovering", _ctx.states.inputHovering),
                  _ctx.nsSelect.is("filterable", _ctx.filterable),
                  _ctx.nsSelect.is("disabled", _ctx.selectDisabled)
                ]),
                onClick: _cache[7] || (_cache[7] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["prevent"]))
              },
              [
                _ctx.$slots.prefix ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    ref: "prefixRef",
                    class: normalizeClass(_ctx.nsSelect.e("prefix"))
                  },
                  [
                    renderSlot(_ctx.$slots, "prefix")
                  ],
                  2
                )) : createCommentVNode("v-if", true),
                createBaseVNode(
                  "div",
                  {
                    ref: "selectionRef",
                    class: normalizeClass([
                      _ctx.nsSelect.e("selection"),
                      _ctx.nsSelect.is(
                        "near",
                        _ctx.multiple && !_ctx.$slots.prefix && !!_ctx.states.selected.length
                      )
                    ])
                  },
                  [
                    _ctx.multiple ? renderSlot(_ctx.$slots, "tag", {
                      key: 0,
                      data: _ctx.states.selected,
                      deleteTag: _ctx.deleteTag,
                      selectDisabled: _ctx.selectDisabled
                    }, () => [
                      (openBlock(true), createElementBlock(
                        Fragment,
                        null,
                        renderList(_ctx.showTagList, (item) => {
                          return openBlock(), createElementBlock(
                            "div",
                            {
                              key: _ctx.getValueKey(item),
                              class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                            },
                            [
                              createVNode(_component_el_tag, {
                                closable: !_ctx.selectDisabled && !item.isDisabled,
                                size: _ctx.collapseTagSize,
                                type: _ctx.tagType,
                                effect: _ctx.tagEffect,
                                "disable-transitions": "",
                                style: normalizeStyle(_ctx.tagStyle),
                                onClose: ($event) => _ctx.deleteTag($event, item)
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode(
                                    "span",
                                    {
                                      class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                                    },
                                    [
                                      renderSlot(_ctx.$slots, "label", {
                                        index: item.index,
                                        label: item.currentLabel,
                                        value: item.value
                                      }, () => [
                                        createTextVNode(
                                          toDisplayString(item.currentLabel),
                                          1
                                        )
                                      ])
                                    ],
                                    2
                                  )
                                ]),
                                _: 2
                              }, 1032, ["closable", "size", "type", "effect", "style", "onClose"])
                            ],
                            2
                          );
                        }),
                        128
                      )),
                      _ctx.collapseTags && _ctx.states.selected.length > _ctx.maxCollapseTags ? (openBlock(), createBlock(_component_el_tooltip, {
                        key: 0,
                        ref: "tagTooltipRef",
                        disabled: _ctx.dropdownMenuVisible || !_ctx.collapseTagsTooltip,
                        "fallback-placements": ["bottom", "top", "right", "left"],
                        effect: _ctx.effect,
                        placement: "bottom",
                        "popper-class": _ctx.popperClass,
                        "popper-style": _ctx.popperStyle,
                        teleported: _ctx.teleported
                      }, {
                        default: withCtx(() => [
                          createBaseVNode(
                            "div",
                            {
                              ref: "collapseItemRef",
                              class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                            },
                            [
                              createVNode(_component_el_tag, {
                                closable: false,
                                size: _ctx.collapseTagSize,
                                type: _ctx.tagType,
                                effect: _ctx.tagEffect,
                                "disable-transitions": "",
                                style: normalizeStyle(_ctx.collapseTagStyle)
                              }, {
                                default: withCtx(() => [
                                  createBaseVNode(
                                    "span",
                                    {
                                      class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                                    },
                                    " + " + toDisplayString(_ctx.states.selected.length - _ctx.maxCollapseTags),
                                    3
                                  )
                                ]),
                                _: 1
                              }, 8, ["size", "type", "effect", "style"])
                            ],
                            2
                          )
                        ]),
                        content: withCtx(() => [
                          createBaseVNode(
                            "div",
                            {
                              ref: "tagMenuRef",
                              class: normalizeClass(_ctx.nsSelect.e("selection"))
                            },
                            [
                              (openBlock(true), createElementBlock(
                                Fragment,
                                null,
                                renderList(_ctx.collapseTagList, (item) => {
                                  return openBlock(), createElementBlock(
                                    "div",
                                    {
                                      key: _ctx.getValueKey(item),
                                      class: normalizeClass(_ctx.nsSelect.e("selected-item"))
                                    },
                                    [
                                      createVNode(_component_el_tag, {
                                        class: "in-tooltip",
                                        closable: !_ctx.selectDisabled && !item.isDisabled,
                                        size: _ctx.collapseTagSize,
                                        type: _ctx.tagType,
                                        effect: _ctx.tagEffect,
                                        "disable-transitions": "",
                                        onClose: ($event) => _ctx.deleteTag($event, item)
                                      }, {
                                        default: withCtx(() => [
                                          createBaseVNode(
                                            "span",
                                            {
                                              class: normalizeClass(_ctx.nsSelect.e("tags-text"))
                                            },
                                            [
                                              renderSlot(_ctx.$slots, "label", {
                                                index: item.index,
                                                label: item.currentLabel,
                                                value: item.value
                                              }, () => [
                                                createTextVNode(
                                                  toDisplayString(item.currentLabel),
                                                  1
                                                )
                                              ])
                                            ],
                                            2
                                          )
                                        ]),
                                        _: 2
                                      }, 1032, ["closable", "size", "type", "effect", "onClose"])
                                    ],
                                    2
                                  );
                                }),
                                128
                              ))
                            ],
                            2
                          )
                        ]),
                        _: 3
                      }, 8, ["disabled", "effect", "popper-class", "popper-style", "teleported"])) : createCommentVNode("v-if", true)
                    ]) : createCommentVNode("v-if", true),
                    createBaseVNode(
                      "div",
                      {
                        class: normalizeClass([
                          _ctx.nsSelect.e("selected-item"),
                          _ctx.nsSelect.e("input-wrapper"),
                          _ctx.nsSelect.is("hidden", !_ctx.filterable || _ctx.selectDisabled)
                        ])
                      },
                      [
                        withDirectives(createBaseVNode("input", {
                          id: _ctx.inputId,
                          ref: "inputRef",
                          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.states.inputValue = $event),
                          type: "text",
                          name: _ctx.name,
                          class: normalizeClass([_ctx.nsSelect.e("input"), _ctx.nsSelect.is(_ctx.selectSize)]),
                          disabled: _ctx.selectDisabled,
                          autocomplete: _ctx.autocomplete,
                          style: normalizeStyle(_ctx.inputStyle),
                          tabindex: _ctx.tabindex,
                          role: "combobox",
                          readonly: !_ctx.filterable,
                          spellcheck: "false",
                          "aria-activedescendant": ((_a = _ctx.hoverOption) == null ? void 0 : _a.id) || "",
                          "aria-controls": _ctx.contentId,
                          "aria-expanded": _ctx.dropdownMenuVisible,
                          "aria-label": _ctx.ariaLabel,
                          "aria-autocomplete": "none",
                          "aria-haspopup": "listbox",
                          onKeydown: _cache[1] || (_cache[1] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args)),
                          onCompositionstart: _cache[2] || (_cache[2] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
                          onCompositionupdate: _cache[3] || (_cache[3] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
                          onCompositionend: _cache[4] || (_cache[4] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
                          onInput: _cache[5] || (_cache[5] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
                          onClick: _cache[6] || (_cache[6] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"]))
                        }, null, 46, _hoisted_1), [
                          [vModelText, _ctx.states.inputValue]
                        ]),
                        _ctx.filterable ? (openBlock(), createElementBlock("span", {
                          key: 0,
                          ref: "calculatorRef",
                          "aria-hidden": "true",
                          class: normalizeClass(_ctx.nsSelect.e("input-calculator")),
                          textContent: toDisplayString(_ctx.states.inputValue)
                        }, null, 10, _hoisted_2)) : createCommentVNode("v-if", true)
                      ],
                      2
                    ),
                    _ctx.shouldShowPlaceholder ? (openBlock(), createElementBlock(
                      "div",
                      {
                        key: 1,
                        class: normalizeClass([
                          _ctx.nsSelect.e("selected-item"),
                          _ctx.nsSelect.e("placeholder"),
                          _ctx.nsSelect.is(
                            "transparent",
                            !_ctx.hasModelValue || _ctx.expanded && !_ctx.states.inputValue
                          )
                        ])
                      },
                      [
                        _ctx.hasModelValue ? renderSlot(_ctx.$slots, "label", {
                          key: 0,
                          index: _ctx.getOption(_ctx.modelValue).index,
                          label: _ctx.currentPlaceholder,
                          value: _ctx.modelValue
                        }, () => [
                          createBaseVNode(
                            "span",
                            null,
                            toDisplayString(_ctx.currentPlaceholder),
                            1
                          )
                        ]) : (openBlock(), createElementBlock(
                          "span",
                          _hoisted_3,
                          toDisplayString(_ctx.currentPlaceholder),
                          1
                        ))
                      ],
                      2
                    )) : createCommentVNode("v-if", true)
                  ],
                  2
                ),
                createBaseVNode(
                  "div",
                  {
                    ref: "suffixRef",
                    class: normalizeClass(_ctx.nsSelect.e("suffix"))
                  },
                  [
                    _ctx.iconComponent && !_ctx.showClearBtn ? (openBlock(), createBlock(_component_el_icon, {
                      key: 0,
                      class: normalizeClass([_ctx.nsSelect.e("caret"), _ctx.nsSelect.e("icon"), _ctx.iconReverse])
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                      ]),
                      _: 1
                    }, 8, ["class"])) : createCommentVNode("v-if", true),
                    _ctx.showClearBtn && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                      key: 1,
                      class: normalizeClass([
                        _ctx.nsSelect.e("caret"),
                        _ctx.nsSelect.e("icon"),
                        _ctx.nsSelect.e("clear")
                      ]),
                      onClick: _ctx.handleClearClick
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                      ]),
                      _: 1
                    }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true),
                    _ctx.validateState && _ctx.validateIcon && _ctx.needStatusIcon ? (openBlock(), createBlock(_component_el_icon, {
                      key: 2,
                      class: normalizeClass([
                        _ctx.nsInput.e("icon"),
                        _ctx.nsInput.e("validateIcon"),
                        _ctx.nsInput.is("loading", _ctx.validateState === "validating")
                      ])
                    }, {
                      default: withCtx(() => [
                        (openBlock(), createBlock(resolveDynamicComponent(_ctx.validateIcon)))
                      ]),
                      _: 1
                    }, 8, ["class"])) : createCommentVNode("v-if", true)
                  ],
                  2
                )
              ],
              2
            )
          ];
        }),
        content: withCtx(() => [
          createVNode(
            _component_el_select_menu,
            { ref: "menuRef" },
            {
              default: withCtx(() => [
                _ctx.$slots.header ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 0,
                    class: normalizeClass(_ctx.nsSelect.be("dropdown", "header")),
                    onClick: _cache[8] || (_cache[8] = withModifiers(() => {
                    }, ["stop"]))
                  },
                  [
                    renderSlot(_ctx.$slots, "header")
                  ],
                  2
                )) : createCommentVNode("v-if", true),
                withDirectives(createVNode(_component_el_scrollbar, {
                  id: _ctx.contentId,
                  ref: "scrollbarRef",
                  tag: "ul",
                  "wrap-class": _ctx.nsSelect.be("dropdown", "wrap"),
                  "view-class": _ctx.nsSelect.be("dropdown", "list"),
                  class: normalizeClass([_ctx.nsSelect.is("empty", _ctx.filteredOptionsCount === 0)]),
                  role: "listbox",
                  "aria-label": _ctx.ariaLabel,
                  "aria-orientation": "vertical",
                  onScroll: _ctx.popupScroll
                }, {
                  default: withCtx(() => [
                    _ctx.showNewOption ? (openBlock(), createBlock(_component_el_option, {
                      key: 0,
                      value: _ctx.states.inputValue,
                      created: true
                    }, null, 8, ["value"])) : createCommentVNode("v-if", true),
                    createVNode(_component_el_options, null, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, () => [
                          (openBlock(true), createElementBlock(
                            Fragment,
                            null,
                            renderList(_ctx.options, (option, index) => {
                              var _a;
                              return openBlock(), createElementBlock(
                                Fragment,
                                { key: index },
                                [
                                  ((_a = _ctx.getOptions(option)) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_el_option_group, {
                                    key: 0,
                                    label: _ctx.getLabel(option),
                                    disabled: _ctx.getDisabled(option)
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createElementBlock(
                                        Fragment,
                                        null,
                                        renderList(_ctx.getOptions(option), (item) => {
                                          return openBlock(), createBlock(
                                            _component_el_option,
                                            mergeProps({
                                              key: _ctx.getValue(item)
                                            }, { ref_for: true }, _ctx.getOptionProps(item)),
                                            null,
                                            16
                                          );
                                        }),
                                        128
                                      ))
                                    ]),
                                    _: 2
                                  }, 1032, ["label", "disabled"])) : (openBlock(), createBlock(
                                    _component_el_option,
                                    mergeProps({
                                      key: 1,
                                      ref_for: true
                                    }, _ctx.getOptionProps(option)),
                                    null,
                                    16
                                  ))
                                ],
                                64
                              );
                            }),
                            128
                          ))
                        ])
                      ]),
                      _: 3
                    })
                  ]),
                  _: 3
                }, 8, ["id", "wrap-class", "view-class", "class", "aria-label", "onScroll"]), [
                  [vShow, _ctx.states.options.size > 0 && !_ctx.loading]
                ]),
                _ctx.$slots.loading && _ctx.loading ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 1,
                    class: normalizeClass(_ctx.nsSelect.be("dropdown", "loading"))
                  },
                  [
                    renderSlot(_ctx.$slots, "loading")
                  ],
                  2
                )) : _ctx.loading || _ctx.filteredOptionsCount === 0 ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 2,
                    class: normalizeClass(_ctx.nsSelect.be("dropdown", "empty"))
                  },
                  [
                    renderSlot(_ctx.$slots, "empty", {}, () => [
                      createBaseVNode(
                        "span",
                        null,
                        toDisplayString(_ctx.emptyText),
                        1
                      )
                    ])
                  ],
                  2
                )) : createCommentVNode("v-if", true),
                _ctx.$slots.footer ? (openBlock(), createElementBlock(
                  "div",
                  {
                    key: 3,
                    class: normalizeClass(_ctx.nsSelect.be("dropdown", "footer")),
                    onClick: _cache[9] || (_cache[9] = withModifiers(() => {
                    }, ["stop"]))
                  },
                  [
                    renderSlot(_ctx.$slots, "footer")
                  ],
                  2
                )) : createCommentVNode("v-if", true)
              ]),
              _: 3
            },
            512
          )
        ]),
        _: 3
      }, 8, ["visible", "placement", "teleported", "popper-class", "popper-style", "popper-options", "fallback-placements", "effect", "transition", "persistent", "append-to", "show-arrow", "offset", "onBeforeShow"])
    ],
    16
  )), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/select/src/select.vue"]]);
const ElSelect = withInstall(Select, {
  Option,
  OptionGroup
});
const ElOption = withNoopInstall(Option);
withNoopInstall(OptionGroup);
export {
  ElSelect as E,
  ElOption as a,
  ElCard as b,
  selectProps as c,
  baseIteratee as d,
  escapeStringRegexp as e,
  selectKey as s
};
