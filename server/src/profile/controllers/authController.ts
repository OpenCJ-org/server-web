import admin from "../../firebase/admin";

export async function createUser(
  email: string,
  password: string,
  userName: string
) {
  const user = await admin.auth().createUser({
    email,
    password,
    displayName: userName,
  });
  return user;
}
