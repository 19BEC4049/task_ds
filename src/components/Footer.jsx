export default function Footer() {
    return (
      <footer className="bg-black text-white py-10">
        <div className="w-[80%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo */}  
            <div>
              <img src="src\assets\logo.53fa7b598da42d10b26c.png" alt="1ACT Driving Schools" className="w-32 mb-4" />
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold mb-3">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">Cancellation & Refund Policy</a></li>
                <li><a href="#" className="hover:underline">Location</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="font-bold mb-3">Contact</h3>
              <p>📞 770-274-4223</p>
              <p>📞 404-590-4570</p>
              <p>📧 info@1actdrivingschools.com</p>
            </div>
            
            {/* Locations */}
            <div>
              <h3 className="font-bold mb-3">Locations</h3>
              <ul>
                <li>Sandy Springs</li>
                <li>Lawrenceville</li>
                <li>Alpharetta</li>
                <li>Johns Creek</li>
                <li>Marietta-WC</li>
              </ul>
            </div>
          </div>
          
          {/* Licenses Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
            <div>
              <h3 className="font-bold mb-3">DUI License</h3>
              <ul>
                <li>#10102 Sandy Springs</li>
                <li>#10424 Lawrenceville</li>
                <li>#10391 Alpharetta</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">DI License</h3>
              <ul>
                <li>#2148 Sandy Springs</li>
                <li>#2362 Lawrenceville</li>
                <li>#2315 East Cobb/Marietta</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">DT License</h3>
              <ul>
                <li>#664 Sandy Springs</li>
                <li>#673 Lawrenceville</li>
                <li>#697 Doraville</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">TPT License</h3>
              <ul>
                <li>#673 Lawrenceville</li>
                <li>#730 Alpharetta</li>
              </ul>
            </div>
          </div>
  
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a href="#" className="text-white text-xl hover:text-blue-500">🔵</a>
            <a href="#" className="text-white text-xl hover:text-pink-500">🔴</a>
          </div>
          
          {/* Copyright */}
          <div className="text-center mt-6 text-gray-400 text-sm">
            © Copyright 2024 1ACT Driving School All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  }