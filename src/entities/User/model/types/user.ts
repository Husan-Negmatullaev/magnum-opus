export interface User {
    id: string;
    username: string;
}

export interface UserScheme {
    authUser?: User;

    _mount: boolean;
}
