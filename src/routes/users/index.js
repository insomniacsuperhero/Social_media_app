const { Router } = require('express')
const { 
    createAnonUser,
    getUserById,
    getUserByUsername,
    getAllUsers
} = require('../../controllers/users')

const route = Router()

route.get('/',async (req,res)=>{
    const user = await getAllUsers()
    res.status(200).send(user)

})

route.get('/:id',async (req,res) => {
    let user;
    //console.log(req.params.id)
    if(isNaN(parseInt(req.params.id))){
        user = await getUserByUsername(req.params.id)
    }
    else{
        user = await getUserById(req.params.id)
    }
    
    //console.log(user)
    if(user){
        res.status(200).send(user)
    }else{
        res.status(404).send({
            error: 'User not found'
        })
    }
})
route.post('/', async (req,res) => {
    const user = await createAnonUser()
    res.status(201).send(user)
})
module.exports = {
    usersRoute: route
}