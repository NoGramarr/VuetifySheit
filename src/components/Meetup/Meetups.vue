<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="info">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                                <v-card-media
                                src="https://lonelyplanetimages.imgix.net/mastheads/GettyImages-538096543_medium.jpg?sharp=10&vib=20&w=1200"
                                height="125px" 
                                >
                                </v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h2 class="white--text" mb-0>My Meetup</h2>
                                        <div>23rd December 2019</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat dark to="/meetups/1">
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