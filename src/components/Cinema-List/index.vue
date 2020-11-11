<template>
    <div class="cinema_body">
        <ul>
            <!-- <li>
                <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="q"><span class="price">22.9</span> 元起</span>
                </div>
                <div class="address">
                    <span>金州区大连经济技术开发区澳东世纪3层</span>
                    <span>1763.5km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
            <li>
                <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="q"><span class="price">22.9</span> 元起</span>
                </div>
                <div class="address">
                    <span>金州区大连经济技术开发区澳东世纪3层</span>
                    <span>1763.5km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li> -->

            <li v-for="item in dataLiat" :key="item.id">
                <div>
                    <span>{{item.nm}}</span>
                    <span class="q"><span class="price">22.9</span> 元起</span>
                </div>
                <div class="address">
                    <span>{{item.addr}}</span>
                    <span>{{item.distance}}</span>
                </div>
                <div class="card">
                    <div v-for="(num,key) in item.tag" v-if="num === 1" :key="key" :class="key | classCard">
                        {{key | formatCard }}
                    </div>
                    
                </div>
            </li>
            
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"Cinema-List",
    data(){
        return{
            dataLiat:[],
        }
    },
    mounted(){
        axios.get("/ajax/cinemaList")
        .then(res=>{
            console.log(res.data)
            this.dataLiat = res.data.cinemas;
            
        })
    },
    filters:{
        //过滤标签
        formatCard(key){
            var card = [
                { key : "allowRefund", value : "改签"},
                { key : "endorse", value : "退"},
                { key : "sell", value : "点餐"},
                { key : "snack", value : "小吃"},
                { key : "deal", value : "折扣卡"},
            ];
            for(var i=0; i<card.length; i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        },
        //过滤颜色小框
        classCard(key){
            var card = [
                { key : "allowRefund", value : "bl"},
                { key : "endorse", value : "bl"},
                { key : "sell", value : "or"},
                { key : "snack", value : "or"},
                { key : "deal", value : "or"},
            ];
            for(var i=0; i<card.length; i++){
                if(card[i].key === key){
                    return card[i].value;
                }
            }
            return '';
        }
    }


}
</script>

<style  scoped>
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
    #content .cinema_body{ flex:1; overflow:auto;}
    .cinema_body ul{ padding:20px;}
    .cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
    .cinema_body div{ margin-bottom: 10px;}
    .cinema_body .q{ font-size: 11px; color:#f03d37;}
    .cinema_body .price{ font-size: 18px;}
    .cinema_body .address{ font-size: 13px; color:#666;}
    .cinema_body .address span:nth-of-type(2){ float:right; }
    .cinema_body .card{ display: flex;}
    .cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
    .cinema_body .card div.or{ color: #f90; border: 1px solid #f90;}
    .cinema_body .card div.bl{ color: #589daf; border: 1px solid #589daf;}

</style>