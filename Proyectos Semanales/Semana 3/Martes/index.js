let app=new Vue({

    el:'#app-5',
    data:{

        m2:"Hola mundo!!",
        m1:"Hola a todos",
        message:'Hola Mundo',
        ver:false,
        todos:[
            {text:'Aprender phyton'},
            {text:'Aprender php'},
            {text:'Aprender Vue'},

        ],
        mensaje:"Bienvenido a mi pagina"

    },
    methods:{

        
        presiona:function(){

            this.m1=this.m1.split('').reverse().join(' ');
        }


    }


});