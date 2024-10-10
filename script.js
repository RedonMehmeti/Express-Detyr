// var express=require('express')
// var app=express()

// app.get('/users/:id',function(req,res){
//     var users=[
//     {id:1, libri:'Pipi Chorapgjata', autori:'Naim Frasheri'},
//     {id:2, libri:'BESA', autori:'Sami Frasheri'},
//     ]
//     const user=users.find(item=>{
//         return item.id==req.params.id
//     })

//     res.send('Ky eshte libri' + user.libri + user.autori );
// })
// app.listen(8011)



var express=require('express')
var app=express()

app.get('/users/:id',function(req,res){
    var users=[
    {id:1, produkti:'Qips', qmimi:'1.25'},
    {id:1, produkti:'Ajrokrem', qmimi:'2.5'},
    ]
    const user=users.find(item=>{
        return item.id==req.params.id
    })

    res.send('Produktet ne shitje jane:' + user.produkti + user.qmimi );
})
app.listen(8011)