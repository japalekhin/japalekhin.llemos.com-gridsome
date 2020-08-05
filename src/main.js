import DefaultLayout from '~/layouts/Default.vue'

import "./helpers/bootstrap";
import "./helpers/fontawesome";

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
