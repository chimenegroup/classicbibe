import React from 'react';
import { LegalPage, type LegalSection } from '../../components/legal/LegalPage';

const SECTIONS: LegalSection[] = [
    {
        title: '100% LOCAL COMMITMENT',
        content: `Orion PDF is designed with privacy by design in mind.

• Your PDF documents stay on your device. No PDF file, text content, image or document imported into Orion PDF is transferred, uploaded or stored on external servers.
• No account required. Using the application does not require creating an account or sending any identification information.`,
    },
    {
        title: 'DATA COLLECTION AND STORAGE',
        content: `2.1 Data stored locally
To provide organisation features (tags, categories, favourites, preferences), Orion PDF uses a SQLite database stored locally on your computer.

This data includes your display preferences, your custom tags and the local paths of your recent files.

Control: this data stays strictly on your machine and is deleted if you uninstall the application or reset its local data.

2.2 Telemetry and statistics
Orion PDF does not collect any tracking, behavioural analytics or telemetry data in the background.

Note: if you download the application from the Microsoft Store, Microsoft may collect installation statistics or anonymous crash reports in accordance with the Microsoft Privacy Statement.`,
    },
    {
        title: 'SYSTEM PERMISSIONS',
        content: `To work properly, Orion PDF requests access to certain features of your operating system:

• File system access: required only to let you open, read, merge, split and save your PDF documents at the locations you choose.
• File dialogs: used to select your files and destination folders.

The application does not access any file other than the documents you explicitly choose to open or process.`,
    },
    {
        title: 'DATA SHARING AND DISCLOSURE',
        content: `Because we neither collect nor store any personal data on external servers, we do not sell, rent or share any of your data with third parties or advertising networks.`,
    },
    {
        title: 'YOUR RIGHTS AND CONTROL',
        content: `You keep full control over your data at all times:

• You can delete saved history or preferences directly from the application.
• You can delete the entire local database by uninstalling the application or by deleting the associated application data folder on your system.`,
    },
    {
        title: 'CHANGES TO THIS POLICY',
        content: `We may update this privacy policy to reflect changes to the application. The "Last updated" date at the top of this document will be changed accordingly.`,
    },
    {
        title: 'CONTACT',
        content: `If you have any questions about this privacy policy or about how Orion PDF works, you can contact us:

Development team: Chimene Studio

Support: chimene.info@gmail.com`,
    },
];

export const OrionPrivacy: React.FC = () => (
    <LegalPage
        path="/orion-pdf/privacy"
        eyebrow="Orion PDF"
        title="Privacy Policy"
        updated="September 2026"
        description="Orion PDF runs 100% locally: your documents never leave your device and no telemetry is collected."
        intro="Protecting your privacy and personal data is a priority for Orion PDF. This policy explains how your data is handled when you use the Orion PDF desktop application."
        sections={SECTIONS}
        related={[
            { label: 'Website privacy policy', to: '/privacy' },
            { label: 'Classic Bibe Terms of Use', to: '/classicbibe/privacy' },
        ]}
    />
);
