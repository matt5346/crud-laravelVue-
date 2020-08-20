<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4" v-for="(post, key) in posts" :key="key">
                <h1>{{ post.title }}</h1>
                <p>{{ post.description }}</p>
                <p><a class="btn btn-secondary" :href="'/post/' + post.id" role="button">View details &raquo;</a></p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'app',
    data() {
        return {
            posts: [],
            pagination: {},
            edit: false,
            loading: true,
            errored: false
        }
    },
    // watch: {
    //     posts(newV, oldV) {
    //         console.log(newV, 'NEWV')
    //         console.log(oldV, 'OldV')
    //     }
    // },
    methods: {
        getPosts() {
            axios.get('/api/posts')
                .then(response => {
                    let responseSorted = response.data.data.sort((a, b) => {
                        return a.id - b.id
                    })

                    console.log(responseSorted, 'responseSorted')

                    this.posts = responseSorted
                })
                .catch(err => {
                    this.errored = true
                    console.log(err, 'ERROR')
                })
                .finally(() => {
                    this.loading = false
                })
        },
        async sortPosts() {
            let newPostsArr = this.posts

            newPostsArr.sort((a, b) => {
                return a.id < b.id
            })

            console.log(newPostsArr, 'newPostsArr')

            this.posts = newPostsArr
        }
    },
    mounted() {
        this.getPosts()
        this.sortPosts()
    }
}
</script>
