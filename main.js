var students = [];

function createStudent(firstName, lastName, program, gender, hobbies) {
    var student = {
        firstName: firstName,
        lastName: lastName,
        program: program,
        gender: gender,
        hobbies: hobbies
    };
    return student;
}

function addHobbies(student, hobbies) {
    student.hobbies = hobbies;
}

var student1 = createStudent("Rovic", "Balingbing", "Bachelor of Science in Computer Science", "Male");
var student2 = createStudent("Martin", "Martinez", "Bachelor of Science in Information Technology", "Male");
var student3 = createStudent("Dominic", "Domingo", "Bachelor of Science in Computer Engineering", "Male");
var student4 = createStudent("Sarah", "Duterte", "Bachelor of Science in Psychology", "Female");
var student5 = createStudent("Trey", "Young", "Bachelor of Science in Accountancy", "Male");
var student6 = createStudent("Ana", "Flores", "Bachelor of Science in Hotel Management", "Female");
var student7 = createStudent("Daniel", "Lee", "Bachelor of Science in Entrepreneurship", "Male");
var student8 = createStudent("John", "Dela Cruz", "Bachelor of Science in Public Administration", "Male");
var student9 = createStudent("William", "Wilson", "Bachelor of Science in Social Work", "Male");
var student10 = createStudent("Mina", "Dela Vega", "Bachelor of Science in Nursing", "Female");

addHobbies(student1, ["vlogging", "programming", "dancing"]);
addHobbies(student2, ["writing", "painting", "basketball"]);
addHobbies(student3, ["watching anime", "photography", "dancing"]);
addHobbies(student4, ["volleyball", "yoga", "traveling"]);
addHobbies(student5, ["gaming", "watching movies", "playing guitar"]);
addHobbies(student6, ["drawing", "listening to music", "cooking"]);
addHobbies(student7, ["playing basketball", "watching movies", "coding"]);
addHobbies(student8, ["public speaking", "debating", "writing"]);
addHobbies(student9, ["playing badminton", "travelling", "solving puzzles"]);
addHobbies(student10, ["playing piano", "baking", "collecting dolls"]);

students.push(student1, student2, student3, student4, student5, student6, student7, student8, student9, student10);

function displayStudentDetails() {
    var studentDetailsContainer = document.getElementById("studentDetails");
        
    for (var i = 0; i < students.length; i++) {
        var student = students[i];
    
        var studentDiv = document.createElement("div");
        studentDiv.classList.add("student");
    
        var studentHeading = document.createElement("h2");
        studentHeading.textContent = student.program;
        studentDiv.appendChild(studentHeading);
    
        var firstName = document.createElement("p");
        firstName.textContent = "First Name: " + student.firstName;
        studentDiv.appendChild(firstName);
    
        var lastName = document.createElement("p");
        lastName.textContent = "Last Name: " + student.lastName;
        studentDiv.appendChild(lastName);
    
        var gender = document.createElement("p");
        gender.textContent = "Gender: " + student.gender;
        studentDiv.appendChild(gender);
    
        var hobbies = document.createElement("p");
        hobbies.textContent = "Hobbies: " + student.hobbies.join(", ");
        studentDiv.appendChild(hobbies);
    
        studentDetailsContainer.appendChild(studentDiv);
    }
}

displayStudentDetails();