function httpGetAsync(theUrl, callBack) {
    var xmlHttp = new XMLHttpRequest();
  
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        callBack(xmlHttp);
      }
    };
    xmlHttp.open("GET", theUrl, true); //true for asynchronous
    xmlHttp.send(null);
  }
  
  httpGetAsync("https://picsum.photos/200/300", (data) => {
    document.getElementById("app1").setAttribute("src", data.responseURL);
    httpGetAsync("https://picsum.photos/200/300", (data) => {
      document.getElementById("app2").setAttribute("src", data.responseURL);
      httpGetAsync("https://picsum.photos/200/300", (data) => {
        document.getElementById("app3").setAttribute("src", data.responseURL);
      });
    });
  });
  
  // Không dùng CallBack
  // (function loading() {
  //   var theUrl = "https://picsum.photos/200/300";
  //   var xmlHttp1 = new XMLHttpRequest();
  
  //   xmlHttp1.onreadystatechange = function () {
  //     if (xmlHttp1.readyState === 4 && xmlHttp1.status === 200) {
  //       document.getElementById("app1").setAttribute("src", xmlHttp1.responseURL);
  //       var xmlHttp2 = new XMLHttpRequest();
  //       xmlHttp2.onreadystatechange = function () {
  //         if (xmlHttp2.readyState === 4 && xmlHttp2.status === 200) {
  //           document.getElementById("app2").setAttribute("src", xmlHttp2.responseURL);
  //         }
  //       };
  //       xmlHttp2.open("GET", theUrl, true); //true for asynchronous
  //       xmlHttp2.send(null);
  //     }
  //   };
  //   xmlHttp1.open("GET", theUrl, true); //true for asynchronous
  //   xmlHttp1.send(null);
  // })();