
[Mobile App](../Mobile%20App.md)

# Mobile App: POD - Proof of Delivery

- [Introduction](#introduction)
- [Planned POD](#planned-pod)
  - [Order Packages](#order-packages)
  - [Order Products](#order-products)
  - [Order Packages with Products](#order-packages-with-products)
- [Ad-hoc/Unplanned POD](#ad-hoc-unplanned-pod)
  - [Order Packages](#order-packages)
  - [Order Products](#order-products)
  - [Order Packages with Products](#order-packages-with-products)
- [POD Custom Fields](#pod-custom-fields)
- [Package-level Failures](#package-level-failures)
- [Package Scanning](#package-scanning)
  - [Adding and Confirming Packages](#adding-and-confirming-packages)
- [Product-level Failures](#product-level-failures)
- [Package-level Failures with Products](#package-level-failures-with-products)

# Introduction

The mobile app lets you record a proof-of-delivery in different circumstances:

- Planned - for an existing order in a planned route
- Ad-hoc - without a planned order
- Ad-hoc - for an existing order that is not part of a route

To record a planned POD, open Stop details page and click on the `Create POD` button.

![App 139.png](../../attachments/8c44b4ae-653d-4c6b-ac9e-b14e2b8603ed.png)

To record an ad-hoc POD, you can press the `Create POD` button in Menu or on PODs page.

![App 140.png](../../attachments/77d9995a-a94e-4e93-a39e-247930860bb0.png)![App 141.png](../../attachments/a43a07ed-32f4-4e16-8064-5da9d8e60b9a.png)

You will be redirected to POD creation page.

# Planned POD

![App 142.png](../../attachments/696821ae-5edb-4f80-b9f2-37c518fa7c89.png)![App 143.png](../../attachments/c16d3520-bedd-4e38-b87a-39c8a1a7e6ff.png)![App 144.png](../../attachments/149680b9-6194-4cd1-94ee-fccdc5419d75.png)

In the Details section, you will see the following fields:

|  **Fields**        |  **Description**                                                                              |  **Required**    |
|:-------------------|:----------------------------------------------------------------------------------------------|:-----------------|
| Type               | Delivery or Collection.                                                                       | Yes              |
| Order key          | Order identifier unique within the environment, for example, an order number 1, 2, 3, 4, etc. | Yes              |
| Contact name       | Name of the person who received the order.                                                    | Yes              |
| Phone number       | Phone number of the person who received the order.                                            | No               |
| Mobile number      | Mobile phone number of the person who received the order.                                     | No               |
| Remarks            | Notes from the driver.                                                                        | No               |
| Notification email | Email address for sending the proof-of-delivery email.                                        | No               |
| Address            | The app uses the address indicated in the order.                                              | Yes              |

Details such as type, order key, contact name, email and address will be pre-populated from the stop (order) for which you are creating the POD.  You can edit remarks and contact name.

You can select the POD status:

- Successful - order has been successfully delivered/collected.
- Partially successful - part of the order has been delivered/collected.
- Failed - delivery/collection has failed.

![App 145.png](../../attachments/f08714e5-6513-49bc-899f-a7e3e06be6ec.png)

In the `Signature` section, record the recipient’s signature by pressing the `Add signature` button and saving the recorded signature.  This is required for successful and partially successful POD's and optional for failed POD's.  In the `Photos` section, you can optionally take or select pictures for the proof-of-delivery.

![App 146.png](../../attachments/87ea92e8-d710-47fe-bc1b-f021620a361e.png)

After filling in the information, press the `Create` button to save the POD.  When the POD is created, you will be redirected back to Stop details.  In Stop details page, you will see in the right corner:

- a green "done" icon for “Successful” POD status
- a yellow “done” icon for “Partially successful” POD status
- a red “cross” icon for “Failed” POD status

A green “refresh” icon means that there are pending signatures/photos inside a POD. Once they will be successfully uploaded, the icon will be changed accordingly to one of the relevant statuses described above.

![App 147.png](../../attachments/7ff52adb-a62c-4b29-8926-a98db7ad53db.png)![App 148.png](../../attachments/1cc133e9-5335-45a0-848d-81c8817fa898.png)![App 149.png](../../attachments/a4220d3d-fcfa-4c18-83d3-b94b2c7a2781.png)

You can click the POD icon to view POD details. If the order has only one POD, its details will open immediately. If there are multiple PODs, a dialog will appear first so you can select the POD you want to view.

![App 150.png](../../attachments/8d282e83-164b-4b80-804b-22fe2417665d.png)![App 151.png](../../attachments/125e1f49-2f98-44e3-8a8f-92f010b20308.png)

Also, the created POD will be saved in the POD history on the PODs page.

POD statuses (successful, partially successful, failed, no POD) are also displayed alongside the stops in Route plan page. The POD icon on stop cards on Route view page is not clickable. To view POD details, open the order and click the POD icon, or check the PODs page.

![App 152.png](../../attachments/d63411ae-7265-4f32-99b0-7b1979998426.png)

## Order Packages

When the order has pre-defined packages, they are displayed in the `Packages` section.  On each package card, a barcode, description, height, width, depth, weight, and volume can be displayed depending on the data provided [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders.md), mobile app or API for an order.

![App 153.png](../../attachments/e1369bdb-8c04-4c9a-9396-d34d1828a3e9.png)

When the order doesn't have packages, the `Packages` section is collapsed by default.  You can expand it, provide the number of successfully delivered/collected packages out of the total planned and add packages by typing a barcode manually or scanning package barcodes.  

![App 154.png](../../attachments/5e19dd74-6eb7-42e4-a590-3bd139234e31.png)![App 155.png](../../attachments/8ba51794-620f-4ecb-bf6c-69f518a72a44.png)

When you create a POD for multiple orders, the `Packages` section is hidden.

![App 156.png](../../attachments/de9aad4c-37fa-4e25-a11a-44db16598bca.png)![App 157.png](../../attachments/0cdd57d8-b3a5-48fb-acf4-bc3f0f234cb4.png)

By default, packages are marked as delivered (checkboxes are selected). See [Mobile App: POD - Proof of Delivery](Mobile%20App_%20POD%20-%20Proof%20of%20Delivery.md) on marking packages as failed.

![App 153.png](../../attachments/e1369bdb-8c04-4c9a-9396-d34d1828a3e9.png)

## Order Products

When the order has pre-defined products, they are displayed in the `Products` section.  On each product card, a product code, description, quantity, and weight can be displayed depending on the data provided in [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders.md) or via the API for an order.

![App 158.png](../../attachments/cb495fa4-6334-4df2-8e91-77de5b1cfdd9.png)

When the order doesn't have products, the `Products` section is not displayed.  When you create a POD for multiple orders, the `Products` section is hidden.

![App 157.png](../../attachments/0cdd57d8-b3a5-48fb-acf4-bc3f0f234cb4.png)![App 156.png](../../attachments/de9aad4c-37fa-4e25-a11a-44db16598bca.png)

By default, products are marked as delivered (checkboxes are selected). See [Mobile App: POD - Proof of Delivery](Mobile%20App_%20POD%20-%20Proof%20of%20Delivery.md) on marking products as failed.

![App 158.png](../../attachments/cb495fa4-6334-4df2-8e91-77de5b1cfdd9.png)

## Order Packages with Products

When the order has pre-defined products and packages linked, they are displayed in the `Packages and products` section.  For a package, a barcode, height, width, depth, volume, and weight can be displayed depending on the data provided in Geo2 Hub. For a product, a product code, description, quantity, and weight can be displayed depending on the data provided in Geo2 Hub. To check products added to a package, press the `Products` button on a package. The list of products added to the package will be displayed. Press `Back` to return to Create POD page.

![App 160.png](../../attachments/0a9f0b5b-849d-4da9-9003-50777bf99f04.png)![App 159.png](../../attachments/223ffcd9-653c-4b28-b91c-45240560d701.png)

When you create a POD for multiple orders, the `Packages and products` section is hidden.

![App 157.png](../../attachments/0cdd57d8-b3a5-48fb-acf4-bc3f0f234cb4.png)![App 156.png](../../attachments/de9aad4c-37fa-4e25-a11a-44db16598bca.png)

By default, packages with products inside are marked as delivered (checkboxes are selected). See [Mobile App: POD - Proof of Delivery](Mobile%20App_%20POD%20-%20Proof%20of%20Delivery.md) on marking packages with products as failed.

![App 159.png](../../attachments/223ffcd9-653c-4b28-b91c-45240560d701.png)

# Ad-hoc/Unplanned POD

You can create an ad-hoc POD for an existing order by specifying its key.  If the order key does not yet exist, a skeleton order will be created in the background (depending on [Hub: Environment Settings](../Web-Based%20Hub/Hub_%20Environment%20Settings.md)).  If you provide the key of an existing order, details such as type, key, contact name, email, and address are pre-populated.  You can edit remarks and contact name.

![App 161.png](../../attachments/5c304b62-064e-41df-b609-d164279ade4d.png)![App 162.png](../../attachments/85844a69-1153-4a51-b1e7-ca1dd08435f9.png)![App 163.png](../../attachments/fd3fb126-459c-431e-a121-36ca551cfe0d.png)

If the order does not exist yet, fill in the following fields in the `Details` section:

|  **Fields**        |  **Description**                                                                                                                                                                                |  **Required**    |
|:-------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------|
| Type               | Delivery or Collection                                                                                                                                                                          | Yes              |
| Order key          | Order identifier unique within the environment, for example, an order number 1, 2, 3, 4, etc. You can click on the `Scan` icon to scan the key.  It is possible to provide multiple order keys. | Yes              |
| Contact name       | Name of the person who received the order                                                                                                                                                       | Yes              |
| Phone number       | Recipient phone number                                                                                                                                                                          | No               |
| Mobile number      | Recipient mobile phone number                                                                                                                                                                   | No               |
| Remarks            | Notes from the driver                                                                                                                                                                           | No               |
| Notification email | Email address for sending the proof-of-delivery email                                                                                                                                           | No               |
| Address            | The app uses the current device location. This can be edited.                                                                                                                                   | Yes              |

You can select the POD status:

- Successful - order has been successfully delivered/collected.
- Partially successful - part of the order has been delivered/collected.
- Failed - delivery/collection has failed.

![App 164.png](../../attachments/ac7a2bba-3808-47b4-8a21-81b7f0d0d152.png)

In the `Signature` section, you need to record a recipient signature by pressing the `Add signature` button and saving the recorded signature.  This is required for successful and partially successful POD's and optional failed POD's.  In the `Photos` section, you can optionally take or select pictures for the proof-of-delivery.

![App 146.png](../../attachments/87ea92e8-d710-47fe-bc1b-f021620a361e.png)

After filling in all the data, press the `Create POD` button to save the POD.  After the POD is created, it will be saved in POD history on PODs page.  Icons on the right side of each POD means:

- a green "done" icon for “Successful” POD status
- a yellow “done” icon for “Partially successful” POD status
- a red “cross” icon for “Failed” POD status

![App 165.png](../../attachments/fc31fc73-2d3d-4095-8ecc-f0333db04023.png)

## Order Packages

When the order has pre-defined packages (ad-hoc POD for existing order), they are displayed in the `Packages` section.  On each package card, a barcode, description, height, width, depth, weight, and volume can be displayed depending on the data provided [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders.md), mobile app or API for an order.

![App 143.png](../../attachments/c16d3520-bedd-4e38-b87a-39c8a1a7e6ff.png)

When the order doesn't have packages (ad-hoc POD for either existing order without pre-defined packages or not yet existing order), the `Packages` section is collapsed by default.  You can expand it, provide the number of successfully delivered/collected packages out of the total planned, and add packages by typing a barcode manually or scanning package barcodes.

![App 154.png](../../attachments/5e19dd74-6eb7-42e4-a590-3bd139234e31.png)![App 155.png](../../attachments/8ba51794-620f-4ecb-bf6c-69f518a72a44.png)

When you create a POD for multiple orders, the `Packages` section is hidden.

![App 166.png](../../attachments/9c589380-c3d9-4ec1-98a3-c20d86c0c662.png)![App 167.png](../../attachments/35cddab0-c029-4651-abc0-2dad39008f40.png)

By default, packages are marked as delivered (checkboxes are selected). See [Mobile App: POD - Proof of Delivery](Mobile%20App_%20POD%20-%20Proof%20of%20Delivery.md)on marking packages as failed.

![App 153.png](../../attachments/e1369bdb-8c04-4c9a-9396-d34d1828a3e9.png)

## Order Products

When the order has pre-defined products (ad-hoc POD for existing order key), they are displayed in the `Products` section.  On each product card, a product code, description, quantity, and weight can be displayed depending on the data provided [Hub: Orders](../Web-Based%20Hub/Hub_%20Orders.md) or API for an order.

![App 158.png](../../attachments/cb495fa4-6334-4df2-8e91-77de5b1cfdd9.png)

When the order doesn't have products, the `Products` section is not displayed.  It is not possible to add them via the mobile app. When you create a POD for multiple orders, the `Products` section is hidden.

![App 166.png](../../attachments/9c589380-c3d9-4ec1-98a3-c20d86c0c662.png)![App 167.png](../../attachments/35cddab0-c029-4651-abc0-2dad39008f40.png)

By default, products are marked as delivered (checkboxes are selected). See [Mobile App: POD - Proof of Delivery](Mobile%20App_%20POD%20-%20Proof%20of%20Delivery.md) on marking products as failed.

![App 158.png](../../attachments/cb495fa4-6334-4df2-8e91-77de5b1cfdd9.png)

## Order Packages with Products

When the order has pre-defined products and packages linked, they are displayed in the `Packages and products` section.  For a package, a barcode, height, width, depth, volume, and weight can be displayed depending on the data provided in Geo2 Hub. For a product, a product code, description, quantity, and weight can be displayed depending on the data provided in Geo2 Hub. To check products added to a package, press the `Products` button on a package. The list of products added to the package will be displayed. Press `Back` to return to Create POD page.

![App 159.png](../../attachments/223ffcd9-653c-4b28-b91c-45240560d701.png)![App 160.png](../../attachments/0a9f0b5b-849d-4da9-9003-50777bf99f04.png)

When you create a POD for multiple orders, the `Packages and products` section is hidden. By default, packages with products inside are marked as delivered (checkboxes are selected). See [Mobile App: POD - Proof of Delivery](Mobile%20App_%20POD%20-%20Proof%20of%20Delivery.md) on marking packages with products as failed.

![App 159.png](../../attachments/223ffcd9-653c-4b28-b91c-45240560d701.png)

# POD Custom Fields

In the Environment settings, you can set up custom fields to collect additional information in POD's.  Here is an example:

- Ask for the driver's name
- Ask if the parcel is intact

![Screenshot 2025-12-29 at 12.19.07.png](../../attachments/59f3a0ea-cf94-4904-a275-9555eff1685d.png)

That's how the fields would look when recording a POD:

![App 168.png](../../attachments/116c40f5-be0d-4c2b-9955-2ba9bb366d89.png)

# Package-level Failures

If the order has pre-defined packages, they will be displayed on Create POD page, marked as delivered by default (checkboxes are selected).  You can de-select a package to mark that it was not delivered.  You will see a prompt to specify the failure reason code for it.  The POD status will be automatically changed from Successful to Partially successful and the failure reason code from the package level will be populated to the general POD level.  The failure code for the package will be highlighted in red colour.  You can press it to select another code.

You can first select the Partially successful status, a general failure reason code for the POD, and after that, de-select packages.  The general failure reason code will be populated to the package level, but you can change it for each package individually.

![App 170.png](../../attachments/fc72f2a6-4f62-4b7d-9fa7-bb63f94ae033.png)![App 169.png](../../attachments/f166da5d-6244-419b-be8c-b6ce89ac1443.png)![App 171.png](../../attachments/e9792d11-9784-4cb8-b1d3-1312cdc6ec24.png)![App 172.png](../../attachments/4fd9a7f1-8b9c-433c-950f-bf567af65eea.png)![App 173.png](../../attachments/bbbf4ce9-5d2b-49ee-8af8-7afa0aa3acdc.png)

If all packages have failed, you can either de-select each manually by unticking the checkboxes or by pressing the `Deselect all` button.  You will see the `Select failure reason code` button on each package to specify the failure reason code.  You can press a package card to provide a failure reason code.  You will see two options - `Apply for all failed packages` or `Apply for selected package`. If `Apply for all failed packages` is selected, the failure reason code will be populated for all packages. If `Apply for selected package` is selected, the failure reason code will be populated only for the selected package. You can press other package cards and select another failure reason for them. You will see the same options - `Apply for all failed packages` (those without a reason code so far) or `Apply for selected package`. The last selected failure reason code will be saved for the general POD level. The POD status will be automatically changed from Successful to Failed and the failure reason code from the package level will be populated to the general POD level.  The failure code for the packages will be highlighted in red colour.  You can press it to select another code (for example, to provide an individual code for each package).

You can first select a Failed status and a general failure reason code for the POD.  All packages will be de-selected automatically.  The general failure reason code will be populated to the package level, but you can change it for each package individually.

![App 174.png](../../attachments/d68bfcc0-97ba-4929-ade7-02f01c82b0cb.png)![App 175.png](../../attachments/a7252e42-3330-436f-b165-a3ea75643073.png)![App 176.png](../../attachments/117f6b41-f904-4eef-9f6e-b3acb3583b71.png)![App 177.png](../../attachments/c1162049-7bc3-4e74-9a22-d529a12d5687.png)![App 178.png](../../attachments/753c488f-d1e1-4b4b-95c0-92e3dc6d5a8b.png)![App 179.png](../../attachments/a9e3fe04-d135-460f-8ce2-452fa173db6c.png)![App 180.png](../../attachments/7a9fd8cb-c80e-4edb-9dc3-566e466128e3.png)

To mark all unticked (de-selected) packages as successful again, press the `Select all` button - the POD status will be changed to Successful as well.

# Package Scanning

Package scanning serves multiple purposes:

- to add packages to an order when it does not have them yet
- to validate whether a package belongs to the order, when the order has packages pre-defined
- to specify packages that have been delivered, both when they are pre-defined and when they have just been added in the course of POD creation

## Adding and Confirming Packages

If the order has no pre-defined packages, it is possible to scan barcodes to add packages by pressing the `Scan` button.  You will be redirected to Scan barcode page.  Point your camera steadily at the barcode or QR code and it will be scanned.  The scanned code will be displayed under the title `Scanned barcodes`.  You can press:

- `Red minus` icon to remove this barcode
- `Scan more` button to scan more barcodes
- `Finish scanning` button to complete scanning

![App 184.png](../../attachments/ff4925e0-946e-43a1-aa01-c6354225c397.png)![App 185.png](../../attachments/47c9988f-ff51-4d33-bcf3-bf25cc1069b3.png)

Press the `Scan more` button when the device camera is over a new barcode.  If you try to scan the same barcode, you will get an error message.

![App 186.png](../../attachments/d69be237-d564-4f13-82d5-dcdb4da9ebaa.png)

Once all required barcodes are scanned, press the `Finish scanning` button to be redirected to Create POD page.  All scanned barcodes will be ticked (selected) as successfully delivered/collected.  If some of them have not been delivered, you can untick (de-select them) and provide a failure reason code.

![App 187.png](../../attachments/219eb057-8ea5-4445-9ffb-e1df78bd94de.png)

On Create POD page, you can also press the red minus icon to remove packages.

If the order has pre-defined packages, it is also possible to scan barcodes to verify packages or confirm them by pressing the `Scan` button.  You will be redirected to Scan barcode page.  Point your camera steadily at the barcode or QR code and it will be scanned.  The scanned code will be displayed under the title `Scanned barcodes`.  You can press:

- `Red minus` icon to remove this barcode
- `Scan more` button to scan more barcodes
- `Finish scanning` button to complete scanning

If you try to scan the barcode that does not belong to this order, you will get an error message.

![App 188.png](../../attachments/7f1f850e-30d7-49a8-9b93-b3e6bd6d96f6.png)![App 189.png](../../attachments/780937d4-8f13-4f1a-9df5-bcb74045cdc4.png)![App 190.png](../../attachments/573902d5-5ecc-4602-b7d9-741a59dcad8a.png)![App 192.png](../../attachments/1845d2fb-16ec-42da-8f3b-8edd5543c7ac.png)

Once all barcodes are scanned, press the `Finish scanning` button to be redirected to Create POD page.  All scanned barcodes will be ticked (selected) as successfully delivered/collected.  If some of them have not been delivered, you can untick (de-select them) and provide a failure reason code.

If you do not scan any of pre-defined packages, you will see a prompt asking if you want to continue scanning as there are not confirmed packages. By pressing the `Complete` button, you will be redirected back to POD page. Not confirmed/scanned packages will be marked as failed. You need to select a failure reason code for it.

![App 194.png](../../attachments/0ab420e0-5403-4138-9805-cd8a3d70018d.png)![App 195.png](../../attachments/247f9827-1727-44af-9c03-a11f83da6d7e.png)![App 196.png](../../attachments/bd87433e-4d51-4620-8ca1-da0a907e765b.png)![App 197.png](../../attachments/27f61477-f7a3-4e19-a107-dc7c1379cd99.png)![App 198.png](../../attachments/0c67b1b3-7401-4624-8d05-031453a2d704.png)![App 199.png](../../attachments/efd8f401-fcff-4192-aa84-e64145eaef11.png)

# Product-level Failures

If the order has pre-defined products, they are displayed on Create POD page, marked as delivered by default (checkboxes are selected).  You can de-select a product to mark that it was not delivered.  You will see a prompt to specify the failure reason code for it and the failed quantity out of the planned total.  The POD status will be automatically changed from Successful to Partially successful and the failure reason code from the product level will be populated to the general POD level.  The failure code for the product will be highlighted in red colour.  You can press it to select another code or change the failed quantity.

You can first select the Partially successful status, a general failure reason code for the POD, and after that, de-select products.  The general failure reason code will be populated to the product level, but you can change it for each product individually.

![App 200.png](../../attachments/cb4980b3-f7a5-4554-aa11-bb20cb7e1d4f.png)![App 201.png](../../attachments/4d4ea173-9839-4c2d-8b3c-7ada43ee0a60.png)![App 203.png](../../attachments/620e3bec-c8ea-4ab2-b1a4-557149ee9270.png)![App 204.png](../../attachments/af004a18-c016-4636-b6a5-605980a7ea3c.png)![App 205.png](../../attachments/b06f1f85-4a42-48f6-811d-aeb8ebe76847.png)

If all products have failed, you can either de-select each manually by unticking the checkboxes or by pressing the `Deselect all` button.  You will see `Select failure reason code` button on each product to specify the failure reason code.  You can press on it to provide a failure reason code and failed quantities.  You will see two options - `Apply for all failed products` or `Apply for selected product`. If `Apply for all failed products` is selected, the failure reason code will be populated for all products. Full quantities of other products will be automatically failed. If `Apply for selected product` is selected, the failure reason code will be populated only for the selected product. You can press other product cards and select another failure reason for them and a failed quantity. You will see the same options - `Apply for all failed products` (those without a reason code yet) or `Apply for selected product`. The last selected failure reason code will be saved for the general POD level. The POD status will be automatically changed from Successful to Failed and the failure reason code from the product level will be populated to the general POD level.  The failure code for the products will be highlighted in red colour.  You can press it to select another code (for example, to provide an individual code for each product) and the failed quantity.  If not the full quantity of the product fails, the general status will be changed to Partially successful.

You can first select a Failed status and a general failure reason code for the POD.  All products will be de-selected automatically.  The general failure reason code will be populated to the product level, but you can change it for each product individually.

![App 206.png](../../attachments/03c7a2dd-e9d6-4a9c-8602-d212621d1eb7.png)![App 207.png](../../attachments/9e90bf46-ab1c-43f0-a0c0-1f262c4b3f5b.png)![App 208.png](../../attachments/c38f20d8-6cec-4d41-849d-b1ddd0c98263.png)![App 209.png](../../attachments/9a1d6f34-2e19-49a3-bf9e-2fe51f5f3704.png)![App 210.png](../../attachments/b4e68469-4df0-402d-bfd3-e2a145d1611e.png)

To mark all unticked (de-selected) products as successful again, press the `Select all` button - the POD status will be changed to Successful as well.

# Package-level Failures with Products

If the order has pre-defined packages with products linked, they will be displayed on Create POD page, marked as delivered by default (checkboxes are selected).  You can de-select a package to mark that it was not delivered.  You will see a prompt to specify the failure reason code for it.  The POD status will be automatically changed from Successful to Partially successful and the failure reason code from the package level will be populated to the general POD level.  The failure code for the package will be highlighted in red colour.  You can press it to select another code.  All products added to the package will be marked as failed with the full quantities failed.

You can first select the Partially successful status, a general failure reason code for the POD, and after that, de-select packages.  The general failure reason code will be populated to the package level, but you can change it for each package individually.

![App 211.png](../../attachments/0f2584b8-d43c-4e7c-adcb-2571e2e7ec32.png)![App 212.png](../../attachments/62f748d7-10f6-494a-bb51-1df7c0c6db4d.png)![App 213.png](../../attachments/29fcea63-8328-4099-8ba0-b220917b1e35.png)![App 214.png](../../attachments/3fbfe6f4-229d-4cd8-8894-2254650c1bbd.png)

It is possible to press the Products button on a package to mark that only part of the product failed. The product will have a “Partially successful” status and a failure reason code will be highlighted in orange colour. The package status will be also automatically changed to “Partially successful”.

![App 215.png](../../attachments/e026c901-2670-4659-9703-8cf18bf33379.png)![App 216.png](../../attachments/cd0e95bb-66a2-4f7c-ade0-602e9195af6d.png)![App 217.png](../../attachments/ff349df7-47b7-4d02-acfe-445d4ab3ed29.png)![App 218.png](../../attachments/3f2e29af-7de6-4c22-85da-fefcd01f892c.png)![App 219.png](../../attachments/7091385c-0832-4458-8743-80e90a13af73.png)

If all packages with products have failed, you can either de-select each manually by unticking the checkboxes or by pressing the `Deselect all` button.  You will see the `Select failure reason code` button on each package and product to specify the failure reason code.  You can press on a package to provide a failure reason code.  You will see two options - `Apply for all failed packages` or `Apply for selected package`. If `Apply for all failed packages` is selected, the failure reason code will be populated for all packages and products linked to them. If `Apply for selected package` is selected, the failure reason code will be populated only for the selected package and products linked to it.

![App 221.png](../../attachments/a5cd2f11-ef27-46ae-9dda-41bfe3b0abbe.png)![App 220.png](../../attachments/9636dc8d-9230-4edd-b1f1-b6a74cd0ceca.png)![App 222.png](../../attachments/12ed1058-8f9d-47ca-9687-420e8efdfb9c.png)![App 223.png](../../attachments/33bd1bfe-7f6e-4fe8-8f07-33f82485c520.png)![App 224.png](../../attachments/00549e6a-a7c7-4e54-a00c-5d1aa6c67033.png)

You can press other package cards and select another failure reason for them. You will see the same options - `Apply for all failed packages` (those without a reason code yet) or `Apply for selected package`. The last selected failure reason code will be saved for the general POD level.

The failure code for the packages and products inside them will be highlighted in red colour.  You can press it to select another code (for example, to provide an individual code for each product) and the failed quantity.  If not the full quantity of the product fails, the general status will be changed to Partially successful.

You can first select a Failed status and a general failure reason code for the POD.  All packages and products will be de-selected automatically.  The general failure reason code will be populated to the package and product level, but you can change it for each product individually.
