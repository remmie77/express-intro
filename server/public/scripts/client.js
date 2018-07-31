console.log( 'js' );

$( document ).ready( onReady );

function onReady(){
    console.log( 'jQ' );
    $( '.inputFieldsForm' ).on( 'click', '#submitBtn', getInfoCreateClass );
    $( '.table' ).on( 'mouseenter', '.tableRow', changeColorRow );
    $( '.table' ).on( 'mouseleave', '.tableRow', changeColorBack );
    $( '.table' ).on( 'dblclick', '.tableRow', eliminateEmployee );
}

// create a variable which will store monthly budget 
 let totalBudget = 0;
 
 //variable for tagging new Employee objects
 let indexTag = 0;
 
 // create an array to hold individuals as a group
 const employeeArr = [];

// create Class for employee/budget info
class Employee{
    constructor( firstNameIn, lastNameIn, idIn, titleIn, salaryIn ){
        this.firstNameIn = firstNameIn;
        this.lastNameIn = lastNameIn;
        this.idIn = idIn;
        this.titleIn = titleIn;
        this.salaryIn = salaryIn;
    }//end constructor
}//end class Employee

// create a function which will take in .inputFieldsDiv(s), and create a new class
function getInfoCreateClass(){
    console.log( 'in getInfoCreateClass' );
    let a = $( '#firstNameInput' ).val();
    let b = $( '#lastNameInput' ).val();
    let c = $( '#idInput' ).val();
    let d = $( '#titleInput' ).val();
    let e = $( '#annualSalaryInput' ).val();
    if( e == '' ){
        $( '#submitBtn' ).disabled = true;
    }//end if no number
    else{  
        let newOne = new Employee( a,b,c,d,e );
        employeeArr.push( newOne );
        dataTag();
    }//end create new Employee
}//end getInfoCreateClass

function dataTag(){
    console.log( 'in dataTag' );
    indexTag = 0;
    for( let employee of employeeArr ) {
        $(employee).data( 'index', indexTag );
        indexTag ++;
    }
    cLearInputs();
}//end dataTag

// create function to clear the input fields.
function cLearInputs( employeeIn ){
    console.log( 'in pushClassCLearInputs' );
    console.log( employeeArr );
    $( '#firstNameInput' ).val( '' );
    $( '#lastNameInput' ).val( '' );
    $( '#idInput' ).val( '' );
    $( '#titleInput' ).val( '' );
    $( '#annualSalaryInput' ).val( '' );
    clearTable();
}//end pushClassCLearInputs

// create a function which clears the table 
function clearTable(){
    console.log( 'in clearTable' );
    $( '.table' ).empty();
    displayFromInput();
}//end clearTable

//create function which appends array inputs when new class is formed
function displayFromInput(){
    console.log( 'in displayFromInput' );
    let dataIndex = 0
    $('.table').append( '<thead><tr><th>Firstname</th><th>Lastname</th><th>ID</th><th>Title</th><th>Annual Salery</th></tr></thead>' );
    for( let employee of employeeArr ){
        $('.table').append( '<tr class="tableRow" ><td>' + employee['firstNameIn'] + '</td><td>' + employee['lastNameIn'] + '</td><td>' + employee['idIn'] + '</td><td>' + employee['titleIn'] + '</td><td>' + employee['salaryIn'] + '</td></tr>' ); 
    // turn salary to a number and add it to totalBudget var
    }
    adjBudget();
}//end displayFromInput

// create a function which will adjust the monthlyBudget var and append to DOM
//if budget exceeds $20000, change budget text to red.
function adjBudget(){
    console.log( 'in adjBudget' );
    totalBudget = 0;
    for ( let employee of employeeArr ){
        totalBudget += Number( employee['salaryIn'] );
    }
    console.log( totalBudget );
    $( '#totalCash' ).text(( totalBudget ).toFixed(2));
    if( totalBudget > 20000 ){
        $( '#totalMonthly' ).css( 'color', 'orange' );
    }else{
        $( '#totalMonthly' ).css( 'color', 'black' );
    }
}//end adjBudget

// create a function which will change background color of row with hover event.
// also remove said row with a double click event
//re-run adjBudget
// stretch (prompt are you sure? with yes/no when row is double clicked)


// function removeEmployee(){
//     console.log ( 'in removeEmployee' );
//     $( '.tableDiv' ).on( 'hover', '<tr>',  );
// }//end removeEmployee

function changeColorRow(){
    //console.log( 'in changeColorRow' );
    $( this ).css( "background-color", "lightgrey" );
}//end changeColorRow

function changeColorBack(){
    //console.log( 'in changeColorBack' );
    $( this ).css( "background-color", "#2591DB" );
}//end changeColorBack

// create function to eliminate and employee from the DOM and 
function eliminateEmployee() {
    console.log( 'in eliminateEmployee' )
    let goneEmployee = $('index.indexTag');
    employeeArr.splice( goneEmployee, 1 );
    $( this ).remove();
    adjBudget();
    //remove selected row from employeeArr,
    //then run displayFromInput() to recalculate budget 
}//end eliminateEmployee











