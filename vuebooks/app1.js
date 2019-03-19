var store = new Vuex.Store({
    state: {
        ship: {},
        ships: {
            count: 0,
            results: []
        },
        pilots: []
    },
    getters: {
        //传进来整个state 对象 是整个对象
        onlyStarFighters(state) {
            return state.ships.results.filter(function (ship) {
                return ship.starship_class === 'Starfighter';
            });
        },
        onlyStarFightersCount(state, getters) {
            return getters.onlyStarFighters.length;
        },
        setShip(state) {
            return function (url) {
                return state.ships.results.find(function (ship) {
                    return ship.url === url;
                });
            }
        }
    },
    mutations: {
        setShips(state, payload) {
            state.ships = payload.newShips;
        },
        setShip(state, payload) {
            state.ship = payload.newShip;
        },
        clearPilots(state) {
            state.pilots = [];
        },
        addPilot(state, payload) {
            state.pilots.push(payload.newPilot);
        }
    },
    actions: {
        search(context, payload) {
            axios.get(`https://swapi.co/api/starships/?search=${payload.searchText}`)
                .then(res => {
                    context.commit('setShips', {
                        newShips: res.data
                    })
                });
        },
        setShip(context, payload) {
            context.commit('clearPilots');
            context.commit('setShip', {
                newShip: context.getters.setShip(payload.url)
            });
            context.dispatch('getPilots', {
                urls: context.state.ship.pilots
            });
        },
        getPilots(context, payload) {
            payload.urls.forEach(element => {
                axios.get(url).then(response => {
                    context.commit('addPilot', {
                        newPilot: response.data
                    });
                });
            });
        }
    }

});

var app1 = new Vue({
    el: '#app1',
    data: {
        searchText: ''
    },
    store,
    computed: {
        ships: function () {
            return this.$store.state.ships.results;
        },
        shipCount: function () {
            return this.$store.state.ships.count;
        }
    },
    methods: {
        search: function () {
            this.$store.dispatch('search', {
                searchText: this.searchText
            });
        }
    }
});