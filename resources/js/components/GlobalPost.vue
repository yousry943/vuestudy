<template>
    <div class="container">
post  details
    </div>
</template>

<script>
export default {

    data(){
        return{
            posts:[]
        }

    },
    mounted() { // i dont know  whats  meaning  (mounted)
        console.log('Component mounted.')
        this.getPosts();
    },
    methods: {

        getPosts(){
            axios.get('api/posts')
            .then(response => {
                this.posts = response.data;
            })


            .then(errors => console.log(errors) )
        }
    }

}
</script>
