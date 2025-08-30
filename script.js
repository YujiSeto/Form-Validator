let yValidator = {
  handleSubmit: (event) => {
    event.preventDefault();
    let send = true;

    let inputs = form.querySelectorAll("input");

    yValidator.clearErrors();

    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      let check = yValidator.checkInput(input);
      if (check !== true) {
        send = false;
        yValidator.showError(input, check);
      }
    }
    if (send) {
      form.submit();
    }
  },
  checkInput: (input) => {
    let rules = input.getAttribute("data-rules");

    if (rules !== null) {
      rules = rules.split("|");
      for (let k in rules) {
        let rDetails = rules[k].split("=");
        switch (rDetails[0]) {
          case "required":
            if (input.value === "") {
              return "Field is required";
            }
            break;
          case "min":
            if (input.value.length < rDetails[1]) {
              return "Field must be at least " + rDetails[1] + " characters long";
            }
            break;
          case "email":
            if (input.value != "") {
              let regex =
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              if (!regex.test(input.value.toLowerCase())) {
                return "E-mail is invalid";
              }
            }
            break;
        }
      }
    }
    return true;
  },
  showError: (input, error) => {
    input.style.borderColor = "#f00";

    let errorElement = document.createElement("div");
    errorElement.classList.add("error");
    errorElement.innerHTML = error;
    input.parentNode.insertBefore(errorElement, input.nextSibling);
  },
  clearErrors: () => {
    let inputs = form.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].style = "";
    }
    let errorElements = document.querySelectorAll(".error");
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].remove();
    }
  },
};

let form = document.querySelector(".validator");
form.addEventListener("submit", yValidator.handleSubmit);
