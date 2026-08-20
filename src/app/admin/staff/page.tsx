import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable } from "@/components/admin/DataTable";
import { staff } from "@/lib/admin-data";

export default function Page() {
  return <AdminShell title="Staff" subtitle="Staff roles, shifts, attendance and employment status.">
    <DataTable rows={staff} columns={[
      {key:"name",label:"Staff"},
      {key:"role",label:"Role"},
      {key:"shift",label:"Shift"},
      {key:"attendance",label:"Attendance"},
      {key:"status",label:"Status"},
    ]}/>
  </AdminShell>
}
