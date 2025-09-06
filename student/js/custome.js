let students = [];
let editIndex = -1;

function getFormData() {
  const name = document.getElementById('name').value;
  const roll = document.getElementById('roll').value;
  const id = document.getElementById('id').value;
  const className = document.getElementById('class').value;
  const age = document.getElementById('age').value;

  if (!name || !roll || !id || !className || !age) {
    alert("Please fill all fields!");
    return null;
  }

  return { name, roll, id, className, age };
}

function resetForm() {
  document.getElementById('name').value = "";
  document.getElementById('roll').value = "";
  document.getElementById('id').value = "";
  document.getElementById('class').value = "";
  document.getElementById('age').value = "";
}

function renderStudents() {
  const list = document.getElementById('studentList');
  list.innerHTML = "";

  students.forEach((student, index) => {
    const card = document.createElement("div");
    card.className = "student-card";
    card.innerHTML = `
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Roll:</strong> ${student.roll}</p>
      <p><strong>ID:</strong> ${student.id}</p>
      <p><strong>Class:</strong> ${student.className}</p>
      <p><strong>Age:</strong> ${student.age}</p>
      <div class="actions">
        <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
        <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
      </div>
    `;
    list.appendChild(card);
  });

  if (students.length === 0) {
    list.innerHTML = "No Student Found";
  }
}

function addStudent() {
  const student = getFormData();
  if (!student) return;

  students.push(student);
  renderStudents();
  resetForm();
}

function editStudent(index) {
  const student = students[index];
  document.getElementById('name').value = student.name;
  document.getElementById('roll').value = student.roll;
  document.getElementById('id').value = student.id;
  document.getElementById('class').value = student.className;
  document.getElementById('age').value = student.age;

  editIndex = index;

  document.getElementById('addBtn').style.display = "none";
  document.getElementById('saveBtn').style.display = "block";
}

function saveStudent() {
  const student = getFormData();
  if (!student) return;

  students[editIndex] = student;
  renderStudents();
  resetForm();

  document.getElementById('addBtn').style.display = "block";
  document.getElementById('saveBtn').style.display = "none";
  editIndex = -1;
}

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);
    renderStudents();
  }
}


