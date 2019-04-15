const inputId = [
  {
    id: "order-name",
    reg: /[a-zA-Zа-яА-я]{2,}/
  },

  {
    id: "order-surname",
    reg: /[a-zA-Zа-яА-я]{2,}/
  },

  {
    id: "order-email",
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },

  {
    id: "order-tel",
    reg: /^((\+3|8|0)+([0-9]){10})$/gm
  }
];

window.onload = () => {
  const btns = [...document.querySelectorAll(".user-button")];
  const selects = [...document.querySelectorAll(".custom-select")];
  const inputs = [...document.querySelectorAll(".form-control")];
  const sections = [...document.querySelectorAll(".user-form__content")];
  const titles = [...document.querySelectorAll(".checkout__title-wrapper")];
  const submitBtn = document.querySelector(".submit");

  function getInputValues(event, arr) {
    let currentInputValues = [];

    if (arr) {
      arr.forEach(item => {
        if (validate(item)) {
          currentInputValues.push({
            value: getInputValue(item),
            title: getInputName(item)
          });
        }
      });
    } else {
      validate(event.target);
    }

    return currentInputValues;
  }

  function getSelectsValues(event, arr) {
    let currentSelectValues = [];
    if (arr) {
      arr.forEach(item => {
        currentSelectValues.push({
          value: getSelectValue(item),
          title: getFirstOption(item)
        });
      });
    } else {
      currentSelectValues.push(getSelectValue(event.target));
    }

    return currentSelectValues;
  }

  function getSelectsFromCurrentSection(index) {
    let currentSectionSelects = [
      ...document.querySelectorAll(
        `.user-form__content--${index} .custom-select`
      )
    ];

    return currentSectionSelects;
  }

  function getInputsFromCurrentSection(index) {
    let currentSectionInputs = [
      ...document.querySelectorAll(
        `.user-form__content--${index} .form-control`
      )
    ];
    return currentSectionInputs;
  }

  function validate(input) {
    let bool;
    for (let i = 0; i < inputId.length; i++) {
      if (inputId[i].id === input.id) {
        if (getInputValue(input).search(inputId[i].reg) >= 0) {
          showSuccess(input);
          bool = true;
          break;
        } else {
          showError(input);
          bool = false;
          break;
        }
      }
    }
    return bool;
  }

  function showSuccess(input) {
    console.log("Огонь");
  }

  function allowNextStep(arr) {
    let boolArr = [];

    if (arr) {
      arr.forEach(item => {
        boolArr.push(validate(item));
      });

      if (boolArr.every(checkTrueOrFalse)) {
        return true;
      } else {
        return false;
      }
    }
  }

  function hideBlock(index) {
    sections[index].classList.add("disabled");
    sections[index].classList.remove("active");
  }

  function showNext(index) {
    sections[index + 1].classList.add("active");

    if (index > 0) {
      sections[index + 1].classList.remove("disabled");
    }
  }

  function checkTrueOrFalse(bool) {
    return bool === true;
  }

  function showError(input) {
    console.log("Так не пойдёт");
  }

  function getFirstOption(select) {
    let value = select.options[0].textContent;
    return value;
  }

  function getInputName(input) {
    let name = input.name;
    return name;
  }

  function getOutputBlock(index) {
    let blockArr = document.querySelector(
      `.user-form__filled-content--${index}`
    );
    showOutputBlock(blockArr);
    return blockArr;
  }

  function showOutputBlock(elem) {
    elem.classList.add("active");
  }

  function prepareFilledContent(input) {
    let container = document.createElement("div");
    let markUp;
    let elem;

    container.classList.add("user-form__filled-wrapper");

    markUp = input.map(item => {
      elem = `
      <div class="user-form__filled-content-item"><span class="filled-title">${
        item.title
      }</span>
      <span class="filled-value">${item.value}</span></div>
      `;

      container.innerHTML += elem;
    });
    return container;
  }

  function renderFilled(output, elem) {
    output.appendChild(elem);
  }

  function getInputValue(input) {
    return input.value;
  }

  function getSelectValue(select) {
    let value = select.options[select.selectedIndex].textContent;
    return value;
  }

  function formHandler(event, index) {
    if (index < 2) {
      hideBlock(index);
      toggleTitle(index);
      showNext(index);
      renderFilled(
        getOutputBlock(index),
        prepareFilledContent(
          getSelectsValues(event, getSelectsFromCurrentSection(index))
        )
      );
    } else {
      if (allowNextStep(getInputsFromCurrentSection(index))) {
        hideBlock(index);
        toggleTitle(index);
        renderFilled(
          getOutputBlock(index),
          prepareFilledContent(
            getInputValues(event, getInputsFromCurrentSection(index))
          )
        );

        showBtn();
      }
    }
  }

  function showBtn() {
    submitBtn.classList.remove("disabled");
  }

  function toggleTitle(index) {
    if (index >= 0) {
      titles[index].classList.add("closed-title");

      if (index < 2) {
        titles[index + 1].classList.remove("closed-title");
      }
    }

    if (index === undefined) {
      titles.forEach((title, i) => {
        if (titles.length > i + 1) {
          titles[i + 1].classList.add("closed-title");
        }
      });
    }
  }

  toggleTitle();

  btns.forEach((btn, index) => {
    btn.addEventListener("click", event => formHandler(event, index));
  });

  selects.forEach((select, index) => {
    select.addEventListener("change", getSelectsValues);
  });

  inputs.forEach((input, index) => {
    input.addEventListener("change", getInputValues);
  });
};
