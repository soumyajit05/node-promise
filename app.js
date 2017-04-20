function asyncPromise() {
    let p = new Promise((resolve, reject) => {
        console.log(`inside Promise`);
        resolve(() => {
            new Promise((resolve,reject) => {
                reject(`No Way`);
            })
        });
        //reject(`Unknown Error`);
    });
    return p;
}

asyncPromise().then((text) => {
    console.log(`Promise resolved ${text}`);
    return `success`;
},
    (reason) => {
        console.log(`Promise rejected due to ${reason}`);
        return reason;
    }
).then((value) => {
    console.log(`Really ${value}`);
}
    ).catch((error) => {
        console.log(`in catch -  ${error}`);
    })
    ;;

let utlClass  = require(`./util.js`);
console.log(utlClass.defaults(2));
