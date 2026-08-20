export type AdminStatus = "Active" | "Pending" | "Renew" | "Paid" | "Completed" | "Confirmed" | "Waitlist";

export type AdminRole =
  | "Owner"
  | "Manager"
  | "Receptionist"
  | "Trainer"
  | "Accountant";

export type PermissionKey =
  | "members"
  | "payments"
  | "attendance"
  | "staff"
  | "analytics"
  | "roles"
  | "bookings"
  | "expenses"
  | "revenue";
