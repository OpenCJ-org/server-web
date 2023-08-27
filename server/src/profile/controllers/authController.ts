import admin from "../../firebase/admin";

export async function createUser() {
  const user = await admin.auth().createUser({
    email: "test@test.com",
    password: "test123456",
  });
  return user;
}
