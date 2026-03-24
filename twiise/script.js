// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Apply to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.8s ease-out";
    observer.observe(section);
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Policy modal data and controls
const policyData = {
    terms: {
        title: 'TERMS OF SERVICE: TWIISE',
        body: `
            <p class="text-slate-400">Last Updated: March 23, 2026</p>
            <p>These Terms of Service (“Terms”) constitute a legally binding agreement between Twiise (“the Agency,” “we,” “us,” or “our”) and the person or entity engaging our services (“the Client,” “you,” or “your”). By accepting a quote, signing a Service Level Agreement (SLA), or utilizing our services, you agree to be bound by these Terms.</p>
            <h4 class="mt-4 font-semibold text-white">1. SERVICES AND SCOPE</h4>
            <p>1.1 Service Categories: Twiise provides custom software development, cloud hosting, and software maintenance services.</p>
            <p>1.2 Project Specifications: The specific deliverables, timelines, and technical requirements for any project will be detailed in a written Quote or Statement of Work (SOW).</p>
            <p>1.3 Change Requests: Any requests to modify the scope of a project after work has commenced must be submitted in writing. We reserve the right to adjust timelines and fees to accommodate these changes.</p>
            <h4 class="mt-4 font-semibold text-white">2. FEES, BILLING, AND PAYMENT</h4>
            <p>2.1 Currency: All fees are quoted and payable in South African Rand (ZAR) unless otherwise specified.</p>
            <p>2.2 Payment Schedule: Development Projects: Typically require a 50% upfront deposit, with the remaining balance due upon milestone completion or before final deployment.</p>
            <p>Recurring Services: Hosting and maintenance fees are billed monthly in advance.</p>
            <p>2.3 Late Payments: Payments not received within 7 days of the invoice due date may result in a suspension of services, including the suspension of hosted environments.</p>
            <p>2.4 Taxes: Prices are subject to Value Added Tax (VAT) where applicable under South African law.</p>
            <h4 class="mt-4 font-semibold text-white">3. INTELLECTUAL PROPERTY (IP) RIGHTS</h4>
            <p>3.1 Client IP: Upon receipt of full and final payment, Twiise assigns to the Client all right, title, and interest in the custom source code and assets created specifically for the Client’s project.</p>
            <p>3.2 Agency IP: Twiise retains ownership of all "Background IP," including pre-existing code libraries, proprietary frameworks, and tools used to develop the software. The Client is granted a non-exclusive, perpetual license to use these elements solely as integrated into the final product.</p>
            <p>3.3 Third-Party Assets: Use of third-party plugins, APIs, or stock media is subject to the respective third-party licenses. The Client is responsible for any ongoing licensing costs for these assets.</p>
            <h4 class="mt-4 font-semibold text-white">4. HOSTING AND MAINTENANCE</h4>
            <p>4.1 Uptime: Twiise utilizes reputable third-party data centers. While we aim for maximum availability, we do not guarantee 100% uptime and are not liable for outages caused by third-party infrastructure providers.</p>
            <p>4.2 Backups: We perform regular backups for hosted clients; however, the Client is encouraged to maintain independent copies of critical data.</p>
            <p>4.3 Maintenance Scope: Software maintenance includes security patches and bug fixes for the current production version. It does not include the development of new features or support for third-party software updates that break existing functionality.</p>
            <h4 class="mt-4 font-semibold text-white">5. CLIENT OBLIGATIONS</h4>
            <p>5.1 Feedback and Approvals: The Client agrees to provide necessary information, assets, and feedback within a reasonable timeframe (typically 3–5 business days). Delays in feedback will result in an automatic extension of project deadlines.</p>
            <p>5.2 Access: The Client must provide necessary access to third-party accounts (e.g., Domain Registrars, Apple/Google Play Developer accounts) required for deployment.</p>
            <h4 class="mt-4 font-semibold text-white">6. DATA PROTECTION AND POPIA</h4>
            <p>6.1 Operator Role: In terms of the Protection of Personal Information Act (POPIA), Twiise acts as an "Operator" when processing personal information on behalf of the Client (the "Responsible Party").</p>
            <p>6.2 Security: We implement industry-standard technical and organizational measures to protect data; however, the Client remains responsible for the legal basis upon which they collect user data.</p>
            <h4 class="mt-4 font-semibold text-white">7. WARRANTIES AND LIMITATION OF LIABILITY</h4>
            <p>7.1 Limited Warranty: Twiise warrants that the software will perform substantially as described in the SOW for a period of 30 days post-deployment.</p>
            <p>7.2 Limitation of Liability: To the maximum extent permitted by South African law, Twiise shall not be liable for any indirect, incidental, or consequential damages (including loss of profits or data) arising from the use or inability to use our services. Our total liability is limited to the amount paid by the Client for the specific service in question during the preceding 6 months.</p>
            <h4 class="mt-4 font-semibold text-white">8. TERMINATION</h4>
            <p>8.1 For Convenience: Either party may terminate recurring services (hosting/maintenance) by providing 30 days' written notice.</p>
            <p>8.2 For Breach: Either party may terminate this agreement immediately if the other party materially breaches these Terms and fails to cure such breach within 14 days of notice.</p>
            <p>8.3 Post-Termination: Upon termination, the Client must pay for all work completed to date. Twiise will provide a transition export of data and code, provided all accounts are settled.</p>
            <h4 class="mt-4 font-semibold text-white">9. DISPUTE RESOLUTION</h4>
            <p>9.1 Negotiation: In the event of a dispute, the parties agree to first attempt to resolve the matter through good-faith negotiation.</p>
            <p>9.2 Jurisdiction: These Terms are governed by the laws of the Republic of South Africa. Any legal proceedings shall be conducted in the courts of the district where Twiise is registered.</p>
            <h4 class="mt-4 font-semibold text-white">10. GENERAL PROVISIONS</h4>
            <p>10.1 Force Majeure: Twiise is not liable for delays caused by events beyond our control, including "load shedding," internet infrastructure failures, or acts of God.</p>
            <p>10.2 Entire Agreement: This document, alongside any signed Quotes or SLAs, constitutes the entire agreement between the parties.</p>
        `
    },
    cancellation: {
        title: 'CANCELLATION POLICY: TWIISE',
        body: `
            <p class="text-slate-400">Last Updated: March 23, 2026</p>
            <p>At Twiise, we allocate dedicated engineering time and server resources to every client. This policy outlines the rights and obligations of both parties when a service is terminated.</p>
            <h4 class="mt-4 font-semibold text-white">1. PROJECT-BASED DEVELOPMENT (Bespoke Software)</h4>
            <p>1.1 Notice of Cancellation: The Client may cancel a development project at any stage by providing written notice to Twiise.</p>
            <p>1.2 Liability for Work Completed: Upon cancellation, the Client is liable for payment for all work performed up to the date the notice is received.</p>
            <p>1.3 Deposit Forfeiture: As bespoke software is considered a "special order" under the CPA, initial deposits are non-refundable once discovery or development has commenced.</p>
            <h4 class="mt-4 font-semibold text-white">2. RECURRING SERVICES (Hosting & Maintenance)</h4>
            <p>2.1 Notice Period: In accordance with Section 14 of the CPA, the Client may cancel a fixed-term agreement at any time by providing 20 business days' written notice.</p>
            <p>2.2 Month-to-Month Services: For services billed on a month-to-month basis, a 30-day notice period is required before the next billing cycle.</p>
            <p>2.3 Final Billing: If a cancellation notice is received mid-month, the service will remain active until the end of the notice period, and the Client will be billed for that final period. No pro-rata refunds are issued for partially used months.</p>
            <h4 class="mt-4 font-semibold text-white">3. STATUTORY COOLING-OFF PERIODS</h4>
            <p>3.1 Direct Marketing (CPA): If you entered into an agreement with Twiise as a result of direct marketing, you have a 5-business-day cooling-off period to cancel the agreement without reason or penalty.</p>
            <p>3.2 Electronic Transactions (ECTA): For transactions concluded purely via electronic means, a 7-day cooling-off period applies from the date the agreement was concluded, provided work has not yet commenced with your consent.</p>
            <h4 class="mt-4 font-semibold text-white">4. AGENCY-INITIATED CANCELLATION</h4>
            <p>4.1 Non-Payment: If an invoice remains unpaid for more than 14 days past the due date.</p>
            <p>4.2 Client "Ghosting": If a project is delayed by more than 30 days due to lack of feedback, Twiise may cancel the project and require a "Restart Fee" to resume work.</p>
            <p>4.3 Breach of Terms: If the Client utilizes Twiise resources for illegal activities or breaches the Terms of Service.</p>
            <h4 class="mt-4 font-semibold text-white">5. REASONABLE CANCELLATION FEES</h4>
            <p>Fees depend on work completed, remaining term, and re-allocation costs.</p>
            <h4 class="mt-4 font-semibold text-white">6. HANDOVER AND DATA PORTABILITY</h4>
            <p>Upon cancellation and invoice settlement, Twiise provides any custom source code or assets the client is entitled to and, for hosting clients, a database export and file backup.</p>
        `
    },
    refund: {
        title: 'REFUND POLICY: TWIISE',
        body: `
            <p class="text-slate-400">Last Updated: March 23, 2026</p>
            <p>At Twiise, we pride ourselves on delivering high-quality, bespoke software solutions. Because our services involve significant manual labor, intellectual property creation, and non-recoverable resource allocation, we operate under a strict refund framework.</p>
            <h4 class="mt-4 font-semibold text-white">1. CUSTOM SOFTWARE DEVELOPMENT</h4>
            <p>1.1 Deposits: Initial deposits (typically 50%) are non-refundable once work has commenced.</p>
            <p>1.2 Milestone Payments: Once a milestone is reviewed and approved by the Client, the associated payment is final and non-refundable.</p>
            <p>1.3 Work-in-Progress: If a project is cancelled mid-milestone, the Client is entitled to a refund only for the portion of the unearned fee that has not yet been supported by labor hours.</p>
            <p>1.4 Post-Deployment: No refunds will be issued once the software has been deployed to production or handed over to Client.</p>
            <h4 class="mt-4 font-semibold text-white">2. RECURRING SERVICES (HOSTING & MAINTENANCE)</h4>
            <p>2.1 Monthly Subscriptions: No pro-rata refunds mid-month.</p>
            <p>2.2 Annual Plans: Partial refund for remaining full months minus a 15% administration fee.</p>
            <p>2.3 Third-Party Costs: Non-refundable.</p>
            <h4 class="mt-4 font-semibold text-white">3. STATUTORY COOLING-OFF PERIODS</h4>
            <p>3.1 ECTA: 7-day refund eligibility if services haven't started by consent.</p>
            <p>3.2 CPA: 5-business-day cooling-off for direct marketing agreements.</p>
            <h4 class="mt-4 font-semibold text-white">4. TECHNICAL DEFECTS AND BUGS</h4>
            <p>Fix-first approach; refunds only if core functionality can't be delivered after reasonable effort.</p>
            <h4 class="mt-4 font-semibold text-white">5. REFUND PROCESSING</h4>
            <p>Requests in writing, evaluated from logs/hours; approved refunds via EFT in 14 business days.</p>
            <h4 class="mt-4 font-semibold text-white">6. EXCLUSIONS</h4>
            <p>No refunds for changed minds after completion, missing client assets/feedback, incompatibility from unspecified third parties, or force majeure events.</p>
        `
    }
};

const modal = document.getElementById('policy-modal');
const modalTitle = document.getElementById('policy-modal-title');
const modalBody = document.getElementById('policy-modal-body');
const closeButton = document.getElementById('policy-modal-close');

function openPolicy(policyKey) {
    const policy = policyData[policyKey];
    if (!policy) return;
    modalTitle.textContent = policy.title;
    modalBody.innerHTML = policy.body;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
}

function closePolicy() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
}

document.querySelectorAll('.policy-button').forEach(btn => {
    btn.addEventListener('click', () => {
        const policyKey = btn.getAttribute('data-policy');
        openPolicy(policyKey);
    });
});

closeButton.addEventListener('click', closePolicy);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closePolicy();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closePolicy();
    }
});

