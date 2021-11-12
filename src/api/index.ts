export interface IUserCredentials {
  username: string;
  password: string;
}

const request = async (path: string, options?: any) => {
  const res = await fetch(`https://tva-backend.herokuapp.com${path}`, {
    credentials: "include",
    ...options,
  });

  return await res.json();
};

const get = async (path: string, options?: any) => {
  return request(path, options);
};
const post = async (path: string, options?: any) => {
  return request(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
};

export const checkAuth = async () => {
  return await get("/auth");
};

export const signUp = async (userCredentials: IUserCredentials) => {
  return await post("/signup", {
    body: JSON.stringify(userCredentials),
  });
};

export const signIn = async (userCredentials: IUserCredentials) => {
  return await post("/login", {
    body: JSON.stringify(userCredentials),
  });
};

export const signOut = async () => {
  return await post("/signout", {
    body: JSON.stringify({}),
  });
};
