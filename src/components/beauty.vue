<template>
    <div class="beauty">
        <p class="p-title">当前“个体美妆”共1000件商品</p>
        <div class="beauty-shop">
            <div class="shoppingCar">
                <div class="shoppingCarTop">
                    <img src="https://img.guanaitong.com/product/1/148940971276676000.jpg" title="51金融圈商品" width="218" height="218"/>
                    <h3>&nbsp;&nbsp;51金融圈产品</h3>
                    <p style="color: #ff5b64"></p>
                </div>
                <div class="shoppingCarFot">
                    <span>&nbsp;&nbsp;49.9&nbsp;&nbsp;<s>59.9</s>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span>已售103件</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .beauty-shop{
        height: 600px;
    }
    .shoppingCar{
        width: 220px;
        border: 1px solid #e7e7e7;
    }
    .shoppingCar:hover{
        border: 1px solid #ff5b63;
    }
    .shoppingCarTop h3{
        width: 218px;
        height: 22px;
        margin-top: 5px;
        line-height: 22px;
        font-size: 14px;
        color: #333;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        table-layout: fixed;
        word-break: break-all;
    }
    .shoppingCarTop p{
        width: 218px;
        height: 24px;
        font-size: 12px;
        line-height: 24px;
        color: #999;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        table-layout: fixed;
        word-break: break-all;
    }
</style>