import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable } from "@/components/admin/DataTable";
import { adminTrainers } from "@/lib/admin-data";

export default function Page() {
  return (
    <AdminShell title="Trainers" subtitle="Trainer workload, clients, ratings and performance.">
      <DataTable rows={adminTrainers} columns={[
        {key:"name",label:"Trainer"},
        {key:"speciality",label:"Speciality"},
        {key:"clients",label:"Clients"},
        {key:"sessions",label:"Sessions"},
        {key:"rating",label:"Rating"},
      ]}/>
    </AdminShell>
  );
}
