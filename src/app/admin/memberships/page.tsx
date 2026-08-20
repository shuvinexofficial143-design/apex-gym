import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable } from "@/components/admin/DataTable";
import { membershipAdmin } from "@/lib/admin-data";

export default function Page() {
  return <AdminShell title="Memberships" subtitle="Plan performance, price, active members and renewals.">
    <DataTable rows={membershipAdmin} columns={[
      {key:"name",label:"Plan"},
      {key:"price",label:"Monthly Price"},
      {key:"active",label:"Active"},
      {key:"renewals",label:"Renewals"},
      {key:"revenue",label:"Revenue"},
    ]}/>
  </AdminShell>
}
