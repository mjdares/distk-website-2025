# **DISTK 2026 Global Redesign: Product Requirements Document (PRD) & Technical Information Architecture**

## **1\. Executive Summary: The Agentic Web and the Dual-Audience Thesis**

The digital landscape approaching 2026 is undergoing a tectonic shift, transitioning from the traditional "Search Web" to the "Agentic Web." In this new paradigm, websites are no longer static brochures or simple interaction terminals for human users; they are dynamic data nodes that must simultaneously serve two distinct masters with opposing needs. On one side stands the human decision-maker—a C-suite executive or marketing director at a Fortune 500 company—who demands emotive storytelling, seamless UX, and high-velocity trust signals. On the other stands the AI agent—powered by Large Language Models (LLMs) like GPT-5, Gemini, and Perplexity—which demands structured semantics, entity clarity, and machine-readable authority.1

For DISTK, a global marketing agency specializing in GTM Strategy, AEO, and High-End Production, the redesign of www.distk.in is not merely a cosmetic update but a fundamental re-platforming to become a high-performance infrastructure for the AI era. The objective is to engineer a platform that functions as a "Source of Truth" entity within the global Knowledge Graph, actively feeding Answer Engines while delivering a friction-free, immersive experience for human users. By 2026, roughly 25% of traditional search traffic will have migrated to AI-generated answers, making "Answer Engine Optimization" (AEO) a survival imperative rather than a luxury.3

This Product Requirements Document (PRD) outlines the architectural blueprint to bridge this divide. It proposes a "Dual-Audience Architecture" that layers a hyper-visual, "anti-grid" human interface over a rigid, semantic skeleton designed for machine parsing. Where competitors like VaynerMedia rely heavily on social volume and cultural relevance 4, DISTK will differentiate through "Data-Backed Truth" and "Agentic Readiness," positioning the agency not just as a service provider, but as the primary data source for marketing intelligence in the AI age. This report details the technical, aesthetic, and strategic requirements to achieve this vision, benchmarking against global leaders and setting a new standard for agency digital presence.

## ---

**2\. Competitive Intelligence & Deep Benchmarking**

To define the 2026 standard for DISTK, we must first deconstruct the architectural and strategic patterns of current market leaders. Our analysis focuses on VaynerMedia, Huge Inc., and R/GA, identifying their strengths and, more importantly, the "Agentic Gaps" that DISTK can exploit.

### **2.1 VaynerMedia: The Culture-First Model**

VaynerMedia’s digital presence is built entirely around the philosophy of "PAC" (Platforms, Algorithms, Culture).4 Their architecture is designed to validate their high-volume content strategy. The site acts less as a conversion engine and more as a validation portfolio for their "social-at-the-center" thesis.5

**Gap Analysis:** While VaynerMedia dominates in human-centric "relevance," their site structure is traditional. It relies on standard brochure-ware patterns that, while effective for humans, are not optimized for LLM data extraction. Their content is often locked within video assets or unstructured text, making it difficult for Answer Engines to parse "How VaynerMedia approaches AEO" without deeper crawling. DISTK has the opportunity to surpass this by structuring agency methodology as structured data entities, making the agency's expertise machine-readable.4

### **2.2 Huge Inc.: The Intelligent Experience Model**

Huge Inc. positions itself around "Intelligent Experiences" and "AI Transformation".7 Their 2025 redesign reflects a shift towards "systems" over "pages," utilizing a clean, grid-based aesthetic that emphasizes monumental typography and results.8 Their case studies are structurally dense, focusing on quantitative metrics like "1B Monthly Interactions" for Google.7

**Gap Analysis:** Huge excels at authority signals through data, but their "intelligent experience" is often gated behind complex navigational structures that prioritize "discovery" over "answer delivery." Their focus is heavily on enterprise transformation, leaving a gap for agile, specific "Solution" answering. DISTK can leverage this by creating "Hub" pages that answer specific GTM questions directly, aiming to own the Featured Snippet and Perplexity citation for queries like "AI-driven GTM strategy".7

### **2.3 R/GA: The Business Transformation Model**

R/GA defines itself as a "Company for the Intelligence Age," creating "Intelligent Brand Systems".10 Their site is a masterclass in separating "Services" into "Offerings" and "Ventures," reflecting a consulting-heavy approach. They prioritize thought leadership on the "Future of Work" and "Commerce," positioning themselves as visionaries.11

**Gap Analysis:** R/GA’s strength is their breadth, but this can lead to dilution of topical authority in specific verticals like AEO or GEO. Their site is massive and complex. DISTK’s opportunity lies in specialized depth—becoming the undisputed authority in the *intersection* of GTM and AI Search, rather than a generalist in "transformation." By utilizing a "Silo Architecture," DISTK can build deeper topical authority clusters that are more easily digested by AI agents than R/GA’s sprawling ecosystem.10

### **2.4 Strategic Positioning Matrix**

The following table synthesizes the competitive landscape and identifies the target state for DISTK in 2026\.

