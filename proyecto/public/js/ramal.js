window.addEventListener("load",()=> {
    const data = {ramales: [], nuevoRamal : ""}
    
    function updateTable(){
        axios.get("/ramal")
            .then((resp)=>
                data.ramales = resp.data
            )
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function deleteRamal(ramal){
        axios.delete("/ramal/" + ramal.id)
            .then((resp)=>updateTable())
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function agregarRamal(name){
        axios.post("/ramal/",{nombre:name})
            .then((resp)=>{
                updateTable();
                data.nuevoRamal = "";   
            })
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    //Comando Vue Js

    new Vue({
        el: '#app',
        data: data,
        methods:{
            deleteRamal : deleteRamal,
            agregarRamal : agregarRamal
        }
    })

    updateTable();
})
