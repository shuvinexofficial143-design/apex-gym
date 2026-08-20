import { AdminShell } from "@/components/admin/AdminShell";
import { RoleMatrix } from "@/components/admin/RoleMatrix";

export default function Page() {
  return <AdminShell title="Roles & Permissions" subtitle="Control what managers, receptionists, trainers and accountants can access.">
    <RoleMatrix />
  </AdminShell>
}
