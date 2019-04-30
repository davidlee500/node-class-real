var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

var askMom = function(){
    return willIGetNewPhone;
};

askMom
    .then(function (phone) {
        // yay, you got a new phone
        console.log(phone);
    // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(function (reason) {
        // oops, mom don't buy it
        console.log(reason.message);
    // output: 'mom is not happy'
    });

