fdfdf
<template>
    <div class="container">
    <h1> {{post.title}} </h1>

    </div>
</template>

<script>
export default {

    data(){
        return{
            post:''
        }

    },
    created(){
this.getPosts();
    },
    methods: {
        getPosts(){
            axios.get('/api/posts/'+this.$route.params.id)
            .then(res => {
                console.log(res);
                this.post = res.data;
            })
            .catch(err => {
                console.log(err);
            })
        }



}
}
</script>
