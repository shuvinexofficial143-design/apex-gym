import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable } from "@/components/admin/DataTable";
import { bookingsAdmin } from "@/lib/admin-data";

export default function Page() {
  return <AdminShell title="Bookings" subtitle="Class and personal-training booking activity.">
    <DataTable rows={bookingsAdmin} columns={[
      {key:"member",label:"Member"},
      {key:"type",label:"Type"},
      {key:"service",label:"Service"},
      {key:"time",label:"Time"},
      {key:"status",label:"Status"},
    ]}/>
  </AdminShell>
}
