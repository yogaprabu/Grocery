<template lang="html">

  <b-container  class="mt-2">

        <b-row>
            <b-col md="3" style="max-height:100vh;">
              <b-card
                 style="max-width:19rem;"
                 class="mb-2 "
               >
              <div role="tablist">
                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab" @click="icon()">

                      <b-card-header  block href="#" v-b-toggle.accordion-1 style="background: #9CCC65;color:white;font-weight:400;text-align:justify">
                        <span><font-awesome-icon :icon="myIcon1"/></span><span style="text-align:justify"> Pulses</span></b-card-header>
                      </b-card-header>
                    <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                      <b-list-group flush >
                        <b-list-group-item>Arhar</b-list-group-item>
                        <b-list-group-item>Moong</b-list-group-item>
                        <b-list-group-item>Rajma</b-list-group-item>
                        <b-list-group-item>Channa</b-list-group-item>
                        <b-list-group-item>Soya</b-list-group-item>
                        <b-list-group-item>Dried Pulses</b-list-group-item>
                      </b-list-group>
                    </b-collapse>

                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab" @click="icon()">

                      <b-card-header  block href="#" v-b-toggle.accordion-2 style="background: #9CCC65;color:white;font-weight:400;text-align:justify">
                        <span><font-awesome-icon :icon="myIcon1"/></span><span style="text-align:justify">
                          Atta & Other flours
                        </span>
                      </b-card-header>

                    </b-card-header>
                    <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
                      <b-list-group flush>
                      <b-list-group-item>Atta</b-list-group-item>
                      <b-list-group-item>Besan & Rava</b-list-group-item>
                      <b-list-group-item>Other flours </b-list-group-item>
                    </b-list-group>
                    </b-collapse>
                  </b-card>

                  <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab" @click="icon()">

                      <b-card-header  block href="#" v-b-toggle.accordion-3 style="background: #9CCC65;color:white;font-weight:400;text-align:justify">
                        <span><font-awesome-icon :icon="myIcon1"/></span><span style="text-align:justify">Spices</span></b-card-header>

                    </b-card-header>
                    <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">

                        <b-list-group flush>
                        <b-list-group-item>Whole Spices</b-list-group-item>
                        <b-list-group-item>Powdered Spices</b-list-group-item>
                        <b-list-group-item>Ready Masala</b-list-group-item>
                        <b-list-group-item>Cooking Paste</b-list-group-item>
                        <b-list-group-item>Others </b-list-group-item>
                      </b-list-group>

                    </b-collapse>
                  </b-card>


                </div>
              </b-card>
            </b-col>
            <b-col md="9">
              <b-row>
                <b-col md="3"  v-for="(i, index) in items">
              <b-card
                 tag="article"
                 style="max-width: 20rem;"
               >
               <p style="background:#51AA1B;border-radius:5px;max-width:80px;color:white;padding-left:12px;font-weight:500">{{i.off }}% OFF</p>
               <b-img :src="i.src" class="contain img-top"></b-img>
                 <b-card-text>
                  <p style="min-height:5rem;">{{ i.title}}</p>

                 </b-card-text>

                 <p style="font-size:15px;"><font-awesome-icon :icon="myIcon"/>{{ i.cost}}</p>
                 <b-button href="#" variant="outline-primary" @click="select(i)" v-if="i.count == 0">Add To Cart</b-button>

                   <div class="clearfix" v-else>
                     <b-button variant="outline-primary" @click="dec(i)" >--</b-button>
                     {{ i.count }}
                     <b-button variant="outline-primary" @click="inc(i)">+</b-button>
                   </div>



    <!--              <b-button href="#" variant="outline-primary" @click="select(index)+ans(index)" v-if="view==true || selected[0]!=index && selected[1]!=index">Add To Cart</b-button>-->


<!-- Toggling button
                  <b-button href="#" variant="outline-primary"  @click="select(index)" v-if="view==true || a[selected]!=index ">Add To Cart</b-button>
                  <div v-else>
                    <b-button variant="outline-primary" @click="decrement(count)">--</b-button>
                    {{count}}
                    <b-button variant="outline-primary" @click="increment(count)">+</b-button>
                  </div>


-->
                  <!--   <b-button href="#" variant="outline-primary" @click="(itemToShow = index),(selected= index)"><span v-if="selected==!index">Add To Cart</span>

                      <span v-if="itemToShow==index"  >
                        <b-button variant="outline-primary"  style="border-radius:50%;">-</b-button>

                        <span v-else><b-button href="#" variant="outline-primary" @click="(itemToShow = index),(selected= index)" >Add To Cart</b-button></span>
                        <span></span>
                        {{ index }}
                        <b-button variant="outline-primary"  style="border-radius:50%;">+</b-button>
                      </span>
                      </b-button>

                      -->
                     <!--<b-button href="#" variant="outline-primary" >1</b-button>
                     <b-button href="#" variant="outline-primary" >1</b-button>-->

               </b-card>
             </b-col>

             </b-row>

            </b-col>
        </b-row>



  </b-container>

</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'
import { mapState } from 'vuex'

export default {
  computed: {
    items(){
      return this.$store.getters.loadedItems

    }
    },
  data() {
    return{
      show:true,
      itemToShow:-1,
      selected:null,
      view:true,
      myIcon: faRupeeSign ,
      myIcon1:faMinus,

    }
  },

  methods: {
      select(car) {
        car.count++

      },
    inc(car){
      car.count++
    },
    dec(car){
      if(car.count>0)
      car.count--
    },
      icon(){
        if (this.myIcon1==faPlus) {
          this.myIcon1=faMinus
        }
        else {
          this.myIcon1=faPlus
        }

      }
    }
}


</script>

<style lang="css" scoped>
/*.btn-outline-primary:hover {
  color:white;
  background-color:  #9CCC65;
}
.btn-outline-primary{
  color: #9CCC65;
  border-color:  #9CCC65;
}
.container-fluid{
  margin-right: 15px;
  margin-left:10px;
}*/

.col-md-3{
  padding: 0px;
  margin: 0px;
}
.col-md-9{
  margin: 0px;
  padding: 0px;
}
.contain{
  width:100%;
}
.card-body:hover img{
transition-timing-function: ease-in-out;
transform: translateY(-10px);
transition: 1.2s;
}
.card-body:hover {
  cursor:pointer;
}

.btn:hover{
    color:white;

}
.list-group{
  margin-left:30px;
}
</style>
