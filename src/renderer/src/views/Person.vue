<template>
    <div class='Person'>
        <h2>姓名: <input type="text" v-model="userInfo.name" ></h2>
        <h3>年龄: <input type="number" v-model="userInfo.age"></h3>
        <h4>性别: <input type="text" v-model="userInfo.gender"></h4>
        <p>完整信息: {{ fullInfo }}</p>
        <h2 ref="childh2"></h2>
    </div>
    <img src="https://img2.huashi6.com/images/resource/thumbnail/2024/11/18/112137_9742445171.jpg?imageMogr2/quality/75/interlace/1/thumbnail/1400x/gravity/North/crop/1400x2292/format/webp%7Cwatermark/2/text/6Kem56uZQE5pZDQxNw/gravity/South/fill/I2ZmZmZmZg/fontsize/400/font/5b6u6L2v6ZuF6buR/dy/20" alt=""/>
    
</template>



<script setup lang="ts">
    import axios from 'axios'
    import { ref, computed} from 'vue'
    class UserInfo{
        name: string;
        age: number;
        gender: string;
        constructor(name:string, age:number, gender:string){
            this.name = name
            this.age = age
            this.gender = gender
        }
    }
    let person_name = "张三"
    let age = 20
    let gender = "男"
    let userInfo = ref(new UserInfo(person_name, age, gender))
    let fullInfo = computed(() => {
        return `姓名: ${userInfo.value.name}, 年龄: ${userInfo.value.age}, 性别: ${userInfo.value.gender}`
    })





    
    

</script>


<style scoped lang="less">
.Person {
    color: black;
    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 5px;
}
</style>
