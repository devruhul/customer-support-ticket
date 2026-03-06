const tickets = [
  {
    id: "TKT-001",
    title: "Login page crashes on Safari",
    description: "Users on Safari 16+ are experiencing a full page crash when attempting to log in using SSO. Error console shows a CORS-related exception.",
    customer: "Amelia Thompson",
    priority: "High",
    status: "Open",
    createdAt: "2026-02-28"
  },
  {
    id: "TKT-002",
    title: "Billing invoice PDF not generating",
    description: "Monthly invoice generation for enterprise tier users is failing silently. The download button spins indefinitely and no file is produced.",
    customer: "Marcus Chen",
    priority: "Critical",
    status: "Open",
    createdAt: "2026-03-01"
  },
  {
    id: "TKT-003",
    title: "Email notifications delayed by hours",
    description: "Transactional emails (password resets, welcome emails) are being delivered with 2–8 hour delays. Affects all new signups since March 3rd.",
    customer: "Sofia Reyes",
    priority: "High",
    status: "Open",
    createdAt: "2026-03-03"
  },
  {
    id: "TKT-004",
    title: "Dashboard data not refreshing in real-time",
    description: "The analytics dashboard shows stale data even after a manual refresh. Users have to log out and back in to see updated statistics.",
    customer: "Daniel Park",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-03-02"
  },
  {
    id: "TKT-005",
    title: "File upload limit too restrictive",
    description: "The current 5MB upload cap is preventing users from attaching design files and videos to support tickets. Requesting a bump to 25MB.",
    customer: "Priya Nair",
    priority: "Low",
    status: "Open",
    createdAt: "2026-02-25"
  },
  {
    id: "TKT-006",
    title: "Two-factor auth codes not working",
    description: "Multiple users report that their TOTP codes from Google Authenticator are being rejected. Possible server clock drift or algorithm mismatch.",
    customer: "Lucas Oliveira",
    priority: "Critical",
    status: "Open",
    createdAt: "2026-03-04"
  },
  {
    id: "TKT-007",
    title: "Search returns wrong results",
    description: "The global search feature returns irrelevant results when using special characters or multi-word queries with quotation marks.",
    customer: "Hannah Müller",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-03-01"
  },
  {
    id: "TKT-008",
    title: "Dark mode not persisting after refresh",
    description: "User preference for dark mode is reset to light mode on every page reload. The toggle works in-session but doesn't save to localStorage.",
    customer: "James Okafor",
    priority: "Low",
    status: "Open",
    createdAt: "2026-02-27"
  },
  {
    id: "TKT-009",
    title: "API rate limiting hitting too early",
    description: "Enterprise plan customers are hitting the 429 rate limit at a fraction of their contracted quota. Our team lead suspects an off-by-one in the tier config.",
    customer: "Elena Vasquez",
    priority: "High",
    status: "Open",
    createdAt: "2026-03-03"
  },
  {
    id: "TKT-010",
    title: "Mobile app keyboard covers input fields",
    description: "On iOS devices, the software keyboard overlaps text input fields in forms, making it impossible to see what you are typing without dismissing the keyboard.",
    customer: "Kevin Tremblay",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-02-29"
  },
  {
    id: "TKT-011",
    title: "CSV export includes deleted records",
    description: "When exporting contact data to CSV, soft-deleted records (marked as archived) are included in the export. This is causing data compliance concerns.",
    customer: "Aisha Kamara",
    priority: "High",
    status: "Open",
    createdAt: "2026-03-02"
  },
  {
    id: "TKT-012",
    title: "Webhook payloads arriving out of order",
    description: "Event webhooks for order updates are being received out of sequence, causing downstream inventory systems to miscount stock levels.",
    customer: "Riku Tanaka",
    priority: "Critical",
    status: "Open",
    createdAt: "2026-03-05"
  }
];

export default tickets;
