//Create listItems object
const $listItems = $('.student-list').children();
//This selects the div that holds the ul's
//It is selected so that we can append
//A unordered list at the bottom of the DOM
const $divToAddTo = $('.student-list').parent();
//This is the number allowed of students per page
const numberToShow = 10;

//This is how we hide things replace the 0 with
//The index of the one you want to hide
//$($listItems[0]).hide();

//This hides all students on the page
$listItems.hide();

//This function determines the number of pages
//needed to accomdate the list of students based 
//on the number allowed to be shown
function numberOfSets(numberOfEntries){
    let sets = numberOfEntries / numberToShow;
    sets = Math.ceil(sets);
    return sets;
}

//Since all of the students are hidden
//This variabe will show the ones that are supposed
//to be shown based on the top index
function showStudents(topIndex){
    for(let i = (topIndex - 10); i < topIndex; i ++){
        if($listItems[i]){
            $($listItems[i]).show();
        }
    }
}

//This adds the outer div and ul to the bottom of the page
let ulForPageNums = $("<div class='pagination'><ul></ul></div>");
$divToAddTo.append(ulForPageNums);

//This selects the created ul for appending
let $ulSelector = $('.pagination ul');

//This function adds the page buttons dynamically 
function producePageNums(numSets){
    $ulSelector.append(`
        <li>
            <a class="active" href="#">1</a>
        </li>
    `);
    if(numSets > 1){
        for(let i = 2; i <= numSets; i ++){
           $ulSelector.append(`
                <li>
                    <a href="#">` + i + `</a>
                </li>
            `);
        }
    }
}

//Sets the number of sets needed to numSets
const numberSets = numberOfSets($listItems.length);
//Populates the page numbers on the bottom
producePageNums(numberSets);

//Selects all of the list items that were created
let $liSelector = $('.pagination ul li');
//Selects all of the a tags in the pagination div
let $aSelector = $('.pagination ul li a');

//Initializes page with the first ten students
showStudents(10);

//Handles click the page number click event
$ulSelector.on('click', function(event){
    //Rehide all list items
    $listItems.hide();
    //Show the appropriate students
    showStudents(($(event.target).text()) * 10);
    //This should remove the class from each list item
    //Thereby removing the active class
    $aSelector.each(function(index){
       $(this).removeClass('active');
    });
    //This sets the new active button
    $(event.target).addClass('active');
});
























