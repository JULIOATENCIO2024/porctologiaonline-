// English (US) — interface strings, general pages and paid-media landings.
// Legal framing (BRIEF): physicians are licensed in Peru only. The service is a second opinion and medical
// guidance delivered from Lima, plus coordination for patients who choose to travel to Lima for care.
// No online diagnosis, no prescriptions, no drug names. Only Dr. Milagros Quinto sees patients in English.
import type { Ui, Page, Landing } from '../../data/types';

export const ui: Ui = {
  langName: `English`,
  nav: {
    how: `How it works`,
    specialties: `Conditions`,
    team: `Doctor`,
    price: `Price`,
    faq: `FAQ`,
    book: `Book a video visit`,
  },
  trust: [
    `Colorectal specialists licensed in Peru (CMP/RNE)`,
    `Clínica Proctológica de Lima, San Isidro`,
    `Private one-on-one video visit`,
  ],
  stepsTitle: `How your video visit works`,
  steps: [
    {
      title: `Message us`,
      text: `Send us a WhatsApp message. We confirm a time that works for you, shown in Lima time (UTC−5) and your local time.`,
    },
    {
      title: `Pay online`,
      text: `We send you a payment link for USD 50. Your appointment is confirmed once the payment goes through.`,
    },
    {
      title: `Video call`,
      text: `A 30-minute private video call with the colorectal specialist, who reviews your symptoms, history and any records you share.`,
    },
    {
      title: `Written report`,
      text: `You receive a written plan you can share with your local doctor, including next steps and, if needed, options for care in Lima.`,
    },
  ],
  priceBox: {
    title: `Video consultation`,
    amount: `USD 50`,
    per: `per 30-minute visit`,
    includes: [
      `30-minute private video call with a colorectal specialist`,
      `Review of your symptoms, prior tests and medical records`,
      `Written report with a plan you can share with your local doctor`,
      `Guidance on tests to ask for at home or on care in Lima`,
      `Follow-up questions about your report by message`,
    ],
    refund: `If your video visit does not take place, you get a full refund.`,
    cta: `Book a video visit`,
    payCta: `Pay USD 50`,
  },
  whoTitle: `Your doctor`,
  onlineCanTitle: `What a video visit can do`,
  onlineCannotTitle: `What needs an in-person exam`,
  signsTitle: `When to see a specialist`,
  urgentTitle: `Go to the ER instead if you have`,
  howTitle: `What the video visit is like`,
  faqTitle: `Frequently asked questions`,
  refsTitle: `Sources`,
  reviewedBy: `Medically reviewed by`,
  reviewedOn: `Last reviewed`,
  attendedBy: `You'll meet with`,
  ctaTitle: `Talk to a colorectal specialist from home`,
  ctaText: `A 30-minute video visit for USD 50. You leave with a written plan you can share with your local doctor.`,
  whatsappCta: `Message us on WhatsApp`,
  footerLegal: `Video consultations are provided from Lima, Peru, by physicians registered with the Colegio Médico del Perú (Peruvian Medical Board) under Law No. 30421, Peru's Telehealth Framework Law. Our physicians are licensed in Peru, not in your country; the service is a second opinion and medical guidance. It is not for emergencies: if you have heavy bleeding, fever or severe pain, go to the nearest emergency room.`,
  footerLinks: {
    terms: `Terms of service`,
    privacy: `Privacy policy`,
    consent: `Telemedicine consent`,
    contact: `Contact`,
  },
  rights: `All rights reserved.`,
  breadcrumbHome: `Home`,
  waMsg: `Hi, I'd like to book a video consultation`,
  lpNoMenu: `Second opinion and medical guidance from colorectal specialists licensed in Peru. Not for emergencies.`,
  skip: `Skip to content`,
  menuOpen: `Open menu`,
};

