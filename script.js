// /*
// -varaiables rules:-
// 1- number allowed lekin number se shuru nahi ho sakta.
// 2-spaces not allowed betwwen naming.
// 3-special characters not allowed.
// 4-but only two s.c allowed which are $ and _.
// 5-varaibles name should be lower camel case.
// */
// /*
// -operators
// -4 types of operators:-
// 1-Arthimatic .
// 2-Assingment.(only this can change the value)
// 3-logical.
// 4-Comparioson



// */
// /*
// -Decisions
// -Example:-
// -psuedo code:-
//  age tempertaure 40 se zayada hua,toh m nahi aun gi warna m a jaun di.
// - J.S code:-
// let temperature = 30;
// if (temperature > 40) {
//     console.log("not coming");
//     else {
//         console.log("coming")
//     }
// }
// -Example 2 :-
// -psuedo code:-
// agr distance kam hai 1km se toh walk karo warna agr 10km se kam hai ,toh bus jao warna careem.
// - J.S code:-
// let distance = 0.5km;
// if (distan < 1){
//     console.log("walking")
// }else if (distnce < 10 ){
//     console.log("bus se jana hai")
// }else{
//     console.log("careem se jao")
// }

// */

// /* 
// -loops (to avoid repetion of code)
// -types:-
// 1-for loop.
// 2-while.
// 3-for each.
// 4-for in.
// 5 do while
// -J.S code:-
// for (kitni bar cahalana hai ) { kia chalna hai}
// -Example:-
// for ( let i = 0 ; i < 5 ; i++){
// console.log("Alhamdulillah");
// }
// -Example 2 :-
// count 1 to 10.
// for (let i = 0 ; i < 10 ; i++){
//     console.log(i+1);
// } 
// or
// for (let i = 1 ; i < 5 ; i++){
//     console.log(i);
// } 
// -Example 3 :-
// for (let i = 35 ; i>= 15 ; i--){
//     console.log(i)
// }

// */
// /*
//  */
// /*
//  */

// let students = [
//   {
//     name: "Amna",
//     gender: "f",
//     dob: new Date("02-04-1990"),
//     address: {
//       ilaqa: "Gulistan-e-Johar",
//       city: "Karachi",
//       country: "Pakistan",
//       postalCode: 47114
//     },
//     phoneNo: "0331-2324243",
//     admissionTestScore: 56,
//     hasInternet: true,
//     hasComputer: false,
//     hasJob: true,
//     hasSchoolBefore: false
//   },
//   {
//     name: "Hadia",
//     gender: "f",
//     dob: new Date("05-15-1984"),
//     address: {
//       ilaqa: "Lyari",
//       city: "Karachi",
//       country: "Pakistan",
//       postalCode: 75660
//     },
//     phoneNo: "0345-3452953",
//     admissionTestScore: 48,
//     hasInternet: false,
//     hasComputer: false,
//     hasJob: false,
//     hasSchoolBefore: true
//   },
//   {
//     name: "Ahmed",
//     gender: "m",
//     dob: new Date("06-27-2002"),
//     address: {
//       ilaqa: "University Road",
//       city: "Quetta",
//       country: "Pakistan",
//       postalCode: 82215
//     },
//     phoneNo: "0333-0124325",
//     admissionTestScore: 33,
//     hasInternet: true,
//     hasComputer: false,
//     hasJob: false,
//     hasSchoolBefore: false
//   },
//   {
//     name: "Fariha",
//     gender: "f",
//     dob: new Date("09-13-1998"),
//     address: {
//       ilaqa: "University Road",
//       city: "Karachi",
//       country: "Pakistan",
//       postalCode: 82215
//     },
//     phoneNo: "0331-9432532",
//     admissionTestScore: 33,
//     hasInternet: true,
//     hasComputer: false,
//     hasJob: false,
//     hasSchoolBefore: false
//   },
//   {
//     name: "Abdullah",
//     gender: "m",
//     dob: new Date("01-24-1972"),
//     address: {
//       ilaqa: "Bazar Colony",
//       city: "Lahore",
//       country: "Pakistan",
//       postalCode: 32212
//     },
//     phoneNo: "0345-9912121",
//     admissionTestScore: 33,
//     hasInternet: false,
//     hasComputer: false,
//     hasJob: true,
//     hasSchoolBefore: true
//   }
// ];
// /*
//   Print each student in this format:
// Name: Amna
// Gender: Female
// City: Karachi
// Score: 56 marks

