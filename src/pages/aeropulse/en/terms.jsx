import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import styles from '@/styles/Privacy.module.css';
import Head from 'next/head';

const TermsOfUsePage = () => {
  return (
    <>
      <Head>
        <title>Terms of Use</title>
      </Head>
      <Header />

      <div className={styles.page}>
        <h1>TERMS OF USE</h1>

        <p>
          This Agreement regulates the relations between individuals, visitors, and users
          (hereinafter referred to as the User) of the Aerocare mobile application
          (hereinafter referred to as the Application), and also concerns all information
          posted in the Application and provided by the User during its use, including
          services, products, and services.
        </p>
        <p>
          By starting to use the application’s functionality, the User confirms that:
        </p>
        <p>1. he has read the terms of this Agreement;</p>
        <p>
          2. accepts all its provisions without any exceptions and undertakes to comply
          with them.
        </p>
        <p>
          If the User does not agree with any of the terms of the Agreement, he must
          immediately stop using the Application.
        </p>

        <h2>1. General Provisions</h2>
        <p>
          1.1. The Application is the intellectual property of Azart Technologies FZCO,
          Dubai (hereinafter referred to as Azart). All materials, including text, graphic,
          audio, video, and photo content (hereinafter referred to as Content), posted in the
          Application, belong to Azart or third parties who have granted Azart the right to
          use them.
        </p>
        <p>
          1.2. Travel and personal trip services provided through the Application are
          provided by LLC "AEROPULSE" (legal address: 614002, Perm Region, Perm,
          Belyaeva St., 31, apt./office 464, TIN: 5904410183, OGRN 1245900005438,
          registration date: 21.03.2024).
        </p>
        <p>
          1.3. Use of the Application and its Content is allowed only within the framework
          of the functionality provided and on the terms set forth in this Agreement.
        </p>
        <p>
          1.4. The User may use elements of the Application and Content for personal
          non-commercial purposes, provided that a link to the Application and its
          owner is provided, as well as retention of all copyrights, trademarks, and other
          notices of authorship.
        </p>
        <p>1.5. The following terms are used in the Agreement:</p>
        <p>
          • "Aerocare" service — a digital platform owned by Azart. Includes a mobile
          application for iOS, Android, and HarmonyOS, available in the App Store,
          Google Play, and AppGallery.
        </p>
        <p>
          • Personal account — a section of the Service created upon registration
          by the Customer and accessible after authorization (login and password),
          intended for placing Orders.
        </p>
        <p>
          • Customer — a legal entity or individual entrepreneur who has entered
          into an agreement with LLC "AEROPULSE" for booking services.
        </p>
        <p>
          • User — an individual using the functionality of the Application, including
          employees of the Customer.
        </p>
        <p>
          • Administrator — a User authorized by the Customer to manage the
          Personal Account and perform actions on its behalf.
        </p>

        <h2>2. User Rights and Obligations</h2>
        <p>
          2.1. Azart grants the User a limited, non-exclusive, free license to use the
          Application and Content for the following purposes:
        </p>
        <p>
          • Reproduction on the User's device for access to the Application's
          functionality.
        </p>
        <p>
          2.2. Any other use of the Application or Content is prohibited, including
          copying, distribution, commercial use, modification, or creation of derivative
          materials.
        </p>
        <p>The User undertakes not to use the Application for:</p>
        <p>• Illegal activities;</p>
        <p>
          • Violation of the rights of third parties, including insults, threats, or invasion
          of privacy;
        </p>
        <p>• Alteration, hacking, or malicious actions concerning the Application;</p>
        <p>• Monitoring or unauthorized copying of Content.</p>
        <p>
          2.4. Azart reserves the right to restrict the User's access to the Application at
          any time without explanation.
        </p>
        <p>
          2.5. The User's rights are determined by the settings of their account,
          including the volume of available functions.
        </p>
        <p>2.6. The Administrator has the right to:</p>
        <p>
          • Manage the accounts of other Users (add, edit, block);
        </p>
        <p>• Place and modify bookings;</p>
        <p>• Assign access rights to other Users.</p>

        <h2>3. Terms of Use</h2>
        <p>
          3.1. By using the Application, the User agrees to receive newsletters,
          promotional materials, and other information from Azart and its partners.
        </p>
        <p>
          3.2. The User agrees to the processing of their personal data
          (more details at the link: LINK).
        </p>
        <p>
          3.3. Azart has the right to analyze User activity to prevent fraud.
        </p>
        <p>
          3.4. Azart may inform Users in any way, using the contact details
          provided.
        </p>

        <h2>4. Application Content</h2>
        <p>
          4.1. By submitting materials for placement in the Application, the User
          agrees to their free use by Azart, including editing and distribution.
        </p>
        <p>The User guarantees that the provided materials:</p>
        <p>• Do not violate the rights of third parties;</p>
        <p>• Comply with the law and the terms of the Agreement;</p>
        <p>• Do not contain malicious software;</p>
        <p>• Are unique and not spam.</p>
        <p>4.3. Azart reserves the right to refuse the publication of materials without
          explanation.
        </p>

        <h2>5. Limitation of Liability</h2>
        <p>
          5.1. The Application is provided "as is". Azart does not guarantee
          its uninterrupted operation or compliance with User expectations.
        </p>
        <p>
          5.2. Azart is not liable for any damages arising from the use
          of the Application.
        </p>
        <p>
          5.3. Azart does not control third-party sites accessible through
          links in the Application.
        </p>

        <h2>6. Final Provisions</h2>
        <p>
          6.1. Since the use of the Application is free, consumer protection laws
          do not apply.
        </p>
        <p>
          6.2. Azart may change the Agreement without notice. The new version
          takes effect after publication on the website: <a href="https://aeropulse.ru" target="_blank"
                                                            rel="noopener noreferrer">https://aeropulse.ru</a>. Continuing to use
          the Application implies acceptance of the changes.
        </p>
        <p>
          6.3. Inquiries and claims should be sent to the email:
          <a href="mailto:intouch@azarties.com">intouch@azarties.com</a>. Azart will review them within 30 days
          unless otherwise stipulated by law.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default TermsOfUsePage;
