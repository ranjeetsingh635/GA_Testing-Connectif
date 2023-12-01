import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import styles from "../EmailVerification/EmailVerification.module.css";
import { useRouter } from "next/router";
import useEmailVerificationMutation from "../../Hooks/useEmailVerificationMutation";
import { getAuthValue, setAuthValue } from "../../Hooks/useAuthValue";
import useResendOtpMutation from "../../Hooks/useResendOtpMutation";
import SnackbarHandler from "src/Utils/SnackbarHandler";

function EmailVerification() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const emailData = localStorage.getItem("email");

  const emailVerificationMutation = useEmailVerificationMutation();
  const emailVerifyByOtp = () => {
    emailVerificationMutation.mutate(
      {
        email: String(emailData),
        otp: otp,
      },
      {
        onSuccess: (res) => {
          const { status, data } = res;

          if (status === 201 || 200) {
            const { user, token } = data?.data;
            setAuthValue({
              ...getAuthValue(),
              user: user,
              token: token,
            });
            localStorage.removeItem("email");
            router.push("/setup-business");
          }
        },
      }
    );
  };

  const resendOtpMutation = useResendOtpMutation();
  const handleResendOtp = () =>
    resendOtpMutation?.mutate(
      {
        email: String(emailData),
      },
      {
        onSuccess: (res) => {
          const { status, message, data } = res?.data;
          if (status === 200 || 201) {
            SnackbarHandler.successToast(message);
            alert(data?.otp);
            setMinutes(0);
            setSeconds(30);
          }
        },
      }
    );
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(30);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <section className="max-w-[46rem] mx-auto">
      <h1 className={`h1 text-center`}>Email Verification</h1>
      <p className="max-w-[31.4rem] para text-center mx-auto mt-[1.6rem] mb-[5rem]">
        OTP has been sent on your registered mail id, please enter your
        verification 4 digit Code.
      </p>

      <form className={`flex justify-center flex-col`}>
        <div className={`${styles.pinInput}`}>
          <OtpInput
            value={otp}
            onChange={(otp) => setOtp(otp)}
            numInputs={4}
            containerStyle={styles.otpBox}
            renderInput={(props: any) => <input {...props} />}
          />
        </div>
        <button
          type="button"
          className={`mt-[4.6rem] mb-[2.4rem] primaryBtn text-[1.6rem] p-[1.6rem] rounded-[10px] ${
            (otp === "" || otp.length < 4) && `opacity-[.4] cursor-not-allowed`
          }`}
          onClick={emailVerifyByOtp}
          disabled={otp === "" || otp.length < 4}
        >
          Verify
        </button>
        <div className={`para `}>
          <span className={``}>
            {" "}
            {seconds > 0 || minutes > 0 ? (
              <>
                {minutes < 10 ? `0${minutes}` : minutes}:
                {seconds < 10 ? `0${seconds}` : seconds}
              </>
            ) : (
              <>
                {" "}
                <button
                  type="button"
                  className="font-semibold focus:underline hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    handleResendOtp();
                  }}
                >
                  Resend Code{" "}
                </button>
              </>
            )}
          </span>
        </div>
      </form>
    </section>
  );
}
export default EmailVerification;
