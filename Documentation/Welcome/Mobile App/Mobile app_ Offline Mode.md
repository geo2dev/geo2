
[Mobile App](../Mobile%20App.md)

# Mobile app: Offline Mode

Offline mode allows you to continue working with the mobile app even without an active internet connection. The app ensures that all essential workflow actions remain available and are saved locally until connectivity is restored.

## What You Can Do in Offline Mode

Even when your device does not have an active internet connection, you can:

- Create routes and add stops/orders.
- Add breaks to routes.
- Capture Proof of Delivery (POD), including photos, signatures, notes, and timestamps.
- Complete vehicle checks, including photos, signatures, and timestamps.
- Record location data, which stays attached to POD's and vehicle checks even when offline.

All actions performed offline will sync automatically once the device reconnects to the internet. Photos that have not yet been uploaded from the device can be viewed in Profile → Pending photos. There you have the option of tapping on them to manually start an upload.  Learn more about [Mobile app: Pending Uploads](../Mobile%20app_%20Pending%20Uploads.md).

## Limitations in Offline Mode

Although core features remain available, some functions require an active connection and will be limited:

**1. Address geo-coding and search**

- Geo-coding for route start and end points, stops, and address search will not work.
- As geo-coordinates cannot be fetched without an internet connection, addresses cannot be positioned accurately on the map.
- You can still enter an address manually using `Can’t find address...` button but automatic address search will not work.

  - The address entered manually will be saved.
  - The map marker may not display in the correct location due to missing geo-location.

**2. Route optimization and calibration**

- Automatic route optimization and calibration are not available offline, because they rely on real-time mapping services.

**3. Accessing routes that have not been loaded before**

- If you opened a route while online, its data is stored on the device and remains accessible offline.
- If a route has never been opened before and you go offline, the app cannot download the data.

  - These new assignments will only become available after internet access is restored.
