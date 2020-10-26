//we dont want this to be a class we want this to be a interface
export interface UserEnvelope {
    user: User;
}

export interface User {
    username: string;
    email: string;
    password: string;
}
export interface user {
    email: string;
    password: string;
}

export interface UserCreateCommand{
    user: User;
}

export interface UserLogInCommand{
    user: user;
}
