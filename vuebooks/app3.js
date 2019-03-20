var store = new Vuex.Store({
    //state 中的数据是需要共享的数据
    state: {
        ship: {},
        ships: {
            count: 0,
            results: []
        },
        pilots: []
    },
    getters: {
        onlyStarFighters(state) {
            return state.ships.results.filter((ship) => {
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
            axios
                .get(`https://swapi.co/api/starships/?search=${payload.searchText}`)
                .then((res) => {
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
            })
        },
        getPilots(context, payload) {
            payload.urls.forEach(element => {
                axios.get(element).then((res) => {
                    context.commit('addPilot', {
                        newPilot: res.data
                    })
                })
            });
        }
    }
})

var app1 = new Vue({
    el: '#app1',
    data: {
        searchText: ''
    },
    store,
    computed: {
        ships() {
            return this.$store.state.ships.results;
        },
        shipCount() {
            return this.$store.state.ships.count;
        }
    },
    methods: {
        search() {
            this.$store.dispatch('search', {
                searchText: this.searchText
            });
        }
    }
});
var app2=new Vue({
    el:'#app2',
    data:{
        searchText: ''
    },
    store,
    computed:{
        currentShip(){
            return this.$store.state.ship;
        },
        ships(){
            return this.$store.state.ships.results;
        },
        shipCount(){
            return this.$store.state.ships.count;
        },
        starfightersCount(){
            return this.$store.getters.onlyStarFightersCount;
        },
        pilots(){
            return this.$store.state.pilots;
        }
    },
    methods:{
        search(event){
            this.$store.dispatch('search',{searchText:event.target.value})
        },
        viewShip(url){
            this.$store.dispatch({type:'setShip',url:url});
        }
    }
})
