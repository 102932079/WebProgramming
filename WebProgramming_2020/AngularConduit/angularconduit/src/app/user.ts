// class user
// we dont want this to be a class we want this to be a inter face
// class - inter user - UserLoginCommand
export interface UserLoginCommand {
    user:UserLoginUserData
}

export interface UserLoginUserData {
    email: string;
    password: string;
}