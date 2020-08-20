import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//----components
//----components

import Home from '../components/home/Home'
import Posts from '../components/posts/Posts'
import Post from '../components/post/Post'
import Form from '../components/formPage/Form'

//----components
//----components

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/posts',
            name: 'posts',
            component: Posts
        },
        {
            path: '/post/:id',
            name: 'post',
            component: Post
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        }
    ]
})

export default router
