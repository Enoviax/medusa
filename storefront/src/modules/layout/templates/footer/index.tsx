import React from 'react';
import { Text, clx } from "@medusajs/ui";
import { MapPin, Clock, Phone, Mail, Shield, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import LocalizedClientLink from "@modules/common/components/localized-client-link";
import MedusaCTA from "@modules/layout/components/medusa-cta";
import { getCollectionsList } from '@lib/data/collections';
import { getCategoriesList } from '@lib/data/categories';
import Image from 'next/image';

export default async function Footer() {
  const { collections } = await getCollectionsList(0, 6);
  const { product_categories } = await getCategoriesList(0, 6);

  return (
    <footer className="bg-gray-50 border-t border-ui-border-base w-full">
      <div className="content-container flex flex-col w-full">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              
              <LocalizedClientLink
                href="/"
                className="text-2xl font-bold text-gray-900 hover:text-blue-600"
              >
                KEENSIGHT
              </LocalizedClientLink>
              <Image 
        src="/favicon.ico" 
        alt="Keensight Logo" 
        width={30}  // adjust based on your logo size
        height={30} // adjust based on your logo size
        className="object-contain"
      />
            </div>
            <Text className="text-gray-600 mt-4">
              Leading provider of comprehensive security solutions including CCTV cameras, 
              access control systems, electric fencing, dashboard cameras, and smart locks.
            </Text>
            
            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              {/* <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="w-5 h-5" />
              </a> */}
              {/* <a href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="w-5 h-5" />
              </a> */}
              <a href="/" className="text-gray-400 hover:text-blue-600">
                <Twitter className="w-5 h-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-blue-600">
                <Linkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Products & Services */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Our Solutions</h3>
            <ul className="space-y-2">
              {product_categories?.slice(0, 6).map((c) => (
                !c.parent_category && (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                      href={`/categories/${c.handle}`}
                    >
                      {c.name}
                    </LocalizedClientLink>
                  </li>
                )
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <span className="text-gray-600">
                  Nairobi Accra road,<br />
                  Whiteangle house,<br />
                  First floor rm no. 63
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-600">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a href="tel:0746685837" className="text-gray-600 hover:text-blue-600">
                  0746685837
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a href="mailto:keensight.kenya@yahoo.com" className="text-gray-600 hover:text-blue-600">
                  keensight.kenya@yahoo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <LocalizedClientLink href="/about" className="text-gray-600 hover:text-blue-600">
                  About Us
                </LocalizedClientLink>
              </li>
              {/* <li>
                <LocalizedClientLink href="/services" className="text-gray-600 hover:text-blue-600">
                  Services
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </LocalizedClientLink>
              </li> */}
              {/* <li>
                <LocalizedClientLink href="/privacy-policy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </LocalizedClientLink>
              </li>
              <li>
                <LocalizedClientLink href="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms & Conditions
                </LocalizedClientLink>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Text className="text-sm text-gray-600">
              © {new Date().getFullYear()} KEENSIGHT. All rights reserved.
            </Text>
            <MedusaCTA />
          </div>
        </div>
      </div>
    </footer>
  );
}