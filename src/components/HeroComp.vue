<template> 
    <!--grid hero -->
    
    <div class="z-[100] relative grid sm:grid-cols-1 sm:mt-[10px] md:grid-cols-1 md:mt-[0px] lg:grid-cols-[1fr_1fr] lg:mt-[0px]" id="heroComp">
        <!-- grid 2 -->
        <div 
        
        class="z-[10] grid sm:order-2 md:order-2 md:mt-[0px] lg:order-1 lg:grid-rows-[1fr_2fr_1fr_1fr] ">  
             <!--row 1 bethel Icon container  -->
            <div class="w-[320px] h-[30px] flex items-center px-2 py-2 rounded-full text-[10px] lg:mt-[96px] bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]
            min-[2000px]:w-[640px] min-[2000px]:h-[60px]
            min-[2000px]:mt-[200px]">

                <img src="../img/Group.png" alt="" class="w-[16px]  min-[2000px]:w-[29px]">
                
                <!-- pop up of the test net in progress -->
                <div class="relative flex items-center justify-center">
                    <div  v-if="hidePop" class="animate__animated animate__bounceIn flex absolute lg:top-[-25px] md:top-[-25px] sm:top-[35px] min-[320px]:top-[35px] 
                    left-[65px] w-[100px] border-1 rounded-full bg-[#F48320] p-[3px] border-blue-500
                    text-center">
                        <h1 class="ml-2 text-white font-medium">Coming soon..</h1>
                    </div>
                    <h4 class="m-2 min-[2000px]:text-[18px]">Bethel Token</h4>
                </div>
                <!-- end of the progress div -->
                
                <div class="w-[10px] h-[10px] bg-[#F48320] border-none  rounded-full min-[2000px]:w-[16px] min-[2000px]:h-[19px]"></div>
                <h4 class="m-2 min-[2000px]:text-[18px]"><button @mouseover="hidePop = true" @mouseleave="hidePop = false">Testnet</button></h4>
                <div class="w-[10px] h-[10px] bg-[#293793] border-none bg-[] rounded-full min-[2000px]:w-[16px] min-[2000px]:h-[19px] "></div>
                <h4 class="m-2 min-[2000px]:text-[18px] min-[2000px]:ml-[10px]"><a href="../whitepaper.pdf" target="_blank">White Paper</a></h4>
                <span class="material-symbols-outlined m-2 scale-75">
                    arrow_right_alt
                </span>

            </div>
            <!-- end of the row 1 -->

            <!-- row 2 headline -->
            <div class="lg:h-[50%]
            ">
                <h1 class="min-[320px]:text-[29px] min-[320px]:mt-[24px]
                sm:text-[50px] sm:font-bold text-[#293793]
                min-[2000px]:text-[98px] min-[320px]:font-bold
                min-[2000px]:pt-[100px] lg:text-[50px]">Web3 Storage Solutions for a Decentralized World</h1>
            </div>

            <!-- row 3 pharagraph -->
            <div class="lg:mt-0">
                <p class="min-[320px]:text-[14px] min-[320px]:font-medium min-[320px]:mt-3
                sm:font-medium md:text-[22px] md:mt-[20px]
                 sm:text-[28px] lg:text-[18px]
                 min-[2000px]:text-[48px]">
                 Harness the Power of BETHEL,Your Trusted Platform for Web3 and AI Innovations, Where Quality and Security Take Center Stage</p>
            </div>

            <!-- row 4 button -->
            <div class="relative flex min-[320px]:justify-center min-[320px]:mt-[20px] min-[320px]:mb-[20px]
            sm:items-center sm:justify-center sm:mt-[40px]
             md:items-center md:justify-center 
             lg:justify-start lg:mt-[2px] lg:items-start
             min-[2000px]:items-start
             ">
                <button @click="hidePop2 = !hidePop2" class="bg-[#293793] w-[182px] h-[51px] text-white rounded-lg shadow-[1px_2px_4px_rgba(0,0,0,0.3)]
                lg:text-[18px] lg:mt-0
                min-[2000px]:w-[282px] min-[2000px]:h-[101px] min-[2000px]:text-[30px]
                min-[320px]:text-[13px] min-[320px]:mt-4 min-[320px]:w-[150px] min-[320px]:h-[45px] border-1
                 hover:border-[#293793] hover:border-2 hover:text-[#293793] hover:bg-[white] hover:shadow-none transition ease-in duration-200 ">Join Now</button>

                 <!-- pop up button -->
                 <div  v-if="hidePop2" class="animate__animated animate__bounceIn flex absolute
                     lg:top-[55px] md:top-[25px] sm:top-[-25px] min-[320px]:top-[75px] 
                     min-[320px]:left-[130px]
                    lg:left-[0px] md:left-[550px] sm:left-[260px] w-[150px] border-1 rounded-full bg-[#F48320] p-[3px] border-blue-500
                    text-center">
                        <h1 class="ml-2 text-white text-[16px] font-medium">Coming soon..</h1>
                </div>
                <!-- end of pop up button -->

            </div>

        </div>

        <!-- right column -->
        <!-- images side -->
        <div
        
        class="z-[0] relative flex items-center min-[320px]: sm:mt-[80px] md:order-1 md:mt-[0px] h-[80%] lg:mt-[28px] order-2" >
            <!-- <img src="../img/cropCover.gif" alt="" class="min-[320px]:mt-[30px]  sm:mt-[20px] md:scale-75 lg:w-full lg:scale-[1.2] lg:pt-[70px] 
            lg:absolute lg:right-[20px]
            md:scale-[1]
            min-[2000px]:pt-[184px]"> -->
            <img src="../img/Path(2).png" alt="" class="lg:flex lg:absolute lg:scale-[1.1] lg:right-[-73px] lg:top-[60px] min-[320px]:mt-12">
            <!-- <img src="../img/NewIcons/webimage.png" alt="" class="md:hidden sm:hidden min-[320px] lg:flex lg:absolute lg:scale-[2.5] lg:right-[320px] lg:top-[115px] min-[320px]:mt-12"> -->
            <!-- first image -->            
                <!-- <img src="src/img/OD15EW1 copy.png" alt="" class="absolute top-[70px] right-[-50px] z-[200] scale-110">            -->
            <!-- second image -->         
                <!-- <img src="src/img/OD15EW1 22copy.png" alt="" class="absolute right-[20px] top-[220px] z-[300] scale-110">           -->
            <!-- third image -->
                <!-- <img src="src/img/floin-shape-1-alt.png" alt="" class="absolute right-[-10px] top-[280px] z-[300] w-[181px] h-[219px]"> -->
            <!-- bubble image -->
                <!-- <img src="src/img/floin-shape-3-blue.png" alt="" class="absolute left-[-180px] top-[380px] z-[100] scale-50"> -->
        </div>
        <!-- end of the image side -->
        

        <!-- auth modal  -->
        
    </div>
</template>

<script>
// import {mapStores} from 'pinia';
// import useModalStore from "@/stores/modal";


export default{
    name : 'HeroComp',
    data(){
        return {
            onBlur : '',
            hidePop : false,
            hidePop2 : false,


        }
    },
    
}
</script>
