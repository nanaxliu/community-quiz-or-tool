let question1 = document.getElementById("q1");
let question2 = document.getElementById("q2");
let question3 = document.getElementById("q3");
let question4 = document.getElementById("q4");
let question5 = document.getElementById("q5");
let question6 = document.getElementById("q6");
let question7 = document.getElementById("q7");
let question8 = document.getElementById("q8");
let question9 = document.getElementById("q9");

if(question1!= null){
    let q1_a = document.getElementById('q1a');
    q1_a.addEventListener("click", () => {
        localStorage.setItem("q1", "1")
    })
    let q1_b= document.getElementById('q1b');
    q1_b.addEventListener("click", () => {
        localStorage.setItem("q1", "2")
    })
    let q1_c= document.getElementById('q1c');
    q1_c.addEventListener("click", () => {
        localStorage.setItem("q1", "3")
    })
    let q1_d= document.getElementById('q1d');
    q1_d.addEventListener("click", () => {
        localStorage.setItem("q1", "4")
    })
}

if(question2!= null){
    let q2_a = document.getElementById('q2a');
    q2_a.addEventListener("click", () => {
        localStorage.setItem("q2", "1")
    })
    let q1_b= document.getElementById('q2b');
    q2_b.addEventListener("click", () => {
        localStorage.setItem("q2", "2")
    })
}

if(question3!= null){
    let q3_a = document.getElementById('q3a');
    q3_a.addEventListener("click", () => {
        localStorage.setItem("q3", "1")
    })
    let q3_b= document.getElementById('q3b');
    q3_b.addEventListener("click", () => {
        localStorage.setItem("q3", "2")
    })
}

if(question4!= null){
    let q4_a = document.getElementById('q4a');
    q4_a.addEventListener("click", () => {
        localStorage.setItem("q4", "1")
    })
    let q4_b= document.getElementById('q4b');
    q4_b.addEventListener("click", () => {
        localStorage.setItem("q4", "2")
    })
    let q4_c= document.getElementById('q4c');
    q4_c.addEventListener("click", () => {
        localStorage.setItem("q4", "3")
    })
    let q4_d= document.getElementById('q4d');
    q4_d.addEventListener("click", () => {
        localStorage.setItem("q4", "4")
    })
}

if(question5!= null){
    let q5_a = document.getElementById('q5a');
    q5_a.addEventListener("click", () => {
        localStorage.setItem("q5", "1")
    })
    let q5_b= document.getElementById('q5b');
    q5_b.addEventListener("click", () => {
        localStorage.setItem("q5", "2")
    })
    let q5_c= document.getElementById('q5c');
    q5_c.addEventListener("click", () => {
        localStorage.setItem("q5", "3")
    })
    let q5_d= document.getElementById('q5d');
    q5_d.addEventListener("click", () => {
        localStorage.setItem("q5", "4")
    })
}

if(question6!= null){
    let q6_a = document.getElementById('q6a');
    q6_a.addEventListener("click", () => {
        localStorage.setItem("q6", "1")
    })
    let q6_b= document.getElementById('q6b');
    q6_b.addEventListener("click", () => {
        localStorage.setItem("q6", "2")
    })
    let q6_c= document.getElementById('q6c');
    q6_c.addEventListener("click", () => {
        localStorage.setItem("q6", "3")
    })

}

if(question7!= null){
    let q7_a = document.getElementById('q7a');
    q7_a.addEventListener("click", () => {
        localStorage.setItem("q7", "1")
    })
    let q7_b= document.getElementById('q7b');
    q7_b.addEventListener("click", () => {
        localStorage.setItem("q7", "2")
    })
}

if(question8!= null){
    let q8_a = document.getElementById('q8a');
    q8_a.addEventListener("click", () => {
        localStorage.setItem("q8", "1")
    })
    let q8_b= document.getElementById('q8b');
    q8_b.addEventListener("click", () => {
        localStorage.setItem("q8", "2")
    })
}

if(question9!= null){
    let q9_a = document.getElementById('q9a');
    q9_a.addEventListener("click", () => {
        localStorage.setItem("q9", "1")
    })
    let q9_b= document.getElementById('q9b');
    q9_b.addEventListener("click", () => {
        localStorage.setItem("q9", "2")
    })
}

let results = document.getElementById("results");
if (results != undefined){
    let q1 = localStorage.getItem("q1")
    let q2 = localStorage.getItem("q2")
    let q3 = localStorage.getItem("q3")
    let q4 = localStorage.getItem("q4")
    let q5 = localStorage.getItem("q5")
    let q6 = localStorage.getItem("q6")
    let q7 = localStorage.getItem("q7")
    let q8 = localStorage.getItem("q8")
    let q9 = localStorage.getItem("q9")

    let points = 100; 

    if (q1 == "1"){
        points -= 30; 
    } 
    else if (q1 == "2"){
        points -= 15; 
    }
    else if (q1 == "3"){
        points += 5; 
    }
    else if (q1 == "4"){
        points += 20; 
    }

    if (q2 == "1"){
        points -= 0; 
    } 
    else if (q2 == "2"){
        points -= 30; 
    }

    if (q3 == "1"){
        points += 0; 
    } 
    else if (q3 == "2"){
        points -= 15; 
    }

    if (q4 == "1"){
        points -= 10; 
    } 
    else if (q4 == "2"){
        points -= 5; 
    }
    else if (q4 == "3"){
        points += 5; 
    }
    else if (q4 == "4"){
        points += 10; 
    }

    if (q5 == "1"){
        points -= 10; 
    } 
    else if (q5 == "2"){
        points -= 5; 
    }
    else if (q5 == "3"){
        points += 5; 
    }
    else if (q5 == "4"){
        points += 10; 
    }

    if (q6 == "1"){
        points -= 5; 
    } 
    else if (q6 == "2"){
        points += 5; 
    }
    else if (q6 == "3"){
        points += 0; 
    }

    if (q7 == "1"){
        points -= 30; 
    } 
    else if (q7 == "2"){
        points += 0; 
    }

    if (q8 == "1"){
        points -= 10; 
    } 
    else if (q8 == "2"){
        points += 0; 
    }

    if (q9 == "1"){
        points -= 20; 
    } 
    else if (q9 == "2"){
        points += 0; 
    }

    let message = ''
    let results = document.getElementById("results");
    if(points <= 20) {
        message = 'Your average chinese parents would be extremely dissapointed in you';
    }else if(points <= 60) {
        message = 'Your average chinese parents would be dissapointed in you';
    }else if(points <=70){
        message = 'Your average chinese parents would be somewhat dissapointed in you';
    }else if(points <=80){
        message = 'Your average chinese parents would accept you but they wouldnt exactly be proud of you';
    }else if(points <=100){
        message = 'Your average chinese parents would accept you and be somewhat proud of you';
    }else if(points >100){
        message = 'Your average chinese parents would be proud of you';
    }
    results.innerHTML = message; 

    console.log(message)
    console.log(points)
}