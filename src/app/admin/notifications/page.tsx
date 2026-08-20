import { AdminShell } from "@/components/admin/AdminShell";
import { NotificationComposer } from "@/components/admin/NotificationComposer";

export default function Page() {
  return <AdminShell title="Notifications" subtitle="Send targeted operational and membership messages.">
    <NotificationComposer />
  </AdminShell>
}
