<template>
    <ul class="nav nav-pills">
        <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/">Home</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/movie">Movie</RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link" active-class="active" to="/about">About</RouterLink>
        </li>
    </ul>    
</template>
<script>
export default{
    data(){
        return{
            navigations:[
                {name:'Home',href:'/'},
                {name:'Movie',href:'/movie'},
                {name:'About',href:'/about'}
            ]
        }
    }
}
</script>