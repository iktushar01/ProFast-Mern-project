import React from 'react';
import { 
  FaShippingFast, 
  FaTruck, 
  FaWarehouse, 
  FaMoneyBillWave, 
  FaBuilding, 
  FaExchangeAlt 
} from 'react-icons/fa';

const OurServices = () => {
    const services = [
        {
            "title": "Express & Standard Delivery",
            "description": "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
            "icon": <FaShippingFast className="w-8 h-8" />
        },
        {
            "title": "Nationwide Delivery",
            "description": "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
            "icon": <FaTruck className="w-8 h-8" />
        },
        {
            "title": "Fulfillment Solution",
            "description": "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
            "icon": <FaWarehouse className="w-8 h-8" />
        },
        {
            "title": "Cash on Home Delivery",
            "description": "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
            "icon": <FaMoneyBillWave className="w-8 h-8" />
        },
        {
            "title": "Corporate Service / Contract In Logistics",
            "description": "Customized corporate services which includes warehouse and inventory management support.",
            "icon": <FaBuilding className="w-8 h-8" />
        },
        {
            "title": "Parcel Return",
            "description": "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
            "icon": <FaExchangeAlt className="w-8 h-8" />
        }
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="text-center mb-12 md:mb-20">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                    Our Services
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                    Enjoy fast, reliable, portal delivery with real-time tracking and zero hassle. 
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:bg-yellow-200 border border-gray-100 hover:border-blue-500"
                    >
                        <div className="p-6 text-center">
                            <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 mb-4 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurServices;