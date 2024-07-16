import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Map",
    component: () =>
      import(/* webpackChunkName: "map" */ "../views/CesiumViewer.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () =>
      import(/* webpackChunkName: "map" */ "../views/Test1/index.vue"),
  },
  {
    path: "/3DModel",
    name: "3DModel",
    component: () =>
      import(/* webpackChunkName: "map" */ "../views/3DModel/index.vue"),
  },
  {
    path: "/3DModelColor",
    name: "3DModelColor",
    component: () =>
      import(/* webpackChunkName: "map" */ "../views/3DModelColor/index.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
