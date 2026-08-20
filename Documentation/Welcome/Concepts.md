---
slug: "/concepts"
sidebar_label: "Concepts"
sidebar_position: 2
description: "Geo2 is a cloud-based transport management system (TMS), a logistics service that uses technology to help businesses plan, execute, and optimize physical"
---


# Concepts

# Introduction

Geo2 is a cloud-based transport management system (TMS), a logistics service that uses technology to help businesses plan, execute, and optimize physical movement of goods.  By leveraging latest technology, Geo2 delivers competitive advantage to its customers - reduced cost of delivery with a focus on sustainability, while maintaining customer satisfaction.  We are always working to improve and innovate.

The central record that Geo2 works with is an *order*, record of a customer *delivery* or *collection*.  When organised into *routes*, each order is assigned a stop number - its planned position on the route.

There are a number of ways Geo2 can be used.  The three examples below demonstrate increasing use of Geo2 functionality.  How much functionality is utilised is up to each organization and is not fixed:

| **Use Case** | **Details** | **Pre-Delivery Functionality Used** | **Post-Delivery Functionality Used** |
| --- | --- | --- | --- |
| Passive POD collection | Using the mobile app, drivers record deliveries as they happen, synchronising them to Geo2 Hub for later access by other users.  Orders do not have any prior existence and no planning takes place. | None | Access to POD's, for example to answer delivery queries |
| Passive POD collection with pre-defined orders | Similar to passive POD collection, except that orders are created in advance.  As POD's are synchronised from the mobile app to Geo2 Hub, they can be matched against pre-existing orders. | Creation/import of orders | As above, with orders usually holding a larger amount of pre-defined data |
| Route planning | Orders are organised into routes assigned to specific drivers, who receive them in the mobile app.  Drivers follow pre-defined routes and record POD's only against orders planned in the active route. | In addition to the above: <br/>- Planning of orders into routes <br>- Review of route feasibility in terms of: drive time, vehicle weight and/or volume capacity <br>- Optimising stop sequence within a route <br>- Planning of vehicle/driver workload | In addition to the above: <br/>Review of route taken |

It is completely feasible to mix simple passive POD collection for some orders with full route planning for others.

# Data Ownership

Data in Geo2 are owned by *organizations*, which have one or more *user accounts*.  Geo2 can only be used by authenticated users.

An organization has one or more *environments*.  Environments are separate containers for data and user authorisations.  Here are some examples of how an organization may make use of environments:

- Have just one environment for all use.
- Have separate environments for training, testing and production use.
- Have several environments, one for each company in a larger group.

Data inside an organization are private - other organizations have no visibility of them.  Similarly, data inside environments are private - other environments, including those in the same organization, have no visibility of them.  An organization user may have access to one environment or several.  The user's authorisations may differ in different environments in the same organization.

# Glossary

This is a glossary of terms and acronyms used in this documentation.

| **Term**   | **Definition**                                                                          |
|:-----------|:----------------------------------------------------------------------------------------|
| Recipient  | The recipient of a delivery order or sender of a collection order                       |
| Order      | A delivery to or a collection from a customer                                           |
| Sender     | The person or organization delivering a delivery order or collecting a collection order |
| ETA        | Estimated time of arrival                                                               |
| POD        | Proof of delivery                                                                       |
