import React, { FormEvent, useEffect, useState } from 'react'
import NavComponent from './NavComponent'
import { Pin, ShoppingCart } from 'lucide-react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import FormComponent from '@components/FormComponent'
interface FormData {
  name: string
  email: string
  phone: string
  select: string
}
const RapidResponseCenter = () => {
  const [show, setShow] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    select: '',
  })
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <>
      <Button  variant="primary" onClick={handleShow}>
        Rapid Support Center
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'blue', fontWeight: 'bold' }}>
            Ask For A Service
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComponent />
        </Modal.Body>
      </Modal>
    </>
  )
}

const ConditionNavbar = () => {
   const [isSmallScreen, setIsSmallScreen] = useState(false)

   useEffect(() => {
     checkScreenSize()
     window.addEventListener('resize', checkScreenSize)

     return () => {
       window.removeEventListener('resize', checkScreenSize)
     }
   }, [])

   const checkScreenSize = () => {
     console.log('Window Width:', window.innerWidth)

     // Debugging: Log the breakpoint and result
     const breakpoint = 992 // Adjust as needed
     const result = window.innerWidth < breakpoint
     console.log(`Is Small Screen? ${result}`)

     setIsSmallScreen(result)
   }



   const [isSticky, setSticky] = useState(false)

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 100) {
         setSticky(true)
       } else {
         setSticky(false)
       }
     }

     window.addEventListener('scroll', handleScroll)

   
     return () => {
       window.removeEventListener('scroll', handleScroll)
     }
   }, [])

   // Normal Navbar for larger screens
   const largeNavbar = (
     <nav
       className={`navbar navbar-expand-lg navbar-light bg-light ${
         isSticky ? 'fixed-top' : ''
       }`}
     >
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav w-100 justify-content-center">
           <ul className="navbar-nav w-100 justify-content-center mr-auto">
             <li className="nav-item">
               {' '}
               <a className="nav-link" href="/">
                 Home
               </a>
             </li>
             <li className="nav-item dropdown">
               {' '}
               <a
                 className="nav-link dropdown-toggle"
                 href="#"
                 data-bs-toggle="dropdown"
               >
                 <span>Company</span>
               </a>
               <div className="dropdown-menu">
                 <ul className="list-unstyled">
                   <li>
                     <a href="/company/about">About Us</a>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="#"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>GLOWIPS Team</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="/company/associates">Our Associates</a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="#"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Customers</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="/company/projects">Featured Projects</a>
                       </li>
                       <li>
                         <a href="/company/clientage">
                           Our Esteemed Clientage{' '}
                         </a>
                       </li>
                     </ul>
                   </li>
                 </ul>
               </div>
             </li>
             <li className="nav-item dropdown">
               {' '}
               <a
                 className="nav-link dropdown-toggle"
                 href="#"
                 data-bs-toggle="dropdown"
               >
                 Products
               </a>
               <div className="dropdown-menu">
                 <ul className="list-unstyled">
                   <li>
                     <a href="/products/erp9">Tally .ERP 9</a>
                   </li>
                   <li>
                     <a href="/products/erp9auditors">
                       Tally .ERP 9 - Auditors' Edition
                     </a>
                   </li>
                   <li>
                     <a href="/products/shoper9">Tally Shoper 9</a>
                   </li>
                   <li>
                     <a href="/products/developer">Tally Developer</a>
                   </li>
                   <li>
                     <a href="/products/erp9rental">Tally ERP-9 Rental</a>
                   </li>
                   <li>
                     <a href="/products/quotation">Our Quotations</a>
                   </li>
                 </ul>
               </div>
             </li>
             <li className="nav-item dropdown">
               {' '}
               <a
                 className="nav-link dropdown-toggle"
                 href="#"
                 data-bs-toggle="dropdown"
               >
                 Services
               </a>
               <div className="dropdown-menu">
                 <ul className="list-unstyled">
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="#"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Tally Academy</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="/services/training/site">
                           Tally Training at Site
                         </a>
                       </li>
                       <li>
                         <a href="/services/training/academy">
                           Tally Training at Academy
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="#"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Priority Tally Support</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="/services/support/datarecovery">
                           Tally Data Recovery
                         </a>
                       </li>
                       <li>
                         <a href="/services/support/passwordrecovery">
                           Tally Password Recovery
                         </a>
                       </li>
                       <li>
                         <a href="/services/support/datamigration">
                           Data Migration
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="#"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Implementation Service</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="/services/implementation/incremental">
                           Incremental Implementation
                         </a>
                       </li>
                       <li>
                         <a href="/services/implementation/target">
                           Target Implementation
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="#"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Customization Service</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="/services/customization/invoice">
                           Invoice Customization
                         </a>
                       </li>
                       <li className="dropdown dropdown-submenu">
                         <a
                           href="#"
                           className="dropdown-toggle"
                           data-bs-toggle="dropdown"
                         >
                           Module Customization
                         </a>
                         <ul className="dropdown-menu">
                           <li>
                             <a
                               href="\assets\Our-Deluxe-ERP-Module.pdf"
                               target="_blank"
                             >
                               Our Deluxe ERP Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Auto-Alias-Part-Number-Creation-Module.pdf"
                               target="_blank"
                             >
                               Auto Part No/ Alias Creation Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Auto-Batch-No-Creation-Module-Glowips.pdf"
                               target="_blank"
                             >
                               Auto Batch No Module
                             </a>
                           </li>
                           <li>
                             <a href="#">Sales Register Module</a>
                           </li>
                           <li>
                             <a
                               href="\assets\delete-master-module-by-Glowips.pdf"
                               target="_blank"
                             >
                               Master Deletion Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Enhanced-Customized-Reporting-Glowips.pdf"
                               target="_blank"
                             >
                               Enhanced Reporting Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\ERP-reporting-Module-by-Glowips.pdf"
                               target="_blank"
                             >
                               ERP Reporting Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Label-Printing-module-by-Glowips.pdf"
                               target="_blank"
                             >
                               Label Printing Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Month-wise-outstanding-module-by-Glowips.pdf"
                               target="_blank"
                             >
                               Month Wise Outstanding Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Multiple-Email-Setting-by-Glowips.pdf"
                               target="_blank"
                             >
                               Multiple Email Setting Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Party-wise-Item-Discount-module-by-Glowips.pdf"
                               target="_blank"
                             >
                               Party Wise Discount Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Purchase-Requisition-Use-Module.pdf"
                               target="_blank"
                             >
                               Purchase Requisition Module
                             </a>
                           </li>
                           <li>
                             <a
                               href="\assets\Voucher-Approval-Module-by-glowips.pdf"
                               target="_blank"
                             >
                               Voucher Approval Module
                             </a>
                           </li>
                         </ul>
                       </li>
                       <li>
                         <a href="/services/customization/dedicated">
                           Dedicated Customization
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <a href="/services/corporatetraining">
                       Tally Corporate Training
                     </a>
                   </li>
                   <li>
                     <a href="/services/supportcover">Annual Support Cover</a>
                   </li>
                   <li>
                     <a href="/services/netsubscription">
                       Tally .Net Subscription
                     </a>
                   </li>
                   <li>
                     <a href="/services/syncimplementaion">
                       Synchronization Implementation
                     </a>
                   </li>
                   <li>
                     <a href="/services/advisoryservices">
                       Business Advisory Services
                     </a>
                   </li>
                   <li>
                     <a href="/services/placement">Placement</a>
                   </li>
                 </ul>
               </div>
             </li>
             <li className="nav-item dropdown">
               {' '}
               <a
                 className="nav-link dropdown-toggle"
                 href="#"
                 data-bs-toggle="dropdown"
               >
                 Solution
               </a>
               <div className="dropdown-menu">
                 <ul className="list-unstyled">
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="/solutions/verticalsolutions"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Vertical Solutions for Tally.ERP 9</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a
                           href="\assets\Jeweler-Shop-Customization.pdf"
                           target="_blank"
                         >
                           Jewellery Industry
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\GLOWIPS-MANUFACTURING-MODULE-PYARELAL-MODULE-WISE-PROJECT.pdf"
                           target="_blank"
                         >
                           Manufacturing Industry
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\electronic-showroom-module-by-GLowips.pdf"
                           target="_blank"
                         >
                           Electronic Showroom Management
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\Hotel-Restaurant-Module-for-Glowips.pdf"
                           target="_blank"
                         >
                           Hotel &amp; Restaurant
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\School-and-college-accounts-management-by-Glowips.pdf"
                           target="_blank"
                         >
                           School &amp; College
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\Training-institute-Module-by-Glowips.pdf"
                           target="_blank"
                         >
                           Training Institute
                         </a>
                       </li>
                       <li>
                         <a href="\assets\Chit-Fund-Module.pdf" target="_blank">
                           Chit Fund Module
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\AUTOMOBILE-Module-Compatibility-Mode.pdf"
                           target="_blank"
                         >
                           Automobile Module
                         </a>
                       </li>
                       <li>
                         <a href="\assets\CRM-Module.pdf" target="_blank">
                           CRM Module
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\ERP-Manufacturing-MOdule-Part-1.pdf"
                           target="_blank"
                         >
                           ERP Manufacturing Module
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\ERP-BUS-Module-for-Schools-College-Compatibility-Mode.pdf"
                           target="_blank"
                         >
                           ERP BUS Module for Schools, College
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\Builders-PropertyDevelopers-module-for-GLOWIPS.pdf"
                           target="_blank"
                         >
                           Builders &amp; Property
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\Tally-ERP-for-Advt.pdf"
                           target="_blank"
                         >
                           Tally ERP for Advertisement
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="/solutions/cusomizationsol"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Customization Solutions</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="/solutions/customizationsolutions/analytic">
                           Analytic Designing
                         </a>
                       </li>
                       <li>
                         <a href="/solutions/customizationsolutions/implementationtraining">
                           Implementation &amp; Training
                         </a>
                       </li>
                       <li>
                         <a href="/solutions/customizationsolutions/postsalessupport">
                           Post Sales Support
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="\solutions\invoicecust"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Tally Ready Invoice Customization</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="\solutions\readyinvoicecust\preprinted">
                           Preprinted Invoices
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\readyinvoicecust\service">
                           Service Invoice
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\readyinvoicecust\manufacturing">
                           Manufacturing Invoice
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\readyinvoicecust\trading">
                           Trading Invoice
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\readyinvoicecust\clearingforwarding">
                           Clearing and Forwarding Invoice
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\readyinvoicecust\autoparts">
                           Auto Parts Invoice
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\readyinvoicecust\garment">
                           Garment Invoice
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\readyinvoicecust\simple">
                           Simple Invoice
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\readyinvoicecust\miscellaneous">
                           Miscellaneous Invoices
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="/solutions/addonmodules"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Tally add-on Modules</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a
                           href="\assets\GARMENT-INDUSTRY-MODULE.pdf"
                           target="_blank"
                         >
                           Garment Industry Module
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\Vehicle-Sales-Module.pdf"
                           target="_blank"
                         >
                           Vehicle Sales Module{' '}
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\PARTY-WISE-OUTSTANDING-MODULE.pdf"
                           target="_blank"
                         >
                           Party Wise Outstanding Module{' '}
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\STANDARD-TERMS-AND-CONDITION-MODULE.pdf"
                           target="_blank"
                         >
                           Standard Terms and Condition Module{' '}
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\THREE-DISCOUNT-COLOUM-MODULE.pdf"
                           target="_blank"
                         >
                           Three Discount Column Module{' '}
                         </a>
                       </li>
                       <li>
                         <a href="\assets\AUTO-PHYSICAL-STOCK-VERIFICATION-MODULE.pdf">
                           Auto Physical Stock Verification
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\GODOWN-ADDRESS-IN-PRINT-MODULE.pdf"
                           target="_blank"
                         >
                           Godown Address in Print Module{' '}
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\Petrol-Pump-Module.pdf"
                           target="_blank"
                         >
                           Petrol Pump Module{' '}
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\STOCK-GROUP-WISE-ITEM-FILTER-MODULE.pdf"
                           target="_blank"
                         >
                           Stock Group Wise Item Filter{' '}
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\1-CLICK-INSTRUMENT-DETAIL-IN-INVOICE.pdf"
                           target="_blank"
                         >
                           1 Click Instrument Detail Module
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="/solutions/tallyintegration"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Tally Integration</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a
                           href="\assets\GPS-Integration-Compatibility-Mode.pdf"
                           target="_blank"
                         >
                           GPS Integration
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\Hypper-Market-Compatibility-Mode.pdf"
                           target="_blank"
                         >
                           Hyper Market
                         </a>
                       </li>
                       <li>
                         <a
                           href="\assets\Remote-Location-Barcode-Scanner-Integration-Compatibility-Mode.pdf"
                           target="_blank"
                         >
                           Remote Location Barcode Scanner Integration
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li className="dropdown dropdown-submenu">
                     {' '}
                     <a
                       href="/solutions/corpmanangement"
                       className="dropdown-toggle"
                       data-bs-toggle="dropdown"
                     >
                       <span>Corporate Management</span>
                     </a>
                     <ul className="dropdown-menu">
                       <li>
                         <a href="\solutions\corporatemanagement\managementconsultancy">
                           Management Consultancy Services
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\corporatemanagement\businessdev">
                           Business Development
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\corporatemanagement\franchiseservices">
                           Our Franchise Services
                         </a>
                       </li>
                       <li>
                         <a href="\solutions\corporatemanagement\erpcorporate">
                           ERP for Corporate's and Industries{' '}
                         </a>
                       </li>
                     </ul>
                   </li>
                   <li>
                     <a href="\solutions\custombuiltsolutions">
                       Custom Built Solution
                     </a>
                   </li>
                 </ul>
               </div>
             </li>
             <li className="nav-item dropdown">
               {' '}
               <a
                 className="nav-link dropdown-toggle"
                 href="#"
                 data-bs-toggle="dropdown"
               >
                 Download
               </a>
               <div className="dropdown-menu">
                 <ul className="list-unstyled">
                   <li>
                     <a href="/download/tallydownloads">Tally Downloads</a>
                   </li>
                   <li>
                     <a href="/download/instantsupport">Instant Support</a>
                   </li>
                 </ul>
               </div>
             </li>
             <li className="nav-item">
               {' '}
               <a className="nav-link" href="/contact">
                 Contact Us
               </a>
             </li>
             <li className="nav-item-button">
               <div className="d-flex">
                 <div className="social-icons fixed-header-social">
                   <ul className="list-inline">
                     <li>
                       <a href="http://www.facebook.com/TallySolution">
                         <i className="fab fa-facebook-f" />
                       </a>
                     </li>
                     <li>
                       <a href="http://www.pinterest.com/tallysoftware">
                         <Pin />
                       </a>
                     </li>
                     <li>
                       <a href="http://twitter.com/#!/TALLYSOLUTION">
                         <i className="fab fa-twitter" />
                       </a>
                     </li>
                     <li>
                       <a href="http://www.linkedin.com/pub/tally-customization-developers-delhi-ncr/38/5b/a7">
                         <i className="fab fa-linkedin-in" />
                       </a>
                     </li>
                     <li>
                       <a href="tel:+919582927928">
                         <i className="fas fa-phone-alt" />
                       </a>
                     </li>
                     <li>
                       <a href="mailto:tallyproducts@gmail.com">
                         <i className="fas fa-envelope" />
                       </a>
                     </li>
                   </ul>
                 </div>
               </div>
               <div>
                 <RapidResponseCenter />
                 <Button variant="primary">
                   <a
                     className="btn me-1 me-sm-3"
                     href="/buyoffline"
                     style={{ color: 'white' }}
                   >
                     <ShoppingCart />
                     <span style={{ marginLeft: '10px' }}>Buy Tally</span>
                   </a>
                 </Button>
               </div>
             </li>
             <li className="nav-item-button tally-international">
               <a href="TALLYINTERNATIONAL/" target="_blank">
                 <img
                   src="assets/images/tallyinternational.png"
                   className="tally-international-shake"
                   style={{
                     filter: 'invert(0)',
                     width: '200px',
                   }}
                 />
               </a>
             </li>
           </ul>
         </ul>
       </div>
     </nav>
   )

   // Navbar for smaller screens (e.g., mobile devices)
   const smallNavbar = (
    <NavComponent></NavComponent>
   )

   return <div>{isSmallScreen ? smallNavbar : largeNavbar}</div>
}

export default ConditionNavbar