//   for ( let i = 0 ; i < students.length ; i++){
//   console.log("Name: " + students[i].name)
//   let gender;
//   if (students[i].gender ==="f"){
//     console.log("Gender: female " )
//   } else{
//     console.log("Gender: male " ) 
//   }
  
//   console.log("City: " + students[i].address.city)
//   console.log("Score: " + students[i].admissionTestScore + " marks")
// console.log("")
//   }

// Q2. Print names of female students only.
//   for ( let i = 0 ; i < students.length ; i++){
// if (students[i].gender === "f")
// {
//   console.log(students[i].name)

// }
// Q3. Print names of male students only.
//   for ( let i = 0 ; i < students.length ; i++){
// if (students[i].gender === "m")
// {
//   console.log(students[i].name)

// }
//   }
// Q4. Print names of students who have passed the admission test. Passing marks are 50.
//   for ( let i = 0 ; i < students.length ; i++){
//     if (students[i].admissionTestScore >= 50)
//     {
//       console.log(students[i].name)
    
//     }
//       }
// Q5. Print names of eligible students only (students who have internet and live in Karachi are eligible)

//   for ( let i = 0 ; i < students.length ; i++){
//     if (students[i].address.city === "Karachi" && students[i].hasInternet === true )
//     {
//       console.log(students[i].name)
    
//     }
//       }
//    Q6. Print address of each student in this format:
// Amna's address:
// Gulistan-e-Johar in Karachi, Pakistan
//   for ( let i = 0 ; i < students.length ; i++){
//    console.log(students[0].name + "'s Address: \n "  + students[0].address.ilaqa + " in " + students[0].address.city +","+ students[0].address.country  )
//   }
//    Q7.  Print names and phone number of students who have Ufone.
//   for ( let i = 0 ; i < students.length ; i++){
//     if (students[i].phoneNo.charAt(2) === "3" && students[i].phoneNo.charAt(3) <= "7")
//     {
//       console.log(students[i].name  + " \n" + students[i].phoneNo)
    
//     }
//       }
//      Q8 Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
// Group A:  name1, name2
// Group B:  name3, name4, name5
// let groupA = [];
// let groupB = [];
//       for ( let i = 0 ; i < students.length ; i++){
//         if (students[i].hasJob == true || students[i].hasSchoolBefore == true)
//         {
//             groupB.push(students[i].name);
//         } else {
//           groupA.push(students[i].name);
//         }
//           }
//    console.log("Group A:" + groupA.join(, ));
//    console.log("Group B:" + groupB.join(, ));
//    for ( let i = 0 ; i < students.length ; i++){
//     console.log(students[0].age + "'s Address: \n "  + students[0].address.ilaqa + " in " + students[0].address.city +","+ students[0].address.country  )
//    }

//    function getAge(dob) {
//     var today = new Date();
//     var birthDate = new Date(students[i].dob);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     return age;
//     for ( let i = 0 ; i < students.length ; i++){
//         console.log(students[i].dob)
//         }
// }
// */
// // for(let i=0; i<students.length; i++){
// //   let dobYear =  students[i].dob.getFullYear();
// //   let todayYear = new Date().getFullYear();
// //   let age = todayYear - dobYear;
// //   let dobMonth = students[i].dob.getMonth();
// //   let todayMonth = new Date().getMonth();
// //   if(todayMonth < dobMonth){
// //     age--;
// //   } else if (todayMonth === dobMonth){
// //     let dobDate =  students[i].dob.getDate();
// //     let todayDate = new Date().getDate();
// // if (todayDate< dobDate){
// //   age--;
// // }
// //   }
// // console.log(`${students[i].name}'s age is ${age} years`)
// // ye sirf back tick ke sath chalta hai
// // }

