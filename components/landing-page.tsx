'use client';

import {
  ArrowRight,
  BarChart3,
  BookOpenText,
  CalendarDays,
  Camera,
  CheckCircle2,
  ChevronRight,
  Church,
  ClipboardCheck,
  Dribbble,
  Facebook,
  HeartHandshake,
  Instagram,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircleHeart,
  Mic2,
  Music2,
  Network,
  Play,
  Send,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Youtube,
} from 'lucide-react';
import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';   
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import praiseWorshipImage from '@/src/assets/09.jpg';
import mediaTeamImage from '@/src/assets/01.jpg';
import DancersMinistryImage from '@/src/assets/02.jpg';
import evangelism from '@/src/assets/evangelism.jpg';
import teacher from '@/src/assets/preacher2.jpg'; 
import Instrumentalists from '@/src/assets/instrumentalists.jpeg';
import dancers from '@/src/assets/dancers.jpg';
import PraiseWorship from '@/src/assets/praiseWorship.jpg';
import chairperson from '@/src/assets/Chairperson.jpg';
import viceChairperson from '@/src/assets/ViceChairperson.jpg';
import secretary from '@/src/assets/secretary.jpg';
import viceSecretary from '@/src/assets/viceSecretary.jpg';
import treasurer from '@/src/assets/Treasurer.jpg';
import mjombaImage from '@/src/assets/togthr.jpg'; 
import ditscfLogo from '@/src/assets/ditscf.png';
import togetherPost from '@/src/assets/togetherInPraise.jpeg';
import pic01 from '@/src/assets/06.jpeg';
import pic02 from '@/src/assets/07.jpeg';
import pic03 from '@/src/assets/08.jpeg';
import pic04 from '@/src/assets/09.jpg';
import pic05 from '@/src/assets/10.jpeg'; 
import pic06 from '@/src/assets/11.jpeg'; 
import pic07 from '@/src/assets/12.jpeg';
import pic08 from '@/src/assets/13.jpeg';
import pic09 from '@/src/assets/14.jpeg';

const heroImages = [
  pic01.src,
  pic02.src,
  mediaTeamImage.src,
];

const stats = [
  { label: 'Students Reached', value: 2500 },
  { label: 'Leaders Developed', value: 180 },
  { label: 'Outreach Missions', value: 64 },
  { label: 'Prayer Sessions', value: 420 },
];

const values = [
  ['Mission', 'To raise Christ-centered students who grow in faith, serve with excellence, and influence campus life with the gospel.'],
  ['Vision', 'A transformed DIT community where students encounter Christ, discover purpose, and become servant leaders.'],
  ['Faith', 'We build every ministry on the word of God, prayer, and obedience to Christ.'],
  ['Love', 'We create a home where every student is known, cared for, and encouraged.'],
  ['Integrity', 'We lead transparently and steward people, time, and resources with honor.'],
  ['Excellence', 'We serve God and people with preparation, creativity, and discipline.'],
  ['Service', 'We turn worship into action through outreach, care, and community impact.'],
  ['Unity', 'We celebrate diverse gifts and departments as one body in Christ.'],
  ['Leadership', 'We develop leaders who influence the campus and the world beyond graduation.'],
];

const ministries = [
  {
    title: 'Praise & Worship Team',
    image: praiseWorshipImage.src,
    description: 'Leading the fellowship into heartfelt worship with spiritual depth and musical excellence.',
    activities: ['Sunday worship', 'Vocal training', 'Worship nights'],
  },
  {
    title: 'Media Team',
    image: mediaTeamImage.src,
    description: 'Telling the DITSCF story through photography, livestreams, design, and digital communication.',
    activities: ['Photography', 'Livestream', 'Design'],
  },
  {
    title: 'Dancers Ministry',
    image: DancersMinistryImage.src,
    description: 'Expressing worship, testimony, and gospel joy through disciplined creative movement.',
    activities: ['Choreography', 'Event ministration', 'Training'],
  },
  {
    title: 'Evangelism & Missions',
    image: evangelism.src,
    description: 'Reaching students and communities with compassion, prayer, discipleship, and service.',
    activities: ['Campus missions', 'Community outreach', 'Follow-up'],
  },
  {
    title: 'Teachers of the Word',
    image: teacher.src,
    description: 'Equipping believers through biblical teaching, discipleship classes, and study groups.',
    activities: ['Bible study', 'Discipleship', 'Apologetics'],
  },
  {
    title: 'Instrumentalists',
    image: Instrumentalists.src,
    description: 'Serving the sound of worship with skill, humility, rehearsal culture, and unity.',
    activities: ['Band practice', 'Mentorship', 'Live sessions'],
  },
];

