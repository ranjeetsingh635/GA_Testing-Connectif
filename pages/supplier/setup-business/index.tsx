import { Fragment } from "react";
import SetupLayout from "src/Modules/LayoutModule/Components/SetupLayoutModule/SetupLayout/SetupLayout";
import SetupBusinessProfile from "src/Modules/SupplierModule/SubModule/BusinessProfileModule/Components/SetupBusinessProfile/SetupBusinessProfile";
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
