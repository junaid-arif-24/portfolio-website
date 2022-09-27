import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-40">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I am a Student of Computer Science and Engineering and a passionate
          developer who love to build web applications and Apps using
          technologies like React Js , Node.js Express.js, React Native etc. I
          have Worked on diffrent projects excluding internship's projects like
          Realtime Communication using voice rooms, Real time Code Sync Editor ,
          portfolio website, and Chat Application.
        </p>

        <br />

        <p className="text-xl">
          I have gained multiple skills in my development journey like HTML,
          CSS, JavaScript, Java, React Js, Redux, React Native, Tailwinds CSS,
          Node.js , Express.js, SQL, MySQL and MongoDB. I have Worked on a React
          Native App during my internship and training program in Hexode IT
          Solutions. I have fundamental knowledge of AWS and I am a Certified
          Cloud Practitioner.
        </p>
      </div>
    </div>
  );
};

export default About;