const events = [
  'Together in Praise & Worship',
  'Gospel Outreach Missions',
  'Prayer Camps',
  'Overnight Prayer Meetings',
  'Leadership Conferences',
  'Bible Study Conferences',
  'Community Service Activities',
];

const testimonials = [
  {
    quote:
      'DITSCF gave me more than friends. It shaped my devotion, discipline, leadership, and courage to live for Christ on campus.',
    name: 'Grace Emmanuel',
    role: 'Alumni, Computer Engineering',
  },
  {
    quote:
      'Through the fellowship I found a spiritual family that prayed with me, taught me the Word, and helped me discover purpose.',
    name: 'Joshua Mrema',
    role: 'Member, Electrical Engineering',
  },
  {
    quote:
      'The leadership culture here is serious, humble, and excellent. DITSCF prepared me to serve beyond university life.',
    name: 'Neema Joseph',
    role: 'Former Ministry Coordinator',
  },
];

const platformFeatures = [
  ['Membership Management', UsersRound],
  ['Event Management', CalendarDays],
  ['Attendance Tracking', ClipboardCheck],
  ['Ministry Coordination', Network],
  ['Communication', Megaphone],
  ['Analytics & Reporting', BarChart3],
];

const leaders = [
  ['Chairman', 'Adriano Chalema', 'Spiritual direction, unity, and vision alignment'],
  ['Vice Chairman', 'Emmanuel Magubu', 'Ministry operations and team coordination'],
  ['General Secretary', 'Godbless Kalist', 'Records, communication, and governance'],
  ['Vice General Secretary', 'Mary Sonelo', 'Member follow-up and documentation'],
  ['Treasurer', 'Naomi K.', 'Finance stewardship and accountability'],
];

const gallery = [
  ['Worship', praiseWorshipImage.src],
  ['Prayer', pic01.src],
  ['Outreach', mjombaImage.src],
  ['Conferences', pic07.src],
  ['Fellowship', pic08.src],
  ['Leadership', pic09.src],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 1800, bounce: 0 });

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) ref.current.textContent = `${Math.round(latest).toLocaleString()}+`;
    });
  }, [spring]);

  return <span ref={ref}>0+</span>;
}

function SectionHeader({
  eyebrow,
  title,
  text,
  center,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <motion.div
      className={cn('max-w-3xl', center && 'mx-auto text-center')}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={fadeUp}
      transition={{ duration: 0.7 }}
    >
      <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-gold">{eyebrow}</p>
      <h2 className="text-4xl font-black leading-[1.02] tracking-tight text-navy md:text-6xl">{title}</h2>
      {text ? <p className="mt-6 text-lg leading-8 text-slate-600">{text}</p> : null}
    </motion.div>
  );
}

