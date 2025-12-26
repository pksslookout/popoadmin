import { d as defineComponent, aG as useI18n, aN as useUserStore, ar as useRoute, o as onMounted, r as ref, am as AuthStorage, c as computed, au as resolveComponent, g as createElementBlock, f as openBlock, C as createBaseVNode, m as createVNode, F as toDisplayString, i as unref, w as withCtx, E as ElIcon, a3 as withKeys, a4 as createTextVNode, aA as router, aI as ElMessage } from "./index.De-GHSdr.js";
import { b as ElFormItem, a as ElCheckbox, c as ElForm } from "./form-item.DM_PD3Nw.js";
import { E as ElButton } from "./button.Cfu2-kaF.js";
/* empty css                 */
import { E as ElTooltip } from "./popper.CCtuv0lm.js";
import { E as ElInput } from "./input.BgOfymY-.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.1tPrXgE0.js";
const _hoisted_1 = {
  "text-center": "",
  "m-0": "",
  "mb-20px": ""
};
const _hoisted_2 = { class: "flex-x-between w-full" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Login",
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const { t } = useI18n();
    const userStore = useUserStore();
    const route = useRoute();
    onMounted(() => {
    });
    const loginFormRef = ref();
    const loading = ref(false);
    const isCapsLock = ref(false);
    const rememberMe = AuthStorage.getRememberMe();
    const loginFormData = ref({
      phone: "13000000001",
      password: "123456",
      ticket: "",
      randstr: "",
      rememberMe
    });
    const loginRules = computed(() => {
      return {
        phone: [
          {
            required: true,
            trigger: "blur",
            message: t("login.message.username.required")
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: t("login.message.password.required")
          },
          {
            min: 6,
            message: t("login.message.password.min"),
            trigger: "blur"
          }
        ]
        // captchaCode: [
        //   {
        //     required: true,
        //     trigger: "blur",
        //     message: t("login.message.captchaCode.required"),
        //   },
        // ],
      };
    });
    const showCaptcha = () => {
      const APP_ID = "197472036";
      const captcha = new TencentCaptcha(APP_ID, async (res) => {
        if (res.ret === 0) {
          loginFormData.value.ticket = res.ticket;
          loginFormData.value.randstr = res.randstr;
          try {
            loading.value = true;
            await userStore.login(loginFormData.value);
            const redirectPath = route.query.redirect || "/";
            await router.push(decodeURIComponent(redirectPath));
          } catch (error) {
            console.error("登录失败:", error);
          } finally {
            loading.value = false;
          }
        } else {
          let message = "验证码验证失败";
          if (res.ret === 1001) {
            message = "用户关闭验证码";
          } else if (res.ret === 1002) {
            message = "网络错误，请重试";
          } else if (res.ret === 1003) {
            message = "验证失败，请重试";
          }
          ElMessage.error(message);
        }
      });
      captcha.show();
    };
    async function handleLoginSubmit() {
      var _a;
      const valid = await ((_a = loginFormRef.value) == null ? void 0 : _a.validate());
      if (!valid) return;
      showCaptcha();
    }
    function checkCapsLock(event) {
      if (event instanceof KeyboardEvent) {
        isCapsLock.value = event.getModifierState("CapsLock");
      }
    }
    return (_ctx, _cache) => {
      const _component_User = resolveComponent("User");
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_Lock = resolveComponent("Lock");
      const _component_el_tooltip = ElTooltip;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("h3", _hoisted_1, toDisplayString(unref(t)("login.login")), 1),
        createVNode(_component_el_form, {
          ref_key: "loginFormRef",
          ref: loginFormRef,
          model: unref(loginFormData),
          rules: unref(loginRules),
          size: "large",
          "validate-on-rule-change": false
        }, {
          default: withCtx(() => [
            createVNode(_component_el_form_item, { prop: "username" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: unref(loginFormData).phone,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(loginFormData).phone = $event),
                  modelModifiers: { trim: true },
                  placeholder: unref(t)("login.username")
                }, {
                  prefix: withCtx(() => [
                    createVNode(_component_el_icon, null, {
                      default: withCtx(() => [
                        createVNode(_component_User)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "placeholder"])
              ]),
              _: 1
            }),
            createVNode(_component_el_tooltip, {
              visible: unref(isCapsLock),
              content: unref(t)("login.capsLock"),
              placement: "right"
            }, {
              default: withCtx(() => [
                createVNode(_component_el_form_item, { prop: "password" }, {
                  default: withCtx(() => [
                    createVNode(_component_el_input, {
                      modelValue: unref(loginFormData).password,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(loginFormData).password = $event),
                      modelModifiers: { trim: true },
                      placeholder: unref(t)("login.password"),
                      type: "password",
                      "show-password": "",
                      onKeyup: [
                        checkCapsLock,
                        withKeys(handleLoginSubmit, ["enter"])
                      ]
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_component_el_icon, null, {
                          default: withCtx(() => [
                            createVNode(_component_Lock)
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "placeholder"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            }, 8, ["visible", "content"]),
            createBaseVNode("div", _hoisted_2, [
              createVNode(_component_el_checkbox, {
                modelValue: unref(loginFormData).rememberMe,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(loginFormData).rememberMe = $event)
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(t)("login.rememberMe")), 1)
                ]),
                _: 1
              }, 8, ["modelValue"])
            ]),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  loading: unref(loading),
                  type: "primary",
                  class: "w-full",
                  onClick: handleLoginSubmit
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("login.login")), 1)
                  ]),
                  _: 1
                }, 8, ["loading"])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["model", "rules"])
      ]);
    };
  }
});
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ac7485c0"]]);
export {
  Login as default
};
