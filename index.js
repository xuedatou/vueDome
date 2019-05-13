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

app.message = "I can change the data!";