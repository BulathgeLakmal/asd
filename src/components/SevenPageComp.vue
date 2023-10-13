<template>
    <div>
        <!-- rhomboid shape -->
        <div class="relatve w-[100%] lg:h-[780px] md:h-[700px] sm:h-[1300px] min-[320px]:h-[1000px] min-[320px]:mt-[50px] skew-y-[-6deg] bg-blue-300 lg:mt-[150px] absolute right-1 
        bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))]  overflow-hidden z-[50]
        min-[2000px]:h-[1400px]
        min-[2000px]:mt-[200px]">

        
        <!-- topic div -->
        <div
         id="docs" class="my-3 flex-col items-start justify-start skew-y-6  lg:mt-[110px]  lg:px-[110px] 
        md:mt-[130px] md:px-[50px]
        sm:mt-[100px] sm:px-[10px]
        min-[320px]:mt-[35px] min-[320px]:px-[20px]">

            <div
            
            >
              <h1 class="text-[gray] font-bold">DOWNLOADS</h1>
                <h1
                class="lg:text-[44px] md:text-[28px] font-bold text-[#293793] inline text-[44px]
                min-[320px]:text-[38px]">Documents</h1>  
            </div>
            
        </div>

        <!-- phot min-[320px]o two side flex -->
        <div class="flex lg:flex-row md:flex-row justify-evenly items-center skew-y-6 lg:mt-[20px]  lg:px-[110px] gap-[50px] 
        md:mt-[20px] md:mx-10
        sm:mt-[10px] sm:flex-col
        min-[320px]:mt-[35px] min-[320px]:flex-col ">

            <!-- first flex box in photo side -->
            <div
            
            class="flex flex-col lg:px-0 lg:border-r-2 lg:pr-9 lg:border-dashed md:border-r-2 md:pr-9 md:border-dashed lg:mt-[40px]">

                <!-- photo -->
                <div class="relative">
                    <img src="../img/paper2.png" alt="" class="z-[100] lg:w-[400px] md:w-[300px] sm:w-[250px] min-[320px]:w-[290px]">
                    <img src="../img/Vector5.png" alt="" class="z-[10] absolute top-[22px] right-[20px] lg:w-[250px] md:w-[200px] sm:w-[150px] min-[320px]:w-[250px] opacity-25">
                    
                </div>

                <!-- content related to the Photo -->
                <div class="flex flex-col text-center mt-5">
                    <h1 class="text-[#293793]">White Paper</h1>
                    <h3 class="text-[13px]">[Version 2.0]</h3>
                </div>

                <!-- download button -->
                <div class="flex items-center justify-center">
                    <a href="../whitepaper.pdf" target="_blank"><button type="submit" class="text-white bg-[#293793] rounded-lg p-2 px-6 mt-3 min-[320px]:text-[10px] lg:text-[15px]">Download</button></a>
                </div>
                
            </div>
            <!-- end of the flex box photo side -->

            <!-- first flex box in photo side -->
            <div
            
            class="flex flex-col">

                <!-- photo -->
                <div class="relative">
                    <img src="../img/Vector5.png" alt="" class="absolute top-[72px] right-[20px] lg:w-[250px] md:w-[200px] sm:w-[150px] min-[320px]:w-[250px] opacity-25">
                    <img src="../img/paper1.png" alt="" class="lg:w-[400px] md:w-[300px] sm:w-[250px] min-[320px]:w-[290px] lg:mt-[45px] min-[320px]:mt-12 ">
                </div>

                <!-- content related to the Photo -->
                <div class="flex flex-col text-center mt-2">
                    <h1 class="text-[#293793]">Lite Paper</h1>
                    <h3 class="text-[13px]">[Version 2.0.5]</h3>
                </div>

                <!-- download button -->
                <div class="flex items-center justify-center">
                    <a href="../litepaper.pdf" target="_blank"><button type="submit" class="text-white bg-[#293793] rounded-lg p-2 px-6 mt-3 min-[320px]:text-[10px] lg:text-[15px]">Download</button></a>
                </div>

            </div>
            
            <!-- end of the flex box photo side -->

            


            
        </div>

    </div>
    </div>
</template>

<script>
export default{ 
    name : 'SevenPageComp'

}
</script>
