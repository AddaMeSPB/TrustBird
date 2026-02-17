export function TermsContent({ backHref }: { backHref: string }) {
  return (
    <main style={{ padding: "120px 1.5rem 80px" }}>
      <div className="prose">
        <h1>Terms of Service</h1>
        <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
          Last updated: February 17, 2026
        </p>

        <h2>Agreement to Terms</h2>
        <p>
          By downloading, installing, or using eCardify (&quot;the App&quot;),
          you agree to be bound by these Terms of Service. If you do not agree
          to these terms, do not use the App.
        </p>

        <h2>Description of Service</h2>
        <p>
          eCardify is a digital business card creation and sharing application
          for iOS. The App allows you to create digital business cards, add them
          to Apple Wallet, and share them via QR codes, NFC, and links.
        </p>

        <h2>Purchases</h2>
        <p>
          eCardify offers the following one-time purchase options:
        </p>
        <ul>
          <li>
            <strong>Free Tier:</strong> Includes 1 digital business card with
            basic templates and QR code sharing.
          </li>
          <li>
            <strong>BasicCard ($14):</strong> One-time purchase including up to 5
            cards, all premium templates, Apple Wallet integration, and NFC
            sharing.
          </li>
          <li>
            <strong>FlexiCard ($24):</strong> One-time purchase including
            unlimited cards, team management, custom branding, and API access.
          </li>
        </ul>
        <p>
          All purchases are processed through the Apple App Store and are subject
          to Apple&apos;s terms and conditions. Purchases are non-refundable
          except as required by applicable law or Apple&apos;s refund policy.
        </p>

        <h2>User Content</h2>
        <p>
          You retain ownership of all content you create within the App,
          including business card designs and contact information. You are
          responsible for ensuring that your content does not infringe on any
          third-party rights.
        </p>

        <h2>Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the App for any unlawful purpose</li>
          <li>
            Create business cards with false or misleading information intended
            to deceive
          </li>
          <li>Attempt to reverse engineer or modify the App</li>
          <li>
            Use the App to distribute spam, malware, or harmful content
          </li>
        </ul>

        <h2>Intellectual Property</h2>
        <p>
          The App, including its design, code, templates, and branding, is owned
          by Saroar Khandoker and protected by intellectual property laws.
          Templates provided within the App are licensed for your personal and
          commercial use on business cards created through the App.
        </p>

        <h2>Disclaimer of Warranties</h2>
        <p>
          The App is provided &quot;as is&quot; without warranties of any kind,
          either express or implied. We do not guarantee that the App will be
          uninterrupted, error-free, or free of harmful components.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, we shall not be liable for any
          indirect, incidental, special, consequential, or punitive damages
          arising from your use of the App.
        </p>

        <h2>Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. We will notify
          you of significant changes through the App or by updating this page.
          Continued use of the App after changes constitutes acceptance of the
          new terms.
        </p>

        <h2>Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with
          applicable laws, without regard to conflict of law principles.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these Terms, contact us at{" "}
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
