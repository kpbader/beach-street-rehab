import '../PHP/php.css';
import Fade from 'react-reveal/Fade';
import crescentMoon from '../../assets/images/gavin-spear-unsplash.jpg';
import coastalSun from '../../assets/images/coastal-sunset-1.jpeg';
import desertRocks from '../../assets/images/alex-kramarevsky-unsplash.jpg';
import BottomContact from '../Bottom-Contact/bottom-contact';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';


function PHPMH() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <section id="php-page">
            <div id="php-top">
                <Fade up>
                    <h2>Partial Hospitalization Program (PHP)</h2>
                    <p>Your mental health is just as important as your physical health. And no matter what you’re going through, with the right treatment program, anything is possible.</p>
                    <p>At Beach Street, we offer several levels of care to help you navigate recovery. Take part in one of our Partial Hospitalization Program (PHP). We will listen to you, assess your situation, and help you craft a treatment approach that works for you. </p>
                </Fade>
            </div>
            <div id="php-two">
                <Fade left>
                    <LazyLoadImage src={crescentMoon} alt="by Gavin Spears" />
                </Fade>
                <Fade right>
                    <div id="php-two-text">
                        <h2>What is a PHP?</h2>
                        <p>A treatment plan that can be highly beneficial for those who have supportive family members at home and responsibilities that they must maintain during the week, the partial hospitalization program offers structured addiction treatment that runs several hours daily throughout the week. Through this treatment option, you can participate in treatment sessions during the day and return to your home at night.</p>
                        <p>One of the first steps that you should take is to talk to our addiction treatment admissions team. They will provide a formal assessment to determine what level of treatment is right for your needs. For instance, we may recommend a partial hospitalization program if you meet these criteria:</p>
                        <li>You are medically stable</li>
                        <li>You're not at risk of harming others or yourself</li>
                        <li>You have difficulty functioning at school, work, or home</li>
                        <li>You're motivated to engage in our treatment program</li>
                        <li>You're experiencing co-occurring substance use disorders and mental health concerns</li>
                        <li>You have sufficient support in your home life</li>
                        <p>Our evaluation doesn’t just determine what level of care you need. It also allows us to choose what therapeutic options could be part of your treatment program.</p>
                    </div>
                </Fade>
            </div>
            <div id="php-three">
                <Fade left>
                    <div id="php-three-text">
                        <h2>What to expect throughout the program</h2>
                        <p>Consisting of 5 hours of clinical services (5 days per week), the PHP has the highest level of care we provide. Throughout treatment, patients will participate in four daily group therapy sessions, as well as individual therapy at least once a week. Additionally, all patients meet with our medical director on a weekly basis to discuss medication management (if applicable).</p>
                        <p>Patients are served lunch between group sessions and can participate in weekly recovery outings as well. For anyone starting their journey to sobriety, this level of care is recommended, as it is best to have a strong foundation of support built.</p>
                    </div>
                </Fade>
                <Fade right>
                    <LazyLoadImage src={coastalSun} alt="by Gavin Spears" />
                </Fade>
            </div>
            <div id="php-four">
                <Fade left>
                    <LazyLoadImage src={desertRocks} alt="Alex Kramarevsky" />
                </Fade>
                <Fade right>
                    <div id="php-four-text">
                        <h2>Learn about our other programs</h2>
                        <p>At Beach Street Rehab, we provide several other avenues of mental health treatment. In addition to our partial hospitalization program, we offer:</p>
                        <li>
                            <Link to="/iopmh" onClick={scrollToTop}>Intensive Outpatient Program</Link>
                        </li>
                        <li>
                            <Link to="/opmh" onClick={scrollToTop}>Outpatient Program</Link>
                        </li>
                        <li>
                            <Link to="/jobs" onClick={scrollToTop}>Jobs Program</Link>
                        </li>
                        <p><Link to="/contact" onClick={scrollToTop} className="contact-us-txt">Contact us</Link> today and start your journey to recovery.</p>
                    </div>
                </Fade>
            </div>
            <BottomContact />
        </section>

    )
};

export default PHPMH;