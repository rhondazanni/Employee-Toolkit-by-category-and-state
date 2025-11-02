'use client';

import React, { useState } from 'react';
import { AlertCircle, BookOpen, FileText, Home, RefreshCw, Shield, ChevronDown, ExternalLink, Clock, AlertTriangle, Scale, Zap, CreditCard, CheckCircle } from 'lucide-react';

const EmployeeToolkit = () => {
  const [showDemo, setShowDemo] = useState(true);
  const [state, setState] = useState('');
  const [category, setCategory] = useState('');
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const categories = ['Discrimination & Harassment', 'Wage & Hour / Minimum Wage', 'Unemployment Claims', 'Break & Lunch Laws', 'Discipline / Performance', 'Retaliation Awareness', 'ADA / Workplace Accommodations', 'FMLA / Leave Awareness', 'OSHA / Workplace Safety', 'Workers Compensation', 'Whistleblower Protections', 'Union Rights & Formation', 'Federal Contract Jobs / Prevailing Wage', 'Workplace Poster Requirements', 'Documentation Practices', 'Exit / Transition Planning'];

  const rightToWorkStates = ['Alabama', 'Arizona', 'Arkansas', 'Florida', 'Georgia', 'Idaho', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Michigan', 'Mississippi', 'Nebraska', 'Nevada', 'North Carolina', 'North Dakota', 'Oklahoma', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Virginia', 'West Virginia', 'Wisconsin', 'Wyoming'];

  const getStateOvertimeRules = (s) => {
    const overtimeRules = {
      'Alaska': 'OT after 8 hrs/day OR 40 hrs/week. Employers with <4 employees exempt.',
      'Arizona': 'Federal law applies: OT after 40 hrs/week only.',
      'California': 'OT after 8 hrs/day, 40 hrs/week, or 6 days/week. 2x pay after 12 hrs/day.',
      'Colorado': 'OT after 12 hrs/day OR 40 hrs/week at 1.5x pay.',
      'Connecticut': 'Federal law applies: OT after 40 hrs/week only.',
      'Delaware': 'Federal law applies: OT after 40 hrs/week only.',
      'Florida': 'Federal law applies. Special: OT after 10 hrs/day for manual laborers.',
      'Georgia': 'Federal law applies: OT after 40 hrs/week only.',
      'Hawaii': 'Federal law applies: OT after 40 hrs/week. Special rules for public works.',
      'Idaho': 'Federal law applies: OT after 40 hrs/week only.',
      'Illinois': 'Federal law applies: OT after 40 hrs/week only.',
      'Indiana': 'Federal law applies: OT after 40 hrs/week only.',
      'Iowa': 'Federal law applies: OT after 40 hrs/week only.',
      'Kansas': 'OT after 46 hrs/week at 1.5x pay (higher than federal).',
      'Kentucky': 'Federal law applies: OT after 40 hrs/week only.',
      'Louisiana': 'Federal law applies: OT after 40 hrs/week only.',
      'Maine': 'Federal law applies: OT after 40 hrs/week only.',
      'Maryland': 'Federal law applies. Special: OT after 60 hrs/week for agricultural.',
      'Massachusetts': 'Federal law applies: OT after 40 hrs/week. Special rules for domestic workers.',
      'Michigan': 'Federal law applies for employers with 2+ employees.',
      'Minnesota': 'OT after 48 hrs/week at 1.5x pay (higher than federal).',
      'Mississippi': 'Federal law applies: OT after 40 hrs/week only.',
      'Missouri': 'Federal law applies: OT after 40 hrs/week only.',
      'Montana': 'Federal law applies: OT after 40 hrs/week only.',
      'Nebraska': 'Federal law applies: OT after 40 hrs/week only.',
      'Nevada': 'OT after 8 hrs/day OR 40 hrs/week. Varies by wage level.',
      'New Hampshire': 'Federal law applies: OT after 40 hrs/week only.',
      'New Jersey': 'Federal law applies: OT after 40 hrs/week only.',
      'New Mexico': 'Federal law applies: OT after 40 hrs/week only.',
      'New York': 'Federal law applies: OT after 40 hrs/week. Expanded coverage vs FLSA.',
      'North Carolina': 'Federal law applies: OT after 40 hrs/week only.',
      'North Dakota': 'Federal law applies: OT after 40 hrs/week only.',
      'Ohio': 'Federal law applies: OT after 40 hrs/week only.',
      'Oklahoma': 'Federal law applies: OT after 40 hrs/week only.',
      'Oregon': 'Federal law applies. Special rules for manufacturing/public sector.',
      'Pennsylvania': 'Federal law applies: OT after 40 hrs/week only.',
      'Rhode Island': 'OT after 40 hrs/week. Special: After 8 hrs/day for manufacturing.',
      'South Carolina': 'Federal law applies: OT after 40 hrs/week only.',
      'South Dakota': 'Federal law applies: OT after 40 hrs/week only.',
      'Tennessee': 'Federal law applies: OT after 40 hrs/week only.',
      'Texas': 'Federal law applies: OT after 40 hrs/week only.',
      'Utah': 'Federal law applies: OT after 40 hrs/week only.',
      'Vermont': 'Federal law applies. Special rules for agricultural/domestic.',
      'Virginia': 'Federal law applies: OT after 40 hrs/week only.',
      'Washington': 'Federal law applies. Special: Daily OT for manufacturing/retail after 8 hrs.',
      'West Virginia': 'State law applies when FLSA does not cover.',
      'Wisconsin': 'Federal law applies: OT after 40 hrs/week only.',
      'Wyoming': 'Federal law applies: OT after 40 hrs/week only.'
    };
    return overtimeRules[s] || 'Federal FLSA applies: OT after 40 hrs/week at 1.5x pay.';
  };

  const getStateData = (s) => {
    const data = {
      'Alabama': [7.25, 'After 40 hrs/week', 65, 320, 26, 'Final payday by law', 'labor.alabama.gov', 'unemployment.alabama.gov', 'eeoc.gov'],
      'Alaska': [11.73, 'After 40 hrs/week', 56, 398, 26, 'Next regular payday', 'labor.alaska.gov', 'unemployment.alaska.gov', 'eeoc.gov'],
      'Arizona': [16.40, 'After 40 hrs/week', 60, 558, 26, 'Next regular payday', 'azica.gov', 'des.az.gov/services/employment/unemployment-individual', 'eeoc.gov'],
      'Arkansas': [11.00, 'After 40 hrs/week', 65, 589, 20, 'Next payday or within 14 days', 'arkansas.gov/labor', 'arkansas.gov/esd', 'eeoc.gov'],
      'California': [16.50, 'After 8 hrs/day, 40 hrs/week, 7th day. 2x after 12 hrs/day', 40, 450, 26, 'Immediately if fired, last day if quit', 'dir.ca.gov', 'edd.ca.gov/unemployment', 'dfeh.ca.gov'],
      'Colorado': [15.00, 'After 40 hrs/week', 75, 633, 26, 'Next regular payday', 'colorado.gov/labor', 'cdle.colorado.gov/ui', 'eeoc.gov'],
      'Connecticut': [15.69, 'After 40 hrs/week', 80, 645, 26, 'Next regular payday', 'ct.gov/labor', 'ct.gov/dol/unemployment', 'eeoc.gov'],
      'Delaware': [13.75, 'After 40 hrs/week', 77, 330, 26, 'Next regular payday', 'delaware.gov/labor', 'delaware.gov/dhss/dls/unemployment', 'eeoc.gov'],
      'Florida': [14.00, 'After 40 hrs/week', 32, 275, 12, 'Next payday', 'floridajobs.org', 'connect.myflorida.com', 'fchr.myflorida.com'],
      'Georgia': [7.25, 'After 40 hrs/week', 74, 365, 26, 'Next regular payday', 'georgia.gov/labor', 'georgia.gov/dol', 'eeoc.gov'],
      'Hawaii': [14.00, 'After 40 hrs/week', 74, 680, 26, 'Next regular payday', 'hawaii.gov/labor', 'hawaii.gov/labor/ui', 'eeoc.gov'],
      'Idaho': [7.25, 'After 40 hrs/week', 80, 668, 26, 'Next regular payday', 'labor.idaho.gov', 'labor.idaho.gov/unemployment', 'eeoc.gov'],
      'Illinois': [14.00, 'After 40 hrs/week', 69, 578, 26, 'On final regular payday', 'illinois.gov/ilga/agencies/dol', 'ides.illinois.gov', 'eeoc.gov'],
      'Indiana': [7.25, 'After 40 hrs/week', 81, 504, 26, 'By next regular payday or within 10 days', 'in.gov/dol', 'in.gov/dol/ui', 'eeoc.gov'],
      'Iowa': [11.00, 'After 40 hrs/week', 88, 1183, 26, 'Next regular payday', 'iowaworkforcedevelopment.gov', 'iowaworkforcedevelopment.gov/unemployment', 'eeoc.gov'],
      'Kansas': [7.25, 'After 40 hrs/week', 85, 688, 26, 'Next regular payday', 'ksemployer.org', 'kansasworks.com/ui', 'eeoc.gov'],
      'Kentucky': [7.25, 'After 40 hrs/week', 82, 626, 26, 'Next regular payday', 'kylabor.ky.gov', 'kylabor.ky.gov/unemployment', 'eeoc.gov'],
      'Louisiana': [7.25, 'After 40 hrs/week', 50, 476, 26, 'Next regular payday', 'ldi.la.gov', 'laworks.net/unemployment', 'eeoc.gov'],
      'Maine': [14.15, 'After 40 hrs/week', 70, 538, 26, 'Next regular payday', 'maine.gov/labor', 'maine.gov/unemployment', 'eeoc.gov'],
      'Maryland': [15.00, 'After 40 hrs/week', 75, 430, 26, 'Next regular payday', 'maryland.gov/mda', 'mdes.maryland.gov', 'eeoc.gov'],
      'Massachusetts': [15.00, 'After 40 hrs/week', 62, 974, 30, 'Last day of employment or next payday', 'mass.gov/dol', 'mass.gov/unemployment', 'eeoc.gov'],
      'Michigan': [10.33, 'After 40 hrs/week', 80, 762, 26, 'Next regular payday', 'michigan.gov/labor', 'michigan.gov/unemployment', 'eeoc.gov'],
      'Minnesota': [12.30, 'After 40 hrs/week', 78, 857, 26, 'Next regular payday (or 20 days if no payday)', 'pca.state.mn.us', 'uimn.org', 'eeoc.gov'],
      'Mississippi': [7.25, 'After 40 hrs/week', 30, 235, 26, 'Next regular payday', 'mississippi.gov/labor', 'mdes.ms.gov/unemployment', 'eeoc.gov'],
      'Missouri': [12.30, 'After 40 hrs/week', 83, 748, 26, 'By final pay period', 'labor.mo.gov', 'labor.mo.gov/dui', 'eeoc.gov'],
      'Montana': [12.68, 'After 40 hrs/week', 50, 711, 26, 'Within 15 days', 'montanauninsured.org', 'montanaui.org', 'eeoc.gov'],
      'Nebraska': [14.00, 'After 40 hrs/week', 73, 644, 26, 'Next regular payday', 'dol.nebraska.gov', 'dol.nebraska.gov/unemployment-insurance', 'eeoc.gov'],
      'Nevada': [12.00, 'After 40 hrs/week', 46, 327, 26, 'Next regular payday', 'laborcenter.unlv.edu', 'ndep.nv.gov/insurance/unemployment', 'eeoc.gov'],
      'New Hampshire': [7.25, 'After 40 hrs/week', 77, 436, 26, 'Next regular payday', 'nh.gov/labor', 'nh.gov/unemployment', 'eeoc.gov'],
      'New Jersey': [15.13, 'After 40 hrs/week', 67, 691, 26, 'Ending of following pay period', 'nj.gov/labor', 'nj.gov/labor/myunemployment/input.html', 'eeoc.gov'],
      'New Mexico': [12.00, 'After 40 hrs/week', 71, 537, 26, 'Within 30 days', 'env.nm.gov/labor', 'fsd.state.nm.us', 'eeoc.gov'],
      'New York': [15.00, 'After 40 hrs/week', 70, 405, 26, 'Next regular payday', 'ny.gov/labor', 'labor.ny.gov/ui', 'eeoc.gov'],
      'North Carolina': [7.25, 'After 40 hrs/week', 90, 547, 26, 'Next regular payday', 'labor.nc.gov', 'ncesc.com', 'eeoc.gov'],
      'North Dakota': [12.30, 'After 40 hrs/week', 64, 669, 26, 'Next regular payday', 'nd.gov/labor', 'unemployment.nd.gov', 'eeoc.gov'],
      'Ohio': [10.45, 'After 40 hrs/week', 71, 549, 26, 'Next regular payday', 'ohio.gov/agencies/commerce-dept/division-labor', 'jfs.ohio.gov/unemployment', 'eeoc.gov'],
      'Oklahoma': [7.25, 'After 40 hrs/week', 86, 589, 26, 'Within 15 days', 'oklahoma.gov/odol', 'okpathway.ok.gov', 'eeoc.gov'],
      'Oregon': [15.45, 'After 40 hrs/week', 50, 538, 26, 'End of next pay period', 'oregon.gov/labor', 'oregon4biz.org', 'eeoc.gov'],
      'Pennsylvania': [7.25, 'After 40 hrs/week', 82, 574, 26, 'Next regular payday', 'pa.gov/business/labor', 'scdu.pa.gov/unemployment', 'eeoc.gov'],
      'Rhode Island': [15.00, 'After 40 hrs/week', 70, 399, 26, 'End of regular pay period', 'ri.gov/labor', 'ri.gov/dem/ui', 'eeoc.gov'],
      'South Carolina': [7.25, 'After 40 hrs/week', 74, 380, 26, 'Next regular payday', 'sclabor.gov', 'sces.org', 'eeoc.gov'],
      'South Dakota': [14.00, 'After 40 hrs/week', 77, 632, 26, 'Next regular payday', 'dlr.sd.gov', 'uiclaimant.sd.gov', 'eeoc.gov'],
      'Tennessee': [7.25, 'After 40 hrs/week', 64, 355, 26, 'Next regular payday', 'tn.gov/labor', 'tn.gov/workforce/unemployment', 'eeoc.gov'],
      'Texas': [7.25, 'After 40 hrs/week', 62, 320, 26, 'Within 30 days', 'texas.gov/agencies/texas-workforce-commission', 'twc.texas.gov', 'eeoc.gov'],
      'Utah': [10.35, 'After 40 hrs/week', 75, 662, 26, 'Next regular payday', 'laborcommission.utah.gov', 'jobs.utah.gov/ui', 'eeoc.gov'],
      'Vermont': [14.67, 'After 40 hrs/week', 65, 607, 26, 'Next regular payday or within 31 days', 'vermont.gov/labor', 'vermont.gov/unemployment', 'eeoc.gov'],
      'Virginia': [12.00, 'After 40 hrs/week', 68, 378, 26, 'Next regular payday', 'doli.virginia.gov', 'vec.virginia.gov', 'eeoc.gov'],
      'Washington': [16.28, 'After 40 hrs/week', 75, 968, 26, 'End of pay period when due', 'lni.wa.gov', 'esd.wa.gov/unemployment', 'eeoc.gov'],
      'West Virginia': [8.75, 'After 40 hrs/week', 70, 486, 26, 'Next regular payday', 'labor.wv.gov', 'workforce.wv.gov/unemployment', 'eeoc.gov'],
      'Wisconsin': [10.86, 'After 40 hrs/week', 84, 843, 26, 'By end of pay period or within 31 days', 'dsps.wi.gov', 'dwd.wi.gov/ui', 'eeoc.gov'],
      'Wyoming': [7.25, 'After 40 hrs/week', 64, 675, 26, 'Next regular payday', 'eeoc.gov', 'wyoming.gov/ui', 'eeoc.gov']
    };
    const d = data[s] || [7.25, 'After 40 hrs/week', 70, 500, 26, 'Next regular payday', 'dol.gov', 'unemployment.gov', 'eeoc.gov'];
    return { 
      wage: d[0], ot: d[1], uiMin: d[2], uiMax: d[3], weeks: d[4], pay: d[5], labor: d[6], ui: d[7], hr: d[8],
      isRightToWork: rightToWorkStates.includes(s),
      isAtWill: s !== 'Montana'
    };
  };

  const stateBreakLawsWithLinks = {
    'Alabama': { rule: 'No state meal break law for adults. Federal only: Short breaks paid, long breaks unpaid if duty-free.', dept: 'alabama.gov/labor', complaint: 'labor.alabama.gov/complaints' },
    'Alaska': { rule: 'Breaks <20 min: Paid. Meal breaks: Unpaid if duty-free. Nursing mothers: Reasonable break time up to 1 year.', dept: 'labor.alaska.gov', complaint: 'labor.alaska.gov/workers-comp' },
    'Arizona': { rule: 'No state meal break law. Federal only: Short breaks paid, long breaks unpaid if duty-free.', dept: 'azica.gov', complaint: 'azica.gov/file-complaint' },
    'Arkansas': { rule: 'No state meal break law. Minors: 30-min after 5 hrs. Nursing mothers: Reasonable unpaid break time.', dept: 'arkansas.gov/labor', complaint: 'arkansas.gov/labor/complaints' },
    'California': { rule: 'Meal breaks: 30-min unpaid after 5 hrs (second after 10 hrs, can waive if <6 hr day). Rest breaks: 10-min PAID per 4 hrs.', dept: 'dir.ca.gov', complaint: 'dir.ca.gov/dlse/claim-wage-theft' },
    'Colorado': { rule: 'Meal breaks: 30-min unpaid after 5 hrs (between 1st-last hr). Rest breaks: 10-min PAID per 4 hrs or major fraction.', dept: 'colorado.gov/labor', complaint: 'cdle.colorado.gov/file-complaint' },
    'Connecticut': { rule: 'Meal breaks: 30-min unpaid after 2-7.5 hrs. No rest break requirement unless collective bargaining agreement.', dept: 'ct.gov/labor', complaint: 'ct.gov/dol/complaints' },
    'Delaware': { rule: 'No state law. Federal only: Short breaks paid, long breaks unpaid if duty-free.', dept: 'delaware.gov/labor', complaint: 'delaware.gov/labor/employee-relations-office' },
    'Florida': { rule: 'No state meal break law for adults. Minors: 15-30 min break. Federal applies (short breaks paid).', dept: 'floridajobs.org', complaint: 'floridajobs.org/office-of-inspector-general' },
    'Georgia': { rule: 'No state meal break law for adults. Federal only applies.', dept: 'georgia.gov/labor', complaint: 'georgia.gov/labor/file-complaint' },
    'Hawaii': { rule: 'No specific meal break law. Federal only: Short breaks paid, long breaks unpaid if duty-free.', dept: 'hawaii.gov/labor', complaint: 'hawaii.gov/labor/enforcement-division' },
    'Idaho': { rule: 'No state meal break law. Federal only applies.', dept: 'labor.idaho.gov', complaint: 'labor.idaho.gov/file-complaint' },
    'Illinois': { rule: 'No adult meal break requirement. Federal only applies.', dept: 'illinois.gov/ilga/agencies/dol', complaint: 'illinois.gov/dol/laborstandards' },
    'Indiana': { rule: 'No state meal break law for adults. Federal only applies.', dept: 'in.gov/dol', complaint: 'in.gov/dol/labor-standards' },
    'Iowa': { rule: 'No state meal break law for adults. Federal only applies.', dept: 'iowaworkforcedevelopment.gov', complaint: 'iowaworkforcedevelopment.gov/labor-standards' },
    'Kansas': { rule: 'No state meal break law. Federal only applies.', dept: 'ksemployer.org', complaint: 'ksemployer.org/file-wage-complaint' },
    'Kentucky': { rule: 'No state meal break law for adults. Federal only applies.', dept: 'kylabor.ky.gov', complaint: 'kylabor.ky.gov/divisions/labor-standards' },
    'Louisiana': { rule: 'No state meal break law. Federal only applies.', dept: 'ldi.la.gov', complaint: 'ldi.la.gov/wage-and-hour' },
    'Maine': { rule: 'Meal breaks: 30-min unpaid after 6 consecutive hours (except emergencies).', dept: 'maine.gov/labor', complaint: 'maine.gov/labor/wage-hour-division' },
    'Maryland': { rule: 'No specific meal break law for general employees. Retail: 15 min break per 4 hrs under Healthy Retail Act.', dept: 'maryland.gov/mda', complaint: 'maryland.gov/mda/labor/wage-hour' },
    'Massachusetts': { rule: 'Meal breaks: 30-min for workdays >6 hrs. Domestic workers: Additional protections.', dept: 'mass.gov/dol', complaint: 'www.mass.gov/info-details/employee-complaints-and-inquiries' },
    'Michigan': { rule: 'No state meal break requirement (applies to employers with 2+ employees).', dept: 'michigan.gov/labor', complaint: 'michigan.gov/labor/complaints' },
    'Minnesota': { rule: 'Meal breaks: Sufficient unpaid meal time for 8+ hour shifts. Rest breaks: Paid breaks every 4 hrs for restroom.', dept: 'pca.state.mn.us', complaint: 'pca.state.mn.us/labor-standards-and-apprenticeship' },
    'Mississippi': { rule: 'No state meal break law. Federal only applies.', dept: 'mississippi.gov/labor', complaint: 'mississippi.gov/labor/employment-services' },
    'Missouri': { rule: 'No state meal break law for adults. Minors in entertainment: 30-60 min break.', dept: 'labor.mo.gov', complaint: 'labor.mo.gov/dws/dir/complaint-process' },
    'Montana': { rule: 'No state meal break law for adults. Federal only applies.', dept: 'montanauninsured.org', complaint: 'montanauninsured.org/workers-comp-claims' },
    'Nebraska': { rule: 'No state meal break law. Federal only applies.', dept: 'dol.nebraska.gov', complaint: 'dol.nebraska.gov/file-complaint' },
    'Nevada': { rule: 'Meal breaks: 30-min unpaid after 8 hrs (can opt for paid break option). Dependent on wage level.', dept: 'laborcenter.unlv.edu', complaint: 'laborcenter.unlv.edu/research-and-advocacy' },
    'New Hampshire': { rule: 'No state meal break law. Federal only applies.', dept: 'nh.gov/labor', complaint: 'nh.gov/labor/employees/complaint' },
    'New Jersey': { rule: 'Meal breaks: 30-min unpaid for shifts 6+ hours. Rest breaks: Reasonable restroom access.', dept: 'nj.gov/labor', complaint: 'nj.gov/labor/myworkrights/wage' },
    'New Mexico': { rule: 'No state meal break law. Federal only applies.', dept: 'env.nm.gov/labor', complaint: 'env.nm.gov/labor/occupational-safety-and-health' },
    'New York': { rule: 'Meal breaks: 30-min unpaid for shifts 6+ hrs. Factory: 1 hr. Paid restroom breaks every 4 hrs.', dept: 'labor.ny.gov', complaint: 'labor.ny.gov/workerprotection/wage-hour' },
    'North Carolina': { rule: 'No state meal break law for adults. Federal only applies.', dept: 'labor.nc.gov', complaint: 'labor.nc.gov/workplace-safety' },
    'North Dakota': { rule: 'Meal breaks: 30-min unpaid for shifts 5+ hours.', dept: 'nd.gov/labor', complaint: 'nd.gov/labor/file-complaint' },
    'Ohio': { rule: 'Meal breaks: 30-min unpaid for shifts 5+ hours. Rest breaks: Within each 4-hr period for restroom.', dept: 'ohio.gov/agencies/commerce-dept/division-labor', complaint: 'ohio.gov/agencies/commerce-dept/division-labor/wage-hour' },
    'Oklahoma': { rule: 'No state meal break law. Federal only applies.', dept: 'oklahoma.gov/odol', complaint: 'oklahoma.gov/odol/divisions/labor-standards' },
    'Oregon': { rule: 'Meal breaks: 30-min unpaid after 6 hrs. Rest breaks: 10-min PAID for every 4-hr period worked.', dept: 'oregon.gov/labor', complaint: 'oregon.gov/labor/bureaus/wage-and-hour' },
    'Pennsylvania': { rule: 'No state meal break requirement for adults. Federal only applies.', dept: 'pa.gov/business/labor', complaint: 'pa.gov/business/labor/filing-complaints' },
    'Rhode Island': { rule: 'Meal breaks: 30-min unpaid for 7.5+ hr shifts. Rest: After 8 hrs in manufacturing - 10 min PAID break.', dept: 'ri.gov/labor', complaint: 'ri.gov/labor/divisions-bureaus/labor-standards' },
    'South Carolina': { rule: 'No state meal break law. Federal only applies.', dept: 'sclabor.gov', complaint: 'sclabor.gov/labor-laws-regulations' },
    'South Dakota': { rule: 'No state meal break law. Federal only applies.', dept: 'dlr.sd.gov', complaint: 'dlr.sd.gov/division-labor-management' },
    'Tennessee': { rule: 'No state meal break law. Federal only applies.', dept: 'tn.gov/labor', complaint: 'tn.gov/labor/divisions/wage-hour' },
    'Texas': { rule: 'No state meal break law for adults. Federal only applies.', dept: 'texas.gov/agencies/texas-workforce-commission', complaint: 'twc.texas.gov/employees' },
    'Utah': { rule: 'No state meal break law. Federal only applies.', dept: 'laborcommission.utah.gov', complaint: 'laborcommission.utah.gov/divisions/records-and-referral' },
    'Vermont': { rule: 'Reasonable opportunity to eat and use restroom during shift. No specific meal break duration required.', dept: 'vermont.gov/labor', complaint: 'vermont.gov/labor/wage-hour' },
    'Virginia': { rule: 'No state meal break law for adults. Federal only applies.', dept: 'doli.virginia.gov', complaint: 'doli.virginia.gov/wage-hour' },
    'Washington': { rule: 'Meal breaks: Reasonable paid break. Rest breaks: 10-min PAID per 4 hrs worked.', dept: 'lni.wa.gov', complaint: 'lni.wa.gov/workers-rights-safety/wages' },
    'West Virginia': { rule: 'No state meal break requirement for adults. Federal only applies.', dept: 'labor.wv.gov', complaint: 'labor.wv.gov/workers/file-complaint' },
    'Wisconsin': { rule: 'No state meal break requirement. Federal only applies.', dept: 'dsps.wi.gov', complaint: 'dsps.wi.gov/sl/employee-complaint' },
    'Wyoming': { rule: 'No state meal break law. Federal only applies.', dept: 'eeoc.gov', complaint: 'wyoming.gov/business/labor-statistics' }
  };

  const stateWageHourLinks = {
    'Alabama': { dept: 'alabama.gov/labor', wageComplaint: 'labor.alabama.gov/wage-hour-complaints', link: 'labor.alabama.gov' },
    'Alaska': { dept: 'labor.alaska.gov', wageComplaint: 'labor.alaska.gov/wage-hour-enforcement', link: 'labor.alaska.gov/lss/' },
    'Arizona': { dept: 'azica.gov', wageComplaint: 'azica.gov/wage-hour-complaints', link: 'azica.gov/divisions' },
    'Arkansas': { dept: 'arkansas.gov/labor', wageComplaint: 'arkansas.gov/labor/wage-hour', link: 'arkansas.gov/labor' },
    'California': { dept: 'dir.ca.gov', wageComplaint: 'dir.ca.gov/dlse/claim-wage-theft', link: 'dir.ca.gov' },
    'Colorado': { dept: 'colorado.gov/labor', wageComplaint: 'cdle.colorado.gov/wage-hour-complaints', link: 'cdle.colorado.gov' },
    'Connecticut': { dept: 'ct.gov/labor', wageComplaint: 'ct.gov/dol/wage-complaints', link: 'ct.gov/labor' },
    'Delaware': { dept: 'delaware.gov/labor', wageComplaint: 'delaware.gov/labor/wage-hour', link: 'delaware.gov/labor' },
    'Florida': { dept: 'floridajobs.org', wageComplaint: 'floridajobs.org/wage-hour-complaints', link: 'floridajobs.org' },
    'Georgia': { dept: 'georgia.gov/labor', wageComplaint: 'georgia.gov/labor/wage-hour', link: 'georgia.gov/labor' },
    'Hawaii': { dept: 'hawaii.gov/labor', wageComplaint: 'hawaii.gov/labor/wage-hour-enforcement', link: 'hawaii.gov/labor' },
    'Idaho': { dept: 'labor.idaho.gov', wageComplaint: 'labor.idaho.gov/wage-hour-complaints', link: 'labor.idaho.gov' },
    'Illinois': { dept: 'illinois.gov/ilga/agencies/dol', wageComplaint: 'illinois.gov/dol/wage-complaints', link: 'illinois.gov/ilga/agencies/dol' },
    'Indiana': { dept: 'in.gov/dol', wageComplaint: 'in.gov/dol/wage-hour-compliance', link: 'in.gov/dol' },
    'Iowa': { dept: 'iowaworkforcedevelopment.gov', wageComplaint: 'iowaworkforcedevelopment.gov/wage-hour-complaints', link: 'iowaworkforcedevelopment.gov' },
    'Kansas': { dept: 'ksemployer.org', wageComplaint: 'ksemployer.org/wage-hour-complaints', link: 'ksemployer.org' },
    'Kentucky': { dept: 'kylabor.ky.gov', wageComplaint: 'kylabor.ky.gov/wage-hour-enforcement', link: 'kylabor.ky.gov' },
    'Louisiana': { dept: 'ldi.la.gov', wageComplaint: 'ldi.la.gov/wage-hour-division', link: 'ldi.la.gov' },
    'Maine': { dept: 'maine.gov/labor', wageComplaint: 'maine.gov/labor/wage-hour-division', link: 'maine.gov/labor' },
    'Maryland': { dept: 'maryland.gov/mda', wageComplaint: 'maryland.gov/mda/labor/wage-hour-division', link: 'maryland.gov/mda' },
    'Massachusetts': { dept: 'mass.gov/dol', wageComplaint: 'www.mass.gov/info-details/employee-complaints-and-inquiries', link: 'mass.gov/dol' },
    'Michigan': { dept: 'michigan.gov/labor', wageComplaint: 'michigan.gov/labor/wage-hour-complaints', link: 'michigan.gov/labor' },
    'Minnesota': { dept: 'pca.state.mn.us', wageComplaint: 'pca.state.mn.us/wage-hour-division', link: 'pca.state.mn.us' },
    'Mississippi': { dept: 'mississippi.gov/labor', wageComplaint: 'mississippi.gov/labor/wage-hour', link: 'mississippi.gov/labor' },
    'Missouri': { dept: 'labor.mo.gov', wageComplaint: 'labor.mo.gov/wage-hour-division', link: 'labor.mo.gov' },
    'Montana': { dept: 'montanauninsured.org', wageComplaint: 'montanauninsured.org/wage-hour', link: 'montanauninsured.org' },
    'Nebraska': { dept: 'dol.nebraska.gov', wageComplaint: 'dol.nebraska.gov/wage-hour-complaints', link: 'dol.nebraska.gov' },
    'Nevada': { dept: 'laborcenter.unlv.edu', wageComplaint: 'laborcenter.unlv.edu/wage-hour', link: 'laborcenter.unlv.edu' },
    'New Hampshire': { dept: 'nh.gov/labor', wageComplaint: 'nh.gov/labor/employees/wage-hour', link: 'nh.gov/labor' },
    'New Jersey': { dept: 'nj.gov/labor', wageComplaint: 'nj.gov/labor/myworkrights/wage', link: 'nj.gov/labor' },
    'New Mexico': { dept: 'env.nm.gov/labor', wageComplaint: 'env.nm.gov/labor/wage-hour', link: 'env.nm.gov/labor' },
    'New York': { dept: 'labor.ny.gov', wageComplaint: 'labor.ny.gov/workerprotection/wage-hour', link: 'labor.ny.gov' },
    'North Carolina': { dept: 'labor.nc.gov', wageComplaint: 'labor.nc.gov/wage-hour-enforcement', link: 'labor.nc.gov' },
    'North Dakota': { dept: 'nd.gov/labor', wageComplaint: 'nd.gov/labor/wage-hour-division', link: 'nd.gov/labor' },
    'Ohio': { dept: 'ohio.gov/agencies/commerce-dept/division-labor', wageComplaint: 'ohio.gov/agencies/commerce-dept/division-labor/wage-hour', link: 'ohio.gov/agencies/commerce-dept/division-labor' },
    'Oklahoma': { dept: 'oklahoma.gov/odol', wageComplaint: 'oklahoma.gov/odol/wage-hour', link: 'oklahoma.gov/odol' },
    'Oregon': { dept: 'oregon.gov/labor', wageComplaint: 'oregon.gov/labor/bureaus/wage-and-hour', link: 'oregon.gov/labor' },
    'Pennsylvania': { dept: 'pa.gov/business/labor', wageComplaint: 'pa.gov/business/labor/wage-hour', link: 'pa.gov/business/labor' },
    'Rhode Island': { dept: 'ri.gov/labor', wageComplaint: 'ri.gov/labor/divisions-bureaus/wage-hour', link: 'ri.gov/labor' },
    'South Carolina': { dept: 'sclabor.gov', wageComplaint: 'sclabor.gov/wage-hour-division', link: 'sclabor.gov' },
    'South Dakota': { dept: 'dlr.sd.gov', wageComplaint: 'dlr.sd.gov/wage-hour-division', link: 'dlr.sd.gov' },
    'Tennessee': { dept: 'tn.gov/labor', wageComplaint: 'tn.gov/labor/divisions/wage-hour', link: 'tn.gov/labor' },
    'Texas': { dept: 'texas.gov/agencies/texas-workforce-commission', wageComplaint: 'twc.texas.gov/employees/wage-hour', link: 'twc.texas.gov' },
    'Utah': { dept: 'laborcommission.utah.gov', wageComplaint: 'laborcommission.utah.gov/wage-hour-division', link: 'laborcommission.utah.gov' },
    'Vermont': { dept: 'vermont.gov/labor', wageComplaint: 'vermont.gov/labor/wage-hour-division', link: 'vermont.gov/labor' },
    'Virginia': { dept: 'doli.virginia.gov', wageComplaint: 'doli.virginia.gov/wage-hour', link: 'doli.virginia.gov' },
    'Washington': { dept: 'lni.wa.gov', wageComplaint: 'lni.wa.gov/workers-rights-safety/wages', link: 'lni.wa.gov' },
    'West Virginia': { dept: 'labor.wv.gov', wageComplaint: 'labor.wv.gov/wage-hour-division', link: 'labor.wv.gov' },
    'Wisconsin': { dept: 'dsps.wi.gov', wageComplaint: 'dsps.wi.gov/wage-hour-division', link: 'dsps.wi.gov' },
    'Wyoming': { dept: 'wyoming.gov/business/labor-statistics', wageComplaint: 'wyoming.gov/business/labor-statistics/wage-hour', link: 'wyoming.gov/business' }
  };

  const stateWageUpdateSchedules = {
    'Alabama': 'Federal minimum wage only - No state updates',
    'Alaska': 'Updates annually January 1st',
    'Arizona': 'Updates annually January 1st',
    'Arkansas': 'Federal minimum wage only - No state updates',
    'California': 'Updates annually January 1st',
    'Colorado': 'Updates annually January 1st',
    'Connecticut': 'Updates annually September 1st',
    'Delaware': 'Federal minimum wage only - No state updates',
    'Florida': 'Updates annually September 30th',
    'Georgia': 'Federal minimum wage only - No state updates',
    'Hawaii': 'Updates annually January 1st',
    'Idaho': 'Federal minimum wage only - No state updates',
    'Illinois': 'Updates annually January 1st',
    'Indiana': 'Federal minimum wage only - No state updates',
    'Iowa': 'Federal minimum wage only - No state updates',
    'Kansas': 'Federal minimum wage only - No state updates',
    'Kentucky': 'Federal minimum wage only - No state updates',
    'Louisiana': 'Federal minimum wage only - No state updates',
    'Maine': 'Updates annually January 1st',
    'Maryland': 'Updates annually January 1st',
    'Massachusetts': 'Updates annually January 1st',
    'Michigan': 'Updates annually January 1st',
    'Minnesota': 'Updates annually August 1st',
    'Mississippi': 'Federal minimum wage only - No state updates',
    'Missouri': 'Updates annually January 1st',
    'Montana': 'Updates annually January 1st',
    'Nebraska': 'Updates annually January 1st',
    'Nevada': 'Updates annually January 1st',
    'New Hampshire': 'Federal minimum wage only - No state updates',
    'New Jersey': 'Updates annually January 1st',
    'New Mexico': 'Updates annually January 1st',
    'New York': 'Updates annually December 31st (effective January 1st)',
    'North Carolina': 'Federal minimum wage only - No state updates',
    'North Dakota': 'Federal minimum wage only - No state updates',
    'Ohio': 'Updates annually January 1st',
    'Oklahoma': 'Federal minimum wage only - No state updates',
    'Oregon': 'Updates annually January 1st',
    'Pennsylvania': 'Federal minimum wage only - No state updates',
    'Rhode Island': 'Updates annually January 1st',
    'South Carolina': 'Federal minimum wage only - No state updates',
    'South Dakota': 'Updates annually January 1st',
    'Tennessee': 'Federal minimum wage only - No state updates',
    'Texas': 'Federal minimum wage only - No state updates',
    'Utah': 'Federal minimum wage only - No state updates',
    'Vermont': 'Updates annually January 1st',
    'Virginia': 'Federal minimum wage only - No state updates',
    'Washington': 'Updates annually January 1st',
    'West Virginia': 'Federal minimum wage only - No state updates',
    'Wisconsin': 'Federal minimum wage only - No state updates',
    'Wyoming': 'Federal minimum wage only - No state updates'
  };

  const getEnhancedGuidance = (cat, info, stateName) => {
    const stateWageLinks = stateWageHourLinks[stateName] || { dept: 'dol.gov', wageComplaint: 'dol.gov/agencies/whd/contact/complaints', link: 'dol.gov' };
    const stateBreakInfo = stateBreakLawsWithLinks[stateName] || { rule: 'Contact your state labor department', dept: 'dol.gov', complaint: 'dol.gov' };
    
    const base = {
      'Discrimination & Harassment': {
        fed: `Title VII prohibits discrimination based on race, color, religion, sex, and national origin. EEOC enforces. File within 180-300 days.`,
        immediate: [
          'START documenting TODAY - even during probation period',
          'Save discriminatory emails/texts to PERSONAL device NOW',
          'Note witnesses and exact dates while memory is fresh',
          'Take screenshots of messages before they disappear'
        ],
        laws: [
          'Title VII (Civil Rights Act) - Cannot fire for race, sex, religion, national origin',
          'State Civil Rights Act - Additional state protections',
          'EEOC Enforcement - Federal investigation authority',
          'Retaliation Protection - Cannot fire you for complaining'
        ],
        deadlines: [
          'EEOC Complaint: 180 days (300 days in states with agencies)',
          'State Complaint: Varies by state (usually 365 days)',
          'File ASAP - Evidence disappears quickly'
        ],
        redFlags: [
          'Sudden negative reviews after reporting discrimination',
          'Different treatment than coworkers after complaint',
          'Excluded from meetings/projects after speaking up',
          'Fabricated write-ups shortly after protected activity'
        ],
        tips: ['Document each incident with date, time, location, details, witnesses', 'Compare treatment to similarly situated employees', 'Keep copies of discriminatory communications', 'File with state and EEOC'],
        links: [
          { t: 'File EEOC Charge', u: 'https://publicportal.eeoc.gov/Portal/Login.aspx' },
          { t: 'State Civil Rights', u: `https://${info.hr}` }
        ]
      },
      'Wage & Hour / Minimum Wage': {
        fed: `FLSA: Federal min $7.25/hr, overtime 1.5x. ${stateName} min: $${info.wage}/hr. OT: ${info.ot}. Final paycheck due: ${info.pay}.`,
        immediate: [
          'START tracking hours TODAY in personal log with start/end times',
          'Take photos of timeclock entries before they can be altered',
          'Save ALL paystubs immediately - compare to actual hours',
          'Calculate what you SHOULD be paid vs what you received'
        ],
        laws: [
          `Fair Labor Standards Act (FLSA) - Federal overtime protections`,
          `${stateName} Wage Laws - Minimum wage $${info.wage}/hr`,
          `${stateName} Wage Update Schedule - ${stateWageUpdateSchedules[stateName]}`,
          `${stateName} Overtime Rules - ${getStateOvertimeRules(stateName)}`,
          `${stateName} Final Paycheck Law - Final pay due: ${info.pay}`,
          `Anti-Retaliation - Cannot fire for wage complaints`,
          `Right to Back Pay - Can recover unpaid wages plus damages`
        ],
        deadlines: [
          `Final paycheck deadline in ${stateName}: ${info.pay}`,
          'DOL Complaint: 2-3 years from violation',
          'State Wage Claim: Varies by state',
          'Act quickly - statute of limitations applies'
        ],
        redFlags: [
          'Employer altering your time records',
          'Forced to work off the clock',
          'Misclassified as exempt to avoid overtime',
          'Threatened for discussing wages with coworkers',
          'Late or incomplete final paycheck',
          'Not paying required overtime for your state'
        ],
        tips: [`${stateName} min wage: $${info.wage}/hr`, `${stateName} overtime rules: ${getStateOvertimeRules(stateName)}`, `Final pay due: ${info.pay}`, 'Keep daily time records', 'Save all paystubs', 'Document misclassification', 'File with state and federal'],
        links: [
          { t: `${stateName} Wage & Hour Complaint`, u: `https://${stateWageLinks.wageComplaint}` },
          { t: `${stateName} Labor Department`, u: `https://${stateWageLinks.dept}` },
          { t: 'Federal DOL Wage Complaint', u: 'https://www.dol.gov/agencies/whd/contact/complaints' }
        ]
      },
      'Unemployment Claims': {
        fed: `File within ${info.weeks} weeks of termination. Benefits: $${info.uiMin}-$${info.uiMax}/week for up to ${info.weeks} weeks.`,
        immediate: ['File TODAY', 'Gather employment dates and pay info', 'Document reason for separation', 'Appeal any denial'],
        laws: ['Unemployment Insurance Act', 'CARES Act provisions', 'Extended benefits available'],
        deadlines: [`File within ${info.weeks} weeks of job loss`, 'Appeal within 30 days', 'Employer must respond within 10 days'],
        redFlags: ['Employer contests claim', 'No documentation provided', 'Delay in receiving benefits'],
        tips: ['File immediately after separation', 'Be honest about circumstances', 'Keep all correspondence', 'Report work activities'],
        links: [
          { t: 'Apply for Unemployment', u: `https://${info.ui}` },
          { t: 'Appeal Benefits', u: 'https://www.dol.gov/agencies/eta/unemployment-insurance/state-agencies' }
        ]
      },
      'Break & Lunch Laws': {
        fed: `${stateBreakInfo.rule} Federal baseline: Short breaks (5-20 min) are PAID. Meal breaks can be unpaid if completely free to leave.`,
        immediate: ['Know your state rules', 'Document breaks taken', 'Report violations immediately', 'Request written policies', 'Take screenshots of policies'],
        laws: ['State break laws', 'Federal baseline protections', 'Pay requirements for short breaks', 'Meal break policies', 'Nursing mother protections'],
        deadlines: ['Report violation to employer first', 'File complaint within 30-180 days (state dependent)', 'Act quickly - evidence disappears'],
        redFlags: ['Forced to work through breaks', 'Unpaid break deductions from pay', 'Pressure to skip breaks', 'No break policy provided', 'Inconsistent break enforcement'],
        tips: ['Document each break not taken', 'Federal: Breaks <20 min are paid', 'Meals can be unpaid if duty-free', 'Know your state law specifically', 'Keep written documentation'],
        links: [
          { t: `${stateName} Break Laws & Complaint`, u: `https://${stateBreakInfo.complaint}` },
          { t: `${stateName} Labor Department`, u: `https://${stateBreakInfo.dept}` },
          { t: 'Federal Break Laws Info', u: 'https://www.dol.gov/agencies/whd/breaks' },
          { t: 'Federal DOL Complaint', u: 'https://www.dol.gov/agencies/whd/contact/complaints' }
        ]
      },
      'Discipline / Performance': {
        fed: 'At-will employment allows discipline for any non-illegal reason. Document performance issues and ensure consistency.',
        immediate: ['Request written policies', 'Ask for written feedback', 'Request explanation of discipline', 'Keep copies of all communications'],
        laws: ['At-will employment doctrine', 'Anti-discrimination in discipline', 'Anti-retaliation protections'],
        deadlines: ['Document same day', 'Request explanation within 5 days'],
        redFlags: ['Inconsistent discipline', 'Discipline after protected activity', 'Different standards for protected groups'],
        tips: ['Ask for everything in writing', 'Request specific examples', 'Keep performance evaluations', 'Document good work'],
        links: [
          { t: 'Employee Rights', u: 'https://www.dol.gov/agencies/whd' },
          { t: 'File Complaint', u: 'https://www.eeoc.gov/filing-charge-discrimination' }
        ]
      },
      'Retaliation Awareness': {
        fed: 'Protected activity retaliation is illegal under Title VII, FLSA, OSHA, NLRA, and state laws.',
        immediate: ['Document protected activity', 'Save proof of adverse action', 'Note timeline - 90 days is presumed illegal', 'Report in writing to HR'],
        laws: ['Title VII Anti-Retaliation', 'OSHA Anti-Retaliation', 'FLSA Anti-Retaliation', 'NLRA Anti-Retaliation'],
        deadlines: ['OSHA: 30 days', 'EEOC: 180-300 days', 'File immediately'],
        redFlags: ['Negative review after complaint', 'Termination after protected activity', 'Schedule cuts or demotion', 'Exclusion from projects'],
        tips: ['Document all communications', 'Keep records of treatment changes', 'Report promptly'],
        links: [
          { t: 'OSHA Whistleblower', u: 'https://www.osha.gov/workers/file-whistleblower-complaint' },
          { t: 'EEOC Retaliation', u: 'https://www.eeoc.gov/retaliation' }
        ]
      },
      'ADA / Workplace Accommodations': {
        fed: 'ADA requires reasonable accommodations for known disabilities.',
        immediate: ['Request accommodation in writing', 'Provide medical documentation', 'Specify needed accommodation', 'Request interactive process'],
        laws: ['Americans with Disabilities Act', 'Reasonable Accommodation requirement', 'Medical confidentiality', 'Anti-Retaliation protection'],
        deadlines: ['Request ASAP', 'Employer response: 5-10 days', 'EEOC complaint: 180-300 days'],
        redFlags: ['Refusal without reason', 'Adverse action after request', 'Shared medical info', 'Exclusion from benefits'],
        tips: ['Common: flexible schedule, remote work, ergonomic equipment', 'Get everything in writing', 'Keep documentation secure'],
        links: [
          { t: 'ADA Info', u: 'https://www.eeoc.gov/disabilities' },
          { t: 'File ADA Complaint', u: 'https://www.eeoc.gov/how-file-charge-employment-discrimination' }
        ]
      },
      'FMLA / Leave Awareness': {
        fed: 'FMLA provides 12 weeks unpaid leave per year for serious health, family, or military reasons.',
        immediate: ['Check FMLA coverage', 'Provide medical certification', 'Request leave in writing', 'Keep all paperwork'],
        laws: ['Family and Medical Leave Act', 'Job protection guarantee', 'Benefits continuation'],
        deadlines: ['30 days notice for foreseeable leave', 'Medical cert: 15 days', 'FMLA complaint: 2-3 years'],
        redFlags: ['Denied FMLA leave', 'Improper counting', 'Different treatment after return', 'Insurance cancelled'],
        tips: ['12 weeks per 12-month period', 'Both paid and unpaid can count', 'Medical cert may be required'],
        links: [
          { t: 'FMLA Info', u: 'https://www.dol.gov/agencies/whd/fmla' },
          { t: 'File Complaint', u: 'https://www.dol.gov/agencies/whd/contact/complaints' }
        ]
      },
      'OSHA / Workplace Safety': {
        fed: 'OSHA requires safe workplaces and protects safety whistleblowers.',
        immediate: ['Report hazard in writing', 'Request OSHA inspection', 'Document with photos', 'Never work in imminent danger'],
        laws: ['OSHA Act', 'Whistleblower protection', 'Right to refuse unsafe work'],
        deadlines: ['Report to employer first', 'OSHA inspection: 5 days', 'Whistleblower complaint: 30 days'],
        redFlags: ['Ignored safety reports', 'Retaliation after report', 'No PPE provided', 'Pressure to not report'],
        tips: ['You can refuse imminent danger', 'Request inspection anonymously', 'Keep all communications'],
        links: [
          { t: 'Request OSHA Inspection', u: 'https://www.osha.gov/workers/file-complaint' },
          { t: 'Whistleblower Protection', u: 'https://www.osha.gov/workers' }
        ]
      },
      'Workers Compensation': {
        fed: 'Workers comp covers work-related injuries and illnesses. Report injury immediately.',
        immediate: ['Report injury to supervisor', 'Seek medical treatment', 'File workers comp claim', 'Document circumstances'],
        laws: ['Workers Compensation Act', 'Medical coverage guarantee', 'Wage replacement'],
        deadlines: ['Report within 24-48 hours', 'Claim filing varies by state', 'File immediately'],
        redFlags: ['Claim denied without reason', 'Pressure to not report', 'Retaliation after filing'],
        tips: ['Report immediately', 'Get witness statements', 'Keep medical records', 'Know your benefits'],
        links: [
          { t: 'Workers Comp Info', u: 'https://www.dol.gov/agencies/owcp' },
          { t: 'File Claim', u: 'https://www.dol.gov/agencies/owcp/how-file-claim' }
        ]
      },
      'Whistleblower Protections': {
        fed: 'Federal and state laws protect employees who report illegal activities or safety violations.',
        immediate: ['Report to appropriate agency', 'Document the illegal activity', 'Keep communications', 'Expect potential retaliation'],
        laws: ['Sarbanes-Oxley Act', 'Dodd-Frank Act', 'Whistleblower Protection Act', 'State whistleblower laws'],
        deadlines: ['Report within specific timeframes per law', 'File complaint if retaliated against'],
        redFlags: ['Termination after reporting', 'Demotion or discipline', 'Negative references', 'Hostile work environment'],
        tips: ['Report to appropriate agency', 'Keep detailed records', 'Consult attorney', 'Know protections'],
        links: [
          { t: 'OSC Whistleblower', u: 'https://www.osc.gov' },
          { t: 'File Complaint', u: 'https://www.osha.gov/whistleblowers' }
        ]
      },
      'Union Rights & Formation': {
        fed: 'NLRA protects ALL employees rights to organize, join unions, discuss wages. Employers cannot threaten, interrogate, promise, spy.',
        immediate: [
          'Know your rights - You CAN discuss wages legally',
          'Document ANY threats about union activity',
          'Contact NLRB immediately if employer interferes',
          'Connect with union organizers in your area TODAY'
        ],
        laws: [
          'National Labor Relations Act (NLRA) - Protects organizing',
          'Section 7 Rights - Can discuss wages and conditions',
          'TIPS Violations - Employer cannot Threaten, Interrogate, Promise, Spy',
          'Unfair Labor Practice - Can file charges against employer'
        ],
        deadlines: [
          'ULP Charge: Within 6 months of violation',
          'Union Election: NLRB oversees process',
          'Act fast - retaliation often immediate'
        ],
        redFlags: [
          'Employer holds captive audience meetings against unions',
          'Threats of closing facility if union forms',
          'Surveillance of union organizing activities',
          'Sudden firings of union supporters'
        ],
        tips: ['Legal right to discuss wages', 'Employers cannot retaliate', 'Contact NLRB to learn process', 'Document threats', 'File ULP charge if needed'],
        links: [
          { t: 'NLRB Rights', u: 'https://www.nlrb.gov/about-nlrb/rights-we-protect/your-rights/employee-rights' },
          { t: 'Form a Union', u: 'https://aflcio.org/formaunion' }
        ]
      },
      'Federal Contract Jobs / Prevailing Wage': {
        fed: 'Federal contractors must pay prevailing wage rates set by Department of Labor.',
        immediate: ['Request wage determination', 'Verify contractor status', 'Check posting', 'Report violations'],
        laws: ['Davis-Bacon Act', 'Service Contract Act', 'FLSA applies'],
        deadlines: ['DOL Complaint: 2-3 years', 'Report immediately'],
        redFlags: ['No wage disclosure', 'Paid below prevailing', 'Forced off-clock', 'Retaliation'],
        tips: ['Wages can be 1.5-2x minimum', 'Applies to union and non-union', 'Can recover damages'],
        links: [
          { t: 'Prevailing Wage Info', u: 'https://www.dol.gov/agencies/whd/government-contracts/prevailing-wage' },
          { t: 'File Complaint', u: 'https://www.dol.gov/agencies/whd/contact/complaints' }
        ]
      },
      'Workplace Poster Requirements': {
        fed: 'Employers must display posters about worker rights and protections.',
        immediate: ['Review required posters', 'Check common areas', 'Report missing posters', 'Take photos'],
        laws: ['FLSA posting requirement', 'OSHA posting requirement', 'EEOC posting requirement'],
        deadlines: ['Employer responsibility', 'Must post before hiring'],
        redFlags: ['No wage poster', 'OSHA missing', 'EEOC missing', 'Not employee accessible'],
        tips: ['Posters are free', 'Multiple may be required', 'Missing indicates compliance issues'],
        links: [
          { t: 'OSHA Posters', u: 'https://www.osha.gov/posters' },
          { t: 'EEOC Posters', u: 'https://www.eeoc.gov/publications' }
        ]
      },
      'Documentation Practices': {
        fed: 'Document incidents, feedback, and policy violations to protect yourself.',
        immediate: ['Request handbook and policies', 'Copy all communications', 'Document accomplishments', 'Note negative feedback'],
        laws: ['Transparency requirements', 'Anti-Retaliation protection', 'Time record requirements'],
        deadlines: ['Document same day', 'Keep records securely', 'Preserve evidence'],
        redFlags: ['Refused to provide handbook', 'No written reviews', 'Sudden documentation after activity', 'Records altered'],
        tips: ['Use email for documentation', 'Keep personal folder', 'Document date/time/people', 'Take screenshots'],
        links: [
          { t: 'Documentation Guide', u: 'https://www.worklawyers.org' },
          { t: 'Legal Resources', u: 'https://www.dol.gov' }
        ]
      },
      'Exit / Transition Planning': {
        fed: 'Protect your rights when leaving employment regarding pay, leave, and benefits.',
        immediate: ['Request final pay calculation', 'Verify leave payout', 'Apply for unemployment', 'Understand COBRA'],
        laws: ['Final Pay laws', 'Accrued Leave payout', 'COBRA continuation'],
        deadlines: ['Final pay: 30 days', 'COBRA election: 60 days', 'UI filing: 7-14 days'],
        redFlags: ['Late or short final check', 'Leave not paid', 'No COBRA notice', 'Negative references'],
        tips: ['Request documentation', 'Keep employment file', 'File UI promptly', 'Review non-competes'],
        links: [
          { t: 'Final Pay Info', u: 'https://www.dol.gov/agencies/whd/contact/complaints' },
          { t: 'COBRA Info', u: 'https://www.dol.gov/agencies/ebsa/cobra' }
        ]
      }
    };

    return base[cat] || {
      fed: 'Federal and state laws provide worker protections.',
      immediate: ['Document all incidents TODAY', 'Keep copies of all communications', 'Note witnesses and dates', 'Act quickly - deadlines apply'],
      laws: ['Federal employment protections apply', 'State laws may provide additional rights', 'Anti-retaliation protections exist', 'Legal remedies available'],
      deadlines: ['Varies by violation type', 'Act quickly to preserve rights', 'Consult attorney for specifics'],
      redFlags: ['Sudden policy changes targeting you', 'Excluded from communications', 'Fabricated performance issues', 'Hostile work environment'],
      tips: ['Document with dates', 'Keep all communications', 'Consult legal counsel', 'Know state rights', 'File within deadlines'],
      links: [{ t: 'DOL', u: 'https://www.dol.gov' }, { t: 'State Labor', u: `https://${info.labor}` }]
    };
  };

  const generate = () => {
    if (!isSubscribed) {
      alert('Please subscribe to access full guidance');
      return;
    }
    if (!state || !category) {
      alert('Please select state and category');
      return;
    }
    const info = getStateData(state);
    const g = getEnhancedGuidance(category, info, state);
    setResult({ state, category, ...g, info });
    setShowResult(true);
  };

  const DemoExample = () => (
    <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mb-8">
      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
          ✨ PREVIEW: See What You Get
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Example: Florida Worker</h2>
        <p className="text-gray-600">See the comprehensive guidance you'll receive for every situation</p>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">Florida</div>
          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Wage & Hour</div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded mb-4">
          <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />YOUR EMPLOYMENT STATUS
          </h3>
          <div className="text-amber-800 text-sm space-y-1">
            <p>• <strong>At-Will State:</strong> Yes - employer can terminate for any legal reason</p>
            <p>• <strong>Right-to-Work:</strong> Yes - cannot be forced to join union</p>
            <p>• <strong>Probation Period:</strong> Still protected from discrimination/retaliation</p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded mb-4">
          <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
            <Zap className="w-4 h-4" />DO THIS IMMEDIATELY
          </h3>
          <ul className="text-red-800 text-sm space-y-2">
            <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">1.</span><span>START tracking hours TODAY in personal log</span></li>
            <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">2.</span><span>Take photos of timeclock before they can be altered</span></li>
            <li className="flex items-start gap-2"><span className="font-bold flex-shrink-0">3.</span><span>Save ALL paystubs - compare to actual hours</span></li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded mb-4">
          <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
            <Scale className="w-4 h-4" />LAWS THAT PROTECT YOU
          </h3>
          <ul className="text-green-800 text-sm space-y-1">
            <li>✓ FLSA - Federal overtime protections</li>
            <li>✓ Florida Wage Laws - Minimum $14.00/hr</li>
            <li>✓ Anti-Retaliation - Cannot fire for complaints</li>
          </ul>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4" />CRITICAL DEADLINES
          </h3>
          <p className="text-blue-800 text-sm">• DOL Complaint: 2-3 years from violation</p>
          <p className="text-blue-800 text-sm">• Act quickly - statute of limitations applies</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-6 rounded-lg mb-6">
        <h3 className="text-xl font-bold text-red-900 mb-2">Don't Let Your Employer Win</h3>
        <p className="text-red-800">Get the knowledge you need to protect yourself and avoid costly attorney fees. With the right information at the right time, you can take action before it's too late.</p>
      </div>

      <div className="text-center space-y-4">
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-4 mb-4">
          <p className="text-yellow-900 font-semibold text-sm mb-2">📋 Before You Subscribe</p>
          <p className="text-yellow-800 text-xs">By subscribing, you acknowledge that this toolkit provides EDUCATIONAL INFORMATION ONLY and is NOT legal advice. You understand that employment law is complex and varies by situation. You agree to consult qualified attorneys for legal guidance specific to your case. This toolkit is a resource to help you understand your rights - not a replacement for professional legal counsel.</p>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <CheckCircle className="w-6 h-6 text-green-600" />
            <h3 className="text-2xl font-bold text-gray-800">Get Full Access</h3>
          </div>
          <p className="text-gray-700 mb-4">See what you get:</p>
          <ul className="text-gray-700 mb-4 space-y-2 text-sm">
            <li>✓ All 50 States - Payroll & HR Laws</li>
            <li>✓ 16 Employment Law Categories</li>
            <li>✓ Federal Employment Laws & Protections</li>
            <li>✓ State-Specific Wage & Break Laws</li>
            <li>✓ Immediate Action Steps for Each Situation</li>
            <li>✓ Critical Deadlines - Act Fast!</li>
            <li>✓ Red Flags to Watch For</li>
            <li>✓ Direct State & Federal Complaint Links</li>
          </ul>
          <div className="text-4xl font-bold text-indigo-600 mb-2">$4.99</div>
          <p className="text-gray-600 mb-4">for 6 months</p>
          <button onClick={() => { setShowDemo(false); setIsSubscribed(true); }} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
            <CreditCard className="w-5 h-5" />Subscribe Now - Get Instant Access
          </button>
          <p className="text-xs text-gray-500 mt-3">Cancel anytime</p>
        </div>
      </div>
    </div>
  );

  if (showDemo) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 mb-4">
            <p className="text-red-900 font-bold text-sm">⚠️ EDUCATIONAL INFORMATION ONLY - NOT LEGAL ADVICE</p>
            <p className="text-red-800 text-xs mt-2">This toolkit provides general educational information about employment laws and worker rights. It is NOT a substitute for legal advice from a qualified attorney. Always consult with a licensed employment lawyer for case-specific guidance. Use the direct government links provided to contact official agencies and legal professionals.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-indigo-600" />
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Employee Knowledge Toolkit</h1>
            </div>
            <p className="text-gray-600 text-lg">Know your rights. Protect yourself. Take action.</p>
          </div>
          <DemoExample />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-100 border-2 border-red-500 rounded-lg p-4 mb-4">
          <p className="text-red-900 font-bold text-sm">⚠️ EDUCATIONAL INFORMATION ONLY - NOT LEGAL ADVICE</p>
          <p className="text-red-800 text-xs mt-2">This toolkit provides general educational information about employment laws and worker rights. It is NOT a substitute for legal advice from a qualified attorney. Always consult with a licensed employment lawyer for case-specific guidance. Use the direct government links provided to contact official agencies and legal professionals.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-8 h-8 text-indigo-600" />
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Employee Knowledge Toolkit</h1>
            </div>
            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
              ✓ Premium
            </div>
          </div>
        </div>

        {!showResult ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
              <p className="text-blue-900 font-semibold text-sm mb-2">ℹ️ How This Works</p>
              <p className="text-blue-800 text-xs">Select your state and the employment law category you need help with. You'll receive general educational information with direct links to official government agencies. Remember: This is educational information only, not legal advice. Always consult an attorney for case-specific guidance.</p>
            </div>
            <div className="mb-8">
              <label className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                Select Your State
              </label>
              <div className="relative">
                <select value={state} onChange={(e) => setState(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 appearance-none cursor-pointer hover:border-indigo-300 focus:border-indigo-500 focus:outline-none">
                  <option value="">Choose state...</option>
                  {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-center gap-2 text-xl font-semibold text-gray-800 mb-3">
                <span className="bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                Select Topic
              </label>
              <div className="relative">
                <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg text-gray-800 appearance-none cursor-pointer hover:border-indigo-300 focus:border-indigo-500 focus:outline-none">
                  <option value="">Choose topic...</option>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            <button onClick={generate} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5" />
              Get Guidance
            </button>
          </div>
        ) : result ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="mb-6 bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
              <h2 className="text-2xl font-bold text-indigo-900 mb-2">{result.state} - {result.category}</h2>
              <p className="text-indigo-800 font-medium">{result.fed}</p>
            </div>

            <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />DO THIS IMMEDIATELY
              </h3>
              <ul className="space-y-2">
                {result.immediate.map((action, i) => (
                  <li key={i} className="text-red-800 text-sm flex items-start gap-2">
                    <span className="font-bold flex-shrink-0">{i + 1}.</span>
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 bg-green-50 border-l-4 border-green-400 p-4 rounded">
              <h3 className="font-semibold text-green-900 mb-3 flex items-center gap-2">
                <Scale className="w-5 h-5" />LAWS THAT PROTECT YOU
              </h3>
              <ul className="space-y-1">
                {result.laws.map((law, i) => (
                  <li key={i} className="text-green-800 text-sm">✓ {law}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />CRITICAL DEADLINES - ACT FAST
              </h3>
              <ul className="space-y-1">
                {result.deadlines.map((deadline, i) => (
                  <li key={i} className="text-blue-800 text-sm">• {deadline}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 bg-orange-50 border-l-4 border-orange-400 p-4 rounded">
              <h3 className="font-semibold text-orange-900 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />RED FLAGS - Watch For These
              </h3>
              <ul className="space-y-1">
                {result.redFlags.map((flag, i) => (
                  <li key={i} className="text-orange-800 text-sm">🚨 {flag}</li>
                ))}
              </ul>
            </div>

            <div className="mb-6 bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
              <h3 className="font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />Documentation Best Practices
              </h3>
              <ul className="space-y-2">
                {result.tips.map((tip, i) => (
                  <li key={i} className="text-purple-800 text-sm flex items-start gap-2">
                    <span className="text-purple-600 font-bold flex-shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded">
              <h3 className="font-semibold text-indigo-900 mb-3">Where to File Complaints & Get Help</h3>
              <div className="space-y-2">
                {result.links.map((link, i) => (
                  <a key={i} href={link.u} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-indigo-700 hover:text-indigo-900 font-medium text-sm bg-white px-3 py-2 rounded hover:bg-indigo-100 transition-colors">
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />{link.t}
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-6 bg-red-50 border-l-4 border-red-400 p-4 rounded">
              <p className="text-red-900 font-bold text-sm mb-2">⚠️ IMPORTANT LEGAL DISCLAIMER</p>
              <p className="text-red-800 text-xs mb-2"><strong>Educational Information Only.</strong> This toolkit provides general educational information about employment laws, worker rights, and government resources. It is NOT legal advice and is NOT a substitute for consulting with a qualified, licensed employment attorney.</p>
              <p className="text-red-800 text-xs mb-2"><strong>No Attorney-Client Relationship.</strong> Using this toolkit does not create an attorney-client relationship. You should not rely solely on this information for legal decisions affecting your employment.</p>
              <p className="text-red-800 text-xs mb-2"><strong>Consult an Attorney.</strong> Employment law is complex and varies significantly by state, industry, and individual circumstances. Always consult with a licensed employment attorney licensed in your state for advice specific to your situation.</p>
              <p className="text-red-800 text-xs mb-2"><strong>External Links.</strong> This toolkit provides links to official government agencies, EEOC, DOL, and state labor departments. These agencies can provide accurate guidance and accept complaints. Contact them directly for official information.</p>
              <p className="text-red-800 text-xs"><strong>Link Disclaimer.</strong> This toolkit is not responsible for broken, outdated, or changed links from federal or state government websites. Government agencies frequently update their websites, reorganize pages, or experience downtime. If you encounter a broken link, please search the relevant government agency's website directly or call their main office for current contact information and complaint filing procedures.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={() => { setState(''); setCategory(''); setResult(null); setShowResult(false); }} className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                <RefreshCw className="w-5 h-5" />Ask Another Question
              </button>
              <button onClick={() => { setState(''); setCategory(''); setResult(null); setShowResult(false); }} className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                <Home className="w-5 h-5" />Return to Home
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default EmployeeToolkit;
