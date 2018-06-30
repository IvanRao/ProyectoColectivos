module.exports = function () {
    return new Promise ( success => {
        const urls = [
            "http://localhost:8000/api/branch"
        ]
        
        app.get("/colectivos", (req, resp)=>{
    
            let promises = []
        
            urls.forEach((url) => {
                promises.push(fecth(url).then(function(res) {return res.json()} ))
            })
        
            Promise.all(promises).then(function(data) {
                resp.json(data)      
                console.log(data)  
            }).catch(function (error) {
                console.log(error);
            })
        })
    } )
}