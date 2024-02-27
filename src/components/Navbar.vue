<template>
    <v-app-bar color="#DD1C1A">
        <div class="padi">
            <v-btn to="/" color="white" dark>Home </v-btn>
        </div>
        <div>
            <v-btn to="/aboutus" color="white" dark>About Us </v-btn>
        </div>
        <div>
            <v-btn to="/contactus" color="white" dark>Contact Us </v-btn>
        </div>
        <div class="flex-grow-1"></div>
        <v-img src="./../../public/Screenshot 2024-02-22 220551.jpg" max-height="60"></v-img>
        <div class="flex-grow-1"></div>
        <div>
            <v-btn to="/menu" color="white" dark>Menu </v-btn>
        </div>
        <div class="pad">
            <v-card color="#FFBC42" outlined dark  class="border">
                <v-btn dark>Order Online</v-btn>
            </v-card>
        </div>
    </v-app-bar>
</template>

<style>
.border{
    border-radius: 10px 0 20px 0 !important; 
}
.pad{
    padding-right: 50px;

}
.padi{
    padding-left: 50px;
}
</style>