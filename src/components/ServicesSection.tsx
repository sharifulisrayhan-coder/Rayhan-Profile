import React from 'react';
import { 
  Code2, 
  Network, 
  Server, 
  ShieldCheck, 
  Cloud, 
  Headphones, 
  CheckCircle2, 
  ArrowRight,
  Briefcase
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      id: 'web-engineering',
      title: 'Full-Stack Web Engineering',
      icon: <Code2 className="w-6 h-6 text-blue-500" />,
      description: 'Production-ready Next.js & React web platforms, high-throughput REST APIs, responsive enterprise portals, and secure e-commerce systems.',
      deliverables: ['Custom Next.js & React Architecture', 'REST & GraphQL API Endpoints', 'Payment Gateways & ERP Integrations', '90+ Lighthouse Performance & SEO'],
    },
    {
      id: 'network-infrastructure',
      title: 'Corporate Network Infrastructure',
      icon: <Network className="w-6 h-6 text-indigo-500" />,
      description: 'Enterprise LAN/WAN architecture, multi-branch site-to-site IPsec VPN tunnels, VLAN segregation, and Cisco/MikroTik routing optimization.',
      deliverables: ['Multi-Branch Office Interconnects', 'Zero-Loss VoIP & QoS Configuration', 'Redundant Multi-ISP Failover', 'Managed Cisco & MikroTik Hardware'],
    },
    {
      id: 'server-administration',
      title: 'Server Management & Systems',
      icon: <Server className="w-6 h-6 text-emerald-500" />,
      description: 'Complete server lifecycle management, Active Directory domain controllers, virtualization (VMware/Proxmox), and automated backup routines.',
      deliverables: ['Windows & Linux Server Deployment', 'Active Directory, DNS & DHCP Roles', 'Automated Daily Cloud/NAS Backups', 'Virtual Machine Provisioning & Scaling'],
    },
    {
      id: 'cybersecurity',
      title: 'Firewall & Cybersecurity Defense',
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      description: 'Perimeter security hardening, Next-Gen FortiGate/Sophos firewall rules, intrusion prevention systems (IPS), and SSL certificate management.',
      deliverables: ['Enterprise Firewall Rule Audits', 'Zero-Trust Remote Access & 2FA', 'Penetration Defense & SSL Hardening', 'Security Compliance & Incident Triage'],
    },
    {
      id: 'cloud-devops',
      title: 'Cloud Solutions & CDN Optimization',
      icon: <Cloud className="w-6 h-6 text-sky-500" />,
      description: 'Seamless cloud migrations, hybrid cloud setups (AWS/Azure), Docker container deployments, Cloudflare DDoS protection, and edge caching.',
      deliverables: ['Cloud Infrastructure Architecting', 'Dockerization & Microservice Setup', 'Cloudflare CDN & Edge Caching', 'Domain & DNS Routing Optimization'],
    },
    {
      id: 'it-helpdesk',
      title: 'Enterprise IT Helpdesk & SLA Support',
      icon: <Headphones className="w-6 h-6 text-purple-500" />,
      description: 'Comprehensive corporate hardware deployment, workstation rollouts, printer/VoIP setups, and guaranteed response time SLA contracts.',
      deliverables: ['Workstation Rollout & OS Imaging', 'CCTV & Biometric Access Systems', 'Guaranteed Rapid Response Times', 'Dubai On-Site & Remote Troubleshooting'],
    },
  ];

  return (
    <section id="services" className="py-20 relative bg-slate-50/50 dark:bg-zinc-950/50 border-y border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            Service Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Tailored IT & Web Services for UAE Enterprises
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            From modern web applications to enterprise server rooms and network backbones, delivering robust solutions built to scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-xl hover:border-zinc-700 dark:hover:border-zinc-700 transition-all duration-300 group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-2 mb-6">
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-zinc-300 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => onSelectService(service.title)}
                className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 pt-4 border-t border-slate-100 dark:border-zinc-800/80 cursor-pointer"
              >
                <span>Request Service Scope</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
