"use client";

export default function PrivacyPage() {
    return (
        <section className="section-padding bg-background">
            <div className="container-narrow">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground">Effective Date: 27 January 2026</p>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <p>
                        This Privacy Policy explains how Terrisage processes personal data on the Platform.
                    </p>
                    <p>
                        Terrisage is a B2B CRM. Customers may upload personal data of their leads/clients/owners and business contacts. In those cases, the Customer typically decides why and how that data is used, and Terrisage processes it to provide the Platform.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Personal data we may collect/process</h2>

                    <h3 className="text-xl font-medium text-foreground mt-6 mb-2">A. Account and User data (CRM Users):</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>name, email, phone (if provided), role, organisation name</li>
                        <li>authentication and login records, access logs</li>
                    </ul>

                    <h3 className="text-xl font-medium text-foreground mt-6 mb-2">B. Customer Data uploaded by Customers:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>lead/contact details (name, phone, email, preferences, notes)</li>
                        <li>owner/representative contact details (if uploaded by Customer)</li>
                        <li>listing/project documents and attachments (if uploaded by Customer)</li>
                    </ul>

                    <h3 className="text-xl font-medium text-foreground mt-6 mb-2">C. Device and technical data:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>device type, OS/app version, browser type</li>
                        <li>IP address, security logs</li>
                        <li>crash diagnostics and performance telemetry (where enabled)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Why we process personal data</h2>
                    <p>We process personal data to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>provide and operate the Platform (authentication, access control, CRM record management)</li>
                        <li>maintain security, prevent fraud and abuse, and keep audit logs</li>
                        <li>provide customer support and troubleshoot issues</li>
                        <li>improve performance, reliability, and product features</li>
                        <li>generate Aggregated Insights (aggregated and de-identified)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Legal basis / permitted use (India)</h2>
                    <p>
                        We process personal data as permitted under applicable Indian law (including the Digital Personal Data Protection Act, 2023), including to provide services requested by the Customer, maintain security, meet legal obligations, and for other lawful purposes. Where consent is required, it should be obtained by the relevant party (Customer and/or Terrisage, depending on the context).
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Sharing of personal data</h2>
                    <p>We may share personal data with:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>service providers (hosting, monitoring, security, analytics, communications, support tooling) under contractual obligations</li>
                        <li>government or law enforcement where required by law/valid process</li>
                        <li>professional advisers (legal, audit, compliance) where necessary</li>
                    </ul>
                    <p>We do not sell personal data as such.</p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Data retention</h2>
                    <p>We retain personal data as long as necessary to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>provide the Platform during the subscription</li>
                        <li>maintain security/audit logs</li>
                        <li>comply with legal obligations and resolve disputes</li>
                    </ul>
                    <p>
                        After account expiry/termination, we may retain limited records and backups for a limited period as part of standard technical practices and compliance.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Security</h2>
                    <p>
                        We use reasonable administrative, technical and organisational safeguards to protect personal data. No system can guarantee absolute security.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Data Principal rights / requests</h2>
                    <p>
                        Depending on applicable law, individuals may request access, correction, or deletion of their personal data and raise grievances.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>If you are a Terrisage User: <a href="mailto:contact@terrisage.com" className="text-primary hover:underline">contact@terrisage.com</a></li>
                        <li>
                            If you are a lead/contact stored by a Customer: contact the Customer organisation that collected your data (they control that data); Terrisage will assist the Customer where appropriate.
                        </li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Grievance redressal</h2>
                    <div className="bg-muted p-6 rounded-lg not-prose">
                        <p className="font-medium text-foreground mb-4">Grievance contact details:</p>
                        <div className="space-y-2 text-sm">
                            <p><strong>Email:</strong> <a href="mailto:contact@terrisage.com" className="text-primary hover:underline">contact@terrisage.com</a></p>
                            <p><strong>Subject line:</strong> “Privacy Grievance – Terrisage”</p>
                            <p><strong>Address:</strong> Plot No. 11, APGOs Colony, Hafeezpet, Hyderabad, Telangana 500049, India</p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Updates to this Policy</h2>
                    <p>
                        We may update this Policy from time to time. The latest version will be available on the website or within the Platform.
                    </p>

                    <div className="mt-12 pt-8 border-t border-border">
                        <p className="font-semibold text-foreground">Operated by: VTLP TECHNOLOGIES PRIVATE LIMITED</p>
                        <p>Contact: <a href="mailto:contact@terrisage.com" className="text-primary hover:underline">contact@terrisage.com</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
}
