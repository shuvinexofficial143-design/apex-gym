import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable } from "@/components/admin/DataTable";
import { expenses } from "@/lib/admin-data";

export default function Page() {
  return <AdminShell title="Expenses" subtitle="Track operational spending across facilities, payroll and marketing.">
    <DataTable rows={expenses} columns={[
      {key:"category",label:"Category"},
      {key:"description",label:"Description"},
      {key:"amount",label:"Amount"},
      {key:"date",label:"Date"},
      {key:"status",label:"Status"},
    ]}/>
  </AdminShell>
}
