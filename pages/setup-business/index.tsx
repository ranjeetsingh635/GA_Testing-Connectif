import { Fragment } from "react";
import SetupBusinessProfile from "src/Modules/ClientModule/SubModule/BusinessProfileModule/Components/SetupBusinessProfile/SetupBusinessProfile";
import SetupLayout from "src/Modules/LayoutModule/Components/SetupLayoutModule/SetupLayout/SetupLayout";
function EmailVerificationIndexPage() {
  return (
    <Fragment>
      <SetupLayout>
        <SetupBusinessProfile />
      </SetupLayout>
    </Fragment>
  );
}
export default EmailVerificationIndexPage;
