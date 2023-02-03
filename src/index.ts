import App from "./component/App/App.js";

const appContainer: HTMLElement = document.querySelector(".app-container");
const app = new App(appContainer, "");
app.render();
