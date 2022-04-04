fetch("https://6233f5906d5465eaa511914c.mockapi.io/api/v1/user")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .then(() => console.log("Run"));