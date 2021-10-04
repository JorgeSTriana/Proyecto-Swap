<template>
    <div>
        <app-header></app-header>
        <!-- ==============fin de header============== -->
        <section class="perfil" id="perfil">
            <div class="perfilheading"><h1 class="heading-perfil">Perfil</h1></div>                
            <div class="box-container-perfil">
                <!-- <div class="box"> -->
                    <div class="img-container-perfil">
                        <a href="./Perfil"><img class="img-profile" src="/img/pedro_img.jpg" alt="profile" width="100" height="100"></a>
                    
                        <h3>Pedro Suarez</h3>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <div class="btns_form_perfil">
                            <input type="submit" value="foto de perfil" class="btn"> 
                            <input type="submit" value="add product" class="btn" onclick="document.getElementById('id03').style.display='block'">
                            <!-- <input type="button" class="btn_img">foto de perfil</input> -->
                            <!-- <button onclick="document.getElementById('id03').style.display='block'" class="btn" style="width:auto;">Add Product</button> -->
                        </div>
                    </div>
                    <div id="id03" class="modal">
                        <section class="order" id="order">
                        <h1 class="heading">
                            <span>Product</span> New
                        </h1>
                        <div class="row">
                            <div class="image">
                                <img src="/img/img_product4.jpg" alt="">
                                <input type="submit" value="add picture" class="btn_add-picture">
                            </div>
                            <form action="#">
                            <div class="inputBox">
                                <input type="text" placeholder="name">
                                <input type="text" placeholder="email">
                            </div>
                            <div class="inputBox">
                                <input type="number" placeholder="phone">
                                <input type="text" placeholder="Object name">
                            </div>
                            <textarea placeholder="description" name="" id="" cols="30" rows="10"></textarea> 
                            <textarea placeholder="intereses" name="" id="" cols="30" rows="10"></textarea>  
                             
                            <div class="btns_form_perfil">
                                <input type="submit" value="save now" class="btn"> 
                                <button type="button" onclick="document.getElementById('id03').style.display='none'" class="btn">Cancel</button>  
                            </div>                     
                        </form>
                    </div>
                    </section>
                    </div>
                    <div class="mis-objetos">
                        <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eligendi maiores dignissimos ipsam fugiat in saepe aspernatur amet deleniti dolor voluptates similique quam quaerat, libero blanditiis minus itaque eveniet fuga.</p> -->
                        <section class="popular" id="popular">
                            <h1 class="heading">my <span>products</span>  </h1>                
                            <div class="box-container">
                                <div class="box">
                                    <span class="price">
                                        Available
                                    </span>
                                    <img src="/img/img_product1.jpg" alt="" width="350">
                                    <div class="content">
                                        <h3>Play Station 2</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                            voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                            error omnis eum animi suscipit incidunt!</p>
                                        <h4>Intereses</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt mollitia assumenda</p>
                                        <a href="#" class="btn_img">View Image</a>
                                    </div>
                                    <h3>Play Station 2</h3>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <a href="./Cambio" class="btn">
                                        Swap Now
                                    </a>
                                </div>
                                
                                <div class="box">
                                    <span class="price">
                                        Available
                                    </span>
                                    <img src="/img/img_product4.jpg" alt="" width="350">
                                    <div class="content">
                                        <h3>Pantalla Pc</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                            voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                            error omnis eum animi suscipit incidunt!</p>
                                        <h4>Intereses</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt mollitia assumenda</p>
                                        <a href="#" class="btn_img">View Image</a>
                                    </div>
                                    <h3>Pantalla Pc</h3>
                                    <div class="star">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                    <a href="./Cambio" class="btn">
                                        Swap Now
                                    </a>
                                    
                                </div>
                            </div>
                        </section>
                    </div>
                <!-- </div>   --> 
            </div>
        </section>


            <!-- <h1>Este es mi perfil</h1>
            <div>
                <a href="./Swap" class="btn">
                    Swap home
                </a>
            </div> -->
        
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