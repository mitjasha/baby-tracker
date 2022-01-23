interface TloginScreen {
  [key: string]: string;
}
const loginScreen: TloginScreen = {
  PLACEHOLDER_USER: "имя пользователя",
  PLACEHOLDER_PASSWORD: "введите пароль",
  TEXT_BUTTON: "ВОЙТИ",
  TEXT_REGISTRATION: "Регистрация",
  TYPE_TEXT: "text",
  TYPE_PASSWORD: "password",
};

export default loginScreen;
