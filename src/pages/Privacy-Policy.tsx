import { useState } from 'react';
import { FileText, ChevronDown, ChevronUp, Shield, AlertCircle, CheckCircle, Mail, Gamepad2, Sparkles } from 'lucide-react';

const PrivacyPolicy = () => {
    const [expandedSection, setExpandedSection] = useState<number | null>(null);

    const toggleSection = (index: number) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    const sections = [
        {
            title: "1. ACCEPTANCE OF TERMS",
            icon: CheckCircle,
            content: `By downloading, installing, or using the Classic Bibe mobile application (hereinafter "the Application"), you agree to be bound by these Terms of Use (hereinafter "Terms"). If you do not agree to these Terms, please do not use the Application.

The Application is operated by Chimene Studio (hereinafter "we", "our", "us"). By using the Application, you acknowledge that you have read, understood, and accepted these Terms as well as our Privacy Policy.`
        },
        {
            title: "2. LICENSE OF USE",
            icon: FileText,
            content: `2.1 Grant of License
Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, and revocable license to download, install, and use the Application for personal and non-commercial purposes.

2.2 Restrictions
You agree not to:
• Copy, modify, distribute, or create derivative works of the Application
• Reverse engineer, decompile, or disassemble the Application
• Remove or alter any intellectual property notice
• Use the Application in any illegal or unauthorized manner
• Use bots, scripts, or any other automated means to access the Application
• Attempt to disrupt or alter the normal operation of the Application`
        },
        {
            title: "3. USER ACCOUNT AND GOOGLE PLAY SERVICES",
            icon: Gamepad2,
            content: `3.1 Google Play Games Login
The Application uses Google Play Games Services for leaderboards and multiplayer features. By using these features, you also agree to the Google Play Games terms of use.

3.2 Account Responsibility
You are responsible for maintaining the security of your Google Play Games account and for all activities that occur under your account.

3.3 Leaderboards and Multiplayer
Leaderboard and multiplayer game data are public. Do not share sensitive personal information through these features.`
        },
        {
            title: "4. CONTENT AND INTELLECTUAL PROPERTY",
            icon: Shield,
            content: `4.1 Ownership Rights
The Application, including all its content (graphics, text, sounds, music, code, etc.), is the exclusive property of Chimene Studio and is protected by intellectual property laws.

4.2 Trademarks
All brand names, logos, and service marks displayed in the Application are the property of their respective owners.

4.3 User Content
If you submit content through the Application (comments, scores, etc.), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content.`
        },
        {
            title: "5. ADS AND IN-APP PURCHASES",
            icon: Sparkles,
            content: `5.1 Rewarded Ads
The Application offers optional rewarded ads via Unity Ads. Watching these ads is entirely voluntary and allows you to earn in-game rewards.

5.2 Rewards
Rewards obtained by watching ads have no monetary value and cannot be exchanged for real money.

5.3 Third-Party Services
Ads are provided by Unity Ads, which has its own terms of use and privacy policy.`
        },
        {
            title: "6. DATA COLLECTION AND USE",
            icon: Shield,
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

For more information, see our full Privacy Policy.`
        },
        {
            title: "7. USER CONDUCT",
            icon: AlertCircle,
            content: `7.1 Acceptable Behavior
By using the Application, you agree to:
• Comply with all applicable laws and regulations
• Respect other users
• Not cheat, hack, or use exploits
• Not impersonate others
• Not harass, threaten, or intimidate other users

7.2 Sanctions
We reserve the right to suspend or terminate your access to the Application in case of violation of these Terms, without notice or liability.`
        },
        {
            title: "8. PROTECTION OF MINORS",
            icon: Shield,
            content: `8.1 Minimum Age
The Application may be used by children, but we do not knowingly collect personal data from children under 13 without verifiable parental consent.

8.2 Parental Consent
If you are a parent or guardian and discover that your child has provided us with personal information without your consent, please contact us.

8.3 Data Deletion
If we learn that we have collected personal information from a child under 13 without parental consent verification, we will take steps to delete such information.`
        },
        {
            title: "9. AVAILABILITY AND CHANGES",
            icon: FileText,
            content: `9.1 Service Availability
We strive to keep the Application available, but we do not guarantee that it will always be accessible, uninterrupted, or error-free.

9.2 Changes to the Application
We reserve the right to modify, suspend, or discontinue all or part of the Application at any time, with or without notice.

9.3 Updates
We may release updates to the Application. You may need to accept updates to continue using the Application.`
        },
        {
            title: "10. LIMITATION OF LIABILITY",
            icon: AlertCircle,
            content: `10.1 Disclaimer of Warranties
THE APPLICATION IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.

10.2 Limitation of Damages
TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUE.

10.3 Jurisdiction
Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability. In such cases, our liability will be limited to the maximum extent permitted by law.`
        },
        {
            title: "11. TERMINATION",
            icon: AlertCircle,
            content: `11.1 Termination by You
You may stop using the Application at any time by uninstalling it from your device.

11.2 Termination by Us
We may terminate or suspend your access to the Application immediately, without notice or liability, for any reason, including violation of these Terms.

11.3 Effects of Termination
Upon termination, your right to use the Application will immediately cease. Provisions that by their nature should survive termination will survive.`
        },
        {
            title: "12. CHANGES TO THE TERMS",
            icon: FileText,
            content: `12.1 Right to Modify
We reserve the right to modify these Terms at any time. Changes will take effect upon their publication in the Application.

12.2 Notification
We will inform you of any significant changes by a notification in the Application or by any other reasonable means.

12.3 Acceptance of Changes
Your continued use of the Application after the publication of changes constitutes your acceptance of the new Terms.`
        },
        {
            title: "13. GENERAL PROVISIONS",
            icon: Shield,
            content: `13.1 Entire Agreement
These Terms constitute the entire agreement between you and Chimene Studio regarding the use of the Application.

13.2 Severability
If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will remain in full force and effect.

13.3 Waiver
Our failure to exercise any right or provision of these Terms does not constitute a waiver of that right or provision.

13.4 Assignment
You may not assign or transfer these Terms without our prior written consent. We may assign these Terms without restriction.`
        },
        {
            title: "14. CONTACT",
            icon: Mail,
            content: `If you have any questions regarding these Terms of Use, please contact us:

Email: chimene.info@gmail.com
Studio: Chimene Studio

We strive to respond to all requests within a reasonable time.`
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="relative bg-gradient-to-br from-purple-900/50 via-black to-cyan-900/50 border-b border-white/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <div className="flex items-center justify-center mb-6">
                        <div className="relative">
                            <FileText className="w-16 h-16 sm:w-20 sm:h-20 text-purple-500" />
                            <Sparkles className="w-6 h-6 text-cyan-400 absolute -top-1 -right-1 animate-pulse" />
                        </div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Terms of Use
            </span>
                    </h1>
                    <p className="text-center text-gray-400 text-lg mb-4">Classic Bibe - Chimene Studio</p>
                    <p className="text-center text-sm text-gray-500">Last updated: September 9, 2025</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

                {/* Introduction */}
                <div className="mb-12 p-6 sm:p-8 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/30">
                    <div className="flex items-start gap-4 mb-4">
                        <AlertCircle className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Important</h2>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                                Please read these Terms of Use carefully before using the Classic Bibe application.
                                By using the application, you agree to be bound by these terms. If you do not accept these
                                terms, please do not use the application.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Accordion Sections */}
                <div className="space-y-4">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleSection(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <section.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-base sm:text-lg text-white">{section.title}</h3>
                                </div>
                                {expandedSection === index ? (
                                    <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${
                                    expandedSection === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-6 text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line border-t border-white/5 pt-4">
                                    {section.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Notice */}
                <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl border border-cyan-500/30">
                    <div className="flex items-start gap-4">
                        <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Consent</h3>
                            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                                By using the Classic Bibe application, you acknowledge that you have read, understood, and accepted these
                                Terms of Use as well as our Privacy Policy.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <a
                                    href="mailto:chimene.info@gmail.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 justify-center"
                                >
                                    <Mail className="w-4 h-4" />
                                    Contact us
                                </a>
                                <a
                                    href="/"
                                    className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 rounded-full font-bold text-sm hover:bg-cyan-500/20 transition-all duration-300 justify-center"
                                >
                                    <Gamepad2 className="w-4 h-4" />
                                    Back to Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PrivacyPolicy;