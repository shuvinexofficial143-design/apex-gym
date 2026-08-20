import { AdminShell } from "@/components/admin/AdminShell";
import { DataTable } from "@/components/admin/DataTable";
import { members } from "@/lib/admin-data";

export default function Page() {
  return (
    <AdminShell title="Members" subtitle="Search-ready member operations, status and renewal overview.">
      <DataTable
        rows={members}
        columns={[
          { key: "name", label: "Member" },
          { key: "plan", label: "Plan" },
          { key: "branch", label: "Branch" },
          { key: "expiry", label: "Expiry" },
          { key: "status", label: "Status", render: (row) => <strong className={row.status === "Active" ? "accent" : "muted"}>{row.status}</strong> },
        ]}
      />
    </AdminShell>
  );
}
