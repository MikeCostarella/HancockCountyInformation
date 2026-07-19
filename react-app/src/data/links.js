// Hancock County, Ohio — curated directory of meaningful links.
// Single source of truth for the app. Keep entries verified and current.
// Fields: name, category, subcategory, url, description
// Last reviewed: 2026-07-19

export const CATEGORIES = [
  "Government",
  "Education",
  "Health",
  "Business & Economy",
  "Community & Social",
  "Recreation & Tourism",
  "News & Media",
];

// The vendor that hosts the county Auditor's online parcel/property records.
export const AUDITOR_VENDOR = "Beacon (Schneider Geospatial)";

export const LINKS = [
  // ---------- Government ----------
  { name: "Hancock County (Official Site)", category: "Government", subcategory: "County", url: "https://www.co.hancock.oh.us/", description: "Official government portal for Hancock County, Ohio (county seat: Findlay)." },
  { name: "Hancock County Auditor", category: "Government", subcategory: "Auditor", url: "https://www.co.hancock.oh.us/government-services/auditor", description: "Property records, valuations, and parcel/property search (hosted on Beacon / Schneider Geospatial)." },
  { name: "Hancock County Board of Elections", category: "Government", subcategory: "Elections", url: "https://www.boe.ohio.gov/hancock/", description: "Voter registration, polling locations, and election administration." },
  { name: "City of Findlay", category: "Government", subcategory: "City", url: "https://www.findlayohio.gov/", description: "Government site for the City of Findlay, the county seat." },
  // ---------- Education ----------
  { name: "Findlay-Hancock County Public Library", category: "Education", subcategory: "Library", url: "https://www.findlaylibrary.org/", description: "Public library serving Findlay and Hancock County." },
  { name: "Findlay City Schools", category: "Education", subcategory: "K-12", url: "https://www.findlaycityschools.org/", description: "Hancock County's largest public school district, serving Findlay." },
  { name: "University of Findlay", category: "Education", subcategory: "Higher Ed", url: "https://www.findlay.edu/", description: "Private university in Findlay serving Hancock County and the region." },
  { name: "Winebrenner Theological Seminary", category: "Education", subcategory: "Higher Ed", url: "https://www.winebrenner.edu/", description: "Graduate theological seminary located in Findlay." },
  // ---------- Health ----------
  { name: "Hancock Public Health", category: "Health", subcategory: "Public Health", url: "https://hancockpublichealth.com/", description: "County public-health agency: clinics, inspections, vital records, and programs." },
  { name: "Blanchard Valley Health System", category: "Health", subcategory: "Hospital", url: "https://www.bvhealthsystem.org/", description: "Regional health system anchored by Blanchard Valley Hospital in Findlay." },
  // ---------- Business & Economy ----------
  { name: "Findlay-Hancock County Chamber of Commerce", category: "Business & Economy", subcategory: "Chamber", url: "https://www.findlayhancockchamber.com/", description: "Business advocacy, member support, and community resources across Hancock County." },
  { name: "Findlay-Hancock County Economic Development", category: "Business & Economy", subcategory: "Economic Development", url: "https://www.findlayhancockalliance.com/", description: "Countywide economic-development organization supporting local business growth." },
  // ---------- Community & Social ----------
  { name: "OhioMeansJobs Hancock County", category: "Community & Social", subcategory: "Assistance", url: "https://ohiomeansjobs.ohio.gov/job-seekers/find-a-job/local-help/hancock-county", description: "Workforce, job-search, and employment services for county residents." },
  { name: "United Way of Hancock County", category: "Community & Social", subcategory: "Assistance", url: "https://www.liveunitedhancock.org/", description: "Local United Way funding health, education, and financial-stability programs." },
  // ---------- Recreation & Tourism ----------
  { name: "Visit Findlay", category: "Recreation & Tourism", subcategory: "Tourism", url: "https://visitfindlay.com/", description: "Official visitor guide to Findlay and Hancock County attractions, events, and dining." },
  { name: "Hancock Park District", category: "Recreation & Tourism", subcategory: "Parks", url: "https://www.hancockparks.com/", description: "County park district with nature preserves, trails, and outdoor programs." },
  // ---------- News & Media ----------
  { name: "The Courier", category: "News & Media", subcategory: "Newspaper", url: "https://thecourier.com/", description: "Findlay-based daily newspaper covering Hancock County." },
];
