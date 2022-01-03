<template>
<select v-model="selected">
  <option
    v-for="item in items"
    :key="item">
    {{ item }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
</template>
<script>
export default{
    data(){
        return{
            selected:'',
            items:['A','B','C']
        }
    }
}
</script>