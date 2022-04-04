const newPrimise = new Promise((res, rej) => {
    setTimeout(() => {
      res(1);
    }, 3000);
  });
  
  function download() {
    return newPrimise;
  }
  
  async function call() {
    const data = await download();
    console.log("data :", data);
  }
  
  call();