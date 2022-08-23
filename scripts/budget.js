// =====CALCULATE EVENT HANDLER(PLAYER EXPENSES)=====//
document
  .getElementById("calculate__btn")
  .addEventListener("click", function () {
    // INPUT FIELD VALUE
    const inputFieldElement = document.getElementById(
      "input__field--perPlayer"
    );
    const inputFieldValueString = inputFieldElement.value;
    const inputFiledValue = parseFloat(inputFieldValueString);

    //TOTAL PLAYERS
    const selectedPlayerElement = document.querySelectorAll(".player__item");
    const selectedPlayerNumbers = selectedPlayerElement.length;

    if (inputFiledValue < 0 || inputFieldValueString == "") {
      window.alert(
        "Please provide a valid input. We accept only positive numerical values as an input."
      );
    } else {
      //TOTAL PLAYER EXPENSES CALCULATION
      const totalPlayerExpensesCalculation =
        inputFiledValue * selectedPlayerNumbers;

      const totolPlayerExpensesElement = document.getElementById(
        "playerTotalExpenses"
      );
      const newTotalPlayerExpenses = totalPlayerExpensesCalculation;
      totolPlayerExpensesElement.innerText = newTotalPlayerExpenses;
    }
  });

//=======CALCULATION TOTAL HANDLER========//
document
  .getElementById("calculateTotal__btn")
  .addEventListener("click", function () {
    //TOTAL PLAYER EXPENSES
    const totolPlayerExpensesElement = document.getElementById(
      "playerTotalExpenses"
    );
    const totalPlyersExpensesString = totolPlayerExpensesElement.innerText;
    const totalPlayerExpenses = parseFloat(totalPlyersExpensesString);

    //MANAGER EXPENSES
    const managerInputFieldElement = document.getElementById(
      "input__field--manager"
    );
    const managerInputValueString = managerInputFieldElement.value;
    const managerInputValue = parseFloat(managerInputValueString);
    // managerInputFieldElement.value = "";

    //COACH EXPENSES
    const coachInputFieldElement = document.getElementById(
      "input__field--coach"
    );
    const coachInputValueString = coachInputFieldElement.value;
    const coachInputValue = parseFloat(coachInputValueString);
    // coachInputFieldElement.value = "";

    if (
      managerInputValue < 0 ||
      coachInputValue < 0 ||
      managerInputValueString == "" ||
      coachInputValueString == ""
    ) {
      window.alert(
        "Please provide a valid input. We accept only positive numerical values as an input."
      );
    } else {
      //TOTAL EXPENSES
      const totalExpensesElement = document.getElementById("totalExpenses");

      const totalExpenses =
        totalPlayerExpenses + managerInputValue + coachInputValue;

      totalExpensesElement.innerText = totalExpenses;
    }
  });
