const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");

document.getElementById("form1").addEventListener("submit", function (e) {
  e.preventDefault();

  const petSelected = document.querySelector("input[name='pet']:checked");
  const interestSelected = document.querySelectorAll(
    "input[name='interest']:checked"
  );
  const dateField = document.getElementById("dateField");
  const timeField = document.getElementById("timeField");

  if (
    !petSelected ||
    interestSelected.length === 0 ||
    !dateField.value ||
    !timeField.value.trim()
  ) {
    alert("Please fill in all required fields in Step 1.");
    return;
  }

  step1.classList.remove("active");
  step2.classList.add("active");
});

document.getElementById("form2").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = step2.querySelectorAll("input, textarea");
  for (let input of inputs) {
    if (!input.value.trim()) {
      alert("Please fill in all required fields in Step 2.");
      return;
    }
  }
  step2.classList.remove("active");
  step3.classList.add("active");

  // Redirect back to step1 after 3 seconds
  setTimeout(() => {
    step3.classList.remove("active");
    step1.classList.add("active");
  }, 3000);
});

function goBack() {
  step2.classList.remove("active");
  step1.classList.add("active");
}
