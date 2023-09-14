import Keycloak, { KeycloakConfig, KeycloakTokenParsed } from "keycloak-js";
import KeycloakContext from "./keycloakContext";
import { useEffect, useMemo, useState } from "react";
interface KeycloakProviderProps extends KeycloakConfig {
  children: JSX.Element;
}
const KeycloakProvider = ({
  children,
  clientId,
  realm,
  url,
}: KeycloakProviderProps) => {
  const [keycloak, setKeycloak] = useState<Keycloak | null>(null);
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  const [userTokenParsed, setUserTokenParsed] = useState<
    KeycloakTokenParsed | undefined
  >(undefined);

  const keycloakInstance = useMemo(
    () =>
      new Keycloak({
        clientId,
        realm,
        url,
      }),
    [clientId, realm, url]
  );
  const doLogin = keycloakInstance.login;

  useEffect(() => {
    keycloakInstance
      .init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html",
        pkceMethod: "S256",
      })
      .then((authenticated) => {
        if (!authenticated) {
          console.log("user is not authenticated..!");
          doLogin();
        } else {
          setKeycloak(keycloakInstance);
          setAuthenticated(authenticated);
          setUserTokenParsed(keycloakInstance.tokenParsed);
        }
      })
      .catch(console.error);
  }, [keycloakInstance, doLogin]);

  const doLogout = keycloakInstance.logout;

  const getToken = () => keycloakInstance.token;

  const getTokenParsed = () => keycloakInstance.tokenParsed;

  const isLoggedIn = () => !!keycloakInstance.token;

  const updateToken = (successCallback: () => void, minValidity: number) =>
    keycloakInstance
      .updateToken(minValidity)
      .then(successCallback)
      .catch(doLogin);

  const getUsername = () => keycloakInstance.tokenParsed?.preferred_username;

  const hasRole = (roles: string[]) =>
    roles.some((role) => keycloakInstance.hasRealmRole(role));

  return (
    <KeycloakContext.Provider
      value={{
        keycloak,
        authenticated,
        userTokenParsed,
        doLogin,
        doLogout,
        getToken,
        getTokenParsed,
        isLoggedIn,
        updateToken,
        getUsername,
        hasRole,
      }}
      children={children}
    />
  );
};
export default KeycloakProvider;
