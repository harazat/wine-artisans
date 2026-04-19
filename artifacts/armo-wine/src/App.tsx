import { motion } from "framer-motion";
import bottleSingle from "@assets/Wine_Bottle_Photography_Apr_19_2026_1776640799392.png";
import bottleThree from "@assets/Wine_Bottle_Photography_Apr_19_2026_(1)_1776640799386.png";
import bottlePour from "@assets/Wine_Bottle_Photography_Apr_19_2026_(2)_1776640799392.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-10">
      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px"}}></div>

      <motion.div
        className="z-10 flex flex-col items-center text-center max-w-4xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p variants={fadeIn} className="font-sans text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Glendale, California
        </motion.p>

        <motion.h1 variants={fadeIn} className="font-serif text-8xl md:text-[12rem] leading-none mb-6 text-foreground tracking-tighter">
          ARMO
        </motion.h1>

        <motion.div variants={fadeIn} className="flex items-center gap-4 mb-12">
          <div className="h-px w-12 bg-secondary"></div>
          <p className="font-serif italic text-xl md:text-2xl text-burgundy">Dry Red Wine</p>
          <div className="h-px w-12 bg-secondary"></div>
        </motion.div>

        <motion.p variants={fadeIn} className="font-script text-4xl md:text-5xl text-foreground mt-4">
          "This Is That's It."
        </motion.p>
      </motion.div>

      <motion.div
        className="absolute bottom-12 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Discover</span>
        <div className="w-px h-16 bg-gradient-to-b from-secondary to-transparent"></div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background relative border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="font-serif text-4xl md:text-6xl mb-10 text-foreground">Made without compromise.</h2>
          <p className="font-sans text-lg md:text-xl leading-relaxed text-foreground/80 font-light">
            I didn't start with a market analysis. I started with a feeling. ARMO is small-batch by necessity, handcrafted by obsession. It is not for everyone. It is for those who know the difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-32 px-6 md:px-12 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "200px 200px"}}></div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <span className="font-script text-3xl text-secondary mb-6 block">Heritage</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-snug">Roots in Armenia. <br/> Grown in California.</h2>
          <div className="w-12 h-px bg-secondary mb-8"></div>
          <p className="font-sans text-base leading-loose text-background/80 mb-6 font-light">
            The ritual of winemaking isn't a business for me — it's a lifeline to a place I left but never lost. In Glendale, beneath the shadow of different mountains, I crushed the grapes the only way I knew how: with patience, with reverence, and with a refusal to cut corners.
          </p>
          <p className="font-sans text-base leading-loose text-background/80 font-light">
            Every bottle of ARMO is a quiet conversation between the soil of California and the soul of Armenia. No additives. No rushing the process. Just time, fruit, and gravity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="aspect-[3/4] bg-muted relative overflow-hidden"
        >
          <img src={bottleSingle} alt="ARMO Wine Bottle" className="object-cover w-full h-full" />
        </motion.div>
      </div>
    </section>
  );
}

function Heritage() {
  return (
    <section className="relative overflow-hidden h-[60vh] md:h-[70vh]">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      >
        <img
          src="/images/gen-heritage.png"
          alt="Armenian landscape at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50"></div>
      </motion.div>
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-background/60 mb-4">Batch No. 1</p>
        <p className="font-script text-5xl md:text-7xl text-secondary">"This Is That's It."</p>
        <p className="font-sans text-sm text-background/60 mt-6 tracking-widest uppercase">2024 — Glendale, California</p>
      </motion.div>
    </section>
  );
}

function Specs() {
  return (
    <section className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-gold py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="text-center md:text-left flex flex-col items-center md:items-start">
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">Release</span>
            <span className="font-serif text-3xl">Batch No. 1</span>
            <span className="font-script text-2xl text-burgundy mt-2">Vintage 2024</span>
          </motion.div>

          <motion.div variants={fadeIn} className="text-center flex flex-col items-center border-t md:border-t-0 md:border-l md:border-r border-border py-8 md:py-0 px-8">
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">Profile</span>
            <span className="font-serif text-2xl leading-snug">Bold, rich, and<br/>unapologetically dry.</span>
          </motion.div>

          <motion.div variants={fadeIn} className="text-center md:text-right flex flex-col items-center md:items-end">
            <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground mb-4">Finish</span>
            <span className="font-serif text-3xl">Smooth</span>
            <span className="font-sans text-sm text-foreground/60 mt-3 font-light max-w-[200px]">Lingers like a well-told story at the end of the night.</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-20 px-6 md:px-12 bg-background">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-5xl mx-auto mb-16 text-center"
      >
        <h3 className="font-sans text-xs tracking-[0.3em] uppercase text-muted-foreground">The Bottle</h3>
      </motion.div>

      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 items-end"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn} className="col-span-2 aspect-[4/3] bg-muted relative overflow-hidden group">
          <img src={bottleThree} alt="Three ARMO wine bottles" className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105" />
        </motion.div>

        <motion.div variants={fadeIn} className="aspect-square bg-muted relative overflow-hidden group md:mt-16">
          <img src="/images/gen-glass.png" alt="A glass of ARMO dry red wine" className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105" />
        </motion.div>

        <motion.div variants={fadeIn} className="aspect-square bg-muted relative overflow-hidden group">
          <img src="/images/gen-flatlay.png" alt="Artisan wine-making elements" className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105" />
        </motion.div>

        <motion.div variants={fadeIn} className="col-span-2 aspect-[4/3] bg-muted relative overflow-hidden group md:-mt-16">
          <img src={bottlePour} alt="ARMO wine being poured" className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Journal() {
  return (
    <section className="py-40 px-6 md:px-12 bg-background flex flex-col items-center text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="max-w-2xl"
      >
        <h3 className="font-sans text-sm tracking-[0.2em] uppercase text-muted-foreground mb-12">Journal</h3>
        <p className="font-serif text-4xl md:text-5xl italic text-foreground leading-normal">
          Next batch coming soon.
        </p>
        <div className="mt-16 w-px h-24 bg-border mx-auto"></div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-serif text-2xl tracking-widest text-foreground">ARMO</div>
        <div className="font-sans text-xs tracking-widest uppercase text-muted-foreground flex gap-8">
          <span>Glendale, CA</span>
          <a href="#" className="hover:text-burgundy transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-background selection:bg-primary selection:text-background">
      <Hero />
      <About />
      <Story />
      <Heritage />
      <Specs />
      <Gallery />
      <Journal />
      <Footer />
    </div>
  );
}

export default App;
