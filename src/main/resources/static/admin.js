const userUrl = 'http://localhost:8090/api/users';

const userContainer = document.querySelector(".list-users");
const userNameContainer = document.querySelector(".navbar__user");
const userRoleContainer = document.querySelector(".navbar__role");
const userEditBtn = document.querySelector(".user-edit");

fetch(userUrl)
    .then(response => response.json())
    .then(user => {
        console.log(user[1].body);
        addDataInHeader(user[0].body);
        addUsersList(user[1].body)
        // createUserItem(user[1].body[1])

        // addRollList(user[1].body)
    });

console.log("start")


// const createRoleItem = (role) => (
//     `<span style="margin-right: 5px">${role.name.replace('ROLE_', '')}</span>`
// );

// const createUserItem = (role) => (
//     `<span style="margin-right: 5px">User</span>`
// );


// <td class="d-flex bg-light">${userNext.role.map(role => createRoleItem(role)).join(' ')}</td>
function addUsersList(users) {

    const usersList = `
    <tbody class="content-users__main">
        ${users.map(user => createUserItem(user))}
    </tbody>`;
    userContainer.insertAdjacentHTML("beforeend", usersList);
}

// function addUserList(user) {
//
//     const role = `
//     <div class="nav-item bg-light text-white item">
//         ${user.role.map(role => createRoleItem(role)).join(' ')}
//     </div>`;
//     userNameContainer.innerText = user.name;
//     userRoleContainer.innerHTML = role;
// }


// <p class="bg-light">
//     ${userNext.role.map(role => createRoleItem(role)).join(' ')}
// </p>

const createUserItem = (userNext) => {
    const userList = ` 
        <tr class="content-users__main border-top bg-light">
            <td class="bg-light">${userNext.id}</td>
            <td class="bg-light">${userNext.username}</td>
            <td class="bg-light">${userNext.name}</td>
            <td class="bg-light">${userNext.surname}</td>
            <td class="bg-light">${userNext.email}</td>
            <td class="bg-light">${userNext.role.map(role => createRoleItem(role)).join(' ')}</td>
            <td class="bg-light">
              
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal${userNext.id}">
                  Edit
                </button>
        
        <!-- Модальное окно -->
                <div class="modal fade" id="updateModal${userNext.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Заголовок модального окна</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                      </div>
                      <div class="modal-body">
                        <form class="form-group mx-auto col-lg-6 text-center" th:method="PATCH"
                          th:action="@{/admin/{id}(id=${userNext.id})}" th:object="${userNext}">
                          <div class="form-group">
                            <label for="ID-del">ID</label>
                            <input class="form-control" type="text" name="id" value="${userNext.id}" id="ID" disabled>
                          </div>
                          <div class="form-group">
                            <label for="username-del">Login:</label>
                            <input class="form-control" type="text" name="username" value="${userNext.username}" id="username">
                          </div>
                          <div class="form-group">
                            <label for="password-del">Password: </label>
                            <input class="form-control" type="password" name="password" th:value="${userNext.password}" id="password" />
                          </div>
                          <div class="form-group">
                            <label for="name-del">Name: </label>
                            <input class="form-control" type="text" name="name" value="${userNext.name}" id="name">
                          </div>
                          <div class="form-group">
                            <label for="surname-del">Surname: </label>
                            <input class="form-control" type="text" name="surname" value="${userNext.surname}" id="surname" />
                          </div>
                          <div class="form-group">
                            <label for="email-del">E-mail: </label>
                            <input class="form-control" type="email" name="email" value="${userNext.email}" id="email" />
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close
                            </button>
                            <<button type="submit" class="btn btn-primary">Edit
                              </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
            </td>
          
           <td class="bg-light">
           <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal${userNext.id}">
              Edit
           </button>
    
    <!-- Модальное окно -->
            <div class="modal fade" id="deleteModal${userNext.id}" tabindex="-1" aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Заголовок модального окна</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                  </div>
                  <div class="modal-body">
                    <form class="form-group mx-auto col-lg-6 text-center" th:method="PATCH"
                      th:action="@{/admin/{id}(id=${userNext.id})}" th:object="${userNext}">
                      <div class="form-group">
                        <label for="ID-del">ID</label>
                        <input class="form-control" type="text" name="id" th:value="${userNext.id}" id="ID-del" disabled>
                      </div>
                      <div class="form-group">
                        <label for="username-del">Login:</label>
                        <input class="form-control" type="text" name="username" value="${userNext.username}" id="username-del" disabled>
                      </div>
                      <div class="form-group">
                        <label for="password-del">Password: </label>
                        <input class="form-control" type="password" name="password" th:value="${userNext.password}" id="password-del" disabled/>
                      </div>
                      <div class="form-group">
                        <label for="name-del">Name: </label>
                        <input class="form-control" type="text" name="name" value="${userNext.name}" id="name-del" disabled>
                      </div>
                      <div class="form-group">
                        <label for="surname-del">Surname: </label>
                        <input class="form-control" type="text" name="surname" value="${userNext.surname}" id="surname-del" disabled/>
                      </div>
                      <div class="form-group">
                        <label for="email-del">E-mail: </label>
                        <input class="form-control" type="email" name="email" value="*{${userNext.email}" id="email-del" disabled/>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close
                        </button>
                        <<button type="submit" class="btn btn-primary">
                            Delete
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </td>
      </tr>
  `;
    return userList;
    // userContainer.insertAdjacentHTML("beforeend", userList);
};


// <div className="form-group mb-3">
//     <label htmlFor="role-del" className="font-weight-bold">Role</label>
//     <select className="form-control form-control-sm" th:name="role" th:value="*{role}" multiple id="role-del"
//             name="role"
//             size="3" required>
//         <option th:each="role : ${roles}" th:value="${role.id}" th:text="${role.name}">
//             <
//         < /option>
//     </select>
// </div>

// <button type="submit" className="user-edit btn btn-info" data-bs-toggle="modal"
//         data-bs-target="#updateModal${userNext.id}">Edit
// </button>
// <div className="modal fade" id="#updateModal${userNext.id}" tabIndex="-1" aria-labelledby="exampleModalLabel"
//      aria-hidden="true">
//     <div className="modal-dialog">
//         <div className="modal-content">
//             <div className="modal-header">
//                 <h5 className="modal-title" id="exampleModalLabel">Edit user</h5>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body">

//             </div>
//         </div>
//     </div>
// </div>


//
// <td className="bg-light">
//     <button type="button" className="btn btn-danger" data-bs-toggle="modal"
//             th:data-bs-target="'#deleteModal' + ${userNext.id}">Edit
//     </button>
// </td>

// <div class="form-group mb-3">
//     <label htmlFor="role-del" class="font-weight-bold">Role</label>
//     <select class="form-control form-control-sm" th:name="role" th:value="*{role}" multiple id="role-del"
//             name="role" size="3" required>
//         <option th:each="role : ${roles}" th:value="${role.id}" th:text="${role.name}">
//         </option>
//     </select>
// </div>

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
