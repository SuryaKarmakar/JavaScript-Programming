const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById("btnSearch");
const patients = [];

// This function captures user-entered data from the HTML form elements: name, gender, age, and medical condition. It ensures that all fields have valid inputs.
function addPatient() {
  const name = document.getElementById("name").value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const age = document.getElementById("age").value;
  const condition = document.getElementById("condition").value;

  if (name && gender && age && condition) {
    patients.push({ name, gender: gender.value, age, condition });
    resetForm();
    generateReport();
  }
}

// This function clears the values of the name, gender, age, and condition fields in the HTML form by setting them to empty strings or unchecked for radio buttons, effectively resetting the form to its initial state.
function resetForm() {
  console.log("patients", patients);
  document.getElementById("name").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("age").value = "";
  document.getElementById("condition").value = "";
}

// This function calculates and constructs an analysis report based on the collected patient data stored in the patients[] array.
function generateReport() {
  // Represents the total number of patients stored in the patients[] array
  const numPatients = patients.length;

  // A data structure (object) initializing counters for specific medical conditions (Diabetes, Thyroid, High Blood Pressure), initially set to zero.
  const conditionsCount = {
    Diabetes: 0,
    Thyroid: 0,
    "High Blood Pressure": 0,
  };
  // A nested object with gender-specific condition counters ( male and female) for each medical condition, also initialized to zero for each condition.
  const genderConditionsCount = {
    Male: {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,
    },
    Female: {
      Diabetes: 0,
      Thyroid: 0,
      "High Blood Pressure": 0,
    },
  };

  for (const patient of patients) {
    conditionsCount[patient.condition]++;
    console.log("conditionsCount", conditionsCount[patient.condition]++);

    genderConditionsCount[patient.gender][patient.condition]++;
    console.log(
      "genderConditionsCount",
      genderConditionsCount[patient.gender][patient.condition]++
    );
  }

  report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
  report.innerHTML += `Conditions Breakdown:<br>`;
  for (const condition in conditionsCount) {
    report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
  }

  report.innerHTML += `<br>Gender-Based Conditions:<br>`;
  for (const gender in genderConditionsCount) {
    report.innerHTML += `${gender}:<br>`;
    for (const condition in genderConditionsCount[gender]) {
      report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
    }
  }
}

addPatientButton.addEventListener("click", addPatient);

// This JavaScript function is designed to work within a web page to retrieve health condition information based on user input.
function searchCondition() {
  const input = document.getElementById("conditionInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const patient = patients.find((item) => item.name.toLowerCase() === input);

  if (patient) {
    resultDiv.innerHTML += `<p><strong>Name:</strong> ${patient.name}</p>`;
    resultDiv.innerHTML += `<p><strong>Age:</strong> ${patient.age}</p>`;
    resultDiv.innerHTML += `<p><strong>Condition:</strong> ${patient.condition}</p>`;
    resultDiv.innerHTML += `<p><strong>Gender:</strong> ${patient.gender}</p>`;
  } else {
    resultDiv.innerHTML = "Condition not found.";
  }
}
btnSearch.addEventListener("click", searchCondition);
