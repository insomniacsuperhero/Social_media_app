const ADJECTIVES = [
    'talented',
    'white',
    'electronic',
    'ignorant',
    'familiar',
    'electrical',
    'critical',
    'flawless',
    'graceful',
    'smelly'
]

const OBJECTS = [
    'boots',
    'lamp',
    'statue',
    'elixir',
    'storm',
    'ark',
    'psyche',
    'skull',
    'gem',
    'beast'
]

function getRandomUsername(){
    const adj = ADJECTIVES[Math.floor(Math.random()*10)]
    const obj = OBJECTS[Math.floor(Math.random()*10)]
    return `${adj}-${obj}`
}

module.exports = {
    getRandomUsername
}