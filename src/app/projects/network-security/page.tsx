import Header from "../../../components/HeaderNoScroll";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function NetworkSecurity() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-gray-50">
          <div className="max-w-4xl mx-auto">
            <Link href="/projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
              </svg>
              back to projects
            </Link>
            <div className="mb-6">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                cybersecurity
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">network security lab</h1>
            <p className="text-xl text-gray-600 mb-4">cybersecurity projects & penetration testing</p>
            <p className="text-lg text-gray-500 leading-relaxed">
              comprehensive cybersecurity coursework including vulnerability analysis, penetration testing, 
              and network security implementations through hands-on laboratory exercises.
            </p>
          </div>
        </section>

        {/* Course Overview */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">course overview</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">cs 3710: introduction to cybersecurity</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  comprehensive cybersecurity principles course featuring hands-on laboratories with industry-standard 
                  tools including nmap, wireshark, metasploit, snort, and gnupg. culminated in a ctf-style exam 
                  testing real-world defense and attack skills.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">penetration testing</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">vulnerability analysis</span>
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs">network security</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">learning objectives</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>understanding common attack vectors and defense mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>hands-on experience with cybersecurity tools and techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>network traffic analysis and intrusion detection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-3 mt-1">•</span>
                    <span>ethical hacking and responsible disclosure practices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Laboratory Exercises */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">laboratory exercises</h2>
            </div>
            
            <div className="grid gap-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">network reconnaissance & scanning</h3>
                <p className="text-gray-700 mb-4">
                  comprehensive network discovery and enumeration using professional penetration testing tools.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">tools & techniques:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• nmap port scanning and service detection</li>
                      <li>• network topology mapping</li>
                      <li>• operating system fingerprinting</li>
                      <li>• vulnerability scanning with nessus</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">learning outcomes:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• understanding network protocols and services</li>
                      <li>• identifying potential attack surfaces</li>
                      <li>• documenting security findings</li>
                      <li>• ethical reconnaissance methodologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">password security & cryptanalysis</h3>
                <p className="text-gray-700 mb-4">
                  analysis of password security mechanisms and implementation of cryptographic attacks.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">tools & techniques:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• john the ripper password cracking</li>
                      <li>• hashcat gpu-accelerated attacks</li>
                      <li>• rainbow table generation and usage</li>
                      <li>• dictionary and brute force attacks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">learning outcomes:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• understanding password storage mechanisms</li>
                      <li>• cryptographic hash function analysis</li>
                      <li>• password policy development</li>
                      <li>• multi-factor authentication implementation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">vulnerability exploitation</h3>
                <p className="text-gray-700 mb-4">
                  controlled exploitation of common vulnerabilities in secure laboratory environments.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">tools & techniques:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• metasploit exploitation framework</li>
                      <li>• buffer overflow demonstrations</li>
                      <li>• sql injection attacks</li>
                      <li>• cross-site scripting (xss) exploitation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">learning outcomes:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• understanding common vulnerability types</li>
                      <li>• secure coding practices</li>
                      <li>• patch management importance</li>
                      <li>• defense-in-depth strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">network traffic analysis</h3>
                <p className="text-gray-700 mb-4">
                  comprehensive packet analysis and intrusion detection using industry-standard tools.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">tools & techniques:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• wireshark packet capture and analysis</li>
                      <li>• snort intrusion detection rules</li>
                      <li>• network forensics investigations</li>
                      <li>• malware traffic identification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">learning outcomes:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• network protocol deep understanding</li>
                      <li>• anomaly detection techniques</li>
                      <li>• incident response procedures</li>
                      <li>• digital evidence preservation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">firewall configuration & bypass</h3>
                <p className="text-gray-700 mb-4">
                  implementation and testing of network security controls and evasion techniques.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">tools & techniques:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• iptables firewall rule configuration</li>
                      <li>• proxy chains and tunneling</li>
                      <li>• port knocking implementations</li>
                      <li>• traffic obfuscation methods</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">learning outcomes:</h4>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• network security architecture design</li>
                      <li>• access control implementation</li>
                      <li>• security policy enforcement</li>
                      <li>• evasion technique detection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Environment */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">technical environment</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">laboratory platform</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• virginia cyber range</li>
                  <li>• isolated virtual networks</li>
                  <li>• controlled environments</li>
                  <li>• realistic attack scenarios</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">operating systems</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• kali linux penetration testing</li>
                  <li>• ubuntu server configurations</li>
                  <li>• windows server environments</li>
                  <li>• embedded device security</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">security tools</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• professional pentesting suite</li>
                  <li>• network analysis tools</li>
                  <li>• vulnerability scanners</li>
                  <li>• forensics applications</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-red-800 mb-3">ethical considerations</h3>
              <p className="text-gray-700 mb-4">
                all cybersecurity activities were conducted within controlled laboratory environments with proper 
                authorization and oversight. emphasis was placed on ethical hacking principles, responsible disclosure, 
                and legal compliance throughout the coursework.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white text-red-800 px-3 py-1 rounded-full text-sm font-medium">ethical hacking</span>
                <span className="bg-white text-red-800 px-3 py-1 rounded-full text-sm font-medium">responsible disclosure</span>
                <span className="bg-white text-red-800 px-3 py-1 rounded-full text-sm font-medium">legal compliance</span>
                <span className="bg-white text-red-800 px-3 py-1 rounded-full text-sm font-medium">controlled environments</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTF Final Exam */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">capture the flag final exam</h2>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">exam format & objectives</h3>
              <p className="text-gray-700 mb-4">
                the course culminated in a comprehensive capture the flag (ctf) style examination that tested 
                practical application of cybersecurity knowledge in realistic attack and defense scenarios.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">challenge categories:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>web application security:</strong> identifying and exploiting web vulnerabilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>network forensics:</strong> analyzing packet captures for malicious activity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>cryptography:</strong> breaking weak encryption and hash functions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span><strong>reverse engineering:</strong> analyzing malware and binary exploitation</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">skills demonstrated:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>rapid vulnerability identification and exploitation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>digital forensics and incident response</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>critical thinking under time pressure</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-3 mt-1">•</span>
                      <span>comprehensive security assessment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Knowledge Gained */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-blue-600 mr-4"></div>
              <h2 className="text-3xl font-bold text-gray-900">skills & knowledge gained</h2>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-gray-700 text-sm">security tools mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                  <div className="text-gray-700 text-sm">vulnerability types studied</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-gray-700 text-sm">ethical standards maintained</div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">core competencies developed</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">penetration testing</span>
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">vulnerability assessment</span>
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">network forensics</span>
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">incident response</span>
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">security analysis</span>
                  <span className="bg-white text-gray-800 px-3 py-1 rounded-full text-sm">risk assessment</span>
                </div>
              </div>
              
              <p className="text-gray-700 text-center">
                comprehensive hands-on cybersecurity training that provided practical experience with industry-standard 
                tools and methodologies while emphasizing ethical practices and legal compliance in security research.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
