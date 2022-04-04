import axios from "axios";

axios
    .get("https://6233f5906d5465eaa511914c.mockapi.io/api/v1/user")
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });