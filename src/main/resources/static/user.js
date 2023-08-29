const userUrl = 'http://localhost:8090/api/user';
const userUrl2 = 'http://localhost:8090/api/user2';
const userUrl1 = 'http://localhost:8090/api/test';

const userContainer = document.querySelector(".user-container");


const currentUser1 = fetch(userUrl1)
    .then(response => response.text()
        .then(text => console.log(text)));
console.log("currentUser1 ",  currentUser1)

const currentUser2 = fetch(userUrl2)
    .then(response => console.log(response.json()));

const currentUser = fetch(userUrl)
    .then(response => console.log(response.json()));
        // .then(text => console.log(text)));
// console.log("currentUser ",  currentUser)


// const currentUser = fetch(userUrl2)
//     .then(response => response.json())
//         .then(user => createUserTemplate(user));
// console.log(currentUser)

// async function getUserPage() {
//     await fetch(userUrl2).then(response => response.json());
// }
// getUserPage().then(user =>
//     console.log(user));

// document.addEventListener('DOMContentLoaded', function () {
//     fetch(userUrl, {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json'
//         }
//     })
//         .then(response => response.json())
//         .then(user => {
//             console.log(user)
//         })
//         .catch(error => {
//             console.error('Ошибка:', error);
//         });
// });
// getUserPage().then(user =>
//     createUserTemplate(user));

// async function getData() {
//     let response = await fetch(userUrl)
//     if (response.ok) {
//         console.log("response.ok", response.json())
//         // let listUsers = await response.json()
//         // createUserTemplate(listUsers)
//     } else {
//         console.log('Error, ${temp.status}')
//     }
// }

// getData().then(r => console.log(r));

// let response = await fetch(userUrl);
// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//                    // получаем тело ответа (см. про этот метод ниже)
//     console.log("response.ok")
//     let json = await response.json();
// } else {
//     alert("Ошибка HTTP: " + response.status);
// }

// const currentUser = fetch(userUrl)
//     .then(response => response.json());
//
//
// currentUser.then(data => createUserTemplate(data))
//     .catch(error => console.log(error));

// console.log(currentUser);
// async function f() {
//
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("готово!"), 1000)
//     });
//
//     // let result = await fetch(userUrl); // будет ждать, пока промис не выполнится (*)
//     let result = await fetch('api/user').then(response => response.json());
//     // let result = await response.json();
// // .then(response => response.json());
// //         // .then(user => createUserTemplate(user))
// //     async function showUserPage() {
// //     await fetch(userUrl)
// //         .then(response => {return response.json()})
// //         .then(user => createUserTemplate(user))
// //
//
//     // alert(result); // "готово!"
//     return result;
// }
//
// f();

// let response = await fetch(userUrl); // завершается с заголовками ответа
// let result = await response.json(); // читать тело ответа в формате JSON
// let response = fetch(userUrl);
//
// if (response.ok) { // если HTTP-статус в диапазоне 200-299
//                    // получаем тело ответа (см. про этот метод ниже)
//     let json = response.json();
// } else {
//     alert("Ошибка HTTP: " + response.status);
// }

//
// console.log(userContainer)
//
// async function showUserPage() {
//     await fetch(userUrl)
//         .then(response => {return response.json()})
//         // .then(user => createUserTemplate(user))
// }
//
// // async function getUser(id) {
// //     let response = await fetch('/api/admin/' + id)
// //     return await response.json()
// // }
function createUserTemplate(user) {

    let result = '';
    result =
        `<tr class="border-top bg-light"">
            <td class="bg-light">${user.name}</td>
            <td class="bg-light" ${user.id}>UserName</td>
            <td class="bg-light" ${user.name}">UserName</td>

         </tr>`
    userContainer.innerHTML = result;
}

// showUserPage().then(user => createUserTemplate(user));

// <td className="bg-light" th:text="${user.getSurname()}">UserName</td>
// <td className="bg-light" th:text="${user.getEmail()}">Email</td>
// <td className="d-flex">
//     <p className="bg-light" th:each="role : ${user.getRole()}">
//         <span th:text="${role.getName().replace('ROLE_', ' ')}" style="margin-right: 5px"></span>
//     </p>
// </td>