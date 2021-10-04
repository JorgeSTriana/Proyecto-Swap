<template>
    <div>
        <!-- <body> -->
            <!-- header section star -->
            
            <app-header></app-header>

            <!-- header section end -->

            <!-- home section star  -->
            <section class="home" id="home">

                <div class="content">
                    <!-- <h2>Modal Login Form</h2> -->

                    <button onclick="document.getElementById('id01').style.display='block'" class="btn_content" style="width:auto;">Login</button>
                    <button onclick="document.getElementById('id02').style.display='block'" class="btn_content" style="width:auto;">Register</button>
                    <div id="id01" class="modal">
                    
                        <form class="modal-content animate" action="" method="post">
                            <div class="imgcontainer">
<!--                                 <span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Modal">&times;</span>
 -->                                <!-- <img src="img_avatar2.png" alt="Avatar" class="avatar"> -->
                                <!-- <div class="imglog"><i class="fas fa-user "></i></div> -->
                                <img src="../../public/img/img-log.png" alt="Avatar" class="avatar">
                            </div>

                            <div class="container">
                                <label for="uname"><b>Username</b></label>
                                <input type="text" placeholder="Enter Username" name="uname" required>

                                <label for="psw"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="psw" required>
                                    
                                <button type="submit">Login</button>
                                <label>
                                    <input type="checkbox" checked="checked" name="remember"> Remember me
                                </label>
                            </div>

                            <div class="container_btns" style="background-color:#f1f1f1">
                                <button onclick="document.getElementById('id02').style.display='block'" class="cancelbtn" style="width:auto;">Register</button>
                                <button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                                <span class="psw">Forgot <a href="#">password?</a></span>
                            </div>
                        </form>
                    </div>
                <!--==================== form of register =============-->
                    <div id="id02" class="modal">
                        <div class="content_reg">
                            <form action="/action_page.php" class="">
                                <div class="container_reg">
                                    <h1>Register</h1>
                                    <p>Please fill in this form to create an account.</p>
                                    <hr>

                                    <label for="email"><b>Email</b></label>
                                    <input type="text" placeholder="Enter Email" name="email" id="email" required>

                                    <label for="psw"><b>Password</b></label>
                                    <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

                                    <label for="psw-repeat"><b>Repeat Password</b></label>
                                    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
                                    <hr>
                                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                                    <button type="submit" class="registerbtn">Register</button>
                                
                                
                                    <div class="container signin">
                                        <p>Already have an account? <a href="#" onclick="document.getElementById('id02').style.display='none',document.getElementById('id01').style.display='block'">Sign in</a>.</p>
                                        <button type="button" onclick="document.getElementById('id02').style.display='none',document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button>
                                        <span class="psw">Forgot <a href="#">password?</a></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- <h2>Our exclusive site</h2>
                    <h3>swap of all</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, 
                        a deleniti commodi sit quasi quam officiis ad accusantium doloribus dolores 
                        odio minus at possimus eum aliquid unde tempora quaerat in.</p>
                    <a href="#" class="btn">Sign up</a>
                </div>
                <div class="image"> -->
                    <!-- <img src="/img/img_product3.jpg" alt=""> -->
                    <!-- <a href="#" class="btn_content">Sign up</a> -->
                </div>

            </section>

            <!-- home section end -->

            <!-- popular section star -->

            <section class="popular" id="popular">
                <h1 class="heading">most <span>popular</span> products </h1>                
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
                    <div class="box">
                        <span class="price">
                            <!-- $5 - @20 -->
                            Available
                        </span>
                        <img src="/img/img_product5.jpg" alt="" width="350">
                        <div class="content">
                            <h3>Juguetes de madera</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                            <h4>Intereses</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt mollitia assumenda</p>
                            <a href="#" class="btn_img">View Image</a>
                        </div>
                        <h3>Jugetes de madera</h3>
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
                        <img src="/img/img_product6.jpg" alt="" width="350">
                        <div class="content">
                            <h3>Libros</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                            <h4>Intereses</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt mollitia assumenda</p>
                            <a href="#" class="btn_img">View Image</a>
                        </div>
                        <h3>Libros</h3>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <a href="./Cambio" class="btn">
                            Swap Now
                        </a>
                    </div>

                    <div class="box">
                        <span class="price">
                            Available
                        </span>
                        <img src="/img/img_product7.jpg" alt="" width="350">
                        <div class="content">
                            <h3>Ipad</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                            <h4>Intereses</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt mollitia assumenda</p>
                            <a href="#" class="btn_img">View Image</a>
                        </div>
                        <h3>Ipad</h3>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
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
                        <img src="/img/img_product8.jpg" alt="" width="350">
                        <div class="content">
                            <h3>Guitarras</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                            <h4>Intereses</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt mollitia assumenda</p>
                            <a href="#" class="btn_img">View Image</a>
                        </div>

                        <h3>Guitarras</h3>
                        
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

            <!-- popular section end -->

            <!-- product section star -->

            <!-- <section class="product" id="product">
                <h1 class="heading">
                    Feature <span>  Products</span>
                </h1>
                <div class="box-container">
                    <div class="box">
                        <img src="/img/img_product9.jpg" alt="">
                        <div class="content">
                            <h3>pc</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                                <a href="#" class="btn">Swap now</a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="/img/img_product9.jpg" alt="">
                        <div class="content">
                            <h3>New men shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                                <a href="#" class="btn">Swap now</a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="/img/img_product9.jpg" alt="">
                        <div class="content">
                            <h3>New men shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                                <a href="#" class="btn">Swap now</a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="/img/img_product9.jpg" alt="">
                        <div class="content">
                            <h3>New men shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                                <a href="#" class="btn">Swap now</a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="/img/img_product9.jpg" alt="">
                        <div class="content">
                            <h3>New men shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                                <a href="#" class="btn">Swap now</a>
                        </div>
                    </div>

                    <div class="box">
                        <img src="/img/img_product9.jpg" alt="">
                        <div class="content">
                            <h3>New men shoes</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vitae ad dignissimos, 
                                voluptate illum maiores dolor omnis sapiente nam, delectus, beatae laborum! Vero quod 
                                error omnis eum animi suscipit incidunt!</p>
                                <a href="#" class="btn">Swap now</a>
                        </div>
                    </div>
                </div>
            </section> -->

            <!-- product section end -->

            <!-- review section star -->

            <section class="review" id="review">
                <h1 class="heading">
                    our customer <span> reviews</span>
                </h1>
                <div class="box-container">
                    <div class="box">
                        <img src="/img/jorge_img.jpeg" alt="">
                        <h3>jorge triana</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Ab pariatur eveniet amet vitae numquam reprehenderit aliquid est earum fugit, 
                            vel maiores dolor consectetur ipsam, nemo tenetur doloremque laudantium, veritatis at?</p>
                    </div>

                    <div class="box">
                        <img src="/img/christina_img.jpg" alt="">
                        <h3>christina</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Ab pariatur eveniet amet vitae numquam reprehenderit aliquid est earum fugit, 
                            vel maiores dolor consectetur ipsam, nemo tenetur doloremque laudantium, veritatis at?</p>
                    </div>

                    <div class="box">
                        <img src="/img/pedro_img.jpg" alt="">
                        <h3>pedro</h3>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Ab pariatur eveniet amet vitae numquam reprehenderit aliquid est earum fugit, 
                            vel maiores dolor consectetur ipsam, nemo tenetur doloremque laudantium, veritatis at?</p>
                    </div>
                </div>
            </section>
            <!-- review section end -->

            <!-- news letter start -->
            
            <section class="news-letter">
                <h1 class="heading">receive notifications</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui velit itaque a iste rerum quos quae, 
                    inventore, consectetur fugiat dolores odit eum veritatis hic quasi animi at quo vel aliquid?</p>
            
                <form action="#">
                    <input type="text" placeholder="Enter your email addres here...">
                    <button class="btn">
                        Subscribe Newsletter 
                    </button>
                </form>
            </section>

            <!-- news letter end -->

            <!-- order section start -->

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
                        <input type="submit" value="share now" class="btn">                        
                    </form>
                </div>
            </section>

            <!-- order section end -->

            <!-- footer section -->

            <section class="footer">
                <div class="share">
                    <a href="#" class="btn">facebook</a>
                    <a href="#" class="btn">twitter</a>
                    <a href="#" class="btn">instagram</a>
                    <a href="#" class="btn">pinterest</a>
                    <a href="#" class="btn">linkedin</a>
                </div>

                <h1 class="credit">
                    Created by <span> Grupo 2-28</span> | all rights reserved!
                </h1>
            </section>

            <!-- scroll top button -->

            <a href="#home" class="fas fa-angle-up" id="scroll-top"></a>
            
        <!-- </body> -->
    </div>
</template>

<script scr="../../public/js/app.js"></script> 


<script>
    import AppHeader from '@/components/AppHeader.vue'
    export default{
        name: 'Swap',
        components: {
            AppHeader
        } 
    }
</script>
