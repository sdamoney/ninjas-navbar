import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

const NavData = {
  'About Us': {
    children: {
      'Our Journey': {
        description: 'Story of the company, mission, vision, milestones'
      },
      'Our Approach': {
        description: 'Methodology, how we work, values, differentiation'
      },
      'Team': {
        description: 'Leadership bios, team culture, behind-the-scenes section'
      }
    }
  },
  'Services': {
    children: {
      'Brand & Narrative': {
        children: {
          'Brand Identity Systems': {
            description: 'Brand book, logo guidelines, design system, visual tone'
          },
          'Messaging & Positioning Architecture': {
            description: 'Brand voice, narrative, tagline, key messages'
          },
          'Social Media Management': {
            description: 'LinkedIn, YouTube, Twitter/X — strategy, content calendars, engagement'
          },
          'Brand Campaigns & Market Activation': {
            description: 'Brand campaigns, thematic storytelling, repositioning initiatives'
          },
          'Community Growth Programs': {
            description: 'Awards, contests, influencer collaborations, engagement programs'
          },
          'Founder & Leadership Branding': {
            description: 'LinkedIn management, podcast appearances, end-to-end podcast setup (collaterals, recording, post-production, distribution)'
          }
        }
      },
      'Demand Generation': {
        children: {
          'Performance Marketing': {
            description: 'Paid ads across Google, Meta, Reddit, LinkedIn, Twitter/X'
          },
          'Account-Based Marketing (ABM)': {
            description: 'ICP targeting, personalized nurture campaigns, ABM playbooks'
          },
          'Integrated GTM (iGTM)': {
            description: 'Intent-based GTM orchestration across inbound/outbound/paid'
          },
          'Outbound Motion Enablement': {
            description: 'SDR workflow setup, outbound tools, sales playbooks, team training'
          }
        }
      },
      'SEO': {
        children: {
          'Search Strategy & Technical SEO': {
            description: 'On-page, off-page, and technical optimization, audits'
          },
          'AI-Era Search Visibility (GEO)': {
            description: 'Optimization for AI-driven search visibility (LLMs, AI summaries)'
          },
          'Programmatic SEO & Content Hubs': {
            description: 'Automated SEO at scale – glossaries, knowledge hubs, page generation'
          },
          'Backlinking & Authority Building': {
            description: 'Link building and brand authority building'
          },
          'Reddit & Community-Led SEO': {
            description: 'Driving organic traction and mentions on Reddit and niche communities to strengthen search signals'
          }
        }
      },
      'Content & Thought Leadership': {
        children: {
          'Narrative & Content Development': {
            description: 'Blogs, emails, whitepapers, eBooks, landing pages, newsletters, web copy'
          }
        }
      },
      'Creative & Design Studio': {
        children: {
          'Visual Identity Creation': {
            description: 'Brand book, colors, typography, iconography (linked with Brand service)'
          },
          'Creative & Content Design': {
            description: 'Social media creatives, newsletters, ad banners, email templates'
          },
          'Website Design & Development': {
            description: 'UI/UX, responsive web builds, CMS setup'
          },
          'Event Creative & Collaterals': {
            description: 'Booth designs, brochures, banners, signage'
          },
          'Sales Enablement Design': {
            description: 'Investor decks, case study PDFs, pitch decks, presentations'
          }
        }
      },
      'AI Workflows & Automations': {
        children: {
          'AI-Powered Workflow Automation': {
            description: 'Marketing workflow automation using AI tools'
          },
          'AI-First Marketing Consulting': {
            description: 'Building AI marketing teams, AI adoption across marketing systems, tool stack design, operational efficiency'
          },
          'AI Adoption & Team Enablement': {
            description: 'Training, process shifts, rollout programs for AI-first ways of working'
          }
        }
      }
    }
  },
  'Solutions': {
    children: {
      'Early-Stage Startups': {
        description: 'Positioning, early traction, lean GTM, branding setup'
      },
      'Growth-Stage Startups': {
        description: 'Scaling demand, community growth, building content engine'
      },
      'Enterprise Marketing Teams': {
        description: 'GTM orchestration, enablement systems, cross-team coordination'
      }
    }
  },
  'Our Work': {
    children: {
      'Content Portfolio': {
        description: 'Showcase of written and strategic content projects'
      },
      'Design Portfolio': {
        description: 'Visual identity projects, ads, websites, event designs'
      }
    }
  },
  'Client Stories': {
    children: {
      'Case Studies': {
        description: 'Deep dives into client projects — challenge, solution, results'
      },
      'Wall of Love': {
        description: 'Screenshots, shoutouts, testimonials from clients and partners'
      },
      'Client Logos': {
        description: 'Logos of companies and brands that worked with 91Ninjas'
      }
    }
  },
  'Resources': {
    children: {
      'Blog': {
        description: 'Thought leadership, insights, marketing strategy articles'
      },
      'Templates': {
        description: 'Practical, ready-to-use structures to help teams move faster with clarity.'
      },
      'Playbooks / Guides / Frameworks': {
        description: 'Step-by-step models and mental scaffolds for building repeatable, scalable marketing systems.'
      }
    }
  },
  'Contact': {
    description: 'Contact form, meeting scheduler, location, email & social links'
  }
};

