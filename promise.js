function httpGetAsync(theUrl, resolve) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            resolve(xmlHttp);
        }
    };
    xmlHttp.open("GET", theUrl, true); //true for asynchronous
    xmlHttp.send(null);
}

// Khởi tạo Promise và thực thi
const Promise1 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve);
});

const Promise2 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve);
});

const Promise3 = new Promise((resolve, reject) => {
    httpGetAsync("https://picsum.photos/200/300", resolve);
});

// Nhận resolve or reject từ Promise
Promise1.then((data) => {
    document.getElementById("app1").setAttribute("src", data.responseURL);
    return Promise2;
})
    .then((data) => {
        document.getElementById("app2").setAttribute("src", data.responseURL);
        return Promise3;
    })
    .then((data) => {
        document.getElementById("app3").setAttribute("src", data.responseURL);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("Done");
    });