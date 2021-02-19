/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(str) {
  if(str > 5)
    return true
  else return false
}

function isNewTopScore(score, topScore) {
  if(score > topScore)
  return true
  else return false
}

function isInDanger(grade) {
  return grade >= 60 && grade <=71
}

function isCoasting(grade) {
  return grade >= 72 && grade <=83
}

function isSucceeding(grade) {
  return grade >= 84 && grade <= 92
}

function isFailing(grade) {
  return grade < 60
}

function isAcing(grade) {
  return grade > 92
}

function isStudent(str) {
  if(str === "student")
    return true
  else return false
}

function isTeacher(str) {
  if(str === "teacher")
    return true
  else return false
}

function isAdmin(str){
  if(str === "admin")
    return true
  else return false
}

function isElementary(str){
  if(str === "elementary")
    return true
  else return false
}

function areDifferentPeople(str1, str2) {
  if (str1 !== str2)
    return true
  else return false
}

function isMiddleSchoolTeacher(str1, str2) {
  if(str === "teacher" && num >=6 && num <=8){
    return true
  }
  else {return false}
}

function notAnElementarySchoolAdministrator(str1, str2) {
  if(str1 !== "elementary"  || str2 !== "admin")
    return true
  else return false
}

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
