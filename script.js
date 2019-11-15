
// The user must be able to search for a GitHub user handle.
// The search must trigger a call to GitHub's API.
// The repos associated with that handle must be displayed on the page.
// You must display the repo name and link to the repo URL.
// The user must be able to make multiple searches and see only the results for the current search.


let testName = 'wificowboy';
let userName = '';

function getUserRepo(){
    fetch('https://api.github.com/search/users?q=' + userName)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('that didnt work!'));
};

function displayResults(responseJson){
    console.log(responseJson);
};


function grabUserName(){
    userName = $('#UserInput').val();
    console.log(userName);
};

function submitUser(){
    $('form').submit(event =>{
        event.preventDefault();
        grabUserName();
        getUserRepo();

    });
};

function masterControl(){
    console.log('Script is online!');
    submitUser();
  

};

$(masterControl);