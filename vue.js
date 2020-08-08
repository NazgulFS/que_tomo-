const app = new Vue({
    el: '#app',
    opts: {
      theme: {
          dark: false
      }
    },
    vuetify: new Vuetify(this.opts),
    data: () => ({
        drawer: null,
        titulo: 'App - Que tomo?',
        goDark: true,
        itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 4,
        sortBy: 'name',
        items: [],
        keys: []
    }),
    methods: {
      nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
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
      numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `strDrink`)
      }
    },
    mounted () {
      axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita')
        .then(response => {
          this.items = response.data.drinks
          this.keys = Object.keys(response.data.drinks[0])
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
    },
})