// Auto-generated configuration for VFS Global Algeria AutoBot

export const config = {
  botName: "VFS Global Algeria",
  country: "Algeria",
  provider: "VFS Global",
  destination: "Schengen",
  loginUrl: "https://visa.vfsglobal.com/dza/en/login",
  centers: [
  "Algiers",
  "Oran"
],
  visaCategories: [
  "Tourism",
  "Business",
  "Family Visit",
  "Student",
  "Medical",
  "Work"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