| Feature | VaynerMedia (Strategy) | Huge Inc. (Experience) | R/GA (Innovation) | DISTK 2026 Target State |
| :---- | :---- | :---- | :---- | :---- |
| **Core Philosophy** | "PAC" (Platforms, Algos, Culture). | "Intelligent Experiences." | "Business Transformation." | **"Agentic Growth"** (Humans \+ AI). |
| **UX Pattern** | Bold, simple, culture-centric visuals. | Grid-based, clean, monumental type. | Modular, service-oriented systems. | **Organic "Anti-Grid" \+ Interactive.** |
| **Content Strategy** | High volume, social-first video. | Case study heavy, results-led data. | Thought leadership & global reports. | **Hub & Spoke (AEO Optimized).** |
| **Tech Stack** | Ruby on Rails, Custom builds. | Cloud-native, Composable. | Modern Web/Platform Solutions. | **Next.js (Headless) \+ Edge \+ Vectors.** |
| **AEO Readiness** | Moderate (strong social signals). | High (strong domain authority). | High (strong report citations). | **Maximum (Schema-First Architecture).** |
| **Lead Gen** | Contact forms, RFP focus. | "Let's Talk" overlays. | Career & Venture driven. | **Interactive Value-Exchange (Calculators).** |

## ---

**3\. Technical Information Architecture: The Silo Model**

To maximize Topical Authority—a critical factor for both traditional SEO and the emerging AEO landscape 13—the DISTK architecture will eschew the flat "Services" list in favor of five distinct **Semantic Silos**. This structure prevents keyword cannibalization, clarifies intent for search crawlers, and creates dedicated "Knowledge Graph" clusters that signal deep expertise to AI agents.

### **3.1 Global Navigation Strategy**

The global navigation must bridge the gap between "Services" (what we sell) and "Solutions" (what the user needs). It will serve as the primary map for the Knowledge Graph.

* **Primary Navigation:** The Silos (Core Growth, Intelligence, Performance, Creative, Labs).  
* **Secondary Navigation:** Work (Case Studies), Insights (The AEO Knowledge Hub), About (Entity Information), Contact (Conversion).  
* **Utility Navigation:** Client Portal Login, Global Search (AI-Powered Vector Search).

### **3.2 Silo 1: Core Growth Hub (Business Logic)**

This silo serves the "Business" intent. It addresses the "Why" and "How" of organizational transformation. Content here speaks to C-level executives (CEOs, CROs) looking for revenue velocity and market expansion.

* **Semantic Role:** Defines business logic, ROI modeling, and strategy.  
* **Key Nodes:**  
  * /growth/gtm-strategy: "Go-to-Market Strategy for 2026."  
  * /growth/market-expansion: "International Market Entry Frameworks."  
  * /growth/consulting: "Executive Marketing Consultancy."  
* **Interactive Element:** An embedded **GTM Velocity Calculator**.16 Users input current revenue and target growth; the tool outputs a "Velocity Score" and recommends specific DISTK services. This captures high-intent MQLs by exchanging value for data.

### **3.3 Silo 2: Intelligence & Visibility Hub (SEO/AEO)**

This is the flagship silo for the "Agentic" era. It focuses on SEO, GEO (Generative Engine Optimization), AEO, and Digital PR. It answers the "Discoverability" intent.

* **Semantic Role:** Defines "Visibility" in the AI age. This is the primary driver of AEO traffic.  
* **Key Nodes:**  
  * /intelligence/aeo: "Answer Engine Optimization Services." This serves as a Hub page linking to specific tactics.  
  * /intelligence/semantic-seo: "Entity-Based Search Strategy."  
  * /intelligence/digital-pr: "Authority Building & Citations."  
* **Content Model:** A strict **Hub-and-Spoke** model is applied here. The /intelligence/aeo page acts as the Pillar (Hub), linking out to granular spokes like "Voice Search Optimization" and "Schema Markup Implementation".17

### **3.4 Silo 3: Performance Engine (Paid/Programmatic)**

This silo addresses "Acquisition" and "ROAS" (Return on Ad Spend). It targets performance marketers and VP-level decision-makers focused on efficiency.

* **Semantic Role:** Defines "Acquisition" mechanics and programmatic efficiency.  
* **Key Nodes:**  
  * /performance/programmatic: "AI-Driven Programmatic Advertising."  
  * /performance/social-ads: "Cross-Channel Social Performance."  
  * /performance/dco: "Dynamic Creative Optimization (DCO) Strategies".19  
* **Technical Requirement:** Integration of **Live Data Dashboards** (anonymized/aggregate). A widget showing "Real-time ROAS across DISTK Clients" builds immediate trust through data transparency.20

### **3.5 Silo 4: Creative & Identity Lab (Branding/Video)**

This silo focuses on "Identity" and "Perception." It targets CMOs and Brand Directors who need to ensure their brand survives the AI filter with human resonance.

* **Semantic Role:** Defines "Brand Equity" and "Visual Language."  
* **Key Nodes:**  
  * /creative/video-production: "High-End Commercial Production."  
  * /creative/brand-identity: "Adaptive Design Systems."  
  * /creative/ux-design: "Human-Centric Digital Experiences."  
* **Asset Management:** This silo heavily utilizes VideoObject schema to ensure video assets are indexed with transcripts, timestamps, and interaction statistics.21

### **3.6 Silo 5: The Labs (Innovation/R\&D)**

Similar to R/GA’s "Future of Work" 12 and Huge’s "AI Transformation" 7, this section proves DISTK is a 2026 leader. It houses proprietary tools, research papers, and experimental tech.

