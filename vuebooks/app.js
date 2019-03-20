var shipModule = {
  state: {
    ship: {},
    ships: {
      count: 0,
      results: []
    }
  },
  getters: {
    onlyStarFighters(state) {
      return state.ships.results.filter(() => {
        return ship.starship_class === 'Starfighter';
      })
    },
    onlyStarFightersCount(state, getters) {
      return getters.onlyStarFighters.length;
    },
    setShip(state) {
      return function (url) {
        return state.ships.results.find((ship) => {
          return ship.url === url;
        });
      };
    }
  },
  mutations: {
    setShips(state, payLoad) {
      state.ship = payLoad.newShips;
    },
    setShip(state, payLoad) {
      state.ship = payLoad.newShip;
    }
  },
  actions: {
    search(context, payload) {
      axios
        .get(`https://swapi.co/api/starships/?search=${payload.searchText}`)
        .then(res => {
          context.commit('setShips', {
            newShips: res.data
          });
        })
    },
    setShip(context, payload) {
      context.commit('clearPilots');
      context.commit('setShip', {
        newShip: context.getters.setShip(payload.url)
      });
      context.dispatch('getPilots', {
        urls: context.state.ship.pilots
      })
    }
  }
};
var pilotsModule={
  state:{
    pilots:[]
  },
  getters:{},
  mutations: {
    clearPilots: function(state) {
      state.pilots = [];
    },
    addPilot: function(state, payload) {
      state.pilots.push(payload.newPilot);
    }
  },
  actions: {
    getPilots(context,payLoad){
      axios.get(url).then(response => {
        context.commit('addPilot', { newPilot: response.data });
      });
    }
  }
}

var store=new Vuex.Store({
  modules: {
    ships:shipModule,
    pilots:pilotsModule
  }
});

var app1=new Vue({
   el:'#app1',
   data:{
    searchText: ''
   },
   store,
   computed: {
     ships(){
       return this.$store.state.ships.ships.results;
     },
     shipCount(){
      return this.$store.state.ships.ships.count;
     }
   },
   methods: {
    search: function() {
      this.$store.dispatch('search', { searchText: this.searchText });
    }
   }
})
var app2 = new Vue({
  el: '#app2',
  data: {},
  store,
  computed: {
    currentShip: function() {
      return this.$store.state.ships.ship;
    },
    ships: function() {
      return this.$store.state.ships.ships.results;
    },
    shipCount: function() {
      return this.$store.state.ships.ships.count;
    },
    starfightersCount: function() {
      return this.$store.getters.onlyStarFightersCount;
    },
    pilots: function() {
      return this.$store.state.pilots.pilots;
    }
  },
  methods: {
    search: function(event) {
      store.dispatch('search', { searchText: event.target.value });
    },
    viewShip: function(url) {
      this.$store.dispatch({ type: 'setShip', url: url });
    }
  }
});