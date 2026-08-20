import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable } from "@/components/admin/DataTable";
import { adminPayments } from "@/lib/admin-data";

export default function Page() {
  return <AdminShell title="Payments" subtitle="Member invoices, payment status and transaction history.">
    <DataTable rows={adminPayments} columns={[
      {key:"invoice",label:"Invoice"},
      {key:"member",label:"Member"},
      {key:"amount",label:"Amount"},
      {key:"method",label:"Method"},
      {key:"status",label:"Status",render:(row)=><strong className={row.status==="Paid"?"accent":"muted"}>{row.status}</strong>},
    ]}/>
  </AdminShell>
}
