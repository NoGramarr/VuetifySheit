import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', 
                id: 'dnskjandkjanj123', 
                title: 'Meetup in New York',
                date: new Date(),
                location: 'New York',
                description: 'New York, New York'
            },
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG/1200px-Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG', 
                id: 'dnskjandkjanj124', 
                title: 'Meetup in Paris',
                date: new Date(),
                location: 'Paris',
                description: 'It\'s fokn Paris!'
            }
        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetup(state, payload){
            state.loadedMeetups.push(payload);
        },
        setUser(state, payload){
            state.user = payload;
        },
        setLoading(state, payload){
            state.loading = payload;
        },
        setError(state, payload){
            state.error = payload;
        },
        clearError(state){
            state.error = null;
        }
    },
    actions: {
        createMeetup({commit}, payload){
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date.toISOString()
            }
            firebase.database().ref('meetups').push(meetup)
                .then((data)=>{
                    const key = data.key;
                    commit('createMeetup', {
                        ...meetup, 
                        id: key
                    });
                })
                .catch((error)=>{
                    console.log(error);
                });
        },
        signUserUp({commit}, payload){
            commit('setLoading', true);
            commit('clearError');
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user=>{
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser);
                    commit('setLoading', false);
                })
                .catch(error => {
                    console.log(error);
                    commit('setLoading', false);
                    commit('setError', error);
                });
        },
        signUserIn({commit}, payload){
            commit('setLoading', true);
            commit('clearError');
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    };
                    commit('setUser', newUser);
                    commit('setLoading', false);
                })
                .catch(error => {
                    console.log(error);
                    commit('setLoading', false);
                    commit('setError', error);
                });
        },
        clearError({commit}){
            commit('clearError');
        }
    },
    getters: {
        featuredMeetups(state, getters){
            return getters.loadedMeetups.slice(0, 5);
        },
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        loadedMeetup(state){
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id == meetupId
                })
            }
        },
        user(state){
            return state.user;
        },
        loading(state){
            return state.loading;
        },
        error(state){
            return state.error;
        }
    }
});