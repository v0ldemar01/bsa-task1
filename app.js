const findBtn = document.querySelector('.btn-find-users');
const userContainer = document.querySelector('.user-container');

const createUserNode = ({ fullName, title, imageUrl }) => {
  const container = document.createElement('div');
  container.classList.add('user-card');

  const avatar = document.createElement('img');
  avatar.classList.add('user-avatar');
  avatar.setAttribute('src', imageUrl);

  const bodyContainer = document.createElement('div');
  bodyContainer.classList.add('card-body');

  const fullNameItem = document.createElement('h4');
  fullNameItem.classList.add('user-fullname');
  fullNameItem.innerText = `${fullName},`;

  const titleItem = document.createElement('h5');
  titleItem.classList.add('user-title');
  titleItem.innerText = title;

  bodyContainer.append(fullNameItem);
  bodyContainer.append(titleItem);
  container.append(avatar, bodyContainer);
  return container;
}

const forwardRenderUsersByFilter = async () => {
  userContainer.replaceChildren();
  const userNodes = [];
  const usernameInput = document.querySelector('.username-input');
  const users = await getUsers(usernameInput.value);
  for (const { fullName, imageUrl, title } of users) {
    userNodes.push(createUserNode({ fullName, imageUrl, title }));
  }
  userContainer.append(...userNodes);
}

findBtn.addEventListener('click', forwardRenderUsersByFilter);

const getUsers = (usernameInput = '') => {
  // todo: implement this method
  // endpoint - `https://my-got-api.herokuapp.com/${usernameInput}`;
  return [];
}
