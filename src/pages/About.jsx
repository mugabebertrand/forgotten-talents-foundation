export default function About() {
  return (
    <div style={{ background: "#f7f8fb", minHeight: "100vh", padding: "32px 16px" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <h1 style={{ margin: "0 0 10px", fontSize: 36, color: "#111827" }}>
          About Forgotten Talents Foundation
        </h1>

        <p style={{ color: "#4b5563", lineHeight: 1.8, maxWidth: 850 }}>
         Forgotten Talents Foundation supports children whose gifts are often
         overlooked because of disability, poverty, limited access, or lack of
         opportunity. Our goal is to build a safe and moderated platform where
         families can share talents, protect children's privacy, and connect with
         future support.
        </p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h2 style={styles.h2}>Our Mission</h2>
            <p style={styles.text}>
              To recognize, encourage, and support children with hidden talents
              by creating inclusive opportunities in music, arts, learning, and
              personal development.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Our Vision</h2>
            <p style={styles.text}>
              To become a trusted community platform where every child,
              regardless of background or ability, can be seen, encouraged, and
              supported.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Who We Support</h2>
            <ul style={styles.list}>
              <li>Children with disabilities or developmental challenges</li>
              <li>Children from low-income families</li>
              <li>Children with limited access to music, arts, or education</li>
              <li>Families seeking safe ways to share and grow talent</li>
            </ul>
          </div>

          <div style={styles.card}>
            <h2 style={styles.h2}>Our Approach</h2>
            <ul style={styles.list}>
              <li>Family or sponsor submits a talent entry</li>
              <li>Admin reviews the submission before publishing</li>
              <li>Personal information is protected</li>
              <li>Approved talents appear in the public gallery</li>
            </ul>
          </div>
        </div>

        <div style={styles.notice}>
          <h2 style={styles.h2}>Privacy First</h2>
          <p style={styles.text}>
            Because this platform involves children, safety and privacy come
            first. Families are encouraged to use nicknames or initials instead
            of full names and to avoid sharing school names, home addresses,
            schedules, or other sensitive personal information.
          </p>
        </div>

        <div style={styles.notice}>
          <h2 style={styles.h2}>Current Status</h2>
          <p style={styles.text}>
            This project is currently an MVP demo for portfolio and development
            purposes. Donation processing and official nonprofit operations will
            only be enabled after proper registration, verification, and approval.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 16,
    marginTop: 22,
  },
  card: {
    background: "white",
    borderRadius: 16,
    padding: 18,
    border: "1px solid #e7eaf0",
    boxShadow: "0 10px 22px rgba(16,24,40,0.05)",
  },
  notice: {
    marginTop: 18,
    background: "white",
    borderRadius: 16,
    padding: 18,
    border: "1px solid #e7eaf0",
    boxShadow: "0 10px 22px rgba(16,24,40,0.05)",
  },
  h2: {
    margin: "0 0 10px",
    fontSize: 21,
    color: "#111827",
  },
  text: {
    margin: 0,
    color: "#4b5563",
    lineHeight: 1.7,
  },
  list: {
    margin: 0,
    paddingLeft: 20,
    color: "#4b5563",
    lineHeight: 1.8,
  },
};