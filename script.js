var json_data = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    }
  ];

  const addDelete = (li) => {
    let del = document.createElement("a");
    del.setAttribute("class","btn btn-sm btn-danger m-1 delete");
    del.append(document.createTextNode("Delete"));
    li.append(del);
  }

  const del = (element) => {
    list.removeChild(element.parentElement)
  }

  const addTodo = () => {
    let newTodo = document.querySelector("#newItem").value
    addToList(newTodo)
    addEventListener();
  }

  const addToList = (item) => {
    let li = document.createElement("li");
    li.append(document.createTextNode(item));
    addDelete(li);
    list.append(li);
  }

  const addEventListener = () => {
    let delBtns = document.querySelectorAll(".delete");
    delBtns.forEach((item) => {
      item.addEventListener("click",() => {del(item)});
    })
  }

  let list = document.querySelector("#todo-list");
  json_data.forEach((item) => {
    addToList(item.title)
  })
  addEventListener();



