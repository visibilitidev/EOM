import React, { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Founder of TechStart",
    comment: "The mentorship and networking opportunities have been invaluable for growing my business.",
    rating: 5,
  },
  {
    id: 2,
    name: 'John Doe',
    role: 'CEO of Tech Innovations',
    image: 'public/testimonial1.jpg',
    quote: "The personalized support, including the one-on-one consultations with Mr. Nitin, has been instrumental in refining Paidhu's business approach. These interactions have offered strategic guidance and helped shape our growth trajectory.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma Wilson',
    role: 'Marketing Director at Global Reach',
    image: 'public/testimonial1.jpg',
    quote: "The personalized support, including the one-on-one consultations with Mr. Nitin, has been instrumental in refining Paidhu's business approach. These interactions have offered strategic guidance and helped shape our growth trajectory.",
    rating: 4,
  },
  {
    id: 4,
    name: 'Alex Chen',
    role: 'Founder of GreenTech Solutions',
    image: 'public/testimonial1.jpg',
    quote: "The personalized support, including the one-on-one consultations with Mr. Nitin, has been instrumental in refining Paidhu's business approach. These interactions have offered strategic guidance and helped shape our growth trajectory.",
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Sarah Johnson',
    role: 'CFO at Finance Plus',
    image: 'public/testimonial1.jpg',
    quote: "The personalized support, including the one-on-one consultations with Mr. Nitin, has been instrumental in refining Paidhu's business approach. These interactions have offered strategic guidance and helped shape our growth trajectory.",
    rating: 5,
  },
  {
    id: 6,
    image: 'public/testimonial1.jpg',
    role: 'Head of Operations at Logistics Pro',
    image: 'public/testimonial1.jpg',
    quote: "The personalized support, including the one-on-one consultations with Mr. Nitin, has been instrumental in refining Paidhu's business approach. These interactions have offered strategic guidance and helped shape our growth trajectory.",
    rating: 4,
  },
  {
    id: 7,
    image: 'public/testimonial1.jpg',
    role: 'Founder of Healthy Living Co.',
    image: 'public/testimonial1.jpg',
    quote: "The personalized support, including the one-on-one consultations with Mr. Nitin, has been instrumental in refining Paidhu's business approach. These interactions have offered strategic guidance and helped shape our growth trajectory.",
    rating: 4.5,
  }
];

const TestimonialCarousel2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const profiles = containerRef.current.querySelectorAll('.profile-image');
      profiles.forEach((profile) => {
        const speed = profile.dataset.speed;
        profile.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 text-center" ref={containerRef}>
      <h2 className="text-3xl font-bold mb-2">Members Of EOM Club Are Constantly Progressing Every Month.</h2>
      <p className="mb-8">Here's what they have to say.</p>
      
      <div className="relative h-[500px]">
        {/* Central colorful image */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-full" />
        </div>

        {/* Profile images */}
        {testimonials.map((_, index) => (
          <div
            key={index}
            className="profile-image absolute w-16 h-16 rounded-full bg-gray-300 transition-all duration-300"
            style={{
              left: `${50 + 35 * Math.cos(2 * Math.PI * index / 7)}%`,
              top: `${50 + 35 * Math.sin(2 * Math.PI * index / 7)}%`,
              transform: 'translate(-50%, -50%)',
            }}
            data-speed={Math.random() * 20 + 10}
          >
            <img
              src={`/api/placeholder/100/100?text=${testimonials[index].name.charAt(0)}`}
              alt={testimonials[index].name}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        ))}

        {/* Testimonial text */}
        <div className="absolute left-1/2 top-3/4 transform -translate-x-1/2 w-full">
          <blockquote className="text-lg mb-4">"{testimonials[activeIndex].comment}"</blockquote>
          <p className="font-bold">{testimonials[activeIndex].name}</p>
          <p className="text-sm text-gray-600 mb-2">{testimonials[activeIndex].role}</p>
          <div className="flex justify-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-2xl ${i < testimonials[activeIndex].rating ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${index === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel2;