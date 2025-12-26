import { d as defineComponent, ar as useRoute, aO as useRouter, g as createElementBlock, f as openBlock } from "./index.Dp4m6nBq.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  setup(__props) {
    const route = useRoute();
    const router = useRouter();
    const { params, query } = route;
    const { path } = params;
    router.replace({ path: "/" + path, query });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
export {
  _sfc_main as default
};
