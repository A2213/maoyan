//配置反向代理
module.exports = {
    devServer:{ //服务
        proxy:{
            '/ajax':{
                target:'https://m.maoyan.com',//目标地址
                changeOrigin:true//是否改变地址

            }
        }
    }
}

