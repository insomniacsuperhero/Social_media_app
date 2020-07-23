const{ Posts, Users } = require('../db/models')

async function createNewPost(userid, title, body){
    const post = await Posts.create({
        title: title,
        body: body,
        userId: userid
    })
    return post
}

async function findAllPosts(query){
    const posts = await Posts.findAll({
        include:[ Users ]
    })
    return posts
}

module.exports = {
    createNewPost,
    findAllPosts
}
/*
async function task(){
    /*console.log(
        await createNewPost(
            1,
            'This is a new post',
            'Body of this post goes here'
        )
    )
    console.log(
        await createNewPost(
            2,
            'Another post',
            'Body of this post goes here'
        )
    )
    const posts = await showAllPosts()
    for(let p of posts){
        console.log(`${p.title}\nauthor: ${p.user.username}\n${p.body}\n===============\n`)
    }
}
task()*/