import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import SectionIntro from '@components/SectionIntro';
import { cn } from "@lib/utils";
import { AiFillMail } from "react-icons/ai";
import Footer from "@components/Footer";
import { GoHome } from "@components/GoTo";


dayjs.extend(advancedFormat);

const LegalArticle = ({ className, title, children }) => (
  <article className={cn("flex gap-4 flex-col",className)}>
    <h2 className="legal-title">{ title }</h2>
    { children }
  </article>
)

const lastUpdate = dayjs('2026-07-10').format('dddd, Do MMMM YYYY');


export default function LegalNotice () {  
  return (
    <main id="legal-page">
      <GoHome />

      <section id="legal">
        <SectionIntro title="Legal Notice" direction="reverse" />

        <p>
          <span className="font-bold text-lg">Last Update:</span> {lastUpdate}
        </p>

        <LegalArticle title="Website Owner">
          <p>
            This website is owned and operated by
            <b className="text-primary"> Alex Kimari</b>.
          </p>
          <p>
            This portfolio is intended to showcase my professional experience, projects, technical skills, and provide a way for potential employers, clients, and collaborators to contact me.
          </p>
        </LegalArticle>

        <LegalArticle title="Intellectual Property">
          <p>
            Unless otherwise stated, all original content on this website, including but not limited to:
          </p>

          <ul>
            <li>👉 Source code created for this website</li>
            <li>👉 Text and written content</li>
            <li>👉 Graphics and illustrations</li>
            <li>👉 Portfolio projects</li>
            <li>👉 Logos and branding created for this portfolio</li>
          </ul>

          <p>
            is the intellectual property of the website owner and is protected by applicable copyright and intellectual property laws.
          </p>

          <p>
            You may not copy, reproduce, modify, distribute, or republish any content from this website without prior written permission, except where permitted by law.
          </p>
        </LegalArticle>

        <LegalArticle title="Third-Party Content">
          <p>
            Some content, technologies, libraries, icons, fonts, images, or trademarks displayed on this website may belong to their respective owners. Such materials remain the property of their respective copyright or trademark holders and are used in accordance with their applicable licenses.
          </p>
        </LegalArticle>

        <LegalArticle title="Accuracy of Information">
          <p>
            While reasonable efforts are made to keep the information on this website accurate and up to date, no guarantee is made regarding the completeness, accuracy, or reliability of any information presented.
          </p>

          <p>The content of this website is provided for general informational and portfolio purposes only.</p>
        </LegalArticle>

        <LegalArticle title="External Links">
          <p>
            This website may contain links to third-party websites. These links are provided for convenience only. I am not responsible for the content, privacy practices, security, or availability of any external websites.
          </p>
        </LegalArticle>

        <LegalArticle title="Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, I shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website or its content.
          </p>
        </LegalArticle>

        <LegalArticle title="Governing Law">
          <p>
            This Legal Notice shall be governed by and interpreted in accordance with the laws applicable in the jurisdiction in which the website owner resides, unless otherwise required by applicable law.
          </p>

          <p>
            By using this site, you agree that any disputes arising from its use shall be governed by the laws of Kenya, where the owner resides.
          </p>
        </LegalArticle>

        <LegalArticle className="legal_contact" title="Contact">
          <p>
            If you have any questions regarding this Legal Notice, please contact me using:
          </p>

          <span>
            <a href="mailto:alex.enquiries236@gmail.com">
              <AiFillMail className="inline size-5.5 mr-1.5" />
              alex.enquiries236@gmail.com
            </a>
          </span>
        </LegalArticle>
        
      </section>

      <Footer />
    </main>
  );
}