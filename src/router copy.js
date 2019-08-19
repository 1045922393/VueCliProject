import VueRouter from "vue-router"
import index from "@/components/index.vue"
import detail from "@/components/detail.vue"

const routes = [
    {
        name: "default",
        path: "/",
        // redirect: "detail"
        redirect: "index"
    },
    {
        name: "index",
        path: "/index",
        component: index
    },
    {
        name: "detail",
        path: "/detail/:id",
        component: detail
    }
]
const router = new VueRouter({
    routes
})

export default router