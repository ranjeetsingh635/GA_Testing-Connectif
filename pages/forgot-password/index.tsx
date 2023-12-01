import { Fragment } from "react";
import ForgotPassword from "src/Modules/AuthModule/Components/ForgotPassword/ForgotPassword";
import SetupLayout from "src/Modules/LayoutModule/Components/SetupLayoutModule/SetupLayout/SetupLayout";

function ForgotPasswordPage() {
  return (
    <Fragment>
      <SetupLayout>
        <ForgotPassword />
      </SetupLayout>
    </Fragment>
  );
}
export default ForgotPasswordPage;
