import Breadcrumb from '../components/Breadcrumb';

/* Placeholder About Us page. Final content to be added later. */
export default function About() {
  return (
    <>
      <Breadcrumb trail={[{ label: 'About Us' }]} />
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1 className="page-title">About The Forum.</h1>
          <p className="page-lede">
            We build custom products, services, and connected systems —
            from biometric devices and ERP workflows to live dashboards
            that make operations visible, controlled, and automated.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Coming soon</p>
            <h2>More about who we are.</h2>
            <p className="section-lede">
              The full story of The Forum — our team, our approach, and
              the work we've shipped — is on the way. In the meantime,
              get in touch and we'll be happy to walk you through it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
