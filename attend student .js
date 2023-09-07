document.getElementById("form1").addEventListener("submit", submitFun1);
var studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];

console.log("Initial studentDataArr:", studentDataArr);

function submitFun1(e) {
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var number = document.querySelector("#number").value;
    var city = document.querySelector("#city").value;
    var rollNo = document.querySelector("#rollNo").value;

    var studentObj = {
        name: name,
        number: number,
        city: city,
        rollNo: rollNo
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr);
}

function displayFun(studentDataArr) {
    var count = 1;
    document.querySelector("#tbody").innerHTML = ""; // Clear the table body

    studentDataArr.forEach(function(item) {
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.textContent = count++;
        var td2 = document.createElement("td");
        td2.textContent = item.name;
        var td3 = document.createElement("td");
        td3.textContent = item.number;
        var td4 = document.createElement("td");
        td4.textContent = item.city;
        var td5 = document.createElement("td");
        td5.textContent = item.rollNo;
        var td6 = document.createElement("td");

        var btn1 = document.createElement("button");
        btn1.textContent = "P";

        btn1.addEventListener("click", function() {
            td6.textContent = "Present";
            item.status = "Present"; 
        });

        var btn2 = document.createElement("button");
        btn2.textContent = "A";

        btn2.addEventListener("click", function() {
            td6.textContent = "Absent";
            item.status = "Absent"; 
        });

        var btn3 = document.createElement("button");
        btn3.textContent = "Delete Data";
        btn3.id = "delete";
        btn3.addEventListener("click", function() {
            deleteStudentData(item.rollNo);
        });

        td6.classList.add("td6");
        btn1.classList.add("present");
        btn2.classList.add("absent");
        td6.append(btn1, btn2, btn3);

        tr.append(td1, td2, td3, td4, td5, td6);
        document.querySelector("#tbody").append(tr);
    });
}

function deleteStudentData(rollNo) {
    studentDataArr = studentDataArr.filter(function(item) {
        return item.rollNo !== rollNo;
    });
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    console.log("Updated studentDataArr after deletion:", studentDataArr);

    displayFun(studentDataArr);
}

displayFun(studentDataArr);
