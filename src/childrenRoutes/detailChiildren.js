import detailFirst from "../childrenComponents/detail-first.vue"
import detailSecond from "../childrenComponents/detail-second.vue"
import detailThird from "../childrenComponents/detail-third.vue"
//建立routes的children属性
export default [
    {
        name: 'detailFirst',
        path: "detailFirst",
        component: detailFirst
    },
    {
        name: 'detailSecond',
        path: "detailSecond",
        component: detailSecond
    },
    {
        name: 'detailThird',
        path: "detailThird",
        component: detailThird
    }
]