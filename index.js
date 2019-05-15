Vue.component('todo-item',{
    template: '<li>这是一个代办事项</li>'
});
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hellow Vue!'
    }
});
var app2 = new Vue({
   el: '#app2',
   data: {
       message: '消息绑定与'+new Date().toLocaleDateString()
   }
});
var app3 = new Vue({
    el: '#app3',
    data: {
        todos:[
            {text:'入门'},
            {text:'学习'},
            {text:'精通'}
        ]
    }
});
    var app5 = new Vue({
        el: '#app5',
        data:{
            message: 'hellow Vue!'
        },
        methods:{
            resaleMessage: function () {
                this.message = this.message.split('').reverse().join('');
            }
        }
    });

    var app6 = new Vue({
       el: '#app6',
       data: {
           message: "Hellow VUE!"
       }
    })
Vue.component('idss-num',{
    props: ['todo'],
    template: '<li>{{todo.text}}还剩余：{{todo.num}}</li>'
});
    var app7 = new Vue({
        el: '#app7',
        data:{
            list:[
                {text: '吸尘器', num: '5'},
                {text: '吸尘器1', num: '51'},
                {text: '吸尘器11', num: '2'},
                {text: '吸尘器2', num: '511'},
            ]
        }
    })



app.message = "I can change the data!";