// Create a class called Student whose constructor maintains all four data inputs from the HTML page.
// The class should also contain the following methods:
// - a method that adds up all the student's scores
// - a method that adds up all the possible scores
// - a method that calculates the student's letter grade (divide the student's score by the possible scores and use the resulting decimal to determine grade)



class Student {

    constructor(score,total){
      this.score=score;
      this.total = total;
    }
     studScore = document.getElementById('studentScores').value;
    
     scoreArray=Array.from(this.studScore);


     totalScore = document.getElementById('possibleScores').value;

        totalScoreArray=Array.from(this.totalScore);
     addScore(scoreArray)
     {
         for (let index = 0; index < scoreArray.length; index++) {
            sum=sum + scoreArray[index];             
         }
     }

     addTotalScore(totalScoreArray)
     {
         for (let index = 0; index < array.length; index++) {
             const sumTotal = sum + totalScoreArray[index];
             
    }
}

         calculateLetterGrade(scoreArray,totalScoreArray)
         {
             const result=1;
             for(let i=0;i<scoreArray.length;i++)
             {
                 for (let index = 0; index < totalScoreArray.length; index++) {
                     result = this.scoreArray[i]/totalScoreArray[index];
                 }
             }

             if(result < 1) 
             return 'A';
             else if(result > 1 && result < 5)
             return 'B'
             else if (result >5)
             return 'C';
         }

     }
     console.log(result,"result");
     let array1=[2,3,4,5];
     let array2=[40,30,20];
let student = Student(10,50);
let letter= student.calculateLetterGrade(array1,array2);
document.getElementById('certGrade').innerHTML = letter;