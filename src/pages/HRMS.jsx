import Breadcrumb from '../components/Breadcrumb';

/* Placeholder HRMS landing page. Final content to be added later. */
export default function HRMS() {
  return (
    <>
      <Breadcrumb trail={[{ label: 'HRMS' }]} />
      <section className="page-header">
        <div className="container">
          <p className="eyebrow">Platform</p>
          <h1 className="page-title">HRMS.</h1>
          <p className="page-lede">
            A clean, integrated HR management layer — connecting attendance,
            payroll, leave, and people operations into one system.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">Coming soon</p>
            <h2>Detailed HRMS overview on the way.</h2>
            <p className="section-lede">
              Modules, integrations, and rollout details will be available
              here shortly. For now, reach out and we'll share the spec
              tailored to your team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
