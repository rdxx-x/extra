const config = require('./config')
const system = require('./system')
const main = require('../app')

const validConfigValues = ['cpu', 'nucleos', 'velocidad', 'ram', 'usada', 'libre']

async function getInformation() {
    const result = {}

    for (const key of Object.keys(config.data)) {
        if (!validConfigValues.includes(key)) continue
        if (!config.data[key].active) continue
        if (!typeof system[key] == 'function') continue

        const data = await system[key]()
        result[key] = data
    }

    return result;
}

function sendInformation(data) {
    main.clients.forEach((e) => e.sendServerData(data))
}

async function run() {
    let result = await getInformation();
    await sendInformation(JSON.parse(JSON.stringify(result)))
}

module.exports = run