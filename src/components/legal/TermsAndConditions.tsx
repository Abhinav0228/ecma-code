import LegalLayout from './LegalLayout';

export default function TermsAndConditions() {
  return (
    <LegalLayout title="Terms and Conditions">
      <p>
        These Terms and Conditions govern your access to and use of AlphaXAU Miner, its website, and related services. By accessing or using our services, you agree to be bound by these Terms.
      </p>

      <section>
        <h2 className="text-xl text-white mb-2">Subscriptions</h2>
        <p>
          Access is provided on a paid subscription basis. Fees are billed in advance and are non-refundable except where required by law. You are responsible for maintaining a valid payment method.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Use of Service</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>You must comply with all applicable laws and broker terms.</li>
          <li>You must not misuse the product, attempt to reverse engineer, or share access credentials.</li>
          <li>We may suspend or terminate access for suspected abuse or security risks.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">No Financial Advice</h2>
        <p>
          AlphaXAU Miner is a trading tool. Nothing in the product or on our site constitutes financial, investment, or trading advice. You are solely responsible for your trading decisions.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Risk Disclosure</h2>
        <p>
          Trading involves substantial risk, including the possible loss of principal. Past performance does not guarantee future results. You use the product at your own risk.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Intellectual Property</h2>
        <p>
          All software, content, branding, and materials are owned by AlphaXAU Trading and protected by intellectual property laws. You receive a limited, non-transferable license to use the product during a valid subscription.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Third-Party Services</h2>
        <p>
          We may integrate with third-party services such as brokers, analytics, or billing providers. Their terms apply in addition to ours.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, AlphaXAU Trading is not liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Changes to the Service</h2>
        <p>
          We may modify or discontinue features with or without notice to improve stability, security, and performance.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use after changes constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl text-white mb-2">Contact</h2>
        <p>
          For questions about these Terms, contact <span className="text-[#E0A130]">legal@alphaxau.example</span>.
        </p>
      </section>
    </LegalLayout>
  );
}
