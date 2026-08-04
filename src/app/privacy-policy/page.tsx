import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how CAH Health collects, uses, and protects information, including data used for analytics, advertising measurement, and affiliate attribution.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 prose prose-lg">
      <h1>Privacy Policy</h1>
      <p>Last updated: August 4, 2026</p>
      <p>
        This Privacy Policy explains how CAH Health ("CAH Health," "we," "us,"
        or "our") collects, uses, and shares information when you visit
        cahhealth.com, interact with our content, or contact us.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Information you provide</h3>
      <p>
        We may collect information you choose to provide, such as your name,
        email address, and the contents of a message when you contact us or sign
        up for a service we offer.
      </p>
      <h3>Information collected automatically</h3>
      <p>
        When you use the site, we and our service providers may automatically
        collect information such as your IP address, approximate location,
        browser and device type, operating system, referring page, pages viewed,
        date and time of access, interactions with links, and cookie or similar
        identifiers.
      </p>

      <h2>2. How We Use Information</h2>
      <p>We may use information to:</p>
      <ul>
        <li>operate, secure, troubleshoot, and improve the site;</li>
        <li>understand how visitors find and use our content;</li>
        <li>respond to messages and provide requested communications;</li>
        <li>measure advertising and campaign performance;</li>
        <li>attribute qualifying purchases made through affiliate links; and</li>
        <li>comply with legal obligations and prevent fraud or misuse.</li>
      </ul>

      <h2>3. Cookies and Similar Technologies</h2>
      <p>
        We and our service providers may use cookies, pixels, tags, and similar
        technologies for site functionality, security, analytics, advertising
        measurement, and affiliate attribution. Some technologies are provided
        by third parties and may recognize your browser or device across visits.
      </p>
      <p>
        You can control cookies through your browser settings and, where a
        consent tool is presented, through that tool. Blocking some technologies
        may affect site functionality or measurement. Where required by
        applicable law, non-essential technologies will be used in accordance
        with the choices you make through the available consent controls.
      </p>

      <h2>4. Google Services</h2>
      <p>
        We may use Google Analytics, Google Ads, and related Google measurement
        tools to understand site use and evaluate advertising performance. When
        enabled, these services may receive information about your browser,
        device, activity on the site, IP address, and advertising or cookie
        identifiers. Google processes this information under its own terms and
        privacy policies.
      </p>
      <p>
        Learn more about{" "}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noreferrer"
        >
          how Google uses information from sites that use its services
        </a>
        . You can also review{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noreferrer"
        >
          Google&apos;s Privacy Policy
        </a>
        , manage personalized advertising in{" "}
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noreferrer"
        >
          Google Ad Settings
        </a>
        , or use the{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noreferrer"
        >
          Google Analytics opt-out browser add-on
        </a>
        .
      </p>

      <h2>5. Affiliate Links and Other Third Parties</h2>
      <p>
        Some links take you to independent merchants, affiliate networks, or
        other third-party websites. When you click an affiliate link, the third
        party may use cookies or identifiers to record the referral and determine
        whether CAH Health is eligible for a commission. Those third parties
        control their own data practices, and their privacy policies apply after
        you leave our site.
      </p>

      <h2>6. When We Share Information</h2>
      <p>
        We may share information with vendors that provide hosting, security,
        analytics, advertising measurement, communications, and affiliate
        attribution services. We may also disclose information when required by
        law, to protect rights and safety, or as part of a business transfer. We
        do not sell personal information for money.
      </p>

      <h2>7. Data Retention and Security</h2>
      <p>
        We retain information only for as long as reasonably necessary for the
        purposes described in this policy, including security, legal, accounting,
        and reporting needs. We use reasonable safeguards, but no method of
        transmission or storage is completely secure.
      </p>

      <h2>8. Your Choices and Privacy Rights</h2>
      <p>
        Depending on where you live, you may have rights to request access,
        correction, deletion, restriction, or a copy of certain personal
        information, or to object to or withdraw consent for certain processing.
        You may submit a request using the contact information below. We may need
        to verify your request, and some exceptions may apply under law.
      </p>

      <h2>9. Children&apos;s Privacy</h2>
      <p>
        CAH Health is intended for a general audience and is not directed to
        children under 13. We do not knowingly collect personal information from
        children under 13. If you believe a child has provided personal
        information, please contact us so we can review and delete it as
        appropriate.
      </p>

      <h2>10. International Visitors</h2>
      <p>
        Information may be processed in countries other than the country where
        you live. Those countries may have different data-protection laws. Where
        required, service providers use legally recognized safeguards for
        international transfers.
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this policy as our services and legal obligations change.
        The date at the top of this page shows when it was last updated.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For privacy questions or requests, contact{" "}
        <a href="mailto:admin@cahhealth.com">admin@cahhealth.com</a>.
      </p>
    </main>
  );
}
