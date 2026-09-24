---
slug: /release-notes/release-notes-5-5
sidebar_label: Release Notes 5.5
sidebar_position: 138
description: "Geo2 documentation: Release Notes 5.5"
---
# Release Notes 5.5

## Release Date

Hub: 

2026-09-17

Mobile app: 

2026-09-28

## New Features


| **Summary** | **Description** |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mobile app: Avoid tolls, highways & ferries | You can now configure which road types should be avoided when building routes. The new **Avoid roads** setting lets you select **Tolls, Highways, and Ferries**, and the selected restrictions are applied during both route optimization and route calibration where supported by the routing provider. To configure the setting, go to **Settings → Routes → Avoid roads** and select the road types you want to avoid. By default, no road types are excluded, so routes are calculated using the most efficient available option. |
| Mobile app: Scan addresses from photos with AI | You can now use photos as an alternative to live multi-address scanning when adding stops to a route. In the multi-address scanning flow, tap **Scan from photos**, take one or more photos of an address list, and Geo2 will use AI to extract the addresses and any available stop details. After the photos are processed, the detected stops are displayed on the **Select stops** screen. You can review the results, edit extracted information where needed, select or deselect stops, and then confirm which stops should be added to the route. Free users can process **one photo at a time**, while Advanced and Enterprise users can process **up to five photos in one scan**. The existing live address scanning option remains available, so you can choose whichever method is more convenient for your workflow. |
| Mobile app: German language support | The Geo2 mobile app is now available in **German**. If German is set as your device language, the app will automatically use German by default. You can also change the app language manually at any time from **Settings → Language**. |
| Mobile app: Simplified Proof of Delivery | The **Create POD** form has been redesigned to make Proof of Delivery faster and easier to complete. The form now uses a more compact layout with clearly separated sections for **Proof**, **Recipient**, **Details**, **Products**, and **Custom fields**. The delivery address and order key are displayed at the top of the form for reference. Signature and photo actions are now grouped together under the **Proof** section, while recipient details such as contact name, mobile number, and email are pre-filled from the order when available and can still be edited for the POD. The same layout is also used for **ad-hoc PODs**, while existing package- and product-level failure handling remains unchanged. |
| Hub: Avoid tolls, highways & ferries | Added new **Avoid tolls**, **Avoid highways**, and **Avoid ferries** options under **Environment Settings → Routes**. These settings allow you to control which road types should be avoided when Geo2 builds a route. When enabled, the selected preferences are applied during route calibration and optimization. All three options are disabled by default. When they remain disabled, Geo2 continues to select the most efficient available route without specifically avoiding toll roads, highways, or ferries. |
| Hub: German language support | If German is set as the your browser or device language, Geo2 Hub will now use German automatically by default. You can also switch to German manually at any time using the language selector in the **Profile** menu. |
| Hub: Responsive design for smaller screens | Updated Geo2 Hub with a responsive layout across all pages to improve usability on mobile devices and smaller screens. The interface now automatically adjusts to the available screen size, making navigation and page content easier to use on mobile. **Map view** is not available on mobile devices; you will be prompted to open it on a larger screen instead. |
| Hub: Capacity-based color coding in Calendar view | Added capacity-based color coding to route cards in **Routes → Calendar view** to make vehicle capacity issues easier to identify at a glance. Routes that are within the assigned vehicle’s weight and volume limits are shown with a subtle green background, while routes that exceed either capacity are shown with a subtle red background. Existing highlighting for individual **weight** and **volume** values remains in place, so you can see which specific capacity has been exceeded. |


