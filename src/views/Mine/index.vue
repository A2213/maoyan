<template>
    <div>
        <Header title="我的喵喵"></Header>
        <div id="content">
            <Lonin></Lonin>
        </div>
        <TabBar></TabBar>
    </div>
</template>

<script>
import Header from "@/components/Header"
import TabBar from "@/components/TabBar"
import Lonin from "@/components/Login"
export default {
    name:"Mine",
    components:{
        Header,
        TabBar,
        Lonin
    }
}
</script>

<style scoped>

</style>