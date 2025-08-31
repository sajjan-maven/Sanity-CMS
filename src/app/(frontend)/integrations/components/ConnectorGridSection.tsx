import React from 'react'
import Image from 'next/image'

const ConnectorGridSection = () => {
  return (
    <div>
      <section className="hidden pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white shadow-sm border border-gray-300 rounded-lg p-8">
            <div className="flex items-center flex-col md:flex-row">
              <div className="w-full md:w-3/5 order-2 md:order-1">
                <div className="grid gap-6">
                  <h2 className="text-2xl font-semibold text-gray-900">
                    Don&apos;t see your favorite application?
                  </h2>
                  <div className="flex justify-start">
                    <a
                      href="mailto:support@stitchflow.io"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <span>Request connector</span>
                      <div className="w-4 h-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.70711 2.79289C9.31658 2.40237 8.68342 2.40237 8.29289 2.79289C7.90237 3.18342 7.90237 3.81658 8.29289 4.20711L11.0858 7H2.5C1.94772 7 1.5 7.44772 1.5 8C1.5 8.55228 1.94772 9 2.5 9H11.0858L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071C8.68342 13.5976 9.31658 13.5976 9.70711 13.2071L14.2065 8.70774L14.2071 8.70711C14.2093 8.70493 14.2115 8.70274 14.2136 8.70055C14.4038 8.5069 14.4992 8.25507 14.5 8.003M14.2092 7.29502C14.304 7.3904 14.3757 7.50014 14.4241 7.61722C14.3738 7.49593 14.3004 7.38669 14.2092 7.29502ZM9.70711 2.79289L14.2069 7.29269L9.70711 2.79289Z"
                            fill="currentcolor"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-2/5 order-1 md:order-2 flex justify-center mb-6 md:mb-0">
                <Image
                  src="images/pre-cta-connectors.svg"
                  loading="lazy"
                  width={332.5}
                  height={40}
                  alt="Favorite application illustration"
                  className="max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConnectorGridSection