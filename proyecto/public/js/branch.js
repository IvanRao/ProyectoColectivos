window.addEventListener("load",()=> {
    const data = {
        branches : {},
        newBranch : { name },
        modBranch : {}
    }
    
    function updateTable(){
        axios.get("api/branch")
            .then((resp)=>
                data.branches = resp.data
            )
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function fillModifyModal(branch){
        axios.get("api/branch/" + branch.id)
            .then((resp)=>
                data.modBranch = resp.data
            )
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function deleteBranch(branch){
        axios.delete("api/branch/" + branch.id)
            .then((resp)=>updateTable())
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function addBranch(branch){
        axios.post("api/branch/",{name:branch.name})
            .then((resp)=>{
                updateTable();
                data.newBranch.name = "";   
            })
            .catch((err)=>
                console.error(err.response.data)
            )
    }

    function modifyBranch(id, name){
        axios.put("api/branch/" + id, {name:name})
        .then((resp)=>{
            updateTable();
            data.modBranch.name = "";   
        })
        .catch((err)=>
            console.error(err.response.data)
        )
    }

    //Comando Vue Js

    new Vue({
        el: '#appBranch',
        data: data,
        methods:{
            deleteBranch : deleteBranch,
            addBranch : addBranch,
            modifyBranch : modifyBranch,
            fillModifyModal : fillModifyModal
        }
    })

    updateTable();
})
