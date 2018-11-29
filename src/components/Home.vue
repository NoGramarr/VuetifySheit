<template>
    <v-container>

        <v-layout row wrap class="mt-2">
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large router to="/meetups" class="info">
                    Explore Meetups
                </v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large router to="/meetup/new" class="info">
                    Organize Meetup
                </v-btn>
            </v-flex>
        </v-layout>
        
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel style="cursor: pointer;">
                    <v-carousel-item v-for="meetup in meetups" v-bind:key="meetup.id" @click="onLoadMeetup(meetup.id)">
                        <v-parallax v-bind:src="meetup.imageUrl">
                            <div class="title">
                                {{meetup.title}}
                            </div>
                        </v-parallax>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>

        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>

    </v-container>

</template>

<script>
    export default{
        name: 'Home',
        data(){
            return{
                meetups: [
                    {imageUrl: 'https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200', id: 'dnskjandkjanj123', title: 'Meetup in New York'},
                    {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG/1200px-Seine_and_Eiffel_Tower_from_Tour_Saint_Jacques_2013-08.JPG', id: 'dnskjandkjanj124', title: 'Meetup in Paris'}
                ]
            }
        },
        methods: {
            onLoadMeetup: function(id){
                this.$router.push('/meetups/' + id);
            }
        }
    }
</script>

<style scoped>
    .title{
        position: absolute;
        width: 50%;
        left: 25%;
        bottom: 50px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        padding: 30px;
        border-top-left-radius: 100%;
        border-top-right-radius: 100%;
        text-align: center;
    }
</style>
