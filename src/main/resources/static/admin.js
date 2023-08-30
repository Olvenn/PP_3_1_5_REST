const userUrl = 'http://localhost:8090/api/users';

const userNameContainer = document.querySelector(".navbar__user");
const userRoleContainer = document.querySelector(".navbar__role");

fetch(userUrl)
    .then(response => response.json())
    .then(user => {
        console.log(user[0].body.name);
        addDataInHeader(user[0].body);
    });

console.log("start")

const createRoleItem = (role) => (
    `<span style="margin-right: 5px">${role.name.replace('ROLE_', '')}</span>`
);

function addDataInHeader(user) {

    const role = `
    <li className="nav-item text-white item">
        ${user.role.map(role =>  createRoleItem(role)).join(' ')}
    </li>`;
    userNameContainer.innerText = user.name;
    userRoleContainer.innerHTML = role;
}
