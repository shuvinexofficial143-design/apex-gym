import { AuthShell } from "@/components/auth/AuthShell";
import { OTPForm } from "@/components/auth/OTPForm";
export default function Page(){return <AuthShell title="Sign in with OTP" subtitle="Use your registered mobile number. This batch provides the OTP-ready front-end flow."><OTPForm/></AuthShell>}
