"use client";

export default function CookiePage() {
    return (
        <section className="section-padding bg-background">
            <div className="container-narrow">
                <header className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">TERRISAGE — COOKIE & SIMILAR TECHNOLOGIES POLICY</h1>
                    <p className="text-muted-foreground">This Policy explains how Terrisage uses cookies and similar technologies on the web Platform and equivalent technologies in the mobile apps.</p>
                </header>

                <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground">
                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Technologies we use</h2>
                    <ul className="list-none pl-0 space-y-2">
                        <li><strong>Web:</strong> cookies, local storage, session storage</li>
                        <li><strong>Mobile apps:</strong> secure local storage, app instance identifiers, diagnostics tooling, and (if enabled) push notification tokens</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Why we use them</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>authenticate Users and maintain secure sessions</li>
                        <li>enforce role-based access and tenant separation</li>
                        <li>prevent fraud and detect security abuse</li>
                        <li>improve reliability and performance (error/crash monitoring)</li>
                        <li>understand feature usage to improve product (non-advertising analytics)</li>
                    </ul>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Categories</h2>
                    <ol className="list-decimal pl-6 space-y-4">
                        <li><strong>Strictly necessary:</strong> login/session, security, access control</li>
                        <li><strong>Functional:</strong> preferences and workflow continuity</li>
                        <li><strong>Performance & product analytics:</strong> diagnostics and usage measurement for improvement (not advertising)</li>
                    </ol>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. No advertising cookies inside the authenticated CRM</h2>
                    <p>
                        Terrisage does not intentionally deploy behavioural advertising trackers inside the authenticated CRM experience.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Managing cookies</h2>
                    <p>
                        You can manage cookies using your browser settings. Disabling cookies/storage may prevent sign-in or break core functionality.
                    </p>

                    <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Updates</h2>
                    <p>
                        We may update this Policy periodically and publish the revised version accordingly.
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