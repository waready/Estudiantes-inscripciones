const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/Login.vue") },
      { path: "/simulacro", component: () => import("pages/Simulacro.vue") },
      { path: "/sede", component: () => import("pages/IndexPage.vue") },
      { path: "/sede/Azangaro", component: () => import("pages/Azangaro.vue") },
      { path: "/sede/Huancané", component: () => import("pages/Huancane.vue") },
      { path: "/sede/Ilave", component: () => import("pages/Ilave.vue") },
      {
        path: "/sede/Juli - Chucuito",
        component: () => import("pages/Juli.vue"),
      },
      { path: "/sede/Juliaca", component: () => import("pages/Juliaca.vue") },
      { path: "/sede/Puno", component: () => import("pages/Puno.vue") },
      { path: "/sede/Virtual", component: () => import("pages/Virtual.vue") },
      { path: "/sede/Ayaviri", component: () => import("pages/Ayaviri.vue") },
      { path: "/pagos", component: () => import("pages/PagosAlumnos.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
