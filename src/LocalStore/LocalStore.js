
const addToDb = item => {
    const db = getDb()

    if (item in db) {
        db[item] = db[item] + 1

    } else {
        db[item] = 1;
    }

    saveToDb(db)
}


const removeFromDb = item => {
    const db = getDb()
    delete db[item];
    saveToDb(db)

}

const saveToDb = db => {
    const dbJson = JSON.stringify(db)
    localStorage.setItem('shopping_card', dbJson)
}

const getDb = () => {
    let saveDb = localStorage.getItem('shopping_card')


    return saveDb ? JSON.parse(saveDb) : {}
}


export { removeFromDb, addToDb, getDb }