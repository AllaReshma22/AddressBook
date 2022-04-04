// list of all employees
let employees = [
	{
		id: '1645555957234',
		firstName: 'Reshma',
		lastName: 'Alla',
		preferredName: 'Reshma Alla',
		email: 'reshmaalla@gmail.com',
		jobTitle: '.Net Development Lead',
		office: 'India',
		department: 'IT',
		phoneNumber: '9999999999',
		skypeId: '5477875',
		photo: 'Reshma.jpg',
	},
];

let displayEmployees = employees; // list of employees that are being displayed
const getHtmlForEmployeeList = () => {
	var finalHtml = '';
	for (i in displayEmployees) {
		var emp = displayEmployees[i];
		var employee = `<div class="employee" id="${emp.id}" onclick="openEmployeeDetails(this)">
			<img src="./images/users/${emp.photo}" alt="Employee Image" />
			<div class="employee-details">
				<h3>${emp.preferredName}</h3>
				<p>${emp.jobTitle}</p>
				<p>${emp.department} Department</p>
				<div class="icons">
					<ion-icon name="call"></ion-icon>
					<ion-icon name="mail"></ion-icon>
					<ion-icon name="text"></ion-icon>
					<ion-icon name="star"></ion-icon>
					<ion-icon name="heart"></ion-icon>
				</div>
			</div>
			</div>`;
		finalHtml += employee;
	}
	return finalHtml;
};

const getHtmlForEmployeeDetails = (employee) => {
	let finalHtml = `
	<img src="./images/users/${employee.photo}" alt="User Image" />
	<h1>${employee.preferredName}</h1>
	<div class="detail">
		<h3>First Name :</h3>
		<p>${employee.firstName}</p>
	</div>
	<div class="detail">
		<h3>Last Name :</h3>
		<p>${employee.lastName}</p>
	</div>
	<div class="detail">
		<h3>Email :</h3>
		<p>${employee.email}</p>
	</div>
	<div class="detail">
		<h3>Job Title :</h3>
		<p>${employee.jobTitle}</p>
	</div>
	<div class="detail">
		<h3>Office :</h3>
		<p>${employee.office}</p>
	</div>
	<div class="detail">
		<h3>Department :</h3>
		<p>${employee.department}</p>
	</div>
	<div class="detail">
	    <h3>Phone Number :</h3>
		<p>${employee.phoneNumber}</p>
	</div>
	<div class="detail">
		<h3>Skype ID :</h3>
		<p>${employee.skypeId}</p>
	</div>
	<div class="button">
		<button class="edit" id="${employee.id}" onclick="newEmployeeClickHandler('edit', this.id)">Edit</button>
	</div>
	`;

	return finalHtml;
};
const searchEmployeesByAttr = (val) => {
	// Here both the employee attributes and entered values are converted to uppercase and the matched employees will be displayed 
	let filterOptions = document.querySelector('#filters');
	let attr = filterOptions.value;
	if (attr == 'firstName') {
		displayEmployees = employees.filter((emp) =>
			emp.firstName.toUpperCase().startsWith(val.toUpperCase())
		);
	} else if (attr == 'lastName') {
		displayEmployees = employees.filter((emp) =>
			emp.lastName.toUpperCase().startsWith(val.toUpperCase())
		);
	} else if (attr == 'preferredName') {
		displayEmployees = employees.filter((emp) =>
			emp.preferredName.toLowerCase().startsWith(val.toUpperCase())
		);
	} else if (attr == 'email') {
		displayEmployees = employees.filter((emp) =>
			emp.email.toUpperCase.startsWith(val.toUpperCase())
		);
	} else if (attr == 'jobTitle') {
		displayEmployees = employees.filter((emp) =>
			emp.jobTitle.toUpperCase().startsWith(val.toUpperCase())
		);
	} else if (attr == 'office') {
		displayEmployees = employees.filter((emp) =>
			emp.office.toUpperCase().startsWith(val.toUpperCase())
		);
	} else if (attr == 'department') {
		displayEmployees = employees.filter((emp) =>
			emp.department.toUpperCase().startsWith(val.toUpperCase())
		);
	} else if (attr == 'phoneNumber') {
		displayEmployees = employees.filter((emp) =>
			emp.phoneNumber.toUpperCase().startsWith(val.toUpperCase())
		);
	} else if (attr == 'skypeId') {
		displayEmployees = employees.filter((emp) =>
			emp.skypeId.toUpperCase().startsWith(val.toUpperCase())
		);
	}
	employeeList = document.querySelector('.employee-list');
	employeeList.innerHTML = getHtmlForEmployeeList();
};

