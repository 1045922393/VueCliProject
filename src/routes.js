//引入组件
import index from './components/index.vue'
import all from './components/all.vue'
import paying from './components/paying.vue'
import detail from './components/detail.vue'


//引入children
import indexChildren from './childrenRoutes/indexChildren'
import detailChildren from './childrenRoutes/detailChiildren'

export default [
    //定义路由规则
    {
        //重定向
        name: "default",
        path: '/',
        redirect: "/index"
    },
    {
        name: 'index',
        path: '/index',
        component: index,
        children: indexChildren
    },
    {
        name: "all",
        path: "/all",
        component: all
    }, {
        name: "paying",
        path: "/paying",
        component: paying
    }, {
        name: "detail",
        path: "/detail/:id?",
        component: detail,
        children: detailChildren
    },
]