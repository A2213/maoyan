export default{
    path:"/movie",
    component:() => import('@/views/Movie'),//按需加载组件

    //二级路由
    children:[
        {
            path:"city",
            component:() => import('@/components/City')
        },
        {
            path:"nowplaying",
            component:() => import('@/components/Nowplaying')
        },
        {
            path:"comingsoon",
            component:() => import('@/components/Comingsoon')
        },
        {
            path:"search",
            component:() => import('@/components/Search')
        },
        //重定向二级路由
        {
            path:"/movie",
            redirect:"/movie/nowplaying"
        }
    ]

    
}