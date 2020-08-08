const app = new Vue({
    el: '#app',
    opts: {
      theme: {
          dark: false
      }
    },
    vuetify: new Vuetify(this.opts),
    data: () => ({
      dialog: false,
      drawer: null,
      titulo: 'Truco Helper',
      contEllos: 0,
      contNos: 0,
      goDark: true,
      trainingMode: true,
      cartas: ["4", "5", "6", "7", "10", "11", "12"]
    }),
    methods: {
      aumentarNos(){
        if(this.contNos >= 0 && this.contNos < 30){
          this.contNos++
        }else if(this.contNos < 0){
          this.contNos = 0;
        }else if(this.contNos >= 30){
          this.contNos = 30;
        }
      },
      aumentarEllos(){
        if(this.contEllos >= 0 && this.contEllos < 30){
          this.contEllos++
        }else if(this.contEllos < 0){
          this.contEllos = 0;
        }else if(this.contEllos >= 30){
          this.contEllos = 30;
        }
      },
      disminuirNos(){
        if(this.contNos > 0){
          this.contNos--
        }
      },
      disminuirEllos(){
        if(this.contEllos > 0){
          this.contEllos--
        }

      },
      reiniciar(){
        this.contEllos = 0;
        this.contNos = 0;
      },

    },
    computed: {
      setTheme() {
          if (this.goDark == true) {
              return (this.$vuetify.theme.dark = true);
          } else {
              return (this.$vuetify.theme.dark = false);
          }
      },
      trainingWheels() {
        if (this.modoPrincipante == true) {
          alert("Princ")
            document.getElementsByClassName("training")
        }
      }
  }
  })