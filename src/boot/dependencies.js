// import something here
import VueTypedJs from "vue-typed-js";
import VueScrollactive from "vue-scrollactive";

// export default async ({ /* app, router, Vue, ... */ }) => {
export default async ({ Vue }) => {
  Vue.directive("scroll", {
    inserted: function(el, binding) {
      let f = function(evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener("scroll", f);
        }
      };
      window.addEventListener("scroll", f);
    }
  });
  Vue.use(VueTypedJs);
  Vue.use(VueScrollactive);
};
