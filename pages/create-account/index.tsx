import { Fragment } from "react";
import CreateAccount from "src/Modules/AuthModule/Components/CreateAccount/CreateAccount";
import SetupLayout from "src/Modules/LayoutModule/Components/SetupLayoutModule/SetupLayout/SetupLayout";

function CreateAccountIndexPage() {
  return (
    <Fragment>
      <SetupLayout>
        <CreateAccount />
      </SetupLayout>
    </Fragment>
  );
}
export default CreateAccountIndexPage;
