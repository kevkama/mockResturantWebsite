<template>
    <div id="aboutus">
        <v-parallax padding="0" height='100vh' width='1000vh' src="./../../public/fancyKitchen.jpg">
        </v-parallax>
        <v-container class=" text-center">
            <v-layout class="d-flex justify-center">
                <h1>About us</h1>
            </v-layout>
            <v-layout>
                <v-divider></v-divider>
            </v-layout>
            <v-layout class="write">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores facere ullam et sapiente, iusto
                    recusandae velit reiciendis, eos dolorem facilis quam? Aspernatur labore magnam reiciendis quod eveniet
                    a necessitatibus nobis ullam sit minus, enim, quas vel accusantium, quibusdam sint molestiae? Id nobis
                    inventore maxime nam sequi doloribus earum eos voluptatem praesentium possimus. Sunt, excepturi
                    reprehenderit! Quas animi alias inventore cumque fugit ea aperiam fugiat a esse temporibus dolore quos
                    consequuntur illo qui, magni facere debitis minima illum! Distinctio nam, nulla possimus aliquid
                    impedit, eaque ipsa sed maxime quisquam ratione repellat, laborum dolor aperiam culpa voluptatem nobis
                    consequatur aut ad. Dolor itaque incidunt nulla quisquam quo illum inventore atque quibusdam delectus
                    iure nemo repellendus odio, quia dolorem voluptatibus labore sint consectetur perferendis accusamus
                    vitae quasi voluptate iste. Magnam molestias fuga dolorem magni. Aliquam in expedita praesentium esse
                    dicta perferendis asperiores rem, et debitis nobis officia mollitia dolores, minima veritatis rerum ipsa
                    eligendi, quas nisi! Aliquam tempore ab quas, animi adipisci voluptatum consequatur eum optio dolore,
                    laudantium magnam temporibus fugiat aut explicabo quos nesciunt odit sit ipsam similique id tempora
                    maiores tenetur. Minima explicabo impedit minus dolorum reiciendis. Cupiditate quidem beatae accusamus
                    voluptatum atque numquam, nemo, error, impedit minus cumque aperiam saepe.</p>
            </v-layout>
        </v-container>

        <v-container>
            <v-layout>
                <v-card class="mx-auto" width="40%" height="80vh" image="./../../public/dining1.jpg"
                    title="Makes you feel classy"
                    text="We have mastered the art of creating the feeling of class in our dining experience ensuring you feel special from start to finish"
                    theme="dark"></v-card>
                <v-card class="mx-auto" width="40%" height="80vh" title="Umoja foods ingridients" text="Sourcing ingredients is a critical aspect of running a restaurant, influencing both the quality of dishes served and the overall dining experience. Here's a passage about how a restaurant might approach ingredient sourcing. At our restaurant, sourcing ingredients is more than just a task; it's a commitment to excellence and sustainability.
                    We believe that the quality of our dishes is directly linked to the quality of the ingredients we use,
                    which is why we place immense importance on where and how we source them. Our journey begins with
                    forging strong relationships with local farmers, growers, and suppliers who share our values. We
                    prioritize locally sourced, seasonal ingredients whenever possible, not only because they are fresher
                    and more flavorful but also because we are passionate about supporting our community and reducing our
                    carbon footprint. In addition to sourcing locally, we are dedicated to ethical and sustainable
                    practices. We carefully vet our suppliers to ensure that they adhere to responsible farming and fishing
                    methods, prioritize animal welfare, and minimize environmental impact. Whether it's selecting humanely
                    raised meats, sustainably harvested seafood, or organic produce, every ingredient that finds its way
                    into our kitchen is chosen with integrity and care. Our commitment to ingredient sourcing extends beyond
                    just what's on the plate."></v-card>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout>
                <v-card class="mx-auto" width="40%" height="80vh" title="Umoja Foods Kenya" text="Welcome to UmojaFoods where culinary excellence meets heartfelt 
                    hospitality in a warm and inviting ambiance. As the proud owner of this 
                    establishment, allow me to take you on a journey through our restaurant.
                    Nestled in the heart of Nairobi, UmojaFoods embodies a harmonious blend 
                    of rustic charm and contemporary flair. Our restaurant is designed to 
                    evoke a sense of comfort and relaxation, with earthy tones, natural 
                    textures, and ambient lighting that create an atmosphere of warmth and 
                    intimacy.Upon entering, you'll be greeted by the tantalizing aromas wafting 
                    from our open kitchen, where our talented chefs work their magic with the finest 
                    ingredients sourced from local farms and artisans. Our commitment to quality and 
                    sustainability is reflected in every aspect of our menu, which celebrates the rich 
                    iversity of flavors and culinary traditions from around the world.
                    At UmojaFoods we believe in the power of food to bring people together and create 
                    lasting memories. Whether you're joining us for a romantic dinner for two, a 
                    celebratory gathering with friends and family, or a casual brunch with colleagues, 
                    our attentive staff will ensure that your experience is nothing short of exceptional.
                    Start your culinary journey with a selection of small plates inspired by global 
                    cuisines, each meticulously crafted to tantalize your taste buds and ignite your senses.">
                </v-card>
                <v-card class="mx-auto" width="40%" height="80vh" image="./../../public/dining4.jpg" title="OOOH!! My food"
                    text="Isnt it mouth watering as the waiter aproaches with your food" theme="dark">
                </v-card>
            </v-layout>
        </v-container>

        <v-container class=" text-center">
            <v-layout class="d-flex justify-center">
                <h1>Our Staff</h1>
            </v-layout>
            <v-layout>
                <v-divider></v-divider>
            </v-layout>
        </v-container>
        <v-container>
            <v-container>
                <v-layout style="display: flex; justify-content: center;">
                    <div class="mr-15 mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344" v-bind="props">
                                <v-img src="./../../public/cheff1.jpg" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Robbert Wilson
                                    </h2>
                                    Head cheff
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>

                    <div class="mr-15 mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344" v-bind="props">
                                <v-img src="./../../public/cheff2.jpg" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Francis Ogato
                                    </h2>
                                    Resident cook
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>
                    <div class="mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344" v-bind="props">
                                <v-img src="./../../public/cheff3.jpg" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Alex Waywire
                                    </h2>
                                    Culinary master
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>

                </v-layout>
            </v-container>

            <v-container>
                <v-layout style="display: flex; justify-content: center;">
                    <div class="mr-15 mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344" v-bind="props">
                                <v-img src="./../../public/waiter1.jpg" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Maxwell Rogers
                                    </h2>
                                    Head Waiter
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>

                    <div class="mr-15 mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344"  v-bind="props">
                                <v-img src="./../../public/waiter2.jpg" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Maggie Johnson
                                    </h2>
                                    Bar waiter
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>
                    <div class="mb-4">
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344" v-bind="props">
                                <v-img src="./../../public/waiter3.jpg" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Jane Wattson
                                    </h2>
                                    Main area waiter
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>

                </v-layout>
            </v-container>

            <v-container>
                <v-layout style="display: flex; justify-content: center;">
                    <div>
                        <v-hover v-slot="{ isHovering, props }">
                            <v-card class="mx-auto" max-width="344" v-bind="props">
                                <v-img src="./../../public/manager.jpg" height="340"></v-img>

                                <v-card-text>
                                    <h2 class="text-h6 text-primary">
                                        Bishop Mendes
                                    </h2>
                                    Floor manager
                                </v-card-text>
                                <v-overlay :model-value="isHovering" contained scrim="#036358"
                                    class="align-center justify-center">
                                    <v-btn variant="flat">See more info</v-btn>
                                </v-overlay>
                            </v-card>
                        </v-hover>
                    </div>
                </v-layout>
            </v-container>
        </v-container>
    </div>
</template>