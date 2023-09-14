/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Keycloak, {
  KeycloakLoginOptions,
  KeycloakLogoutOptions,
  KeycloakTokenParsed,
} from "keycloak-js";
import { createContext } from "react";

interface IKeycloakContext {
  keycloak: Keycloak | null;
  authenticated: boolean;
  userTokenParsed: KeycloakTokenParsed | undefined;
  doLogin: (options?: KeycloakLoginOptions | undefined) => Promise<void>;
  doLogout: (options?: KeycloakLogoutOptions | undefined) => Promise<void>;
  getToken: () => string | undefined;
  getTokenParsed: () => KeycloakTokenParsed | undefined;
  isLoggedIn: () => boolean;
  updateToken: (
    successCallback: () => void,
    minValidity: number
  ) => Promise<void>;
  getUsername: () => any;
  hasRole: (roles: string[]) => boolean;
}
const initKeycloakContext: IKeycloakContext = {
  keycloak: null,
  authenticated: false,
  userTokenParsed: undefined,
  doLogin: function (
    _options?: KeycloakLoginOptions | undefined
  ): Promise<void> {
    throw new Error("Function not implemented.");
  },
  doLogout: function (
    _options?: KeycloakLogoutOptions | undefined
  ): Promise<void> {
    throw new Error("Function not implemented.");
  },
  getToken: function (): string | undefined {
    throw new Error("Function not implemented.");
  },
  getTokenParsed: function (): KeycloakTokenParsed | undefined {
    throw new Error("Function not implemented.");
  },
  isLoggedIn: function (): boolean {
    throw new Error("Function not implemented.");
  },
  updateToken: function (
    _successCallback: () => void,
    _minValidity: number
  ): Promise<void> {
    throw new Error("Function not implemented.");
  },
  getUsername: function () {
    throw new Error("Function not implemented.");
  },
  hasRole: function (_roles: string[]): boolean {
    throw new Error("Function not implemented.");
  },
};
const KeycloakContext = createContext<IKeycloakContext>(initKeycloakContext);
export default KeycloakContext;
