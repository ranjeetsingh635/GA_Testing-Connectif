import { Fragment } from "react";
import Login from "src/Modules/AuthModule/Components/Login/Login";
import SetupLayout from "src/Modules/LayoutModule/Components/SetupLayoutModule/SetupLayout/SetupLayout";

function LoginIndexPage() {
  return (
    <Fragment>
      <SetupLayout>
        <Login />
      </SetupLayout>
    </Fragment>
  );
}
export default LoginIndexPage;
