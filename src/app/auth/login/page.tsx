import { AuthShell } from "@/components/auth/AuthShell";
import { LoginForm } from "@/components/auth/LoginForm";

export default function Page() {
  return (
    <AuthShell
      title="Member experience"
      subtitle="Preview the digital tools that support workouts, progress, attendance and membership."
    >
      <LoginForm />
    </AuthShell>
  );
}
