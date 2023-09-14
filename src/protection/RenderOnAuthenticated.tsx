import useKeycloak from "../hooks/useKeycloak";

interface IRenderOnAuthenticatedProps {
  children: JSX.Element;
}
const RenderOnAuthenticated = ({ children }: IRenderOnAuthenticatedProps) => {
  const { isLoggedIn } = useKeycloak();
  return isLoggedIn() ? children : null;
};

export default RenderOnAuthenticated;
