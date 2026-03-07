
[Release Notes](../Release%20Notes.md)

# Release Notes 1.0

# Release Date

2022-03-30

# Known Issues

## Office 365 Safe Links

For certain security-sensitive operations, such as email address confirmation during user invitation, Geo2 generates emails with hyperlinks that can only be used once.  Functionality such as Office 365 Safe Links can mean that a request to the one-time hyperlink is made by (security) software in the background, before the recipient has the opportunity to actively use it.  As a result, a user trying to complete an operation such as confirming their email address or resetting their password may experience the following error in the browser: `The action code is invalid. This can happen if the code is malformed, expired, or has already been used.`

![](../../attachments/d8b2f6e1-6ea9-44c9-9509-069aca564d0d.png)

If your email provider is Office 365 and Safe Links are enabled for your organization, the symptom is that hyperlinks in emails start with an address similar to: `https://<region>.safelinks.protection.outlook.com/?url=`.  If you are affected by this, please ask your Office 365 administrator to whitelist domain geo2.com to avoid Geo2 emails being re-written with Safe Links - see [Set up Safe Links policies in Microsoft Defender for Office 365](https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/set-up-safe-links-policies?view=o365-worldwide).
