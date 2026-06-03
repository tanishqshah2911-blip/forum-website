import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import EcosystemSection from '../components/EcosystemSection';
import StatsCounter from '../components/StatsCounter';
import CustomersStrip from '../components/CustomersMarquee';

/* ──────────────────────────────────────────────────────────────
 *  HERO ANIMATION BACKUP (do NOT delete)
 * ──────────────────────────────────────────────────────────────
 *  The previous hero used <HomeEcosystemBackground /> — a full
 *  animated ecosystem with products, services, the Forum Console
 *  dock, connector wires, traveling data packets, etc. It now
 *  conflicts with the new background video, so it is NOT rendered.
 *
 *  The component file is fully preserved at:
 *      src/components/HomeEcosystemBackground.jsx
 *
 *  All of its CSS (sections 60–61 in animations.css) is also
 *  preserved untouched.
 *
 *  TO REVERT to the old animated hero:
 *    1. Uncomment the `import HomeEcosystemBackground` line below.
 *    2. Uncomment the `<HomeEcosystemBackground />` line inside
 *       the hero <section>.
 *    3. Remove (or comment out) the <video className="hero-video">
 *       and <span className="hero-video-overlay"> elements in the
 *       same <section> if you want the old animation back as the
 *       sole hero background.
 *
 *  // import HomeEcosystemBackground from '../components/HomeEcosystemBackground';
 * ────────────────────────────────────────────────────────────── */

