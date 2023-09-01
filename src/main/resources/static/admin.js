const userUrl = 'http://localhost:8090/api/users';

const userContainer = document.querySelector(".content-users__main");
const userNameContainer = document.querySelector(".navbar__user");
const userRoleContainer = document.querySelector(".navbar__role");
const userEditBtn = document.querySelector(".user-edit");

fetch(userUrl)
    .then(response => response.json())
    .then(user => {
        console.log(user[1].body);
        addDataInHeader(user[0].body);
        createUserItem(user[1].body[1])
    });

console.log("start")

const createUserItem = (userNext) => {
    console.log(userNext.role[0].name);
    const user = `
         <td class="bg-light">${userNext.id}</td>
         <td class="bg-light">${userNext.name}</td>
         <td class="bg-light">${userNext.surname}</td>
         <td class="bg-light">${userNext.email}</td>
         <td class="bg-light">${userNext.role.map(role => createRoleItem(role)).join(' ')}</td>
         <td class="bg-light">
            <button type="submit" class="user-edit btn btn-info" data-bs-toggle="modal"
                                                th:data-bs-target="'#updateModal' + ${userNext.id}">Edit
                                        </button>
                                        <div class="modal fade" th:id="'updateModal' + ${userNext.getId()}"
                                             tabindex="-1"
                                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Edit user</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                                aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                        <form class="form-group mx-auto col-lg-6 text-center"
                                                              th:method="PATCH"
                                                              th:action="@{/admin/{id}(id=${userNext.getId()})}"
                                                              th:object="${userNext}">
                                                            <div class="form-group">
                                                                <label for="ID-del">ID</label>
                                                                <input class="form-control" type="text" th:name="id"
                                                                       th:value="*{id}" id="ID-del" disabled>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="username-del">Login:</label>
                                                                <input class="form-control" type="text"
                                                                       th:name="username"
                                                                       th:value="*{username}" id="username-del">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="password-del">Password: </label>
                                                                <input class="form-control" type="password"
                                                                       th:name="password"
                                                                       th:value="*{email}" id="password-del"/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="name-del">Name: </label>
                                                                <input class="form-control" type="text" th:name="name"
                                                                       th:value="*{name}" id="name-del">
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="surname-del">Surname: </label>
                                                                <input class="form-control" type="text"
                                                                       th:name="surname"
                                                                       th:value="*{surname}" id="surname-del"/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="email-del">E-mail: </label>
                                                                <input class="form-control" type="email" th:name="email"
                                                                       th:value="*{email}" id="email-del"/>
                                                            </div>
                                                            <div class="form-group mb-3">
                                                                <label for="role-del"
                                                                       class="font-weight-bold">Role</label>
                                                                <select class="form-control form-control-sm"
                                                                        th:name="role" th:value="*{role}" multiple
                                                                        id="role-del" name="role" size="3" required>
                                                                    <option th:each="role : ${roles}"
                                                                            th:value="${role.id}"
                                                                            th:text="${role.name}">
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary"
                                                                        data-bs-dismiss="modal">Close
                                                                </button>
                                                                <button type="submit" class="btn btn-primary">Edit
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
         </td>
         <td class="bg-light">
             <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                th:data-bs-target="'#deleteModal' + ${userNext.id}">Edit
             </button>
         </td>
    `
    // userEditBtn.setAttribute('href', 'index.html');
    userContainer.insertAdjacentHTML("afterbegin", user);
};

// <td className="d-flex bg-light">${userNext.role.map(role => createRoleItem(role)).join(' ')}</td>
function addUserList(user) {

    const role = `
    <div class="nav-item bg-light text-white item">
        ${user.role.map(role => createRoleItem(role)).join(' ')}
    </div>`;
    userNameContainer.innerText = user.name;
    userRoleContainer.innerHTML = role;
}

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
    <li class="nav-item text-white item">
        ${user.role.map(role => createRoleItem(role)).join(' ')}
    </li>`;
    userNameContainer.innerText = user.name;
    userRoleContainer.innerHTML = role;
}
