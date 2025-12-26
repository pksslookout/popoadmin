import { t as buildProps, v as iconPropType, _ as _export_sfc, d as defineComponent, bM as useGlobalConfig, c as computed, br as isBoolean, b as useNamespace, g as createElementBlock, f as openBlock, e as createBlock, h as createCommentVNode, l as renderSlot, w as withCtx, D as resolveDynamicComponent, i as unref, E as ElIcon, n as normalizeClass, q as withInstall } from "./index.Dp4m6nBq.js";
import { e as useDeprecated } from "./button.7O-VbLYM.js";
const linkProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "warning", "info", "danger", "default"],
    default: void 0
  },
  underline: {
    type: [Boolean, String],
    values: [true, false, "always", "never", "hover"],
    default: void 0
  },
  disabled: Boolean,
  href: { type: String, default: "" },
  target: {
    type: String,
    default: "_self"
  },
  icon: {
    type: iconPropType
  }
});
const linkEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const _hoisted_1 = ["href", "target"];
const _sfc_main = defineComponent({
  ...{
    name: "ElLink"
  },
  __name: "link",
  props: linkProps,
  emits: linkEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const globalConfig = useGlobalConfig("link");
    useDeprecated(
      {
        scope: "el-link",
        from: "The underline option (boolean)",
        replacement: "'always' | 'hover' | 'never'",
        version: "3.0.0",
        ref: "https://element-plus.org/en-US/component/link.html#underline"
      },
      computed(() => isBoolean(props.underline))
    );
    const ns = useNamespace("link");
    const linkKls = computed(() => {
      var _a, _b, _c;
      return [
        ns.b(),
        ns.m((_c = (_b = props.type) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.type) != null ? _c : "default"),
        ns.is("disabled", props.disabled),
        ns.is("underline", underline.value === "always"),
        ns.is("hover-underline", underline.value === "hover" && !props.disabled)
      ];
    });
    const underline = computed(() => {
      var _a, _b, _c;
      if (isBoolean(props.underline)) {
        return props.underline ? "hover" : "never";
      } else
        return (_c = (_b = props.underline) != null ? _b : (_a = globalConfig.value) == null ? void 0 : _a.underline) != null ? _c : "hover";
    });
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", {
        class: normalizeClass(linkKls.value),
        href: _ctx.disabled || !_ctx.href ? void 0 : _ctx.href,
        target: _ctx.disabled || !_ctx.href ? void 0 : _ctx.target,
        onClick: handleClick
      }, [
        _ctx.icon ? (openBlock(), createBlock(unref(ElIcon), { key: 0 }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(_ctx.icon)))
          ]),
          _: 1
        })) : createCommentVNode("v-if", true),
        _ctx.$slots.default ? (openBlock(), createElementBlock(
          "span",
          {
            key: 1,
            class: normalizeClass(unref(ns).e("inner"))
          },
          [
            renderSlot(_ctx.$slots, "default")
          ],
          2
        )) : createCommentVNode("v-if", true),
        _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", { key: 2 }) : createCommentVNode("v-if", true)
      ], 10, _hoisted_1);
    };
  }
});
var Link = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/link/src/link.vue"]]);
const ElLink = withInstall(Link);
export {
  ElLink as E
};
