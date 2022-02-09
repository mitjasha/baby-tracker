interface TRegScreen {
  [key: string]: string;
}

interface IValidation {
  required: boolean;
  pattern: {
    value: RegExp;
    message: string;
  };
}

export const regScreen: TRegScreen = {
  PLACEHOLDER_USER: "имя пользователя",
  PLACEHOLDER_PASSWORD: "введите пароль",
  TEXT_BUTTON: "ЗАРЕГИСТРИРОВАТЬСЯ",
  TEXT_SIGNIN: "Войти",
  TYPE_TEXT: "text",
  TYPE_PASSWORD: "password",
  TEXT_ERROR_NAME: "Есть логин и пароль? \n Пройдите авторизацию",
};

export const validationName: IValidation = {
  required: true,
  pattern: {
    value: /[A-Za-z\d]{4,32}/,
    message:
      "Имя должно содержать только буквы и цифры и быть не менее 4 и не более 32 символов",
  },
};

export const validationPassword: IValidation = {
  required: true,
  pattern: {
    value: /^[A-Za-z\d][\S\w]{7,31}/,
    message:
      "Пароль должен содержать только буквы и цифры и быть не менее 8 и не более 32 символов",
  },
};
