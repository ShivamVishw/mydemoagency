import { notFound } from 'next/navigation';
import leads from '../../../data/leads.json';
import RealEstateTemplate from '../../../components/templates/RealEstateTemplate';
import SalonTemplate from '../../../components/templates/SalonTemplate';
import HotelTemplate from '../../../components/templates/HotelTemplate';
import EdTechTemplate from '../../../components/templates/EdTechTemplate';
import Watermark from '../../../components/Watermark';

export default async function DynamicDemoPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const business = leads.find((item) => item.slug === slug);

  if (!business) {
    return notFound();
  }

  // Choose the correct template based on the category
  const renderTemplate = () => {
    switch (business.category) {
      case 'Real Estate':
        return <RealEstateTemplate businessName={business.name} />;
      case 'Salon':
        return <SalonTemplate businessName={business.name} />;
      case 'Hotel':
        return <HotelTemplate businessName={business.name} />;
      case 'EdTech':
        return <EdTechTemplate businessName={business.name} />;
      default:
        // Fallback just in case
        return <RealEstateTemplate businessName={business.name} />;
    }
  };

  return (
    <div className="relative pb-24">
      {renderTemplate()}
      <Watermark />
    </div>
  );
}