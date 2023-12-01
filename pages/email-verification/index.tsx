import { Fragment } from "react";
import EmailVerification from "src/Modules/AuthModule/Components/EmailVerification/EmailVerification";
import SetupLayout from "src/Modules/LayoutModule/Components/SetupLayoutModule/SetupLayout/SetupLayout";
function EmailVerificationIndexPage() {
  return (
    <Fragment>
      <SetupLayout>
        <EmailVerification />
      </SetupLayout>
    </Fragment>
  );
}
export default EmailVerificationIndexPage;
