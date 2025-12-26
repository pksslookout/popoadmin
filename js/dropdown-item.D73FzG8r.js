import { E as ElButton, b as useFormSize, d as useId } from "./button.Cfu2-kaF.js";
import { a as useTooltipContentProps, r as roleTypes, h as useTooltipTriggerProps, O as OnlyChild, E as ElTooltip, i as castArray } from "./popper.CCtuv0lm.js";
import { E as ElScrollbar, c as composeRefs } from "./scrollbar.BF0eOpSA.js";
import { _ as _export_sfc, d as defineComponent, l as renderSlot, r as ref, A as inject, o as onMounted, i as unref, aa as onBeforeUnmount, y as provide, t as buildProps, z as definePropType, K as getEventCode, c as computed, bK as composeEventHandlers, ak as toRef, al as readonly, I as watch, a as useEventListener, U as nextTick, au as resolveComponent, e as createBlock, f as openBlock, w as withCtx, m as createVNode, aV as normalizeProps, aW as guardReactiveProps, v as iconPropType, L as EVENT_CODE, g as createElementBlock, h as createCommentVNode, be as createSlots, Z as mergeProps, n as normalizeClass, a0 as arrow_down_default, E as ElIcon, b as useNamespace, x as useLocale, J as addUnit, B as getCurrentInstance, C as createBaseVNode, D as resolveDynamicComponent, j as withModifiers, Q as Fragment, bL as whenMouse, k as normalizeStyle, q as withInstall, G as withNoopInstall } from "./index.De-GHSdr.js";
const _sfc_main$8 = defineComponent({
  inheritAttrs: false
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var Collection = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const _sfc_main$7 = defineComponent({
  name: "ElCollectionItem",
  inheritAttrs: false
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var CollectionItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const COLLECTION_ITEM_SIGN = `data-el-collection-item`;
const createCollectionWithScope = (name) => {
  const COLLECTION_NAME = `El${name}Collection`;
  const COLLECTION_ITEM_NAME = `${COLLECTION_NAME}Item`;
  const COLLECTION_INJECTION_KEY2 = Symbol(COLLECTION_NAME);
  const COLLECTION_ITEM_INJECTION_KEY2 = Symbol(COLLECTION_ITEM_NAME);
  const ElCollection2 = Object.assign({}, Collection, {
    name: COLLECTION_NAME,
    setup() {
      const collectionRef = ref();
      const itemMap = /* @__PURE__ */ new Map();
      const getItems = () => {
        const collectionEl = unref(collectionRef);
        if (!collectionEl)
          return [];
        const orderedNodes = Array.from(
          collectionEl.querySelectorAll(`[${COLLECTION_ITEM_SIGN}]`)
        );
        const items = [...itemMap.values()];
        return items.sort(
          (a, b) => orderedNodes.indexOf(a.ref) - orderedNodes.indexOf(b.ref)
        );
      };
      provide(COLLECTION_INJECTION_KEY2, {
        itemMap,
        getItems,
        collectionRef
      });
    }
  });
  const ElCollectionItem2 = Object.assign({}, CollectionItem, {
    name: COLLECTION_ITEM_NAME,
    setup(_, { attrs }) {
      const collectionItemRef = ref();
      const collectionInjection = inject(COLLECTION_INJECTION_KEY2, void 0);
      provide(COLLECTION_ITEM_INJECTION_KEY2, {
        collectionItemRef
      });
      onMounted(() => {
        const collectionItemEl = unref(collectionItemRef);
        if (collectionItemEl) {
          collectionInjection.itemMap.set(collectionItemEl, {
            ref: collectionItemEl,
            ...attrs
          });
        }
      });
      onBeforeUnmount(() => {
        const collectionItemEl = unref(collectionItemRef);
        collectionInjection.itemMap.delete(collectionItemEl);
      });
    }
  });
  return {
    COLLECTION_INJECTION_KEY: COLLECTION_INJECTION_KEY2,
    COLLECTION_ITEM_INJECTION_KEY: COLLECTION_ITEM_INJECTION_KEY2,
    ElCollection: ElCollection2,
    ElCollectionItem: ElCollectionItem2
  };
};
const rovingFocusGroupProps = buildProps({
  style: { type: definePropType([String, Array, Object]) },
  currentTabId: {
    type: definePropType(String)
  },
  defaultCurrentTabId: String,
  loop: Boolean,
  dir: {
    type: String,
    values: ["ltr", "rtl"],
    default: "ltr"
  },
  orientation: {
    type: definePropType(String)
  },
  onBlur: Function,
  onFocus: Function,
  onMousedown: Function
});
const {
  ElCollection,
  ElCollectionItem,
  COLLECTION_INJECTION_KEY,
  COLLECTION_ITEM_INJECTION_KEY
} = createCollectionWithScope("RovingFocusGroup");
const ROVING_FOCUS_GROUP_INJECTION_KEY = Symbol("elRovingFocusGroup");
const ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY = Symbol("elRovingFocusGroupItem");
const MAP_KEY_TO_FOCUS_INTENT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
const getDirectionAwareKey = (key, dir) => {
  return key;
};
const getFocusIntent = (event, orientation, dir) => {
  const code = getEventCode(event);
  const key = getDirectionAwareKey(code);
  return MAP_KEY_TO_FOCUS_INTENT[key];
};
const reorderArray = (array, atIdx) => {
  return array.map((_, idx) => array[(idx + atIdx) % array.length]);
};
const focusFirst = (elements) => {
  const { activeElement: prevActive } = document;
  for (const element of elements) {
    if (element === prevActive)
      return;
    element.focus();
    if (prevActive !== document.activeElement)
      return;
  }
};
const CURRENT_TAB_ID_CHANGE_EVT = "currentTabIdChange";
const ENTRY_FOCUS_EVT = "rovingFocusGroup.entryFocus";
const EVT_OPTS = { bubbles: false, cancelable: true };
const _sfc_main$6 = defineComponent({
  name: "ElRovingFocusGroupImpl",
  inheritAttrs: false,
  props: rovingFocusGroupProps,
  emits: [CURRENT_TAB_ID_CHANGE_EVT, "entryFocus"],
  setup(props, { emit }) {
    var _a;
    const currentTabbedId = ref(
      (_a = props.currentTabId || props.defaultCurrentTabId) != null ? _a : null
    );
    const isBackingOut = ref(false);
    const isClickFocus = ref(false);
    const rovingFocusGroupRef = ref();
    const { getItems } = inject(
      COLLECTION_INJECTION_KEY,
      void 0
    );
    const rovingFocusGroupRootStyle = computed(() => {
      return [
        {
          outline: "none"
        },
        props.style
      ];
    });
    const onItemFocus = (tabbedId) => {
      emit(CURRENT_TAB_ID_CHANGE_EVT, tabbedId);
    };
    const onItemShiftTab = () => {
      isBackingOut.value = true;
    };
    const onMousedown = composeEventHandlers(
      (e) => {
        var _a2;
        (_a2 = props.onMousedown) == null ? void 0 : _a2.call(props, e);
      },
      () => {
        isClickFocus.value = true;
      }
    );
    const onFocus = composeEventHandlers(
      (e) => {
        var _a2;
        (_a2 = props.onFocus) == null ? void 0 : _a2.call(props, e);
      },
      (e) => {
        const isKeyboardFocus = !unref(isClickFocus);
        const { target, currentTarget } = e;
        if (target === currentTarget && isKeyboardFocus && !unref(isBackingOut)) {
          const entryFocusEvt = new Event(ENTRY_FOCUS_EVT, EVT_OPTS);
          currentTarget == null ? void 0 : currentTarget.dispatchEvent(entryFocusEvt);
          if (!entryFocusEvt.defaultPrevented) {
            const items = getItems().filter((item) => item.focusable);
            const activeItem = items.find((item) => item.active);
            const currentItem = items.find(
              (item) => item.id === unref(currentTabbedId)
            );
            const candidates = [activeItem, currentItem, ...items].filter(
              Boolean
            );
            const candidateNodes = candidates.map((item) => item.ref);
            focusFirst(candidateNodes);
          }
        }
        isClickFocus.value = false;
      }
    );
    const onBlur = composeEventHandlers(
      (e) => {
        var _a2;
        (_a2 = props.onBlur) == null ? void 0 : _a2.call(props, e);
      },
      () => {
        isBackingOut.value = false;
      }
    );
    const handleEntryFocus = (...args) => {
      emit("entryFocus", ...args);
    };
    const onKeydown = (e) => {
      const focusIntent = getFocusIntent(e);
      if (focusIntent) {
        e.preventDefault();
        const items = getItems().filter((item) => item.focusable);
        let elements = items.map((item) => item.ref);
        switch (focusIntent) {
          case "last": {
            elements.reverse();
            break;
          }
          case "prev":
          case "next": {
            if (focusIntent === "prev") {
              elements.reverse();
            }
            const currentIdx = elements.indexOf(e.currentTarget);
            elements = props.loop ? reorderArray(elements, currentIdx + 1) : elements.slice(currentIdx + 1);
            break;
          }
        }
        nextTick(() => {
          focusFirst(elements);
        });
      }
    };
    provide(ROVING_FOCUS_GROUP_INJECTION_KEY, {
      currentTabbedId: readonly(currentTabbedId),
      loop: toRef(props, "loop"),
      tabIndex: computed(() => {
        return unref(isBackingOut) ? -1 : 0;
      }),
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      orientation: toRef(props, "orientation"),
      dir: toRef(props, "dir"),
      onItemFocus,
      onItemShiftTab,
      onBlur,
      onFocus,
      onMousedown,
      onKeydown
    });
    watch(
      () => props.currentTabId,
      (val) => {
        currentTabbedId.value = val != null ? val : null;
      }
    );
    useEventListener(rovingFocusGroupRef, ENTRY_FOCUS_EVT, handleEntryFocus);
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return renderSlot(_ctx.$slots, "default");
}
var ElRovingFocusGroupImpl = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);
const _sfc_main$5 = defineComponent({
  name: "ElRovingFocusGroup",
  components: {
    ElFocusGroupCollection: ElCollection,
    ElRovingFocusGroupImpl
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_group_impl = resolveComponent("el-roving-focus-group-impl");
  const _component_el_focus_group_collection = resolveComponent("el-focus-group-collection");
  return openBlock(), createBlock(_component_el_focus_group_collection, null, {
    default: withCtx(() => [
      createVNode(
        _component_el_roving_focus_group_impl,
        normalizeProps(guardReactiveProps(_ctx.$attrs)),
        {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "default")
          ]),
          _: 3
        },
        16
      )
    ]),
    _: 3
  });
}
var ElRovingFocusGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);
const dropdownProps = buildProps({
  trigger: {
    ...useTooltipTriggerProps.trigger,
    type: definePropType([
      String,
      Array
    ])
  },
  triggerKeys: {
    type: definePropType(Array),
    default: () => [
      EVENT_CODE.enter,
      EVENT_CODE.numpadEnter,
      EVENT_CODE.space,
      EVENT_CODE.down
    ]
  },
  virtualTriggering: useTooltipTriggerProps.virtualTriggering,
  virtualRef: useTooltipTriggerProps.virtualRef,
  effect: {
    ...useTooltipContentProps.effect,
    default: "light"
  },
  type: {
    type: definePropType(String)
  },
  placement: {
    type: definePropType(String),
    default: "bottom"
  },
  popperOptions: {
    type: definePropType(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: true
  },
  loop: {
    type: Boolean,
    default: true
  },
  showArrow: {
    type: Boolean,
    default: true
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: definePropType([Number, String]),
    default: 0
  },
  maxHeight: {
    type: definePropType([Number, String]),
    default: ""
  },
  popperClass: useTooltipContentProps.popperClass,
  popperStyle: useTooltipContentProps.popperStyle,
  disabled: Boolean,
  role: {
    type: String,
    values: roleTypes,
    default: "menu"
  },
  buttonProps: {
    type: definePropType(Object)
  },
  teleported: useTooltipContentProps.teleported,
  appendTo: useTooltipContentProps.appendTo,
  persistent: {
    type: Boolean,
    default: true
  }
});
const dropdownItemProps = buildProps({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: iconPropType
  }
});
const dropdownMenuProps = buildProps({
  onKeydown: { type: definePropType(Function) }
});
const DROPDOWN_INJECTION_KEY = Symbol("elDropdown");
const DROPDOWN_INSTANCE_INJECTION_KEY = "elDropdown";
const { ButtonGroup: ElButtonGroup } = ElButton;
const _sfc_main$4 = defineComponent({
  name: "ElDropdown",
  components: {
    ElButton,
    ElButtonGroup,
    ElScrollbar,
    ElTooltip,
    ElRovingFocusGroup,
    ElOnlyChild: OnlyChild,
    ElIcon,
    ArrowDown: arrow_down_default
  },
  props: dropdownProps,
  emits: ["visible-change", "click", "command"],
  setup(props, { emit }) {
    const _instance = getCurrentInstance();
    const ns = useNamespace("dropdown");
    const { t } = useLocale();
    const triggeringElementRef = ref();
    const referenceElementRef = ref();
    const popperRef = ref();
    const contentRef = ref();
    const scrollbar = ref(null);
    const currentTabId = ref(null);
    const isUsingKeyboard = ref(false);
    const wrapStyle = computed(() => ({
      maxHeight: addUnit(props.maxHeight)
    }));
    const dropdownTriggerKls = computed(() => [ns.m(dropdownSize.value)]);
    const trigger = computed(() => castArray(props.trigger));
    const defaultTriggerId = useId().value;
    const triggerId = computed(() => props.id || defaultTriggerId);
    function handleClick() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onClose(void 0, 0);
    }
    function handleClose() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onClose();
    }
    function handleOpen() {
      var _a;
      (_a = popperRef.value) == null ? void 0 : _a.onOpen();
    }
    const dropdownSize = useFormSize();
    function commandHandler(...args) {
      emit("command", ...args);
    }
    function onItemEnter() {
    }
    function onItemLeave() {
      const contentEl = unref(contentRef);
      trigger.value.includes("hover") && (contentEl == null ? void 0 : contentEl.focus({
        preventScroll: true
      }));
      currentTabId.value = null;
    }
    function handleCurrentTabIdChange(id) {
      currentTabId.value = id;
    }
    function handleBeforeShowTooltip() {
      emit("visible-change", true);
    }
    function handleShowTooltip(event) {
      var _a;
      isUsingKeyboard.value = (event == null ? void 0 : event.type) === "keydown";
      (_a = contentRef.value) == null ? void 0 : _a.focus();
    }
    function handleBeforeHideTooltip() {
      emit("visible-change", false);
    }
    provide(DROPDOWN_INJECTION_KEY, {
      contentRef,
      role: computed(() => props.role),
      triggerId,
      isUsingKeyboard,
      onItemEnter,
      onItemLeave,
      handleClose
    });
    provide(DROPDOWN_INSTANCE_INJECTION_KEY, {
      instance: _instance,
      dropdownSize,
      handleClick,
      commandHandler,
      trigger: toRef(props, "trigger"),
      hideOnClick: toRef(props, "hideOnClick")
    });
    const handlerMainButtonClick = (event) => {
      emit("click", event);
    };
    return {
      t,
      ns,
      scrollbar,
      wrapStyle,
      dropdownTriggerKls,
      dropdownSize,
      triggerId,
      currentTabId,
      handleCurrentTabIdChange,
      handlerMainButtonClick,
      handleClose,
      handleOpen,
      handleBeforeShowTooltip,
      handleShowTooltip,
      handleBeforeHideTooltip,
      popperRef,
      contentRef,
      triggeringElementRef,
      referenceElementRef
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_el_roving_focus_group = resolveComponent("el-roving-focus-group");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_only_child = resolveComponent("el-only-child");
  const _component_el_tooltip = resolveComponent("el-tooltip");
  const _component_el_button = resolveComponent("el-button");
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_button_group = resolveComponent("el-button-group");
  return openBlock(), createElementBlock(
    "div",
    {
      class: normalizeClass([_ctx.ns.b(), _ctx.ns.is("disabled", _ctx.disabled)])
    },
    [
      createVNode(_component_el_tooltip, {
        ref: "popperRef",
        role: _ctx.role,
        effect: _ctx.effect,
        "fallback-placements": ["bottom", "top"],
        "popper-options": _ctx.popperOptions,
        "gpu-acceleration": false,
        placement: _ctx.placement,
        "popper-class": [_ctx.ns.e("popper"), _ctx.popperClass],
        "popper-style": _ctx.popperStyle,
        trigger: _ctx.trigger,
        "trigger-keys": _ctx.triggerKeys,
        "trigger-target-el": _ctx.contentRef,
        "show-arrow": _ctx.showArrow,
        "show-after": _ctx.trigger === "hover" ? _ctx.showTimeout : 0,
        "hide-after": _ctx.trigger === "hover" ? _ctx.hideTimeout : 0,
        "virtual-ref": (_a = _ctx.virtualRef) != null ? _a : _ctx.triggeringElementRef,
        "virtual-triggering": _ctx.virtualTriggering || _ctx.splitButton,
        disabled: _ctx.disabled,
        transition: `${_ctx.ns.namespace.value}-zoom-in-top`,
        teleported: _ctx.teleported,
        "append-to": _ctx.appendTo,
        pure: "",
        "focus-on-target": "",
        persistent: _ctx.persistent,
        onBeforeShow: _ctx.handleBeforeShowTooltip,
        onShow: _ctx.handleShowTooltip,
        onBeforeHide: _ctx.handleBeforeHideTooltip
      }, createSlots({
        content: withCtx(() => [
          createVNode(_component_el_scrollbar, {
            ref: "scrollbar",
            "wrap-style": _ctx.wrapStyle,
            tag: "div",
            "view-class": _ctx.ns.e("list")
          }, {
            default: withCtx(() => [
              createVNode(_component_el_roving_focus_group, {
                loop: _ctx.loop,
                "current-tab-id": _ctx.currentTabId,
                orientation: "horizontal",
                onCurrentTabIdChange: _ctx.handleCurrentTabIdChange
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "dropdown")
                ]),
                _: 3
              }, 8, ["loop", "current-tab-id", "onCurrentTabIdChange"])
            ]),
            _: 3
          }, 8, ["wrap-style", "view-class"])
        ]),
        _: 2
      }, [
        !_ctx.splitButton ? {
          name: "default",
          fn: withCtx(() => [
            createVNode(_component_el_only_child, {
              id: _ctx.triggerId,
              ref: "triggeringElementRef",
              role: "button",
              tabindex: _ctx.tabindex
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "default")
              ]),
              _: 3
            }, 8, ["id", "tabindex"])
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["role", "effect", "popper-options", "placement", "popper-class", "popper-style", "trigger", "trigger-keys", "trigger-target-el", "show-arrow", "show-after", "hide-after", "virtual-ref", "virtual-triggering", "disabled", "transition", "teleported", "append-to", "persistent", "onBeforeShow", "onShow", "onBeforeHide"]),
      _ctx.splitButton ? (openBlock(), createBlock(_component_el_button_group, { key: 0 }, {
        default: withCtx(() => [
          createVNode(_component_el_button, mergeProps({ ref: "referenceElementRef" }, _ctx.buttonProps, {
            size: _ctx.dropdownSize,
            type: _ctx.type,
            disabled: _ctx.disabled,
            tabindex: _ctx.tabindex,
            onClick: _ctx.handlerMainButtonClick
          }), {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 16, ["size", "type", "disabled", "tabindex", "onClick"]),
          createVNode(_component_el_button, mergeProps({
            id: _ctx.triggerId,
            ref: "triggeringElementRef"
          }, _ctx.buttonProps, {
            role: "button",
            size: _ctx.dropdownSize,
            type: _ctx.type,
            class: _ctx.ns.e("caret-button"),
            disabled: _ctx.disabled,
            tabindex: _ctx.tabindex,
            "aria-label": _ctx.t("el.dropdown.toggleDropdown")
          }), {
            default: withCtx(() => [
              createVNode(_component_el_icon, {
                class: normalizeClass(_ctx.ns.e("icon"))
              }, {
                default: withCtx(() => [
                  createVNode(_component_arrow_down)
                ]),
                _: 1
              }, 8, ["class"])
            ]),
            _: 1
          }, 16, ["id", "size", "type", "class", "disabled", "tabindex", "aria-label"])
        ]),
        _: 3
      })) : createCommentVNode("v-if", true)
    ],
    2
  );
}
var Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);
const _sfc_main$3 = defineComponent({
  components: {
    ElRovingFocusCollectionItem: ElCollectionItem
  },
  props: {
    focusable: {
      type: Boolean,
      default: true
    },
    active: Boolean
  },
  emits: ["mousedown", "focus", "keydown"],
  setup(props, { emit }) {
    const { currentTabbedId, onItemFocus, onItemShiftTab, onKeydown } = inject(
      ROVING_FOCUS_GROUP_INJECTION_KEY,
      void 0
    );
    const id = useId();
    const rovingFocusGroupItemRef = ref();
    const handleMousedown = composeEventHandlers(
      (e) => {
        emit("mousedown", e);
      },
      (e) => {
        if (!props.focusable) {
          e.preventDefault();
        } else {
          onItemFocus(unref(id));
        }
      }
    );
    const handleFocus = composeEventHandlers(
      (e) => {
        emit("focus", e);
      },
      () => {
        onItemFocus(unref(id));
      }
    );
    const handleKeydown = composeEventHandlers(
      (e) => {
        emit("keydown", e);
      },
      (e) => {
        const { shiftKey, target, currentTarget } = e;
        const code = getEventCode(e);
        if (code === EVENT_CODE.tab && shiftKey) {
          onItemShiftTab();
          return;
        }
        if (target !== currentTarget)
          return;
        onKeydown(e);
      }
    );
    const isCurrentTab = computed(() => currentTabbedId.value === unref(id));
    provide(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, {
      rovingFocusGroupItemRef,
      tabIndex: computed(() => unref(isCurrentTab) ? 0 : -1),
      handleMousedown,
      handleFocus,
      handleKeydown
    });
    return {
      id,
      handleKeydown,
      handleFocus,
      handleMousedown
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_roving_focus_collection_item = resolveComponent("el-roving-focus-collection-item");
  return openBlock(), createBlock(_component_el_roving_focus_collection_item, {
    id: _ctx.id,
    focusable: _ctx.focusable,
    active: _ctx.active
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "focusable", "active"]);
}
var ElRovingFocusItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);
const _sfc_main$2 = defineComponent({
  name: "DropdownItemImpl",
  components: {
    ElIcon
  },
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click", "clickimpl"],
  setup(_, { emit }) {
    const ns = useNamespace("dropdown");
    const { role: menuRole } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const { collectionItemRef: rovingFocusCollectionItemRef } = inject(
      COLLECTION_ITEM_INJECTION_KEY,
      void 0
    );
    const {
      rovingFocusGroupItemRef,
      tabIndex,
      handleFocus,
      handleKeydown: handleItemKeydown,
      handleMousedown
    } = inject(ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY, void 0);
    const itemRef = composeRefs(
      rovingFocusCollectionItemRef,
      rovingFocusGroupItemRef
    );
    const role = computed(() => {
      if (menuRole.value === "menu") {
        return "menuitem";
      } else if (menuRole.value === "navigation") {
        return "link";
      }
      return "button";
    });
    const handleKeydown = composeEventHandlers((e) => {
      const code = getEventCode(e);
      if ([EVENT_CODE.enter, EVENT_CODE.numpadEnter, EVENT_CODE.space].includes(
        code
      )) {
        e.preventDefault();
        e.stopImmediatePropagation();
        emit("clickimpl", e);
        return true;
      }
    }, handleItemKeydown);
    return {
      ns,
      itemRef,
      dataset: {
        [COLLECTION_ITEM_SIGN]: ""
      },
      role,
      tabIndex,
      handleFocus,
      handleKeydown,
      handleMousedown
    };
  }
});
const _hoisted_1$1 = ["aria-disabled", "tabindex", "role"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  return openBlock(), createElementBlock(
    Fragment,
    null,
    [
      _ctx.divided ? (openBlock(), createElementBlock(
        "li",
        {
          key: 0,
          role: "separator",
          class: normalizeClass(_ctx.ns.bem("menu", "item", "divided"))
        },
        null,
        2
      )) : createCommentVNode("v-if", true),
      createBaseVNode("li", mergeProps({ ref: _ctx.itemRef }, { ..._ctx.dataset, ..._ctx.$attrs }, {
        "aria-disabled": _ctx.disabled,
        class: [_ctx.ns.be("menu", "item"), _ctx.ns.is("disabled", _ctx.disabled)],
        tabindex: _ctx.tabIndex,
        role: _ctx.role,
        onClick: _cache[0] || (_cache[0] = (e) => _ctx.$emit("clickimpl", e)),
        onFocus: _cache[1] || (_cache[1] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
        onMousedown: _cache[3] || (_cache[3] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
        onPointermove: _cache[4] || (_cache[4] = (e) => _ctx.$emit("pointermove", e)),
        onPointerleave: _cache[5] || (_cache[5] = (e) => _ctx.$emit("pointerleave", e))
      }), [
        _ctx.icon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "default")
      ], 16, _hoisted_1$1)
    ],
    64
  );
}
var ElDropdownItemImpl = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);
const useDropdown = () => {
  const elDropdown = inject(
    DROPDOWN_INSTANCE_INJECTION_KEY,
    {}
  );
  const _elDropdownSize = computed(() => elDropdown == null ? void 0 : elDropdown.dropdownSize);
  return {
    elDropdown,
    _elDropdownSize
  };
};
const _sfc_main$1 = defineComponent({
  name: "ElDropdownItem",
  components: {
    ElRovingFocusItem,
    ElDropdownItemImpl
  },
  inheritAttrs: false,
  props: dropdownItemProps,
  emits: ["pointermove", "pointerleave", "click"],
  setup(props, { emit, attrs }) {
    const { elDropdown } = useDropdown();
    const _instance = getCurrentInstance();
    const { onItemEnter, onItemLeave } = inject(
      DROPDOWN_INJECTION_KEY,
      void 0
    );
    const handlePointerMove = composeEventHandlers(
      (e) => {
        emit("pointermove", e);
        return e.defaultPrevented;
      },
      whenMouse((e) => {
        if (props.disabled) {
          onItemLeave(e);
          return;
        }
        const target = e.currentTarget;
        if (target === document.activeElement || target.contains(document.activeElement)) {
          return;
        }
        onItemEnter(e);
        if (!e.defaultPrevented) {
          target == null ? void 0 : target.focus({
            preventScroll: true
          });
        }
      })
    );
    const handlePointerLeave = composeEventHandlers((e) => {
      emit("pointerleave", e);
      return e.defaultPrevented;
    }, whenMouse(onItemLeave));
    const handleClick = composeEventHandlers(
      (e) => {
        if (props.disabled) {
          return;
        }
        emit("click", e);
        return e.type !== "keydown" && e.defaultPrevented;
      },
      (e) => {
        var _a, _b, _c;
        if (props.disabled) {
          e.stopImmediatePropagation();
          return;
        }
        if ((_a = elDropdown == null ? void 0 : elDropdown.hideOnClick) == null ? void 0 : _a.value) {
          (_b = elDropdown.handleClick) == null ? void 0 : _b.call(elDropdown);
        }
        (_c = elDropdown.commandHandler) == null ? void 0 : _c.call(elDropdown, props.command, _instance, e);
      }
    );
    const propsAndAttrs = computed(() => ({ ...props, ...attrs }));
    return {
      handleClick,
      handlePointerMove,
      handlePointerLeave,
      propsAndAttrs
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_dropdown_item_impl = resolveComponent("el-dropdown-item-impl");
  const _component_el_roving_focus_item = resolveComponent("el-roving-focus-item");
  return openBlock(), createBlock(_component_el_roving_focus_item, {
    focusable: !_ctx.disabled
  }, {
    default: withCtx(() => [
      createVNode(_component_el_dropdown_item_impl, mergeProps(_ctx.propsAndAttrs, {
        onPointerleave: _ctx.handlePointerLeave,
        onPointermove: _ctx.handlePointerMove,
        onClickimpl: _ctx.handleClick
      }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["onPointerleave", "onPointermove", "onClickimpl"])
    ]),
    _: 3
  }, 8, ["focusable"]);
}
var DropdownItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);
const _sfc_main = defineComponent({
  name: "ElDropdownMenu",
  props: dropdownMenuProps,
  setup(props) {
    const ns = useNamespace("dropdown");
    const { _elDropdownSize } = useDropdown();
    const size = _elDropdownSize.value;
    const { contentRef, role, triggerId, isUsingKeyboard, handleClose } = inject(DROPDOWN_INJECTION_KEY, void 0);
    const {
      rovingFocusGroupRef,
      rovingFocusGroupRootStyle,
      onBlur,
      onFocus,
      onKeydown,
      onMousedown
    } = inject(ROVING_FOCUS_GROUP_INJECTION_KEY, void 0);
    const { collectionRef: rovingFocusGroupCollectionRef } = inject(
      COLLECTION_INJECTION_KEY,
      void 0
    );
    const dropdownKls = computed(() => {
      return [ns.b("menu"), ns.bm("menu", size == null ? void 0 : size.value)];
    });
    const dropdownListWrapperRef = composeRefs(
      contentRef,
      rovingFocusGroupRef,
      rovingFocusGroupCollectionRef
    );
    const handleKeydown = composeEventHandlers(
      (e) => {
        var _a;
        (_a = props.onKeydown) == null ? void 0 : _a.call(props, e);
      },
      (e) => {
        const { currentTarget, target } = e;
        const code = getEventCode(e);
        currentTarget.contains(
          target
        );
        if (EVENT_CODE.tab === code) {
          return handleClose();
        }
        onKeydown(e);
      }
    );
    function handleFocus(e) {
      isUsingKeyboard.value && onFocus(e);
    }
    return {
      size,
      rovingFocusGroupRootStyle,
      dropdownKls,
      role,
      triggerId,
      dropdownListWrapperRef,
      handleKeydown,
      onBlur,
      handleFocus,
      onMousedown
    };
  }
});
const _hoisted_1 = ["role", "aria-labelledby"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", {
    ref: _ctx.dropdownListWrapperRef,
    class: normalizeClass(_ctx.dropdownKls),
    style: normalizeStyle(_ctx.rovingFocusGroupRootStyle),
    tabindex: -1,
    role: _ctx.role,
    "aria-labelledby": _ctx.triggerId,
    onFocusin: _cache[0] || (_cache[0] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
    onFocusout: _cache[1] || (_cache[1] = (...args) => _ctx.onBlur && _ctx.onBlur(...args)),
    onKeydown: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args), ["self"])),
    onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.onMousedown && _ctx.onMousedown(...args), ["self"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 46, _hoisted_1);
}
var DropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);
const ElDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu
});
const ElDropdownItem = withNoopInstall(DropdownItem);
const ElDropdownMenu = withNoopInstall(DropdownMenu);
export {
  ElDropdown as E,
  ElDropdownMenu as a,
  ElDropdownItem as b
};