const displayAllEmployees = () => {
	displayEmployees = employees;
	employeeList = document.querySelector('.employee-list');
	employeeList.innerHTML = getHtmlForEmployeeList();
};

const newEmployeeClickHandler = (addOrEdit, empId) => {
	let backdrop = document.querySelector('.add-employee-form');
	backdrop.classList.remove('hidden');
	backdrop.classList.add('visible');
	let heading = document.querySelector('.formHeading');
	let form = document.querySelector('.new-employee');
	if (addOrEdit == 'add') {
		heading.innerHTML = 'Add new employee';
		form.id = 'add';
	} else if (addOrEdit == 'edit') {
		heading.innerHTML = 'Edit Employee Details';
		let detailsEmployee = document.querySelector('#details-of-employee');
		detailsEmployee.classList.remove('visible');
		detailsEmployee.classList.add('hidden');
		let employee = employees.find((emp) => emp.id === empId);
		form.id = empId;
		form[0].value = employee.firstName;
		form[1].value = employee.lastName;
		form[2].value = employee.preferredName;
		form[3].value = employee.email;
		form[4].value = employee.jobTitle;
		form[5].value = employee.office;
		form[6].value = employee.department;
		form[7].value = employee.phoneNumber;
		form[8].value = employee.skypeId;
	}
};
const closeNewEmployeeForm = () => {
	let addEmployeeForm = document.querySelector('.add-employee-form');
	addEmployeeForm.classList.remove('visible');
    addEmployeeForm.classList.add('hidden');
};
const newEmployeeSubmitHandler = (e) => {
	e.preventDefault();
	if (e.target.id === 'add') {
		let newEmployee = {
			id: new Date().getTime().toString(),
			firstName: e.target[0].value,
			lastName: e.target[1].value,
			preferredName: e.target[2].value,
			email: e.target[3].value,
			jobTitle: e.target[4].value,
			office: e.target[5].value,
			department: e.target[6].value,
			phoneNumber: e.target[7].value,
			skypeId: e.target[8].value,
			photo: 'Reshma.jpg',
		};
		if (newEmployee.preferredName === '') {
			newEmployee.preferredName = `${newEmployee.firstName} ${newEmployee.lastName}`;
		}
		employees = [...employees, newEmployee];
	} else {
		i = employees.findIndex((emp) => emp.id == e.target.id);
		employees[i].firstName = e.target[0].value;
		employees[i].lastName = e.target[1].value;
		if (e.target[2].value === '' || e.target[2].value == null) {
			employees[i].preferredName =
				e.target[0].value + ' ' + e.target[1].value;
		} else {
			employees[i].preferredName = e.target[2].value;
		}
		employees[i].email = e.target[3].value;
		employees[i].jobTitle = e.target[4].value;
		employees[i].office = e.target[5].value;
		employees[i].department = e.target[6].value;
		employees[i].phoneNumber = e.target[7].value;
		employees[i].skypeId = e.target[8].value;
	}
	let addEmployeeForm = document.querySelector('.add-employee-form');
	addEmployeeForm.classList.remove('visible');
	addEmployeeForm.classList.add('hidden');
	displayAllEmployees();
};
let newEmployeeForm = document.querySelector('.new-employee');
let detailBackdrop = document.querySelector('#details-of-employee');
newEmployeeForm.addEventListener('submit', (e) => newEmployeeSubmitHandler(e));
detailBackdrop.addEventListener('click', (e) => closeEmployeeDetails(e));
const openEmployeeDetails = (ele) => {
	let employee = employees.find((emp) => emp.id === ele.id);
	let employeeDetailsHtml = getHtmlForEmployeeDetails(employee);
	let employeeDetails = document.querySelector('#details-of-employee');
	let details = document.querySelector('.details');
	employeeDetails.classList.remove('hidden');
	employeeDetails.classList.add('visible');
	details.innerHTML = employeeDetailsHtml;
};
const closeEmployeeDetails = (e) => {
	let employeeDetails = document.querySelector('#details-of-employee');
	if (employeeDetails.isSameNode(e.target)) {
		employeeDetails.classList.remove('visible');
		employeeDetails.classList.add('hidden');
	}
};
