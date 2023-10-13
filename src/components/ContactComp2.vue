<template>
    <!-- main flex  -->
    <div class="flex flex-col lg:mt-[200px] ">
        <!-- Caption area row 1-->
        <div
        
        class="my-3">
            <h1 class="text-[gray] font-bold">JOIN BETHEL</h1>
            <h1
            class="lg:text-[44px] md:text-[28px] font-bold text-[#293793] inline text-[44px]
                min-[320px]:text-[38px]">Global community</h1>
        </div>

        <!-- pharagraph area row 2 -->
        <div
        
        class="lg:mt-[0px] min-[320px]:mt-6">
            <p class="md:text-[13px]">BETHEL is an open-source platform collaboratively engineered by a dedicated community of developers, researchers, and users. United by the common objective of advancing BETHEL as a public utility, this community aims to contribute to the broader blockchain and decentralized cloud service ecosystem.</p>
        </div>
        
        <!-- Squre containers  -->
        <div class="flex flex-row justify-center
        lg:mt-[40px] lg:flex-wrap lg:h-[200px] lg:mb-[70px]
        md:mt-[60px] md:flex-wrap md:gap-6
        sm:flex-wrap sm:gap-6 sm:mt-[40px]
        min-[320px]:flex-wrap min-[320px]:gap-6 min-[320px]:mt-[40px]">

            <!--Social media containers 1 -->
            <div  >
               <div @mouseover="modalStore.warning = true" @mouseleave="modalStore.warning = false"
                class="felx flex-row border-2 px-[28px] py-[34px] rounded-[15px] shadow-xl w-[220px]  
                hover:translate-y-[-10px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">

                <!-- Image and text -->
                <div class="flex items-center" >
                    <img src="../img/icons/discord.png" alt="" class="w-[30px] mr-2">
                    <h3>Discord</h3>
                </div>


                <div >
                    <!-- Under Text para -->
                    <div class="flex mt-3 items-center animate__animated animate__flipInX" v-show="!modalStore.warning">
                        <h3 class="text-[#595a5e] text-[14px]">Get involved</h3>
                        <img src="../img/icons/arrowi1.png" alt="" class="ml-5 w-[20px] h-[20px] ">
                    </div>

                    <!-- appearance text -->
                    <div class="mt-2 opacity-90 w-[160px] bg-blue-100 rounded-lg p-1 flex items-center justify-center text-[#293793] animate__animated animate__flipInX" v-show="modalStore.warning">
                        <h3 class="text-[14px]">In Progress...</h3>
                    </div>
                </div>
                
            

            </div> 
            </div>
                
            
            <!-- end of the Social media containers -->

            <!--Social media containers 1 -->
            <a href="https://twitter.com/BethelPlatform" target="_blank"><div
                
                class="felx flex-row border-2 px-[28px] py-[34px] rounded-[15px] shadow-xl w-[220px]
                hover:translate-y-[-10px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">

                <!-- Image and text -->
                <div class="flex items-center" >
                    <img src="../img/icons/x.png" alt="" class="w-[30px] mr-2">
                    <h3>X.com</h3>
                </div>

                <!-- Under Text para -->
                <div class="flex mt-3" @mouseover="upBoxClass = 'translate-x-[15px] transition-all duration-[5000] scale-[1.1]'" @mouseleave="upBoxClass = ''">
                    <h3 class="text-[#293793] text-[14px]"   >Get involved</h3>
                    <img src="../img/icons/arrowi1.png" alt="" class="ml-5 w-[20px] h-[20px]" :class="upBoxClass">
                </div>

                </div>
            </a>
            <!-- end of the Social media containers -->

            <!--Social media containers 1 -->
            <a href="https://www.youtube.com/channel/UCVYnUnw_tKTlhdrx5Epnz-w" target="_blank"><div
                
                class="felx flex-row border-2 px-[28px] py-[34px] rounded-[15px] shadow-xl w-[220px]
                hover:translate-y-[-10px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">

                <!-- Image and text -->
                <div class="flex items-center">
                    <img src="../img/icons/youtube.png" alt="" class="w-[30px] mr-2">
                    <h3>Youtube</h3>
                </div>

                <!-- Under Text para -->
                <div class="flex mt-3" @mouseover="upBoxClass1 = 'translate-x-[15px] transition-all duration-[5000] scale-[1.1]'" @mouseleave="upBoxClass1 = ''">
                    <h3 class="text-[#293793] text-[14px]">Get involved</h3>
                    <img src="../img/icons/arrowi1.png" alt="" class="ml-5 w-[20px] h-[20px] " :class="upBoxClass1">
                </div>

                </div>
            </a>
            <!-- end of the Social media containers -->

            <!--Social media containers 1 -->
            <a href="https://t.me/bethelplatform" target="_blank"><div
                
                class="felx flex-row border-2 px-[28px] py-[34px] rounded-[15px] shadow-xl w-[220px]
                hover:translate-y-[-10px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">

                <!-- Image and text -->
                <div class="flex items-center">
                    <img src="../img/icons/telegram1.png" alt="" class="w-[30px] mr-2">
                    <h3>Telegram</h3>
                </div>

                <!-- Under Text para -->
                <div class="flex mt-3" @mouseover="upBoxClass2 = 'translate-x-[15px] transition-all duration-[5000] scale-[1.1]'" @mouseleave="upBoxClass2 = ''">
                    <h3 class="text-[#293793] text-[14px]">Get involved</h3>
                    <img src="../img/icons/arrowi1.png" alt="" class="ml-5 w-[20px] h-[20px] " :class="upBoxClass2">
                </div>

                </div>
            </a>
            <!-- end of the Social media containers -->

            <!--Social media containers 1 -->
            <a href="https://web.facebook.com/bethelplatform?_rdc=1&_rdr" target="_blank"><div
                
                class="felx flex-row border-2 px-[28px] py-[34px] rounded-[15px] shadow-xl w-[220px]
                hover:translate-y-[-10px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out">

                <!-- Image and text -->
                <div class="flex items-center">
                    <img src="../img/icons/facebook.png" alt="" class="w-[30px] mr-2">
                    <h3>Facebook</h3>
                </div>

                <!-- Under Text para -->
                <div class="flex mt-3" @mouseover="upBoxClass3 = 'translate-x-[15px] transition-all duration-[5000] scale-[1.1]'" @mouseleave="upBoxClass3 = ''">
                    <h3 class="text-[#293793] text-[14px]">Get involved</h3>
                    <img src="../img/icons/arrowi1.png" alt="" class="ml-5 w-[20px] h-[20px] " :class="upBoxClass3">
                </div>

                </div>
            </a>
            <!-- end of the Social media containers -->

        </div>
        <!-- end of the social media container flex -->

    </div>
    <!-- end of the Bethel global Section  -->


    

</template>

<script>
import { mapStores } from 'pinia';
import useModalStore from "@/stores/modal";

export default {
    name : 'ContactComp2',
    data(){
        return{
            upBoxClass : '',
            upBoxClass1 : '',
            upBoxClass2 : '',
            upBoxClass3 : '',
            upBoxClass4 : '',
        }
    },

    computed : {
        ...mapStores(useModalStore)
    },
    methods:{
        // changeWarning(){
        //     this.modalStore.warning = !this.modalStore.warning ; 
        // },

        handleHover(isHovering){
            if(isHovering){
                this.modalStore.warning = !this.modalStore.warning;
            }
        },

        addClass(){
            ;

        }
        ,
        removeClass(){

        }

        
    }
}
</script>
