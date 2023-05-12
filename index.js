console.log("Wassup?!")

// bài 1 
function minDuong () {
    var tong = 0;
 
    for (var i=0; tong < 10000; i++) {
       
        tong += i;
    }

    console.log (tong);
    console.log(i);

    document.querySelector(".bg-success").innerHTML = "số nguyên dương nhỏ nhất ta tìm được là số " + i + ".";
}

// bài 2
function haiSo () {
    var x = document.getElementById("so1").value * 1;
    var n = document.getElementById("so2").value * 1;

    console.log(x);
    console.log(n);

    var tong = 0;
    var tich = 1;

    for (i=1; i <= n; i++) {
        tich = tich * x;
        tong += tich;
    }

    console.log(tong);

    document.querySelector(".bg-danger").innerHTML = tong;
}

// bài 3
function giaiThua () {
    var x = document.getElementById("soN").value * 1;

    console.log(x);

    var tich = 1;

    for (i=1; i <= x; i++) {
        tich = tich * i;
    }

    console.log(tich);

    document.querySelector(".bg-primary").innerHTML = x + "!" + " = " + tich + " nhé!";
}

// bài 4
function div10 () {
    var divChan = 0; 
    for (i=0; i <= 10; i++) {
        if (i % 2 == 0 ) {
            document.getElementById("addDiv").innerHTML += 
            'div class="bg-danger bg-opacity-75 p-3 text-white mt-3"> Chẵn </div>';
        } else {
            document.getElementById("addDiv").innerHTML += 
            'div class="bg-primary bg-opacity-75 p-3 text-white mt-3"> Lẻ </div>';
        }
    }
}

// bài 5
function array () {
    var x = document.getElementById("soK").value * 1;
    var arr = [];

    console.log(x);
    console.log(arr);
    
    for (i=1; i <= x; i++) {
        arr.push(i);
    }

    console.log(arr);

    document.querySelector(".bg-info").innerHTML = arr;
}