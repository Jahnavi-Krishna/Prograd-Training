function add(){
    // var res = document.getElementById("fno").value + document.getElementById("sno").value; // this is considering as string and concatenation
    var res = Number(document.getElementById("fno").value) + 
            Number(document.getElementById("sno").value);
    console.log(res);
}

// Reccomend to use getElementById & querySelector. You can leave rest all
// 1. getElementById

function methods(){
    var res1 = document.getElementById("demo");
    console.log(res1);
}

//  2. ByClassName

function changecolor(){
    var res = document.getElementsByClassName("para");
    // this returns collection of all elements in the document with the specified class name
    for(var i=0; i<res.length; i++){
        res[i].style.color = "red";
    }
}

// 3. ByTagName

function yellow(){
    var res1 = document.getElementsByTagName("p")

    let res2 = res1[1].innerHTML = "haii"
    console.log(res2)

    for(var i=0; i<res1.length; i++){
        res1[i].style.color = "yellow"
    }
}

// 4. ByName

function tap(){
    var res1 = document.getElementsByName("num")
    console.log(res1.length)
}

// 5. innerText & innerHTML

function button(){
    var x = document.getElementById("btn").innerText; // innerText doesn't follow styling
    document.getElementById("demo").innerHTML = x; // innerHTML follows styling
}

// 6. Query Selector

function query(){
    const pa = document.querySelector("p")
    // for selector = use p, id = #demo, class = .name
    // The query Selector is going to pick the first p and access it
    console.log(pa);
}

// 7. QuerySelector All -> selects all the selectors that you are gonna pass
// it returns an array of all the queries

function allp(){
    const pa = document.querySelectorAll("p")
    console.log(pa);
}