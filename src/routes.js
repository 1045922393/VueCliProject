import index from "./components/index.vue"
import detail from "./components/detail.vue"
import phone from "./components/phone.vue"
import washingMachine from "./components/washingMachine.vue"
import computer from "./components/computer.vue"
export default [
    {
        name: 'default',
        path: '/',
        redirect: { name: 'index' }
    },
    {
        name: 'index',
        path: '/index',
        component: index
    },
    {
        name: "detail",
        path: "/detail/:id?",
        component: detail,
        children: [
            {
                name: 'defaultA',
                path: 'default',
                component: index
            },
            {
                name: 'phone',
                path: 'phone',
                component: phone
            },
            {
                name: 'washingMachine',
                path: 'washingMachine',
                component: washingMachine
            },
            {
                name: 'computer',
                path: 'computer',
                component: computer
            }
        ]
    }
]