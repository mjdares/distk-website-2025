# Distk.in Blog Topic Pipeline

> **Status (1 Oct 2026):** PUBLISHED: A (TRAI, #357-364), C (ChatGPT Ads, #365-370), D (agentic commerce, #371-375), B (WhatsApp, #376-383). IN PROGRESS: E, F, H (Google). Corrections: WhatsApp Cloud API changelog lives at developers.facebook.com/docs/whatsapp/cloud-api/changelog (the row #2 URL is dead); row #12 allowlist cap is disputed between sources (15 vs 500) and moot after Open Beta, so it was omitted. Correction applied to the TRAI complaint-trigger summary after the writer checked it against the press release.
**Research date:** 30 September 2026
**Sources:** Official primary sources only (vendor docs, developer changelogs, product help centres, Indian regulator PDFs). Every fact below was fetched and read during research; no secondary or SEO-blog sources were used.
**Dedupe baseline:** all 355 existing slugs in `tools/_existing_slugs.txt` were read before proposing anything.

---

## 1. What is actually moving right now

Three things are moving hard enough to build clusters around. First, **India's spam and consent regime just changed**: TRAI notified the Telecom Commercial Communication Customer Preference (Third Amendment) Regulations on 18 September 2026, which changes the trigger for action against a sender to 3 or more unique complaints in ten days AND an AI/ML flag on the sender's CLI (both conditions, replacing a standalone 5-complaint threshold; a separate rule triggers investigation when five or more of a sender's numbers are flagged in ten days), defines and regulates A2P (robo/auto-dialled) calls for the first time, caps inquiry-based commercial messaging at seven days, and imposes a one-year disconnection plus blacklisting for telemarketer header misuse. Almost no marketing publisher has written this up in operational terms, and every Indian brand running SMS, calls or DLT headers is affected. Second, **WhatsApp Business Platform pricing changes on 1 October 2026**: service messages stop being free beyond the monthly tier for ordinary businesses (only eligible governments and non-profits keep that through 31 December 2027), reactions become the sole always-free service message type, the marketing-message max-price feature enters Open Beta the same day, and a new account model is mid-rollout to all businesses by mid-October. That is a live deadline with money attached. Third, **the measurement and ad-buying surfaces for AI search have quietly shipped real APIs and reports**: Google added a multimodal search-type filter to Search Console on 24 September 2026 (Lens, Circle to Search, image upload, Chrome "Search this image"), generative-AI performance reports in June, and platform properties for Instagram, TikTok, X and YouTube in July; OpenAI now publishes a complete Ads API (campaigns, bidding, targeting, Measurement Pixel, Conversions API, bulk) and the Agentic Commerce Protocol specs for product feeds, agentic checkout and delegated payment. Those are buyer-intent topics that sit exactly where Distk sells, and coverage is thin because they live in developer docs rather than blog posts.

---

## 2. Ranked topic table

| Rank | Working title | Suggested slug | Primary keyword | Intent | Audience | Why it can rank now | Official sources | Card category | Est. words |
|---|---|---|---|---|---|---|---|---|---|
| 1 | TRAI's New Spam Rules in 2026: What the TCCCPR Third Amendment Changes for Indian Marketers | `trai-tcccpr-third-amendment-2026` | trai new spam rules 2026 | informational / compliance | Indian brands, agencies, anyone sending SMS or calls | Notified 18 Sep 2026. The 3-complaint trigger, 7-day inquiry window and A2P pre-declaration are operational rules nobody has written up in marketing language. Zero existing coverage on our site. | https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf , https://www.trai.gov.in/notifications/press-release | Compliance | 2600 |
| 2 | WhatsApp Service Messages Stop Being Free on 1 October 2026: What It Costs You | `whatsapp-service-message-pricing-october-2026` | whatsapp service message pricing 2026 | transactional / commercial | D2C brands, e-commerce, anyone on WhatsApp Business Platform | Hard deadline 1 Oct 2026, exemption window runs to 31 Dec 2027. The 1,000-free-per-number tier and the reaction-message carve-out are exact, checkable and unwritten. | https://developers.facebook.com/docs/whatsapp/business-platform/changelog | WhatsApp Marketing | 2200 |
| 3 | The 7-Day Rule: How TRAI's Inquiry Window Changes Indian Lead Follow-Up in 2026 | `trai-seven-day-inquiry-window-lead-followup-2026` | trai 7 day inquiry rule | informational / compliance | Lead-gen teams, real estate, edtech, insurance, e-commerce | A single regulation sentence that rewrites follow-up cadence for every Indian lead-gen operation, plus the written/verifiable-record requirement. Nobody has isolated it. | https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf | Compliance | 2000 |
| 4 | A2P Calls Are Now Regulated in India: Pre-Declaration, Termination Charges and What Counts as Spam | `a2p-calls-india-trai-rules-2026` | a2p calls india rules 2026 | informational / compliance | Call-centre led businesses, IVR users, sales teams, SaaS with dialers | First time TRAI defines A2P (autodial, robo, pre-recorded, artificial voice). Undeclared A2P is now UCC by default, and there is a per-minute termination charge. Genuinely new category. | https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf | Compliance | 2200 |
| 5 | Search Console Now Reports Multimodal Search: What Lens and Circle to Search Traffic Means | `search-console-multimodal-search-reporting-2026` | search console multimodal search report | informational | SEO leads, e-commerce, anyone with visual products | Shipped 24 September 2026, six days before this research. Rolling out globally. Named surfaces (Lens, Circle to Search, image upload, Chrome right-click) make it concrete. | https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc | SEO / AI Search | 2200 |
| 6 | How to Get Your Products Into ChatGPT: The Agentic Commerce Protocol Product Feed, Explained | `chatgpt-product-feed-agentic-commerce-protocol-2026` | chatgpt product feed | commercial / how-to | D2C, e-commerce, marketplace sellers | The actual spec: API vs SFTP file upload, promotions API-only, approved-partner gate at chatgpt.com/merchants. Our existing agentic-commerce post is strategy, not the spec. | https://developers.openai.com/commerce/guides/get-started.md , https://developers.openai.com/commerce/llms.txt | AI / Commerce | 2400 |
| 7 | The ChatGPT Ads API in 2026: Campaign Structure, Bidding and What You Actually Control | `chatgpt-ads-api-campaign-bidding-guide-2026` | chatgpt ads api | commercial / how-to | Performance marketers, agencies | Full official Ads API now documented (objectives, Fixed bid vs Maximize Results, daily vs lifetime budgets, paused-on-create). Our existing ChatGPT Ads post is the "what is it" angle, not the mechanics. | https://developers.openai.com/ads/bidding-and-budgets.md , https://developers.openai.com/ads/llms.txt | AI / Advertising | 2400 |
| 8 | DLT Header and Template Misuse in 2026: The Six-Hour Suspension and the One-Year Blacklist | `dlt-header-template-misuse-rules-2026` | dlt header misuse rules | informational / compliance | Anyone with registered DLT headers, telemarketers, agencies | Two hard numbers nobody has published for marketers: suspension within six hours of awareness, and one-year disconnection plus blacklisting across all TSPs for telemarketers. | https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf | Compliance | 2000 |
| 9 | Claude Sonnet 5.5 in 2026: Same Price, Far Fewer Tokens | `claude-sonnet-5-5-marketing-guide-2026` | claude sonnet 5.5 | informational / commercial | Founders, marketing and dev teams | Announced 28 September 2026. Terminal-Bench 4.0 of 70.6% beats Opus 5.5's 66.4% at a fifth of the price tier, and GDPval-AA is two points off Opus 5.5. Our pricing hub needs the row anyway. | https://www.anthropic.com/claude-sonnet-5-5 , https://www.anthropic.com/news | AI Models | 2400 |
| 10 | Search Console Platform Properties: Tracking Instagram, TikTok, X and YouTube in Google Search | `search-console-platform-properties-social-2026` | search console platform properties | informational / how-to | Social media managers, creators, brand teams | Launched 7 July 2026, still barely covered. Four named platforms, a verification flow, and an Achievements report keyed to 28-day click thresholds. | https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms , https://developers.google.com/search/blog/2026/07/platform-properties-social-video-guide | Social Media | 2200 |
| 11 | WhatsApp's New Business Account Model: What Changes Before Mid-October 2026 | `whatsapp-new-business-account-model-2026` | whatsapp business account model change | informational / technical | Anyone with a WABA, agencies managing client numbers | Phase 1 from 23 Sep 2026, all businesses by mid-October. The reassurance that existing IDs, endpoints and tokens keep working is the fact clients will ask about first. | https://developers.facebook.com/docs/whatsapp/business-platform/changelog | WhatsApp Marketing | 2000 |
| 12 | Set a Max Price for WhatsApp Marketing Messages: The Open Beta Starting 1 October 2026 | `whatsapp-marketing-message-max-price-2026` | whatsapp max price marketing messages | commercial / how-to | D2C and retail brands running WhatsApp campaigns | Open Beta opens 1 Oct 2026. The bid_amount-per-1,000-deliveries plus per_message_bid_multiplier mechanic is a real cost lever and is documented nowhere outside the changelog. | https://developers.facebook.com/docs/whatsapp/business-platform/changelog | WhatsApp Marketing | 2000 |
| 13 | Google's Generative AI Performance Reports: Measuring AI Overviews and AI Mode Visibility | `search-console-generative-ai-reports-guide-2026` | search console generative ai report | informational / how-to | SEO and GEO buyers, marketing leads | The only first-party way to measure AI Overviews and AI Mode impressions. Metric list and hourly granularity are specific; subset rollout explains why many readers cannot see it yet. | https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports | AEO / GEO | 2200 |
| 14 | The ChatGPT Measurement Pixel and Conversions API: Attribution for AI Ads in 2026 | `chatgpt-measurement-pixel-conversions-api-2026` | chatgpt measurement pixel | commercial / how-to | Performance marketers, analytics owners | Conversion setup, event sources and conversion-optimised campaigns that pay per click are all documented officially and nowhere else. Direct upsell path for Distk tracking work. | https://developers.openai.com/ads/conversion-tracking.md , https://developers.openai.com/ads/api-reference/conversion-setup.md | Analytics | 2200 |
| 15 | Legacy Consent Is Now Recognised in India, With Conditions | `trai-legacy-consent-digitisation-2026` | trai legacy consent rules | informational / compliance | CRM owners, D2C, BFSI marketers | The amendment recognises pre-existing consents only if obtained verifiably and registered on the TSP digital platform. That is a database project most brands have not scoped. | https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf | CRM | 2000 |
| 16 | Agentic Checkout in 2026: What Merchants Have to Implement | `agentic-checkout-spec-merchant-guide-2026` | agentic checkout spec | commercial / technical | E-commerce ops, D2C tech leads | The checkout spec and the delegated payment spec are public and precise. Our existing UCP post covers Google's protocol, not OpenAI's. | https://developers.openai.com/commerce/specs/checkout.md , https://developers.openai.com/commerce/specs/payment.md | AI / Commerce | 2400 |
| 17 | Call Management Apps Can No Longer Blanket-Block 140xx and 1600xx Calls | `call-management-apps-spam-tagging-rules-2026` | 1600 number series spam tagging | informational | Brands using regulated calling series, BFSI, utilities | New prohibition on blanket blocking or spam-tagging designated series, plus the rule that CMA spam reports must flow to the DLT platform. Nobody covers the brand-side implication. | https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf | Compliance | 1800 |
| 18 | WhatsApp Landing Page View Events: Attribution for Marketing Message Clicks | `whatsapp-landing-page-view-webhook-2026` | whatsapp landing_page_view webhook | technical / how-to | Growth engineers, marketing ops | Added 23 Sep 2026. A webhook that closes the loop between a marketing message and a landing page view, which is exactly the attribution gap WhatsApp campaigns have. | https://developers.facebook.com/docs/whatsapp/business-platform/changelog | WhatsApp Automation | 1800 |
| 19 | Google's Site Reputation Policy Update: What Changed in August 2026 | `google-site-reputation-policy-update-2026` | site reputation abuse policy 2026 | informational | Publishers, content leads, agencies running guest content | Policy tightened 28 Aug 2026. Anyone selling or buying placements on trusted domains needs the current wording, not the 2024 version. | https://developers.google.com/search/blog/2026/08/update-site-reputation-policy | SEO | 2000 |
| 20 | Back Button Hijacking Is Now an Explicit Google Spam Violation | `back-button-hijacking-google-spam-policy-2026` | back button hijacking google penalty | informational | Web teams, CRO practitioners, landing page builders | Explicit malicious-practices violation since 13 Apr 2026. Several CRO "engagement" tactics now carry spam risk, and CRO blogs have not caught up. | https://developers.google.com/search/blog/2026/04/back-button-hijacking | CRO | 1800 |
| 21 | Sender Classification: Why TRAI Will Treat Your Brand Differently From a Bank | `trai-sender-classification-categories-2026` | trai sender classification | informational / compliance | Enterprise marketers, BFSI, healthcare, utilities | New power to classify senders by criticality, economic importance and scale, with differentiated enforcement. Changes the risk calculus per sector and is unwritten. | https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf | Compliance | 1800 |
| 22 | OpenAI Ads Targeting in 2026: Geography, Platform, Audience and Context Hints | `chatgpt-ads-targeting-guide-2026` | chatgpt ads targeting | commercial / how-to | Media buyers, agencies | "Context hints" is a targeting primitive that does not exist on Meta or Google. Documented officially, covered nowhere. | https://developers.openai.com/ads/campaign-targeting.md | AI / Advertising | 2000 |
| 23 | ChatGPT Product Feed Requirements: The Fields That Decide Whether You Get Shown | `chatgpt-product-feed-field-requirements-2026` | chatgpt product feed requirements | commercial / technical | E-commerce catalogue owners | Separate requirements for Ads versus checkout, canonical field names and validation rules. Exactly the kind of spec detail that earns citations. | https://developers.openai.com/commerce/specs/file-upload/products.md , https://developers.openai.com/commerce/specs/api/products.md | Ecommerce | 2200 |
| 24 | WhatsApp Calling Rate Cards Change on 1 October 2026: Nine Markets Move | `whatsapp-calling-rate-cards-october-2026` | whatsapp calling api pricing 2026 | informational / commercial | Brands using WhatsApp calling, support teams | Nine named markets leave "Rest of" regions and become standalone across 16 currencies, while the rates themselves do not change. Precise, dated, and widely misreported as a price rise. | https://developers.facebook.com/docs/whatsapp/business-platform/changelog | WhatsApp Marketing | 1800 |
| 25 | The Consumer Appeal Mechanism for Spam Complaints: What Brands Should Expect | `trai-ucc-complaint-appeal-mechanism-2026` | trai ucc complaint appeal | informational / compliance | Brand compliance owners, customer ops | Consumers get 15 days to appeal a UCC complaint resolution through the DND app, TSP portal or 1909. Changes how long a complaint can stay live against a sender. | https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf | Compliance | 1800 |
| 26 | Migrate to messaging_account_id Before 31 December 2026 | `whatsapp-messaging-account-id-migration-2026` | messaging_account_id whatsapp migration | technical / how-to | Developers, agencies with WhatsApp integrations | Hard deprecation date on a parameter every Cloud API integration touches. Deadline-shaped and trivially verifiable. | https://developers.facebook.com/docs/whatsapp/business-platform/changelog | AI Development | 1600 |
| 27 | WhatsApp Template Category Auto-Updates: Why an Approved Template Can Still Be Reclassified | `whatsapp-template-category-auto-updates-2026` | whatsapp template category change | informational / troubleshooting | D2C, retail, anyone sending templates | Clarified 15 Sep 2026: review approval does not exempt a template from later automatic recategorisation, which is the single most common billing surprise on WhatsApp. | https://developers.facebook.com/docs/whatsapp/business-platform/changelog | WhatsApp Marketing | 1800 |
| 28 | Search Central Live India 2026 in Bengaluru: What Google Is Bringing and Why It Matters | `search-central-live-india-bengaluru-2026` | search central live india 2026 | informational / local | Indian SEO community, Bengaluru marketers | Announced 14 Sep 2026. Distk is Bengaluru-based, so this is a local-relevance and community-authority play with near-zero competition. | https://developers.google.com/search/blog/2026/09/search-central-live-india-2026 | Local SEO | 1600 |
| 29 | Google's February 2026 Discover Core Update: What Changed for Publishers | `google-discover-core-update-february-2026` | google discover core update 2026 | informational | Content and publishing teams | A Discover-specific core update is unusual and under-analysed compared with Search core updates. | https://developers.google.com/search/blog/2026/02/discover-core-update | SEO | 1800 |
| 30 | Bulk Campaign Management in ChatGPT Ads: The Bulk API for Agencies | `chatgpt-ads-bulk-api-agencies-2026` | chatgpt ads bulk api | commercial / technical | Agencies running multiple client accounts | Bulk create and update for campaigns, ad groups and ads, plus partner keys and per-account headers. Agency-operational and undocumented outside the spec. | https://developers.openai.com/ads/bulk-api.md , https://developers.openai.com/ads/api-partner-setup.md | Agency Management | 2000 |
| 31 | Conversion-Optimised ChatGPT Campaigns: Optimising to an Event While Paying Per Click | `chatgpt-conversion-optimized-campaigns-2026` | conversion optimized campaigns chatgpt | commercial / how-to | Performance marketers | The pay-per-click-but-optimise-to-conversion model is an unusual billing shape worth its own explainer. | https://developers.openai.com/ads/conversion-optimized-campaigns.md | Performance Marketing | 2000 |
| 32 | WhatsApp Partner Reassignment: The Readiness Checklist Before You Switch BSP | `whatsapp-partner-reassignment-checklist-2026` | change whatsapp business solution provider | commercial / how-to | Brands unhappy with their current BSP | Added 30 Sep 2026. Switching BSP is a common, painful, high-intent query and Meta has just published a readiness checklist for it. | https://developers.facebook.com/docs/whatsapp/business-platform/changelog | WhatsApp Automation | 2000 |
| 33 | ChatGPT Ads Account Management: Spending Limits, Branding and Account States | `chatgpt-ads-account-management-guide-2026` | chatgpt ads account setup | commercial / how-to | Advertisers new to the platform | Account-wide spending limits and advertiser branding are the practical first-hour questions, answered officially. | https://developers.openai.com/ads/account-management.md , https://developers.openai.com/ads/api-reference/ad-account.md | AI / Advertising | 1800 |
| 34 | Promotions in ChatGPT Shopping: Why They Are API-Only | `chatgpt-shopping-promotions-api-2026` | chatgpt promotions product feed | commercial / technical | E-commerce, D2C running discounts | Promotions cannot be delivered by file upload at all, only via API. That single constraint breaks the common daily-SFTP-feed plan and nobody has flagged it. | https://developers.openai.com/commerce/specs/api/promotions.md , https://developers.openai.com/commerce/guides/get-started.md | Ecommerce | 1800 |
| 35 | Agentic Commerce in Production: OpenAI's Own Launch Checklist | `agentic-commerce-production-checklist-2026` | agentic commerce production checklist | commercial / how-to | E-commerce leads planning an ACP launch | A vendor-published production checklist is a rare, citable artefact and maps directly onto a Distk implementation engagement. | https://developers.openai.com/commerce/guides/production.md , https://developers.openai.com/commerce/guides/best-practices.md | AI / Commerce | 2000 |

---

## 3. Clusters

**Cluster A: India spam and consent compliance (the highest-value, thinnest-competition cluster)**
Hub: #1 `trai-tcccpr-third-amendment-2026`
Spokes: #3 seven-day inquiry window, #4 A2P calls, #8 DLT header misuse, #15 legacy consent, #17 call management apps, #21 sender classification, #25 appeal mechanism.
Why: one regulation, seven distinct search intents, and Distk sells WhatsApp, SMS and lead-gen into exactly this market.

**Cluster B: WhatsApp Business Platform, October 2026 changes**
Hub: #2 `whatsapp-service-message-pricing-october-2026`
Spokes: #11 new account model, #12 max price Open Beta, #18 landing page view webhook, #24 calling rate cards, #26 messaging_account_id deadline, #27 template auto-recategorisation, #32 partner reassignment.
Why: a dated cost change plus a mid-flight platform migration. Deadline content that converts and then ages predictably into reference content.

**Cluster C: ChatGPT Ads (the new ad platform nobody has documented for marketers)**
Hub: #7 `chatgpt-ads-api-campaign-bidding-guide-2026`
Spokes: #14 Measurement Pixel and Conversions API, #22 targeting and context hints, #30 bulk API for agencies, #31 conversion-optimised campaigns, #33 account management.
Why: a complete official API with no third-party guide layer yet. Highest commercial intent in the whole pipeline.

**Cluster D: Agentic commerce and getting products into ChatGPT**
Hub: #6 `chatgpt-product-feed-agentic-commerce-protocol-2026`
Spokes: #16 agentic checkout and delegated payment, #23 feed field requirements, #34 promotions API-only, #35 production checklist.
Why: D2C and e-commerce buyers are actively asking how to appear in AI shopping. Links naturally to our existing UCP and agentic-commerce posts.

**Cluster E: Measuring AI and multimodal search visibility**
Hub: #13 `search-console-generative-ai-reports-guide-2026`
Spokes: #5 multimodal reporting, #10 platform properties.
Why: this is the proof layer under Distk's GEO and AEO service. First-party measurement answers the "how would we even know it worked" objection.

**Cluster F: Google policy and ranking changes 2026**
Hub: #19 `google-site-reputation-policy-update-2026`
Spokes: #20 back button hijacking, #29 February Discover core update.
Why: policy content earns links and holds rankings; it also protects clients from tactics other agencies still sell.

**Cluster G: Model releases (maintenance cluster, keeps the pricing hub current)**
Hub: existing `ai-model-pricing-comparison-september-2026`
Spokes: #9 Claude Sonnet 5.5, plus Claude Haiku 5.5 when it ships (Anthropic says "in the coming weeks").
Why: the hub must be updated on every model post anyway. Sonnet 5.5 is two days old.

**Cluster H: Local and community authority**
Single: #28 Search Central Live India Bengaluru.
Why: Bengaluru relevance, near-zero competition, and it supports the `best-digital-marketing-agency-bengaluru-2026` page already on the site.

---

## 4. Facts worth leading with (top 12 topics)

1. **#1 TRAI threshold drop.** "Action will be triggered against the sender if there are 3 or more unique complaints within a period of ten days and the concerned Sender's CLI is also flagged by the AI/ML-based system as suspected of sending UCC." Previously five complaints. Source: https://www.trai.gov.in/sites/default/files/2026-09/PR_No119of2026.pdf
2. **#2 WhatsApp service messages.** "Starting October 1, 2026 and through December 31, 2027, service messages remain free beyond the monthly free tier only for eligible government and non-profit organizations." And: a reaction message "is the only service message type that continues to not be charged for all businesses as of October 1, 2026, and that reactions do not count toward the 1,000 free monthly service messages per business phone number." Source: https://developers.facebook.com/docs/whatsapp/business-platform/changelog
3. **#3 The seven-day window.** "Commercial communications may be sent to a customer on the basis of an inquiry made by the customer to the sender for goods or products or services, only for a period of seven days from the date of such inquiry." The inquiry "shall be made in writing or through digital means, and shall be maintained in a verifiable form by the Sender." Source: TRAI PR 119/2026.
4. **#4 A2P definition and charge.** A2P calls are "voice calls initiated by an application, software system or automated platform without direct human dialing, including using autodialing, robo-calls and pre-recorded/artificial voice technologies." Every entity using them "must pre-declare such use to its TSP along with the details of CLIs", and "A2P calls made without the required prior declaration will be treated as UCC." A termination charge "of up to 0.05 per minute" applies. Source: TRAI PR 119/2026.
5. **#5 Multimodal reporting scope.** The new Search Console multimodal search type "includes searches with Lens, Circle to Search on Android, image uploads to Google Search, and the Chrome right-click 'Search this image' feature", and "is rolling out globally starting today" (24 September 2026). Source: https://developers.google.com/search/blog/2026/09/web-multimodal-in-sc
6. **#6 Product feed gating and cadence.** "Onboarding product feeds in ChatGPT is currently available to approved partners" via chatgpt.com/merchants. "It is generally recommended to provide the entire feed once a day via file upload, and then send updates throughout the day via the API." And critically: "Promotions data can only be provided via the API." Source: https://developers.openai.com/commerce/guides/get-started.md
7. **#7 Ads bidding and the paused default.** Three strategies: Fixed bid (provide `max_bid_micros`), Maximize clicks, Maximize conversions; the latter two are jointly branded "Maximize Results" and are "available for standard and product-feed campaigns". Also: "New resources are created paused so you can finish setup before enabling delivery." Source: https://developers.openai.com/ads/bidding-and-budgets.md
8. **#8 Six hours and one year.** On header or template misuse "the Originating Access Provider shall suspend the misused Headers or Content Templates, within six hours of becoming aware of such misuse". Where misuse is attributed to a telemarketer, "all its telecom resources across the TSPs will be disconnected for a period of one year, along with blacklisting." Source: TRAI PR 119/2026.
9. **#9 Sonnet 5.5 price and score.** "$2 per million input tokens, $10 per million output tokens, and $0.20 per million tokens for cache reads", identical to Sonnet 5, but "it costs up to 30% less per task". It scores "70.6% on Terminal-Bench 4.0 ... compared to Sonnet 5's 10.3%", which is above Opus 5.5's 66.4%, while GDPval-AA v2.1 is 1844 against Opus 5.5's 1846. Source: https://www.anthropic.com/claude-sonnet-5-5
10. **#10 Platform properties and Achievements.** Four platforms only: "Instagram, TikTok, X, YouTube". The Achievements report tracks milestones "such as reaching a new threshold for total clicks from Google Search in the last 28 days". Source: https://developers.google.com/search/blog/2026/07/search-console-social-video-platforms
11. **#11 Account model rollout window.** "Phase 1 rolls out from September 23, 2026 and reaches all businesses by mid-October 2026." Reassurance worth quoting to clients: "Your existing IDs, endpoints, and access tokens keep working throughout the rollout." Source: WhatsApp changelog.
12. **#12 Max price mechanics.** "The max price feature enters Open Beta on October 1, 2026." Mechanic: "Set a template's `bid_amount` to the highest amount you are willing to pay per 1,000 deliveries, then apply a `per_message_bid_multiplier` of less than 1 to lower the effective max price for individual messages." Solution Partners can allowlist "up to 15 end-businesses", up from 5. Source: WhatsApp changelog.

---

## 5. Rejected

- **Google's May 2026 AI optimization guide**, already the basis of Section 7 of our master template, and referenced across existing GEO posts. Nothing new to say.
- **Gemini 3.x model posts**, we already have 3.1 Pro, 3.5 Flash-Lite, 3.7 Flash, 3.8 Flash and the 3.5 Flash/Pro launch post. No new Gemini release found in this sweep.
- **Claude Opus 5.5**, published two days ago as #348. Sonnet 5.5 is the new one.
- **DPDP Act rules detail**, the MeitY data protection framework page and the rules notification PDF did not resolve to readable text during this sweep. Do not write it until the gazette notification itself can be read; a compliance post on unverified rules is a liability.
- **Meta newsroom (about.fb.com)**, the extraction returned only hardware and Quest navigation, no marketing-relevant 2026 announcements. Retry via facebook.com/business/news before proposing Meta ads topics.
- **Google Ads announcements page**, returns 404 at the documented URL. No verifiable Google Ads product changes captured this sweep, so no Google Ads topics are proposed here despite it being core territory.
- **TRAI PR 120 (Telecom Consumer Protection Thirteenth Amendment)**: voice and SMS special tariff vouchers for low-income consumers. Real and current, but a consumer tariff matter, not a marketing one.
- **TRAI PR 121 (NH-27 drive test)**, network quality on a Gujarat highway. Not our audience.
- **Anthropic Life Sciences Verification Program, Model Hardware Standard, enzyme discovery**, genuinely new, but not a marketing or SME audience.
- **Schema.org releases**, fetched, but nothing in the release notes rose to a standalone marketing topic worth 2,000 words; fold any relevant type changes into future SEO posts instead.
- **ASCI code pages**, fetched, but no dated 2026 amendment surfaced in the extraction. Worth a targeted retry later; influencer-disclosure changes would be a strong India topic if one exists.

---

## 6. Deadline-shaped topics

These have real dates attached and should be published first, in this order:

| Date | What happens | Topic |
|---|---|---|
| **1 October 2026** | Service messages stop being free beyond the monthly tier for ordinary businesses. Exemption for eligible governments and non-profits runs to 31 December 2027. Reactions remain always-free and do not count against the 1,000 free monthly service messages per number. | #2 |
| **1 October 2026** | Marketing-message max price enters Open Beta. | #12 |
| **1 October 2026** | Calling API rate cards take effect across 16 currencies; nine markets become standalone. | #24 |
| **Mid-October 2026** | New WhatsApp Business account model reaches all businesses (Phase 1 began 23 September 2026). | #11 |
| **Notified 18 September 2026 (per-provision commencement dates are NOT stated in Press Release No. 119 of 2026; do not write "in force")** | TRAI TCCCPR Third Amendment: 3-complaint-plus-AI/ML-flag trigger, 7-day inquiry window, A2P pre-declaration, 6-hour template suspension, 1-year telemarketer blacklist. | #1, #3, #4, #8, #15, #17, #21, #25 |
| **31 December 2026** | `messaging_account_id` migration deadline; `paid_messaging_account_id` stops working after. | #26 |
| **31 December 2027** | End of the WhatsApp service-message exemption for eligible governments and non-profits. | #2 |
| **Already passed, 31 July 2026** | `bid_spec` no longer supported for WhatsApp marketing messages; `optimization_spec` required. Worth a line inside #12 rather than its own post. | #12 |
| **Coming weeks** | Claude Haiku 5.5 joins the Claude 5.5 family. Pre-plan the post and the pricing-hub row. | Cluster G |

---

## Publishing notes

- Cluster A and B first: both are live or imminent, both are India-relevant, and both sit on services Distk already sells.
- Cluster C and D next: highest commercial intent, and they position Distk ahead of agencies still treating ChatGPT as a content tool rather than an ad and commerce surface.
- Every TRAI post must state that it summarises the press release and amendment, and point readers to the regulation itself before acting. Compliance content carries a duty of care that model-launch content does not.
- Update `ai-model-pricing-comparison-september-2026` with the Sonnet 5.5 row when #9 ships, per the standing rule.
- Sources re-verified: all URLs in this file were fetched successfully during research on 30 September 2026 except those listed under Rejected.

---

## Round 2 (October 2026)

**Research date:** 1-2 October 2026. **Sources:** official primary sources only, fetched with WebFetch (Jina reader still returns 401 from this machine). **Dedupe baseline:** `tools/_existing_slugs.txt` refreshed to 385 slugs before proposing; none of the slugs below collide.

**Pass 1 written first (ranked table + rejected). Clusters, facts and deadlines follow in pass 2 below.**

### R2.1 What is moving

Four things are new since round one and still thinly covered. **ASCI published binding guidelines on labelling AI-generated ("synthetically generated") content in advertising**, signed 17 September 2026 and taking effect three months after publication, including a rule that paid product recommendations inside AI chatbots must say "Sponsored by [Brand]". **Meta launched paid Meta One plans for businesses** (USD 14.99 to 499 a month) and made Instagram Live video ads generally available from 29 September. **Google shipped a cluster of Ads measurement and Demand Gen changes in September** (Data Manager, data strength uplift, Meridian GeoX GA, AI Max reporting, Business Agent in YouTube ads). **OpenAI's API changelog** adds the GPT-6 Luna budget tier, an Agents API with computer use, Ultrafast for Astra, and a hard 26 February 2027 shutdown for its older transcription models. LinkedIn's Marketing API has two version sunsets landing in the next seven weeks.

### R2.2 Ranked topic table

| Rank | Working title | Suggested slug | Primary keyword | Intent | Audience | Why it can rank now | Official sources | Card category | Est. words |
|---|---|---|---|---|---|---|---|---|---|
| 1 | ASCI's AI Ad Labelling Rules in 2026: What Indian Brands Must Disclose and When | `asci-ai-generated-content-labelling-guidelines-2026` | asci ai generated content guidelines | informational / compliance | Indian brands, agencies, creators | Signed 17 Sep 2026, effective 3 months after publication; no operational marketer guide exists | https://www.ascionline.in/wp-content/uploads/2026/09/Guidelines-for-Responsible-Labelling-of-Synthetically-Generated-Content-in-Advertising.pdf | Compliance | 2,600 |
| 2 | "Sponsored by [Brand]": ASCI's Rule for Paid Recommendations Inside AI Chatbots | `asci-sponsored-ai-chatbot-recommendations-2026` | sponsored ai recommendations label india | informational / compliance | Brands buying AI ads (ChatGPT Ads etc.) | First Indian code to address paid answers in AI assistants; links straight into our ChatGPT Ads cluster | same ASCI PDF | Compliance | 1,900 |
| 3 | Virtual Influencers and AI Likeness in Indian Ads: When Labelling Is Mandatory | `asci-virtual-influencer-ai-likeness-rules-2026` | virtual influencer rules india | informational / compliance | Influencer marketers, D2C | Guideline names "synthetically generated influencers and ambassadors" and consented voice/face replication as mandatory-label cases | same ASCI PDF | Influencer Marketing | 1,900 |
| 4 | Do You Need to Label AI Edits? ASCI's Exemptions for Retouching, Backgrounds and Captions | `asci-ai-ad-label-exemptions-2026` | do i need to label ai in ads india | informational | Creative teams, designers | The "no label required" list (colour correction, ambient music, fantastical effects, accessibility) is the question creative teams will actually search | same ASCI PDF | Compliance | 1,800 |
| 5 | LinkedIn Marketing API Versions 202510 and 202511 Sunset on 15 Oct and 16 Nov 2026 | `linkedin-marketing-api-version-sunset-2026` | linkedin marketing api sunset | technical / deadline | Agencies, martech and CRM integrators | Two hard dates inside seven weeks; only LinkedIn's own changelog states them | https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes | LinkedIn / B2B Social | 1,800 |
| 6 | Meta One Plans for Businesses in 2026: Pricing, Tiers and What You Actually Get | `meta-one-business-plans-pricing-2026` | meta one plans for businesses | commercial | SMBs, D2C, creators | Launched 15 Sep 2026 with four USD price points; Indian pricing not stated, which is itself the useful finding | https://www.facebook.com/business/news/introducing-meta-one-plans-for-businesses | Social Media | 2,000 |
| 7 | Instagram Live Video Ads Are Generally Available: A 2026 Setup Guide | `instagram-live-video-ads-guide-2026` | instagram live video ads | how-to / commercial | Performance and social teams | GA rollout began 29 Sep 2026 for all advertisers; fresh and procedural | https://www.facebook.com/business/news/iab-global-creator-week-making-it-easier-for-businesses-to-partner-with-creators | Performance Marketing | 1,800 |
| 8 | Meta Creator Marketing Hub in 2026: Discovery, Permissions and One-Click Partnership Ads | `meta-creator-marketing-hub-guide-2026` | meta creator marketing hub | how-to | Influencer and brand teams, agencies | Global launch announced 15 Sep 2026 with content-level permissions and expiry dates, plus partnership ads coming to the Meta Ads MCP connector | same Meta IAB URL | Influencer Marketing | 2,000 |
| 9 | Google Ads Data Manager and Data Strength in 2026: The First-Party Data Setup Google Now Scores | `google-ads-data-manager-data-strength-2026` | google ads data strength | how-to / commercial | Performance marketers, analytics leads | New data strength uplift metric and universal Data Manager API (10 Sep 2026); Google-reported uplift figures are specific | https://blog.google/products/ads-commerce/data-strength-updates/ | Marketing Analytics | 2,200 |
| 10 | Google's September 2026 Demand Gen Drop: Business Agent in YouTube Ads, One-Click Shorts and Maps Pins | `google-demand-gen-september-2026-drop` | demand gen updates 2026 | informational / commercial | Performance and YouTube buyers | Published 24 Sep 2026; three features, one with a Google-reported 40% conversion figure | https://blog.google/products/ads-commerce/demand-gen-drop-september-2026/ | PPC | 1,900 |
| 11 | GPT-6 Luna Pricing in 2026: OpenAI's $0.10 Model and What It Is Good For | `gpt-6-luna-pricing-guide-2026` | gpt-6 luna pricing | commercial / informational | Builders of high-volume workflows | Released 22 Sep 2026 at $0.10 / $0.50 per 1M tokens; no business guide yet; feeds the pricing hub | https://developers.openai.com/changelog | AI Models | 1,900 |
| 12 | OpenAI's Transcription Models Shut Down on 26 February 2027: Whisper Migration Guide | `openai-whisper-transcribe-shutdown-2027` | whisper-1 shutdown | technical / deadline | Teams running call analytics, captioning, voice notes | Hard date for whisper-1, gpt-4o-transcribe, gpt-4o-mini-transcribe and gpt-4o-transcribe-diarize | https://developers.openai.com/changelog | AI Development | 1,800 |
| 13 | Meridian GeoX Is Generally Available: Running Geo Experiments to Prove Incrementality in 2026 | `meridian-geox-geo-experiments-guide-2026` | meridian geox | how-to | Analytics and marketing-mix teams | GeoX moved from beta to GA globally; causal geo-experiment content is scarce | https://blog.google/products/ads-commerce/data-strength-updates/ | Marketing Analytics | 1,900 |
| 14 | AI Max for Search in 2026: AI Brief in Seven New Languages and Unified Journey Reporting | `google-ai-max-ai-brief-reporting-2026` | ai max for search reporting | informational | Search advertisers | Published 23 Sep 2026; reporting availability "later this year" is the honest framing | https://blog.google/products/ads-commerce/ai-max-language-reporting-features/ | PPC | 1,700 |
| 15 | LinkedIn Conversions API in 2026: 180-Day Attribution, MQL and SQL Events, and Qualified-Lead Bidding | `linkedin-conversions-api-qualified-leads-2026` | linkedin conversions api qualified leads | technical / commercial | B2B demand gen, RevOps | 180-day windows (202609), MQL/SQL types (202608), MAX_QUALIFIED_LEAD (202602); no consolidated guide | https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes | LinkedIn / B2B Social | 2,100 |
| 16 | OpenAI's Agents API and Computer Use in 2026: What It Means for Marketing Automation | `openai-agents-api-computer-use-guide-2026` | openai agents api | informational / technical | Builders, ops and automation leads | Agents API public beta (10 Sep) plus hosted-browser computer use (29 Sep 2026) | https://developers.openai.com/changelog | AI Agents | 2,000 |
| 17 | Google Asset Studio Turns Your Website Into YouTube Video Ads: What Gemini Omni Changes | `google-asset-studio-youtube-video-ads-2026` | asset studio youtube video ads | how-to | SMBs, D2C, creative leads | Published 1 Oct 2026; links to our existing Gemini Omni post | https://blog.google/products/ads-commerce/creating-assets-youtube-ads/ | AI Video | 1,700 |
| 18 | LinkedIn Message Ads Now Show "Not Interested", and Rotation Defaults Changed in 2026 | `linkedin-message-ads-not-interested-cta-2026` | linkedin conversation ads changes | informational | LinkedIn advertisers | Auto "Not Interested" CTA (202606) and OPTIMIZED rotation default for lead-gen InMail (July 2026) silently affect results | https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes | LinkedIn / B2B Social | 1,600 |
| 19 | GPT-6 Astra Ultrafast in 2026: Lower Latency, and the US-Only Data Residency Catch | `gpt-6-astra-ultrafast-service-tier-2026` | gpt-6 astra ultrafast | technical | Builders with latency-sensitive agents | Shipped 29 Sep 2026 via `service_tier: "ultrafast"`; EU residency unsupported | https://developers.openai.com/changelog | AI Models | 1,500 |
| 20 | LinkedIn's 1,000-Segment Cap and the End of Legacy Geo Targeting in 2026 | `linkedin-dmp-segment-cap-geo-migration-2026` | linkedin dmp segment limit | technical | Agencies and ABM teams | 1,000 DMP segments per account (Aug 2026) and legacy geo rejected from 31 Aug 2026 | https://learn.microsoft.com/en-us/linkedin/marketing/integrations/recent-changes | LinkedIn / B2B Social | 1,600 |
| 21 | GPT-Live 1 Voice Is Generally Available at $0.05 a Minute: Voice Agents for Business in 2026 | `gpt-live-voice-agents-pricing-2026` | gpt-live 1 pricing | commercial | Support, sales and ops teams | GA 10 Sep 2026 with per-second billing; pairs with TRAI A2P rules for India | https://developers.openai.com/changelog | AI Agents | 1,700 |
| 22 | Meta Marketing API Version Expiry Dates for 2027: The Upgrade Calendar for Agencies | `meta-marketing-api-version-expiry-2026` | meta marketing api version expiry | technical / deadline | Agencies, integrators | v22.0 available until 20 May 2027 and v23.0 until 8 Oct 2027; auto-upgrade launched 29 Jul 2026 | https://developers.facebook.com/docs/graph-api/changelog/ | Developer Guide | 1,500 |

### R2.5 Rejected and unreachable (stop retrying these)

- **India DPDP Act and Rules: UNREACHABLE.** `meity.gov.in/data-protection-framework` returned 403; the MeitY static PDF returned 403; `pib.gov.in/PressReleasePage.aspx` and `PressReleaseIframePage.aspx` both returned 403; `www.dpb.gov.in` failed DNS (ENOTFOUND). Do not propose DPDP content until someone supplies the rules PDF manually or fetches from another network. A compliance post on unread rules is a liability.
- **Google Ads API sunset dates and developer-policy change: BODY NOT EXTRACTABLE.** `developers.google.com/google-ads/api/docs/sunset-dates` returned navigation only; the ads-developers.googleblog.com posts "Google Ads API v22 sunset reminder" (2 Sep 2026), "Making Google Ads More Secure with Updates to Developer Policies" (31 Aug 2026) and "Announcing v25.2" (23 Sep 2026) rendered header only. Titles and dates are confirmed; contents are not. Next attempt: the Blogger feed at `ads-developers.googleblog.com/feeds/posts/default` or the Google Ads API release notes page.
- **Claude Haiku 5.5: NOT SHIPPED** as of 1 October 2026 (anthropic.com/news latest items: Barclays 1 Oct, Sonnet 5.5 28 Sep). Recheck weekly.
- **GPT-6.1 Sol Ultrafast: NOT YET IN CHANGELOG.** Only GPT-6 Astra Ultrafast shipped (29 Sep). Topic #19 covers Astra; add Sol when it appears.
- **openai.com/news: 403** via WebFetch. developers.openai.com/changelog worked and is the better source anyway.
- **Meta newsroom other items** (Agency Awards 21 Sep, Instant Hydration spotlight 10 Sep, "How businesses are driving results" 3 Sep): case-study marketing content with vendor-reported results, not a guide opportunity.
- **GPT-Rosalind** (trusted access, billing from 5 Oct 2026): life-sciences audience, off-target for Distk.
- **OpenAI API key expiry and governance controls** (10 and 15 Sep): admin security detail, thin marketing angle.
- **ASCI Annual Complaints Report 25-26** (May 2026 PDF): available but not read this pass; possible future data piece.
- **CCPA dark-patterns enforcement:** not reached this pass; ASCI's homepage only links to third-party news coverage of a February 2026 awareness campaign, which does not meet the official-source bar.
- **Google Marketing Live 2026 recap, Merchant Center Next, PMax-specific changes:** the ads-commerce blog listing surfaced no posts on these; not reached.

### R2.2b Additional ranked topics (added in pass 2, reached via the Google Ads Developer Blog feed)

| Rank | Working title | Suggested slug | Primary keyword | Intent | Audience | Why it can rank now | Official sources | Card category | Est. words |
|---|---|---|---|---|---|---|---|---|---|
| 23 | Google Ads API v22 Stops Working on 7 October 2026: What Agencies and Tool Users Must Check | `google-ads-api-v22-sunset-october-2026` | google ads api v22 sunset | technical / deadline | Agencies, in-house teams on reporting or bid tools | Hard date: "all v22 API requests will begin to fail"; most advertisers do not know which version their tools call | http://feeds.feedburner.com/GoogleAdsDeveloperBlog (post: "Google Ads API v22 sunset reminder", 2 Sep 2026) | PPC | 1,600 |
| 24 | Google Bans Unaudited API Proxies: What the 2026 Developer Policy Change Means for Your Agency's Tools | `google-ads-developer-policy-api-proxies-2026` | google ads developer policy proxy | informational / compliance | Agencies, SaaS tool buyers | Effective 31 Aug 2026; integrations must use dedicated Google Cloud projects, which changes how to vet third-party Google Ads tools | same feed (post: "Making Google Ads More Secure with Updates to Developer Policies", 31 Aug 2026) | PPC | 1,700 |
| 25 | Google Ads API v25.2 for Marketers: Competitive Benchmark Percentiles, PMax Drafts and YouTube Creator Insights | `google-ads-api-v25-2-features-2026` | google ads api v25.2 | informational | Agencies with reporting stacks, PPC leads | Released 23 Sep 2026 as a drop-in upgrade; benchmark percentiles and creator insights by channel handle are marketer-relevant | same feed (post: "Announcing v25.2 of the Google Ads API", 23 Sep 2026) | PPC | 1,600 |

Correction to R2.5: the Google Ads Developer Blog post bodies ARE reachable through the FeedBurner feed (`http://feeds.feedburner.com/GoogleAdsDeveloperBlog`). Only the sunset-dates documentation page remains unread. The Meta Marketing API changelog (`developers.facebook.com/docs/marketing-api/marketing-api-changelog/`) was read and has no entries after 4 May 2026, so there are no post-pillar Meta API changes to propose.

### R2.3 Clusters

**Cluster I: ASCI AI-generated content labelling (India, thinnest competition, dated)**
Hub: #1 `asci-ai-generated-content-labelling-guidelines-2026`. Spokes: #2 sponsored AI chatbot recommendations, #3 virtual influencers and AI likeness, #4 what does not need a label.
Why: one document, four separate searches, binding on every Indian advertiser from three months from publication; ASCI does not state the calendar date (press release dated 29 September 2026 implies 29 December 2026 if that is the publication date; the guideline is signed 17 September 2026). Links to our ChatGPT Ads, influencer and TRAI clusters.

**Cluster J: Google Ads measurement and Demand Gen, September 2026**
Hub: #9 `google-ads-data-manager-data-strength-2026`. Spokes: #10 Demand Gen September Drop, #13 Meridian GeoX, #14 AI Max reporting, #17 Asset Studio video.
Why: Google shipped all of this inside three weeks; core Distk service territory that round one could not reach.

**Cluster K: Google Ads API deadlines for agencies**
Hub: #23 `google-ads-api-v22-sunset-october-2026`. Spokes: #24 developer policy and proxies, #25 v25.2 features.
Why: a hard 7 October date. Publish this cluster first; it loses most of its value after the date.

**Cluster L: Meta business and creator changes, September 2026**
Hub: #6 `meta-one-business-plans-pricing-2026`. Spokes: #7 Instagram Live video ads, #8 Creator Marketing Hub, #22 Meta API version expiry.
Why: freshens the Meta Ads pillar (13 Sep) with what changed after it.

**Cluster M: LinkedIn Marketing API and B2B ads changes 2026**
Hub: #15 `linkedin-conversions-api-qualified-leads-2026`. Spokes: #5 version sunsets, #18 message ads changes, #20 segment cap and geo migration.
Why: B2B is high-value for Distk and LinkedIn documents these only in its developer changelog.

**Cluster N: OpenAI platform changes (maintenance, feeds the pricing hub)**
Hub: #11 `gpt-6-luna-pricing-guide-2026`. Spokes: #16 Agents API and computer use, #19 Astra Ultrafast, #12 transcription shutdown, #21 GPT-Live 1 voice.
Why: Luna completes the GPT-6 tier picture in the pricing hub; the transcription shutdown is a dated migration.

### R2.4 Facts worth leading with (top 12, verbatim from source)

1. **#1 ASCI effective date.** "These Guidelines shall come into effect on the expiration of 3 months from the date of their publication." Signed "Chairman Board of Governors, ASCI September 17th 2026". Source: ASCI SGC guidelines PDF (URL above). Note: the exact publication date is not stated in the PDF, so write "three months after publication", not a specific day.
2. **#2 Sponsored AI answers.** "Where AI recommends a product that is sponsored, the disclosure should clearly state "Sponsored by [Brand]."" Illustration in the guideline: a chatbot asked for a good moisturiser for Mumbai recommends a brand that paid for the recommendation. Source: ASCI PDF.
3. **#3 Mandatory label cases.** "Labelling is mandatory in all such cases", examples include "Using synthetically generated influencers and ambassadors" and "Replicating a real person's likeness or voice even with their consent, for personalised messaging." Source: ASCI PDF.
4. **#4 No label needed.** "No labelling is required when advertisements feature minor modifications or use of SGC in ways that have no material impact on a consumer's ability to make an informed choice", covering routine editing, decorative backgrounds and ambient music, obviously fantastical effects, copy generation, and accessibility such as subtitles. Labels suggested: "Audio/Video created using AI" or "Audio/Video enhanced using AI". Also: an AI label does not cure prohibited content such as fabricated testimonials. Source: ASCI PDF.
5. **#23 Google Ads API v22.** Sunset date "October 7, 2026"; after it "all v22 API requests will begin to fail". Source: FeedBurner feed, post dated 2 Sep 2026.
6. **#5 LinkedIn sunsets.** "202510 - Sunset on Oct 15, 2026" and "202511 - Sunset on Nov 16, 2026". Source: LinkedIn recent-changes page. Note: a summary table generated from that page mislabelled these as 202610/202611; use the per-month section wording.
7. **#6 Meta One prices.** Essential "$14.99/mo", Advanced "$49.99/mo", Expert "$149.00/mo", Max "$499.00/mo"; "Plans, benefits, pricing and availability may vary by region, by app, and by account." Source: Meta One announcement, 15 Sep 2026.
8. **#7 Instagram Live ads.** "Rolling out to general availability beginning September 29". Source: Meta IAB Global Creator Week post, 15 Sep 2026.
9. **#9 Data strength.** "Advertisers who build their data strength with Google tag gateway observe on average a 14% conversion uplift"; Data Manager users "see an average 26% increase in incremental ROAS". Google-reported. Source: blog.google data-strength-updates, 10 Sep 2026.
10. **#11 GPT-6 Luna.** Released 22 Sep 2026 at "$0.10 input/$0.50 output per 1M tokens" (272K max input). Source: developers.openai.com/changelog.
11. **#12 Transcription shutdown.** "Feb 26, 2027" shutdown for `whisper-1`, `gpt-4o-transcribe`, `gpt-4o-mini-transcribe`, `gpt-4o-transcribe-diarize`. Source: developers.openai.com/changelog.
12. **#24 Proxy ban.** Integrations must connect directly using dedicated Google Cloud projects rather than programmatic proxies; Google's rationale: "Using unaudited proxies can provide unauthorized actors access to your account". Effective on announcement, 31 Aug 2026. Source: FeedBurner feed.

### R2.6 Deadline-shaped topics

| Date | What happens | Topics |
|---|---|---|
| **7 Oct 2026** | Google Ads API v22 requests begin to fail | #23 (publish immediately) |
| **15 Oct 2026** | LinkedIn Marketing API version 202510 sunsets | #5 |
| **16 Nov 2026** | LinkedIn Marketing API version 202511 sunsets | #5 |
| **About mid-December 2026** (three months after publication; signed 17 Sep 2026) | ASCI synthetically generated content labelling guidelines take effect | #1, #2, #3, #4 |
| **26 Feb 2027** | OpenAI shuts down whisper-1 and the gpt-4o transcription models | #12 |
| **20 May 2027 / 8 Oct 2027** | Meta Graph and Marketing API v22.0 / v23.0 stop being available | #22 |
| **Already passed (context only)** | 31 Aug 2026 LinkedIn legacy geo rejected; 31 Aug 2026 Google Ads proxy policy effective; 26 Aug 2026 OpenAI Assistants API shut down | #20, #24 |

**Publish order recommendation:** Cluster K first (7 October), then Cluster I (ASCI, India, effective December), then M (LinkedIn sunset 15 October), then J, L, N.
