export function PrivacyContent({ backHref }: { backHref: string }) {
  return (
    <main style={{ padding: "120px 1.5rem 80px" }}>
      <div className="prose">
        <h1>Privacy Policy</h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
          Last updated: February 17, 2026
        </p>

        <h2>Introduction</h2>
        <p>
          eCardify (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is
          committed to protecting your privacy. This Privacy Policy explains how
          we collect, use, and safeguard your information when you use our iOS
          application.
        </p>

        <h2>Information We Collect</h2>
        <p>
          eCardify is designed with privacy in mind. We collect minimal data
          necessary to provide our service:
        </p>
        <ul>
          <li>
            <strong>Business Card Data:</strong> The contact information and
            design choices you enter when creating digital business cards. This
            data is stored locally on your device and synced via iCloud.
          </li>
          <li>
            <strong>Purchase Information:</strong> When you purchase BasicCard or
            FlexiCard, the transaction is processed by Apple through the App
            Store. We do not collect or store payment information.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>Your data is used solely to:</p>
        <ul>
          <li>Create and display your digital business cards</li>
          <li>Generate Apple Wallet passes for your cards</li>
          <li>Sync your cards across your Apple devices via iCloud</li>
          <li>Enable sharing functionality (QR codes, NFC, links)</li>
        </ul>

        <h2>Data Storage and Security</h2>
        <p>
          Your business card data is stored locally on your device and
          synchronized through Apple iCloud. We use end-to-end encryption to
          protect your data. We do not have access to your iCloud data.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          eCardify does not share your personal information with third parties.
          The only third-party service involved is Apple iCloud for data
          synchronization, which is governed by Apple&apos;s own privacy policy.
        </p>

        <h2>Data Retention</h2>
        <p>
          Your data remains on your device and in your iCloud account for as
          long as you use the app. You can delete your data at any time by
          removing cards within the app or uninstalling the application.
        </p>

        <h2>Children&apos;s Privacy</h2>
        <p>
          eCardify is not directed at children under 13. We do not knowingly
          collect personal information from children.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify
          you of any changes by posting the new policy on this page and updating
          the &quot;Last updated&quot; date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a href="mailto:addaemailservice@gmail.com">
            addaemailservice@gmail.com
          </a>
          .
        </p>

        <div style={{ marginTop: "3rem" }}>
          <a
            href={backHref}
            style={{
              color: "#06B6D4",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            &larr; Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