* **Semantic Role:** Defines "Innovation" and "E-E-A-T" (Expertise, Authority, Trustworthiness).  
* **Key Nodes:**  
  * /labs/ai-tools: Proprietary internal tools available for client use.  
  * /labs/research: White papers on "The State of Agentic Web."  
  * /labs/engineering: Technical breakdowns of DISTK's own infrastructure.

## ---

**4\. Product Requirements Document (PRD): The Tech Stack**

To support the "Agentic" vision, the site cannot rely on monolithic legacy architectures. It requires a **Composable, Headless Architecture** that decouples content from presentation, allowing data to be served to websites, apps, and AI agents simultaneously.7

### **4.1 Core Technologies Overview**

The technology stack is selected to maximize performance (Core Web Vitals), scalability, and semantic precision.

| Component | Technology Selection | Strategic Justification |
| :---- | :---- | :---- |
| **Frontend Framework** | **Next.js 15+ (App Router)** | Server-Side Rendering (SSR) is non-negotiable for AEO. Search bots must parse fully rendered HTML. Next.js offers Incremental Static Regeneration (ISR), allowing high-performance static pages to update dynamically without full rebuilds.23 |
| **Headless CMS** | **Sanity.io** | Sanity treats "Content as Data." It allows for the creation of structured content models (Schema-first) rather than just "pages." This is critical for dynamically feeding JSON-LD structured data and supports the COPE (Create Once, Publish Everywhere) principle.23 |
| **Deployment & Edge** | **Vercel** | Vercel provides Edge Middleware for geo-personalization (serving different case studies based on user location) without latency. Vercel Analytics offers real-world performance metrics crucial for maintaining Core Web Vitals.24 |
| **Styling Engine** | **Tailwind CSS** | A utility-first framework that ensures low bundle sizes and highly maintainable code for a scalable design system. It facilitates the rapid development of the "Anti-grid" layouts required for the 2026 aesthetic. |
| **Video Infrastructure** | **Mux / Cloudinary** | High-performance video streaming APIs are required to support the "Creative & Identity Lab" without degrading page speed. Lazy-loading and adaptive bitrate streaming are mandatory.21 |

### **4.2 Performance Specifications (Core Web Vitals)**

To rank in AEO, technical performance is a fundamental trust signal. Slow sites are deprioritized by both Google and AI agents.26

* **LCP (Largest Contentful Paint):** \< 1.2s. Achieved via Next.js next/image optimization and critical CSS inlining.  
* **CLS (Cumulative Layout Shift):** 0.00. Achieved by explicitly defining aspect ratios for all media and reserving space for dynamic content.  
* **INP (Interaction to Next Paint):** \< 200ms. Ensured by offloading heavy JavaScript to web workers and optimizing React hydration.

### **4.3 AEO-Specific Technical Requirements**

* **Semantic HTML5 Architecture:** The codebase must strictly utilize semantic tags (\<article\>, \<section\>, \<aside\>, \<nav\>, \<header\>) to help LLMs parse document structure and hierarchy. \<div\> soup is strictly prohibited.  
* **Dynamic JSON-LD Injection:** The CMS must automatically generate and inject deeply nested Schema.org JSON-LD blocks based on the content type. If a page is a "Service," the Service schema must be injected. If it’s a "Video," VideoObject schema must be injected.27  
* **Vector Embeddings (Future-Proofing):** The backend architecture should be prepared to expose content vectors via an API endpoint (e.g., /api/agent-query). This allows AI agents to "query" the site database directly, retrieving semantic answers rather than just crawling HTML text.

## ---

**5\. Answer Engine Optimization (AEO) Strategy**

This is the differentiator. While competitors rely on brand volume, DISTK will rely on **Data Structure**. The goal is to maximize "Share of Model"—the frequency with which DISTK is cited as a source in ChatGPT, Perplexity, and Gemini answers.1

### **5.1 The "Answer-First" Content Model**

Every service page and blog post must follow the **Inverse Pyramid of AEO**. This structure is designed to provide immediate value to AI extractors while retaining depth for human readers.

1. **The Direct Answer (The Snippet):** The first 40-60 words of any page must directly answer the core user intent (e.g., "What is AEO?"). This text must be conversational yet factual, devoid of fluff, and optimized for Natural Language Processing (NLP) extraction.1  
2. **The "People Also Ask" (PAA) Matrix:** The subsequent H2 headers must be framed as questions derived from PAA data. This aligns the content structure with the query patterns of users and voice assistants.29  
3. **Structured Lists/Tables:** AI models favor structured data. Content should prioritize Markdown tables for comparisons (e.g., "SEO vs. AEO") and bullet points for processes. This formatting increases the likelihood of data extraction for "Listicle" style answers.29

### **5.2 Entity Graph & Authority Building**

DISTK must establish itself as a unambiguous "Entity" in the Knowledge Graph.

* **SameAs Strategy:** We will utilize the sameAs property in the Organization schema to explicitly link www.distk.in to all authoritative external profiles (LinkedIn, Crunchbase, YouTube, Wikidata). This disambiguates the brand from other potential entities.30  
* **Co-Citation & Neighborhoods:** The content strategy will intentionally cite authoritative sources (Google Research, Gartner) to build "neighborhood" trust. Digital PR campaigns will aim to get DISTK cited alongside competitors like VaynerMedia in industry roundups, establishing relevance through association.2

### **5.3 Advanced JSON-LD Schema Strategy**

We will implement a **Nested Graph Schema** architecture. Instead of disjointed schema blocks, we will link them into a cohesive graph.

