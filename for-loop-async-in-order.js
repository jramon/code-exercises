const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code');
    }, 2000);

};


// console.log('hola mundo')
// networkRequest();
// console.log('adios mundo')


for (let i = 0;  i <= 5; i++) {
    console.log(networkRequest(), i)
}


