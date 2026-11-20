---
slug: /mobile-app/mobile-app-offline-mode
sidebar_label: Offline Mode
sidebar_position: 13
description: Offline mode allows you to continue working with the mobile app
  even without an active internet connection.
---
# Mobile app: Offline Mode

Offline mode allows you to continue working with the Geo2 mobile app even without an active internet connection. The app ensures that essential workflow actions remain available and are saved locally until connectivity is restored.

## What You Can Do in Offline Mode

Even when your device does not have an active internet connection, you can:

- Create routes and add stops/orders.
- Add breaks to routes.
- Capture Proof of Delivery (POD), including photos, signatures, notes, and timestamps.
- Complete vehicle checks, including photos, signatures, and timestamps.
- Record location data, which stays attached to PODs and vehicle checks even when offline.
- Start mileage tracking, including standalone mileage tracking without a planned route.
- Pause and resume mileage tracking while offline.
- Continue recording GPS locations and mileage while the app is offline. Location data is stored locally and synchronized when the internet connection is restored.
- View your current mileage on the active Mileage tracking card, even without an internet connection.

Actions and data recorded offline will sync automatically once the device reconnects to the internet. However, some actions, such as stopping mileage tracking, require an active connection.

Photos that have not yet been uploaded from the device can be viewed in **Menu → Pending uploads**. There, you can tap on them to manually start an upload.

Learn more about [Pending uploads](Mobile%20App_%20Menu.md).

## Limitations in Offline Mode

Although core features remain available, some functions require an active internet connection.

### 1. Address geocoding and search

- Geocoding for route start and end points, stops, and address search will not work offline.
- As geocoordinates cannot be fetched without an internet connection, addresses cannot be positioned accurately on the map.
- You can still enter an address manually using the **Can't find address...** button, but automatic address search will not work.
  - The manually entered address will be saved.
  - The map marker may not display in the correct location due to missing geocoordinates.

### 2. Route Optimization and Calibration

- Automatic route optimization and calibration are not available offline because they rely on online mapping services.

### 3. Accessing Routes that Have Not Been Loaded Before

- If you opened a route while online, its data is stored on the device and remains accessible offline.
- If a route has never been opened before and you go offline, the app cannot download its data.
- New route assignments that have not been downloaded will only become available after internet access is restored.

### 4. Mileage Tracking

Mileage tracking supports offline GPS recording, allowing you to continue tracking your distance even when the device loses its internet connection.

However, some actions require an active connection:

- Stopping mileage tracking: You cannot stop an active mileage tracking session while offline. If you tap Stop tracking without an internet connection, the app displays a No internet connection message, and tracking continues.
- Completing a tracking session: Once the internet connection is restored, you must tap Stop tracking again to complete the session. Tracking does not stop automatically when connectivity returns.
- Viewing completed mileage records: The final recorded distance becomes available in the Mileage tracking list after the session has been successfully completed and the distance has been processed. This may take a few seconds.
- Exporting mileage reports: PDF mileage report exports require an active internet connection.

If you lose your internet connection during mileage tracking, your GPS locations will continue to be recorded locally. To ensure your mileage is calculated correctly, reconnect to the internet and stop tracking once your journey is complete.