import Home from './components/nav.vue'
import News from './components/navcontent.vue'
import Work from './components/work.vue'
import Item from './components/item.vue'
import Music from './components/music.vue'
import Moviee from './components/moviee.vue'
import Success from './components/success.vue'

export default{
  routes:[
    {path:'/nav', component:Home},
    {path:'/navcontent', component:News},
    {path:'/Work',component:Work},
    {path:'/Item',component:Item},
    {path:'/Music',component:Music},
    {path:'/Moviee',component:Moviee},
    {path:'/Success',component:Success},
    {path:'*', redirect:'/nav'}
  ]
}