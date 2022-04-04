let file = 500;
let currentGb = 0;
let process = 0;

function callBack() {
  const timer = Math.round(Math.random() * 2000 + 1000);

  let randomSpeed = Math.round(Math.random() * 100);
  currentGb += randomSpeed;
  process = (currentGb / file) * 100;

  let countDown = setTimeout(callBack, timer);

  if (process >= 100) {
    console.log(30, "100 % " + currentGb + "mb");
    clearInterval(countDown);
  } else {
    console.log(32, process + " % " + currentGb + "mb");
  }
}

callBack();