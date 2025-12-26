import { t as buildProps, bn as componentSizes, _ as _export_sfc, d as defineComponent, r as ref, b as useNamespace, c as computed, a9 as isUndefined, o as onMounted, bQ as onUpdated, e as createBlock, f as openBlock, w as withCtx, l as renderSlot, k as normalizeStyle, n as normalizeClass, D as resolveDynamicComponent, bc as useAttrs, q as withInstall } from "./index.De-GHSdr.js";
import { b as useFormSize } from "./button.Cfu2-kaF.js";
const textProps = buildProps({
  type: {
    type: String,
    values: ["primary", "success", "info", "warning", "danger", ""],
    default: ""
  },
  size: {
    type: String,
    values: componentSizes,
    default: ""
  },
  truncated: Boolean,
  lineClamp: {
    type: [String, Number]
  },
  tag: {
    type: String,
    default: "span"
  }
});
const _sfc_main = defineComponent({
  ...{
    name: "ElText"
  },
  __name: "text",
  props: textProps,
  setup(__props) {
    const props = __props;
    const textRef = ref();
    const textSize = useFormSize();
    const ns = useNamespace("text");
    const textKls = computed(() => [
      ns.b(),
      ns.m(props.type),
      ns.m(textSize.value),
      ns.is("truncated", props.truncated),
      ns.is("line-clamp", !isUndefined(props.lineClamp))
    ]);
    const bindTitle = () => {
      var _a, _b, _c, _d, _e, _f, _g;
      const inheritTitle = useAttrs().title;
      if (inheritTitle)
        return;
      let shouldAddTitle = false;
      const text = ((_a = textRef.value) == null ? void 0 : _a.textContent) || "";
      if (props.truncated) {
        const width = (_b = textRef.value) == null ? void 0 : _b.offsetWidth;
        const scrollWidth = (_c = textRef.value) == null ? void 0 : _c.scrollWidth;
        if (width && scrollWidth && scrollWidth > width) {
          shouldAddTitle = true;
        }
      } else if (!isUndefined(props.lineClamp)) {
        const height = (_d = textRef.value) == null ? void 0 : _d.offsetHeight;
        const scrollHeight = (_e = textRef.value) == null ? void 0 : _e.scrollHeight;
        if (height && scrollHeight && scrollHeight > height) {
          shouldAddTitle = true;
        }
      }
      if (shouldAddTitle) {
        (_f = textRef.value) == null ? void 0 : _f.setAttribute("title", text);
      } else {
        (_g = textRef.value) == null ? void 0 : _g.removeAttribute("title");
      }
    };
    onMounted(bindTitle);
    onUpdated(bindTitle);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(_ctx.tag), {
        ref_key: "textRef",
        ref: textRef,
        class: normalizeClass(textKls.value),
        style: normalizeStyle({ "-webkit-line-clamp": _ctx.lineClamp })
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 8, ["class", "style"]);
    };
  }
});
var Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/text/src/text.vue"]]);
const ElText = withInstall(Text);
export {
  ElText as E
};
