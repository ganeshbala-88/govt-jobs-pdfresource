export default function Hero() {
  const para = "From Official government websites to direct syllabus, PDFs & resources";
  const capitalizedPara = para.charAt(0).toUpperCase() + para.slice(1);
  return (
    <section className="bg-blue-50 py-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-800">
          All India Govt Jobs Resources
        </h2>
        <p className="mt-3 text-gray-600">
          {capitalizedPara}
        </p>
      </div>
    </section>
  );
}