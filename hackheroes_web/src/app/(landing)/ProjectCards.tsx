import React from 'react';

const ProjectCards = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Repeat this block for each project */}
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="font-bold text-xl">Cleaning up the Danube</h3>
          <p>Join us in our efforts to clean and protect the Danube River.</p>
          <button className="mt-2 text-green-dark underline">Read More</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectCards;
