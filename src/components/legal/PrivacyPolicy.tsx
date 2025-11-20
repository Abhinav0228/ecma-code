import LegalLayout from './LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        This Privacy Policy explains how we collect, use, and protect your information when you use AlphaXAU Miner and related services. By using our website, products, or services, you agree to the terms described here.
      </p>

      <section>
        <h2 className="text-xl text-white mb-2">Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Account details such as name, email address, and contact information.</li>
          <li>Subscription and billing details processed via our payment provider (we do not store full card data).</li>
          <li>Usage data including device, browser, approximate location, and interaction logs to improve product performance.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">How We Use Information</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To provide and maintain AlphaXAU Miner and associated features.</li>
          <li>To process subscriptions, provide invoices, and deliver service updates.</li>
          <li>To enhance security, prevent fraud, and analyze product usage.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Trading Credentials</h2>
        <p>
          Your broker credentials are never stored on our servers. Any credentials you provide are used only within secure client-side sessions or trusted integrations where applicable.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Cookies</h2>
        <p>
          We use essential and analytics cookies to deliver core functionality and measure usage. You can control cookies through your browser settings. Disabling certain cookies may affect features.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Data Sharing</h2>
        <p>
          We do not sell your data. We share limited information with service providers (e.g., analytics, billing, support) under strict confidentiality and data-processing agreements.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Data Security</h2>
        <p>
          We implement administrative, technical, and organizational safeguards appropriate to the sensitivity of the data we process. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Data Retention</h2>
        <p>
          We retain personal data for as long as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Your Rights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Access, update, or delete certain personal information.</li>
          <li>Opt-out of non-essential communications.</li>
          <li>Request data portability where applicable.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Children's Privacy</h2>
        <p>
          Our services are not directed to individuals under 18. We do not knowingly collect data from children. If we become aware of such data, we will delete it.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">International Transfers</h2>
        <p>
          Your information may be processed across regions where our service providers operate, with appropriate safeguards in place.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Contact</h2>
        <p>
          For privacy questions or requests, contact us at <span className="text-[#E0A130]">support@alphaxau.example</span>.
        </p>
      </section>
    </LegalLayout>
  );
}