**Schema Architecture Example (JSON-LD):**

JSON

{  
  "@context": "https://schema.org",  
  "@graph":  
    },  
    {  
      "@type": "WebSite",  
      "@id": "https://www.distk.in/\#website",  
      "url": "https://www.distk.in",  
      "publisher": { "@id": "https://www.distk.in/\#organization" }  
    },  
    {  
      "@type": "Service",  
      "name": "Answer Engine Optimization",  
      "provider": { "@id": "https://www.distk.in/\#organization" },  
      "serviceType": "Digital Marketing",  
      "description": "Strategic optimization for AI-driven search platforms...",  
      "areaServed": "Global",  
      "hasOfferCatalog": {  
        "@type": "OfferCatalog",  
        "name": "AEO Services",  
        "itemListElement":  
      }  
    },  
    {  
      "@type": "FAQPage",  
      "mainEntity":  
    }  
  \]  
}

**Strategic Insight:** By nesting the FAQPage and Service within the same graph and linking them to the Organization via @id, we explicitly tell the search engine: "This specific service is provided by this specific organization, and here are the answers to common questions about it." This removes ambiguity and strengthens the entity signal.34

## ---

**6\. UX/UI Design System: The 2026 Aesthetic**

The aesthetic of 2026 must reflect **"Humanized Digital."** As the web becomes flooded with AI-generated content, human touches—hand-drawn elements, organic motion, and "anti-grid" layouts—become premium trust signals that differentiate a premium agency from a content farm.36

### **6.1 Moodboard: "Technological Organicism"**

* **Visual Language:** We will adopt "Anti-grid" layouts that break the rigid boxiness of standard B2B sites. Fluid, organic shapes that morph on scroll (using WebGL/Three.js) will create a sense of life and adaptability.36  
* **Color Palette:** The primary palette will anchor on **"Transformative Teal"** (a key 2026 trend color reflecting balance and nature) combined with deep **Obsidian** for tech sophistication. Vibrant accents of **Orange** (making a comeback in 2026\) will be used for high-impact CTAs to signal energy.36  
* **Typography:** A strategic pairing of a **Monospaced Font** (e.g., *JetBrains Mono* or *Space Mono*) for data, headers, and code snippets to convey the "Lab" aesthetic, contrasted with a high-character **Humanist Sans-Serif** (e.g., *Instrument Sans*) for narrative text. This visual juxtaposition reinforces the "Human \+ AI" dual thesis.  
* **Motion Principles:** Micro-interactions are mandatory. Buttons should not just change color; they should react magnetically to the cursor. Scroll progress should be indicated by organic line drawings that "draw" the page into existence, symbolizing the agency's creative process.37

### **6.2 Interactive Elements (The "Sticky" Factor)**

To increase dwell time (a critical user signal for both SEO and AEO) and lead quality, the site will feature "Tool-Like" interactive elements:

* **The "AEO Readiness" Calculator:** An interactive tool where users input their URL and receive a preliminary score on their visibility in ChatGPT. This captures high-intent MQLs immediately by offering tangible value.16  
* **Dynamic ROI Modeler:** A slider-based interface allowing users to input their marketing budget and industry to see projected outcomes based on DISTK’s historical performance data.  
* **Smart Booking Widget:** A conversational scheduling bot (logic similar to Chili Piper) that qualifies leads in real-time before allowing them to book a meeting, ensuring sales efficiency.39

## ---

**7\. Conversion Engineering & Lead Logic**

Lead generation in 2026 must be frictionless and value-driven. The era of the generic "Contact Us" form is over.

### **7.1 The "Value-First" Form Strategy**

Forms will be repositioned as "Value Exchange" points. Instead of "Contact Us," headers will read "Get Your AEO Roadmap" or "Calculate Your GTM Velocity."

* **Multi-Step Logic:** We will utilize multi-step forms (Typeform style) to reduce cognitive load. Step 1 asks "What is your goal?" Step 2 asks "Budget." This "Quiz" approach increases completion rates significantly.41  
* **Conditional Logic:** The form adapts based on user input. If a user selects "Video Production," the next question asks about "Shoot Location." If they select "SEO," it asks about "Current Traffic." This personalization demonstrates competence before the conversation even begins.  
* **Trust Injection:** Client logos, "Verified Results" stats, and recent awards will be placed immediately adjacent to the submit button to reduce friction at the point of conversion.42

### **7.2 Lead Routing Logic (The Chili Piper Model)**

We will implement an automated routing system to ensure leads are handled instantly.40

* **Rule 1 (Enterprise):** If Company Size \> 500 Employees \-\> Route directly to "Enterprise Calendar" (Senior VP Sales).  
* **Rule 2 (Mid-Market):** If Budget \< $10k \-\> Route to "Self-Serve/Workshop" offering or Junior Rep.  
* **Rule 3 (Vertical Specific):** If Industry \= "SaaS" \-\> Route to "SaaS Specialist."  
* **Rule 4 (AEO Intent):** If the lead source is the "AEO Calculator" \-\> Route to "Technical SEO Lead."

## ---

**8\. Detailed Page-by-Page Content Strategy**

### **8.1 Homepage: The Central Nervous System**

* **Hero Section:**  
  * **H1:** "The Agency for the Agentic Age." (Positioning DISTK as the future).  
  * **Visual:** Full-screen WebGL interactive background (Fluid/Organic).  
  * **Primary CTA:** "Audit Your Visibility" (Calculator) \- Value-led.  
  * **Secondary CTA:** "View Our Work" (Case Studies) \- Proof-led.  
