import { ReactNode } from "react";
import "./LoginTemplate.css";
import Footer from "../../Components/Footer/Footer";
// Creation of types
type LoginTemplateProps = {
  children: ReactNode;
};
// Component
const LoginTemplate = ({ children }: LoginTemplateProps) => {
  return (
    <div className="login-template">
      {children}
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
export default LoginTemplate;
