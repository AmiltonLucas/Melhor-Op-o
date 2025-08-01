import React from "react";

export default function Error404() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="flex flex-col items-center animate-fade-in">
        <svg
          width="180"
          height="180"
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4 animate-bounce-slow"
        >
          <circle cx="90" cy="90" r="80" />
          <text
            x="50%"
            y="54%"
            textAnchor="middle"
            fill="#A60311"
            fontSize="70"
            fontWeight="bold"
            dy=".3em"
          >
            404
          </text>
          <ellipse cx="60" cy="120" rx="8" ry="4" fill="#fff" opacity="0.7">
            <animate
              attributeName="rx"
              values="8;12;8"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </ellipse>
          <ellipse cx="120" cy="120" rx="8" ry="4" fill="#fff" opacity="0.7">
            <animate
              attributeName="rx"
              values="8;12;8"
              dur="1.2s"
              repeatCount="indefinite"
            />
          </ellipse>
        </svg>
        <h2 className="text-3xl font-bold text-[#A60311] mb-2 animate-fade-in">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-6 text-center max-w-md animate-fade-in delay-200">
          Opa! A página que você procura não existe ou foi movida.
          <br />
          Que tal voltar para o início?
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-[#A60311] text-white rounded shadow hover:bg-[#f29f05] hover:text-[#A60311] font-semibold transition animate-fade-in delay-300"
        >
          Voltar para o início
        </a>
      </div>
      <style>{`
        .animate-fade-in {
          animation: fadeIn 1s ease both;
        }
        .animate-fade-in.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in.delay-300 {
          animation-delay: 0.3s;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-bounce-slow {
          animation: bounceSlow 2.2s infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </div>
  );
}
