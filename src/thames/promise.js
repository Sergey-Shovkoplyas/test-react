/* console.log("data request");

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = {
            name: "Serg",
            status: "admin",
            data1: true
        }
        console.log("data1", data);

        resolve(data);
    }, 2000)
})
    .then((data) => {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                data.data2 = true;
                console.log("data2", data);

                // reject(data);
                resolve(data);
            }, 2000)
        }))
    })
    .then((data) => {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                data.data3 = true;
                console.log("data3", data);

                resolve(data);
            }, 2000)
        }))
    })
    .then((data) => {
        data.last = true;
        console.log("last then!!!! data", data)
    })
    .catch((err) => console.error("Errorrrr", err))
    .finally(() => console.log("finally"))*/

// ----------------- all, race ----------------

/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("1 promise done!");
        resolve();
    }, 2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("2 promise done!");
        resolve();
    }, 5000)
})

Promise.all([p1, p2]).then(() => {
    console.log("All promices DONE!!!")
});

Promise.race([p1, p2]).then(() => {
    console.log("FIRST promice DONE!!!")
});
*/