export default function Home() {
  /* Synchronized hero entrance — single shared trigger for both
     the per-word headline animations and the background video
     opacity emerge. Both are gated behind the .hero-loaded class
     on the section: word animations are paused until the class
     is on the parent, the video opacity transition starts when
     the class is on the parent. They share the same start moment
     and complete around the same time (≈1.7s after class add).

     The class is added when the video is ready to play (onCanPlay
     fires) plus a tiny 100ms tick so the dark fallback is briefly
     visible. A 1.2s safety-net useEffect timeout flips the state
     even if onCanPlay never fires, so the page never looks frozen
     on a slow connection. */
  const [heroLoaded, setHeroLoaded] = useState(false);
  const heroTriggeredRef = useRef(false);

  /* Theme-aware hero video. Each palette has its own purpose-built
     video file so light mode isn't a CSS hack over the dark video.
     Both files are ping-pong-stitched (forward + reversed) for
     seamless looping. The `key` prop on the <video> below forces
     React to fully remount when the theme toggles, so the browser
     picks up the new src cleanly without partial-state weirdness. */
  const { theme } = useTheme();
  const heroVideoSrc = theme === 'light'
    ? '/videos/hero_background_light_pingpong.mp4'
    : '/videos/hero_background_pingpong.mp4';

  useEffect(() => {
    const t = window.setTimeout(() => {
      if (heroTriggeredRef.current) return;
      heroTriggeredRef.current = true;
      setHeroLoaded(true);
    }, 1200);
    return () => window.clearTimeout(t);
  }, []);

  const handleVideoReady = () => {
    /* The light video's slowdown is now baked into the file
       itself (setpts=2.0 in ffmpeg), so no playbackRate
       manipulation is needed here — JS-driven playback-rate
       changes cause uneven decode/render in some browsers.
       Native-speed playback of a pre-slowed file is smooth. */
    if (heroTriggeredRef.current) return;
    heroTriggeredRef.current = true;
    window.setTimeout(() => setHeroLoaded(true), 100);
  };

  return (
    <>
      {/* HERO — background video + connected ecosystem behind premium headline.
          Background tells the full Forum story: products + services
          send live data into the central Forum Console. */}
      <section
        id="home"
        className={`hero hero-clean${heroLoaded ? ' hero-loaded' : ''}`}
      >
        {/* Background video — true ping-pong loop baked into the
            file (forward + reversed concatenated by ffmpeg). The
            native loop attribute restarts at frame 0, but because
            frame 0 == final frame of the reversed half, there's
            no visible jump. Single video element, no crossfade,
            no JS, no transition layers. */}
        <video
          /* key forces a full remount when the theme toggles so
             the new src is loaded cleanly. The parent Home
             component stays mounted, so heroTriggeredRef is
             preserved and the entrance animation doesn't replay. */
          key={heroVideoSrc}
          className="hero-video"
          src={heroVideoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
          /* Shared entrance trigger: when the video reports it can
             play, handleVideoReady() flips heroLoaded → true (after
             a 100ms tick to keep the dark fallback briefly visible).
             That flip adds .hero-loaded to the section, which both
             unpauses the per-word headline animations AND starts
             the .hero-video opacity transition — synchronized
             entrance. The ref guard ensures this is one-shot, so
             loop iterations of the ping-pong video that re-fire
             canplay on some browsers don't re-trigger anything. */
          onCanPlay={handleVideoReady}
        />
        {/* Dark gradient overlay above the video, below the
            headline. Top fade for navbar readability, center
            scrim behind the headline, bottom fade into the
            next section. */}
        <span className="hero-video-overlay" aria-hidden="true" />

        {/*
          OLD HERO ECOSYSTEM ANIMATION — disabled while the
          background video is active. To bring it back, uncomment
          the line below AND restore the import at the top of this
          file (see "HERO ANIMATION BACKUP" block).

          <HomeEcosystemBackground />
        */}

        <div className="container hero-inner hero-clean-inner">
          <p className="eyebrow">Welcome to The Forum</p>
          <h1 className="hero-title hero-title-words">
            <span className="word word-where">Where</span>{' '}
            <span className="word word-innovation"><span className="accent">innovation</span></span>{' '}
            <span className="word word-meets">meets</span>{' '}
            <span className="word word-engineering"><span className="accent">engineering</span>.</span>
          </h1>
          <p className="hero-sub">
            We build custom products, services, and connected systems —
            from biometric devices and ERP workflows to live dashboards
            that make operations visible, controlled, and automated.
          </p>
          <div className="hero-ctas">
            <Link to="/products" className="btn btn-primary">Explore Products</Link>
            <a href="#what-we-do" className="btn btn-ghost">What we do</a>
          </div>
        </div>
      </section>

      {/* System flow — kept as the one cinematic element below
          the hero. Lightweight CSS-driven, smooth on all devices. */}
      {/* Connected ecosystem story — Build → Connect → Monitor → Automate */}
      <EcosystemSection />

      {/* Animated stats — numbers count up when the section
          enters view. Years · Cities · Customers · End Users */}
      <StatsCounter />

      {/* Clients — single horizontal strip of brand-tinted
          logos, no heading. Sits right after Stats so the
          "10 customers engaged" number is immediately
          backed up by the actual names. */}
      <CustomersStrip />

      {/* What We Do — single section that now contains two
          stacked subsections: Services first, Products below.
          Each subsection carries the id the navbar scroll-spy
          targets (#services, #products) so navbar clicks scroll
          here and active-state cycles correctly. The full
          /services and /products PAGES are still reachable via
          the "Explore all" buttons inside each subsection. */}
      <section id="what-we-do" className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Clear work, delivered with care.</h2>
            <p className="section-lede">
              The Forum is built around a simple idea: good work should feel calm.
              We help people and teams move forward with services and products that
              stay out of the way — and do the job well.
            </p>
          </div>

          {/* Two compact option cards — Services above, Products
              below. Each carries its own id so navbar hash links
              and scroll-spy resolve correctly. The whole card is
              a clickable Link to the matching detail page. */}
          <div className="wwd-options">
            <Link
              id="services"
              to="/services"
              className="card card-link wwd-option"
            >
              <div className="card-num">01</div>
              <h3>Services</h3>
              <p>
                Engineering software, dashboards, device consoles, ERP, CCTV,
                maintenance, and connected automation for business operations.
              </p>
              <span className="card-cta">
                Explore Services <span className="arrow">→</span>
              </span>
            </Link>

            <Link
              id="products"
              to="/products"
              className="card card-link wwd-option"
            >
              <div className="card-num">02</div>
              <h3>Products</h3>
              <p>
                Purpose-built systems including Vayu, Canteen, and Biometric
                Attendance for connected workplaces.
              </p>
              <span className="card-cta">
                Explore Products <span className="arrow">→</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA — single, compact "Get in Touch" section
          replacing the previous form-heavy contact block.
          Picks up the site-wide premium heading reveal via
          the .section-head wrapper. The .home-cta modifier adds
          centering, a subtle blue/violet ambient glow, and a
          gold hairline rule above — premium, not brochure-y. */}
      <section id="contact" className="section alt home-cta-section">
        <div className="container">
          <div className="section-head home-cta-head">
            <p className="eyebrow">Get in touch</p>
            <h2>Let's build your <span className="accent">connected system</span>.</h2>
            <p className="section-lede">
              From software dashboards to biometric devices, canteen systems,
              sensors, CCTV, ERP, and support — The Forum helps businesses
              connect operations into one reliable ecosystem.
            </p>
            <div className="hero-ctas home-cta-actions">
              <a
                href="mailto:tfxautomation@gmail.com?subject=Project%20Inquiry"
                className="btn btn-primary"
              >
                Get in Touch
              </a>
              <Link to="/services" className="btn btn-ghost">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
