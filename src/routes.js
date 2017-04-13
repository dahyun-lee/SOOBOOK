//Load Comoinents
import Home from './components/Home.vue'
import Header from './components/header/Header.vue'
import loginHeader from './components/header/loginHeader.vue'
import signIn from './components/header/signin.vue'
import signUp from './components/header/signup.vue'
import Footer from './components/Footer.vue'
import myBook from './components/myBook/myBook.vue'
import galleryView from './components/myBook/galleryView.vue'
import listView from './components/myBook/listView.vue'
import bookSearch from './components/myBook/bookSearch.vue'
import bookDetail from './components/myBook/bookDetail.vue'


//Route Setting
export const routes = [
  {path: '/', name: 'home', components :{
    default: Home,
    header: Header,
    footer: Footer
  },
  beforeEnter: (to, from, next)=> {
    let key = window.localStorage.getItem('key');
      // to.matched[0].instances.header = new Header;
    if(key) {
      console.log(key);
      next({path: '/mybook'});
    } else {
      next();
    }
  }
},
  {path: '/signin',
  components:{
    default: signIn,
    header: Header,
    footer: Footer
  }
},
  {path: '/signup',
  components:{
    default: signUp,
    header: Header,
    footer: Footer
  }
},
{path: '/mybook',
components:{
  default: myBook,
  header: loginHeader,
  // searchBar : searchBar,
  // utility: utility,
  footer: Footer
},
children:[
    {path:'', component:galleryView},
    {path:'listview', component:listView},
  ]
},


{path:'/booksearch', components:{
  default:bookSearch,
  header: loginHeader,
  footer:Footer
}},
{path:'/bookdetail', components:{
  default:bookDetail,
  header: loginHeader,
  footer:Footer
}},


{
    path:'*', redirect: {name: 'home' }
    // path:'*', redirect: '/404'
  }
];