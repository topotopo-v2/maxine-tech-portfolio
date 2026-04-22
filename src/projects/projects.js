import fairpriceIcon from "../assets/app-icon-fairprice.svg"
import uobTmrwThIcon from "../assets/app-icon-uob-tmrw-th.svg"
import uobInfinityIcon from "../assets/app-icon-uob-infinity.svg"
import whsIcon from "../assets/app-icon-whs.svg"
import uMoneyTransferIcon from "../assets/app-icon-u-money-transfer.svg"
import cignalIcon from "../assets/app-icon-cignal.svg"
import { ProjectIconType } from "./projectIconType"

export const projects = [
    {
        id: "career-pause",
        date: "2026 - Present",
        position: "On a career pause",
        techStack: "React, HTML/CSS, Figma",
        description: `I took a career break to explore creative disciplines such as video making, graphic design, and climbing, while also sharpening my technical foundations through continued study in DSA and web development. During this time, I designed and built hobby web projects to expand frontend and backend skills and developed branding work for family and friends. The experience broadened my design perspective and strengthened both my technical and creative approach to building products. I am currently enrolled in an online course from BaselineHQ – a free design bootcamp.`,
        icons: [],
        media: null,
    },

    {
        id: "fairprice",
        date: "Jan 2022 – Nov 2024",
        position: "Sr. Software Engineer at Fairprice Group",
        techStack: "Android (Kotlin), Jetpack Compose, MVVM, Exoplayer, Go Lang, AI Tools (Cursor, Gemini)",
        description: `I’ve implemented key features to Fairprice App including -  
        **Premium Tier**
* Delivered the feature for the FairPrice Android app (532K clicks within 8 months of launch – 31% of total app traffic) with zero production issues. 
* Implemented frontend-facing API endpoints for faster feature delivery in collaboration with backend engineers.

**Rewards**  
* Developed the FairPrice Rewards module in Jetpack Compose (10+ screens), including Rewards Redemption, Lucky Draw, Challenges, and Voucher Wallet.

* Established CI/CD and integrated code quality checks with SonarQube for the standalone SDK, then migrated it into the main repository as part of the Android monorepo initiative.

**Architecture / Codebase Maintenance**

* Implemented architectural refactoring between two modules by decoupling shared dependencies, which improved maintainability and reduced ABI build times by ~20 seconds.

* Implemented technical debt reduction initiatives including cleanup of deprecated gamification features (removing 4K+ lines of dead code), reducing app size, and enforcing feature flag cleanup processes to prevent long-term codebase bloat.`,
        icons: [
            {
                src: fairpriceIcon,
                href: "https://play.google.com/store/apps/details?id=com.fairprice.mcomapp&hl=en_SG",
                type: ProjectIconType.MOBILE,
                label: "FairPrice Android app"
            },
        ],
        media: null
    },

    {
        id: "uob",
        date: "Mar 2019 – Dec 2020",
        position: "Application Consultant at Optimum Solutions (UOB Project)",
        techStack: "Android (Kotlin, Java)",
        description: `**UOB INFINITY**
&nbsp;  
Resolved high-severity production issues and security incidents as part of production support for the UOB Infinity Singapore application, ensuring service stability and reliability.
&nbsp;  
&nbsp;  
**UOB TMRW**
&nbsp;  
Developed key engagement features for UOB TMRW as part of the Engagement Team, including real-time Expense Tracking and dynamic Polling/Surveys. Investigated and resolved region-specific bugs for UOB TMRW App, targeting users in Thailand and Indonesia, improving stability and user experience.`,
        icons: [
            {
                src: uobInfinityIcon,
                href: "https://play.google.com/store/apps/details?id=com.uob.infinity.mobi.app&hl=en_SG",
                type: ProjectIconType.MOBILE,
                label: "UOB Infinity app"
            },
            {
                src: uobTmrwThIcon,
                href: "https://play.google.com/store/apps/details?id=com.uob.mightyth2&hl=en_SG",
                type: ProjectIconType.MOBILE,
                label: "UOB TMRW Thailand app"
            },
        ],
        media: null,
    },

    {
        id: "snaaap",
        date: "Aug 2018 – Mar 2019",
        position: "Android Developer at Snaaap Philippines Inc",
        techStack: "Kotlin, MVVM, LiveData, Room, DataBinding",
        description: `Developed Snaaap, a location-based Android application from scratch that surfaces nearby deals and rewards from local merchants, covering the full Android development lifecycle through to Google Play Store deployment.`,
        icons: [],
        media: null,
    },

    {
        id: "rogomi",
        date: "April 2017 – July 2018",
        position: "Senior Android Developer at Rogomi Inc",
        techStack: "Android (Java), MVVM, Exoplayer",
        description: `Developed features across multiple Android applications, including Cignal Play, a video streaming platform where I implemented the core media player experience for Android.

Contributed to WHS, a modular cloud-based Work Health and Safety compliance application, by building dynamic form systems to support configurable data collection workflows.`,
        icons: [
            {
                src: whsIcon,
                href: "https://play.google.com/store/apps/details?id=com.au.whs.agtech&hl=en_SG",
                type: ProjectIconType.MOBILE,
                label: "WHS app"
            },
            {
                src: cignalIcon,
                href: "https://play.google.com/store/apps/details?id=tv.cignal.cignalplay",
                type: ProjectIconType.MOBILE,
                label: "Cignal Play app"
            },
        ],
        media: null,
    },

    {
        id: "clearmind",
        date: "May 2016 – Mar 2017",
        position: "Android Developer at ClearMind Algorithms Inc",
        techStack: "Android (Java), Espresso",
        description: `Developed and maintained Android applications for enterprise clients in Sales Force Automation, inventory management, and POS systems, including implementing UI automation tests using Espresso for applications such as USSC and Branch Checklist.

Provided ongoing production support and maintenance for deployed applications, coordinating closely with clients and QA teams to resolve issues and ensure stable releases.

Led the support team for the Globe project, managing issue resolution, coordinating fixes, and ensuring application stability in production environments.`,
        icons: [
            {
                src: uMoneyTransferIcon,
                href: "https://play.google.com/store/apps/details?id=com.clearmindai.ussc.panalowallet&hl=en",
                type: ProjectIconType.MOBILE,
                label: "U Money Transfer app"
            },
        ],
        media: null,
    },

    {
        id: "samsung",
        date: "Sept 2013 – Dec 2015",
        position: "Software Engineer at Samsung Electronics",
        techStack: "Android (Java)",
        description: `Customised Samsung multimedia applications (Camera, Music, Gallery) on Android OS for AU and NZ markets, implementing device-specific adaptations, patent-compliant design alternatives, and customer-requested software enhancements.`,
        icons: [],
        media: null,
        // media: {
        //     type: "image",
        //     src: samsungDemoImg,
        //     alt: "Samsung app demonstration graphic"
        // },
    },
];