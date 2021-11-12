import React, { useReducer, useEffect, useContext } from "react";
import { checkAuth, signIn, signOut, signUp } from "../api";

type IUser = {
  id: string;
  name: string;
};

interface IAuthState {
  loading: boolean;
  user: IUser | null;
}

interface IAuthAction {
  type: "LOADING" | "AUTH" | "SIGN_OUT";
  user?: IUser;
}

interface IAuthContext extends IAuthState {
  signup: (username: string, password: string) => Promise<any>;
  signin: (username: string, password: string) => Promise<any>;
  signout: () => Promise<any>;
}

const reducer = (state: IAuthState, action: IAuthAction): IAuthState => {
  if (action.type === "LOADING") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "AUTH") {
    return {
      ...state,
      user: action.user || null,
      loading: false,
    };
  }

  if (action.type === "SIGN_OUT") {
    return {
      ...state,
      user: null,
    };
  }

  return state;
};

const AuthContext = React.createContext<IAuthContext>({
  user: null,
  loading: true,
  signup: (username: string, password: string) => Promise.resolve(undefined),
  signin: (username: string, password: string) => Promise.resolve(undefined),
  signout: () => Promise.resolve(undefined),
});

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error("Must use within AuthProvider");
  }

  return auth;
};
const AuthProvider = (props: React.PropsWithChildren<unknown>) => {
  const [state, dispatch] = useReducer(reducer, { user: null, loading: true });

  const handleRegister = (username: string, password: string) =>
    signUp({ username, password }).then((data) => {
      if (data.success === false) {
        throw new Error("Register Failed");
      }
    });

  const handleSignin = (username: string, password: string) =>
    signIn({
      username,
      password,
    }).then((data) => {
      if (data.success) {
        dispatch({ type: "AUTH", user: { name: username, id: data.userId } });
      } else {
        throw new Error("Login Failed");
      }
    });

  const handleSignout = () =>
    signOut().then(() => dispatch({ type: "SIGN_OUT" }));

  useEffect(() => {
    checkAuth().then(({ user }) => dispatch({ type: "AUTH", user }));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        signup: handleRegister,
        signin: handleSignin,
        signout: handleSignout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
