var alllistarea = document.querySelector('.alllistarea');
var maininput = document.querySelector('.maininput');
var clearalldiv = document.querySelector('.clearalldiv');


function addtodolist() {
    var mainarray = JSON.parse(localStorage.getItem("mainarray")) || [];
    if (maininput.value !== '') {
        var perviosplusnewdata = [...mainarray]
        perviosplusnewdata.push(maininput.value);
        localStorage.setItem("mainarray", JSON.stringify(perviosplusnewdata));
        // mainarray.push(maininput.value);
        getalldata();
        maininput.value = '';
        checkclearbtntrue()
    };
}

function getalldata() {
    alllistarea.innerHTML = '';
    var mainarray = JSON.parse(localStorage.getItem("mainarray")) || [];

    mainarray.map((x, i) => {
        alllistarea.innerHTML += `
        <li class='singlelist'>
            <span class="maintxt">${x}</span>
            <button onclick="editdata('${i}')">Edit</button>
            <button onclick="deletedata('${i}')">Delete</button>
        </li>
        `
    })
}

function deletedata(i) {
    var mainarray = JSON.parse(localStorage.getItem("mainarray")) || [];
    mainarray.splice(i, 1)
    localStorage.setItem("mainarray", JSON.stringify(mainarray));
    getalldata();
    checkclearbtntrue();
}

function deletalldata() {
    localStorage.setItem("mainarray", JSON.stringify([]));
    getalldata();
    checkclearbtntrue() 
}

function editdata(i){
    var mainarray = JSON.parse(localStorage.getItem("mainarray")) || [];
    var promptquestion = prompt('What do you want to replace', mainarray[i]);
    mainarray[i] = promptquestion;
    localStorage.setItem("mainarray", JSON.stringify(mainarray));
    getalldata();
}

function checkclearbtntrue(){
    const mainarray = JSON.parse(localStorage.getItem("mainarray")) || [];
    console.log(mainarray.length);
    if(mainarray.length <= 0){
        clearalldiv.innerHTML = '';
        console.log("div khatam hogya");
    } else{
        clearalldiv.innerHTML = '<button onclick="deletalldata()">Clear All</button>'
    }
}

checkclearbtntrue();
getalldata();