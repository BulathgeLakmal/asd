<template>
    <div class="relative"> 
      <div class="sm:px-[10px] md:px-[0px] lg:px-[0px] fixed w-[100%] z-[200] top-0">
        <HeaderComp/>
      </div>
      <!-- body Components -->
      <div class="z-[100] px-[20px] md:px-[50px] lg:px-[110px] overflow-hidden" :class='modalStore.onBlur'>
        <HeroComp/>
      </div>
  
      <!-- article logo line -->
      <div  id="bethel" class="flex mb-[70px] py-[50px] items-center bg-[linear-gradient(to_right,rgba(240,245,254,1),rgba(240,245,254,1))] mt-[50px] h-[100px] overflow-hidden">
        <!-- photo article slide -->
  
        <div class="slide">
  
          
          <a href="https://markets.businessinsider.com/news/stocks/futurecx-announces-silver-sponsorship-for-the-world-blockchain-summit-singapore-2023-1032599267" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/markets-insider-logo.png" alt="" ></a>
  
          <a href="https://techbullion.com/introducing-bethel-the-future-of-decentralized-data-management/" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/TechBullionLogo-3.png" alt="" ></a>
  
          <a href="https://www.marketwatch.com/press-release/futurecx-announces-silver-sponsorship-for-the-world-blockchain-summit-singapore-2023-dfe1fa4f" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/market.png" alt="" ></a>
  
            <a href="https://asiatokenfund.com/2023/08/22/introducing-bethel-the-future-of-decentralized-data-management/" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/asiatoken.png" alt=""></a>
  
            <a href="https://www.kryptowings.com/introducing-bethel-the-future-of-decentralized-data-management/" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/kryptowings.png" alt=""></a> 
  
            <a href="https://www.cryptotrendings.com/introducing-bethel-the-future-of-decentralized-data-management/" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/retina01.png" alt=""></a> 
  
            <a href="https://nftnewsinsider.com/introducing-bethel-the-future-of-decentralized-data-management/" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/nftnewsinsider.png" alt=""></a> 
  
            <a href="https://www.nftcryptoupdate.com/2023/08/22/introducing-bethel-the-future-of-decentralized-data-management/" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/nftCryup.png" alt=""></a>
  
          <a href="https://www.bloomberg.com/press-releases/2023-09-01/futurecx-announces-silver-sponsorship-for-the-world-blockchain-summit-singapore-2023" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/bloomberg.png" alt="" ></a>
  
          <a href="https://finance.yahoo.com/news/futurecx-announces-silver-sponsorship-world-113600903.html" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/yahoo.png" alt="" ></a>
  
  
            <a href="https://markets.businessinsider.com/news/stocks/futurecx-announces-silver-sponsorship-for-the-world-blockchain-summit-singapore-2023-1032599267" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/markets-insider-logo.png" alt="" ></a>
  
          <a href="https://techbullion.com/introducing-bethel-the-future-of-decentralized-data-management/" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/TechBullionLogo-3.png" alt="" ></a>
  
          <a href="https://www.marketwatch.com/press-release/futurecx-announces-silver-sponsorship-for-the-world-blockchain-summit-singapore-2023-dfe1fa4f" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/market.png" alt="" ></a>
  
          <a href="https://www.bloomberg.com/press-releases/2023-09-01/futurecx-announces-silver-sponsorship-for-the-world-blockchain-summit-singapore-2023" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/bloomberg.png" alt="" ></a>
  
          <a href="https://finance.yahoo.com/news/futurecx-announces-silver-sponsorship-world-113600903.html" target="_blank" class="w-[300px]">
            <img src="../img/ArticleLine/yahoo.png" alt=""></a>
            
    
        </div>
  
  
        
        
        
      </div>
      <!-- end of the article logo line -->
  
      <div class="z-[100] px-[20px] md:px-[50px] lg:px-[110px]" :class='modalStore.onBlur'>
        <SecondPageComp />
        <StatementComp/>
        <ThirdpageComp/>
        <BethelChoose/>    
        <FourthPageComp/>
        <FifthaPageComp class="hidden"/>
        <SixthPageComp/>
        <SevenPageComp/>
        <EightSponserPage/>
        <ContactComp2/>
      </div>
        
      <FooterComp/>
    </div>
  </template>
  
  <script>
  import HeaderComp from '@/components/HeaderComp.vue';
  import HeroComp from '@/components/HeroComp.vue';
  import SecondPageComp from '@/components/SecondPageComp.vue';
  import StatementComp from '@/components/StatementComp.vue';
  import ThirdpageComp from '@/components/ThirdpageComp.vue';
  import FourthPageComp from '@/components/FourthPageComp.vue';
  import FifthaPageComp from '@/components/FifthaPageComp.vue';
  import SixthPageComp from '@/components/SixthPageComp.vue';
  import SevenPageComp from '@/components/SevenPageComp.vue';
  import EightSponserPage from '@/components/EightSponserPage.vue';
  import FooterComp from '@/components/FooterComp.vue';
  import BethelChoose from '@/components/BethelChoose.vue';
  import ContactComp2 from '@/components/ContactComp2.vue';
  
  import {mapStores} from 'pinia';
  import useModalStore from "@/stores/modal";
  
  export default {
    name : 'MainContent',
    components : {
      HeaderComp,
      HeroComp,
      SecondPageComp,
      StatementComp,
      ThirdpageComp,
      FourthPageComp,
      FifthaPageComp,
      SixthPageComp,
      SevenPageComp,
      EightSponserPage,
      FooterComp,
      BethelChoose,
      ContactComp2,
    },
    computed : {
      ...mapStores(useModalStore),
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
  
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .swiper-button-next{
    margin-top: 20px;
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
  
  .slide{
    display: flex;
    gap: 50px;
    align-items: center;
    justify-content: space-evenly;
    animation: 85s slide infinite linear;
  }
  
  
  
  @keyframes slide{
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  
  .slide img{
    width: 220px;
    height: 60px;
    filter: grayscale(100%);
  }
  
  .slide img:hover{
    filter: grayscale(0%);
    animation-play-state: paused;
  }
  
  
  
  
  </style>