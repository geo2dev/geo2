---
slug: /web-based-hub/hub-environment-settings/hub-integrations-settings
sidebar_label: Integrations Settings
sidebar_position: 16
description: Connect your Shopify store to Geo2 to import orders for delivery
  and mark them fulfilled automatically.
---
# Hub: Integrations Settings

You can connect external systems to an environment in Settings → Environment → Integrations in Hub.

## Shopify

The Geo2 Shopify app imports your Shopify orders as deliveries and marks them fulfilled when your driver completes the delivery. The app is free. You need a Geo2 account; a free plan is available.

### Before you start

- You can change environment settings in Geo2 (for example, you're the organisation admin).
- You fulfil the orders yourself. Orders assigned to a third-party fulfilment service aren't imported.
- One Shopify store connects to one Geo2 environment, and one environment holds one store.

### Install and connect

1. Install Geo2 from the Shopify App Store, or in Hub open Settings → Environment → Integrations and click **Connect Shopify**.
2. Choose your store and approve the permissions Shopify asks for.
3. Shopify opens Hub. Sign in, or create a Geo2 account.
4. On the Integrations page you'll see "Geo2 is installed on your-store.myshopify.com". Switch to the environment you want, then click **Connect to this environment**. The status becomes **Connected**.

If you don't finish within 24 hours, open the app again from Shopify admin → Apps → Geo2.

### How orders come in

- New orders with a shipping address appear in Hub → Orders with the Shopify order number, for example `SHOPIFY-#1001`, usually within a minute.
- Changes to the order in Shopify update the delivery. Cancelling the order in Shopify cancels the delivery.
- Orders without a shipping address aren't imported.

### How orders get fulfilled

1. Add the order to a route and release it.
2. The driver completes the stop in the Geo2 mobile app and records a successful proof of delivery.
3. Geo2 marks the order as **Fulfilled** in Shopify. Shopify doesn't send the customer a fulfilment email for it.

A partial delivery fulfils only the delivered quantities. A failed delivery leaves the order unfulfilled, so you can deliver it again.

### Disconnect

In Hub open Settings → Environment → Integrations and click **Disconnect**, or uninstall Geo2 in Shopify admin → Apps. Orders already imported stay in Geo2. To connect a different store to the same environment, disconnect the current one first.

### Troubleshooting

- "Unable to connect this Shopify store": the environment already holds another store, the store is connected to another environment, or the link expired. Disconnect the other store (or pick another environment), then open Geo2 again from Shopify admin → Apps.
- An order doesn't appear: check that it has a shipping address and isn't assigned to a fulfilment service.
- "Ask an administrator of this environment to connect the store": your Geo2 role can't change environment settings. Ask your organisation admin to connect the store.
