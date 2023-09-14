import KeycloakContext from "../context/keycloakContext";
import { useContext } from "react";
const useKeycloak = () => {
  const keycloak = useContext(KeycloakContext);
  return {
    ...keycloak,
  };
};
export default useKeycloak;
