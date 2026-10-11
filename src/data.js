import cfcLogo from './assets/CFC Logo.jpg';
import alignAiPreview from './assets/align-ai.jpeg';
import convoAiPreview from './assets/convo-ai-preview.png';
import profilePhoto from './assets/dp.png';

const data = {
    name: 'Ashish Soni',
    imageHome: profilePhoto,
    imageAbout: profilePhoto,
    contentBelowName: 'Turning ideas into digital reality',
    majorSkill1: 'Full Stack Web Developer',
    majorSkill2: 'coding enthusiast',
    majorSkill3: 'Competitive Programmer',
    majorProject: [{
            name: 'AlignAI',
            projDescription: 'An AI-powered product management platform that turns strategic goals and customer feedback into actionable roadmaps. It uses specialized AI agents to analyze feedback, enhance tasks, answer product questions, and create balanced plans with real-time collaboration and analytics.',
            techstackUsed: [
                'React',
                'TypeScript',
                'Node.js',
                'Express',
                'MongoDB',
                'Google Vertex AI',
                'Socket.io',
                'Tailwind CSS',
                'React Query',
            ],
            hostedLink: 'https://align-ai-two.vercel.app/dashboard',
            imageLink: alignAiPreview,
        }, {
            name: 'CodeNova',
            projDescription: 'Social media platform exclusively designed for programmers, where users receive personalized problem recommendations based on their skill ratings and rankings. Users can also engage in stimulating discussions like Stack Overflow, exchanging ideas and knowledge. This platform facilitates private user communication via chat, promoting collaborative learning and networking.',
            techstackUsed: [
                'React',
                'Express',
                'Node',
                'MongoDB',
                'Material-UI',
                'Socket.io',
                'Chart.js',
                'Axios',
                'NLTK',
                'Cloudinary',
            ],
            githubLink: 'https://github.com/Aksoni07/CodeRift',
            hostedLink: 'https://codenova-app.netlify.app/login',
            imageLink: 'http://res.cloudinary.com/df4t1zu7e/image/upload/v1694023728/mawat7wvt0c3bwdacqel.jpg',
        },
        {
            name: 'ConvoAI',
            projDescription: 'An AI-powered speaking coach for job interviews and group discussions. It provides real-time practice and personalized feedback on fluency and grammar to help users track their communication progress.',
            techstackUsed: [
                'Python',
                'Flask',
                'Google Gemini',
                'Prompt Engineering',
                'Web Speech API',
                'MongoDB',
                'Gunicorn',
            ],
            hostedLink: 'https://ai-powered-communication-practice-qit9.onrender.com/',
            imageLink: convoAiPreview,
        },
        {
            name: 'Vault-Mart',
            projDescription: 'VaultMart is a full-fledged e-commerce platform designed to provide users with a seamless online shopping experience.The platform features secure user authentication, intuitive product browsing, a streamlined checkout process, and integration with secure payment gateways. This project highlights my proficiency in full - stack development, showcasing skills in creating secure, efficient, and scalable web applications while emphasizing user - centric design and functionality.',
            techstackUsed: [
                'React JS',
                'Node JS',
                'Express JS',
                'MongoDB',
                'React Query',
                'Axios',
                'RAZORPAY API',
                'SCSS',
            ],
            githubLink: 'https://github.com/Aksoni07/Vault-Mart',
            hostedLink: 'https://vault-mart-client.vercel.app/',
            imageLink: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1735128668/VaultMart_regixj.png',
        },
        {
            name: 'QuikChat',
            projDescription: "An innovative real-time chat application and social media platform featuring user authentication,interactive posts, and seamless communication.The platform is designed to handle active users, improving user retention through a responsive UI and smooth functionality.This project highlights my expertise in full - stack development and real - time communication principles.",
            techstackUsed: [
                'React JS',
                'Node JS',
                'Express JS',
                'Mongo DB',
                'SCSS',
                'Material-UI',
            ],
            githubLink: 'https://github.com/Aksoni07/QuikChat_client',
            hostedLink: 'https://github.com/Aksoni07/QuikChat_client',
            imageLink: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1735128914/QuikChat_jipniq.png',
        },
    ],
    otherProjects: [{
            name: 'crwn-clothing',
            description: 'An e-commerce website that enables users to create accounts, log in or sign up, and seamlessly add products to their shopping carts. ',
            //max 5
            techstackUsed: [
                'React js',
                'Context API',
                'firebase',
                'styled components',
            ],
            githubLink: 'https://github.com/Aksoni07?tab=repositories',
            hostedLink: 'https://github.com/Aksoni07?tab=repositories',
        },
        {
            name: 'Job-Hunt',
            description: 'A job search platform for job seekers, and a talent search platform for employers seeking office professionals.',
            //max 5
            techstackUsed: ['React', 'Firebase', 'SCSS'],
            githubLink: 'https://github.com/Aksoni07?tab=repositories',
            hostedLink: 'https://github.com/Aksoni07?tab=repositories',
        },

        {
            name: 'Google News Clone',
            description: 'Social media platform exclusively designed for programmers, where users receive personalized problem recommendations based on their skill ratings and rankings',
            //max 5
            techstackUsed: ['React JS', 'Node JS', 'Express JS', 'MongoDB', 'SCSS'],
            githubLink: 'https://github.com/Aksoni07?tab=repositories',
            hostedLink: 'https://github.com/Aksoni07?tab=repositories',
        },
        {
            name: 'Movie',
            description: 'A responsive homepage providing comprehensive information about any movie, offering insights and details about movies',
            //max 5
            techstackUsed: ['React JS'],
            githubLink: 'https://github.com/Aksoni07?tab=repositories',
            hostedLink: 'https://github.com/Aksoni07?tab=repositories',
        },
        {
            name: 'Stress Monitoring System',
            description: 'A responsive homepage providing comprehensive information about any mmovie, offering insights and details about movies',
            //max 5
            techstackUsed: ['React, EDA Sensor, Node MCU, Arduino, NodeMCU, PPG'],
            githubLink: 'https://github.com/Aksoni07?tab=repositories',
            hostedLink: 'https://github.com/Aksoni07?tab=repositories',
        },

        {
            name: 'WorkWiz : Employee Management System',
            description: 'A responsive homepage providing comprehensive information about any mmovie, offering insights and details about movies',
            //max 5
            techstackUsed: ['SQL , MySQL'],
            githubLink: 'https://github.com/Aksoni07/WorkWiz',
            hostedLink: 'https://github.com/Aksoni07/WorkWiz',
        },

        {
            name: 'BookVault: A Library Management system',
            description: 'A responsive homepage providing comprehensive information about any mmovie, offering insights and details about movies',
            //max 5
            techstackUsed: ['SQL , MySQL'],
            githubLink: 'https://github.com/Aksoni07/BookVault',
            hostedLink: 'https://github.com/Aksoni07/BookVault',
        },
        {
            name: 'MediTrack: Healthcare Management System',
            description: 'A responsive homepage providing comprehensive information about any mmovie, offering insights and details about movies',
            //max 5
            techstackUsed: ['SQL , MySQL'],
            githubLink: 'https://github.com/Aksoni07/MediTrack',
            hostedLink: 'https://github.com/Aksoni07/MediTrack',
        },
        {
            name: 'Movie recommendation System',
            description: 'A responsive homepage providing comprehensive information about any mmovie, offering insights and details about movies',
            //max 5
            techstackUsed: ['Python , Jupyter NoteBook'],
            githubLink: 'https://github.com/Aksoni07/Movie-Recommendation',
            hostedLink: 'https://github.com/Aksoni07/Movie-Recommendation',
        },
    ],
    aboutYourself: "I’m currently a Software Developer at CoFounder Circle, where I turn ambitious ideas into reliable, AI-powered products. From intelligent workflow engines and real-time experiences to polished web platforms, I enjoy building technology that feels simple, useful, and genuinely human. I work across React, TypeScript, Python, and cloud infrastructure—bringing a competitive programmer’s curiosity and a product builder’s attention to detail to every challenge. When I’m not shipping features, I’m exploring new AI tools, solving algorithmic problems, and looking for the next hard problem worth simplifying.",
    instituteName: 'Indian Institute of Information Technology, Design and Manufacturing, Jabalpur',
    branch: 'B.Tech — Electronics and Communication Engineering | CGPA: 7.70/10',
    started: 'Dec 2021',
    end: 'Aug 2025',
    instituteLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1753298547/iiitdmj_logo_orfsjh.jpg',
    schoolName: 'Jawahar Navodaya Vidyalaya Ratibad Bhopal (JNV)',
    stream: 'PCM + Computer Science',
    schoolStarted: 'July 2012',
    schoolEnd: 'April 2019',
    schoolLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1735133212/file_zzvssa.webp',

    experience: [{
            heading: 'CoFounder Circle',
            type: 'Software Developer · On-site',
            duration: 'Nov 2025 - Present',
            companyLogo: cfcLogo,
            techstack: ['Python', 'FastAPI', 'React', 'TypeScript', 'AWS', 'Docker', 'Redis'],
            lowHeading: [{
                    content: 'Built an AI-native startup-roadmap engine with FastAPI, OpenAI orchestration, and real-time market research integrations.',
                },
                {
                    content: 'Designed a recurring subscription and billing system with PostgreSQL and Razorpay for plans, add-on credits, invoicing, and payment reconciliation.',
                },
                {
                    content: 'Developed KindPetCo APIs with JWT and OTP authentication, Redis caching, role-based access control, and Supabase PostgreSQL.',
                },
                {
                    content: 'Delivered real-time pet-walk tracking, emergency alerts, health reminders, and provider discovery workflows.',
                },
                {
                    content: 'Built a custom Shopify D2C storefront for pet products, including product discovery and end-to-end shopping flows integrated with the KindPetCo ecosystem.',
                },
                {
                    content: 'Built automated ROI dashboards with the Meta Ads Graph API, replacing manual reporting and tracking $10K+/month in startup ad spend.',
                },
                {
                    content: 'Containerized services and strengthened production reliability with AWS ELB and CloudWatch monitoring.',
                },
            ],
        },
        {
            heading: 'Umbrella Protection Systems',
            type: 'Software Developer Intern · Remote',
            duration: 'Jan 2025 - June 2025',
            companyLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1753298194/umbrlela_vqcgnp.jpg',
            techstack: ['React', 'JavaScript', 'Node.js', 'WebSockets', 'GitHub Actions', 'Jest'],
            lowHeading: [{
                    content: 'Built WebSocket-powered stock alerts and automated trade triggers, removing the need for manual monitoring.',
                },
                {
                    content: 'Integrated 15+ market-data and news APIs to support low-latency, real-time trading signals.',
                },
                {
                    content: 'Implemented CI/CD pipelines with GitHub Actions and Jest/RTL test suites, reducing deployment time from 2 hours to 20 minutes.',
                },
            ],
        },

        {
            heading: 'Octanet Services Pvt Ltd',
            type: 'Full Stack Intern',
            duration: 'July 2024 - Aug 2024',
            companyLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1735129437/Octanet_fvgzh8.jpg',
            lowHeading: [],
        },

        // {
        //     heading: 'Umbrella Protection System Pvt Ltd',
        //     type: 'SDE Intern',
        //     duration: 'April 2024 - June 2024',
        //     companyLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1735621939/Umbrella_logo_gm1dti.png',
        //     lowHeading: [],
        // },
        {
            heading: 'Fusion (IIITDM)',
            type: 'Backend Lead',
            duration: 'Sept 2023 - April 2024',
            companyLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1753298547/iiitdmj_logo_orfsjh.jpg',
            lowHeading: [],
        },

        {
            heading: 'Amazon Hackon 2023',
            type: 'Hackathon',
            duration: 'Oct 2023',
            companyLogo: 'https://enggsolution.com/faculty/imgs/placement/Amazon.jpg',
            lowHeading: [{
                content: 'ranked among the Top 50 Coders out of 47,000+ registered participants',
            }, ],
        },
        {
            heading: 'Flipkart Grid 5.0',
            type: 'Hackathon',
            duration: 'Sept 2023',
            companyLogo: 'https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/uploadedManual-64816a1a1330a_logo__3_.png',
            lowHeading: [{
                content: 'ranked among the Top 100 teams, placing me in the top 1% of participants.',
            }, ],
        },

        {
            heading: 'E-Cell IIITDM Jabalpur',
            type: 'Design Lead',
            duration: 'December 2022 - Present',
            companyLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1753298448/eCell_jkhyj1.jpg',
            lowHeading: [],
        },
        {
            heading: 'Business and Management Club IIITDM Jabalpur',
            type: 'Design Lead',
            duration: 'August 2022 - March 2023',
            companyLogo: 'https://www.iiitdmj.ac.in/bmc.iiitdmj.ac.in/IMG/logo-2.png',
            lowHeading: [],
        },
        {
            heading: 'Jagrathi Club IIITDM Jabalpur',
            type: 'Mentor',
            duration: 'August 2022 - March 2023',
            companyLogo: 'https://jagrati.iiitdmj.ac.in/static/home/logo.jpg',
            lowHeading: [],
        },

        {
            heading: 'National Service Scheme (NSS)',
            type: 'Volunteer & Team Lead',
            duration: 'July 2017  - April 2019',
            companyLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1735129569/NSS_kzwlff.jpg',
            lowHeading: [],
        },

        {
            heading: 'National Cadet Corps (NCC)',
            type: 'Student Volunteer',
            duration: 'July 2015  - April 2017',
            companyLogo: 'https://res.cloudinary.com/dc8qg0nbr/image/upload/v1735129609/NCC_buzyws.jpg',
            lowHeading: [],
        },



    ],
    emailId: 'ashishsoni7195@gmail.com',
    phoneNo: '+91 9407249894',
    approximateBudget: '$300',
};

export default data;
