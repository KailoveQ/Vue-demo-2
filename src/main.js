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
            gender:""
        }
    },
    computed:{
        dpUsers(){
            const hash ={
                male:"男",
                female:"女"
            }
            const {users,gender} = this
            if(gender === ""){
                return users
            }else if (typeof gender === "string"){
                return users.filter(u =>u.gender===hash[gender])
            }else {
                throw new Error ("gender 的值是以外的值")
            }
        }
    },
    methods:{
        setGender(string){
            this.gender =string
        }
    },
    template:`
    <div>
        <button @click="setGender('')">全部</button>
        <button @click="setGender('male')">男</button>
        <button @click="setGender('female')">女</button>
        <ul>
            <li v-for="(u,index) in dpUsers" :key="index">{{u.name}} - {{u.gender}}</li>
        </ul>
    </div>
    `
}).$mount("#app")