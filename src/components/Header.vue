<template>
    <header>
        <Logo />
        <ul class="nav nav-pills">
            <li 
                class="nav-item"
                v-for="nav in navigations"
                :key="nav.name"
                >
                <RouterLink 
                    class="nav-link" 
                    active-class="active" 
                    :to="nav.href">
                    {{ nav.name }}
                </RouterLink>
            </li>
        </ul>   
    </header> 
</template>
<script>
import Logo from './Logo'
export default{
    components:{ Logo },
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
<style scoped lang="scss">
header{		
    display:flex;	
    align-items: center;
    height: 70px;
    padding: 0 40px;
    .logo{
        margin-right: 40px;
    }
}
</style>