import { d as defineComponent, bm as LanguageEnum, an as useAppStore, aG as useI18n, e as createBlock, w as withCtx, C as createBaseVNode, n as normalizeClass, m as createVNode, g as createElementBlock, Q as Fragment, R as renderList, aI as ElMessage, f as openBlock, i as unref, a4 as createTextVNode, F as toDisplayString } from "./index.Dp4m6nBq.js";
import "./button.7O-VbLYM.js";
import { E as ElDropdown, a as ElDropdownMenu, b as ElDropdownItem } from "./dropdown-item.C0t1fCbn.js";
import "./popper.DXIFQgs8.js";
import "./scrollbar.u3Wr4GmE.js";
const logo = "/img/logo.DQHzfyY1.png";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    size: {
      type: String,
      required: false
    }
  },
  setup(__props) {
    const langOptions = [
      { label: "中文", value: LanguageEnum.ZH_CN },
      { label: "English", value: LanguageEnum.EN }
    ];
    const appStore = useAppStore();
    const { locale, t } = useI18n();
    function handleLanguageChange(lang) {
      locale.value = lang;
      appStore.changeLanguage(lang);
      ElMessage.success(t("langSelect.message.success"));
    }
    return (_ctx, _cache) => {
      const _component_el_dropdown_item = ElDropdownItem;
      const _component_el_dropdown_menu = ElDropdownMenu;
      const _component_el_dropdown = ElDropdown;
      return openBlock(), createBlock(_component_el_dropdown, {
        trigger: "click",
        onCommand: handleLanguageChange
      }, {
        dropdown: withCtx(() => [
          createVNode(_component_el_dropdown_menu, null, {
            default: withCtx(() => [
              (openBlock(), createElementBlock(Fragment, null, renderList(langOptions, (item) => {
                return createVNode(_component_el_dropdown_item, {
                  key: item.value,
                  disabled: unref(appStore).language === item.value,
                  command: item.value
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(item.label), 1)
                  ]),
                  _: 2
                }, 1032, ["disabled", "command"]);
              }), 64))
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", {
            class: normalizeClass(["i-svg:language", __props.size])
          }, null, 2)
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as _,
  logo as l
};
