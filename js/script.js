const slides = [
{
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
const { createApp } =Vue;

createApp({
  data(){
    return{
        active: 0,
        slide: [...slides],
        timer: null
    }
  },
  methods: {
    next(){
        if (this.active < this.slide.length -1) this.active++;
        else this.active=0;
    },
    prev(){
        if (this.active > 0) this.active--;
        else this.active=this.slide.length -1;
    },
    attiva(index){ //funzione che restituisce la classe active se l'index della thump è uguale alla variabvile active
        if (index === this.active)   return "active";
        return '';
    },
    visualizza(index,event){ //funzione che al click su una thump fa spuntare l'immagine relativa nello slider
        this.active=index;
    },
    start(){ //start 
        this.timer=setInterval(this.next,3000);
    },
    stop(){
        clearInterval(this.timer);
    }
  },
  mounted(){
    this.start();
  }
}).mount("#app");