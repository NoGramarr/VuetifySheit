<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm2>
                <h2 class="secondary--text">Create a Meetup</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="title"
                                label="Title"
                                id="title"
                                v-model="title"
                                required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="location"
                                label="Location"
                                id="location"
                                v-model="location"
                                required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="imageUrl"
                                label="Image URL"
                                id="image-url"
                                v-model="imageUrl"
                                required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-img v-bind:src="imageUrl" style="width:75%;left:12.5%"></v-img>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                name="description"
                                label="Description"
                                id="description"
                                v-model="description"
                                multi-line
                                required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h4>Choose a Date & Time</h4>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3 class="mb-2">
                            <v-date-picker v-model="date"></v-date-picker>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-time-picker v-model="time"></v-time-picker>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn class="primary" v-bind:disabled="!formIsValid" type="submit">Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import moment from 'moment';
    export default{
        data(){
            return{
                title: '',
                location: '',
                imageUrl: '',
                description: '',
                date: '',
                time: ''
            }
        },
        created(){
            const dateTime = moment();
            this.date = dateTime.format('YYYY-MM-DD');
            this.time = dateTime.format('HH:mm');
        },
        computed: {
            formIsValid(){
                return this.title !== '' &&
                    this.location !== '' &&
                    this.description !== '' &&
                    this.imageUrl !== ''
            },
            submittableDateTime(){
                const date = new Date(this.date + ' ' + this.time);
                console.log(date);
                return date;
            }
        },
        methods: {
            onCreateMeetup(){
                if(!this.formIsValid){
                    return;
                }
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    date: this.submittableDateTime
                }
                this.$store.dispatch('createMeetup', meetupData);
                this.$router.push('/meetups');
            }
        }
    }
</script>


