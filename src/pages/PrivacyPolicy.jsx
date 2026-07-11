import SectionIntro from '@components/SectionIntro';
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { cn } from "@lib/utils";
import { AiFillMail } from "react-icons/ai";
import Footer from "@components/Footer";
import { GoHome } from '@components/GoTo';


dayjs.extend(advancedFormat);

const PrivacyArticle = ({ className, title, children }) => (
  <article className={cn("flex gap-4 flex-col",className)}>
    <h2 className="privacy-title">{ title }</h2>
    { children }
  </article>
)

const _lastUpdate = new Date('2026-07-10');
const lastUpdate = dayjs(_lastUpdate).format('dddd, Do MMMM YYYY');


export default function PrivacyPolicy () {  
  return (
    <main id="privacy-page">
      <GoHome />

      <section id="privacy">
        <SectionIntro title="Privacy Policy" direction="reverse" />

        <p>
          <span className="font-bold text-lg">Last Update:</span> {lastUpdate}
        </p>

        <PrivacyArticle title="Introduction">
          <p>
            <span className='block mb-3'>Thank you for visiting my portfolio.</span>
            Your privacy is important to me. This Privacy Policy explains what information may be collected when you use this website, how it is used, and the choices you have regarding your information.
          </p>
        </PrivacyArticle>

        <PrivacyArticle className="collected_info" title="Information I Collect">
          <h3>Personal Information</h3>
          <p>
            I do not collect your personal information unless you choose to contact me. When you submit the contact form, I may collect the following information:
          </p>

          <ul>
            <li>👉 Your name</li>
            <li>👉 Your email address</li>
          </ul>

          <p>
            You only provide this information voluntarily when you choose to contact me.
          </p>

          <h3>Non-Personal Information</h3>
          <p>
            I do not automatically collect non-personal information such as IP address, browser data and usage data.
          </p>
        </PrivacyArticle>

        <PrivacyArticle title="How Your Information is Used">
          <p>
            The information you provide is used solely to:
          </p>

          <ul>
            <li>👉 Respond to your inquiries or messages.</li>
            <li>
              👉 Communicate with you regarding projects, collaborations, or opportunities you have contacted me about.
            </li>
            <li>👉 Maintain communication if further discussion is necessary.</li>
          </ul>

          <p>
            Your information is not sold, rented, or shared with third parties for marketing purposes.
          </p>
        </PrivacyArticle>

        <PrivacyArticle title="Data Storage">
          <p>
            Reasonable measures are taken to protect the information you submit. However, no method of transmitting or storing data over the internet is completely secure, and absolute security cannot be guaranteed.
          </p>
        </PrivacyArticle>

        <PrivacyArticle title="Data Retention">
          <p>
            I retain the information you provide only as long as necessary to respond to your inquiries. Once the information is no longer needed, it is securely deleted. 
          </p>
        </PrivacyArticle>

        <PrivacyArticle title="Third-Party Services">
          <p>
            This website may use third-party services to help operate certain features, such as hosting, email delivery, analytics, or form handling. These services may process your information only as necessary to provide their functionality.
          </p>
        </PrivacyArticle>

        <PrivacyArticle title="Cookies">
          <p>
            This website may use essential cookies or similar technologies required for the website to function properly.
            If analytics are added in the future, additional cookies may be used to understand website traffic and improve the user experience.
          </p>
        </PrivacyArticle>

        <PrivacyArticle title="Your Rights">
          <p>
            Depending on your location and applicable privacy laws, you may have the right to:
          </p>

          <ul>
            <li>👉 Request access to the personal information you have provided.</li>
            <li>👉 Request correction of inaccurate information.</li>
            <li>👉 Request deletion of your personal information.</li>
            <li>👉 Withdraw your consent where applicable.</li>
          </ul>

          <p>
            To make any of these requests, please contact me using the email address below.
          </p>
        </PrivacyArticle>

        <PrivacyArticle title="Changes to This Privacy Policy">
          <p>
            This Privacy Policy may be updated from time to time due to changes in the website or other relevant reasons. Any changes will be posted on this page with an updated revision date.
          </p>
        </PrivacyArticle>

        <PrivacyArticle className="privacy_contact" title="Contact">
          <p>
            If you have any questions about this Privacy Policy or how your information is handled, please contact me through:
          </p>

          <span>
            <a href="mailto:alex.enquiries236@gmail.com">
              <AiFillMail className="inline size-5.5 mr-1.5" />
              alex.enquiries236@gmail.com
            </a>
          </span>
        </PrivacyArticle>
        
      </section>

      <Footer />
    </main>
  );
}