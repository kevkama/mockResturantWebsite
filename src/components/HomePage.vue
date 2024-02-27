<template>
    <div id="homepage">
        <v-parallax height='90vh' src="./../../public/pexels-filip-marcus-adam-16545956.jpg">
            <div class="dark-overlay"></div>
            <div class="d-flex flex-column fill-height justify-center align-left  ">
                <h1>
                    For those cozy dining occasions
                </h1>
                <h4>
                    Umoja foods is commited to giving you a dinning experience you are sure to apressiate we cordially
                    invite you to make a booking at your convinience to make the experience smooth
                </h4>
                <h2 class="subheading">
                    We cant wait to serve you
                </h2>
                <div class="addon">
                    <v-img src="./../../public/pexels-gül-işık-17498972.jpg"></v-img>
                </div>
            </div>

        </v-parallax>
        <v-parallax height='130vh' src="./../../public/pexels-filip-marcus-adam-16545956.jpg">
            <div class="dark-overlay"></div>
            <v-container class="bg-black text-center">
                <v-layout class="d-flex justify-center">
                    <h1>Booking with a personal touch</h1>
                </v-layout>
                <v-layout>
                    <v-divider></v-divider>
                </v-layout>
                <v-layout class="write">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus esse repellat aliquid,
                        sapiente corrupti qui impedit dicta vel ipsam eveniet pariatur reprehenderit, reiciendis fuga
                        officia, omnis quisquam? Non, ipsa excepturi.</p>
                </v-layout>
            </v-container>
            <v-container>
                <v-row>
                    <v-layout>
                        <v-container class="text-center">
                            <h1>Communications with loyal and new customers</h1>
                        </v-container>
                    </v-layout>
                    <!-- Message View Column -->
                    <v-col cols="12" md="6">
                        <v-card width="400">
                            <v-img height="200" src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg" cover
                                class="text-white">
                                <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                                    <template v-slot:prepend>
                                        <v-btn icon="$menu"></v-btn>
                                    </template>

                                    <v-toolbar-title class="text-h6">
                                        Messages
                                    </v-toolbar-title>

                                    <template v-slot:append>
                                        <v-btn icon="mdi-dots-vertical"></v-btn>
                                    </template>
                                </v-toolbar>
                            </v-img>

                            <v-card-text>
                                <div class="font-weight-bold ms-1 mb-2">
                                    Today
                                </div>

                                <v-timeline density="compact" align="start">
                                    <v-timeline-item v-for="message in messages" :key="message.time"
                                        :dot-color="message.color" size="x-small">
                                        <div class="mb-4">
                                            <div class="font-weight-normal">
                                                <strong>{{ message.from }}</strong> @{{ message.time }}
                                            </div>
                                            <div>{{ message.message }}</div>
                                        </div>
                                    </v-timeline-item>
                                </v-timeline>
                            </v-card-text>
                        </v-card>
                    </v-col>

                    <!-- List of Items Column -->
                    <v-col cols="12" md="6">
                        <v-card class="mx-auto" max-width="425">
                            <v-list lines="two">
                                <v-list-subheader>Today</v-list-subheader>

                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/1.jpg"
                                    title="Date Night this week">
                                    <template v-slot:subtitle>
                                        <span class="font-weight-bold">Ali Connors</span> &mdash; I'll be having my monthly
                                        date with the miss. i wanted to book in advance. Do you have an oppening?
                                    </template>
                                </v-list-item>

                                <v-divider inset></v-divider>

                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/2.jpg">
                                    <template v-slot:title>
                                        Business Meeting <span class="text-grey-lighten-1">4</span>
                                    </template>

                                    <template v-slot:subtitle>
                                        <span class="font-weight-bold">to Alex, Scott, Jennifer</span> &mdash; we would like
                                        to confirm that the preperation for the meeting you requested to have at our
                                        facility.
                                    </template>
                                </v-list-item>

                                <v-divider inset></v-divider>

                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/3.jpg" title="French">
                                    <template v-slot:subtitle>
                                        <span class="font-weight-bold">Sandra Adams</span> &mdash; Do you have French
                                        quisnes? i would like to entertain a foreighn guest
                                    </template>
                                </v-list-item>

                                <v-divider inset></v-divider>

                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/4.jpg"
                                    title="Brunch this weekend?">
                                    <template v-slot:subtitle>
                                        <span class="font-weight-bold">Jane Tanner</span> &mdash; I'll be in the
                                        neighborhood for the concert this
                                        weekend and i would like to try the dining expreience. Do you have an openning?
                                    </template>
                                </v-list-item>

                                <v-divider inset></v-divider>

                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/5.jpg"
                                    title="Lunch this weekend?">
                                    <template v-slot:subtitle>
                                        <span class="font-weight-bold">Barry Allan</span> &mdash; I'll be in the
                                        neighborhood for a concert this
                                        weekend. Do you have an opening? Id like to experience the fabled dining.
                                    </template>
                                </v-list-item>

                                <v-divider inset></v-divider>

                                <v-list-item prepend-avatar="https://cdn.vuetifyjs.com/images/lists/6.jpg"
                                    title="Girls night">
                                    <template v-slot:subtitle>
                                        <span class="font-weight-bold">Kate Wilson</span> &mdash; me an the girls would like
                                        to have a night out in the resturant for mimmosas and dinner.
                                    </template>
                                </v-list-item>
                            </v-list>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-parallax>

        <v-container>
            <v-layout>
                <v-card class="mx-auto" width="40%" height="80vh" 
                    image="./../../public/dining1.jpg"
                    title="Makes you feel classy"
                    text="We have mastered the art of creating the feeling of class in our dining experience ensuring you feel special from start to finish"
                    theme="dark"></v-card>
                <v-card class="mx-auto" width="40%" height="80vh"
                    image="./../../public/dining2.jpg"
                    title="World class Chefs"
                    text="We pride ourselves in the staff we have many of wich have industry recognized certifications and awards"
                    theme="dark"></v-card>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout>
                <v-card class="mx-auto" width="40%" height="80vh"
                    image="./../../public/dining3.jpg"
                    title="Served as requested"
                    text="We make the food as per the clients preferences to make sure you enjoy the experience"
                    theme="dark">
                </v-card>
                <v-card class="mx-auto" width="40%" height="80vh"
                    image="./../../public/dining4.jpg"
                    title="OOOH!! My food"
                    text="Isnt it mouth watering as the waiter aproaches with your food"
                    theme="dark">
                </v-card>
            </v-layout>
        </v-container>
    </div>
</template>

<style>
.messageview {
    align-items: left;
    top: 100px;
}

.dark-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.addon {
    height: 70vh;
    width: 50%;
    position: absolute;
    top: 100px;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

}

.addon v-img {
    max-height: 100%;
    max-width: 100%;
}

.vpic {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5))
}

h1 {
    color: #FFBC42;
}

h2 {
    color: #D81159;
}

h4 {
    color: #fff;
    width: 70vh;
}

h1,
h2,
h4 {
    font-weight: bolder;
    padding-left: 100px;
    z-index: 1;
}
</style>

<script>
export default {
    data: () => ({
        messages: [
            {
                from: 'You',
                message: `I'd like to book a table for two tonight.`,
                time: '10:42am',
                color: 'deep-purple-lighten-1',
            },
            {
                from: 'Umoja Foods',
                message: 'Yeah, sure. Does 7:00pm work?',
                time: '10:50am',
                color: 'green',
            },
            {
                from: 'You',
                message: 'Yes that would be great',
                time: '10:57am',
                color: 'deep-purple-lighten-1',
            },
        ],
    }),
}
</script>
