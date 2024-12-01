import React from "react";

const About = () => {
  return (
    <div className="p-5  bg-yellow-50 ml-5">
      {/* //h-screen for layout 1 2 3 */}
      <div className="text-xl font-bold pb-5">Content of css layout</div>
      <div className="space-y-5">
        <p>
          Welcome to our platform! We are committed to delivering high-quality
          services that cater to your specific needs. Our mission is to bridge
          the gap between innovation and accessibility, ensuring that everyone
          can benefit from our solutions.
        </p>

        <p>
          Founded in 2023, our organization began with a simple idea: to make
          technology-driven solutions more user-friendly and effective. Over the
          years, we have grown into a team of passionate individuals dedicated
          to achieving excellence in every project we undertake.
        </p>

        <p>
          Our core values revolve around customer satisfaction, innovation, and
          integrity. We believe that success lies in understanding our clients'
          challenges and providing tailored solutions that go above and beyond
          expectations.
        </p>

        <p>
          Whether you're exploring our services for the first time or a
          long-time client, we're here to support you at every step. Feel free
          to reach out to us for inquiries, feedback, or collaboration
          opportunities. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default About;
