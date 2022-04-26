const findBtn = document.querySelector('.btn-find-users');
const userContainer = document.querySelector('.user-container');

const createElement = ({ tagName = 'div', className, attributes = {} }) => {
  const element = document.createElement(tagName);
  if (className) {
    const classNames = className.split(' ').filter(Boolean);
    element.classList.add(...classNames);
  }
  Object.keys(attributes).forEach((key) => element.setAttribute(key, attributes[key]));
  return element;
}

const createUserNode = ({ fullName, title, imageUrl }) => {
  const container = createElement({ className: 'user-card' })
  const avatar = createElement({ 
    tagName: 'img', 
    className: 'user-avatar', 
    attributes: { src: imageUrl }
  });
  const bodyContainer = createElement({ className: 'card-body' });
  const fullNameItem = createElement({ tagName: 'h4', className: 'user-fullname' });
  fullNameItem.innerText = `${fullName},`;
  const titleItem = createElement({ tagName: 'h5', className: 'user-title' });
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