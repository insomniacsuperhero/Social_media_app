const { Users } = require('../db/models')
const { getRandomUsername } = require('../utils/username')

async function createAnonUser(){
    const user = await Users.create({ username: getRandomUsername()})
    return user
}

async function getAllUsers(){
    return await Users.findAll()
}

async function getUserById(id){
    return await Users.findOne({where: {id}})
}

async function getUserByUsername(username){
    return await Users.findOne({where: {username}})
}

module.exports = {
    createAnonUser,
    getUserById,
    getUserByUsername,
    getAllUsers
}
/*
async function task(){
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
    console.log('---------------------')
    console.log(await createAnonUser())
}
task()*/