import axios from 'axios'
export default{
    // modules
    namespaced:true,
    // data
    state:{
        loading:false,
        message:'',
        movies:[]
    },
    // computed
    getter:{},
    // methods
    mutations:{
        updateState(state,payload){
            Object.keys(payload).forEach( key=> state[key]=payload[key] )
        }
    },
    actions:{
        async searchMovies({ state, commit },payload){
            const {title, type, number, year} = payload
            const OMDB_API_KEY='7035c60c';
            const res=await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
            console.log(res)
            commit('updateState',{
                movies:res.data.Search               
            })
            const total=parseInt(res.data.totalResults)
            const pageLength=Math.ceil(total/10)
            if(pageLength>1){
                for(let page=2; page<=pageLength; page++){
                    if(page>number/10) break
                    const res=await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
                    commit('updateState',{
                        movies:[...state.movies, ...res.data.Search]              
                    })
                }
            }
        }
    }
}