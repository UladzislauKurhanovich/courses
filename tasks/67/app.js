// const btn = document.querySelector('#loadBtn')
// btn.addEventListener('click', async () => {
//     let url = "https://jsonplaceholder.typicode.com/users"

//     let response = await fetch(url)
//     let data = await response.json()
//     let html = data.map(function(item){
//         return `<li>${item.id} ${item.name} ${item.username} (${item.email}) ${item.address}</li>`
//     })
//     document.querySelector('.list').insertAdjacentHTML('afterbegin', html.join(' '))       
// })


class myPromise{
    constructor(callback){
        this.onCatch = null;
        this.onFinaly = null;
        this.thenCbs = [];

        function resolver(data) {
            this.thenCbs.forEach(cb => {
                data = cb(data);
            });
            if (this.onFinaly){
                this.onFinaly();
            }
        }

        function rejecter(error) {
            if (this.onCatch) {
                this.onCatch(error);
            }
            if (this.onFinaly){
                this.onFinaly();
            }
        }

        callback(resolver.bind(this), rejecter.bind(this));
    }

    then(cb) {
        this.thenCbs.push(cb);
        return this;
    }

    catch(cb) {
        this.onCatch = cb;
        return this;
    }

    finaly(cb)  {
        this.onFinaly = cb;
        return this;
    }
}

var promise = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
})

promise
.then(num => {
    num *= 2;
    console.log(num);
    return num
})
.catch(err => console.log(err))
.then(num => {
    num *= 3;
    console.log(num);
    return num
})