<template>

    <div class="relative flex lg:px-[0px] md:flex-col md:items-start md:mt-[1000px]
    sm:mt-[950px] min-[320px]:mt-[800px]
    lg:mt-[1110px] lg:items-start
    min-[2000px]:mt-[1700px]
    
    justify-evenly sm:flex-col sm:items-start sm:mt-[40px] min-[320px]:flex-col min-[320px]:justify-center min-[320px]:items-center">
        <!-- this div for the postion link tag for the footer links -->
            <div id="whychoose" class="absolute top-[-120px]">
            </div>
        <!-- first Flex Left side -->
        <div 

        class="flex flex-col lg:items-start lg:justify-start min-[320px]:items-start min-[320px]:justify-start min-[320px]:mt-9
        md:items-start md:justify-start 
        sm:items-start sm:justify-start
         " >
            <h3 class="font-bold text-[gray]">EXPLORE</h3>
            <h1 class="inline text-[#293793] text-[48px] font-bold
                min-[2000px]:text-[84px]
                sm:mt-4 lg:mt-[0px]
                md:mt-0 sm:mt-0
                lg:text-[44px] min-[320px]:text-[32px]
                ">Why Choose the Bethel Platform?</h1>

            <p class="text-[13px] mt-[10px] font-medium"> Choosing the BETHEL platform signifies aligning with a vision of innovation and security in the decentralized digital domain. BETHEL stands out for its comprehensive solutions that cater to a diverse range of industries and needs, offering a reliable and scalable infrastructure that fosters growth and adaptability. With a user-centric approach at its core, BETHEL promises not only a platform for development but a gateway to the future of digital innovation, where your ideas can flourish in a secure and advanced ecosystem.</p>
                
        </div>

        <!-- start of the courasal -->

        <div
        
        class="lg:flex md:flex sm:flex lg:w-full md:w-full sm:w-full min-[320px]:w-full mt-[50px] min-[320px]:hidden">
            <swiper
                :slidesPerView="3"
                :spaceBetween="20"
                :freeMode="false"
                :autoplay="{
                    delay: 2000,
                    disableOnInteraction: false,
                    }"
                
                :modules="modules"
                class="mySwiper"
            >   
                <!-- 12121211221212121111211211212 -->
                <swiper-slide>
                    <!-- first flex box -->
            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl lg:p-3 lg:mt-0
            lg:w-[300px] lg:h-[250px] lg:mb-[40px]
            sm:w-[300px] sm:h-[250px] sm:mt-7 
            md:w-[200px] md:h-[250px] md:px-1
            min-[320px]:w-[350px] min-[320px]:h-[160px] min-[320px]:mt-9 min-[320px]:mb-10
            hover:translate-y-[0px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/ScondIcons/11.png" alt="" class="lg:w-[80px] md:w-[60px] sm:w-[60px] min-[320px]:w-[40px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center lg:text-[17px] md:text-[13px] lg:mt-1 md:mt-1">
                    <h1 class="font-bold min-[320px]:text-[10px] lg:text-[14px] md:text-[14px] sm:text-[14px]" >Unmatched Data Security</h1>
                    <h3 class="font-medium lg:text-[15px] min-[320px]:text-[10px]">Your Information is safe <br> with us.</h3>
                </div>
            </div>
            <!-- end of the flex box -->
                </swiper-slide>

                <!-- 12121211221212121111211211212 -->
                <swiper-slide>
                    <!-- first flex box -->
            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl lg:p-3 lg:mt-0
            lg:w-[300px] lg:h-[250px]
            sm:w-[300px] sm:h-[250px] sm:mt-7 
            md:w-[200px] md:h-[250px] md:px-1
            min-[320px]:w-[350px] min-[320px]:h-[160px] min-[320px]:mt-9
            hover:translate-y-[0px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out
            ">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/NewIcons/3.png" alt="" class="lg:w-[80px] md:w-[60px] sm:w-[80px] min-[320px]:w-[40px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center lg:text-[17px] md:text-[13px] lg:mt-1 md:mt-1">
                    <h1 class="font-bold min-[320px]:text-[10px] lg:text-[14px] md:text-[14px] sm:text-[14px]" >Remarkable Scalability</h1>
                    <h3 class="font-medium lg:text-[15px] min-[320px]:text-[10px]">Our platform grows with <br>your needs.</h3>
                </div>
            </div>
            <!-- end of the flex box -->
                </swiper-slide>

                <!-- 12121211221212121111211211212 -->
                <swiper-slide>
                    <!-- first flex box -->
            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl lg:p-3 lg:mt-0
            lg:w-[300px] lg:h-[250px]
            sm:w-[300px] sm:h-[250px] sm:mt-7 
            md:w-[200px] md:h-[250px] md:px-1
            min-[320px]:w-[350px] min-[320px]:h-[160px] min-[320px]:mt-9
            hover:translate-y-[0px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/NewIcons/4.png" alt="" class="lg:w-[80px] md:w-[60px] sm:w-[60px] min-[320px]:w-[40px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center lg:text-[17px] md:text-[13px] lg:mt-1 md:mt-1">
                    <h1 class="font-bold min-[320px]:text-[10px] lg:text-[14px] md:text-[14px] sm:text-[14px]" >User-Friendly</h1>
                    <h3 class="font-medium lg:text-[15px] min-[320px]:text-[10px]">Intuitive design for <br>
                        seamless usage.</h3>
                </div>
            </div>
            <!-- end of the flex box -->
                </swiper-slide>

                <!-- 12121211221212121111211211212 -->
                <swiper-slide>
                    <!-- first flex box -->
            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl lg:p-3 lg:mt-0
            lg:w-[300px] lg:h-[250px]
            sm:w-[300px] sm:h-[250px] sm:mt-7 
            md:w-[200px] md:h-[250px] md:px-1
            min-[320px]:w-[350px] min-[320px]:h-[160px] min-[320px]:mt-9
            hover:translate-y-[0px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/NewIcons/5.png" alt="" class="lg:w-[80px] md:w-[60px] sm:w-[60px] min-[320px]:w-[40px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center lg:text-[17px] md:text-[13px] lg:mt-1 md:mt-1">
                    <h1 class="font-bold min-[320px]:text-[10px] lg:text-[14px] md:text-[14px] sm:text-[14px]" >Versatility</h1>
                    <h3 class="font-medium lg:text-[15px] min-[320px]:text-[10px]">Tailored solutions for <br> diverse use-cases.</h3>
                </div>
            </div>
            <!-- end of the flex box -->
                </swiper-slide>

                <!-- 12121211221212121111211211212 -->
                <swiper-slide>
                    <!-- first flex box -->
            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl lg:p-3 lg:mt-0
            lg:w-[300px] lg:h-[250px] 
            sm:w-[300px] sm:h-[250px] sm:mt-7
            md:w-[200px] md:h-[250px] md:px-1
            min-[320px]:w-[350px] min-[320px]:h-[160px] min-[320px]:mt-9
            hover:translate-y-[0px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/ScondIcons/3.png" alt="" class="lg:w-[80px] md:w-[60px] sm:w-[60px] min-[320px]:w-[40px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center lg:text-[17px] md:text-[13px] lg:mt-1 md:mt-1">
                    <h1 class="font-bold min-[320px]:text-[10px] lg:text-[14px] md:text-[14px] sm:text-[14px]" >Resilience</h1>
                    <h3 class="font-medium lg:text-[15px] min-[320px]:text-[10px]">Built strong to withstand <br> challenges.</h3>
                </div>
            </div>
            <!-- end of the flex box -->
                </swiper-slide>
                
            </swiper>
        </div>


        <!-- mobile phone size flex box -->

        <div class="flex mt-10 flex-wrap items-center justify-center gap-[30px] lg:hidden md:hidden sm:hidden">
            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl px-8 py-2 w-[200px] h-[200px]
            ">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/NewIcons/3.png" alt="" class="min-[320px]:w-[66px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center mt-3">
                    <h1 class="font-bold text-[14px] mt-2" >Remarkable Scalability</h1>
                    <h3 class="font-medium text-[13px]">Our platform grows with <br>your needs.</h3>
                </div>
            </div>
            <!-- end of the flex box -->

            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl px-8 py-2 w-[200px] h-[200px]
            ">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/ScondIcons/11.png" alt="" class="min-[320px]:w-[70px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center mt-3">
                    <h1 class="font-bold text-[14px] mt-2" >Unmatched Data Security</h1>
                    <h3 class="font-medium text-[13px]">Your Information is safe <br> with us.</h3>
                </div>
            </div>
            <!-- end of the flex box -->


            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl px-8 py-2 w-[200px] h-[200px]
            ">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/NewIcons/4.png" alt="" class="min-[320px]:w-[70px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center mt-3">
                    <h1 class="font-bold text-[14px] mt-2" >User-Friendly</h1>
                    <h3 class="font-medium text-[13px]">Intuitive design <br> for <br>
                        seamless usage.</h3>
                </div>
            </div>
            <!-- end of the flex box -->

            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl px-8 py-2 w-[200px] h-[200px]
            ">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/NewIcons/5.png" alt="" class="min-[320px]:w-[70px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center mt-3">
                    <h1 class="font-bold text-[14px] mt-2" >Versatility</h1>
                    <h3 class="font-medium text-[13px]">Tailored solutions for <br> diverse use-cases.</h3>
                </div>
            </div>
            <!-- end of the flex box -->

            <div class="flex flex-col shadow-xl border-2 justify-evenly rounded-2xl px-8 py-2 w-[200px] h-[200px]
            ">
                <!-- image flex box -->
                <div class="flex items-center justify-center">
                    <img src="../img/ScondIcons/3.png" alt="" class="min-[320px]:w-[70px]">
                </div>

                <!-- image content box -->
                <div class="justify-center text-center mt-3">
                    <h1 class="font-bold text-[14px] mt-2" >Resilience</h1>
                    <h3 class="font-medium text-[13px]">Built strong to withstand <br> challenges.</h3>
                </div>
            </div>
            <!-- end of the flex box -->

        </div>

        


    </div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import {Autoplay, FreeMode, Pagination ,Navigation } from 'swiper/modules';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';

  import 'swiper/css/free-mode';
  import 'swiper/css/pagination';

export default {
    name : 'BethelChoose',

    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [FreeMode,Pagination, Autoplay, Navigation],
      };
    },
}


</script>

<style scoped>

.swiper {
  width: 90%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

@media only screen and (max-width: 320px) {
    .swiper {
        width: 90%;
        height: 50%;
    }

    .swiper-slide{
        width: 200%;
    }
} 
</style>
