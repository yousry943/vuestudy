<template>
    <div class="container">


<form>

    <input type="text" placeholder="search ..." v-model="serarchpost">

        <button type="button"> Go</button>

</form>

<div v-if="issearching" > ......searching posts</div>

  <div class="col-md-8">




        <div class="row justify-content-center" v-for="post in posts" :key="post.id">
            <div class="col-md-8">
                <div class="card">

                    <div class="card-header">



                        <router-link :to=" 'post/'+post.id"> {{post.name}} </router-link>

                        </div>

                    <div class="card-header">{{post.name}}</div>

                    <div class="card-body">
                        {{post.title}}
                    </div>
                </div>
            </div>
        </div>


</div>

    </div>




</template>

<script>
export default {

    data(){
        return{
            posts:[],
            serarchpost:'',
            issearching : false
        }

    },
    watch:{
   serarchpost(query){


       if(query.length > 0){
           console.log(query);
           this.issearching  = true;
           axios.get('/api/searchposts/'+query)
           .then(res => {
               this.posts =  res.data;
               this.issearching  = false;
               console.log(res);
           })
           .catch(err => {
               console.log(err);
           })
       }
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
