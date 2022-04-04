function httpGetAsync(theUrl) {
    return fetch(theUrl);
}

const executeAsync = async () => {
    const data1 = await httpGetAsync("https://picsum.photos/200/300");
    document.getElementById("app1").setAttribute("src", data1.url);

    const data2 = await httpGetAsync("https://picsum.photos/200/300");
    document.getElementById("app2").setAttribute("src", data2.url);

    const data3 = await httpGetAsync("https://picsum.photos/200/300");
    document.getElementById("app3").setAttribute("src", data3.url);
};
executeAsync();