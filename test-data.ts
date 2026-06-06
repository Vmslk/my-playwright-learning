type Credentials = {
  email: string;
  password: string;
  role?: string;  // Optional property
};

export const validUser: Credentials = {
    email: "vikauat@gmail.com",
    password: "12345",
    role: "admin"
}; 

export function getLoginUrl(env: string): string {
    return `https://${env}.example.com/login`;
}
