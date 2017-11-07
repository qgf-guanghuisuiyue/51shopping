<template>
    <div class="nav">
        <div class="container">
            <ul class="nav-ul">
                <li><router-link to="/home" active-class="active">首页</router-link></li>
                <li><router-link to="/homehold" active-class="active">家用电器</router-link></li>
                <li><router-link to="/beauty" active-class="active">个体美妆</router-link></li>
                <li><router-link to="/life" active-class="active">居家生活</router-link></li>
                <li><router-link to="/motherBaby" active-class="active">母婴玩具</router-link></li>
                <li><router-link to="/finefood" active-class="active">美食健康</router-link></li>
            </ul>
            <div class="cart">
                购物车
                <b>
                    <span>0</span>
                </b>
                件
            </div>
        </div>
    </div>
</template>
<style scoped>
    @import "/src/assets/css/nav.scss";
</style>