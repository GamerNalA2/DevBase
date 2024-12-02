import { Webhook as TWebhook } from "../api/webhook/Webhook";

export const WEBHOOK_TITLE_FIELD = "id";

export const WebhookTitle = (record: TWebhook): string => {
  return record.id?.toString() || String(record.id);
};
