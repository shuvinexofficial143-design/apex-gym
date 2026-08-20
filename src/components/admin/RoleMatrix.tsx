"use client";

import { useState } from "react";
import { roleDefaults } from "@/lib/admin-data";

export function RoleMatrix() {
  const [roles, setRoles] = useState(roleDefaults);

  function toggle(roleIndex: number, permissionIndex: number) {
    setRoles((current) =>
      current.map((role, i) =>
        i === roleIndex
          ? {
              ...role,
              permissions: role.permissions.map((permission, j) =>
                j === permissionIndex ? { ...permission, enabled: !permission.enabled } : permission
              ),
            }
          : role
      )
    );
  }

  return (
    <div style={{ display: "grid", gap: 14 }}>
      {roles.map((role, roleIndex) => (
        <article key={role.name} className="glass-card" style={{ padding: 22 }}>
          <h3 style={{ margin: "0 0 16px", fontSize: 24 }}>{role.name}</h3>
          <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
            {role.permissions.map((permission, permissionIndex) => (
              <button
                key={permission.name}
                type="button"
                onClick={() => toggle(roleIndex, permissionIndex)}
                style={{
                  padding: "9px 12px",
                  borderRadius: 999,
                  border: permission.enabled ? "1px solid var(--accent)" : "1px solid var(--line)",
                  background: permission.enabled ? "var(--accent)" : "#101010",
                  color: permission.enabled ? "#080808" : "#fff",
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                {permission.name}
              </button>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
