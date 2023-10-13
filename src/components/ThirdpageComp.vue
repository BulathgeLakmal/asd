<template>
    <div>
        <!-- rhomboid shape -->
        <div
        class="relatve w-[100%] h-[800px] skew-y-[-6deg] mt-[100px] absolute right-1 
        lg:mt-[150px] lg:h-[750px]
        bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))] overflow-hidden z-[50]
        min-[2000px]:h-[1200px] min-[2000px]:mt-[200px]
        min-[320px]:h-[600px]">

            <!-- images -->
            <img src="../img/OD15EW122copy.png" alt="" class="absolute z-[20] skew-y-6 min-[320px]:w-[0%] min-[320px]:mt-[710px] sm:w-[80%] sm:mt-[350px] md:w-[70%] md:mt-[350px] 
            lg:scale-75 lg:w-[100%] lg:left-[-220px] lg:bottom-[-406px]
            min-[2000px]:scale-[.6]  min-[2000px]:bottom-[-956px] min-[2000px]:left-[-756px]">
            <img src="../img/OD15EW1copy.png" alt="" class="absolute z-[10] skew-y-6 min-[320px]:w-[0%] min-[320px]:mt-[740px] min-[320px]:ml-[100px] sm:w-[80%] md:mt-[450px] sm:mt-[390px] sm:ml-[150px] md:ml-[150px]
             lg:scale-50 lg:w-[100%] lg:left-[190px] lg:bottom-[-456px]
             min-[2000px]:scale-[.6]  min-[2000px]:bottom-[-1156px] min-[2000px]:left-[-356px] ">
            <!-- end of the images -->

            <!-- content inside -->
            <div class="relative grid sm:grid-cols-[2fr_1fr] z-[60] lg:mt-[180px] md:mt-[100px] sm:mt-[60px] skew-y-6 min-[320px]:px-[20px] sm:px-5 md:px-20 lg:px-[110px]
            min-[2000px]:mt-[280px] min-[320px]:mt-[85px]">
            <img src="../img/OD15EW122copy.png" alt="" class="absolute lg:hidden md:hidden sm:hidden min-[320px]:bottom-[-280px] min-[320px]:scale-[1.1]">
                <!-- col 1 contents  -->
                <div class="grid grid-rows-[1fr_2fr]">

                    <!-- col 1 Platform content -->
                    <div
                    

                    id="platform">
                        <h3 class="text-[gray] text-[16px]
                        min-[2000px]:text-[30px] font-bold">BETHEL</h3>
                        <h1 class="text-[47px] 
                        text-[#293793] font-bold inline
                        min-[2000px]:text-[60px]">Platform</h1>
                    </div>

                    <!-- col 2 Pharagrapgh text  -->
                    <div 
                    >
                        <p class="lg:text-[14px] md:text-[15px] sm:text-[13px] mt-[10px] min-[320px]:text-[13px]
                        min-[2000px]:text-[25px]">Experience a seamless journey through BETHEL's meticulously crafted interface, where cutting-edge design meets user-centric functionality. Our platform, steeped in modern aesthetics, promises an intuitive user experience that stands as a beacon in the decentralized data management space.</p>
                    </div>
                </div>

                <!-- col 2 image -->
                <!-- <div class="">
                    <img src="../img/floin-shape-3-blue.png" alt="" class="scale-100 min-[320px]:scale-0 sm:scale-0 lg:scale-100
                    min-[2000px]:scale-[1.7] min-[2000px]:ml-[400px]">
                </div> -->

            </div>

        </div>

    </div>
    
</template>

<script>
export default {
    name : "ThirdpageComp",
}

</script>


<style scoped>
</style>