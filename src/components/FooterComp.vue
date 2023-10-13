<template>
    <!-- start of the email section -->
    <div class=" bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))] p-[80px] mt-[40px]">  
        <!-- main flex box -->
        <div class="flex flex-col w-full items-center
         min-[320px]:items-center min-[320px]:justify-center min-[320px]:text-center">

            <!-- catpion section -->
            <div id="contact" class="">
                <h1 class="text-[#293793] lg:text-[26px]">Get the latest Bethel content straight to your inbox</h1>
            </div>

            <!-- email container -->
            <div class="relative flex lg:flex-row lg:items-center lg:justify-center lg:mt-[15px]
            md:flex-row md:items-center md:justify-center
            min-[320px]:flex-col min-[320px]:mt-3">
                <vee-form :validation-schema="schema" @submit="regVal">
                    <!-- input box -->
                    <vee-field name="email" ref="anyName" type="text" placeholder="Enter your email address" class="lg:w-[400px] lg:h-[45px] border-2 rounded-md p-2
                    min-[320px]:mt-[10px] shadow-lg"/>
                    <ErrorMessage name="email" class="text-red-600 absolute lg:top-[-12px] lg:left-2 
                    md:left-2 md:text-[12px] md:top-[-4px]
                    sm:left-0 sm:top-[-4px] sm:text-[12px]
                    min-[320px]:left-6 min-[320px]:text-[10px] min-[320px]:top-[-8px]
                    lg:text-[14px]"/>

                    <button  type="submit" class="text-white bg-[#293793] rounded-lg p-2 px-6 shadow-lg
                    lg:ml-6
                    min-[320px]:ml-2
                    min-[320px]:mt-4">Subscribe</button>

                    <vee-field name="tos" type="checkbox" value="0" class=" absolute mr-2 min-[320px]:mr-[2px] min-[320px]:mt-[3px]
                    lg:left-0 lg:top-[70px]
                    sm:left-0 md:top-[70px] sm:top-[70px]
                    min-[320px]:left-[-8px] min-[320px]:top-[120px]
                    md:left-0"/>

                    <h1 class="text-[12px] lg:text-[#293793] lg:mr-[158px] mt-3
                    min-[320px]:mr-[1px]
                    ">Yes, I agree to receive email communications from Bethel.
                    </h1>

                    <ErrorMessage name="tos" class="text-red-600 absolute lg:left-0 lg:top-[90px]
                    md:top-[90px] text-[12px] md:left-0
                    min-[320px]:text-[10px] min-[320px]:top-[158px] min-[320px]:left-[50px]
                    sm:top-4" />

                
                    

                    <!-- adding a waiting msg until firebase -->

                    <div v-if="!showAllert"><img src='../img/gifs/infinity.gif' alt="" class="absolute w-[60px] lg:top-1 lg:right-[-80px] top-1 md:right-[-80px] sm:right-[-80px]
                         min-[320px]:right-[-65px] " :class="showClass"></div>
                    <div v-else><img src='../img/gifs/greentick.gif' alt="" class="absolute w-[60px] lg:top-1 lg:right-[-80px] top-1 md:right-[-80px] sm:right-[-80px]
                         min-[320px]:right-[-65px]"></div>

                    

                </vee-form>

                <!-- button -->
               

            </div>

            <!-- checlbox area -->
            <!-- <div> 
                <vee-form ref="anyName" class="relative mt-3 flex items-center justify-center min-[320px]:items-start" :validation-schema="tos">
                    <vee-field name="tos" type="checkbox" value="0" class="mr-2 min-[320px]:mr-[2px] min-[320px]:mt-[3px]"/><h1 class="text-[12px] lg:text-[#293793] lg:mr-[178px]
                    ">Yes, I agree to receive email communications from Bethel.</h1>
                    <ErrorMessage name="tos" class="text-red-600 absolute lg:left-0 lg:top-5
                    md:top-4 text-[12px]
                    min-[320px]:text-[10px] min-[320px]:top-[38px]
                    sm:top-4" />

                </vee-form>
            </div> -->

            <!-- alert box -->
            <div class="mt-2 ">
                <h3 class="text-green-600">{{ msg }}</h3>
            </div>

        </div>


    </div>
    <div class="w-full lg:h-[400px] bg-[#293793] min-[320px]:h-[1150px] min-[320px]:px-[15px] min-[2000px]:h-[600px] md:h-[350px] ">

        <!-- main footer flex box -->
        <div class="flex gap-[20px] justify-evenly 
        lg:flex-row
        md:flex-row
        min-[320px]:flex-col ">

            <!-- first container -->
            <div class="flex flex-col">
                <h1 class="my-[30px] min-[2000px]:text-[38px] text-[white] font-bold">Main</h1>
                <a href="#bethel" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">What is BETHEL?</a>
                <!-- <a href="https://bethelnet.io/#bethel-opportunity" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">The Opportunity</a> -->
                <a href="#team" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">Team and Advisors</a>
                <a href="#platform" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">The Technology</a>
                <a href="#whychoose" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">Why</a>
                <a href="#Whatbethel" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">What can you Build on BETHEL</a>
                <!-- <a href="#" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">Upcoming BETHEL powered projects</a> -->

            </div>

            <!-- second container -->
            <div class="flex flex-col">
                <h1 class="my-[30px] min-[2000px]:text-[38px] text-[white] font-bold">Insigts</h1>
                <a href="#" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">Main Page</a>
                <!-- <a href="#" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px]">Public Sale Page</a> -->
                <!-- <a href="https://bethelnet.io/static/media/BETHEL-One-Pager.5b2a4055.pdf" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">One paper</a> -->
                <a href="../whitepaper.pdf" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">White Paper</a>
                <a href="../litepaper.pdf" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">Lite Paper</a>
                <!-- <a href="https://bethelnet.io/static/media/POD-White-Paper.ccc34c26.pdf" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]">POD</a> -->
            </div>

            <!-- third container -->
            <div class="flex flex-col">
                <h1 class="my-[30px] min-[2000px]:text-[38px] text-[white] font-bold">Connect</h1>

                <a href="https://www.linkedin.com/company/bethel-blockchain-platform/" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">LinkedIn</a>
                <a href="https://twitter.com/BethelPlatform" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">Twitter</a>
                <a href="https://www.youtube.com/channel/UCVYnUnw_tKTlhdrx5Epnz-w" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">Youtube</a>
                <a href="https://t.me/bethelplatform" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">Telegram</a>
                <!-- <a href="https://github.com/bethelplatform" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">Github</a> -->
                <a href="https://www.facebook.com/bethelplatform" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">Facebook</a>
                <a href="https://www.instagram.com/bethelplatform/" class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] hover:text-[#FFA500] min-[2000px]:text-[28px] text-[#D3D3D3]" target="_blank">Instagram</a>
            </div>

            <!-- fourth container -->
            <div class="flex flex-col">

                <img src="../img/icons/white.png" alt="" class="w-[100px] min-[2000px]:w-[180px] mb-2 ml-[-12px]">
                <h1 class="font-bold mb-[3px] min-[2000px]:text-[38px] text-[white]">Future CX Pty Ltd</h1>

                <!-- Icon Location -->
                <div class="flex">
                    <img src="../img/icons/location.png" alt="" class="w-[25px] h-[20px] mt-[2px] min-[2000px]:scale-[1.5] mr-3">
                    <h1 class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] min-[2000px]:text-[28px] text-[#D3D3D3]">Sydney, Australia</h1>
                </div>

                <!-- Icon Location -->
                <div class="flex">
                    <img src="../img/icons/location.png" alt="" class="w-[25px] h-[20px] mt-[2px] min-[2000px]:scale-[1.5] mr-3">
                    <h1 class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] min-[2000px]:text-[28px] text-[#D3D3D3]">Colombo, Sri Lanka</h1>
                </div>

                <!-- Icon Location -->
                <div class="flex">
                    <img src="../img/icons/location.png" alt="" class="w-[25px] h-[20px] mt-[2px] min-[2000px]:scale-[1.5] mr-3">
                    <h1 class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] min-[2000px]:text-[28px] text-[#D3D3D3]">Singapore</h1>
                </div>

                <h1 class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] min-[2000px]:text-[28px] text-[#D3D3D3]">Phone: +614 7848 4327</h1>
                <h1 class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] min-[2000px]:text-[28px] text-[#D3D3D3]">Email: info@futurecx.com.au</h1>
                <h1 class="my-[6px] lg:text-[15px] md:text-[12px] min-[320px]:text-[10px] min-[2000px]:text-[28px] text-[#D3D3D3] ">Website: <a href="https://futurecx.com/" class="hover:text-[orange]" target="_blank">futurecx.com</a></h1>

            </div>

            
        </div>
        
    </div>
    <div class="flex items-center justify-center w-full h-[40px] bg-[#00004b]">
        <h3 class="lg:text-[13px] md:text-[13px] sm:text-[13px] min-[320px]:text-[8px] text-white">Copyright © 2023 Future CX Pty Ltd. All rights reserved.</h3>
    </div>
</template>

<script>
import { emailsCollection } from "@/includes/firebase"

export default{
    name : 'FooterComp',
    data(){
        return{
            schema: {
                email : "required|email",
                tos : "tos",
                
            },
            tos : {
                tos : "tos",
            },
            showClass : "hidden",
            showAllert : false,
            msg :"",
            
        }
    },

    methods :{
        async regVal(values){
            this.showClass="";
            await emailsCollection.add({
                email : values.email,
            });

            this.showAllert = true;
            this.$refs.anyName.reset();
            this.msg ="Thank you for being a part of our community. We're excited to share our latest updates with you."
        },
        
        

    }
}
</script>