// let people = [
//   {
//     name: "talat",
//     age: 23
//   },
//   {
//     name: "sufia",
//     age: 45
//   },
//   {
//     name: "somia",
//     age: 40
//   },
//   {
//     name: "safina",
//     age: 22
//   },
//   {
//     name: "altaf",
//     age: 30
//   }
// ];
// // loop 1 se isliye qke phele wle ko old farz kia hai to second se chalega
// let oldestStudent = people[0];
// for (let i = 1; i < people.length; i++) {
//   if (people[1].age > oldestStudent.age) {
//   }
// }
// console.log(oldestStudent.name);
// /*
// let oldestStudentAge = students[0];
// for(let i=0; i<students.length; i++){
//   let dobYear =  students[0].dob.getFullYear();
//   let todayYear = new Date().getFullYear();
//   let age = todayYear - dobYear;
//   let dobMonth = students[0].dob.getMonth();
//   let todayMonth = new Date().getMonth();
//   if(todayMonth < dobMonth){
//     age--;
//   } else if (todayMonth === dobMonth){
//     let dobDate =  students[0].dob.getDate();
//     let todayDate = new Date().getDate();
// if (todayDate< dobDate){
//   age--;
// */
// let oldestStudentAge = students[0];
// function calculateAge(dateOFBirth) {
//   let dobYear = dateOFBirth.getFullYear();
//   let todayYear = new Date().getFullYear();
//   let age = todayYear - dobYear;
//   let dobMonth = dateOFBirth.getMonth();
//   let todayMonth = new Date().getMonth();
//   if (todayMonth < dobMonth) {
//     age--;
//   } else if (todayMonth === dobMonth) {
//     let dobDate = dateOFBirth.getDate();
//     let todayDate = new Date().getDate();
//     if (todayDate < dobDate) {
//       age--;
//     }
//   }
//   return age;
// }
// for(let i=0; i<students.length; i++){
//   if (calculateAge(0) > oldestStudent.age)
//   let studentAge = calculateAge(students[i].dob);}
//   console.log(oldestStudent.name)
// // for(let i = 0)

let students = [
  {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
      ilaqa: "Gulistan-e-Johar",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 47114
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false
  },
  {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
      ilaqa: "Lyari",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 75660
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true
  },
  {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
      ilaqa: "University Road",
      city: "Quetta",
      country: "Pakistan",
      postalCode: 82215
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
  },
  {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
      ilaqa: "University Road",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 82215
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
  },
  {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
      ilaqa: "Bazar Colony",
      city: "Lahore",
      country: "Pakistan",
      postalCode: 32212
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true
  }
];
// console.log(students[0].address.city + ',' + students[0].address.country)

// console.log(students[0].name + students[0].gender + students[0].address.city + students[0].admissionTestScore)
// console.log('Name : ' + students[0].name);
// if (students[0].gender === 'f' ){
//   console.log('Gender : female');
// }
// else {
//   console.log('Gender : male');
// }
// // console.log('Gender : ' + students[1].gender + 'emale');
// console.log('City : ' + students[2].address.city);
// console.log('Score : ' + students[2].admissionTestScore+  ' marks');
// QUESTION NO.1
// for (i = 0; i < students.length; i++){
//   console.log('Name : ' + students[i].name);
//   if (students[i].gender === 'f' ){
//     console.log('Gender : female');
//   }
//   else {
//     console.log('Gender : male');
//   }
//   // console.log('Gender : ' + students[i].gender );
//   console.log('City : ' + students[i].address.city);
//   console.log('Score : ' + students[i].admissionTestScore+  ' marks');
//   console.log(' ')
  
// }

// for(i= 0; i < students.length; i++ ){
//   if (students[i].gender === 'm' ) { 
//     console.log (students[i].name);
//   }
// }

// for(i= 0; i < students.length; i++ ){
//   if (students[i].gender === 'm' ) { 
//     console.log (students[i].name);
//   }
// }


// for(i= 0; i < students.length; i++ ){
//   if(students[i].hasInternet && students[i].address.city == 'Karachi'){
//     console.log(students[i].name)
//   }
// }

// for(i= 0; i < students.length; i++ ){
//   if(students[i].phoneNo.charAt(2) === '3'){
//     console.log(students[i].name)
//   }
// }
let groupA = [];
let groupB = [];
for(i= 0; i < students.length; i++ ){
  if(students[i].hasJob || students[i].hasSchoolBefore){
    groupB.push(students[i].name);
  }
  else {
    groupA.push(students[i].name);
  }
}
console.log("Group A: " +  groupA.join(', '));
console.log("Group B: " +  groupB.join(', '));