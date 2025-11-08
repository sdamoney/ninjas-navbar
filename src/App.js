import React, { useState } from 'react';
import { ChevronDown, X, Menu } from 'lucide-react';

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
  }
};

export default function App() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [showDescription, setShowDescription] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    setMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveMenu(null);
    setExpandedCategories({});
  };

  const renderDesktopMegaMenu = () => {
    if (!activeMenu || !NavData[activeMenu]?.children) return null;

    const children = NavData[activeMenu].children;
    const categories = Object.keys(children).filter(key => children[key].children);
    const directItems = Object.keys(children).filter(key => !children[key].children);

    if (activeMenu === 'Services') {
      return (
        <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-xl z-50">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid gap-4 grid-cols-3">
              {categories.map((key) => (
                <div key={key}>
                  <button
                    onClick={() => toggleCategory(key)}
                    className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all group flex items-center justify-between"
                  >
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-[#1a3d3d] transition-colors">
                      {key}
                    </h3>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${expandedCategories[key] ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {expandedCategories[key] && (
                    <div className="mt-3 space-y-2 pl-4">
                      {Object.keys(children[key].children).map((subKey) => (
                        <button
                          key={subKey}
                          onClick={() => handleItemClick(children[key].children[subKey].description)}
                          className="w-full text-left p-3 rounded-lg bg-white hover:bg-gray-50 border border-gray-200 transition-all group"
                        >
                          <div className="font-medium text-gray-900 text-sm mb-1 group-hover:text-[#1a3d3d] transition-colors">
                            {subKey}
                          </div>
                          <div className="text-xs text-gray-600 line-clamp-2">
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
      <div className="absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-xl z-50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className={`grid gap-8 ${categories.length > 2 ? 'grid-cols-4' : categories.length > 0 ? 'grid-cols-3' : 'grid-cols-2'}`}>
            {categories.map((key) => (
              <div key={key}>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                  {key}
                </h3>
                <div className="space-y-3">
                  {Object.keys(children[key].children).map((subKey) => (
                    <button
                      key={subKey}
                      onClick={() => handleItemClick(children[key].children[subKey].description)}
                      className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all group"
                    >
                      <div className="font-medium text-gray-900 text-sm mb-1 group-hover:text-[#1a3d3d] transition-colors">
                        {subKey}
                      </div>
                      <div className="text-xs text-gray-600 line-clamp-2">
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
                      className="w-full text-left p-3 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all group"
                    >
                      <div className="font-medium text-gray-900 text-sm mb-1 group-hover:text-[#1a3d3d] transition-colors">
                        {key}
                      </div>
                      <div className="text-xs text-gray-600 line-clamp-2">
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

  const renderMobileMenu = () => {
    return (
      <div className="lg:hidden">
        <div 
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={closeMobileMenu}
        />
        
        <div className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] z-50 shadow-2xl transform transition-transform flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} style={{ backgroundColor: '#1a3d3d' }}>
          <div className="flex items-center justify-between p-4 border-b border-white/10 flex-shrink-0">
            <h2 className="text-xl font-bold text-white">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4" style={{ WebkitOverflowScrolling: 'touch' }}>
            {Object.keys(NavData).map((key) => (
              <div key={key} className="mb-2">
                {NavData[key].children ? (
                  <>
                    <button
                      onClick={() => handleMenuClick(key)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <span className="font-medium text-white">{key}</span>
                      <ChevronDown className={`w-5 h-5 text-white/70 transition-transform ${activeMenu === key ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {activeMenu === key && (
                      <div className="ml-4 mt-2 space-y-2">
                        {Object.keys(NavData[key].children).map((childKey) => {
                          const child = NavData[key].children[childKey];
                          
                          if (child.children) {
                            return (
                              <div key={childKey}>
                                <button
                                  onClick={() => toggleCategory(childKey)}
                                  className="w-full flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                >
                                  <span className="text-sm font-medium text-white/90">{childKey}</span>
                                  <ChevronDown className={`w-4 h-4 text-white/70 transition-transform ${expandedCategories[childKey] ? 'rotate-180' : ''}`} />
                                </button>
                                
                                {expandedCategories[childKey] && (
                                  <div className="ml-4 mt-2 space-y-1">
                                    {Object.keys(child.children).map((subKey) => (
                                      <button
                                        key={subKey}
                                        onClick={() => handleItemClick(child.children[subKey].description)}
                                        className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors"
                                      >
                                        <div className="text-sm text-white">{subKey}</div>
                                        <div className="text-xs text-white/60 mt-1 line-clamp-2">
                                          {child.children[subKey].description}
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          } else {
                            return (
                              <button
                                key={childKey}
                                onClick={() => handleItemClick(child.description)}
                                className="w-full text-left p-2 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                <div className="text-sm font-medium text-white">{childKey}</div>
                                <div className="text-xs text-white/60 mt-1">{child.description}</div>
                              </button>
                            );
                          }
                        })}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleItemClick(NavData[key].description)}
                    className="w-full text-left p-3 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <span className="font-medium text-white">{key}</span>
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 p-4 border-t border-white/10" style={{ backgroundColor: '#1a3d3d' }}>
            <button style={{ backgroundColor: '#FDB913' }} className="w-full hover:opacity-90 text-[#1a3d3d] px-6 py-3 rounded-lg font-semibold transition-opacity">
              Book a call
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <nav style={{ backgroundColor: '#1a3d3d' }} className="shadow-lg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">91NINJAS</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-1">
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                    activeMenu === key
                      ? 'text-white bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {key}
                  {NavData[key].children && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === key ? 'rotate-180' : ''}`} />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button style={{ backgroundColor: '#FDB913' }} className="hidden sm:block hover:opacity-90 text-[#1a3d3d] px-6 py-2.5 rounded-lg text-sm font-semibold transition-opacity">
                Book a call
              </button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        <div className="hidden lg:block">
          {renderDesktopMegaMenu()}
        </div>
      </nav>

      {/* Mobile Menu */}
      {renderMobileMenu()}

      {/* Description Modal */}
      {showDescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setShowDescription(null)}>
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowDescription(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 pr-8" style={{ color: '#1a3d3d' }}>Service Details</h3>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{showDescription}</p>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: '#1a3d3d' }}>
            91Ninjas is a <span className="relative inline-block">
              <span className="relative z-10">growth partner</span>
              <span className="absolute bottom-1 left-0 w-full h-3 -rotate-1" style={{ backgroundColor: '#FDB913' }}></span>
            </span> to B2B SaaS businesses
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the better, more efficient way to fuel your growth engine
          </p>
          <button style={{ backgroundColor: '#FDB913' }} className="hover:opacity-90 text-[#1a3d3d] px-8 py-3.5 rounded-lg text-base font-semibold transition-opacity">
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
}