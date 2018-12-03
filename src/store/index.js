import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', 
                id: 'dnskjandkjanj123', 
                title: 'Meetup in New York',
                date: '2019-12-23'
            },
            {
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG/1200px-Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG', 
                id: 'dnskjandkjanj124', 
                title: 'Meetup in Paris',
                date: '2018-12-23'
            }
        ],
        user: {
            id: 'sakjdnkj21',
            registeredMeetups: ['dnskjandkjanj123']
        }
    },
    mutations: {
        createMeetup(state, payload){
            state.loadedMeetups.push(payload);
        }
    },
    actions: {
        createMeetup({commit}, payload){
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: 'njdksanjkndk112'
            }
            // Reach out to Firebase and store it
            commit('createMeetup', meetup);
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
        }
    }
});