* **Social Proof Ticker:** Infinite scroll of client logos (benchmarking Vayner’s portfolio 14) to establish immediate credibility.  
* **The "Silo" Grid:** An interactive navigation element allowing users to explore the 5 Silos visually. Hovering over "Intelligence" reveals a data visualization; hovering over "Creative" plays a video reel.  
* **AEO Definition Block:** A semantic section explicitly defining "What is DISTK?" for the bots. "DISTK is a global marketing agency specializing in..." This text is optimized for the Knowledge Graph description.

### **8.2 Service Page Archetype: "Intelligence & Visibility (AEO)"**

* **Schema:** Service, FAQPage.  
* **Header:**  
  * **H1:** "Answer Engine Optimization (AEO) Services."  
  * **Direct Answer Snippet:** "Answer Engine Optimization (AEO) is the process of optimizing content to be cited by AI platforms like ChatGPT and Perplexity. DISTK utilizes structured data, entity authority, and semantic content modeling to ensure your brand owns the answer.".1  
* **The "Problem/Solution" Matrix:** A visual comparison table showing "The Invisible Brand" (Traditional SEO) vs. "The Answer" (AEO).  
* **Methodology (Hub & Spoke):** A visual diagram showing how DISTK builds authority. Links to "Spoke" pages (e.g., "Schema Markup," "Voice Search," "Entity Management") are integrated here.17  
* **Interactive Case Study Injection:** A module showing "How we increased visibility by 300% for \[Client\]" with a clickable graph.  
* **FAQ Section:** Accordions with H3 headers answering specific PAA questions like "How long does AEO take?" and "Is AEO different from SEO?".29

### **8.3 Service Page Archetype: "Creative & Identity Lab"**

* **Schema:** Service, VideoObject.  
* **Hero:** Cinematic video background (Lazy loaded via Mux).  
* **Philosophy:** "Culture x Conversion." This references VaynerMedia's strategy but adds the DISTK data layer.4  
* **The Workflow:** A step-by-step breakdown:  
  * Phase 1: Pre-Production (Strategy/Scripting).44  
  * **Phase 2: Production (Capture/AI-Assisted Shoot).**  
  * **Phase 3: Post-Production (Edit/VFX/Color).**  
* **Asset Gallery:** A masonry grid of video thumbnails. Clicking opens a lightbox, keeping the user on the page to maintain session duration.  
* **Tech Specs:** A section detailing equipment (RED/Arri) and Software (Unreal Engine for virtual production) to establish "High-End" authority.

### **8.4 Case Studies (The "Result" Framework)**

* **Structure:**  
  * **Challenge:** The business problem defined clearly.  
  * **Solution:** The DISTK strategy, referencing specific Silos used.  
  * **The Data:** Live/Static charts showing ROI, ROAS, and Traffic Growth.45  
  * **The Creative:** Embeds of the actual assets produced (Video, Design).  
  * **Client Testimonial:** Review schema marked up for search snippets.  
* **Interlinking:** Each case study must link back to the *Service Page* used, creating a bidirectional link cluster that reinforces topical authority.13

## ---

**9\. Implementation Roadmap & Governance**

### **9.1 Phase 1: Foundation (Weeks 1-4)**

* **Infrastructure:** Setup Next.js environment on Vercel.  
* **Data Modeling:** Configure Sanity.io content schemas. This is the most critical step, as the content model dictates the schema output.  
* **Schema Templates:** Define the Organization and Service JSON-LD templates.  
* **Design System:** Finalize the "Anti-grid" Design System in Figma, including "Transformative Teal" palette and typography assets.

### **9.2 Phase 2: Content Migration & Engineering (Weeks 5-10)**

* **Migration:** Migrate existing content into the new "Hub & Spoke" model.  
* **Rewriting:** Rewrite all headers to be Question-Based (AEO optimized).  
* **Development:** Build the interactive ROI calculators and Booking Widgets.  
* **Video Pipeline:** Implement the video lazy-loading pipeline using Mux/Cloudinary.

### **9.3 Phase 3: AEO Validation & Launch (Weeks 11-12)**

* **Validation:** Test all Schema with the Google Rich Results Test.31  
* **Entity Linking:** Validate sameAs entity links to ensure Knowledge Graph connectivity.  
* **Performance Audit:** Conduct Lighthouse scores audit to ensure Core Web Vitals compliance (LCP, CLS, INP).  
* **Soft Launch:** Submit indexing request via Google Search Console and monitor for crawl errors.

### **9.4 Governance (Post-Launch)**

* **Quarterly Entity Audit:** Verify that Knowledge Graph nodes are accurate and updated.  
* **Content Refresh:** Update "Answer Snippets" based on new LLM behaviors and query patterns.  
* **Review Management:** Actively solicit reviews to maintain AggregateRating schema health, a key factor in conversion and trust.2

## ---

**10\. Technical Appendix: Schema & Data Models**

This appendix provides granular detail on the schema implementation required to execute the AEO strategy.

### **10.1 The Organization-Service-Offer Triple**

Most agencies fail to connect their "Service" to their "Offer." DISTK will use the hasOfferCatalog property to bridge this gap.

**JSON-LD Template (Organization):**

JSON

