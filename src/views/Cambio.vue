<template>
    <div>
        <app-header></app-header>
        <!-- ==============fin de header============== -->
        <section class="popular" id="popular">
            <h1 class="heading-cambio"><span>Swap</span> Complete </h1>                
                <div class="box-container">
                    <div class="box">
                        <span class="price">
                            Available
                        </span>
                        <img src="/img/img_product1.jpg" alt="">
                        <h3>Play Station 2</h3>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <!-- <a href="./Cambio" class="btn">
                            Swap Now
                        </a> -->
                        <div class="detalles">
                            <div class="descripcion">
                                <h2>Descripción</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Praesentium provident sunt saepe expedita, nihil facilis impedit 
                                sapiente non ipsum dolorem explicabo dignissimos, 
                                accusamus quasi delectus quia sit tempore corrupti earum!</p>
                            </div>
                            <div class="descripcion">
                                <h2>Intereses</h2>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                Praesentium provident sunt saepe expedita, nihil facilis impedit 
                                sapiente non ipsum dolorem explicabo dignissimos, 
                                accusamus quasi delectus quia sit tempore corrupti earum!</p>
                            </div>
                        </div>
                    </div>
                            
                    <div class="box">
                        <h3>Mis Productos</h3>
                        <div class="navbar-products">
                            <a href="">filter</a>
                            <a href="">category</a>
                            <a href="">view all</a>
                        </div>
                        <img src="/img/img_product4.jpg" alt="" width="350">
                        
                        <h3>Pantalla Pc</h3>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <a href="./Cambio" class="btn">
                            Swap object
                        </a>
                        <!-- <a href="./Cambio" class="btn">
                            Swap Now
                        </a> -->
                    </div>
                </div>
            
        </section>
    </div>
</template>

<script>
    import AppHeader from '@/components/AppHeader.vue'
    export default{
        name: 'Swap',
        components: {
            AppHeader
        } 
    }
</script>