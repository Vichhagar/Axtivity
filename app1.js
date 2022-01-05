//Fetch API
let datas = document.querySelector('.datas');
const newActivity = document.querySelector('button');

const template = (data) => {
    return `<h3>${data['activity']}</h3>`
}
//https://dog.ceo/api/breeds/image/random
//https://www.boredapi.com/api/activity
const newIdea = () => {
    datas.innerHTML = '<h3>Please wait...</h3>';
    fetch('https://www.boredapi.com/api/activity').then(data => {
        //resovle
        console.log(data);
        return data.json();
    }).then(data => {
        datas.innerHTML = template(data);
        
    }).catch(err => {
        //reject
        console.log(err);
    });
};

newIdea();
newActivity.addEventListener('click', () => {
    newIdea();
});
