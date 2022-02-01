// gradding system

function totalNumbe() {
    let sub1 = parseInt(document.getElementById("bng").value);
    let sub2 = parseInt(document.getElementById("eng").value);
    let sub3 = parseInt(document.getElementById("che").value);
    let sub4 = parseInt(document.getElementById("phy").value);
    let sub5 = parseInt(document.getElementById("bio").value);
    let sub6 = parseInt(document.getElementById("mah").value);
    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100 || sub6 > 100) {
        alert("Please Enter Marks in range of 100");
    } else {
        let total = sub1 + sub2 + sub3 + sub4 + sub5 + sub6;
        document.getElementById("number").innerHTML = total;
        let ava = total / 6;
        document.getElementById("avarage").innerHTML = ava;
        if (sub1 > 33 && sub2 > 33 && sub3 > 33 && sub4 > 33 && sub5 > 33 && sub6 > 33) {
                 document.getElementById("pass").innerHTML = "<span style='color: #bd66b4'>Pass</span>";
            }else{
                document.getElementById("pass").innerHTML = "<span style='color: #c90e0e'>Fail</span>";
            }
          if (ava >= 80 && ava <= 100) {
            document.getElementById("grade").innerHTML = "A+";
            document.getElementById("point").innerHTML = "5";
        } else if (ava >= 70 && ava <= 79) {
            document.getElementById("grade").innerHTML = "A";
            document.getElementById("point").innerHTML = "4";
        } else if (ava >= 60 && ava <= 69) {
            document.getElementById("grade").innerHTML = "A-";
            document.getElementById("point").innerHTML = "3.5";
        } else if (ava >= 50 && ava <= 59) {
            document.getElementById("grade").innerHTML = "B";
            document.getElementById("point").innerHTML = "3.00";
        } else if (ava >= 40 && ava <= 49) {
            document.getElementById("grade").innerHTML = "C";
            document.getElementById("point").innerHTML = "2";
        } else if (ava >= 33 && ava <= 39) {
            document.getElementById("grade").innerHTML = "D";
            document.getElementById("point").innerHTML = "1";
        }
        else if (ava >= 0 && ava <= 32) {
            document.getElementById("grade").innerHTML = "F";
            document.getElementById("point").innerHTML = "0";
        }
        
        // else if (sub1 > 33 && sub2 >= 33 && sub3 > 33 && sub4 > 33 && sub4 > 33 && sub5 > 33 && sub5 > 33) {
        //     document.getElementById("pass").innerHTML = "Pass";
        // }
        //  else {
        //     document.getElementById("pass").innerHTML = "Fail";
        // }

    }



}
// document.write(totalNumbe());
