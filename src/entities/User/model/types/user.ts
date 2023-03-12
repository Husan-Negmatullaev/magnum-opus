export interface User {
    id: number;
    username: string;
}

export interface UserScheme {
    authUser?: User;
}
