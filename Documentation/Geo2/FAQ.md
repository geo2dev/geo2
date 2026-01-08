


# FAQ

Here you can find answers to the most common questions to help you get the information you need quickly and easily. Whether you are just getting started or troubleshooting an issue, this section is designed to guide you through.

If you do not find the answer you are looking for, feel free to reach out to our [**support team**](https://geo2.com/contact-us/) — we are always here to help!

<details>
<summary>What is Geo2?</summary>

Geo2 is a cloud-based transport management system (TMS), a logistics service that uses technology to help businesses plan, execute, and optimize physical movement of goods.  By leveraging latest technology, Geo2 delivers competitive advantage to its customers - reduced cost of delivery with a focus on sustainability, while maintaining customer satisfaction.

</details>

<details>
<summary>What are the main features of Geo2?</summary>

- Route Planning and Optimization
- Order and Delivery Management
- iOS and Android Mobile App
- Web-based Geo2 Hub
- Web Services API
- Proof of Delivery Capture
- Live GPS Tracking
- CSV (Excel) Imports
- Driver Breaks
- Reporting and Analytics
- Vehicle Checks
- Email and SMS Notifications
- Product Level Failures
- Optimization with Time Windows
- AI Powered Load Building

</details>

<details>
<summary>Does Geo2 fit my business?</summary>

Geo2 is designed to fit businesses of any size and in any industry, offering a wide range of features to support your operations:

- For smaller businesses, Geo2 provides essential tools like **ePOD (electronic proof of delivery)**, **route planning and optimization**, and **order and delivery management** to streamline daily tasks and improve efficiency.
- For larger organizations, Geo2 offers advanced capabilities such as **custom integrations through the Geo2 API**, **data analytics and reporting**, **optimization with time windows**, and the ability to **import orders via CSV or Excel file**, ensuring seamless operations even at scale.
- For the food delivery industry, Geo2 is equipped to handle **product-level failures during a POD creation**, ensuring precise tracking and accountability for every delivery.

No matter your size or industry, Geo2 is flexible and scalable, designed to meet your needs and grow alongside your business.

</details>

<details>
<summary>Do I need to integrate Geo2 with my system before I use it?</summary>

No, you don’t need to integrate Geo2 with your existing system to get started. We have designed Geo2 to be as simple as possible, so you can immediately begin planning, managing, and analyzing your deliveries and routes without the hassle of complex integrations.

You can use our intuitive Web Hub to add your orders and routes manually or upload your data using a CSV or Excel file. Once your orders are planned and ready, you can also download a CSV file with the orders and their assigned routes to update your system manually.

If you’re looking for more automation in the future, Geo2 offers the option to integrate your existing systems through our API.

</details>

<details>
<summary>Can I use Geo2 only for recording ePOD's?</summary>

Yes, you can use the Geo2 app exclusively for recording a proof of delivery (POD), including signatures and photos. Additionally, the app supports documenting failed or partially successful deliveries/collections with package- and product-level failure tracking. You can add failure reason codes in [Hub: Environment Settings](Web-Based%20Hub/Hub_%20Environment%20Settings.md) page. They let you classify reasons for failed deliveries/collections and are available to drivers in the mobile app when recording a POD.

If a POD is created for a consignment that doesn't yet exist, the system will automatically generate a consignment using the information provided in the POD.

You can view the POD history either through the mobile app or Hub. However, we recommend using Hub, as it allows you to filter consignments by different POD statuses for easier tracking.

Press [Mobile App: POD - Proof of Delivery](Mobile%20App/Mobile%20App_%20POD%20-%20Proof%20of%20Delivery.md) to learn more information about recording POD’s.

</details>

<details>
<summary>Do I need to install anything (mobile/PC)?</summary>

There is no need to install anything on your PC. All you need is to register your account on [**Geo2 Hub**](https://hub.geo2.com/en-GB/auth/register) or mobile app. For mobile phone, you just need to find Geo2 on Google Play or App Store and install it. Alternatively, you can scan this QR code to install the app for iOS or Android:

![QR code.png](../attachments/718fd541-67d1-4de4-be77-7087a74b1e33.png)

</details>

<details>
<summary>How can I set up my workspace?</summary>

Once your account is created and your email is verified, you will need to set up your Geo2 workspace. If you registered via the mobile app, sign in to [**Geo2 Hub**](https://hub.geo2.com/en-GB/auth/signin) using the same email and password you provided during registration. We ask for some basic information about your company to set up a workspace for you.

By pressing Continue, you will start **a 7-day FREE trial of the Premium subscription**, unlocking features like consignment imports, email and SMS notifications, and line-level failures. A subscription will be automatically assigned, and you can invite up to 4 additional users for FREE to explore Geo2's functionalities.

Next, you will move to **Choose Your Settings** page to create your workspace. Select either the express or manual method to create your organization and environment:

- **Organization:** A group of users sharing a subscription and collaborating on data.
- **Environment:** Separate spaces within the organization for teams, depots, or testing.

**Examples:**

- A large company (organization) with smaller teams (environments) working on different projects.
- A holding company (organization) with smaller companies (environments) working in different spheres.
- A middle-size company (organization) with several depots (environments).

We recommend the **express setup** for ease. Provide your organization’s address manually or allow geolocation to auto-fill it. After completing this step, press **Continue**, and your default organization, environment, and depot will be created. You will be redirected to [Hub: Orders](Web-Based%20Hub/Hub_%20Orders.md) page to start adding orders and planning routes.

Once consignments are added to a [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md), the load can be released to a driver and will appear in the mobile app for the assigned driver.

Press [Hub: Set Up Organization](Web-Based%20Hub/Hub_%20Set%20Up%20Organization.md) to learn more information about your workspace at Geo2.

</details>

<details>
<summary>What is the difference between organizations and environments?</summary>

[Hub: Organization Settings](Web-Based%20Hub/Hub_%20Organization%20Settings.md) is a group of users who share a subscription and collaborate on data in one or more environments. [Hub: Environment Settings](Web-Based%20Hub/Hub_%20Environment%20Settings.md) let you represent teams within a single company or provide separate spaces for testing and productive use. Creating orders, planning routes, recording vehicle checks and PODs (proof of delivery) are all tasks associated with a specific environment. You can configure multiple environments for various purposes, each with its own settings for depots, vehicles, load configurations, display preferences, and more.

**Examples:**

- A large company (organization) with smaller teams (environments) working on different projects.
- A holding company (organization) with smaller companies (environments) working in different spheres.
- A middle-size company (organization) with several depots (environments).

</details>

<details>
<summary>Does Geo2 support multiple depots?</summary>

Yes, you can add as many depots as you need in [Hub: Environment Settings](Web-Based%20Hub/Hub_%20Environment%20Settings.md). Depots are used as start and end points for [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md)and consignments. Each load and consignment can be assigned only to one depot. The load depot has to match the assigned to it consignment depot for a proper building of the route. When selecting [Hub: Set Up Organization](Web-Based%20Hub/Hub_%20Set%20Up%20Organization.md), your first default depot is created automatically with the address you provided.  You can add more depots either one by one by pressing the `Add` button or all at once by pressing the `Import` button.

</details>

<details>
<summary>How can I invite more users to my organization?</summary>

To invite more users to your organization/environment, press the organization name in the header toolbar. Then, hover over the name and select the `Edit (pencil)` icon. In Organization settings → Users section, press the `Invite` button to invite each user separately or the `Import` button to invite all users at once.  As a part of a free trial, by default, you can add additional 4 users.

If you press the `Invite` button, you will see the dialog prompting you for an email address, first and last name, and display name.  Make sure the email address used is valid and can receive incoming messages.  To enable the use of the Geo2 product, you need to assign a subscription to a newly invited user.  You also need to choose the environment(s) to which a user will have access and their role in each of them.  For environment user roles and their permissions, see [Page not accessible](../../../../../../../Page%20not%20accessible/Page%20not%20accessible.md).

Instructions for the invited user are in the invitation email message and [Hub: Accept Invitation](Web-Based%20Hub/Hub_%20Accept%20Invitation.md). Invited users do not need to create their accounts from scratch on their own. Their accounts are registered automatically once invitations are sent.

Once users are invited, you can press the `Consignments` button in the header toolbar to start creating orders (including importing) or the `Loads` button to plan routes.  We recommend starting by creating [Hub: Orders](Web-Based%20Hub/Hub_%20Orders.md) and after that, planning [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md) for them.

When consignments are created and added to a load, the load can released to a driver.  It will be displayed in the mobile app for the assigned driver.

</details>

<details>
<summary>How can I add vehicles to my environment?</summary>

To access your environment settings, click the environment name in the header toolbar. Then, hover over the name and select the `Edit (pencil)` icon. In Environment settings → Vehicles tab, you can add vehicles individually using the `Add` button or upload them in bulk with the `Import` button. The required fields are Key, Speed Factor, and Depot, while all other fields are optional.

For more details, click [Hub: Environment Settings](Web-Based%20Hub/Hub_%20Environment%20Settings.md).

</details>

<details>
<summary>What is the difference between consignments and loads?</summary>

[Hub: Orders](Web-Based%20Hub/Hub_%20Orders.md) are records of deliveries/collections to be handled by a driver, typically as part of a load, a group of consignments. Each consignment has a unique key, which could represent an order number (e.g., 001, 002, 003). You can create consignments manually in Hub or mobile app, import them via a CSV or Excel file in Hub, or create them using integration with the Geo2 API.

Consignments can optionally be added to [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md). A load represents a group of consignments, typically handled in a single vehicle trip. Loads also have unique keys, which could represent a route number (e.g., current date - 20241121).

With Geo2, you can:

- Add consignments to loads.
- Optimize loads to find the best routes, saving time and money.
- Release loads to drivers, making them visible in the mobile app.

Drivers can then work on the released load, perform [Hub: Vehicle Checks](Web-Based%20Hub/Hub_%20Vehicle%20Checks.md), and create [Mobile App: POD - Proof of Delivery](Mobile%20App/Mobile%20App_%20POD%20-%20Proof%20of%20Delivery.md)for the consignments within it.

</details>

<details>
<summary>How can I import my orders?</summary>

You can import multiple consignments at once using the `Import` button on Consignments page. This opens a spreadsheet-style interface for data entry, with column headings providing guidance on the required data for each field. Hover over a column title for more details. Required fields are highlighted with asterisks ( \* ).

If your data is already prepared in another spreadsheet, you can copy and paste it directly into the interface. Alternatively, you can upload a file from your device. Ensure your data format matches the specified requirements.

Once your data is ready, press `Import` to begin the process. You will see options such as Update existing consignments and Generate loads based on consignment data. To proceed without these options, simply press `Import`. Any errors encountered during the process will be displayed for your review.

Successfully imported consignments will appear in the [Hub: Orders](Web-Based%20Hub/Hub_%20Orders.md) list.

For guidance, you can download an example spreadsheet with pre-filled information to help you format your consignment data correctly:

[Example Consignment Import Spreadsheet.xlsx](../attachments/6ac5bb5d-fb20-4673-b17c-cbd6a55c7579.xlsx)

Press [Hub: Order Import](Web-Based%20Hub/Hub_%20Orders/Hub_%20Order%20Import.md) to learn more about consignment imports.

</details>

<details>
<summary>Can I work with multiple routes simultaneously on the same page?</summary>

To visualise multiple loads side-by-side on a map and modify them simultaneously, you can select them in the [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md) list and press `Map view`. Up to 20 loads can be shown on the map simultaneously with assigned depots and stop locations. The colour used to show the load on the map is the same as the colour of the frame and selection checkbox in each visible load card. If you have initially selected more than 20 loads, the excess loads will be hidden.

On each load card, you can make the same changes that are available in [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md) for a single load:

- edit load properties by clicking a load key to be redirected to load editing
- edit consignment properties by clicking a consignment key to be redirected to consignment editing
- remove a load from the page by pressing the `Delete` icon on a load card
- remove consignments from a load by pressing the `Delete` icon on a consignment card or `Remove` button
- re-order consignments inside a load or between loads via drag-and-drop
- optimize a load
- calibrate a load (without optimisation)
- populate committed ETA's from planned ETA’s
- move consignments between loads
- reverse stops
- add driver breaks
- export consignments to synchronise the changes made in Geo2 to the other systems you have integrated via Geo2's API, such as your ERP or WMS
- view a load route on the map

To save changes to a load, press the `Save` button inside the load card.

You can also drag-and-drop load cards to change their position on the page. For example, you may want to move a load to the top of the page, to be as close as possible to the map or make it a focus on the page for any other reason.

Press [Hub: Map View](Web-Based%20Hub/Hub_%20Map%20View.md) to learn more about the possibilities of multiple route planning and optimization on Map view page.

</details>

<details>
<summary>It is possible to create loads automatically based on order volume and weight?</summary>

This process is called [Hub: AI Route Building](Web-Based%20Hub/Hub_%20Orders/Hub_%20AI%20Route%20Building.md). When you select consignments on [Hub: Orders](Web-Based%20Hub/Hub_%20Orders.md) page, you initiate the building of loads across all available vehicles for the selected consignments by pressing the `Load Building` button based on selected parameters like [Page not accessible](../../../../../../../Page%20not%20accessible/Page%20not%20accessible.md)**.** You are not bound by the results of load building - once loads are created, you can continue to fully adjust them. An example of a scenario in which load building can be applied effectively:

1. You have all the consignments planned to be delivered tomorrow.
2. You have not yet created any loads for tomorrow.
3. You select all consignments for tomorrow in the Consignments list and request loads to be built for them.
4. Assuming vehicles have sufficient capacities and each vehicle’s route being able to be driven in a reasonable amount of time, the result will be a set of loads that handle groups of consignments while minimising geographical overlap between vehicle routes and the time taken for each route.

Press [Hub: AI Route Building](Web-Based%20Hub/Hub_%20Orders/Hub_%20AI%20Route%20Building.md) to learn more about AI-powered load building.

</details>

<details>
<summary>How can I track real-time drivers' location?</summary>

Once the [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md) is started by a driver in the mobile app, the "Tracking" toggle will be displayed on the [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md)on Load plan page.  You can reach it if you press the `Loads` button in the header toolbar, find the needed load, and click on the `load key`. On the load map, enable “Tracking” toggle to check the driver's precise location and their actual route.  It is required to enable the location tracking both in the device and app settings to get the tracking data.  Otherwise, the driver's location will not be displayed.  You can also download the tracking data by pressing the `Download` button.

To track multiple drivers' locations assigned to different loads, press the `Geo2 logo` in the header toolbar to find the [Hub: Analytics](Web-Based%20Hub/Hub_%20Analytics.md). By default, the [Hub: Analytics](Web-Based%20Hub/Hub_%20Analytics.md) map is displayed. This map shows your depots and the positions of drivers who have loads in the Started status.  Clicking each object on the map reveals further details. The legend for colour-coding of the objects on the map is shown below the map:

- Moving: green
- Stopped: red
- Grey: stopped for more than 2 hours

You can pan and zoom the map and toggle a full-screen view.

</details>

<details>
<summary>Can I send a tracking link to a consignee?</summary>

It's possible for external users such as consignees to optionally track the progress of their consignments on a public web page.  Public tracking links can be sent via email and SMS notifications.  To configure public tracking notifications, click the environment name in the header toolbar. Then, hover over the name and select the `Edit (pencil)` icon. In Environment settings → Public tracking section, you can configure email and SMS notifications for consignees based on consignment or load status (to which a consignment is assigned). You can create email and SMS templates using tokens to include specific order details, such as the contact name, consignment key (order number), delivery ETA, and tracking link.

Once the load status changes to the configured value (e.g. In Transit), an email/SMS notification with a public tracking link will be sent to the consignee's email address/mobile phone number.  For this to work, it is important that the consignee contact details (email address and mobile phone number) are specified in the [Hub: Orders](Web-Based%20Hub/Hub_%20Orders.md).

Press [Hub: Environment Settings](Web-Based%20Hub/Hub_%20Environment%20Settings.md) to learn more about public tracking notifications.

</details>

<details>
<summary>Can I and a consignee be notified about a successful and failed delivery?</summary>

A consignee can be sent an email with a consignment POD - both automatically when the POD is recorded and manually at any time from the Geo2 Hub. To configure POD notifications, click the environment name in the header toolbar. Then, hover over the name and select the `Edit (pencil)` icon. In [Hub: Environment Settings](Web-Based%20Hub/Hub_%20Environment%20Settings.md) section, if `"Automatic enabled"` is selected, POD messages will be sent automatically to a consignee email address and fixed emails (for failed POD emails) when a POD is registered in the Hub. If `"Manual enabled"` is selected, Hub users have the option to trigger the sending of the POD manually.  Press the `Email to consignee` button on [Hub: Orders](Web-Based%20Hub/Hub_%20Orders.md) page inside of a consignment or on the POD dialog when clicking on the POD icon on a [Hub: Orders](Web-Based%20Hub/Hub_%20Orders.md) or [Hub: Routes](Web-Based%20Hub/Hub_%20Routes.md) on the Load plan page.

You can create templates for successful and failed POD emails using tokens to include specific order details, such as the contact name, consignment key (order number), delivery ETA, and link to a public web page with all details about the created POD. Failed delivery emails can be sent to multiple fixed recipients, for example, to managers who are responsible for failed deliveries.

When the POD is created and a consignment has a consignee email address, the POD notification email will be sent (if it was enabled in Environment settings).  By pressing the `Check` button in the email, a consignee will see POD details.  If the `"Attach PDF"` option is enabled, the POD PDF will be attached to the POD email.

Press [Hub: Environment Settings](Web-Based%20Hub/Hub_%20Environment%20Settings.md) to learn more about sending POD notifications.

</details>
