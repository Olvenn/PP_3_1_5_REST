const userUrl = 'http://localhost:8090/api/users';

const userContainer = document.querySelector(".content-users__main");
const userNameContainer = document.querySelector(".navbar__user");
const userRoleContainer = document.querySelector(".navbar__role");

fetch(userUrl)
    .then(response => response.json())
    .then(user => {
        console.log(user[1].body);
        addDataInHeader(user[0].body);
        createUserItem(user[1].body)
    });

console.log("start")

const createUserItem = (userNext) => {
    const user = `  
         <td class="bg-light">UserName</td>
         <td class="bg-light">UserName</td>
         <td class="bg-light">UserName</td>
         <td class="bg-light">Email</td>
         <td class="d-flex">

         </td>
`
    userContainer.insertAdjacentHTML("afterbegin", user);
};

const createUsersList = (role) => (
    `<span style="margin-right: 5px">${role.name.replace('ROLE_', '')}</span>`
);


// <p className="bg-light">
//     ${userNext.role.map(role => createRoleItem(role)).join(' ')}
// </p>

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
