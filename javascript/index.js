document.addEventListener("DOMContentLoaded", function () {
  let checkboxValues = ["Internship", "Pabau", "Employment", "Career"];
  const checkboxContainer = document.getElementById("checkboxContainer");
  const shuffleBtn = document.getElementById("shuffleBtn");
  const changeBtn = document.getElementById("changeBtn");
  const showBtn = document.getElementById("showBtn");
  const selectedValues = document.getElementById("selectedValues");
  const arrayValues = document.getElementById("arrayValues");
  let isTrue = true;

  function createCheckboxes() {
    checkboxContainer.innerHTML = "";
    checkboxValues.forEach((value) => {
      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = value;
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(value));
      checkboxContainer.appendChild(label);
    });
  }

  createCheckboxes();

  shuffleBtn.addEventListener("click", function () {
    checkboxValues.sort(() => Math.random() - 0.5);
    createCheckboxes();
  });

  changeBtn.addEventListener("click", function () {
    checkboxValues = ["Value1 ", "Value 2", "Value 3", "Value 4"];
    createCheckboxes();
  });

  showBtn.addEventListener("click", function () {
    const checkboxes = document.querySelectorAll(
      '#checkboxContainer input[type="checkbox"]:checked'
    );
    const selectedValuesArray = Array.from(checkboxes).map(
      (checkbox) => checkbox.value
    );
    selectedValues.textContent = `Selected values: ${selectedValuesArray.join(
      ", "
    )}`;
  });
});