export function LandingPage() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <About />
      <Values />
      <Ministries />
      <Events />
      <Impact />
      <Testimonials />
      <DigitalPlatform />
      <Leadership />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="section-shell mt-4 flex items-center justify-between rounded-full border border-white/20 bg-navy/80 px-4 py-3 text-white shadow-2xl shadow-navy/20 backdrop-blur-2xl md:px-6">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid size-04  place-items-center rounded-full text-navy">
            <Image 
            src = {ditscfLogo} 
            alt="DITSCF Logo"
            className="h-full w-[70%] object-cover"
             />
          </span>
          <span>
            <strong className="block text-sm font-black text-gold tracking-wide">DITSCF</strong>
            <small className="hidden text-xs text-white/65 sm:block">One Family For Gospel</small>
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-white/78 lg:flex">
          {['About', 'Ministries', 'Events', 'Platform', 'Contact'].map((item) => ( 
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-gold">
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="gold" size="sm" className="hidden sm:inline-flex">
            <a href="#contact">Join Fellowship</a>
          </Button>
          <Button variant="outline" size="icon" aria-label="Open menu" className="lg:hidden">
            <Menu size={19} />
          </Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy text-white">
      <div className="absolute inset-0">
        <div className="grid h-full grid-cols-3">
          {heroImages.map((src, index) => (
            <motion.div
              key={src}
              className="bg-cover bg-center"
              style={{ backgroundImage: `url(${src})` }}
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, delay: index * 0.16 }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/82 to-royal/30" />
        <div className="absolute inset-0 bg-royal-radial" />
      </div>

      <div className="section-shell relative flex min-h-screen items-center pt-28">
        <div className="grid w-full items-end gap-12 lg:grid-cols-[1fr_390px]">
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.8 }}>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
              <Sparkles size={16} className="text-gold" />
              Dar es Salaam Institute of Technology
            </div>
            <h1 className="max-w-5xl text-md font-black leading-[0.95] tracking-tight md:text-6xl xl:text-8xl">
              One Family For Gospel. 
            </h1>
            {/* <p className="mt-7 max-w-2xl text-lg leading-8 text-white/74 md:text-md">
              A royal digital home for worship, discipleship, missions, leadership, and student
              transformation at DIT.
            </p> */} 
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="gold" size="lg">
                <a href="#contact">Join Fellowship <ArrowRight size={18} /></a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#ministries">Explore Ministries</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#events">Upcoming Events</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-[2rem] p-5 text-navy shadow-premium"
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <div className="rounded-[1.5rem] bg-white p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black uppercase tracking-[0.18em] text-royal">Live Impact</span>
                <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-navy">2026</span>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-slate-50 p-4">
                    <strong className="block text-2xl font-black text-royal">
                      <AnimatedNumber value={stat.value} />
                    </strong>
                    <span className="mt-1 block text-xs font-semibold text-slate-500">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl bg-navy p-4 text-white">
                <p className="text-sm text-white/70">Next gathering</p>
                <h3 className="mt-2 text-xl font-black">Together in Praise & Worship</h3>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <span>Friday, 5:00 PM</span>
                  <Play size={18} className="text-gold" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const pillars = [
    ['Spiritual Growth', BookOpenText],
    ['Discipleship', UsersRound],
    ['Worship', Music2],
    ['Evangelism', Send],
    ['Leadership', ShieldCheck], 
    ['Community Impact', HeartHandshake],
  ];

  return (
    <section id="about" className="section-shell grid gap-12 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <motion.div
        className="relative min-h-[560px] overflow-hidden rounded-[2rem] bg-cover bg-center shadow-premium"
        style={{
          backgroundImage:
            `url(${pic04.src})`,
        }}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/92 p-5 backdrop-blur">
          <p className="font-black text-white">Faith that becomes formation.</p>
          <p className="mt-2 text-sm leading-6 text-white">
            DITSCF exists to help students encounter Christ, grow in the Word, discover purpose,
            and serve with excellence on campus and beyond.
          </p>
        </div>
      </motion.div>
      <div>
        <SectionHeader
          eyebrow="About DITSCF"
          title="A fellowship shaped for spiritual depth and public impact."
          text="We are a Christ-centered student movement at DIT committed to worship, discipleship, evangelism, leadership development, and community transformation."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2"> 
          {pillars.map(([label, Icon]) => (
            <Card key={label as string} className="flex items-center gap-3 rounded-3xl p-4">
              <span className="grid size-11 place-items-center rounded-2xl bg-royal/10 text-royal">
                <Icon size={20} />
              </span>
              <strong>{label as string}</strong>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="section-shell">
        <SectionHeader
          center
          eyebrow="Mission, Vision & Core Values"
          title="Convictions that guide our worship, leadership, and service."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {values.map(([title, text], index) => (
            <motion.article
              key={title}
              className={cn(
                'rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-xl shadow-royal/5',
                index < 2 && 'md:col-span-3 lg:col-span-1',
              )}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.04 }}
            >
              <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-gold/20 text-royal">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-xl font-black text-navy">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ministries() {
  return (
    <section id="ministries" className="section-shell py-24">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <SectionHeader
          eyebrow="Ministries Showcase"
          title="Every gift has a place to serve."
          text="Teams are built around spiritual discipline, creative excellence, and practical ministry."
        />
        <Button asChild variant="default" size="lg">
          <a href="#contact">Find Your Team <ChevronRight size={18} /></a>
        </Button>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {ministries.map((ministry, index) => (
          <motion.article
            key={ministry.title}
            className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-royal/5"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
          >
            <div
              className="h-64 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url(${ministry.image})` }}
            />
            <div className="p-6">
              <h3 className="text-2xl font-black text-navy">{ministry.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{ministry.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {ministry.activities.map((activity) => (
                  <span key={activity} className="rounded-full bg-royal/8 px-3 py-1 text-xs font-bold text-royal">
                    {activity}
                  </span>
                ))}
              </div>
              <Button variant="ghost" className="mt-5 px-0 text-royal">
                Join Ministry <ArrowRight size={16} />
              </Button>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Events() {
  return (
    <section id="events" className="overflow-hidden bg-navy py-24 text-white">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Events & Programs"
          title="Moments that become spiritual milestones."
          text="From worship nights to outreach missions, DITSCF programs are designed to form believers and impact communities."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-cover bg-center shadow-premium"
            style={{
              backgroundImage:
              //  pic01.src ? `url(${pic01.src})`, 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80'
                `url(${togetherPost.src})` , 
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/42 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="rounded-full bg-gold px-4 py-2 text-sm font-black text-navy">Featured Event</span>
              <h3 className="mt-5 text-4xl font-black">Together in Praise & Worship</h3>
              <p className="mt-4 max-w-xl leading-7 text-white/72">
                A campus-wide worship experience gathering students for praise, prayer, testimony,
                and surrender to Christ.
              </p>
              <Button className="mt-7" variant="gold">Reserve Seat <CalendarDays size={18} /></Button>
            </div>
          </div>
          <div className="grid gap-4">
            {events.map((event, index) => (
              <motion.div
                key={event}
                className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/8 p-5 backdrop-blur"
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
              >
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gold/20 text-gold">
                    <CalendarDays size={20} />
                  </span>
                  <strong>{event}</strong>
                </div>
                <ArrowRight size={18} className="text-gold" />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="mask-fade mt-16 overflow-hidden">
          <div className="flex w-max animate-marquee gap-4">
            {[...gallery, ...gallery].map(([label, src], index) => (
              <div
                key={`${label}-${index}`}
                className="h-40 w-64 rounded-3xl bg-cover bg-center"
                style={{ backgroundImage: `url(${src})` }}
                aria-label={label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const impact = [
    ['Students Reached', 2500],
    ['Leaders Developed', 180],
    ['Outreach Missions', 64],
    ['Prayer Sessions', 420],
    ['Events Hosted', 210],
    ['Graduates Impacted', 900],
  ];

  return (
    <section className="section-shell py-24">
      <SectionHeader
        center
        eyebrow="Impact"
        title="The fruit of consistent worship, discipleship, and service."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {impact.map(([label, value]) => (
          <Card key={label as string} className="rounded-[2rem] p-8 text-center">
            <strong className="block text-5xl font-black text-royal">
              <AnimatedNumber value={value as number} />
            </strong>
            <span className="mt-3 block font-bold text-slate-600">{label as string}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="section-shell">
        <SectionHeader center eyebrow="Testimonials" title="Stories from students and associates." />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="rounded-[2rem] p-7">
              <MessageCircleHeart className="text-gold" size={34} />
              <p className="mt-6 text-lg leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-7 border-t border-slate-200 pt-5">
                <strong className="block text-navy">{item.name}</strong>
                <span className="text-sm font-semibold text-slate-500">{item.role}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DigitalPlatform() {
  return (
    <section id="platform" className="relative overflow-hidden bg-navy py-24 text-white navy-grid">
      <div className="absolute inset-0 bg-royal-radial" />
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Digital Transformation"
            title="Introducing the future DITSCF Management Platform."
            text="A modern operational system for members, leaders, ministries, events, attendance, communication, and reporting."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {platformFeatures.map(([label, Icon]) => (
              <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                <Icon size={20} className="text-gold" />
                <strong>{label as string}</strong>
              </div>
            ))}
          </div>
        </div>
        <motion.div
          className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-premium backdrop-blur"
          initial={{ opacity: 0, y: 30, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-[1.5rem] bg-white p-5 text-navy">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <strong>DITSCF Command Center</strong>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">Live</span>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-[0.7fr_1.3fr]">
              <div className="space-y-3">
                {platformFeatures.slice(0, 4).map(([label, Icon]) => (
                  <div key={label as string} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
                    <Icon size={17} className="text-royal" />
                    <span className="text-xs font-bold">{label as string}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl bg-slate-50 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-sm font-black text-slate-500">Attendance Overview</span>
                  <BarChart3 size={18} className="text-royal" />
                </div>
                <div className="flex h-44 items-end gap-3">
                  {[38, 58, 46, 72, 88, 64, 96].map((height, index) => (
                    <div key={index} className="flex-1 rounded-t-2xl bg-royal" style={{ height: `${height}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="section-shell py-24">
      <SectionHeader
        center
        eyebrow="Leadership Team"
        title="Servant leadership with accountability, prayer, and excellence."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {leaders.map(([role, name, text], index) => (
          <Card key={role} className="overflow-hidden rounded-[2rem] text-center">
            <div
              className="h-44 bg-cover bg-center"
              style={{
                backgroundImage: `url(${[
                  chairperson.src,
                  viceChairperson.src,
                  secretary.src,
                  viceSecretary.src, 
                  treasurer.src,
                ][index]}?auto=format&fit=crop&w=600&q=80)`,
              }}
            />
            <div className="p-5">
              <p className="mt-1 font-bold text-royal">{name}</p>
              <h3 className="font-black text-navy">{role}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="section-shell">
        <SectionHeader center eyebrow="Gallery" title="Worship, prayer, outreach, conferences, and fellowship life." />
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {gallery.map(([label, src], index) => (
            <motion.figure
              key={label}
              className="mb-5 break-inside-avoid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-royal/5"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
            >
              <div
                className={cn('bg-cover bg-center', index % 2 === 0 ? 'h-80' : 'h-56')}
                style={{ backgroundImage: `url(${src})` }}
              />
              <figcaption className="flex items-center gap-2 p-5 font-black text-navy">
                <Camera size={18} className="text-gold" />
                {label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell grid gap-10 py-24 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <SectionHeader
          eyebrow="Contact & Prayer"
          title="Connect, join, serve, or send a prayer request."
          text="Whether you are a new student, current member, alumni, or ministry partner, DITSCF is ready to walk with you."
        />
        <div className="mt-8 space-y-4">
          <p className="flex items-center gap-3 font-semibold text-slate-700">
            <MapPin className="text-royal" /> DIT Main Campus, Dar es Salaam, Tanzania
          </p>
          <p className="flex items-center gap-3 font-semibold text-slate-700">
            <Mail className="text-royal" /> info@ditscf.or.tz
          </p>
          <div className="flex gap-3 pt-3">
            {[Facebook, Instagram, Youtube, Dribbble].map((Icon, index) => (
              <Button key={index} variant="light" size="icon" aria-label="Social link">
                <Icon size={18} />
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Card className="rounded-[2rem] p-5 md:p-7">
        <div className="grid gap-4 md:grid-cols-2">
          {['Full name', 'Email address', 'Phone number', 'Department / Course'].map((label) => (
            <label key={label} className="space-y-2 text-sm font-bold text-navy">
              <span>{label}</span>
              <input className="h-12 w-full rounded-2xl border border-slate-200 px-4 outline-none transition focus:border-royal" />
            </label>
          ))}
        </div>
        <label className="mt-4 block space-y-2 text-sm font-bold text-navy">
          <span>How can we help?</span>
          <textarea className="min-h-32 w-full resize-none rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-royal" />
        </label>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Button variant="default" size="lg">Submit Contact Form <Send size={18} /></Button>
          <Button variant="gold" size="lg">Send Prayer Request <MessageCircleHeart size={18} /></Button>
        </div>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy py-14 text-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
           
            <span className="grid size-09  place-items-center rounded-full text-navy">
                <Image 
                src = {ditscfLogo} 
                alt="DITSCF Logo"
                className="h-full w-[70%] object-cover"
                />
            </span>
           
            <div>
              <strong className="block text-xl font-black text-gold">DITSCF</strong>
              <span className="text-sm text-white/60">One Family For Gospel</span>
            </div>
          </div>
          <p className="mt-6 max-w-xl leading-8 text-white/62">
            Dar es Salaam Institute of Technology Students Christian Fellowship exists to raise
            Christ-centered students who worship, lead, serve, and transform communities.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="font-black text-gold">Navigation</h3>
            <div className="mt-4 grid gap-3 text-white/70">
              {['About', 'Ministries', 'Events', 'Platform', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-gold">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-black text-gold">Newsletter</h3>
            <p className="mt-4 text-sm leading-6 text-white/62">Receive updates, event reminders, and ministry news.</p>
            <div className="mt-4 flex rounded-full bg-white p-1">
              <input className="min-w-0 flex-1 rounded-full px-4 text-sm text-navy outline-none" placeholder="Email address" />
              <Button size="sm" variant="gold">Join</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-shell mt-12 border-t border-white/10 pt-6 text-sm text-white/46">
        © 2026 DIT Students Christian Fellowship. All rights reserved.
      </div>
    </footer>
  );
}
