<template>
    <div class="mt-[64px] lg:mt-[100px]">
        <!-- grid start statement -->
        <div class="grid-rows-[3fr_1fr] md:grid-rows-[1fr_3fr] ">
            <!-- Ceo Text -->
            <div>
                <h3 class="text-[gray] text-[16px]
                min-[2000px]:text-[29px] font-bold">CEO</h3>
                <h1 class="inline text-[#293793] text-[48px] font-bold
                min-[2000px]:text-[54px]">Statement</h1>
            </div>

            <!-- statement -->
            <div

            class="flex lg:flex-row lg:p-10 rounded-xl shadow-lg border-[2px]
            lg:items-center lg:mt-4 
            md:flex-col md:items-center
            sm:flex-col sm:items-center
            min-[320px]:flex-col min-[320px]:items-center min-[320px]:p-4
            hover:translate-y-[-10px] hover:shadow-none hover:border-blue-100 transition-all ease-in-out ">
                <!-- patagrapgh statement -->
                <div class="mt-1 lg:border-r-2 lg:pr-[40px] lg:border-dashed lg:w-[900px]
                sm:text-[14px] min-[320px]:text-[13px]">
                    <p><b>"In the dynamic intersection of finance and technology, many ventures dive in, yet few have the expertise to navigate the complex waters effectively. At BETHEL, we are not just riding the wave of technological advancement; we are at the forefront, shaping the tide itself. We believe in substance over show, in building a platform that stands as a beacon of quality and innovation in the decentralized digital landscape.</b></p>
                    <p class="mt-3">BETHEL is where passion meets expertise, fostering a community where the right individuals converge to craft solutions that are not just timely but timeless. Join us at BETHEL, where we are not just envisioning the future; we are creating it, with integrity, excellence, and a clear vision for a secure and decentralized digital ecosystem."</p>
                </div>

                <!-- photo section -->
                <div class="flex items-center bg-blue-50 lg:py-7 rounded-2xl lg:ml-2 lg:pl-2 lg:pr-1 lg:w-[280px]
                
                 md:my-6 md:p-4
                 sm:my-6 sm:p-4
                 min-[320px]:my-6 min-[320px]:p-10
                ">
                    <div>
                        <img src="../img/3.png" alt="" class="lg:mr-3 md:mr-4 min-[320px]:mr-3 ">
                    </div>
                    
                    <div class="">
                        <h2 class="text-[#293793] lg:text-[13px]">Craig Bricknell <br><span class="text-[#E9983C]">CEO / Director</span></h2>
                    </div>
                    
                </div>

            </div>

        </div>
            
    </div>
</template>

<script>
export default {
    name : 'StatementComp.vue',
}
</script>
