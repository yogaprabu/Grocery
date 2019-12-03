  <template>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap justify-center >
        <v-flex xs12 >
       <v-carousel hide-delimiters  class="hidden-md-and-up" light style="height:264px;">
            <v-responsive aspect-ratio="1.7">
              <v-carousel-item
                v-for="item in items"
                :key="item.id"
                :src="item.ImageUrl"
                contain
                style="height:264px;"
              ></v-carousel-item>
          </v-responsive>
        </v-carousel>

        <swiper :options="swiperOption1" class="hidden-sm-and-down" >
           <!-- slides -->
           <swiper-slide
           v-for="i in items"
           :key="i.id"
           style="width:140%;"

           >
           <router-link :to="i.link"><img :src="i.ImageUrl" class="card-img-only"></router-link>
          </swiper-slide>
           <!-- Optional controls
           <div class="swiper-button-prev1" slot="button-prev"><v-icon color="#A8D277" style="background-color:white">
             navigate_before
           </v-icon></div>
           <div class="swiper-button-next1" slot="button-next"><v-icon color="#A8D277" style="background-color:white">
             navigate_next
           </v-icon></div>
         -->

         </swiper>


        </v-flex>
      </v-layout>

      <swiper :options="swiperOption"  justify-center  >
         <!-- slides -->
         <swiper-slide
         v-for="item in list"
         :key="item.id"
         style="height:250px;"
         >
         <router-link :to="item.link"><img  class="card-img-top" :src="item.src">
      				<h6>{{ item.title }}</h6>
            </router-link>
        </swiper-slide>
         <!-- Optional controls -->
         <div class="swiper-button-prev1" slot="button-prev"><v-icon color="#fff" >
           navigate_before
         </v-icon></div>
         <div class="swiper-button-next1" slot="button-next"><v-icon color="#fff">
           navigate_next
         </v-icon></div>
         <div class="swiper-pagination"  slot="pagination"></div>
       </swiper>
    </v-container>
  </template>

<script>

import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'




export default {
  data (){
    return {

        items: [
          { ImageUrl:'https://cdn.grofers.com/app/images/promotions/merchant/1559307993_HFS_1300_SM_JUNE19_inapp.jpg', id: 'ifiddhodsfbo', title: 'offer1', link:'/Categories' },
          { ImageUrl:'https://cdn.grofers.com/app/images/promotions/merchant/1559296649_HFS_JUNE19_Mainsale_1-7_hdfc_in.jpg', id: 'ahsidisnfoba', title: 'offer2', link:'/Categories' },
          { ImageUrl:'https://cdn.grofers.com/app/images/promotions/merchant/1559536249_83-BS-1320X660_Grofers_3_3.jpg', id: 'ahsidouyuwba', title: 'offer3', link:'/Categories' }
        ],
        list: [
          { src:'https://webcdn.grofers.com/cdn/pdp/category-l0-12.jpg', title:'Beverages', link:'/Categories'},
          { src:'https://webcdn.grofers.com/cdn/pdp/category-l0-13.jpg', title:'Snacks and Chocolates', link:'/Categories'},
          { src:'https://webcdn.grofers.com/cdn/pdp/category-l0-15.jpg', title:'Noodles and Instant Foods', link:'/Categories'},
          { src:'https://webcdn.grofers.com/cdn/pdp/category-l0-7.jpg', title:'Baby and Kids', link:'/Categories'},
          { src:'https://webcdn.grofers.com/cdn/pdp/category-l0-5.jpg', title:'Pet Care', link:'/Categories'},
          { src:'https://webcdn.grofers.com/cdn/pdp/category-l0-18.jpg', title:'Household Needs', link:'/Categories'}
        ],
        components: {
          swiper,
          swiperSlide
        },
        name: 'carrousel',

        swiperOption: {
          slidesPerView: 6,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 3500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1'
          }
        },
        swiperOption1: {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
}
</script>

<style lang="css" scoped>

.swiper-slide .card-img-top{
    margin-top: 25px;
    margin-left: 5px;
      margin-right:5px;
      width:100%;
      height: auto;
    }
.swiper-slide .card-img-only{
    height: 300px;
    width:960px;
}
.swiper-button-prev1{
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-button-next1{
  position: absolute;
  top: 50%;
  width: 27px;
  height: 44px;
  margin-top: -22px;
  z-index: 10;
  cursor: pointer;
  background-size: 27px 44px;
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-button-prev1.swiper-button-disabled,
.swiper-button-next1.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-container-rtl {

}
.swiper-button-prev1,
.swiper-container-rtl .swiper-button-next1 {
  background-color:  #9CCC65;
  border-radius: 100%;
  padding-top: 10px;
  opacity: 0.65;
  left: 10px;
  right: auto;
}
.swiper-button-next1,
.swiper-container-rtl .swiper-button-prev1 {
  background-color:  #9CCC65;
    border-radius:100%;
  padding-top: 10px;
  opacity:0.65;
  right: 5px;
  left: auto;
}

span .swiper-pagination-bullet .swiper-pagination-bullet-active{
  background-color:#5dbd1e;
}

a {
    text-decoration: none;
    color:#555;
}
a:hover{
  color:#555;
}

</style>
