const Vue = window.Vue
Vue.config.productionTip =false

let id =0
const createUser= (name,gender) => {
    id +=1
    return {id:id, name: name , gender: gender}
}
new Vue ({
    data(){
        return{
            users:[
                createUser('方方','男'),
                createUser('若愚','男'),
                createUser('茜茜','女'),
                createUser('糖糖','女')
            ],
            dpUsers:[]
        }
    },
    created(){
        this.dpUsers =this.users;
    },
    methods:{
        showAll(){
            this.dpUsers= this.users
        },
        showMale(){
            this.dpUsers =this.users.filter(u =>u.gender==='男')
        },
        showFemale(){
            this.dpUsers =this.users.filter(u =>u.gender==="女")
        }
    },
    template:`
    <div>
        <button @click="showAll">全部</button>
        <button @click="showMale">男</button>
        <button @click="showFemale">女</button>
        <ul>
            <li v-for="(u,index) in dpUsers" :key="index">{{u.name}} - {{u.gender}}</li>
        </ul>
    </div>
    `
}).$mount("#app")