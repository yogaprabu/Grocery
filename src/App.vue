<template>

<v-app >

    <v-toolbar class="light-green lighten-1" dark >
      <v-toolbar-side-icon dark class="hidden-sm-and-up" left @click.native.stop="sideNav1 = !sideNav1">

      </v-toolbar-side-icon>


          <v-toolbar-title >
            <router-link to="/" tag="span" style="cursor: pointer">
            <v-icon>
              shopping_basket
            </v-icon>
            Grocery
            </router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>

          <v-text-field class="hidden-sm-and-down mr-2 mt-2" light
            flat
            label="Search for products"
            append-icon="search"
            solo
            width="100px"
            single-line

            >
          </v-text-field>

            <v-select light class="location mt-2"
                flat
                label="Chennai"
                solo
                append-icon="place"
              >
            </v-select>
            <v-toolbar-items class="light-green lighten-1">
              <v-btn flat  class="hidden-xs-only" v-for="item in menuItems" :key="item.title" router :to="item.link">{{ item.title }}</v-btn>
              </v-toolbar-items>
              <v-icon right   style="cursor:pointer" @click.native.stop="sideNav = !sideNav">shopping_cart</v-icon>

    </v-toolbar>
    <v-toolbar class="hidden-md-and-up light-green lighten-1 ">
      <v-text-field
        class="mt-3 mb-1"
        flat
        label="Search for products"
        append-icon="search"
        solo
        width="100px"
        single-line
        >
      </v-text-field>
  </v-toolbar>
    <!--<v-navigation-drawer right temporary v-model="sideNav"
>
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Cart
            </v-list-tile-title>
          </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            Yes!
          </v-list-tile-content>
          <v-list-tile-action>
            -_-
          </v-list-tile-action>
        </v-list-tile>
        </v-list>
      </v-toolbar>



    </v-navigation-drawer>
-->

          <v-navigation-drawer temporary right v-model="sideNav"

            height="100vh"
            width="400"
            temporary
            absolute
          >
            <v-toolbar flat class="transparent" >
              <v-list class="pa-0">
                <v-list-tile avatar>
                  <v-list-tile-avatar>
                      <v-icon right   style="cursor:pointer" @click.native.stop="sideNav = !sideNav">shopping_cart</v-icon>
                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title>My Cart</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-toolbar>

            <v-list class="pt-0" dense>
              <v-divider></v-divider>

              <!--<b-row
                v-for="item in items"
                :key="item.title"
                @click=""
              >
                <b-card  tag="article"
                 style="min-width: 25rem;"
                 >
                 <b-img :src="item.src" class="contain img-left" style="height:75px"></b-img>

                  <b-card-text >
                  <p >{{item.title}}</p>
                  </b-card-text>
                -->
                <b-card no-body class="overflow-hidden" style="max-width: 540px;">
                  <b-row no-gutters v-for="item in items">
                    <b-col md="6">
                      <b-card-img :src="item.src" class="rounded-0" style="width:80%"></b-card-img>
                    </b-col>
                    <b-col md="6">
                      <b-card-body>
                        <b-card-text>
                          {{item.title}}
                        </b-card-text>
                        <b-button variant="outline-primary" @click="dec(item)" >--</b-button>
                        {{ item.count }}
                        <b-button variant="outline-primary" @click="inc(item)">+</b-button>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
                </b-card>
              </b-row>
            </v-list>
          </v-navigation-drawer>

    <v-navigation-drawer temporary v-model="sideNav1" left absolute >
        <v-toolbar flat class="light-green lighten-1">
          <v-list>
            <v-list-tile>
              <v-list-tile-title class="title">
                Application
              </v-list-tile-title>

            </v-list-tile>
          </v-list>
        </v-toolbar>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
            v-for="item in menuItems"
            :key="item.title"
            router :to="item.link"
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

  <main>
    <router-view></router-view>
  </main>

</v-app>

</template>

<script>
import Home from './components/Home'
import Categories from './components/Category/Categories'

export default {
  computed: {
    items(){
      return this.$store.getters.featuredItems
    }
    },

    data() {
        return {
            sideNav:false,
            sideNav1:false,

            menuItems:[
              {icon:'person', title:'My Account', link:'/MyAccount'},
              {icon:'face', title:'Login/SignUp', link:'/Login'}
            ],
        },
        methods :{
          this.inc=Categories.inc
        }
    }

}

</script>

<style media="screen">
a.hidden-xs-only.v-btn.v-btn--flat.v-btn--router.theme--dark:hover{
  text-decoration: none
}
a.v-list__tile.v-list__tile--link.theme--light:hover{
  text-decoration: none
}
aside .v-navigation-drawer .v-navigation-drawer--absolute .v-navigation-drawer--open .v-navigation-drawer--right .v-navigation-drawer--temporary .theme--light{
  width:500px;
}
.temporary{
  width:800px
}
</style>
