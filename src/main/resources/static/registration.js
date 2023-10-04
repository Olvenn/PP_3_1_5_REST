console.log("Registration start");

const usersUrl = 'http://localhost:8090/api/registration';

const userNameContainer = document.querySelector(".navbar__user");
const userRoleContainer = document.querySelector(".navbar__role");

console.log(userNameContainer, userRoleContainer);

const getUsersInfo = (usersUrl) => {
    fetch(usersUrl)
        .then(response => response.json())
        .then(user => {
            console.log(user[0].body);
            addDataInHeader(user[0].body);
        });
}

getUsersInfo(usersUrl);

function addDataInHeader(user) {

    const role = `
    <li class="nav-item text-white item">
        ${user.role.map(role => createRoleItem(role)).join(' ')}
    </li>`;
    userNameContainer.innerText = user.name;
    userRoleContainer.innerHTML = role;
}

const createRoleItem = (role) => (
    `<span style="margin-right: 5px">${role.name.replace('ROLE_', '')}</span>`
);