<template>
    <div>
        <!-- rhomboid shape -->
        <div class="relatve min-[320px]:px-[20px] min-[320px]:h-[700px] sm:h-[600px]
         md:h-[1500px] w-full lg:h-[1900px] skew-y-[-6deg] bg-blue-300 mt-[228px] absolute right-1 
         bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))] overflow-hidden z-[50]
        min-[2000px]:h-[2500px] ">
            
            <!-- grid start Road map -->
            <div class="grid skew-y-6 min-[320px]:mt-[80px] sm:px-[20px] sm:mt-[100px] md:px-10 md:mt-[100px] md:grid-rows-[1fr_3fr] lg:grid-rows-[1fr_4fr] lg:mt-[140px] lg:px-[110px]
            min-[2000px]:mt-[340px]">
                
                <!-- first Read map Colomn -->
                <div class="grid md:grid-rows-[1fr_1fr_1fr]">

                    <!-- RaoadMap topic Row 1 -->
                    <div class="z-[200]">
                        <h3 class="text-[gray] text-[16] font-bold
                        min-[2000px]:text-[25px]">OUR PROGRESS</h3>
                        <h1 class="text-[47px] font-bold text-[#293793] inline
                        min-[2000px]:text-[75px]">Roadmap</h1>
                    </div>

                    <!-- paragraph Row 2  -->
                    <div class="lg:mt-[0px] md:mt-2 lg:text-[13px]">
                        <p class="lg:mt-[0px] min-[2000px]:text-[35px] min-[320px]:text-[13px] min-[320px]:mt-3">BETHEL's journey began with the meticulous development of our inaugural Minimum Viable Product (MVP), a process that spanned an intensive 3 years. This period of dedication and innovation has culminated in a platform poised to revolutionize the decentralized digital sphere.</p>
                        <!-- <p class="mt-[10px] min-[2000px]:text-[35px] min-[320px]:text-[13px]" >As we step into a promising new phase in 2023, we warmly invite you to join us on this exciting voyage, being among the first to experience the transformative potential that BETHEL has to offer.</p> -->
                    </div>

                    <!-- button row 3 -->
                    <div class="flex mt-2 mb-[40px] min-[320px]:mt-[20px] sm:mt-[20px] md:mt-1 lg:mt-1 min-[320px]:items-cetner">
                        <button class="bg-[#293793] border rounded-lg shadow-lg text-white font-bold w-[182px] h-[52px] text-[12px]
                        min-[2000px]:w-[382px] min-[2000px]:h-[102px] 
                        min-[2000px]:text-[25px] min-[320px]:text-[14px] min-[320px]:mt-[12px]
                        ">Join Newsletter</button>
                    </div>

                </div>

                <!-- roadmap Js part -->
                <div class="hideen md:border-[solid] md:border-1 md:shadow-lg md:mb-[220px]">
                
                </div>

            </div>
        </div>
        <!-- end of roadmap grid -->
    </div>
</template>

<script>
export default{
    name : 'FifthPageComp',
}
</script>