{  
  "@context": "https://schema.org",  
  "@type": "Organization",  
  "@id": "https://www.distk.in/\#organization",  
  "name": "DISTK",  
  "legalName": "DISTK Marketing Agency Global",  
  "url": "https://www.distk.in",  
  "logo": "https://www.distk.in/assets/distk-logo-2026.png",  
  "sameAs":,  
  "contactPoint": {  
    "@type": "ContactPoint",  
    "telephone": "+91-XXX-XXX-XXXX",  
    "contactType": "sales",  
    "areaServed": "World",  
    "availableLanguage":  
  },  
  "hasOfferCatalog": {  
    "@type": "OfferCatalog",  
    "name": "Marketing Services",  
    "itemListElement":  
  }  
}

**Strategic Insight:** By defining areaServed as "World" and listing multiple languages, we signal global capability to the algorithms. The hasOfferCatalog property explicitly structures the services as distinct offers, aiding in rich result generation.32

### **10.2 The "HowTo" Schema for Case Studies**

AEO often looks for "How to" content. We will structure our Case Studies not just as stories, but as "How To" guides where the "Solution" steps are marked up semantically.

**JSON-LD Template (Case Study):**

JSON

{  
  "@context": "https://schema.org",  
  "@type": "HowTo",  
  "name": "How to Scale Organic Traffic using AEO",  
  "description": "A step-by-step guide based on DISTK's work with Client X.",  
  "step":  
}

**Strategic Insight:** This allows DISTK's case studies to appear in "How To" rich snippets, driving high-intent traffic from users asking "How to do AEO?" This turns a passive case study into an active acquisition tool.26

### **10.3 Internal Linking Governance**

* **Anchor Text Strategy:** Anchor text must be descriptive and varied (e.g., "AEO strategies for 2026" rather than "Click here"). This helps search engines understand the context of the linked page.47  
* **Crawl Depth:** No page should be more than 3 clicks from the homepage. The flat "Silo" navigation ensures this architecture.49  
* **Orphan Page Prevention:** An automated script in the CMS (Sanity) will flag any published page that does not have at least 2 internal inbound links, ensuring the "Hub & Spoke" model remains intact.

### **10.4 Visual Sitemap Representation**

To visualize the structure described in the Information Architecture section, the following hierarchy will be implemented:

Code snippet

graph TD  
    Home \--\> Growth  
    Home \--\> Intel  
    Home \--\> Perf  
    Home \--\> Creative  
    Home \--\> Labs

    Growth \--\> GTM  
    Growth \--\> Consult\[Consulting\]  
    Growth \--\> Calc

    Intel \--\> AEO  
    Intel \--\> SEO  
    Intel \--\> PR  
    AEO \--\> Schema  
    AEO \--\> Voice

    Perf \--\> Prog\[Programmatic Ads\]  
    Perf \--\> Social  
    Perf \--\> DCO

    Creative \--\> Video\[Video Production\]  
    Creative \--\> Brand  
    Creative \--\> UX

    Labs \--\> Tools  
    Labs \--\> Research

    Home \--\> About\[About / Entity Info\]  
    Home \--\> Work  
    Work \-.-\> |Link Back| AEO  
    Work \-.-\> |Link Back| Video

This structure ensures that every leaf node (Spoke) feeds authority back to its parent Hub, and every Hub feeds the Core Entity (Homepage), creating a concentrated stream of Topical Authority.

By executing this comprehensive PRD, DISTK will deploy a digital infrastructure capable of navigating the 2026 AI transition. The combination of **Headless Architecture**, **Deep Semantic Schema**, and **Human-Centric Design** creates a defensible moat, positioning the agency as the premier partner for brands navigating the Agentic Age.

#### **Works cited**

