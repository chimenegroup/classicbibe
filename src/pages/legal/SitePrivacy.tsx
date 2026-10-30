import React from 'react';
import { LegalPage, type LegalSection } from '../../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
    {
        title: 'OVERVIEW',
        content: `In short: this website has no user accounts, no forms, no advertising and no analytics tools. We do not use cookies to track you, so there is no cookie banner.

The site only presents our games and software. This policy explains what happens to your data when you visit it, when you contact us, and when you follow links to other platforms.`,
    },
    {
        title: 'HOSTING AND TECHNICAL DATA',
        content: `The website is hosted by Netlify, Inc. Like any web host, Netlify may process technical data such as your IP address, browser type and the pages requested in its server logs, in order to deliver the site and keep it secure. This processing is governed by Netlify's own privacy policy.

The fonts used by the site are served from the site itself, not from Google Fonts or any other third party.`,
    },
    {
        title: 'CONTACTING US',
        content: `If you write to us at chimene.info@gmail.com, your email address and the content of your message are used only to reply to your request. They are never sold, rented or shared with third parties for commercial purposes. We keep the conversation only as long as needed to handle your request.

Email is handled by Google (Gmail), whose privacy policy applies to the transport and storage of messages.`,
    },
    {
        title: 'THIRD-PARTY PLATFORMS AND LINKS',
        content: `Our pages link to external platforms such as Steam, Google Play, the Microsoft Store, YouTube and X. When you follow these links you leave this site and become subject to the privacy policies of those platforms. Chimene Studio has no access to the payment details or personal information that Steam, Google or Microsoft collect from you.

The Classic Bibe trailer is hosted on YouTube. The video player is loaded only when you press play, and it uses YouTube's privacy-enhanced mode (youtube-nocookie.com). Until then, no data is sent to YouTube.`,
    },
    {
        title: 'OUR GAMES AND APPS',
        content: `Orion PDF runs entirely on your device. Your files and personal data are never sent to us. Details are in the Orion PDF privacy policy.

Classic Bibe has its own Terms of Use, which describe the data handled by the mobile application (such as Google Play Games identifiers, analytics and advertising data).`,
    },
    {
        title: 'YOUR RIGHTS',
        content: `Depending on where you live (for example under the GDPR in the European Union), you may have the right to access, correct or delete the personal data you have sent us, to object to its use, or to ask for a copy of it.

To exercise these rights, write to chimene.info@gmail.com. You may also lodge a complaint with your local data protection authority.`,
    },
    {
        title: 'CHILDREN',
        content: `This website does not knowingly collect personal data from anyone, including children. For information about children and our games, see the Classic Bibe Terms of Use.`,
    },
    {
        title: 'CHANGES TO THIS POLICY',
        content: `We may update this policy as the site evolves, for example if we add analytics or a contact form. The date at the top of this page shows the latest revision.`,
    },
    {
        title: 'CONTACT',
        content: `Chimene Studio

Email: chimene.info@gmail.com`,
    },
];

export const SitePrivacy: React.FC = () => (
    <LegalPage
        path="/privacy"
        eyebrow="Legal"
        title="Privacy Policy"
        updated="October 30, 2026"
        description="How the Chimene Studio website handles your data: no accounts, no tracking, no advertising."
        sections={SECTIONS}
        related={[
            { label: 'Legal notice', to: '/legal-notice' },
            { label: 'Orion PDF privacy policy', to: '/orion-pdf/privacy' },
            { label: 'Classic Bibe Terms of Use', to: '/classicbibe/privacy' },
        ]}
    />
);
