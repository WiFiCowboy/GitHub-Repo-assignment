
// The user must be able to search for a GitHub user handle.
// The search must trigger a call to GitHub's API.
// The repos associated with that handle must be displayed on the page.
// You must display the repo name and link to the repo URL.
// The user must be able to make multiple searches and see only the results for the current search.

let userName = '';

function getUserRepo(){
    fetch('https://api.github.com/users/' + userName + '/repos?per_page=10')
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('that didnt work!'));
};

function displayResults(responseJson){
    resetResults();
    for(let i = 0; i < responseJson.length; i++){
        $('.results').append(
            `<h2>Repo Name: ${responseJson[i].name}</h2>
            <a href="${responseJson[i].html_url}">${responseJson[i].html_url}</a>`
          )
    }
    $('.results').removeClass('hidden');
};

function resetResults(){
    $('.results').empty();
}

function grabUserName(){
    userName = $('#UserInput').val();
};

function submitUser(){
    $('form').submit(event =>{
        event.preventDefault();
        grabUserName();
        getUserRepo();

    });
};

function masterControl(){
    submitUser();
};

$(masterControl);