1. What is Answer Engine Optimization? 7 AEO Strategies for 2025, accessed December 18, 2025, [https://surferseo.com/blog/answer-engine-optimization/](https://surferseo.com/blog/answer-engine-optimization/)  
2. Generative Engine Optimization (GEO) Strategy Guide – First Page ..., accessed December 18, 2025, [https://firstpagesage.com/seo-blog/generative-engine-optimization-geo-strategy-guide/](https://firstpagesage.com/seo-blog/generative-engine-optimization-geo-strategy-guide/)  
3. How to Optimize Your Business for ChatGPT, Perplexity & AI Search (GEO Tutorial), accessed December 18, 2025, [https://www.youtube.com/watch?v=5Mlx-2kbAXs](https://www.youtube.com/watch?v=5Mlx-2kbAXs)  
4. VaynerMedia Strategy Services \- Contact Us Today, accessed December 18, 2025, [https://vaynermedia.com/strategy-services/](https://vaynermedia.com/strategy-services/)  
5. VaynerMedia Creative Services \- Contact Us Today, accessed December 18, 2025, [https://vaynermedia.com/creative/](https://vaynermedia.com/creative/)  
6. Page 4 – VaynerMedia, accessed December 18, 2025, [https://vaynermedia.com/page/4/?p=t](https://vaynermedia.com/page/4/?p=t)  
7. Huge | A design and technology company, accessed December 18, 2025, [https://www.hugeinc.com/](https://www.hugeinc.com/)  
8. Case study: HUGE \- Awwwards, accessed December 18, 2025, [https://www.awwwards.com/case-study-huge.html](https://www.awwwards.com/case-study-huge.html)  
9. What we do. \- Huge, accessed December 18, 2025, [https://www.hugeinc.com/what-we-do/](https://www.hugeinc.com/what-we-do/)  
10. R/GA | We design intelligent brand systems that help businesses get ..., accessed December 18, 2025, [https://rga.com/](https://rga.com/)  
11. Catch R/GA at SXSW 2025\!, accessed December 18, 2025, [https://rga.com/news/sxsw](https://rga.com/news/sxsw)  
12. The Future of Work — We're Designing It | by R/GA | Medium, accessed December 18, 2025, [https://rga.medium.com/the-future-of-work-were-designing-it-ddcdc963e18c](https://rga.medium.com/the-future-of-work-were-designing-it-ddcdc963e18c)  
13. Topic Clusters for AEO: The Ultimate Internal-Link Blueprint for Higher Rankings | Hashmeta, accessed December 18, 2025, [https://hashmeta.com/blog/topic-clusters-for-aeo-the-ultimate-internal-link-blueprint-for-higher-rankings/](https://hashmeta.com/blog/topic-clusters-for-aeo-the-ultimate-internal-link-blueprint-for-higher-rankings/)  
14. VaynerMedia Company Overview, Contact Details & Competitors | LeadIQ, accessed December 18, 2025, [https://leadiq.com/c/vaynermedia/5a1d88512400002400620ea5](https://leadiq.com/c/vaynermedia/5a1d88512400002400620ea5)  
15. Practical AEO Strategies for 2025: SEO That Answers with Authority \- INSIDEA, accessed December 18, 2025, [https://insidea.com/blog/seo/aeo/aeo-strategies/](https://insidea.com/blog/seo/aeo/aeo-strategies/)  
16. 13 B2B ROI Calculator Examples | Revenue Archives \- Dock.us, accessed December 18, 2025, [https://www.dock.us/revenue-archives/roi-calculators](https://www.dock.us/revenue-archives/roi-calculators)  
17. Understanding Hub and Spoke Content Models \- DIGITECH Web Design, accessed December 18, 2025, [https://www.digitechwebdesignaustin.com/content-marketing/hub-and-spoke-content-model/](https://www.digitechwebdesignaustin.com/content-marketing/hub-and-spoke-content-model/)  
18. Hub-and-Spoke SEO Model: Build Topical Authority with Content Clusters, accessed December 18, 2025, [https://www.seo-kreativ.de/en/blog/hub-and-spoke-model/](https://www.seo-kreativ.de/en/blog/hub-and-spoke-model/)  
19. Dynamic Creative Optimization: How AI-driven DCO Boosts Your Ad Performance in 2026, accessed December 18, 2025, [https://fibr.ai/blog/turn-creative-ad-ideas-into-gold-with-dynamic-creative-optimization](https://fibr.ai/blog/turn-creative-ad-ideas-into-gold-with-dynamic-creative-optimization)  
20. 6 Examples of Client Dashboards for Agencies and Reseller \- Toucan Toco, accessed December 18, 2025, [https://www.toucantoco.com/en/blog/examples-client-dashboards-for-agencies-and-resseller](https://www.toucantoco.com/en/blog/examples-client-dashboards-for-agencies-and-resseller)  
21. How to improve performance when rendering YouTube videos in NextJS with Sanity, accessed December 18, 2025, [https://www.sanity.io/answers/how-to-improve-performance-when-rendering-youtube-videos-in-nextjs-with-sanity](https://www.sanity.io/answers/how-to-improve-performance-when-rendering-youtube-videos-in-nextjs-with-sanity)  
22. Best Practices for Optimizing Video-Heavy Websites : r/webdev \- Reddit, accessed December 18, 2025, [https://www.reddit.com/r/webdev/comments/1itq1fy/best\_practices\_for\_optimizing\_videoheavy\_websites/](https://www.reddit.com/r/webdev/comments/1itq1fy/best_practices_for_optimizing_videoheavy_websites/)  
23. The Complete Guide to Sanity SEO: Best Practices & Implementation \- Webstacks, accessed December 18, 2025, [https://www.webstacks.com/blog/sanity-seo](https://www.webstacks.com/blog/sanity-seo)  
24. 11 top tips for SEO with Sanity Next.js \- Roboto Studio, accessed December 18, 2025, [https://robotostudio.com/blog/11-top-tips-for-seo-with-sanity-and-nextjs](https://robotostudio.com/blog/11-top-tips-for-seo-with-sanity-and-nextjs)  
25. Content Engineering: How to Scale Content with AI & Automation \- SaaStorm, accessed December 18, 2025, [https://saastorm.io/blog/content-engineering/](https://saastorm.io/blog/content-engineering/)  
26. Answer Engine Optimization (AEO): The Comprehensive Guide for 2025 \- CXL, accessed December 18, 2025, [https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide-for-2025/](https://cxl.com/blog/answer-engine-optimization-aeo-the-comprehensive-guide-for-2025/)  
27. Schema Markup Guide: Boost EEAT with JSON‑LD, accessed December 18, 2025, [https://www.growingsales.com/post/schema-json-eeat](https://www.growingsales.com/post/schema-json-eeat)  
28. Fully Dynamic JSON‑LD Product & Merchant Center Schema for Shopify | Chris Lever, accessed December 18, 2025, [https://chrisleverseo.com/forum/t/fully-dynamic-json-ld-product-merchant-center-schema-for-shopify.129/](https://chrisleverseo.com/forum/t/fully-dynamic-json-ld-product-merchant-center-schema-for-shopify.129/)  
29. Best practices for answer engine optimization (AEO) marketing teams can't ignore, accessed December 18, 2025, [https://blog.hubspot.com/marketing/answer-engine-optimization-best-practices](https://blog.hubspot.com/marketing/answer-engine-optimization-best-practices)  
30. Using @id in Schema.org Markup for SEO, LLMs, & Knowledge Graphs | Momentic, accessed December 18, 2025, [https://momenticmarketing.com/blog/id-schema-for-seo-llms-knowledge-graphs](https://momenticmarketing.com/blog/id-schema-for-seo-llms-knowledge-graphs)  
31. How Schema Markup Can Drive SERP Visibility & Entity Recognition \- Greenlane Marketing, accessed December 18, 2025, [https://www.greenlanemarketing.com/resources/articles/how-schema-markup-can-drive-serp-visibility-entity-recognition](https://www.greenlanemarketing.com/resources/articles/how-schema-markup-can-drive-serp-visibility-entity-recognition)  
32. Organization Schema: A Complete Guide in 2025 \- Aubrey Yung, accessed December 18, 2025, [https://aubreyyung.com/organization-schema/](https://aubreyyung.com/organization-schema/)  
33. Generative Engine Optimization (GEO): How to Win in AI Search \- Backlinko, accessed December 18, 2025, [https://backlinko.com/generative-engine-optimization-geo](https://backlinko.com/generative-engine-optimization-geo)  
34. Intro to How Structured Data Markup Works | Google Search Central | Documentation, accessed December 18, 2025, [https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)  
35. Schema Markup for a Marketing Consultant \- AirOps, accessed December 18, 2025, [https://www.airops.com/blog/schema-markup-for-a-marketing-consultant](https://www.airops.com/blog/schema-markup-for-a-marketing-consultant)  
36. Web design trends 2026 \- WPBakery Page Builder, accessed December 18, 2025, [https://wpbakery.com/blog/web-design-trends-2026/](https://wpbakery.com/blog/web-design-trends-2026/)  
37. Web Design Trends to Expect in 2026 \- Elementor, accessed December 18, 2025, [https://elementor.com/blog/web-design-trends-2026/](https://elementor.com/blog/web-design-trends-2026/)  
38. 32 B2B Calculator Examples | Revenue Archives \- Dock.us, accessed December 18, 2025, [https://www.dock.us/revenue-archives/calculators](https://www.dock.us/revenue-archives/calculators)  
39. 7 Best Consultation Booking Bots for Marketing Agencies (2025) \- Agentive AIQ, accessed December 18, 2025, [https://agentiveaiq.com/listicles/7-best-consultation-booking-bots-for-marketing-agencies](https://agentiveaiq.com/listicles/7-best-consultation-booking-bots-for-marketing-agencies)  
40. Rules in Chili Piper, accessed December 18, 2025, [https://help.chilipiper.com/hc/en-us/articles/30080073275027-Rules-in-Chili-Piper](https://help.chilipiper.com/hc/en-us/articles/30080073275027-Rules-in-Chili-Piper)  
41. 18 Best Lead Generation Forms: Examples, Best Practices & Tips \- VWO, accessed December 18, 2025, [https://vwo.com/blog/lead-generation-forms/](https://vwo.com/blog/lead-generation-forms/)  
42. 22 Best Lead Generation Form Examples & Tips \- Landingi, accessed December 18, 2025, [https://landingi.com/blog/best-lead-generation-form-examples/](https://landingi.com/blog/best-lead-generation-form-examples/)  
43. Marketo Lead Routing with Chili Piper \- The Workflow Pro, accessed December 18, 2025, [https://theworkflowpro.com/marketo-lead-routing-salesforce-chili-piper/](https://theworkflowpro.com/marketo-lead-routing-salesforce-chili-piper/)  
44. Video Production Process | \- Lone Star College System, accessed December 18, 2025, [https://www.lonestar.edu/33315.htm](https://www.lonestar.edu/33315.htm)  
45. The Ultimate Guide to Marketing Dashboards \[25+ Templates & Examples\] \- Improvado, accessed December 18, 2025, [https://improvado.io/blog/12-best-marketing-dashboard-examples-and-templates](https://improvado.io/blog/12-best-marketing-dashboard-examples-and-templates)  
46. JSON-LD Organization Example Code, accessed December 18, 2025, [https://jsonld.com/organization/](https://jsonld.com/organization/)  
47. Internal Linking Strategy For SEO | The Ultimate Guide \- Network Solutions, accessed December 18, 2025, [https://www.networksolutions.com/blog/internal-linking-seo-strategy-guide/](https://www.networksolutions.com/blog/internal-linking-seo-strategy-guide/)  
48. How Does Internal Linking Help SEO? (How-To \+ 12 Best Practices) \- HawkSEM, accessed December 18, 2025, [https://hawksem.com/blog/how-does-internal-linking-help-seo/](https://hawksem.com/blog/how-does-internal-linking-help-seo/)  
49. Your Internal Linking Blueprint For Better SEO \- Siteimprove, accessed December 18, 2025, [https://www.siteimprove.com/blog/internal-linking-strategy-for-seo/](https://www.siteimprove.com/blog/internal-linking-strategy-for-seo/)