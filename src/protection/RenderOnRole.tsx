import NotAllowed from "../components/NotAllowed";
import useKeycloak from "../hooks/useKeycloak";

interface IRenderOnRole {
  roles: string[];
  showNotAllowed: boolean;
  children: JSX.Element;
}
const RenderOnRole = ({ roles, showNotAllowed, children }: IRenderOnRole) => {
  const { hasRole } = useKeycloak();
  return hasRole(roles) ? children : showNotAllowed ? <NotAllowed /> : null;
};
export default RenderOnRole;
