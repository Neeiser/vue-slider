const root = new Vue({
    el: '#root',
    data: {
        elementOrder: 0,
        arrSlide: [
            {
                title: 'Svezia',
                img: 'img/01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                title: 'Svizzera',
                img: 'img/02.jpg',
                text: 'Lorem ipsum',
            },
            {
                title: 'Gran Bretagna',
                img: 'img/03.jpg',
                text:  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                title: 'Germania',
                img: 'img/04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
            {
                title: 'Paradise',
                img: 'img/05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
            },
        ]
    },
    methods:{
        farward(){
            if(this.elementOrder == this.arrSlide.length - 1){
                this.elementOrder = 0;
            } else {
                this.elementOrder++
            }
        },
        backward(){
            if(this.elementOrder == 0){
                this.elementOrder = this.arrSlide.length - 1;
            } else {
                this.elementOrder--
            }
        },
    }   
});


const myInterval = setInterval(myTimer, 1000);

function myTimer() {
    arrSlide.ele++
    return arrSlide.ele++
}