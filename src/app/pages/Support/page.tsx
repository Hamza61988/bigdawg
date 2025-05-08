export default function Support() {
    return (
      <div className="p-6">
        <div>
          <h6 className="text-lg font-semibold">Help & Support</h6>
          <p className="text-gray-600">
            Get assistance and learn more about using MobileShop
          </p>
  
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            {/* Contact Information */}
            <div className="bg-white rounded shadow p-6 flex-1">
              <h4 className="text-lg font-semibold mb-1">Contact Information</h4>
              <p className="text-sm text-gray-600 mb-6">
                Reach out to our support team
              </p>
  
              <div className="mb-6">
                <h3 className="font-semibold">Email Support</h3>
                <p className="text-sm">For general inquiries and support:</p>
                <a className="text-blue-600 underline">Deadshot6198@gmail.com</a>
              </div>
  
              <div className="mb-6">
                <h3 className="font-semibold">Phone Support</h3>
                <p className="text-sm">Available Monday–Friday, 9 AM – 5 PM:</p>
                <a className="text-blue-600 underline">11-12-44-622</a>
              </div>
  
              <div className="mb-6">
                <h3 className="font-semibold">Address</h3>
                <p className="text-sm">Elevorix Solutions Headquarters:</p>
                <p className="text-sm">
                  123 Tech Lane, Innovation District <br />
                  Business City, BC 12345
                </p>
              </div>
  
              <div className="bg-blue-500 text-center py-2 rounded hover:bg-blue-400 text-white">
                <button>Contact support team</button>
              </div>
            </div>
  
            {/* Company Information */}
            <div className="bg-white rounded shadow p-6 flex-1">
              <h4 className="text-lg font-semibold mb-1">Company Information</h4>
              <p className="text-sm text-gray-600 mb-6">
                About Elevorix Solutions
              </p>
  
              <div className="mb-6">
                <h3 className="font-semibold">About Us</h3>
                <p className="text-sm">
                  Elevorix Solutions is a leading provider of retail management
                  systems for mobile phone shops and electronic stores. Our
                  software solutions help businesses streamline operations, manage
                  inventory, track sales, and improve customer service.
                </p>
              </div>
  
              <div className="mb-6">
                <h3 className="font-semibold">Our Mission</h3>
                <p className="text-sm">
                  We're dedicated to empowering small and medium-sized businesses
                  with affordable, user-friendly technology solutions that help
                  them compete and succeed in today's digital marketplace.
                </p>
              </div>
  
              <div className="mb-6">
                <h3 className="font-semibold">Company Details</h3>
                <p className="text-sm">Founded: 2015</p>
                <p className="text-sm">Employees: 50+</p>
                <p className="text-sm">Headquarters: Business City, BC</p>
                <p className="text-sm">Registration: ELV12345678</p>
              </div>
  
            
            </div>
          </div>
        </div>
      </div>
    );
  }
  