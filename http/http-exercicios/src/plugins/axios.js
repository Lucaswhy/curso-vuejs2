import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-http-2fc2d-default-rtdb.firebaseio.com/';

// Se fosse global pra fazer os headers:
 axios.defaults.headers.common['Authorization'] = 'abc123';
 //axios.defaults.headers.get['Accepts'] = 'application/json';

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios;
    //    Vue.prototype.$http = axios.create({
    //        baseURL: 'https://curso-vue-http-2fc2d-default-rtdb.firebaseio.com/',
    //        headers: {
    //        get:{
    //    "Authorization": "abc123"
    //        }    })

        Vue.prototype.$http.interceptors.request.use(config =>{
                console.log(config.method);
                // if(config.method == 'post') config.method = 'put';
                return config
            },error => Promise.reject(error));

        Vue.prototype.$http.interceptors.response.use(res =>{
            // const array = [];
            // for(let chave in res.data){
            //     array.push({id: chave,
            //         // nome: res.data[chave].nome,
            //         // email: res.data[chave].email  })
            //         ...res.data[chave]})
            // }

            // res.data = array
            return res
        },error => Promise.reject(error));

    }


})