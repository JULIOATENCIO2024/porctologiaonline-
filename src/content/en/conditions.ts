import type { Condition } from '../../data/types';

// English (US) condition pages. Legal framing for the US/Canada market: our doctors are licensed in Peru only.
// The video visit is presented as a second opinion and medical guidance from Lima, with a written plan the
// patient can share with a local doctor, and as a starting point for traveling to Lima for treatment.
// No online diagnosis, no prescriptions, no drug names (BUILD §8).

export const conditions: Condition[] = [
  // ───────────────────────────── Hemorrhoids ─────────────────────────────
  {
    key: 'hemorroides',
    slug: 'hemorrhoids',
    navLabel: 'Hemorrhoids',
    title: 'Hemorrhoid Treatment: Video Second Opinion',
    description:
      "Hemorrhoids that bleed, swell or keep coming back? Talk with a colorectal specialist from Lima by video, get a written plan and know your treatment options.",
    h1: 'Hemorrhoids: treatment options and a second opinion by video',
    whatIs:
      "Hemorrhoids are cushions of blood vessels inside and around the anus that everyone has. They become a problem when they swell, bleed or slip out. Internal hemorrhoids usually cause bright red bleeding with bowel movements; external ones can form a tender lump, especially when a clot forms inside. Most cases improve with diet and office-based care, and only some need surgery.",
    signs: {
      intro: 'It makes sense to talk with a colorectal specialist if you notice any of the following:',
      list: [
        'Bright red blood on the toilet paper or in the bowl more than once',
        'A lump that comes out when you strain and goes back in, or stays out',
        'A painful, firm lump at the edge of the anus that appeared over a day or two',
        'Itching, soiling or a feeling that you did not fully empty',
        'Symptoms that keep returning despite creams, fiber and sitz baths',
        'A surgeon has recommended an operation and you want a second opinion first',
      ],
    },
    online: {
      can: [
        'Review your symptoms, history, bowel habits and any photos of reports or prior exams you share',
        'Explain what usually causes symptoms like yours and which conditions need to be ruled out',
        'Walk you through diet, fiber, toilet habits and hygiene measures in detail',
        'Compare office procedures and surgical options so you understand the pros and cons',
        'Give you a second opinion on a surgery that has already been proposed to you',
        'Send you a written plan you can share with your local doctor',
      ],
      cannot: [
        'Confirm what is going on without a physical exam and anoscopy',
        'Perform banding or any other procedure',
        'Issue medication orders; any medication follows the rules of the country where you live',
        'Replace emergency care if you are bleeding heavily or feel faint',
      ],
      note:
        "Our doctors are licensed in Peru, not in the United States or Canada. The video visit is medical guidance and a second opinion from Lima. If you need an exam or a procedure, we explain what to ask your local doctor for, or how to plan treatment with us in <a href=\"/en/treatment-in-lima/\">Lima</a>.",
    },
    urgent: [
      'Heavy bleeding, passing clots, or bleeding that does not stop',
      'Dizziness, fainting, a racing heart or very pale skin',
      'Severe pain with fever or a lump that turns dark and very hard',
      'Bleeding while you take blood thinners',
    ],
    sections: [
      {
        h2: 'Why hemorrhoids flare up',
        paras: [
          "Anything that raises pressure in the lower rectum can make hemorrhoids swell: straining on the toilet, hard stools, long sessions on the phone while sitting there, chronic diarrhea, heavy lifting, pregnancy and the weeks after giving birth. Low-fiber eating and not drinking enough water play a big role. With age, the tissue that holds the cushions in place also loosens, which is why prolapse becomes more common over time.",
          "Doctors grade internal hemorrhoids from 1 to 4. Grade 1 bleeds but does not come out; grade 2 comes out and goes back on its own; grade 3 has to be pushed back; grade 4 stays out. The grade, together with how much the symptoms bother you, is what guides the treatment plan.",
        ],
      },
      {
        h2: 'Treatment options, from simplest to surgery',
        paras: [
          "Most people start with conservative care, and US and UK guidelines agree it should come first. When that is not enough, office-based procedures are the next step. Surgery is kept for large, prolapsed or mixed hemorrhoids, or for cases where other approaches have failed.",
        ],
        list: [
          '<strong>Diet and habits:</strong> 25 to 35 grams of fiber a day, plenty of fluids, short toilet visits and no straining',
          '<strong>Medical treatment:</strong> creams, suppositories or pills for short periods to calm symptoms, chosen by a doctor who can follow you up locally',
          '<strong>Office procedures:</strong> rubber band ligation, sclerotherapy or infrared coagulation for internal hemorrhoids',
          '<strong>Surgery:</strong> hemorrhoidectomy, stapled hemorrhopexy or Doppler-guided ligation, depending on the grade and anatomy',
          '<strong>Thrombosed external hemorrhoid:</strong> within the first days, a minor in-office procedure may help; after that, it usually settles with home care',
        ],
      },
      {
        h2: 'Getting a second opinion before surgery',
        paras: [
          "If you have been told you need a hemorrhoidectomy, it is reasonable to ask whether a banding session or a less invasive approach could work for you, what recovery really looks like, and how long you will be off work. During the 30-minute video visit our specialist goes through your case, the grade you were given and the plan offered, and explains the trade-offs in plain language. You can read more on our <a href=\"/en/second-opinion/\">second opinion</a> page.",
          "Some patients from the US, Canada and the Caribbean choose to have their procedure in Lima at Clínica Proctológica de Lima. If that is something you are weighing, we can explain what the trip involves, how many days you should plan to stay and what to bring.",
        ],
      },
      {
        h2: 'Preventing the next flare-up',
        list: [
          'Build fiber up over two to three weeks with fruit, vegetables, legumes, oats and whole grains',
          'Drink water through the day, more in hot weather or when you exercise',
          'Go when you feel the urge, and leave the phone outside the bathroom',
          'Try a small footstool so your knees sit above your hips',
          'Stay active; walking helps bowel movements stay regular',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can hemorrhoids go away on their own?',
        a: "Many flare-ups settle within one to two weeks with fiber, fluids, sitz baths and not straining. Hemorrhoids that keep bleeding or prolapsing usually need an office procedure or, in some cases, surgery. A specialist can help you decide which group you fall into.",
      },
      {
        q: 'Is rectal bleeding always from hemorrhoids?',
        a: "No. Fissures, polyps, inflammatory bowel disease and colorectal cancer can also bleed. That is why new bleeding, especially after age 45 or with changes in bowel habits, deserves an evaluation. Read our guide on <a href=\"/en/rectal-bleeding/\">rectal bleeding</a>.",
      },
      {
        q: 'Can you tell for sure that I have hemorrhoids over video?',
        a: "Not with certainty. A firm answer needs an in-person exam. On the video visit the specialist reviews your symptoms, orients you and builds a plan. If an exam is needed, you will know exactly what to ask your local doctor for, or how to arrange it in Lima.",
      },
      {
        q: 'How painful is recovery after hemorrhoid surgery?',
        a: "It depends on the technique. Office banding usually causes a few days of pressure or mild discomfort. A traditional hemorrhoidectomy tends to hurt more during the first one to two weeks. Your surgeon should explain pain control, diet and time off work before you schedule anything.",
      },
      {
        q: 'Can you send medication to my pharmacy?',
        a: "No. Our doctors are licensed in Peru, so any medication is handled by your local doctor according to the rules of your country. You receive a written plan with the general approach, which you can share with them.",
      },
    ],
    refs: [
      {
        label: 'American Society of Colon and Rectal Surgeons. Clinical Practice Guidelines (including management of hemorrhoids)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
      {
        label: 'ASCRS. Hemorrhoids: patient information',
        url: 'https://fascrs.org/patients/diseases-and-conditions/a-z/hemorrhoids',
      },
      {
        label: 'NIDDK (National Institutes of Health). Hemorrhoids',
        url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/hemorrhoids',
      },
      {
        label: 'NICE Clinical Knowledge Summaries. Haemorrhoids',
        url: 'https://cks.nice.org.uk/topics/haemorrhoids/',
      },
    ],
  },

  // ───────────────────────────── Anal fissure ─────────────────────────────
  {
    key: 'fisura',
    slug: 'anal-fissure',
    navLabel: 'Anal fissure',
    title: 'Anal Fissure Treatment: Second Opinion by Video',
    description:
      "Sharp pain and bleeding with bowel movements? Learn about anal fissure treatment and talk with a colorectal specialist from Lima by video for a written plan.",
    h1: 'Anal fissure: treatment options and expert guidance by video',
    whatIs:
      "An anal fissure is a small tear in the lining of the anal canal. It causes sharp, cutting pain during a bowel movement and a burning or throbbing ache that can last for hours afterward, often with a streak of bright red blood. Most new fissures heal with stool softening and medical treatment; fissures that last more than six to eight weeks are considered chronic.",
    signs: {
      intro: 'Consider talking with a colorectal specialist if:',
      list: [
        'You feel a sharp, glass-like pain every time you pass stool',
        'The pain lingers for minutes or hours after you leave the bathroom',
        'You see bright red blood on the paper',
        'You have started to avoid going to the bathroom because of the pain',
        'You notice a small skin tag at the edge of the anus that was not there before',
        'Symptoms have lasted more than four to six weeks, or keep coming back',
      ],
    },
    online: {
      can: [
        'Review your symptoms in detail and explain why they fit, or do not fit, a fissure',
        'Explain the stages of care, from diet changes to procedures',
        'Help you set up a stool-softening and sitz bath routine that is realistic for you',
        'Discuss what to expect from medical treatment, injection-based treatment and surgery',
        'Give you a second opinion if you have been offered a sphincterotomy',
        'Send a written plan you can share with your local doctor',
      ],
      cannot: [
        'Confirm the fissure or rule out other causes without an exam',
        'Order or provide medication; that follows the rules of your country',
        'Perform injections or surgery remotely',
        'Replace urgent care if you have fever, a growing lump or heavy bleeding',
      ],
      note:
        "Our doctors are licensed in Peru, not in the United States or Canada. What we offer is a second opinion and medical guidance from Lima. If you need an exam or a procedure, we tell you what to ask for locally, or how to plan your treatment in <a href=\"/en/treatment-in-lima/\">Lima</a>.",
    },
    urgent: [
      'Fever with increasing pain and a swollen, hot area near the anus',
      'Heavy bleeding or passing clots',
      'Pain so severe you cannot sit, walk or pass urine',
    ],
    sections: [
      {
        h2: 'Why fissures happen and why some will not heal',
        paras: [
          "Most fissures start with a hard or large stool that stretches the anal canal, although repeated diarrhea can cause them too. Pain makes the internal sphincter muscle tighten, and that spasm reduces blood flow to the tear. Less blood flow means slower healing, and every painful bowel movement restarts the cycle.",
          "Fissures are common after childbirth. When a fissure sits in an unusual location, or there are several of them, doctors look for other causes such as Crohn's disease, infections or, rarely, a tumor. That is one reason an in-person exam matters if the problem persists.",
          "Fear of the next bowel movement is very real with a fissure. Many people start holding in stool, which makes it harder and restarts the cycle. Understanding this pattern is the first step to breaking it.",
        ],
      },
      {
        h2: 'How anal fissures are treated',
        paras: [
          "The ASCRS guideline recommends starting with conservative care, which helps roughly half of acute fissures. If the tear does not heal, the next steps aim to relax the sphincter and restore blood flow.",
        ],
        list: [
          '<strong>Soft, regular stools:</strong> fiber, fluids and, if needed, a gentle stool softener',
          '<strong>Warm sitz baths:</strong> 10 to 15 minutes, two or three times a day, especially after a bowel movement',
          '<strong>Medical treatment:</strong> topical ointments that relax the muscle, used for six to eight weeks under a local doctor',
          '<strong>Injection-based treatment:</strong> an in-office injection that temporarily relaxes the sphincter',
          '<strong>Surgery:</strong> lateral internal sphincterotomy, which has the highest healing rate for chronic fissures and a small risk of changes in continence',
        ],
      },
      {
        h2: 'Why a second opinion makes sense before surgery',
        paras: [
          "Sphincterotomy works well, but it divides part of a muscle that helps you control gas and stool. The decision should weigh how long you have had the fissure, what you have already tried, your bowel habits, past childbirths and any prior anal surgery. In a 30-minute video visit our specialist reviews all of this with you and explains whether it makes sense to try another step first. More on our <a href=\"/en/second-opinion/\">second opinion</a> page.",
        ],
      },
      {
        h2: 'Daily habits that help the tear heal',
        list: [
          'Do not delay when you feel the urge; waiting makes stools harder',
          'Avoid straining and limit time on the toilet to a few minutes',
          'Clean gently with water instead of rubbing with dry paper',
          'Cut back on spicy food and alcohol if you notice they make it worse',
          'Stay consistent for weeks; fissures heal slowly even when you feel better',
        ],
      },
    ],
    faqs: [
      {
        q: 'How long does an anal fissure take to heal?',
        a: "An acute fissure often heals in two to six weeks with soft stools and sitz baths. If it lasts more than six to eight weeks, it is considered chronic and usually needs medical treatment or a procedure.",
      },
      {
        q: 'Is it a fissure or a hemorrhoid?',
        a: "A fissure usually causes sharp pain during and after a bowel movement. Internal hemorrhoids usually bleed without much pain. They can also happen together. Only an exam confirms which one you have; see our page on <a href=\"/en/hemorrhoids/\">hemorrhoids</a>.",
      },
      {
        q: 'Will I need surgery?',
        a: "Most people do not. Surgery is considered when a chronic fissure does not heal with conservative and medical treatment. If it has been recommended to you, a second opinion helps you understand the benefits and risks before you decide.",
      },
      {
        q: 'Can you tell me which ointment to use?',
        a: "We do not issue medication orders or name specific medications online. We explain the types of medical treatment that exist and what to discuss with your local doctor, who can provide them according to the rules of your country.",
      },
      {
        q: 'What should I prepare for the video visit?',
        a: "A short timeline of your symptoms, what you have tried and for how long, any prior colonoscopy or exam reports, and a private, quiet place for the call. You do not need to show anything on camera.",
      },
    ],
    refs: [
      {
        label: 'ASCRS. Clinical Practice Guidelines (including management of anal fissures)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
      {
        label: 'ASCRS. Anal fissure: patient information',
        url: 'https://fascrs.org/patients/diseases-and-conditions/a-z/anal-fissure',
      },
      {
        label: 'NICE Clinical Knowledge Summaries. Anal fissure',
        url: 'https://cks.nice.org.uk/topics/anal-fissure/',
      },
      {
        label: 'NHS. Anal fissure',
        url: 'https://www.nhs.uk/conditions/anal-fissure/',
      },
    ],
  },

  // ───────────────────────────── Anal fistula & abscess ─────────────────────────────
  {
    key: 'fistula',
    slug: 'anal-fistula',
    navLabel: 'Anal fistula & abscess',
    title: 'Anal Fistula & Abscess: Second Opinion by Video',
    description:
      "An anal abscess or fistula that keeps draining? Understand surgical options like fistulotomy, seton and LIFT with a colorectal specialist from Lima by video.",
    h1: 'Anal fistula and abscess: understand your options before surgery',
    whatIs:
      "An anal abscess is a pocket of pus near the anus, usually from a blocked gland in the anal canal. After it is drained, about one in three people develop a fistula: a small tunnel between the inside of the anal canal and the skin outside. A fistula often drains pus or blood on and off and generally needs surgery to close.",
    signs: {
      intro: 'Talk with a colorectal specialist if you have:',
      list: [
        'A small opening near the anus that drains pus, blood or fluid on and off',
        'An abscess that was drained and keeps coming back in the same area',
        'Recurring pain and swelling that eases when it drains',
        'Skin irritation from constant moisture or staining in your underwear',
        'A fistula surgery already scheduled and doubts about the technique',
        "A history of Crohn's disease with new symptoms around the anus",
      ],
    },
    online: {
      can: [
        'Review your history, the abscess episodes and any MRI or ultrasound reports you share',
        'Explain how fistulas are classified and why that changes the surgical plan',
        'Describe the main techniques and their trade-offs between healing and continence',
        'Give you a second opinion on a surgery that has already been offered',
        'Tell you which imaging tests are usually requested before surgery',
        'Send a written plan you can share with your local doctor or surgeon',
      ],
      cannot: [
        'Drain an abscess; that has to be done in person, often the same day',
        'Map the fistula tract without an exam under anesthesia or imaging',
        'Provide medication; that follows the rules of your country',
        'Replace emergency care when there is fever or spreading redness',
      ],
      note:
        "Our doctors are licensed in Peru, not in the United States or Canada. The video visit is a second opinion and medical guidance from Lima. If surgery is needed, you can have it with your local team or plan your treatment in <a href=\"/en/treatment-in-lima/\">Lima</a>.",
    },
    urgent: [
      'A painful, hot, swollen lump near the anus, especially with fever or chills',
      'Redness or swelling that spreads across the buttock or toward the genitals',
      'Severe pain that keeps you from sitting or passing urine',
      'Any of the above if you have diabetes or a weakened immune system',
    ],
    sections: [
      {
        h2: 'From abscess to fistula: what happens',
        paras: [
          "Small glands line the inside of the anal canal. When one gets blocked and infected, pus collects and pushes outward, forming an abscess. The standard treatment is prompt drainage; antibiotics alone are usually not enough. Once the pus is out, the pain eases, but the tunnel the infection created may stay open and become a fistula.",
          "Fistulas are described by how they relate to the sphincter muscles. A low fistula crosses little or no muscle. A high or complex fistula crosses a larger part of it, has branches or sits in front in women. That classification decides how much muscle can be safely divided.",
          "People with Crohn's disease, diabetes or a history of radiation to the pelvis need extra care in planning, because healing can be slower and recurrences more common.",
        ],
      },
      {
        h2: 'Surgical options for an anal fistula',
        paras: [
          "Fistulas rarely close on their own, so surgery is the usual path. The goal is always to close the tract while protecting continence. The ASCRS guideline describes several techniques:",
        ],
        list: [
          '<strong>Fistulotomy:</strong> opens the tract so it heals from the inside out; high success for low, simple fistulas',
          '<strong>Seton:</strong> a soft thread placed through the tract to let it drain and settle, often as a first stage',
          '<strong>LIFT procedure:</strong> closes the tract between the sphincter muscles without cutting them',
          '<strong>Advancement flap:</strong> covers the internal opening with healthy tissue',
          "<strong>Other options:</strong> chosen case by case, especially with Crohn's disease or after a recurrence",
        ],
      },
      {
        h2: 'Why a second opinion matters for fistula surgery',
        paras: [
          "Fistula surgery involves a trade-off between the chance of healing and the risk of changes in bowel control. Two surgeons can reasonably recommend different approaches for the same fistula. During a 30-minute video visit, our specialist reviews your imaging reports and the plan you were offered, explains the reasoning behind each option and lists the questions to ask your surgeon. More on our <a href=\"/en/second-opinion/\">second opinion</a> page.",
          "If you decide to have surgery in Lima, the team at Clínica Proctológica de Lima can coordinate the exam, imaging and procedure, and explain how long to stay for follow-up visits.",
        ],
      },
      {
        h2: 'Recovery and follow-up',
        list: [
          'Wound care with warm water rinses or sitz baths after each bowel movement',
          'Soft stools with fiber and fluids to protect the healing area',
          'Regular checkups until the wound closes, which can take several weeks',
          'Clear return precautions if new swelling, fever or drainage appears',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can an anal fistula heal without surgery?',
        a: "It is uncommon. Most fistulas need a procedure to close the tract. A seton can control drainage and inflammation while a definitive plan is prepared, which is common in complex cases.",
      },
      {
        q: 'Will fistula surgery affect my bowel control?',
        a: "It depends on how much sphincter muscle the fistula crosses and the technique used. Simple, low fistulas carry a low risk; complex ones require techniques that spare the muscle. Your surgeon should explain this before you consent.",
      },
      {
        q: 'Do I need an MRI before surgery?',
        a: "For recurrent or complex fistulas, pelvic MRI or endoanal ultrasound is often used to map the tract. For a simple, low fistula, an exam may be enough. We can explain which applies to your situation.",
      },
      {
        q: 'Can you look at my abscess on camera?',
        a: "We do not examine the area on camera. An abscess needs to be seen and drained in person, usually at an emergency or urgent care center. Once you are past that stage, a video visit helps you plan what comes next.",
      },
      {
        q: 'How long does recovery take?',
        a: "Most people return to desk work within one to two weeks, but the wound may take four to twelve weeks to fully heal, depending on the technique and the size of the tract.",
      },
    ],
    refs: [
      {
        label: 'ASCRS. Clinical Practice Guidelines (including anorectal abscess, fistula-in-ano and rectovaginal fistula)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
      {
        label: 'ASCRS. Diseases and conditions: patient information',
        url: 'https://fascrs.org/patients/diseases-and-conditions',
      },
      {
        label: 'NHS. Anal fistula',
        url: 'https://www.nhs.uk/conditions/anal-fistula/',
      },
    ],
  },

  // ───────────────────────────── Anal warts ─────────────────────────────
  {
    key: 'condilomas',
    slug: 'anal-warts',
    navLabel: 'Anal warts',
    title: 'Anal Warts (Condyloma): Private Video Consultation',
    description:
      "Bumps or growths around the anus? Learn about anal warts caused by HPV and talk privately by video with a colorectal specialist from Lima for a written plan.",
    h1: 'Anal warts (condyloma): private guidance on treatment',
    whatIs:
      "Anal warts, also called condylomata acuminata, are soft, skin-colored growths around or inside the anus caused by certain types of human papillomavirus (HPV). HPV is very common and spreads through skin-to-skin contact. Warts may itch or bleed, or cause no symptoms at all. They can be treated, but the virus may remain in the skin, so warts can come back.",
    signs: {
      intro: 'It is a good idea to see a specialist if you notice:',
      list: [
        'Small bumps, flat or cauliflower-like, around the anus',
        'Itching, moisture or light bleeding from the area',
        'A feeling of a lump during cleaning',
        'Warts that returned after treatment',
        'A partner who was recently told they have HPV or genital warts',
        'A weakened immune system, including HIV, and any new growth in the area',
      ],
    },
    online: {
      can: [
        'Talk through your concerns in a private, nonjudgmental conversation',
        'Explain what HPV is, how it spreads and what it means for you and your partners',
        'Describe the treatment options and what each involves',
        'Explain why checking inside the anal canal matters and which test to ask for',
        'Discuss HPV vaccination and follow-up',
        'Send a written plan you can share with your local doctor',
      ],
      cannot: [
        'Confirm warts or rule out other conditions without an in-person exam',
        'Remove warts or perform any procedure',
        'Provide medication; that follows the rules of your country',
        'Take or review samples without an exam where you are',
      ],
      note:
        "Our doctors are licensed in Peru, not in the United States or Canada. This is medical guidance and a second opinion from Lima. If you need treatment in the office, we explain what to ask for locally or how to plan it in <a href=\"/en/treatment-in-lima/\">Lima</a>. Your conversation stays private.",
    },
    urgent: [
      'Heavy bleeding from the area',
      'A lump that is growing rapidly, hard, ulcerated or very painful',
      'Fever with increasing pain or swelling around the anus',
    ],
    sections: [
      {
        h2: 'HPV and anal warts: the basics',
        paras: [
          "Most sexually active adults will be exposed to HPV at some point. The low-risk types that cause warts are different from the high-risk types linked to anal and cervical cancer, although a person can carry more than one type. Warts can appear weeks or months after exposure, so it is often impossible to know when or from whom the infection came.",
          "Condoms reduce but do not eliminate transmission, because HPV lives on skin that a condom does not cover. Anal warts do not always mean receptive anal sex; the virus can spread from nearby skin.",
          "Finding a wart can be stressful and embarrassing, and many people wait months before talking to anyone. That delay rarely helps: small, recent warts are usually easier to treat than large clusters. A calm conversation with a specialist who sees this every week can answer your questions about relationships, testing and timing, and help you take the next step with a clear plan.",
          "Other conditions can look similar, including skin tags, molluscum contagiosum, hemorrhoids and, rarely, early skin cancers. That is why an in-person look, and sometimes a small biopsy, is part of good care before any treatment starts.",
        ],
      },
      {
        h2: 'Treatment options',
        paras: [
          "The right approach depends on the number, size and location of the warts, and on whether they also grow inside the anal canal. CDC and ASCRS guidance describe these options:",
          "No single method works for everyone, and it is common to combine approaches or repeat treatment. Ask your local doctor how many sessions to expect, how the skin should be cared for in between and when to come back.",
        ],
        list: [
          '<strong>Topical medical treatment:</strong> for small external warts, applied at home for several weeks under a local doctor',
          '<strong>Office-based treatment:</strong> cryotherapy (cold therapy), chemical application or removal of small lesions',
          '<strong>Surgical removal:</strong> excision or electrocautery, often in an operating room when warts are extensive or inside the canal',
          '<strong>Follow-up visits:</strong> recurrences are common in the first months, so regular checks help catch new lesions early',
        ],
      },
      {
        h2: 'Screening inside the anal canal',
        paras: [
          "Warts outside the anus can come with lesions inside, which is why a specialist usually examines the canal with an anoscope. People living with HIV, transplant recipients and some other groups have a higher risk of anal precancer. For them, specialists may recommend anal cytology or high-resolution anoscopy. On the video visit we explain whether this applies to you and how to request it.",
        ],
      },
      {
        h2: 'Prevention and protecting your partners',
        list: [
          'HPV vaccination is recommended through age 26, and some adults up to 45 may benefit after talking with their doctor',
          'Avoid sexual contact while warts are visible or being treated',
          'Do not shave or pick at the area, which can spread the virus',
          'Encourage partners to get checked; they may have no symptoms',
          'Keep follow-up appointments even when the skin looks clear',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are anal warts cancer?',
        a: "No. Warts are caused by low-risk HPV types and are benign. However, some people also carry high-risk types, so a specialist may recommend checking the anal canal, especially if you have a weakened immune system.",
      },
      {
        q: 'Can anal warts go away without treatment?',
        a: "Some do over months, but many grow or spread. Treatment reduces symptoms and the chance of passing them on. Because the virus can stay in the skin, follow-up is important.",
      },
      {
        q: 'Do I have to show the area on camera?',
        a: "No. We do not ask you to show the area. The conversation focuses on your history and concerns, and the written plan explains what kind of in-person exam to request.",
      },
      {
        q: 'Should my partner be checked?',
        a: "It is a good idea. Many people with HPV have no visible warts. Your partner can talk with their own doctor about an exam and vaccination.",
      },
      {
        q: 'Is the consultation confidential?',
        a: "Yes. The video call is private, and your health information is handled according to our <a href=\"/en/legal/privacy/\">privacy policy</a>. Your condition is never shared with advertising platforms.",
      },
    ],
    refs: [
      {
        label: 'CDC. Sexually Transmitted Infections Treatment Guidelines: Anogenital Warts',
        url: 'https://www.cdc.gov/std/treatment-guidelines/anogenital-warts.htm',
      },
      {
        label: 'CDC. Human papillomavirus (HPV) and vaccination',
        url: 'https://www.cdc.gov/hpv/',
      },
      {
        label: 'ASCRS. Clinical Practice Guidelines (including anal squamous neoplasms)',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
      {
        label: 'NHS. Genital warts',
        url: 'https://www.nhs.uk/conditions/genital-warts/',
      },
    ],
  },

  // ───────────────────────────── Rectal bleeding ─────────────────────────────
  {
    key: 'sangrado',
    slug: 'rectal-bleeding',
    navLabel: 'Rectal bleeding',
    title: 'Rectal Bleeding: When to See a Doctor',
    description:
      "Blood on the toilet paper or in the bowl? Learn the common causes of rectal bleeding, the warning signs and when to see a colorectal specialist. Video guidance.",
    h1: 'Rectal bleeding: common causes and when to see a doctor',
    whatIs:
      "Rectal bleeding means blood coming from the anus, seen on toilet paper, in the bowl or mixed with stool. Bright red blood usually comes from the anus or lower rectum, often from hemorrhoids or a fissure. Darker blood or black stools suggest a source higher up. Bleeding is common and usually benign, but it should never simply be ignored.",
    signs: {
      intro: 'Book an evaluation if you notice:',
      list: [
        'Bleeding that happens more than once, even if it is small',
        'Blood mixed into the stool rather than just on the paper',
        'A change in bowel habits lasting more than a few weeks',
        'Unexplained weight loss, tiredness or a low blood count',
        'Bleeding at age 45 or older, or a family history of colorectal cancer',
        'Pain, a lump or mucus along with the bleeding',
      ],
    },
    online: {
      can: [
        'Go through the details of the bleeding: color, amount, timing and related symptoms',
        'Help you sort out which causes are most likely and which ones must be ruled out',
        'Tell you how urgent an in-person evaluation is in your case',
        'Explain which tests are usually considered, such as anoscopy or colonoscopy, and why',
        'Review prior colonoscopy or lab reports and give a second opinion',
        'Send a written plan you can share with your local doctor',
      ],
      cannot: [
        'Find the source of bleeding without an exam or endoscopy',
        'Order lab tests or imaging in the US or Canada',
        'Provide medication; that follows the rules of your country',
        'Replace emergency care for heavy or ongoing bleeding',
      ],
      note:
        "Our doctors are licensed in Peru, not in the United States or Canada. The video visit offers medical guidance and a second opinion from Lima. If you need an exam or colonoscopy, we explain what to ask for locally or how to arrange it in <a href=\"/en/treatment-in-lima/\">Lima</a>.",
    },
    urgent: [
      'Large amounts of blood, clots, or bleeding that will not stop',
      'Black, tarry stools or vomiting blood',
      'Dizziness, fainting, shortness of breath or a racing heart',
      'Bleeding with severe abdominal pain or fever',
    ],
    sections: [
      {
        h2: 'Most common causes of rectal bleeding',
        list: [
          '<strong><a href="/en/hemorrhoids/">Hemorrhoids</a>:</strong> bright red blood, often without pain, on the paper or dripping into the bowl',
          '<strong><a href="/en/anal-fissure/">Anal fissure</a>:</strong> a streak of blood with sharp pain during and after bowel movements',
          '<strong>Polyps:</strong> growths in the colon that may bleed and are removed during colonoscopy',
          '<strong>Inflammatory bowel disease:</strong> bleeding with diarrhea, mucus, urgency or cramps',
          '<strong>Diverticular bleeding:</strong> sudden, usually without pain and sometimes heavy bleeding in older adults',
          '<strong>Colorectal or anal cancer:</strong> less common, but the reason bleeding should always be evaluated',
        ],
      },
      {
        h2: 'What the color and pattern can suggest',
        paras: [
          "Bright red blood on the paper after a hard stool often points to a fissure or hemorrhoids. Maroon blood mixed with stool can come from higher in the colon. Black, sticky stools usually mean bleeding from the stomach or small intestine and need urgent care. These are clues, not answers: only an exam and sometimes a colonoscopy can confirm the source.",
          "Some foods and iron supplements darken stool, and beets can turn it reddish. Mention anything like this during your visit so the specialist can take it into account.",
          "How the bleeding behaves over time matters too. A single episode after a hard bowel movement that never returns is different from small amounts of blood every week for months. Bleeding that comes with a change in stool shape, a feeling that you never fully empty, or new tiredness deserves an evaluation even when the amount is small. Keeping a short diary for a week or two gives your doctor useful information.",
        ],
      },
      {
        h2: 'When a colonoscopy is recommended',
        paras: [
          "US guidelines recommend colorectal cancer screening for average-risk adults starting at age 45. Bleeding is a symptom, not a screening situation, so a doctor may suggest a colonoscopy at any age if the pattern is concerning, if there is anemia or if there is a family history. During the 30-minute video visit our specialist explains whether your situation calls for an anoscopy, a flexible sigmoidoscopy or a full colonoscopy, and how to prepare.",
          "If you live in the US or Canada and already have a gastroenterologist or primary care doctor, our written plan is designed to support that relationship, not replace it. Many patients use the visit to understand their options and arrive at their local appointment with better questions.",
        ],
      },
      {
        h2: 'How to prepare for your visit',
        list: [
          'Note when the bleeding started, how often it happens and how much you see',
          'List medications you take, especially blood thinners and aspirin, so the doctor has the full picture',
          'Have recent lab results or colonoscopy reports at hand',
          'Write down your family history of polyps or colorectal cancer',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is a little blood on the toilet paper serious?',
        a: "Usually it comes from hemorrhoids or a fissure, but you cannot tell for sure without an exam. If it happens more than once, or with other symptoms, see a doctor. If it comes with dizziness or heavy flow, go to an emergency room.",
      },
      {
        q: 'Do I need a colonoscopy?',
        a: "Not always. It depends on your age, risk factors, the type of bleeding and what an exam shows. Many people under 45 with typical hemorrhoid bleeding need only an anoscopy. Your local doctor or our team can help you decide.",
      },
      {
        q: 'Can stress cause rectal bleeding?',
        a: "Stress does not cause bleeding directly, but it can change bowel habits, leading to constipation or diarrhea, which can aggravate hemorrhoids or fissures.",
      },
      {
        q: 'Can you tell where my bleeding comes from over video?',
        a: "No. On the video visit the specialist reviews your symptoms, orients you and builds a plan. If an exam is needed, you will know where and how to get it, and what to ask for.",
      },
      {
        q: 'What if I already had a colonoscopy?',
        a: "Share the report during the visit. We can explain the findings in plain language, tell you what they mean for the bleeding and give you a second opinion on next steps.",
      },
    ],
    refs: [
      {
        label: 'NIDDK (National Institutes of Health). Gastrointestinal bleeding',
        url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/gastrointestinal-bleeding',
      },
      {
        label: 'US Preventive Services Task Force. Colorectal cancer: screening',
        url: 'https://www.uspreventiveservicestaskforce.org/uspstf/recommendation/colorectal-cancer-screening',
      },
      {
        label: 'NICE. Suspected cancer: recognition and referral (NG12)',
        url: 'https://www.nice.org.uk/guidance/ng12',
      },
      {
        label: 'ASCRS. Clinical Practice Guidelines',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
    ],
  },

  // ───────────────────────────── Anal itching ─────────────────────────────
  {
    key: 'picazon',
    slug: 'anal-itching',
    navLabel: 'Anal itching',
    title: 'Anal Itching (Pruritus Ani): Causes and Relief',
    description:
      "Anal itching that will not go away? Learn the causes of pruritus ani and how to break the itch cycle with a colorectal specialist from Lima by video.",
    h1: 'Anal itching (pruritus ani): causes and how to find relief',
    whatIs:
      "Anal itching, or pruritus ani, is an urge to scratch the skin around the anus. It is very common and often worse at night or after a bowel movement. It can come from moisture, irritation from soaps or wipes, certain foods, skin conditions, infections or anorectal problems such as hemorrhoids. In many people, the itch-scratch cycle keeps it going.",
    signs: {
      intro: 'It is worth consulting a specialist if:',
      list: [
        'Itching has lasted more than two to three weeks',
        'It wakes you up at night or affects your daily life',
        'You notice bleeding, a lump or discharge along with the itch',
        'The skin looks raw, thickened, white or cracked',
        'Over-the-counter products have not helped or made it worse',
        'Others in your home also have itching, which could suggest pinworms',
      ],
    },
    online: {
      can: [
        'Review your symptoms, hygiene routine, diet and products you use',
        'Explain the most common causes and which ones need ruling out',
        'Help you build a step-by-step skin care plan to break the itch cycle',
        'Identify foods and habits that commonly make itching worse',
        'Tell you when an in-person exam or skin test makes sense',
        'Send a written plan you can share with your local doctor',
      ],
      cannot: [
        'Examine the skin or take samples remotely',
        'Confirm an infection or skin condition without an exam',
        'Provide medication; that follows the rules of your country',
        'Replace an evaluation if there is bleeding, a lump or weight loss',
      ],
      note:
        "Our doctors are licensed in Peru, not in the United States or Canada. The video visit is medical guidance and a second opinion from Lima. If you need an exam, we explain what to ask for locally or how to arrange it in <a href=\"/en/treatment-in-lima/\">Lima</a>.",
    },
    urgent: [
      'Itching with heavy bleeding or a growing lump',
      'Fever with a painful, swollen area near the anus',
      'Spreading redness or open sores with pain',
    ],
    sections: [
      {
        h2: 'Common causes of anal itching',
        list: [
          '<strong>Moisture and residue:</strong> sweat, small leaks of stool or mucus, and tight synthetic underwear',
          '<strong>Over-cleaning:</strong> scented soaps, wet wipes and vigorous rubbing that damage the skin barrier',
          '<strong>Foods and drinks:</strong> coffee, tea, cola, beer, chocolate, citrus, tomatoes and spicy food in some people',
          '<strong>Anorectal conditions:</strong> <a href="/en/hemorrhoids/">hemorrhoids</a>, <a href="/en/anal-fissure/">fissures</a>, skin tags or <a href="/en/anal-warts/">warts</a>',
          '<strong>Skin conditions:</strong> eczema, psoriasis, contact dermatitis or lichen sclerosus',
          '<strong>Infections:</strong> yeast, pinworms or some sexually transmitted infections',
        ],
      },
      {
        h2: 'Breaking the itch-scratch cycle',
        paras: [
          "Scratching gives short relief but damages the skin, which then itches more. Most people improve within a few weeks by protecting the skin and removing irritants. ASCRS patient guidance highlights gentle cleaning, keeping the area dry and avoiding the foods that trigger symptoms.",
        ],
        list: [
          'Rinse with lukewarm water after bowel movements and pat dry; avoid soap on the area',
          'Skip scented wipes, powders and creams you have not discussed with a doctor',
          'Wear loose cotton underwear and change it if it gets damp',
          'Place a small piece of cotton gauze to absorb moisture if needed',
          'Cut back on the usual trigger foods for two weeks, then reintroduce them one at a time',
          'Keep nails short and wear cotton gloves at night if you scratch in your sleep',
        ],
      },
      {
        h2: 'When itching is a sign of something else',
        paras: [
          "Persistent itching that does not respond to these measures deserves an exam. A specialist looks for skin changes, anal conditions and, rarely, precancerous lesions of the skin around the anus. Sometimes a small skin biopsy or a referral to a dermatologist is needed. During the 30-minute video visit our specialist reviews your history and tells you whether that next step is advisable.",
          "It also helps to look at the whole routine, not just the skin. Small amounts of stool leakage, frequent loose stools or straining can all keep the area irritated. Improving stool consistency with fiber and fluids often reduces both residue and itching. Some people notice symptoms after starting a new laundry detergent, toilet paper or body wash, so changes in products are worth mentioning during the visit.",
          "Anal itching is rarely discussed openly, so many people try one product after another for months. A clear plan, followed consistently for four to six weeks, usually works better than switching remedies every few days.",
        ],
      },
      {
        h2: 'What medical treatment can involve',
        paras: [
          "Depending on the cause, a local doctor may suggest a barrier ointment, a short course of a mild anti-inflammatory cream or treatment for an infection. Long-term use of strong steroid creams can thin the skin and worsen symptoms, which is why it is important to use them only under supervision. We explain the general approach; any medication is handled according to the rules of your country.",
        ],
      },
    ],
    faqs: [
      {
        q: 'Why is anal itching worse at night?',
        a: "At night there are fewer distractions, the skin is warmer and you may scratch in your sleep. Pinworms also tend to cause more itching at night, especially in children.",
      },
      {
        q: 'Can hemorrhoids cause itching?',
        a: "Yes. Swollen hemorrhoids and skin tags can make cleaning harder and leave moisture or mucus on the skin, which irritates it.",
      },
      {
        q: 'Are wet wipes a good idea?',
        a: "Often not. Many contain fragrances or preservatives that irritate the skin. Plain water and gentle patting are usually better. If you use wipes, choose unscented ones and rinse afterward.",
      },
      {
        q: 'Is anal itching a sign of cancer?',
        a: "Rarely. Most cases are caused by irritation or common conditions. Still, itching that persists, especially with a lump, bleeding or skin changes, should be examined.",
      },
      {
        q: 'What happens during the video visit?',
        a: "The specialist asks about your symptoms, routine, diet and products, explains the likely causes and builds a plan with you. You do not need to show anything on camera. See <a href=\"/en/how-it-works/\">how it works</a>.",
      },
    ],
    refs: [
      {
        label: 'ASCRS. Pruritus ani: patient information',
        url: 'https://fascrs.org/patients/diseases-and-conditions/a-z/pruritus-ani',
      },
      {
        label: 'NHS. Itchy bottom',
        url: 'https://www.nhs.uk/conditions/itchy-bottom/',
      },
      {
        label: 'CDC. Pinworm infection',
        url: 'https://www.cdc.gov/pinworm/',
      },
      {
        label: 'ASCRS. Clinical Practice Guidelines',
        url: 'https://fascrs.org/healthcare-providers/education/clinical-practice-guidelines',
      },
    ],
  },

  // ───────────────────────────── Chronic constipation & pelvic floor ─────────────────────────────
  {
    key: 'estrenimiento',
    slug: 'chronic-constipation',
    navLabel: 'Constipation & pelvic floor',
    title: 'Chronic Constipation & Pelvic Floor: Expert Guidance',
    description:
      "Straining, hard stools or a feeling you never fully empty? Learn about chronic constipation and pelvic floor problems with a colorectal specialist by video.",
    h1: 'Chronic constipation and pelvic floor problems',
    whatIs:
      "Chronic constipation means having fewer than three bowel movements a week, hard stools, straining or a feeling of incomplete emptying for at least three months. It can come from slow movement through the colon or from a pelvic floor that does not relax properly during a bowel movement. Many people improve with diet changes, routine and targeted therapy.",
    signs: {
      intro: 'It is a good time to consult a specialist if:',
      list: [
        'You strain most of the time, even when stools are soft',
        'You feel blocked or need to press around the anus or vagina to empty',
        'You go fewer than three times a week despite fiber and fluids',
        'You rely on laxatives most days to have a bowel movement',
        'Constipation started recently after age 45, or comes with bleeding or weight loss',
        'You have hemorrhoids or fissures that keep coming back because of straining',
      ],
    },
    online: {
      can: [
        'Take a detailed history of your bowel habits, diet, fluids and medications',
        'Help you tell slow-transit constipation from outlet (pelvic floor) problems',
        'Set up a diet, fiber and toilet routine you can follow day to day',
        'Explain tests such as anorectal manometry, the balloon expulsion test and defecography',
        'Discuss pelvic floor therapy with biofeedback and when surgery is considered',
        'Send a written plan you can share with your local doctor or physical therapist',
      ],
      cannot: [
        'Perform pelvic floor testing or a physical exam remotely',
        'Order tests in the US or Canada',
        'Provide medication; that follows the rules of your country',
        'Replace emergency care for a blocked bowel',
      ],
      note:
        "Our doctors are licensed in Peru, not in the United States or Canada. The video visit is medical guidance and a second opinion from Lima. If you need testing or a procedure, we explain what to ask for locally or how to arrange it in <a href=\"/en/treatment-in-lima/\">Lima</a>.",
    },
    urgent: [
      'Severe belly pain with a swollen, hard abdomen',
      'Vomiting and no gas or stool for several days',
      'Rectal bleeding with dizziness, or black stools',
      'Fever with abdominal pain',
    ],
    sections: [
      {
        h2: 'Two main types of chronic constipation',
        paras: [
          "In <strong>slow-transit constipation</strong>, stool moves through the colon more slowly than normal. People often go days without the urge. In <strong>dyssynergic defecation</strong>, a pelvic floor problem, the muscles around the anus tighten instead of relaxing when you push, so stool gets stuck at the exit. Many people have features of both, and some also have irritable bowel syndrome with constipation.",
          "Other conditions can contribute: thyroid problems, diabetes, some medications, low activity, pregnancy and, in women, a rectocele, which is a bulge of the rectum into the vagina. A careful history helps sort out which pieces apply to you.",
          "Your daily patterns give important clues. Hard, pellet-like stools with no urge point toward slow transit. Soft stools that are still hard to pass, the need to press near the anus or vagina, or repeated trips to the bathroom point toward a pelvic floor problem. Writing down your bowel movements for a week, using a simple stool chart, makes the conversation with the specialist much more productive.",
        ],
      },
      {
        h2: 'First steps that help most people',
        paras: [
          "The AGA and other guidelines recommend starting with simple measures before moving to tests:",
        ],
        list: [
          'Increase fiber gradually to 25 to 35 grams a day; a fiber supplement can help if food alone is not enough',
          'Drink enough water so your urine stays pale yellow',
          'Use the natural urge after your morning meal: sit for a few minutes at the same time each day',
          'Put your feet on a footstool so your knees are above your hips, lean forward and relax your belly',
          'Move every day; walking stimulates the bowel',
          'Review with your local doctor any medications that can cause constipation',
        ],
      },
      {
        h2: 'Testing and pelvic floor therapy',
        paras: [
          "When basic measures are not enough, tests help explain why. Anorectal manometry measures pressures and coordination of the muscles; the balloon expulsion test checks whether you can empty a small balloon; defecography shows the rectum and pelvic floor while you empty. A colonic transit test measures how long stool takes to move through the colon.",
          "If tests show dyssynergia, <strong>biofeedback therapy</strong> with a trained pelvic floor physical therapist is the recommended treatment and helps most patients learn to relax the right muscles. Medical treatment can support this, and surgery is reserved for specific structural problems after careful evaluation.",
          "Pelvic floor therapy is widely available in the US and Canada. Our written plan can describe what kind of therapist to look for and what the sessions usually involve, so you can find the right support near home.",
        ],
      },
      {
        h2: 'Why it matters for hemorrhoids and fissures',
        paras: [
          "Years of straining and hard stools are a major reason <a href=\"/en/hemorrhoids/\">hemorrhoids</a> and <a href=\"/en/anal-fissure/\">anal fissures</a> keep coming back. Treating the constipation is often the step that makes other treatments last. In a 30-minute video visit, our specialist looks at the whole picture and gives you a plan in writing.",
        ],
      },
    ],
    faqs: [
      {
        q: 'How many bowel movements a week is normal?',
        a: "Anywhere from three a day to three a week can be normal. What matters more is whether you strain, whether stools are hard and whether you feel fully emptied.",
      },
      {
        q: 'Is it bad to use laxatives every day?',
        a: "Some types can be used long term under medical supervision, but relying on them without knowing the cause can hide a pelvic floor problem. Talk with your local doctor about the right approach for you.",
      },
      {
        q: 'What is a pelvic floor disorder?',
        a: "It is a problem with the coordination or support of the muscles at the bottom of the pelvis. It can cause straining, a feeling of blockage, incomplete emptying and sometimes leakage.",
      },
      {
        q: 'Does biofeedback really work?',
        a: "For dyssynergic defecation, biofeedback is supported by randomized trials and recommended by US gastroenterology guidelines. It usually involves several sessions with a specialized therapist and practice at home.",
      },
      {
        q: 'When should constipation worry me?',
        a: "See a doctor if it is new after age 45, or comes with bleeding, weight loss, anemia, severe pain or a family history of colorectal cancer. Read our guide on <a href=\"/en/rectal-bleeding/\">rectal bleeding</a>.",
      },
    ],
    refs: [
      {
        label: 'American Gastroenterological Association. Clinical guidelines (including chronic idiopathic constipation)',
        url: 'https://gastro.org/clinical-guidance/',
      },
      {
        label: 'NIDDK (National Institutes of Health). Constipation',
        url: 'https://www.niddk.nih.gov/health-information/digestive-diseases/constipation',
      },
      {
        label: 'ASCRS. Constipation: patient information',
        url: 'https://fascrs.org/patients/diseases-and-conditions/a-z/constipation',
      },
      {
        label: 'NICE Clinical Knowledge Summaries. Constipation',
        url: 'https://cks.nice.org.uk/topics/constipation/',
      },
    ],
  },
];
