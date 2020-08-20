<template>
    <div class="container">
        <form @submit="formSubmit">
            <div class="form-group">
                <label for="exampleInputEmail1">Post title</label>
                <input v-model="formTitle" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="PostTitle" placeholder="Write title">
                <small id="emailHelp" class="form-text text-muted">Write your Post title HERE</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Post description</label>
                <input v-model="formDescription" type="text" class="form-control" id="exampleInputPassword1" placeholder="Write description">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'form',
    data() {
        return {
            formDescription: '',
            formTitle: ''
        }
    },
    methods: {
        formSubmit(e) {
            e.preventDefault()

            axios.post('/api/posts', { title: this.formTitle, description: this.formDescription})
                .then(response => {
                    console.log(response, 'POST RESPONSE')
                })
        }
    }
}
</script>
