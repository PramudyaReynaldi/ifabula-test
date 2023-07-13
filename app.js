const buttons = document.querySelectorAll(".btn-primary");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    const countLabel = button.parentElement.querySelector(".count-label");

    let count = parseInt(countLabel.textContent);

    if (button.textContent === "+") {
      // Increment
      count += 1;
    } else if (button.textContent === "-") {
      // Decrement
      if (count > 0) {
        count -= 1;
      }
    }

    countLabel.textContent = count;
  });
});
