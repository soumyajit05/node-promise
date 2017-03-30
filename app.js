function asyncPromise() {
    let p = new Promise((resolve, reject) => {
        console.log(`inside Promise`);
        //resolve();
        reject(`Unknown Error`);
    });
    p.then(() => {
        console.log(`Promise resolved`);
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
        ;
}

let p = asyncPromise();