export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showDescription, setShowDescription] = useState(null);

  const handleMenuClick = (key) => {
    if (activeMenu === key) {
      setActiveMenu(null);
      setExpandedCategories({});
    } else {
      setActiveMenu(key);
      setExpandedCategories({});
    }
    setShowDescription(null);
  };

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleItemClick = (description) => {
    setShowDescription(description);
  };

  const renderMegaMenu = () => {
    if (!activeMenu || !NavData[activeMenu]?.children) return null;

    const children = NavData[activeMenu].children;
    const categories = Object.keys(children).filter(key => children[key].children);
    const directItems = Object.keys(children).filter(key => !children[key].children);

    if (activeMenu === 'Services') {
      return (
        <div className="absolute left-0 right-0 top-full bg-slate-50 border-t border-slate-200 shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid gap-4 grid-cols-3">
              {categories.map((key) => (
                <div key={key}>
                  <button
                    onClick={() => toggleCategory(key)}
                    className="w-full text-left p-4 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all group flex items-center justify-between"
                  >
                    <h3 className="text-base font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {key}
                    </h3>
                    <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${expandedCategories[key] ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedCategories[key] && (
                    <div className="mt-3 space-y-2 pl-4">
                      {Object.keys(children[key].children).map((subKey) => (
                        <button
                          key={subKey}
                          onClick={() => handleItemClick(children[key].children[subKey].description)}
                          className="w-full text-left p-3 rounded-lg bg-slate-50 hover:bg-white border border-slate-200 hover:border-slate-300 transition-all group"
                        >
                          <div className="font-medium text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                            {subKey}
                          </div>
                          <div className="text-xs text-slate-600 line-clamp-2">
                            {children[key].children[subKey].description}
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="absolute left-0 right-0 top-full bg-slate-50 border-t border-slate-200 shadow-xl z-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className={`grid gap-8 ${categories.length > 2 ? 'grid-cols-4' : categories.length > 0 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {categories.map((key) => (
              <div key={key}>
                <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  {key}
                </h3>
                <div className="space-y-3">
                  {Object.keys(children[key].children).map((subKey) => (
                    <button
                      key={subKey}
                      onClick={() => handleItemClick(children[key].children[subKey].description)}
                      className="w-full text-left p-3 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all group"
                    >
                      <div className="font-medium text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                        {subKey}
                      </div>
                      <div className="text-xs text-slate-600 line-clamp-2">
                        {children[key].children[subKey].description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            
            {directItems.length > 0 && (
              <div>
                <div className="space-y-3">
                  {directItems.map((key) => (
                    <button
                      key={key}
                      onClick={() => handleItemClick(children[key].description)}
                      className="w-full text-left p-3 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all group"
                    >
                      <div className="font-medium text-slate-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                        {key}
                      </div>
                      <div className="text-xs text-slate-600 line-clamp-2">
                        {children[key].description}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-slate-800 shadow-lg relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">91Ninjas</h1>
            </div>
            
            <div className="flex space-x-1">
              {Object.keys(NavData).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    if (NavData[key].description && !NavData[key].children) {
                      handleItemClick(NavData[key].description);
                    } else {
                      handleMenuClick(key);
                    }
                  }}
                  className={`px-4 py-2 rounded text-sm font-medium transition-all flex items-center gap-1 ${
                    activeMenu === key
                      ? 'text-white'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {key}
                  {NavData[key].children && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === key ? 'rotate-180' : ''}`} />
                  )}
                </button>
              ))}
            </div>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Book a Call
            </button>
          </div>
        </div>

        {renderMegaMenu()}
      </nav>

      {showDescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowDescription(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowDescription(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Service Details</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{showDescription}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Welcome to 91Ninjas
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Navigate through the menu above to explore our services, solutions, and resources.
            Hover over menu items to see our comprehensive offerings.
          </p>
        </div>
      </div>
    </div>
  );
}