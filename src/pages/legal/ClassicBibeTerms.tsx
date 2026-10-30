import React from 'react';
import { LegalPage, type LegalSection } from '../../components/legal/LegalPage';

// Contenu repris tel quel de l'ancienne page (mise en forme uniquement modifiée).
const SECTIONS: LegalSection[] = [
    {
        title: "ACCEPTANCE OF TERMS",
        content: `By downloading, installing, or using the Classic Bibe mobile application (hereinafter "the Application"), you agree to be bound by these Terms of Use (hereinafter "Terms"). If you do not agree to these Terms, please do not use the Application.

The Application is operated by Chimene Studio (hereinafter "we", "our", "us"). By using the Application, you acknowledge that you have read, understood, and accepted these Terms as well as our Privacy Policy.`,
    },
    {
        title: "LICENSE OF USE",
        content: `2.1 Grant of License
Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to download, install, and use the Application for personal and non-commercial purposes.

2.2 Restrictions
You agree not to:
• Copy, modify, distribute, or create derivative works of the Application
• Reverse engineer, decompile, or disassemble the Application
• Remove or alter any intellectual property notice
• Use the Application in any illegal or unauthorized manner
• Use bots, scripts, or any other automated means to access the Application
• Attempt to disrupt or alter the normal operation of the Application`,
    },
    {
        title: "USER ACCOUNT AND GOOGLE PLAY SERVICES",
        content: `3.1 Google Play Games Login
The Application uses Google Play Games Services for leaderboards and multiplayer features. By using these features, you also agree to the Google Play Games terms of use.

3.2 Account Responsibility
You are responsible for maintaining the security of your Google Play Games account and for all activities that occur under your account.

3.3 Leaderboards and Multiplayer
Leaderboard and multiplayer game data are public. Do not share sensitive personal information through these features.`,
    },
    {
        title: "CONTENT AND INTELLECTUAL PROPERTY",
        content: `4.1 Ownership Rights
The Application, including all its content (graphics, text, sounds, music, code, etc.), is the exclusive property of Chimene Studio and is protected by intellectual property laws.

4.2 Trademarks
All brand names, logos, and service marks displayed in the Application are the property of their respective owners.

4.3 User Content
If you submit content through the Application (comments, scores, etc.), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.`,
    },
    {
        title: "ADS AND IN-APP PURCHASES",
        content: `5.1 Rewarded Ads
The Application offers optional rewarded ads via Unity Ads. Watching these ads is entirely voluntary and allows you to earn in-game rewards.

5.2 Rewards
Rewards obtained by watching ads have no monetary value and cannot be exchanged for real money.

5.3 Third-Party Services
Ads are provided by Unity Ads, which has its own terms of use and privacy policy.`,
    },
    {
        title: "DATA COLLECTION AND USE",
        content: `6.1 Data Collected
We collect the following types of data:
• Google Play Games identifiers (for leaderboards and multiplayer)
• Device information (for technical optimization)
• Usage and analytics data (via Unity Analytics and Google Analytics)
• Advertising data (via Unity Ads)

6.2 Use of Data
This data is used to:
• Maintain and display global leaderboards
• Enable multiplayer features
• Improve Application performance
• Provide technical support
• Display relevant ads
• Analyze game usage

For more information, see our full Privacy Policy.`,
    },
    {
        title: "USER CONDUCT",
        content: `7.1 Acceptable Behavior
By using the Application, you agree to:
• Comply with all applicable laws and regulations
• Respect other users
• Not cheat, hack, or use exploits
• Not impersonate others
• Not harass, threaten, or intimidate other users

7.2 Sanctions
We reserve the right to suspend or terminate your access to the Application in case of violation of these Terms, without notice or liability.`,
    },
    {
        title: "PROTECTION OF MINORS",
        content: `8.1 Minimum Age
The Application may be used by children, but we do not knowingly collect personal data from children under 13 without verifiable parental consent.

8.2 Parental Consent
If you are a parent or guardian and discover that your child has provided us with personal information without your consent, please contact us.

8.3 Data Deletion
If we learn that we have collected personal information from a child under 13 without parental consent verification, we will take steps to delete such information.`,
    },
    {
        title: "AVAILABILITY AND CHANGES",
        content: `9.1 Service Availability
We strive to keep the Application available, but we do not guarantee that it will always be accessible, uninterrupted, or error-free.

9.2 Changes to the Application
We reserve the right to modify, suspend, or discontinue all or part of the Application at any time, with or without notice.

9.3 Updates
We may release updates to the Application. You may need to accept updates to continue using the Application.`,
    },
    {
        title: "LIMITATION OF LIABILITY",
        content: `10.1 Disclaimer of Warranties
THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

10.2 Limitation of Damages
TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE.

10.3 Jurisdiction
Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such cases, our liability will be limited to the maximum extent permitted by law.`,
    },
    {
        title: "TERMINATION",
        content: `11.1 Termination by You
You may stop using the Application at any time by uninstalling it from your device.

11.2 Termination by Us
We may terminate or suspend your access to the Application immediately, without notice or liability, for any reason, including violation of these Terms.

11.3 Effects of Termination
Upon termination, your right to use the Application will immediately cease. Provisions that by their nature should survive termination will survive.`,
    },
    {
        title: "CHANGES TO THE TERMS",
        content: `12.1 Right to Modify
We reserve the right to modify these Terms at any time. Changes will take effect upon their publication in the Application.

12.2 Notification
We will inform you of any significant changes by a notification in the Application or by any other reasonable means.

12.3 Acceptance of Changes
Your continued use of the Application after the publication of changes constitutes your acceptance of the new Terms.`,
    },
    {
        title: "GENERAL PROVISIONS",
        content: `13.1 Entire Agreement
These Terms constitute the entire agreement between you and Chimene Studio regarding the use of the Application.

13.2 Severability
If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.

13.3 Waiver
Our failure to exercise any right or provision of these Terms does not constitute a waiver of that right or provision.

13.4 Assignment
You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.`,
    },
    {
        title: "CONTACT",
        content: `If you have any questions regarding these Terms of Use, please contact us:

Email: chimene.info@gmail.com
Studio: Chimene Studio

We strive to respond to all requests within a reasonable time.`,
    },
];

export const ClassicBibeTerms: React.FC = () => (
    <LegalPage
        path="/classicbibe/privacy"
        eyebrow="Classic Bibe"
        title="Terms of Use"
        updated="September 9, 2025"
        description="Terms of Use and data practices of the Classic Bibe mobile application by Chimene Studio."
        intro="Please read these Terms of Use carefully before using the Classic Bibe application. By using the application, you agree to be bound by these terms. If you do not accept these terms, please do not use the application."
        sections={SECTIONS}
        related={[
            { label: 'Website privacy policy', to: '/privacy' },
            { label: 'Orion PDF privacy policy', to: '/orion-pdf/privacy' },
        ]}
    />
);
