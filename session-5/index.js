function getGrade (total) {

    if (total > 90) {
   console.log("A+")
 }

    if (total > 80 && total < 90) {
    console.log("A")
    }

    if (total> 70 && total <= 80) {
        console.log("B")
    }

    if (total > 60 && total <= 70) {
        console.log("C")
    }

    if (total > 50 && total <= 60) {
        console.log("D")
    }

    if (total > 40 && total <= 50) {
        console.log("E")
    }

    if (total < 30 && total <= 40) {
        console.log("F")
    }

    if (total < 30) {
        console.log("Fail")
    }

  
}
getGrade(95)
getGrade(45)
getGrade(20)
getGrade(72)
getGrade(64)
getGrade(55)
getGrade(66)
getGrade(74)
getGrade(80)

//  A+ if total is greater than 90.
//  A if total is greater than 80 and less than or equal to 90.
// B if total is greater than 70 and less than or equal to 80.
// C if total is greater than 60 and less than or equal to 70.
// D if total is greater than 50 and less than or equal to 60.
//  E if total is greater than 40 and less than or equal to 50.
//  F if total is greater than 30 and less than or equal to 40.
//  “Fail” is total is less than 30

// ● Call the getGrade function and pass different values in the parameter to
// check if your logic works, e.g. getGrade(55) should give you the grade D

// ● Commit and push to GitHub


////////////////////////////////////////////Task  2  //////////////////////////////////////////////////////

function getGrade(total){

switch(true) {
    case (total > 90) :
        console.log("A+") ;
        break ;

    case (total > 80 && total< 90) :
        console.log("A") ;
        break ;

    case (total > 70 && total <= 80) :
        console.log("B") ;
        break ;

    case (total > 60 && total <= 70) :
        console.log("C") ;
        break ;

    case (total > 50 && total <= 60) :
        console.log("D")
        break ;

    case (total > 40 && total <= 50) :
        console.log("E")
        break ;

    case (total > 30 && total <= 40) :
        console.log("F")
        break ;

    default:
        console.log("Fail")
        break ;
}
   
    
    }
 
  console.log(getGrade(35))                                         