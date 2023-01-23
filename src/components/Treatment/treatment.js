import "./treatment.css";
import Fade from 'react-reveal/Fade';
import stripeSunset from "../../assets/images/AdobeStock_326765702.jpeg";
import coastalBlue from "../../assets/images/ian-schneider-XJfHMPJ0e-g-unsplash.jpg";
import beachSunset from "../../assets/images/AdobeStock_114391002.jpeg";
import BottomContact from '../Bottom-Contact/bottom-contact';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';


function Treatment() {

    return (
        <section id="treatment-page">

            <div id="treatment-top">
                <Fade up>
                    <h1>Treatment</h1>
                    <p>All treatment clients will have a recovery/treatment plan developed within 30 days of admission. Measurement and re-assessment of treatment plan progress happen on a weekly basis through the weekly summary. In the weekly summary, the drug and alcohol counselor will ensure that action steps to be taken by client or counselor are on target and that the action step achievements will enable resolution of the objective. All treatment plans are reviewed by and signed off on by the clinical director.</p>
                </Fade>
            </div>
            <div id="treatmentTwo">
                <Fade left>
                    <LazyLoadImage src={stripeSunset} alt="moonlight landscape" />
                </Fade>
                <Fade right>
                    <div id="treatmentTwo-text">
                        <h2>Key Areas/Fundamentals</h2>
                        <p>The treatment plan will be developed between client and counselor from key information gleaned from the assessment and intake process. This treatment plan will be goal and action oriented with objective and measurable criteria. Each treatment plan will have a statement of problem(s) with which the client identifies, statement of objectives to be reached that addressees each problem, action steps for client and counselor to ensure that objective will be completed.</p>
                        <p>Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.</p>
                    </div>
                </Fade>
            </div>
            <div id="treatmentThree">
                <Fade left>
                    <div id="treatmentThree-text">
                        <p>Some areas to be examined may be personal relationships, work, anger management, lack of power, financial burdens, separation from children, past trauma as it relates to present, school, etc.</p>
                        <li>Counselor and client will set clear and tangible goals regarding above mentioned obstacles.</li>
                        <li>Counselor and client will brainstorm potential hurdles as client attempts to accomplish goals.</li>
                        <li>Counselor and client discuss systems for working through hurdles. Counselor and client will — upon following weekly session — discuss successes and setbacks for set goals.</li>
                    </div>
                </Fade>
                <Fade right>
                    <LazyLoadImage src={coastalBlue} alt="Venice Canals" />
                </Fade>
            </div>
            <div id="treatmentFour">
                <Fade left>
                    <LazyLoadImage src={beachSunset} alt="Beach sunset" />
                </Fade>
                <Fade right>
                    <div id="treatmentFour-text">
                        <h2>Revisions</h2>
                        <p>As mentioned above, the weekly summary reflective of the session between client and counselor/therapist will measure each treatment plan goal on a weekly basis. The client will also initial the weekly summary as this is a review of the treatment plan goals and objectives. Furthermore, clients may have new issues come up during treatment that were not identified at the time of assessment. Drug and alcohol counselors/therapists will develop new treatment plan goals as needed using this protocol whenever necessary.</p>
                    </div>
                </Fade>
            </div>
            <BottomContact />
        </section>
    )
};

export default Treatment;