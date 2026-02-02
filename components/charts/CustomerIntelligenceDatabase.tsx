'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerNameCompanyName: string
  typeOfBusiness: string
  primaryFoodProductType: string
  facilityType: string
  installedSortingCapacity: string
  numberOfSortingLines: number
  // Contact Details
  keyContactPerson: string
  designationRole: string
  emailAddress: string
  phoneWhatsAppNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Procurement & Purchase Metrics (for Proposition 2 & 3)
  annualSortingMachineProcurementBudget: string
  preferredEquipmentModel: string
  averageProcurementLeadTime: string
  replacementCycleOfMachinery: string
  // Digital & Technology Adoption Metrics (for Proposition 3)
  levelOfAutomation: string
  aiOrMachineVisionAdoption: string
  roboticsAdoptionLevel: string
  predictiveMaintenanceTools: string
  remoteMonitoringCapability: string
  // Future Demand & Expansion Metrics (for Proposition 3)
  plannedCapacityExpansion: string
  expectedNewEquipmentPurchases: string
  newProductLaunchPlans: string
  newFacilityConstruction: string
  // CMI Insights (for Proposition 3)
  customerBenchmarkingSummary: string
  additionalComments: string
}

// Sample data - Replace with your actual data
const sampleCustomerData: CustomerData[] = [
  {
    customerNameCompanyName: 'ABC Fresh Produce Ltd',
    typeOfBusiness: 'Food Processor',
    primaryFoodProductType: 'Fruits & Vegetables',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '10 tons/hour',
    numberOfSortingLines: 3,
    keyContactPerson: 'John Smith',
    designationRole: 'Operations Manager',
    emailAddress: 'john.smith@abcfresh.com',
    phoneWhatsAppNumber: '+1 234-567-8900',
    linkedInProfile: 'linkedin.com/in/johnsmith',
    websiteUrl: 'www.abcfresh.com',
    annualSortingMachineProcurementBudget: '$500,000',
    preferredEquipmentModel: 'OEM Direct',
    averageProcurementLeadTime: '12 weeks',
    replacementCycleOfMachinery: '5 years',
    levelOfAutomation: 'Semi Automatic',
    aiOrMachineVisionAdoption: 'Yes',
    roboticsAdoptionLevel: 'Medium',
    predictiveMaintenanceTools: 'Low',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '25%',
    expectedNewEquipmentPurchases: '2 new sorting lines',
    newProductLaunchPlans: 'Premium organic line',
    newFacilityConstruction: 'Yes',
    customerBenchmarkingSummary: 'High potential customer',
    additionalComments: 'Follow up in Q2 2024'
  },
  {
    customerNameCompanyName: 'Global Grains Co',
    typeOfBusiness: 'Agribusiness Operator',
    primaryFoodProductType: 'Grains & Pulses',
    facilityType: 'Sorting Center',
    installedSortingCapacity: '15 tons/hour',
    numberOfSortingLines: 5,
    keyContactPerson: 'Sarah Johnson',
    designationRole: 'Plant Manager',
    emailAddress: 's.johnson@globalgrains.com',
    phoneWhatsAppNumber: '+1 345-678-9012',
    linkedInProfile: 'linkedin.com/in/sarahjohnson',
    websiteUrl: 'www.globalgrains.com',
    annualSortingMachineProcurementBudget: '$750,000',
    preferredEquipmentModel: 'Distributor',
    averageProcurementLeadTime: '10 weeks',
    replacementCycleOfMachinery: '7 years',
    levelOfAutomation: 'Automatic',
    aiOrMachineVisionAdoption: 'Yes',
    roboticsAdoptionLevel: 'High',
    predictiveMaintenanceTools: 'Medium',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '30%',
    expectedNewEquipmentPurchases: '3 new optical sorters',
    newProductLaunchPlans: 'Organic pulse line',
    newFacilityConstruction: 'No',
    customerBenchmarkingSummary: 'Strategic account',
    additionalComments: 'Interested in AI-powered sorting'
  },
  {
    customerNameCompanyName: 'Premium Nuts Ltd',
    typeOfBusiness: 'Food Processor',
    primaryFoodProductType: 'Nuts & Dates',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '5 tons/hour',
    numberOfSortingLines: 2,
    keyContactPerson: 'Michael Chen',
    designationRole: 'Technical Director',
    emailAddress: 'm.chen@premiumnuts.com',
    phoneWhatsAppNumber: '+1 456-789-0123',
    linkedInProfile: 'linkedin.com/in/michaelchen',
    websiteUrl: 'www.premiumnuts.com',
    annualSortingMachineProcurementBudget: '$300,000',
    preferredEquipmentModel: 'OEM Direct',
    averageProcurementLeadTime: '14 weeks',
    replacementCycleOfMachinery: '6 years',
    levelOfAutomation: 'Semi Automatic',
    aiOrMachineVisionAdoption: 'No',
    roboticsAdoptionLevel: 'Low',
    predictiveMaintenanceTools: 'Low',
    remoteMonitoringCapability: 'No',
    plannedCapacityExpansion: '15%',
    expectedNewEquipmentPurchases: '1 color sorter',
    newProductLaunchPlans: 'Premium almond range',
    newFacilityConstruction: 'Yes',
    customerBenchmarkingSummary: 'Medium potential',
    additionalComments: 'Budget constraints in 2024'
  },
  {
    customerNameCompanyName: 'FreshPack Solutions',
    typeOfBusiness: 'Packager',
    primaryFoodProductType: 'Fruits & Vegetables',
    facilityType: 'Packaging Center',
    installedSortingCapacity: '8 tons/hour',
    numberOfSortingLines: 4,
    keyContactPerson: 'Emily Rodriguez',
    designationRole: 'Production Head',
    emailAddress: 'e.rodriguez@freshpack.com',
    phoneWhatsAppNumber: '+1 567-890-1234',
    linkedInProfile: 'linkedin.com/in/emilyrodriguez',
    websiteUrl: 'www.freshpack.com',
    annualSortingMachineProcurementBudget: '$450,000',
    preferredEquipmentModel: 'Specialist',
    averageProcurementLeadTime: '16 weeks',
    replacementCycleOfMachinery: '5 years',
    levelOfAutomation: 'Automatic',
    aiOrMachineVisionAdoption: 'Yes',
    roboticsAdoptionLevel: 'Medium',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '20%',
    expectedNewEquipmentPurchases: 'Automated packaging line',
    newProductLaunchPlans: 'Ready-to-eat salads',
    newFacilityConstruction: 'No',
    customerBenchmarkingSummary: 'High potential',
    additionalComments: 'Looking for turnkey solutions'
  },
  {
    customerNameCompanyName: 'AgriDistribute Network',
    typeOfBusiness: 'Distributor',
    primaryFoodProductType: 'Grains & Pulses',
    facilityType: 'Sorting Center',
    installedSortingCapacity: '20 tons/hour',
    numberOfSortingLines: 6,
    keyContactPerson: 'David Martinez',
    designationRole: 'CEO',
    emailAddress: 'd.martinez@agridistribute.com',
    phoneWhatsAppNumber: '+1 678-901-2345',
    linkedInProfile: 'linkedin.com/in/davidmartinez',
    websiteUrl: 'www.agridistribute.com',
    annualSortingMachineProcurementBudget: '$1,200,000',
    preferredEquipmentModel: 'OEM Direct',
    averageProcurementLeadTime: '8 weeks',
    replacementCycleOfMachinery: '8 years',
    levelOfAutomation: 'Automatic',
    aiOrMachineVisionAdoption: 'Yes',
    roboticsAdoptionLevel: 'High',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '40%',
    expectedNewEquipmentPurchases: '4 high-speed sorters',
    newProductLaunchPlans: 'Quinoa and specialty grains',
    newFacilityConstruction: 'Yes',
    customerBenchmarkingSummary: 'Key strategic partner',
    additionalComments: 'Priority account - Q1 expansion'
  },
  {
    customerNameCompanyName: 'Organic Harvest Inc',
    typeOfBusiness: 'Food Processor',
    primaryFoodProductType: 'Fruits & Vegetables',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '12 tons/hour',
    numberOfSortingLines: 4,
    keyContactPerson: 'Lisa Anderson',
    designationRole: 'Quality Manager',
    emailAddress: 'l.anderson@organicharvest.com',
    phoneWhatsAppNumber: '+1 789-012-3456',
    linkedInProfile: 'linkedin.com/in/lisaanderson',
    websiteUrl: 'www.organicharvest.com',
    annualSortingMachineProcurementBudget: '$600,000',
    preferredEquipmentModel: 'Distributor',
    averageProcurementLeadTime: '11 weeks',
    replacementCycleOfMachinery: '6 years',
    levelOfAutomation: 'Semi Automatic',
    aiOrMachineVisionAdoption: 'Yes',
    roboticsAdoptionLevel: 'Medium',
    predictiveMaintenanceTools: 'Medium',
    remoteMonitoringCapability: 'No',
    plannedCapacityExpansion: '35%',
    expectedNewEquipmentPurchases: '2 optical sorters',
    newProductLaunchPlans: 'Frozen organic vegetables',
    newFacilityConstruction: 'Yes',
    customerBenchmarkingSummary: 'Growing segment leader',
    additionalComments: 'Sustainability focus'
  },
  {
    customerNameCompanyName: 'DatePro Middle East',
    typeOfBusiness: 'Food Processor',
    primaryFoodProductType: 'Nuts & Dates',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '7 tons/hour',
    numberOfSortingLines: 3,
    keyContactPerson: 'Ahmed Al-Rashid',
    designationRole: 'Operations Director',
    emailAddress: 'a.alrashid@datepro.ae',
    phoneWhatsAppNumber: '+971 50-123-4567',
    linkedInProfile: 'linkedin.com/in/ahmedalrashid',
    websiteUrl: 'www.datepro.ae',
    annualSortingMachineProcurementBudget: '$400,000',
    preferredEquipmentModel: 'OEM Direct',
    averageProcurementLeadTime: '15 weeks',
    replacementCycleOfMachinery: '7 years',
    levelOfAutomation: 'Automatic',
    aiOrMachineVisionAdoption: 'Yes',
    roboticsAdoptionLevel: 'High',
    predictiveMaintenanceTools: 'Medium',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '50%',
    expectedNewEquipmentPurchases: '3 date grading systems',
    newProductLaunchPlans: 'Premium Medjool dates',
    newFacilityConstruction: 'No',
    customerBenchmarkingSummary: 'Regional market leader',
    additionalComments: 'Expanding export capacity'
  },
  {
    customerNameCompanyName: 'VeggieWorks Corp',
    typeOfBusiness: 'Agribusiness Operator',
    primaryFoodProductType: 'Fruits & Vegetables',
    facilityType: 'Sorting Center',
    installedSortingCapacity: '18 tons/hour',
    numberOfSortingLines: 7,
    keyContactPerson: 'Robert Taylor',
    designationRole: 'VP Operations',
    emailAddress: 'r.taylor@veggieworks.com',
    phoneWhatsAppNumber: '+1 890-123-4567',
    linkedInProfile: 'linkedin.com/in/roberttaylor',
    websiteUrl: 'www.veggieworks.com',
    annualSortingMachineProcurementBudget: '$900,000',
    preferredEquipmentModel: 'Specialist',
    averageProcurementLeadTime: '9 weeks',
    replacementCycleOfMachinery: '5 years',
    levelOfAutomation: 'Automatic',
    aiOrMachineVisionAdoption: 'Yes',
    roboticsAdoptionLevel: 'High',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '45%',
    expectedNewEquipmentPurchases: '5 AI vision sorters',
    newProductLaunchPlans: 'Exotic vegetables, snack packs',
    newFacilityConstruction: 'Yes',
    customerBenchmarkingSummary: 'Innovation leader',
    additionalComments: 'Technology partnership opportunity'
  },
  {
    customerNameCompanyName: 'GrainMaster Foods',
    typeOfBusiness: 'Food Processor',
    primaryFoodProductType: 'Grains & Pulses',
    facilityType: 'Processing Plant',
    installedSortingCapacity: '25 tons/hour',
    numberOfSortingLines: 8,
    keyContactPerson: 'Jennifer Lee',
    designationRole: 'Plant Manager',
    emailAddress: 'j.lee@grainmaster.com',
    phoneWhatsAppNumber: '+1 901-234-5678',
    linkedInProfile: 'linkedin.com/in/jenniferlee',
    websiteUrl: 'www.grainmaster.com',
    annualSortingMachineProcurementBudget: '$1,500,000',
    preferredEquipmentModel: 'OEM Direct',
    averageProcurementLeadTime: '7 weeks',
    replacementCycleOfMachinery: '8 years',
    levelOfAutomation: 'Automatic',
    aiOrMachineVisionAdoption: 'Yes',
    roboticsAdoptionLevel: 'High',
    predictiveMaintenanceTools: 'High',
    remoteMonitoringCapability: 'Yes',
    plannedCapacityExpansion: '60%',
    expectedNewEquipmentPurchases: '6 multi-channel sorters',
    newProductLaunchPlans: 'Ancient grains, protein-rich',
    newFacilityConstruction: 'Yes',
    customerBenchmarkingSummary: 'Tier 1 customer',
    additionalComments: 'Largest facility expansion in region'
  },
  {
    customerNameCompanyName: 'NutriPack Industries',
    typeOfBusiness: 'Packager',
    primaryFoodProductType: 'Nuts & Dates',
    facilityType: 'Packaging Center',
    installedSortingCapacity: '6 tons/hour',
    numberOfSortingLines: 2,
    keyContactPerson: 'Carlos Mendez',
    designationRole: 'Facility Manager',
    emailAddress: 'c.mendez@nutripack.com',
    phoneWhatsAppNumber: '+1 012-345-6789',
    linkedInProfile: 'linkedin.com/in/carlosmendez',
    websiteUrl: 'www.nutripack.com',
    annualSortingMachineProcurementBudget: '$250,000',
    preferredEquipmentModel: 'Distributor',
    averageProcurementLeadTime: '13 weeks',
    replacementCycleOfMachinery: '6 years',
    levelOfAutomation: 'Manual',
    aiOrMachineVisionAdoption: 'No',
    roboticsAdoptionLevel: 'Low',
    predictiveMaintenanceTools: 'Low',
    remoteMonitoringCapability: 'No',
    plannedCapacityExpansion: '10%',
    expectedNewEquipmentPurchases: '1 basic sorter',
    newProductLaunchPlans: 'Trail mix varieties',
    newFacilityConstruction: 'No',
    customerBenchmarkingSummary: 'Growth potential',
    additionalComments: 'Entry-level automation interest'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Proposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              Customer Name/Company Name
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Type of Business</div>
              <div className="font-normal text-[10px] text-gray-600">(Food Processor, Agribusiness Operator, Packager, Distributor, Company)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Primary Food Product Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Fruits & Vegetables, Grains & Pulses, Nuts & Dates)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Facility Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Processing Plant, Sorting Center, Packaging Center, Packaging Center)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Installed Sorting Capacity</div>
              <div className="font-normal text-[10px] text-gray-600">(Tons per Hour)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              Number of Sorting Lines
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone/Whats App Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerNameCompanyName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.typeOfBusiness}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryFoodProductType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.facilityType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.installedSortingCapacity}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{customer.numberOfSortingLines}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designationRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneWhatsAppNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 2 Table - Customer Information + Contact Details + Procurement & Purchase Metrics
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#E8E4C9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Procurement & Purchase Metrics
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              Customer Name/Company Name
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Type of Business</div>
              <div className="font-normal text-[10px] text-gray-600">(Food Processor, Agribusiness Operator, Packager, Distributor, Company)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Primary Food Product Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Fruits & Vegetables, Grains & Pulses, Nuts & Dates)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Facility Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Processing Plant, Sorting Center, Packaging Center, Packaging Center)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Installed Sorting Capacity</div>
              <div className="font-normal text-[10px] text-gray-600">(Tons per Hour)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              Number of Sorting Lines
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone/Whats App Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
            {/* Procurement & Purchase Metrics */}
            <th className="bg-[#F5F5DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Annual Sorting Machine Procurement Budget (US$)</div>
            </th>
            <th className="bg-[#F5F5DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Preferred Equipment Model</div>
              <div className="font-normal text-[10px] text-gray-600">(OEM Direct, Distributor, Specialist)</div>
            </th>
            <th className="bg-[#F5F5DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Average Procurement Lead Time (Weeks)</div>
            </th>
            <th className="bg-[#F5F5DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Replacement Cycle of Machinery (Years)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerNameCompanyName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.typeOfBusiness}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryFoodProductType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.facilityType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.installedSortingCapacity}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{customer.numberOfSortingLines}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designationRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneWhatsAppNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              {/* Procurement & Purchase Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.annualSortingMachineProcurementBudget}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredEquipmentModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.averageProcurementLeadTime}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.replacementCycleOfMachinery}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Proposition 3 Table - All sections
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#E8C4A0] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={4} className="bg-[#E8E4C9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Procurement & Purchase Metrics
            </th>
            <th colSpan={5} className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Digital & Technology Adoption Metrics
            </th>
            <th colSpan={4} className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Future Demand & Expansion Metrics
            </th>
            <th colSpan={2} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              Customer Name/Company Name
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Type of Business</div>
              <div className="font-normal text-[10px] text-gray-600">(Food Processor, Agribusiness Operator, Packager, Distributor, Company)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Primary Food Product Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Fruits & Vegetables, Grains & Pulses, Nuts & Dates)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Facility Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Processing Plant, Sorting Center, Packaging Center, Packaging Center)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Installed Sorting Capacity</div>
              <div className="font-normal text-[10px] text-gray-600">(Tons per Hour)</div>
            </th>
            <th className="bg-[#FFF8DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              Number of Sorting Lines
            </th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[140px]">Phone/Whats App Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[130px]">Website URL</th>
            {/* Procurement & Purchase Metrics */}
            <th className="bg-[#F5F5DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Annual Sorting Machine Procurement Budget (US$)</div>
            </th>
            <th className="bg-[#F5F5DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Preferred Equipment Model</div>
              <div className="font-normal text-[10px] text-gray-600">(OEM Direct, Distributor, Specialist)</div>
            </th>
            <th className="bg-[#F5F5DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Average Procurement Lead Time (Weeks)</div>
            </th>
            <th className="bg-[#F5F5DC] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Replacement Cycle of Machinery (Years)</div>
            </th>
            {/* Digital & Technology Adoption Metrics */}
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Level of Automation</div>
              <div className="font-normal text-[10px] text-gray-600">(Manual, Semi Automatic, Automatic)</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>AI or Machine Vision Adoption</div>
              <div className="font-normal text-[10px] text-gray-600">(Yes/No)</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Robotics Adoption Level</div>
              <div className="font-normal text-[10px] text-gray-600">(Low, Medium, High)</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Predictive Maintenance Tools Adoption</div>
              <div className="font-normal text-[10px] text-gray-600">(Low, Medium, High)</div>
            </th>
            <th className="bg-[#E6E6FA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Remote Monitoring and Diagnostics Capability</div>
              <div className="font-normal text-[10px] text-gray-600">(Yes/No)</div>
            </th>
            {/* Future Demand & Expansion Metrics */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Planned Capacity Expansion in Next 3 Years</div>
              <div className="font-normal text-[10px] text-gray-600">(Percentage)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Expected New Equipment or System Purchases in 2026-2027</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>New Product Launch Plans</div>
              <div className="font-normal text-[10px] text-gray-600">(Premium, Organic, snacks, frozen, etc.)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>New Facility Construction Planned</div>
              <div className="font-normal text-[10px] text-gray-600">(Yes or No)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers, etc.)</div>
            </th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Additional Comments/Next steps by sales team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerNameCompanyName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.typeOfBusiness}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.primaryFoodProductType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.facilityType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.installedSortingCapacity}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black text-center">{customer.numberOfSortingLines}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designationRole}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneWhatsAppNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              {/* Procurement & Purchase Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.annualSortingMachineProcurementBudget}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredEquipmentModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.averageProcurementLeadTime}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.replacementCycleOfMachinery}</td>
              {/* Digital & Technology Adoption Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.levelOfAutomation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.aiOrMachineVisionAdoption}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.roboticsAdoptionLevel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.predictiveMaintenanceTools}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.remoteMonitoringCapability}</td>
              {/* Future Demand & Expansion Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.plannedCapacityExpansion}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.expectedNewEquipmentPurchases}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.newProductLaunchPlans}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.newFacilityConstruction}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarkingSummary}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Proposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Proposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Proposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
