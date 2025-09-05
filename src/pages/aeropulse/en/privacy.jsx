import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import styles from '@/styles/Privacy.module.css';
import Head from 'next/head';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Header />

      <div className={styles.page}>
        <h1>Privacy Policy for Aeropulse App</h1>

        <p><strong>Effective Date:</strong> September 5, 2025</p>
        <p>
          At Azart Technologies FZCO ("we," "us," "our," or the "Company"), we are dedicated to safeguarding the privacy and confidentiality of your personal information. This privacy policy explains how we collect, use, share, and protect your personal data when you interact with our services, including our website <a href="https://azarties.com" target="_blank" rel="noopener noreferrer">https://azarties.com</a>, and any associated applications or services.
        </p>

        <h2>1. Data We Collect</h2>
        <p>When you interact with our services, we may collect the following types of information:</p>
        <ul>
          <li>
            <strong>Personal Data You Provide:</strong> This includes information you provide when creating an account, contacting support, or entering into a contract with us. Examples include:
            <ul>
              <li>Full name, email address, phone number, and other contact details.</li>
              <li>Identity document details (e.g., for KYC verification), tax identification numbers, and social security numbers where required by law or contract.</li>
              <li>Payment information, such as bank account details or billing address.</li>
              <li>Professional information, such as your job title, work history, and education.</li>
              <li>Contents of your communications with us.</li>
            </ul>
          </li>
          <li>
            <strong>Data Collected Automatically:</strong> When you use our website, we may automatically collect certain information, including:
            <ul>
              <li>Device Information: Such as your IP address, browser type, operating system, and device identifiers.</li>
              <li>Usage Data: Information about how you interact with our website (e.g., pages visited, features used, time spent).</li>
              <li>Cookies and Similar Technologies: We use cookies and similar trackers to collect data for analytics, functionality, and marketing purposes. For more details, please see our Cookie Policy below.</li>
            </ul>
          </li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the data we collect for the following purposes:</p>
        <ul>
          <li>To Provide and Maintain Our Services: To create and manage your account, fulfill our contractual obligations, process payments, and provide customer support.</li>
          <li>To Improve and Personalize Your Experience: To analyze usage trends, diagnose technical issues, and develop new features and services tailored to user preferences.</li>
          <li>For Communication: To send you important administrative messages, service updates, and security alerts. With your consent, we may also send you marketing and promotional communications.</li>
          <li>For Security and Fraud Prevention: To protect our services, users, and business from malicious activity and to ensure compliance with our terms and conditions.</li>
          <li>To Comply with Legal Obligations: To meet tax, regulatory, and other legal reporting requirements.</li>
        </ul>

        <h2>3. Legal Basis for Processing (For EEA/UK Users)</h2>
        <p>If you are located in the European Economic Area (EEA) or the UK, we process your personal data on the following legal grounds:</p>
        <ul>
          <li>Consent: Where you have given us clear consent (e.g., for marketing cookies or promotional emails).</li>
          <li>Contract Performance: To fulfill a contract we have with you (e.g., providing services you have requested).</li>
          <li>Legitimate Interests: For our legitimate business interests, such as improving our services, security, and marketing, provided your fundamental rights are not overridden.</li>
          <li>Legal Obligation: To comply with a legal or regulatory requirement.</li>
        </ul>

        <h2>4. How We Share Your Information</h2>
        <p>We may share your personal data with:</p>
        <ul>
          <li>Service Providers: Trusted third-party vendors who perform services on our behalf (e.g., cloud hosting, payment processing, analytics, customer support). These partners are contractually bound to handle your data securely and only for the purposes we specify.</li>
          <li>Professional Advisors: Such as lawyers, bankers, auditors, and insurers where necessary for our business operations.</li>
          <li>Legal and Regulatory Authorities: When required to do so by law, or to protect our rights, privacy, safety, or property, or that of others.</li>
          <li>Business Transferees: In connection with a merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
        </ul>

        <h2>5. International Data Transfers</h2>
        <p>
          Your personal information may be transferred to, stored, and processed in countries other than your country of residence, including the United Arab Emirates (UAE), where our parent company is located. These countries may have data protection laws that differ from those in your country.
        </p>
        <p>
          We ensure that all such transfers are conducted in compliance with applicable data protection laws. We rely on adequacy decisions or implement appropriate safeguards, such as Standard Contractual Clauses approved by relevant authorities, to protect your data.
        </p>

        <h2>6. Data Security</h2>
        <p>
          We implement robust technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, secure server infrastructure, and regular security auditing. While we strive to use commercially acceptable means to protect your data, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2>7. Data Retention</h2>
        <p>
          We will retain your personal data only for as long as is necessary for the purposes set out in this Policy, including to fulfill legal, accounting, or reporting requirements. Retention periods are determined based on the nature of the data and the purpose for its collection. For example, we may retain financial transaction data for up to 7 years for tax compliance purposes.
        </p>

        <h2>8. Your Data Protection Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul>
          <li>Access: The right to request a copy of the personal data we hold about you.</li>
          <li>Rectification: The right to correct inaccurate or incomplete data.</li>
          <li>Erasure ("Right to be Forgotten"): The right to request the deletion of your data.</li>
          <li>Restriction of Processing: The right to request we temporarily stop processing your data.</li>
          <li>Data Portability: The right to receive your data in a structured, machine-readable format.</li>
          <li>Objection: The right to object to processing based on our legitimate interests.</li>
          <li>Withdraw Consent: Where we rely on consent, you have the right to withdraw it at any time.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the details in the "Contact Us" section below.
        </p>

        <h2>9. Cookies and Similar Technologies</h2>
        <p>
          Our website uses cookies and similar technologies to enhance user experience, analyze site traffic, and for advertising purposes.
        </p>
        <ul>
          <li>
            Types of Cookies We Use:
            <ul>
              <li>Essential: Necessary for the website to function properly.</li>
              <li>Analytical/Performance: Help us understand how visitors interact with our website.</li>
              <li>Functional: Enable enhanced functionality and personalization.</li>
              <li>Targeting: Used to deliver ads relevant to you and to track campaign performance.</li>
            </ul>
          </li>
          <li>
            Managing Your Preferences: You can manage your cookie preferences at any time through your browser settings. Please note that disabling certain cookies may affect the functionality of the website.
          </li>
        </ul>

        <h2>10. Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Effective Date" at the top. We encourage you to review this policy periodically.
        </p>

        <h2>11. Contact Us</h2>
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact our Data Protection team at:
        </p>
        <p>Email: <a href="mailto:intouch@azarties.com">intouch@azarties.com</a></p>
        <p>Address: Azart Technologies FZCO, Dubai Silicon Oasis, DDP, Building A2, Dubai, UAE. IFZA Business Park, Premises number 23963.</p>
      </div>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;
