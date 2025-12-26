import { b0 as isObject, bW as baseAssignValue, cE as assignValue, cF as isPrototype, cG as arrayLikeKeys, bS as isArrayLike, cH as overArg, bX as isObjectLike, cI as baseGetTag, bV as keys, cj as root, cJ as getSymbols, cK as stubArray, cL as arrayPush, cM as baseGetAllKeys, cN as Uint8Array, cO as Symbol$1, cP as getTag, cQ as baseUnary, cR as nodeUtil, bY as isBuffer, c1 as Stack, cS as getAllKeys, b_ as isArray, cn as baseGet, cT as castPath, cm as toKey, c2 as arrayMap, b1 as isNumber, cU as isFirefox, M as isString, t as buildProps, z as definePropType, ai as mutable, v as iconPropType, bA as circle_close_default, W as useSizeProp, B as getCurrentInstance, s as shallowRef, r as ref, I as watch, a as useEventListener, bB as isFunction, i as unref, U as nextTick, _ as _export_sfc, d as defineComponent, bc as useAttrs, bo as useSlots, c as computed, b as useNamespace, co as ValidateComponentsMap, cV as view_default, cW as hide_default, N as isNil, af as useResizeObserver, o as onMounted, ak as toRef, g as createElementBlock, f as openBlock, h as createCommentVNode, Q as Fragment, C as createBaseVNode, n as normalizeClass, l as renderSlot, e as createBlock, w as withCtx, D as resolveDynamicComponent, E as ElIcon, Z as mergeProps, j as withModifiers, bO as NOOP, F as toDisplayString, k as normalizeStyle, H as isClient, ae as isObject$1, q as withInstall } from "./index.De-GHSdr.js";
import { v as flatRest, u as useAriaProps, w as isFocusable, g as useAttrs$1, d as debugWarn } from "./popper.CCtuv0lm.js";
import { b as useFormSize, a as useFormDisabled, u as useFormItem, c as useFormItemInputId } from "./button.Cfu2-kaF.js";
var objectCreate = Object.create;
var baseCreate = /* @__PURE__ */ (function() {
  function object() {
  }
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = void 0;
    return result;
  };
})();
function copyArray(source, array) {
  var index = -1, length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
function arrayEach(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length;
  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1, length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = void 0;
    if (newValue === void 0) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
var objectProto$3 = Object.prototype;
var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object), result = [];
  for (var key in object) {
    if (!(key == "constructor" && (isProto || !hasOwnProperty$3.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
var getPrototype = overArg(Object.getPrototypeOf, Object);
var objectTag$1 = "[object Object]";
var funcProto = Function.prototype, objectProto$2 = Object.prototype;
var funcToString = funcProto.toString;
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
var objectCtorString = funcToString.call(Object);
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag$1) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$2.call(proto, "constructor") && proto.constructor;
  return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}
var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
var moduleExports = freeModule && freeModule.exports === freeExports;
var Buffer = moduleExports ? root.Buffer : void 0, allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}
var nativeGetSymbols = Object.getOwnPropertySymbols;
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
var objectProto$1 = Object.prototype;
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;
function initCloneArray(array) {
  var length = array.length, result = new array.constructor(length);
  if (length && typeof array[0] == "string" && hasOwnProperty$1.call(array, "index")) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
var reFlags = /\w*$/;
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}
var symbolProto = Symbol$1 ? Symbol$1.prototype : void 0, symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
var boolTag$1 = "[object Boolean]", dateTag$1 = "[object Date]", mapTag$2 = "[object Map]", numberTag$1 = "[object Number]", regexpTag$1 = "[object RegExp]", setTag$2 = "[object Set]", stringTag$1 = "[object String]", symbolTag$1 = "[object Symbol]";
var arrayBufferTag$1 = "[object ArrayBuffer]", dataViewTag$1 = "[object DataView]", float32Tag$1 = "[object Float32Array]", float64Tag$1 = "[object Float64Array]", int8Tag$1 = "[object Int8Array]", int16Tag$1 = "[object Int16Array]", int32Tag$1 = "[object Int32Array]", uint8Tag$1 = "[object Uint8Array]", uint8ClampedTag$1 = "[object Uint8ClampedArray]", uint16Tag$1 = "[object Uint16Array]", uint32Tag$1 = "[object Uint32Array]";
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$1:
      return cloneArrayBuffer(object);
    case boolTag$1:
    case dateTag$1:
      return new Ctor(+object);
    case dataViewTag$1:
      return cloneDataView(object, isDeep);
    case float32Tag$1:
    case float64Tag$1:
    case int8Tag$1:
    case int16Tag$1:
    case int32Tag$1:
    case uint8Tag$1:
    case uint8ClampedTag$1:
    case uint16Tag$1:
    case uint32Tag$1:
      return cloneTypedArray(object, isDeep);
    case mapTag$2:
      return new Ctor();
    case numberTag$1:
    case stringTag$1:
      return new Ctor(object);
    case regexpTag$1:
      return cloneRegExp(object);
    case setTag$2:
      return new Ctor();
    case symbolTag$1:
      return cloneSymbol(object);
  }
}
function initCloneObject(object) {
  return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
var mapTag$1 = "[object Map]";
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag$1;
}
var nodeIsMap = nodeUtil && nodeUtil.isMap;
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
var setTag$1 = "[object Set]";
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag$1;
}
var nodeIsSet = nodeUtil && nodeUtil.isSet;
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
var CLONE_DEEP_FLAG$1 = 1, CLONE_FLAT_FLAG$1 = 2, CLONE_SYMBOLS_FLAG$1 = 4;
var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result, isDeep = bitmask & CLONE_DEEP_FLAG$1, isFlat = bitmask & CLONE_FLAT_FLAG$1, isFull = bitmask & CLONE_SYMBOLS_FLAG$1;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== void 0) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);
  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key2) {
      result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
    });
  }
  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
  var props = isArr ? void 0 : keysFunc(value);
  arrayEach(props || value, function(subValue, key2) {
    if (props) {
      key2 = subValue;
      subValue = value[key2];
    }
    assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
  });
  return result;
}
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
function baseUnset(object, path) {
  path = castPath(path, object);
  var index = -1, length = path.length;
  if (!length) {
    return true;
  }
  var isRootPrimitive = object == null || typeof object !== "object" && typeof object !== "function";
  while (++index < length) {
    var key = path[index];
    if (typeof key !== "string") {
      continue;
    }
    if (key === "__proto__" && !hasOwnProperty.call(object, "__proto__")) {
      return false;
    }
    if (key === "constructor" && index + 1 < length && typeof path[index + 1] === "string" && path[index + 1] === "prototype") {
      if (isRootPrimitive && index === 0) {
        continue;
      }
      return false;
    }
  }
  var obj = parent(object, path);
  return obj == null || delete obj[toKey(last(path))];
}
function customOmitClone(value) {
  return isPlainObject(value) ? void 0 : value;
}
var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});
const UPDATE_MODEL_EVENT = "update:modelValue";
const CHANGE_EVENT = "change";
const INPUT_EVENT = "input";
let hiddenTextarea = void 0;
const HIDDEN_STYLE = {
  height: "0",
  visibility: "hidden",
  overflow: isFirefox() ? "" : "hidden",
  position: "absolute",
  "z-index": "-1000",
  top: "0",
  right: "0"
};
const CONTEXT_STYLE = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing",
  "word-break"
];
const looseToNumber = (val) => {
  const n = Number.parseFloat(val);
  return Number.isNaN(n) ? val : n;
};
function calculateNodeStyling(targetElement) {
  const style = window.getComputedStyle(targetElement);
  const boxSizing = style.getPropertyValue("box-sizing");
  const paddingSize = Number.parseFloat(style.getPropertyValue("padding-bottom")) + Number.parseFloat(style.getPropertyValue("padding-top"));
  const borderSize = Number.parseFloat(style.getPropertyValue("border-bottom-width")) + Number.parseFloat(style.getPropertyValue("border-top-width"));
  const contextStyle = CONTEXT_STYLE.map((name) => [
    name,
    style.getPropertyValue(name)
  ]);
  return { contextStyle, paddingSize, borderSize, boxSizing };
}
function calcTextareaHeight(targetElement, minRows = 1, maxRows) {
  var _a, _b;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement("textarea");
    ((_a = targetElement.parentNode) != null ? _a : document.body).appendChild(hiddenTextarea);
  }
  const { paddingSize, borderSize, boxSizing, contextStyle } = calculateNodeStyling(targetElement);
  contextStyle.forEach(
    ([key, value]) => hiddenTextarea == null ? void 0 : hiddenTextarea.style.setProperty(key, value)
  );
  Object.entries(HIDDEN_STYLE).forEach(
    ([key, value]) => hiddenTextarea == null ? void 0 : hiddenTextarea.style.setProperty(key, value, "important")
  );
  hiddenTextarea.value = targetElement.value || targetElement.placeholder || "";
  let height = hiddenTextarea.scrollHeight;
  const result = {};
  if (boxSizing === "border-box") {
    height = height + borderSize;
  } else if (boxSizing === "content-box") {
    height = height - paddingSize;
  }
  hiddenTextarea.value = "";
  const singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
  if (isNumber(minRows)) {
    let minHeight = singleRowHeight * minRows;
    if (boxSizing === "border-box") {
      minHeight = minHeight + paddingSize + borderSize;
    }
    height = Math.max(minHeight, height);
    result.minHeight = `${minHeight}px`;
  }
  if (isNumber(maxRows)) {
    let maxHeight = singleRowHeight * maxRows;
    if (boxSizing === "border-box") {
      maxHeight = maxHeight + paddingSize + borderSize;
    }
    height = Math.min(maxHeight, height);
  }
  result.height = `${height}px`;
  (_b = hiddenTextarea.parentNode) == null ? void 0 : _b.removeChild(hiddenTextarea);
  hiddenTextarea = void 0;
  return result;
}
const inputProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: {
    type: Boolean,
    default: void 0
  },
  modelValue: {
    type: definePropType([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  modelModifiers: {
    type: definePropType(Object),
    default: () => ({})
  },
  maxlength: {
    type: [String, Number]
  },
  minlength: {
    type: [String, Number]
  },
  type: {
    type: definePropType(String),
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: definePropType([Boolean, Object]),
    default: false
  },
  autocomplete: {
    type: definePropType(String),
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String
  },
  readonly: Boolean,
  clearable: Boolean,
  clearIcon: {
    type: iconPropType,
    default: circle_close_default
  },
  showPassword: Boolean,
  showWordLimit: Boolean,
  wordLimitPosition: {
    type: String,
    values: ["inside", "outside"],
    default: "inside"
  },
  suffixIcon: {
    type: iconPropType
  },
  prefixIcon: {
    type: iconPropType
  },
  containerRole: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  inputStyle: {
    type: definePropType([Object, Array, String]),
    default: () => mutable({})
  },
  autofocus: Boolean,
  rows: {
    type: Number,
    default: 2
  },
  ...useAriaProps(["ariaLabel"]),
  inputmode: {
    type: definePropType(String),
    default: void 0
  },
  name: String
});
const inputEmits = {
  [UPDATE_MODEL_EVENT]: (value) => isString(value),
  input: (value) => isString(value),
  change: (value, evt) => isString(value) && (evt instanceof Event || evt === void 0),
  focus: (evt) => evt instanceof FocusEvent,
  blur: (evt) => evt instanceof FocusEvent,
  clear: () => true,
  mouseleave: (evt) => evt instanceof MouseEvent,
  mouseenter: (evt) => evt instanceof MouseEvent,
  keydown: (evt) => evt instanceof Event,
  compositionstart: (evt) => evt instanceof CompositionEvent,
  compositionupdate: (evt) => evt instanceof CompositionEvent,
  compositionend: (evt) => evt instanceof CompositionEvent
};
function useFocusController(target, {
  disabled,
  beforeFocus,
  afterFocus,
  beforeBlur,
  afterBlur
} = {}) {
  const instance = getCurrentInstance();
  const { emit } = instance;
  const wrapperRef = shallowRef();
  const isFocused = ref(false);
  const handleFocus = (event) => {
    const cancelFocus = isFunction(beforeFocus) ? beforeFocus(event) : false;
    if (unref(disabled) || isFocused.value || cancelFocus)
      return;
    isFocused.value = true;
    emit("focus", event);
    afterFocus == null ? void 0 : afterFocus();
  };
  const handleBlur = (event) => {
    var _a;
    const cancelBlur = isFunction(beforeBlur) ? beforeBlur(event) : false;
    if (unref(disabled) || event.relatedTarget && ((_a = wrapperRef.value) == null ? void 0 : _a.contains(event.relatedTarget)) || cancelBlur)
      return;
    isFocused.value = false;
    emit("blur", event);
    afterBlur == null ? void 0 : afterBlur();
  };
  const handleClick = (event) => {
    var _a, _b;
    if (unref(disabled) || isFocusable(event.target) || ((_a = wrapperRef.value) == null ? void 0 : _a.contains(document.activeElement)) && wrapperRef.value !== document.activeElement)
      return;
    (_b = target.value) == null ? void 0 : _b.focus();
  };
  watch([wrapperRef, () => unref(disabled)], ([el, disabled2]) => {
    if (!el)
      return;
    if (disabled2) {
      el.removeAttribute("tabindex");
    } else {
      el.setAttribute("tabindex", "-1");
    }
  });
  useEventListener(wrapperRef, "focus", handleFocus, true);
  useEventListener(wrapperRef, "blur", handleBlur, true);
  useEventListener(wrapperRef, "click", handleClick, true);
  return {
    isFocused,
    wrapperRef,
    handleFocus,
    handleBlur
  };
}
const isKorean = (text) => /([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(text);
function useComposition({
  afterComposition,
  emit
}) {
  const isComposing = ref(false);
  const handleCompositionStart = (event) => {
    emit == null ? void 0 : emit("compositionstart", event);
    isComposing.value = true;
  };
  const handleCompositionUpdate = (event) => {
    var _a;
    emit == null ? void 0 : emit("compositionupdate", event);
    const text = (_a = event.target) == null ? void 0 : _a.value;
    const lastCharacter = text[text.length - 1] || "";
    isComposing.value = !isKorean(lastCharacter);
  };
  const handleCompositionEnd = (event) => {
    emit == null ? void 0 : emit("compositionend", event);
    if (isComposing.value) {
      isComposing.value = false;
      nextTick(() => afterComposition(event));
    }
  };
  const handleComposition = (event) => {
    event.type === "compositionend" ? handleCompositionEnd(event) : handleCompositionUpdate(event);
  };
  return {
    isComposing,
    handleComposition,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  };
}
function useCursor(input) {
  let selectionInfo;
  function recordCursor() {
    if (input.value == void 0)
      return;
    const { selectionStart, selectionEnd, value } = input.value;
    if (selectionStart == null || selectionEnd == null)
      return;
    const beforeTxt = value.slice(0, Math.max(0, selectionStart));
    const afterTxt = value.slice(Math.max(0, selectionEnd));
    selectionInfo = {
      selectionStart,
      selectionEnd,
      value,
      beforeTxt,
      afterTxt
    };
  }
  function setCursor() {
    if (input.value == void 0 || selectionInfo == void 0)
      return;
    const { value } = input.value;
    const { beforeTxt, afterTxt, selectionStart } = selectionInfo;
    if (beforeTxt == void 0 || afterTxt == void 0 || selectionStart == void 0)
      return;
    let startPos = value.length;
    if (value.endsWith(afterTxt)) {
      startPos = value.length - afterTxt.length;
    } else if (value.startsWith(beforeTxt)) {
      startPos = beforeTxt.length;
    } else {
      const beforeLastChar = beforeTxt[selectionStart - 1];
      const newIndex = value.indexOf(beforeLastChar, selectionStart - 1);
      if (newIndex !== -1) {
        startPos = newIndex + 1;
      }
    }
    input.value.setSelectionRange(startPos, startPos);
  }
  return [recordCursor, setCursor];
}
const _hoisted_1 = ["id", "name", "minlength", "maxlength", "type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder", "form", "autofocus", "role", "inputmode"];
const _hoisted_2 = ["id", "name", "minlength", "maxlength", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder", "form", "autofocus", "rows", "role"];
const COMPONENT_NAME = "ElInput";
const _sfc_main = defineComponent({
  ...{
    name: COMPONENT_NAME,
    inheritAttrs: false
  },
  __name: "input",
  props: inputProps,
  emits: inputEmits,
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const rawAttrs = useAttrs();
    const attrs = useAttrs$1();
    const slots = useSlots();
    const containerKls = computed(() => [
      props.type === "textarea" ? nsTextarea.b() : nsInput.b(),
      nsInput.m(inputSize.value),
      nsInput.is("disabled", inputDisabled.value),
      nsInput.is("exceed", inputExceed.value),
      {
        [nsInput.b("group")]: slots.prepend || slots.append,
        [nsInput.m("prefix")]: slots.prefix || props.prefixIcon,
        [nsInput.m("suffix")]: slots.suffix || props.suffixIcon || props.clearable || props.showPassword,
        [nsInput.bm("suffix", "password-clear")]: showClear.value && showPwdVisible.value,
        [nsInput.b("hidden")]: props.type === "hidden"
      },
      rawAttrs.class
    ]);
    const wrapperKls = computed(() => [
      nsInput.e("wrapper"),
      nsInput.is("focus", isFocused.value)
    ]);
    const { form: elForm, formItem: elFormItem } = useFormItem();
    const { inputId } = useFormItemInputId(props, {
      formItemContext: elFormItem
    });
    const inputSize = useFormSize();
    const inputDisabled = useFormDisabled();
    const nsInput = useNamespace("input");
    const nsTextarea = useNamespace("textarea");
    const input = shallowRef();
    const textarea = shallowRef();
    const hovering = ref(false);
    const passwordVisible = ref(false);
    const countStyle = ref();
    const textareaCalcStyle = shallowRef(props.inputStyle);
    const _ref = computed(() => input.value || textarea.value);
    const { wrapperRef, isFocused, handleFocus, handleBlur } = useFocusController(
      _ref,
      {
        disabled: inputDisabled,
        afterBlur() {
          var _a;
          if (props.validateEvent) {
            (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "blur").catch((err) => debugWarn());
          }
        }
      }
    );
    const needStatusIcon = computed(() => {
      var _a;
      return (_a = elForm == null ? void 0 : elForm.statusIcon) != null ? _a : false;
    });
    const validateState = computed(() => (elFormItem == null ? void 0 : elFormItem.validateState) || "");
    const validateIcon = computed(
      () => validateState.value && ValidateComponentsMap[validateState.value]
    );
    const passwordIcon = computed(
      () => passwordVisible.value ? view_default : hide_default
    );
    const containerStyle = computed(() => [
      rawAttrs.style
    ]);
    const textareaStyle = computed(() => [
      props.inputStyle,
      textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = computed(
      () => isNil(props.modelValue) ? "" : String(props.modelValue)
    );
    const showClear = computed(
      () => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (isFocused.value || hovering.value)
    );
    const showPwdVisible = computed(
      () => props.showPassword && !inputDisabled.value && !!nativeInputValue.value
    );
    const isWordLimitVisible = computed(
      () => props.showWordLimit && !!props.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword
    );
    const textLength = computed(() => nativeInputValue.value.length);
    const inputExceed = computed(
      () => !!isWordLimitVisible.value && textLength.value > Number(props.maxlength)
    );
    const suffixVisible = computed(
      () => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value
    );
    const hasModelModifiers = computed(
      () => !!Object.keys(props.modelModifiers).length
    );
    const [recordCursor, setCursor] = useCursor(input);
    useResizeObserver(textarea, (entries) => {
      onceInitSizeTextarea();
      if (!isWordLimitVisible.value || props.resize !== "both" && props.resize !== "horizontal")
        return;
      const entry = entries[0];
      const { width } = entry.contentRect;
      countStyle.value = {
        right: `calc(100% - ${width + 22 - 10}px)`
      };
    });
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (!isClient || type !== "textarea" || !textarea.value)
        return;
      if (autosize) {
        const minRows = isObject$1(autosize) ? autosize.minRows : void 0;
        const maxRows = isObject$1(autosize) ? autosize.maxRows : void 0;
        const textareaStyle2 = calcTextareaHeight(textarea.value, minRows, maxRows);
        textareaCalcStyle.value = {
          overflowY: "hidden",
          ...textareaStyle2
        };
        nextTick(() => {
          textarea.value.offsetHeight;
          textareaCalcStyle.value = textareaStyle2;
        });
      } else {
        textareaCalcStyle.value = {
          minHeight: calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const createOnceInitResize = (resizeTextarea2) => {
      let isInit = false;
      return () => {
        var _a;
        if (isInit || !props.autosize)
          return;
        const isElHidden = ((_a = textarea.value) == null ? void 0 : _a.offsetParent) === null;
        if (!isElHidden) {
          setTimeout(resizeTextarea2);
          isInit = true;
        }
      };
    };
    const onceInitSizeTextarea = createOnceInitResize(resizeTextarea);
    const setNativeInputValue = () => {
      const input2 = _ref.value;
      const formatterValue = props.formatter ? props.formatter(nativeInputValue.value) : nativeInputValue.value;
      if (!input2 || input2.value === formatterValue || props.type === "file")
        return;
      input2.value = formatterValue;
    };
    const formatValue = (value) => {
      const { trim, number } = props.modelModifiers;
      if (trim) {
        value = value.trim();
      }
      if (number) {
        value = `${looseToNumber(value)}`;
      }
      if (props.formatter && props.parser) {
        value = props.parser(value);
      }
      return value;
    };
    const handleInput = async (event) => {
      if (isComposing.value)
        return;
      const { lazy } = props.modelModifiers;
      let { value } = event.target;
      if (lazy) {
        emit(INPUT_EVENT, value);
        return;
      }
      value = formatValue(value);
      if (String(value) === nativeInputValue.value) {
        if (props.formatter) {
          setNativeInputValue();
        }
        return;
      }
      recordCursor();
      emit(UPDATE_MODEL_EVENT, value);
      emit(INPUT_EVENT, value);
      await nextTick();
      if (props.formatter && props.parser || !hasModelModifiers.value) {
        setNativeInputValue();
      }
      setCursor();
    };
    const handleChange = async (event) => {
      let { value } = event.target;
      value = formatValue(value);
      if (props.modelModifiers.lazy) {
        emit(UPDATE_MODEL_EVENT, value);
      }
      emit(CHANGE_EVENT, value, event);
      await nextTick();
      setNativeInputValue();
    };
    const {
      isComposing,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd
    } = useComposition({ emit, afterComposition: handleInput });
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
    };
    const focus = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.focus();
    };
    const blur = () => {
      var _a;
      return (_a = _ref.value) == null ? void 0 : _a.blur();
    };
    const handleMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const handleMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    const select = () => {
      var _a;
      (_a = _ref.value) == null ? void 0 : _a.select();
    };
    const clear = () => {
      emit(UPDATE_MODEL_EVENT, "");
      emit(CHANGE_EVENT, "");
      emit("clear");
      emit(INPUT_EVENT, "");
    };
    watch(
      () => props.modelValue,
      () => {
        var _a;
        nextTick(() => resizeTextarea());
        if (props.validateEvent) {
          (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change").catch((err) => debugWarn());
        }
      }
    );
    watch(nativeInputValue, (newValue) => {
      if (!_ref.value) {
        return;
      }
      const { trim, number } = props.modelModifiers;
      const elValue = _ref.value.value;
      const displayValue = (number || props.type === "number") && !/^0\d/.test(elValue) ? `${looseToNumber(elValue)}` : elValue;
      if (displayValue === newValue) {
        return;
      }
      if (document.activeElement === _ref.value && _ref.value.type !== "range") {
        if (trim && displayValue.trim() === newValue) {
          return;
        }
      }
      setNativeInputValue();
    });
    watch(
      () => props.type,
      async () => {
        await nextTick();
        setNativeInputValue();
        resizeTextarea();
      }
    );
    onMounted(() => {
      if (!props.formatter && props.parser) ;
      setNativeInputValue();
      nextTick(resizeTextarea);
    });
    __expose({
      input,
      textarea,
      ref: _ref,
      textareaStyle,
      autosize: toRef(props, "autosize"),
      isComposing,
      focus,
      blur,
      select,
      clear,
      resizeTextarea
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(
        "div",
        {
          class: normalizeClass([
            containerKls.value,
            {
              [unref(nsInput).bm("group", "append")]: _ctx.$slots.append,
              [unref(nsInput).bm("group", "prepend")]: _ctx.$slots.prepend
            }
          ]),
          style: normalizeStyle(containerStyle.value),
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave
        },
        [
          createCommentVNode(" input "),
          _ctx.type !== "textarea" ? (openBlock(), createElementBlock(
            Fragment,
            { key: 0 },
            [
              createCommentVNode(" prepend slot "),
              _ctx.$slots.prepend ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 0,
                  class: normalizeClass(unref(nsInput).be("group", "prepend"))
                },
                [
                  renderSlot(_ctx.$slots, "prepend")
                ],
                2
              )) : createCommentVNode("v-if", true),
              createBaseVNode(
                "div",
                {
                  ref_key: "wrapperRef",
                  ref: wrapperRef,
                  class: normalizeClass(wrapperKls.value)
                },
                [
                  createCommentVNode(" prefix slot "),
                  _ctx.$slots.prefix || _ctx.prefixIcon ? (openBlock(), createElementBlock(
                    "span",
                    {
                      key: 0,
                      class: normalizeClass(unref(nsInput).e("prefix"))
                    },
                    [
                      createBaseVNode(
                        "span",
                        {
                          class: normalizeClass(unref(nsInput).e("prefix-inner"))
                        },
                        [
                          renderSlot(_ctx.$slots, "prefix"),
                          _ctx.prefixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                            key: 0,
                            class: normalizeClass(unref(nsInput).e("icon"))
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(_ctx.prefixIcon)))
                            ]),
                            _: 1
                          }, 8, ["class"])) : createCommentVNode("v-if", true)
                        ],
                        2
                      )
                    ],
                    2
                  )) : createCommentVNode("v-if", true),
                  createBaseVNode("input", mergeProps({
                    id: unref(inputId),
                    ref_key: "input",
                    ref: input,
                    class: unref(nsInput).e("inner")
                  }, unref(attrs), {
                    name: _ctx.name,
                    minlength: _ctx.minlength,
                    maxlength: _ctx.maxlength,
                    type: _ctx.showPassword ? passwordVisible.value ? "text" : "password" : _ctx.type,
                    disabled: unref(inputDisabled),
                    readonly: _ctx.readonly,
                    autocomplete: _ctx.autocomplete,
                    tabindex: _ctx.tabindex,
                    "aria-label": _ctx.ariaLabel,
                    placeholder: _ctx.placeholder,
                    style: _ctx.inputStyle,
                    form: _ctx.form,
                    autofocus: _ctx.autofocus,
                    role: _ctx.containerRole,
                    inputmode: _ctx.inputmode,
                    onCompositionstart: _cache[0] || (_cache[0] = (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
                    onCompositionupdate: _cache[1] || (_cache[1] = (...args) => unref(handleCompositionUpdate) && unref(handleCompositionUpdate)(...args)),
                    onCompositionend: _cache[2] || (_cache[2] = (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args)),
                    onInput: handleInput,
                    onChange: handleChange,
                    onKeydown: handleKeydown
                  }), null, 16, _hoisted_1),
                  createCommentVNode(" suffix slot "),
                  suffixVisible.value ? (openBlock(), createElementBlock(
                    "span",
                    {
                      key: 1,
                      class: normalizeClass(unref(nsInput).e("suffix"))
                    },
                    [
                      createBaseVNode(
                        "span",
                        {
                          class: normalizeClass(unref(nsInput).e("suffix-inner"))
                        },
                        [
                          !showClear.value || !showPwdVisible.value || !isWordLimitVisible.value ? (openBlock(), createElementBlock(
                            Fragment,
                            { key: 0 },
                            [
                              renderSlot(_ctx.$slots, "suffix"),
                              _ctx.suffixIcon ? (openBlock(), createBlock(unref(ElIcon), {
                                key: 0,
                                class: normalizeClass(unref(nsInput).e("icon"))
                              }, {
                                default: withCtx(() => [
                                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.suffixIcon)))
                                ]),
                                _: 1
                              }, 8, ["class"])) : createCommentVNode("v-if", true)
                            ],
                            64
                          )) : createCommentVNode("v-if", true),
                          showClear.value ? (openBlock(), createBlock(unref(ElIcon), {
                            key: 1,
                            class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("clear")]),
                            onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                            onClick: clear
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                            ]),
                            _: 1
                          }, 8, ["class", "onMousedown"])) : createCommentVNode("v-if", true),
                          showPwdVisible.value ? (openBlock(), createBlock(unref(ElIcon), {
                            key: 2,
                            class: normalizeClass([unref(nsInput).e("icon"), unref(nsInput).e("password")]),
                            onClick: handlePasswordVisible,
                            onMousedown: withModifiers(unref(NOOP), ["prevent"]),
                            onMouseup: withModifiers(unref(NOOP), ["prevent"])
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(passwordIcon.value)))
                            ]),
                            _: 1
                          }, 8, ["class", "onMousedown", "onMouseup"])) : createCommentVNode("v-if", true),
                          isWordLimitVisible.value ? (openBlock(), createElementBlock(
                            "span",
                            {
                              key: 3,
                              class: normalizeClass([
                                unref(nsInput).e("count"),
                                unref(nsInput).is("outside", _ctx.wordLimitPosition === "outside")
                              ])
                            },
                            [
                              createBaseVNode(
                                "span",
                                {
                                  class: normalizeClass(unref(nsInput).e("count-inner"))
                                },
                                toDisplayString(textLength.value) + " / " + toDisplayString(_ctx.maxlength),
                                3
                              )
                            ],
                            2
                          )) : createCommentVNode("v-if", true),
                          validateState.value && validateIcon.value && needStatusIcon.value ? (openBlock(), createBlock(unref(ElIcon), {
                            key: 4,
                            class: normalizeClass([
                              unref(nsInput).e("icon"),
                              unref(nsInput).e("validateIcon"),
                              unref(nsInput).is("loading", validateState.value === "validating")
                            ])
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(resolveDynamicComponent(validateIcon.value)))
                            ]),
                            _: 1
                          }, 8, ["class"])) : createCommentVNode("v-if", true)
                        ],
                        2
                      )
                    ],
                    2
                  )) : createCommentVNode("v-if", true)
                ],
                2
              ),
              createCommentVNode(" append slot "),
              _ctx.$slots.append ? (openBlock(), createElementBlock(
                "div",
                {
                  key: 1,
                  class: normalizeClass(unref(nsInput).be("group", "append"))
                },
                [
                  renderSlot(_ctx.$slots, "append")
                ],
                2
              )) : createCommentVNode("v-if", true)
            ],
            64
          )) : (openBlock(), createElementBlock(
            Fragment,
            { key: 1 },
            [
              createCommentVNode(" textarea "),
              createBaseVNode("textarea", mergeProps({
                id: unref(inputId),
                ref_key: "textarea",
                ref: textarea,
                class: [unref(nsTextarea).e("inner"), unref(nsInput).is("focus", unref(isFocused))]
              }, unref(attrs), {
                name: _ctx.name,
                minlength: _ctx.minlength,
                maxlength: _ctx.maxlength,
                tabindex: _ctx.tabindex,
                disabled: unref(inputDisabled),
                readonly: _ctx.readonly,
                autocomplete: _ctx.autocomplete,
                style: textareaStyle.value,
                "aria-label": _ctx.ariaLabel,
                placeholder: _ctx.placeholder,
                form: _ctx.form,
                autofocus: _ctx.autofocus,
                rows: _ctx.rows,
                role: _ctx.containerRole,
                onCompositionstart: _cache[3] || (_cache[3] = (...args) => unref(handleCompositionStart) && unref(handleCompositionStart)(...args)),
                onCompositionupdate: _cache[4] || (_cache[4] = (...args) => unref(handleCompositionUpdate) && unref(handleCompositionUpdate)(...args)),
                onCompositionend: _cache[5] || (_cache[5] = (...args) => unref(handleCompositionEnd) && unref(handleCompositionEnd)(...args)),
                onInput: handleInput,
                onFocus: _cache[6] || (_cache[6] = (...args) => unref(handleFocus) && unref(handleFocus)(...args)),
                onBlur: _cache[7] || (_cache[7] = (...args) => unref(handleBlur) && unref(handleBlur)(...args)),
                onChange: handleChange,
                onKeydown: handleKeydown
              }), null, 16, _hoisted_2),
              isWordLimitVisible.value ? (openBlock(), createElementBlock(
                "span",
                {
                  key: 0,
                  style: normalizeStyle(countStyle.value),
                  class: normalizeClass([
                    unref(nsInput).e("count"),
                    unref(nsInput).is("outside", _ctx.wordLimitPosition === "outside")
                  ])
                },
                toDisplayString(textLength.value) + " / " + toDisplayString(_ctx.maxlength),
                7
              )) : createCommentVNode("v-if", true)
            ],
            64
          ))
        ],
        38
      );
    };
  }
});
var Input = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const ElInput = withInstall(Input);
export {
  CHANGE_EVENT as C,
  ElInput as E,
  INPUT_EVENT as I,
  UPDATE_MODEL_EVENT as U,
  copyArray as a,
  cloneBuffer as b,
  copyObject as c,
  cloneTypedArray as d,
  initCloneObject as e,
  useComposition as f,
  baseClone as g,
  isPlainObject as i,
  keysIn as k,
  omit as o,
  useFocusController as u
};
