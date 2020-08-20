<template>
    <div class="container">
        <div>
            <h1>Post</h1>
            <h2>{{ post.title }}</h2>
            <p>{{ post.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    data() {
        return {
            post: []
        }
    },
    mounted() {
        this.getPosts()
        console.log(this.$route.params.id, 'this.$route.params.id')
    },
    methods: {
        getPosts() {
            axios.get('/api/posts')
                .then(response => {
                    console.log(response, 'response')
                    response.data.data.filter(item => {
                        if(item.id === parseInt(this.$route.params.id)) {
                            this.post = item
                            console.log(item, 'ITEM PASSED')
                        }
                        console.log(item, 'ITEM')
                    })
                })
                .catch(err => {
                    this.errored = true
                })
                .finally(() => {
                    console.log(this.post, 'post')
                })
        },
    }
}
</script>
