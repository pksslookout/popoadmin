import { d as defineComponent, g as createElementBlock, m as createVNode, w as withCtx, i as unref, aO as useRouter, a4 as createTextVNode, C as createBaseVNode, f as openBlock } from "./index.Dp4m6nBq.js";
import { E as ElRow, a as ElCol } from "./col.DUb0u56E.js";
import { E as ElLink } from "./link.LaOC_JED.js";
import { E as ElButton } from "./button.7O-VbLYM.js";
const _imports_0 = "/img/401.BgZ6iy3O.svg";
const _hoisted_1 = { class: "p-5 pb-0 sm:p-10 lg:p-20 w-full" };
const _hoisted_2 = { class: "flex flex-col items-start gap-1.5 text-sm" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{ name: "Page401" },
  __name: "401",
  setup(__props) {
    const router = useRouter();
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_link = ElLink;
      const _component_el_col = ElCol;
      const _component_el_row = ElRow;
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createVNode(_component_el_button, {
          icon: "arrow-left",
          onClick: _cache[0] || (_cache[0] = ($event) => unref(router).back())
        }, {
          default: withCtx(() => [..._cache[2] || (_cache[2] = [
            createTextVNode("返回", -1)
          ])]),
          _: 1
        }),
        createVNode(_component_el_row, null, {
          default: withCtx(() => [
            createVNode(_component_el_col, {
              xs: 24,
              span: 12
            }, {
              default: withCtx(() => [
                _cache[5] || (_cache[5] = createBaseVNode("h1", { class: "text-6xl font-bold text-[#484848]" }, "Oops!", -1)),
                _cache[6] || (_cache[6] = createBaseVNode("h2", null, "你没有权限去该页面", -1)),
                _cache[7] || (_cache[7] = createBaseVNode("h6", null, "如有不满请联系你领导", -1)),
                createBaseVNode("div", _hoisted_2, [
                  _cache[4] || (_cache[4] = createBaseVNode("span", null, "或者你可以去:", -1)),
                  createVNode(_component_el_link, {
                    type: "primary",
                    onClick: _cache[1] || (_cache[1] = ($event) => unref(router).push("/dashboard"))
                  }, {
                    default: withCtx(() => [..._cache[3] || (_cache[3] = [
                      createTextVNode("回首页", -1)
                    ])]),
                    _: 1
                  })
                ])
              ]),
              _: 1
            }),
            createVNode(_component_el_col, {
              xs: 24,
              span: 12
            }, {
              default: withCtx(() => [..._cache[8] || (_cache[8] = [
                createBaseVNode("img", {
                  src: _imports_0,
                  class: "w-full"
                }, null, -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        })
      ]);
    };
  }
});
export {
  _sfc_main as default
};
