import React, { useState, useEffect } from 'react';
import braid1 from './assets/braids1.jpg';
import nails1 from './assets/nails1.jpg';
import braid2 from './assets/braids2.jpg';
import braid3 from './assets/braids3.jpg';
import nails2 from './assets/nails2.jpg';
import nails3 from './assets/nails3.jpg';
import cert1 from './assets/cert1.svg';
import cert2 from './assets/cert2.svg';
import cert3 from './assets/cert3.svg';

const services = [
    {
        title: 'Custom Braids',
        description: 'Hand-crafted braid styles including box braids, feed-in, and knotless braids tailored to your look.',
        meta: '2-6 hours • by appointment',
    },
    {
        title: 'Bridal & Special Occasions',
        description: 'Elegant braided updos and styling for weddings, photoshoots, and events.',
        meta: 'Consultation available',
    },
    {
        title: 'Nail Art & Extensions',
        description: 'Gel, acrylics, and custom nail art—minimal, bold, or highly detailed collections.',
        meta: 'Manicure • Gel • Acrylic',
    },
];

const skills = ['Box Braids', 'Knotless', 'Feed-in', 'Gel Nails', 'Nail Art', 'Manicures', 'Extensions'];

const pricing = [
    { service: 'Custom Braids (starting)', price: '$120' },
    { service: 'Knotless / Feed-in', price: '$160' },
    { service: 'Nail Set (Gel/Acrylic)', price: '$55' },
    { service: 'Nail Art (per set)', price: '$20+' },
];

const certificates = [
    { id: 1, title: 'Licensed Cosmetology', achieved: '2021', src: cert1 },
    { id: 2, title: 'Advanced Braid Techniques', achieved: '2022', src: cert2 },
    { id: 3, title: 'Nail Art Certification', achieved: '2023', src: cert3 },
];

function App() {
    const galleryImages = [braid1, braid2, nails1, braid3, nails2, nails3];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [visibleCount, setVisibleCount] = useState(3);
    const [certIndex, setCertIndex] = useState(0);
    const [isCertHovered, setIsCertHovered] = useState(false);

    // adjust visibleCount responsively
    useEffect(() => {
        function update() {
            const w = window.innerWidth;
            if (w < 640) setVisibleCount(1);
            else if (w < 880) setVisibleCount(2);
            else setVisibleCount(3);
        }
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    useEffect(() => {
        if (isHovered) return;
        const maxIndex = Math.max(0, galleryImages.length - visibleCount);
        const id = setInterval(() => {
            setCurrentIndex((c) => (c >= maxIndex ? 0 : c + 1));
        }, 2800);
        return () => clearInterval(id);
    }, [isHovered, visibleCount, galleryImages.length]);

    useEffect(() => {
        if (isCertHovered) return;
        const id = setInterval(() => {
            setCertIndex((c) => (c + 1) % certificates.length);
        }, 4200);
        return () => clearInterval(id);
    }, [isCertHovered]);
    return (
        <div className="page-shell">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />

        <main className="container">
                <section className="hero card">
                    <div className="hero-copy">
                        <p className="eyebrow">Beauty • Braids • Nails</p>

                        <h1>Allie Hayes — <span className="hero-title-shine">Barbie Nail Bar</span></h1>
                        <p className="lede">
                            A licensed esthetician offering bespoke braid styling and custom nail artistry. Calm
                            finishes, durable technique, and appointments tailored to your schedule.
                        </p>

                        <div className="hero-actions">
                            <a className="button button-primary" href="#projects">
                                View Services
                            </a>
                            <a className="button button-secondary" href="mailto:alex@example.com?subject=Booking%20Request">
                                Book Appointment
                            </a>
                        </div>
                    </div>

                    <div
                        className="hero-cert-panel card"
                        onMouseEnter={() => setIsCertHovered(true)}
                        onMouseLeave={() => setIsCertHovered(false)}
                    >
                        <div className="hero-cert-carousel">
                            <div
                                className="hero-cert-track"
                                style={{ transform: `translateX(-${certIndex * 100}%)` }}
                            >
                                {certificates.map((certificate) => (
                                    <div className="hero-cert-slide" key={certificate.id}>
                                        <img src={certificate.src} alt={certificate.title} />
                                        <h3>{certificate.title}</h3>
                                        <p>Achieved {certificate.achieved}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

            <section className="grid two-col">
            <article className="card intro-card">
                <p className="section-label">About</p>
                <p>
                Allie Hayes is a licensed esthetician specializing in braids and nail artistry. With an
                emphasis on clean finishes and long-lasting technique, each service is tailored to your
                lifestyle and personal expression.
                </p>
            </article>

            <article className="card skills-card">
                <p className="section-label">Services</p>
                <div className="pill-list">
                {skills.map((skill) => (
                    <span className="pill" key={skill}>
                    {skill}
                    </span>
                ))}
                </div>
            </article>
            </section>

                <section className="projects" id="projects">
                    <div className="section-heading">
                        {/* <p className="section-label">Services</p> */}
                        <h2>Hand-finished braids and curated nail collections.</h2>
                    </div>

                    <div className="project-grid">
                        {services.map((service) => (
                            <article className="card project-card" key={service.title}>
                                <p className="project-meta">{service.meta}</p>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        ))}
                    </div>

                    

                    <div className="section-heading" style={{ marginTop: '1.5rem' }}>
                        <p className="section-label">Gallery</p>
                        <h2>Recent work — Get inspired</h2>
                    </div>

                    <div className="project-grid" style={{ marginTop: '0.8rem' }}>
                        <div className="card project-card" style={{ padding: 0, overflow: 'hidden', gridColumn: '1 / -1' }}>
                            <div
                                className="carousel"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <div
                                    className="carousel-track"
                                    style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
                                >
                                    {galleryImages.map((src, i) => (
                                        <div className="carousel-item" key={i}>
                                            <img src={src} alt={`gallery-${i}`} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="carousel-dots">
                                {galleryImages.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`dot ${i === currentIndex ? 'active' : ''}`}
                                        onClick={() => setCurrentIndex(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                </section>

                <footer className="footer card">
                    <div className="footer-left">
                        <div className="footer-left-row">
                            <div className="footer-left-text">
                                <p className="section-label">Contact & Bookings</p>
                                <h3>Appointments by booking — View site to view details on services & availability.</h3>
                            </div>
                            <a className="footer-link" href="mailto:alex@example.com?subject=Booking%20Request">
                                Book an Appointment
                            </a>
                        </div>
                    </div>

                

                    <div className="footer-follow">
                        <p className="section-label">Follow</p>
                        <div className="social-links">
                            <a href="#">Instagram</a>
                            <a href="#">Facebook</a>
                            <a href="#">TikTok</a>
                        </div>
                    </div>
                </footer>
        </main>
        </div>
    );
}

export default App;