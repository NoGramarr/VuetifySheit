<template>
    <v-container>
        <v-layout v-for="meetup in meetups" v-bind:key="meetup.id" class="mb-2">
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info">
                    <v-container>
                        <v-layout wrap row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                v-bind:src="meetup.imageUrl"
                                height="125px" 
                                >
                                </v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h2 class="white--text" mb-0>{{meetup.title}}</h2>
                                        <div>{{meetup.date | date}}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat dark v-bind:to="'/meetups/' + meetup.id">
                                        <v-icon left>arrow_forward</v-icon>
                                        View Meetup
                                    </v-btn>
                                </v-card-actions>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        computed: {
            meetups(){
                return this.$store.getters.loadedMeetups;
            }
        }
    }
</script>
