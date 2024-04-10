// Submit Logic
const submitHandler = (event) => {
  let name1 = document.getElementById("name").value;
  let employeeID = document.getElementById("employeeID").value;
  let department = document.getElementById("department").value;
  let experience = document.getElementById("exp").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mbl").value;
  let role = "";
  if (experience > 5) role = "Senior";
  else if (experience >= 2 && experience <= 5) role = "Juinor";
  else if (experience <= 1) role = "Fresher";

  const employee = {
    name: name1,
    employeeID: employeeID,
    department: department,
    exp: experience,
    email: email,
    mobile: mobile,
    role: role,
  };

  if (localStorage.getItem("employees")) {
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  } else {
    const employees = [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  }
};

// Display table logic
const displayTable = () => {
  if (localStorage.getItem("employees")) {
    let tbody = document.querySelector("tbody");
    let employees = JSON.parse(localStorage.getItem("employees"));
    employees.map((element, ind) => {
      tbody.innerHTML += `
                  <tr>
                      <td align="center">${element.name}</td>
                      <td align="center">${element.employeeID}</td>
                      <td align="center">${element.department}</td>
                      <td align="center">${element.exp}</td>
                      <td align="center">${element.email}</td>
                      <td align="center">${element.mobile}</td>
                      <td align="center">${element.role}</td>
                      <td align="center" style="background-color: red;"><button style="background-color: red; border: none; color: white"  onclick="deleteHandler(${ind})">delete</button></td>
                  </tr>
              `;
    });

    return;
  }
  return;
};


// Delete button logic
const deleteHandler = (ind) => {
  let employees = JSON.parse(localStorage.getItem("employees"));
  employees.splice(ind, 1);
  localStorage.setItem("employees", JSON.stringify(employees));
  window.location.reload();
};

displayTable();
