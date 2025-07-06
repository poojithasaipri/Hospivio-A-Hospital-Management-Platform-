import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.png'
import Gastroenterologist from './Gastroenterologist.png'
import General_physician from './General_physician.png'
import Gynecologist from './Gynecologist.png'
import Neurologist from './Neurologist.png'
import Pediatricians from './Pediatricians.png'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Aryan Mehta',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Experienced in preventive care and chronic illness management.',
        fees: 400,
        address: {
           line1: 'Jubilee Hills',
           line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc2',
        name: 'Dr. Sneha Kapoor',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Specialist in PCOS, prenatal support, and postpartum recovery.',
        fees: 500,
        address: {
           line1: 'Banjara Hills',
           line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc3',
        name: 'Dr. Kavya Reddy',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
       about: 'Helps treat acne, pigmentation, and skin sensitivity issues.',
        fees: 350,
       address: {
           line1: 'Kondapur',
            line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc4',
         name: 'Dr. Arjun Nair',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
         about: 'Provides vaccinations, growth tracking, and child nutrition advice.',
        fees: 450,
          address: {
          line1: 'Madhapur',
         line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc5',
        name: 'Dr. Rhea Thomas',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Manages migraines, epilepsy, and motor coordination issues.',
        fees: 600,
        address: {
       line1: 'Banjara Hills',
       line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc6',
       name: 'Dr. Yash Khanna',
        image: doc6,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
       about: 'Expert in Parkinson’s, stroke recovery, and nerve disorders.',
        fees: 700,
          address: {
           line1: 'Gachibowli',
           line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc7',
         name: 'Dr. Priya Verma',
        image: doc7,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Works on lifestyle diseases and preventive health screenings.',
        fees: 500,
        address: {
        line1: 'Begumpet',
        line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc8',
        name: 'Dr. Rishi Malhotra',
        image: doc8,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
         about: 'Cares for hormonal balance, infertility, and gynec surgeries.',
        fees: 520,
        address: {
         line1: 'Dilsukhnagar',
         line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc9',
        name: 'Dr. Anjali Desai',
        image: doc9,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Expert in laser therapy and treating chronic skin conditions.',
        fees: 390,
        address: {
  line1: 'Tarnaka',
  line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc10',
       name: 'Dr. Manav Rao',
        image: doc10,
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Loves working with kids, managing fevers, and child development.',
        fees: 430,
        address: {
  line1: 'LB Nagar',
  line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc11',
        name: 'Dr. Tara Joshi',
        image: doc11,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Passionate about neuroplasticity and cognitive therapy.',
        fees: 650,
        address: {
  line1: 'Manikonda',
  line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc12',
         name: 'Dr. Arvind Bansal',
        image: doc12,
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Focuses on neural rehabilitation and memory care.',
        fees: 600,
        address: {
  line1: 'Secunderabad',
  line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc13',
       name: 'Dr. Meera Shah',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Advocates preventive medicine and digital health tracking.',
        fees: 420,
        address: {
  line1: 'Hitech City',
  line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc14',
        name: 'Dr. Rahul Menon',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
      about: 'Handles labor delivery, menopause, and high-risk pregnancies.',
        fees: 550,
        address: {
  line1: 'Gachibowli',
  line2: 'Hyderabad, Telangana'
}

    },
    {
        _id: 'doc15',
        name: 'Dr. Nisha Kapoor',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
       about: 'Specialist in cosmetic treatments and sensitive skin care.',
        fees: 370,
        address: {
  line1: 'Jubilee Hills',
  line2: 'Hyderabad, Telangana'
}

    },
]