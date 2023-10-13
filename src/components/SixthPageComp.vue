<template>
    <div id="team">

    </div>
    <div
    class="relative z-[0] min-[320px]:mt-[100px] sm:mt-[150px] md:mt-[100px] lg:mt-[150px]
    min-[2000px]:mt-[200px] ">
        <!-- <img src="../img/Vector3.png" alt="" class="absolute right-[-160px] top-[-70px] scale-[1.5]"> -->
        <!-- <img src="../img/Vector4.png" alt="" class="absolute right-[-160px] top-[-70px] scale-[1.5]"> -->

        <!-- main grid div -->
        <div class="z-[200] grid sm:grid-rows-[1fr] md:grid-rows-[1fr_1fr]">

            <!-- bethel team row 1 -->
            <div class="z-[200]">
                <h3 class="text-[gray] text-[16px] font-bold
                min-[2000px]:text-[30px]">CORE TEAM & OUR VALUES</h3>
                <h1 class="text-[#293793] text-[48px] font-bold inline
                min-[2000px]:text-[80px] ">Bethel Team </h1>
            </div>

            <!-- paragraph Row 2 -->
            <div class="lg:mt-[10px] md:pr-[50px] lg:pr-[60px] z-[200] lg:text-[15px] min-[320px]:mt-[24px]">
                <p class="bold min-[2000px]:text-[30px] min-[320px]:text-[13px]">Our product team is a powerhouse of dedicated professionals, each a master in their respective domains, united by a shared vision and an unwavering commitment to excellence. This core assembly is bolstered by a remarkable group of dynamic individuals, tirelessly working to enhance BETHEL's capabilities and reach.</p>
                <!-- <p class="mt-[10px] min-[2000px]:text-[30px] min-[2000px]:mt-[20px] min-[320px]:text-[13px]">Together, this synergistic team grasps the immense potential and boundless opportunities that the decentralized digital landscape presents. Fully cognizant of the exponential growth and the transformative possibilities within the Web3 and AI realms, they are fervently channeling their expertise and passion to carve out a future where BETHEL stands as a beacon of innovation and security.</p> -->
            </div>       
        </div>
    </div>

        <div
        

        class="hidden lg:flex md:flex">
            <swiper
                :slidesPerView="4"
                :spaceBetween="30"
                :freeMode="false"
                :navigation="true"
                :modules="modules"
                class="mySwiper"
            >
                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center mb-10">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/01.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Craig Bricknell</h3>
                                <h2 class="text-[orange] text-[13px]">Managing Director/CEO</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/craig-bricknell-b7198225/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/02.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Sanjeewa Silva</h3>
                                <h2 class="text-[orange] text-[13px]">Director/CTO</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/sanjeewa-silva/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/07.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Diyath Rajapakshe</h3>
                                <h2 class="text-[orange] text-[13px]">Technical Lead</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/diyathsahanrajapakshe/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/06.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Ruchira Perera</h3>
                                <h2 class="text-[orange] text-[13px]">Finance Controller</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/ruchira-perera-4619832a/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/04.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Chanaki De Costa</h3>
                                <h2 class="text-[orange] text-[13px]">Director</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/chanaki-de-costa-24b241146/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/05.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Nissanka Devendra</h3>
                                <h2 class="text-[orange] text-[13px]">Diector/Investor</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/nissanka-devendra-42396743/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/03.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Dale Taylor</h3>
                                <h2 class="text-[orange] text-[13px]">Director</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/dale-taylor-671a1563/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

    

                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/09.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Amal Chamara</h3>
                                <h2 class="text-[orange] text-[13px]">Community Manager</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/amal-chamara-pushpa-kumara-4339a21a2/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

                <SwiperSlide>
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/08.jpg" alt="" class="w-[250px] rounded-lg grayscale hover:grayscale-0">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Lakmal Bulathge</h3>
                                <h2 class="text-[orange] text-[13px]">Blockchain Developer</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/lakmal-bulathge-6223a213a/1joinnow" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                </SwiperSlide>

            </swiper>

            



            

        </div>



        <!-- small size without swiper -->
        <div class="flex min-[320px]:mt-10 gap-10 w-full sm:flex-row sm:flex-wrap sm:items-center sm:justify-center min-[320px]:items-center min-[320px]:justify-center  min-[320px]:flex-col md:hidden lg:hidden">
            
        
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/01.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Craig Bricknell</h3>
                                <h2 class="text-[orange] text-[13px]">Managing Director/CEO</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/craig-bricknell-b7198225/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                

            
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/02.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Sanjeewa Silva</h3>
                                <h2 class="text-[orange] text-[13px]">Director/CTO</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/sanjeewa-silva/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                

            
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/07.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Diyath Rajapakshe</h3>
                                <h2 class="text-[orange] text-[13px]">Technical Lead</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/diyathsahanrajapakshe/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                

            
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/06.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Ruchira Perera</h3>
                                <h2 class="text-[orange] text-[13px]">Finance Controller</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/ruchira-perera-4619832a/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                

            
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/04.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Chanaki De Costa</h3>
                                <h2 class="text-[orange] text-[13px]">Director</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/chanaki-de-costa-24b241146/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                

            
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/05.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Nissanka Devendra</h3>
                                <h2 class="text-[orange] text-[13px]">Diector/Investor</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/nissanka-devendra-42396743/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                

            
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/03.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Dale Taylor</h3>
                                <h2 class="text-[orange] text-[13px]">Director</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/dale-taylor-671a1563/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                

    

            
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/09.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Amal Chamara</h3>
                                <h2 class="text-[orange] text-[13px]">Community Manager</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/amal-chamara-pushpa-kumara-4339a21a2/" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                

            
                    <!-- first photo flex 1 -->
                    <div class="flex-col p-4 w-[250px] rounded-xl shadow-lg items-center justify-center">
                        <!-- photo container -->
                        <div class="flex items-center justify-center">
                            <img src="../img/team/08.jpg" alt="" class="w-[250px] rounded-lg">
                        </div>

                        <!-- discription container -->
                        <div class="flex mt-2">
                            <!-- name and the postion flex -->
                            <div class="flex flex-col items-center w-[180px]">
                                <h3 class="text-[#293793] text-[14px]">Lakmal Bulathge</h3>
                                <h2 class="text-[orange] text-[13px]">Blockchain Developer</h2>
                            </div>
                        

                            <!-- linked in photo Sec -->
                            <div class="flex items-start justify-start">
                                <a href="https://www.linkedin.com/in/lakmal-bulathge-6223a213a/1joinnow" target="_blank"><img src="../img/icons/linkedin.png" alt="" class="w-[40px] ml-2"></a>
                            </div>
                        </div>
                    </div>
                    <!-- end of the first flex -->
                    
                
        </div>

</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import {Autoplay, FreeMode, Pagination ,Navigation } from 'swiper/modules';

import { useSwiper } from 'swiper/vue';

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
        const swiper = useSwiper();
      return {
        swiper,
        modules: [FreeMode,Pagination, Autoplay, Navigation],
      };
    },
}



</script>

<style scoped>

.swiper {
  width: 100%;
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

</style>




