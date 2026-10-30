import React from 'react';
import { LegalPage, type LegalSection } from '../../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
    {
        title: 'PUBLISHER',
        content: `This website is published by Chimene Studio, an independent video game and software studio run by an individual.

Publication director: J. Grace M. Moussoni

Contact: chimene.info@gmail.com

As the publisher is an individual, the postal address is not published on this website. The publisher's identification details have been provided to the hosting provider named below.`,
    },
    {
        title: 'HOSTING',
        content: `The website is hosted by Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, United States.

Website: netlify.com`,
    },
    {
        title: 'INTELLECTUAL PROPERTY',
        content: `All content on this website, including texts, graphics, logos, game visuals, screenshots, videos and the design and source code of the site, is the property of Chimene Studio unless stated otherwise, and is protected by intellectual property law.

Any reproduction, representation, modification or distribution, in whole or in part, is prohibited without prior written permission.

The titles, logos, characters and universes of Chimene Studio's productions, including Classic Bibe and Orion PDF, are protected by copyright.`,
    },
    {
        title: 'THIRD-PARTY TRADEMARKS',
        content: `References to third-party names and brands (such as Steam, Google Play, the Microsoft Store and YouTube) are made for information purposes only. These brands belong to their respective owners, and their use on this site does not imply any endorsement.`,
    },
    {
        title: 'PERSONAL DATA',
        content: `How personal data is handled is described in the website Privacy Policy. In short, this website has no accounts, no advertising and no analytics tools.

Our desktop applications, such as Orion PDF, run locally on your device, as described in their own privacy policy. Platforms such as Steam, Google Play and the Microsoft Store are governed by their own privacy policies.

To exercise your data protection rights, write to chimene.info@gmail.com.`,
    },
    {
        title: 'LIABILITY',
        content: `Chimene Studio does its best to keep the information on this website accurate and up to date, but cannot guarantee that it is free of errors or that the website will always be available.

To the extent permitted by law, Chimene Studio cannot be held responsible for direct or indirect damage resulting from the use of this website.`,
    },
    {
        title: 'EXTERNAL LINKS',
        content: `This website contains links to external sites. Chimene Studio has no control over their content and accepts no responsibility for it.`,
    },
    {
        title: 'CONTACT',
        content: `Chimene Studio

Email: chimene.info@gmail.com`,
    },
];

export const LegalNotice: React.FC = () => (
    <LegalPage
        path="/legal-notice"
        eyebrow="Legal"
        title="Legal Notice"
        updated="October 30, 2026"
        description="Legal notice of the Chimene Studio website: publisher, hosting, intellectual property and liability."
        sections={SECTIONS}
        related={[
            { label: 'Website privacy policy', to: '/privacy' },
            { label: 'Orion PDF privacy policy', to: '/orion-pdf/privacy' },
        ]}
    />
);
