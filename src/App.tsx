import { ScrollNav } from "./components/ScrollNav";
import {
  CASH,
  CLIENT,
  DECISIONS,
  DELIVERABLES,
  GATES,
  IN_SCOPE,
  OS_MATRIX,
  OUT_OF_SCOPE,
  PHASES,
  PLATFORM_INCLUDES,
  PS_INCLUDES,
  QUARTERS,
  RACI,
  WORKSHOPS,
} from "./data/packageContent";

export default function App() {
  return (
    <div className="page">
      <ScrollNav />

      <section className="hero" id="purpose">
        <img className="hero-logo" src={CLIENT.factorialLogoPath} alt="Factorial" />
        <p className="hero-kicker">Factorial IT · Implementation package v2.4</p>
        <h1>IT asset lifecycle for {CLIENT.legalName}</h1>
        <p className="hero-lead">
          Move request, approval, purchase, registration, deployment, transfer, recovery,
          and disposal from SysAid onto Factorial IT. SAP SuccessFactors stays the system
          of record for people.
        </p>
        <div className="hero-meta">
          <span className="chip client">{CLIENT.employees} employees</span>
          <span className="chip">{CLIENT.companies}</span>
          <span className="chip">{CLIENT.market}</span>
          <span className="chip">Presented November 2026</span>
        </div>
      </section>

      <aside className="thesis">
        <p>
          <strong>Timing follows the signature, not a fixed month.</strong> TQ0 is the
          calendar quarter in which ANSA signs. TQ+1, TQ+2, and later quarters follow
          from there. This page walks the same story as the implementation package.
        </p>
        <ul>
          <li>
            <span>POC</span>
            <strong>~500 people · ~1,000 devices</strong>
          </li>
          <li>
            <span>Scale</span>
            <strong>~10,000 devices by end of TQ+2</strong>
          </li>
          <li>
            <span>Professional Services</span>
            <strong>USD 5,000 once, at kick-off</strong>
          </li>
          <li>
            <span>Platform</span>
            <strong>USD 6 / device / month</strong>
            <em>List USD 10 · first 12 billable months</em>
          </li>
        </ul>
      </aside>

      <section className="section">
        <div className="section-head">
          <h2>1. Purpose</h2>
          <p>
            Configuration uses native Factorial IT only. Custom development is out of
            scope. Android Zero-Touch and buyback limits are stated so the programme
            matches what can be delivered.
          </p>
        </div>
        <div className="flow">
          {[
            "Request",
            "Approve",
            "Buy",
            "Register",
            "Deploy",
            "Transfer",
            "Recover",
            "Retire",
          ].map((step, index) => (
            <span className="flow-step" key={step}>
              {index > 0 ? <span className="flow-arrow">→</span> : null}
              {step}
            </span>
          ))}
        </div>
        <div className="grid-3 systems">
          <article className="card">
            <p className="tag">People</p>
            <h3>SAP SuccessFactors</h3>
            <p>Hire, transfer, and termination events. Cost centre and manager.</p>
          </article>
          <article className="card">
            <p className="tag">Identity</p>
            <h3>Microsoft 365</h3>
            <p>Single sign-on, multi-factor authentication, and groups for access.</p>
          </article>
          <article className="card card--accent">
            <p className="tag">Assets</p>
            <h3>Factorial IT</h3>
            <p>Inventory, MDM, procurement, SaaS, tickets, and the evidence trail.</p>
          </article>
        </div>
      </section>

      <section className="section" id="scope">
        <div className="section-head">
          <h2>2. Scope</h2>
          <p>
            Sponsor: Group CIO. Business owner: Group Head of IT Operations. The
            programme runs from TQ0 through hypercare.
          </p>
        </div>
        <div className="compare">
          <div className="compare-col after">
            <h3>In scope</h3>
            <ul>
              {IN_SCOPE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="compare-col before">
            <h3>Out of scope</h3>
            <ul>
              {OUT_OF_SCOPE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="subhead">Android, stated plainly</h3>
        <div className="grid-3">
          <article className="card">
            <p className="tag working">In</p>
            <h3>Remote lock</h3>
            <p>Available on every enrolled Android device.</p>
          </article>
          <article className="card">
            <p className="tag working">In</p>
            <h3>Company-owned wipe</h3>
            <p>A console action inside the offboarding task. Enrolment is staged, not Zero-Touch.</p>
          </article>
          <article className="card">
            <p className="tag partial">Boundary</p>
            <h3>BYOD</h3>
            <p>Disenrol removes company data and leaves personal data. No full-device wipe.</p>
          </article>
        </div>

        <h3 className="subhead">What a ticket covers</h3>
        <p className="note">
          Full ITIL service management stays in SysAid. Factorial IT handles asset
          requests and remediation: title, description, priority, due date, assignee,
          requester, tags, child tasks, and internal or public comments. A ticket can
          point at a device, employee, identity, order, shipment, or SaaS app. Remote
          assistance starts from the device page and is logged.
        </p>
      </section>

      <section className="section" id="architecture">
        <div className="section-head">
          <h2>3. Decisions and architecture</h2>
          <p>Eight decisions lock the design before workshops start.</p>
        </div>
        <div className="decision-list">
          {DECISIONS.map((item) => (
            <article className="decision" key={item.id}>
              <span>{item.id}</span>
              <div>
                <h3>{item.decision}</h3>
                <p>{item.why}</p>
              </div>
            </article>
          ))}
        </div>

        <h3 className="subhead">How the systems connect</h3>
        <div className="arch">
          <div>
            <strong>Employees and managers</strong>
            <span>Requests, approvals, self-service</span>
          </div>
          <span className="arch-arrow">→</span>
          <div>
            <strong>SuccessFactors</strong>
            <span>People · organisation · cost centre</span>
          </div>
          <span className="arch-arrow">↓</span>
          <div className="arch-hub">
            <strong>Factorial IT</strong>
            <span>ITAM · MDM · Procurement · SaaS · JML · Evidence</span>
          </div>
        </div>
        <div className="grid-2 arch-sides">
          <article className="card">
            <h3>MDM</h3>
            <p>macOS, Windows, iOS, Android BYOD, and company-owned QR enrolment.</p>
          </article>
          <article className="card">
            <h3>Vendors and Microsoft 365</h3>
            <p>Catalogue and purchase orders on one side. Sign-in, MFA, and groups on the other.</p>
          </article>
        </div>

        <h3 className="subhead">Joiner, mover, leaver</h3>
        <div className="steps">
          <article>
            <span>1</span>
            <h3>SuccessFactors event</h3>
            <p>Hire, transfer, or termination.</p>
          </article>
          <article>
            <span>2</span>
            <h3>Rule fires</h3>
            <p>Factorial IT automation.</p>
          </article>
          <article>
            <span>3</span>
            <h3>Action</h3>
            <p>Onboard, reassign, recover, wipe, or disenrol.</p>
          </article>
          <article>
            <span>4</span>
            <h3>Evidence</h3>
            <p>Logged and auditable.</p>
          </article>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Platform</th>
                <th>Enrolment</th>
                <th>Provisioning</th>
                <th>Offboarding</th>
              </tr>
            </thead>
            <tbody>
              {OS_MATRIX.map((row) => (
                <tr key={row.os}>
                  <td>{row.os}</td>
                  <td>{row.enrol}</td>
                  <td>{row.jml}</td>
                  <td>{row.offboard}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" id="phases">
        <div className="section-head">
          <h2>4. Delivery phases</h2>
          <p>Planning through hypercare. Each phase has an exit, not a calendar date.</p>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Phase</th>
                <th>When</th>
                <th>Objective</th>
                <th>Exit</th>
              </tr>
            </thead>
            <tbody>
              {PHASES.map((row) => (
                <tr key={row.phase}>
                  <td>{row.phase}</td>
                  <td>{row.when}</td>
                  <td>{row.objective}</td>
                  <td>{row.exit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="subhead">Nine discovery workshops</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Workshop</th>
                <th>Output</th>
              </tr>
            </thead>
            <tbody>
              {WORKSHOPS.map(([num, name, output]) => (
                <tr key={num}>
                  <td>{num}</td>
                  <td>{name}</td>
                  <td>{output}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" id="calendar">
        <div className="section-head">
          <h2>5. Calendar by quarter</h2>
          <p>
            Platform subscription is USD 0 during TQ0. Professional Services is billed
            once at kick-off. Steering POC sign-off gates go-live at the start of TQ+1.
          </p>
        </div>
        <div className="quarter-rail">
          {QUARTERS.map((item) => (
            <article key={item.quarter}>
              <p className="tag">{item.commercial}</p>
              <h3>{item.quarter}</h3>
              <p>{item.focus}</p>
            </article>
          ))}
        </div>

        <h3 className="subhead">Rollout sequence</h3>
        <div className="flow flow--wrap">
          <span className="flow-step">POC · TQ0 · all 4 OS paths</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Go-live · TQ+1 · POC cohort</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Trinidad</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Barbados + Guyana</span>
          <span className="flow-arrow">→</span>
          <span className="flow-step">Remaining · TQ+2 · ~10k devices</span>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Gate</th>
                <th>Entry</th>
                <th>Boundary</th>
              </tr>
            </thead>
            <tbody>
              {GATES.map((row) => (
                <tr key={row.gate}>
                  <td>{row.gate}</td>
                  <td>{row.entry}</td>
                  <td>{row.boundary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section" id="security">
        <div className="section-head">
          <h2>6. Security and RACI</h2>
          <p>Who is accountable (A), who does the work (R), and who is consulted or informed.</p>
        </div>
        <ul className="plain-list">
          <li>Admin access through Microsoft 365 with multi-factor authentication, scoped by company and region.</li>
          <li>Internal Audit is read-only. Break-glass accounts are named, hardened, and reviewed.</li>
          <li>Every status change, approval, and evidence upload is logged: who, when, before, and after.</li>
          <li>InfoSec signs the MDM baseline for macOS, Windows, iOS, and Android BYOD before POC sign-off.</li>
          <li>Steering meets monthly. The working group meets weekly. POC sign-off is a hard gate.</li>
        </ul>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>A</th>
                <th>R</th>
                <th>Consulted / informed</th>
              </tr>
            </thead>
            <tbody>
              {RACI.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="subhead">Deliverables</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Deliverable</th>
                <th>Phase</th>
                <th>Sign-off</th>
              </tr>
            </thead>
            <tbody>
              {DELIVERABLES.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid-2">
          <article className="card">
            <h3>Included in the platform</h3>
            <ul>
              {PLATFORM_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="card card--accent">
            <h3>Included in Professional Services</h3>
            <ul>
              {PS_INCLUDES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section" id="investment">
        <div className="section-head">
          <h2>7. Investment</h2>
          <p>
            All figures in US dollars. This is the commercial schedule from the package.
            It is not a return-on-investment model.
          </p>
        </div>
        <div className="grid-3">
          <article className="price">
            <span>List</span>
            <strong>USD 10</strong>
            <em>per managed device / month</em>
          </article>
          <article className="price price--offer">
            <span>ANSA offer</span>
            <strong>USD 6</strong>
            <em>per device for the first 12 billable months</em>
          </article>
          <article className="price">
            <span>Implementation</span>
            <strong>USD 5,000</strong>
            <em>once, at kick-off in TQ0</em>
          </article>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Period</th>
                <th>Platform</th>
                <th>Professional Services</th>
                <th>Cash out</th>
              </tr>
            </thead>
            <tbody>
              {CASH.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <article className="card snapshot">
          <h3>Illustrative first year if the ramp reaches 10,000 devices</h3>
          <ul>
            <li>Platform during TQ0: USD 0</li>
            <li>Platform across the first 12 billable months: about USD 549,000</li>
            <li>Implementation: USD 5,000</li>
            <li>Total cash in that window: about USD 554,000</li>
          </ul>
          <p>The USD 549,000 line depends on when TQ0 starts and how fast devices enrol.</p>
        </article>
        <ol className="conditions">
          <li>The order form sets TQ0. This package does not fix a signature date.</li>
          <li>Minimum term is 12 consecutive billable months from the first platform invoice.</li>
          <li>POC floor is about 1,000 devices. Ramp target is about 10,000 by the end of TQ+2, with quarterly true-up.</li>
          <li>The free platform period is TQ0 only. The USD 5,000 fee is still due at kick-off.</li>
          <li>If the engagement stops before POC sign-off, Professional Services already delivered stays due. Unused free platform time is not cash.</li>
        </ol>
      </section>

      <footer className="footer">
        <img src={CLIENT.factorialLogoPath} alt="Factorial" />
        <div>
          {CLIENT.legalName} · Factorial IT implementation · November 2026 · v2.4
        </div>
      </footer>
    </div>
  );
}
