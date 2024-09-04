import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import main1 from '../../assets/illustrate-custom-challenge-coin-3d-design.jpg';
import FormContent from '../FormContent/FormContent';
import pic1 from '../../assets/pic1.mp4';
import pic2 from '../../assets/pic2.mp4';
import pic3 from '../../assets/pic3.mp4';
import pic4 from '../../assets/pic4.mp4';
import pic5 from '../../assets/pic5.mp4';
import pic6 from '../../assets/pic6.mp4';
import pic7 from '../../assets/pic7.mp4';
import pic8 from '../../assets/pic8.mp4';
import pic9 from '../../assets/pic9.mp4';
import pic10 from '../../assets/pic10.mp4';
import pic11 from '../../assets/pic11.mp4';
import pic12 from '../../assets/pic12.mp4';
import pic13 from '../../assets/pic13.mp4';
import pic14 from '../../assets/pic14.mp4';
import pic15 from '../../assets/pic15.mp4';
import pic16 from '../../assets/pic16.mp4';
import pic17 from '../../assets/pic17.mp4';
import pic18 from '../../assets/pic18.mp4';
import pic19 from '../../assets/pic19.mp4';
import pic20 from '../../assets/pic20.mp4';
import pic21 from '../../assets/pic21.mp4';
import pic22 from '../../assets/pic22.mp4';
import pic23 from '../../assets/pic23.mp4';
import pic24 from '../../assets/pic24.mp4';
import pic25 from '../../assets/pic25.mp4';
import pic26 from '../../assets/pic26.mp4';
import pic27 from '../../assets/pic27.mp4';
import pic28 from '../../assets/pic28.mp4';
import pic29 from '../../assets/pic29.mp4';
import pic30 from '../../assets/pic30.mp4';
import pic31 from '../../assets/pic31.mp4';
import pic32 from '../../assets/pic32.mp4';
import pic33 from '../../assets/pic33.mp4';
import pic34 from '../../assets/pic34.mp4';
import pic35 from '../../assets/pic35.mp4';
import pic36 from '../../assets/pic36.mp4';
import pic37 from '../../assets/pic37.mp4';
import pic38 from '../../assets/pic38.mp4';
import pic39 from '../../assets/pic39.mp4';
import pic40 from '../../assets/pic40.mp4';
import pic41 from '../../assets/pic41.mp4';
import pic42 from '../../assets/pic42.mp4';
import pic43 from '../../assets/pic43.mp4';
import pic44 from '../../assets/pic44.mp4';
import pic45 from '../../assets/pic45.mp4';
import pic46 from '../../assets/pic46.mp4';
import pic47 from '../../assets/pic47.mp4';
import pic48 from '../../assets/pic48.mp4';
import pic49 from '../../assets/pic49.mp4';
import pic50 from '../../assets/pic50.mp4';
import pic51 from '../../assets/pic51.mp4';
import './LogoContent.css';


function MyVerticallyCenteredModal({ show, onHide, title, content, handleOrderNow }) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {content}
      </Modal.Body>
      <Modal.Footer>
      <Button 
      variant="success" 
      href="https://www.pinterest.com/dinithaushan/" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        fontFamily: 'Pacifico, cursive', // Apply Pacifico font
        backgroundColor: '#e5202b',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease', // Smooth transition for hover effect
      }}
      // Hover effect styles
      onMouseEnter={(e) => e.target.style.backgroundColor = '#ff5959'}
      onMouseLeave={(e) => e.target.style.backgroundColor = '#e5202b'}
    >
      More Samples
    </Button>
        <Button variant="primary" style={{ position: 'absolute', bottom: '10px', left: '10px' }} onClick={handleOrderNow}>
          Order Now
        </Button>
      </Modal.Footer>
    </Modal>
  );
}




