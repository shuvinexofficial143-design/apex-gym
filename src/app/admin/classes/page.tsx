import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable } from "@/components/admin/DataTable";
import { adminClasses } from "@/lib/admin-data";

export default function Page() {
  return <AdminShell title="Classes" subtitle="Manage group sessions, capacity, trainers and utilization.">
    <DataTable rows={adminClasses} columns={[
      {key:"name",label:"Class"},
      {key:"trainer",label:"Trainer"},
      {key:"schedule",label:"Schedule"},
      {key:"capacity",label:"Capacity"},
      {key:"booked",label:"Booked"},
    ]}/>
  </AdminShell>
}
