// import something here
import VueTypedJs from "vue-typed-js";
import VueScrollactive from "vue-scrollactive";

// export default async ({ /* app, router, Vue, ... */ }) => {
export default async ({ Vue }) => {
  Vue.use(VueTypedJs);
  Vue.use(VueScrollactive);
};