function LogoContent() {
  const [modalShow, setModalShow] = useState(false);
  const [formModalShow, setFormModalShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  const commonDescription = (
<div>
  <div className="text-center">
    <img src={main1} alt="Fire Department" style={{ maxWidth: '100%', maxHeight: '200px' }} />
  </div>
  <br></br>
  <br></br>
  <p>Fire Department challenge coins :</p>
  <ul>
    <li>Firefighter Excellence Awards</li>
    <li>Firefighting Team Recognition</li>
    <li>Fire Station Commemoration</li>
    <li>Fire Chief Recognition</li>
    <li>Bravery and Valor Awards</li>
    <li>Lifesaving Rescues Commemoration</li>
    <li>Fire Prevention Awareness Acknowledgment</li>
    <li>Training and Professional Development Recognition</li>
    <li>Emergency Medical Services (EMS) Collaboration Commemoration</li>
    <li>Wildfire Response Excellence Awards</li>
    <li>Hazardous Materials (HAZMAT) Response Recognition</li>
    <li>Urban Search and Rescue (USAR) Operations Commemoration</li>
    <li>Firefighter Brotherhood/Sisterhood Recognition</li>
    <li>Community Outreach and Education Appreciation</li>
    <li>Fire Department Anniversary Commemoration</li>
    <li>Firefighter of the Year Awards</li>
    <li>Firefighter Memorial Tribute</li>
    <li>Firefighter Wellness and Mental Health Support Acknowledgment</li>
    <li>Fire Department Retirement Recognition</li>
  </ul>
 
  
  <p>Thank you!</p>
  <p>Best Regards: Ushan</p>
 
</div>
  
  );

  const handleShowModal = (title) => {
    let content;
    if (title === 'Fire Department challenge coins') {
      content = commonDescription; // Set the common description for Instagram
    } else if (title === '3d modeling and cad designing') {
      
      content =<div>
      <h2>3D Modeling and CAD  Services</h2>
      <div className="text-center">
    <img src={main1} alt="Fire Department" style={{ maxWidth: '100%', maxHeight: '200px' }} />
  </div>
  <br></br>
  <br></br>
      <p>I specialize in creating CAD model designs for various types of coins. Whether you need designs for challenge coins, commemorative coins, or any other type, I've got you covered.</p>
      <p>Here's what I offer:</p>
      <ul>
        <li>Creation of CAD model designs for any kind of coins</li>
        <li>Delivery of designs in multiple file formats including STL, OBJ, DXF, AMF, SVJ, STEP, and any other 3D file format you may need</li>
        <li>Adherence to manufacturer requirements and standards to ensure compatibility and quality</li>
      </ul>
      <p>With my services, you can expect high-quality CAD designs that meet your specifications and are ready for manufacturing.</p>
      <p>Feel free to reach out to discuss your project requirements!</p>
      <p>Thank you!</p>
      <p>Best Regards: Ushan</p>
    </div>
    ;
    } else if (title === 'AI prompt challenge coins') {
     
      content =<div>
      <div className="text-center">
        <img src={main1} alt="AI Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      </div>
      <br></br>
      <br></br>
      <p>AI Prompt Challenge Coin :</p>
      <ul>
        <li>AI Innovation and Advancement Recognition</li>
        <li>AI Research Excellence Awards</li>
        <li>AI Technology Breakthrough Commemoration</li>
        <li>AI Ethics and Responsibility Acknowledgment</li>
        <li>AI Application in Industry Recognition</li>
        <li>AI Education and Training Appreciation</li>
        <li>AI for Social Good Recognition</li>
        <li>AI Developer Community Appreciation</li>
        <li>AI Start-up Entrepreneurship Recognition</li>
        <li>AI Integration in Daily Life Commemoration</li>
        <li>AI Artistic Creativity Acknowledgment</li>
        <li>AI-Assisted Healthcare Achievement Awards</li>
        <li>AI in Environmental Conservation Recognition</li>
        <li>AI for Humanitarian Aid and Disaster Relief Commemoration</li>
      </ul>
      
      <p>Thank you!</p>
      <p>Best Regards: Ushan</p>
      <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
        
      </a>
    </div>
    
    ;
    }

    //next
    else if (title === 'First Responders challenge coins') {
     
      content =<div>
      <div className="text-center">
        <img src={main1} alt="First Responder Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      </div>
      <br></br>
      <br></br>
      <p>First Responder Challenge Coin :</p>
      <ul>
        <li>Bravery and Valor</li>
        <li>Commemoration</li>
        <li>Camaraderie and Unity</li>
        <li>Community Outreach</li>
        <li>Community Engagement</li>
        <li>Departmental Pride</li>
        <li>Fundraising and Support</li>
        <li>Leadership and Excellence</li>
        <li>Operational Excellence</li>
        <li>Partnership and Collaboration</li>
        <li>Promotion and Branding</li>
        <li>Rank and Leadership</li>
        <li>Service Recognition</li>
        <li>Service and Longevity</li>
        <li>Special Event</li>
      </ul>
      
      <p>Thank you!</p>
      <p>Best Regards: Ushan</p>
      <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
    
      </a>
    </div>
    
    
    ;
    }

    //next 
    else if (title === 'Disaster management challenge coins') {
    
     content= <div>
      <div className="text-center">
        <img src={main1} alt="Disaster Management Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      </div>
      <br></br>
      <br></br>
      <p>Disaster Management Challenge Coin :</p>
      <ul>
        <li>Emergency Response</li>
        <li>Preparedness and Planning</li>
        <li>Crisis Management</li>
        <li>Recovery and Rehabilitation</li>
        <li>Disaster Relief Efforts</li>
        <li>Coordination and Collaboration</li>
        <li>Humanitarian Aid</li>
        <li>Community Resilience</li>
        <li>Leadership in Crisis</li>
        <li>Training and Capacity Building</li>
        <li>Public Safety Awareness</li>
        <li>Interagency Cooperation</li>
        <li>Technology and Innovation in Disaster Management</li>
        <li>Risk Assessment and Mitigation</li>
        <li>Volunteer Recognition</li>
        <li>Cross-sector Partnerships</li>
        <li>International Assistance and Cooperation</li>
        <li>Disaster Survivor Support</li>
        <li>Environmental Conservation in Disaster Recovery</li>
      </ul>
      
      <p>Thank you!</p>
      <p>Best Regards: Ushan</p>
      <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
       
      </a>
    </div>
    
    
    }

        //next 
        else if (title === 'Security and field officers challenge coins') {
    
         content = <div>
         <div className="text-center">
           <img src={main1} alt="Security and Field Officers Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
         </div>
         <br></br>
         <br></br>
         <p>Security and Field Officers Challenge Coin :</p>
         <ul>
           <li>Police Officer Excellence Awards</li>
           <li>Security Officer Achievement Recognition</li>
           <li>Field Officer Commemoration</li>
           <li>SWAT Team Appreciation</li>
           <li>K9 Unit Commemoration</li>
           <li>Crime Scene Investigation (CSI) Achievement Awards</li>
           <li>Special Response Team (SRT) Recognition</li>
           <li>Crisis Negotiation Team (CNT) Commemoration</li>
           <li>Intelligence and Surveillance Achievement Awards</li>
           <li>Undercover Operations Recognition</li>
           <li>Bicycle Patrol Commemoration</li>
           <li>Community Policing Appreciation</li>
           <li>Drug Enforcement Achievement Awards</li>
           <li>Gang Task Force Recognition</li>
           <li>Hostage Rescue Commemoration</li>
           <li>School Resource Officer (SRO) Appreciation</li>
           <li>Field Training Officer (FTO) Achievement Awards</li>
           <li>Rapid Response Team Recognition</li>
           <li>Homeland Security Task Force Commemoration</li>
         </ul>
         
         <p>Thank you!</p>
         <p>Best Regards: Ushan</p>
         <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
         </a>
       </div>
       
            
            }

                    //next 
        else if (title === 'Law enforcement challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Law Enforcement Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Law Enforcement Challenge Coins :</p>
          <ul>
            <li>Police Officer Excellence Awards</li>
            <li>Sheriff's Deputy Achievement Recognition</li>
            <li>Federal Agent Commemoration</li>
            <li>SWAT Team Appreciation</li>
            <li>K9 Unit Commemoration</li>
            <li>Crime Scene Investigation (CSI) Achievement Awards</li>
            <li>Special Response Team (SRT) Recognition</li>
            <li>Crisis Negotiation Team (CNT) Commemoration</li>
            <li>Narcotics Enforcement Appreciation</li>
            <li>Gang Task Force Commemoration</li>
            <li>Community Policing Achievement Awards</li>
            <li>Traffic Enforcement Recognition</li>
            <li>Marine Patrol Commemoration</li>
            <li>Field Training Officer (FTO) Appreciation</li>
            <li>Bicycle Patrol Achievement Awards</li>
            <li>Honor Guard Recognition</li>
            <li>Cold Case Investigation Commemoration</li>
            <li>School Resource Officer (SRO) Appreciation</li>
            <li>Hostage Negotiation Achievement Awards</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                     //next 
        else if (title === 'Pirates and ships challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Pirates and Ships Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Pirates and Ships Challenge Coins :</p>
          <ul>
            <li>Pirate Captain Excellence Awards</li>
            <li>Ship Crew Achievement Recognition</li>
            <li>Pirate Ship Commemoration</li>
            <li>Naval Battle Appreciation</li>
            <li>Treasure Hunt Recognition</li>
            <li>Pirate Flag Commemoration</li>
            <li>Naval Warfare Achievement Awards</li>
            <li>Port Raiding Recognition</li>
            <li>Pirate Code Commemoration</li>
            <li>Shipwreck Exploration Appreciation</li>
            <li>Buccaneer Lifestyle Achievement Awards</li>
            <li>Maritime Navigation Recognition</li>
            <li>Privateer Commemoration</li>
            <li>Pirate Treasure Discovery Appreciation</li>
            <li>Naval Strategy Achievement Awards</li>
            <li>Pirate Legend Recognition</li>
            <li>Shipyard Construction Commemoration</li>
            <li>Naval Intelligence Appreciation</li>
            <li>Pirate Festival Celebration Coins</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                     //next 
        else if (title === 'Special OPS challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Special Ops Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Special Ops Challenge Coins :</p>
          <ul>
            <li>Elite Unit Recognition</li>
            <li>Mission Success and Accomplishment</li>
            <li>Specialized Training and Skills</li>
            <li>Covert Operations</li>
            <li>Counterterrorism Efforts</li>
            <li>Intelligence Gathering and Analysis</li>
            <li>Special Reconnaissance</li>
            <li>Direct Action Operations</li>
            <li>Special Tactics and Techniques</li>
            <li>Close Quarters Battle (CQB)</li>
            <li>Airborne and Air Assault Operations</li>
            <li>Maritime Operations</li>
            <li>Special Weapons and Equipment</li>
            <li>Joint Special Operations Task Force (JSOTF) Collaboration</li>
            <li>Special Operations Aviation</li>
            <li>Hostage Rescue and Personnel Recovery</li>
            <li>Night Operations and Low Visibility Tactics</li>
            <li>Counterinsurgency Operations</li>
            <li>Special Operations Support and Logistics</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                     //next 
        else if (title === 'EOD challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="EOD Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>EOD Challenge Coins (Explosive Ordnance Disposal) :</p>
          <ul>
            <li>Bomb Disposal Expertise</li>
            <li>Explosive Detection and Neutralization</li>
            <li>Improvised Explosive Device (IED) Defeat</li>
            <li>Hazardous Device Technician Recognition</li>
            <li>Counter-IED Operations</li>
            <li>EOD Equipment and Tools Mastery</li>
            <li>Remote Handling and Robotics</li>
            <li>Render Safe Procedures</li>
            <li>EOD Team Coordination and Collaboration</li>
            <li>Explosives Safety and Risk Management</li>
            <li>Advanced EOD Training and Certification</li>
            <li>Demolitions Expertise</li>
            <li>Tactical EOD Operations</li>
            <li>Humanitarian Mine Action</li>
            <li>Underwater Ordnance Disposal</li>
            <li>Counter-Weapons of Mass Destruction (CWMD) Operations</li>
            <li>EOD Mission Success and Recognition</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
        
             
             }
                     //next 
        else if (title === 'Medical services challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Medical Services Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Medical Services Challenge Coins :</p>
          <ul>
            <li>Medical Professional Excellence</li>
            <li>Patient Care and Compassion</li>
            <li>Emergency Medical Response</li>
            <li>Combat Medicine and Field Surgery</li>
            <li>Trauma Care and Triage</li>
            <li>Disaster Medical Assistance Teams (DMAT) Recognition</li>
            <li>Medical Evacuation (MEDEVAC) Operations</li>
            <li>Medical Training and Education</li>
            <li>Hospital Corpsman Recognition (for military medical personnel)</li>
            <li>Public Health Promotion and Disease Prevention</li>
            <li>Specialized Medical Skills (e.g., anesthesia, surgery, obstetrics)</li>
            <li>Medical Research and Innovation</li>
            <li>Nursing Excellence</li>
            <li>Veterinary Services (for military and disaster response)</li>
            <li>Telemedicine and Remote Healthcare</li>
            <li>Humanitarian Medical Missions</li>
            <li>Mental Health Support and Counseling</li>
            <li>Medical Logistics and Supply Chain Management</li>
            <li>Medical Corps Camaraderie and Team Spirit</li>
            <li>Cancer Research</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                     //next 
        else if (title === 'EMS challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="EMS Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>EMS Challenge Coins (Emergency Medical Services) :</p>
          <ul>
            <li>EMS Professional Excellence</li>
            <li>Paramedic Recognition</li>
            <li>Emergency Medical Technician (EMT) Recognition</li>
            <li>Ambulance Operations and Patient Care</li>
            <li>Prehospital Trauma Care</li>
            <li>Advanced Life Support (ALS) Skills</li>
            <li>Basic Life Support (BLS) Skills</li>
            <li>Rapid Response and Critical Care Transport</li>
            <li>Community Paramedicine and Mobile Integrated Healthcare</li>
            <li>EMS Training and Education</li>
            <li>Disaster Response and Mass Casualty Incidents</li>
            <li>Pediatric Emergency Care</li>
            <li>Geriatric Emergency Care</li>
            <li>Wilderness EMS and Search and Rescue</li>
            <li>Air Medical Services</li>
            <li>EMS Dispatch and Communications</li>
            <li>EMS Leadership and Management</li>
            <li>EMS Safety and Risk Management</li>
            <li>EMS Unity and Brotherhood</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                     //next 
        else if (title === 'Rescue support team , team corps challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Rescue Support Team and Team Corps Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Rescue Support Team Challenge Coins :</p>
          <ul>
            <li>Search and Rescue Excellence</li>
            <li>Technical Rescue Operations</li>
            <li>Urban Search and Rescue (USAR) Operations</li>
            <li>Swiftwater Rescue Operations</li>
            <li>High-Angle Rescue Operations</li>
            <li>Cave Rescue Operations</li>
            <li>Wilderness Search and Rescue (SAR)</li>
            <li>K9 Search and Rescue Team Recognition</li>
            <li>Rescue Diver Recognition</li>
            <li>Rope Rescue Expertise</li>
            <li>Heavy Rescue Operations (e.g., collapsed structures)</li>
            <li>Flood Response and Water Rescue</li>
            <li>Helicopter Rescue Operations</li>
            <li>Volunteer Search and Rescue (SAR) Team Recognition</li>
            <li>Humanitarian Disaster Response</li>
            <li>Rescue Team Coordination and Collaboration</li>
          </ul>
          
          <p>Team Corps Challenge Coins :</p>
          <ul>
            <li>Corps Member Excellence</li>
            <li>Teamwork and Collaboration</li>
            <li>Corps Leadership and Mentorship</li>
            <li>Environmental Conservation and Stewardship</li>
            <li>Habitat Restoration and Preservation</li>
            <li>Disaster Response and Recovery</li>
            <li>Community Service and Volunteerism</li>
            <li>Corps Training and Professional Development</li>
            <li>Emergency Preparedness and Response</li>
            <li>Trail Construction and Maintenance</li>
            <li>Wilderness First Aid and Safety</li>
            <li>Natural Resource Management</li>
            <li>Youth Corps Recognition</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                     //next 
        else if (title === 'Sober challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Sober Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Sober Challenge Coin :</p>
          <ul>
            <li>Sobriety Milestones and Achievements</li>
            <li>Recovery Support and Encouragement</li>
            <li>Sober Living Community Recognition</li>
            <li>Alcohol-Free Lifestyle Promotion</li>
            <li>Drug-Free Lifestyle Promotion</li>
            <li>Peer Support and Mentorship</li>
            <li>Addiction Recovery Education and Outreach</li>
            <li>Overcoming Addiction Challenges</li>
            <li>Support Group Participation Recognition (e.g., Alcoholics Anonymous, Narcotics Anonymous)</li>
            <li>Substance Abuse Treatment Completion</li>
            <li>Sober Living Program Completion</li>
            <li>Positive Lifestyle Changes</li>
            <li>Sobriety Anniversary Celebrations</li>
            <li>Mental Health and Wellness Support</li>
            <li>Family and Friends Support Recognition</li>
            <li>Resilience and Strength in Recovery</li>
            <li>Holistic Healing and Wellness Practices</li>
            <li>Recovery Resources and Referral Networks</li>
            <li>Sober Community Unity and Solidarity</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
        
             
             }
                     //next 
        else if (title === 'Charity and volunteer challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Charity and Volunteer Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Charity and Volunteer Challenge Coin :</p>
          <ul>
            <li>Volunteer Service Recognition</li>
            <li>Community Engagement and Outreach</li>
            <li>Philanthropic Leadership</li>
            <li>Humanitarian Aid and Relief Efforts</li>
            <li>Charity Fundraising Success</li>
            <li>Volunteerism in Action</li>
            <li>Volunteer Team Unity and Collaboration</li>
            <li>Corporate Social Responsibility (CSR) Initiatives</li>
            <li>Volunteer Training and Development</li>
            <li>Youth Volunteer Recognition</li>
            <li>Senior Volunteer Recognition</li>
            <li>Environmental Conservation Efforts</li>
            <li>Homeless Shelter Support</li>
            <li>Food Bank Support and Contributions</li>
            <li>Disaster Relief Volunteer Recognition</li>
            <li>Education Support and Tutoring</li>
            <li>Healthcare Volunteerism</li>
            <li>Animal Welfare and Rescue Efforts</li>
            <li>International Volunteer Service</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
          
          </a>
        </div>
        
             
             }

                            //next 
        else if (title === 'Religious challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Religious Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Religious Challenge Coin :</p>
          <ul>
            <li>Spiritual Leadership Recognition</li>
            <li>Faith and Devotion</li>
            <li>Religious Community Unity and Fellowship</li>
            <li>Worship and Prayer</li>
            <li>Religious Education and Outreach</li>
            <li>Missionary Work Recognition</li>
            <li>Church Service and Ministry Recognition</li>
            <li>Religious Event Commemoration</li>
            <li>Religious Symbolism and Iconography</li>
            <li>Interfaith Dialogue and Collaboration</li>
            <li>Youth Ministry Recognition</li>
            <li>Clergy Appreciation</li>
            <li>Religious Pilgrimage Commemoration</li>
            <li>Religious Festival Celebration</li>
            <li>Sacred Text Study and Interpretation</li>
            <li>Religious Retreat Participation</li>
            <li>Religious Charity and Humanitarian Aid</li>
            <li>Religious Art and Architecture Appreciation</li>
            <li>Religious Unity in Diversity</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
        
             
             }
                            //next 
        else if (title === 'PRESENCE for excellence and military challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="PRESENCE for Excellence and Military Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>PRESENCE for Excellence and Military Challenge Coin :</p>
          <ul>
            <li>Leadership in Excellence</li>
            <li>Outstanding Service Recognition</li>
            <li>Professionalism and Integrity</li>
            <li>Commitment to Excellence</li>
            <li>Innovation and Creativity</li>
            <li>Continuous Improvement</li>
            <li>Positive Attitude and Mindset</li>
            <li>Teamwork and Collaboration</li>
            <li>Client or Customer Satisfaction</li>
            <li>Going Above and Beyond</li>
            <li>Adaptability and Flexibility</li>
            <li>Problem-Solving Skills</li>
            <li>Communication Excellence</li>
            <li>Mentorship and Coaching</li>
            <li>Work Ethic and Dedication</li>
            <li>Resilience and Perseverance</li>
            <li>Community Engagement and Outreach</li>
            <li>Training and Development Advocacy</li>
            <li>Inspirational Leadership</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }               //next 
             else if (title === 'Commemorative and celebrations challenge coins') {
         
               content = <div>
               <div className="text-center">
                 <img src={main1} alt="Commemorative and Celebrations Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
               </div>
               <br></br>
               <br></br>
               <p>Commemorative and Celebrations Challenge Coin :</p>
               <ul>
                 <li>Anniversary Celebrations</li>
                 <li>Milestone Achievements</li>
                 <li>Commemorative Events</li>
                 <li>Historical Milestones</li>
                 <li>Founding Anniversary</li>
                 <li>Special Occasions</li>
                 <li>Commemorative Dates</li>
                 <li>Retirement Celebrations</li>
                 <li>Graduation Ceremonies</li>
                 <li>Achievement Awards</li>
                 <li>Promotion Celebrations</li>
                 <li>Retirement Farewell</li>
                 <li>Recognition of Service</li>
                 <li>Commemorative Medals</li>
                 <li>Award Ceremonies</li>
                 <li>Retirement Honors</li>
                 <li>Special Achievements</li>
                 <li>Commemorative Gifts</li>
                 <li>Commemorative Medallions</li>
               </ul>
               
               <p>Thank you!</p>
               <p>Best Regards: Ushan</p>
               <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                 
               </a>
             </div>
             
                  
                  }
                                 //next 
        else if (title === 'Personal and gifts challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Personal and Gifts Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Personal and Gifts Challenge Coins :</p>
          <ul>
            <li>Personal Achievement Recognition</li>
            <li>Customized Gifts and Mementos</li>
            <li>Personalized Coins for Special Occasions (e.g., birthdays, weddings)</li>
            <li>Family Reunion Mementos</li>
            <li>Friendship Tokens</li>
            <li>Thank You Gifts</li>
            <li>Customized Coins for Special Events (e.g., reunions, parties)</li>
            <li>Personalized Anniversary Gifts</li>
            <li>Recognition of Friendship or Support</li>
            <li>Graduation Gifts</li>
            <li>Personal Milestone Celebrations</li>
            <li>Retirement Gifts</li>
            <li>Employee Recognition Tokens</li>
            <li>Team Building Tokens</li>
            <li>Mentorship Recognition</li>
            <li>Customized Wedding Gifts</li>
            <li>Personalized Military Gifts</li>
            <li>Customized Sports Team Tokens</li>
            <li>Customized Religious Gifts</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
         
          </a>
        </div>
        
             
             }
                            //next 
        else if (title === 'Business companies challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Business Companies Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Business Companies Challenge Coins :</p>
          <ul>
            <li>Company Anniversary Celebrations</li>
            <li>Employee Recognition and Appreciation</li>
            <li>Corporate Excellence Awards</li>
            <li>Team Building and Collaboration</li>
            <li>Leadership Recognition</li>
            <li>Sales Achievement Awards</li>
            <li>Customer Service Excellence</li>
            <li>Innovation and Creativity Awards</li>
            <li>Corporate Values Recognition</li>
            <li>Safety and Wellness Awards</li>
            <li>Employee of the Month/Year Recognition</li>
            <li>Professional Development Awards</li>
            <li>Employee Milestone Recognition (e.g., years of service)</li>
            <li>Corporate Event Commemoration</li>
            <li>Product Launch Commemoration</li>
            <li>Partner and Vendor Appreciation</li>
            <li>Client Appreciation Tokens</li>
            <li>Brand Ambassador Recognition</li>
            <li>Corporate Social Responsibility Awards</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                            //next 
        else if (title === 'Sports and games challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Sports and Games Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Sports and Games Challenge Coins :</p>
          <ul>
            <li>Sports Team Achievement Awards</li>
            <li>League Championship Commemoration</li>
            <li>Player of the Game Recognition</li>
            <li>Coach Recognition and Appreciation</li>
            <li>Team Spirit and Camaraderie Tokens</li>
            <li>Super Bowl Champions Commemoration</li>
            <li>World Series Champions Commemoration</li>
            <li>NBA Finals Champions Commemoration</li>
            <li>NHL Stanley Cup Champions Commemoration</li>
            <li>FIFA World Cup Champions Commemoration</li>
            <li>Olympic Games Participation Recognition</li>
            <li>eSports Tournament Winners Commemoration</li>
            <li>Online Gaming Community Recognition</li>
            <li>Gaming Clan or Guild Recognition</li>
            <li>High Score Achievement Awards</li>
            <li>Multiplayer Game Team Achievement Awards</li>
            <li>Game Launch Commemoration</li>
            <li>Gaming Convention Participation Recognition</li>
            <li>Online Tournament Winners Commemoration</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
        
             
             }
                            //next 
        else if (title === 'Poker chip playing cards coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Poker Chip Playing Cards Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Poker Chip Playing Cards Coin :</p>
          <ul>
            <li>Poker Tournament Champion Recognition</li>
            <li>High Stakes Poker Achievement Awards</li>
            <li>Royal Flush Achievement Commemoration</li>
            <li>Straight Flush Achievement Commemoration</li>
            <li>Four of a Kind Achievement Commemoration</li>
            <li>Full House Achievement Commemoration</li>
            <li>Three of a Kind Achievement Commemoration</li>
            <li>Two Pair Achievement Commemoration</li>
            <li>One Pair Achievement Commemoration</li>
            <li>High Card Achievement Commemoration</li>
            <li>Poker Room Membership Recognition</li>
            <li>Casino VIP Club Membership Recognition</li>
            <li>Poker Chip Set Commemoration</li>
            <li>Poker Night Host Recognition</li>
            <li>Poker Hand Strategy Mastery</li>
            <li>Bluffing and Psychology in Poker Recognition</li>
            <li>Poker Player of the Year Awards</li>
            <li>Poker Community Engagement Recognition</li>
            <li>Charity Poker Tournament Participation Recognition</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                            //next 
        else if (title === 'Music and entertainment challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Music and Entertainment Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Music and Entertainment Challenge Coin :</p>
          <ul>
            <li>Music Performance Achievement Awards</li>
            <li>Album Release Commemoration</li>
            <li>Concert Tour Commemoration</li>
            <li>Music Festival Participation Recognition</li>
            <li>Band or Artist Appreciation Tokens</li>
            <li>Music Genre Appreciation (e.g., rock, jazz, hip-hop)</li>
            <li>Instrument Mastery Recognition</li>
            <li>Songwriting Achievement Awards</li>
            <li>Music Producer Recognition</li>
            <li>Sound Engineer Appreciation</li>
            <li>Film Premiere Commemoration</li>
            <li>Television Series Commemoration</li>
            <li>Theatre Production Commemoration</li>
            <li>Acting Performance Achievement Awards</li>
            <li>Film Industry Recognition</li>
            <li>Television Industry Recognition</li>
            <li>Broadway Show Commemoration</li>
            <li>Entertainment Industry Leadership Recognition</li>
            <li>Fan Club Membership Recognition</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
          
          </a>
        </div>
        
             
             }
                            //next 
        else if (title === 'Countries flags maps land marks challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Countries Flag, Maps, Landmarks Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Countries Flag, Maps, Landmarks Challenge Coin :</p>
          <ul>
            <li>National Flag Commemoration</li>
            <li>National Independence Day Celebration</li>
            <li>Landmark Iconography Recognition</li>
            <li>Famous Landmark Commemoration</li>
            <li>World Heritage Site Recognition</li>
            <li>National Park Commemoration</li>
            <li>Geographic Map Appreciation</li>
            <li>Topographical Map Recognition</li>
            <li>Cityscape Commemoration</li>
            <li>Historical Site Recognition</li>
            <li>Cultural Heritage Recognition</li>
            <li>Monument Commemoration</li>
            <li>Natural Wonder Appreciation</li>
            <li>Mountain Range Recognition</li>
            <li>Coastal Landscape Commemoration</li>
            <li>Island Nation Celebration</li>
            <li>River or Lake Appreciation</li>
            <li>Wildlife Reserve Recognition</li>
            <li>Boundary Marker Commemoration</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
          
          </a>
        </div>
        
             
             }


                                                     //next 
        else if (title === 'Canadian challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Canadian Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Canadian Challenge Coins :</p>
          <ul>
            <li>Canadian National Flag Commemoration</li>
            <li>Canada Day Celebration</li>
            <li>Canadian Armed Forces Recognition</li>
            <li>Royal Canadian Mounted Police (RCMP) Recognition</li>
            <li>Canadian Wildlife Appreciation</li>
            <li>Maple Leaf Symbolism Recognition</li>
            <li>Canadian Heritage Sites Commemoration</li>
            <li>Indigenous Peoples Recognition</li>
            <li>Canadian National Parks Commemoration</li>
            <li>Canadian Sports Achievement Awards</li>
            <li>Canadian Cultural Icons Recognition</li>
            <li>Canadian Military History Commemoration</li>
            <li>Canadian Immigration Recognition</li>
            <li>Canadian First Responder Recognition</li>
            <li>Canadian Multiculturalism Celebration</li>
            <li>Canadian Music and Arts Appreciation</li>
            <li>Canadian Arctic Sovereignty Recognition</li>
            <li>Canadian Environmental Conservation Efforts</li>
            <li>Canadian Unity and Diversity Celebration</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
        
             
             }
                                     //next 
        else if (title === 'Currencies and pure metal bars challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Currencies and Tokens, Pure Metal Bars Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Currencies and Tokens, Pure Metal Bars Challenge Coin:</p>
          <ul>
            <li>Currency Symbol Commemoration</li>
            <li>Gold Coin Appreciation</li>
            <li>Silver Coin Appreciation</li>
            <li>Bullion Bar Recognition</li>
            <li>Cryptocurrency Commemoration</li>
            <li>Numismatic Collectibles Appreciation</li>
            <li>Historic Coin Reproduction Commemoration</li>
            <li>Precious Metal Investment Recognition</li>
            <li>Commemorative Coin Sets</li>
            <li>Minting Excellence Awards</li>
            <li>Coin and Bar Design Appreciation</li>
            <li>Numismatic Society Recognition</li>
            <li>Metal Refining Industry Recognition</li>
            <li>Numismatic Education and Outreach</li>
            <li>Coin and Bar Manufacturing Excellence</li>
            <li>Coin Show Participation Recognition</li>
            <li>Metal Investment Strategy Mastery</li>
            <li>Rare Coin Collecting Achievement Awards</li>
            <li>Numismatic Trading Community Recognition</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
    }


                                     //next 
        else if (title === 'Coin remaster') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Coin Remaster" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Coin Remaster:</p>
          <ul>
            <li>Redesigned Coin Artwork</li>
            <li>Enhanced Details and Finishing</li>
            <li>Updated Text or Inscriptions</li>
            <li>Incorporation of New Logos or Symbols</li>
            <li>Improved Colorization or Enameling</li>
            <li>Modernization of Traditional Designs</li>
            <li>Incorporation of 3D Elements or Textures</li>
            <li>Integration of New Technological Features (e.g., QR codes)</li>
            <li>Reimagined Border Designs</li>
            <li>Addition of Personalized Elements</li>
            <li>Restoration of Vintage or Worn Coins</li>
            <li>Customization for Special Occasions or Anniversaries</li>
            <li>Adaptation for Different Metal Finishes (e.g., antique, silver, gold)</li>
            <li>Integration of Special Effects (e.g., glow-in-the-dark, holographic)</li>
            <li>Adaptation for Different Coin Sizes or Shapes</li>
            <li>Incorporation of Feedback from Coin Collectors or Users</li>
            <li>Collaboration with Original Coin Designer or Artist</li>
            <li>Preservation of Historical Integrity</li>
            <li>Application of Innovative Manufacturing Techniques</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
  


                                                                     //next 
        else if (title === 'Cyber security challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Cyber Security" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Cyber Security Challenge Coin:</p>
          <ul>
            <li>Cybersecurity Excellence Awards</li>
            <li>Incident Response Team Recognition</li>
            <li>Security Operations Center (SOC) Excellence</li>
            <li>Threat Intelligence Analysis Recognition</li>
            <li>Network Security Expertise Awards</li>
            <li>Encryption and Data Protection Commemoration</li>
            <li>Vulnerability Management Recognition</li>
            <li>Penetration Testing Achievement Awards</li>
            <li>Cyber Defense Competition Winners Commemoration</li>
            <li>Security Awareness Training Appreciation</li>
            <li>Cybersecurity Leadership Recognition</li>
            <li>Digital Forensics Excellence Awards</li>
            <li>Identity and Access Management (IAM) Achievement</li>
            <li>Security Policy Compliance Recognition</li>
            <li>Cybersecurity Innovation Commemoration</li>
            <li>Cyber Threat Hunting Achievement Awards</li>
            <li>Secure Software Development Recognition</li>
            <li>Cybersecurity Incident Management Excellence</li>
            <li>Cybersecurity Research and Development Appreciation</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
        
             
             }

                                             //next 
        else if (title === 'Crypto currencies tokens and NFT') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Crypto Currencies, Tokens, and NFT" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Crypto Currencies, Tokens, and NFT Challenge Coin:</p>
          <ul>
            <li>Crypto Pioneer Recognition</li>
            <li>NFT Artist Achievement Awards</li>
            <li>Blockchain Innovation Commemoration</li>
            <li>Crypto Investor Appreciation</li>
            <li>Decentralized Finance (DeFi) Excellence Awards</li>
            <li>Tokenization of Assets Recognition</li>
            <li>NFT Collection Showcase Commemoration</li>
            <li>Crypto Mining Achievement Awards</li>
            <li>Smart Contract Development Excellence</li>
            <li>Cryptocurrency Exchange Partnership Recognition</li>
            <li>NFT Gaming Achievement Awards</li>
            <li>Blockchain Technology Education Acknowledgment</li>
            <li>Crypto Community Leadership Recognition</li>
            <li>Tokenized Real Estate Investment Commemoration</li>
            <li>NFT Marketplace Innovation Awards</li>
            <li>Cryptocurrency Adoption Advocacy Recognition</li>
            <li>Crypto Wallet Security Excellence</li>
            <li>NFT Art Gallery Commemoration</li>
            <li>Blockchain Sustainability Initiatives Recognition</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
        
             
             }

                                             //next 
        else if (title === 'US custom and border protection challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="US Customs and Border Protection" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>US Customs and Border Protection Challenge Coins:</p>
          <ul>
            <li>CBP Officer Excellence Awards</li>
            <li>Border Patrol Agent Recognition</li>
            <li>CBP K9 Unit Commemoration</li>
            <li>Air and Marine Operations Achievement Awards</li>
            <li>CBP Field Operations Excellence</li>
            <li>Port of Entry Commemoration</li>
            <li>CBP Homeland Security Investigations Recognition</li>
            <li>Trade Enforcement Recognition</li>
            <li>Immigration Enforcement Excellence Awards</li>
            <li>Border Security Technology Innovation</li>
            <li>CBP Canine Enforcement Officer Recognition</li>
            <li>Border Security Partnership Commemoration</li>
            <li>CBP Intelligence and Analysis Recognition</li>
            <li>Anti-Terrorism Mission Achievement Awards</li>
            <li>CBP Interdiction Unit Commemoration</li>
            <li>CBP Officer of the Year Awards</li>
            <li>Border Security Training and Development Recognition</li>
            <li>CBP Diversity and Inclusion Commemoration</li>
            <li>CBP Leadership Excellence Awards</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }

                                                   //next 
        else if (title === 'Coin cards and packaging designs') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Coin Cards and Packaging Design" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Coin Cards and Packaging Design:</p>
          <p>I will design any kind of coin packaging and also provide printable files.</p>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                                                   //next 
        else if (title === 'Navy marine challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Navy Marine Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Navy Marine Challenge Coin:</p>
          <ul>
            <li>Sailor Excellence Awards</li>
            <li>Marine Corps Achievement Recognition</li>
            <li>Navy Ship Commemoration</li>
            <li>Marine Corps Unit Recognition</li>
            <li>Naval Aviation Achievement Awards</li>
            <li>Expeditionary Warfare Commemoration</li>
            <li>Fleet Marine Force (FMF) Recognition</li>
            <li>Naval Special Warfare (SEALs) Commemoration</li>
            <li>Amphibious Assault Recognition</li>
            <li>Naval Intelligence Excellence Awards</li>
            <li>Marine Security Guard (MSG) Recognition</li>
            <li>Naval Surface Warfare Commemoration</li>
            <li>Marine Corps Aviation Achievement Awards</li>
            <li>Submarine Service Recognition</li>
            <li>Naval Engineering Excellence Awards</li>
            <li>Marine Corps Drill Instructor (DI) Recognition</li>
            <li>Naval Medical Corps Commemoration</li>
            <li>Marine Corps Martial Arts Program (MCMAP) Achievement Awards</li>
            <li>Naval Reserve Component Recognition</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
          
          </a>
        </div>
        
             
             }
                                                   //next 
        else if (title === 'Air force challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Air Force Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Air Force Challenge Coins:</p>
          <ul>
            <li>Pilot Excellence Awards</li>
            <li>Aircrew Achievement Recognition</li>
            <li>Aircraft Commemoration</li>
            <li>Squadron Recognition</li>
            <li>Air Force Base Commemoration</li>
            <li>Air Mobility Command Achievement Awards</li>
            <li>Air Combat Command Recognition</li>
            <li>Space Force Commemoration</li>
            <li>Air Force Special Operations Command (AFSOC) Achievement Awards</li>
            <li>Air Education and Training Command Recognition</li>
            <li>Air Force Cyber Command Commemoration</li>
            <li>Air Force Materiel Command Achievement Awards</li>
            <li>Air Force Reserve Command Recognition</li>
            <li>Air Force Intelligence, Surveillance, and Reconnaissance (ISR) Commemoration</li>
            <li>Air Force Medical Service Achievement Awards</li>
            <li>Air Force Weather Commemoration</li>
            <li>Air Force Security Forces Recognition</li>
            <li>Air Force Nuclear Deterrence Operations Commemoration</li>
            <li>Air Force Honor Guard Achievement Awards</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
           
          </a>
        </div>
        
             
             }
                                                   //next 
        else if (title === 'Space force challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Space Force Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Space Force Challenge Coins:</p>
          <ul>
            <li>Space Mission Excellence Awards</li>
            <li>Space Operations Achievement Recognition</li>
            <li>Satellite Commemoration</li>
            <li>Space Launch Recognition</li>
            <li>Space Force Base Commemoration</li>
            <li>Space Operations Command Achievement Awards</li>
            <li>Space Systems Command Recognition</li>
            <li>Space Training and Readiness Command Commemoration</li>
            <li>Space Operations Support Command Achievement Awards</li>
            <li>Space Force Reserve Command Recognition</li>
            <li>Space Cyber Command Commemoration</li>
            <li>Space Logistics Command Achievement Awards</li>
            <li>Space Engineering and Acquisition Command Recognition</li>
            <li>Space Intelligence, Surveillance, and Reconnaissance (ISR) Commemoration</li>
            <li>Space Medical Service Achievement Awards</li>
            <li>Space Weather Commemoration</li>
            <li>Space Security Forces Recognition</li>
            <li>Space Nuclear Deterrence Operations Commemoration</li>
            <li>Space Honor Guard Achievement Awards</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
       
          </a>
        </div>
        
             
             }

                                                            //next 
        else if (title === 'Lapel pins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Lapel Pins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Lapel Pins:</p>
          <ul>
            <li>Corporate Logo Lapel Pins</li>
            <li>Employee Recognition Lapel Pins</li>
            <li>Service Anniversary Lapel Pins</li>
            <li>Leadership Lapel Pins</li>
            <li>Teamwork and Collaboration Lapel Pins</li>
            <li>Achievement and Excellence Lapel Pins</li>
            <li>Safety and Wellness Lapel Pins</li>
            <li>Volunteer and Charity Lapel Pins</li>
            <li>Event and Conference Lapel Pins</li>
            <li>Customized Name and Title Lapel Pins</li>
            <li>Membership and Affiliation Lapel Pins</li>
            <li>Academic Excellence Lapel Pins</li>
            <li>Military and Veteran Lapel Pins</li>
            <li>Sports Team and Fan Lapel Pins</li>
            <li>Religious and Spiritual Lapel Pins</li>
            <li>Patriotic and National Flag Lapel Pins</li>
            <li>Awareness and Support Ribbon Lapel Pins</li>
            <li>Cultural and Diversity Lapel Pins</li>
            <li>Souvenir and Travel Lapel Pins</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                                                   //next 
        else if (title === 'Medals') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Medals" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Medals:</p>
          <ul>
            <li>Military Service Medals</li>
            <li>Commemorative Event Medals</li>
            <li>Academic Achievement Medals</li>
            <li>Sports and Athletic Medals</li>
            <li>Volunteer and Community Service Medals</li>
            <li>Leadership and Excellence Medals</li>
            <li>Bravery and Valor Medals</li>
            <li>Humanitarian Service Medals</li>
            <li>Professional Achievement Medals</li>
            <li>Recognition and Appreciation Medals</li>
            <li>Longevity and Service Medals</li>
            <li>Special Event Participation Medals</li>
            <li>Cultural and Heritage Medals</li>
            <li>Arts and Performance Medals</li>
            <li>Science and Technology Achievement Medals</li>
            <li>Environmental Conservation Medals</li>
            <li>Medical and Healthcare Service Medals</li>
            <li>Emergency Response and Disaster Relief Medals</li>
            <li>Innovation and Entrepreneurship Medals</li>
            <li>Custom shapes</li>
            <li>Special events</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }

                                                            //next 
        else if (title === 'Bottle openers') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Bottle Openers" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Bottle Openers:</p>
          <ul>
            <li>Customized Logo Bottle Openers</li>
            <li>Promotional Bottle Openers</li>
            <li>Novelty and Fun Bottle Openers</li>
            <li>Keychain Bottle Openers</li>
            <li>Magnetic Bottle Openers</li>
            <li>Credit Card Bottle Openers</li>
            <li>Wall-Mounted Bottle Openers</li>
            <li>Bartender's Bottle Openers</li>
            <li>Multi-Tool Bottle Openers</li>
            <li>Personalized Bottle Openers</li>
            <li>Wedding and Party Favor Bottle Openers</li>
            <li>Engraved Bottle Openers</li>
            <li>Vintage Bottle Openers</li>
            <li>Stainless Steel Bottle Openers</li>
            <li>Aluminum Bottle Openers</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }
                                                   //next 
        else if (title === 'Transportation challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Transportation Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Transportation Challenge Coin:</p>
          <ul>
            <li>Aviation Excellence Awards</li>
            <li>Maritime Achievement Recognition</li>
            <li>Railway Commemoration</li>
            <li>Automotive Industry Recognition</li>
            <li>Public Transportation Appreciation</li>
            <li>Logistics and Supply Chain Achievement Awards</li>
            <li>Trucking and Freight Services Recognition</li>
            <li>Space Exploration Commemoration</li>
            <li>Bicycle and Pedestrian Safety Awareness</li>
            <li>Infrastructure Development Achievement Awards</li>
            <li>Aviation Safety Recognition</li>
            <li>Port Authority Commemoration</li>
            <li>Highway Patrol and Traffic Enforcement Appreciation</li>
            <li>Transit Worker Recognition</li>
            <li>Aviation Maintenance Excellence Awards</li>
            <li>Sustainable Transportation Commemoration</li>
            <li>Emergency Response and Rescue in Transportation</li>
            <li>Air Traffic Control Achievement Recognition</li>
            <li>Transportation Innovation and Technology Awards</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
        
             
             }

                                                               //next 
        else if (title === 'Highway petrol challenge coins') {
    
          content = <div>
          <div className="text-center">
            <img src={main1} alt="Highway Patrol Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
          </div>
          <br></br>
          <br></br>
          <p>Highway Patrol Challenge Coin:</p>
          <ul>
            <li>Patrol Officer Excellence Awards</li>
            <li>Highway Safety Achievement Recognition</li>
            <li>DUI Enforcement Commemoration</li>
            <li>Emergency Response Recognition</li>
            <li>K9 Unit Appreciation</li>
            <li>Motorcycle Unit Commemoration</li>
            <li>Traffic Accident Investigation Achievement Awards</li>
            <li>Community Outreach and Education Recognition</li>
            <li>Interagency Cooperation Commemoration</li>
            <li>Leadership and Supervision Excellence Awards</li>
            <li>Specialized Training Achievement Recognition</li>
            <li>Crime Prevention and Enforcement Commemoration</li>
            <li>Lifesaving Actions Recognition</li>
            <li>Commendation for Bravery and Valor</li>
            <li>Longevity and Service Awards</li>
            <li>Memorial Tribute Coins</li>
            <li>Public Safety Partnership Recognition</li>
            <li>Professional Development Commemoration</li>
            <li>Retirement Recognition</li>
          </ul>
          
          <p>Thank you!</p>
          <p>Best Regards: Ushan</p>
          <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
            
          </a>
        </div>
             }
        

             else if (title === 'Drug prevention challenge coins') {
    
              content = <div>
              <div className="text-center">
                <img src={main1} alt="Drug Prevention Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
              </div>
              <br></br>
              <br></br>
              <p>Drug Prevention Challenge Coins:</p>
              <ul>
                <li>Substance Abuse Prevention Excellence Awards</li>
                <li>Drug-Free Community Achievement Recognition</li>
                <li>School-Based Prevention Programs Commemoration</li>
                <li>Law Enforcement Partnership Appreciation</li>
                <li>Youth Outreach and Education Recognition</li>
                <li>Community Coalition Building Commemoration</li>
                <li>Treatment and Recovery Support Appreciation</li>
                <li>Prescription Drug Abuse Prevention Achievement Awards</li>
                <li>Workplace Drug Prevention Recognition</li>
                <li>Military Drug-Free Initiative Commemoration</li>
                <li>International Drug Control Cooperation Appreciation</li>
                <li>Public Health Approach to Drug Prevention Achievement Awards</li>
                <li>Drug-Free Workplace Certification Recognition</li>
                <li>Drug Enforcement Task Force Commemoration</li>
                <li>Prevention Through Sports and Recreation Appreciation</li>
                <li>Opioid Crisis Response Achievement Awards</li>
                <li>Media Campaigns for Drug Prevention Recognition</li>
                <li>Drug Education and Awareness Programs Commemoration</li>
                <li>Community Policing Strategies for Drug Prevention Appreciation</li>
              </ul>
              <p>Thank you!</p>
              <p>Best Regards: Ushan</p>
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                
              </a>
            </div>
                 }


                 else if (title === 'custom shapes pet tags and buckles pendants') {
    
              content =  <div>
              <div className="text-center">
                <img src={main1} alt="Custom Shapes, Pet Tags, and Buckles Pendants" style={{ maxWidth: '100%', maxHeight: '200px' }} />
              </div>
              <br></br>
              <br></br>
              <p>Custom Shapes, Pet Tags, and Buckles Pendants:</p>
              <ul>
                <li>Custom Shape Recognition Awards</li>
                <li>Personalized Pet Tags</li>
                <li>Custom Buckles Commemoration</li>
                <li>Novelty Shape Pendants</li>
                <li>Engraved Name Tags</li>
                <li>Logo Shaped Keychains</li>
                <li>Dog ID Tags</li>
                <li>Belt Buckle Accessories</li>
                <li>Heart Shaped Pendants</li>
                <li>Military Dog Tags</li>
                <li>Western Style Belt Buckles</li>
                <li>Custom Key Rings</li>
                <li>Bone Shaped Pet Tags</li>
                <li>Metal Belt Buckles</li>
                <li>Circle Shaped Pendants</li>
                <li>Pet Collar Tags</li>
                <li>Customized Belt Buckle Designs</li>
                <li>Square Shaped Pendants</li>
                <li>Cat ID Tags</li>
              </ul>
              <p>Thank you!</p>
              <p>Best Regards: Ushan</p>
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
               
              </a>
            </div>
                 }
     //next
                 

    else if (title === 'Mobile and online game challenge coins') {
    
      content = <div>
      <div className="text-center">
        <img src={main1} alt="Mobile and Online Game Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
      </div>
      <br />
      <br />
      <p>Mobile and Online Game Challenge Coins:</p>
      <ul>
        <li>Game Achievements Recognition</li>
        <li>Mobile Gaming Excellence Awards</li>
        <li>Online Gaming Community Commemoration</li>
        <li>Leaderboard Domination Appreciation</li>
        <li>Virtual Currency Rewards</li>
        <li>Guild or Clan Membership Recognition</li>
        <li>In-Game Item Customization Awards</li>
        <li>Tournament Victory Celebrations</li>
        <li>Character or Avatar Customization Commemoration</li>
        <li>Multiplayer Cooperation Recognition</li>
        <li>Single-Player Challenge Completion Awards</li>
        <li>High Score Achievements</li>
        <li>Online Gaming Platform Partnership Appreciation</li>
        <li>Streamer or Content Creator Support Recognition</li>
        <li>Gamer Community Engagement Commemoration</li>
        <li>Mobile Game Developer Appreciation Awards</li>
        <li>Online Gaming Event Participation Recognition</li>
        <li>Game Update or Expansion Celebration</li>
        <li>Virtual World Exploration Achievements</li>
        <li>Player Versus Player Victory Commemoration</li>
      </ul>
      <p>Thank you!</p>
      <p>Best Regards: Ushan</p>
      <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
        
      </a>
    </div>
  }

             //next
                 
             else if (title === 'African middle east and asian challenge coins') {
    
              content =    <div>
              <div className="text-center">
                <img src={main1} alt="African, Middle Eastern, and Asian Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
              </div>
              <br />
              <br />
              <p>African, Middle Eastern, and Asian Challenge Coins:</p>
              <ul>
                <li>Cultural Heritage Celebration</li>
                <li>Historical Landmark Commemoration</li>
                <li>Ethnic Diversity Recognition</li>
                <li>Peacekeeping Mission Appreciation</li>
                <li>Traditional Art and Craft Acknowledgment</li>
                <li>Humanitarian Aid and Relief Support</li>
                <li>Language and Literature Promotion</li>
                <li>Folklore and Mythology Tribute</li>
                <li>Religious Harmony Commemoration</li>
                <li>Economic Development Recognition</li>
                <li>Environmental Conservation Appreciation</li>
                <li>Intercontinental Trade and Commerce Promotion</li>
                <li>Diplomatic Relations Commemoration</li>
                <li>Education and Literacy Advancement</li>
                <li>Technological Innovation Recognition</li>
                <li>Healthcare Infrastructure Development</li>
                <li>Human Rights Advocacy</li>
                <li>International Cooperation Appreciation</li>
                <li>Gender Equality and Empowerment</li>
                <li>Regional Integration Recognition</li>
              </ul>
              <p>Thank you!</p>
              <p>Best Regards: Ushan</p>
              <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
             
              </a>
            </div>
                   
                 }
                     //next
                 
                     else if (title === 'Bomb disposal unit challenge coins') {
    
                      content = <div>
                      <div className="text-center">
                        <img src={main1} alt="Bomb Disposal Unit Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                      </div>
                      <br />
                      <br />
                      <p>Bomb Disposal Unit Challenge Coin:</p>
                      <ul>
                        <li>Explosive Ordnance Disposal (EOD) Excellence Awards</li>
                        <li>Improvised Explosive Device (IED) Recognition</li>
                        <li>Bomb Threat Response Commemoration</li>
                        <li>Counter-Terrorism Operations Appreciation</li>
                        <li>Hazardous Material (Hazmat) Incident Response Recognition</li>
                        <li>Advanced Bomb Disposal Training Achievement Awards</li>
                        <li>Robotics and Remote Handling Commemoration</li>
                        <li>Life-saving Actions in Explosive Situations Recognition</li>
                        <li>Unexploded Ordnance (UXO) Disposal Commemoration</li>
                        <li>Improvised Weapon Neutralization Awards</li>
                        <li>Community Safety and Education Recognition</li>
                        <li>International Cooperation in Explosive Threat Mitigation Awards</li>
                        <li>Leadership and Supervision Excellence Commemoration</li>
                        <li>Public Safety Partnership Recognition</li>
                        <li>Explosives Detection Canine Unit Appreciation</li>
                        <li>Technical Equipment Maintenance and Innovation Awards</li>
                        <li>Blast Scene Investigation and Reconstruction Commemoration</li>
                        <li>Post-Blast Forensic Analysis Excellence Recognition</li>
                        <li>Heroism and Valor in Defusing Dangerous Situations Awards</li>
                        <li>Longevity and Service in Bomb Disposal Operations Recognition</li>
                      </ul>
                      <p>Thank you!</p>
                      <p>Best Regards: Ushan</p>
                      <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                      
                      </a>
                    </div>
                    
                   
                         }
                             //next
                 
                 else if (title === 'Honor and Service Challenge Coins') {
    
                  content = <div>
                  <div className="text-center">
                    <img src={main1} alt="Honor and Service Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                  <br />
                  <br />
                  <p>Honor and Service Challenge Coins:</p>
                  <ul>
                    <li>Exemplary Service Awards</li>
                    <li>Dedication and Commitment Recognition</li>
                    <li>Leadership and Integrity Commemoration</li>
                    <li>Heroism and Valor Appreciation</li>
                    <li>Longevity and Tenure Recognition</li>
                    <li>Meritorious Acts Commemoration</li>
                    <li>Community Service Awards</li>
                    <li>Public Safety Partnership Recognition</li>
                    <li>Excellence in Duty Performance Appreciation</li>
                    <li>Special Recognition for Outstanding Contributions</li>
                    <li>Volunteer Service Awards</li>
                    <li>Military Service Commemoration</li>
                    <li>Law Enforcement Service Awards</li>
                    <li>Emergency Response Recognition</li>
                    <li>Service to Country Appreciation</li>
                    <li>Service Above Self Commemoration</li>
                    <li>Professionalism and Dedication Recognition</li>
                    <li>Teamwork and Collaboration Awards</li>
                    <li>Excellence in Public Service Appreciation</li>
                    <li>Commitment to Excellence Commemoration</li>
                  </ul>
                  <p>Thank you!</p>
                  <p>Best Regards: Ushan</p>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                    
                  </a>
                </div>
                
               
                     }
                         //next
                 
                 else if (title === 'Medals') {
    
                  content = <div>
                  <div className="text-center">
                    <img src={main1} alt="Medals" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                  <br />
                  <br />
                  <p>Medals:</p>
                  <ul>
                    <li>Military Service Medals</li>
                    <li>Civilian Service Medals</li>
                    <li>Commemorative Medals</li>
                    <li>Valor Medals</li>
                    <li>Achievement Medals</li>
                    <li>Long Service Medals</li>
                    <li>Sports and Athletic Medals</li>
                    <li>Academic Achievement Medals</li>
                    <li>Leadership Medals</li>
                    <li>Special Recognition Medals</li>
                    <li>Community Service Medals</li>
                    <li>Volunteer Service Medals</li>
                    <li>Honor Roll Medals</li>
                    <li>Merit Medals</li>
                    <li>Heroism Medals</li>
                    <li>Excellence Medals</li>
                    <li>Distinguished Service Medals</li>
                    <li>Humanitarian Service Medals</li>
                    <li>Bravery Medals</li>
                    <li>Professional Achievement Medals</li>
                  </ul>
                  <p>Thank you!</p>
                  <p>Best Regards: Ushan</p>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                   
                  </a>
                </div>
                
               
                     }
                         //next
                 
                 else if (title === 'Currency and Coin Restoration') {
    
                  content = <div>
                  <div className="text-center">
                    <img src={main1} alt="Currency and Coin Restoration" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                  <br />
                  <br />
                  <p>Currency and Coin Restoration:</p>
                  <p>Our currency and coin restoration services aim to preserve and restore historical banknotes, coins, and other forms of currency to their original condition. Whether it's removing stains, repairing tears, or enhancing faded prints, our experts utilize specialized techniques and tools to ensure the integrity and authenticity of each restored item.</p>
                  <p>Our restoration services cover a wide range of currencies, including paper money, coins, bonds, and more. We work with collectors, museums, and enthusiasts to breathe new life into treasured artifacts, allowing them to be enjoyed for generations to come.</p>
                  <p>Thank you!</p>
                  <p>Best Regards: Ushan</p>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                    
                  </a>
                </div>
                
               
                     }
                         //next
                 
                 else if (title === 'Workplace and Office Challenge Coins') {
    
                  content = <div>
                  <div className="text-center">
                    <img src={main1} alt="Workplace and Office Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                  <br />
                  <br />
                  <p>Workplace and Office Challenge Coins:</p>
                  <ul>
                    <li>Employee of the Month Recognition</li>
                    <li>Teamwork Awards</li>
                    <li>Leadership Recognition</li>
                    <li>Innovation Awards</li>
                    <li>Customer Service Excellence Awards</li>
                    <li>Professional Development Recognition</li>
                    <li>Project Completion Awards</li>
                    <li>Performance Excellence Awards</li>
                    <li>Employee Appreciation Coins</li>
                    <li>Years of Service Awards</li>
                    <li>Goal Achievement Recognition</li>
                    <li>Safety Awards</li>
                    <li>Quality Assurance Awards</li>
                    <li>Employee Wellness Recognition</li>
                    <li>Training and Development Awards</li>
                    <li>Workplace Diversity Recognition</li>
                    <li>Work-Life Balance Awards</li>
                    <li>Office Environment Awards</li>
                    <li>Customer Satisfaction Awards</li>
                    <li>Corporate Social Responsibility Recognition</li>
                  </ul>
                  <p>Thank you!</p>
                  <p>Best Regards: Ushan</p>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                    
                  </a>
                </div>
                
               
                     }
                         //next
                 
                 else if (title === 'Custom Laser Engraving Challenge Coins') {
    
                  content = <div>
                  <div className="text-center">
                    <img src={main1} alt="Custom Laser Engraving Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                  <br />
                  <br />
                  <p>Custom Laser Engraving Challenge Coin:</p>
                  <ul>
                    <li>Personalized Engraved Coins</li>
                    <li>Customized Design Engraving</li>
                    <li>Photo Engraved Coins</li>
                    <li>Text Engraving</li>
                    <li>Logo Engraved Coins</li>
                    <li>Signature Engraving</li>
                    <li>Date Engraving</li>
                    <li>Special Message Engraving</li>
                    <li>Symbol Engraving</li>
                    <li>Name Engraving</li>
                    <li>Custom Artwork Engraving</li>
                    <li>Serial Number Engraving</li>
                    <li>Barcode Engraving</li>
                    <li>QR Code Engraving</li>
                    <li>Geometric Pattern Engraving</li>
                    <li>Monogram Engraving</li>
                    <li>Initial Engraving</li>
                    <li>Motivational Quote Engraving</li>
                    <li>Memorial Engraving</li>
                    <li>Special Occasion Engraving</li>
                  </ul>
                  <p>Thank you!</p>
                  <p>Best Regards: Ushan</p>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                   
                  </a>
                </div>
                
               
                     }

                         //next
                 
                 else if (title === 'Environmental and Nature Challenge Coins') {
    
                  content = <div>
                  <div className="text-center">
                    <img src={main1} alt="Environmental and Nature Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                  <br />
                  <br />
                  <p>Environmental and Nature Challenge Coins:</p>
                  <ul>
                    <li>Wildlife Conservation Coins</li>
                    <li>Environmental Protection Coins</li>
                    <li>Climate Change Awareness Coins</li>
                    <li>Tree Planting Challenge Coins</li>
                    <li>Ocean Cleanup Challenge Coins</li>
                    <li>Ecotourism Promotion Coins</li>
                    <li>Green Energy Coins</li>
                    <li>Recycling Initiative Coins</li>
                    <li>Sustainable Development Coins</li>
                    <li>Water Conservation Coins</li>
                    <li>Biodiversity Preservation Coins</li>
                    <li>Natural Habitat Restoration Coins</li>
                    <li>Earth Day Celebration Coins</li>
                    <li>Environmental Education Coins</li>
                    <li>Forest Preservation Coins</li>
                    <li>Endangered Species Protection Coins</li>
                    <li>Community Garden Coins</li>
                    <li>Outdoor Adventure Coins</li>
                    <li>Litter Prevention Coins</li>
                    <li>Green Technology Innovation Coins</li>
                  </ul>
                  <p>Thank you!</p>
                  <p>Best Regards: Ushan</p>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                    
                  </a>
                </div>
                
               
                     }

                                    //next
                 
                 else if (title === 'Aviation Support Challenge Coins') {
    
                  content = <div>
                  <div className="text-center">
                    <img src={main1} alt="Aviation Support Challenge Coin" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                  <br />
                  <br />
                  <p>Aviation Support Challenge Coin:</p>
                  <ul>
                    <li>Pilot Achievement Coins</li>
                    <li>Flight Crew Challenge Coins</li>
                    <li>Aircraft Maintenance Coins</li>
                    <li>Air Traffic Control Challenge Coins</li>
                    <li>Aerospace Engineering Coins</li>
                    <li>Aviation Safety Challenge Coins</li>
                    <li>Ground Support Challenge Coins</li>
                    <li>Flight Training Coins</li>
                    <li>Aviation Medicine Coins</li>
                    <li>Search and Rescue Challenge Coins</li>
                    <li>Aerial Firefighting Coins</li>
                    <li>Flight Test Challenge Coins</li>
                    <li>Airport Operations Coins</li>
                    <li>Aviation Logistics Challenge Coins</li>
                    <li>Airline Operations Coins</li>
                    <li>Aviation Security Challenge Coins</li>
                    <li>Flight Planning Challenge Coins</li>
                    <li>Air Ambulance Challenge Coins</li>
                    <li>Aviation Weather Coins</li>
                    <li>Airfield Management Challenge Coins</li>
                  </ul>
                  <p>Thank you!</p>
                  <p>Best Regards: Ushan</p>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                  
                  </a>
                </div>
                
               
                     }


                                    //next
                 
                 else if (title === 'Harbor and Coast Guard Challenge Coins') {
    
                  content = <div>
                  <div className="text-center">
                    <img src={main1} alt="Harbor and Coast Guard Challenge Coins" style={{ maxWidth: '100%', maxHeight: '200px' }} />
                  </div>
                  <br />
                  <br />
                  <p>Harbor and Coast Guard Challenge Coins:</p>
                  <ul>
                    <li>Search and Rescue Challenge Coins</li>
                    <li>Marine Safety Challenge Coins</li>
                    <li>Port Security Challenge Coins</li>
                    <li>Law Enforcement at Sea Coins</li>
                    <li>Maritime Patrol Challenge Coins</li>
                    <li>Marine Environmental Protection Coins</li>
                    <li>Navigation and Aids to Navigation Coins</li>
                    <li>Coastal Defense Challenge Coins</li>
                    <li>Marine Inspection Challenge Coins</li>
                    <li>Waterway Management Challenge Coins</li>
                    <li>Port Operations Challenge Coins</li>
                    <li>Marine Law Enforcement Coins</li>
                    <li>Port Authority Challenge Coins</li>
                    <li>Harbor Pilot Challenge Coins</li>
                    <li>Maritime Border Protection Coins</li>
                    <li>Marine Research Challenge Coins</li>
                    <li>Harbor Security Challenge Coins</li>
                    <li>Maritime Emergency Response Coins</li>
                    <li>Maritime Surveillance Challenge Coins</li>
                    <li>Coastal Monitoring Challenge Coins</li>
                  </ul>
                  <p>Thank you!</p>
                  <p>Best Regards: Ushan</p>
                  <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                   
                  </a>
                </div>
                
               
                     }





    setModalContent({ title, content });
    setModalShow(true);
  };

  const handleOrderNow = () => {
    setModalShow(false);
    setFormModalShow(true);
  };

  const cardData = [
    { title: 'Fire Department challenge coins', content: 'Details about Fire Department challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic1},
    { title: '3d modeling and cad designing', content: 'Details about 3d modeling and cad designing', link: 'https://www.pinterest.com/dinithaushan/',video: pic2 },
    { title: 'AI prompt challenge coins', content: 'Details about AI prompt challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic3 },
    { title: 'First Responders challenge coins', content: 'Details about First Responders challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic4},
    { title: 'Disaster management challenge coins', content: 'Details about Disaster management challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic5 },
    { title: 'Security and field officers challenge coins', content: 'Details about security , field officers challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic6 },
    { title: 'Law enforcement challenge coins', content: 'Details about law enforcement challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic7 },
    { title: 'Pirates and ships challenge coins', content: 'Details about pirates and ships challenge coins', link: 'https://www.pinterest.com/dinithaushan/',video: pic8 },
    { title: 'Special OPS challenge coins', content: 'Details about Special OPS challenge coins', link: 'https://www.pinterest.com/dinithaushan/',video: pic9},
    { title: 'EOD challenge coins', content: 'Details about EOD challenge coins', link: 'https://www.pinterest.com/dinithaushan/',video: pic10 },
    { title: 'Medical services challenge coins', content: 'Details about Medical services challenge coin', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic11},
    { title: 'EMS challenge coins', content: 'Details about EMS challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic12},
    { title: 'Rescue support team , team corps challenge coins', content: 'Details about Rescue support team , team corps challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic13 },
    { title: 'Sober challenge coins', content: 'Details about Sober Challenge Coin', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic14},
    { title: 'Charity and volunteer challenge coins', content: 'Details about Charity and volunteer challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic15 },
    { title: 'Religious challenge coins', content: 'Details about religious challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic16},
    { title: 'PRESENCE for excellence and military challenge coins', content: 'Details about PRESENCE for excellence and military challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic17 },
    { title: 'Commemorative and celebrations challenge coins', content: 'Details about Commemorative and celebrations challenge coin', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic18},
    { title: 'Personal and gifts challenge coins', content: 'Details about personal and gifts challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic19 },
    { title: 'Business companies challenge coins', content: 'Details about Business companies challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic20 },
    { title: 'Sports and games challenge coins', content: 'Details about Sports and games challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic21 },
    { title: 'Poker chip playing cards coins', content: 'Details about poker chip playing cards coin', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic22},
    { title: 'Music and entertainment challenge coins', content: 'Details about music and entertainment challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic23 },
    { title: 'Countries flags maps land marks challenge coins', content: 'countries flags maps land marks challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic24 },
    { title: 'Canadian challenge coins', content: 'Canadian challenge coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic25},
    { title: 'Currencies and pure metal bars challenge coins', content: 'Details about Currencies and pure metal bars challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic26 },
    { title: 'Coin remaster', content: 'Details about coin remaster', link: 'https://www.pinterest.com/dinithaushan/',video: pic27 },
    { title: 'Cyber security challenge coins', content: 'Details about Cyber security challenge coin', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic28},
    { title: 'Crypto currencies tokens and NFT', content: 'Details about crypto currencies tokens and NFT', link: 'https://www.pinterest.com/dinithaushan/',video: pic29},
    { title: 'US custom and border protection challenge coins', content: 'US custom and border protection challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic30 },
    { title: 'Coin cards and packaging designs', content: 'Details about Coin cards and packaging design', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic31},
    { title: 'Navy marine challenge coins', content: 'navy marine challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic32 },
    { title: 'Air force challenge coins', content: 'Details about air force challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic33 },
    { title: 'Space force challenge coins', content: 'Details about space force challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic34 },
    { title: 'Lapel pins', content: 'Details about lapel pins', link: 'https://www.pinterest.com/dinithaushan/',video: pic35 },
    { title: 'Bottle openers', content: 'Details about bottle openers', link: 'https://www.pinterest.com/dinithaushan/',video: pic36 },
    { title: 'Transportation challenge coins', content: 'Details about transportation challenge coin', link: 'https://www.pinterest.com/dinithaushan/',video: pic37 },
    { title: 'Highway petrol challenge coins', content: 'Details about highway petrol challenge coin', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic38},
    { title: 'Drug prevention challenge coins', content: 'Details about Drug prevention challenge coin', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic39},
    { title: 'custom shapes pet tags and buckles pendants', content: 'custom shapes pet tags and buckles pendants', link: 'https://www.pinterest.com/dinithaushan/', video: pic40 },   
    { title: 'Mobile and online game challenge coins', content: 'Details about Mobile and online game challenge coin', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic41},
    { title: 'African middle east and asian challenge coins', content: 'Details about African middle east asian challenge coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic42},
    { title: 'Bomb disposal unit challenge coins', content: 'Details about Bomb disposal unit challenge coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic43},
    { title: 'Honor and Service Challenge Coins', content: 'Details about Honor and Service Challenge Coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic44},
    { title: 'Medals', content: 'Details about Medals', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic45},
    { title: 'Currency and Coin Restoration', content: 'Details about Currency and Coin Restoration', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic46},
    { title: 'Workplace and Office Challenge Coins', content: 'Details about Workplace and Office Challenge Coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic47},
    { title: 'Custom Laser Engraving Challenge Coins', content: 'Details about Custom Laser Engraving Challenge Coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic48},
    { title: 'Environmental and Nature Challenge Coins', content: 'Details about Environmental and Nature Challenge Coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic49},
    { title: 'Aviation Support Challenge Coins', content: 'Details about Aviation Support Challenge Coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic50},
    { title: 'Harbor and Coast Guard Challenge Coins', content: 'Details about Harbor and Coast Guard Challenge Coins', link: 'https://www.pinterest.com/dinithaushan/' ,video: pic51},

  
  
  
  
  ];

  return (
    <Container className="mt-5 pt-2 mb-5">
      <h2 className='text-center mb-4' style={{ fontSize: '2.6rem', fontWeight: 'bold', color: '#333' }}>Check this out</h2>
      <Row className="gx-3 ms-5 ps-lg-1">
        {cardData.map((item, index) => (
          <Col lg={4} md={6} key={index}>
            <Card
              className={`rounded-0 text-center ms-0 mb-3 mx-auto d-flex mt-5 card-lg `}
              style={{
                width: '80%',
                height: 'auto',
                textAlign: 'left',
                marginTop: '10px',
                transition: 'transform 0.3s',
                borderColor: 'gray',
                borderWidth: '3px',
                borderStyle: 'solid',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
            >
              {item.video && (
                <div>
                  {!videoLoaded && (
                    <div className="loading-spinner">
                          {!videoLoaded && (
                <div className="loading-spinner">
                  <div className="spinner"></div>
                </div>
              )}
                      Loading...
                    </div>
                  )}

                  <video
                    className={`img-fluid mt-1 ${videoLoaded ? 'show' : 'hide'}`}
                    style={{
                      width: '96%',
                      height: '96%',
                      marginLeft: 'auto',
                      marginRight: 'auto',
                      display: 'block'
                    }}
                    autoPlay
                    loop
                    muted
                    onLoadedData={handleVideoLoaded}
                  >
                    <source src={item.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}
              <Card.Body className="">
                <Card.Title>{item.title}</Card.Title>
                <Button
                  className="mt-1 border-0 btn"
                  style={{
                    width: "100%",
                    minWidth: "120px",
                    backgroundColor: "#0e1e41",
                    marginRight: "10px",
                    transition: "background-color 0.3s ease", // Smooth transition for hover effect
                  }}
                  variant="primary"
                  onClick={() => handleShowModal(item.title)}
                  // Hover effect styles
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#143a66"} // Lighter shade of blue
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#0e1e41"} // Original background color
                >
                  Read more
                </Button>
                {item.link && <Button className="mt-3 border-0" variant="primary" href={item.link} target="_blank"
                  style={{
                    fontFamily: 'Pacifico, cursive', // Apply Pacifico font
                    backgroundColor: '#e5202b',
                    width: '100%',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease', // Smooth transition for hover effect
                  }}
                  // Hover effect styles
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#ff5959'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#e5202b'}>More Samples</Button>}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={modalContent.title}
        content={modalContent.content}
        handleOrderNow={handleOrderNow}
      />
      <Modal show={formModalShow} onHide={() => setFormModalShow(false)} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Order Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormContent />
        </Modal.Body>
      </Modal>
    </Container>
  );
};



export default LogoContent;
