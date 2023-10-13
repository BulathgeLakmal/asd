<template>
    <!-- new  naw bar flex mode -->
    <div class="flex items-center lg:justify-around py-3 lg:px-[110px] bg-[#F0F5FE] shadow-sm
    md:justify-between md:px-[50px] md:items-center
    sm:justify-between sm:px-[20px] sm:items-center
    min-[320px]:justify-between min-[320px]:px-[50px] min-[320px]:items-center">
        <!-- logo section -->
        <div
        
        class="flex items-center lg:w-[150px]">
            <img src="../img/bethellogo.png" alt="" class="w-[30px]">
            <h3 class="font-bold ml-2 text-[#293793] text-[24px]">BETHEL</h3>
        </div>

        <!-- menu items center flex-->
        <div
        
        class="hidden lg:flex lg:flex-auto  lg:justify-evenly lg:px-[80px]">
            <a href="#" class="font-medium text-[14px] hover:text-[#293793]">HOME</a>
            <a href="#platform" class="font-medium text-[14px] hover:text-[#293793]">FEATURES</a>
            <!-- <a href="#" class="font-medium text-[14px] hover:text-[#293793]">Bethel Token</a> -->
            <a href="#docs" class="font-medium text-[14px] hover:text-[#293793]">DOCS</a>
            <a href="#contact" class="font-medium text-[14px] hover:text-[#293793]">CONTACT</a>
        </div>


        <!-- register colomuns section -->
        <div
        
        class="hidden relative lg:flex lg:items-center lg:w-[150px] text-[14px] items-end justify-end">
            <div 
            class="">
                    <button @mouseover="hidePop3 = true" @mouseleave="hidePop3 = false"
                    class="transition ease-in duration-200 px-[50px] py-[10px] border-2 rounded-lg text-[#293793] border-[#293793] shadow-lg hover:border-[white] hover:text-[white] hover:bg-[#293793] ">Cloud</button>
                

                    <!-- pop up button -->
                    <div  v-if="hidePop3" class="animate__animated animate__bounceIn flex absolute lg:top-[70px] md:top-[-25px] sm:top-[35px] min-[320px]:top-[35px] 
                            left-[10px] w-[140px] border-1 rounded-full bg-[#F48320] p-[3px] border-blue-500
                            text-center">
                                <h1 class="ml-2 text-white font-medium">Coming soon..</h1>
                    </div>
            <!-- end of pop up -->
            </div>
            
            

        </div>

        <!-- menu icon -->
        <div class="lg:hidden">
            <button @click.prevent="toggleOpen">
                <span class="material-symbols-outlined scale-[1.3]">
                list
                </span>
            </button>
        </div>

    </div>

    <!-- side bar left -->
    <Transition name="fade"
            enter-active-class="animate__animated animate__fadeInLeft"
            leave-active-class="animate__animated animate__fadeOutLeft" class="z-[400]">
            
            
            <div v-if="this.modalStore.isOpen"
            class="z-[400] fixed h-full top-[0px] left-0 p-2 w-[300px] text-center bg-[#293793] lg:hidden"
            >
            <button @click.prevent="closeFunc" class="absolute right-3 top-[25px] text-white">
                <span class="material-symbols-outlined">
                    close
                </span>
            </button>  
            <div class="text-gray-100 text-xl">
                
                <div class="my-2 bg-gray-600 h-[1px]"></div>
            </div>
            <div
                class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white mt-[40px]"
            >
                <i class="bi bi-search text-sm"></i>
                <input
                type="text"
                placeholder="Search"
                class="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                />
            </div>
            <a href="#" @click="closeFunc">
            <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i class="bi bi-house-door-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">HOME</span>
            </div></a>

            <a href="#platform" @click="closeFunc">
            <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">FEATURES</span>
            
            </div></a>
            <!-- <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">Bethel Token</span>
            </div> -->
            <a href="#docs" @click="closeFunc">
            <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">DOCS</span>
            </div></a>

            <a href="#contact" @click="closeFunc">
            <div
                class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
            >
                <i class="bi bi-bookmark-fill"></i>
                <span class="text-[15px] ml-4 text-gray-200 font-bold">CONTACT</span>
            </div></a>

            <div class="my-4 bg-gray-600 h-[1px]"></div>
            
            <div class="flex">
                <button @click="hidePop4 = !hidePop4" class="transition-all ease-in duration-200 font-bold w-full hover:border-2 hover:bg-[white] hover:text-[#293793] px-[50px] py-[10px] border-2 rounded-lg text-[white] border-[white] shadow-lg bg-[#293793]"><a href="">Cloud</a></button>
                <div  v-if="hidePop4" class="animate__animated animate__bounceIn flex absolute
                     lg:top-[55px] md:top-[25px] sm:top-[-25px] min-[320px]:top-[420px] 
                     min-[320px]:left-[80px]
                    lg:left-[0px] md:left-[550px] sm:left-[260px] w-[150px] border-1 rounded-full bg-[#F48320] p-[3px] border-blue-500
                    text-center">
                        <h1 class="ml-2 text-white text-[16px] font-medium">Coming soon..</h1>
                </div>
                
            </div>
            </div>
                
        <!-- end of auth modal -->
        </Transition>

</template>

<script>
import {mapStores} from "pinia";
import useModalStore from "@/stores/modal";


export default{
    name : 'HeaderComp',
    data(){
        return{
            hidePop3 : false,
            hidePop4 :false,
        }
    },
    computed :{
        ...mapStores(useModalStore),
    }
    , 
    methods :{
        toggleOpen(){
            this.modalStore.isOpen = true ;
            this.modalStore.onBlur = 'blur-sm'
        },
        closeFunc(){
            this.modalStore.isOpen = false;
            this.modalStore.onBlur = '';
        },
        
    }

}

</script>