export const pages: Page[] = [
  // ───────────────────────────── Home
  {
    key: 'home',
    slug: '',
    title: `Colorectal Specialist Video Visit | Second Opinion`,
    description: `Hemorrhoids, anal fissure, fistula or rectal bleeding? Get a second opinion by video from a colorectal specialist in Lima, Peru. 30 minutes, USD 50.`,
    h1: `Talk to a colorectal specialist by video, from wherever you are`,
    lead: `A 30-minute private video visit with a proctologist from Clínica Proctológica de Lima. You get a second opinion, clear guidance and a written plan you can share with your local doctor.`,
    sections: [
      {
        h2: `Conditions we can help you think through`,
        paras: [
          `Most people don't search for a "proctologist." They search for what's bothering them. Start with the condition that sounds like yours:`,
        ],
        list: [
          `<a href="/en/hemorrhoids/">Hemorrhoids</a>: swelling, bleeding or discomfort around the anus`,
          `<a href="/en/anal-fissure/">Anal fissure</a>: sharp pain and bleeding with bowel movements`,
          `<a href="/en/anal-fistula/">Anal fistula and abscess</a>: drainage, a lump or recurring infection`,
          `<a href="/en/anal-warts/">Anal warts</a>: growths or bumps around the anus`,
          `<a href="/en/rectal-bleeding/">Rectal bleeding</a>: blood on the toilet paper or in the bowl`,
          `<a href="/en/anal-itching/">Anal itching</a>: itching that keeps coming back`,
          `<a href="/en/chronic-constipation/">Chronic constipation</a>: straining, hard stools or a feeling of incomplete emptying`,
        ],
      },
      {
        h2: `Who this is for`,
        paras: [
          `This service is a <strong>second opinion and medical guidance from Peru</strong>. It is a good fit if you already have a diagnosis or a surgery recommendation and want another specialist's view, if you have symptoms and want to understand your options before your next appointment, or if you are thinking about traveling to Lima for treatment.`,
          `Our physicians are licensed in Peru, not in the United States or Canada. They do not replace your local doctor. They review your symptoms and records, explain what may be going on, and give you a written plan you can take to your local care team.`,
        ],
      },
      {
        h2: `What happens during the video visit`,
        paras: [
          `In the video visit, the colorectal specialist reviews your symptoms, asks about your history and goes over any tests, imaging or surgical reports you share. You get guidance and a plan. If an exam is needed, the doctor explains where and how to get one, either with your local doctor or at our clinic in Lima.`,
          `Any decisions about medications follow the rules of the country where you live and are handled by a doctor licensed there.`,
        ],
      },
      {
        h2: `Care in Lima, if you choose it`,
        paras: [
          `Some patients decide to travel to Lima for an in-person exam, an office procedure or surgery at Clínica Proctológica de Lima in San Isidro. If that is an option for you, we explain the process and share reference cost estimates during the consultation. <a href="/en/treatment-in-lima/">Learn about treatment in Lima</a>.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Can the doctor tell what I have over video?`,
        a: `A video visit cannot replace a physical exam. The specialist reviews your symptoms and records, tells you what is likely and what needs to be confirmed, and explains which exam you need and where to get it.`,
      },
      {
        q: `Is the doctor licensed in the United States?`,
        a: `No. Dr. Milagros Quinto is licensed in Peru and registered with the Colegio Médico del Perú. The service is a second opinion and medical guidance from Peru, not medical care under a US or Canadian license.`,
      },
      {
        q: `How much does it cost?`,
        a: `USD 50 for a 30-minute video visit, paid by link before the appointment. If the visit does not take place, you get a full refund.`,
      },
    ],
  },

  // ───────────────────────────── How it works
  {
    key: 'how',
    slug: 'how-it-works',
    title: `How It Works: Video Visit with a Colorectal Specialist`,
    description: `Message us, pay USD 50, meet a colorectal specialist from Lima by video for 30 minutes and get a written plan to share with your local doctor. Here's how.`,
    h1: `How a video visit with a colorectal specialist works`,
    lead: `Four steps, from your first message to your written plan. No referral needed.`,
    sections: [
      {
        h2: `Before your visit`,
        paras: [
          `When you message us, we only ask for your name, the country you're in and a time that suits you. Please don't send symptoms or photos over chat; the doctor will go over everything with you during the call.`,
          `To make the most of your 30 minutes, gather what you already have:`,
        ],
        list: [
          `Reports from prior visits, colonoscopy or other endoscopy results`,
          `Imaging reports (MRI, ultrasound, CT) and any surgical or pathology reports`,
          `A list of current medications and allergies`,
          `Your main questions, written down`,
        ],
      },
      {
        h2: `During the call`,
        paras: [
          `The call takes place on a private video link from a quiet room. The colorectal specialist asks about your symptoms, how long they've lasted, your bowel habits and your medical history, then reviews the documents you share on screen or send beforehand.`,
          `The doctor will not ask you to show the affected area on camera. If a physical exam is needed, the doctor explains what kind, why, and where you can get it.`,
        ],
      },
      {
        h2: `After the call`,
        paras: [
          `You receive a written report in English with what was discussed, the possible causes the doctor considers, the tests worth asking for, general treatment options and warning signs. It is written so you can hand it to your local doctor.`,
          `If you are considering care in Lima, the report also outlines what an in-person visit would involve. See <a href="/en/treatment-in-lima/">treatment in Lima</a>.`,
        ],
      },
      {
        h2: `What a video visit is not`,
        list: [
          `It is not emergency care. Heavy bleeding, fever or severe pain need an emergency room.`,
          `It does not replace a physical exam when one is needed.`,
          `It is not care under a US or Canadian medical license; medication decisions follow the rules of your country.`,
        ],
      },
    ],
  },

  // ───────────────────────────── Price
  {
    key: 'price',
    slug: 'price',
    title: `Price: USD 50 Video Visit with a Colorectal Specialist`,
    description: `One clear price: USD 50 for a 30-minute video visit with a colorectal specialist in Lima, including a written plan. Pay by link; full refund if it is not held.`,
    h1: `One clear price: USD 50 per video visit`,
    lead: `A 30-minute private video visit with a colorectal specialist, plus a written report. No hidden fees, no membership.`,
    sections: [
      {
        h2: `How payment works`,
        paras: [
          `Once we agree on a time over WhatsApp, we send you a payment link for USD 50. You can pay with a credit or debit card. Your appointment is confirmed when the payment goes through, and you receive the video link before the visit.`,
          `Your card issuer may apply its own international transaction fee. That fee is set by your bank, not by us.`,
        ],
      },
      {
        h2: `Refunds and rescheduling`,
        list: [
          `If the video visit does not take place for reasons on our side, you get a full refund.`,
          `If you need to reschedule, let us know at least 24 hours ahead and we'll find a new time at no extra charge.`,
          `If a connection problem cuts the call short, we reconnect or reschedule the remaining time.`,
        ],
      },
      {
        h2: `Insurance`,
        paras: [
          `We do not bill US or Canadian insurers. Some plans reimburse international second opinions; we can provide a paid receipt and your written report so you can ask your insurer. Coverage is not something we can confirm for you.`,
        ],
      },
      {
        h2: `What is not included`,
        paras: [
          `Lab work, imaging, office procedures and surgery are not part of the video visit. If you decide to receive care in Lima, reference cost estimates are shared during the consultation. See <a href="/en/treatment-in-lima/">treatment in Lima</a>.`,
        ],
      },
    ],
  },

  // ───────────────────────────── Team (Dr. Milagros Quinto)
  {
    key: 'team',
    slug: 'dr-milagros-quinto',
    title: `Dr. Milagros Quinto, Colorectal Specialist in Lima`,
    description: `Dr. Milagros Quinto is a proctologist at Clínica Proctológica de Lima, San Isidro. She offers second-opinion video visits in English. CMP/RNE verifiable.`,
    h1: `Dr. Milagros Quinto, colorectal specialist (proctologist) in Lima`,
    lead: `Dr. Quinto is a proctologist at Clínica Proctológica de Lima in San Isidro, Lima, and the physician who sees patients in English on Proctología Online.`,
    sections: [
      {
        h2: `About Dr. Quinto`,
        paras: [
          `Dr. Milagros Quinto is a physician specializing in proctology, the branch of medicine focused on the colon, rectum and anus. In the United States this field is usually called colorectal surgery. She practices at Clínica Proctológica de Lima, located in San Isidro, Lima, Peru.`,
          `She also reviews the medical content on this website, so the information you read here and the guidance you receive in your visit come from the same specialist.`,
        ],
      },
      {
        h2: `Credentials you can verify`,
        paras: [
          `Dr. Quinto is registered with the Colegio Médico del Perú (Peruvian Medical Board). Her CMP (medical license) and RNE (national specialist registry) numbers are shown on this page, and anyone can look them up in the Colegio Médico del Perú's public registry.`,
          `She is licensed to practice medicine in Peru, not in the United States, Canada or other countries. Video visits with her are a second opinion and medical guidance from Peru.`,
        ],
      },
      {
        h2: `What you can talk to her about`,
        list: [
          `<a href="/en/hemorrhoids/">Hemorrhoids</a> and treatment options, from diet changes to office procedures and surgery`,
          `<a href="/en/anal-fissure/">Anal fissure</a> that isn't healing`,
          `<a href="/en/anal-fistula/">Anal fistula or abscess</a>, including recurring cases`,
          `<a href="/en/anal-warts/">Anal warts</a>`,
          `<a href="/en/rectal-bleeding/">Rectal bleeding</a>, <a href="/en/anal-itching/">anal itching</a> and <a href="/en/chronic-constipation/">chronic constipation</a>`,
          `A <a href="/en/second-opinion/">second opinion before surgery</a>`,
        ],
      },
      {
        h2: `Seeing her in person`,
        paras: [
          `If you decide to travel to Lima, you can be examined and, when appropriate, treated at Clínica Proctológica de Lima. Read more about <a href="/en/treatment-in-lima/">treatment in Lima</a>.`,
        ],
      },
    ],
  },

  // ───────────────────────────── Second opinion
  {
    key: 'secondOpinion',
    slug: 'second-opinion',
    title: `Second Opinion Before Colorectal Surgery | Video Visit`,
    description: `Told you need hemorrhoid, fissure or fistula surgery? Get a second opinion by video from a colorectal specialist in Lima before you decide. 30 minutes, USD 50.`,
    h1: `A second opinion before anorectal surgery`,
    lead: `Before you agree to surgery for hemorrhoids, an anal fissure or a fistula, it's reasonable to hear from another specialist. You can do that by video, from home.`,
    sections: [
      {
        h2: `When a second opinion makes sense`,
        list: [
          `You've been told you need surgery and want to know whether other options exist`,
          `You've been offered more than one procedure and aren't sure which fits your case`,
          `You've already had surgery and symptoms came back`,
          `You're worried about recovery, continence or time off work`,
          `The cost of surgery where you live is a concern and you're looking at care abroad`,
        ],
      },
      {
        h2: `What the specialist reviews`,
        paras: [
          `Send your reports before the call: clinic notes, colonoscopy or anoscopy results, MRI or ultrasound reports for fistulas, pathology and any previous operative reports. During the video visit, the colorectal specialist goes over your history and those records, and explains how they read your case.`,
          `You get a written report that says whether the specialist agrees with the plan you were given, what alternatives may exist, and what questions to bring back to your surgeon.`,
        ],
      },
      {
        h2: `What a second opinion from Peru is, and isn't`,
        paras: [
          `Our physicians are licensed in Peru. A second opinion from them is medical guidance: it helps you understand your options and talk with your local surgeon. It does not replace an in-person exam, and it does not change who is responsible for your care where you live.`,
          `If you'd like to be examined or treated by our team, you can <a href="/en/treatment-in-lima/">travel to Lima</a>, where the clinic is located.`,
        ],
      },
    ],
    faqs: [
      {
        q: `Do I need my records translated into English?`,
        a: `No. Dr. Quinto reads English and Spanish. Records in other languages may need a translation; ask us before the visit.`,
      },
      {
        q: `Will my surgeon find out I asked for a second opinion?`,
        a: `Only if you share it. The written report is yours, and you decide who sees it.`,
      },
    ],
  },

  // ───────────────────────────── Treatment in Lima
  {
    key: 'treatmentLima',
    slug: 'treatment-in-lima',
    title: `Colorectal Treatment in Lima, Peru: What to Expect`,
    description: `Thinking about traveling to Lima for hemorrhoid, fissure or fistula treatment? See how it works at Clínica Proctológica de Lima, starting with a video visit.`,
    h1: `Traveling to Lima for colorectal treatment`,
    lead: `Some patients choose to be examined and treated in person at Clínica Proctológica de Lima, in San Isidro. Here's how the process works, starting with a video visit.`,
    sections: [
      {
        h2: `Start with a video visit`,
        paras: [
          `The first step is a 30-minute video visit. The colorectal specialist reviews your symptoms and records and tells you whether an in-person visit in Lima makes sense for your case. Not everyone who asks about traveling needs to travel.`,
          `If it does make sense, your written report outlines what the in-person visit would involve: the exam, any tests, and whether an office procedure or surgery might be considered. The final decision is made after the in-person exam.`,
        ],
      },
      {
        h2: `What to expect in Lima`,
        list: [
          `An in-person consultation and physical exam at the clinic in San Isidro, a central, well-connected district of Lima`,
          `Tests, if needed, coordinated with the clinic`,
          `If a procedure or surgery is recommended, a clear explanation of the options, preparation and recovery before you agree to anything`,
          `Follow-up visits during your stay and written instructions for when you return home`,
        ],
      },
      {
        h2: `Costs`,
        paras: [
          `Costs depend on the exam, tests and treatment your case actually needs. <strong>Reference estimates are shared during the consultation</strong>, once the specialist understands your situation. We don't publish fixed prices for procedures because they would not reflect your case.`,
          `Travel, lodging and meals are separate and arranged by you.`,
        ],
      },
      {
        h2: `Planning your trip`,
        list: [
          `Check the entry requirements for Peru for your nationality before booking flights.`,
          `Plan your stay with enough days for the exam, any procedure and the follow-up visits the doctor recommends.`,
          `Bring all your prior records and a list of your medications.`,
          `Ask your local doctor to stay involved for follow-up once you're home.`,
        ],
      },
      {
        h2: `Continuity of care at home`,
        paras: [
          `After treatment in Lima, you'll receive a written summary for your local doctor. Ongoing care where you live is provided by physicians licensed in your country.`,
        ],
      },
    ],
  },

  // ───────────────────────────── FAQ
  {
    key: 'faq',
    slug: 'faq',
    title: `FAQ: Video Visits with a Colorectal Specialist in Lima`,
    description: `Answers about video visits with a colorectal specialist in Lima, Peru: licensing, what can be done by video, payment, refunds, privacy and traveling to Lima.`,
    h1: `Frequently asked questions`,
    lead: `What to know before booking a video visit with a colorectal specialist from Peru.`,
    sections: [],
    faqs: [
      {
        q: `Who will I talk to?`,
        a: `Dr. Milagros Quinto, a proctologist (colorectal specialist) at Clínica Proctológica de Lima in San Isidro, Lima. Her CMP and RNE numbers are listed on her profile and can be checked with the Colegio Médico del Perú.`,
      },
      {
        q: `Is the doctor licensed where I live?`,
        a: `No. Our physicians are licensed in Peru, not in the United States, Canada or other countries. The service is a second opinion and medical guidance from Peru, provided under Peru's Telehealth Framework Law (Law No. 30421).`,
      },
      {
        q: `Can the doctor confirm what I have over video?`,
        a: `Many anorectal conditions need a physical exam to be confirmed. In the video visit, the specialist reviews your symptoms and records, explains what is likely and what needs to be checked, and tells you where and how to get that exam.`,
      },
      {
        q: `Can the doctor order medications for me?`,
        a: `No medications are ordered through this service. Medication decisions follow the rules of your country and are made by a doctor licensed there. Your written report can help your local doctor decide.`,
      },
      {
        q: `How much does it cost and how do I pay?`,
        a: `USD 50 for a 30-minute video visit. We send you a payment link after we agree on a time; the appointment is confirmed once you pay.`,
      },
      {
        q: `What if the visit doesn't happen?`,
        a: `If the video visit does not take place, you get a full refund. If you need to reschedule, let us know at least 24 hours ahead.`,
      },
      {
        q: `Do I have to show the affected area on camera?`,
        a: `No. The visit is a conversation and a review of your records. If a physical exam is needed, the doctor explains where and how to get one.`,
      },
      {
        q: `What do I receive after the call?`,
        a: `A written report in English with the points discussed, the tests worth asking for, general treatment options and warning signs, written so you can share it with your local doctor.`,
      },
      {
        q: `Is my information private?`,
        a: `Yes. The call is one-on-one on a private link, and your data is handled under Peru's Personal Data Protection Law (Law No. 29733). Please don't send symptoms or photos over WhatsApp; share them during the visit. See our <a href="/en/legal/privacy/">privacy policy</a>.`,
      },
      {
        q: `Can I travel to Lima to be treated?`,
        a: `Yes. If your case calls for an in-person exam, a procedure or surgery, the clinic can see you in San Isidro, Lima. Reference cost estimates are shared during the consultation. See <a href="/en/treatment-in-lima/">treatment in Lima</a>.`,
      },
      {
        q: `What if I have heavy bleeding, fever or severe pain?`,
        a: `Don't wait for a video visit. Go to the nearest emergency room or call your local emergency number.`,
      },
      {
        q: `Does my insurance cover it?`,
        a: `We don't bill insurers. Some plans reimburse international second opinions; we can give you a receipt and your report so you can ask.`,
      },
    ],
  },

  // ───────────────────────────── Contact
  {
    key: 'contact',
    slug: 'contact',
    title: `Contact Proctología Online | Book a Video Visit`,
    description: `Book a video visit with a colorectal specialist in Lima, Peru, by WhatsApp, or email Clínica Proctológica de Lima. Please don't send symptoms or photos by chat.`,
    h1: `Contact us`,
    lead: `The simplest way to book is WhatsApp. We reply in English during business hours, Lima time (UTC−5).`,
    sections: [
      {
        h2: `Book by WhatsApp`,
        paras: [
          `Send us a message with your name, the country you're in and a few times that work for you. We'll confirm a slot and send you the USD 50 payment link.`,
          `For your privacy, please don't send symptoms, photos or medical records over chat. You'll go over everything with the doctor during the video visit.`,
        ],
      },
      {
        h2: `Email and clinic address`,
        paras: [
          `Email: clinicaproctologicalima@gmail.com`,
          `Clínica Proctológica de Lima, Av. Javier Prado Este 1510, San Isidro, Lima, Peru.`,
          `CLINICA PROCTOLOGICA DE LIMA SAC · RUC 20616704614`,
        ],
      },
      {
        h2: `Emergencies`,
        paras: [
          `This service is not for emergencies. If you have heavy bleeding, fever or severe pain, go to the nearest emergency room.`,
        ],
      },
    ],
  },

  // ───────────────────────────── Terms
  {
    key: 'terms',
    slug: 'legal/terms',
    title: `Terms of Service | Proctología Online`,
    description: `Terms for video consultations from Lima, Peru: second opinion and medical guidance by physicians licensed in Peru, under Law No. 30421. Not for emergencies.`,
    h1: `Terms of service`,
    lead: `Please read these terms before booking. By paying for a video visit, you agree to them.`,
    sections: [
      {
        h2: `1. Who provides the service`,
        paras: [
          `Proctología Online is a telehealth service of CLINICA PROCTOLOGICA DE LIMA SAC (RUC 20616704614), Av. Javier Prado Este 1510, San Isidro, Lima, Peru. Contact: clinicaproctologicalima@gmail.com.`,
          `Video consultations are provided from Lima, Peru, by physicians registered with the Colegio Médico del Perú, in accordance with Law No. 30421, Peru's Telehealth Framework Law, and its regulations.`,
        ],
      },
      {
        h2: `2. Nature of the service`,
        paras: [
          `Our physicians are licensed to practice medicine in Peru. <strong>They are not licensed in your country</strong> unless expressly stated. For patients outside Peru, the service is a <strong>second opinion and medical guidance</strong>: the physician reviews the symptoms and records you provide, offers an opinion and gives you a written plan to share with a doctor licensed where you live.`,
          `The service does not establish care under the medical laws of your country, does not replace an in-person exam and does not replace your local doctor.`,
        ],
      },
      {
        h2: `3. Limits of a video visit`,
        list: [
          `Conclusions are based on the information you provide and are limited by the absence of a physical exam.`,
          `No medications are ordered through this service. Any medication is ordered according to the rules of your country by a physician licensed there.`,
          `No outcome is promised. Treatment results depend on each case.`,
          `The service is not for emergencies. If you have heavy bleeding, fever, severe pain or any urgent symptom, go to an emergency room.`,
        ],
      },
      {
        h2: `4. Booking, price and refunds`,
        paras: [
          `Each video visit costs USD 50 and lasts up to 30 minutes. Payment is made in advance through the link we send you. Your bank may charge its own fees.`,
          `If the visit does not take place for reasons attributable to us, we refund the full amount. You may reschedule once at no charge with at least 24 hours' notice. If you miss the appointment without notice, the visit is considered held.`,
        ],
      },
      {
        h2: `5. Your responsibilities`,
        list: [
          `Provide accurate and complete information about your health and history.`,
          `Join the call from a private place with a stable connection.`,
          `Follow up with a doctor licensed where you live, and seek emergency care when needed.`,
        ],
      },
      {
        h2: `6. Treatment in Lima`,
        paras: [
          `If you choose to travel to Lima for in-person care, that care is a separate service governed by the clinic's own terms and by Peruvian law. Travel, lodging and related arrangements are your responsibility.`,
        ],
      },
      {
        h2: `7. Governing law`,
        paras: [
          `These terms are governed by the laws of the Republic of Peru. Any dispute will be submitted to the competent courts of Lima, Peru, without prejudice to any non-waivable rights you may have.`,
        ],
      },
    ],
  },

  // ───────────────────────────── Privacy
  {
    key: 'privacy',
    slug: 'legal/privacy',
    title: `Privacy Policy | Proctología Online`,
    description: `How CLINICA PROCTOLOGICA DE LIMA SAC collects, uses and protects your personal and health data for video visits, under Peru's Law No. 29733 on personal data.`,
    h1: `Privacy policy`,
    lead: `We collect only what we need to book and carry out your video visit, and we protect it under Peru's Personal Data Protection Law.`,
    sections: [
      {
        h2: `Data controller`,
        paras: [
          `CLINICA PROCTOLOGICA DE LIMA SAC (RUC 20616704614), Av. Javier Prado Este 1510, San Isidro, Lima, Peru. Email: clinicaproctologicalima@gmail.com. We process personal data in accordance with Law No. 29733, Peru's Personal Data Protection Law, and its regulations.`,
        ],
      },
      {
        h2: `What we collect`,
        list: [
          `Booking data: name, country, phone number, email and preferred times.`,
          `Payment confirmation from the payment provider (we do not store your card details).`,
          `Health information you share during the visit or send as records, and the written report the physician prepares.`,
          `Basic website usage data through analytics and advertising tags (pages viewed and clicks on booking buttons). We never send health conditions or form data to advertising platforms.`,
        ],
      },
      {
        h2: `How we use it`,
        list: [
          `To schedule, carry out and document your video visit.`,
          `To send you your written report and answer follow-up questions.`,
          `To process payments and refunds.`,
          `To keep the medical record required by Peruvian law.`,
          `To measure, in aggregate, how people find the service.`,
        ],
      },
      {
        h2: `Who we share it with`,
        paras: [
          `Your health information is seen only by the physician and the staff who support your care. We do not sell your data. We use service providers (video platform, messaging, payments, hosting) that may store data outside Peru; we choose providers with appropriate safeguards. We share your report with another doctor only if you ask us to.`,
        ],
      },
      {
        h2: `How long we keep it`,
        paras: [
          `Medical records are kept for the period required by Peruvian health regulations. Booking and payment data are kept as long as needed for accounting and legal obligations.`,
        ],
      },
      {
        h2: `Your rights`,
        paras: [
          `You can request access to, correction, deletion of, or objection to the processing of your personal data by writing to clinicaproctologicalima@gmail.com. Some records must be kept by law. You may also file a complaint with Peru's National Authority for Personal Data Protection.`,
        ],
      },
      {
        h2: `A note on chat`,
        paras: [
          `Please don't send symptoms, photos or medical records over WhatsApp. Share them during the video visit or through the channel the clinic indicates.`,
        ],
      },
    ],
  },

  // ───────────────────────────── Telemedicine consent
  {
    key: 'consent',
    slug: 'legal/telemedicine-consent',
    title: `Telemedicine Consent | Proctología Online`,
    description: `Informed consent for video visits from Lima, Peru: what telemedicine can and can't do, licensing in Peru only, privacy and emergencies. Read before booking.`,
    h1: `Informed consent for telemedicine`,
    lead: `By booking and joining a video visit, you confirm that you have read and agree to the following.`,
    sections: [
      {
        h2: `I understand that`,
        list: [
          `The video visit is provided from Lima, Peru, by a physician registered with the Colegio Médico del Perú, under Law No. 30421, Peru's Telehealth Framework Law.`,
          `The physician is licensed in Peru, not in my country. The service is a second opinion and medical guidance, not care under the medical laws of my country.`,
          `A video visit does not include a physical exam. The physician's opinion is based on what I report and the records I share, and it may change after an in-person exam.`,
          `The physician may recommend that I get an in-person exam, tests or care from a doctor licensed where I live, or in Lima.`,
          `No medications are ordered through this service. Any medication is ordered according to the rules of my country by a physician licensed there.`,
          `No specific result has been promised to me.`,
          `This service is not for emergencies. If I have heavy bleeding, fever, severe pain or any urgent symptom, I will go to an emergency room.`,
        ],
      },
      {
        h2: `Privacy and technology`,
        list: [
          `The call takes place over a private video link. Like any online communication, it carries a small risk of technical failure or unauthorized access, which the clinic works to minimize.`,
          `The call is not recorded unless I give separate, express permission.`,
          `My data is handled under Law No. 29733, Peru's Personal Data Protection Law, as described in the <a href="/en/legal/privacy/">privacy policy</a>.`,
        ],
      },
      {
        h2: `My commitments`,
        list: [
          `I will provide truthful and complete information.`,
          `I will join from a private place.`,
          `I will share the written report with my local doctor and follow up with them.`,
        ],
      },
      {
        h2: `Withdrawing consent`,
        paras: [
          `I may withdraw this consent at any time before or during the video visit by telling the physician or writing to clinicaproctologicalima@gmail.com.`,
        ],
      },
    ],
  },
];

export const landings: Landing[] = [
  // ───────────────────────────── Colorectal specialist
  {
    key: 'proctologo',
    slugG: 'colorectal-specialist',
    slugM: 'colorectal-specialist',
    slugT: 'colorectal-specialist',
    google: {
      title: `Colorectal Specialist: Video Visit for USD 50`,
      h1: `Colorectal specialist: talk to one by video for USD 50`,
      lead: `A 30-minute private video visit with a proctologist from Clínica Proctológica de Lima. Second opinion, clear guidance and a written plan for your local doctor.`,
      bullets: [
        `30-minute private video call with a colorectal specialist licensed in Peru`,
        `Review of your symptoms, prior tests and records`,
        `Written plan you can share with your local doctor`,
        `Guidance on which exam you need and where to get it`,
        `Option to be treated in person in Lima`,
      ],
      body: [
        {
          h2: `What you can talk about`,
          paras: [
            `Hemorrhoids, anal fissure, anal fistula or abscess, anal warts, rectal bleeding, anal itching and chronic constipation. You can also ask for a second opinion on a surgery recommendation you've received.`,
          ],
        },
        {
          h2: `A second opinion from Peru`,
          paras: [
            `Our physicians are licensed in Peru, not in your country. In the video visit, the specialist reviews your symptoms, guides you and builds a plan. If an exam is needed, the doctor explains where and how to get one. Medication decisions follow the rules of your country.`,
          ],
        },
      ],
      faqs: [
        {
          q: `Is a proctologist the same as a colorectal surgeon?`,
          a: `Largely, yes. In Latin America the specialty is called proctology or coloproctology; in the US it is usually called colorectal surgery.`,
        },
        {
          q: `Do I need a referral?`,
          a: `No. Message us on WhatsApp, pay the USD 50 link and you're booked.`,
        },
        {
          q: `What if the visit doesn't happen?`,
          a: `You get a full refund.`,
        },
      ],
    },
    meta: {
      title: `Talk to a colorectal specialist by video`,
      hook: `Problems "down there" are common. Talking to a specialist about them shouldn't be awkward.`,
      text: `Meet a colorectal specialist from Lima by private video for 30 minutes. You leave with a written plan to share with your local doctor.`,
      bullets: [`Private 30-minute video call`, `Written plan for your doctor`, `USD 50, refund if it doesn't happen`],
    },
    tiktok: {
      title: `Colorectal specialist by video`,
      hook: `Embarrassed to talk about your butt? Doctors aren't.`,
      text: `Bleeding, pain or a lump back there is more common than you think. Talk to a colorectal specialist from Lima by private video for 30 minutes and get a written plan to show your local doctor. USD 50.`,
    },
  },

  // ───────────────────────────── Hemorrhoids
  {
    key: 'hemorroides',
    slugG: 'hemorrhoids',
    slugM: 'hemorrhoids',
    slugT: 'hemorrhoids',
    google: {
      title: `Hemorrhoid Treatment: Video Visit with a Specialist`,
      h1: `Hemorrhoid treatment: video visit with a colorectal specialist`,
      lead: `Not sure which hemorrhoid treatment fits your case? Talk it through with a colorectal specialist in a 30-minute video visit and get a written plan.`,
      bullets: [
        `Review of your symptoms and any prior exams`,
        `Overview of options: diet and hygiene measures, office procedures and surgery`,
        `Which exam you need and where to get it`,
        `Written plan to share with your local doctor`,
      ],
      body: [
        {
          h2: `Treatment depends on the type and grade`,
          paras: [
            `Internal and external hemorrhoids are managed differently, and internal hemorrhoids are graded by how far they prolapse. Options range from diet and hygiene measures to medical treatment, office procedures and surgery. The specialist explains which ones may apply to you and what needs to be confirmed in an exam.`,
          ],
        },
        {
          h2: `When it might not be hemorrhoids`,
          paras: [
            `Rectal bleeding and pain can also come from a fissure or other conditions. The specialist tells you which signs need an exam and how soon. <a href="/en/hemorrhoids/">Read more about hemorrhoids</a>.`,
          ],
        },
      ],
      faqs: [
        {
          q: `Can you treat my hemorrhoids over video?`,
          a: `The specialist reviews your case, explains your options and gives you a written plan. Procedures and surgery require an in-person visit, either locally or in Lima.`,
        },
        {
          q: `Can you order medication for me?`,
          a: `No. Medication decisions follow the rules of your country and are made by a doctor licensed there.`,
        },
        {
          q: `How much is it?`,
          a: `USD 50 for 30 minutes, with a full refund if the visit doesn't take place.`,
        },
      ],
    },
    meta: {
      title: `Hemorrhoids? Talk to a specialist`,
      hook: `Hemorrhoids affect millions of adults. You don't have to just put up with them.`,
      text: `A colorectal specialist from Lima reviews your symptoms by private video and explains your options. You get a written plan for your local doctor.`,
      bullets: [`30-minute private video call`, `Options explained clearly`, `USD 50, written plan included`],
    },
    tiktok: {
      title: `Hemorrhoids: talk to a specialist`,
      hook: `Hemorrhoids again? Let's talk options.`,
      text: `Hemorrhoids that keep coming back deserve a plan. A colorectal specialist from Lima reviews your symptoms by private video, explains the options from diet changes to procedures, and gives you a written plan for your local doctor. 30 minutes, USD 50.`,
    },
  },

  // ───────────────────────────── Anal fissure
  {
    key: 'fisura',
    slugG: 'anal-fissure',
    slugM: 'anal-fissure',
    slugT: 'anal-fissure',
    google: {
      title: `Anal Fissure Treatment: Video Visit with a Specialist`,
      h1: `Anal fissure treatment: video visit with a colorectal specialist`,
      lead: `Sharp pain and bleeding with bowel movements that won't go away? Talk to a colorectal specialist by video and leave with a written plan.`,
      bullets: [
        `Review of your symptoms and what you've already tried`,
        `Overview of options: diet and stool-softening measures, medical treatment, office procedures and surgery`,
        `Signs that need an in-person exam`,
        `Written plan to share with your local doctor`,
      ],
      body: [
        {
          h2: `Acute vs. chronic fissure`,
          paras: [
            `Many fissures heal with diet and hygiene measures. When a fissure lasts more than six to eight weeks, it is considered chronic, and the options change. The specialist explains where you are and what comes next.`,
          ],
        },
        {
          h2: `A second opinion before surgery`,
          paras: [
            `If you've been told you need fissure surgery, a second opinion helps you understand the alternatives and the trade-offs. <a href="/en/anal-fissure/">Read more about anal fissures</a>.`,
          ],
        },
      ],
      faqs: [
        {
          q: `Do I have to show the area on camera?`,
          a: `No. The visit is a conversation and a review of your records. If an exam is needed, the doctor explains where and how.`,
        },
        {
          q: `Can I get medication from you?`,
          a: `No. Medication decisions follow the rules of your country; your written plan helps your local doctor decide.`,
        },
        {
          q: `How much is it?`,
          a: `USD 50 for a 30-minute video visit.`,
        },
      ],
    },
    meta: {
      title: `Painful bowel movements? Talk to a specialist`,
      hook: `Sharp pain when you go, and a little blood? It's common, and it can be addressed.`,
      text: `A colorectal specialist from Lima reviews your symptoms by private video and walks you through the options for an anal fissure. Written plan included.`,
      bullets: [`No camera exam`, `Options explained step by step`, `USD 50 for 30 minutes`],
    },
    tiktok: {
      title: `Anal fissure: talk to a specialist`,
      hook: `Feels like glass when you go? Let's talk.`,
      text: `That sharp pain and bright red blood could be an anal fissure, and it's common. Talk to a colorectal specialist from Lima by private video. You'll understand your options and get a written plan for your local doctor. 30 minutes, USD 50.`,
    },
  },

  // ───────────────────────────── Anal fistula
  {
    key: 'fistula',
    slugG: 'anal-fistula',
    slugM: 'anal-fistula',
    slugT: 'anal-fistula',
    google: {
      title: `Anal Fistula Treatment: Video Visit with a Specialist`,
      h1: `Anal fistula treatment: video visit with a colorectal specialist`,
      lead: `Drainage, a lump that keeps coming back or a past abscess? A colorectal specialist reviews your case and your imaging by video and gives you a written plan.`,
      bullets: [
        `Review of your symptoms, MRI or ultrasound reports and prior surgeries`,
        `Overview of surgical options and what each one involves`,
        `Questions to bring to your surgeon`,
        `Written plan to share with your local doctor`,
      ],
      body: [
        {
          h2: `Every fistula is different`,
          paras: [
            `The right approach depends on the fistula's path and how much sphincter muscle it crosses. That's why imaging reports matter. The specialist explains what your reports show and which options may fit, with attention to protecting continence.`,
          ],
        },
        {
          h2: `Recurring fistula`,
          paras: [
            `If a fistula came back after surgery, a second opinion can help you understand why and what to consider next. <a href="/en/anal-fistula/">Read more about anal fistulas</a>.`,
          ],
        },
      ],
      faqs: [
        {
          q: `Can a fistula be treated without surgery?`,
          a: `Most fistulas need a procedure. The specialist explains the options that may apply to your case and what needs to be confirmed in person.`,
        },
        {
          q: `I have fever and a painful swelling. Should I book?`,
          a: `No. That can be an abscess that needs urgent care. Go to an emergency room.`,
        },
        {
          q: `How much is it?`,
          a: `USD 50 for 30 minutes, with a full refund if the visit doesn't take place.`,
        },
      ],
    },
    meta: {
      title: `Anal fistula? Get a second opinion`,
      hook: `A fistula that keeps draining is frustrating. You deserve a clear explanation of your options.`,
      text: `A colorectal specialist from Lima reviews your history and imaging by private video and explains the options. You get a written plan for your surgeon.`,
      bullets: [`Imaging reviewed with you`, `Surgical options explained`, `USD 50 for 30 minutes`],
    },
    tiktok: {
      title: `Anal fistula: second opinion`,
      hook: `Fistula came back? Get a second opinion.`,
      text: `A fistula that keeps draining or returns after surgery needs a careful plan. A colorectal specialist from Lima reviews your history and imaging by private video and explains your options in plain English. Written plan included. USD 50.`,
    },
  },

  // ───────────────────────────── Anal warts (no TikTok)
  {
    key: 'condilomas',
    slugG: 'anal-warts',
    slugM: 'anal-warts',
    slugT: '',
    google: {
      title: `Anal Warts Treatment: Video Visit with a Specialist`,
      h1: `Anal warts treatment: video visit with a colorectal specialist`,
      lead: `Bumps or growths around the anus? Talk privately with a colorectal specialist by video, understand the options and get a written plan.`,
      bullets: [
        `Private, nonjudgmental conversation`,
        `Overview of options: medical treatment, office procedures and surgery`,
        `Why an in-person exam matters and where to get one`,
        `Written plan to share with your local doctor`,
      ],
      body: [
        {
          h2: `About anal warts`,
          paras: [
            `Anal warts are caused by certain types of human papillomavirus (HPV). They often need an in-person exam to confirm and to check for warts inside the anal canal. The specialist explains what to expect and which options exist.`,
          ],
        },
        {
          h2: `Keeping it private`,
          paras: [
            `You won't be asked to show anything on camera. The visit is a conversation, and your report is shared only with whom you choose. <a href="/en/anal-warts/">Read more about anal warts</a>.`,
          ],
        },
      ],
      faqs: [
        {
          q: `Can anal warts be removed over video?`,
          a: `No. Removal requires an in-person procedure. The video visit helps you understand your options and plan next steps.`,
        },
        {
          q: `Should my partner be checked?`,
          a: `The specialist can explain when partner evaluation is advisable and where to get it.`,
        },
        {
          q: `How much is it?`,
          a: `USD 50 for a 30-minute video visit.`,
        },
      ],
    },
    meta: {
      title: `Bumps down there? Talk privately`,
      hook: `Anal warts are common and nothing to be ashamed of. A specialist can explain your options.`,
      text: `Talk to a colorectal specialist from Lima by private video. No camera exam. You get a clear explanation and a written plan for your local doctor.`,
      bullets: [`Private and nonjudgmental`, `No camera exam`, `USD 50 for 30 minutes`],
    },
    tiktok: {
      title: `Anal warts: talk to a specialist`,
      hook: `Anal warts are common. Talk to a specialist privately.`,
      text: `A colorectal specialist from Lima explains your options by private video. No camera exam, written plan included. USD 50.`,
    },
  },

  // ───────────────────────────── Second opinion / treatment in Lima
  {
    key: 'segunda-opinion',
    slugG: 'second-opinion',
    slugM: 'second-opinion',
    slugT: 'second-opinion',
    google: {
      title: `Second Opinion Before Colorectal Surgery | USD 50`,
      h1: `Second opinion before colorectal surgery, by video`,
      lead: `Told you need surgery for hemorrhoids, a fissure or a fistula? A colorectal specialist from Lima reviews your records by video and gives you a written opinion.`,
      bullets: [
        `Review of your reports, imaging and surgical recommendation`,
        `Alternatives that may exist for your case`,
        `Questions to bring back to your surgeon`,
        `Written report you keep and share as you choose`,
        `Option to be examined and treated in Lima`,
      ],
      body: [
        {
          h2: `Medical guidance from Peru`,
          paras: [
            `Our physicians are licensed in Peru. Their second opinion helps you understand your options and talk with your local surgeon; it does not replace an in-person exam or your local care team.`,
          ],
        },
        {
          h2: `Considering surgery in Lima?`,
          paras: [
            `If an in-person exam or surgery in Lima makes sense for you, the specialist explains the process and shares reference cost estimates during the consultation. <a href="/en/treatment-in-lima/">Read about treatment in Lima</a>.`,
          ],
        },
      ],
      faqs: [
        {
          q: `What should I send before the visit?`,
          a: `Clinic notes, colonoscopy or anoscopy results, imaging reports, pathology and any previous operative reports.`,
        },
        {
          q: `Are you licensed in the US?`,
          a: `No. Our physicians are licensed in Peru. The service is a second opinion and medical guidance from Peru.`,
        },
        {
          q: `How much does surgery in Lima cost?`,
          a: `It depends on your case. Reference estimates are shared during the consultation, once the specialist understands your situation.`,
        },
      ],
    },
    meta: {
      title: `Second opinion before surgery`,
      hook: `Wanting a second opinion before surgery is normal. Good doctors expect it.`,
      text: `A colorectal specialist from Lima reviews your records by private video and tells you what she thinks. You get a written report to discuss with your surgeon.`,
      bullets: [`Records reviewed with you`, `Written second opinion`, `USD 50 for 30 minutes`],
    },
    tiktok: {
      title: `Second opinion before surgery`,
      hook: `Told you need surgery down there? Get a second opinion.`,
      text: `Before you say yes to hemorrhoid, fissure or fistula surgery, hear from another specialist. A colorectal specialist from Lima reviews your records by private video and gives you a written opinion. You can also explore treatment in Lima. USD 50.`,
    },
  },
];
