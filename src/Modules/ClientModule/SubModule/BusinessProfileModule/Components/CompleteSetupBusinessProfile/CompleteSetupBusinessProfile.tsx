import { useRouter } from "next/router";

function CompleteSetupBusinessProfile() {
  const router = useRouter();
  return (
    <>
      <div>
        <h1>This is Complete Business Profile</h1>
        <button>Cancel</button>
        <br />

        <button onClick={() => router.push("/completed-profile")}>Save</button>
      </div>
    </>
  );
}
export default CompleteSetupBusinessProfile;
