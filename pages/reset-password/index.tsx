import { Fragment } from "react";
import ResetPassword from "src/Modules/AuthModule/Components/ResetPassword/ResetPassword";
import SetupLayout from "src/Modules/LayoutModule/Components/SetupLayoutModule/SetupLayout/SetupLayout";

export function getServerSideProps(context: any) {
  return {
    props: { params: context.query },
  };
}
function ResetPasswordPage({ params }: any) {
  return (
    <Fragment>
      <SetupLayout>
        <ResetPassword resetToken={params?.token} />
      </SetupLayout>
    </Fragment>
  );
}
export default ResetPasswordPage;
